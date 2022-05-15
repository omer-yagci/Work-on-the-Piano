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
const white = document.querySelector(".key");
document.q;
console.log(white);

window.addEventListener("keydown", (event) => {
  let el = event.code;
  let elCode = event.keyCode;

  switch (el) {
    case "KeyA": {
      a.play();
      white.classList.toggle("active");

      console.log("ömer");
      break;
    }
    case "KeyS": {
      s.play();
      white.classList.toggle("active");

      console.log("ömer2");
      break;
    }
    case "KeyD": {
      d.play();

      break;
    }
    case "KeyF": {
      f.play();

      break;
    }
    case "KeyG": {
      g.play();
      break;
    }
    case "KeyH": {
      h.play();
      break;
    }
    case "KeyJ": {
      j.play();
      break;
    }
    case "KeyK": {
      k.play();

      break;
    }
    case "KeyL": {
      l.play();
      break;
    }
    case "KeyI": {
      ı.play();
      break;
    }
    case "KeyO": {
      o.play();
      break;
    }
    case "KeyE": {
      e.play();
      break;
    }
    case "KeyR": {
      r.play();
      break;
    }
  }
});
