import {DBkeys} from './test';
class Main{

  printMyNameAgain(){

   const v=   DBkeys.printMyName();
   console.log(v);
  }

}

let myNewClass=new Main();
myNewClass.printMyNameAgain();