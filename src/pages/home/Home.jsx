import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import axios from "axios";
import ProductsCard from "../../components/cards/productCard/ProductsCard";

const Home = () => {
    const [data, setData] = useState([])

    const getData = () => {
        axios.get('https://dummyjson.com/products')
        .then(res => {
            setData(res.data.products)
        })
    }

    useEffect(() => { 
        getData()
    },[])

    const addToBasket = (item) => {
        axios.post('http://localhost:3000/basket',item)
    }

    const addToWish = (item) => {
        axios.post('http://localhost:3000/wishlist',item)
    }

  return (
    <div>
      <Header />
      <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
        <h1>Featured Products</h1>
        <div style={{display:'flex', width:'100%', flexWrap:'wrap',justifyContent:'space-evenly'}}>
            {data && data.map(item => <ProductsCard item={item} sebeteAt={() => addToBasket(item)} favori={() => addToWish(item)} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
