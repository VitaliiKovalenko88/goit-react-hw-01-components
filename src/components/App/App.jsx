import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';
import { Container } from './App.styled';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

const {avatar, username, tag, stats, location}=user 

const App = () => (
  <Container>
    <Profile
      avatar={avatar}
      username={username}
      tag={tag}
      stats={stats}
      location={location}
    />
    <Statistics title="Upload stats" stats={data}/>
    <Statistics stats={data}/>
    <FriendList friends={friends}/>
    <TransactionHistory items={transactions}/>;
  </Container>
);

export default App;
