import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";
import FriendList from "../FriendList/FriendList";
import user from "../../data/user/user.json";
import data from "../../data/stats/data.json";
import friends from "../../data/friends/friends.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transaction from "../../data/transactions/transactions.json";
import css from "./App.module.css";

function App() {
  return (
    <section>
      <div className={css.container}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        ;
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transaction} />
      </div>
    </section>
  );
}
export default App;
