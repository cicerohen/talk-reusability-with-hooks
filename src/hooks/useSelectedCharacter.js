import { useState, useEffect } from "react";

const useSelectedCharacter = isFetchingCharacter => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  /* REMOVENDO O PERSONAGEM SELECIONADO ASSIM QUE UMA NOVA REQUISIÇÃO É INICIADA */
  useEffect(() => {
    if (isFetchingCharacter) {
      setSelectedCharacter(null);
    }
  }, [isFetchingCharacter, setSelectedCharacter]);

  return {
    selectedCharacter,
    setSelectedCharacter
  };
};

export default useSelectedCharacter;
