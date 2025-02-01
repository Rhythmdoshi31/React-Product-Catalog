import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import instance from '../utils/axios'
import Loading from './Loading';
import { Bounce, ToastContainer, toast } from 'react-toastify';
function Details() {
    const {id} = useParams();
    const [product, setproduct] = useState([]);

    const navigate = useNavigate();

    const getSingleProduct = async () => {
        try {
            const data = await instance.get(`/products/${id}`);
            setproduct(data.data.product);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getSingleProduct();
    }, [])

    const handleEditandDelete = () => {
        toast.warn("Couldn't process the request as of now.", {
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
    }

  return product.length !== 0 ? (
    <div className='h-full w-[90%] flex justify-between m-auto p-[12%] text-white'>
        <div className='h-[82%] w-[40%]'>
            <img className='object-contain w-full h-[90%] mt-2' src={product.image} alt="" />
            <button onClick={() => navigate(-1)} className="hover:scale-110 duration-100 ease-in-out text-[#ffd60a] px-4 ml-6 mt-5 py-2 border rounded border-[#ffc300] rounded-lg text-sm font-semibold">Go back</button>
        </div>
        <div className='content w-[55%]'>
            <h1 className='text-3xl'>{product.title}</h1>
            <h3 className='mt-4 mb-3 text-[#edf2f4]'>{product.category}</h3>
            <h2 className='mb-3 text-[#ffd60a] text-xl'>$ {product.price}</h2>
            <p className='text-sm mb-5'>{product.description}</p>
            <Link onClick={handleEditandDelete} className="text-[#ffd60a] px-4 py-2 border rounded border-[#ffc300] rounded-lg text-sm font-semibold">Edit</Link>
            <Link onClick={handleEditandDelete} className="text-[#ffd60a] px-4 ml-2 py-2 border rounded border-[#ffc300] rounded-lg text-sm font-semibold">Delete</Link>
        </div>
    </div>
    ) : <Loading />
}

export default Details