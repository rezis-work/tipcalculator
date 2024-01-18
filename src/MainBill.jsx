import Input from "./Input";

export default function MainBill({ bill, setBill, children }) {
  return (
    <div className="bill-box">
      <label className="question">{children}</label>
      <Input className="input" bill={bill} setBill={setBill} />
    </div>
  );
}
