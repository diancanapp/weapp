import React, { Component } from 'react'
import Taro, { eventCenter, getCurrentInstance} from '@tarojs/taro';
import { View, Text, Image, ScrollView } from '@tarojs/components'
import PropTypes, { InferProps } from 'prop-types'
import { product } from '../../../types/diancan';
import './index.scss'

interface WzzOrderMenuProps {
  products: Array<product>
}

interface WzzOrderMenuState {
  tabView: string,
  productActiveIndex: number,
  productView: string,
  productScrollTop: Array<number>
}

export default class WzzOrderMenu extends Component<WzzOrderMenuProps, WzzOrderMenuState> {

  public static defaultProps: WzzOrderMenuProps
  public static propTypes: InferProps<WzzOrderMenuProps>

  public constructor(props: WzzOrderMenuProps) {
    super(props)
    this.state = {
      tabView: '',
      productActiveIndex: 0,
      productView: 'index-0',
      productScrollTop: []
    }
  }

  private tapMenuItem = (idx: number) => {
    console.log(idx)
    this.setState({
      productActiveIndex: idx,
      productView: `index-${idx}`
    })
  }

  calcScrollTop () {
    const { products } = this.props;
    const _this = this;
    eventCenter.once(getCurrentInstance().router!.onReady, () => {
      if ( products && !(products.length < 1)) {
        Taro.createSelectorQuery().selectAll(".productKind").boundingClientRect(function(rect) {
            let productScrollTop : Array<number> = [];
            productScrollTop.push(0);
            let r = 0;
            (rect as any).map(function(item) {
                 r += item.height;
                 productScrollTop.push(r);
            })
            
            console.log(productScrollTop)
            
            _this.setState({
                productScrollTop
            });
        }).exec();
    }    
    })
  }

  productScrollHandler (e) {
    const { scrollTop } = e.detail;
    console.log('scrollTop', scrollTop)
    const { productScrollTop, productActiveIndex } = this.state;
    let activeIndex = 0;
    for (let i = 0; i< productScrollTop.length; i++) {
      console.log('scrollTop + 15', scrollTop + 15)
      console.log('productScrollTop[i]', productScrollTop[i])
      console.log('scrollTop - 15', scrollTop - 15)
      console.log('productScrollTop[i+1]', productScrollTop[i+1])
      if ((scrollTop) > productScrollTop[i] && (scrollTop) < productScrollTop[i+1]) {
        activeIndex = i;
        break;
      }
    }
    if (activeIndex > -1 && activeIndex != productActiveIndex) {
      this.setState({
        productActiveIndex: activeIndex
      })
    }
  }

  componentDidMount () {
    this.calcScrollTop()
  }

  public render(): JSX.Element {
    const { tabView, productActiveIndex, productView } = this.state;

    const menuItems = this.props.products.map((product, idx) =>
      <View onClick={() => this.tapMenuItem(idx)} className={`menu-item ${productActiveIndex === idx ? 'active': ''}`} id={`tab-${idx}`} key={product.kindName}>
        <View className="text">{product.kindName}</View>
        {  product.isTimeDiscount &&
          <View className="label">{product.timeDiscountInfo.name}</View>
        }
      </View>
    );

    // const twoProductList = (list) => {
    //   list.map((kind) => {
    //     return (
    //       <View className="twoTitle">{kind.twoKindName}</View>
    //       )
    //   })
      
    // }

    const kindBox = this.props.products.map((product, idx) =>
      <View className="kind-box" id={`index-${idx}`} key={product.kindName}>
        <View className="productKind">
          <View className="product-category">
            <View className="title-box">
              <Text className="title">{product.kindName}</Text>
              { product.displayedIconUrl && !product.kindDescIsOnSale && <Image lazyLoad className="title-icon" mode="aspectFit" src={product.displayedIconUrl}></Image> } 
            </View>
            { product.kindDesc && <View className="sub-box">
              <Text className="subtitle" >{product.kindDesc}</Text>
            </View> }
          </View>
          { product.twoProductList.map((kind) => 
            <View key={kind.twoKindName}>
              <View className="twoTitle">{kind.twoKindName}</View>
              { kind.productList.map((goods) => 
                <View className="product-item-box" key={goods.productId}>
                  <View className="product-mask"></View>
                  <View className="product-pic-box">
                    <Image className="product-pic" src={goods.defaultPicUrl}>
                        { goods.promotionMsg && <View className="product-disc">{goods.promotionMsg}</View> }
                    </Image>
                    { kind.twoKindId==-1||goods.maxAmount<=0 && <View className="sell-out-box">
                        <text className="sell-out-msg">售罄</text>
                      </View> }
                  </View>
                  <View className="product-info">
                    <View className="product-title">
                        <Text className="product-name">{goods.name}</Text>
                        { goods.tagList && <View className="product-tag">
                          { goods.tagList.map((tag) => 
                            <View className="product-tag-item" style={`${tag.bgColor ? 'background-color:' + tag.bgColor : ''}`} key={tag.content}>
                            {tag.content}
                            </View>
                          )}
                        </View> }
                    </View>
                    <View className="product-ename">
                        {goods.enName}
                    </View>
                    { goods.skuName && <View className="product-ename">
                        {goods.skuName}
                    </View>}
                    <View className="product-bottom">
                      <View className="product-price flex baseLine">
                          <View className="bold">
                              <View className="unit">￥</View>
                              <Text>{goods.initialPrice}</Text>
                          </View>
                      </View>
                      <View>
                          <Text className="dcicon dcicon-add" id="productAddBtn"></Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            </View>            
          )}
        </View>
      </View>
    );

    return (
      <View className="wzz-order-menu">
        <View className="menu-box">
          <ScrollView scrollY className="menu-view">
            {menuItems}
          </ScrollView>
        </View>
        <View className="product-box">
          <ScrollView scrollY onScroll={this.productScrollHandler.bind(this)} className="product-view" scrollIntoView={productView}>
            { kindBox }
          </ScrollView>
        </View>
      </View>
    )
  }
}

WzzOrderMenu.defaultProps = {
  products: [],
}

WzzOrderMenu.propTypes = {
  products: PropTypes.array,
}
