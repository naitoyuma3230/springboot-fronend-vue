<template>
	<div class="submit-form">
		<div v-if="!submitted">
			<p>Add Book List</p>
			<div class="form-group">
				<v-text-field
					v-model="book.title"
					:counter="10"
					label="Title"
					required
				></v-text-field>
			</div>
			<v-text-field
				v-model="book.author"
				:counter="10"
				label="Author"
				required
			></v-text-field>
			<v-btn @click="saveBook">Submit</v-btn>
		</div>
		<div v-else>
			<p>Submit successed!</p>
			<v-btn @click="newBook">Add</v-btn>
		</div>
	</div>
</template>

<script>
import BookDataService from "../services/BookDataService";

export default {
	name: "add-book",
	data() {
		return {
			book: {
				id: null,
				title: "",
				author: "",
			},
			submitted: false,
		};
	},
	methods: {
		saveBook() {
			var data = {
				title: this.book.title,
				author: this.book.author,
			};
			BookDataService.create(data)
				.then((response) => {
					this.book.id = response.data.id;
				})
				.catch((e) => {
					console.log(e);
				});
		},

		newBook() {
			this.submitted = false;
			this.book = {};
		},
	},
};
</script>
