<template>
	<div v-if="currentBook" class="edit-form">
		<h4>Book</h4>
		<form>
			<div class="form-group">
				<label for="title">Title</label>
				<input
					type="text"
					class="form-control"
					id="title"
					v-model="currentBook.title"
				/>
			</div>
			<div class="form-group">
				<label for="author">Author</label>
				<input
					type="text"
					class="form-control"
					id="author"
					v-model="currentBook.author"
				/>
			</div>
		</form>
		<button class="badge badge-primary mr-2" @click="deleteBook">Delete</button>
		<button type="submit" class="badge badge-success" @click="updateBook">
			Update
		</button>
		<p>{{ message }}</p>
	</div>
	<div v-else>
		<br />
		<p>Click Book</p>
	</div>
</template>

<script>
import BookDataService from "../services/BookDataService";

export default {
	name: "book-details",
	data() {
		return {
			currentBook: null,
			message: "",
		};
	},
	methods: {
		getBook(id) {
			BookDataService.get(id)
				.then((response) => {
					this.currentBook = response.data;
					console.log(response.data);
				})
				.catch((e) => {
					console.log(e);
				});
		},

		updateBook() {
			BookDataService.update(this.currentBook.id, this.currentBook)
				.then((response) => {
					console.log(response.data);
					this.message = "The book updated.";
				})
				.catch((e) => {
					console.log(e);
				});
		},

		deleteBook() {
			BookDataService.delete(this.currentBook.id)
				.then((response) => {
					console.log(response.data);
					this.$router.push({ name: "books" });
				})
				.catch((e) => {
					console.log(e);
				});
		},
	},
	mounted() {
		this.message = "";
		this.getBook(this.$route.params.id);
	},
};
</script>
