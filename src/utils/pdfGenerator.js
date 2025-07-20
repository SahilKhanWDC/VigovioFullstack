import html2pdf from 'html2pdf.js';

// PDF Generator utility for travel itinerary
export const generatePDF = (formData) => {
  // Store form data in localStorage to pass to the itinerary view
  localStorage.setItem('travelFormData', JSON.stringify(formData));
  
  // Update URL and trigger view change
  window.history.pushState({}, '', '/itinerary');
  
  // Trigger a popstate event to update the view
  window.dispatchEvent(new PopStateEvent('popstate'));
};

// Enhanced PDF generation function using html2pdf
export const generatePDFFromElement = async (element, filename = 'travel-itinerary.pdf') => {
  if (!element) {
    console.error('No element provided for PDF generation');
    return;
  }

  console.log('Starting PDF generation for element:', element);

  try {
    const options = {
      margin: 10,
      filename: filename,
      image: { 
        type: 'jpeg', 
        quality: 0.98 
      },
      html2canvas: { 
        scale: 1,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        scrollX: 0,
        scrollY: 0,
        windowWidth: 1200,
        windowHeight: element.scrollHeight
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait',
        compress: true
      },
      pagebreak: { 
        mode: ['avoid-all', 'css', 'legacy'] 
      }
    };

    // Generate PDF with better error handling
    await html2pdf()
      .set(options)
      .from(element)
      .save();
      
    console.log('PDF generated successfully');
    return true;
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};

// Simple and reliable PDF generation function
export const generatePDFSimple2 = async (element, filename = 'travel-itinerary.pdf') => {
  if (!element) {
    console.error('No element provided for PDF generation');
    return;
  }

  console.log('Starting simple PDF generation');

  try {
    // Simple configuration that usually works
    const opt = {
      margin: 10,
      filename: filename,
      image: { type: 'jpeg', quality: 0.95 },
      html2canvas: { 
        scale: 1,
        logging: false,
        useCORS: false,
        allowTaint: true
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait' 
      }
    };

    await html2pdf().set(opt).from(element).save();
    console.log('Simple PDF generated successfully');
    return true;
    
  } catch (error) {
    console.error('Simple PDF generation failed:', error);
    throw error;
  }
};

// Add PDF-specific styles
const addPDFStyles = () => {
  const style = document.createElement('style');
  style.id = 'pdf-specific-styles';
  style.textContent = `
    .pdf-mode .travel-itinerary {
      width: 210mm !important;
      max-width: 210mm !important;
      padding: 10mm !important;
      margin: 0 !important;
      font-size: 11px !important;
      line-height: 1.4 !important;
    }
    
    .pdf-mode img {
      max-width: 40mm !important;
      max-height: 40mm !important;
      object-fit: contain !important;
    }
    
    .pdf-mode .logo {
      max-width: 30mm !important;
      max-height: 30mm !important;
    }
    
    .pdf-mode h1 {
      font-size: 16px !important;
      margin-bottom: 8px !important;
    }
    
    .pdf-mode h2 {
      font-size: 14px !important;
      margin-bottom: 6px !important;
    }
    
    .pdf-mode h3 {
      font-size: 12px !important;
      margin-bottom: 4px !important;
    }
    
    .pdf-mode .text-2xl {
      font-size: 16px !important;
    }
    
    .pdf-mode .text-xl {
      font-size: 14px !important;
    }
    
    .pdf-mode .text-lg {
      font-size: 12px !important;
    }
    
    .pdf-mode .gap-6 {
      gap: 4mm !important;
    }
    
    .pdf-mode .gap-4 {
      gap: 2mm !important;
    }
    
    .pdf-mode .p-6 {
      padding: 4mm !important;
    }
    
    .pdf-mode .p-4 {
      padding: 3mm !important;
    }
    
    .pdf-mode .mb-4 {
      margin-bottom: 3mm !important;
    }
    
    .pdf-mode .mb-6 {
      margin-bottom: 4mm !important;
    }
    
    .pdf-mode .py-6 {
      padding-top: 4mm !important;
      padding-bottom: 4mm !important;
    }
    
    .pdf-mode .shadow-md,
    .pdf-mode .shadow-lg {
      box-shadow: 0 1px 3px rgba(0,0,0,0.1) !important;
    }
    
    .pdf-mode .rounded-lg {
      border-radius: 2mm !important;
    }
    
    .pdf-mode .rounded-md {
      border-radius: 1mm !important;
    }
    
    .pdf-mode .flex-wrap {
      display: flex !important;
      flex-wrap: wrap !important;
      gap: 2mm !important;
    }
    
    .pdf-mode .booking-card {
      width: 48mm !important;
      min-width: 48mm !important;
      margin-bottom: 2mm !important;
      break-inside: avoid !important;
      page-break-inside: avoid !important;
    }
  `;
  document.head.appendChild(style);
  document.body.classList.add('pdf-mode');
};

// Remove PDF-specific styles
const removePDFStyles = () => {
  const style = document.getElementById('pdf-specific-styles');
  if (style) {
    style.remove();
  }
  document.body.classList.remove('pdf-mode');
};

// Helper function to format date
export const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Helper function to calculate duration
export const calculateDuration = (departureDate, arrivalDate) => {
  if (!departureDate || !arrivalDate) return '';
  
  const departure = new Date(departureDate);
  const arrival = new Date(arrivalDate);
  const diffTime = Math.abs(arrival - departure);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return `${diffDays} Days`;
};
