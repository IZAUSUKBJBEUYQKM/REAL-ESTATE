// Search functionality for Estate Agent Power website
class PropertySearch {
    constructor() {
        this.searchForm = null;
        this.searchInput = null;
        this.propertyTypeSelect = null;
        this.bedroomsSelect = null;
        this.districtSelect = null;
        this.buyButton = null;
        this.rentButton = null;
        this.searchButton = null;
        this.allFiltersButton = null;
        
        this.currentSearchType = 'buy'; // 'buy' or 'rent'
        this.searchFilters = {
            query: '',
            propertyType: '',
            bedrooms: '',
            district: '',
            searchType: 'buy'
        };
        
        this.init();
    }
    
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupSearchBox());
        } else {
            this.setupSearchBox();
        }
    }
    
    setupSearchBox() {
        // Get search box elements
        this.searchInput = document.querySelector('.search-box input[type="text"]');
        this.propertyTypeSelect = document.querySelector('.search-box select');
        this.bedroomsSelect = document.querySelectorAll('.search-box select')[1];
        this.districtSelect = document.querySelectorAll('.search-box select')[2];
        this.buyButton = document.querySelector('.search-box .buy-button:first-child');
        this.rentButton = document.querySelector('.search-box .buy-button:last-child');
        this.searchButton = document.querySelector('.search-box button[style*="background-color: #CC7722"]');
        this.allFiltersButton = document.querySelector('.search-box button[style*="color: #3181ff"]');
        
        if (!this.searchInput || !this.searchButton) {
            console.warn('Search elements not found');
            return;
        }
        
        this.setupEventListeners();
        this.updateButtonStates();
    }
    
    setupEventListeners() {
        // Buy/Rent toggle buttons
        if (this.buyButton) {
            this.buyButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.setSearchType('buy');
            });
        }
        
        if (this.rentButton) {
            this.rentButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.setSearchType('rent');
            });
        }
        
        // Search button
        this.searchButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.performSearch();
        });
        
        // Enter key in search input
        this.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.performSearch();
            }
        });
        
        // Filter change listeners
        if (this.propertyTypeSelect) {
            this.propertyTypeSelect.addEventListener('change', () => {
                this.searchFilters.propertyType = this.propertyTypeSelect.value;
            });
        }
        
        if (this.bedroomsSelect) {
            this.bedroomsSelect.addEventListener('change', () => {
                this.searchFilters.bedrooms = this.bedroomsSelect.value;
            });
        }
        
        if (this.districtSelect) {
            this.districtSelect.addEventListener('change', () => {
                this.searchFilters.district = this.districtSelect.value;
            });
        }
        
        // All Filters button
        if (this.allFiltersButton) {
            this.allFiltersButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.showAllFilters();
            });
        }
    }
    
    setSearchType(type) {
        this.currentSearchType = type;
        this.searchFilters.searchType = type;
        this.updateButtonStates();
    }
    
    updateButtonStates() {
        if (this.buyButton && this.rentButton) {
            // Reset both buttons
            this.buyButton.style.backgroundColor = 'transparent';
            this.buyButton.style.color = 'gray';
            this.rentButton.style.backgroundColor = 'transparent';
            this.rentButton.style.color = 'gray';
            
            // Highlight active button
            if (this.currentSearchType === 'buy') {
                this.buyButton.style.backgroundColor = '#CC7722';
                this.buyButton.style.color = 'white';
            } else {
                this.rentButton.style.backgroundColor = '#CC7722';
                this.rentButton.style.color = 'white';
            }
        }
    }
    
    performSearch() {
        // Collect search data
        this.searchFilters.query = this.searchInput.value.trim();
        
        // Validate search
        if (!this.searchFilters.query && !this.searchFilters.propertyType &&
            !this.searchFilters.bedrooms && !this.searchFilters.district) {
            this.showNotification('Please enter a search term or select filters', 'warning');
            return;
        }
        
        // Build search URL with parameters
        const searchParams = new URLSearchParams();
        
        if (this.searchFilters.query) {
            searchParams.append('q', this.searchFilters.query);
        }
        if (this.searchFilters.propertyType) {
            searchParams.append('type', this.searchFilters.propertyType);
        }
        if (this.searchFilters.bedrooms) {
            searchParams.append('bedrooms', this.searchFilters.bedrooms);
        }
        if (this.searchFilters.district) {
            searchParams.append('district', this.searchFilters.district);
        }
        searchParams.append('searchType', this.searchFilters.searchType);
        
        // Navigate to search results page with search parameters
        const searchUrl = `search-results.html?${searchParams.toString()}`;

        // Show loading state
        this.showSearchLoading();

        // Navigate to search results
        window.location.href = searchUrl;
    }
    
    showSearchLoading() {
        if (this.searchButton) {
            const originalText = this.searchButton.textContent;
            this.searchButton.textContent = 'Searching...';
            this.searchButton.disabled = true;
            
            // Reset after a short delay (in case navigation is slow)
            setTimeout(() => {
                this.searchButton.textContent = originalText;
                this.searchButton.disabled = false;
            }, 3000);
        }
    }
    
    showAllFilters() {
        // For now, just show a notification
        // In a real implementation, this would open a modal with more filter options
        this.showNotification('Advanced filters coming soon!', 'info');
    }
    
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `alert position-fixed`;

        // Use brand colors instead of Bootstrap defaults
        let bgColor, textColor;
        switch(type) {
            case 'success':
                bgColor = '#CC7722';
                textColor = 'white';
                break;
            case 'warning':
                bgColor = '#E6A65D';
                textColor = 'white';
                break;
            case 'info':
            default:
                bgColor = 'rgb(106, 129, 133)';
                textColor = 'white';
                break;
        }

        notification.style.cssText = `
            top: 20px;
            right: 20px;
            z-index: 9999;
            min-width: 300px;
            animation: slideIn 0.3s ease;
            background-color: ${bgColor};
            color: ${textColor};
            border: none;
            border-radius: 10px;
            padding: 1rem;
        `;
        notification.innerHTML = `
            <strong>${message}</strong>
            <button type="button" class="btn-close btn-close-white" onclick="this.parentElement.remove()" style="filter: brightness(0) invert(1);"></button>
        `;

        document.body.appendChild(notification);

        // Auto remove after 3 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 3000);
    }
}

// Initialize search functionality when script loads
const propertySearch = new PropertySearch();

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PropertySearch;
}
