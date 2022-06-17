check();

function check() {
    let num=+prompt('Enter a number');
    let flag = true;
    if (num < 2) {
        flag=false;
    } else if (num == 2) {
        flag=true;
    }else if ( num % 2 == 0){
        flag=false;
    }
    else {
        for(let i=2; i<num; i++){
            if(num%i==0){
                flag=false;
            }else {
                flag=true;
            }
        }
    }
    if(flag==true){
        alert(num + ' là số nguyên tố');
    }else {
        alert(num + ' không là số nguyên tố');
    }
}