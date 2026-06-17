const bulb = document.getElementById("bulb");
const glow = document.getElementById("glow");
const toggleSwitch = document.getElementById("toggleSwitch");
const statusText = document.getElementById("status");

toggleSwitch.addEventListener("change", () => {

    if(toggleSwitch.checked){

        bulb.classList.add("on");
        glow.classList.add("active");

        statusText.textContent = "Light is ON 💡";

    }else{

        bulb.classList.remove("on");
        glow.classList.remove("active");

        statusText.textContent = "Light is OFF";
    }
});