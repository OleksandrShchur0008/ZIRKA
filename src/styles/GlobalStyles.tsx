import { Global, css } from "@emotion/react"
import { colors } from "./colors"

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: auto;
    margin: 0;
    padding: 0;
    font-family: Helvetica, Arial, sans-serif !important;
  }

  body::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex: 1;
    height: 100%;
  }

  /* ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  } */
`

export default function GlobalStyles() {
  return <Global styles={globalStyles} />
}
