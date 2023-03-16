// function van(){
//     let butan = +document.getElementById('scout').value;
//     let result = 0;
//     if(butan <=50){
//         result= butan*1678;
//     }
//     else if(butan <=100){
//         result =83900 + (butan-50)*1734;
//     }
//     else if (butan <=200){
//         result = 170600 + (butan-100)*2014;
//     }
//     else if (butan <=300){
//         result = 372000 + (butan-100)*2536;
//     }else if (butan <=400){
//         result = 625600 + (butan-100)*2834;
//     }else if (butan >400){
//         result = 909000 + (butan-100)*2536;
//     }
//     document.getElementById('result').value = result;
// }
// function van(){
//     let butan = +document.getElementById('scout').value;
//     let result = "";
//     switch (true) {
//         case (butan>0 && butan<=50) : {
//             result = butan*1678;
//             break;
//         }
//         case (butan>50 && butan<=100) : {
//             result =83900 + (butan-50) *1734;
//             break;
//         }
//         case (butan>100 && butan<=200) : {
//             result =170600 + (butan-100)*2014;
//             break;
//         }
//         case (butan>200 && butan<=300) : {
//             result = 372000 + (butan-200)*2536;
//             break;
//         }
//         case (butan>300 && butan<=400) : {
//             result = 625600 + (butan-300)*2834;
//             break;
//         }
//         case (butan>400) : {
//             result = 909000 + (butan-400)*2927;
//             break;
//     }
// }
//     document.getElementById('result').value = result;
// }
function van() {
    let butan = +document.getElementById('scout').value;
    let result =butan<0 ? alert("Nhập lại số"):
                butan<=50 ? butan*1678 :
                butan <=100 ?83900 + (butan-50) *1734 :
                butan <=200 ?170600 + (butan-100)*2014 :
                butan <=300 ?372000 + (butan-200)*2536 :
                butan <=400 ?625600 + (butan-300)*2834 :909000 + (butan-400)*2927
 document.getElementById('result').value = result;                             
}