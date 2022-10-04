import { createGlobalStyle} from "styled-components"

//createGlobalStyle This method generates a React component, which, when added to your component tree, will inject global styles into the document
//We have defined a GlobalStyle component and assigned background and color properties to values from the theme object. 
export const GlobalStyles = createGlobalStyle
`
  body {
    background: #000000;
    color: #FAFAFA;
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`
//background: #181824; for navy blue