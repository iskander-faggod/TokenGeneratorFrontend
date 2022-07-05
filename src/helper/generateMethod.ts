import axios from "axios";

export const generateToken = async (email : string, password: string) => {
    return await axios.post(`https://localhost:7059/api/Authenticate/login`, {
        email: email,
        confirmedPassword: password,
        password: password,
    });
}
