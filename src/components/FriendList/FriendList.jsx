import FriendListItem from '../FriendListItem/FriendListItem';
const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);
export default FriendList;
