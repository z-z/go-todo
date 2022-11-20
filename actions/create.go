package actions

import (
	"github.com/labstack/echo/v4"
	"net/http"
	"todo/models"
	"todo/repo/tasks"
)

func CreateTask(c echo.Context) error {
	text := c.FormValue("text")

	if text == "" {
		return c.JSON(http.StatusBadRequest, "Заполните поле")
	}

	res, err := tasks.Create(models.Task{Text: text})

	if err != nil {
		return c.JSON(http.StatusBadRequest, map[string]interface{}{"error": err})
	}

	return c.JSON(http.StatusOK, map[string]interface{}{"task": res})
}
