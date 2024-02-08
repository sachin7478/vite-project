

// To demonstrat typescript modules

import tLogin from './teacher';
import sLogin from './student';

let student = new sLogin();
let teacher = new tLogin();
console.log(student.data);
console.log(teacher.data);