import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import data from './Statistics/data.json'
import friendsList from './FriendList/friends.json'
import { Statistics } from './Statistics/Statistics';
import transactionHistory from './TransactionHistory/transactions.json'
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile userItems={user} />
      <Statistics title="Upload stats" stats={data}/>
      <FriendList friends={friendsList}/>
      <TransactionHistory items={transactionHistory}/>
    </div>
  );
};
