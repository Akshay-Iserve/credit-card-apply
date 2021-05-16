
import React from 'react';
import Apply from "./credit-card/Apply";
import Eligibility from "./credit-card/Eligibility";
import FinalApply from "./credit-card/FinalApply";
import Navbar from "./shared/navbar";
import ThankYou from './other/ThankYou';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <BrowserRouter basename="/apply-now">
        <Switch >
          <Route path="/credit-card/final-submit" exact component={FinalApply} />
          <Route path="/credit-card/offers" exact component={Eligibility} />
          <Route path="/credit-card" exact component={Apply} />
          <Route path='/thank-you' exact component={ThankYou} />
          <Route path="/" exact component={() => <div class="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
            <h1 className="text-center">Welcome To <span style={{ color: '#0165ad' }}>iServeFinancial.Com</span>
            </h1>
          </div>} />
          <Route component={() => <h1 className="text-center">404 {'\n'}Page Not Found</h1>} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
