

import { Children, createContext,userState, useState } from "react";
const userContext=createContext();
const LoginContext =({Children})=>{
    const [user,setUser]=useState({name:"",auth:false})  //user=(name:"",auth:false)
    const userlogin=(nm)=>{
        setUser({name:"",auth:true})
    }
    const userlogout=()=>{
        setUser({name:"",auth:false})
    }
    return(
<>
<userContext.Provider value={(user,userlogin,userlogout)}>
    {Children}
</userContext.Provider>

</>
    )
    }
    export default LoginContext;
    export {userContext};

    