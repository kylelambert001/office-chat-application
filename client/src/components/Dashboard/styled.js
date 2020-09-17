import styled from "styled-components";

export const GridWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.backgroundPrimary};
  display: grid;
  grid-template-columns: 38rem auto;
  grid-template-rows: 7rem auto;
  grid-template-areas:
    "topbar topbar"
    "side message";
`;

export const Heading = styled.h2`
  padding: 0 1.5rem;
`;

export const Topbar = styled.div`
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  grid-area: topbar;
  border-bottom: 1px solid ${(props) => props.theme.borderBase};
`;

export const Side = styled.div`
  grid-area: side;
  border-right: 1px solid ${(props) => props.theme.borderBase};
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const SideTopbar = styled.div`
  display: flex;
  align-items: center;
  height: 7rem;
  padding: 0 1.5rem;
  background-color: ${(props) => props.theme.backgroundSecondary};
  border-bottom: 1px solid ${(props) => props.theme.borderBase};
`;

export const Message = styled.div`
  grid-area: message;
`;

export const MessageTopbar = styled.div`
  display: flex;
  align-items: center;
  height: 7rem;
  padding: 0 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.borderBase};
`;
