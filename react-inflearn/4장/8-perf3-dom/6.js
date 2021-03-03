import React from 'react';

export default function App() {
    // ...
    return (
        <div>
            <p>사용자 상세 정보</p>
            <UserDetail key={user.id} user={user} />
        </div>
    );
}

function UserDetail({ user }) {
    // ...
}