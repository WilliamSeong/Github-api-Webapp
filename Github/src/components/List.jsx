import Styled from "styled-components";

const StyledUL = Styled.ul`
    list-style: none;
    padding: 0;
    text-align: left;
`

const StyledLI = Styled.li`
    display: flex;
    justify-content: space-between;
    margin: 1vh;
    font-size: calc(10px + 2vmin);
`

const StyledSpan = Styled.span`
    font-weight: 600;
`

export default function List({ items }){
    return (
        <StyledUL>
            {items.map((item) => (
                <StyledLI key={item.field}>
                    <StyledSpan>{item.field}: </StyledSpan>
                    {item.value}
                </StyledLI>
            ))}
        </StyledUL>
    );
}
