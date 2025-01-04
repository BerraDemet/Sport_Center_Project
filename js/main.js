//Variables
const classesImg = document.querySelector("#classes-img");
const classesH2 = document.querySelector(".classesH2");
const classesSecondH2 = document.querySelector(".classesSecondH2");
const classesP = document.querySelector("#classesP");
const classesBtns = document.querySelector("#classes-buttons")
const buttons = document.querySelectorAll('#classes-buttons button');
const classesItemOne = document.querySelector(".classes-item-one");
const classesItemTwo = document.querySelector(".classes-item-two");
const classesItemThree = document.querySelector(".classes-item-three");
const bmiInfo = document.querySelector("#bmi-info")

const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const arrow = document.querySelector(".arrow");

const hamburger = document.querySelector('.hamburger-icon');
const links = document.querySelector('.links');

//Functions
function changeToGroup() {
    classesImg.src = "./img/group.webp";
    classesH2.textContent = "Group";
    classesSecondH2.textContent = "Group";
    classesP.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit. Sagittis vulputate conubia dui venenatis turpis, ipsum libero. Lectus etiam vulputate penatibus pellentesque "
    classesItemOne.textContent = "Saturday-Sunday: 9:00am - 10:00am";
    classesItemTwo.textContent = "Monday-Tuesday: 11:00am - 01:00pm";
    classesItemThree.textContent = "Wednesday-Friday: 2:00pm - 4:00pm";
}
function changeToSolo() {
    classesImg.src = "./img/solo.jpg";
    classesH2.textContent = "Solo";
    classesSecondH2.textContent = "Solo";
    classesP.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit. Velit quisque feugiat ipsum, varius adipiscing magna nibh lacinia. Duis mauris ipsum diam molestie leo mattis amet felis turpis. Fusce vivamus adipiscing hac porttitor efficitur. "
    classesItemOne.textContent = "Saturday-Sunday: 8:00am - 10:00am";
    classesItemTwo.textContent = "Monday-Tuesday: 3:00pm - 5:00pm";
    classesItemThree.textContent = "Wednesday-Friday: 11:00am - 1:00pm";
}
function changeToStretching() {
    classesImg.src = "./img/stret.webp";
    classesH2.textContent = "Stretching";
    classesSecondH2.textContent = "Stretching";
    classesP.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit. Ad erat leo est mus phasellus? Ullamcorper id placerat bibendum cubilia molestie netus ullamcorper. Ad lacinia netus netus amet elit mattis vel. Senectus class ornare rhoncus urna eleifend quis platea laoreet. Mollis consectetur est luctus elementum magna. Praesent at sapien himenaeos lorem.";
    classesItemOne.textContent = "Saturday-Sunday: 8:00am - 9:00am";
    classesItemTwo.textContent = "Monday-Tuesday: 5:00pm - 7:00pm";
    classesItemThree.textContent = "Wednesday-Friday: 12:00am - 2:00pm";
}
function changeToYoga() {
    classesImg.src = "./img/yoga.jpg";
    classesH2.textContent = "Yoga";
    classesSecondH2.textContent = "Yoga";
    classesP.textContent = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt alias laborum nemo, dolor ex facilis corrupti quod magni natus itaque blanditiis deleniti fugiat sed, excepturi eum inventore in voluptates cum.ssTemporibus ipsa et obcaecati. Expedita veniam ";
    classesItemOne.textContent = "Saturday-Sunday: 8:00am - 10:00am";
    classesItemTwo.textContent = "Monday-Tuesday: 10:00am - 12:00pm";
    classesItemThree.textContent = "Wednesday-Friday: 3:00pm - 6:00pm";
}
weight.addEventListener("input", () => {
    let bmi = weight.value / ((height.value / 100) ** 2);
    let position;

    if (bmi < 18.5) {
        position = 110;
    } else if (bmi >= 18.5 && bmi < 25) {
        position = 110 + (bmi - 18.5) * (200 - 110) / (25 - 18.5);
    } else if (bmi >= 25 && bmi < 30) {
        position = 200 + (bmi - 25) * (300 - 200) / (30 - 25);
    } else {
        position = 300 + (bmi - 30) * (495 - 300) / (40 - 30);
    }

    bmiInfo.textContent = bmi.toFixed(1);
    position = Math.max(110, Math.min(position, 495));
    arrow.style.left = `${position}px`;
});

//Event listeners 

classesBtns.addEventListener("click", function (event) {
    const id = event.target.id;
    switch (id) {
        case "yoga":
            changeToYoga();
            break;
        case "group":
            changeToGroup();
            break;
        case "solo":
            changeToSolo();
            break;
        case "stretching":
            changeToStretching();
            break;
        default:
            return;
    }
})



buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};


hamburger.addEventListener('click', () => {
    links.classList.toggle('active');
});