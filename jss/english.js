function check() {
    var c = 0;
    var message;
    var message2;
    message = 'Correct!';
    message2 = 'Incorrect! Try Again!'
    var q1=document.englishtemp.question1.value;
    if (q1="Washing Machine") {c++;}
    if (c==1) {document.write(message);}
    else {document.write(message2)}
}
