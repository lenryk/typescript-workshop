"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMatch = exports.data = void 0;
const _ = require("lodash");
exports.data = {
    batterHotZones: [[12.2, -3], [10.2, -5], [3, 2]],
    pitcherHotZones: [[3, 2], [-12.2, 3], [-10.2, 5]],
};
const findMatch = (batterHotZones, pitcherHotZones) => {
    return _.intersectionWith(batterHotZones, pitcherHotZones, _.isEqual);
};
exports.findMatch = findMatch;
exports.data.coordinateMap = (0, exports.findMatch)(exports.data.batterHotZones, exports.data.pitcherHotZones);
console.log(exports.data.coordinateMap);
