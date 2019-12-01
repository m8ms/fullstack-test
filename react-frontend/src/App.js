import React from "react";
import Character from "./components/Character";
import { Body, Card, Footer, globalStyles, Header } from "./App.styled";
import emotionReset from "emotion-reset";
import { Global } from "@emotion/core";

function App() {
  return (
    <>
      <Global styles={emotionReset} />
      <Global styles={globalStyles} />
      <Header>Star Wars character page</Header>
      <Body>
        <Card>
          <Character />
        </Card>
      </Body>
      <Footer>Piotr Martyniak</Footer>
    </>
  );
}

export default App;
