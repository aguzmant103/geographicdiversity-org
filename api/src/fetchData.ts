import axios from 'axios';
import fs from 'fs';

const FOLDER_PATH = '../nextjs-clone/app/data/';

// Function to fetch data
async function fetchData(endpoint: string, query: string) {
  try {
    const response = await axios.post(
      endpoint,
      { query, variables: null },
      {
        headers: {
          'accept': 'application/json, multipart/mixed',
          'content-type': 'application/json'
        }
      });

    return response.data
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// Save Data Into File
function saveToFile(data: any, fileName: string) {
  try {
    const dataToSave = JSON.stringify(data, null, 2);
    const fullPath = `${FOLDER_PATH}${fileName}`;
    fs.writeFileSync(fullPath, dataToSave);
    console.log('Data saved to: ', fullPath);
  } catch (error) {
    console.error('Error saving data:', error);
  }
}
const BOUNDS = [
  // Africa
  { name: "Northern Africa", latBounds: [20, 37], longBounds: [-25, 35] },
  { name: "Western Africa", latBounds: [-5, 20], longBounds: [-20, 20] },
  { name: "Central Africa", latBounds: [-10, 5], longBounds: [10, 30] },
  { name: "Eastern Africa", latBounds: [-15, 12], longBounds: [20, 51] },
  { name: "Southern Africa", latBounds: [-35, -10], longBounds: [10, 40] },

  // Asia
  { name: "Northern Asia", latBounds: [50, 81], longBounds: [30, 180] },
  { name: "Central Asia", latBounds: [35, 50], longBounds: [50, 85] },
  { name: "Western Asia", latBounds: [12, 42], longBounds: [30, 65] },
  { name: "South Asia", latBounds: [5, 35], longBounds: [60, 95] },
  { name: "Eastern Asia", latBounds: [20, 55], longBounds: [95, 150] },
  { name: "Southeastern Asia", latBounds: [-10, 20], longBounds: [95, 140] },

  // Europe
  { name: "Northern Europe", latBounds: [55, 70], longBounds: [-25, 60] },
  { name: "Western Europe", latBounds: [45, 55], longBounds: [-10, 15] },
  { name: "Southern Europe", latBounds: [35, 45], longBounds: [-10, 40] },
  { name: "Eastern Europe", latBounds: [45, 70], longBounds: [20, 60] },
  { name: "Central Europe", latBounds: [45, 55], longBounds: [5, 25] },

  // America
  { name: "North America", latBounds: [15, 85], longBounds: [-170, -50] },
  { name: "Central America", latBounds: [5, 20], longBounds: [-120, -75] },
  { name: "South America", latBounds: [-55, 15], longBounds: [-80, -35] },
  { name: "Caribbean", latBounds: [10, 25], longBounds: [-90, -60] },

  // Oceania
  { name: "Oceania", latBounds: [-45, 15], longBounds: [113, 180] },
  { name: "South Island, New Zealand", latBounds: [-47, -34], longBounds: [165, 179] }
]

function assign_continent(latitud: any, longitud: any): string {
  for (const continent of BOUNDS) {
    //assign latitude range
    const [latitude_min, latitude_max] = continent.latBounds;
    //assign longitude range
    const [longitude_min, longitude_max] = continent.longBounds;

    //compare bounds
    if (latitud >= latitude_min && latitud <= latitude_max && longitud >= longitude_min && longitud <= longitude_max) {
      return continent.name;
    }
  }
  return "Others Regions";
}

// Transform data to expected format
function transformData(rawData: any) {
  const transformedData = {
    data: Object.entries(rawData.raw).map(([name, regionData]: [string, any]) => ({
      name,
      data: {
        countries: regionData.countries,
        summary: regionData.summary,
        perc: regionData.perc
      }
    }))
  };
  return transformedData;
}

function process_nodewatch_marketshare_data(data: any) {
  const count = data.length;
  const processedData = data.reduce((acc: any, curr: any) => {
    const { clientType, country, latitude, longitude } = curr;
    //assign continent for each country
    const continent = assign_continent(latitude, longitude);
    //structure
    if (!acc.raw[continent]) {
      acc.raw[continent] = {
        countries: {},
        summary: { count: 0, countries: {}, agents: {} },
        perc: { countries: {}, agents: {} }
      };
    }

    if (!acc.raw[continent].countries[country]) {
      acc.raw[continent].countries[country] = {
        summary: { count: 0, agents: {} },
        perc: { agents: {} }
      };
    }

    acc.raw[continent].countries[country].summary.count += 1;
    acc.raw[continent].countries[country].summary.agents[clientType] = (acc.raw[continent].countries[country].summary.agents[clientType] || 0) + 1;
    acc.raw[continent].summary.count += 1;
    acc.raw[continent].summary.agents[clientType] = (acc.raw[continent].summary.agents[clientType] || 0) + 1;
    acc.raw[continent].summary.countries[country] = (acc.raw[continent].summary.countries[country] || 0) + 1;
    acc.raw[continent].countries[country].perc.agents[clientType] = (acc.raw[continent].countries[country].summary.agents[clientType] / count) * 100;
    acc.raw[continent].countries[country].perc.countries = (acc.raw[continent].summary.countries[country] / count) * 100;

    return acc;
  }, {
    raw: {}
  });
  
  return processedData;
}

async function nodewatch_marketshare() {
  const endpoint = 'https://api.nodewatch.io/query';
  const rawQuery = 'query { getHeatmapData { clientType country latitude longitude} }';
  const data = await fetchData(endpoint, rawQuery);
  const heatMap = data.data.getHeatmapData;

  //assign continent

  saveToFile(heatMap, 'raw/nodewatch_raw.json');

  const processedData = process_nodewatch_marketshare_data(heatMap);
  const transformedData = transformData(processedData);
  saveToFile(transformedData, 'nodewatch.json');
}

export async function run() {
  await nodewatch_marketshare();
}
