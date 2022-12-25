import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getBooks = createAsyncThunk('book/getBooks', async(_,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try {
//part2
//dispatch{type:'book/getBooks/pending', payload: undefined}
        const res = await fetch('http://localhost:4000/books');
        const data = await res.json();
        return data ;
//dispatch{type:'book/getBooks/fulfilled', payload: undefined}
    } catch (error) {
        return rejectWithValue('Failed to fetch !');
//dispatch{type:'book/getBooks/rejected', payload: undefined}
    }
});

export const insertBook = createAsyncThunk ('book/insertBooks',async(bookData,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try {
        const res = await fetch ('http://localhost:4000/books',{
            method : 'POST',
            body: JSON.stringify(bookData),
            headers:{
                'Content-type':'application/json; charset=UTF-8',
            }
        });
        const data = await res.json();
        return data ;
    } catch (error) {
        return rejectWithValue('Error To Book Data !');
        
    }
})



//part1 getBooks : {pending ,pending, rejected}
//getBooks -> createAsyncThunk -> create 3 type of actions:
//pending : createAction("book/getBooks/pending",(payload)=>{return payload})
//fulfilled : createAction("book/getBooks/pending",(payload)=>{return payload})
//rejected : createAction("book/getBooks/rejected",(payload)=>{return payload})


export const deleteBook = createAsyncThunk ('book/deleteBook',async(id,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try {
        await fetch (`http://localhost:4000/books/${id}`,{
            method : 'DELETE',
            headers:{
                'Content-type':'application/json; charset=UTF-8',
            }
        });
        return id ;
    } catch (error) {
        return rejectWithValue('Error To Book Data !');
        
    }
})


export const getBook = createAsyncThunk ('book/getBook',async(id,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try {
        await fetch (`http://localhost:4000/books/${id}`,{
            method : 'GET',
            headers:{
                'Content-type':'application/json; charset=UTF-8',
            }
        });
        return id ;
    } catch (error) {
        return rejectWithValue('Error To Book Data !');
        
    }
})

const bookSlice = createSlice({
    name : 'book',
    initialState:{
        book:null,
        isLoading: false,
        error : null,
        bookInfo: null,
    },
    extraReducers:{
        //getBook
        [getBooks.pending]:(state,action)=>{
            state.isLoading=true;
            state.error =null;
        },
        [getBooks.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.books=action.payload;
        },
        [getBooks.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        },
        //insertBook
        [insertBook.pending]:(state,action)=>{
            state.isLoading=true;
            state.error =null;
            
        },
        [insertBook.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.books.push(action.payload);
        },
        [insertBook.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        },
        //deleteBook
        [deleteBook.pending]:(state,action)=>{
            state.isLoading=true;
            state.error =null;
            
        },
        [deleteBook.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.books=state.books.filter(el => el.id !== action.payload)
            console.log(action)
        },
        [deleteBook.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        },
        //getBook
        
        [getBook.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.bookInfo=action.payload;
            console.log(action)
        },
    }
    
})





export default bookSlice.reducer;