/**
 * yidao
 * created by 用车前端组
 */
"use strict";var root=window||{},util=root.util||{},Carousel=function(e){this.options=$.extend({carouselList:{},iScrollConfig:{scrollX:!0,scrollY:!1,eventPassthrough:!0,momentum:!1,snap:"a"},carouselTime:5e3,carouselWaitTime:3e3,carouselIntervalList:{},carouselPassFirstRefresh:{}},e)};$.extend(Carousel.prototype,{init:function(){var e=this;e.load(),e.addEvent()},load:function(){var e=this;e.loadCarousel(),e.showFirstCarouselItem(),e.bindCarouselEvent(),e.setCarouselInterval()},loadCarousel:function(){var e=this;e.calculateCarousel(),e.refreshCarousel()},calculateCarousel:function(){var e=this;$(".carousel").each(function(t,o){var s,r,i=$(o).width(),n=$(".item-blk > *",o).length;n>1&&!e.options.carouselPassFirstRefresh[t]&&(e.options.carouselPassFirstRefresh[t]=!0,n+=2,s=$(".item-blk > *:first",o).clone(),r=$(".item-blk > *:last",o).clone(),s.insertAfter($(".item-blk > *:last",o)),r.insertBefore($(".item-blk > *:first",o))),$(".item-blk > *",o).width(i),$(".item-blk",o).width(i*n).css("visibility","visible")})},refreshCarousel:function(){var e=this;$(".carousel").each(function(t,o){var s=$(".item-blk > *",o).length;return s<2||void(e.options.carouselList[t]=e.refreshItemCarousel(o,e.options.carouselList[t]))})},refreshItemCarousel:function(e,t){var o=this;return t?t.refresh():t=new IScroll(e,o.options.iScrollConfig),t},showFirstCarouselItem:function(){var e=this;$(".carousel").each(function(t,o){var s=e.options.carouselList[t],r=$(".item-blk > *",o).length;return r<2||void s.goToPage(1,0,0)})},setCarouselInterval:function(){var e=this;$(".carousel").each(function(t,o){var s=$(".item-blk > *",o).length;return s<2||void e.setItemCarouselInterval(t)})},setItemCarouselInterval:function(e){var t=this;clearInterval(t.options.carouselIntervalList[e]),t.options.carouselIntervalList[e]=setInterval(function(){t.options.carouselList[e].next()},t.options.carouselTime)},bindCarouselEvent:function(){var e=this;$(".carousel").each(function(t,o){var s=e.options.carouselList[t],r=$(".item-blk > *",o).length;return!s||(r<2||(s.on("scrollEnd",function(){var e=this.currentPage.pageX;0===e?s.goToPage(r-2,0,0):e===r-1&&s.goToPage(1,0,0),e=this.currentPage.pageX-1,$(".contrl-blk a",o).removeClass("cur"),$(".contrl-blk a",o).eq(e).addClass("cur")}),$(o).on("touchstart",function(){clearInterval(e.options.carouselIntervalList[t])}),void $(o).on("touchend",function(){setTimeout(function(){e.setItemCarouselInterval(t)},e.options.carouselWaitTime)})))})},addEvent:function(){var e=this;util.getClick();$(window).on("resize",function(){e.loadCarousel()})}});