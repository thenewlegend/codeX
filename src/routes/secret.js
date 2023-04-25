
    import CryptoJS from "crypto-js";

    // Encrypt a string
    export function encryptString(str, key) {
    const encrypted = CryptoJS.AES.encrypt(str, key);
    return encrypted.toString();
    }

    // Decrypt a string
    export function decryptString(str, key) {
    const decrypted = CryptoJS.AES.decrypt(str, key);
    return decrypted.toString(CryptoJS.enc.Utf8);
    }


