import { Profile } from "./Profile/Profile";
import { Box } from "./Box";
import { Statistics } from "./Statistics/Statistics";
import user from '../user.json';
import data from '../data.json';


export const App = () => {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" fontSize="40" background="#d9ecff" >
      <Profile user={user}/>
      <Statistics items={data}/>
    </Box>
  
    );
};
