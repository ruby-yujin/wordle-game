//정답
const anwser = "APPLE";

let trycount = 0;
let index = 0;
let timer;

function appStart() {
  const displayGameover = () => {
    const div = document.createElement("div");
    div.innerText = "게임이 종료됐습니다.";
    div.style =
      "display:flex; justify-content:center; align-items:center; position:absolute; top:40vh; left:38%; background-color:white; width:200px; height:100px;";
    document.body.appendChild(div);
  };

  const gameover = () => {
    window.removeEventListener("keydown", handleKeydown);
    displayGameover();
    clearInterval(timer);
  };

  //다음라인
  const nextLine = () => {
    if (trycount === 6) return gameover();
    trycount += 1;
    index = 0;
  };

  //정답확인
  const handleEnterKey = () => {
    let correctText = 0;

    for (let i = 0; i < 5; i++) {
      const block = document.querySelector(
        `.board-block[data-index='${trycount}${i}']`
      );

      const writeText = block.innerText;
      const correctText = anwser[i];

      if (writeText === correctText) block.style.background = "#6aaa64";
      else if (anwser.includes(writeText)) block.style.background = "#C9B458";
      else block.style.background = "#555555";
      block.style.color = "#ffffff";
    }
    if (correctText === 5) gameover();
    else nextLine();
  };

  const handleBackspace = () => {
    // * 로직
    if (index > 0) {
      const preBlock = document.querySelector(
        `.board-block[data-index='${trycount}${index - 1}']`
      );
      preBlock.innerText = "";
    }
    if (index !== 0) index -= 1;
  };

  const handleKeydown = (event) => {
    const key = event.key;
    const keyCode = event.keyCode;
    const thisBlock = document.querySelector(
      `.board-block[data-index='${trycount}${index}']`
    );

    // * 로직
    if (event.key === "Backspace") handleBackspace();
    else if (index === 5) {
      if (event.key === "Enter") handleEnterKey();
      else return;
    } else if (65 <= keyCode && keyCode <= 90) {
      thisBlock.innerText = key;
      index += 1;
    }
  };

  const startTimer = () => {
    const startTime = new Date();

    function setTime() {
      const currentTime = new Date();
      const doingTime = new Date(currentTime - startTime);
      const min = doingTime.getMinutes().toString().padStart(2, "0");
      const sec = doingTime.getSeconds().toString().padStart(2, "0");
      const timeDiv = document.querySelector("#timer");
      timeDiv.innerText = `${min}:${sec}`;
    }

    timer = setInterval(setTime, 1000);
  };

  startTimer();
  window.addEventListener("keydown", handleKeydown);
}

appStart();
