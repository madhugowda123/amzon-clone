import React from "react";

//Create a Context
const UserContext = React.createContext("Gowda");

//Creating Provider and Consumer
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
