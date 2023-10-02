import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    return (
    <li className={transaction.amount < 0 ? 'minus': 'plus'}>
        {transaction.text} <span>{transaction.amount < 0 ? '-$' + Math.abs(transaction.amount) : '+$' + Math.abs(transaction.amount)}</span>
            <button class="delete-button" onClick= {() => deleteTransaction(transaction.id)}>X</button>
    </li>
    )
}



export default Transaction