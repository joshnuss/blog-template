<script context="module">
  import {findPost} from '../../posts'

  export function preload(page) {
    return { post: findPost(page.params.permalink) }
  }
</script>

<script>
  import highlight from '../../highlight'

  export let post
</script>

<h1>{post.title}</h1>

<div use:highlight>
  {@html post.html}
</div>
