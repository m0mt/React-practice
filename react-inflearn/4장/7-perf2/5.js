import React, { useCallback, useState } from 'react';

function Parent() {
    const [selectedFruit, setSelectedFruit] = useState('apple');
    const [count, setCount] = useState(0);

    const onChangeFruit = useCallback(fruit => {
        setSelectedFruit(fruit);
        sendLog({ typd: 'fruit change', value: fruit });
        // 속성값이나 상태값이 사용되지 않았기 때문에 의존성배열에는 빈 배열로 입력
    }, []);

    return (
        <div>
            <p>{`count: ${count}`}</p>
            <button onClick={() => setCount(count + 1)}>increase count</button>
            <selectedFruit selected={selectedFruit} onChange={onChangeFruit} />;
        </div>
    );
}