// 1. (Select Elements)
        const display = document.getElementById("count");
        const button = document.getElementById("btn");
        const msg = document.getElementById("message");

        let currentCount = 0; // Starting value
        const limit = 10;     // max range

        // 2. after cich the button(Event Listener)
        button.addEventListener("click", function() {
            
            if (currentCount < limit) {
                currentCount = currentCount + 1; // 1-add
                display.innerText = currentCount; // screen visible
            } else {
                msg.innerText = "Limit reached (10)!"; // show msg
                button.disabled = true; // button stop method
            }
            
        });