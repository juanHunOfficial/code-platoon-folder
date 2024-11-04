import { useLocation } from 'react-router-dom';

function CharacterInfoPage(){
    const location = useLocation();
    const charData = location.state;

    console.log(charData)
    return(
        <>
            <h1>You made it to the char info page</h1>
        </>
    )
}

export default CharacterInfoPage