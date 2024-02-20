import FriendListItem from "./FriendListItem"

const FriendList = ({ friends }) => {
    return (
        <ul>
            {friends.map((friend, index) => {
                return (
                    <li key={index}>
                        <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
                    </li>
                )
            })}
        </ul>
    )
}

export default FriendList