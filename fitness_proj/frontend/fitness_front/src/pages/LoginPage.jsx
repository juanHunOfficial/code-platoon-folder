import SignupForm from "../components/SignupForm";
import SigninForm from "../components/SigninForm";
import { useOutletContext } from 'react-router-dom'

const LoginPage = () => {

    const { needsToSignup } = useOutletContext()

    return (
        <div className='page_div tracker_pages'>
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
            
        </div>
    );
};

export default LoginPage;