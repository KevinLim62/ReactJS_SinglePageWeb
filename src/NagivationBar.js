import { HomeOutlined, SearchOutlined, LogoutOutlined, SendOutlined, RetweetOutlined, PlusOutlined} from '@ant-design/icons';
import {PeopleOutlineOutlined, BusinessOutlined, ListAltOutlined, SavedSearchOutlined} from '@mui/icons-material';
import { Layout, Menu, Button, Space, Input, Tabs, Col, Row, Typography, Card, Dropdown, Divider} from 'antd';
import SubMenu from './SubMenu';
import React, { useState, useRef, useEffect } from 'react';

const { Header } = Layout;
const { Meta } = Card;
const { Title, Link } = Typography;

const IconStyle = {
    fontSize: '20px',
    color: 'grey',  
}

const tab_items = [
    {
      key: '1',
      label: `People`,
      children: (
        <Space style={{ position: 'relative', right: '170px' }}>
          <Button
            type="text"
            style={{ border: '1px solid grey' }}
            icon={<PlusOutlined style={IconStyle} />}
          >
            Job Titles
          </Button>
          <Button
            type="text"
            style={{ border: '1px solid grey' }}
            icon={<PlusOutlined style={IconStyle} />}
          >
            Company
          </Button>
          <Button
            type="text"
            style={{ border: '1px solid grey' }}
            icon={<PlusOutlined style={IconStyle} />}
          >
            Industry
          </Button>
          <Link href="/" target="blank">
            See All 30 Filters
          </Link>
        </Space>
      ),
    },
    {
      key: '2',
      label: `Companies`,
      children: (
        <Space style={{ position: 'relative', right: '170px' }}>
          <Button
            type="text"
            style={{ border: '1px solid grey' }}
            icon={<PlusOutlined style={IconStyle} />}
          >
            Industry
          </Button>
          <Button
            type="text"
            style={{ border: '1px solid grey' }}
            icon={<PlusOutlined style={IconStyle} />}
          >
            Employees
          </Button>
          <Button
            type="text"
            style={{ border: '1px solid grey' }}
            icon={<PlusOutlined style={IconStyle} />}
          >
            Technologies
          </Button>
          <Link href="/" target="blank">
            See All 30 Filters
          </Link>
        </Space>
      ),
    },
  ];

const Nav_items = [
{
    label:'Home',
    key:1,
    icon: <HomeOutlined style={IconStyle}/>,
    children: [
            {
            label: ('Onboarding'),
            icon: <PeopleOutlineOutlined/>,
            key: 'a',
            },
            {
            label: ('Cockpit'),
            icon: <PeopleOutlineOutlined/>,
            key: 'b',
            },
        ],
},
{
    label:'Search',
    key:2,
    icon: <SearchOutlined style={IconStyle}/>
}, 
{
    label:'Engage',
    key:3,
    icon: <SendOutlined style={IconStyle}/>,
    children: [
        {
        label: ('Sequences'),
        icon: <PeopleOutlineOutlined/>,
        key: 'c',
        },
        {
        label: ('Emails'),
        icon: <PeopleOutlineOutlined/>,
        key: 'd',
        },
        {
        label: ('Calls'),
        icon: <PeopleOutlineOutlined/>,
        key: 'e',
        },
        {
        label: ('Tasks'),
        icon: <PeopleOutlineOutlined/>,
        key: 'f',
        },
    ],
}, 
{
    label:'Enrich',
    key:4,
    icon: <RetweetOutlined style={IconStyle}/>,
    children: [
        {
        label: ('Overview'),
        icon: <PeopleOutlineOutlined/>,
        key: 'j',
        },
        {
        label: ('CRM Enrichment'),
        icon: <PeopleOutlineOutlined/>,
        key: 'i',
        },
    ],
},  
]


const Nav_items2 = [
    {
        key: 1,
        label: (<space align="center"><PeopleOutlineOutlined style={IconStyle}/> People</space>),
    }, 
    {
        key: 2,
        label: (<space align="center"><BusinessOutlined style={IconStyle}/> Companies</space>),
    }, 
    {
        key: 3,
        label: (<space align="center"><ListAltOutlined style={IconStyle}/> Lists</space>),
    }, 
    {
        key: 4,
        label: (<space align="center"><SavedSearchOutlined style={IconStyle}/> Saved Searches</space>),
    }, 
    ]


const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    paddingInline: 20,
    lineHeight: '50px',
    backgroundColor: 'white',
    padding: '0px',
    position: 'sticky',
    top: 0,
    zIndex: 1,
    height: '100%',
    width: '100%',
};

const NagivationBar = () => {
const [current, setCurrent] = useState('2');
const [searchWidth, setsearchWidth] = useState(250);
const inputRef = useRef();

useEffect(() => {
    document.addEventListener("click",onNotSearchBar,true)
},[])

const onClick = (e) => {
    setCurrent(e.key);
        };

const onNotSearchBar = (e) => {
    if(inputRef.current.input !== e.target) setsearchWidth(250);
    else setsearchWidth(550)
}


    return (
        <Layout>
            <Header style={headerStyle}>
                    <Row
                        justify="start">
                    <Col style={{paddingRight:'20px'}} flex="70px">
                        <LogoutOutlined style={{fontSize: '20px',color: 'black' }}/>
                    </Col>
                    <Col flex={3}>
                        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={Nav_items} />
                    </Col>
                    <Col flex="auto">
                        <Space size={10}>
                            <Button type="primary" shape="round" size='medium'>Get Unlimited Leads</Button>
                            <Dropdown
                            trigger={['click']}
                            dropdownRender={(menu) => (
                                <Card 
                                onClick={() => setsearchWidth(550)}
                                style={{
                                    width: 550,
                                    height: 230,
                                }}
                                >
                                <Meta
                                    title={
                                    <Space>
                                        <Title style={{ paddingBottom: '60px' }} level={5}>
                                        Search by popular filters:
                                        </Title>
                                        <Tabs 
                                        defaultActiveKey="1"
                                        items={tab_items}
                                        />
                                        <Divider />
                                    </Space>
                                    }
                                    description="Search for people, companies, sequences and more..."
                                />
                                </Card>
                            )}
                            >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                <Input
                                    ref={inputRef}
                                    prefix=<SearchOutlined />
                                    placeholder="Search..."
                                    size="medium"
                                    style={{
                                        width: searchWidth,
                                    }}
                                />
                                </Space>
                            </a>
                            </Dropdown>
                        </Space>
                    </Col>
                    <Col flex="100px">
                        <SubMenu/>
                    </Col>
                    </Row>  
                    <Row>
                        <Col flex={8}>
                            <Tabs style={{paddingLeft:'10px'}} defaultActiveKey={2} items={Nav_items2}/>
                        </Col>
                    </Row>             
            </Header>
        </Layout>
    );
}

export default NagivationBar;