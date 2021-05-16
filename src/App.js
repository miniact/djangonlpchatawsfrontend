import React, { useState, useEffect } from 'react';
// import Header from './Header';
// import Home from './Home';
// import Checkout from './Checkout';
// import Login from './Login';
//router
import MainChat from './MainChat'
import Sidebar from './Sidebar'
import Promo from './Promo'

import styled from "styled-components";

// import Chat from './Chat'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';


import './App.css';
import Login from './Login';
import Ads from './Ads';
// import Status from './Status'
import MyAds from './MyAds';



const Body = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    
    /* background-color:#47dca2;
     */
    background: linear-gradient(to bottom right, #47dca2 0%, #04bca0 100%);
    height:100vh;
    width:100wh;
    

`

const Container = styled.div`
    display:flex;

    top:25px;
    background-color:white;
    min-width:95%;
    min-height:95%;
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
`



function App() {

  // const [user, Setuser] = useState(null);
  const [{ user }, dispatch] = useStateValue();
  return (
    //BEM syntax


    !user ? (<Router><Body><Login /></Body></Router>) :

      (


        <Router>




          {/* <div className="container-fluid m-0 p-0">*/}
          {/* <center> <h3>VSM Whatsapp 🎄  </h3></center> */}
          {/*header section*/}
          {/*Home Section*/}



          <Switch>

            <Route path="/ads">
              <Ads />
              {/* <Status /> */}
            </Route>

            <Route path="/myads">
              <MyAds />
              {/* <Status /> */}
            </Route>



            <Route path="/status">

              <h1>Welcome To Status Page! 🤑 </h1>
              {/* <Checkout /> */}

            </Route>



            <Route path="/rooms/:roomId">
              <Body>
                <Container>
                  <Sidebar />
                  <MainChat />

                </Container>
              </Body>
            </Route>
            <Route path="/">
              <Body>
                <Container>
                  <Sidebar />
                  {/* <MainChat /> */}
                  <Promo />
                </Container>
              </Body>
            </Route>








          </Switch>


        </Router>

      ));
}

export default App;







// <Body>
//   <Container>
//     <Sidebar />
//     <MainChat />
//   </Container>
// </Body>

