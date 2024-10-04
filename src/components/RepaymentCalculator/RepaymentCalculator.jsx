import { useEffect, useState } from "react";
import calculatorIcon from "../../assets/icons/icon-calculator.svg";
import styles from "./RepaymentCalculator.module.css";

const RepaymentCalculator = ({ inputData, setInputData }) => {
  const [errorMessage, setErrorMessage] = useState({
    amount: "",
    rate: "",
    term: "",
    mortgageType: "",
  });

  const amountHandler = (e) => {
    setInputData((prevData) => ({
      ...prevData,
      amount: e.target.value,
    }));
  };

  const rateHandler = (e) => {
    setInputData((prevData) => ({
      ...prevData,
      rate: e.target.value,
    }));
  };

  const termHandler = (e) => {
    setInputData((prevData) => ({
      ...prevData,
      term: e.target.value,
    }));
  };

  const mortgageTypeHandler = (e) => {
    setInputData((prevData) => ({
      ...prevData,
      mortgageType: e.target.value,
    }));
  };

  const resetInputHandler = () => {
    setInputData({
      amount: "",
      term: "",
      rate: "",
      mortgageType: "",
    });
    setErrorMessage({
      amount: "",
      term: "",
      rate: "",
      mortgageType: "",
    });
  };

  const inputValidationHandler = (e) => {
    const newErrors = {};
    if (!inputData.amount) {
      newErrors.amount = "This field is required";
    }
    if (!inputData.term) {
      newErrors.term = "This field is required";
    }
    if (!inputData.rate) {
      newErrors.rate = "This field is required";
    }
    if (!inputData.mortgageType) {
      newErrors.mortgageType = "This field is required";
    }
    setErrorMessage(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setInputData((prevData) => ({
        ...prevData,
        buttonClicked: e.target,
      }));
    }
  };

  useEffect(() => {
    const numberInput = document.querySelectorAll('input[type="number"]');
    const handleWheel = (event) => event.preventDefault();
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
      }
    };
    numberInput.forEach((input) => {
      input.addEventListener("wheel", handleWheel);
      input.addEventListener("keydown", handleKeyDown);
    });

    return () => {
      numberInput.forEach((input) => {
        input.removeEventListener("wheel", handleWheel);
        input.removeEventListener("keydown", handleKeyDown);
      });
    };
  }, []);

  return (
    <div className={styles.repayment__calculator}>
      <div className={styles.repayment__head}>
        <h1 className={styles.repayment__title}>Mortgage Calculator</h1>
        <button
          className={styles.repayment__resetbtn}
          type="reset"
          onClick={resetInputHandler}
        >
          Clear All
        </button>
      </div>

      <div className={styles.repayment__form}>
        <div className={styles.repayment__amount}>
          <label htmlFor="mortgageamount">Mortgage Amount</label>
          <p>
            <span>£</span>
            <input
              type="number"
              name="mortgageamount"
              id={styles.mortgageamount}
              onChange={amountHandler}
              value={inputData.amount}
              aria-label="Enter your mortgage amount"
            />
          </p>
          {errorMessage.amount && (
            <span id={styles.error__message}>{errorMessage.amount}</span>
          )}
        </div>

        <div className={styles.repayment__term_rate}>
          <div className={styles.repayment__termYear}>
            <label htmlFor="term">Mortgage Term</label>
            <p>
              <input
                type="number"
                name="term"
                id={styles.termYear}
                onChange={termHandler}
                value={inputData.term}
                aria-label="Enter your mortgage terms"
              />
              <span>years</span>
            </p>
            {errorMessage.term && (
              <span id={styles.error__message}>{errorMessage.term}</span>
            )}
          </div>
          <div className={styles.repayment__termRate}>
            <label htmlFor="termRate">Interest Rate</label>
            <p>
              <input
                type="number"
                name="interestRate"
                id={styles.termRate}
                onChange={rateHandler}
                value={inputData.rate}
                aria-label="Enter your interest rate"
              />
              <span>%</span>
            </p>
            {errorMessage.rate && (
              <span id={styles.error__message}>{errorMessage.rate}</span>
            )}
          </div>
        </div>

        <div className={styles.repayment__type}>
          <legend>Mortgage Type</legend>
          {/* Radio input types */}
          <div className={styles.mortgage__type}>
            <div className={styles.mortgage__repayment}>
              <input
                type="radio"
                name="mortgageType"
                value="Repayment"
                id={styles.types__repayment}
                onChange={mortgageTypeHandler}
                checked={inputData.mortgageType === "Repayment"}
              />
              <label
                htmlFor={styles.types__repayment}
                id={styles.label__repayment}
              >
                Repayment
              </label>
            </div>

            <div className={styles.mortgage__repayment}>
              <input
                type="radio"
                name="mortgageType"
                value="Interest Only"
                id={styles.types__interest}
                onChange={mortgageTypeHandler}
                checked={inputData.mortgageType === "Interest Only"}
              />
              <label
                htmlFor={styles.types__interest}
                id={styles.label__interest}
              >
                Interest Only
              </label>
            </div>
          </div>
          {errorMessage.mortgageType && (
            <span id={styles.error__message}>{errorMessage.mortgageType}</span>
          )}
        </div>
        <button type="submit" onClick={inputValidationHandler}>
          <img src={calculatorIcon} alt="Calculator icon" />
          <p id={styles.btn__text}>Calculate Repayments</p>
        </button>
      </div>
    </div>
  );
};

export default RepaymentCalculator;
