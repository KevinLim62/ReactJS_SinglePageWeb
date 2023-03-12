import { AppstoreAddOutlined,BellOutlined, QuestionCircleOutlined, PhoneOutlined, SettingOutlined} from '@ant-design/icons';
import { SmileOutlined } from '@ant-design/icons';
import {  Tooltip, Button, Space, Dropdown} from 'antd';

import React from 'react';

const IconStyle = {
    fontSize: '15px',
    color: 'black', 
}

const items = [
{
    label: ('Help Center'),
    icon: <SmileOutlined />,
    key: '1',
},
{
    label: ('Get Started Guide'),
    icon: <SmileOutlined />,
    key: '2',
    },
    {
    label: ('Submit a Ticket'),
    icon: <SmileOutlined />,
    key: '3',
    },
];

const SubMenu = () => {
    return (
        <Space size={8}>
            <Tooltip title="Integrations">
                <Button type="text" icon={<AppstoreAddOutlined style={IconStyle}/>} />
            </Tooltip>
            <Button type="text" icon={<BellOutlined style={IconStyle}/>} />
            <Dropdown
                menu={{
                    items,
                }}>
                <a onClick={(e) => e.preventDefault()}>
                <Space>
                    <Button type="text" icon={<QuestionCircleOutlined style={IconStyle}/>} />
                </Space>
                </a>     
            </Dropdown>
            <Button type="text" icon={<PhoneOutlined style={IconStyle}/>} />
            <Tooltip title="Settings">
            <Button type="text" icon={<SettingOutlined style={IconStyle}/>} />
            </Tooltip>
        </Space>
    );
}

export default SubMenu;