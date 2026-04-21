import React from 'react'

// const App = () => {
//   return (
//     <div>
//         {/* using inline styling in. react */}
//       <h1 style={{
//         color:"red",
//         backgroundColor:"yellow",
//         padding:"0px",
//         margin:"0px",
//         borderRadius:"5px",
//         textAlign: "center"
//         }}>Hello World</h1>
//         <p>This is a simple react application</p>
//     </div>
//   )
// }

// export default App


// // using internal css in ReactJs
// const App = () => {
//     // when using internal styling, we create an object and add our css as properties and values. Look below for example.
// const Styles = { 
//     color:"red",
//     backgroundColor:"yellow",
//     padding:"0px",
//     margin:"0px",
//     borderRadius:"5px",
//     textAlign: "center"
// }
// //  now we say styles = Styles(object name containing our properties and values). Look below
//   return (
//     <div>
//       <h1 style={Styles}>Hello World</h1>
//       <p>This is a simple react application</p>
//     </div>
//   )
// }

// export default App

// Using external CSS in ReactJs
// We simply create a file called App.css in the src folder and import it here at the top
const App = () => {
  return (
    <div>
        {/* using inline styling in. react */}
      <h1 style={{
        color:"red",
        backgroundColor:"yellow",
        padding:"0px",
        margin:"0px",
        borderRadius:"5px",
        textAlign: "center"
        }}>Hello World</h1>
        <p>This is a simple react application</p>
    </div>
  )
}

export default App
