package actions

import (
	"github.com/labstack/echo/v4"
	"net/http"
	"todo/repo/tasks"
)

func Delete(c echo.Context) error {
	id := c.FormValue("id")
	task, err := tasks.GetOne(map[string]interface{}{"ID": id})

	if err != nil {
		return c.JSON(
			http.StatusBadRequest,
			map[string]interface{}{"error": "Задача не найдена"},
		)
	}

	tasks.Delete(map[string]interface{}{"ID": task.Id})

	return c.JSON(http.StatusOK, map[string]interface{}{"success": true})
}
