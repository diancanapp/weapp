import React , { Component } from 'react';
import { View } from '@tarojs/components';
import './index.scss'

interface IndexState {
  current: number
}

export default class Index extends Component<{}, IndexState> {

  public constructor (props) {
    super(props)

  }


  public render (): JSX.Element {



    return (
      <View className='page page-order'>
        <View>
          order
        </View>

      </View>
    )
  }
}
