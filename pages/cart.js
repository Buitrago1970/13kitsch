import React from 'react'
import ShoppingCart from "../components/ShoppingCart/ShoppingCart"
import Bill from "../components/Bill/Bill"



export default function cart() {
    return (

        <section className='min-h-screen grid  grid-cols-3 grid-rows-1'>
            <ShoppingCart />
            <Bill />
        </section>


    )
}