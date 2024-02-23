import css from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline = false }) => {
    return (
        <>
            <img src={avatar} alt="Avatar" width="48" className={css.friendImg} />
            <p className={css.friendName}>{name}</p>
            <p className={[css.friendStatus, isOnline ? css.online : css.offline].join(' ')}>{isOnline ? 'Online' : 'Offline'}</p>
        </>
    )
}

export default FriendListItem