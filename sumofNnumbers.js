function sum(num){
    if(num>0){
        return num + sum(num-1);
    }else{
        return num;
    }
}
var res = sum(6);
console.log(res);