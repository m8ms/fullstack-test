import React, { useMemo } from "react";
import { omit } from "ramda";
import { useCharacterProvider } from "../../hooks/providers";
import CharacterView from "./CharacterView";

/**
 * This component should show some information about a Star Wars character.
 * @returns {*}
 * @constructor
 */
const CharacterContainer = () => {
  const character = useCharacterProvider();

  const relevantMetadata = useMemo(
    () => Object.entries(omit(["created", "edited", "url", "name"], character)),
    [character]
  );

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <CharacterView
      name={character.name}
      url={character.url}
      metadata={relevantMetadata}
    />
  );
};

export default CharacterContainer;
