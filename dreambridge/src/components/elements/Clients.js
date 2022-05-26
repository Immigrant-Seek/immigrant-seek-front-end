import React from 'react';
import NavigationBar from './Nav';
import Context from '../../context/Context';
import ClientsPage from './ClientsPage';
function Clients (){
    let context = React.useContext(Context);
    let user = context.verifiedUser.userInfo.user_id
    let [listOfClients, updateListOfClients] = React.useState([]);
    React.useEffect(() => {
        fetch(`http://localhost:3030/lawyers/${user}/clients`)
        .then(response => response.json())
        .then(data => {
            updateListOfClients(data.clients);
        })
    }, [])
    return (
        <div className='App'>
          <NavigationBar/>
          <ClientsPage listOfClients={listOfClients}/>
        </div>
      );
}

export default Clients;