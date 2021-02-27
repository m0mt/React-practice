import { useEffect } from "react";

function MyComponent({ onClick }) {
    useEffect(() => {
        window.addEventListener('click', () => {
            onClick();
            // ...
        });
    }, [onClick]);
    // ... 
}