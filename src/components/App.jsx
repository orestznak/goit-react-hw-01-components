import { Box } from "./Box";

import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionTable/TransactionHistory";


import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json'
import transactions from '../transactions.json'




export const App = () => {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" fontSize="40" background="#d9ecff" >
      <Profile user={user}/>
      <Statistics items={data}/> 
      <FriendList friends={friends} />;
      <TransactionHistory  items={transactions}/>;
    </Box>
  
    );
};
