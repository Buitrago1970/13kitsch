import React from 'react'
import ShoppingCart from "../components/ShoppingCart/ShoppingCart"
import Bill from "../components/Bill/Bill"
import Layout from "../components/Layout/Layout"


export default function cart() {
    return (
        <Layout>
            <section className='h-screen grid overflow-hidden grid-cols-3 grid-rows-1'>
                <ShoppingCart />
                <Bill />
            </section>
        </Layout>

    )
}