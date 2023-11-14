package handlernaskah

import (
	"github.com/gofiber/fiber/v2"
	"project_2/database"
	"project_2/internal/model"
)

func GetNaskah(c *fiber.Ctx) error {
	var naskah []table.Data_Naskah
	result := database.DB.Find(&naskah)

	if result.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"Message": result.Error.Error(),
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"Message": "Menampilkan Data Naskah",
		"DATA":    naskah,
	})
}
