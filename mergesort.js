const prompt=require("prompt-sync")();
let myarray=[100];
let arr_size
arr_size=prompt("How many input need: ");
console.log("Enter "+arr_size+" elements: ");
for(let i=0;i<arr_size;i++){
    myarray[i]=prompt();
}
mergesort(myarray,0,(arr_size-1));
console.log("After Sorting: ");
for(let i=0;i<arr_size;i++){
    console.log(myarray[i]+" ");
}
function merge(arr=[],l,m,r){
let i=l;
let j=m+1;
let k=l;
let temp=[5];
while(i<=m&&j<=r){
    if(arr[i]<=arr[j]){
        temp[k]=arr[i];
        i++;
        k++;
    }
    else{
        temp[k]=arr[j];
        j++;
        k++;
    }
}
while(i<=m){
    temp[k]=arr[i];
    i++;
    k++;
}
while(j<=r){
    temp[k]=arr[j];
    j++;
    k++;
}
for(let p=l; p<=r;p++){
    arr[p]=temp[p];
}
}
function mergesort(arr=[],l,r){
    if(l<r){
        let m=parseInt((l+r)/2);
        mergesort(arr,l,m);
        mergesort(arr,m+1,r);
        merge(arr,l,m,r);
    }
}
