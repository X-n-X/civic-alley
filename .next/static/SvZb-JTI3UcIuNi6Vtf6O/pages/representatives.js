(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Ghjo:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/representatives",function(){return t("t0gD")}])},t0gD:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),i=t("VtrM"),o=t("3vae"),s=t("p+0W"),d=r.a.createElement,u=function(){return fetch.apply(void 0,arguments).then((function(e){return e.json()}))};function c(){var e=r.a.useContext(o.a).setState,n=Object(i.a)("/api/testing-sites",u),t=n.data,s=n.error;return s&&console.error("Error loading data from API for /api/testing-sites: ",s),Object(a.useEffect)((function(){var n=(t||[]).map((function(e){return{key:"".concat(e.site_name,"+").concat(e.coordinates.lat,"+").concat(e.coordinates.lng),name:e.site_name,site_info:{name:e.site_name,provider_url:e.provider_url,additional_info:e.additional_info,address:e.address,phone:e.phone,monday:e.monday,tuesday:e.tuesday,wednesday:e.wednesday,thursday:e.thursday,friday:e.friday,saturday:e.saturday,sunday:e.sunday,screening_required:e.screening_required,appointment_required:e.appointment_required,antibody_testing:e.antibody_testing},coordinates:{lat:e.coordinates.lat,lng:e.coordinates.lng}}}));return e(n),function(){e([])}}),[t,e]),d("div",{className:"sidebar-content"},d(RepresentativeSearch,null))}c.getLayout=s.a,n.default=c}},[["Ghjo",0,2,1,3,4]]]);