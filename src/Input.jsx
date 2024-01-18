export default function Input({ bill, setBill }) {
  return (
    <input
      type="text"
      className="input"
      value={bill}
      onChange={(e) => setBill(Number(e.target.value))}
      placeholder="Bill"
    />
  );
}
