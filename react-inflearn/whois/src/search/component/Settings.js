import React from 'react';
import { Row, Col, Dropdown } from 'antd';

export default function Settings() {
    return (
        <Dropdown 
            overlay={
                <Menu>
                    <Menu.Item onClick={logout}>로그아웃</Menu.Item>
                </Menu>
            } 
            trigger={['click']}
            placement="bottomRight"    
        >
            asdf
        </Dropdown>
    );
}