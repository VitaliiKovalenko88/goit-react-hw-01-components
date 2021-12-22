import user from '../user.json';
import Profile from './Profile/Profile';
const App = () => (
  <>
    <Profile
      avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      stats={user.stats}
    />
  </>
);
console.log(<Profile />);
export default App;
