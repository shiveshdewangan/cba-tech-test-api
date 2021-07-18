const request = require("supertest");
const { baseURL, path } = require("../config");

let response;

class UserRestAPI {
	constructor() {
		this.baseURL = baseURL;
		this.path = path;
	}

	async createUser(username, score) {
		try {
			response = await request(this.baseURL).post(this.path).send({
				username,
				score,
			});
		} catch (error) {
			throw new Error("Soemthing went wrong while creating a user");
		}
		return response;
	}

	async viewUser() {
		try {
			response = await request(this.baseURL).get(this.path);
		} catch (error) {
			throw new Error("Something went wrong while retrieving list of users");
		}
		return response;
	}

	async updateUser(username, score) {
		try {
			response = await request(this.baseURL).put(this.path).send({
				username,
				score,
			});
		} catch (error) {
			throw new Error("Something went wrong while upating the user");
		}
	}

	async deleteUser(username) {
		try {
			response = await request(this.baseURL).delete(this.path).send({
				username,
			});
		} catch (error) {
			throw new Error("Something went wrong while deleting the user");
		}
	}
}

module.exports = new UserRestAPI();
