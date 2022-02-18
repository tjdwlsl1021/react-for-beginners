
import { useState, useEffect } from "react";

// function Hello() {
//   useEffect(() => {
//     console.log('created');
//     return () => console.log('destroyed');
//   }, []) // [] <- 없으면 한번만 실행
//   return <h1>Hello</h1>;
// }


function Hello() {
  // function byFn() {
  //   console.log('bye');
  // }
  // function hiFn() {
  //   console.log('created');
  //   return byFn; // destroy될 때 retrun호출
  // }
  // useEffect(hiFn, []) // [] <- 없으면 한번만 실행

  useEffect(() => { // 사용방법1
    console.log("hi");
    return () => console.log("bye");
  }, [])

  // useEffect(function() { // 사용방법2
  //   console.log("hi");
  //   return function() {
  //     console.log("bye");
  //   }
  // }, [])
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}
export default App;