// import PropTypes from 'prop-types';

import { TransactionHistoryHeader } from 'components/TransactionHistoryHeader/TransactionHistoryHeader';
import { TransactionHistoryBody } from 'components/TransactionHistoryBody/TransactionHistoryBody';
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ transactions }) => {
    return (
        <table className={css.transaction__history}>
            <TransactionHistoryHeader textArray={ Object.keys(transactions[0])} />
            <TransactionHistoryBody transactions={transactions}/>
        </table>
    )
}
