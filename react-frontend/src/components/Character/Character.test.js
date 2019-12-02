import React from "react";
import { render } from "@testing-library/react";
import Character from "./index";
import CharacterView from "./CharacterView";
import { mock } from "../../../__tests__/mocks/parsedCharacterMetadata";

it("shows 'Loading' at init", () => {
  const { getByText, asFragment, container, baseElement } = render(
    <Character />
  );
  expect(getByText("Loading...")).toBeInstanceOf(Element);
});

it("matches snapshot with data", () => {
  const component = render(
    <CharacterView url={"some/url"} name={"Chewbacca"} metadata={mock} />
  );
  expect(component.asFragment()).toMatchSnapshot();
});
