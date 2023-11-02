import Profile from "./components/Profile";
import user from "./data/user/user.json";

function App() {
  return <Profile 
  username={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
  />;
}
export default App;
