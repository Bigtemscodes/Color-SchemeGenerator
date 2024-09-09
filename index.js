const colorDropdown = document.getElementById("color");
const gcsBtn = document.getElementById("button");
const colorSelector = document.getElementById("get-color");
const gocCodes = document.getElementById("color-code");
const colorSelect = document.getElementById("color-select");
gcsBtn.addEventListener("click", function () {
  let pickColor = colorSelector.value.slice(1);
  let dropDown = colorDropdown.value;
  console.log(pickColor);
  console.log(dropDown);
  let url = `https://www.thecolorapi.com/scheme?hex=${pickColor}&mode=${dropDown}&count=5`;
  console.log(url);
  fetch(url, {
    headers: {
      "content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let cd = data.colors;
      let emptyColorString = ``;
      let colorCodeString = ``;

      for (let i = 0; i < cd.length; i++) {
        emptyColorString += `<div class="colors" style="background-color: ${cd[i].hex.value};"></div>`;
        colorCodeString += `<div>${cd[i].hex.value}</div>`;
      }
      gocCodes.innerHTML = colorCodeString;
      console.log(emptyColorString);
      colorSelect.innerHTML = emptyColorString;
    });
});
