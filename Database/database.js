/*
 * Database level definitions.
 */

sh.shardCollection("SensateIoT.ControlMessages", { "SensorId": "hashed" })
sh.shardCollection("SensateIoT.Measurements", { "SensorId": "hashed" })
sh.shardCollection("SensateIoT.Messages", { "SensorId": "hashed" })
sh.shardCollection("SensateIoT.Sensors", { "_id": "hashed" })
sh.shardCollection("SensateIoT.Statistics", { "SensorId": "hashed" })