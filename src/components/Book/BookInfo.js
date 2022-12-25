import React, { Fragment } from 'react';

const BookInfo = ({info}) => {
  
  return (
    <Fragment>
      <h2>Book Details</h2>
      {info ?
      <div>
      <div className='form-group'>
            <label htmlFor='title'>Title :</label>
            <input type='text' className='form-control' id='title'  value= {info.title}  />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price :</label>
            <input type='number' className='form-control' id='price' value= {info.price}/>
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description :</label>
            <textarea
              className='form-control'
              id='Description'
              rows='1'
              required
              value= {info.description}
            >
            </textarea>
            <br />
          </div>
      </div> 

      : <div className='alert alert-secondary' role='alert'>
        There is no book selected yet. Please select!
      </div>
      }
     
      
    </Fragment>
  );
};

export default BookInfo;
