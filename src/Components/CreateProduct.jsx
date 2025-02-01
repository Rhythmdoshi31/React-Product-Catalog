import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import { Bounce, toast } from 'react-toastify';

function CreateProduct() {
    const navigate = useNavigate();

    const [products, setproducts] = useContext(ProductContext);

    const {register, handleSubmit, reset} = useForm();
    const onSubmit = (data) => {        
        if (data.title.length == 0 || data.category.length == 0 || data.price.length == 0 || data.description.length == 0) {
            toast.warn("Please add data to all the fields.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
            return;
        };
        const newProduct = {...data, id: products.length + 1};
        setproducts([...products, newProduct]);
        reset();
        navigate('/');
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='h-full w-[70%] justify-between m-auto p-[12%]'>
        <h1 className='text-white text-3xl font-semibold'>Add New Product</h1>
        <input {...register('image')} className='bg-zinc-200 w-[90%] rounded px-3 py-2 mt-3' type="url" placeholder='Image url' />
        <input {...register('title')} className='bg-zinc-200 w-[90%] rounded px-3 py-2 mt-3' type="text" placeholder='Title' />
        <div className='flex gap-5'>
            <input {...register('category')} className='bg-zinc-200 w-[42%] rounded px-3 py-2 mt-3' type="text" placeholder='Category' />
            <input {...register('price')} className='bg-zinc-200 w-[45%] rounded px-3 py-2 mt-3' type="number" placeholder='Price' />
        </div>
        <input {...register('description')} className='bg-zinc-200 w-[90%] rounded px-3 py-2 mt-3' type="text" placeholder='Enter Product Description Here..' />
        <div className='gap-4 flex mt-5'>
        <input className='text-[#ffd60a] px-6 py-2 border rounded border-[#ffc300] rounded-lg text-sm font-semibold' type="submit" placeholder='Add Product'/>
        <button onClick={() => navigate(-1)} className='text-[#ffd60a] px-6 py-2 border rounded border-[#ffc300] rounded-lg text-sm font-semibold' type='button'>Go Back</button>
        </div>
    </form>
  )
}

export default CreateProduct