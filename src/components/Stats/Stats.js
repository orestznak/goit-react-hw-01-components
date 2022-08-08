import { StatsPiece } from "components/StatsPiece/StatsPiece"
import { Box } from "components/Box"

export const Stats = ({stats: {followers, views,likes}}) => {
    return (
    <Box display="flex"  >  
        <StatsPiece label="Followers " quantity={followers}/>
        <StatsPiece label="Views " quantity={views}/>
        <StatsPiece label="Likes " quantity={likes}/>
    </Box>
    )
}