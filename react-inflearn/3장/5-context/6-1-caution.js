import React, { useContext, createContext, useState } from 'react';
import App from './5-1-edit';

const UserContext = createContext({ username: 'unknown', age: 0 });

export default function App() {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState(0);
    return (
        <div>
            <UserContext.Provider value={{ username, age }}>
                <Profile />
            </UserContext.Provider>
        </div>
    );
}