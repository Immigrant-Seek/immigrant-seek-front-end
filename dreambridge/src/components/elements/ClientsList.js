
import { Container } from 'react-bootstrap';
import MissionStatement from './MissionStatement';
import ClientCard from './ClientCard';
function ClientsList(props) {
    return (
        <>
        <MissionStatement/>
        <Container className='cards-container'>
        <div className='cards'>
            {props.listOfClients.map((client) => {
                return <ClientCard key={client.user_id} client={client}/>
            })}
        </div>
        </Container>
        </>
    )
}

export default ClientsList;