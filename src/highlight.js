import Prism from 'prismjs'
// add more languages here:
import 'prismjs/components/prism-ruby'

export default function highlight(element) {
  for (let code of element.querySelectorAll('pre code')) {
    code.innerHTML = Prism.highlight(code.innerText)
  }
}
