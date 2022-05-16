import ClientCard from './ClientCard';
import { useContext } from 'react';
import Context from '../context/Context';

function ClientList(){
    let { clients } = useContext(Context);
    
    return (
        <div className='cards'>
            {clients.map((client) => {
                return <ClientCard key={client.user_id} client={client}/>
            })}
        </div>
    )
}

export default ClientList;