import { useEffect } from 'react';
import calculatorIcon from '../../assets/icons/icon-calculator.svg'
import styles from "./RepaymentCalculator.module.css";

const RepaymentCalculator = () => {
  
  useEffect(() => {
    const numberInput = document.querySelectorAll('input[type="number"]')
    const handleWheel = (event) => event.preventDefault();
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
      }
    };
    numberInput.forEach((input) => {
      input.addEventListener('wheel', handleWheel);
      input.addEventListener('keydown', handleKeyDown);
    })
    
    return () => {
      numberInput.forEach((input) => {
      input.removeEventListener('wheel', handleWheel)
      input.removeEventListener('keydown', handleKeyDown)
    })
    };
  }, [])

  return (
        <div className={styles.repayment__calculator}>
          <div className={styles.repayment__head}>
            <h1 className={styles.repayment__title}>Mortgage Calculator</h1>
            <button className={styles.repayment__resetbtn} type="reset">Clear All</button>
          </div>

          <div className={styles.repayment__form}>
            <div className={styles.repayment__amount}>
                <label htmlFor="mortgageamount">Mortgage Amount</label>
                <p><span>£</span><input type="number" name="mortgageamount" id={styles.mortgageamount}aria-label="Enter your mortgage amount" /></p>
            </div>

            <div className={styles.repayment__term_rate}>
                <div className={styles.repayment__termYear}>
                    <label htmlFor="term">Mortgage Term</label>
                    <p><input type="number" name="term" id={styles.termYear} aria-label="Enter your mortgage terms" /><span>years</span></p>
                </div>
                <div className={styles.repayment__termRate}>
                    <label htmlFor="termRate">Interest Rate</label>
                    <p><input type="number" name="interestRate" id={styles.termRate} aria-label="Enter your interest rate" /><span>%</span></p>
                </div>
            </div>

            <div className={styles.repayment__type}>
                <legend>Mortgage Type</legend>
                {/* Radio input types */}
                <div className={styles.mortgage__type}>
                    <div className={styles.mortgage__repayment}>
                        <input type="radio" name="mortgageType" value="Repayment" id={styles.types__repayment} />
                        <label htmlFor={styles.types__repayment} id={styles.label__repayment}>Repayment</label>
                    </div>

                    <div className={styles.mortgage__repayment}>
                        <input type="radio" name="mortgageType" value="Interest Only" id={styles.types__interest} />
                        <label htmlFor={styles.types__interest} id={styles.label__interest}>Interest Only</label>
                    </div>
                </div>
            </div>
            <button type="submit"><img src={calculatorIcon} alt="Calculator icon" /><p id={styles.btn__text}>Calculate Repayments</p></button>
          </div>
        </div>
  );
};

export default RepaymentCalculator;
