import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import Card from "./components/Card";

const styles = {
  app: {
    height: "100vh"
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
  }
};

function App5() {
  return (
    <div className="App" style={styles.app}>
      <Header />
      <main>
        <div style={styles.row}>
          <section style={styles.column}>
            <h2 style={styles.columnTitle}>Lista de personagens</h2>
            <List />
          </section>
          <section style={styles.column}>
            <Card />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App5;
