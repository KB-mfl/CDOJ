package Migration

import "CDOJ/Model"

func AddTable()  {
	InitMigration(map[string]interface{}{
		"user": &Model.Example{},
	})
}