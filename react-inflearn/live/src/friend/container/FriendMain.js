import React, { useEffect, useReducer } from 'react';
import store from '../../common/store';
import { getNextFriend } from '../../common/mockData';
import { addFriend } from '../state';
import FriendList from '../component/FriendList';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

export default function FriendMain() {
    const [friends, friends2] = useSelector(
        state => [state.friend.friends, state.friend.friends2],
        shallowEqual,
    );
    const dispatch = useDispatch();
    function onAdd() {
        const friend = getNextFriend();
        dispatch(addFriend(friend));
    }
    
    console.log('FriendMain render');
    return (
        <div>
            <button onClick={onAdd}>친구 추가</button>
            <FriendList friends={friends} />
        </div>
    )
}