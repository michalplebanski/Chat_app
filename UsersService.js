class UsersService {
	constructor() {
		this.users = [];
	}

	getAllUsers() {
		return this.users;
	}

	getUserById(userId) {
		return this.users.find(user => user.id === user.id);
	}

	addUser(user) {
		this.users = [user, ...this.users];
	}

	removeUser(userId) {
		this.users = this.users.filter(user => user.id !== user.id);
	}
}

module.exports = UsersService;