package main

import (
	"github.com/SahilKhanWDC/VigovioFullstack/backend/handlers"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// Set Gin to release mode in production
	gin.SetMode(gin.ReleaseMode)

	r := gin.Default()

	// Configure CORS
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{
		"http://localhost",
		"http://localhost:80",
		"http://frontend",
		"http://frontend:80",
	}
	config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Type", "Accept", "Authorization"}
	config.AllowCredentials = true

	r.Use(cors.New(config))

	// Routes
	r.POST("/api/form", handlers.HandleForm)

	// Start server
	r.Run(":8080")
}
