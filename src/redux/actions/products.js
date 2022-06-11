import axios from 'axios'
import { SET_PRODUCTS, SET_CATALOG, SET_INITIAL_PRODUCTS, SET_PRODUCERS, GET_PRODUCT, SET_POPULAR } from '../actions/actionType'


export function getProducts() {
    return async (dispatch) => {
        const responce = await axios.get("http://127.0.0.1:8000/api/items/",{headers:{"Access-Control-Allow-Origin":"*"}})
        let popular = []
        const data = responce.data
        let arr = []
        if (data != null || data !== undefined) {
            Object.keys(data).forEach((key, index) => {
                arr.push(data[index])
               
            })

            for (let index = 0; index < 10; index++) {
                const element = arr[index];
                popular.push(element)
            }

            //localStorage.setItem('items', JSON.stringify(arr))
            dispatch(setInitialProducts(arr,popular))
        }
    }
}

export function getCatalog(products) {

    return (dispatch) => {
        var catalog = []
        products.forEach(e => {
            if (catalog.length > 0) {
                let item = catalog.find(element => element['category'] === e['category_name'])
                if (item === undefined && e['category_name'] !== '') {
                    let new_item = {
                        'category': e['category_name'],
                        'count_items': 0
                    }
                    catalog.push(new_item)
                } else if (item && e['category_name'] !== '') {
                    item['count_items'] = item['count_items'] + 1
                }
            } else {
                let item = {
                    'category': e['category_name'],
                    'count_items': 0
                }
                catalog.push(item)
            }
        })


        dispatch(setCatalog(catalog))
    }
}

export function getProducers(products, categoryOfProd) {
    return (dispatch) => {
        let producers = []
        let result = []
        products.forEach(e => {
            if (producers.length > 0) {
                let item = producers.find(element => element['producer'] === e['producer_name'])
                if (item === undefined && e['producer_name'] !== '') {
                    let new_item = {
                        'producer': e['producer_name'],
                        'logo': e['producer_logo'],
                        'category': e['category_name']
                    }
                    producers.push(new_item)
                }
            } else {
                let item = {
                    'producer': e['producer_name'],
                    'logo': e['producer_logo'],

                    'category': e['category_name']
                }
                producers.push(item)
            }
        })

        producers.forEach(e => {
            if (e['category'] == categoryOfProd) {
                result.push(e)
            }
        })
        dispatch(setProducers(result))
    }
}

export function getProductsProd(products, category, producer) {
    return (dispatch) => {
        let items = []
        let results = []
        products.forEach(e => {
            if (e['producer_name'] === producer && e['category_name'] === category) {
                let item = {
                    'id':e['id'],
                    'producer': e['producer_name'],
                    'name': e['name'],
                    'category': e['category_name']
                }
                items.push(item)
            }
            // if (items.length > 0) {
            //     let item = items.find(element => element['category'] === e['category_name'])
            //     if (item === undefined && e['category_name'] !== '') {
            //         let new_item = {
            //             'producer': e['producer_name'],
            //             'name': e['name'],
            //             'category': e['category_name']
            //         }
            //         items.push(new_item)
            //     }
            // } else {
               

            // }
        })

        items.forEach(e => {
            if (e['producer'] === producer) {
                results.push(e)
            }

        })
        
        dispatch(setProducts(results))
    }
}

export function getPopular(initialProducts){
    return (dispatch)=>{
        let popular = []
        for (let index = 0; index < 10; index++) {
            const element = initialProducts[index];
            popular.push(element)
        }

        dispatch(setPopular(popular))
    }
}


export function getProduct(products,id){
    return (dispatch)=>{
        let product = {}
        products.forEach(e=>{
            if(e['id'] == id){
                product = e
            }
        })

        dispatch(setProduct(product))
    }
}

export function setProducts(products) {
    return {
        type: SET_PRODUCTS,
        products
    }
}

export function setProduct(product){
    return {
        type: GET_PRODUCT,
        product
    }
}

export function setInitialProducts(products,popular) {
    return {
        type: SET_INITIAL_PRODUCTS,
        products,popular
    }
}

export function setCatalog(catalog) {
    return {
        type: SET_CATALOG,
        catalog
    }
}

export function setPopular(popular){
    return{
        type: SET_POPULAR,
        popular
    }
}

export function setProducers(producers) {
    return {
        type: SET_PRODUCERS,
        producers
    }
}
