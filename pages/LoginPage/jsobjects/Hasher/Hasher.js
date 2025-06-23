export default {
  hash(password) {
    return CryptoJS.SHA256(password).toString();
  }
}
