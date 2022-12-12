import React from 'react'
import Layout from "../components/Layout/Layout"
import Image from 'next/image'


export default function Expolore() {
    return (
        <Layout>
            <div className='h-10 border-b border-black flex items-center px-3'>
                <p className=''>23 Productos</p>
            </div>
            <section className='w-full h-screen grid grid-cols-3'>
                <div className=' h-2/3 border-r border-b border-black flex flex-col justify-center items-center relative'>
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
                        <p>SCOPE T-SHIRT</p>
                        <p>2 colors</p>
                    </div>
                </div>
                <div className=' h-2/3 border-r border-b border-black flex flex-col justify-center items-center relative'>
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
                        <p>SCOPE T-SHIRT</p>
                        <p>2 colors</p>
                    </div>
                </div>
                <div className=' h-2/3 border-r border-b border-black flex flex-col justify-center items-center relative'>
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
                        <p>SCOPE T-SHIRT</p>
                        <p>2 colors</p>
                    </div>
                </div>


            </section>
        </Layout>

    )
}
