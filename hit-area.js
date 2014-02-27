(function() {
	$(document).ready(function() {
		var click_timeout_threshold = 200,
			move_pixels_threshold = 50,
			start_time,
			start_x,
			start_y;

		function start(event) {
			start_time = new Date().getTime();
			start_x = event.pageX;
			start_y = event.pageY;
		}

		function stop(event) {
			
			if (new Date().getTime() - start_time < click_timeout_threshold
				&& Math.abs(start_x - event.pageX) < move_pixels_threshold
				&& Math.abs(start_y - event.pageY) < move_pixels_threshold) {
				window.location=$(this).find("a").attr("href");
			}

		}

		$("body").on("touchstart.hitarea mousedown.hitarea", ".hit-area", start);

		$("body").on("touchend.hitarea mouseup.hitarea", ".hit-area", stop);
	});

})()