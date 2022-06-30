

export const TransactionHistoryHeader = ({ textArray }) => {
    return (
        <thead>
            <tr>
                {textArray.map(text => text !== "id" ? <th key={text}>{text}</th> : console.log("id"))}
            </tr>
        </thead>
    )
}