import { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);
  const handleSkills = (e) => {
    console.log(e.target.value, e.target.checked);
    if (e.target.checked) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills([...skills.filter((item) => item != e.target.value)]);
    }
  };
  return (
    <>
      <h3>Select Your Skills</h3>
      <input type="checkbox" id="php" value="php" onChange={handleSkills} />
      <label htmlFor="php">PHP</label>
      <br />
      <br />
      <input type="checkbox" id="css" value="css" onChange={handleSkills} />
      <label htmlFor="css">CSS</label>
      <br />
      <br />
      <input type="checkbox" id="html" value="html" onChange={handleSkills} />
      <label htmlFor="html">HTML</label>
      <br />
      <br />
      <input type="checkbox" id="react" value="react" onChange={handleSkills} />
      <label htmlFor="react">React</label>
      <br />
      <br />
      {skills}
    </>
  );
}
export default Skills;
