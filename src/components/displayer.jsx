import PropTypes from "prop-types";

export default function Displayer({ person, edu }) {
  // function which maps edu array, calling eduItem for each item in array
  function EduDisplay() {
    return edu.map((eduItem, index) => <EduItem key={index} item={eduItem} />);
  }

  //function which returns the rendered eduItem
  function EduItem({ item }) {
    return (
      <>
        <div>school is: {item.school}</div>
        <div>located in: {item.location}</div>
      </>
    );
  }

  EduItem.propTypes = {
    item: PropTypes.shape({
      school: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <>
      <div>
        <h3>Personal Info</h3>
        <div>name is : {person.name}</div>
        <div>email is: {person.email}</div>
        <div>phone is: {person.phone}</div>
      </div>

      <div>
        <h3>Education</h3>
        <EduDisplay />
      </div>
    </>
  );
}

Displayer.propTypes = {
  person: PropTypes.object.isRequired,
  edu: PropTypes.array.isRequired,
};
