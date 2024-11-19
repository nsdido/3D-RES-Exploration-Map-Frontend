import mockBuildings from '../mock/mockBuildings';

// Function to fetch real data from backend API
export async function fetchBuildingsFromAPI() {
  const response = await fetch('http://localhost:5000/api/buildings');
  const data = await response.json();
  return data;
}

// Function to fetch mock data
export async function fetchMockBuildings() {
  // Simulate a delay to mimic an API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockBuildings), 500);
  });
}

// Main fetch function that you can switch between mock and real API
export async function fetchBuildings(useMock = true) {
  if (useMock) {
    return fetchMockBuildings();
  }
  return fetchBuildingsFromAPI();
}
