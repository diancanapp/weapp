import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import PropTypes, { InferProps } from 'prop-types'
import './index.scss'

interface WzzShopAddressProps {
  name: string,
  distanceText: string
}

interface WzzShopAddressState {
  
}

export default class WzzShopAddress extends Component<WzzShopAddressProps, WzzShopAddressState> {

  public static defaultProps: WzzShopAddressProps
  public static propTypes: InferProps<WzzShopAddressProps>

  public constructor(props: WzzShopAddressProps) {
    super(props)
    this.state = {
      
    }
  }

  componentDidMount () {
    
  }

  public render(): JSX.Element {
    return (
      <View className="wzz-shop-address flex">
        <View className='dcicon dcicon-location'></View>
        <View className="content">
          <View className="address">浦东新区沪南路233号</View>
          <Text className="distance">距您244m</Text>
        </View>
      </View>
    )
  }
}

WzzShopAddress.defaultProps = {
  name: '',
  distanceText: ''
}

WzzShopAddress.propTypes = {
  name: PropTypes.string,
  distanceText: PropTypes.string,
}
