import styled from "styled-components";
const NavWrapper = styled.div`
  border: solid black 1px;
  width: 100%;
  height: 25vh;
  overflow: hidden;
`;
const MenuList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: whitesmoke;
`;
const MenuItem = styled.li`
  list-style: none;
`;
function Nav() {
  return (
    <NavWrapper>
      <h2>logo/search(when,where,how many)/login</h2>
      <hr />
      <ul>
        <MenuList>
          {[1, 2, 3, 4].map((v) => (
            <MenuItem>{v}</MenuItem>
          ))}
        </MenuList>
      </ul>
    </NavWrapper>
  );
}
export default Nav;
