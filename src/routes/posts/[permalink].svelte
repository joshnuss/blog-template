<script context="module">
  import {findPost} from '@/posts'

  export function preload(page) {
    return { post: findPost(page.params.permalink) }
  }
</script>

<script>
  import highlight from '@/highlight'
  import Tags from '@/components/Tags.svelte'
  export let post
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<Tags tags={post.tags}/>

<div use:highlight>
  {@html post.html}
</div>
