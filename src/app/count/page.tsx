// pages/index.js
"use client"

import {useCartStore} from '../store/zustand';

export default function Home() {
  const { cart, add, remove } = useCartStore();
  
  return (
    <div>
      <h1 className='text-black'>Count: {cart}</h1>
      <button className='text-black' onClick={add}>Increase</button>
      <button className='text-black' onClick={remove}>Decrease</button>
    </div>
  );
}
