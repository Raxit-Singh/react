import React from 'react'
import Tabs from './tab'

const TabTest = () => {
    const tabs = [
 {
    label: "tab 1",
    content: 'This is tab 1'
 },
 {
    label: 'tab-2',
    content: 'This is tab 2'
 },
 {
    label: 'tab-3',
    content: "this is tab 3"
 }
    ]
  return <Tabs tabsContent={tabs}/>
    
  
}

export default TabTest