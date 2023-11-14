package handlerpenulis

import (
	"github.com/gofiber/fiber/v2"
	"project_2/database"
	"project_2/internal/model"
)

func GetPenulis(c *fiber.Ctx) error {
	var penulis []table.Data_Penulis
	result := database.DB.Find(&penulis)

	if result.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"Message": result.Error.Error(),
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"Message": "Menampilkan Data Penulis",
		"DATA": penulis,
	})
}