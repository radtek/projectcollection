/**
 * yidao
 * created by 用车前端组
 */
"use strict";var root=window||{},util=root.util||{},GomegjNewsClass=function(t){this.options=$.extend({sel:"",hrefParma:util.getHrefParma(),defaultRcid:0,msg:{},requestState:{}},t),this.sel=this.options.sel,this.el=$(this.sel)};$.extend(GomegjNewsClass.prototype,{init:function(){var t=this;t.load(),t.addEvent()},load:function(){var t=this,s=t.options.hrefParma,e=s.rcid||t.options.defaultRcid;1==s.isfirst||$(".goBack").attr("href","javascript:util.href('index.html');").show(),t.getResourceGroup(e)},getResourceGroup:function(t){var s=this;util.api({surl:root.RESGRP_API_PATH+"subgrp",data:{rcid:t},type:"get",beforeSend:function(){util.comShow({txt:"正在努力加载中…",icl:"i-load ro360"})},success:function(t){var e=t.rpco,i=t.body||{};i.subs||[];switch(e){case 200:s.renderResourceGroup(i);break;case 404:$("#noList").show();break;default:util.tip("查询失败")}},complete:function(){util.remComShow()}})},renderResourceGroup:function(t){var s,e=t.subs||[],i="",r=0;t.cname&&$("#title").html(t.cname);for(var o=0,a=e.length;o<a;o++){switch(s="",e[o].sgt){case 1:case 5:s="gomegjnewsclass.html?rcid="+e[o].rcid;break;case 2:case 6:s="gomegjnews.html?rcid="+e[o].rcid;break;case 3:case 7:s="javascript:;"}5!==e[o].sgt&&6!==e[o].sgt?i+='<span class="timgbtxtblk '+(++r%3===0?"bdr0":"")+' js-listItem" href="'+s+'"><img class="timgbtxtblk-img" src="'+e[o].iurl+'"><span class="timgbtxtblk-txt tod">'+e[o].cname+"</span></span>":$("#allNews").html("全部").attr("href",s).show()}a||$("#noList").show(),i&&$("#list").html(i)},addEvent:function(){var t=this,s=util.getClick();t.options.hrefParma;t.el.on(s,".js-listItem",function(){util.href($(this).attr("href"),{isfirst:1})})}});