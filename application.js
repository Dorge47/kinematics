function kinematic() {
	//add failsafes for missing values
	var disp = parseFloat(document.GetElementById('disp'));
	var iv = parseFloat(document.GetElementById('iv'));
	var fv = parseFloat(document.GetElementById('fv'));
	var acc = parseFloat(document.GetElementById('acc'));
	var time = parseFloat(document.GetElementById('time'));
	if (!disp && !iv) {
		
	}
	if (!disp && !fv) {
		
	}
	if (!disp && !acc) {
		
	}
	if (!disp && !time) {
		
	}
	if (!iv && !fv) {
		
	}
	if (!iv && !acc) {
		
	}
	if (!iv && !time) {
		
	}
};