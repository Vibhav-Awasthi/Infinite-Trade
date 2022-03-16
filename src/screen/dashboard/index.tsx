import React from 'react'
import Utils from "../../Utils";
import { CommonButton } from '../../components/styledComponents/auth/signIn';
import { useDispatch } from 'react-redux';
import {logOut} from "./action";
import {useHistory} from "react-router-dom"

const Dashboard = () => {
  const dispatch= useDispatch();
  const history = useHistory();
  // const logout = () => {
  //   dispatch(logOut(history));
  // };

  const handleClick=()=>{
    history.push(Utils.Pathname.LOGIN);
    Utils.showAlert(1,"Logged out");
  };
  return (
    <>
    <h1> Welcome to Infinite Trades Dashboard</h1>
    <CommonButton
                  
                  sx={{ color: "#000", backgroundColor: "#fff" }}
                  variant="contained"
                  onClick={handleClick}
                >
                Logout</CommonButton>
    </>
  )
}

export default Dashboard;