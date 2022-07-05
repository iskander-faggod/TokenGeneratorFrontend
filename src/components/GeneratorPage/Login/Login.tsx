import {TextField} from "@mui/material";
import {ReactElement, useCallback, useState} from "react";
import {
    toast,
    Toaster
} from "react-hot-toast";

import {
    StyledButton,
    StyledInputsContainer,
    StyledInputsElementsContainer
} from "../../../styles/styledComponents/styledInputs";
import {useTokenState} from "../../../context/TokenContext";
import {generateToken} from "../../../helper/generateMethod";

const Login = (): ReactElement => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {tokenState, tokenDispatch} = useTokenState();
    const [confirmedPassword, setConfirmedPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');


    const login = async () => {
        if (password && email) {
            try {
                const token = await generateToken(email, password);
                tokenDispatch({
                    type: 'SET_TOKEN',
                    payload: {
                        ...tokenState,
                        token: token.data.token,
                    }
                })
                tokenDispatch({
                    type: 'SET_EMAIL',
                    payload : {
                        ...tokenState,
                        email,
                    }
                })
                tokenDispatch({
                    type: 'SET_PASSWORD',
                    payload : {
                        ...tokenState,
                        password,
                    }
                })
                toast.success('You logged in!')
            } catch (e) {
                toast.error('Please, check you email or password data');
            }
        } else {
            toast.error('Please, enter password and email');
        }
    }

    const changeEmailInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }, [email]);

    const changePasswordInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }, [password]);

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
                    onChange={changeEmailInput}
                />
            </StyledInputsElementsContainer>

            <StyledInputsElementsContainer>
                <TextField
                    id="outlined-error"
                    label="Password"
                    onChange={changePasswordInput}
                />
            </StyledInputsElementsContainer>

            <StyledInputsElementsContainer>
                <StyledButton variant="contained" onClick={login}>Login</StyledButton>
            </StyledInputsElementsContainer>

        </StyledInputsContainer>

    )
}

export default Login;
