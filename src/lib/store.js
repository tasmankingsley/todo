/* eslint-disable */
import { writable } from 'svelte/store';

// export object "todo_list" as writable store, either get stored object or create new empty one
export let todo_list = writable(JSON.parse(localStorage.getItem('store')) || []);

// Update on change to stored value (todo_list)
todo_list.subscribe((value) => localStorage.store = JSON.stringify(value));
