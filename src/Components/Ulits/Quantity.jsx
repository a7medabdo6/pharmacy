import { useState } from "react";

const Quantity = () => {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count !== 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <button
        className={`btn btn-primary rounded-0 w-25 fs-3 d-flex justify-content-center align-items-center p-0 fs-5 ${
          count === 1 && "disabled"
        }`}
        style={{ width: "30px", height: "30px" }}
        onClick={decrementCount}
      >
        -
      </button>
      <span
        className="w-50 text-center"
        style={{
          background: "rgba(238, 238, 238, 1)",
          lineHeight: "30px",
          height: "30px",
        }}
      >
        {count}
      </span>
      <button
        className="btn btn-primary rounded-0 w-25 fs-3 d-flex justify-content-center align-items-center p-0 fs-5"
        style={{ width: "30px", height: "30px" }}
        onClick={incrementCount}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
