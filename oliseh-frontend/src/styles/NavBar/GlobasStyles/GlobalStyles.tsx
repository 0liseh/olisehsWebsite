import { createGlobalStyle} from "styled-components"

interface myTheme {
    body: string;
    text: string
}

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
}

export const darkTheme = {
  body: '#242F35',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#242F35',
}

//createGlobalStyle This method generates a React component, which, when added to your component tree, will inject global styles into the document
//We have defined a GlobalStyle component and assigned background and color properties to values from the theme object. 
export const GlobalStyles = createGlobalStyle<{theme: myTheme}>
`
  body {
    background: #242F35;
    color: #FAFAFA;
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`
