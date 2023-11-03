const FriendListItem = ({avatar, name,isOnline})=>{
  console.log(avatar)
 return <>
  <span class="status">{isOnline}</span>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
  <p class="name">{name}</p>
</>
};

export default FriendListItem;