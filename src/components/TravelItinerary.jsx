import React, { useEffect, useState, useRef } from 'react'
import Section1 from './screen1/Section1'
import Section2 from './screen1/Section2'
import Section3 from './screen1/Section3'
import Section4 from './screen1/Section4'
import Section5 from './screen1/Section5'
import Section6 from './screen1/Section6'
import Section7 from './screen1/Section7'
import { formatDate, calculateDuration, generatePDFFromElement, generatePDFSimple2 } from '../utils/pdfGenerator'

const TravelItinerary = () => {
  const [formData, setFormData] = useState(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const itineraryRef = useRef(null);

  useEffect(() => {
    // Get form data from localStorage
    const storedData = localStorage.getItem('travelFormData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handlePrint = async () => {
    console.log('Print button clicked');
    setIsGeneratingPDF(true);
    
    // Add a timeout to prevent getting stuck
    const timeoutId = setTimeout(() => {
      console.log('PDF generation timed out, using browser print');
      setIsGeneratingPDF(false);
      window.print();
    }, 10000); // 10 second timeout
    
    try {
      if (itineraryRef.current) {
        console.log('Trying simple PDF generation directly...');
        await generatePDFSimple2(itineraryRef.current, `travel-itinerary-${formData?.name || 'booking'}.pdf`);
        console.log('PDF generation completed successfully');
      } else {
        console.error('itineraryRef.current is null, using browser print');
        window.print();
      }
    } catch (error) {
      console.log('PDF generation failed, using browser print:', error);
      window.print();
    } finally {
      clearTimeout(timeoutId);
      setIsGeneratingPDF(false);
    }
  };

  const handleGoBack = () => {
    window.history.back();
  };

  if (!formData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No booking data found</h2>
          <button 
            onClick={handleGoBack}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Go Back to Form
          </button>
        </div>
      </div>
    );
  }

  // Prepare props for Section1
  const section1Props = {
    name: formData.name,
    itineraryTitle: `Trip to ${formData.destination}`,
    duration: calculateDuration(formData.departureDate, formData.arrivalDate),
    departureFrom: formData.departureFrom,
    departure: formatDate(formData.departureDate),
    arrival: formatDate(formData.arrivalDate),
    destination: formData.destination,
    noOfTravellers: formData.travellers
  };

  return (
    <div className="travel-itinerary">
      {/* Print controls - hidden when printing */}
      <div className="print:hidden fixed top-4 right-4 z-50 flex gap-2 no-print">
        <button 
          onClick={handleGoBack}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 no-print"
        >
          Back to Form
        </button>
        <button 
          onClick={handlePrint}
          disabled={isGeneratingPDF}
          className={`${isGeneratingPDF ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded transition-colors no-print`}
        >
          {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}
        </button>
      </div>

      {/* Travel Itinerary Content */}
      <div ref={itineraryRef}>
        <Section1 {...section1Props} />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </div>
    </div>
  )
}

export default TravelItinerary
