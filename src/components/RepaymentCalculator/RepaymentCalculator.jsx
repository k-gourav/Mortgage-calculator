import calculatorIcon from '../../assets/icons/icon-calculator.svg'
import styles from "./RepaymentCalculator.module.css";

const RepaymentCalculator = () => {
  return (
    <main className={styles.main__element}>
      <div className={styles.repayment__container}>
        {/* Calculator Section */}
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
                <div className={styles.repayment__term}>
                    <label htmlFor="termRate">Interest Rate</label>
                    <p><input type="number" name="interestRate" id={styles.termRate} aria-label="Enter your interest rate" /><span>%</span></p>
                </div>
            </div>

            <div className={styles.repayment__type}>
                <legend>Mortgage Type</legend>
                {/* Radio input types */}
                <div className={styles.mortgage__type}>
                    <div className={styles.mortgage__repayment}>
                        <input type="radio" name="repaymentMortgage" value="Repayment" id={styles.types__repayment} />
                        <label htmlFor="types__repayment">Repayment</label>
                    </div>

                    <div className={styles.mortgage__repayment}>
                        <input type="radio" name="interestMortgage" value="Interest Only" id={styles.types__interest} />
                        <label htmlFor="types__interest">Interest Only</label>
                    </div>
                </div>
            </div>
            <button type="submit"><img src={calculatorIcon} alt="Calculator icon" /><p>Calculate Repayments</p></button>
          </div>
        </div>

        {/* Banner Section */}
        <div className={styles.repayment__banner}></div>
      </div>
    </main>
  );
};

export default RepaymentCalculator;
