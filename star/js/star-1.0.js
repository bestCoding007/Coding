window.onload = function() {
	var pingStar = document.getElementById("pingStar");
	var estimate = document.getElementById("estimate");
	var li = pingStar.getElementsByTagName("li");
	input = document.getElementById("redStart"); //保存所选值
	//通过遍历星星动态增减的方法
	settingStar = function() {
		for(var i = 0; i < li.length; i++) {
			li[i].className = ""; //一开始评价为空
		}
	}
	//遍历循环li里的星星，再将评价输出
	for(var i = 0; i < li.length; i++) {
		li[i].onclick = function() {
			var rel = this.getAttribute("rel");
			settingStar(); //调用星星动态增减方法
			input.value = rel;
			for(var i = 0; i < rel; i++) {
				li[i].className = "on";
			}
			alert("评分为"+rel+"星");
			estimate.innerHTML = this.getAttribute("title");
		}
		//悬停时设置星星数量与评价文本
		li[i].onmouseover = function() {
			var rel = this.getAttribute("rel");
			settingStar(); //调用星星动态增减方法
			for(var i = 0; i < rel; i++) {
				li[i].className = "on";
			}
			estimate.innerHTML = this.getAttribute("title");
		}
		//离开时设置星星数量与评价文本
		li[i].onmouseout = function() {
			settingStar(); //调用星星动态增减方法
			for(var i = 0; i < input.value; i++) {
				li[i].className = "on";
			}
		}
	}
}