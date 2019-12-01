import React from "react";
import { toSentenceCase } from "js-convert-case";
import { ValueItem } from "./ValueItem";

export const MetadataItem = ({ entry: [label, value] }) => {
  return (
    <>
      <label>{toSentenceCase(label)}:</label>
      <ValueItem value={value} />
    </>
  );
};
