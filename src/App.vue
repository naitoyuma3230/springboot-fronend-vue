<template>
	<div id="app">
		<v-container>
			<v-row>
				<v-col>
					<v-btn outlined to="/">HOME </v-btn>
					<v-btn outlined to="/books">Book List </v-btn>
					<v-btn outlined to="/add">Add Book </v-btn>
				</v-col>
			</v-row>
		</v-container>
		<div class="container mt-3">
			<router-view />
		</div>
	</div>
</template>

<script>
export default {
	name: "App",
};
</script>
