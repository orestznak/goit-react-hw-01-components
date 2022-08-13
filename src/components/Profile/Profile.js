import PropTypes from 'prop-types'

import { Description } from '../Description/Description'
import { Stats } from 'components/Stats/Stats'
import { Box } from 'components/Box'


export const Profile = ({user}) => {
    return (
        <Box width="360px" display="block"  flexDirection="column" alignItems="center" background="#fff" border="1px #fff solid" borderRadius="8px" boxShadow="2px 2px #d1d1d1" marginY="16px">
            <Description userInfo={user}/>
            <Stats stats={user.stats}/>
        </Box>
    )
}

Profile.prototype = {
    user: PropTypes.exact({
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        virws: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,

      })
    })
}
 
    

  
