import React from "react";
import { buyIcecream } from "../redux1/icecreamshop/IcecreamAction";

// connect function1
import { connect } from "react-redux";

function IcecreamContainer(props) {
  return (
    <div>
      <h2>Number of Icecreams - {props.numOfIcecream}</h2>
      <button onClick={props.buyIcecream}>Buy a Icecream</button>
    </div>
  );
}

// to pass state as a props
const mapStateToProps = (state) => {
  return {
    numOfIcecream: state.numOfIcecream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);
