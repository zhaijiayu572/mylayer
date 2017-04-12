function Layer() {
    this.close = function (index) {  //用于关闭指定弹窗
          index.remove();
          $('.layer-msk').remove();      //将遮罩也一同移除
    };
    this.otherAlert = function(config){
        var option = {
            title:'提示',
            content:'',
            height:150,
            width:300
        };
        $.extend(option,config);
        $myAlert = $('<div class="layer-alert"></div>');
        $myTitle = $('<h3 class="layer-alert-top"><span class="layer-alert-title">'+option.title+'</span></h3>');
        $closeBtn = $('<span class="layer-alert-close">X</span>');
        $myContent = $('<p class="layer-alert-content">'+option.content+'</p>');
        $confirmBtn = $('<button class="confirm-btn">确定</button>');
        $confirmBtn.on('click',function () {
            this.close($myAlert);
        }.bind(this));
        $closeBtn.on('click',function () {
           this.close($myAlert);
        }.bind(this));
        $mask = $('<div class="layer-msk"></div>').css({width:$('body').width(),height:$('body').height()})
            .on('click',function () {
                this.close($myAlert);
            }.bind(this));
        $mask.appendTo($('body'));
        $closeBtn.appendTo($myTitle);
        $confirmBtn.appendTo($myAlert);
        $myTitle.appendTo($myAlert);
        $myContent.appendTo($myAlert);
        $myAlert.css({height:option.height,width:option.width}).appendTo($('body'));
        return $myAlert;
    };
    this.open = function (config) {
          var option = {
              title:'提示', //如需关闭则传入false
              content:null,  //请传入你需要包裹在弹窗里面的jQ对象或者一个字符串
              height:150,     //在未传入一个对象时默认高度
              width:300        //在未传入一个对象时默认宽度
          };
          $.extend(option,config);
          var $openContainer = $("<div class='layer-open'></div>");
          var $closeBtn = $('<span class="layer-open close-btn">X</span>');
          var $top = $('<div class="layer-open-top"></div>');
          if(!option.title){
              $title = $('<div class="open-title">'+option.title+'</div>');
              $title.appendTo($top);
          }
          $closeBtn.appendTo($top);
          var $body = $('<div class="layer-open-body"></div>');
          if(typeof(option.content)==='object'){
              option.content.appendTo($body);
              $openContainer.css({width:option.content.width()});
          }else{
              var $content = $('<p class="open-content">'+option.content+'</p>');
              $content.appendTo($body);
              $openContainer.css({height:option.height,width:option.width});
          }
          $top.appendTo($openContainer);
          $body.appendTo($openContainer);
          $openContainer.appendTo($('body'));
          return $openContainer;
    }
}
window.layer = new Layer();