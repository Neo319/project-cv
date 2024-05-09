export default function Education () {

function handleClick() {
  console.log('yes')
}



  return (
    <div>
      <div>

        <label htmlFor="input">School: </label>
        <input type="text" />

        <button onClick={handleClick}>+ Education</button>
      </div>
    </div>
  );
}