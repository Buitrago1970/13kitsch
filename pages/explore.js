import React from 'react'
import Layout from "../components/Layout/Layout"
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function Expolore() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('https://fakestoreapi.com/products');
            setProducts(result.data);
        }

        fetchData();
    }, []);
    return (
        <Layout>
            <div className='h-10 border-b border-black flex items-center px-3'>
                <p className=''>23 Productos</p>
            </div>
            <section className='w-full h-screen grid grid-cols-3'>
                {products.map(product => (
                    <Link href='/product/1' key={product.id}>
                        <div className='h-128 border-r border-b border-black flex flex-col justify-center items-center relative cursor-pointer'>
                            <div className='w-full h-full relative'>
                                <Image
                                    src="https://balenciaga.dam.kering.com/m/12e38bc725baafd4/Medium-725268TNU181000_F.jpg?v=3"
                                    alt="test"
                                    objectFit="cover"
                                    layout="fill"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className='text-center absolute bottom-1'>
                                <p>{product.title}</p>
                                <p>2 colors</p>
                            </div>
                        </div>
                    </Link>

                ))}
            </section>
        </Layout >

    )
}
