/**
 * yidao
 * created by 用车前端组
 */
"use strict";var root=window||{},util=root.util||{},NeiGouInfo=function(t){this.options=$.extend({sel:"",hrefParma:util.getHrefParma(),msg:{m1:"909内购会活动登记已结束"},requestState:{save:!0}},t),this.sel=this.options.sel,this.el=$(this.sel)};$.extend(NeiGouInfo.prototype,{init:function(){var t=this;t.load(),t.addEvent()},load:function(){var t=this;t.options.hrefParma;t.getActiveInfo()},getActiveInfo:function(){var t=this;t.options.hrefParma;util.api({surl:root.PURCHASING_API_PATH+"getGcInfo",type:"get",beforeSend:function(){},success:function(e){var o=e.rpco,i=e.body||{};switch(o){case 200:t.renderActiveInfo(i);break;case 40005:util.tip(t.options.msg.m1,{duration:1e5}),$(".container").hide();break;default:util.tip("查询失败")}},complete:function(){}})},renderActiveInfo:function(t){var e=this;e.options.hrefParma,t.atstate;t.gname&&$(".js_name").html(t.gname),t.mob&&$(".js_phone").html(t.mob),t.refid&&$(".js_sendPerson").html(t.refid),t.regtxt&&$(".js_areaval").html(t.regtxt),t.tkseq&&$(".js_tkseq").html(t.tkseq),t.qrcode&&$(".js_ewm").attr("src",t.qrcode)},addEvent:function(){var t=this,e=util.getClick();t.options.hrefParma;t.el.on(e,"#useRule",function(){$("#dialog").removeClass("dn")}),t.el.on(e,"#dialogClose",function(){$(".dialog").addClass("dn")})}});