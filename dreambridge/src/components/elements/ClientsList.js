import { Container } from 'react-bootstrap';
import ClientCard from './ClientCard';

function ClientsList(props) {
    return (
        <>
        <Container className='cards-container'>
        <div className='cards lawyer-home-cards'>
            {props.listOfClients.map((client) => {
                return <ClientCard key={client.user_id} client={client}/>
            })}
        </div>
        </Container>
        </>
    )
}

export default ClientsList;