(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{352:function(n,e,t){var content=t(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(56).default)("f42defd4",content,!0,{sourceMap:!1})},353:function(n,e,t){n.exports=t.p+"img/video-back.6d16448.webp"},354:function(n,e,t){"use strict";t(352)},355:function(n,e,t){var o=t(55)(!1);o.push([n.i,".container[data-v-2d4c48e8]{margin:0 auto;padding-bottom:56.25%}.container .video-player-box[data-v-2d4c48e8]{position:absolute;width:100%;height:100%}.container .video-player-box[data-v-2d4c48e8] >div{width:100%;height:100%}.container .video-player-box[data-v-2d4c48e8] >div .vjs-big-play-button{display:none}@media only screen and (max-width:500px){.container[data-v-2d4c48e8]{padding-bottom:133.33%}}",""]),n.exports=o},356:function(n,e,t){"use strict";t.r(e);var o={data:function(){return{playsinline:!0,playerOptions:{muted:!0,sources:[],autoplay:!0,poster:t(353)}}},mounted:function(){console.log("this is current player instance object",this.myVideoPlayer)},methods:{onPlayerPlay:function(n){},onPlayerPause:function(n){},onPlayerEnded:function(n){},onPlayerLoadeddata:function(n){},onPlayerWaiting:function(n){},onPlayerPlaying:function(n){},onPlayerTimeupdate:function(n){},onPlayerCanplay:function(n){},onPlayerCanplaythrough:function(n){},playerStateChanged:function(n){},playerReadied:function(n){}}},r=(t(354),t(45)),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"container"},[t("div",{directives:[{name:"video-player",rawName:"v-video-player:myVideoPlayer",value:n.playerOptions,expression:"playerOptions",arg:"myVideoPlayer"}],staticClass:"video-player-box",attrs:{playsinline:n.playsinline},on:{play:function(e){return n.onPlayerPlay(e)},pause:function(e){return n.onPlayerPause(e)},ended:function(e){return n.onPlayerEnded(e)},loadeddata:function(e){return n.onPlayerLoadeddata(e)},waiting:function(e){return n.onPlayerWaiting(e)},playing:function(e){return n.onPlayerPlaying(e)},timeupdate:function(e){return n.onPlayerTimeupdate(e)},canplay:function(e){return n.onPlayerCanplay(e)},canplaythrough:function(e){return n.onPlayerCanplaythrough(e)},ready:n.playerReadied,statechanged:function(e){return n.playerStateChanged(e)}}})])}),[],!1,null,"2d4c48e8",null);e.default=component.exports}}]);