import clsx from "clsx";
import css from "./Transaction.module.css";

const TransactionHistory = ({ items }) => {
    return (
        <table className={clsx(css.transactionTable)}>
            <thead>
                <tr>
                    <th className={clsx(css.transactionHeaderItem)}>Type</th>
                    <th className={clsx(css.transactionHeaderItem)}>Amount</th>
                    <th className={clsx(css.transactionHeaderItem)}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <tr key={id} className={clsx(css.transactionRow)}>
                            <td className={clsx(css.transactionItem)}>{capitalizeFirstLetter(type)}</td>
                            <td className={clsx(css.transactionItem)}>{amount}</td>
                            <td className={clsx(css.transactionItem)}>{currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

function capitalizeFirstLetter(type) {
    if (type.charAt(0).toLowerCase() === type.charAt(0)) {
        return type.charAt(0).toUpperCase() + type.slice(1);
    } else {
        return type;
    }
}

export default TransactionHistory