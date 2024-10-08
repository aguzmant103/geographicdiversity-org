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
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const fetchData_1 = require("./fetchData");
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
app.get('/api/getnodewatchdata', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fetch } = req.query;
    if (fetch)
        yield (0, fetchData_1.run)();
    fs_1.default.readFile('../nextjs-clone/app/data/nodewatch.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).json({ error: 'Failed to read data file' });
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        }
        catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).json({ error: 'Failed to parse JSON data' });
        }
    });
}));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
