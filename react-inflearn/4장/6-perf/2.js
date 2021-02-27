const prevProps = {
    todos: [
        { title: 'fix bug', priority: 'high' },
        { title: 'meeting with jone', priority: 'low' },
        // ... 
    ],
    friends: [],
    // ...
};

const nextProps = {
    todos: [
        { title: 'fix bug', priority: 'high' },
        { title: 'meeting with jone', priority: 'high' },
        // ... 
    ],
    friends: [],
    // ... 
};

const isEqual = prevProps.todos === nextProps.todos && prevProps.friends === nextProps.friends;