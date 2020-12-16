const string = `
/* 仔意，🐟仔给你画个兔八哥 */
.container{
  position:relative;
  border: 1px solid red;
  left: 25px;
}
body {
  background-color: #FAE97F;
  width: 50%;
  margin: 100px auto;
}

/* 首先是脑袋 */
.head {
  width: 100px;
  height: 100px;
  background-color: #A7B0B5;
  border-radius: 50%;
  position: relative;
  z-index: 1;
}

.head2 {
  height: 50px;
  width: 110px;
  border-radius: 90px 90px 0 0;
  -moz-border-radius: 90px 90px 0 0;
  -webkit-border-radius: 90px 90px 0 0;
  background-color: white;
  transform: rotate(180deg);
  position: relative;
  z-index: 2;
  bottom: 50px;
  right: 10px
}

/* 然后是耳朵 */
.ear {
  height: 50px;
  width: 100px;
  border-radius: 90px 90px 0 0;
  -moz-border-radius: 90px 90px 0 0;
  -webkit-border-radius: 90px 90px 0 0;
  background-color: #A7B0B5;
  transform: rotate(90deg);
  position: relative;
  z-index: 2;
  bottom: 210px;
  left: 30px;
}

.inner-ear {
  height: 30px;
  width: 80px;
  border-radius: 90px 90px 0 0;
  -moz-border-radius: 90px 90px 0 0;
  -webkit-border-radius: 90px 90px 0 0;
  background-color: #FDE3CA;
  transform: rotate(90deg);
  position: relative;
  z-index: 2;
  bottom: 250px;
  left: 38px;
}

/* 接着是鼻子 */
.nose {
  height: 10px;
  width: 10px;
  background-color: pink;
  border-radius: 30%;
  position: relative;
  z-index: 3;
  bottom: 180px;
  right: 10px;
}

/* 眼睛 */
.eyes {
  position: relative;
  height: 10px;
  width: 10px;
  z-index: 10;
  left: 15px;
  bottom: 200px;
  background: black;
  border-radius: 50%;
}

/* 牙齿！ */
.teeth {
  height: 30px;
  width: 6px;
  background-color: white;
  position: relative;
  z-index: 1;
  bottom: 180px;
  right: 9px;
}

/* 妖娆的小身子 */
.body {
  height: 70px;
  width: 160px;
  border-radius: 90px 90px 0 0;
  -moz-border-radius: 90px 90px 0 0;
  -webkit-border-radius: 90px 90px 0 0;
  background-color: #A7B0B5;
  transform: rotate(-90deg);
  position: relative;
  z-index: 1;
  bottom: 128px;
  right: 45px;
}

.inner-body {
  height: 50px;
  width: 140px;
  border-radius: 90px 90px 0 0;
  -moz-border-radius: 90px 90px 0 0;
  -webkit-border-radius: 90px 90px 0 0;
  background-color: white;
  transform: rotate(-90deg);
  position: relative;
  z-index: 2;
  bottom: 190px;
  right: 34px;
}

/* 脖子 */
.neck {
  height: 30px;
  width: 10px;
  background-color: white;
  position: relative;
  z-index: 1;
  bottom: 300px;
  left: 51px;
}

/* 尾巴 */
.tail,
.inner-tail {
  border-radius: 90px 90px 0 0;
  -moz-border-radius: 90px 90px 0 0;
  -webkit-border-radius: 90px 90px 0 0;
  transform: rotate(90deg);
  position: relative;
  transform: rotate(140deg);
}

.tail {
  height: 40px;
  width: 70px;
  background-color: #A7B0B5;
  bottom: 210px;
  left: 60px;
  z-index: 1;
}

.inner-tail {
  height: 50px;
  width: 70px;
  background-color: white;
  bottom: 250px;
  left: 65px;
  z-index: 0;
}

/* 胳膊 */
.left-leg,
.right-leg {
  width: 10px;
  height: 90px;
  background-color: #A7B0B5;
  position: relative;
  z-index: -2;
}

.left-leg {
  bottom: 255px;
  left: 60px
}

.right-leg {
  bottom: 349px;
  left: 40px
}

.left-foot,
.right-foot {
  height: 40px;
  width: 80px;
  border-radius: 90px 90px 0 0;
  -moz-border-radius: 90px 90px 0 0;
  -webkit-border-radius: 90px 90px 0 0;
  background-color: white;
  position: relative;
  z-index: 3;
}

/* 腿和脚 */
.left-foot {
  bottom: 380px;
  right: 30px;
}

.right-foot {
  bottom: 420px;
  left: 60px;
}

/* 手和胳膊 */
.right-arm,
.right-arm2 {
  width: 10px;
  height: 60px;
  background-color: #a7b0b5;
  position: relative;
  z-index: 9;
}

.right-arm {
  transform: rotate(-50deg);
  bottom: 670px;
  left: 82px;
}

.right-arm2 {
  transform: rotate(50deg);
  bottom: 695px;
  left: 85px;
}

.right-hand,
.left-hand {
  height: 30px;
  width: 50px;
  border-radius: 90px 90px 0 0;
  -moz-border-radius: 90px 90px 0 0;
  -webkit-border-radius: 90px 90px 0 0;
  background-color: white;
  position: relative;
  z-index: 99;
}

.right-hand {
  transform: rotate(90deg);
  bottom: 720px;
  left: 60px;
}

.left-hand {
  transform: rotate(-40deg);
  bottom: 940px;
  right: 100px;
}

.left-arm,
.left-arm2 {
  width: 10px;
  height: 60px;
  background-color: #a7b0b5;
  position: relative;
  z-index: -1;
}

.left-arm {
  bottom: 820px;
  transform: rotate(60deg);
}

.left-arm2 {
  bottom: 875px;
  right: 50px;
  transform: rotate(110deg);
}

/* 兔子最爱吃什么？？ */
.carrot {
  background-color: #EE812F;
  height: 60px;
  width: 30px;
  position: relative;
  bottom: 975px;
  right: 80px;
  transform: rotate(45deg);
}

.carrot2,
.carrot3 {
  height: 20px;
  width: 40px;
  border-radius: 90px 90px 0 0;
  -moz-border-radius: 90px 90px 0 0;
  -webkit-border-radius: 90px 90px 0 0;
  background-color: green;
  position: relative;
  z-index: -1;
}

.carrot2 {
  bottom: 985px;
  right: 120px;
  transform: rotate(-60deg);
}

.carrot3 {
  bottom: 990px;
  right: 120px;
  transform: rotate(100deg);
}

/* 我还可以让耳朵动起来哦 */
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }

  33% {
    transform: rotate(5deg);
  }

  66% {
    transform: rotate(-5deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.ears {
  transform-origin: 0 0;
  animation: wave 400ms infinite linear;
}
`


const player = {
  id: undefined,
  time: 25,
  n: 1,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2")
  },
  init: () => {
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.bindEvents()
    player.play()

  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnFast': 'fast',
    '#btnNormal': 'normal'
  },
  bindEvents: () => {

    for (let key in player.events)
      if (player.events.hasOwnProperty(key))
    // if用来防止遍历继承的对象
    {
      const value = player.events[key]
      document.querySelector(key).onclick = player[value]
    }

  },
  run: () => {
    player.n += 1
    if (player.n > string.length) {
      window.clearInterval(player.id)
      return
    }

    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight
  },
  play: () => {
    player.pause()
    player.id = setInterval(player.run, player.time)
  },
  pause: () => {
    window.clearInterval(player.id)
  },
  slow: () => {
    player.pause()
    player.time = 50
    player.play()

  },
  normal: () => {
    player.pause()
    player.time = 25
    player.play()
  },
  fast: () => {
    player.pause()
    player.time = 0
    player.play()
  },
}


player.init()