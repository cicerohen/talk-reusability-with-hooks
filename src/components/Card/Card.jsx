import React from "react";
import { useCharactersContext } from "../../contexts/Characters";

const styles = {
  card: {
    backgroundColor: "#f9f9f9",
    borderColor: "#ccc",
    borderWidth: "1px",
    borderStyle: "solid",
    padding: "40px",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px",
    boxShadow: "0 0 10px #dfdfdf"
  },
  cardTitle: {
    textTransform: "uppercase",
    color: "#444",
    fontSize: "32px"
  },
  cardDescription: {
    color: "#666"
  },
  cardThumbnail: {
    borderRadius: "50%",
    width: "250px",
    height: "250px",
    display: "flex"
  }
};
const Card = () => {
  const { selectedCharacter } = useCharactersContext();
  return (
    <>
      {selectedCharacter ? (
        <section style={styles.card}>
          <img
            alt={selectedCharacter.name}
            src={`${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`}
            style={styles.cardThumbnail}
          />
          <h2 style={styles.cardTitle}>{selectedCharacter.name}</h2>
          {selectedCharacter.description && (
            <p style={styles.cardDescription}>
              {selectedCharacter.description}
            </p>
          )}
        </section>
      ) : (
        <div>NENHUM PERSONAGEM SELECIONADO</div>
      )}
    </>
  );
};

export default Card;
