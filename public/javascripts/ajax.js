function json2url(date) {
	var str = ''
	var n=0
	var len = Object.keys(date).length
	for(var name in date){
		n++
		str += name
		str += '='
		str += date.name
		if (n !== len) {
			str += '&'	
		}
		
	}
	return str
}

function ajax(json) {
	if (!json.url) return
	var type = json.type || 'get'
	var date = json.date || {}
	if (window.XMLHttpRequest) {
		var oAjax = new XMLHttpRequest()
	}else{
		var oAjax = ActiveXObject('Microsoft.XMLHTTP');
	}

	if (type.toLowerCase()==='get') {
		oAjax.open('get',json.url + '?' + json2url(date))
		oAjax.send()
	}else{
		oAjax.open('post',json.url,true)
		oAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		oAjax.send(json2url(date))
	}

	oAjax.onreadystatechange = function(){
		if (oAjax.readyState ===4) {
			if (oAjax.status >=200 &&oAjax.status<300 || oAjax.status ===304) {
				json.success &&json.success(oAjax.responseText)
			}else{
				json.error && json.error(ajax.status)
			}
		}
	}
	
}

