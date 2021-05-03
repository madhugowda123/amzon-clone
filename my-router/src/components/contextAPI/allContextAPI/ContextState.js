import React from "react";

//step 1 create context
const Context = React.createContext();

//step 2 create provider

class Provider extends React.Component {
  state = {
    name: "madhu",
    status: "Greetigs from Us!!",
  };
  render() {
    return (
      <div>
        <Context.Provider
          value={{
            state: this.state,
            ChangeStatus: () => {
              this.setState({
                status: "Thanks for Joining!!!",
              });
            },
          }}
        >
          {this.props.children}
        </Context.Provider>
      </div>
    );
  }
}
const Tril = (props) => {
  return (
    <div>
      {/*this consumes the data from the parent */}
      <Context.Consumer>
        {(contexts) => {
          return (
            <div>
              <h2>Welcome {contexts.state.name}</h2>;
              <h2>{contexts.state.status}</h2>
              <button onClick={contexts.ChangeStatus}>Click</button>
            </div>
          );
        }}
      </Context.Consumer>
    </div>
  );
};

const Lift = (props) => {
  return <Tril />;
};

//step 4; create parent component
export default class ResortState extends React.Component {
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
