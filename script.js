/*notificaciones*/
const btnAbrirPopup = document.getElementById("btn-abrir-popup");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const btnCerrarPopup = document.getElementById("btn-cerrar-popup");

if (btnAbrirPopup && btnCerrarPopup) {
	btnAbrirPopup.addEventListener("click", () => {
		overlay.classList.add("active");
		popup.classList.add("active");
	});

	btnCerrarPopup.addEventListener("click", (e) => {
		e.preventDefault();
		overlay.classList.remove("active");
		popup.classList.remove("active");
	});
}

/*slider*/
console.log(btnAbrirPopup, overlay, popup, btnCerrarPopup);

const button = document.getElementById("button-slider");
const slider = document.getElementById("slider");

if (button && slider) {
	button.addEventListener("click", () => {
		console.log("click");
		slider.classList.toggle("show");
	});
}

/*categorias*/
function comedia_show() {
	document.getElementById("comedia").classList.add("on-top");
	document.getElementById("drama").classList.remove("on-top");
	document.getElementById("accion").classList.remove("on-top");
	document.getElementById("ci_fi").classList.remove("on-top");
	document.getElementById("cotidiano").classList.remove("on-top");
	document.getElementById("policial").classList.remove("on-top");
	document.getElementById("romance").classList.remove("on-top");
	document.getElementById("terror").classList.remove("on-top");
	document.getElementById("misterio").classList.remove("on-top");
	document.getElementById("fantasia").classList.remove("on-top");
}

function accion_show() {
	document.getElementById("accion").classList.add("on-top");
	document.getElementById("comedia").classList.remove("on-top");
	document.getElementById("drama").classList.remove("on-top");
	document.getElementById("ci_fi").classList.remove("on-top");
	document.getElementById("cotidiano").classList.remove("on-top");
	document.getElementById("policial").classList.remove("on-top");
	document.getElementById("romance").classList.remove("on-top");
	document.getElementById("terror").classList.remove("on-top");
	document.getElementById("misterio").classList.remove("on-top");
	document.getElementById("fantasia").classList.remove("on-top");
}

function drama_show() {
	document.getElementById("drama").classList.add("on-top");
	document.getElementById("accion").classList.remove("on-top");
	document.getElementById("comedia").classList.remove("on-top");
	document.getElementById("ci_fi").classList.remove("on-top");
	document.getElementById("cotidiano").classList.remove("on-top");
	document.getElementById("policial").classList.remove("on-top");
	document.getElementById("romance").classList.remove("on-top");
	document.getElementById("terror").classList.remove("on-top");
	document.getElementById("misterio").classList.remove("on-top");
	document.getElementById("fantasia").classList.remove("on-top");
}

function ci_fi_show() {
	document.getElementById("ci_fi").classList.add("on-top");
	document.getElementById("accion").classList.remove("on-top");
	document.getElementById("comedia").classList.remove("on-top");
	document.getElementById("drama").classList.remove("on-top");
	document.getElementById("cotidiano").classList.remove("on-top");
	document.getElementById("policial").classList.remove("on-top");
	document.getElementById("romance").classList.remove("on-top");
	document.getElementById("terror").classList.remove("on-top");
	document.getElementById("misterio").classList.remove("on-top");
	document.getElementById("fantasia").classList.remove("on-top");
}

function cotidiano_show() {
	document.getElementById("cotidiano").classList.add("on-top");
	document.getElementById("accion").classList.remove("on-top");
	document.getElementById("comedia").classList.remove("on-top");
	document.getElementById("drama").classList.remove("on-top");
	document.getElementById("ci_fi").classList.remove("on-top");
	document.getElementById("policial").classList.remove("on-top");
	document.getElementById("romance").classList.remove("on-top");
	document.getElementById("terror").classList.remove("on-top");
	document.getElementById("misterio").classList.remove("on-top");
	document.getElementById("fantasia").classList.remove("on-top");
}

function policial_show() {
	document.getElementById("policial").classList.add("on-top");
	document.getElementById("accion").classList.remove("on-top");
	document.getElementById("comedia").classList.remove("on-top");
	document.getElementById("drama").classList.remove("on-top");
	document.getElementById("ci_fi").classList.remove("on-top");
	document.getElementById("cotidiano").classList.remove("on-top");
	document.getElementById("romance").classList.remove("on-top");
	document.getElementById("terror").classList.remove("on-top");
	document.getElementById("misterio").classList.remove("on-top");
	document.getElementById("fantasia").classList.remove("on-top");
}
function romance_show() {
	document.getElementById("romance").classList.add("on-top");
	document.getElementById("accion").classList.remove("on-top");
	document.getElementById("comedia").classList.remove("on-top");
	document.getElementById("drama").classList.remove("on-top");
	document.getElementById("ci_fi").classList.remove("on-top");
	document.getElementById("cotidiano").classList.remove("on-top");
	document.getElementById("policial").classList.remove("on-top");
	document.getElementById("terror").classList.remove("on-top");
	document.getElementById("misterio").classList.remove("on-top");
	document.getElementById("fantasia").classList.remove("on-top");
}
function terror_show() {
	document.getElementById("terror").classList.add("on-top");
	document.getElementById("accion").classList.remove("on-top");
	document.getElementById("comedia").classList.remove("on-top");
	document.getElementById("drama").classList.remove("on-top");
	document.getElementById("ci_fi").classList.remove("on-top");
	document.getElementById("cotidiano").classList.remove("on-top");
	document.getElementById("romance").classList.remove("on-top");
	document.getElementById("policial").classList.remove("on-top");
	document.getElementById("misterio").classList.remove("on-top");
	document.getElementById("fantasia").classList.remove("on-top");
}
function misterio_show() {
	document.getElementById("misterio").classList.add("on-top");
	document.getElementById("accion").classList.remove("on-top");
	document.getElementById("comedia").classList.remove("on-top");
	document.getElementById("drama").classList.remove("on-top");
	document.getElementById("ci_fi").classList.remove("on-top");
	document.getElementById("cotidiano").classList.remove("on-top");
	document.getElementById("romance").classList.remove("on-top");
	document.getElementById("terror").classList.remove("on-top");
	document.getElementById("policial").classList.remove("on-top");
	document.getElementById("fantasia").classList.remove("on-top");
}
function fantasia_show() {
	document.getElementById("fantasia").classList.add("on-top");
	document.getElementById("accion").classList.remove("on-top");
	document.getElementById("comedia").classList.remove("on-top");
	document.getElementById("drama").classList.remove("on-top");
	document.getElementById("ci_fi").classList.remove("on-top");
	document.getElementById("cotidiano").classList.remove("on-top");
	document.getElementById("romance").classList.remove("on-top");
	document.getElementById("terror").classList.remove("on-top");
	document.getElementById("misterio").classList.remove("on-top");
	document.getElementById("policial").classList.remove("on-top");
}
