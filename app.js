const searchChocklet = () => {
	const searchChocklets = document.getElementById("search-chocklet");
	const searchText = searchChocklets.value;
	//console.log(searchText);
	searchChocklets.value = " ";

	//call api 
	const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchText}`;
	fetch(url)
		.then(res => res.json())
		.then(data => chockletDisplay(data.drinks));
}

const chockletDisplay = chocklets => {
	console.log(chocklets)
	//using forEach Loop
	chocklets.forEach(chocklet => {
		//console.log(chocklet);
		const searchResult = document.getElementById("search-result");
		//searchResult.textContent = " ";
		const createDiv = document.createElement("div");
		createDiv.classList.add("col");
		createDiv.innerHTML = `
					<div class="card h-100" onclick = "photoDetail('${chocklet.idDrink}')">
					<img src="${chocklet.strDrinkThumb}" class="card-img-top" alt="...">
					<h5 class="card-title">${chocklet.strDrink}</h5>
				</div>
	`;
		searchResult.appendChild(createDiv);

	});
}

const photoDetail = detail => {
	//console.log(detail);
	const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${detail}`;
	fetch(url)
		.then(res => res.json())
		.then(data => displayOutput(data.drinks[0]));

}
const displayOutput = output => {
	const info = document.getElementById("see-info");
	info.textContent = " ";
	const div = document.createElement("div");
	div.innerHTML = `
	<img src="${output.strDrinkThumb}" class="card-img-top" alt="...">
	<div class="card-body">
		<p class="card-text">${output.strInstructions.slice(0, 200)}</p>
	</div>
	`;
	info.appendChild(div);
}