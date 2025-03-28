"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const qr_controller_1 = require("../controller/qr.controller");
const router = express_1.default.Router();
router.post('/qr', qr_controller_1.procesarMatriz);
exports.default = router;
