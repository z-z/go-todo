package main

import (
	"github.com/labstack/echo/v4"
	"todo/actions"
	"todo/models"
	"todo/pkg"
)

func main() {
	db := pkg.Db()
	db.AutoMigrate(&models.Task{})

	e := echo.New()

	e.File("/", "vue/dist/index.html")
	e.File("/favicon.ico", "vue/dist/favicon.ico")
	e.Static("/css", "vue/dist/css")
	e.Static("/js", "vue/dist/js")

	e.GET("/api/", actions.Get)
	e.POST("/api/create", actions.CreateTask)
	e.POST("/api/update", actions.Update)
	e.POST("/api/delete", actions.Delete)

	e.Logger.Fatal(e.Start(":1323"))
}
