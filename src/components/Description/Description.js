
export const Description  = ({userInfo: { avatar, username, tag, location }}) => {
    return (
    <div>
        <img
            src={`${avatar}`}
            alt={username}
        />
        <p class="name">{username}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
  </div>
    )
}