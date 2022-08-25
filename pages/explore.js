import React from 'react'
import Layout from "../components/Layout/Layout"


export default function Expolore() {
    return (
        <Layout>
            <div className='h-10 border-b border-black flex items-center px-3'>
                <p className=''>23 Productos</p>
            </div>
            <section className='w-full h-screen flex flex-wrap'>
                <div className='w-1/4 h-3/4 border-r border-b border-black flex flex-col justify-center items-center'>
                    <div className='w-1/2'>
                        imagen
                    </div>
                    <p>CHARIZARD2</p>
                </div>
                <div className='w-1/4 h-3/4 border-r border-b border-black flex flex-col justify-center items-center'>
                    <div className='w-1/2'>
                        <p>imagen</p >
                        {/* <img/> */}
                    </div>
                    <p>CHARIZARD2</p>
                </div><div className='w-1/4 h-3/4 border-r border-b border-black flex flex-col justify-center items-center'>
                    <div className='w-1/2'>
                        <p>imagen</p >
                        {/* <img/> */}
                    </div>
                    <p>CHARIZARD2</p>
                </div><div className='w-1/4 h-3/4 border-r border-b border-black flex flex-col justify-center items-center'>
                    <div className='w-1/2'>
                        <p>imagen</p >
                        {/* <img/> */}
                    </div>
                    <p>CHARIZARD2</p>
                </div><div className='w-1/4 h-3/4 border-r border-b border-black flex flex-col justify-center items-center'>
                    <div className='w-1/2'>
                        <p>imagen</p >
                        {/* <img/> */}
                    </div>
                    <p>CHARIZARD2</p>
                </div><div className='w-1/4 h-3/4 border-r border-b border-black flex flex-col justify-center items-center'>
                    <div className='w-1/2'>
                        <p>imagen</p >
                        {/* <img/> */}
                    </div>
                    <p>CHARIZARD2</p>
                </div>
            </section>
        </Layout>

    )
}
