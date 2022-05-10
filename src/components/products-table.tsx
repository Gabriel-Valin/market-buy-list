import { useProductList } from "../hooks/useProducts"
import { currencyFormat } from "../services/currency-format"

export const ProductsTable = () => {
  const { products, removeProduct } = useProductList()

  return (
    <>
      {products.length === 0 && (
        <div className="flex flex-col justify-center items-center mt-8 mb-12">
          <img className="h-12 w-12" src="/buy-car.png" alt="" />
          <p className="text-md text-center">Cadastre produtos e comece a montar sua lista de compras!</p>
      </div>
    )}
      
    {products.length > 0 && (
      <div className="flex justify-center mt-2 border max-h-80 overflow-y-scroll">
        <table className="min-w-full">
          <thead className="sticky top-0 text-white bg-green-400">
            <tr className="text-left">
              <th className="px-4">Produto</th>
              <th>Qtd/Peso</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {!!products && (
              products.map((item) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <tr className="border-b">
                  <td className="px-4"><button onClick={() => removeProduct(item.id)}>{item.product}</button></td>
                  <td className="text-center">{item.qty}</td>
                  <td>{currencyFormat(item.qty * item.price)}</td>
                </tr>
              )
            })
            )}
          </tbody>
        </table>
      </div>
    )}
    </>
  )
}
