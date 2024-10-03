import React from 'react'
import calculatorImage from '../../assets/images/illustration-empty.svg'
import styles from './RepaymentBanner.module.css'

function RepaymentBanner() {
  return (
    <div className={styles.repayment__banner}>
      <img src={calculatorImage} alt="Calculator Image" width="180" />
      <div className={styles.banner__content}>
      <h2 className={styles.banner__title}>Results shown here</h2>
      <p id={styles.banner__body}>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
      </div>
    </div>
  )
}

export default RepaymentBanner;