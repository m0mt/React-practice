import { shallowEqual, useSelector } from 'react-redux';

function useMySelector(selector) {
    return useSelector(selector, shallowEqual);
}

function MyComponent() {
    const [value1, value2] = useMySelector(state => [state.value1, state.value2]);
    const value3 = useMySelector(state => state.value3);
    const [value4] = useMySelector(state => state.value4);
}