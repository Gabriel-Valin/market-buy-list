import React, { ReactNode, useEffect, useState } from 'react';

interface IProps {
  children: React.ReactElement;
}

export interface Product {
  id: string;
  product: string;
  qty: number;
  price: number;
}

type ContextProps = {
    children: ReactNode
}


export interface ProductsContext {
  products: Product[];
  addProduct(product: Product): void;
  removeProduct(id: string): void;
  sumItems(): number
}

const tasksData = '@MyTasks:Tasks';

export const ProductsContext = React.createContext<ProductsContext>(
  {} as ProductsContext,
);

export const ProductsProvider = ({children}: ContextProps) => {
  const [data, setData] = React.useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const productsList = localStorage.getItem(tasksData);

      if (productsList) {
        setData(JSON.parse(productsList));
      }
    }

    loadProducts();
  }, []);

  const sumItems = () => data.reduce((acc, item) => acc + (Number(item.price) * item.qty), 0)

  const addProduct = async (product: Product) => {
    try {
      const newProductList = [...data, product];
      setData(newProductList);
      localStorage.setItem(tasksData, JSON.stringify(newProductList));
    } catch (error) {
      throw new Error(error as string);
    }
  };

  const removeProduct = async (id: string) => {
    console.log(id)
    const newProductList = data.filter(task => task.id !== id);
    setData(newProductList);
    localStorage.setItem(tasksData, JSON.stringify(newProductList));
  };

  return (
    <ProductsContext.Provider value={{ products: data, addProduct, removeProduct, sumItems }}>
      {children}
    </ProductsContext.Provider>
  );
};

export function useProductList(): ProductsContext {
  const context = React.useContext(ProductsContext);

  if (!context) {
    throw new Error('useProductList deve ser usado em um ProductsProvider');
  }

  return context;
}
