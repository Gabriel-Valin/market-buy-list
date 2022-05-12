import { useEffect, useState } from "react"
import { useProductList } from "../hooks/useProducts"
import { SubmitHandler, useForm, FormProvider, Control } from "react-hook-form";
import { uuid } from 'uuidv4';
import { currencyFormat } from "../services/currency-format";

interface IFormInput {
  id: string;
  product: string;
  qty: number;
  price: number;
}

export const NewProductButton = () => {
  const { register, handleSubmit, setValue } = useForm<IFormInput>({mode: 'onChange'});
  const { addProduct, sumItems } = useProductList();

  
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(sumItems)
  }, [sumItems])

  const handleAddNewTask: SubmitHandler<IFormInput> = data => {
    addProduct({ ...data, id: uuid(), price: data.price / 100});
    setValue('product', '')
    setValue('price', 0)
    setValue('qty', 0)
  };

  return (
      <form className="mt-8" onSubmit={handleSubmit(handleAddNewTask)} action="">
        <div className="flex justify-between items-center gap-4">
          <div className="form-group mb-6 w-48">
            <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Produto</label>
            <input {...register('product', { required: true })}
              type="text" className="form-control
              block
              w-full
              px-3
              py-1.5
              text-sm
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-green-400 focus:outline-none" id="exampleInputEmail2"
              aria-describedby="emailHelp" placeholder="Arroz" />
          </div>
          <div className="form-group mb-6 flex-auto w-24">
            <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Preço</label>
          <input
              {...register('price', { required: true,  min: 0 })} type="number" className="form-control
              block
              w-full
              px-3
              py-1.5
              text-sm
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-green-400 focus:outline-none" id="exampleInputEmail2"
              aria-describedby="emailHelp" placeholder="R$ 103,40" />
          </div>
          <div className="form-group mb-6 flex-auto w-12">
            <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Qtd/Peso</label>
            <input {...register('qty', { required: true, valueAsNumber: true, min: 0 })} type="number" className="form-control
              block
              w-full
              px-3
              py-1.5
              text-sm
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-green-400 focus:outline-none" id="exampleInputEmail2"
              aria-describedby="emailHelp" placeholder="3" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <input type="submit" className="bg-green-400 p-2 rounded text-white text-sm font-bold w-32" value="NOVO PRODUTO" />
          <p className="text-xl font-bold"> <strong className="text-blue-400">Total: </strong>{currencyFormat(total)}</p>
        </div>
      </form>
  )
}