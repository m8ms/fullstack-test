import React from "react";

const CharacterView = ({ character: { name } }) => (
  <div>
    <div>Name: {name}</div>
  </div>
);

export default CharacterView;
