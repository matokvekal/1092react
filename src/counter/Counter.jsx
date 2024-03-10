import { useState } from "react";

const Counter = () => {
  //    const[counter, setCounter] = useState(0);
  const [student, setStudent] = useState(null);
  const students = ["Avi", "Ben", "Gadi", "Dana"];

  // const increment = () => {
  //     setCounter(counter+1)
  // }
  function pickStudent() {
    const randomIndex = Math.floor(Math.random() * students.length);
    setStudent(students[randomIndex]);
    /////////////////
    // setStudent(students.pop());
  }
  return (
    <>
      {/* <div>Counter</div>
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={()=>setCounter(counter-1)}>-</button>
 */}
      <button onClick={pickStudent}>Pick Student</button>
      <div>{student}</div>
    </>
  );
};

export default Counter;
