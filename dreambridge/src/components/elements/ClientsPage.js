import ClientsList from './ClientsList';

function ClientsPage(props){
    return (
        <div>
            <ClientsList listOfClients={props.listOfClients}/>
        </div>
    )
}

export default ClientsPage;