var elText = document.querySelector(".text");
var elRes = document.querySelector(".res");
var elStartBtn = document.querySelector(".start-btn");

var userName = prompt("Ismingizni kiriting: ", "Bunyodjon");
elText.textContent += userName;

var testStart = confirm("Testni boshlashga tayyormisiz...?");
var result = 0;

elStartBtn.addEventListener("click", () => {
  window.location.reload();
});

if (testStart) {
  var quiz1 = prompt(`1-savol
  Css'ni necha usulda html file'ga ulash mumkin...?
  A) 2 xil
  B) 3 xil
  C) 4 xil`);
  var quiz2 = prompt(`2-savol
  JavaScript'da necha xil ma'lumot turlari bor...?
  A) 5 xil
  B) 7 xil
  C) 8 xil`);
  var quiz3 = prompt(`3-savol
  JavaScript'da o'zgaruvchi nomini qanday nom bilan boshlab bo'lmaydi...?
  A) Bosh harf bilan
  B) Raqam bilan
  C) _ (Dash) bilan`);
  var quiz4 = prompt(`4-savol
  Div tag'i qanday tag...?
  A) Block
  B) Inline
  C) TJY`);
  var quiz5 = prompt(`5-savol
  JavaScript nima...?
    A) Dasturlash tili
    B) Dasturlash tili emas 
    C) TJY`);

  if (quiz1 == "b" || quiz1 == "B") {
    result++;
  } else if (quiz2 == "c" || quiz2 == "C") {
    result++;
  } else if (quiz3 == "b" || quiz3 == "B") {
    result++;
  } else if (quiz4 == "a" || quiz4 == "A") {
    result++;
  } else if (quiz5 == "a" || quiz1 == "A") {
    result++;
    elRes.textContent = `Testlar soni: 5 ta,
    To'g'ri javoblar soni: ${result},
    Noto'g'ri javoblar soni: ${5 - result}`;
    console.log(elRes.textContent);
  }
} else {
  elRes.textContent = `${userName} testni boshlash uchun pastdagi tugmaga bosing:)`;
  console.log(elRes.textContent);
}
