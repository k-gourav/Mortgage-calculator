import React from 'react'
import calculatorImage from '../../assets/images/illustration-empty.svg'
import styles from './RepaymentBanner.module.css'

function RepaymentBanner() {
  return (
    <div className={styles.repayment__banner}>
      <img src={calculatorImage} alt="Calculator Image" />
      
        
    </div>
  )
}

export default RepaymentBanner;