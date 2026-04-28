// let el = document.querySelector(".our-element");
// el.addEventListener("click", function () {
//   el.nextElementSibling.remove();
//   let el_1 = document.createElement("div");
//   el_1.className = "Start";
//   el_1.title = "Start Element";
//   el_1.setAttribute("data-value", "Start");
//   el_1.textContent = "Start";
//   let el_2 = document.createElement("div");
//   el_2.className = "End";
//   el_2.title = "End Element";
//   el_2.setAttribute("data-value", "End");
//   el_2.textContent = "End";
//   el.prepend(el_1);
//   el.append(el_2);
// });

/* 

<div class="start" title="Start Element" data-value="Start">Start</div>
<div class="our-element">Our Element</div>
<div class="end" title="End Element" data-value="End">End</div>

*/

// let ele = document.querySelector("div span");
// console.log(ele.lastChild.textContent.trim());

// document.addEventListener("click", function (e) {
//   console.log(`This is ${e.target.tagName}`);
// });

/*
? هنا بقا حبت معلمومات جباره  عرفتها اول  انا لام في حاجه في Add Remove لازم تحدث النتيجه بتاعتك
*/
// let Currnt = document.querySelector("[title='Current']");
// let classesList = document.querySelector(".classes-list div");
// function updateUi() {
//   //? عملت فاكشن وظيبفتها انها تعمل ليا check علي العصنر
//   // ? هنا اول حاجه عملت rest لي العصنر الي هظهر في النتيجه
//   classesList.innerHTML = "";
//   if (Currnt.classList.length === 0) {
//     //? هنا اناقلولته لو عدد  الكلاس 0 اطبع دي
//     classesList.textContent = "This Element Has No Class";
//   } else {
//     //? ولو غير كده ادهل هنا
//     Currnt.classList.forEach(function (e) {
//       // ? هنا انا استخدمت foreash عشان و اليوز  كتب تكتر من كلمه
//       let span = document.createElement("span"); //? عملت span الي هيكون فيها النتيجه عشان كل مره يتكتب فيها النتيحه الجديده
//       span.textContent = e.toLowerCase();
//       classesList.appendChild(span);
//     });
//   }
// }

// window.addEventListener("load", updateUi); // ? هنا انا  شغلت الفانكس اول اما تحميل للصفحه

// let inputadd = document.querySelector(".classes-to-add"); //? هنا بقا انا ندهت علي الحقل بتاع الاضافه بتاعتي
// inputadd.addEventListener("blur", function () {
//   let inputval = inputadd.value.trim().split(" "); //? بعد كده قولتله لو الوز ردخل كلمه فيها مسافاخ اعبتر كل كلمه لوحدها
//   inputval.forEach(function (el) {
//     //? لفيت عليهم بي foreash
//     if (el) Currnt.classList.add(el); //? بعد كده قولتله لو el true او من الاخر لو مكتوب فيها نتيجه  ضيف الي فيها
//   });
//   inputadd.value = ""; //? هناعشان او اطلع من الحقل بتاعتي الي فيه يضاف ويتمسح من الحثل
//   updateUi(); //? وهنا عشان اعمل uprate للنتيجه بتاعت وتظهر في الصفحه
// });

// let inputremove = document.querySelector(".classes-to-remove");
// inputremove.addEventListener("blur", function () {
//   let inputval = inputremove.value.trim().split(" ");
//   inputval.forEach(function (el) {
//     if (el) Currnt.classList.remove(el);
//   });
//   inputremove.value = ""; //? هناعشان او اطلع من الحقل بتاعتي الي فيه يضاف ويتمسح من الحثل
//   updateUi(); //? وهنا عشان اعمل uprate للنتيجه بتاعت وتظهر في الصفحه
// });

// let pro = prompt("“Print Number From – To”").split("-").map(Number).sort();
// console.log(pro);

// for (let i = pro[0]; i <= pro[1]; i++) {
//   console.log(i);
// }

// let counter = document.getElementById("counter");

// let set = setInterval(() => {
//   counter.innerHTML--;
//   if (counter.innerHTML === "0") {
//     clearInterval(set);
//   }
// }, 500);
// let counter = document.getElementById("counter");

// let set = setInterval(() => {
//   counter.innerHTML--;
//   if (counter.innerHTML === "0") {
//     window.open("https://elzero.org", "", "width=300,height=600");
//     clearInterval(set);
//   }
// }, 500);
let fontSelcet = document.querySelector("#fontselect");
let colorSelcet = document.querySelector("#colorselect");
let fontSize = document.querySelector("#fontsize");

fontfav();
colorfav();
fontsize();
function fontfav() {
  let fontfav = window.localStorage.getItem("fontSelcet");
  if (fontfav) {
    document.documentElement.style.setProperty(
      "--main-font",
      `'${fontfav}', sans-serif`,
    );
  }
  fontSelcet.value = fontfav || fontSelcet.value;
}
function colorfav() {
  let colorfav = window.localStorage.getItem("colorSelcet");
  if (colorfav) {
    document.documentElement.style.setProperty("--main-color", colorfav);
  }
  colorSelcet.value = colorfav || colorSelcet.value;
}
function fontsize() {
  let fontsize = window.localStorage.getItem("fontSize");
  if (fontsize) {
    document.documentElement.style.setProperty("--main-size", fontsize + "px");
  }
  fontSize.value = fontsize || fontSize.value;
}

fontSelcet.addEventListener("change", function () {
  document.documentElement.style.setProperty(
    "--main-font",
    `'${this.value}', sans-serif`,
  );
  window.localStorage.setItem("fontSelcet", this.value);
});
colorSelcet.addEventListener("change", function () {
  document.documentElement.style.setProperty("--main-color", this.value);
  window.localStorage.setItem("colorSelcet", this.value);
});

fontSize.addEventListener("change", function () {
  document.documentElement.style.setProperty("--main-size", this.value + "px");
  window.localStorage.setItem("fontSize", this.value);
});

let selcett = document.querySelector("form select");
let inputs = document.querySelectorAll("input");

window.addEventListener("DOMContentLoaded", () => {
  inputs.forEach((input) => {
    let saveval = window.sessionStorage.getItem(input.name);
    if (saveval) {
      input.value = saveval;
    }
  });
});

let saveselcet = window.sessionStorage.getItem("selct");
if (saveselcet) {
  selcett.value = saveselcet;
}
inputs.forEach((input) => {
  input.onblur = () => {
    let invalue = input.value;
    window.sessionStorage.setItem(input.name, invalue);
  };
});

selcett.addEventListener("change", (e) => {
  // console.log(e.target.value);
  let invalue = e.target.value;

  window.sessionStorage.setItem("selct", invalue);
});
