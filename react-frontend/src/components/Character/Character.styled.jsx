import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 100px 1fr;
`;

export const Portrait = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameLink = styled.a`
  margin: 10px 0;
`;

export const PhotoPlaceholder = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100px;
  height: 130px;
  position: relative;
  overflow: hidden;

  :before,
  :after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    border-radius: 100%;
    border: 3px solid #aaa;
  }
  :before {
    left: 15px;
    top: 15px;
    width: 70px;
    height: 70px;
  }

  :after {
    width: 100px;
    height: 100px;
    bottom: -60px;
    border-bottom: 0;
    border-left: 0;
    border-right: 0;
  }
`;

export const MetadataGrid = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 5px;
`;
