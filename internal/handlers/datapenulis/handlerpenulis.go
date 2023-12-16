package handlerpenulis

import (
	"github.com/gofiber/fiber/v2"
	"project_2/database"
	"project_2/internal/model"
)

//GET ALL Method in data penulis

func GetPenulis(c *fiber.Ctx) error {
	var penulist []table.Data_Penulis
	// Find all data penulis in database
	result := database.DB.Find(&penulist)
	// Check for errors during query execution
	if result.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": result.Error.Error(),
		})
	}
	// Return list of penulis
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Data Penulis Berhasil Ditampilkan!",
		"data":     penulist,
	})
}


//POST Method

func CreatePenulis(c *fiber.Ctx) error {
	// Parse request body
	var penulis table.Data_Penulis
	if err := c.BodyParser(&penulis); err != nil {
		return err
	}
	// Insert new penulis into database
	result := database.DB.Create(&penulis)
	// Check for errors during insertion
	if result.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": result.Error.Error(),
		})
	}
	// Return success message
	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "Penulis Berhasil Ditambahkan!",
		"data":    penulis,
	})
}

//GET by ID Method

func GetaPenulis(c *fiber.Ctx) error {
	// Get idpenulis parameter from request url
	id := c.Params("idpenulis")
	// Find data penulis by idpenulis in database
	var penulis table.Data_Penulis
	result := database.DB.First(&penulis, id)
	// Check if data penulis exists
	if result.RowsAffected == 0 {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "Data Penulis Tidak Ditermukan!",
		})
	}
	// Check for errors during query
	if result.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": result.Error.Error(),
		})
	}
	// Return penulis
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Success",
		"data":    penulis,
	})
}

// PUT/UPDATE Method

func UpdatePenulis(c *fiber.Ctx) error {
	// Get idpenulis parameter from request url
	id := c.Params("idpenulis")
	// Find penulis by idpenulis in database
	var penulis table.Data_Penulis
	result := database.DB.First(&penulis, id)
	// Check if penulis exists
	if result.RowsAffected == 0 {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "Data Penulis Tidak Ditemukan",
		})
	}
	// Parse request body
	var newPenulis table.Data_Penulis
	if err := c.BodyParser(&newPenulis); err != nil {
		return err
	}
	// Update data penulis in database
	result = database.DB.Model(&penulis).Updates(newPenulis)
	// Check for errors during update
	if result.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": result.Error.Error(),
		})
	}
	// Return success message
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Data Penulis Berhasil Diperbarui!",
		"data":    penulis,
	})
}

//DELETE Method

func DeletePenulis(c *fiber.Ctx) error {
	// Get idpenulis parameter from request url
	id := c.Params("idpenulis")
	// Find penulis by idpenulis in database
	var penulis table.Data_Penulis
	result := database.DB.First(&penulis, id)
	// Check if data penulis exists
	if result.RowsAffected == 0 {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "Data Penulis Tidak Ditemukan",
		})
	}
	// Delete penulis from database
	result = database.DB.Delete(&penulis)
	// Check for errors during deletion
	if result.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": result.Error.Error(),
		})
	}
	// Return success message
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Data Penulis Berhasil Dihapus!",
		"data":    penulis,
	})
}