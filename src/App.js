import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";



function App() {
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      // Check if the page is being refreshed
      if (e) {
        e.preventDefault();
        e.returnValue = ''; // Some browsers require a non-empty string
      }

      // Perform any additional actions you need before the page unloads
      console.log('Page is being refreshed');
    };

    // Add the event listener
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
   
  }, []);
 
  return (
    <div className="App">
     
      {isLoggedIn?<Layout/>:<Auth/>}
    </div>
  );
}

export default App;
