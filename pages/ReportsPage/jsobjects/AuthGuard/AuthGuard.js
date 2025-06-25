export default {
  checkAccess: () => {
    if (!appsmith.store.currentUser) {
      navigateTo("LoginPage");
    }
  }
}
