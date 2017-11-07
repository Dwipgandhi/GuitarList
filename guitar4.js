/**
 * Created by Dell on 8/11/17.
 */
z = localStorage.getItem('local1');
first = localStorage.getItem('local2');
last = localStorage.getItem('local3');
credit = localStorage.getItem('local4');
email2 = localStorage.getItem('local5');

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        def();
    }
};
xhttp.open("GET", "guitardata1.json", true);
xhttp.send();

temp = document.getElementById('guitarpic');
temp1 = document.getElementById('prod_info');
temp2 = document.getElementById('ship_info');
temp3 = document.getElementById('cust_reviews');
function def() {
    temp.src= myObj.allProducts[z].image_path;
    temp1.innerHTML= myObj.allProducts[z].product_description;
    temp3.innerHTML="Your Order number is:" + Math.floor(Math.random()*1000) + "<br>" + "Your Details:" + "<br>" + "Firstname:" + first + "<br>" + "Lastname:" +  last + "<br>" + "Creit-card Number:" + credit + "<br>" + "Email-ID:" + email2 ;
};
function gotoHome() {
    window.location.href='guitarlist.html';
}