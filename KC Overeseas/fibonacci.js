// first n nos
function printFibonacci(n){
    let p1 = 0, p2 = 1;
    console.log(0)
    if (n < 1) return 0;
    for(let i = 1; i< n; i++){
        console.log(p2 + " ");
        let  next = p1 + p2; 
        p1 = p2;
        p2 = next;
    }       
}
