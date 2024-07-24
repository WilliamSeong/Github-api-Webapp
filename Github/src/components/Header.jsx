import {NavLink} from "react-router-dom";
import Styled from "styled-components";

const StyledAppHeader = Styled.header`
    background-color: #282c34;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`

const StyledAppHeaderNav = Styled.nav`
      margin-bottom: 10px;
      color: white;
`

const StyledNavLink = Styled(NavLink)`
    color: white;
    text-decoration: none;
    border: solid;
    margin: 0 1vw;
    padding: 1px 3px;
`

export default function Header() {
    return (
        <StyledAppHeader>
            <h1>My Portfolio</h1>
            <StyledAppHeaderNav>
                <StyledNavLink to='/'> About me </StyledNavLink>
                <StyledNavLink to='/projects'> Projects </StyledNavLink>
            </StyledAppHeaderNav>
        </StyledAppHeader>
    )
}

