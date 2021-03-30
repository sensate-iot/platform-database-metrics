db.createCollection("ControlMessages")
db.ControlMessages.createIndex({ SensorId: "hashed" })
db.ControlMessages.createIndex({ Timestamp: 1 })
sh.shardCollection("SensateIoT.ControlMessages", { "SensorId": "hashed" })