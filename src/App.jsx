
import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import { FriendList } from 'components/FriendList/FriendList'
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";

import user from 'mock/user.json';
import data from 'mock/data.json';
import friends from 'mock/friends.json';
import transactions from 'mock/transactions.json'

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes = {user.stats.likes}
      />
      <Statistics items={data}/>
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions}/>
    </>
  );
};

