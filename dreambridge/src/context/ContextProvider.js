import { useState, useEffect } from "react";
import Context from "./Context";

function ContextProvider({children}){
    // const [ lawyers, setLawyers ] = useState([])

    // useEffect(() => {
    //     fetch("http://localhost:3030/lawyers")
    //     .then(res => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         setLawyers(data.data)
    //       })
    // }, []);

    const [ listOfLawyers, updateLawyerList ] = useState([])
    const [ token, updateToken ] = useState("");
    const [verifiedUser, updateVerifiedUser] = useState({});
    const getAllLawyers = async() => {
        const res =  await fetch("http://localhost:3030/lawyers")
        const data = await res.json();
        return data.data
    }

    useEffect(() => {
        getAllLawyers().then(lawyers => {
            updateLawyerList(lawyers);
        })
    }, [])

    const state = {
        // lawyers, setLawyers
        getAllLawyers, 
        listOfLawyers, 
        updateLawyerList,
        token,
        updateToken,
        verifiedUser,
        updateVerifiedUser
    }

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;