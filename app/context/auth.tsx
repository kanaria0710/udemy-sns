"use client";
import React, { useContext, useEffect, useState } from "react";
import apiClients from "../lib/apiClients";

interface AuthProviderProps {
    children: React.ReactNode;
}

interface AuthContextType {
    user: null | {
        id: number;
        email: string;
        username: string;
    };
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = React.createContext<AuthContextType>({
    user: null,
    login: () => {},
    logout: () => {},
});

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children } : AuthProviderProps) =>{
    const [user, setUser] = useState<{
        id: number;
        email: string;
        username: string
    } | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("auth_token");
        if (token) {
            apiClients.defaults.headers["Authorization"] = `Bearer ${token}`;
            apiClients.get("/users/find").then((res) => {
                setUser(res.data.user);
            }).catch((error) => {
                console.log(error);
            });
        }
    }, []);

    const login = async (token: string) => {
        localStorage.setItem("auth_token", token);
        apiClients.defaults.headers["Authorization"] = `Bearer ${token}`;

        try {
            apiClients.get("/users/find").then((res) => {
                setUser(res.data.user);
            });
        } catch (error) {
            console.log(error);
        }
    };

    const logout = () => {
        localStorage.removeItem("auth_token");
        delete apiClients.defaults.headers["Authorization"];
        setUser(null);
    };

    const value = {
        user,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;