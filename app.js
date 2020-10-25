const logo = document.querySelectorAll("#logo path");

console.log(logo);
battstatus = async () => {
  stat = await window.navigator.getBattery();
  console.log(stat);
};
battstatus();
for (i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
setTimeout(function () {
  window.location.href =
    "file:///C:/Users/goels/Desktop/Text-Animation/hacktober.html";
}, 5000);

// Mode Switching - Dark Mode -Light Mode
function color_change(){
    body = document.getElementById('body')
    var currentClass = body.className;
    body.className = currentClass == "light-mode" ? "dark-mode" : "light-mode";
}


// Changing Text of Mode Switch Button
function changeText(el, dText, nText) {
  var content = "",
    context = "";

  // Change button text according to current text
  function setText() {
    return content === dText ? nText : dText;
  }

  /* Check to see if the browser accepts textContent */
  if ("textContent" in document.body) {
    context = "textContent";
    content = el[context];
  } else {
    content = el.firstChild.nodeValue;
  }

  /* Set button text */
  if (context === "textContent") {
    el.textContent = setText();
  } else {
    el.firstChild.nodeValue = setText();
  }
}

var defaultText, substituteText, btn;

defaultText = "LIGHT MODE";
substituteText = "DARK MODE";
btn = document.querySelector(".button");

// Listener for Mode Switch Button
btn.addEventListener(
  "click",
  function () {
    changeText(this, defaultText, substituteText);
  },
  false
);


// Mouse Hover over Text Animation
(function () {
    const link = document.querySelectorAll(".hover-this");
    const cursor = document.querySelector(".cursor");

    const animateit = function (e) {
      const span = this.querySelector("span");
      const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,
        move = 25,
        xMove = (x / width) * (move * 2) - move,
        yMove = (y / height) * (move * 2) - move;

      span.style.transform = `translate(${xMove}px, ${yMove}px)`;

      if (e.type === "mouseleave") span.style.transform = "";
    };

    const editCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
    };

    link.forEach((b) => b.addEventListener("mousemove", animateit));
    link.forEach((b) => b.addEventListener("mouseleave", animateit));
    window.addEventListener("mousemove", editCursor);
  })();
