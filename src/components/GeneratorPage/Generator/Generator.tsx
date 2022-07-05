import {
    ReactElement,
    useEffect,
    useState
} from "react";

import {useTokenState} from "../../../context/TokenContext";
import {TextField} from "@mui/material";
import {toast, Toaster} from "react-hot-toast";

import {generateToken} from "../../../helper/generateMethod";

import {
    StyledButton,
    StyledInputsContainer,
    StyledInputsElementsContainer
} from "../../../styles/styledComponents/styledInputs";

const Generator = (): ReactElement => {
    const { tokenState } = useTokenState();
    const [token, setToken] = useState<string>(tokenState.token);

    useEffect(() => {
        setToken(tokenState.token)
    }, [tokenState.token])

    const getNewToken = async () => {
        const token = await generateToken(tokenState.email, tokenState.password);
        setToken(token.data.token);
        toast.success('New token generated!')
    }

    return (
        <StyledInputsContainer>
            <Toaster
                position="bottom-center"
                reverseOrder={true}
            />
            <StyledInputsElementsContainer>
                <TextField
                    id="outlined-error"
                    label="Email"
                    value={token}
                />
            </StyledInputsElementsContainer>

            <StyledInputsElementsContainer>
                <StyledButton
                    onClick={getNewToken}
                    variant="contained"
                >
                    Get token
                </StyledButton>
            </StyledInputsElementsContainer>

        </StyledInputsContainer>

    )
}

export default Generator;
