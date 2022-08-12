import styled from "styled-components";

export const Status = styled.span`
display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};

`
export const Avatar = styled.img`
margin-left: 16px;
  width: 60px;
`

export const FriendName = styled.p`
margin-left: 16px;
font-size: 20px;
`
