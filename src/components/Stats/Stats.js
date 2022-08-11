import PropTypes from 'prop-types'

import { StatsPiece } from "components/StatsPiece/StatsPiece"
import { Box } from "components/Box"

export const Stats = ({stats: {followers, views,likes}}) => {
    return (
    <Box display="flex" as='ul' padding="0px" margin="0px">  
        <StatsPiece label="Followers " quantity={followers}/>
        <StatsPiece label="Views " quantity={views}/>
        <StatsPiece label="Likes " quantity={likes}/>
    </Box>
    )
}

Stats.propTypes = {
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
}