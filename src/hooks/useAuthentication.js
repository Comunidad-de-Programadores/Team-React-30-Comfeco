import { useState } from "react";
import jwt from 'jsonwebtoken';

const useAuthentication = () => {
    const existingData = JSON.parse(sessionStorage.getItem('userData'));
    const [userData, setUserData] = useState(existingData);

    const isExpired = (token) => {
        const decoded = jwt.decode(token, { complete: true });
        const currentDate = new Date();

        return decoded.exp < currentDate.getTime();
    }

    const setData = (data) => {
        sessionStorage.setItem('userData', JSON.stringify(data));
        setUserData(data);
    }

    const logout = () => {
        sessionStorage.removeItem('userData');
        setUserData();
    }

    const isLoggedIn = () => {
        if (!userData || !userData.token) return false;

        const { token } = userData;
        return token && !isExpired(token);
    }

    return { setData, logout, isLoggedIn, user: userData?.user };
}

export default useAuthentication;
