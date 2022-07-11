<template>
	<div class="list row">
		<div class="col-md-8">
			<v-text-field
				v-model="title"
				:counter="10"
				label="Book Title"
				required
			></v-text-field>
			<div class="input-group-append">
				<v-btn @click="searchTitle"> Search </v-btn>
			</div>
		</div>
		<div class="col-md-6">
			<p>Book List</p>
			<ul class="list-group">
				<li
					class="list-group-item"
					:class="{ active: index == currentIndex }"
					v-for="(book, index) in books"
					:key="index"
					@click="setActiveBook(book, index)"
				>
					{{ book.title }}
				</li>
			</ul>
		</div>
		<div class="col-md-6">
			<div v-if="currentBook">
				<h4>Book</h4>
				<div>{{ currentBook.title }}</div>
				<div>{{ currentBook.author }}</div>
				<a class="badge badge-warning" :href="'/books' + currentBook.id"
					>Edit</a
				>
			</div>
		</div>
	</div>
</template>

<script>
import BookDataService from "../services/BookDataService";

export default {
	name: "books-list",
	data() {
		return {
			books: [],
			currentBook: null,
			currentIndex: -1,
			title: "",
		};
	},
	methods: {
		retrieveBooks() {
			BookDataService.getAll()
				.then((response) => {
					this.books = response.data;
					console.log(response.data);
				})
				.catch((e) => {
					console.log(e);
				});
		},

		setActiveBook(book, index) {
			this.currentBook = book;
			this.currentIndex = index;
		},

		searchTitle() {
			BookDataService.findByTitle(this.title)
				.then((response) => {
					this.books = response.data;
					console.log(response.data);
				})
				.catch((e) => {
					console.log(e);
				});
		},
	},
	mounted() {
		this.retrieveBooks();
	},
};
</script>
