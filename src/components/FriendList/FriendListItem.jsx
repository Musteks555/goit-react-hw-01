import clsx from "clsx";
import css from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline = false }) => {
    return (
        <>
            <img src={avatar} alt="Avatar" width="48" className={clsx(css.friendImg)} />
            <p className={clsx(css.friendName)}>{name}</p>
            <p className={clsx(css.friendStatus, {
                [css.online]: isOnline,
                [css.offline]: !isOnline,
            })}>{isOnline ? 'Online' : 'Offline'}</p>
        </>
    )
}

export default FriendListItem