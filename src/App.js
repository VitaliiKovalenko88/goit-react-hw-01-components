import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import user from "./data/user/user.json";
import data from "./data/data/data.json"

function App() {
  console.log()
  return <>
  <Profile 
  username={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
  />;
  <Statistics
  title='Upload stats'
  stats={data}
  />
  </>
}
export default App;
