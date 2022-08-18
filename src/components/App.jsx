import { Box } from "./Box";

import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionTable/TransactionHistory";


import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'




export const App = () => {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" fontSize="40" background="#d9ecff" >
      <Profile user={user}/>
      <Statistics items={data}/> 
      <FriendList friends={friends} />
      <TransactionHistory  items={transactions}/>
    </Box>
  
    );
};
