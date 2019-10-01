// ajax请求函数模块
// 返回值是promise对象（异步返回的数据是response.data）
import axios from 'axios'
import { promise } from 'when'

export default function ajax(url = '', data = {}, type = 'GET') {
    return new Promise((resolve, reject) => {
        let Promise

        if (type === 'GET') {
            let dataStr = ''
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            promise = axios.get(url)
        } else {
            promise = axios.post(url, data)
        }
        promise.then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })

}