// qus 1
// var arr=[[9,6,1],
//          [10,15,25],
//          [7,5,30]] ;
        
// for(var i=0; i<arr.length ;i++){
//     for(var j=0;j<arr.length;j++){
//         if(arr[i][j]%3==0 && arr[i][j]%5==0){
//             console.log(arr[i][j])
//         }
//     }
// }


// qus=2
// var arr=[[1,2,3],
//          [4,5,6],
//          [7,8,9]];

// var sumdio1=0;
// var sumdio2=0;
// var bordersum=0;
// for(var i=0; i<arr.length; i++){
//     for(var j=0; j<arr.length;j++){
//         if(i==j){
//             sumdio1=sumdio1+arr[i][j];
//         }
//     }
// }

// for(var i=0; i<arr.length; i++){
//     for(var j=0; j<arr.length;j++){
//        if(i+j==arr.length-1){
//            sumdio2=sumdio2+arr[i][j];
//        }
//     }
// }

// for(var i=0; i<arr.length; i++){
//     for(var j=0; j<arr.length;j++){
//         if(i==0 || j==0 || i==arr.length-1 || j==arr.length-1){
//             bordersum=bordersum+arr[i][j];
//         }
//     }
// }

// var totalsum=sumdio1+sumdio2;

// if(bordersum>totalsum){
//     console.log(bordersum-totalsum);
// }else if(bordersum<totalsum){
//     console.log(totalsum-bordersum);
// }
