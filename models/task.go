package models

import (
	"gorm.io/gorm"
	"time"
)

type Task struct {
	gorm.Model `json:"-"`
	Id         int            `json:"id",gorm:"primaryKey"`
	Text       string         `json:"text"`
	CreatedAt  time.Time      `json:"created_at"`
	UpdatedAt  time.Time      `json:"updated_at"`
	DeletedAt  gorm.DeletedAt `json:"-"`
}
