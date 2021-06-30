import React from "react";

const styles = {
  loader: {
    textTransform: "uppercase",
    padding: "2px 5px",
    backgroundColor: "#4d4d4d",
    fontWeight: "bold",
    display: "inline",
    color: "#fff"
  }
};
const Loader = () => <p style={styles.loader}>loading</p>;

export default Loader;
