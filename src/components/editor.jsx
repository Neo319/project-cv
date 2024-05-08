export default function Editor({ label, value, onChange }) {
  return (
    <>
    <h2>{label}</h2>

    <input 
      type="text" 
      value={value} 
      onChange={onChange}
    />
    
    </>
  );
}