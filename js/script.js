    function progress(value) {
		
        var parent = $('.progress').width();
		
        var child = parseInt(($("#progressbar").width() / parent * 100).toFixed());
		
		$('#progressbar').width((child + value) * parent / 100);
		
    }

