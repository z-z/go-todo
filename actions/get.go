package actions

import (
	"github.com/labstack/echo/v4"
	"net/http"
	"todo/repo/tasks"
)

func Get(c echo.Context) error {
	list, err := tasks.GetList(map[string]interface{}{})

	if err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}

	return c.JSON(http.StatusOK, list)
}
