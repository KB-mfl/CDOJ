package Model

import (
	"github.com/jinzhu/gorm"
	uuid "github.com/satori/go.uuid"
	"time"
)

type User struct {
	ID uuid.UUID `gorm:"unique"`
	RoleID int8 `gorm:"default:1;not null"`
	Email string `gorm:"unique;not null"`
	UserName string `gorm:"unique;not null"`
	Gender bool `gorm:"not null"`
	Introduction string `gorm:"type:text"`
	Avatar string
	School string
	Company string
	Github string

	CreateAt time.Time
	UpdateAt time.Time
	DeletedAt *time.Time
}

func (user *User) BeforeCreate (scope *gorm.Scope) (err error) {
	err = scope.SetColumn("ID", uuid.NewV4())
	err = scope.SetColumn("CreateAt", time.Now())
	err = scope.SetColumn("UpdateAt", time.Now())
	return
}

func (user *User) AfterUpdate (scope *gorm.Scope) (err error) {
	err = scope.SetColumn("UpdateAt", time.Now())
	return
}