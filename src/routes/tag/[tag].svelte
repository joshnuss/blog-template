<script context="module">
  import { findByTag } from '@/posts'

  export function preload(page) {
    const { tag } = page.params
    const posts = findByTag(tag)

    return { tag, posts }
  }
</script>

<script>
  import PostList from '@/components/PostList.svelte'

  export let tag, posts
</script>

<svelte:head>
  <title>#{tag}</title>
</svelte:head>

<h1>#{tag}</h1>

<PostList {posts}/>
