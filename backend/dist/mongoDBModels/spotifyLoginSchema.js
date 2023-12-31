"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const spotifyLoginSchema = new Schema({
    Client_ID: {
        type: String,
        required: true
    },
    Redirect_URI: {
        type: String,
        required: true
    },
    Release_Radar_code: {
        type: String,
        required: false
    }
});
exports.default = mongoose_1.default.model('spotifyLoginSchema', spotifyLoginSchema);
