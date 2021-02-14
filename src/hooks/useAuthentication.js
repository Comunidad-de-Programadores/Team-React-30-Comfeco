import { useState } from "react";
import jwt from 'jsonwebtoken';

const useAuthentication = () => {
    const [authToken, setAuthToken] = useState(sessionStorage.getItem('token') || '');

    const isExpired = () => {
        const decoded = jwt.decode(authToken, { complete: true });
        const currentDate = new Date();

        return decoded.exp < currentDate.getTime();
    }

    const logout = () => {
        if (authToken) {
            setAuthToken();
        }
    }

    const setToken = (token) => {
        sessionStorage.setItem('token', token);
        setAuthToken(token);
    }

    const isLoggedIn = () => authToken && !isExpired();

    return { setToken, logout, isLoggedIn };
}

export default useAuthentication;
