"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = run;
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const FOLDER_PATH = '../_data/';
// Function to fetch data
function fetchData(endpoint, query) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.post(endpoint, { query, variables: null }, {
                headers: {
                    'accept': 'application/json, multipart/mixed',
                    'content-type': 'application/json'
                }
            });
            return response.data;
        }
        catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    });
}
// Save Data Into File
function saveToFile(data, fileName) {
    try {
        const dataToSave = JSON.stringify(data, null, 2);
        const fullPath = `${FOLDER_PATH}${fileName}`;
        fs_1.default.writeFileSync(fullPath, dataToSave);
        console.log('Data saved to: ', fullPath);
    }
    catch (error) {
        console.error('Error saving data:', error);
    }
}
function process_nodewatch_marketshare_data(data) {
    const count = data.length;
    const processedData = data.reduce((acc, curr) => {
        const { clientType, country } = curr;
        if (!acc.raw[country])
            acc.raw[country] = { count: 0 };
        if (!acc.raw[country].agents)
            acc.raw[country].agents = {};
        if (!acc.raw[country].agents[clientType])
            acc.raw[country].agents[clientType] = 0;
        if (!acc.summary.agents[clientType])
            acc.summary.agents[clientType] = 0;
        if (!acc.summary.countries[country])
            acc.summary.countries[country] = 0;
        if (!acc.perc.agents[clientType])
            acc.perc.agents[clientType] = 0;
        if (!acc.perc.countries[country])
            acc.perc.countries[country] = 0;
        acc.raw[country].count += 1;
        acc.raw[country].agents[clientType] += 1;
        acc.summary.agents[clientType] += 1;
        acc.summary.countries[country] += 1;
        acc.perc.agents[clientType] = (acc.summary.agents[clientType] / count) * 100;
        acc.perc.countries[country] = (acc.summary.countries[country] / count) * 100;
        return acc;
    }, { summary: { count, countries: {}, agents: {} }, perc: { countries: {}, agents: {} }, raw: {} });
    saveToFile(processedData, 'nodewatch.json');
}
function nodewatch_marketshare() {
    return __awaiter(this, void 0, void 0, function* () {
        const endpoint = 'https://api.nodewatch.io/query';
        const rawQuery = 'query { getHeatmapData { clientType country } }';
        const data = yield fetchData(endpoint, rawQuery);
        const heatMap = data.data.getHeatmapData;
        saveToFile(heatMap, 'raw/nodewatch_raw.json');
        process_nodewatch_marketshare_data(heatMap);
    });
}
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        yield nodewatch_marketshare();
    });
}
