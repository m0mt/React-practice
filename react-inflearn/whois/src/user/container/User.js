import { Col, Descriptions, PageHeader, Row, Typography } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import useFetchInfo from '../../common/hook/useFetchInfo';
import { actions, Types } from '../state';
import History from '../../common/component/History';
import Department from '../container/Department';
import TagList from '../container/TagList';
import FetchLabel from '../component/FetchLable';

/**
 * 
 * @param {object} param 
 * @param {import ('react-router').match} param.match
 */

export default function User({ match }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    
    const name = match.params.name;
    useEffect(() => {
        dispatch(actions.fetchUser(name));
    }, [dispatch, name])

    const { isFetched } = useFetchInfo(Types.FetchUser);

    return (
        <Row justify="center">
            <Col xs={24} md={20} lg={24}>
                <PageHeader 
                    onBack={history.goBack} 
                    title={
                        <FetchLabel label="사용자 정보" actionType={Types.FetchUser} />
                    }
                >
                    {user && (
                        <Descriptions layout="vertical" bordered column={1}>
                            <Descriptions.Item label="이름">
                                <Typography.Text>{user.name}</Typography.Text>
                            </Descriptions.Item>
                            <Descriptions.Item 
                                label={
                                    <FetchLabel
                                        label="소속"   
                                        actionType={Types.FetchUpdateUser}
                                        fetchKey="department"
                                    />
                                }
                            >
                                <Department />
                            </Descriptions.Item>
                            <Descriptions.Item 
                                label={
                                    <FetchLabel
                                        label="태그"   
                                        actionType={Types.FetchUpdateUser}
                                        fetchKey="tag"
                                    />
                                }
                            >
                                <TagList />
                            </Descriptions.Item>
                            <Descriptions.Item label="수정 내역"><History /></Descriptions.Item>  
                        </Descriptions>
                    )}
                    {!user && isFetched && (
                        <Typography.Text>존재하지 않는 사용자 입니다.</Typography.Text>
                    )}
                </PageHeader>
            </Col>
        </Row>    
    );
}