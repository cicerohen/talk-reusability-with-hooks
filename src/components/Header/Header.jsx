import React from "react";
import { useCharactersContext } from "../../contexts/Characters";
import Loader from "../Loader";

const styles = {
  header: {
    height: "100px",
    backgroundColor: "#f5f5f5",
    display: "flex",
    paddingLeft: "20px",
    paddingRight: "20px",
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerTitle: {
    textTransform: "uppercase",
    fontSize: "24px"
  },
  button: {
    borderStyle: "solid",
    backgroundColor: "#e8e8e8",
    borderWidth: "1px",
    borderColor: "#bfbdbd",
    padding: "1em 1.5em",
    fontSize: "0.8rem",
    borderRadius: "5px",
    textTransform: "uppercase",
    cursor: "pointer"
  },
  dangerButton: {
    borderStyle: "solid",
    backgroundColor: "#fd4444",
    borderWidth: "1px",
    borderColor: "#d93a3a",
    color: "#fff",
    padding: "1em 1.5em",
    fontSize: "0.8rem",
    borderRadius: "5px",
    textTransform: "uppercase",
    cursor: "pointer"
  },
  disabledDangerButton: {
    borderStyle: "solid",
    backgroundColor: "#fd4444",
    borderWidth: "1px",
    borderColor: "#d93a3a",
    color: "#fff",
    padding: "1em 1.5em",
    fontSize: "0.8rem",
    borderRadius: "5px",
    textTransform: "uppercase",
    cursor: "no-drop",
    opacity: "0.4"
  }
};

const Header = () => {
  const {
    selectedCharacter,
    isFetchingCharacters,
    fetchCharacters,
    setSelectedCharacter
  } = useCharactersContext();

  const removeSelectedCharacter = React.useCallback(() => {
    setSelectedCharacter(null);
  }, [setSelectedCharacter]);

  return (
    <header style={styles.header}>
      <h1 style={styles.headerTitle}>Personagens Marvel</h1>
      {isFetchingCharacters && <Loader />}
      <div>
        <button style={styles.button} onClick={fetchCharacters}>
          Recarregar lista
        </button>
        {selectedCharacter ? (
          <button style={styles.dangerButton} onClick={removeSelectedCharacter}>
            Remover personagem selecionado
          </button>
        ) : (
          <button
            style={styles.disabledDangerButton}
            onClick={removeSelectedCharacter}
          >
            Remover personagem selecionado
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
