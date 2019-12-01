import React from "react";
import {
  MetadataGrid,
  NameLink,
  PhotoPlaceholder,
  Portrait,
  Wrapper
} from "./Character.styled";
import { MetadataItem } from "../MetadataItem";

const CharacterView = ({ metadata, url, name }) => {
  return (
    <Wrapper>
      <Portrait>
        <PhotoPlaceholder />
        <NameLink href={url}>{name}</NameLink>
      </Portrait>
      <MetadataGrid>
        {metadata.map((entry, i) => (
          <MetadataItem entry={entry} key={i} />
        ))}
      </MetadataGrid>
    </Wrapper>
  );
};

export default CharacterView;
