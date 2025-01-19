import { onAuthStateChanged,createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../../firebase";
export const Authcontext = createContext();



const Authcontextprovider=({children})=>{
    const [currentuser,setCurrentuser]=useState();
    const [loading,setLoading]=useState(true);

    const signup =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const signin =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged( auth ,(user)=>{
            setCurrentuser(user);
            setLoading(false)

        })
        return()=>{
            unsubscribe()
        }

    },[])



    const authcontext ={currentuser,signup,signin,logout}
    return(
        <Authcontext.Provider value={authcontext}>
            {!loading && children}

        </Authcontext.Provider>

    )
}

export default Authcontextprovider;