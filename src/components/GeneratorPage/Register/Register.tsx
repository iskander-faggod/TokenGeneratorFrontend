import {TextField} from "@mui/material";
import {ReactElement, useCallback, useMemo, useState} from "react";
import {
    toast,
    Toaster
} from "react-hot-toast";
import axios from "axios";

import {
    StyledButton,
    StyledInputsContainer,
    StyledInputsElementsContainer
} from "../../../styles/styledComponents/styledInputs";

const Register = (): ReactElement => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmedPassword, setConfirmedPassword] = useState<string>('');

    const register = async () => {
        if (password && email && passwordValidation) {
            try {
                const token = await axios.post(`https://localhost:7059/api/Authenticate/register`, {
                    email: email,
                    password: password,
                    confirmedPassword: confirmedPassword
                });
                toast.success('You correctly register!')
            }
            catch (e){
                toast.error('Something went wrong with register!')
            }
        }
    }

    const passwordValidation = useMemo(() => {
        return password === confirmedPassword;
    }, [password, confirmedPassword])

    const changeEmailInput = useCallback((event: React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(event.target.value);
    }, [email]);

    const changePasswordInput = useCallback((event: React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(event.target.value);
    }, [password]);

    const changeConfirmedPasswordInput = useCallback((event: React.ChangeEvent<HTMLInputElement>)=>{
        setConfirmedPassword(event.target.value);
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
                <TextField
                    id="outlined-error"
                    label="Confirm you password"
                    onChange={changeConfirmedPasswordInput}
                />
            </StyledInputsElementsContainer>

            <StyledInputsElementsContainer>
                <StyledButton
                    variant="contained"
                    onClick={register}
                    disabled={!passwordValidation}
                >
                    Register
                </StyledButton>
            </StyledInputsElementsContainer>

        </StyledInputsContainer>

    )
}

export default Register;
