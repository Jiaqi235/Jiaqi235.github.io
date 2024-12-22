(()=>{"use strict";var e={163:(e,t,s)=>{var a=s(471),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"layout-wrapper"},[t("main",{ref:"mainContent",staticClass:"main-content scrollable"},[t("router-view")],1)])])},r=[],n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[e.showOverlay?t("div",{staticClass:"background-overlay",class:{"show-overlay":e.showOverlay},on:{click:e.toggleSidebar}}):e._e(),t("aside",{staticClass:"side-navbar scrollable",class:{open:e.isOpen&&!e.isSmallScreen,small:e.isSmallScreen||!e.isOpen,hidden:e.isHidden,"show-overlay":e.showOverlay}},[t("nav",{staticClass:"nav-style"},[t("li",[t("router-link",{staticClass:"routerlink",attrs:{to:"/tools","exact-active-class":"active"},nativeOn:{click:function(t){return e.toggleSidebar.apply(null,arguments)}}},[t("div",{staticClass:"wrapper"},[t("i",{staticClass:"fas fa-tools"}),t("span",{staticClass:"tab-text"},[e._v("Tools")])])])],1),t("li",[t("router-link",{staticClass:"routerlink",attrs:{to:"/games","active-class":"active"},nativeOn:{click:function(t){return e.toggleSidebar.apply(null,arguments)}}},[t("div",{staticClass:"wrapper"},[t("i",{staticClass:"fas fa-gamepad"}),t("span",{staticClass:"tab-text"},[e._v("Games")])])])],1),t("li",[t("router-link",{staticClass:"routerlink",attrs:{to:"/feedback","active-class":"active"},nativeOn:{click:function(t){return e.toggleSidebar.apply(null,arguments)}}},[t("div",{staticClass:"wrapper"},[t("i",{staticClass:"fas fa-comment"}),t("span",{staticClass:"tab-text"},[e._v("Feedback")])])])],1),t("li",[t("router-link",{staticClass:"routerlink",attrs:{to:"/about","active-class":"active"},nativeOn:{click:function(t){return e.toggleSidebar.apply(null,arguments)}}},[t("div",{staticClass:"wrapper"},[t("i",{staticClass:"fas fa-info-circle"}),t("span",{staticClass:"tab-text"},[e._v("About")])])])],1)])]),t("div",{staticClass:"main-content"},[t("router-view")],1)])},o=[];const c={name:"App",data(){return{isOpen:!0,isSmallScreen:!1,isHidden:!1,showOverlay:!1}},methods:{toggleSidebar(){this.isOpen=!this.isOpen,this.updateOverlay()},updateOverlay(){this.isSmallScreen||this.isHidden?this.showOverlay=this.isOpen:this.showOverlay=!1},handleResize(){const e=window.innerWidth;this.isSmallScreen=e<=980&&e>800,this.isHidden=e<=800}},mounted(){this.handleResize(),window.addEventListener("resize",this.handleResize)},beforeDestroy(){window.removeEventListener("resize",this.handleResize)}},l=c;var u=s(656),p=(0,u.A)(l,n,o,!1,null,"b042430c",null);const d=p.exports;var h=s(173),f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"kolbs-reflection"},[t("h1",[e._v("Kolb's Cycle Number "+e._s(e.currentCycle))]),t("div",{staticClass:"header"},[t("div",{staticClass:"header-left"},[t("button",{staticClass:"reset-btn",on:{click:e.resetCycle}},[t("i",{staticClass:"fas fa-redo"}),e._v(" Reset ")])]),t("div",{staticClass:"page-indicator-wrapper"},[t("div",{staticClass:"navigation-buttons"},[t("button",{staticClass:"extreme-left",on:{click:e.goToLeftmostPage}},[t("i",{staticClass:"fas fa-step-backward"})]),t("button",{staticClass:"previous",on:{click:e.goToPreviousPage}},[t("i",{staticClass:"fas fa-chevron-left"})]),t("strong",{staticClass:"center"},[e._v(e._s(e.currentCycle)+" / "+e._s(e.cyclesData.length))]),t("button",{staticClass:"next",on:{click:e.goToNextPage}},[t("i",{staticClass:"fas fa-chevron-right"})]),t("button",{staticClass:"extreme-right",on:{click:e.goToRightmostPage}},[t("i",{staticClass:"fas fa-step-forward"})])])]),t("div",{staticClass:"header-right"},[t("button",{staticClass:"upload-btn",on:{click:e.uploadCycle}},[t("i",{staticClass:"fas fa-cloud-upload-alt"}),e._v(" Upload ")]),t("button",{staticClass:"add-btn",on:{click:e.saveCycle}},[t("i",{staticClass:"fas fa-save"}),e._v(" Save ")]),t("button",{staticClass:"add-btn",on:{click:e.addCycle}},[t("i",{staticClass:"fas fa-plus-circle"}),e._v(" Add ")])])]),t("div",{staticClass:"kolbs-cycle"},[t("div",{staticClass:"cycle-step",class:{active:1===e.currentStep,"step-1":!0,completed:e.currentStep>1},on:{click:function(t){return e.setStep(1)}}},[e._m(0)]),t("div",{staticClass:"cycle-arrow",class:{active:e.currentStep>=2}},[t("i",{staticClass:"fas fa-arrow-right"})]),t("div",{staticClass:"cycle-step",class:{active:2===e.currentStep,"step-2":!0,completed:e.currentStep>2},on:{click:function(t){return e.setStep(2)}}},[e._m(1)]),t("div",{staticClass:"cycle-arrow",class:{active:e.currentStep>=3}},[t("i",{staticClass:"fas fa-arrow-right"})]),t("div",{staticClass:"cycle-step",class:{active:3===e.currentStep,"step-3":!0,completed:e.currentStep>3},on:{click:function(t){return e.setStep(3)}}},[e._m(2)]),t("div",{staticClass:"cycle-arrow",class:{active:e.currentStep>=4}},[t("i",{staticClass:"fas fa-arrow-right"})]),t("div",{staticClass:"cycle-step",class:{active:4===e.currentStep,"step-4":!0,completed:e.currentStep>4},on:{click:function(t){return e.setStep(4)}}},[e._m(3)])]),t("div",{staticClass:"step-content"},[1===e.currentStep?t("div",{staticClass:"step-form"},[t("span",{staticClass:"step-wrapper"},[t("h2",[e._v("Step 1: Experience")]),t("button",{staticClass:"help-button",attrs:{type:"button"},on:{click:e.showHelp}},[t("i",{staticClass:"fas fa-info-circle"}),e._v(" Guidelines ")])]),t("div",{staticClass:"form-section"},[t("label",{attrs:{for:"experience"}},[e._v(" What experience do you want to reflect on? ")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.cyclesData[e.currentCycle-1].experience,expression:"cyclesData[currentCycle - 1].experience"}],attrs:{id:"experience",placeholder:"Example: I noticed that I’ve been having trouble falling asleep lately and often feel tired during the day."},domProps:{value:e.cyclesData[e.currentCycle-1].experience},on:{input:function(t){t.target.composing||e.$set(e.cyclesData[e.currentCycle-1],"experience",t.target.value)}}}),t("label",{attrs:{for:"motivation"}},[e._v(" Why do you want to improve on this? ")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.cyclesData[e.currentCycle-1].motivation,expression:"cyclesData[currentCycle - 1].motivation"}],attrs:{id:"motivation",placeholder:"Example: I want to improve my sleep habits as I know the impact on the energy I have during the day."},domProps:{value:e.cyclesData[e.currentCycle-1].motivation},on:{input:function(t){t.target.composing||e.$set(e.cyclesData[e.currentCycle-1],"motivation",t.target.value)}}}),t("div",{staticClass:"buttons"},[t("button",{attrs:{disabled:1===e.currentStep},on:{click:e.previousStep}},[e._v("Previous Step")]),t("button",{on:{click:e.nextStep}},[e._v("Next Step")])])])]):e._e(),2===e.currentStep?t("div",{staticClass:"step-form"},[t("span",{staticClass:"step-wrapper"},[t("h2",[e._v("Step 2: Reflection")]),t("button",{staticClass:"help-button",attrs:{type:"button"},on:{click:e.showHelp}},[t("i",{staticClass:"fas fa-info-circle"}),e._v(" Guidelines ")])]),t("div",{staticClass:"form-section"},[t("label",{attrs:{for:"sequence"}},[e._v("List and describe the sequence of events, in chronological order")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.cyclesData[e.currentCycle-1].sequence,expression:"cyclesData[currentCycle - 1].sequence"}],attrs:{id:"sequence",placeholder:"Describe the events like watching a movie or having a mirror in front of you"},domProps:{value:e.cyclesData[e.currentCycle-1].sequence},on:{input:function(t){t.target.composing||e.$set(e.cyclesData[e.currentCycle-1],"sequence",t.target.value)}}}),t("label",{attrs:{for:"feelings"}},[e._v("How did you feel about the experience?")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.cyclesData[e.currentCycle-1].feelings,expression:"cyclesData[currentCycle - 1].feelings"}],attrs:{id:"feelings",placeholder:"Be specific and detailed about how you felt and when you felt this way. Heightened emotions often indicate key parts of the process that contributed to success or failure. For example, we can feel frustrated before we cognitively recognise which parts of the process make us feel that way."},domProps:{value:e.cyclesData[e.currentCycle-1].feelings},on:{input:function(t){t.target.composing||e.$set(e.cyclesData[e.currentCycle-1],"feelings",t.target.value)}}}),t("label",{attrs:{for:"triggers"}},[e._v("What were the triggers to you feeling the way you did?")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.cyclesData[e.currentCycle-1].triggers,expression:"cyclesData[currentCycle - 1].triggers"}],attrs:{id:"triggers",placeholder:"Triggers are cues, signs, events, actions, or exposures that made you feel or act a certain way. For example, some people are triggered to procrastinate when they see a social media icon. You might be triggered to feel very uncomfortable while learning as soon as you realise there are many potential relationships to think about."},domProps:{value:e.cyclesData[e.currentCycle-1].triggers},on:{input:function(t){t.target.composing||e.$set(e.cyclesData[e.currentCycle-1],"triggers",t.target.value)}}}),t("label",{attrs:{for:"difficultiesSuccesses"}},[e._v("Which aspects (if any) of the process felt especially difficult? Which aspects felt like they went well?")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.cyclesData[e.currentCycle-1].difficultiesSuccesses,expression:"cyclesData[currentCycle - 1].difficultiesSuccesses"}],attrs:{id:"difficultiesSuccesses",placeholder:"Reflect on your actions and thoughts"},domProps:{value:e.cyclesData[e.currentCycle-1].difficultiesSuccesses},on:{input:function(t){t.target.composing||e.$set(e.cyclesData[e.currentCycle-1],"difficultiesSuccesses",t.target.value)}}}),t("label",{attrs:{for:"challengeResponse"}},[e._v("How did you respond to challenges and difficulties during this process?")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.cyclesData[e.currentCycle-1].challengeResponse,expression:"cyclesData[currentCycle - 1].challengeResponse"}],attrs:{id:"challengeResponse",placeholder:"This could include mental or physical activities you used to try and overcome the issue. You may have tried to avoid, bypass, or retreat from the difficulty. Be specific and detailed. It's important to be honest with ourselves and reflect on how we truly responded, and not how we wish we would have. Skip this question if there were no difficulties."},domProps:{value:e.cyclesData[e.currentCycle-1].challengeResponse},on:{input:function(t){t.target.composing||e.$set(e.cyclesData[e.currentCycle-1],"challengeResponse",t.target.value)}}}),t("label",{attrs:{for:"why"}},[e._v("Why do you think you acted the way you did during this experience?")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.cyclesData[e.currentCycle-1].why,expression:"cyclesData[currentCycle - 1].why"}],attrs:{id:"why",placeholder:'This question challenges your metacognition (thinking about thinking). Instead of thinking about the events of what happened and how you felt during the experience, reflect on what emotions or thoughts drove you to act and feel the way you did. Rather than reflecting on "what", we should reflect on "why". This is different from triggers because triggers are often external.'},domProps:{value:e.cyclesData[e.currentCycle-1].why},on:{input:function(t){t.target.composing||e.$set(e.cyclesData[e.currentCycle-1],"why",t.target.value)}}}),t("div",{staticClass:"buttons"},[t("button",{attrs:{disabled:1===e.currentStep},on:{click:e.previousStep}},[e._v("Previous Step")]),t("button",{on:{click:e.nextStep}},[e._v("Next Step")])])])]):e._e(),3===e.currentStep?t("div",{staticClass:"step-form"},[t("span",{staticClass:"step-wrapper"},[t("h2",[e._v("Step 3: Abstraction")]),t("button",{staticClass:"help-button",attrs:{type:"button"},on:{click:e.showHelp}},[t("i",{staticClass:"fas fa-info-circle"}),e._v(" Guidelines ")])]),t("div",{staticClass:"form-section"},[t("label",{attrs:{for:"abstraction"}},[e._v("What habits, beliefs, or tendencies can you identify from the reflection that explain why you acted the way you did?")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.cyclesData[e.currentCycle-1].abstraction,expression:"cyclesData[currentCycle - 1].abstraction"}],attrs:{id:"abstraction",placeholder:"Identify any trends or tendencies"},domProps:{value:e.cyclesData[e.currentCycle-1].abstraction},on:{input:function(t){t.target.composing||e.$set(e.cyclesData[e.currentCycle-1],"abstraction",t.target.value)}}}),t("label",{attrs:{for:"similarities"}},[e._v("Do you act or respond similarly in other parts of your life? How might this impact other areas?")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.cyclesData[e.currentCycle-1].similarities,expression:"cyclesData[currentCycle - 1].similarities"}],attrs:{id:"similarities",placeholder:"Reflect on similar patterns in your life"},domProps:{value:e.cyclesData[e.currentCycle-1].similarities},on:{input:function(t){t.target.composing||e.$set(e.cyclesData[e.currentCycle-1],"similarities",t.target.value)}}}),t("div",{staticClass:"buttons"},[t("button",{attrs:{disabled:1===e.currentStep},on:{click:e.previousStep}},[e._v("Previous Step")]),t("button",{on:{click:e.nextStep}},[e._v("Next Step")])])])]):e._e(),4===e.currentStep?t("div",{staticClass:"step-form"},[t("span",{staticClass:"step-wrapper"},[t("h2",[e._v("Step 4: Experiment")]),t("button",{staticClass:"help-button",attrs:{type:"button"},on:{click:e.showHelp}},[t("i",{staticClass:"fas fa-info-circle"}),e._v(" Guidelines ")])]),t("div",{staticClass:"form-section"},[t("label",{attrs:{for:"experiment"}},[e._v("List potential solutions or actions to experiment with:")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.cyclesData[e.currentCycle-1].experiment,expression:"cyclesData[currentCycle - 1].experiment"}],attrs:{id:"experiment",placeholder:"List some potential solutions and actions to experiment on:"},domProps:{value:e.cyclesData[e.currentCycle-1].experiment},on:{input:function(t){t.target.composing||e.$set(e.cyclesData[e.currentCycle-1],"experiment",t.target.value)}}}),t("div",{staticClass:"buttons"},[t("button",{attrs:{disabled:1===e.currentStep},on:{click:e.previousStep}},[e._v("Previous Step")]),t("button",{staticClass:"download-button",on:{click:e.downloadPDF}},[e._v("Download PDF")])])])]):e._e()]),e.showHelpText?t("div",[t("div",{staticClass:"help-popup"},[t("button",{staticClass:"close-btn",on:{click:e.closeHelp}},[e._v("✖")]),t("div",{staticClass:"help-content"},[t("h2",[e._v(e._s(e.stepHelpTitle))]),t("p",{domProps:{innerHTML:e._s(e.stepHelpContent)}})])]),t("span",{staticClass:"background"})]):e._e()])},v=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"icon-wrapper"},[t("i",{staticClass:"fas fa-calendar-check"}),t("span",{staticClass:"cycle-label"},[e._v("Experience")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"icon-wrapper"},[t("i",{staticClass:"fas fa-eye"}),t("span",{staticClass:"cycle-label"},[e._v("Reflection")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"icon-wrapper"},[t("i",{staticClass:"fas fa-brain"}),t("span",{staticClass:"cycle-label"},[e._v("Abstraction")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"icon-wrapper"},[t("i",{staticClass:"fas fa-flask"}),t("span",{staticClass:"cycle-label"},[e._v("Experiment")])])}];const y={data(){return{currentCycle:1,currentStep:1,stepHelpTitle:"Help",stepHelpContent:"This is a help message for the current step.",cyclesData:[{experience:"",motivation:"",sequence:"",feelings:"",triggers:"",difficultiesSuccesses:"",challengeResponse:"",why:"",abstraction:"",similarities:"",experiment:""}],showHelpText:!1}},mounted(){this.updateHelpData()},watch:{currentStep(){this.updateHelpData()}},methods:{nextStep(){this.currentStep<4&&this.currentStep++},previousStep(){this.currentStep>1&&this.currentStep--},setStep(e){this.currentStep=e},downloadPDF(){const{jsPDF:e}=window.jspdf,t=new e,s=prompt("Enter the file name for the PDF:","kolbs-reflection.pdf");s?(this.cyclesData.forEach(((e,s)=>{const a=s+1;t.setFontSize(16),t.setFont("Helvetica","bold"),t.text(`Cycle ${a}`,10,10),t.setFontSize(14),t.setFont("Helvetica","bold"),t.text("1. Experience & Motivation:",10,20),t.setFont("Helvetica","normal"),t.text(`${e.experience}`,10,25),t.text(`${e.motivation}`,10,30),t.setFontSize(14),t.setFont("Helvetica","bold"),t.text("2. Reflection:",10,40),t.setFont("Helvetica","normal"),t.text(`${e.sequence}`,10,45),t.text(`${e.feelings}`,10,50),t.text(`${e.triggers}`,10,55),t.text(`${e.difficultiesSuccesses}`,10,60),t.text(`${e.challengeResponse}`,10,65),t.text(`${e.why}`,10,70),t.setFontSize(14),t.setFont("Helvetica","bold"),t.text("3. Abstraction:",10,80),t.setFont("Helvetica","normal"),t.text(`${e.abstraction}`,10,85),t.text(`${e.similarities}`,10,90),t.setFontSize(14),t.setFont("Helvetica","bold"),t.text("4. Experiment:",10,100),t.setFont("Helvetica","normal"),t.text(`${e.experiment}`,10,105),s<this.cyclesData.length-1&&t.addPage()})),t.save(s)):alert("File name is required. PDF not downloaded.")},saveCycle(){const e=prompt("Enter the file name:","kolbs-reflection.json");if(!e)return;const t=JSON.stringify(this.cyclesData),s=new Blob([t],{type:"application/json"}),a=URL.createObjectURL(s),i=document.createElement("a");i.href=a,i.download=e,i.click(),URL.revokeObjectURL(a)},uploadCycle(){const e=document.createElement("input");e.type="file",e.accept=".json",e.addEventListener("change",(e=>{const t=e.target.files[0];if(t){const e=new FileReader;e.onload=e=>{try{const t=JSON.parse(e.target.result);this.cyclesData=t,alert("File uploaded and data loaded successfully.")}catch(t){alert("There was an error reading the file.")}},e.readAsText(t)}})),e.click()},showHelp(){this.showHelpText=!0,console.log("Help button clicked")},closeHelp(){this.showHelpText=!1},goToLeftmostPage(){this.currentCycle=1},goToPreviousPage(){this.currentCycle>1&&(this.currentCycle--,this.currentStep=4)},goToNextPage(){this.currentCycle<this.cyclesData.length&&(this.currentCycle++,this.currentStep=1)},goToRightmostPage(){this.currentCycle=this.cyclesData.length},updateHelpData(){1===this.currentStep?(this.stepHelpTitle="Guidelines for experience",this.stepHelpContent="\n         <div>\n          <br><p><strong>Process-focused:</strong> Avoid reflecting on outcomes (e.g., test results) as this is not a process. Focus on the problematic part of the result, such as the process leading to the result or your reaction to it.</p>\n          <br><p><strong>Specific:</strong> Avoid reflecting on many events and activities, as this will make it difficult to produce a targeted and focused reflection. To reflect on multiple skills and experiences, complete multiple separate cycles to keep each cycle focused.</p>\n          <br><p><strong>Recent:</strong> Reflecting on experiences that happened too long ago makes it easier to forget important parts of the process and increases the chances of error.</p>\n          <br><p><strong>Concise:</strong> The experience is usually only one sentence, as we will elaborate on it in the next steps.</p>\n        </div>"):2===this.currentStep?(this.stepHelpTitle="Guidelines for reflection",this.stepHelpContent="\n        <div>\n          <br><p><strong>Be Honest: </strong>Reflect truthfully about your experience without judgment.\n          <br><br><p><strong>Focus on Details: </strong>Pay attention to specific moments or feelings that stood out.\n          <br><br><p><strong>Practice Self-Awareness: </strong>Try to increase your awareness during the experience for better reflection later.\n          <br><br><p><strong>Keep It Simple: </strong>Start with short, focused reflections if Kolb’s takes too long. You can expand as you improve.\n          <br><br><p><strong>Take Your Time: </strong>Don’t rush through the steps; quality reflection is key for deeper insights.\n        </div>\n      "):3===this.currentStep?(this.stepHelpTitle="Guidelines for abstraction",this.stepHelpContent='<div>\n        <br><p>Your abstraction should be an analysis and evaluation of your reflection. You are examining your reflection for clues that help you understand the root causes for your actions and processes. This translates to your improvements being made at a root cause level, rather than a symptom level.</p>\n        <br><p>If you struggle to find trends and patterns in your reflection and find yourself theorizing why things happened based on ideas that are not supported by your reflection, it may be because:</p>\n        <div>\n          <br><p><strong>Your reflection is too brief or too superficial:</strong> If there aren\'t enough "data points," you won’t be able to find any trends. The solution is to go back to the reflection and add more information where you feel it would help you to understand your processes and behaviors better.</p>\n          <br><p><strong>Your self-awareness is still not high enough:</strong> If you struggle to add more information to your reflection, keep it in mind next time you have a similar experience. Your self-awareness should continue to deepen very quickly. Avoid making theories on root causes based on unsupported ideas, as this can massively increase the chance of error due to the strong effect that cognitive biases have on the brain.</p>\n          <br><p><strong>You are not used to analyzing your reflections:</strong> If this is the case, do your best, and you will quickly improve!</p>\n        </div>\n      </div>'):4===this.currentStep&&(this.stepHelpTitle="Guidelines for experiment",this.stepHelpContent="<br>Keep your experiments <strong>concise, specific, and actionable</strong>. Avoid vague statements of intention. Imagine waking up tomorrow and seeing this list. You want to have a clear idea of exactly what you need to do to immediately act on your experiments.\n          <br><br><strong>Less than 3 experiments</strong> is ideal to improve your chances of success and make efficient progress with each cycle. More than 4 experiments is highly unadvised.")},addCycle(){this.cyclesData.push({experience:"",motivation:"",sequence:"",feelings:"",triggers:"",difficultiesSuccesses:"",challengeResponse:"",why:"",abstraction:"",similarities:"",experiment:""}),alert("One more cycle added.")},resetCycle(){this.currentStep=1,this.currentCycle=1,this.cyclesData=[{experience:"",motivation:"",sequence:"",feelings:"",why:"",abstraction:"",similarities:"",experiment:""}],alert("Kolb's cycle reset.")}}},m=y;var g=(0,u.A)(m,f,v,!1,null,"60f5351b",null);const b=g.exports;a.Ay.use(h.Ay);const C=new h.Ay({routes:[{path:"/",name:"Home",component:b}]}),w=C,x={name:"App",components:{SideNavbar:d}},S=x;var k=(0,u.A)(S,i,r,!1,null,"ef486eec",null);const _=k.exports;a.Ay.config.productionTip=!1,new a.Ay({el:"#app",router:w,render:e=>e(_)})}},t={};function s(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,s),r.exports}s.m=e,(()=>{var e=[];s.O=(t,a,i,r)=>{if(!a){var n=1/0;for(u=0;u<e.length;u++){for(var[a,i,r]=e[u],o=!0,c=0;c<a.length;c++)(!1&r||n>=r)&&Object.keys(s.O).every((e=>s.O[e](a[c])))?a.splice(c--,1):(o=!1,r<n&&(n=r));if(o){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[a,i,r]}})(),(()=>{s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={524:0};s.O.j=t=>0===e[t];var t=(t,a)=>{var i,r,[n,o,c]=a,l=0;if(n.some((t=>0!==e[t]))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(c)var u=c(s)}for(t&&t(a);l<n.length;l++)r=n[l],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(u)},a=self["webpackChunkvue_basic_view"]=self["webpackChunkvue_basic_view"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=s.O(void 0,[504],(()=>s(163)));a=s.O(a)})();
//# sourceMappingURL=app.ef44a3f9.js.map