import css from "./Transaction.module.css";

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionTable}>
            <thead>
                <tr>
                    <th className={css.transactionHeaderItem}>Type</th>
                    <th className={css.transactionHeaderItem}>Amount</th>
                    <th className={css.transactionHeaderItem}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <tr key={id} className={css.transactionRow}>
                            <td className={css.transactionItem}>{capitalizeFirstLetter(type)}</td>
                            <td className={css.transactionItem}>{amount}</td>
                            <td className={css.transactionItem}>{currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

function capitalizeFirstLetter(type) {
    return type[0].toUpperCase() + type.slice(1);
}


export default TransactionHistory