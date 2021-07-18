exports.usersListJsonSchema = {
	type: "array",
	items: [
		{
			type: "object",
			properties: {
				user_id: {
					type: "integer",
				},
				username: {
					type: "string",
				},
				score: {
					type: "integer",
				},
			},
			required: ["user_id", "username", "score"],
		},
	],
};
