export default {
  logoutTest: () => {
    storeValue('currentUser', undefined);
    showAlert("User cleared from store");
  }
}