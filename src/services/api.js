export async function fetchBuildings() {
    const response = await fetch('/api/buildings');
    const data = await response.json();
    return data;
  }
  