import { Collapse, Radio, Select } from 'antd';
import React, { useState, useContext } from 'react';
import { SearchContext } from '../ContentBar';
const { Panel } = Collapse;


const panelStyle = {
    marginBottom: 10,
    border: 'none',
    background: '#EEEEEE',
  };
  
  const CollapseStyle = {
    border: 'none',
    background: 'white',
  };

const options = ['United States','Americas','North America','EMEA','DALLAS','EUROPE','APAC']
                .map((option) => { return {
                  label:option,
                  value:option,
                }})


const AccountHQLoc = () => {

  const { selectItem, setSelectItem} = useContext(SearchContext);

    const [value, setValue] = useState(1);
    const onActiveKey = (key) => {
        setValue(Number(key));
    };
    
    const setItem = (items) => {
      if(!selectItem.includes(items))
      {
        setSelectItem(oldItem => [...oldItem,items])
      }
    }

    const unsetItem = (items) => {
      if(selectItem.includes(items))
      {
        setSelectItem(selectItem.filter(item => item !== items));
      }
    }

  return (
    
    <Radio.Group style={{ width: '100%' }} value={value}>
    <Collapse
    style={CollapseStyle}
    accordion
    onChange={onActiveKey}
    defaultActiveKey={['1']}
    >
    <Panel
        style={panelStyle}
        showArrow={false}
        header={
        <>
            <Radio value={1}/>
              Select Region
        </>
        }
        key="1"
    >
        <p>City / State / Country / ZIP</p>
        <Select
        mode="tags"
        showArrow={true}
        showSearch
        style={{
            width: '100%',
            marginBottom: 10,
        }}
        placeholder="Enter locations..."
        options={options}
        onSelect={setItem}
        value={[...selectItem]}
        onDeselect={unsetItem}
        />
        <Collapse style={CollapseStyle}>
        <Panel
            header={
            <>
                <p style={{ color: '#3C79F5' }}>Exclude locations</p>
            </>
            }
            key="1"
            showArrow={false}
        >
            <p>City / State / Country to exclude:</p>
            <Select
            mode="tags"
            showArrow={true}
            showSearch
            style={{
                width: '100%',
                marginBottom: 10,
            }}
            placeholder="Enter locations to exclude..."
            options={options}
            />
        </Panel>
        </Collapse>
    </Panel>
    <Panel
        style={panelStyle}
        showArrow={false}
        header={
        <>
            <Radio value={2}/>
            Select ZIP Radius
        </>
        }
        key="2"
    >
        <p>Address / City / ZIP</p>
    </Panel>
    </Collapse>
</Radio.Group>
  );
}

export default AccountHQLoc