import styled from "styled-components";
import NavBar from "../molecules/Navbar";

const HeaderSection = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F4A460;
  color: black;
  min-height: 10vh;
  padding: 10px;
`;


const Header = () => {

  return (
    <HeaderSection>
      <NavBar />
    </HeaderSection>
  );
};

export default Header;
