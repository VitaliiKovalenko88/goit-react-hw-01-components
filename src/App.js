import Profile from "./components/Profile";
import user from "./data/user";

function App() {
  return <Profile 
  username={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.avatar}
  />;
}
export default App;
