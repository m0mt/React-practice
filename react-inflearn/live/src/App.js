import React, { useEffect, useState } from 'react';
import useOnMounted from './useOnMounted';

export default function App() {
    return (
        <div>
            <FriendPage />
        </div>
    );
}

function Profile({ userId }) {
    const [user, setUser] = useState();
    // const [needDetail, setNeedDetail] = useState(false);
    useOnMounted(() => fetchUser(userId).then(data => setUser(data)));
    // useEffect(() => {
    //     fetchUser(userId, needDetail).then(data => setUser(data));
    // }, [userId, needDetail]);
    //  ....
    console.log(user);
    return null;
}

function fetchUser() {};