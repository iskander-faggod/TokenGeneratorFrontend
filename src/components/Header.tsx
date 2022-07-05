import {ReactElement} from "react";
import {StyledHeader, StyledLink} from "../styles/styledComponents/styledHeader";

const Header = () : ReactElement => {
    return (
        <StyledHeader >
            TokenGenerator
            <StyledLink>Home</StyledLink>
        </StyledHeader>
    )
}

export default Header;
