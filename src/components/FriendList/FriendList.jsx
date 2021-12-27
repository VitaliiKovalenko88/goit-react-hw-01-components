import FriendListItem from '../FriendListItem/FriendListItem';
const FriendList = ({friends}) => (
  <ul class="friend-list">
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);
export default FriendList;
