import React, { useEffect, useState } from 'react'
import { db } from '../../../firebaseConfig'
import { collection, onSnapshot, query } from 'firebase/firestore'
import CenterCard from '../CenterPanel/CenterCard'
import Form from '../FormPanel/Form'
import TableDetails from '../SideNavbar/TableDetails'
import './Parent.css'
import CatGallery from '../../bottomPanel/CatGallery'

const Parent = () => {

 const [catData, setCatData] = useState([])
 const[centerCard, setCenterCard] =useState([])

 

useEffect(() => {
    fetch()
    // console.log(table)
}, [])

async function fetch() {
    const catsDetails = query(collection(db, 'cats'))
    onSnapshot(catsDetails, (querySnapshot) => {
        setCatData(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        })))
    })
}


  return (
    <>
    <div className='parent-container'>
      <div className="parent-card">
         <TableDetails table={catData} setCenterCard={setCenterCard} /> 
         
        <CenterCard centerCard={centerCard} catData={catData} setCenterCard={setCenterCard}/>  <Form centerCard={centerCard} 
        setCenterCard={setCenterCard} catData={catData}/>
      </div>
    </div>
    <CatGallery setCenterCard={setCenterCard} card={catData}/>
    </>

  )
}

export default Parent
