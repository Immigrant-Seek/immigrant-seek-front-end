import React from 'react';
import { Container } from 'react-bootstrap';
import LawyerCard from './LawyerCard';

function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map(lawyer =>  <LawyerCard key={lawyer.user_id} lawyer={lawyer} />); 
  return (
      <>
    <Container className="cards-container">
        <div className='cards lawyer-home-cards'>
        {filtered}
        </div>
    </Container>
    </>
  );
}

export default SearchList;