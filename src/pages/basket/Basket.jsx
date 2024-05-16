import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import ProductsCard from '../../components/cards/productCard/ProductsCard'
import axios from 'axios'
import ProductBasket from '../../components/cards/productCard/ProductBasket'

const Basket = () => {
    const [data, setData] = useState([])

    const getData = () => {
        axios.get('http://localhost:3000/basket')
        .then(res => {
            setData(res.data)
        })
    }

    useEffect(() => {
        getData()
    },[])

    const removeItem = (id) => {
        axios.delete(`http://localhost:3000/basket/${id}`)
        setTimeout(() => {
            getData()
        }, 100);
    }

  return (
    <div>
        <Header/>
        <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
        <h1>Featured Products</h1>
        <div style={{display:'flex', width:'100%', flexWrap:'wrap',justifyContent:'space-evenly'}}>
            {data && data.map(item => <ProductBasket item={item} sil={() => removeItem(item.id)}/>)}
        </div>
      </div>
    </div>
  )
}

export default Basket