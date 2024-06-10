import Editor from "./editor";
import PropTypes from "prop-types";

export default function Education({ edu, handleEduChange }) {
  return (
    <div>
      <ul>
        <li>
          <Editor
            label="School"
            value={edu.school}
            onChange={(e) => handleEduChange(e, "school")}
          />
        </li>
        <li>
          <Editor
            label="Location"
            value={edu.location}
            onChange={(e) => handleEduChange(e, "location")}
          />
        </li>
        <li>
          <Editor
            label="Start"
            value={edu.start}
            onChange={(e) => handleEduChange(e, "start")}
          />
        </li>
        <li>
          <Editor
            label="End"
            value={edu.end}
            onChange={(e) => handleEduChange(e, "end")}
          />
        </li>
        <li>
          <Editor
            label="Major"
            value={edu.major}
            onChange={(e) => handleEduChange(e, "major")}
          />
        </li>
      </ul>
    </div>
  );
}

Education.propTypes = {
  edu: PropTypes.object.isRequired,
  handleEduChange: PropTypes.func.isRequired,
};
