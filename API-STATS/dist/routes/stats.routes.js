"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stats_controller_1 = require("../controller/stats.controller");
const router = express_1.default.Router();
router.post('/stats', stats_controller_1.processStats);
exports.default = router;
