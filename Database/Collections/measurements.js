db.createCollection("Measurements")
db.Measurements.createIndex({ First: 1 })
db.Measurements.createIndex({ Last: 1 })
db.Measurements.createIndex({ SensorId: "hashed" })
db.Measurements.createIndex({ Timestamp: 1 })
db.Measurements.createIndex({ Count: 1 })
db.Measurements.createIndex({ "Measurements.Timestamp": 1 })
sh.shardCollection("Sensate.Measurements", { "SensorId": "hashed" })