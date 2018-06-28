
var oNavUl = document.getElementsByClassName('nav-ul')[0]
ajax({
	url: 'http://b9088.com/member/gamecategory/?mode=tree',
	success: function (resData) {
		var data
		try {
			data = JSON.parse(resData)
			console.log('哈哈哈哈')
			console.log(data)
			data.length && handleGameCategory(data)
		} catch(e) {
			// statements
			console.log(e);
		}
	},
	error: function (status) {
		console.log('error')
		console.log(status)
	}
})

function handleGameCategory(resArr) {
	if (!resArr) return
	for(var i=0; i<resArr.length; i++){
		var oLi = document.createElement('li')
		oLi.className = 'fl'
		var str = ''
		for(var j=0; j<resArr[i].provider.length; j++){
			str += '<li class="fl"><a href="/gamelist.html"><img src="'+resArr[i].provider[j].icon+'" alt=""></a>\
										<p>'+resArr[i].provider[j].name + resArr[i].provider[j].category_type
.slice(0,2)+'</p>\
									</li>\
									'
		}
		oLi.innerHTML = ''+resArr[i].name+'\
					<span class="triangular"></span>\
						<div class="menu">\
							<div class="menu-one m-c">\
								<ul class="clearfix menu-ul">\
									'+str+'\
								</ul>\
							</div>\
						</div>'
						oNavUl.appendChild(oLi)

		

	}
	var oCiw = document.documentElement.clientWidth || document.body.clientWidth
	var oMen = document.getElementsByClassName('menu')
	var oLideaf = oNavUl.children
	var oMenuUl = document.getElementsByClassName('menu-ul')[1].children
	console.log('oMenuUl')
	console.log(oMenuUl)
	for(var i=0; i<oMen.length;i++){
				oMen[i].style.width = oCiw + 'px'
				oMen[i].style.left = -oMen[i].parentNode.offsetLeft + 'px'
			}

			for(var i=1; i<oLideaf.length;i++){
				oLideaf[i].onmouseenter = function(){
					for(var i=0;i<oMen.length;i++){
						oMen[i].style.display = 'none'
					}
						this.children[1].style.display = 'block'
				}

				oLideaf[i].onmouseleave = function(){
						this.children[1].style.display = 'none'
				}
			}
			var gjsdfjgdl = oLideaf[2].getElementsByClassName('menu-ul')[0].children
			console.log('--------')
			console.log(resArr[1].provider.length)
			for(var j=0; j<resArr[1].provider.length; j++){
				gjsdfjgdl[j].index = j
				gjsdfjgdl[j].onclick = function(){
					// for(var i=0; i<resArr[1].provider.length; i++){
					// 	console.log(resArr[1].provider[i])
					var str = resArr[1].provider[this.index].id
					console.log(str)
					window.localStorage.setItem('setprovider-id',str)
				
					

				}
			}
			// console.log('oNavUl.children')
			// console.log(oNavUl.children)


}