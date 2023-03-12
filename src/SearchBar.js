import React, {useState, useContext} from 'react';
import { SearchOutlined, DownloadOutlined, CaretUpOutlined, CloseOutlined ,FilterFilled} from '@ant-design/icons';
import {PeopleOutlineOutlined, BusinessOutlined, ListAltOutlined, LocationOnOutlined,FactoryOutlined, InsertChartOutlined, StorageOutlined, AttachMoneyOutlined, LocalAtmOutlined, WorkHistoryOutlined} from '@mui/icons-material';
import { Collapse, Input, Button, Divider, Row, Col, Typography, Space} from 'antd';
import Filters from './Filters';
import AccountHQLoc from './Collapseitems/AccountHQLoc';
import { SearchContext } from './ContentBar';
const { Text } = Typography;
const { Panel } = Collapse;


const IconStyle = {
  fontSize: '20px',
  color: 'grey',  
}

const Collapse_items = [
  {
    key:1,
    name:'Lists',
    icon:<ListAltOutlined style={IconStyle}/>,
    child:<p>Lists</p>
  },
  {
    key:2,
    name:'Company',
    icon:<BusinessOutlined style={IconStyle}/>,
    child:<p>Company</p>
  },
  {
    key:3,
    name:'Account HQ Location',
    icon:<LocationOnOutlined style={IconStyle}/>,
    child:<AccountHQLoc/>
  },
  {
    key:4,
    name:'# Employees',
    icon:<PeopleOutlineOutlined style={IconStyle}/>,
    child:<p>Employees</p>
  },
  {
    key:5,
    name:'Industry & Keywords',
    icon:<FactoryOutlined style={IconStyle}/>,
    child:<p>Industry & Keywords</p>
  },
  {
    key:6,
    name:'Buying Intent',
    icon:<InsertChartOutlined style={IconStyle}/>,
    child:<p>Buying Intent</p>
  },
  {
    key:7,
    name:'Technologies',
    icon:<StorageOutlined style={IconStyle}/>,
    child:<p>Technologies</p>
  },
  {
    key:8,
    name:'Revenue',
    icon:<AttachMoneyOutlined style={IconStyle}/>,
    child:<p>Revenue</p>
  },
  {
    key:9,
    name:'Funding',
    icon:<LocalAtmOutlined style={IconStyle}/>,
    child:<p>Funding</p>
  },
  {
    key:10,
    name:'Job Postings',
    icon:<WorkHistoryOutlined style={IconStyle}/>,
    child:<p>Job Postings</p>
  },
]

const onSearch = (value) => {
  //console.log(value);
}
const SearchBar = (props) => {
const {selectItem, setSelectItem} = useContext(SearchContext);

const onChange = (key) => {
  //console.log(key);
};

const setOptions = (option) => {
  // if(selectItem.includes(option))
  // {
  //   setSelectItem(selectItem.filter(item => item !== option));
  // }
}

    return (
          <>
          <Col>
          <Input
            prefix=<SearchOutlined />
            placeholder="Search Companies"
            onSearch={onSearch}
            size="large"
            />
          </Col>
          <Col>
            <Filters/>
          </Col>
          <Col>
          <Collapse 
              accordion 
              collapsible='icon'
              defaultActiveKey={['1']} 
              onChange={onChange}>
            {Collapse_items.map((item) => {
              return (
                <Panel
                  header={                    
                      <>                     
                        {item.icon}
                        <Divider type="vertical" />
                        <span style={{ color: '#3C79F5' }}>
                          {item.name}
                          <Divider style={{paddingRight:'10px', visibility:'hidden'}} type="vertical" />
                          {item.name !== 'Account HQ Location'?
                          (<></>): 
                          (selectItem.length < 1?
                              (<></>):
                              (
                                <>
                                <Button size='small' shape="round" onClick={() => {setSelectItem(() => [])}} icon={<CloseOutlined />}>
                                 {selectItem.length}
                                </Button>
                                <Row style={{position:'relative',right:'20px'}}>
                                <Text>Company Locations:</Text>
                                  {selectItem.map((item) => (
                                    <Button size='small' onClick={() => {setSelectItem(() => selectItem.filter(option => option !== item))}} icon={<CloseOutlined style={{fontSize:'10px'}}/>}>
                                    {item}
                                    </Button>   
                                  ))}
                                </Row>
                                </>

                              )
                          )
                          }
                        </span>
                      </>
                    } 
                  key={item.key}>
                {item.child}
                </Panel>
              );
            })}
          </Collapse>
          </Col>
          <Col>
          <div style={{zIndex:1, position: props.widthsize<320? 'relative':'fixed', bottom:'0px', width:'320px', backgroundColor:'white'}}>
          <Button type="primary" block>
            More Filters <DownloadOutlined />
          </Button>
          </div>
          </Col>
          </>

      
    );
}

export default SearchBar;