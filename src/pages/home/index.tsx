import React , { Component } from 'react';
import { View } from '@tarojs/components';
import AtTabBar from '../../components/tab-bar';

interface IndexState {
  current: number
}

export default class Index extends Component<{}, IndexState> {

  public constructor (props) {
    super(props)
    this.state = {
      current: 0,
    }
  }

  private handleClick (value: number): void {
    this.setState({
      [`current`]: value
    })
  }

  public render (): JSX.Element {

    const { current } = this.state;    
    const tabList = [
      { title: '首页', image: 'https://static.wozaizhao.com/app/home.png', selectedImage: 'https://static.wozaizhao.com/app/home-active.png', text: 'new' },
      { title: '点餐', image: 'https://static.wozaizhao.com/app/food.png', selectedImage: 'https://static.wozaizhao.com/app/food-active.png' },
      { title: '订单', image: 'https://static.wozaizhao.com/app/orders.png', selectedImage: 'https://static.wozaizhao.com/app/orders-active.png' },
      { title: '购物车', image: 'https://static.wozaizhao.com/app/cart.png', selectedImage: 'https://static.wozaizhao.com/app/cart-active.png', text: '100', max: 99 },
      { title: '我', image: 'https://static.wozaizhao.com/app/user.png', selectedImage: 'https://static.wozaizhao.com/app/user-active.png', text: '100', max: 99 }
    ]

    return (
      <View className='page page-index'>
        test
        <AtTabBar fixed tabList={tabList} onClick={this.handleClick.bind(this)} current={current} />

      </View>
    )
  }
}
