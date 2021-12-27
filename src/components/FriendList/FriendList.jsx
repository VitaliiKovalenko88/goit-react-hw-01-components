import PropTypes from 'prop-types'
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
            isOnline={isOnline}/>
      </Item>
    ))}
  </List>
);
export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};