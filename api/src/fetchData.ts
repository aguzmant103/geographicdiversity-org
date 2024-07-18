import axios from 'axios';
import fs from 'fs';

const FOLDER_PATH = '../_data/'; 

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
function saveToFile(data: JSON, fileName: string) {
  try {
    const dataToSave = JSON.stringify(data, null, 2);
    const fullPath = `${FOLDER_PATH}${fileName}`;
    fs.writeFileSync(fullPath, dataToSave);
    console.log('Data saved to: ', fullPath);
  } catch (error) {
    console.error('Error saving data:', error);
  }
}

function process_nodewatch_marketshare_data(data: any) {
  const count = data.length;

  const processedData = data.reduce((acc: any, curr: any) => {
    const { clientType, country } = curr;

    if (!acc.raw[country]) acc.raw[country] = { count: 0 };
    if (!acc.raw[country].agents) acc.raw[country].agents = {};
    if (!acc.raw[country].agents[clientType]) acc.raw[country].agents[clientType] = 0;
    if (!acc.summary.agents[clientType]) acc.summary.agents[clientType] = 0;
    if (!acc.summary.countries[country]) acc.summary.countries[country] = 0;
    if (!acc.perc.agents[clientType]) acc.perc.agents[clientType] = 0;
    if (!acc.perc.countries[country]) acc.perc.countries[country] = 0;

    acc.raw[country].count += 1;
    acc.raw[country].agents[clientType]+= 1;
    acc.summary.agents[clientType] += 1;
    acc.summary.countries[country] += 1;
    acc.perc.agents[clientType] = (acc.summary.agents[clientType] / count) * 100;
    acc.perc.countries[country] = (acc.summary.countries[country] / count) * 100;

    return acc;
  }, { summary: { count, countries: {}, agents: {} }, perc: { countries: {}, agents: {} }, raw: {} });

  saveToFile(processedData, 'nodewatch.json')
}

async function nodewatch_marketshare () {
  const endpoint = 'https://api.nodewatch.io/query';
  const rawQuery = 'query { getHeatmapData { clientType country } }';
  const data = await fetchData(endpoint, rawQuery);
  const heatMap = data.data.getHeatmapData;

  saveToFile(heatMap, 'raw/nodewatch_raw.json');

  process_nodewatch_marketshare_data(heatMap);
}

export async function run() {
  
  await nodewatch_marketshare();
  
}
