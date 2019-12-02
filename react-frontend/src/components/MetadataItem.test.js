import React from "react";
import { render } from "@testing-library/react";
import { mock } from "../../__tests__/mocks/parsedCharacterMetadata";
import { MetadataItem } from "./MetadataItem";

it("matches snapshot", () => {
  const component = render(<MetadataItem entry={mock[9]} />);
  expect(component.asFragment()).toMatchSnapshot();
});
