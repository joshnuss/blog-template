import Prism from 'prismjs'

// change to adjust theme
import 'prism-themes/themes/prism-vsc-dark-plus.css'

// add more languages here
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css'

export default function highlight(node) {
  for (const code of node.querySelectorAll('code')) {
    if (code.classList.length == 0) {
      code.classList.add('language-none')
    }
  }

  Prism.highlightAllUnder(node)
}
