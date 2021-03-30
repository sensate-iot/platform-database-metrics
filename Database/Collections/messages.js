db.createCollection("Messages")
db.Messages.createIndex({ SensorId: "hashed" })
db.Messages.createIndex({ CreatedAt: 1 })
sh.shardCollection("SensateIoT.Messages", { "SensorId": "hashed" })