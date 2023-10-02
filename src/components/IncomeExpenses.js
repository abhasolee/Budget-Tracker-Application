import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.filter(item => item > 0).reduce((acc,item)=> (acc+=item),0 ).toFixed(2);
    const expenses = amounts.filter(item => item < 0).reduce((acc,item)=> (acc+=item),0 ).toFixed(2);

    return (
    <div className="balance-box">
        <div>
            <h4>Income</h4>
            <p className="income">${income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className="expenses">${expenses}</p>
        </div>
    </div>
    )
}

export default IncomeExpenses