export default function Reset({ onReset, children }) {
  return (
    <button onClick={onReset} className="reset-btn">
      {children}
    </button>
  );
}
