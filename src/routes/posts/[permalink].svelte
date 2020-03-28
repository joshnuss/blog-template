<script context="module">
  import {findPost} from '../../posts'

  export function preload(page) {
    return { post: findPost(page.params.permalink) }
  }
</script>

<script>
  import {onMount} from 'svelte'
  import hljs from 'highlight.js'

  export let post

  onMount(() => {
    hljs.initHighlighting()
  })
</script>

<h1>{post.title}</h1>

{@html post.html}
