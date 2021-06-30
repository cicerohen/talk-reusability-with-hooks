import { useContext } from "react";

import CharactersContext from "./CharactersContext";

const useCharactersContext = () => useContext(CharactersContext);

export default useCharactersContext;
