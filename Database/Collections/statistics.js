db.shardCollection("Statistics")
db.Statistics.createIndex({ Timestamp: 1 }, { expireAfterSeconds: 31536000 })
db.Statistics.createIndex({ Method: 1 })
db.Statistics.createIndex({ SensorId: "hashed" })
