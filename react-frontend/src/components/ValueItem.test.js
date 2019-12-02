import React from "react";
import { render } from "@testing-library/react";
import { ValueItem } from "./ValueItem";
import CharacterView from "./Character/CharacterView";
import { mock } from "../../__tests__/mocks/parsedCharacterMetadata";

it("renders for string", () => {
  const { getByText } = render(<ValueItem value="string" />);
  expect(getByText("string")).toBeInstanceOf(Element);
});

it("renders for number", () => {
  const { getByText } = render(<ValueItem value={23} />);
  expect(getByText("23")).toBeInstanceOf(Element);
});

it("renders for array of strings", () => {
  const { getByText } = render(<ValueItem value={["one", "two", "threee"]} />);
  expect(getByText("one")).toBeInstanceOf(Element);
  expect(getByText("two")).toBeInstanceOf(Element);
  expect(getByText("threee")).toBeInstanceOf(Element);
});

it("renders for array of named objects", () => {
  const { getByText } = render(
    <ValueItem value={[{ name: "one" }, { name: "two" }, { name: "threee" }]} />
  );
  expect(getByText("one")).toBeInstanceOf(Element);
  expect(getByText("two")).toBeInstanceOf(Element);
  expect(getByText("threee")).toBeInstanceOf(Element);
});

it("renders for named object", () => {
  const { getByText } = render(<ValueItem value={{ name: "one" }} />);
  expect(getByText("one")).toBeInstanceOf(Element);
});

it("matches snapshot", () => {
  const component = render(<ValueItem value={["one", "two", "threee"]} />);
  expect(component.asFragment()).toMatchSnapshot();
});
