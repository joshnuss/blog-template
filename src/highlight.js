import Prism from 'prismjs'

export default function highlight(element) {
  for (let code of element.querySelectorAll('pre code')) {
    code.innerHTML = Prism.highlight(code.innerText)
  }
}
