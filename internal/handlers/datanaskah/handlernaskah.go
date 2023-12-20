package handlernaskah

import (
	"github.com/gofiber/fiber/v2"
	"project_2/database"
	"project_2/internal/model"
)

//GET ALL Method in data penulis

func GetNaskah(c *fiber.Ctx) error {
	var naskahs []table.Data_Naskah
	result := database.DB.Find(&naskahs)

	if result.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"Message": result.Error.Error(),
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"Message": "Menampilkan Data Naskah",
		"data":    naskahs,
	})
}

//POST Method

func CreateNaskah(c *fiber.Ctx) error {
	// Parse request body
	var naskah table.Data_Naskah
	if err := c.BodyParser(&naskah); err != nil {
		return err
	}
	// Insert new naskah into database
	result := database.DB.Create(&naskah)
	// Check for errors during insertion
	if result.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": result.Error.Error(),
		})
	}
	// Return success message
	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "Naskah Berhasil Ditambahkan!",
		"data":    naskah,
	})
}

//GET by ID Method

func GetaNaskah(c *fiber.Ctx) error {
	id := c.Params("id_naskah")
	// Find naskah by id_naskah in database
	var naskah table.Data_Naskah
	result := database.DB.First(&naskah, id)
	// Check if naskah exists
	if result.RowsAffected == 0 {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "Naskah Tidak Ditermukan!",
		})
	}
	// Check for errors during query
	if result.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": result.Error.Error(),
		})
	}
	// Return naskah
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Success",
		"data":    naskah,
	})
}

// PUT/UPDATE Method

func UpdateNaskah(c *fiber.Ctx) error {
	// Get id_naskah parameter from request url
	id := c.Params("id_naskah")
	// Find naskah by id_naskah in database
	var naskah table.Data_Naskah
	result := database.DB.First(&naskah, id)
	// Check if naskah exists
	if result.RowsAffected == 0 {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "Data Naskah Tidak Ditemukan",
		})
	}
	// Parse request body
	var newNaskah table.Data_Naskah
	if err := c.BodyParser(&newNaskah); err != nil {
		return err
	}
	// Update data naskah in database
	result = database.DB.Model(&naskah).Updates(newNaskah)
	// Check for errors during update
	if result.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": result.Error.Error(),
		})
	}
	// Return success message
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Data Naskah Berhasil Diperbarui!",
		"data":    naskah,
	})
}

//DELETE Method

func DeleteNaskah(c *fiber.Ctx) error {
	// Get id_naskah parameter from request url
	id := c.Params("id_naskah")
	// Find naskah by id_naskah in database
	var naskah table.Data_Naskah
	result := database.DB.First(&naskah, id)
	// Check if data naskah exists
	if result.RowsAffected == 0 {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "Data Naskah Tidak Ditemukan",
		})
	}
	// Delete naskah from database
	result = database.DB.Delete(&naskah)
	// Check for errors during deletion
	if result.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": result.Error.Error(),
		})
	}
	// Return success message
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Data Penulis Berhasil Dihapus!",
		"data":    naskah,
	})
}