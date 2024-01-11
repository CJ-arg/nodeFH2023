"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePersons = void 0;
const buildMakePersons = ({ getUUID, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        };
    };
};
exports.buildMakePersons = buildMakePersons;
// const obj = { name: 'John', birthdate: '1985-10-21' };
// const john = buildPerson( obj );
// console.log(john);
