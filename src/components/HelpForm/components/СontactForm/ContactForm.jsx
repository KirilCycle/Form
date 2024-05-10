import React,{ useState } from 'react'
import TabView from './components/TabView'
import PhysicalPerson from './components/tabs/PhysicalPerson'

const ContactForm = () => {
   const [formState, setFormState] = useState('')

   const tabButtons = [{title: 'Фіз. особа',name:'physicalPerson', body: <p></p> },{title: "Юр.Особа",name:"wewe",body: <p></p>}]
   const tabs = {
    'physicalPerson': {
      id: '1',
      body: <PhysicalPerson setFormState={setFormState} />
    },
    'wewe': {
      id: '2',
      body: <p>AAAXXXX</p>
    }
   }

   console.log(formState)

   return (
    <div>
        <h2>Заповніть форму</h2>
        <TabView active="physicalPerson" tabButtons={tabButtons} tabs={tabs} />      
    </div>
  )
}

export default ContactForm