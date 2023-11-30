import React, { useEffect } from "react";
import CardContainer from "./Components/CardContainer";
import CoinDetails from "./page/CoinDetails";
import {BrowserRouter , Routes ,Route} from "react-router-dom"
import PageNotFound from "./page/PageNotFound";
import NavBar from "./Components/NavBar";
const App = () => {
 
  return (
    //using Routing for provide route to each components.
    <BrowserRouter> 
     <div>
      <NavBar/>
        <Routes>
        <Route path="/" element={ <CardContainer />}/>
          <Route path="coin/:Id" element={<CoinDetails />}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
     
  );
};

export default App;
