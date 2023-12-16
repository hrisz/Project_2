package routePenulis

import (
	"github.com/gofiber/fiber/v2"
	handlerpenulis "project_2/internal/handlers/datapenulis"
)

func SetupDataPenulisRoutes(router fiber.Router) {
	penulis := router.Group("/datapenulis")

	// GET ALL
	penulis.Get("/", handlerpenulis.GetPenulis)
	// GET BY ID
	penulis.Get("/:idpenulis", handlerpenulis.GetaPenulis)
	// POST
	penulis.Post("/", handlerpenulis.CreatePenulis)
	// UPDATE
	penulis.Put("/:idpenulis", handlerpenulis.UpdatePenulis)
	// DELETE
	penulis.Delete("/:idpenulis", handlerpenulis.DeletePenulis)

}
