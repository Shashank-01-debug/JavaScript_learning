/*
?? what is module?
!! It is a code which is present in a file and we try to export it and access it 
! in another file
** there are 2 important keywords  
!  export : access functionality, variable or constant outside the file(.js)
! import :  to import functionality  or the variablee in the required file.

? There are differet types of export of modules:-
** named Export  -- import {add,user,appName, sub} from './calculator.js'
** Default Export [Important]
*/

import {add,user,appName, sub} from './calculator.js'
import cal from './calculator.js'  //to import demo function we don't need specifically its name.
cal();
add(1000,50);
sub(80,33);
console.log(appName);
console.log(user.role);


//multiplication(45,98);
//div(10,2);

