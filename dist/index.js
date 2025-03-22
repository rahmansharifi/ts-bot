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
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const xhr = axios_1.default.create({
    baseURL: `https://api.telegram.org/bot${process.env.BOT_TOKEN}/`,
});
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send({ status: 200 });
    return;
}));
app.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const update = req.body;
    const { message } = update;
    if (message) {
        yield xhr.post("/sendMessage", {
            chat_id: message.chat.id,
            text: `🔥 Welcome [${message.from.first_name} ${message.from.last_name}](${(_a = message.from.username) !== null && _a !== void 0 ? _a : `https://t.me/${message.from.username}`})`,
        });
    }
    res.end();
    return;
}));
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map