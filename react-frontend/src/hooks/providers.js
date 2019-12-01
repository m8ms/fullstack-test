import { useEffect, useState } from "react";
import { getChewbacca } from "../api";

export const useCharacterProvider = () => {
  //todo: use id to get particular character
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    if (character === null) {
      getChewbacca().then(character => setCharacter(character));
    }
  }, [character]);

  return character;
};
