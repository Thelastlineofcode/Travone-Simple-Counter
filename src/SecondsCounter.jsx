const SecondsCounter = ({ seconds }) => {
  const digitArray = String(seconds).padStart(6, "0").split("");
  return (
    <div className="counter">
      <div className="icon">
        <i className="fa-regular fa-clock"></i>
      </div>
      {digitArray.map((digit, index) => (
        <div key={index} className="digit">
          {digit}
        </div>
      ))}
    </div>
  );
};

export default SecondsCounter;
