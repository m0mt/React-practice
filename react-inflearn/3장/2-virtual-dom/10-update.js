// Todo 컴포넌트의 setPriotiry를 통해 render가 실행 됐을 때
const elementTree = {
    type: 'div',
    props: {
        children: [
            {
                type: Title,
                props: { title: '리액트 공부하기' },
                // ...
            },
            {
                type: 'p',
                props: { children: '실전 리액트 프로그래밍을 공부한다.' },
                // ...
            },
            {
                type: 'p',
                props: { children: '우선순위 낮음' },
                // ...
            },
            // ...
        ],
        // ...
    },
    // ...
};