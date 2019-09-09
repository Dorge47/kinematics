function kinematic() {
	//add failsafes for missing values
	var disp = parseFloat(document.GetElementById('disp'));
	var iv = parseFloat(document.GetElementById('iv'));
	var fv = parseFloat(document.GetElementById('fv'));
	var acc = parseFloat(document.GetElementById('acc'));
	var time = parseFloat(document.GetElementById('time'));
	if (!disp && !iv) { //only works if no value entered is zero MASSIVE OVERSIGHT FIX ASAP
		iv = fv - acc * time;
		disp = iv * time + 0.5 * acc * Math.pow(time, 2);
	}
	if (!disp && !fv) {//will run unnecessarily if any entered or calculated value is zero
		disp = iv * time + 0.5 * acc * Math.pow(time, 2);
		fv = iv + acc * time;
	}
	if (!disp && !acc) {
		acc = (fv - iv) / time;
		disp = iv * time + 0.5 * acc * Math.pow(time, 2);
	}
	if (!disp && !time) {
		time = (fv - iv) / acc;
		disp = iv * time + 0.5 * acc * Math.pow(time, 2);
	}
	if (!iv && !fv) {
		iv = (disp - 0.5 * acc * Math.pow(time, 2)) / time;
		fv = iv + acc * time;
	}
	if (!iv && !acc) {
		acc = (fv * time - disp) / (0.5 * Math.pow(time, 2));
		iv = fv - acc * time;
	}
	if (!iv && !time) {
		iv = Math.pow((Math.pow(fv, 2) - 2 * acc * disp), 0.5);
		time = (fv - iv) / acc;
	}
	if (!fv && !acc) {
		acc = 2 * Math.pow(time, 2) * (disp - iv * time);
		fv = iv + acc * time;
	}
	if (!fv && !time) {
		fv = Math.pow((Math.pow(iv, 2) + 2 * acc * disp), 0.5);
		fv = iv + acc * time;
	}
	if (!acc && !time) {
		time = (2 * disp) / (iv + fv);
		acc = (fv - iv) / time;
	}
};
