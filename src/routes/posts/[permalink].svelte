<script context="module">
  import {findPost} from '@/posts'

  export function preload(page) {
    return { post: findPost(page.params.permalink) }
  }
</script>

<script>
  import highlight from '@/highlight'
  import { format } from 'date-fns'

  export let post
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<span datetime={format(post.date, "yyyy-LL-dd")}>
  {post.date.toLocaleDateString('en', {dateStyle: 'long'})}
</span>

<div use:highlight>
  {@html post.html}
</div>
