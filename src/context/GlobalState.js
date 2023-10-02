import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

//Initial State
const initialState = {
    transactions: []
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer, initialState);

    //Actions to make call to reduce function
    //Delete Transaction
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    //Add Transaction
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value = {{transactions:state.transactions, deleteTransaction, addTransaction}}>
            {children}
        </GlobalContext.Provider>
    );
}