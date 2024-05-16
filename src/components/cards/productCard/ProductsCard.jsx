import React from 'react'
import styles from './ProductCard.module.css'
import Button from '../../buttons/Button'

const ProductsCard = ({item, sebeteAt, favori}) => {
  return (
    <div className={styles.container}>
        <img src={item.thumbnail} alt="" />
        <div className={styles.textBox}>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.price} AZN</p>
        </div>
        <div className={styles.btnBox}>
            <Button text='Sebete at' onclick={sebeteAt}/>
            <Button text='Favori ekle' onclick={favori}/>
        </div>
    </div>
  )
}

export default ProductsCard