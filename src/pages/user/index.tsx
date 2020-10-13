import React, { useState } from 'react';
import { FC } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import './index.scss'

type Props = {

}

const Index: FC<Props> = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [userAvatar, setUserAvatar] = useState('');
  const [userName, setUserName] = useState('');

  const handlerUserAreaTap = () => {

  }

  return (
    <View className='page page-user'>
      <View className="top flex-row arrowsLeft">
        <View onClick={handlerUserAreaTap} className="headerBox flex verticalcenter" id="userAreaTap">
            {
              userAvatar ? <View className="avatar avatarWrap">
                <Image mode="aspectFill" src={userAvatar}></Image>
              </View> : 
              <Image className="icon_header" src="https://static.luckincoffeecdn.com/mini/images/center/icon_header.png"></Image>
            }
            
            <View className="userName">
                <Text>{userName}</Text>
            </View>
        </View>
        <View className="box">
        
        </View>
      </View>
      
    </View>
  )
}

export default Index;

