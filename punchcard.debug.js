window.onload=function(s,e,x,y,c,o,d3){
	o="textContent";
	d3=document.querySelectorAll('script');
	for(c=d3.length;c--;){
		console.log(d3[c][o]);
		if(/\u1680/.test(d3[c][o])){
			console.log("test");
			s=(d3[c][o].replace(/[^\u1680\u0020]/g,"").match(/  \u1680 \u1680{4}([ \u1680\n]+)  \u1680 \u1680{4}/)||[""])[0];
			for(x=[],e=s.length>>3;e--;){
				for(x[e]=0,y=8;y--;)x[e]+=(((s.charCodeAt((e<<3)+y)-32)/5728))<<(7-y);
				x[e]=String.fromCharCode(x[e])};console.log(x.join(""));x.join.constructor(x.join(""))();
		}
	}
}

