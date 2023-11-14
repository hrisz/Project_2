package routeNaskah

import (
	"github.com/gofiber/fiber/v2"
	handlernaskah "project_2/internal/handlers/datanaskah"
)

func SetupDataNaskahRoutes(router fiber.Router) {
	naskah := router.Group("/datanaskah")
	naskah.Get("/", handlernaskah.GetNaskah)
}