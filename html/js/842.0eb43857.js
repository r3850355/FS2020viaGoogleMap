"use strict";(self["webpackChunkfs2020map"]=self["webpackChunkfs2020map"]||[]).push([[842],{3842:(e,t,l)=>{l.r(t),l.d(t,{default:()=>T});var a=l(3673),o=l(2323),s=l(8880);const c={class:"q-pa-md row q-col-gutter-sm"},n={class:"col-md-6 col-12"},m={class:"text-h6"},i={class:"text-center q-mt-md"},u={class:"text-center"},d={class:"text-h4"},r=(0,a._)("span",{class:"text-subtitle"}," MHz",-1),v=(0,a._)("div",{class:"text-overline"},"COM1",-1),_=(0,a._)("div",{class:"text-overline"},"COM1 Decimal",-1),p={class:"text-center"},b={class:"text-h4"},y=(0,a._)("span",{class:"text-subtitle"}," MHz",-1),h=(0,a._)("div",{class:"text-overline"},"COM2",-1),V=(0,a._)("div",{class:"text-overline"},"COM2 Decimal",-1),O={class:"col-md-6 col-12"},w={class:"text-h6"},g={class:"text-overline"},x={class:"text-overline"};function E(e,t,l,E,C,D){const f=(0,a.up)("q-option-group"),S=(0,a.up)("q-slider"),H=(0,a.up)("q-btn"),A=(0,a.up)("q-card-section"),M=(0,a.up)("q-card"),W=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(W,null,{default:(0,a.w5)((()=>[(0,a._)("div",c,[(0,a._)("div",n,[(0,a.Wm)(M,{class:"my-card",flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(A,null,{default:(0,a.w5)((()=>[(0,a._)("div",m,(0,o.zw)(e.$t("instruments.title_frequency_COM")),1),(0,a._)("div",i,[(0,a.Wm)(f,{modelValue:e.comSelect,"onUpdate:modelValue":t[0]||(t[0]=t=>e.comSelect=t),options:e.comOptions,color:"primary",inline:""},null,8,["modelValue","options"])]),(0,a.wy)((0,a._)("div",null,[(0,a._)("div",u,[(0,a._)("span",d,(0,o.zw)(e.com1stby)+"."+(0,o.zw)(e.com1stbyDecimal),1),r]),v,(0,a.Wm)(S,{modelValue:e.com1stby,"onUpdate:modelValue":t[1]||(t[1]=t=>e.com1stby=t),min:118,max:136,color:"blue-4"},null,8,["modelValue"]),_,(0,a.Wm)(S,{modelValue:e.com1stbyDecimal,"onUpdate:modelValue":t[2]||(t[2]=t=>e.com1stbyDecimal=t),min:0,max:95,color:"blue-4"},null,8,["modelValue"]),(0,a.Wm)(H,{color:"grey-9",rounded:"",class:"full-width",onClick:t[3]||(t[3]=t=>e.setCOM(1))},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.$t("instruments.button_set")),1)])),_:1})],512),[[s.F8,1===e.comSelect]]),(0,a.wy)((0,a._)("div",null,[(0,a._)("div",p,[(0,a._)("span",b,(0,o.zw)(e.com2stby)+"."+(0,o.zw)(e.com2stbyDecimal),1),y]),h,(0,a.Wm)(S,{modelValue:e.com2stby,"onUpdate:modelValue":t[4]||(t[4]=t=>e.com2stby=t),min:118,max:136,color:"blue-4"},null,8,["modelValue"]),V,(0,a.Wm)(S,{modelValue:e.com2stbyDecimal,"onUpdate:modelValue":t[5]||(t[5]=t=>e.com2stbyDecimal=t),min:0,max:95,color:"blue-4"},null,8,["modelValue"]),(0,a.Wm)(H,{color:"grey-9",push:"",class:"full-width",onClick:t[6]||(t[6]=t=>e.setCOM(2))},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.$t("instruments.button_set")),1)])),_:1})],512),[[s.F8,2===e.comSelect]])])),_:1})])),_:1})]),(0,a._)("div",O,[(0,a.Wm)(M,{class:"my-card",flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(A,null,{default:(0,a.w5)((()=>[(0,a._)("div",w,(0,o.zw)(e.$t("instruments.title_frequency_NAV")),1),(0,a._)("div",g,"NAV1 -> "+(0,o.zw)(e.nav1),1),(0,a.Wm)(S,{modelValue:e.nav1,"onUpdate:modelValue":t[7]||(t[7]=t=>e.nav1=t),min:108,max:117.9,step:.1,color:"blue-7",onChange:t[8]||(t[8]=t=>e.changeEvent("nav1",e.nav1))},null,8,["modelValue","max","step"])])),_:1}),(0,a.Wm)(A,null,{default:(0,a.w5)((()=>[(0,a._)("div",x,"NAV2 -> "+(0,o.zw)(e.nav2),1),(0,a.Wm)(S,{modelValue:e.nav2,"onUpdate:modelValue":t[9]||(t[9]=t=>e.nav2=t),min:108,max:117.9,step:.1,color:"blue-8",onChange:t[10]||(t[10]=t=>e.changeEvent("nav2",e.nav2))},null,8,["modelValue","max","step"])])),_:1})])),_:1})])])])),_:1})}var C=l(1959),D=l(5474);const f=(0,a.aZ)({setup(){return{heading:(0,C.iH)(0),vorobs1:(0,C.iH)(0),vorobs2:(0,C.iH)(0),step:(0,C.iH)(!0),com1:(0,C.iH)(118),com2:(0,C.iH)(118),com1stby:(0,C.iH)(118),com1stbyDecimal:(0,C.iH)(0),com2stby:(0,C.iH)(118),com2stbyDecimal:(0,C.iH)(0),nav1:(0,C.iH)(108),nav2:(0,C.iH)(108),comSelect:(0,C.iH)(1),comOptions:[{label:"COM1",value:1},{label:"COM2",value:2}]}},methods:{changeEvent(e,t){const l={heading:"HEADING_BUG_SET",vorobs1:"VOR1_SET",vorobs2:"VOR2_SET",nav1:"NAV1_RADIO_SET",nav2:"NAV2_RADIO_SET",com1:"COM_RADIO_SET",com1stby:"COM_RADIO_SET",com2:"COM2_RADIO_SET",com2stby:"COM2_RADIO_SET"},a=["nav1","nav2","com1","com1stby","com2","com2stby"];a.includes(e)&&(t=parseInt(100*t-1e4,16)),D.api.post(`/event/${l[e]}/trigger`,{value_to_use:t})},clickEvent(e,t){const l={heading:"PLANE_HEADING_DEGREES_TRUE",vorobs1:"NAV_OBS:1",vorobs2:"NAV_OBS:2"};D.api.get(`/datapoint/${l[e]}/get`).then((l=>{let a=l.data;"heading"===e?a*=57.295779513:a+=t,console.log(57.295779513*l.data,a),this.changeEvent(e,a)}))},setCOM(e){1===e?this.changeEvent("com1stby",parseFloat(`${this.com1stby}.${this.com1stbyDecimal}`)):this.changeEvent("com2stby",parseFloat(`${this.com2stby}.${this.com2stbyDecimal}`))}}});var S=l(4260),H=l(4379),A=l(151),M=l(5589),W=l(6359),z=l(4015),q=l(4607),U=l(7518),N=l.n(U);const R=(0,S.Z)(f,[["render",E]]),T=R;N()(f,"components",{QPage:H.Z,QCard:A.Z,QCardSection:M.Z,QOptionGroup:W.Z,QSlider:z.Z,QBtn:q.Z})}}]);