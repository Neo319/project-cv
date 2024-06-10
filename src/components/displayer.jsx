import PropTypes from "prop-types";

export default function Displayer({ person, edu, experience }) {
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

      <div>
        <ul>
          <li>Worked at {experience.company}</li>
          <li>as {experience.role} </li>
          <li>for {experience.years} years</li>
        </ul>
      </div>
    </>
  );
}

Displayer.propTypes = {
  person: PropTypes.object.isRequired,
  edu: PropTypes.object.isRequired,
  experience: PropTypes.object.isRequired,
};
