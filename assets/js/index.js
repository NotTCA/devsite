var a = ["UCX6OQ3DkcsbYNE6H8uQQuVA"];
var num = 0;
var num2 = 0;

function datas() {
  fetch("https://estv4.mixerno.space/api/v1/get/" + a[0] + "")
    .then((res) => res.json())
    .then((data) => {
      num = Math.round(data.data.estCounts[0]);
    });

  fetch("https://estv4.mixerno.space/api/v1/get/" + a[1] + "")
    .then((res) => res.json())
    .then((data) => {
      num2 = Math.round(data.data.estCounts[0]);
    });
}

function render() {
  mrbeastCount.innerHTML = num;
}

setInterval(() => {
  datas();
  render();
}, 2000);
