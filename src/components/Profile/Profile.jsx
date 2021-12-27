import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Avatar,
  Name,
  Text,
  Stats,
  StatsItem,
  LabelEl,
  QuantityEl,
} from './Profile.styled';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <ProfileContainer>
    <div>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{username}</Name>
      <Text>@{tag}</Text>
      <Text>{location}</Text>
    </div>
    <Stats>
      <StatsItem>
        <LabelEl>Followers</LabelEl>
        <QuantityEl>{followers}</QuantityEl>
      </StatsItem>
      <StatsItem>
        <LabelEl>Views</LabelEl>
        <QuantityEl>{views}</QuantityEl>
      </StatsItem>
      <StatsItem>
        <LabelEl>Likes</LabelEl>
        <QuantityEl>{likes}</QuantityEl>
      </StatsItem>
    </Stats>
  </ProfileContainer>
);

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired
}