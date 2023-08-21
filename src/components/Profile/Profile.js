import PropTypes from 'prop-types';
import { Card, CardUser, FlexsSpan, ImgUser, List, TextSpan, TextUser, TextUserName } from "./Profile.styled";

export const Profile = ({ userItems }) => {
  return (
    <Card>
      <CardUser>
        <ImgUser src={userItems.avatar} alt="" />
        <TextUserName>{userItems.username}</TextUserName>
        <TextUser>@{userItems.tag}</TextUser>
        <TextUser>{userItems.location}</TextUser>
      </CardUser>
      <List>
        <FlexsSpan>
          <TextSpan>Followers</TextSpan>
          <TextSpan>{userItems.stats.followers}</TextSpan>
        </FlexsSpan>
        <FlexsSpan>
          <TextSpan>Views</TextSpan>
          <TextSpan>{userItems.stats.views}</TextSpan>
        </FlexsSpan>
        <FlexsSpan>
          <TextSpan>Likes</TextSpan>
          <TextSpan>{userItems.stats.likes}</TextSpan>
        </FlexsSpan>
      </List>
    </Card>
  );
};

Profile.propTypes={
  userItems: PropTypes.object,

}