import PropTypes from 'prop-types'
import { Status, Avatar, Name } from './FriendListItem.styled'

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <Status style={{
      backgroundColor:
        isOnline
        ? 'green'
        : 'tomato'
    }}></Status>
    <Avatar src={avatar} alt="User avatar" width="55" />
    <Name>{name}</Name>
  </>
);

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};