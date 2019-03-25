function init() {
    render()
}


function render() {
    mui.ajax('api/findly', {
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
				<li class="mui-table-view-cell mui-media">
                <div class="mui-media-body">
                    ${item.name}
                    <p class='mui-ellipsis'>${item.inner}</p>
                </div>
            </li>
				`
            })
            document.querySelector('.mui-table-view').innerHTML = str
        }
    });
}


init()