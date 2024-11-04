import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios"

function CharacterInfoPage(){
    const location = useLocation();
    const charData = location.state;

    const getData = () => {

    }

    console.log(charData)
    return(
        <>
            <h1  >You made it to the char info page</h1>
        </>
    )
}

export default CharacterInfoPage