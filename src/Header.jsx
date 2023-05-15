import styled from "styled-components";
import Logos from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const GlobalNav = styled.div`
  width: 1080px;
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
`;
const SmallNav = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    padding: 0 15px;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;

export default function Header() {
  return (
    <Container>
      <GlobalNav>
        <div>
          <img src={Logos} width="60px" alt="logo" />
        </div>
        <SmallNav>
          <div>업체소개</div>
          <div>포트폴리오</div>
          <div>사진</div>
          <div>게시판</div>
          <div>연락</div>
        </SmallNav>
      </GlobalNav>
    </Container>
  );
}
