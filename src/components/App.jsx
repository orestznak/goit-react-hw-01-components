import { Profile } from "./Profile/Profile";
import user from '../user.json'

export const App = ({user}) => {
  return (
    <Profile user={user}/>
  
    );
};
