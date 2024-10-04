import React from 'react';
import { monthlyInterest, totalRepayment } from "../../utils/helpers";
import calculatorImage from '../../assets/images/illustration-empty.svg';
import styles from './RepaymentBanner.module.css';

function RepaymentBanner({ inputData }) {
  const validInputData = inputData.amount && inputData.rate && inputData.term && inputData.mortgageType && inputData.buttonClicked;
  return (
    <div className={styles.repayment__banner} id={validInputData ? '' : styles.banner__One}>
      {validInputData ? (
        <>
          <div className={styles.banner__contentOne}>
            <h2 className={styles.banner__title}>Your results</h2>
            <p id={styles.instruction}>
              Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.
            </p>
          </div>
          <div className={styles.mortgage__values}>
            <p id={styles.monthly__repay}>Your monthly repayments</p>
            <h3 className={styles.monthly__repayamount}>£ {monthlyInterest(inputData.amount, inputData.rate, inputData.term).toFixed(2)}</h3>
            <p id={styles.total__repay}>Total you'll repay over the term</p>
            <h3 className={styles.total__repayamount}>£ {totalRepayment(inputData.amount, inputData.rate, inputData.term).toFixed(2)}</h3>
          </div>
        </>
      ) : (
        <>
          <img src={calculatorImage} alt="Calculator Image" width="180" />
          <div className={styles.banner__content}>
            <h2 className={styles.banner__title}>Results shown here</h2>
            <p id={styles.banner__body}>
              Complete the form and click "calculate repayments" to see what your monthly repayments would be.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default RepaymentBanner;
