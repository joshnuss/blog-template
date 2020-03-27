<script>
  import {posts} from '../posts'
</script>
<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>Hello Sapper!</h1>

{#each posts as post}
  <article>
    <a href={`/posts/${post.permalink}`}>
      <h2>{post.title}</h2>
      <p>{post.summary}</p>
    </a>
  </article>
{/each}
