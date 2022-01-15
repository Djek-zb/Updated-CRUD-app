import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./Redux/reducer";
import MainPage from "./components/Pages/MainPage";

import './App.css';

function App() {

  const dispatch = useDispatch();

  const state = useSelector((state) => state.users.usersArray);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { dispatch(fetchUsers()) }, []);



  return (

    <div className="App">

      <MainPage state={ state } />
      
    </div>

  );
}

export default App;
