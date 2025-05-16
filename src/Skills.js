import { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);

  const handleSkills = (event) => {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills([...skills.filter((item) => item != event.target.value)]);
    }
  };

  return (
    <>
      <h1>Select Your Skills</h1>
      <input
        type="checkbox"
        name="php"
        id="php"
        value="PHP"
        onChange={handleSkills}
      />
      <label htmlFor="php">PHP</label>
      <br />
      <br />

      <input
        type="checkbox"
        name="html"
        id="html"
        value="HTML"
        onChange={handleSkills}
      />
      <label htmlFor="html">HTML</label>
      <br />
      <br />
      <input
        type="checkbox"
        name="css"
        id="css"
        value="CSS"
        onChange={handleSkills}
      />
      <label htmlFor="css">CSS</label>
      <br />
      <br />
      <h1> {skills.toString()}</h1>
    </>
  );
}
export default Skills;
