import { useState, useEffect } from "react";

const TimeComp = () => {
  const [theTime, setThetime] = useState(null);
  const [b, setB] = useState(0);

  useEffect(() => {
    const intervalid = setInterval(() => {
      setThetime(new Date().toUTCString());
    }, 1000);
    console.log("in useEffect");
    return () => {
      clearInterval(intervalid);
      console.log("clear interval");
    };
  }, [b]);

  // console.log("not in useEffect")
  return (
    <>
      <div>{theTime}</div>
      <button onClick={() => setB(b + 1)}>change b</button>
    </>
  );
};

export default TimeComp;
