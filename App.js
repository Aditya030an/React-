import React from "react";
import ReactDOM from "react-dom";

//IMP
//output odf react element is object and wich is given to dom by render method which convert the object into HTML type file

const heading = React.createElement("h1" , {id:"heading" , xyz:"abc"} , "Heading in react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//IF i want to make a nested div

// const element = React.creatElement("div" , {id:"grandparent"} , 
//     React.creatElement("div" , {id:"parent"} ,
//     React.creatElement("div" , {id:"child"} , 
//     React.creatElement("h1" , {id:"heading"} , "Heading inside nested div")
//     )
//     )
// )

//if t want to make siblings so i store the third argument og createElement in array which collect the data
// const element = React.createElement("div" , {id:"greandparent"} ,
//     React.createElement("div" , {id:"parent"} , 
//     [
//         React.createElement("div" , {id:"child1"},
//         [
//             React.createElement("h1" , {id:"heading"} , "Heading 1"),
//             React.createElement("h2" , {id:"heading2"} , "Heading 2"),
//         ]
//         ),
//         React.createElement("div" , {id:"child2"},
//         [
//             React.createElement("h1" , {id:"heading"} , "Heading 1"),
//             React.createElement("h2" , {id:"heading2"} , "Heading 2"),
//         ]
//         )
//     ]

//     )
// )

//this is so complicate so we use JSX which can sort the creation of multipal div