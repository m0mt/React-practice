import { useEffect } from "react";

function MyComponent() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        function OnClick() {
            setCount(count + 1);
        }
        window.addEventListener('click', onClick);
        return() => window.removeEventListener('click', onClick);
    }, [count]);
    // ...
}