import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                    */import{f,i as u}from"./assets/vendor-216cde32.js";let s;const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){s=t[0];const e=new Date,o=document.querySelector("[data-start]");s>e?o.removeAttribute("disabled"):(u.error({title:"Error",titleColor:"#FFFFFF",message:"Please choose a date in the future",messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#EF4040",iconColor:"#FFFFFF",position:"topRight"}),o.setAttribute("disabled",!0))}};f("#datetime-picker",h);let i,d;function y(){const t=new Date,e=d-t;if(e>0){const{days:o,hours:a,minutes:c,seconds:n}=S(e);document.querySelector("[data-days]").textContent=r(o),document.querySelector("[data-hours]").textContent=r(a),document.querySelector("[data-minutes]").textContent=r(c),document.querySelector("[data-seconds]").textContent=r(n)}else clearInterval(i),u.success({title:"Success",message:"Countdown finished!"})}document.querySelector("[data-start]").addEventListener("click",()=>{d=s,i=setInterval(y,1e3),document.querySelector("[data-start]").setAttribute("disabled",!0),document.querySelector("#datetime-picker").setAttribute("disabled",!0)});function r(t){return t.toString().padStart(2,"0")}function S(t){const n=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),F=Math.floor(t%864e5%36e5%6e4/1e3);return{days:n,hours:l,minutes:m,seconds:F}}
//# sourceMappingURL=commonHelpers.js.map
