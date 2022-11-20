package tasks

import (
	"todo/models"
	"todo/pkg"
)

func Create(task models.Task) (models.Task, error) {
	result := pkg.Db().Create(&task)
	return task, result.Error
}

func GetOne(where map[string]interface{}) (models.Task, error) {
	var task models.Task
	result := pkg.Db().Where(where).First(&task)
	return task, result.Error
}

func GetList(bind map[string]interface{}) ([]models.Task, error) {
	var tasks []models.Task
	result := pkg.Db().Where(bind).Find(&tasks)
	return tasks, result.Error
}

func Update(where map[string]interface{}, updates map[string]interface{}) (int64, error) {
	result := pkg.Db().Model(&models.Task{}).Where(where).Updates(updates)
	return result.RowsAffected, result.Error
}

func Delete(where map[string]interface{}) {
	pkg.Db().Where(where).Delete(&models.Task{})
}
