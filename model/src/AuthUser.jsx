
import {useContext, userContext} from "react";
import { useCallback } from "react";

const AuthUser=()=>{

    const {user,userlogout}=useContext(userContext);
    return(
        <>
        <h1>welcome:{user.name}</h1>
        
        
        </>
    )
}
export default AuthUser;