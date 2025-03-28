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
Object.defineProperty(exports, "__esModule", { value: true });
exports.procesarCalculos = void 0;
const stats_service_1 = require("../services/stats.service");
const procesarCalculos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { matriz } = req.body;
        if (!matriz || typeof matriz !== 'object') {
            return res.status(400).json({ error: 'Formato de matriz invalido' });
        }
        console.log('Matriz recibida exitosamente');
        const stats = (0, stats_service_1.CalcularEstadisticas)(matriz);
        console.log('Estadisticas calculadas exitosamente');
        res.json({ stats });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al procesar las estadisticas' });
    }
});
exports.procesarCalculos = procesarCalculos;
