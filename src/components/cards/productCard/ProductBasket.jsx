import React from 'react'
import styles from './ProductCard.module.css'
import Button from '../../buttons/Button'

const ProductBasket = ({item, sil}) => {
  return (
    <div className={styles.container}>
        <img src={item.thumbnail} alt="" />
        <div className={styles.textBox}>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.price} AZN</p>
        </div>
        <div className={styles.btnBox}>
            <Button text='Sil' onclick={sil}/>
        </div>
    </div>
  )
}

export default ProductBasket