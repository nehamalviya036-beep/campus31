

// ✅ Newsletter Alert
document.querySelector(".newsletter-form")
.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you for subscribing! 🎉");
});


// ✅ Animated Counter
const counters = document.querySelectorAll(".stat-box h2");

counters.forEach(counter => {

    const targetText = counter.innerText.replace(/\D/g,'');
    const target = +targetText;

    if(!target) return;

    counter.innerText = "0";

    const updateCounter = () => {
        const count = +counter.innerText;
        const increment = target / 100;

        if(count < target){
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target + "+";
        }
    };

    updateCounter();
});



