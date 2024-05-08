export default function Editor({ label, value, onChange }) {
  return (
    <div className="editor">
    <b>
      <label htmlFor="input">{label}: </label>
    </b>
    

    <input 
      type="text" 
      value={value} 
      onChange={onChange}
    />
    
    </div>
  );
}