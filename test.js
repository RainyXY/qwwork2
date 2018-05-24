$(document).ready(function() {
$('body').on("click",'.heart',function(){
    var A=$(this).attr("id");
    var B=A.split("like");
    var messageID=B[1];
    var C=parseInt($("#likeCount"+messageID).html());
    var D=$(this).attr("rel");//如果为Like则执行动画
    if(D =='like')
    {      
            $("#likeCount"+messageID).html(C+1);
            $(this).addClass("heartAnimation").attr("rel","unlike");
        $(this).css("background-position","right");
                //不加这句有bug，动画最后又会到了起点，点击后强制使图片停在最右边，
    }
    else
    {
            $("#likeCount"+messageID).html(C-1);
            $(this).removeClass("heartAnimation").attr("rel","like");
            $(this).css("background-position","left");
               //点击后强制使红心变黑，否则显示悬停状态的红色的心
    }
});
});