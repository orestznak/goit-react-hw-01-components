import { Box } from "components/Box";
import { Friend } from 'components/Friend/Friend';

export const FriendList = ({friends}) => {
    return(
        <Box>
            {friends.map(friend => (
                <Friend key={friend.id} friend={friend}/>
                ))
            }
        </Box>
    )
}

