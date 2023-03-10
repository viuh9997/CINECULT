// criando o corpo da pagina

function build() {
	document.body.innerHTML +=
		'<span id="menu"><h1 id="logo">CINECULT</h1><div id="theme"><input type="checkbox" id="th"><label for="th" id="lbTh"><span></span></label></div></span><nav id="nv"><span id="nav"><input type="text" id="search" placeholder="Search"><button id="searchBtn"><img src="https://cdn-icons-png.flaticon.com/512/151/151773.png" alt="OK" width="20" height="20"></button></span></nav>';

	// <span id="menuLg"><a href="">Séries</a><a href="">Ao vivo</a></span>

	document.body.innerHTML +=
		'<div id="section1"><div id="m0"></div><div id="m1"></div><div id="m2"></div><div id="m3"></div><div id="ifrm"><img src="https://cdn-icons-png.flaticon.com/512/3683/3683627.png" width="30" id="back"><iframe frameborder="0" allowfullscreen="true" name="iframe" id="iframe" sandbox="allow-forms allow-scripts allow-same-origin"></div><div id="ifrm"><img src="https://cdn-icons-png.flaticon.com/512/3683/3683627.png" width="30" id="back"><iframe frameborder="0" allowfullscreen="true" name="iframe" id="iframe"></div></div>';

	document.body.innerHTML +=
		'<footer id="ft"><div id="name"><p>©2022 CINECULT</p><a href="http://github.com/viuh9997" target="_blank">@viuh9997</a></div></footer>';
	//	<a href="" id="cntt">Contato</a>

	// theme

	const checkbox = document.querySelector("#th");

	checkbox.addEventListener("change", (event) => {
		if (event.currentTarget.checked) {
			document.body.style.background = "#fff";
			document.getElementById("section1").style.background = "#fff";
			document.getElementById("nv").style.background = "#fff";
			document.getElementById("logo").style.color = "#000";
			document.getElementById("ft").style.background = "#181818";
			document.getElementById("ifrm").style.background = "#fff";
		} else {
			document.body.style.background = "#181818";
			document.getElementById("section1").style.background = "#181818";
			document.getElementById("nv").style.background = "#181818";
			document.getElementById("logo").style.color = "#fff";
			document.getElementById("ft").style.background = "#000";
			document.getElementById("ifrm").style.background = "#181818";
		}
	});

	// area de busca

	searchBtn.addEventListener("click", function () {
		let itemSearch = document.getElementById("search").value;

		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=222feb5ebb71adf9325859cfaca96fc1&query=${itemSearch}&include_adult=false`,
			{
				headers: new Headers({
					Accept: "application/json"
				})
			}
		)
			.then(function (response) {
				return response.text();
			})
			.then(function (text) {
				let outcome = JSON.parse(text);
				//console.log(outcome);
				var res = outcome.results;

				document.getElementById("m0").innerHTML = "";

				function ids(item) {
					//document.body.innerHTML += `<p>${item.id}</p><h4>${item.title}</h4>`
					fetch(
						`https://api.themoviedb.org/3/movie/${item.id}?api_key=222feb5ebb71adf9325859cfaca96fc1&language=pt-BR&page=1&include_adult=false`,
						{
							headers: new Headers({
								Accept: "application/json"
							})
						}
					)
						.then(function (response) {
							return response.text();
						})
						.then(function (text) {
							let outcome = JSON.parse(text);
							//console.log(outcome);

							document.getElementById(
								"m0"
							).innerHTML += `<a href="https://embed.warezcdn.com/filme/${outcome.imdb_id}" target="iframe" id="posters1" class="poster"><img src="https://image.tmdb.org/t/p/w500/${outcome.poster_path}" width="250"></a>`;
						})
						.catch(function (error) {
							console.log(error);
						});
				}
				res.forEach(ids);
			})
			.catch(function (error) {
				console.log(error);
			});
	});

	//lista 1
	fetch(
		"https://api.themoviedb.org/3/trending/all/day?api_key=222feb5ebb71adf9325859cfaca96fc1",
		{
			headers: new Headers({
				Accept: "application/json"
			})
		}
	)
		.then(function (response) {
			return response.text();
		})
		.then(function (text) {
			let outcome = JSON.parse(text);
			var res = outcome.results;
			//console.log(res);

			function ids(item) {
				//document.body.innerHTML += `<p>${item.id}</p><h4>${item.title}</h4>`
				fetch(
					`https://api.themoviedb.org/3/movie/${item.id}?api_key=222feb5ebb71adf9325859cfaca96fc1&language=pt-BR&page=1&include_adult=false`,
					{
						headers: new Headers({
							Accept: "application/json"
						})
					}
				)
					.then(function (response) {
						return response.text();
					})
					.then(function (text) {
						let outcome = JSON.parse(text);
						//console.log(outcome);

						document.getElementById(
							"m1"
						).innerHTML += `<a href="https://embed.warezcdn.com/filme/${outcome.imdb_id}" target="iframe" id="posters1" class="poster"><img src="https://image.tmdb.org/t/p/w500/${outcome.poster_path}" width="250"></a>`;
					})
					.catch(function (error) {
						console.log(error);
					});
			}
			res.forEach(ids);
		})
		.catch(function (error) {
			console.log(error);
		});

	//lista 2
	fetch(
		"https://api.themoviedb.org/3/discover/movie?api_key=222feb5ebb71adf9325859cfaca96fc1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate",
		{
			headers: new Headers({
				Accept: "application/json"
			})
		}
	)
		.then(function (response) {
			return response.text();
		})
		.then(function (text) {
			let outcome = JSON.parse(text);
			//console.log(outcome);
			var res = outcome.results;

			function ids(item) {
				fetch(
					`https://api.themoviedb.org/3/movie/${item.id}?api_key=222feb5ebb71adf9325859cfaca96fc1&language=pt-BR&page=1&include_adult=false`,
					{
						headers: new Headers({
							Accept: "application/json"
						})
					}
				)
					.then(function (response) {
						return response.text();
					})
					.then(function (text) {
						let outcome = JSON.parse(text);
						//console.log(outcome);

						document.getElementById(
							"m2"
						).innerHTML += `<a href="https://embed.warezcdn.com/filme/${outcome.imdb_id}" target="iframe" id="posters1" class="poster"><img src="https://image.tmdb.org/t/p/w500/${outcome.poster_path}" width="250"></a>`;
					})
					.catch(function (error) {
						console.log(error);
					});
			}
			res.forEach(ids);
		})
		.catch(function (error) {
			console.log(error);
		});

	//lista 3
	fetch(
		"https://api.themoviedb.org/3/discover/movie?api_key=222feb5ebb71adf9325859cfaca96fc1&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate",
		{
			headers: new Headers({
				Accept: "application/json"
			})
		}
	)
		.then(function (response) {
			return response.text();
		})
		.then(function (text) {
			let outcome = JSON.parse(text);
			//console.log(outcome);
			var res = outcome.results;

			function ids(item) {
				fetch(
					`https://api.themoviedb.org/3/movie/${item.id}?api_key=222feb5ebb71adf9325859cfaca96fc1&language=pt-BR&page=1&include_adult=false`,
					{
						headers: new Headers({
							Accept: "application/json"
						})
					}
				)
					.then(function (response) {
						return response.text();
					})
					.then(function (text) {
						let outcome = JSON.parse(text);
						//console.log(outcome);

						document.getElementById(
							"m3"
						).innerHTML += `<a href="https://embed.warezcdn.com/filme/${outcome.imdb_id}" target="iframe" id="posters1" class="poster"><img src="https://image.tmdb.org/t/p/w500/${outcome.poster_path}" width="250"></a>`;
					})
					.catch(function (error) {
						console.log(error);
					});
			}
			res.forEach(ids);
		})
		.catch(function (error) {
			console.log(error);
		});

	// iframe e funções
	var back = document.getElementById("back");
	var img0 = document.getElementById("m0");
	var img1 = document.getElementById("m1");
	var img2 = document.getElementById("m2");
	var img3 = document.getElementById("m3");

	back.addEventListener("click", function () {
		let iframe = document.getElementById("iframe");
		iframe.setAttribute("src", "");
		document.getElementById("ifrm").style.display = "none";
	});
	img0.addEventListener("click", function () {
		document.getElementById("ifrm").style.display = "flex";
	});
	img1.addEventListener("click", function () {
		document.getElementById("ifrm").style.display = "flex";
	});
	img2.addEventListener("click", function () {
		document.getElementById("ifrm").style.display = "flex";
	});
	img3.addEventListener("click", function () {
		document.getElementById("ifrm").style.display = "flex";
	});
}
