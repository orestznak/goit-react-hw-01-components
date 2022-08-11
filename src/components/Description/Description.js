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