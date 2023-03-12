import React from 'react'
import './Gallery.css'


const CatGallery = ({setCenterCard,card}) => {


    function changeCenterCardData(id) {
        let res = card.filter((data) => data.id === id)
        setCenterCard(res);
        console.log(res)
       }

   

    return (
        <div className='image-gallery'>
        <h2 className='header'>Cats Image Gallery</h2>
        <div className='gallery'>
            
            <div className='container'>
            
            {
                card.map((item) => {
                    return(
                        <div className='cards'onClick={() => changeCenterCardData(item.id)} key={item.id}>
                            <div className='img-name'><h3>{item.data.name}</h3></div>
                            <div className='img-clickedTimes'><p>No.of times clicked:{item.data.clickedTimes}</p></div>
                            <div className='gallery-img'><img src={item.data.image} /></div>
                            <div><p className='card-link'>Card Link</p></div>
                        </div>
                    )
                })
            } 
            </div>
        </div>
        </div>
    )
}

export default CatGallery
