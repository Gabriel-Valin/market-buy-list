import { useEffect, useState } from "react"
import { MakePDFButton } from "./btn-make-pdf"
import { NewProductButton } from "./btn-new-product"
import { MaxValueInput } from "./max-value-input"
import { ProductsTable } from "./products-table"
import { Title } from "./title"
import { Values } from "./values"
import { useProductList } from "../hooks/useProducts"

export const ContainerColumn = () => {
  const { products } = useProductList()

  return (
    <div className="container justify-center p-4 flex flex-col max-w-full">
      <Title />
      <NewProductButton />
      <ProductsTable />
      <Values />
      {/* {products.length > 0 && (
        <MakePDFButton />
      )} */}
    </div>
  )
}