import React from "react";

//step1; create Context
const MyContext = React.createContext();

//step2; create Provider with Class

class Provider extends React.Component {
  state = {
    name: "nandi Hills",
  };
  render() {
    return (
      <div>
        <MyContext.Provider value={{ state: this.state }}>
          {this.props.children}
        </MyContext.Provider>
      </div>
    );
  }
}
//step3: get rid of props in child component
const Tril = (props) => {
  return (
    <div>
      {/*this consumes the data from the parent */}
      <MyContext.Consumer>
        {(contexts) => {
          return <h2>This is a Context Value: {contexts.state.name}</h2>;
        }}
      </MyContext.Consumer>
    </div>
  );
};

const Lift = (props) => {
  return <Tril />;
};

//step 4; create parent component
export default class NewResort extends React.Component {
  render() {
    return (
      <div>
        <Provider>
          <Lift />
        </Provider>
      </div>
    );
  }
}
