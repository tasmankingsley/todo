<script>
  import Todo from "./lib/todo.svelte";
</script>

<main> 
  <div>
    <h1>tidy todo</h1>
    <Todo/>
  </div>
</main>

<style>
  h1 {
    font-size: 1.5rem;
    font-weight: 300;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }



  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }
</style>
