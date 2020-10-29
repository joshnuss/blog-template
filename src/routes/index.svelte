<script>
  import PostList from '@/components/PostList.svelte'

  import {posts} from '@/posts'
</script>

<svelte:head>
  <title>Sample Weblog</title>
</svelte:head>

<h1>Sample Weblog</h1>

<PostList {posts}/>