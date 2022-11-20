package actions

import (
	"github.com/labstack/echo/v4"
	"net/http"
	"todo/repo/tasks"
)

func Update(c echo.Context) error {
	id := c.FormValue("id")
	text := c.FormValue("text")

	form, _ := c.MultipartForm()

	if text == "" {
		return c.JSON(
			http.StatusBadRequest,
			map[string]interface{}{
				"success": false,
				"error":   "Заполните текст задачи",
				"param":   c.Param("text"),
				"value":   c.FormValue("text"),
				"context": form,
			},
		)
	}

	task, err := tasks.GetOne(map[string]interface{}{"ID": id})

	if err != nil {
		return c.JSON(
			http.StatusBadRequest,
			map[string]interface{}{"error": "Задача не найдена"},
		)
	}

	_, err = tasks.Update(
		map[string]interface{}{"ID": task.Id},
		map[string]interface{}{"Text": text},
	)

	if err != nil {
		return c.JSON(
			http.StatusBadRequest,
			map[string]interface{}{"error": "Не удалось обновить задачу"},
		)
	}

	return c.JSON(
		http.StatusOK,
		map[string]interface{}{"success": true},
	)
}
