"use strict";
let user = ['reza', 'ali'];
let data = [1, 2, 3];
var TASK_STATUS;
(function (TASK_STATUS) {
    TASK_STATUS[TASK_STATUS["OPENED"] = 0] = "OPENED";
    TASK_STATUS[TASK_STATUS["COMOLETED"] = 1] = "COMOLETED";
    TASK_STATUS[TASK_STATUS["DELETED"] = 2] = "DELETED";
})(TASK_STATUS || (TASK_STATUS = {}));
let taskType;
taskType = TASK_STATUS.COMOLETED;
console.log(user, data, taskType);
