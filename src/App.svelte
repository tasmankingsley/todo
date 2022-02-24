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
    margin: 10px 20px;
    transition: margin 0.5s;
  }



  @media (min-width: 650px) {
    div {
      margin: 10px 100px;
    }
  }

  @media (min-width: 1400px) {
    div {
      margin: 10px 200px;
    }
  }
</style>
