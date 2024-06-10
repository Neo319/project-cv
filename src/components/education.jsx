import Editor from "./editor";
import PropTypes from "prop-types";

export default function Education({ edu, handleEduChange }) {
  // function which maps edu array, calling eduItem for each item in array
  function EduDisplay() {
    return edu.map((eduItem, index) => (
      <div key={index}>
        <h3>Item {index + 1}</h3>
        <EduItem item={eduItem} index={index} />
      </div>
    ));
  }

  //function which returns the rendered eduItem
  function EduItem({ item, index }) {
    const handleItemChange = (e, changedProp) => {
      //calling the parent handleEduChange function with the appropriate parameters
      handleEduChange(e, index, changedProp);
    };

    EduItem.propTypes = {
      item: PropTypes.object.isRequired,
      index: PropTypes.number.isRequired,
    };

    return (
      <>
        <Editor
          label="school"
          value={item.school}
          onChange={(e) => handleItemChange(e, "school")}
        />
      </>
    );
  }

  return (
    <div>
      <div>
        <EduDisplay />
      </div>
    </div>
  );
}

Education.propTypes = {
  edu: PropTypes.array.isRequired,
  handleEduChange: PropTypes.func.isRequired,
};
