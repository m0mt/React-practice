import { useRef } from "react";

function MyComponent({ onClick }) {
    const onClickRef = useRef();
    onClickRef.current = onClick;  
    // ...
}