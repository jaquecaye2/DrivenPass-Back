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
exports.deleteById = exports.findById = exports.findAllCredentials = exports.findByTitle = exports.insertCredential = void 0;
const database_1 = require("../config/database");
function insertCredential(credencialData) {
    return __awaiter(this, void 0, void 0, function* () {
        yield database_1.prisma.credentials.create({ data: credencialData });
    });
}
exports.insertCredential = insertCredential;
function findByTitle(title, user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield database_1.prisma.credentials.findFirst({
            where: { title, user_id },
        });
        return result;
    });
}
exports.findByTitle = findByTitle;
function findAllCredentials(user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield database_1.prisma.credentials.findMany({ where: { user_id } });
        return result;
    });
}
exports.findAllCredentials = findAllCredentials;
function findById(id, user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield database_1.prisma.credentials.findFirst({ where: { id, user_id } });
        return result;
    });
}
exports.findById = findById;
function deleteById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield database_1.prisma.credentials.delete({ where: { id } });
    });
}
exports.deleteById = deleteById;
