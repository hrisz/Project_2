package routeNaskah

import (
	"github.com/gofiber/fiber/v2"
	handlernaskah "project_2/internal/handlers/datanaskah"
)

func SetupDataNaskahRoutes(router fiber.Router) {
	naskah := router.Group("/datanaskah")

	// GET ALL
	naskah.Get("/", handlernaskah.GetNaskah)
	// GET BY ID
	naskah.Get("/:idnaskah", handlernaskah.GetaNaskah)
	// POST
	naskah.Post("/", handlernaskah.CreateNaskah)
	// UPDATE
	naskah.Put("/:idnaskah", handlernaskah.UpdateNaskah)
	// DELETE
	naskah.Delete("/:idnaskah", handlernaskah.DeleteNaskah)
}
