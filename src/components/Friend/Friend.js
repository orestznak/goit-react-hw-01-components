import { Box } from "components/Box";
import { Status,Avatar,FriendName } from "./Friend.styled";

export const Friend = ({friend: {avatar, name, isOnline}}) => {
    return (
        <Box display="flex"
        alignItems="center"
        padding="8px 16px"
        borderRadius="8px"
        overflow="hidden"
        border= "2px #70757a solid"
        background="#fff"
        marginY="8px">
            
            <Status status={isOnline}></Status>
            <Avatar 
                src={`${avatar}`}
                alt={name}
            />
            <FriendName>{name}</FriendName>


        </Box>


    )
}