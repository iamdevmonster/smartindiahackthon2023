import React from 'react';

export default function ExploreJob() {
  const gridContainerStyle = {
    // No background color here
  };

  const gridWrapperStyle = {
    backgroundColor: '#f0f8ff', // Light blue color
    width: '100%', // Set to 100% to cover the entire grid
    padding: '20px', // Adjust the padding as needed
  };

  const gridItemStyle = {
    transition: 'background-color 0.3s ease-in-out',
  };

  return (
    <div className="container-fluid md:mt-24 mt-16">
      <div className="container">
        <div className="grid grid-cols-1">
          <div
            className="flex justify-start items-center overflow-hidden lg:px-40 px-10 py-10 rounded-xl shadow-lg dark:shadow-gray-700"
            style={gridContainerStyle}
          >
            <div style={gridWrapperStyle}>
              <div className="flex">
                {/* Use the first image directly from the provided URL */}
                <a
                  href="https://www.india.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid-item"
                  style={{ ...gridItemStyle, marginRight: '90px' }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <img
                    src="https://services.india.gov.in/assets/images/india-gov.png"
                    alt="Government Image 1"
                    className="w-100 h-40 text-black/5 dark:text-white/5 rotate-45"
                  />
                </a>

                {/* Use the second image directly from the provided URL */}
                <a
                  href="https://www.mygov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid-item"
                  style={{ ...gridItemStyle, marginRight: '150px' }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <img
                    src="https://services.india.gov.in/assets/images/mygov.png"
                    alt="Government Image 2"
                    className="w-200 h-50 text-black/5 dark:text-white/5 rotate-360"
                  />
                </a>

                {/* Use the third image directly from the provided URL */}
                <a
                  href="https://data.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid-item"
                  style={{ ...gridItemStyle, marginRight: '200px', marginTop: '20px' }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <img
                    src="https://services.india.gov.in/assets/images/data-gov.png"
                    alt="Government Image 3"
                    className="w-100 h-16 text-black/5 dark:text-white/5 rotate-360"
                  />
                </a>

                {/* Use the fourth image directly from the provided URL */}
                <a
                  href="/link-to-page-4"
                  className="grid-item"
                  style={{ ...gridItemStyle }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <img
                    src="https://services.india.gov.in/assets/images/g20_logo.png"
                    alt="Government Image 4"
                    className="w-100 h-16 text-black/5 dark:text-white/5 rotate-360"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}