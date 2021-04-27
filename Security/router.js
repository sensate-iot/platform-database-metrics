db.createUser({
	user: "router",
	pwd: "",
	roles: [
		{
			role: "read", db: "SensateIoT"
		},
                {
                        role: "read", db: "SensateStaging"
                }
	]
})
