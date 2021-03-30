db.createCollection("ControlMessages")
db.ControlMessages.createIndex({ SensorId: "hashed" }, { expireAfterSeconds: 604800 })
db.ControlMessages.createIndex({ Timestamp: 1 })
