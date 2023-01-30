import { useContext } from 'react'
import userContext from '../context/userContext/userContext';

function useUser() {
  return useContext(userContext);
}

export default useUser