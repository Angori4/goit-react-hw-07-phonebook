
import { createGlobalStyle } from 'styled-components'
import 'modern-normalize'

const GlobalStyle = createGlobalStyle`
body {
  background-color: 	#EFEFEF;
   margin: 0px;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
     sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
 p, h1, h2, ul {
   margin: 0;
 }
 code {
   font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
     monospace;
 }
 `
export default GlobalStyle;

