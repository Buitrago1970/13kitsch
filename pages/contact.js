import React from 'react'
import Layout from "../components/Layout/Layout"


export default function contact() {
    return (
        <>
            <Layout>
                <section className='h-screen flex flex-col'>
                    <div className='h-3/4 flex flex-col justify-center items-center'>
                        <p className='my-8 font-semibold italic text-base'>Hola, Si te gustó el aspecto de alguno de nuestros trabajos, no dudes en contactarnos.</p>
                        <div className='w-128 h-80 border rounded-2xl border-black relative grid overflow-hidden grid-cols-1 grid-rows-1 gap-2 items-center justify-items-center'>
                            <p className='text-4xl font-semibold'>13Kitsch</p>
                            <div className='w-full text-end p-2 absolute bottom-0 text-sm font-semibold italic'><p>kitsch@13Kitsch.com</p></div>
                        </div>
                    </div>

                    <footer className='flex justify-between items-center px-5 mt-auto border-t border-black'>
                        <div >
                            <p>CONECTAR</p>
                            <div className="italic font-semibold flex flex-col text-sm">
                                <a>Instagram</a>
                                <a>Facebook</a>
                            </div>
                        </div>
                        <div className='text-sm font-bold italic'>
                            <p>
                                Lamanos: +57 20 33 18 60 32
                            </p>
                            <p>
                                Lunes-Sabados 9am - 6:30pm
                            </p>
                        </div>
                    </footer>
                </section>

            </Layout>

        </>

    )
}
