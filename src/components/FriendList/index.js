import FriendListItem from "../FriendListItem";

const FriendList =({friends})=>{
 return <ul class="friend-list">
    {friends.map(({avatar, name, isOnline, id})=>{
      return <li class="item" key={id}><FriendListItem avatar={avatar}
      name={name}
      isOnline={isOnline}
       />
      </li>
    })}
</ul>
};

export default FriendList;