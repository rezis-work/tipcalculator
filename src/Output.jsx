export default function Output({ bill, tip }) {
  return (
    <div className="output">
      <h3>{`You pay $${bill + tip} ($${bill} + $${tip}) Tip`}</h3>
    </div>
  );
}
