package main

import (
	"github.com/gofiber/fiber/v2"
	"project_2/database"
	"project_2/router"
)

func main() {
	// Start a new fiber app
	app := fiber.New()

	database.ConnectDB()
	router.SetupRoutes(app)
	app.Listen(":3000")
}
