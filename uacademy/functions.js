


//                           // parametr
// function uchburchakningYuzi (a, b){
//     return 0.5 * a * b
// }
//                         // argument
// console.log(uchburchakningYuzi(4,5))



// function tortBurchakYuzi (a, b){
//     return a*b
// } 

// console.log("Tort burchak yuzi " + tortBurchakYuzi(4, 6))



// function parametr(a, b){
//     return (a+b)*2
// }

// console.log("Parametri " + parametr(4,6))

// setTimeout()

// function sum (number){
//     let num = 0
//     for (i = 0; i <= number; i++){
//         num += i
//     } 
//     return num
// } 

// console.log(sum(10));

// function sum (number){
//     let num = 0
//     for (i=0; i <= number; i++){
//         num += i
        
//     } return num 
// } console.log('sum(10) :>> ', sum(10));


// function sum (number){
//     let num = 0
//     for (i=0; i <= number; i++){

//     num += i }

//         return num
    
// } console.log('sum(10) :>> ', sum(5));

// function Fib(number){
//     let result = 1
//     for (i=1; i<=number; i++){
//         result *= i
//     } return result
// } console.log("Factorial " + Fib(5));


// function Fib (number){
//     let num = 1
//     for (i=1; i<=number; i++){
//         num *= i
//     } return num

// } console.log(Fib(5));


// //////////////////////////////////Peramid


// for (i=1; i<=3; i++){
//     let pattern = " "
//     for (j=1; j<=4; j++){
//         pattern += "* "
//     } console.log(pattern);



// let n = 5; 


//     let string = "";
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j <= i; j++) {
//         string += "*";
//       }
//       string += "<br>";
//     } 


// function myPattern (row){
    

// for (i=1; i<=row; i++){
//     let pattern = " "
//     for (j=1; j<=i; j++){
//         pattern += "* "
//     } 
//     console.log(pattern)
    
// } 
// } myPattern(5);

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// 
// rows = 5
// for (i=1; i<=rows; i++){
//     pattern = " "




// function myPattern (row){
    

//     for (i=1; i<=row; i++){
//         let pattern = "*"
//         for (j=1; j<=i; j++){
//             pattern += " "
//         } 
//         console.log(pattern)
        
//     } 
//     } myPattern(5);

    


// Peramid ///////Triangle


// function triangle (row){
//     for (i=1; i<=row; i++){
//        let pattern = ""
    
    
//         for (j=1; j<=row-i; j++){
//             pattern += " "
//         } 
    
    
//         for (k=1; k<=i; k++){
//             pattern += "* "
//         }
    
//         console.log(pattern);
    
//     } 
// } 





// function inTriangle (row){


//     for (i=1; i<=row-i; i++){
//         let pattern = ""
     
     
//          for (j=1; j<=i; j++){
//              pattern += "*"
//          } 
     
     
//          for (k=1; k<=i; k++){
//              pattern += " "
//          }
     
//          console.log(pattern);
     
//      } 

// function inTriangle (row){
//         for (i=0; i<row; i++){
//            let pattern = " "
        
        
//             for (j=0; j<i; j++){
//                 pattern += " "
//             } 
        
        
//             for (k=0; k < i; k++){ 

//                 pattern += "* "
//             }
        
//             console.log(pattern);
        
//         } 
//     } inTriangle(5)

    
  

//    

   

// function numbers(row){
//     for (i=0; i<=row; i++){
//         let pattern = ""
     
     
//          for (j=0; j<i; j++){
//              pattern += i 
//          } 
    
    
//      console.log(pattern);
         
        
//      } 
// } numbers(5)

// function numbers(row){

//     let start = 1

//     for (i=0; i<=row; i++){
//         let pattern = ""
     
     
//          for (j=0; j<i-1; j++){
//              pattern += start
//              pattern += (" ")
//              start ++

//          } 
    
//          console.log(pattern);
     
         
        
//      } 
// } numbers(5)

// //////   just peramid stars

// function printPyramid(rows) {
//     for (let i = 1; i <= rows; i++) {
//       let pattern = '';
  
//       for (let j = 1; j <= rows - i; j++) {
//         pattern += ' ';
//         pattern += ""
//       } 
  
//       for (let k = 1; k <= 2 * i - 1; k++) {
//         pattern += '*';
//       }
  
//       console.log(pattern);
//     }
//   }
  
//   const numRows = 5;
//   printPyramid(numRows);












// with nambers left peramid



// function numbers2(row){

//     let start = 1



//     for (i=0; i<=row; i++)    { 
//         let pattern = ""
     
//     for (j=0; j<i-1; j++){
//              pattern += start
//              pattern += " "
//              start ++    } 
    
//          console.log(pattern); } 
// } 

// numbers2(5)





// for (let i = 0; i < rows; i++) {

//     pattern = ""
  
//   for (let j = 0; j < rows - i; j++) {
//     char += "*";
//   }
//   char += "\n";
// }
// console.log(pattern);





// function triangleNumber (row){

//     for (let i = 1; i <= row; i++) {

//         let pattern = ""
  
//         for (let j = 1; j <= row - i; j++) {
//           pattern += " ";
//         }
        
//         for (let k = 1; k <= 2 * i - 1; k++) {
        
        
//           pattern += k;
//           pattern + " "
          
//         }

//         console.log(pattern);
//       }

// } triangleNumber(5)

// Fib numbers /////////////////////////////////////////////////////////////////////////////////////

// function fib(index){
//     number = 0
//     for (i=0; i<=index; i++){
//         number += i;


//     } console.log(number);
// } fib(10) 

// array = [2, 4, 6];

 
//   for (i=0; i<=array.length; i++){
    
  
//       num = 0
//       num += i;
        
      
//   }  num = num / ((array.length / array.length / array.length));
//       console.log(num)



    //   console.log(array.length);/


//       array = [1, 2, 3];
      
 
//   for (i=0; i<=array.length; i++){
//     num = 0
//       num += i;
      
//         result = num / array.length;
  
      
//   }  


