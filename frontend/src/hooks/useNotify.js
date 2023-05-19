import { useContext } from "react";
import notifyContext from "../context/notifyContext/notifyContext";

const useNotify = () => {
   return useContext(notifyContext);
}

export default useNotify;