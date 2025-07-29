package handlers

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

// FormData defines the structure for incoming booking form data.
type FormData struct {
	Name           string    `json:"name" binding:"required"`
	Email          string    `json:"email" binding:"required,email"`
	DepartureFrom  string    `json:"departureFrom" binding:"required"`
	DepartureDate  string    `json:"departureDate" binding:"required"`
	ArrivalDate    string    `json:"arrivalDate" binding:"required"`
	Destination    string    `json:"destination" binding:"required"`
	NoOfTravellers int       `json:"noOfTravellers" binding:"required,min=1"`
	CreatedAt      time.Time `json:"createdAt"`
}

// HandleForm processes the booking form submission.
func HandleForm(c *gin.Context) {
	fmt.Println("Received form submission")
	var data FormData

	// Attempt to bind the request's JSON body to the 'data' struct.
	if err := c.ShouldBindJSON(&data); err != nil {
		// If binding fails, return a 400 Bad Request error.
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	// If binding is successful, create a response object.
	response := gin.H{
		"message":        "Form submitted successfully",
		"name":           data.Name,
		"email":          data.Email,
		"departureFrom":  data.DepartureFrom,
		"departureDate":  data.DepartureDate,
		"arrivalDate":    data.ArrivalDate,
		"destination":    data.Destination,
		"noOfTravellers": data.NoOfTravellers,
	}

	// Send the response with a 200 OK status.
	c.JSON(http.StatusOK, response)
}
