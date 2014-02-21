$("body").on("click", ".hit-area", function () {
	window.location=$(this).find("a").attr("href");
});