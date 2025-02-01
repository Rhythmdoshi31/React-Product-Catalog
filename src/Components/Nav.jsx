import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context';
import { Link, useLocation } from 'react-router-dom';

function Nav() {

  const [products] = useContext(ProductContext);
  let categories = products.map(p => p.category);
  categories = [...new Set(categories)]; // Distinct categories.

  const {search} = useLocation();   // Did this just for when to show Home button.
  const params = new URLSearchParams(search);
  const category = params.get("category");

  const color = () => { // Generating random color.
    return `rgba(${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, 0.9)`
  };

  return (
    <>
    <nav className="w-[18%] h-full bg-[#1d2d44] p-5 flex flex-col items-center">
        <Link className="px-3 py-2 bg-[#ffc300] rounded-lg font-semibold" to="/CreateProduct">Add New Product</Link>
        <hr className='my-4 w-[90%] text-[#3e5c76]'/>
        <h1 className='text-2xl w-[90%] text-white mb-6'>Category Filter</h1>
        <div className='w-[80%] text-white'>
          {categories.map((c, i) =>
            <Link key={i} to={`/?category=${c}`} className='mb-3 flex items-center gap-3'><span style={{ backgroundColor: color() }} className='w-[1.6vh] h-[1.6vh] rounded-full'></span>{c}</Link>)}
        </div>
        {category ? <Link to="/" className='px-3 py-2 text-[#ffd60a] border rounded border-[#ffc300] rounded-lg text-sm font-semibold'>Home</Link> : ""}
    </nav>
    </>
  )
}

export default Nav