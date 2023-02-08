import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar: React.FC<{ modalFunction: React.MouseEventHandler<HTMLElement> }> = (props) => {
  const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 100%;
  `;

  const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `;

  const Li = styled.li`
      display: flex;
      justify-content: center;
      align-items: center;
      color: black;
      text-decoration: none;
     

    & > a {
      display: flex;
      align-items: center;
      
      color: black;
      text-decoration: none;
    }
  `;


  return (
    <Nav>
      <Ul>
        <Li>
          <Link to='/'>
            <img height={40} src="https://cdn-icons-png.flaticon.com/512/562/562678.png" />
            <h3> Food App</h3>
          </Link>
        </Li>
        <Li>
          <Link to='/'>
            <img height={30} src="https://cdn-icons-png.flaticon.com/512/3585/3585896.png" />
            <h3>Restaurantes</h3>
          </Link>
        </Li>
        <Li>
          <Link to='/pedidos'>
            <img height={40} src="https://cdn-icons-png.flaticon.com/512/2704/2704832.png" />
          </Link>
          <Link to='#' onClick={props.modalFunction}>
            <img height={40} src="https://cdn-icons-png.flaticon.com/512/4175/4175270.png" />
          </Link>
        </Li>
      </Ul>
    </Nav>
  );
};

export default NavBar;
