import styled from "styled-components";
import { Link } from 'react-router-dom';

const SearchWrapper = styled.div`
  border: solid 1px black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;

    height: 100%;
  }
`;

function Search() {
  return (
    <>
      <SearchWrapper>
        <input placeholder="어느 도시가 궁금하세요?" />
        <button>search</button>
        <hr />
        <h2>인기도시|해외도시|국내도시 ...카테고리</h2>
        <hr />
        <ul>
          <li>유명 도시 목록</li>
          
        </ul>
        {["0", "1", "2"].map((value, index) => (
          <Link key={index} to={`/place/${value}`}>
            where ever
          </Link>
        ))}
      </SearchWrapper>
    </>
  );
}

export default Search;
