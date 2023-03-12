import { FilterOutlined, TableOutlined, ImportOutlined, UnorderedListOutlined, SettingOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import { Layout, Button, Space, Row, Col, Tooltip, Tabs, Dropdown, Divider, Collapse} from 'antd';
import React,{ useState } from 'react';
import SearchBar from './SearchBar';
import DataGrid from './DataGrid';
export const SearchContext = React.createContext({});

const { Content, Sider } = Layout;

const DataGrid_Nav = ['Total (9.5M)', 'Net New (9.5M)', 'Saved'].map((key,index) => ({
    key: `${index}`,
    label: `${key}`,
}));

const IconStyle = {
    fontSize: '15px',
    color: 'black', 
}

const contentStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'white',
    padding: '0px 0px 0px 24px',
  };

  const siderStyle = {
    textAlign: 'Left',
    lineHeight: '50px',
    color: '#fff',
    backgroundColor: 'white',
    height: '80vh',
  };

    const items = [
    {
    label: ('Just One Account'),
    key: '1',
    },
    {
    label: ('Bulk Import from'),
    key: '2',
    },
    {
    label: ('CSV'),
    key: '3',
    },
    ];

const ContentBar = () => {

    const [widthSize,setwidthSize] = useState(320);
    const [selectItem, setSelectItem] = useState([]);

    const isClick = () => {
        if(widthSize) setwidthSize(0);
        else setwidthSize(320);
    }

    return (
    <SearchContext.Provider value={{selectItem, setSelectItem}}>
      <Layout hasSider>
        <Sider
        breakpoint="md"
        width={widthSize}
        collapsed = {widthSize < 320}
        onBreakpoint={(broken) => {
          if (broken) setwidthSize(0)
          else setwidthSize(320)
        }}
        trigger={null}
        collapsedWidth={'0'}
         style={{
                textAlign: 'Left',
                lineHeight: '50px',
                color: '#fff',
                backgroundColor: 'white',
                height: '80vh',
                overflow: widthSize<320? 'visible':'auto'
                }}
         >
         <div className="logo"/>
            <SearchBar widthsize={widthSize}/>
        </Sider>
        <Content style={contentStyle}>
            <Row
            justify="start">
            <Col flex={2}>
                <Space size={'large'}>
                    <Tooltip title="Hide Filters">
                        {widthSize < 320? 
                        (<Button type="text" style={{position:'absolute', left:'-35px', top:'10px', zIndex:2, backgroundColor:'#2F58CD'}} onClick={isClick} icon={<MenuUnfoldOutlined style={IconStyle}/>} />):
                        (<Button type="text" style={{padding:'0px 0px 15px 0px'}} onClick={isClick} icon={<FilterOutlined style={IconStyle}/>} />)
                        }              
                    </Tooltip>
                    <Tabs defaultActiveKey="0" items={DataGrid_Nav} />
                </Space>
            </Col>
            <Col flex={30}></Col>
            <Col flex={5}>
                <Space size={5}>
                <Tooltip title="List View">
                    <Button type="text"  icon={<UnorderedListOutlined style={IconStyle}/>} />
                </Tooltip>
                <Tooltip title="Table View">
                    <Button type="text" icon={<TableOutlined style={IconStyle}/>} />
                </Tooltip>
                <Tooltip title="Table Column Settings">
                    <Button type="text" icon={<SettingOutlined style={IconStyle}/>} />
                </Tooltip>
                <Divider style={{backgroundColor: 'grey'}} type="vertical" />
                <Dropdown
                    menu={{
                        items,    
                    }}
                    trigger={['click']}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Button type="text" icon={<ImportOutlined style={IconStyle}/>}>Import</Button>
                    </a>     
                </Dropdown>
                </Space>
            </Col>
            </Row>
            <DataGrid/>
        </Content>
      </Layout>
      </SearchContext.Provider>
    );

}

export default ContentBar;
