import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signInWithRedirect } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

interface Props {
    children: React.ReactNode;
}

const AuthChecker = ({ children }: Props) => {
    const navigate = useNavigate();

    const signInOnClick = async () => {
        const response = await signInWithRedirect(auth, Providers.google);
    }
    useEffect(() => {
        const auth_state = onAuthStateChanged (auth, (user) => {
            console.log('logged in');
            if (!user) {
                signInOnClick()
                navigate("/")
            }
        })
            return () => auth_state()
    }, [auth, navigate])
    return (
        <div>
            <>{children}</>
        </div>
    )
}

export default AuthChecker