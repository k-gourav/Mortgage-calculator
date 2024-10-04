import { useState } from "react";
import RepaymentBanner from "../RepaymentBanner/RepaymentBanner";
import RepaymentCalculator from "../RepaymentCalculator/RepaymentCalculator";
import styles from "./RepaymentCalculatorWrapper.module.css";

const RepaymentCalculatorWrapper = () => {
  const [inputData, setInputData] = useState({
    amount: '',        
    term: '',          
    rate: '',          
    mortgageType: '', 
    buttonClicked: false, 
  })

  return (
    <main className={styles.main__element}>
      <div className={styles.repayment__container}>
        <RepaymentCalculator inputData={inputData} setInputData={setInputData} />
        <RepaymentBanner inputData={inputData} />
      </div>
    </main>
  );
};

export default RepaymentCalculatorWrapper;
