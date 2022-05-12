import LawyerCard from './LawyerCard';
import { useContext } from 'react';
import Context from '../context/Context';

function LawyerList(){
    let { lawyers } = useContext(Context);
    
    return (
        <div className='cards'>
            {lawyers.map((lawyer) => {
                return <LawyerCard key={lawyer.user_id} lawyer={lawyer}/>
            })}
        </div>
    )
}

export default LawyerList;