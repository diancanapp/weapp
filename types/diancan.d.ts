interface tag {
  content: string,
  bgColor: string
}

interface goods {
  productId: number,
  defaultPicUrl: string,
  promotionMsg: string,
  maxAmount: number,
  name: string,
  tagList: Array<tag>,
  enName: string,
  skuName: string,
  initialPrice: number
}

interface twoProductList {
  twoKindName: string,
  twoKindId: number,
  productList: Array<goods>
}

export interface product {
  kindName: string,
  isTimeDiscount: boolean,
  timeDiscountInfo: {
    name: string
  },
  displayedIconUrl?: string,
  kindDescIsOnSale: boolean,
  kindDesc: string,
  twoProductList: Array<twoProductList>
}