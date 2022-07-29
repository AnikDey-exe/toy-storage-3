AFRAME.registerComponent('markerhandler', {
    init: async function () {
      // Do something when component first attached.
      this.el.addEventListener("markerFound", () => {
        console.log('marker found');
        this.handleMarkerFound();
      });

      this.el.addEventListener("markerLost", () => {
        console.log('marker lost');
        this.handleMarkerLost();
      });
    },
    handleMarkerFound: function() {
        var buttonDiv = document.getElementById('button-div'); 
        buttonDiv.style.display = "flex";

        var summaryButton = document.getElementById('summary-btn');
        var orderButton = document.getElementById('order-btn');

        summaryButton.addEventListener("click", ()=> {
            swal({
                icon: 'warning',
                title: 'Order Summary',
                text: "Work in Progress",
            })
        });

        orderButton.addEventListener("click", ()=> {
            swal({
                icon: 'https://i.imgur.com/4NZ6uLY.jpg',
                title: 'Ordered Product!',
                text: "",
                timer: 2000,
                buttons: false
            })
        });
        
    },
    handleMarkerLost: function() {
        var buttonDiv = document.getElementById('button-div'); 
        buttonDiv.style.display = "none";
    }
});
