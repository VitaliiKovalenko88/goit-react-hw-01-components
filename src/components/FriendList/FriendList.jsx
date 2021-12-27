import { List } from './FriendList.styled'
import { Item } from '../FriendListItem/FriendListItem.styled'
import FriendListItem from '../FriendListItem/FriendListItem';
const FriendList = ({friends}) => (
  <List>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <Item key={id}>
        <FriendListItem 
            avatar={avatar}
            name={name} 
            isOnline={isOnline} />
      </Item>
    ))}
  </List>
);
export default FriendList;
