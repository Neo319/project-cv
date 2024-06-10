import Editor from "./editor";
import PropTypes from "prop-types";

export default function PersonalData({ person, handlePersonChange }) {
  return (
    <div>
      <Editor
        label="Name"
        value={person.name}
        onChange={(e) => handlePersonChange(e, "name")}
      />

      <Editor
        label="Email"
        value={person.email}
        onChange={(e) => handlePersonChange(e, "email")}
      />

      <Editor
        label="Phone"
        value={person.phone}
        onChange={(e) => handlePersonChange(e, "phone")}
      />
    </div>
  );
}

PersonalData.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  handlePersonChange: PropTypes.func.isRequired,
};
