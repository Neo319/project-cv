import Editor from "./editor";


export default function Education ({ edu, handleEduChange }) {




  // function which maps edu array, calling eduItem for each item in array
  function EduDisplay () {
    return edu.map((eduItem, index) => (
      <div key={index}>
        <h3>Item {index + 1}</h3>
        <EduItem  item={eduItem} index={index}/>
      </div>
      
    ));
  }

  //function which returns the rendered eduItem
  function EduItem ({ item, index }) {
    console.log(index)

    const handleItemChange = (e, changedProp) => {
      //calling the parent handleEduChange function with the appropriate parameters
      handleEduChange(e, index, changedProp);
    }

    return (
      <>
        <Editor 
        label="school" 
        value={item.school} 
        onChange={(e) => handleItemChange(e, "school")}/>
      </>
    )
  }


  return (
    <div>
      <div>
        <EduDisplay />
      </div>
    </div>
  );
}