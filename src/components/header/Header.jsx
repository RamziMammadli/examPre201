import React from 'react'
import styles from './Header.module.css'
import { CiPhone } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const navigation = useNavigate()

  return (
    <div className={styles.container}>
        <div className={styles.containerMain}>
        <div className={styles.containerTop}>
            <div className={styles.logo}><p>We believe we helps people <br /> to make happier lives</p></div>
            <div><h1>GYMNESIUM</h1></div>
            <div className={styles.contactBox}>
                <span>+994 55 878 07 01</span>
                <button>
                <CiPhone size={20}/>
                </button>
            </div>
            <div className={styles.bars}>
            <FaBars/>
        </div>
        </div>
        </div>
        <div className={styles.containerBottom}>
            <button onClick={() => navigation('/')}>Home</button>
            <button onClick={() => navigation('/basket')}>Basket</button>
            <button  onClick={() => navigation('/wishlist')}>Wishlist</button>
            <button>We Offer</button>
            <button>Contact</button>
            <button>About</button>
            <button>What is going on?</button>
        </div>
        
    </div>
  )
}

export default Header