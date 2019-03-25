import React from "react";

const Quote = ({ destination, country, photo, distance}) => (
  <figure>
    <img src={photo} alt={country} />
    <figcaption>
      <blockquote>{destination}</blockquote>
      <cite>{country}</cite>
      <blockquote>{distance}</blockquote>
    </figcaption>
  </figure>
);

export default Quote;
