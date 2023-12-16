package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"project_2/database"
	"project_2/router"
)

func main() {
	// Start a new fiber app
	app := fiber.New()

	database.ConnectDB()

	app.Use(cors.New(cors.Config{
		AllowHeaders:     "*",
		AllowCredentials: true,
		AllowMethods:     "GET,POST,PUT,DELETE",
	}))

	router.SetupRoutes(app)
	app.Listen(":3000")
}
