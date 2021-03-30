db.shardCollection("Statistics")
db.Statistics.createIndex({ Date: 1 })
db.Statistics.createIndex({ Method: 1 })
db.Statistics.createIndex({ SensorId: "hashed" }, { expireAfterSeconds: 31536000 })
