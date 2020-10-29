<script>
  export let posts
</script>

{#each posts as post}
  <article>
    <a href={`/posts/${post.permalink}`}>
      <h2>{post.title}</h2>
      <p>{post.summary}</p>
    </a>
  </article>
{/each}