import Profile from "../components/Profile";
import Statistics from "../components/Statistics";
import FriendList from "../components/FriendList";
//import FriendListItem from "./components/FriendListItem";
import user from "../data/user/user.json";
import data from "../data/stats/data.json";
import friends from "../data/friends/friends.json";

function App() {
  return (
    <>
      <Profile
        username={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      ;
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </>
  );
}
export default App;
