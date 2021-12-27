import {Status, Avatar, Name} from './FriendListItem.styled'

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <Status style={{
      backgroundColor:
        isOnline
        ? 'green'
        : 'tomato'
    }}></Status>
    <Avatar src={avatar} alt="User avatar" width="55" />
    <Name class="name">{name}</Name>
  </>
);

export default FriendListItem;
