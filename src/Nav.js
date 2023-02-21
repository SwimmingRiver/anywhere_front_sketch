import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavWrapper = styled.div`
  border: solid black 1px;
  width: 100%;
  height: 25vh;
  background-color: #a566ff;
`;
const MenuList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MenuItem = styled.li`
  list-style: none;
`;
const StyledLink = styled(Link)`
  color: white;
  font-size: 2.5em;
  text-decoration-line: none;
`;
const Hamburg = styled.button``;

function Nav() {
  const [hamToggle, setHamToggle] = useState(false);
  return (
    <NavWrapper>
      <ul>
        {hamToggle ? (
          <MenuList>
            <MenuItem>
              <StyledLink to="/">Home</StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/join">Join</StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/login">Login</StyledLink>
            </MenuItem>
          </MenuList>
        ) : null}{" "}
        <MenuList>
          <MenuItem>
            <span class="material-symbols-outlined">menu</span>
            <Hamburg
              onClick={() => {
                setHamToggle((prev) => !prev);
              }}
            >
              Ham
            </Hamburg>
          </MenuItem>
        </MenuList>
      </ul>
    </NavWrapper>
  );
}
export default Nav;
