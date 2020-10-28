import Prism from 'prismjs'

// add more languages here:
import 'prismjs/components/prism-ruby'
import 'prismjs/components/prism-csharp'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-bash'
import 'prism-svelte'

export default function highlight(element) {
  for (let code of element.querySelectorAll('pre code')) {
    Prism.highlightElement(code)
  }
}
