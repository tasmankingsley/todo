/* eslint-disable */
import { writable } from 'svelte/store';

// let todo_list = writable([]);


// export let todo_list = writable(localStorage.getItem("todo_list") || []);

// todo_list.subscribe((value) => localStorage.setItem("todo_list", JSON.stringify(value)));

  
export let todo_list = writable(JSON.parse(localStorage.getItem('store')) || []);

todo_list.subscribe((value) => localStorage.store = JSON.stringify(value));
