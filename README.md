# Metrics Database

This projects contains the definition of the MongoDB metrics database. The
following data is stored in this database:

- Sensors
- Sensor and measurement statistics
- Measurements
- Messages
- Control messages

## Scope

This database contains the definitions for the collections mentioned above,
including the collection sharding. Database node configuration (such as
cluster configuration) is not included in this repository. User and role
definitions are added, but without password or other sensitive information (added
as empty objects).
