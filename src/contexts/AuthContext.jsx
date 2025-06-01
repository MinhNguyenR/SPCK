import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'; 

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token')); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    }, [token]);

    useEffect(() => {
        const loadUser = async () => {
            if (token) {
                try {
                    const decodedToken = JSON.parse(atob(token.split('.')[1])); 
                    setUser({ id: decodedToken.id, username: decodedToken.username || 'User' }); 
                } catch (error) {
                    console.error('Invalid token or failed to load user:', error);
                    logout(); 
                }
            }
            setLoading(false);
        };
        loadUser();
    }, [token]);

    const register = async (username, email, password) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
            setToken(res.data.token);
            setUser(res.data.user);
            localStorage.setItem('token', res.data.token);
            return { success: true };
        } catch (error) {
            console.error('Registration failed:', error.response?.data || error.message);
            return { success: false, message: error.response?.data?.message || 'Registration failed' };
        }
    };

    const login = async (email, password) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            setToken(res.data.token);
            setUser(res.data.user);
            localStorage.setItem('token', res.data.token);
            return { success: true };
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
            return { success: false, message: error.response?.data?.message || 'Login failed' };
        }
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
    };

    if (loading) {
        return <div>Loading authentication...</div>; 
    }

    return (
        <AuthContext.Provider value={{ user, token, register, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};