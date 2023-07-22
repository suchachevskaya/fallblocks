$(document).ready(function () {
  const timeDuration = 10 * 1000 * 10;
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function generateBlocks() {
    let block = {};
    block.width = getRandomNumber(5, 5);
    block.height = getRandomNumber(5, 5);
    block.color = getRandomColor();
    return block;
  }

  $(".fallButton").click(function () {
    let block = generateBlocks();
    let newBlock = $('<div class="blocks"></div>');
    newBlock.css({
      width: block.width,
      height: block.height,
      "background-color": block.color,
      position: "absolute",
      left: getRandomNumber(0, $(".content").width() - block.width),
      top: getRandomNumber(0, $(".content").height() - block.height),
    });
    $(".content .blocks").last().after(newBlock);
    newBlock.animate(
      {
        height: getRandomNumber(25, 75),
        width: getRandomNumber(25, 75),
      },
      {
        step: function () {
          $(".this").css("marginTop", "100px");
        },

        timeDuration,
      }
    );
    newBlock.animate({top: '+=150px'}, 1000);
  });
  $(".evaporateButton").click(function () {
    $(".blocks").remove();
  });
});
