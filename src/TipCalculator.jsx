import { useState } from "react";
import AskPercentage from "./AskPercentage";
import MainBill from "./MainBill";
import Output from "./Output";
import Reset from "./Reset";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [fistPercentage, setfirstPercentage] = useState(0);
  const [secondPercentage, setSecondPercentage] = useState(0);

  const tip = bill * ((fistPercentage + secondPercentage) / 2 / 100);

  function reset() {
    setBill("");
    setfirstPercentage(0);
    setSecondPercentage(0);
  }

  return (
    <div className="tip-calculator">
      <MainBill bill={bill} setBill={setBill}>
        How much was the bill?
      </MainBill>
      <AskPercentage Percentage={fistPercentage} onSelect={setfirstPercentage}>
        How did you like the service?
      </AskPercentage>
      <AskPercentage
        Percentage={secondPercentage}
        onSelect={setSecondPercentage}
      >
        How did your friend like the service?
      </AskPercentage>

      <div className="tip">
        {bill > 0 ? <Output bill={bill} tip={tip} /> : ""}
      </div>

      {bill > 0 && <Reset onReset={reset}>Reset</Reset>}
    </div>
  );
}
