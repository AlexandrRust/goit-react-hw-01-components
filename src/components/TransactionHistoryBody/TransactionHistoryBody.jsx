

import css from './TransactionHistoryBody.module.css'


export const TransactionHistoryBody = ({ transactions }) => {
    return (
        <tbody>
            {transactions.map(transaction => (
                <tr key= {transaction.id}>
                <td className={css.type}>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.currency}</td>
                </tr>
            ))}
        </tbody>
    )
}
