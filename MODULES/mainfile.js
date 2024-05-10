"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//This file function, import work 
const Student_1 = __importDefault(require("./Student"));
const Teacher_1 = __importDefault(require("./Teacher"));
let teacher = new Teacher_1.default();
console.log(teacher.data);
let Student = new Student_1.default();
console.log(Student.data);
