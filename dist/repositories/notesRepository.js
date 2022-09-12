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
exports.deleteById = exports.findById = exports.findAllNotes = exports.findByTitle = exports.insertNote = void 0;
const database_1 = require("../config/database");
function insertNote(noteData) {
    return __awaiter(this, void 0, void 0, function* () {
        yield database_1.prisma.secure_notes.create({ data: noteData });
    });
}
exports.insertNote = insertNote;
function findByTitle(title, user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield database_1.prisma.secure_notes.findFirst({
            where: { title, user_id },
        });
        return result;
    });
}
exports.findByTitle = findByTitle;
function findAllNotes(user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield database_1.prisma.secure_notes.findMany({ where: { user_id } });
        return result;
    });
}
exports.findAllNotes = findAllNotes;
function findById(id, user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield database_1.prisma.secure_notes.findFirst({ where: { id, user_id } });
        return result;
    });
}
exports.findById = findById;
function deleteById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield database_1.prisma.secure_notes.delete({ where: { id } });
    });
}
exports.deleteById = deleteById;
