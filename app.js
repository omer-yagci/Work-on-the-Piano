function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("active");
}
function stopEffect(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!key) return;
  key.classList.remove("active");
}
window.addEventListener("keydown", playSound);
window.addEventListener("keyup", stopEffect);

// THIS IS MY FIRST JS CODE BLOCK FOR PIANO
/*
const a = document.querySelector("#A");
const s = document.querySelector("#S");
const d = document.querySelector("#D");
const f = document.querySelector("#F");
const g = document.querySelector("#G");
const h = document.querySelector("#H");
const j = document.querySelector("#J");
const k = document.querySelector("#K");
const l = document.querySelector("#L");
const ı = document.querySelector("#I");
const o = document.querySelector("#O");
const e = document.querySelector("#E");
const r = document.querySelector("#R");

const du = document.getElementById("du");
const re = document.getElementById("re");
const mi = document.getElementById("mi");
const fa = document.getElementById("fa");
const sol = document.getElementById("sol");
const la = document.getElementById("la");
const si = document.getElementById("doLa");
const faSol = document.getElementById("faSol");
const doRe = document.getElementById("doRe");
const doSi = document.getElementById("doSi");
const siFa = document.getElementById("siFa");
const laSi = document.getElementById("laSi");

window.addEventListener("keydown", (event) => {
  let el = event.code;

  switch (el) {
    case "KeyA": {
      a.play();
      du.parentNode.classList.toggle("active");
      break;
    }
    case "KeyS": {
      s.play();
      re.parentNode.classList.toggle("active");
      break;
    }
    case "KeyD": {
      mi.parentNode.classList.toggle("active");
      d.play();

      break;
    }
    case "KeyF": {
      fa.parentNode.classList.toggle("active");
      f.play();
      break;
    }
    case "KeyG": {
      sol.parentNode.classList.toggle("active");
      g.play();
      break;
    }
    case "KeyH": {
      la.parentNode.classList.toggle("active");
      h.play();
      break;
    }
    case "KeyJ": {
      si.parentNode.classList.toggle("active");
      j.play();
      break;
    }
    case "KeyK": {
      doLa.parentNode.classList.toggle("active");
      k.play();
      break;
    }
    case "KeyL": {
      faSol.parentNode.classList.toggle("active");
      l.play();
      break;
    }
    case "KeyI": {
      doRe.parentNode.classList.toggle("active");
      ı.play();
      break;
    }
    case "KeyO": {
      doSi.parentNode.classList.toggle("active");
      o.play();
      break;
    }
    case "KeyE": {
      siFa.parentNode.classList.toggle("active");
      e.play();
      break;
    }
    case "KeyR": {
      laSi.parentNode.classList.toggle("active");
      r.play();
      break;
    }
  }

  setTimeout(() => {
    du.parentNode.classList.remove("active");
    re.parentNode.classList.remove("active");
    mi.parentNode.classList.remove("active");
    fa.parentNode.classList.remove("active");
    sol.parentNode.classList.remove("active");
    la.parentNode.classList.remove("active");
    si.parentNode.classList.remove("active");
    doLa.parentNode.classList.remove("active");
    faSol.parentNode.classList.remove("active");
    doRe.parentNode.classList.remove("active");
    doSi.parentNode.classList.remove("active");
    siFa.parentNode.classList.remove("active");
    laSi.parentNode.classList.remove("active");
  }, 500);
});
*/
