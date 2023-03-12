import React, { useEffect, useState } from 'react'
import './Form.css'
import { db } from '../../../firebaseConfig';
import { updateDoc,doc } from 'firebase/firestore';

const Form = ({ centerCard,setCenterCard,catData }) => {

    const [displayForm, setDisplayForm] = useState(false)
    
    const [formValue, setFormValue] = useState({
        name: centerCard[0]?.data.name,
        image: centerCard[0]?.data.image,
        clickedTimes: centerCard[0]?.data.clickedTimes
    })

    useEffect(() => {
        let res = catData.filter((data) => data.id === centerCard[0]?.id)
        setCenterCard(res);
      },[catData])

      useEffect(() => {
        setFormValue(
            {
                name: centerCard[0]?.data.name,
                image: centerCard[0]?.data.image,
                clickedTimes: centerCard[0]?.data.clickedTimes
            }
        )
      },[centerCard])

    function handleUpdate(e) {
        e.preventDefault()
        let id = centerCard[0]?.id
        const docRef = doc(db, 'cats', id)
        updateDoc(docRef, {
           name: formValue.name,
           image: formValue.image,
           clickedTimes: formValue.clickedTimes 

        })
       setDisplayForm(false)
    }

    function handleChange(e) {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }



    return (
        <div className='form'>
            <div className="form-container">
                <button onClick={() => setDisplayForm(!displayForm)} className='form-btn'>Open New Form</button>
                {displayForm && (

                    <form className="form-card">
                        <div className='label-input'>
                            <label>Cat Name</label>
                            <input type="text"
                                name='name'
                                placeholder='Ricky'
                                value={formValue.name}
                                onChange={handleChange} />
                            <label>Cat Image</label>
                            <input type="text"
                                name='image'
                                placeholder='images/ricky.jpg'
                                value={formValue.image}
                                onChange={handleChange} />
                            <label>Cat Clicks</label>
                            <input type="number"
                                name='clickedTimes'
                                placeholder='10'
                                value={formValue.clickedTimes}
                                onChange={handleChange} />
                        </div>
                        <div className="save-undo">
                            <button onClick={(e) => handleUpdate(e)} className='save-btn' type='submit'>Save</button>
                            <button className='undo-btn' type='submit'>undo</button>
                        </div>
                    </form>

                )}
            </div>
        </div>
    )
}

export default Form
