import PropTypes from "prop-types";

export default function Displayer({ person, edu }) {
  // function which maps edu array, calling eduItem for each item in array

  return (
    <>
      <div>
        <ul>
          <li>{person.name}</li>
          <li>{person.email}</li>
          <li>{person.phone}</li>
        </ul>
      </div>

      <div>
        <h3>Education</h3>
        <ul>
          <li>Attended {edu.school} </li>
          <li>Located in {edu.location}</li>
          <li>
            {edu.start} to {edu.end}
          </li>
          <li>Majoring in {edu.major} </li>
        </ul>
      </div>
    </>
  );
}

Displayer.propTypes = {
  person: PropTypes.object.isRequired,
  edu: PropTypes.object.isRequired,
};
