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
exports.procesarMatriz = void 0;
const qr_service_1 = require("../services/qr.service");
const axios_1 = __importDefault(require("axios"));
const procesarMatriz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { matriz } = req.body;
        if (!matriz || !Array.isArray(matriz)) {
            return res.status(400).json({ error: 'Formato invalido de matriz' });
        }
        console.log('Procesando matriz', matriz);
        const qrResult = (0, qr_service_1.qrFactorizacion)(matriz);
        // Enviar la matriz factorizada a la API de estadísticas
        const statsResponse = yield axios_1.default.post('http://api-stats:3001/stats', { matriz: qrResult });
        res.json({ qrResult, stats: statsResponse.data });
    }
    catch (error) {
        res.status(500).json({ error: 'Error procesando matriz' });
    }
});
exports.procesarMatriz = procesarMatriz;
