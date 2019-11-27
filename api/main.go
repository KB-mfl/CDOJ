package main

import (
	"CDOJ/Boot/Config"
	"CDOJ/Boot/Http"
	"CDOJ/Boot/Log"
	"CDOJ/Boot/Orm"
	"CDOJ/Migration"
	"CDOJ/Route"
	"fmt"
	_ "github.com/gin-gonic/gin"
	"os"
	"strings"
)

func _init() {
	Config.InitConfig()
	Log.InitLog()
	Log.InitTimer()
	Orm.InitOrm()

	Http.InitHttp()

	Route.AddRoute()
}

func _end() {
	Orm.EndOrm()
}

func _run()  {
	_init()
	Http.Run()
	defer _end()
}

func main()  {
	fmt.Println("debug")
	if len(os.Args) > 1 {
		param := strings.Join(os.Args[1:], "")
		switch param {
		case "fresh":
			Config.InitConfig()
			Orm.InitOrm()
			Migration.AddTable()
			Migration.Fresh()
			defer _end()
			return
		case "refresh":
			Config.InitConfig()
			Orm.InitOrm()
			Migration.AddTable()
			Migration.Refresh()
			defer _end()
			return
		default:
			fmt.Println(param, "is not a command")
		}
	} else {
		_run()
	}
}
