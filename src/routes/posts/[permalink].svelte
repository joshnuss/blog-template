<script context="module">
  import {findPost} from '../../posts'

  export function preload(page) {
    return { post: findPost(page.params.permalink) }
  }
</script>

<script>
  export let post
</script>

<h1>{post.title}</h1>

{@html post.html}
