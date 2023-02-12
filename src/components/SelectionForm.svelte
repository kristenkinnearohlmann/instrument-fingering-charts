<script>
	console.log('In SelectionForm');
</script>

<main>
	<div class="selection-form-component">
		<form class="note-options">
			<div>
				<label for="instrument-choice" name="instrument-choice" class="choice-label"
					>Instrument:
					<select id="instrument-choice" name="instrument-choice">
						<option />
					</select>
				</label>
			</div>
			<p>Instrument</p>
			<p>Octave</p>
			<p>Pitch</p>
			<button>Results</button>
			<button>Reset</button>
		</form>
	</div>
</main>

<style lang="scss">
	main {
		margin: 0 auto;
		width: 95%;
	}

	.selection-form-component {
		border: 2px solid gray;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		font-family: inherit;
		font-size: inherit;
		margin-bottom: 15px;
		padding: 10px;

		.note-options {
			border: 2px solid gray;
			border-radius: 8px;
			display: flex;
			flex-direction: column;
			font-family: inherit;
			font-size: inherit;
			margin-bottom: 15px;
			padding: 10px;

			div {
				margin: 5px 0;
			}
		}

		select {
			font-family: inherit;
			font-size: inherit;
			width: 5rem;
		}

		button {
			background-color: silver;
			border-radius: 10px;
			font-family: inherit;
			font-size: 0.95rem;
			margin: 3px 0;
			padding: 0.25rem;

			&:hover {
				background-color: aliceblue;
				color: silver;
			}
		}
	}
</style>
