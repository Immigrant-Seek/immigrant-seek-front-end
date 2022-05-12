import { useState, useEffect } from "react";
import Context from "./Context";

function ContextProvider({children}){
    const [ lawyers, setLawyers ] = useState([])
    useEffect(() => {
        fetch("http://localhost:3030/lawyers")
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            setLawyers(data.data)
          })
    }, []);

    const state = {
        lawyers, setLawyers
    }

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;