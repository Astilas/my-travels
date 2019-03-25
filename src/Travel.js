import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";

class Travel extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <Quote
          destination="Pheonix"
          country="United States"
          photo="http://www.office-tourisme-usa.com/sites/default/files/media/arizona-arizonavat-monument-valley-263.jpg"
	  distance="2m"
	 
        />
        <Quote
          destination="Horse shoe bend"
          country="Island"
          photo="https://guidetoiceland.is/image/413445/x/0/passez-un-moment-dans-une-authentique-grotte-de-glace-au-sommet-d-un-glacier-avec-cette-visite-de-3-jours.jpg"
	  distance="3m"
        />
      </div>
    );
  }
}

export default Travel;
