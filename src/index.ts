import {sum} from './function'
let user:string[]=['reza','ali']
let data:Array<number> =[1,2,3]

enum TASK_STATUS {
    OPENED,
    COMOLETED,
    DELETED

}
let taskType:TASK_STATUS;
taskType = TASK_STATUS.COMOLETED
console.log(user,data,taskType )
console.log(sum(1,1,1,5000) )