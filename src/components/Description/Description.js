import PropTypes from 'prop-types'

import { ImageUser,Name,UserInfo } from "./Description.styled"
import { Box } from "components/Box"

export const Description  = ({userInfo: { avatar, username, tag, location }}) => {
    return (
    <Box display="flex" flexDirection="column" alignItems="center" paddingY="16px">
        <ImageUser
            src={`${avatar}`}
            alt={username}
        />
        <Name>{username}</Name>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
  </Box>
    )
}

Description.prototype ={
    userInfo: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
}