import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'


export const useCurrentUser = (auth:any) => {
    const [currentUser, setCurrentUser] = useState(auth.currentUser);

    useEffect(()=> {
        onAuthStateChanged(auth, (user) => setCurrentUser(user))
    }, [auth]);

    return currentUser;
}