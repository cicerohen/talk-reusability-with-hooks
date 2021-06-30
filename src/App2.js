import React from "react";

import useFetchApi from "./hooks/useFetchApi";

const styles = {
  app: {
    height: "100vh"
  },
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
  row: {
    display: "flex"
  },
  column: {
    flex: "1 1 50%",
    padding: "20px",
    height: "90vh",
    overflow: "auto"
  },
  columnTitle: {
    textTransform: "uppercase",
    fontSize: "16px"
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
  },
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
  },
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
  },
  loader: {
    textTransform: "uppercase",
    padding: "2px 5px",
    backgroundColor: "#4d4d4d",
    fontWeight: "bold",
    display: "inline",
    color: "#fff"
  }
};

function App2() {
  /* REQUISITA A LISTA DE PERSONAGENS */
  const { isFetching, data: characters, fetchData } = useFetchApi(
    "/public/characters"
  );

  /* ARMAZENA O PERSONAGEM SELECIONADO */
  const [selectedCharacter, setSelectedCharacter] = React.useState(null);

  /* SELECIONA UM PERSONAGEM */
  const characterOnClick = React.useCallback(
    character => () => {
      const selected = characters.find(c => c.id === character.id);
      if (selected) {
        setSelectedCharacter(selected);
      }
    },
    [characters, setSelectedCharacter]
  );

  /* REMOVE O PERSONAGEM SELECIONADO */
  const removeSelectedCharacter = React.useCallback(() => {
    setSelectedCharacter(null);
  }, [setSelectedCharacter]);

  /* REMOVENDO O PERSONAGEM SELECIONADO ASSIM QUE UMA NOVA REQUISIÇÃO É INICIADA */
  React.useEffect(() => {
    if (isFetching) {
      removeSelectedCharacter();
    }
  }, [isFetching, removeSelectedCharacter]);

  return (
    <div className="App" style={styles.app}>
      {/* CABEÇALHO */}

      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Personagens Marvel</h1>
        {isFetching && <p style={styles.loader}>loading</p>}
        <div>
          <button style={styles.button} onClick={fetchData}>
            Recarregar lista
          </button>
          {selectedCharacter ? (
            <button
              style={styles.dangerButton}
              onClick={removeSelectedCharacter}
            >
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

      {/* CONTEÚDO PRINCIPAL */}

      <main>
        <div style={styles.row}>
          {/* COLUNA LISTA DE PERSONAGENS  */}
          <section style={styles.column}>
            <h2 style={styles.columnTitle}>Lista de personagens</h2>
            <div>
              {isFetching ? (
                <p style={styles.loader}>loading</p>
              ) : (
                <ul style={styles.list}>
                  {/* ITERANDO NA LISTA DE PERSONAGENS */}

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
          </section>

          {/* COLUNA PERSONAGEM SELECIONADO */}
          <section style={styles.column}>
            <h2 style={styles.columnTitle}>Personagem selecionado</h2>
            {selectedCharacter && (
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
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App2;
