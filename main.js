let question = document.querySelectorAll(".question");

question.forEach(function (item, index) {
  item.onclick = function () {
    question.forEach(function (_item, _index) {
      if (index !== _index) _item.classList.remove("active");
    });
    item.classList.toggle("active");
  };
});
