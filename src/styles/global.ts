import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 .125rem ${(props) => props.theme['gray-300']};
}

body {
    background: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-100']};
}

body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
}
`
