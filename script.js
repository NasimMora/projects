/**
 * document.write(navigator.appCodeName + "<br>")
 * document.write не используется в данном случае из за  того что находишься
 * в модуле.
 * Нельзя вызывать модуль в модуле
 * https://stackoverflow.com/questions/24297829/execute-write-on-doc-it-isnt-possible-to-write-into-a-document-from-an-asynchr
 */
import { docWrite } from "./user-agent.js"
const resWrite = docWrite()
// console.log(resWrite)

const headEl = document.querySelector(".head")

// headEl.innerHTML = sayHi('John');
// headEl.innerHTML = navigator.product + "<br>"
headEl.insertAdjacentHTML(
  "beforeend",
  `<br>User App version: ${navigator.appVersion}`
)
headEl.insertAdjacentHTML(
  "beforeend",
  `<br>User Browser version: ${navigator.userAgent}`
)
headEl.insertAdjacentHTML(
  "beforeend",
  `<br>User Platform: ${navigator.platform}`
)
headEl.insertAdjacentHTML(
  "beforeend",
  `<br>User Language: ${navigator.language}`
)
headEl.insertAdjacentHTML(
  "beforeend",
  `<br>User is online: ${navigator.onLine}`
)
resWrite
// headEl.innerHTML = navigator.appVersion + "<br>"
// console.log(headEl.innerHTML)
// headEl.innerHTML = navigator.userAgent + "<br>"
// console.log(headEl.innerHTML)
// document.write(navigator.platform + "<br>")
// document.write(navigator.language + "<br>")
// document.write(navigator.onLine + "<br>")
