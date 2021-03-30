db.createView("SystemStatistics", "Statistics", [
	{
		$project: {
			_id: 1,
			SensorId: 1,
			TriggersCount: {
				$cond: [
					{
						$and: [
							{ $gte: [ "$Type", 0 ] },
							{ $lte: [ "$Type", 6 ] }
						]
					}, "$Count", 0
				]
			},
			MessagesCount: {
				$cond: [ { $eq: [ "$Type", 8 ] }, "$Count", 0 ]
			},
			MeasurementsCount: {
				$cond: [ { $eq: [ "$Type", 7 ] }, "$Count", 0 ]
			},
			MessagesRoutedCount: {
				$cond: [ { $eq: [ "$Type", 9 ] }, "$Count", 0 ]
			},
			Timestamp: 1
		}
	},
	{
		$group: {
			_id: { SensorId: "$SensorId", "Timestamp": "$Timestamp" },
			TotalMessagesRouted: { $sum: "$MessagesRoutedCount" },
			TotalMeasurementsStored: { $sum: "$MeasurementsCount" },
			TotalMessagesStored: { $sum: "$MessagesCount" },
			TotalTriggersExecuted: { $sum: "$TriggersCount" },
		}
	}
])
