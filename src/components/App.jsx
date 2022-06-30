
import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import { FriendList } from 'components/FriendList/FriendList'
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json'

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

