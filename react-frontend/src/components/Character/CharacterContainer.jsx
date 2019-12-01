import React from "react";
import { useCharacterProvider } from "../../hooks/providers";
import CharacterView from "./CharacterView";

/**
 * This component should show some information about a Star Wars character.
 * @returns {*}
 * @constructor
 */
const CharacterContainer = () => {
  const character = useCharacterProvider();
  if (!character) {
    return <div>Loading...</div>;
  }
  return <CharacterView character={character} />;
};

export default CharacterContainer;
