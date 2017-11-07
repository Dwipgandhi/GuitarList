/**
 * Created by Dell on 8/10/17.
 */

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        console.log(myObj);
        def();
    }
};
xhttp.open("GET", "guitardata1.json", true);
xhttp.send();
i = 0;
temp = document.getElementById('guitarpic');
temp1 = document.getElementById('prod_info');
temp2 = document.getElementById('ship_info');
temp3 = document.getElementById('cust_reviews');
function def() {
    temp.src= myObj.allProducts[i].image_path;
    temp1.innerHTML= myObj.allProducts[i].product_description;
    temp2.innerHTML= myObj.allProducts[i].shipping_details;
    temp3.innerHTML= myObj.allProducts[i].customer_reviews;
};
function next() {
    if ( i <  myObj.allProducts[i].image_path.length - 1 ){
        i++;
    }
    else {
        alert("There is no images");
    }
    def();
}
function prev() {
    if ( i == 0  ) {
        alert("There is no images");
    }
    else{
        i--;
    }
    def();
}
function prod_info() {
    temp1.innerHTML= myObj.allProducts[i].product_description;
}
function ship_info() {
    temp2.innerHTML= myObj.allProducts[i].shipping_details;
}
function cust_rev() {
    temp3.innerHTML= myObj.allProducts[i].customer_reviews;
}
function buy() {
    window.location.href= "signup.html";
    localStorage.setItem('local1',i);
}