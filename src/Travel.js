import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quote from "./Quote";

const quotes = [
  {
    destination: "Los Angeles",
    country: "United States",
    photo: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    distance: "0m"
  },
  {
    destination: "Paris",
    country: "France",
    photo: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
    distance: "1m"
  },
  {
    destination: "Reykjavik",
    country: "Island",
    photo: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
    distance: "2m"
  },
  {
    destination:
      "Melbourne",
    country: "Australia",
    photo: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FSeymourSkinner.png?1497567511460",
    distance: "3m"
  },
  {
    destination: "Casablanca",
  country: "Moroco",
  photo: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FSeymourSkinner.png?1497567511460",
  distance: "4m"
  }
  ];

const Quotes = () => (
  <div>
    {quotes.map(quote => <Quote {...quote} />
    )}
  </div>
);

export default Quotes;