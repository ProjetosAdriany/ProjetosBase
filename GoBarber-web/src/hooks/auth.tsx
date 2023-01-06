import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/apiClient';


interface IUser {
    id: string;
    name: string;
    email: string;
    avatar_url: string;
}

interface IAuthState {
    token: string;
    user: IUser;
}

interface ISignInCredentials{
    email: string;
    password: string;
}


interface IAuthContext {
    user: IUser;
    signIn(credentials: ISignInCredentials): Promise<void>;
    signOut(): void;
    updateUser(user: IUser): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);
const AuthProvider: React.FC = ({ children }) => {

    const [data, setData] = useState<IAuthState>(() => {
        const token = localStorage.getItem('@GoBarber: token');
        const user = localStorage.getItem('@GoBarber: user');

        if(token && user){
            api.defaults.headers.authorization = `Bearer ${token}`;
            return {
                token,
                user: JSON.parse(user)
            }
        }

        return {} as IAuthState;
    });

    const signIn = useCallback(async ({email, password}) => {
        /*const response = await api.post('sessions', {
            email,
            password
        });*/
       
        //const{ token, user } = response.data;

        //TODO: Dados fixos do usuário
        const token = "tokenUser";
        const user = {
            id: "1",
            name: "adriany",
            email: "adrinyaires@gmail.com",
            avatar_url: "https://avatars2.githubusercontent.com/u/23082247?s=460&u=735577d38c1eb13e5f0528df0c26c11ad0e86cab&v=4"
        };
        localStorage.setItem('@GoBarber: token', token);
        localStorage.setItem('@GoBarber: user', JSON.stringify(user));
        api.defaults.headers.authorization = `Bearer ${token}`;

        setData({token, user});

    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('@GoBarber: token');
        localStorage.removeItem('@GoBarber: user');
        setData({} as IAuthState);
    }, []);

    const updateUser = useCallback((user: IUser) => {
        setData({
            token: data.token,
            user,
        });
        localStorage.setItem('@GoBarber: user', JSON.stringify(user));
    }, [setData, data.token]);
    
    return (
        <AuthContext.Provider value={{user: data.user, signIn, signOut, updateUser}}>
            {children}
        </AuthContext.Provider>

    )
};

function useAuth():IAuthContext{
    const context = useContext(AuthContext);

    if(!context){
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
} 

export { AuthProvider, useAuth}
