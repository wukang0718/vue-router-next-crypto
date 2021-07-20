/*
 * 加密 解密
 */

import CryptoJS from 'crypto-js'
let baseCryptoCode = "kkkkwwwwkkkkwwww"; // 这个私钥每个项目指定一个唯一。更换密钥，请确认16位

const getKeyHex = (cryptoCode?: string) => CryptoJS.enc.Latin1.parse(cryptoCode || baseCryptoCode);

const getIvHex = () => CryptoJS.enc.Latin1.parse(baseCryptoCode);

export const setBaseCryptoCode = (cryptoCode: string): void => {
    if (!cryptoCode) {return}
    if (cryptoCode.length % 4 !== 0) {
        __DEV__ && console.warn('setBaseCryptoCode: cryptoCode 请传入16位私钥')
        return
    }
    baseCryptoCode = cryptoCode
}

/**
 * 加密
 * @param {String} key
 * @param {String} cryptoCode
 * @returns {string}
 */
export const getEncrypt = (key: any, cryptoCode?: string) => {
    let keyHex = getKeyHex(cryptoCode);
    let ivHex = getIvHex();
    try {
        key = JSON.stringify(key);
    } catch (e) {
        __DEV__ && console.warn(e);
    }
    return CryptoJS.AES.encrypt(key, keyHex, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding,
        iv: ivHex
    }).toString();
}

/**
 * 加密后转base64
 * @param {String}} key 
 * @param {String} cryptoCode 
 */
export const getEncryptToBase64 = (key: any, cryptoCode?: string) => {
    let encryptStr = getEncrypt(key, cryptoCode);
    let wordArray = CryptoJS.enc.Utf8.parse(encryptStr);
    return CryptoJS.enc.Base64.stringify(wordArray);
}

/**
 * 解密
 * @param data
 * @returns {string}
 */
export const getDecrypt = (data: string) => {
    let keyHex = getKeyHex();
    let ivHex = getIvHex();
    let decrypted = CryptoJS.AES.decrypt(data, keyHex, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding,
        iv: ivHex
    }).toString(CryptoJS.enc.Utf8);
    try {
        decrypted = JSON.parse(decrypted);
    } catch (e) {
    }
    return decrypted
}

/**
 * 对base64数据解密  先解析base64，在做解密
 * @param {String} data 
 * @returns {string}
 */
export const getDecryptByBase64 = (data: string) => {
    try {
        let parsedWordArray = CryptoJS.enc.Base64.parse(data);
        let decryptStr = parsedWordArray.toString(CryptoJS.enc.Utf8);
        if (!decryptStr) {
            return data
        }
        return getDecrypt(decryptStr);       
    } catch (error) {
        return data
    }
}