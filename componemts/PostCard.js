import React from 'react';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import {Ionicons,AntDesign,EvilIcons} from 'react-native-vector-icons';

import {
  Container,
  Card,
  UserInfo,
  UserImg,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
} from '../Styles/Feedstyle';

const PostCard = ({item}) => {
  likeIcon = item.liked ? 'heart' : 'hearto';
  likeIconColor = item.liked ? '#333333' : 'grey';

  if (item.likes == 1) {
    likeText = '1 Like';
  } else if (item.likes > 1) {
    likeText = item.likes + ' Likes';
  } else {
    likeText = 'Like';
  }

  if (item.comments == 1) {
    commentText = '1 Comment';
  } else if (item.comments > 1) {
    commentText = item.comments + ' Comments';
  } else {
    commentText = 'Comment';
  }

  return (
    <Card>
      <UserInfo>
        <UserImg source={{uri:item.userImgUri}} />
        <UserInfoText>
          <UserName>{item.userName}</UserName>
          <PostTime>{item.postTime}</PostTime>
        </UserInfoText>
      </UserInfo>
      <PostText>{item.post}</PostText>
      {item.postImgUri != 'none' ?  <PostImg source={{uri:item.postImgUri}} /> :<Divider/> }

      <InteractionWrapper>
        <Interaction active={item.liked}>
          <AntDesign name={likeIcon} size={25} color={likeIconColor} />
          <InteractionText active={item.liked}>{likeText}</InteractionText>
        </Interaction>
        <Interaction>
          <EvilIcons name={'comment'} size={25} />
          <InteractionText>{commentText}</InteractionText>
        </Interaction>
      </InteractionWrapper>
    </Card>
  );
};

export default PostCard;