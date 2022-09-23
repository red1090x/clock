setInterval(() => {
  let a = new Date();
  let time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
  let d = a.toLocaleDateString();
  document.getElementById("time").innerHTML = "\t" + time;
}, 1000);

setInterval(() => {
  let b = new Date();
  let d = b.toLocaleDateString();
  document.getElementById("date").innerHTML = "\t" + d;
}, 1000);
