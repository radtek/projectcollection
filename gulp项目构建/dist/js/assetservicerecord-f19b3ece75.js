/**
 * yidao
 * created by 用车前端组
 */
"use strict";var root=window||{},util=root.util||{},AssetServiceRecord=function(t){this.options=$.extend({sel:"",hrefParma:util.getHrefParma(),asrlist:[]},t),this.sel=this.options.sel,this.el=$(this.sel)};$.extend(AssetServiceRecord.prototype,{init:function(){var t=this;t.load(),t.addEvent()},load:function(){var t=this;t.options.hrefParma},renderAssetServiceRecordList:function(t){},getAssetServiceRecordList:function(){var t=this;util.api({surl:root.AS_API_PATH+"asserlist",type:"get",success:function(e){var s=e.rpco,i=e.body||{},r=i.asrlist||[];switch(s){case 200:t.options.asrlist=r||[],t.renderAssetServiceRecordList(r);break;case 404:$("#noList").show();break;default:util.tip("查询失败")}}})},addEvent:function(){var t=this;util.getClick(),t.options.hrefParma}});