
//every js can be a node module and every node module has a module.exports property
console.log(module)

//we can attach primitive types to the module.exports object
module.exports.weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

//we can a
module.exports.getWeekDay = (dateNo) => {if (dateNo < 0 || dateNo > 6) dateNo = null; return module.exports.weekDays[dateNo];
};