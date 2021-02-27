function MyComponent(props) {
    // ...
}

function isEqual(prevProps, nextProps) {
    // true 또는 false를 반환
}

React.memo(MyComponent, isEqual);