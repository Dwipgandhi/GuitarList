/**
 * Created by Dell on 8/10/17.
 */
x = localStorage.getItem('local1');
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
    temp.src= myObj.allProducts[x].image_path;
    temp1.innerHTML= myObj.allProducts[x].product_description;
};

document.getElementById('buyItem').style.visibility='hidden';
function gotoreview(){
    checkfName();
    checklName();
    checkCard();
    checkEmail();
    document.getElementById('buyItem').style.visibility='visible';
    function checkfName() {
        firstname = document.getElementById("firstname").value;
        if( firstname=="" || ( !isNaN(firstname) ) ){
            document.getElementById("firstname").style.backgroundColor = 'red';
            document.getElementById("firstname").value = "";
            alert("Please enter valid firstname:");
        }
        else{
            fname = document.getElementById("fname");
            fname.innerHTML = "Firstname:" +  " " + firstname + "<br>";
        }
        document.getElementById("firstname").value = null;
    }
    function checklName() {
        lastname = document.getElementById("lastname").value;
        if( lastname=="" || ( !isNaN(lastname) ) ){
            document.getElementById("lastname").style.backgroundColor = 'red';
            document.getElementById("lastname").value = "";
            alert("Please enter valid lastname:");
        }
        else{
            lname = document.getElementById("lname");
            lname.innerHTML = "Lastname:" +  " " + lastname + "<br>";
        }
        document.getElementById("lastname").value = null;
    }
    function checkCard() {
        cardnum = document.getElementById("card").value;
        if( cardnum=="" || ( isNaN(cardnum)) ){
            document.getElementById("card").style.backgroundColor = 'red';
            document.getElementById("card").value = "";
            alert("Please enter valid cardnumber:");
        }
        else{
            card1 = document.getElementById("carddet");
            card1.innerHTML = "Card Card Details:" +  " " + cardnum+ "<br>";
        }
        document.getElementById("card").value = null;
    }
    function checkEmail() {
        email = document.getElementById("email").value;
        atpos = email.indexOf("@");
        dotpos = email.lastIndexOf(".");
        if( email=="" || atpos<1 || dotpos < atpos+2 || dotpos+2 >= email.length ){
            document.getElementById("email").style.backgroundColor = 'red';
            document.getElementById("email").value = "";
            alert("Please enter valid email:");
        }
        else{
            email1 = document.getElementById("email1");
            email1.innerHTML = "Email:" +  " " + email+ "<br>";
        }
        document.getElementById("email").value = null;
    }
}
function edit1() {
    document.getElementById("buyItem").style.visibility = 'hidden';
    document.getElementById("firstname").value= firstname;
    document.getElementById("lastname").value= lastname;
    document.getElementById("card").value = cardnum;
    document.getElementById("email").value = email;
}
function buyItem1() {
    window.location.href= "final.html";
    localStorage.setItem('local2',firstname);
    localStorage.setItem('local3',lastname);
    localStorage.setItem('local4',cardnum);
    localStorage.setItem('local5',email);
}