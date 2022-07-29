AFRAME.registerComponent('addbtn', {
    init: function () {
        var button = document.createElement("button"); 
        button.innerHTML = "Order Summary"; 
        button.setAttribute('id', 'summary-btn'); 
        button.setAttribute("class", "btn btn-danger ml-3 mr-3");

        var button2 = document.createElement("button"); 
        button2.innerHTML = "Order Now"; 
        button2.setAttribute('id', 'order-btn'); 
        button2.setAttribute("class", "btn btn-danger ml-3");

        var buttonDiv = document.getElementById('button-div'); 
        buttonDiv.appendChild(button);
        buttonDiv.appendChild(button2);
    }
})