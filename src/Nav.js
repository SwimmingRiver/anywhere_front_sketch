import styled from "styled-components";
import { Link } from "react-router-dom";

const NavWrapper = styled.div`
  border: solid black 1px;
  width: 100%;
  height: 28vh;
  background-color: #a566ff;
`;
const MenuList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media(max-width:500px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const MenuItem = styled.li`
  list-style: none;
`;
const StyledLink = styled(Link)`
  color: white;
  font-size: 2.5em;
  text-decoration-line: none;
`;
function Nav() {
  return (
    <NavWrapper>
      <ul>
        <MenuList>
          <MenuItem>
            <Link to="/">home</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/join">join</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login">login</Link>
          </MenuItem>
        </MenuList>
      </ul>
    </NavWrapper>
  );
}
export default Nav;
