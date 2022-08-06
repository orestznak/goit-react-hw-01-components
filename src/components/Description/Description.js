
export const Description  = ({user: { avatars, username, tag, location }}) => {
    return (
    <div>
        <img
            src={avatars}
            alt={username}
        />
        <p class="name">{username}</p>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </div>
    )

}