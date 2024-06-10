import Editor from "./editor";
import PropTypes from "prop-types";

export default function Experience({ experience, handleExpChange }) {
  return (
    <div>
      <ul>
        <li>
          <Editor
            label="Company"
            value={experience.company}
            onChange={(e) => handleExpChange(e, "school")}
          />
        </li>
        <li>
          <Editor
            label="Role"
            value={experience.role}
            onChange={(e) => handleExpChange(e, "role")}
          />
        </li>
        <li>
          <Editor
            label="Years"
            value={experience.years}
            onChange={(e) => handleExpChange(e, "years")}
          />
        </li>
      </ul>
    </div>
  );
}

Experience.propTypes = {
  experience: PropTypes.object.isRequired,
  handleExpChange: PropTypes.func.isRequired,
};
