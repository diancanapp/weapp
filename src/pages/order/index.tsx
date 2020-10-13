import React , { Component } from 'react';
import WzzStatusBar from '../../custom/status-bar';
import WzzShopAddress from '../../custom/shop-address';
import WzzOrderMenu from '../../custom/order-menu';
import { View, Image, Swiper, SwiperItem } from '@tarojs/components';
import { product } from '../../../types/diancan';

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
      'https://static.wozaizhao.com/order-banner/1.jpg',
      'https://static.wozaizhao.com/order-banner/2.jpg',
      'https://static.wozaizhao.com/order-banner/3.jpg'
    ]

    const products: product[] = [
      {
        kindName: '人气Top',
        isTimeDiscount: true,
        timeDiscountInfo: {
          name: 'HOT'
        },
        displayedIconUrl: undefined,
        kindDescIsOnSale: true,
        kindDesc: '大家都喜欢点',
        twoProductList: [
          {
            twoKindName: '本帮菜',
            twoKindId: 1,
            productList: [
              {
                productId: 1,
                defaultPicUrl: 'https://static.wozaizhao.com/food/1.jpg',
                promotionMsg: '充5送2',
                maxAmount: 9,
                name: '麻辣小龙虾',
                tagList: [
                  {
                    content: '新品',
                    bgColor: 'orange'
                  }
                ],
                enName: 'Spicy crayfish',
                skuName: '大份/热菜',
                initialPrice: 15
              },
              {
                productId: 2,
                defaultPicUrl: 'https://static.wozaizhao.com/food/2.jpg',
                promotionMsg: '充5送2',
                maxAmount: 0,
                name: '中秋好礼',
                tagList: [],
                enName: 'Mid-autumn gift',
                skuName: '中秋好礼礼盒装',
                initialPrice: 16
              },
              {
                productId: 3,
                defaultPicUrl: 'https://static.wozaizhao.com/food/3.jpg',
                promotionMsg: '充5送2',
                maxAmount: 9,
                name: '小丸子',
                tagList: [],
                enName: 'Small balls',
                skuName: '每份12颗',
                initialPrice: 17
              },
              {
                productId: 4,
                defaultPicUrl: 'https://static.wozaizhao.com/food/4.jpg',
                promotionMsg: '充5送2',
                maxAmount: 9,
                name: '炒三鲜',
                tagList: [],
                enName: 'Fried three fresh',
                skuName: '时令鲜蔬',
                initialPrice: 18
              },
              {
                productId: 5,
                defaultPicUrl: 'https://static.wozaizhao.com/food/5.jpg',
                promotionMsg: '充5送2',
                maxAmount: 9,
                name: '板烧鸡腿',
                tagList: [],
                enName: 'Grilled Chicken Drumsticks',
                skuName: '每份3只',
                initialPrice: 19
              },
              {
                productId: 6,
                defaultPicUrl: 'https://static.wozaizhao.com/food/6.jpg',
                promotionMsg: '充5送2',
                maxAmount: 9,
                name: '菲菜饺子',
                tagList: [],
                enName: 'Filipino Dumplings',
                skuName: '每份20只',
                initialPrice: 20
              }
            ]
          }  
        ]
      },
      {
        kindName: '进店必点',
        isTimeDiscount: false,
        timeDiscountInfo: {
          name: '上新'
        },
        displayedIconUrl: undefined,
        kindDescIsOnSale: true,
        kindDesc: 'kindDesc',
        twoProductList: [
          {
            twoKindName: 'twoKindName',
            twoKindId: 2,
            productList: [
              {
                productId: 2,
                defaultPicUrl: 'https://static.wozaizhao.com/food/2.jpg',
                promotionMsg: '充5送2',
                maxAmount: 0,
                name: '中秋好礼',
                tagList: [],
                enName: 'Mid-autumn gift',
                skuName: '中秋好礼礼盒装',
                initialPrice: 16
              },
              {
                productId: 3,
                defaultPicUrl: 'https://static.wozaizhao.com/food/3.jpg',
                promotionMsg: '充5送2',
                maxAmount: 9,
                name: '小丸子',
                tagList: [],
                enName: 'Small balls',
                skuName: '每份12颗',
                initialPrice: 17
              },
              {
                productId: 4,
                defaultPicUrl: 'https://static.wozaizhao.com/food/4.jpg',
                promotionMsg: '充5送2',
                maxAmount: 9,
                name: '炒三鲜',
                tagList: [],
                enName: 'Fried three fresh',
                skuName: '时令鲜蔬',
                initialPrice: 18
              },
              {
                productId: 5,
                defaultPicUrl: 'https://static.wozaizhao.com/food/5.jpg',
                promotionMsg: '充5送2',
                maxAmount: 9,
                name: '板烧鸡腿',
                tagList: [],
                enName: 'Grilled Chicken Drumsticks',
                skuName: '每份3只',
                initialPrice: 19
              },
              {
                productId: 6,
                defaultPicUrl: 'https://static.wozaizhao.com/food/6.jpg',
                promotionMsg: '充5送2',
                maxAmount: 9,
                name: '菲菜饺子',
                tagList: [],
                enName: 'Filipino Dumplings',
                skuName: '每份20只',
                initialPrice: 20
              },
              {
                productId: 1,
                defaultPicUrl: 'https://static.wozaizhao.com/food/1.jpg',
                promotionMsg: '充5送2',
                maxAmount: 9,
                name: '麻辣小龙虾',
                tagList: [
                  {
                    content: '新品',
                    bgColor: 'orange'
                  }
                ],
                enName: 'Spicy crayfish',
                skuName: '大份/热菜',
                initialPrice: 15
              }
            ]
          }  
        ]
      },
      {
        kindName: '当季热门',
        isTimeDiscount: true,
        timeDiscountInfo: {
          name: '上新'
        },
        displayedIconUrl: undefined,
        kindDescIsOnSale: true,
        kindDesc: 'kindDesc',
        twoProductList: [
          {
            twoKindName: 'twoKindName',
            twoKindId: 3,
            productList: [
              {
                productId: 3,
                defaultPicUrl: 'https://static.wozaizhao.com/food/3.jpg',
                promotionMsg: '充5送2',
                maxAmount: 9,
                name: '小丸子',
                tagList: [],
                enName: 'Small balls',
                skuName: '每份12颗',
                initialPrice: 17
              },
              {
                productId: 4,
                defaultPicUrl: 'https://static.wozaizhao.com/food/4.jpg',
                promotionMsg: '充5送2',
                maxAmount: 9,
                name: '炒三鲜',
                tagList: [],
                enName: 'Fried three fresh',
                skuName: '时令鲜蔬',
                initialPrice: 18
              },
              {
                productId: 5,
                defaultPicUrl: 'https://static.wozaizhao.com/food/5.jpg',
                promotionMsg: '充5送2',
                maxAmount: 9,
                name: '板烧鸡腿',
                tagList: [],
                enName: 'Grilled Chicken Drumsticks',
                skuName: '每份3只',
                initialPrice: 19
              },
              {
                productId: 6,
                defaultPicUrl: 'https://static.wozaizhao.com/food/6.jpg',
                promotionMsg: '充5送2',
                maxAmount: 9,
                name: '菲菜饺子',
                tagList: [],
                enName: 'Filipino Dumplings',
                skuName: '每份20只',
                initialPrice: 20
              },
              {
                productId: 1,
                defaultPicUrl: 'https://static.wozaizhao.com/food/1.jpg',
                promotionMsg: '充5送2',
                maxAmount: 9,
                name: '麻辣小龙虾',
                tagList: [
                  {
                    content: '新品',
                    bgColor: 'orange'
                  }
                ],
                enName: 'Spicy crayfish',
                skuName: '大份/热菜',
                initialPrice: 15
              },
              {
                productId: 2,
                defaultPicUrl: 'https://static.wozaizhao.com/food/2.jpg',
                promotionMsg: '充5送2',
                maxAmount: 0,
                name: '中秋好礼',
                tagList: [],
                enName: 'Mid-autumn gift',
                skuName: '中秋好礼礼盒装',
                initialPrice: 16
              }
            ]
          }  
        ]
      },
      {
        kindName: '主食',
        isTimeDiscount: false,
        timeDiscountInfo: {
          name: 'HOT'
        },
        displayedIconUrl: undefined,
        kindDescIsOnSale: true,
        kindDesc: 'kindDesc',
        twoProductList: [
          {
            twoKindName: 'twoKindName',
            twoKindId: 4,
            productList: [
              {
                productId: 4,
                defaultPicUrl: 'https://static.wozaizhao.com/food/4.jpg',
                promotionMsg: '充5送2',
                maxAmount: 9,
                name: '炒三鲜',
                tagList: [],
                enName: 'Fried three fresh',
                skuName: '时令鲜蔬',
                initialPrice: 18
              },
              {
                productId: 5,
                defaultPicUrl: 'https://static.wozaizhao.com/food/5.jpg',
                promotionMsg: '充5送2',
                maxAmount: 9,
                name: '板烧鸡腿',
                tagList: [],
                enName: 'Grilled Chicken Drumsticks',
                skuName: '每份3只',
                initialPrice: 19
              },
              {
                productId: 6,
                defaultPicUrl: 'https://static.wozaizhao.com/food/6.jpg',
                promotionMsg: '充5送2',
                maxAmount: 9,
                name: '菲菜饺子',
                tagList: [],
                enName: 'Filipino Dumplings',
                skuName: '每份20只',
                initialPrice: 20
              },
              {
                productId: 1,
                defaultPicUrl: 'https://static.wozaizhao.com/food/1.jpg',
                promotionMsg: '充5送2',
                maxAmount: 9,
                name: '麻辣小龙虾',
                tagList: [
                  {
                    content: '新品',
                    bgColor: 'orange'
                  }
                ],
                enName: 'Spicy crayfish',
                skuName: '大份/热菜',
                initialPrice: 15
              },
              {
                productId: 2,
                defaultPicUrl: 'https://static.wozaizhao.com/food/2.jpg',
                promotionMsg: '充5送2',
                maxAmount: 0,
                name: '中秋好礼',
                tagList: [],
                enName: 'Mid-autumn gift',
                skuName: '中秋好礼礼盒装',
                initialPrice: 16
              },
              {
                productId: 3,
                defaultPicUrl: 'https://static.wozaizhao.com/food/3.jpg',
                promotionMsg: '充5送2',
                maxAmount: 9,
                name: '小丸子',
                tagList: [],
                enName: 'Small balls',
                skuName: '每份12颗',
                initialPrice: 17
              }
            ]
          }  
        ]
      }
    ]

    return (
      <View className='page page-order'>
        <WzzStatusBar alignMenuButton />
        <View className="banner">
          <Swiper
            className='banner-box'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            autoplay>
              { banners.map((banner: string) => (
                  <SwiperItem key={banner}>
                    <Image className="banner-img" src={banner}></Image>
                  </SwiperItem>
                ))
              }
          </Swiper>
        </View>
        <WzzShopAddress />

        <WzzOrderMenu products={products} />

      </View>
    )
  }
}
