<script context="module">
  import { findByTag } from '@/posts'

  export function preload(page) {
    const { tag } = page.params

    return { posts: findByTag(tag), tag }
  }
</script>

<script>
  import PostList from '@/components/PostList.svelte'

  export let tag, posts
</script>

<h1>#{tag}</h1>

<PostList {posts}/>
