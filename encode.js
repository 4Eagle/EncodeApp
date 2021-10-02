const input = require('prompt-sync')({sigint: true}); //a easier method to take input in console


//giving every letter, symbol and digit a different value

var get = {
a : "153249",   
b : "425618",   
c : "512896",   
d : "256698",   
e : "651862",   
f : "465986",   
g : "738541",   
h : "268912",   
i : "645892",   
j : "634521",   
k : "514195",   
l : "826516",   
m : "062862",   
n : "268901",   
o : "591040",   
p : "794041",   
q : "158105",   
r : "359105",   
s : "581058",   
t : "854520",   
u : "782210",   
v : "479215",   
w : "021087",   
x : "848210",   
y : "636459",   
z : "154020",  
A : "956049",   
B : "135401",   
C : "408266",   
D : "093870",   
E : "038414",   
F : "938150",   
G : "439184",   
H : "329401",   
I : "245930",   
J : "919858",   
K : "709103",   
L : "048910",   
M : "941850",   
N : "038948",   
O : "894019",   
P : "041950",   
Q : "515934",   
R : "591051",   
S : "449101",   
T : "301594",   
U : "494851",   
V : "581089",   
W : "395105",   
X : "158360",   
Y : "158311",   
Z : "948573",
space : "034901",
comma : "512960",
dot : "995815",
qmark : "658331",
exMark : "518950",
line : "512851",
zero : "052910",
one : "341505",
two : "512964",
three : "856591",
four : "519964",
five : "960415",
six : "105590",
seven : "568241",
eight : "245015",
nine : "629670"
}

//variables for the encoding/decoding process

let
counterEnc,
counterDec = 0,
dec,
enc,
de = "\n Your decoded message is: ",
en = "\n Your encoded message is: ",
message;

//main function

const start = () => {
    console.log("\n\n Welcome to our encoding and decoding program!\n\n");
    //option menu
    const optionSelect = () => {
    console.log(" Type 'encode' to encode a message;\n Type 'decode' to decode a message.\n")
    let option = input(" ~: ");
    if(option == 'encode'){
        encoding();
    }
    else if(option == 'decode'){
    decoding();
    }
    else{
        console.log('\n Invalid credentials, try again!\n');
        optionSelect();
    }
}
    optionSelect();
}

//encoding function

const encoding = () => {
    en = " Your encoded message is: ";
    console.log("\n Type a message to be encoded!\n");
    message = input(" Message: ");

    //for loop that goes and check every letter and replace it with the value we defined earlier

    for(counterEnc = 0; counterEnc < message.length;counterEnc++){
        enc = message[counterEnc];
        if(enc == "a"){
           en += get.a;
        }
        else if(enc == "b"){
            en += get.b;
        }
        else if(enc == "c"){
            en += get.c;
        }
        else if(enc == "d"){
            en += get.d;
        }       
        else if(enc == "e"){
            en += get.e;
        }
        else if(enc == "f"){
            en += get.f;
        }
        else if(enc == "g"){
            en += get.g;
        }
        else if(enc == "h"){
            en += get.h;
        }
        else if(enc == "i"){
            en += get.i;
        }
        else if(enc == "j"){
            en += get.j;
        }
        else if(enc == "k"){
            en += get.k;
        }
        else if(enc == "l"){
            en += get.l;
        }
        else if(enc == "m"){
            en += get.m;
        }
        else if(enc == "n"){
            en += get.n;
        }
        else if(enc == "o"){
            en += get.o;
        }
        else if(enc == "p"){
            en += get.p;
        }
        else if(enc == "q"){
            en += get.q;
        }
        else if(enc == "r"){
            en += get.r;
        }
        else if(enc == "s"){
            en += get.s;
        }
        else if(enc == "t"){
            en += get.t;
        }
        else if(enc == "u"){
            en += get.u;
        }
        else if(enc == "v"){
            en += get.v;
        }
        else if(enc == "w"){
            en += get.w;
        }
        else if(enc == "x"){
            en += get.x;
        }
        else if(enc == "y"){
            en += get.y;
        }
        else if(enc == "z"){
            en += get.z;
        }
        else if(enc == "A"){
            en += get.A;
        }
        else if(enc == "B"){
            en += get.B;
        }
        else if(enc == "C"){
            en += get.C;
        }
        else if(enc == "D"){
            en += get.D;
        }       
        else if(enc == "E"){
           en += get.E;
        }
        else if(enc == "F"){
            en += get.F;
        }
        else if(enc == "G"){
            en += get.G;
        }
        else if(enc == "H"){
            en += get.H;
        }
        else if(enc == "I"){
            en += get.I;
        }
        else if(enc == "J"){
            en += get.J;
        }
        else if(enc == "K"){
            en += get.L;
        }
        else if(enc == "L"){
            en += get.L;
        }
        else if(enc == "M"){
            en += get.M;
        }
        else if(enc == "N"){
            en += get.N;
        }
        else if(enc == "O"){
            en += get.O;
        }
        else if(enc == "P"){
            en += get.P;
        }
        else if(enc == "Q"){
            en += get.Q;
        }
        else if(enc == "R"){
            en += get.R;
        }
        else if(enc == "S"){
            en += get.S;
        }
        else if(enc == "T"){
            en += get.T;
        }
        else if(enc == "U"){
            en += get.U;
        }
        else if(enc == "V"){
            en += get.V;
        }
        else if(enc == "W"){
            en += get.w;
        }
        else if(enc == "X"){
            en += get.X;
        }
        else if(enc == "Y"){
            en += get.Y;
        }
        else if(enc == "Z"){
            en += get.Z;
        }
        else if(enc == ","){
            en += get.comma;
        }
        else if(enc == "."){
            en += get.dot;
        }
        else if(enc == " "){
            en += get.space;
        }
        else if(enc == "-"){
            en += get.line;
        }
        else if(enc == "?"){
            en += get.qmark;
        }
        else if(enc == "!"){
            en += get.exMark;
        }
        else if(enc == "0"){
            en += get.zero;
        }
        else if(enc == "1"){
            en += get.one;
        }
        else if(enc == "2"){
            en += get.two;
        }
        else if(enc == "3"){
            en += get.three;
        }
        else if(enc == "4"){
            en += get.four;
        }
        else if(enc == "5"){
            en += get.five;
        }
        else if(enc == "6"){
            en += get.six;
        }
        else if(enc == "7"){
            en += get.seven;
        }
        else if(enc == "8"){
            en += get.eight;
        }
        else if(enc == "9"){
            en += get.nine;
        }
    } 

    //reuse the app function

    let reuse = () => {
    console.log(en += "\n\n Do you want to reuse the program?(yes/no)\n");
    let optionEnc = input(" ~: ");
    if(optionEnc == "yes"){
        start();
    }
    else if(optionEnc == "no"){
        console.log("\n Thanks for using our app!\n");
        return 0;
    }
    else{
        reuse();
    }
}
reuse();
}

//The decoding function

const decoding = () => {
    console.log("\n Type a message to be decoded!\n");
    message = input(" Message: ");
    de = "\n Your decoded message is: ";
    counterDec = 0;

    //for loop that goes and check every letter and replace it with the value we defined earlier

    for(counterEnc = 0; counterEnc < message.length;counterEnc++){
       
        //dec takes the value of every six digits and verify every if it is equal to any encoded letter/symbol/digit
       

        dec = message[counterDec] + message[counterDec + 1] + message[counterDec + 2] + message[counterDec + 3] + message[counterDec + 4] + message[counterDec + 5];
        if(dec == get.a){
            de += "a";
        } 
        else if(dec == get.b){
            de += "b";
        }
        else if(dec == get.c){
            de += "c";
        }
        else if(dec == get.d){
            de += "d";
        }       
        else if(dec == get.e){
            de += "e";
        }
        else if(dec == get.f){
            de += "f";
        }
        else if(dec == get.g){
            de += "g";
        }
        else if(dec == get.h){
            de += "h";
        }
        else if(dec == get.i){
            de += "i";
        }
        else if(dec == get.j){
            de += "j";
        }
        else if(dec == get.k){
            de += "k";
        }
        else if(dec == get.l){
            de += "l";
        }
        else if(dec == get.m){
            de += "m";
        }
        else if(dec == get.n){
            de += "n";
        }
        else if(dec == get.o){
            de += "o";
        }
        else if(dec == get.p){
            de += "p";
        }
        else if(dec == get.q){
            de += "q";
        }
        else if(dec == get.r){
            de += "r";
        }
        else if(dec == get.s){
            de += "s";
        }
        else if(dec == get.t){
            de += "t";
        }
        else if(dec == get.u){
            de += "u";
        }
        else if(dec == get.v){
            de += "v";
        }
        else if(dec == get.w){
            de += "w";
        }
        else if(dec == get.x){
            de += "x";
        }
        else if(dec == get.y){
            de += "y";
        }
        else if(dec == get.z){
            de += "z";
        }
        else if(dec == get.A){
            de += "A";
        }
        else if(dec == get.B){
            de += "B";
        }
        else if(dec == get.C){
            de += "C";
        }
        else if(dec == get.D){
            de += "D";
        }       
        else if(dec == get.E){
            de += "E";
        }
        else if(dec == get.F){
            de += "F";
        }
        else if(dec == get.G){
            de += "G";
        }
        else if(dec == get.H){
            de += "H";
        }
        else if(dec == get.I){
            de += "I";
        }
        else if(dec == get.J){
            de += "J";
        }
        else if(dec == get.K){
            de += "K";
        }
        else if(dec == get.L){
            de += "L";
        }
        else if(dec == get.M){
            de += "M";
        }
        else if(dec == get.N){
            de += "N";
        }
        else if(dec == get.O){
            de += "O";
        }
        else if(dec == get.P){
            de += "P";
        }
        else if(dec == get.Q){
            de += "Q";
        }
        else if(dec == get.R){
            de += "R";
        }
        else if(dec == get.S){
            de += "S";
        }
        else if(dec == get.T){
            de += "T";
        }
        else if(dec == get.U){
            de += "U";
        }
        else if(dec == get.V){
            de += "V";
        }
        else if(dec == get.W){
            de += "W";
        }
        else if(dec == get.X){
            de += "X";
        }
        else if(dec == get.Y){
            de += "Y";
        }
        else if(dec == get.Z){
            de += "Z";
        }
        else if(dec == get.comma){
            de += ",";
        }
        else if(dec == get.dot){
            de += ".";
        }
        else if(dec == get.space){
            de += " ";
        }
        else if(dec == get.line){
            de += "-";
        }
        else if(dec == get.qmark){
            de += "?";
        }
        else if(dec == get.exMark){
            de += "!";
        }
        else if(dec == get.zero){
            de += "0";
        }
        else if(dec == get.one){
            de += "1";
        }
        else if(dec == get.two){
            de += "2";
        }
        else if(dec == get.three){
            de += "3";
        }
        else if(dec == get.four){
            de += "4";
        }
        else if(dec == get.five){
            de += "5";
        }
        else if(dec == get.six){
            de += "6";
        }
        else if(dec == get.seven){
            de += "7";
        }
        else if(dec == get.eight){
            de += "8";
        }
        else if(dec == get.nine){
            de += "9";
        }
        counterDec += 6; //counterDec is just a iteration variable to verify every 6 digit set of numbers
    } 
    console.log(de);
    let reused = () => {
        console.log("\n\n Do you want to reuse the program?(yes/no)\n")
        let optionEnc = input(" ~: ");
        if(optionEnc == "yes"){
            start();
        }
        else if(optionEnc == "no"){
            console.log("\n Thanks for using our app!\n");
            return 0;
        }
        else{
            reused();
        }
    }
    reused();
}

;












start();