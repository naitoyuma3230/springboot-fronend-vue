import Vue from "vue";
import Router from "vue-router";
import BooksList from "./components/BooksList";
import BookDetails from "./components/BookDetails";
import AddBook from "./components/AddBook";

Vue.use(Router);
export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			alias: "/books",
			name: "books",
			component: BooksList,
		},
		{
			path: "/books/:id",
			name: "book-details",
			component: BookDetails,
		},
		{
			path: "/add",
			name: "add",
			component: AddBook,
		},
	],
});
