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
		slider.classList.toggle("slide");
	});
}

/*categorias*/
function comedia_show() {
	document.getElementById("comedia").style.display="block";
	document.getElementById("drama").style.display="none";
	document.getElementById("accion").style.display="none";
	document.getElementById("ci_fi").style.display="none";
	document.getElementById("cotidiano").style.display="none";
	document.getElementById("policial").style.display="none";
	document.getElementById("romance").style.display="none";
	document.getElementById("terror").style.display="none";
	document.getElementById("misterio").style.display="none";
	document.getElementById("fantasia").style.display="none";
}
function accion_show() {
	document.getElementById("accion").style.display="block";
	document.getElementById("comedia").style.display="none";
	document.getElementById("drama").style.display="none";
	document.getElementById("ci_fi").style.display="none";
	document.getElementById("cotidiano").style.display="none";
	document.getElementById("policial").style.display="none";
	document.getElementById("romance").style.display="none";
	document.getElementById("terror").style.display="none";
	document.getElementById("misterio").style.display="none";
	document.getElementById("fantasia").style.display="none";
}
function drama_show() {
	document.getElementById("drama").style.display="block";
	document.getElementById("accion").style.display="none";
	document.getElementById("comedia").style.display="none";
	document.getElementById("ci_fi").style.display="none";
	document.getElementById("cotidiano").style.display="none";
	document.getElementById("policial").style.display="none";
	document.getElementById("romance").style.display="none";
	document.getElementById("terror").style.display="none";
	document.getElementById("misterio").style.display="none";
	document.getElementById("fantasia").style.display="none";
}
function ci_fi_show() {
	document.getElementById("ci_fi").style.display="block";
	document.getElementById("accion").style.display="none";
	document.getElementById("comedia").style.display="none";
	document.getElementById("drama").style.display="none";
	document.getElementById("cotidiano").style.display="none";
	document.getElementById("policial").style.display="none";
	document.getElementById("romance").style.display="none";
	document.getElementById("terror").style.display="none";
	document.getElementById("misterio").style.display="none";
	document.getElementById("fantasia").style.display="none";
}
function cotidiano_show() {
	document.getElementById("cotidiano").style.display="block";
	document.getElementById("accion").style.display="none";
	document.getElementById("comedia").style.display="none";
	document.getElementById("drama").style.display="none";
	document.getElementById("ci_fi").style.display="none";
	document.getElementById("policial").style.display="none";
	document.getElementById("romance").style.display="none";
	document.getElementById("terror").style.display="none";
	document.getElementById("misterio").style.display="none";
	document.getElementById("fantasia").style.display="none";
}
function policial_show() {
	document.getElementById("policial").style.display="block";
	document.getElementById("accion").style.display="none";
	document.getElementById("comedia").style.display="none";
	document.getElementById("drama").style.display="none";
	document.getElementById("ci_fi").style.display="none";
	document.getElementById("cotidiano").style.display="none";
	document.getElementById("romance").style.display="none";
	document.getElementById("terror").style.display="none";
	document.getElementById("misterio").style.display="none";
	document.getElementById("fantasia").style.display="none";
}
function romance_show() {
	document.getElementById("romance").style.display="block";
	document.getElementById("accion").style.display="none";
	document.getElementById("comedia").style.display="none";
	document.getElementById("drama").style.display="none";
	document.getElementById("ci_fi").style.display="none";
	document.getElementById("cotidiano").style.display="none";
	document.getElementById("policial").style.display="none";
	document.getElementById("terror").style.display="none";
	document.getElementById("misterio").style.display="none";
	document.getElementById("fantasia").style.display="none";
}
function terror_show() {
	document.getElementById("terror").style.display="block";
	document.getElementById("accion").style.display="none";
	document.getElementById("comedia").style.display="none";
	document.getElementById("drama").style.display="none";
	document.getElementById("ci_fi").style.display="none";
	document.getElementById("cotidiano").style.display="none";
	document.getElementById("romance").style.display="none";
	document.getElementById("policial").style.display="none";
	document.getElementById("misterio").style.display="none";
	document.getElementById("fantasia").style.display="none";
}
function misterio_show() {
	document.getElementById("misterio").style.display="block";
	document.getElementById("accion").style.display="none";
	document.getElementById("comedia").style.display="none";
	document.getElementById("drama").style.display="none";
	document.getElementById("ci_fi").style.display="none";
	document.getElementById("cotidiano").style.display="none";
	document.getElementById("romance").style.display="none";
	document.getElementById("terror").style.display="none";
	document.getElementById("policial").style.display="none";
	document.getElementById("fantasia").style.display="none";
}
function fantasia_show() {
	document.getElementById("fantasia").style.display="block";
	document.getElementById("accion").style.display="none";
	document.getElementById("comedia").style.display="none";
	document.getElementById("drama").style.display="none";
	document.getElementById("ci_fi").style.display="none";
	document.getElementById("cotidiano").style.display="none";
	document.getElementById("romance").style.display="none";
	document.getElementById("terror").style.display="none";
	document.getElementById("misterio").style.display="none";
	document.getElementById("policial").style.display="none";
}

/*calendario*/
function show_lunes() {
	document.getElementById("lunes").style.display="block";
	document.getElementById("martes").style.display="none";
	document.getElementById("miercoles").style.display="none";
	document.getElementById("jueves").style.display="none";
	document.getElementById("viernes").style.display="none";
	document.getElementById("sabado").style.display="none";
	document.getElementById("domingo").style.display="none";
}
function show_martes() {
	document.getElementById("martes").style.display="block";
	document.getElementById("lunes").style.display="none";
	document.getElementById("miercoles").style.display="none";
	document.getElementById("jueves").style.display="none";
	document.getElementById("viernes").style.display="none";
	document.getElementById("sabado").style.display="none";
	document.getElementById("domingo").style.display="none";
}
function show_miercoles() {
	document.getElementById("miercoles").style.display="block";
	document.getElementById("martes").style.display="none";
	document.getElementById("lunes").style.display="none";
	document.getElementById("jueves").style.display="none";
	document.getElementById("viernes").style.display="none";
	document.getElementById("sabado").style.display="none";
	document.getElementById("domingo").style.display="none";
}
function show_jueves() {
	document.getElementById("jueves").style.display="block";
	document.getElementById("martes").style.display="none";
	document.getElementById("miercoles").style.display="none";
	document.getElementById("lunes").style.display="none";
	document.getElementById("viernes").style.display="none";
	document.getElementById("sabado").style.display="none";
	document.getElementById("domingo").style.display="none";
}
function show_viernes() {
	document.getElementById("viernes").style.display="block";
	document.getElementById("martes").style.display="none";
	document.getElementById("miercoles").style.display="none";
	document.getElementById("jueves").style.display="none";
	document.getElementById("lunes").style.display="none";
	document.getElementById("sabado").style.display="none";
	document.getElementById("domingo").style.display="none";
}
function show_sabado() {
	document.getElementById("sabado").style.display="block";
	document.getElementById("martes").style.display="none";
	document.getElementById("miercoles").style.display="none";
	document.getElementById("jueves").style.display="none";
	document.getElementById("viernes").style.display="none";
	document.getElementById("lunes").style.display="none";
	document.getElementById("domingo").style.display="none";
}
function show_domingo() {
	document.getElementById("domingo").style.display="block";
	document.getElementById("martes").style.display="none";
	document.getElementById("miercoles").style.display="none";
	document.getElementById("jueves").style.display="none";
	document.getElementById("viernes").style.display="none";
	document.getElementById("sabado").style.display="none";
	document.getElementById("lunes").style.display="none";
}