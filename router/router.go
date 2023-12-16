package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	routeNaskah "project_2/internal/routes/routenaskah"
	routePenulis "project_2/internal/routes/routepenulis"
	
)

func SetupRoutes(app *fiber.App) {
	api := app.Group("/api", logger.New())
	
	routeNaskah.SetupDataNaskahRoutes(api)
	routePenulis.SetupDataPenulisRoutes(api)
}
