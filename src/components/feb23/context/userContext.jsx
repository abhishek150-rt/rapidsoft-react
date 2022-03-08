import React from 'react'

// Create a context
const userContext = React.createContext();

// create a provider context
const UserProvider = userContext.Provider;

// create a consumer context
const UserConsumer = userContext.Consumer;

//exporting 
export { UserProvider, UserConsumer }