import SignupForm from "../components/SignupForm";
import SigninForm from "../components/SigninForm";
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'

const LoginPage = () => {

    const { needsToSignup } = useOutletContext()

    return (
        <>
            {
                needsToSignup ?
                <>
                    <SignupForm/>
                </>
                :
                <>
                    <SigninForm/>
                </>

            }
            
        </>
    );
};

export default LoginPage;