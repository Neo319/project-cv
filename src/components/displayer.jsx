export default function Displayer ({ person, edu }) {

// function which maps edu array, calling eduItem for each item in array
function EduDisplay () {
  return edu.map((eduItem, index) => (
    <EduItem key={index} item={eduItem} />
  ));
}

//function which returns the rendered eduItem
function EduItem ({ item }) {
  console.log(item)
  console.log(item.school)
  return (
    <>
      <div>school is: {item.school}</div>
      <div>located in: {item.location}</div>
    </>
  )
}


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