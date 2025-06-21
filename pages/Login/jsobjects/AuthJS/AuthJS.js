export default {
  login: async () => {
    try {
      const resp = await loginUser.run();

      // Ensure response is an array
      if (!Array.isArray(resp) || resp.length === 0) {
        showAlert('Invalid email', 'error');
        return;
      }

      const user = resp[0];

      // Password check (plaintext for now — replace with hash later)
      if (user.password_hash !== password_input.text) {
        showAlert('Invalid password', 'error');
        return;
      }

      // Save session info
      storeValue('currentUser', {
        id: user.id,
        name: user.name,
        role: user.role
      });

      /// Role-based routing
				if (user.role === 'Admin') {
					navigateTo('UserManagement');
				} else if (user.role === 'Inventory Manager') {
					navigateTo('ItemsPage');
				} else if (user.role === 'Store Clerk') {
					navigateTo('CheckInOut'); // if you revisit it later
				} else if (user.role === 'Finance Officer') {
					navigateTo('ReportsPage');
				} else {
					showAlert("Unknown role: " + user.role, "error");
				}

    } catch (err) {
      console.error(err);
      showAlert('Login failed — check console', 'error');
    }
  }
}
