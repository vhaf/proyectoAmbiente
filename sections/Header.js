export function Header() {
	const objetoDOM = document;
	const pagina = `
	<div class="logo">
			<a href="#"><img src="/assets/img/logo.png" alt="Logo de la marca">
		</div></a>
		<nav>
			<ul class="nav-links">
				<li><a href="#">Home</a></li>
				<li><a href="./pages/dashboard.html">Dashboard</a></li>
				<li><a href="./pages/acercade.html">About</a></li>
			</ul>
		</nav>
		<a href="#" class="btn"><button>Contact</button></a>

		<a onclick="openNav()" href="#" class="menu"><button>Menu</button></a>

		<div class="overlay" id="mobile-menu">
			<a onclick="closeNav()" href="" class="close">&times;</a>
			<div class="overlay-content">
				<a href="#">Home</a>
				<a href="./pages/dashboard.html">Dashboard</a>
				<a href="./pages/acercade.html">About</a>
				<a href="#">Contact</a>
			</div>
		</div>
	`;
	objetoDOM.getElementById("header").innerHTML = `${pagina}`;
}