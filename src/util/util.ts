import Taro from '@tarojs/taro';

export const redirectTo = (url: string) => {
  Taro.redirectTo({url: `/pages${url}/index`})
}