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
const __1 = require("..");
const socket_io_redis_1 = require("socket.io-redis");
const redisConnection_1 = require("./redisConnection");
// import eventHandle from "../handleEvent";
// import { disconnect } from "../playing";
const socketConnection = () => {
    __1.io.adapter((0, socket_io_redis_1.createAdapter)(redisConnection_1.redisPub, redisConnection_1.redisSub));
    __1.io.on("connection", (socket) => __awaiter(void 0, void 0, void 0, function* () {
        // await eventHandle(socket)
        socket.on("disconnect", () => {
            //   disconnect(socket);
        });
    }));
};
exports.default = socketConnection;
