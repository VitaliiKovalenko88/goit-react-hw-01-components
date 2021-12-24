import user from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
const App = () => (
  <>
    <Profile
      avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />;
  </>
);

export default App;
