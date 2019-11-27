package Route

import (
	"CDOJ/Boot/Http"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"runtime"
)

func AddRoute()  {
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	config.AllowHeaders = []string{"Origin", "Content-Length", "Content-Type", "Api_Token", "x-requested-with"}
	Http.Router.Use(cors.New(config))
	Http.Router.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"version": runtime.Version(),
		})
	})
}
