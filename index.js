//gets the value of the input of the name and order
var cName = document.getElementById("name")
var cOrder = document.getElementById("order")

//gets the ids of the two buttons on the page
var aBtn = document.getElementById('add')
var sBtn = document.getElementById('cserved')

//who was served
var served  = document.getElementById("served")
served.style.display = "none"

//table vars
var table = document.getElementById('myTable')

//get rows of table

var error = document.getElementById('no')

//represents the orders 
var queue = []



//event listeners   
aBtn.addEventListener("click", addOrder, false)
sBtn.addEventListener("click", customerServed, false)

//adds customer and order to queue
function addOrder(){

var obj = {

    name : cName.value,
    order : cOrder.value
}

no.style.display="none"
//insert new row into our table
let row = table.insertRow(-1) 
//insert cells within our row
let cell1 = row.insertCell(-1);
let cell2 = row.insertCell(-1);
let cell3 = row.insertCell(-1);

//add text to our cells
cell1.innerHTML = queue.length + 1
cell2.innerHTML = obj.name
cell3.innerHTML = obj.order

queue.push(obj)//push obj to queue


//remove the no customer warning
//get current size of queue
//add an additional row
//add current order to page

}

function customerServed(){

    //remove the last item from array and assign it to a variable
    var customer = queue.shift()
    
    //removes the last row from the table
    table.rows.length > 2 ? table.deleteRow(2) : null

    //displays who was served 
    

        served.style.display = ""
        served.innerHTML = customer.name + " was served " + customer.order
        window.setTimeout(function(){
    
            served.style.display = "none"
        }, 2000)   
    


    
    //corrects the position of queue
    reNumber()

    //display "there are no more customers in line msg" if rows == 2
    if(table.rows.length == 2){

       no.style.display = ""
    }
    
}

//renumbers the position of customers
function reNumber(){

    
    //get the current rows
    var rows = document.getElementsByTagName("tr")

    if(rows.length > 2){

        //re number positions of customers 
       for(var i = 2; i < rows.length; i++){
        
    //since i starts from 2 we need to sub 1 to get correct number
    rows[i].children[0].innerHTML = i -1
            
        }

    }

    else{   

        return;
    }
        
       
}

