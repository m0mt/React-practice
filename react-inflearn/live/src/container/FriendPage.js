import React, { useState } from 'react';
import { getNextFriend } from '../data';
import FriendList from '../component/FriendList';
import NumebrSelect from '../component/NumberSelect';

export default function FriendPage() {
    const [friends, setFriends] = useState([]);
    const [ageLimit, setAgeLimit] = useState(MAX_AGE_LIMIT);
    const [nameLenLimit, setNameLenLimit] = useState(MAX_NAME_LEN_LIMIT);

    const friendsWithAgeLimit = friends.filter(item => item.age <= ageLimit);
    const friendsWithNameLenLimit = friends.filter(item => item.name.length <= nameLenLimit);
    function onAdd() {
        const friend = getNextFriend();
        setFriends([...friends, friend]);
    }

    return (
        <div>
            <button onClick={onAdd}>친구 추가</button>
            <NumebrSelect 
                value={ageLimit}
                options={AGE_LIMIT_OPTIONS}
                label="세 이하만 보기"
                onChange={setAgeLimit}
            />
            <FriendList friends={friendsWithAgeLimit} />
            <NumebrSelect 
                value={nameLenLimit}
                options={NAME_LEN_LIMIT_OPTIONS}
                label="자 이하 이름만 보기"
                onChange={setNameLenLimit}
            />
            <FriendList friends={friendsWithNameLenLimit} />
        </div>
    );
}

const MAX_AGE_LIMIT = 100;
const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
const MAX_NAME_LEN_LIMIT = 100;
const NAME_LEN_LIMIT_OPTIONS = [2, MAX_NAME_LEN_LIMIT];

// 비즈니스 로직이 없다.
// 상태값이 없다. 단, 마우스 오버(mouse over)와 같은 UI효과를 위한 상태값은 제외한다.