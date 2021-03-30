db.createCollection("Messages")
db.Messages.createIndex({ SensorId: "hashed" }, { expireAfterSeconds: 10368000 })
db.Messages.createIndex({ CreatedAt: 1 })
