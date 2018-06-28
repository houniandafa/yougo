var express = require('express');
var router = express.Router();


var arr = [{
	username: 'yayaya002',
	pwd: 'pass1234',
	qq: '233223',
	wechat: '323232',
	withdraw_pwd: '123456',
	balance: 20
}, {
	username: 'hahah1212',
	pwd: 'pass1234',
	qq: '233223',
	wechat: '323232',
	withdraw_pwd: '123456',
	balance: 20
}, {
	username: '深圳玩',
	pwd: 'pass1234',
	qq: '233223',
	wechat: '323232',
	withdraw_pwd: '123456',
	balance: 20
}, {
	username: 'hellow1323',
	pwd: 'pass1234',
	qq: '233223',
	wechat: '323232',
	withdraw_pwd: '123456',
	balance: 20
}, {
	username: 'ssssss',
	pwd: 'pass1234',
	qq: '233223',
	wechat: '323232',
	withdraw_pwd: '123456',
	balance: 20
}]


var bFlag = false

/* GET users listing. */
router.get('/login', function(req, res, next) {


	for(var i = 0; i < arr.length; i++) {
		if (arr[i].username === req.query.username) {
			if (req.query.pwd === arr[i].pwd) {

				bFlag = true
				res.redirect('/home.html')
			}
		}
	}


	return res.json({
		code: 2,
		msg: '用户名或密码不对'
	})
});


router.get('/login3', function(req, res, next) {


	for(var i = 0; i < arr.length; i++) {
		if (arr[i].username === req.query.username) {
			if (req.query.pwd === arr[i].pwd) {

				bFlag = true
				return res.json({
					code: 1,
					msg: '登录成功'
				})
			}
		}
	}


	return res.json({
		code: 2,
		msg: '用户名或密码不对'
	})
});



router.post('/login', function (req, res, next) {

	for(var i = 0; i < arr.length; i++) {
		if (arr[i].username === req.query.username) {
			if (arr[i].pwd  === req.query.pwd) {

				bFlag = true
				return res.json({
					code: 1,
					msg: '连接成功'
				})
			}
		}
	}
	return res.json({
		code: 2,
		msg: '用户名或密码不对'
	})

})


var count  = 1

router.get('/test', function(req, res, next) {
	console.log('进入api/test')
	count++
	res.send('当前count是 ' + count)
});

module.exports = router
