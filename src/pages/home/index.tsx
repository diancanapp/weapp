import React , { Component } from 'react';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import './index.scss'

interface IndexState {
  // current: number
}

export default class Index extends Component<{}, IndexState> {

  public constructor (props: {}) {
    super(props)
  }

  public render (): JSX.Element {

    const banners = [
      'https://static.wozaizhao.com/home-banner/1.jpg',
      'https://static.wozaizhao.com/home-banner/2.jpg',
      'https://static.wozaizhao.com/home-banner/3.jpg'
    ]

    return (
      <View className='page page-home'>
        <View>
          <Swiper
            className='banner'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            autoplay>
              { banners.map((banner: string) => (
                  <SwiperItem key={banner}>
                    <Image src={banner}></Image>
                  </SwiperItem>
                ))
              }
          </Swiper>
        </View>

      </View>
    )
  }
}
