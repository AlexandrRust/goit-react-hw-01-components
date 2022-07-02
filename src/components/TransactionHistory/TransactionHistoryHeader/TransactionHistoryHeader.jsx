import PropTypes from 'prop-types';

export const TransactionHistoryHeader = ({ textArray }) => {
    return (
        <thead>
            <tr>
                {textArray.map(text => text !== "id" && <th key={text}>{text}</th>)}
            </tr>
        </thead>
    )
}

TransactionHistoryHeader.propTypes = {
    textArray: PropTypes.arrayOf(PropTypes.string.isRequired),
}
