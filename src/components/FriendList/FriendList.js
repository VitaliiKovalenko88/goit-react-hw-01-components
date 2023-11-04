import FriendListItem from "../FriendListItem/FriendListItem";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li class="item" key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
