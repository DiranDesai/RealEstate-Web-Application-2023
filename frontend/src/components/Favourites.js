import React, {useState, useEffect} from 'react'
import useUser from '../hooks/useUser';
import UserListing from './UserListing';

function Favourites() {
  const [userFavouriteProperties, setUserFavouriteProperties] = useState(null);
  const { profileData, getCurrentUser, getCurrentUserProperties } = useUser();

  useEffect(() => {
    const loadUserData = async () => {
      let favourites = JSON.parse(localStorage.getItem("favourites"))
      setUserFavouriteProperties(favourites)
      //setCurrentUserProperties(await getCurrentUserProperties());
    }

    loadUserData();
  }, [])

  return (
    <div className="container favourite-container">
        {userFavouriteProperties && <UserListing properties={userFavouriteProperties} title="Your Favourites" />}
    </div>
  )
}

export default Favourites