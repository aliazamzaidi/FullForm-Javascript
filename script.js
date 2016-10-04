var name = prompt("Enter Your Name");
document.getElementById('myname').innerHTML=name;
var fname = prompt("Enter Your Father Name");
document.getElementById('fathername').innerHTML = fname;
var snum = prompt("Enter Your Seat Number");
document.getElementById('seatnumber').innerHTML = snum;
var html = prompt("Enter Your Marks in HTML");
var html2 = parseInt(html);
if (html2 < 60){
    document.getElementById('htmlmarks').innerHTML = html2 + " F";
}
else if (html2 < 70 && html2 >= 60){
    document.getElementById('htmlmarks').innerHTML = html2 + " C";
}
else if (html2 < 80 && html2 >= 70){
    document.getElementById('htmlmarks').innerHTML = html2 + " B";
}
else if (html2 < 90 && html2 >= 80){
    document.getElementById('htmlmarks').innerHTML = html2 + " A";
}
else if (html2 < 100 && html2 >= 90){
    document.getElementById('htmlmarks').innerHTML = html2 + " A+";
}
else {
    document.getElementById('htmlmarks').innerHTML = 100 + " A++";
}
var css1 = prompt("Enter Your Marks in CSS - 1");
var css12 = parseInt(css1);
if (css12 < 60){
    document.getElementById('css1marks').innerHTML = css12 + " F";
}
else if (css12 < 70 && css12 >= 60){
    document.getElementById('css1marks').innerHTML = css12 + " C";
}
else if (css12 < 80 && css12>= 70){
    document.getElementById('css1marks').innerHTML = css12 + " B";
}
else if (css12 < 90 && cssl2 >= 80){
    document.getElementById('css1marks').innerHTML = css12 + " A";
}
else if (css12 < 100 && cssl2 >= 90){
    document.getElementById('css1marks').innerHTML = css12 + " A+";
}
else {
    document.getElementById('css1marks').innerHTML = "Invalid";
}
var css2 = prompt("Enter Your Marks in CSS - 2");
var css22 = parseInt(css2);
if (css22 < 60){
    document.getElementById('css2marks').innerHTML = css22 + " F";
}
else if (css22 < 70 && css22 >= 60){
    document.getElementById('css2marks').innerHTML = css22 + " C";
}
else if (css22 < 80 && css22>= 70){
    document.getElementById('css2marks').innerHTML = css22 + " B";
}
else if (css22 < 90 && cssl2 >= 80){
    document.getElementById('css2marks').innerHTML = css22 + " A";
}
else if (css22 < 100 && cssl2 >= 90){
    document.getElementById('css2marks').innerHTML = css22 + " A+";
}
else {
    document.getElementById('css2marks').innerHTML = "Invalid";
}
var avg = (((html2+css12+css22)/300)*100);
document.getElementById('average').innerHTML = avg.toFixed(2);