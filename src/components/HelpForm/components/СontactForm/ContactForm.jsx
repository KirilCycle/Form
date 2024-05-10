import React, from 'react'
import TabView from './components/TabView'
import PhysicalPerson from './components/tabs/PhysicalPerson'

const ContactForm = () => {
  
   const tabButtons = [{title: 'Фіз. особа',name:'physicalPerson', body: <p></p> },{title: "Юр.Особа",name:"wewe",body: <p></p>}]
   const tabs = {
    'physicalPerson': {
      id: '1',
      body: <PhysicalPerson/>
    },
    'wewe': {
      id: '2',
      body: <p>AAAXXXX</p>
    }
   }

   return (
    <div>
        <h2>Заповніть форму</h2>
        <TabView active="physicalPerson" tabButtons={tabButtons} tabs={tabs} />      
    </div>
  )
}

export default ContactForm