<script>
  import {posts} from '../posts'
</script>
<svelte:head>
  <title>Josh's Weblog</title>
</svelte:head>

<h1>Josh's Weblog</h1>

{#each posts as post}
  <article>
    <a href={`/posts/${post.permalink}`}>
      <h2>{post.title}</h2>
      <p>{post.summary}</p>
    </a>
  </article>
{/each}
