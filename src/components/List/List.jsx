import React from "react";
import { useCharactersContext } from "../../contexts/Characters";
import Loader from "../Loader";

const styles = {
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0
  },
  listItem: {
    minHeight: "80px",
    display: "flex",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: "1px",
    borderStyle: "solid",
    marginTop: "-1px",
    cursor: "pointer",
    padding: "20px"
  },
  listItemTitle: {
    textTransform: "uppercase",
    margin: "0",
    color: "#444",
    fontsize: "14px"
  },
  listItemDescription: {
    color: "#666"
  },
  listThumbnail: {
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    marginRight: "20px"
  }
};

const List = () => {
  const {
    isFetchingCharacters,
    characters,
    setSelectedCharacter
  } = useCharactersContext();

  const characterOnClick = React.useCallback(
    character => () => {
      const selected = characters.find(c => c.id === character.id);
      if (selected) {
        setSelectedCharacter(selected);
      }
    },
    [characters, setSelectedCharacter]
  );

  return (
    <div>
      {isFetchingCharacters ? (
        <Loader />
      ) : (
        <ul style={styles.list}>
          {characters.map(character => (
            <li
              style={styles.listItem}
              key={character.id}
              onClick={characterOnClick(character)}
            >
              <div>
                <img
                  alt={character.name}
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  style={styles.listThumbnail}
                />
              </div>
              <div>
                <h3 style={styles.listItemTitle}>{character.name}</h3>
                <p style={styles.listItemDescription}>
                  {character.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
