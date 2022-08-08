import { Description } from '../Description/Description'
import { Stats } from 'components/Stats/Stats'

export const Profile = ({user}) => {
    return (
        <div>
            <Description userInfo={user}/>
            <Stats stats={user.stats}/>
        </div>
    )}
  
  
