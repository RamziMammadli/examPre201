import React from 'react'
import styles from './btn.module.css'

const Button = ({onclick,text}) => {
  return (
    <button className={styles.container} onClick={onclick}>
        {text}
    </button>
  )
}

export default Button