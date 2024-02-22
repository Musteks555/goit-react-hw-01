import FriendListItem from "./FriendListItem"
import clsx from "clsx";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
    return (
        <ul className={clsx(css.friendList)}>
            {friends.map((friend, index) => {
                return (
                    <li key={index} className={clsx(css.friendListItem)}>
                        <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
                    </li>
                )
            })}
        </ul>
    )
}

export default FriendList