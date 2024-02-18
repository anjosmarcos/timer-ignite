import { Button } from "./components/Button";

import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
      <ThemeProvider theme={defaultTheme}>
        <Button varient="primary" />
        <Button varient="secondary" />
        <Button varient="success" />
        <Button varient="danger" />
        <Button />
          
        <GlobalStyle />
    </ThemeProvider>
    )
}

