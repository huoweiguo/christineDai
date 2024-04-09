import http from '../../utils/http'

export const getProductCat = (pid:string) => {
  let obj = {
    pid
  }
  return http.get('/product-cat', obj)
}

export const getProductList = (cat_id:string) => {
  let obj = {
    cat_id
  }
  return http.get('/product-list', obj)
}


export const getProductInfo = (itemid:string) => {
  let obj = {
    itemid
  }
  return http.get('/product-info', obj)
}