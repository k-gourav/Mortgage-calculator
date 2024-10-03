import RepaymentBanner from "../RepaymentBanner/RepaymentBanner";
import RepaymentCalculator from "../RepaymentCalculator/RepaymentCalculator";
import styles from "./RepaymentCalculatorWrapper.module.css";

const RepaymentCalculatorWrapper = () => {
  return (
    <main className={styles.main__element}>
      <div className={styles.repayment__container}>
        <RepaymentCalculator />
        <RepaymentBanner />
      </div>
    </main>
  );
};

export default RepaymentCalculatorWrapper;
