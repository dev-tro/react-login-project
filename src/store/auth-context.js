import React, {useEffect, useState} from "react";

// we name the js file using dash notation to show that this does not contain a component

// This is an object that contains components, so lets use camel case
const AuthContext = React.createContext({
    isLoggedIn: false,
    /* adding dummy functions here because we know itll be added later.
   This helps IDE suggestions and documenting intention*/
    onLogout: () => {
    },
    onLogin: (email, password) => {
    }
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
        if (storedUserLoggedInInfo === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    }

    const loginHandler = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', '1');
    }
    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
    }}>{props.children}</AuthContext.Provider>
};

export default AuthContext;
