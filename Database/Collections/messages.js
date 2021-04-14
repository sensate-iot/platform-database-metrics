db.createCollection("Messages")
db.Messages.createIndex({ SensorId: "hashed" });
db.Messages.createIndex({ Timestamp: 1 }, { expireAfterSeconds: 10368000 })
