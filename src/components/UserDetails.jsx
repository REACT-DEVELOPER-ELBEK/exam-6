import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const UserDetails = () => {
  const params = useParams();
  const id = params.userId;

  const [searchParams, setSearchParams] = useSearchParams();

  const showActive = searchParams.get('rangi') === 'oq';

  return (
    <div className="container">
      <p>Details about user {id}</p>

      <button onClick={() => setSearchParams({})}>All</button>
      <button onClick={() => setSearchParams({ rangi: 'oq' })}>Active</button>

      <div>
        {showActive ? <h1>Oq avtomobillar</h1> : <h1>Barcha avtomobillar</h1>}
      </div>
    </div>
  );
};

export default UserDetails;
