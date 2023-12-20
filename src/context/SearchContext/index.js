import { createContext } from "react";

const SearchAndThemeContext = createContext({
  search: "",
  changeSearch: () => { }
})

export default SearchAndThemeContext