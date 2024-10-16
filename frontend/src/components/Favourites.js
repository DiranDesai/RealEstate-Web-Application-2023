import React, {useState, useEffect} from 'react'
import useUser from '../hooks/useUser';
import UserListing from './UserListing';

function Favourites() {
  const [currentUserProperties, setCurrentUserProperties] = useState(null);
  const { profileData, getCurrentUser, getCurrentUserProperties } = useUser();

  useEffect(() => {
    const loadUserData = async () => {
      setCurrentUserProperties(await getCurrentUserProperties());
    }

    loadUserData();
  })

  return (
    <div className="container mt-3">
        {currentUserProperties && <UserListing properties={currentUserProperties} />}
    </div>
  )
}

export default Favourites