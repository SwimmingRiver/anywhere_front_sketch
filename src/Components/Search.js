import styled from "styled-components";

const SearchWrapper = styled.div`
    border: solid 1px black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    
`;

function Search(){
    return(<>
        <SearchWrapper>
            <h2>search btn</h2>
            <h2>when? where</h2>
            <h2>filter</h2>
        </SearchWrapper>
    </>)
}

export default Search;