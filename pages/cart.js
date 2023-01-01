import React from 'react'
import ShoppingCart from "../components/ShoppingCart/ShoppingCart"
import Bill from "../components/Bill/Bill"
import { useSelector } from "react-redux";

export default function cart() {
    const products = useSelector((state) => state.products);
    return (
        <section className='min-h-screen grid  grid-cols-3 grid-rows-1'>
            <ShoppingCart cart={products.cart}/>
            <Bill cart={products.cart} />
        </section>


    )
}