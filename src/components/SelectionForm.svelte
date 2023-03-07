<script>
	console.log('In SelectionForm');

	const populateDropdownList = (listData, listElement) => {
		let optDefault = document.createElement('option');

		while (listElement.firstChild) {
			listElement.removeChild(listElement.firstChild);
		}

		optDefault.value = '';
		optDefault.text = '';
		listElement.appendChild(optDefault);

		if (listData) {
			listData.forEach((listItem) => {
				let opt = document.createElement('option');
				opt.value = listItem.value;
				opt.textContent = listItem.option;
				listElement.appendChild(opt);
			});
		}
	};
	// implement bind:this? https://svelte.dev/docs#template-syntax-element-directives-bind-this
	// tutorial: https://svelte.dev/tutorial/select-bindings
	const generateInstrumentOptions = () => {
		const instrumentOptionData = [
			{ option: 'Flute', value: 'flute' },
			{ option: 'Piccolo', value: 'piccolo' }
		];

		populateDropdownList(instrumentOptionData);
	};
</script>

<main>
	<div class="selection-form-component">
		<form class="note-options">
			<div>
				<label for="instrument-choice" name="instrument-choice" class="choice-label"
					>Instrument:
					<select id="instrument-choice" name="instrument-choice" value={generateInstrumentOptions}>
						<option />
					</select>
				</label>
			</div>
			<div>
				<label for="octave-choice" name="octave-choice" class="choice-label"
					>Octave:
					<select id="octave-choice" name="octave-choice">
						<option />
					</select>
				</label>
			</div>
			<div>
				<label for="pitch-choice" name="pitch-choice" class="choice-label"
					>Pitch:
					<select id="pitch-choice" name="pitch-choice">
						<option />
					</select>
				</label>
			</div>
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

	@media only screen and (min-width: 768px) {
		.note-options {
			flex-direction: unset;
			font-size: inherit;
			justify-content: space-around;
		}
	}
</style>
