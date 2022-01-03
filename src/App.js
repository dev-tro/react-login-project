import React, {useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from "./store/auth-context";

function App() {
    //const [isLoggedIn, setIsLoggedIn] = useState(false);

    // This grabs the cached value in case the page is refreshed
    // Problem is, when we setIsLoggedIn that changes the state, so the useState will
    // refresh this App.js, causing it all the happen again (infinite loop!). We need to use 'effects' here
    /*const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInInfo === '1') {
        setIsLoggedIn(true);
    }*/

    // Move that infinite loop code into the effect...
    // The code will now be called AFTER all the other components and ONLY if the given list
    // of dependencies have a change.
    // Since we are providing no dependencies -
    //   - this code will run once (after everything else in here)
    //   - the state change will refresh app.ja
    //   - there will be no changes in dependencies
    // So essentially this chunk of code will only run one time on startup. Just what we wanted!

    // This code was moved to auth-context
    /*useEffect(() => {
        const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
        if (storedUserLoggedInInfo === '1') {
            setIsLoggedIn(true);
        }
    }, []);*/

    /*    const loginHandler = (email, password) => {
            // We should of course check email and password
            // But it's just a dummy/ demo anyways
            localStorage.setItem('isLoggedIn', '1');
            setIsLoggedIn(true);
        };

        const logoutHandler = () => {
            localStorage.removeItem('isLoggedIn');
            setIsLoggedIn(false);
        };*/

    const ctx = useContext(AuthContext);

    return (
        /*Provider returns a react component. By wrapping everything returned by App, that gives this AuthContext to
        everything in our app*/
        // <AuthContext.Provider value={{
        //     isLoggedIn: isLoggedIn,
        //     onLogout: logoutHandler
        // }}>
        <React.Fragment>
            <MainHeader/>
            <main>
                {!ctx.isLoggedIn && <Login/>}
                {ctx.isLoggedIn && <Home/>}
            </main>
        </React.Fragment>
        // </AuthContext.Provider>
    );
}

export default App;
