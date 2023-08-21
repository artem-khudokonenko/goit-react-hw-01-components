import { ItemFrend, ListFrends, Span } from "./FriendList.styled";
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ListFrends>
      {friends.map(friend => (
        <ItemFrend key={friend.id}>
          <Span color={friend}></Span>
          <img src={friend.avatar} alt="User avatar" width="48" />
          <p>{friend.name}</p>
        </ItemFrend>
      ))}
    </ListFrends>
  );
};
FriendList.propTypes={
  friends: PropTypes.arrayOf(PropTypes.object),

}