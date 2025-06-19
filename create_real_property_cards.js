// Real properties from your Srinagar dataset for 2025
const realProperties = [
  {
    id: 1,
    title: "Residential Land in Soura",
    location: "soura",
    village: "edigah", 
    city: "srinagar",
    property_type: "residential",
    price_lakhs: 4.85,
    price_rupees: 485000,
    road_type: "front side road",
    year: 2025,
    image: "house1.jpg"
  },
  {
    id: 2,
    title: "Commercial Land in Alamgari Bazar",
    location: "alamgari bazar",
    village: "edigah",
    city: "srinagar", 
    property_type: "commercial",
    price_lakhs: 6.20,
    price_rupees: 620000,
    road_type: "front side road",
    year: 2025,
    image: "house2.jpg"
  },
  {
    id: 3,
    title: "Residential Land in Abu Bakar Colony",
    location: "abu bakar colony",
    village: "chanapora",
    city: "srinagar",
    property_type: "residential", 
    price_lakhs: 4.65,
    price_rupees: 465000,
    road_type: "inner side road",
    year: 2025,
    image: "house4.jpg"
  },
  {
    id: 4,
    title: "Commercial Land in Baba Demb",
    location: "baba demb",
    village: "khanyar",
    city: "srinagar",
    property_type: "commercial",
    price_lakhs: 5.95,
    price_rupees: 595000,
    road_type: "front side road", 
    year: 2025,
    image: "card1.jpg"
  },
  {
    id: 5,
    title: "Residential Land in Boulevard Road",
    location: "boulevard road",
    village: "khanyar",
    city: "srinagar",
    property_type: "residential",
    price_lakhs: 5.40,
    price_rupees: 540000,
    road_type: "front side road",
    year: 2025,
    image: "card2.jpg"
  },
  {
    id: 6,
    title: "Residential Land in Hazratbal",
    location: "hazratbal",
    village: "hazratbal",
    city: "srinagar",
    property_type: "residential",
    price_lakhs: 4.25,
    price_rupees: 425000,
    road_type: "inner side road",
    year: 2025,
    image: "card3.jpg"
  },
  {
    id: 7,
    title: "Commercial Land in Lal Chowk",
    location: "lal chowk kothibagh", 
    village: "lal chowk",
    city: "srinagar",
    property_type: "commercial",
    price_lakhs: 7.80,
    price_rupees: 780000,
    road_type: "front side road",
    year: 2025,
    image: "card4.jpg"
  },
  {
    id: 8,
    title: "Residential Land in Nishat",
    location: "nishat mohalla",
    village: "nishat bagh", 
    city: "srinagar",
    property_type: "residential",
    price_lakhs: 4.90,
    price_rupees: 490000,
    road_type: "front side road",
    year: 2025,
    image: "card5.jpg"
  },
  {
    id: 9,
    title: "Commercial Land in Nowshera",
    location: "nowshera",
    village: "edigah",
    city: "srinagar",
    property_type: "commercial",
    price_lakhs: 5.75,
    price_rupees: 575000,
    road_type: "inner side road",
    year: 2025,
    image: "card6.jpg"
  },
  {
    id: 10,
    title: "Residential Land in Chanapora",
    location: "old chanapora",
    village: "chanapora",
    city: "srinagar", 
    property_type: "residential",
    price_lakhs: 4.55,
    price_rupees: 455000,
    road_type: "front side road",
    year: 2025,
    image: "card7.jpg"
  },
  {
    id: 11,
    title: "Commercial Land in Qamarwari",
    location: "bilal colony qamarwari",
    village: "qamarwari",
    city: "srinagar",
    property_type: "commercial",
    price_lakhs: 6.45,
    price_rupees: 645000,
    road_type: "front side road",
    year: 2025,
    image: "card8.jpg"
  },
  {
    id: 12,
    title: "Residential Land in Dalgate",
    location: "sonwar mohalla",
    village: "dalgate",
    city: "srinagar",
    property_type: "residential",
    price_lakhs: 5.15,
    price_rupees: 515000,
    road_type: "front side road", 
    year: 2025,
    image: "card9.jpg"
  }
];

// Function to generate property cards HTML
function generatePropertyCards() {
  return realProperties.map(property => `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card property-card h-100">
        <img src="${property.image}" class="card-img-top" alt="${property.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${property.title}</h5>
          <p class="card-text">
            <i class="fas fa-map-marker-alt text-primary"></i> ${property.location}, ${property.village}<br>
            <i class="fas fa-road text-secondary"></i> ${property.road_type}<br>
            <i class="fas fa-building text-info"></i> ${property.property_type}
          </p>
          <div class="mt-auto">
            <div class="price-section">
              <h4 class="price text-success">₹${property.price_lakhs} Lakhs</h4>
              <small class="text-muted">(₹${property.price_rupees.toLocaleString('en-IN')})</small>
            </div>
            <div class="d-flex justify-content-between mt-3">
              <button class="btn btn-primary btn-sm">View Details</button>
              <button class="btn btn-outline-danger btn-sm wishlist-btn" data-id="${property.id}">
                <i class="far fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { realProperties, generatePropertyCards };
}
