import React, { useEffect, useState } from 'react';

function Profile({ userId }) {
    const [user, setUser] = useState();
    useEffect(() => {
        fetchUser(userId).then(data => setUser(data));
    }, [userId]);
    //  ....
}