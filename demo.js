function Layer() {
    this.otherAlert = function(config){
        var option = {
            title:'提示',
            content:'',
            height:150,
            width:300
        };
        $.extend(option,config);
        $myAlert = $('<div class="layer-alert"></div>');
        $myTitle = $('<h3 class="layer-alert-top"><span class="layer-alert-title">'+option.title+'</span><span class="layer-alert-close">X</span></h3>');
        $myContent = $('<p class="layer-alert-content">'+option.content+'</p>');
        $myTitle.appendTo($myAlert);
        $myContent.appendTo($myAlert);
        $myAlert.css({height:option.height,width:option.width}).appendTo($('body'));
    }
}
