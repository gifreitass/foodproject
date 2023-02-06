import styled from "styled-components";
import NavBar from "../molecules/Navbar";

const HeaderSection = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F4A460;
  color: black;
  height: 10vh;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;

  @media only screen and (max-width: 460px) {
    height: 30vh;
  }
`;


const Header = (props: any) => {

  return (
    <HeaderSection>
      <NavBar action={props.action} />
    </HeaderSection>
  );
};

export default Header;
