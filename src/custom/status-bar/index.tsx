import React, { Component } from 'react'
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components'
import PropTypes, { InferProps } from 'prop-types'
import './index.scss'

interface WzzStatusBarProps {
  alignMenuButton: boolean
}

interface WzzStatusBarState {
  barHeight: number,
  isWEB: boolean
}

export default class WzzStatusBar extends Component<WzzStatusBarProps, WzzStatusBarState> {

  public static defaultProps: WzzStatusBarProps
  public static propTypes: InferProps<WzzStatusBarProps>

  public constructor(props: WzzStatusBarProps) {
    super(props)
    this.state = {
      barHeight: 0,
      isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB,
    }
  }

  componentDidMount () {
    const { isWEB } = this.state;
    let barHeight;
    if (isWEB) {
      barHeight = 20;
    } else {
      const systemInfo = Taro.getSystemInfoSync();
      const menuButton = Taro.getMenuButtonBoundingClientRect();
      const { statusBarHeight } = systemInfo;
      const { top } = menuButton;
      barHeight = this.props.alignMenuButton ? top : statusBarHeight;
    }
    this.setState({
      barHeight,
    })
  }

  public render(): JSX.Element {
    const { barHeight } = this.state
    return (
      <View className="wzz-status-bar" style={{ height: `${barHeight}px`}}>
        
      </View>
    )
  }
}

WzzStatusBar.defaultProps = {
  alignMenuButton: false,
}

WzzStatusBar.propTypes = {
  alignMenuButton: PropTypes.bool,
}
