import Navbar from '@/Components/NavBar'
import React from 'react'
import Image from 'next/image'
import c1 from '../Components/modals/watchdemo-logo.png'
import { BsStarFill, BsStar } from 'react-icons/bs';
import { ConnectedGetPricingButton, ConnectedWatchDemoButton, ConnectedWatchDemoCard } from '@/Components/buttons';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from '../state/reducer/index';
import { ConnectedModal } from '@/Components/modals';
import { MdComputer, MdOutlineTabletMac } from 'react-icons/md';
import { ImMobile } from 'react-icons/Im';
import { AiFillCloud } from 'react-icons/ai';

const store = createStore(Reducer);
const SoftwarePage = ({ openModal, products }) => {
    const handleOpen = () => {
        openModal('watchDemo');
    };
    return (
        <Provider store={store}>
            <div>
                <div>
                    <Navbar />
                </div>
                <div>
                    <h1 className=' pl-28 text-3xl py-10'>Anesthesiology EHR Software</h1>
                </div>
              <div>
                        {products.map((product) => (
                            <div key={product.id}>
                            <div className='h-64 border rounded-lg mx-28 my-5 flex flex-row'>
                                <div className='w-5/6'>

                                    <h1 className='text-2xl mt-7 mr-32 text-center'>{product.attributes.name}</h1>
                                    <div className='flex flex-row'>
                                        <div className='px-2 mx-7'>
                                            <div className=' -mt-6 '>
                                                {product.attributes.image.data.attributes.url ? (
                                                    <img
                                                        src={`http://127.0.0.1:1337${product.attributes.image.data.attributes.url}`}
                                                        alt={product.attributes.name}
                                                        width={200} 
                                                        height={200}
                                                    />
                                                ) : (
                                                    <div>Image not available</div>
                                                )}
                                            </div>
                                            <ConnectedWatchDemoCard product={product}/>

                                        </div>
                                        <div className='mx-2 mt-5 w-4/5'>
                                            <div className='flex flex-row space-x-3'>
                                                <div className='w-50 text-center'>
                                                    <div>Compability</div>
                                                    <div className='flex flex-row text-2xl h-10 space-x-6 mt-4 px-2 py-2 border-r-2'>
                                                        <MdComputer />
                                                        <MdOutlineTabletMac />
                                                        <ImMobile />
                                                    </div>
                                                </div>
                                                <div className='w-50 text-center'>
                                                    <div>Accessibility</div>
                                                    <div className='flex flex-row text-2xl h-10 space-x-6 mt-4 px-2 py-2 border-r-2'>
                                                        <AiFillCloud className='mx-10' />
                                                    </div>
                                                </div>
                                                <div className='w-50 text-center'>
                                                    <div>Business Size</div>
                                                    <div className='flex flex-row text-2xl h-10 space-x-6 mt-4 px-4 py-2 border-r-2'>
                                                        <div className='font-bold text-2xl -mt-2'>S</div>
                                                        <div className='font-bold text-2xl -mt-2'>M</div>
                                                        <div className='font-bold text-2xl -mt-2 '>L</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='text-lg'>{product.attributes.description} <a href={`${product.attributes.link}`} target="_blank" rel="noopener noreferrer">
  <span className='text-orange-400 font-semibold'>Read more</span>
</a> </div>


                                        </div>
                                    </div>
                                </div>
                                <div className='w-50 px-3'>
                                    <div className='w-50 flex-col pt-3 my-8  text-xl text-center'>
                                        <div className='flex flex-row text-orange-400 space-x-2 my-3 pl-3'>
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStar />
                                        </div>
                                        <div className='pl-4'>
                                            {product.attributes.Reviews}
                                        </div>
                                    </div>
                                        <div className='text-center my-2'>
                                            <ConnectedWatchDemoButton  product={product} />
                                        </div>
                                        <div className='text-center  my-2'>
                                            <ConnectedGetPricingButton  product={product} />
                                        </div>
                                        <ConnectedModal  product={product} />
                                    </div>
                            </div>
                        </div>
                       
                    ))}
                </div>
            </div>
        </Provider>
    )
}

export default SoftwarePage

export async function getStaticProps() {
    const res = await fetch('http://127.0.0.1:1337/api/products?populate=image,image2');
    const data = await res.json();
    console.log(data)
    return {
        props: {
            products: data.data

        }
    }
}




