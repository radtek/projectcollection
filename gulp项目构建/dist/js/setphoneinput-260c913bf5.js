/**
 * yidao
 * created by 用车前端组
 */
"use strict";var root=window||{},util=root.util||{},SetPhoneInput=function(t){this.options=$.extend({sel:"",hrefParma:util.getHrefParma(),phoneReg:/^(((1[3|8][0-9])|(14[5|7])|(15[^4,\D])|(17[6|7|8]))\d{8}|(170[0|5|9])\d{7})$/,operate:"",oldPhone:"",msg:{m1:"请输入手机号",m2:"请输入正确的手机号"}},t),this.sel=this.options.sel,this.el=$(this.sel)};$.extend(SetPhoneInput.prototype,{init:function(){var t=this;t.load(),t.addEvent()},load:function(){var t=this,e=t.options.hrefParma,o=e.phone||"",n=e.operate||"";switch(t.options.operate=n,t.options.oldPhone=o,n){case"add":$("#add").show();break;case"mod":$("#oldPhone").html(o),$("#mod").show();break;case"del":$("#del").show()}},goNextStep:function(){var t=this,e=$(".js-phone:visible").val(),o=t.options.oldPhone,n=t.options.operate,i={};if("mod"===n){if(!o||!t.options.phoneReg.test(o))return!1;i.sphone=o}return e?t.options.phoneReg.test(e)?($.extend(i,{operate:n,phone:e}),void util.href("setphonevcode.html",i)):(util.tip(t.options.msg.m2),!1):(util.tip(t.options.msg.m1),!1)},addEvent:function(){var t=this,e=util.getClick();t.options.hrefParma;t.el.on(e,"#nextStep",function(){t.goNextStep()}),t.el.on("input propertychange","#phone",function(t){var e=$(this).val().replace(/[^0-9]/g,"");$(this).val(e)})}});