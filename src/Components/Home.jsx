import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'
import instance from '../utils/axios'

export default function () {

  const [products] = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]); // Initially saare products hai (since no filter).

  const {search} = useLocation();  // Hook to get search param of URL.
  const params = new URLSearchParams(search);
  const category = params.get("category");


  const getCategory = async () => { // URL se category dekh ke uss category wale API pe jaa rhe hai data lane.
    try {
        const {data} = await instance.get(`/products/category?type=${category}`);
        setFilteredProducts(data.products);
    } catch (error) {
        console.error(error);
    }
  };
  useEffect(() => {
    if (category) getCategory();
    else setFilteredProducts(products); // Everytime category is not there or category is removed, state will be updated.
  }, [category, products]);

  return products.length !== 0 ? (
    <>
        <Nav />

        <div className='w-[82%] p-10 flex flex-wrap overflow-x-hidden overflow-y-auto'>
            {filteredProducts.map((p, i) => (
                <Link key={i} to={`/details/${p.id}`} className='card h-[35%] w-[22%] bg-[#003566] flex flex-col justify-items-start items-center rounded-md mb-5 mr-5'>
                    <div className='hover:scale-108 ease-in-out duration-100 w-full bg-white h-[62%] rounded mb-1'>
                        <img className="w-full h-full object-contain mb-3" src={p.image} alt="" />
                    </div>
                    <div className='w-full p-2'>
                        <h1 className='text-sm text-white font-semibold line-clamp-2 mb-1'>{p.title}</h1>
                        <h1 className='text-[#ffd60a]'>$ {p.price}</h1>
                    </div>
                </Link>
            ))}
        </div>

    </>
    ) : (<Loading />)
}
