package routePenulis

import (
	"github.com/gofiber/fiber/v2"
	handlerpenulis "project_2/internal/handlers/datapenulis"
)

func SetupDataPenulisRoutes(router fiber.Router) {
	penulis := router.Group("/datapenulis")
	penulis.Get("/", handlerpenulis.GetPenulis)
}
