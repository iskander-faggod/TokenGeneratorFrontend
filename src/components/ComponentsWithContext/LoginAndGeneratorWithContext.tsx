import React from "react";
import Login from "../GeneratorPage/Login/Login";
import StateProvider from "../../context/TokenContext";
import Generator from "../GeneratorPage/Generator/Generator";

const LoginAndGeneratorWithContext: React.FC = () => (
    <StateProvider >
        <Generator />
        <Login />
    </StateProvider>
)

export default LoginAndGeneratorWithContext;
