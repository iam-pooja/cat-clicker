import React, { useEffect } from 'react'
import './Card.css'
import { db } from '../../../firebaseConfig';
import { updateDoc,doc } from 'firebase/firestore';

const CenterCard = ({ centerCard,catData,setCenterCard }) => {

console.log(centerCard)
  useEffect(() => {
    let res = catData.filter((data) => data.id === centerCard[0]?.id)
    setCenterCard(res);
  },[catData])



  function handleUpdate(id,clickedTimes){
    
    const docRef = doc(db,'cats', id)
    updateDoc(docRef,{
      clickedTimes: clickedTimes + 1
      
    })
    
   }

  // console.log(centerCard ,'sh')
  if (centerCard.length >= 1) {
    return (
      <>
          <div className='card-container'>
        {
          centerCard.map((card) => {
            return(
        
            <div className="card">
              <div className='cat-name'><h3>{card.data.name}</h3></div>
              <div className='clickedTimes'><p>No.of times clicked:{card.data.clickedTimes}</p></div>
              <div onClick={() =>  handleUpdate(card.id, card.data.clickedTimes)} className='cat-img'><img  src={card.data.image} /></div>
              <div className="cat-nickname"><p>{card.data.nickname}</p></div>
              <div className="cat-age"><p>{card.data.age}</p></div>
              <div><p className='card-link'>Card Link</p></div>
            </div>
            )
            
          })
        }
        </div>
      </>
      
    )
  }

  return (
    <div className='card-container'>
      <div className="card">
        <div className='cat-name'><h3>Ricky</h3></div>
        <div className='clickedTimes'><p>No.of times clicked:10</p></div>
        <div className='cat-img'><img src='https://static.tnn.in/photo/msid-93415263,imgsize-491555,width-100,height-200,resizemode-75/93415263.jpg' /></div>
        <div className="cat-nickname"><p>Ricky1</p></div>
        <div className="cat-age"><p>young</p></div>
        <div><p className='card-link'>Card Link</p></div>
      </div>
    </div>
  )
}

export default CenterCard
