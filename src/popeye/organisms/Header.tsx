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

  @media only screen and (max-width: 460px) {
  }
`;


const Header: React.FC<{ modalFunction: React.MouseEventHandler<HTMLDivElement> }> = (props) => {

  return (
    <HeaderSection>
      <NavBar modalFunction={props.modalFunction} />
    </HeaderSection>
  );
};

export default Header;
