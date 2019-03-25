function init() {
    render()
}


function render() {
    mui.ajax('api/find', {
        data: {

        },
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        timeout: 10000, //超时时间设置为10秒；
        success: function(data) {
            console.log(data)
            var str = '';
            req.data.forEach(function(item) {
                str += `
				<div class="title">
				Rhino犀牛
				</div>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="xq.html">
						<img class="mui-media-object mui-pull-right" src="img/3.jpg">
						<div class="mui-media-body">
							${item.title}
							<p class='mui-ellipsis'>${item.inner}</p>
						</div>
					</a>
				</li>
			</ul>
				`
            })
            document.querySelector('.inner').innerHTML = str
        }
    });
}
init()