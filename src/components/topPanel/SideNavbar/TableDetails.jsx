import { collection, onSnapshot, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../../firebaseConfig'
import './Table.css'

const TableDetails = ({table,setCenterCard}) => {

    function changeCenterCardData(id) {
     let res = table.filter((data) => data.id === id)
     setCenterCard(res);
     console.log(res)
    }
    
    return (
        <div className='container'>
            {
                table.map((item) => {
                    return (
                        <div className='cat-table' key={item.id}>
                          <div className='side-table'>
                          <button onClick={() => changeCenterCardData(item.id)} className='btn'>{item.data.name} {item.data.clickedTimes}</button>
                          </div>
                        </div>
                    )
                })

            }
        </div>
    )
}

export default TableDetails
