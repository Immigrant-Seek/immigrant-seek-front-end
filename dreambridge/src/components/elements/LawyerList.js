import LawyerCard from './LawyerCard';
import { useContext } from 'react';
import Context from '../../context/Context';
import { Container } from 'react-bootstrap';
import Filter from './Filter'
// import MissionStatement from './MissionStatement';

function LawyerList(){
    let context = useContext(Context);
    console.log(context);
    return (
        <>
        {/* <MissionStatement/> */}
        <Filter/>
        <Container className='cards-container'>
        <div className='cards lawyer-home-cards'>
            {context.listOfLawyers.map((lawyer) => {
                return <LawyerCard key={lawyer.user_id} lawyer={lawyer}/>
            })}
        </div>
        </Container>
        </>
    )
}

export default LawyerList;