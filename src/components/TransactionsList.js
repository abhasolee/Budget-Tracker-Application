import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

const TransactionsList = () => {
  const {transactions}= useContext(GlobalContext);

  return (
    <div className='transactions'>
        <h3>History</h3>
        <ul className='list'>
            {transactions.map(transaction => (<Transaction key={transaction.id} transaction = {transaction}/>))}
            
        </ul>
    </div>
  )
}

export default TransactionsList