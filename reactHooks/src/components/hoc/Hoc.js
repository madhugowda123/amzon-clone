import React, { Component } from "react";

// step=2   Create a Data Component

const DataComponent = (ComposedComponent, url) =>
  class DataComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
        loading: false,
        loaded: false,
      };
    }

    componentDidMount() {
      //to load data
      this.setState({
        loading: true,
      });
      fetch(url)
        .then((response) => response.json())
        .then((data) =>
          this.setState({
            loaded: true,
            loading: false,
            data,
          })
        );
    }

    render() {
      return (
        <div>
          {this.state.loaded ? (
            <ComposedComponent {...this.state} {...this.props} />
          ) : (
            <div>Please wait data is Loading!!!</div>
          )}
        </div>
      );
    }
  };

//step=1  Presentaion Component i.e the Composed component

const PeopleList = ({ data }) => (
  <ol>
    {data.results.map((person, i) => {
      //destructing the data values
      const { first, last } = person.name;
      return (
        <li key={i}>
          {first} {last}
        </li>
      );
    })}
  </ol>
);

//===================Useing the HOC================

//PeopleList = ComposedComponent parameter
//"https://randomuser.me/api?results=10" == refers to url parameter

//RandomUsers is NEW COMPONENT
const RandomUsers = DataComponent(
  PeopleList,
  "https://randomuser.me/api?results=10"
);

export default RandomUsers;
