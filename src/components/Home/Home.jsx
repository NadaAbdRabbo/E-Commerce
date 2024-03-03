import React, { useContext } from 'react'
import { CounterContext } from '../../Context/CounterContext'
import Products from '../Products/Products';
import Categories from '../Categories/Categories';
import HomeSlider from '../Slider/Slider';





export default function Home() {

  let {changeCounter} = useContext(CounterContext);

  return <>
  
  
    <div>
      <HomeSlider/>
      <h2>Category</h2>
      <Categories/>
    <h2>Products</h2>
    <Products/>
    </div>
    
  
  </>
}
