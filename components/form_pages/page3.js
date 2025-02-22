import styles from "./Page3.module.css";

export default function Page3({
  setPage,
  setValue,
  setPrevValue,
  setBidIncrement,
  setUpperBound,
  value,
  bidIncrement,
  monthly,
}) {
  const handleYes = () => {
    setPage(4);
  };
  const handleNo = () => {
    let bidMax = monthly ? 500 : 2000;
    let bidBase = monthly ? 10 : 40;
    let dvalue = Math.ceil(bidIncrement / 3) * bidBase;

    if (value + dvalue > bidMax) {
      setPrevValue(bidMax);
      setValue(bidMax);
      setUpperBound(true);
      setPage(4);
      return;
    }

    setPrevValue(value);
    setValue(value + dvalue);
    setBidIncrement(bidIncrement + 1);
    setPage(3);
  };
  return (
    <>
      <div className={styles.banner}>
        <h1 className={styles.p_container}>**Survey Question**</h1>
      </div>
      <div>Would you participate in the program for:</div>
      <p>
        a <b>${value}</b> {monthly ? "monthly payment" : "one-time payment"}?
      </p>
      <div className={styles.buttonrow}>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            handleYes();
          }}
        >
          Yes
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            handleNo();
          }}
        >
          No
        </button>
      </div>
    </>
  );
}
