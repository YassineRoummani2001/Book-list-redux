import React, { Fragment ,useEffect,useState} from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import { useDispatch ,useSelector } from 'react-redux';
import { getBooks , deleteBook } from '../store/bookSlice';
import './book.css';

const PostContainer = () => {
  const[selectedBook,setEelectedBook]=useState(null)
  const {isLoggedIn}=useSelector((state)=>state.auth);
  const {isLoading, books}=useSelector((state)=>state.books);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getBooks());
  },[dispatch])

  const getBookId=(id)=>{
    const selectedBook = books.find((item)=>item.id === id);
    // console.log(selectedBook)
    setEelectedBook((prev)=>{return{...prev,...selectedBook}});
  }

  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList
            isLoading={isLoading} 
            books={books} 
            isLoggedIn={isLoggedIn} 
            deleteBook={deleteBook} 
            dispatch={dispatch} 
            getBookId={getBookId}
            />
        </div>
        <div className='col side-line'>
          <BookInfo info={selectedBook}/>
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
