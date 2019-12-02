import React from "react";
import {
  MetadataGrid,
  NameLink,
  PhotoPlaceholder,
  Portrait,
  Wrapper
} from "./Character.styled";
import { MetadataItem } from "../MetadataItem";
import PropTypes from "prop-types";

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

CharacterView.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  metadata: PropTypes.arrayOf(PropTypes.array)
};

export default CharacterView;
