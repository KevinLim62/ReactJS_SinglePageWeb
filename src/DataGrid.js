import { EllipsisOutlined, CaretDownOutlined, PlusOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Table, Button, Space, Row, Tooltip, Checkbox, Form, Col, Card, Typography} from 'antd';
import { SearchContext } from './ContentBar';
import React, { useState, useContext } from 'react';
const { Title, Text } = Typography;
const IconStyle = {
    fontSize: '15px',
    color: 'black',
}

const columns = [
    {
        title: 'Company',
        dataIndex: 'company',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.company.length - b.company.length,
        width:180,
        fixed: 'left',
    },
    {
        title: 'Actions',
        dataIndex: 'actions',
        width:150,
    },
    {
        title: '# Employees',
        dataIndex: 'employees',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.employees - b.employees,
        width:120,
    },
    {
        title: 'Industry',
        dataIndex: 'industry',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.industry.length - b.industry.length,
        width:150,
    },
    {
        title: 'Keywords',
        dataIndex: 'keywords',
    },
    {
        title: 'Company Location',
        dataIndex: 'location',
    },
  ];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    company: `Company ${i}`,
    actions: <Button type="text" style={{border:'1px solid grey'}} icon={<PlusOutlined style={IconStyle}/>}>Save</Button>,
    employees: i,
    industry:`Industry ${i}`,
    keywords:`Keywords ${i}`,
    location:`Locations ${i}`,
  });
}

const DataGrid = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [componentDisabled, setComponentDisabled] = useState(true);
    const {selectItem, setSelectItem} = useContext(SearchContext);

    const hasSelected = selectedRowKeys.length > 0;

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        console.log([selectItem])
        setSelectedRowKeys(newSelectedRowKeys);

        if (newSelectedRowKeys.length)  setComponentDisabled(false);
        else setComponentDisabled(true)
      };
        
    const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    };

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };


    return (
        <>
        <Row>
            <Col style={{paddingBottom:'10px'}}>
            <Space>
                <div style={{backgroundColor:'#ECF2FF', padding:'0px 2px'}}>
                <Space style={{color:'black'}}>
                    <Checkbox></Checkbox>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    <CaretDownOutlined />
                </Space>
                </div>

                <Form disabled={componentDisabled}>
                <Space wrap>
                    <Button>Save</Button>
                    <Tooltip title="Find People">
                    <Button>Find People</Button>
                    </Tooltip>
                    <Button>Lists<CaretDownOutlined /></Button>
                    <Tooltip title="Export Selected Records to CSV">
                    <Button>Export</Button>
                    </Tooltip>
                    <Button>Edit<CaretDownOutlined /></Button>
                    <Button><EllipsisOutlined /></Button>
                </Space>
                </Form>

            </Space>
            </Col>
        </Row>
        <Row>
        {selectItem.length < 1? 
            (<Card
                style={{
                width: '100%',
                height: '480px',
                backgroundColor:'#F5F5F5'
                }}
                >
                <p style={{position:'absolute', top:'35%'}}><ArrowLeftOutlined style={{fontSize:'16px'}}/> Add filters to begin your search.</p>
                <Row style={{position:'relative', left:'180px'}}>
                    <Col style={{paddingRight:'60px'}}>
                    {/* <Card
                        title="Saved Searches"
                        headStyle={{textAlign:'left'}}
                        extra={<a href="#">See All Saved</a>}
                        style={{
                        width: 300,
                        height: '200px'
                        }}
                    >
                        <p>Select your filter and create a Saved Search</p>
                    </Card>
                    </Col>
                    <Col>
                    <Card
                        title="Recent Searches"
                        headStyle={{textAlign:'left'}}
                        style={{
                        width: 300,
                        height: '200px'
                        }}
                    >
                        <Button block>Company Locations: Americas</Button>
                        <Button block>Company Locations: India</Button>
                        <Button block>Company Locations: APAC</Button>
                    </Card> */}
                    </Col>
                </Row>
            </Card>):
            (<Table size='middle' style={{border:'1px solid grey'}} rowSelection={rowSelection} columns={columns} dataSource={data} pagination={{position:['bottomLeft']}} scroll={{x:1200, y: 400}} onChange={onChange}/>)
            }
        </Row>
        </>
    );

}

export default DataGrid;


