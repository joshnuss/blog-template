<script context="module">
  import {findPost} from '../../posts'

  export function preload(page) {
    return { post: findPost(page.params.permalink) }
  }
</script>

<script>
  export let post
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

{@html post.html}
