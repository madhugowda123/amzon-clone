import "./App.css";

import React, { useState } from "react";

function App() {
  const dataList = [
    {
      id: 1,
      name: "madhu",
      designation: "web developer",
      empid: 123,
    },
    {
      id: 2,
      name: "manu",
      designation: "java developer",
      empid: 124,
    },
    {
      id: 3,
      name: "malli",
      designation: "full stack developer",
      empid: 125,
    },
    {
      id: 4,
      name: "raju",
      designation: "web developer",
      empid: 126,
    },
    {
      id: 5,
      name: "ravi",
      designation: "html developer",
      empid: 126,
    },
    {
      id: 6,
      name: "madhu",
      designation: "web developer",
      empid: 127,
    },
    {
      id: 7,
      name: "manu",
      designation: "java developer",
      empid: 128,
    },
    {
      id: 8,
      name: "malli",
      designation: "full stack developer",
      empid: 129,
    },
    {
      id: 9,
      name: "raju",
      designation: "web developer",
      empid: 130,
    },
    {
      id: 10,
      name: "ravi",
      designation: "html developer",
      empid: 131,
    },
    {
      id: 11,
      name: "madhu",
      designation: "web developer",
      empid: 132,
    },
    {
      id: 12,
      name: "manu",
      designation: "java developer",
      empid: 133,
    },
    {
      id: 13,
      name: "malli",
      designation: "full stack developer",
      empid: 134,
    },
    {
      id: 14,
      name: "raju",
      designation: "web developer",
      empid: 135,
    },
    {
      id: 15,
      name: "ravi",
      designation: "html developer",
      empid: 136,
    },
    {
      id: 16,
      name: "madhu",
      designation: "web developer",
      empid: 137,
    },
    {
      id: 17,
      name: "manu",
      designation: "java developer",
      empid: 138,
    },
    {
      id: 18,
      name: "malli",
      designation: "full stack developer",
      empid: 139,
    },
    {
      id: 19,
      name: "raju",
      designation: "web developer",
      empid: 140,
    },
    {
      id: 20,
      name: "ravi",
      designation: "html developer",
      empid: 141,
    },
  ];

  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataList);

  // exclude column list from filter
  const excludeColumns = ["id"];

  // handle change event of search input
  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(dataList);
    else {
      const filteredData = dataList.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };

  return (
    <div className="App">
      <a href="https://www.cluemediator.com">Clue Mediator</a>
      <br />
      <br />
      Search:{" "}
      <input
        style={{ marginLeft: 5 }}
        type="text"
        placeholder="Type to search..."
        value={searchText}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className="box-container">
        {data.map((d, i) => {
          return (
            <div key={i} className="box" style={{ backgroundColor: d.color }}>
              <b>Name: </b>
              {d.name}
              <br />

              <b>Designation: </b>
              {d.designation}
              <br />
              <b>Emp id: </b>
              {d.empid}
            </div>
          );
        })}
        <div className="clearboth"></div>
        {data.length === 0 && <span>No records found to display!</span>}
      </div>
    </div>
  );
}

export default App;

// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import ResultComponent from "./components/calculatorApp/ResultComponent";
// import KeyPadComponent from "./components/calculatorApp/KeyPadComponent";

// class App extends Component {
//   constructor() {
//     super();
//     //initially the state will be zero
//     this.state = {
//       result: "",
//     };
//   }
//   //--------step-2------
//   //create onClick () -take "name" of the button clicked to change the state depending on the input
//   onClick = (button) => {
//     if (button === "=") {
//       this.calculate();
//     } else if (button === "C") {
//       this.reset();
//     } else if (button === "CE") {
//       this.backspace();
//     } else {
//       this.setState({
//         result: this.state.result + button,
//       });
//     }
//   };

//   // ----------step-1-----------

//   //creating fun's (when onclicked on some button it shoould do some particular action)

//   // fun'1-- calculate()-  Calculate result, this is triggered when “=” button is pressed

//   calculate = () => {
//     try {
//       this.setState({
//         //eval() evaluates the expression
//         result: (eval(this.state.result) || "0") + "",
//       });
//     } catch (e) {
//       this.setState({
//         result: "error",
//       });
//     }
//   };

//   //fun'2-- reset() -Clear our output-- trigered when “C” is pressed.

//   reset = () => {
//     this.setState({
//       result: "",
//     });
//   };

//   //fun'n 3- Clear the last character that was pressed triggered on “CE”.

//   backspace = () => {
//     this.setState({
//       //slice(start,end ) here it deletes the last value
//       result: this.state.result.slice(0, -1),
//     });
//   };

//   render() {
//     return (
//       <div>
//         <div
//           className="card bg-secondary"
//           style={{ marginLeft: 600, width: 190 }}
//         >
//           <div className="calculator-body">
//             <h1 style={{ textAlign: "center" }}>
//               <i>Calculator</i>
//             </h1>

//             <ResultComponent result={this.state.result} />
//             <KeyPadComponent onClick={this.onClick} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default App;
