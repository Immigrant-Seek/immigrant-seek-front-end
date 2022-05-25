import { useState, useEffect } from "react";
import Context from "./Context";

function ContextProvider({children}){
    const [ listOfLawyers, updateLawyerList ] = useState([]);
    const [ listOfClients, updateClientList ] = useState([]);
    const [ token, updateToken ] = useState("");
    const [verifiedUser, updateVerifiedUser] = useState({});
    const [ listOfStates, updateStatesList ] = useState([]);
    const [ listOfFirms, updateFirmsList ] = useState([]);
    const [isLoggedIn, updateLoggedIn] = useState(false)
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

    const getAllClients = async() => {
        const res = await fetch("http://localhost:3030/users")
        const data = await res.json();
        return data.data
    }

    useEffect(() => {
        getAllClients().then(clients => {
            updateClientList(clients)
        })
    }, [])

    const getAllStates = async() => {
        const res = await fetch("http://localhost:3030/states")
        const data = await res.json();
        return data.data
    }

    useEffect(() => {
        getAllStates().then(states => {
            updateStatesList(states)
        })
    }, [])

    const getAllFirms = async() => {
        const res = await fetch("http://localhost:3030/firms")
        const data = await res.json();
        return data.data
    }

    useEffect(() => {
        getAllFirms().then(firms => {
            updateFirmsList(firms)
        })
    },[])

    const state = {
        getAllLawyers, 
        listOfLawyers, 
        updateLawyerList,
        listOfClients, 
        updateClientList,
        getAllStates,
        listOfStates,
        updateStatesList,
        getAllFirms,
        listOfFirms,
        updateFirmsList,
        token,
        updateToken,
        verifiedUser,
        updateVerifiedUser,
        isLoggedIn,
        updateLoggedIn
    }

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;