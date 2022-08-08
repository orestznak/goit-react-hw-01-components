import { Profile } from "./Profile/Profile";
import { Box } from "./Box";
import user from '../user.json';


export const App = () => {
  return (
    <Box height="100vh" display="flex" justifyContent="center" alignItems="center" fontSize="40" background="#d9ecff" >
      <Profile user={user}/>
    </Box>
  
    );
};
