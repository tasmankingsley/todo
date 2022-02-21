<script>
    import { fly } from 'svelte/transition';

    let new_item = "";

    let todo_list = [];

    function add_to_list() {
        todo_list = [...todo_list, {text: new_item, status: false}];
        new_item = "";
    }

    function remove_from_list(index) {
        todo_list.splice(index, 1);
        todo_list = todo_list;
    }


</script>

<div>
    <div class="input_div">
        <input class="todo_input" bind:value={new_item} type="text" placeholder="something to do?">
        <button on:click={add_to_list}>＋</button>
    </div>

    {#each todo_list as item, index}
        <div class="item_div" in:fly="{{ y: 200, duration: 1000 }}" out:fly="{{ x: -200, duration: 500 }}">
            <input bind:checked={item.status} class="checkbox" type="checkbox">
            <span class:checked={item.status} class="item">{item.text}</span>
            <span on:click={() => remove_from_list(index)} class="remove_item">−</span>
        </div>
    {/each}
</div>

<style> 
    .input_div {
        display: flex;
        padding: 5px 0px;
    }

    .todo_input {
        font-size: 1rem;
        width: 100%;
    }

    .item_div {
        padding: 5px 0px;
    }

    button {
        background-color: #7a879e9e;
        color: #e9eff1;
        font-size: 1rem;
    }

    button:hover {
        background-color: #99d2d4;
        color: #e9eff1;
        cursor: pointer;        
    }

    input.checkbox {
        width: 1rem;
        height: 1rem;
        vertical-align: middle;
    }

    .item {
        line-height: 1rem;
        vertical-align: middle;
    }

	.checked {
        text-decoration: line-through;
    }

    .remove_item {
        cursor: pointer;
        float: right;
    }

</style>
