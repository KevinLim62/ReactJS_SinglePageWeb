import { NotificationOutlined, SearchOutlined } from '@ant-design/icons';
import { Space, Tooltip, Typography, Divider, Dropdown, Input} from 'antd';
import React from 'react';
const { Title, Text } = Typography;

const IconStyle = {
    fontSize: '15px',
    color: 'black', 
}

const items = [
    {
      label: (
        <Input
        prefix=<SearchOutlined />
        placeholder="Find saved searches"
        size="medium"
    />
      ),
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: (
          'MY SAVED SEARCHES (1)'
      ),
      key: '2',
    },
    {
      type: 'divider',
    },
    {
      label: (
        'TEAM SAVED SEARCHES (2)'
      ),
      key: '3',
    },
    {
      label: (
          'All Companies'
      ),
      key: '4',
    },
    {
      label: (
          'My Companies'
      ),
      key: '5',
    },
  ];

const Filters = () => {
    return (
            <Space size={30}>
                <Title level={5} style={{margin:'10px 0px 10px 10px'}}>Filters</Title>
                <div>
                <Divider type="vertical"/>
                    <Tooltip title="Load Saved Searches">
                    <Dropdown
                        menu={{
                        items,
                        }}
                        trigger={['click']}>
                        <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            Load
                        </Space>
                        </a>
                    </Dropdown>
                    <Divider type="vertical" />
                    </Tooltip>
                    <Tooltip title="Save your search and subscribe to receive email notifications of any new records that match your search">
                        <NotificationOutlined style={IconStyle}/>
                        <Text> Save & subscribe</Text>
                    </Tooltip>
                </div>
            </Space>    
    );
}


export default Filters;