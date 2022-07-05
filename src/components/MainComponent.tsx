import {ReactElement} from "react";
import Header from "./Header";
import Register from "./GeneratorPage/Register/Register";
import {AuthContainer, StyledContainer} from "../styles/styledComponents/styledMainContainer";
import LoginAndGeneratorWithContext from "./ComponentsWithContext/LoginAndGeneratorWithContext";

const MainComponent = (): ReactElement => {
    return (
        <StyledContainer>
            <Header />
            <AuthContainer>
                <LoginAndGeneratorWithContext />
                <Register />
            </AuthContainer>
        </StyledContainer>
    )
}

export default MainComponent;
