import { useEffect } from "react";

// useEffect(async () => {
//     const data = await fetchUser(userId);
//     setUser(data);
// }, [userId]);

useEffect(() => {
    async function fetchAndSetUser() {
        const data = await fetchUser(userId);
        setUser(data);
    }
    fetchAndSetUser();
}, [userId]);