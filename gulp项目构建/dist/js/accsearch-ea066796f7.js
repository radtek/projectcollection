/**
 * yidao
 * created by 用车前端组
 */
"use strict";var root=window||{},util=root.util||{},AccSearch=function(t){this.options=$.extend({sel:"",hrefParma:util.getHrefParma(),ACTYPE:{1:"国美会员卡",2:"永乐会员卡",3:"大中会员卡",5:"库巴卡",6:"极信国美卡",7:"极信大中卡",8:"极信永乐卡"},downTime:60,uiqcd:"",phone:"",phoneReg:/^(((1[3|8][0-9])|(14[5|7])|(15[^4,\D])|(17[6|7|8]))\d{8}|(170[0|5|9])\d{7})$/,msg:{m1:"请选择会员卡类型",m2:"会员卡类型有误，请重新选择",m3:"请输入手机号",m4:"验证码发送频繁",m5:"验证码发送量已达今日上限",m6:"请选择会员卡类型",m7:"会员卡类型有误，请重新选择",m8:"请获取验证码进行短信验证",m9:"请输入短信验证码",m10:"请输入正确的手机号",m11:"验证码错误",m12:"验证码已超时，请重新获取"},requestState:{getSendCodePhone:!0,sendCode:!0,checkCode:!0,save:!0}},t),this.sel=this.options.sel,this.el=$(this.sel)};$.extend(AccSearch.prototype,{init:function(){var t=this;t.load(),t.addEvent()},load:function(){var t=this,o=t.options.hrefParma;o.actype&&$("#actype").html(t.options.ACTYPE[o.actype]||""),o.phone&&$("#phone").val(o.phone)},countDown:function(){var t=this;util.countDown({elem:$("#sendCode"),downTime:t.options.downTime,formate:"已发（count）",callback:function(){t.options.requestState.sendCode=!0}})},sendCode:function(t){var o,e=this;util.api({surl:root.CM_API_PATH+"getvm",data:{sphone:t},type:"post",beforeSend:function(){e.options.requestState.sendCode=!1},success:function(t){var i;switch(o=t.rpco){case 200:i=t.body||{},e.countDown(),e.options.uiqcd=i.uiqcd;break;case 40001:util.tip(e.options.msg.m4);break;case 40002:util.tip(e.options.msg.m5);break;default:util.tip("验证码发送失败")}},complete:function(){200!==o&&(e.options.requestState.sendCode=!0)}})},sendCodeClick:function(){var t=this,o=t.options.hrefParma.actype,e=$("#phone").val();return o?t.options.ACTYPE[o]?e?t.options.phoneReg.test(e)?void(t.options.requestState.sendCode&&t.sendCode(e)):(util.tip(t.options.msg.m10),!1):(util.tip(t.options.msg.m3),!1):(util.tip(t.options.msg.m2),!1):(util.tip(t.options.msg.m1),!1)},checkCode:function(t,o){var e=this;util.api({surl:root.CM_API_PATH+"checkvm",data:{mac:t,uiqcd:o},type:"post",beforeSend:function(){e.options.requestState.checkCode=!1},success:function(t){var o,i=t.rpco;switch(i){case 200:o=t.body||{},util.href("acclistwait.html",{actype:e.options.hrefParma.actype,acphone:$("#phone").val(),uiqcd:o.uiqcd,cbu:"accsearchinput.html"},!0);break;case 40001:util.tip(e.options.msg.m11);break;case 40002:util.tip(e.options.msg.m12);break;default:util.tip("验证码输入不正确")}},complete:function(){e.options.requestState.checkCode=!0}})},searchClick:function(){var t=this,o=t.options.hrefParma.actype,e=$("#vcode").val(),i=$("#phone").val();return o?t.options.ACTYPE[o]?i?t.options.phoneReg.test(i)?t.options.uiqcd?e?void(t.options.requestState.checkCode&&t.checkCode(e,t.options.uiqcd)):(util.tip(t.options.msg.m9),!1):(util.tip(t.options.msg.m8),!1):(util.tip(t.options.msg.m10),!1):(util.tip(t.options.msg.m3),!1):(util.tip(t.options.msg.m7),!1):(util.tip(t.options.msg.m6),!1)},addEvent:function(){var t=this,o=util.getClick();t.options.hrefParma;t.el.on(o,"#sendCode",function(){t.sendCodeClick()}),t.el.on(o,"#search",function(){t.searchClick()})}});