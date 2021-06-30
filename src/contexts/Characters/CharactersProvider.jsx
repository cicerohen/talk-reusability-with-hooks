import React from "react";

import CharactersContext from "./CharactersContext";
import useFetchApi from "../../hooks/useFetchApi";
import useSelectedCharacter from "../../hooks/useSelectedCharacter";

const CharactersProvider = ({ children }) => {
  /* REQUISITA UM PERSONAGEM */
  const {
    data: characters,
    isFetching: isFetchingCharacters,
    fetchData: fetchCharacters
  } = useFetchApi("/public/characters");

  /* ARMAZENA O PERSONAGEM SELECIONADO */
  const { selectedCharacter, setSelectedCharacter } = useSelectedCharacter(
    isFetchingCharacters
  );

  const value = {
    isFetchingCharacters,
    characters,
    fetchCharacters,
    selectedCharacter,
    setSelectedCharacter
  };

  return (
    <CharactersContext.Provider value={value}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersProvider;
