/**
 * yidao
 * created by 用车前端组
 */
"use strict";var root=window||{},util=root.util||{},OrdersEty=function(t){this.options=$.extend({sel:"",hrefParma:util.getHrefParma(),curpg:1,len:15,tpage:0,iscrollPaging:null,msg:{}},t),this.sel=this.options.sel,this.el=$(this.sel)};$.extend(OrdersEty.prototype,{init:function(){var t=this;t.load(),t.addEvent()},load:function(){var t=this;t.options.hrefParma;t.getEntityOrder(t.options.curpg,t.options.len)},getEntityOrder:function(t,o){var i=this;util.api({surl:root.AS_API_PATH+"etodlst",data:{curpg:t,len:o},type:"get",beforeSend:function(){util.comShow({txt:"正在努力加载中…",icl:"i-load ro360"})},success:function(t){var o,s,e,n=t.rpco,l=t.body||{};switch(n){case 200:o=l.odlst||[],s=l.tpage||0,i.renderEntityOrder(o,e),i.options.iscrollPaging?i.options.iscrollPaging.reLoadPagingOption({currentPage:i.options.curpg,totalPage:s}):(i.options.iscrollPaging=new IscrollPaging({totalPage:s,pageDataCount:i.options.len,loadDataFun:function(){i.options.curpg++,i.getEntityOrder(i.options.curpg,i.options.len)}}),i.options.iscrollPaging.init());break;case 404:$("#noList").show();break;default:util.tip("查询失败")}},complete:function(){util.remComShow()}})},renderEntityOrder:function(t,o){for(var i="",s="",e="",n=0,l=0,r=t.length;l<r;l++){if(e=t[l].sodlst||[],s="",n=0,i+='<div class="goods-show js-goods" otn="'+t[l].otn+'" dodt="'+t[l].dodt+'"><div class="goods-show-header"><span class="goods-show-date">'+util.formateDate(t[l].dodt,"yyyy-MM-dd")+"</span></div>",1===e.length)i+='<ul class="list-text icon"><li><img class="text-icon" src="'+e[0].gdiul+'" alt=""><div class="text-detail">'+(e[0].gdnm||"")+"</div></li></ul>",n++;else{i+='<div class="goods-show-imglist">';for(var a=0,d=e.length;a<d;a++)i+='<img class="goods-show-imglist-img" src="'+e[a].gdiul+'">',n+=e[a].gdnu;i+="</div>"}i+='<div class="goods-show-footer">订单金额：<span class="hightlight-text">￥'+parseFloat(t[l].odpri/100).toFixed(2)+"</span>共"+n+"件商品</div></div>"}1===$(".iscrollpading-pulltext").length?$(".iscrollpading-pulltext").before(i):$("#list").html(i).show()},addEvent:function(){var t=this,o=util.getClick();t.options.hrefParma;t.el.on(o,"#list .js-goods",function(){var t=$(this).attr("otn")||"",o=$(this).attr("dodt")||"",i={otn:t,dodt:o};util.href("ordersdetety.html",i)})}});