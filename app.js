const data = [
  {
    username: "jp",
    password: "jp@2481",
  },
  {
    username: "am",
    password: "am@2481",
  },
  {
    username: "km",
    password: "km@2481",
  },
  {
    username: "nm",
    password: "nm@2481",
  },
  {
    username: "as",
    password: "as",
  },
];

const userName = document.querySelector(".username");
const password = document.querySelector(".password");
const btnLogin = document.querySelector(".btnLogin");

const tmr = document.querySelector(".tmr");

const msg = document.querySelector(".msg");

const labelTimer = document.querySelector(".label__timer");

const startLogoutTimer = function () {
  let time = 5;
  const setInt = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);

    const sec = String(time % 60).padStart(2, 0);

    labelTimer.textContent = `${min}:${sec}`;
    time--;

    if (time < 0) {
      clearInterval(timer);
      msg.style.display = "none";
      tmr.style.display = "none";
    }
  };
  setInt();
  const timer = setInterval(setInt, 1000);
};

btnLogin.addEventListener("click", function () {
  const uName = userName.value;
  const pass = password.value;

  data.forEach(function (entry) {
    if (uName === entry.username && pass === entry.password) {
      startLogoutTimer();
      tmr.style.display = "block";
      msg.style.display = "block";
    }
  });
  userName.value = "";
  password.value = "";
});
