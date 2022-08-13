$(document).ready(function(){"use strict";let e=[{name:"Abarth",models:["595"]},{name:"Alfa Romeo",models:["4C","Brera","Giulia","Giulietta","MiTo","Stelvio"]},{name:"Aston Martin",models:["Cygnet","DB11","DB11","DB9","DB9","DBS","ONE-77","Rapide","Vanquish","V12 Vantage","V8 Vantage","Virage"]},{name:"Audi",models:["A1","A3","RS3","A4","S4","A5","RS5","S5","A6","A7","A8","e-tron","Q2","Q3","Q5","Q7","Q8","R8","RSQ3","S3","RS4","RS6","S6","RS7","S7","S8","SQ5","RSQ8","SQ8","TT","TT RS","TTS"]},{name:"BAIC",models:["BJ40"]},{name:"Bentley",models:["Arnage","Bentayga","Brooklands","Continental","Flying Spur","Mulsanne"]},{name:"BMW",models:["116","118","120","125","128","135","M135","218","220","225","228","230","M235","M240","316","318","320","323","325","328","330","335","340","Alpina B3 S","Alpina D3","420","428","430","435","440","Alpina B4","Alpina B4 S","Alpina D4","520","523","525","528","530","535","540","545","550","Alpina B5","Alpina D5 S","630","635","640","645","650","Alpina B6","730","735","740","745","750","760","Alpina B7","840","850","M850","i8","M2","M3","M4","M5","M6","X1","X2","Alpina XD3","X3","X4","X5","X5 M","X6","X6 M","X7","Z4"]},{name:"Borgward",models:["BX5","BX7"]},{name:"Bugatti",models:["Chiron","Veyron"]},{name:"Buick",models:["Riviera"]},{name:"BYD",models:[]},{name:"Cadillac",models:["ATS","CT4","CT5","CT6","CTS","DeVille","Escalade","SRX","STS","XT4","XT5","XT6","XTS"]},{name:"Changan",models:["Alsvin","CS35","CS75","CS85","CS95","Eado"]},{name:"Chery",models:["Arrizo3","Arrizo5","Arrizo7","E5","E8","Tiggo3","Tiggo5","Tiggo7"]},{name:"Chevrolet",models:["Avalanche","Aveo","Blazer","Bolt EV","Camaro","Caprice","Captiva","Corvette","Cruze","Epica","Equinox","Express","Impala","Lumina","Malibu","Optra","Silverado","Sonic","Spark","Suburban","Tahoe","Trailblazer","Traverse","Trax","Uplander"]},{name:"Chrysler",models:["200","300C","300S","300 SRT","Grand Voyager","Pacifica","PT Cruiser"]},{name:"Citroen",models:["C-Elysee","C3","C4","C5"]},{name:"CMC",models:[]},{name:"Daewoo",models:[]},{name:"Daihatsu",models:["Sirion","Terios"]},{name:"Dodge",models:["Avenger","Caliber","Caravan","Challenger","Charger","Dart","Durango","Journey","Magnum","Neon","Nitro","RAM","Viper"]},{name:"Eagle",models:["Wrangler"]},{name:"FAW-Bestune",models:[]},{name:"Ferrari",models:["308 GTS","360","458","488","550","612","812 GTS","California","F12","F430","F599","F8 Tributo","FF","GTC4Lusso","LaFerrari","Portofino","Roma"]},{name:"FIAT",models:["124 Spider","500","500C","500L","Ducato","Linea"]},{name:"Fisker",models:["Karma"]},{name:"Ford",models:["Bronco","Crown Victoria","EcoSport","Edge","Escape","Escort","Expedition","Explorer","F150","F250","Fiesta","Figo","Five Hundred","Flex","Focus","Fusion","Model A","Mondeo","Mustang","Ranger","Taurus","Transit"]},{name:"GAC",models:["GS5","GS7","GS8"]},{name:"Geely",models:["Emgrand 7","Emgrand 7 (RV)","Emgrand 8","Emgrand GT","Emgrand X7","GC6","GS Sport","GX2"]},{name:"Genesis",models:["G70","G80","G90","GV70","GV80","Genesis"]},{name:"GMC",models:["Acadia","Envoy","Savanna","Sierra","Terrain","Yukon"]},{name:"Great Wall",models:["Wingle 5"]},{name:"Haval",models:["H2","H6"]},{name:"Honda",models:["Accord","Accord Crosstour","City","Civic","CR-V","HR-V","Jazz","MR-V","Odyssey","Odyssey J","Pilot","S2000"]},{name:"Hongqi",models:["HS5"]},{name:"HUMMER",models:["H1","H2","H3"]},{name:"Hyundai",models:["Accent","Azera","Centennial","Creta","Elantra","Equus","Genesis","Grand Santa Fe","Grand Santa Fe","Grandeur","H-1","i10","i20","i30","i40","Ioniq","Kona","Palisade","Santa Fe","Sonata","Trajet","Tucson","Veloster","Venue","Veracruz"]},{name:"Infiniti",models:["EX35","EX37","FX35","FX37","FX50","G25","G35","G37","JX35","M37","M45","M50","M56","Q30","Q50","Q60","Q70","QX30","QX50","QX56","QX60","QX70","QX80"]},{name:"Isuzu",models:["D-Max",'MU-X"']},{name:"JAC",models:["J4","J5","S3","S7"]},{name:"Jaguar",models:["E-Pace","E-Type","F-Pace","F-Type","I-Pace","S-Type","X-Type","XE","XF","XFR-S","XJ","XJ6","XK","XKR"]},{name:"Jeep",models:["Cherokee","Commander","Compass","Gladiator","Grand Cherokee","Patriot","Renegade","Wrangler"]},{name:"Jetour",models:["X70","X90"]},{name:"Kama",models:["Karma","Tuta"]},{name:"Kia",models:["Cadenza","Carens","Cerato","Cerato Koup","Cerato Koup","Forte","Grand Carnival","K5","K900","Mohave","Opirus","Optima","Pegas","Picanto","Quoris","Rio","Sedona","Seltos","Sorento","Soul","Sportage","Stinger","Telluride"]},{name:"Lada",models:["Niva"]},{name:"Lamborghini",models:["Aventador","Gallardo","Huracan","Urus"]},{name:"Land Rover",models:["Defender","Discovery","Discovery Sport","LR2","LR3","LR4"]},{name:"Lexus",models:["CT200h","CT250","ES250","ES300","ES300h","ES330","ES350","GS200","GS250","GS300","GS350","GS430","GS450","GS450h","GS460","GSF","GX460","IS-C","IS-F","IS200","IS250","IS300","IS350","LC500","LFA","LS350","LS400","LS430","LS460","LS500","LS500h","LS600","LX470","LX570","LX600","NX200","NX300","RC200","RC350","RCF","RX300","RX350","RX450h","SC400","UX200"]},{name:"Lincoln",models:["Aviator","Continental","Corsair","MKC","MKS","MKT","MKX","MKZ","Nautilus","Navigator"]},{name:"Lotus",models:["Elise","Evora","Exige"]},{name:"Luxgen",models:["MPV7","S5","U6","U7"]},{name:"Maserati",models:["Ghibli","GranCabrio","Granturismo","Levante","Quattroporte"]},{name:"Maybach",models:["57","S500"]},{name:"Mazda",models:["2","3","6","BT-50","CX-3","CX-30","CX-5","CX-7","CX-9","MX-5"]},{name:"McLaren",models:["570S","600LT","650S","675","720S","MP4-12C","P1"]},{name:"Mercedes",models:["A200","A220","A250","A35 AMG","A45 AMG","Actros","B170","B200","C180","C200","C220","C230","C250","C280","C300","C350","C400","C43 AMG","C450","C55 AMG","C63 AMG","CL500","CL55 AMG","CL550","CL600","CL63 AMG","CL65 AMG","CLA200","CLA250","CLA35 AMG","CLA45 AMG","CLC160","CLC180","CLC200","CLC220","CLC250","CLC350","CLK200","CLK280","CLK320","CLK350","CLK500","CLK55 AMG","CLS 400","CLS350","CLS400","CLS450","CLS500","CLS55 AMG","CLS550","CLS63 AMG","E200","E220","E230","E240","E250","E280","E300","E320","E350","E400","E43 AMG","E450","E500","E53 AMG","E55 AMG","E550","E63 AMG","E63 S AMG","G320","G350","G500","G55 AMG","G550","G63 AMG","G65 AMG","G700","G800","Gazelle","GL320","GL450","GL500","GL550","GL63 AMG","GLA220","GLA250","GLA400","GLA45 AMG","GLB250","GLB35 AMG","GLC200","GLC250","GLC300","GLC43 AMG","GLC63 AMG","GLE350","GLE400","GLE43 AMG","GLE450","GLE500","GLE53 AMG","GLE63 AMG","GLK250","GLK280","GLK300","GLK350","GLS400","GLS450","GLS500","GLS580","GLS63 AMG","GLS700","AMG GT","AMG GT-R","ML250","ML300","ML320","ML350","ML400","ML500","ML550","ML63 AMG","R280","R300","R350","R500","S280","S300","S350","S400","S450","S500","S55 AMG","S550","S560","S600","S63 AMG","S65 AMG","SL350","SL400","SL500","SL55 AMG","SL550","SL560","SL63 AMG","SL65 AMG","SLC200","SLC300","SLC43 AMG","SLK200","SLK230","SLK250","SLK280","SLK300","SLK320","SLK350","SLK530","SLK55 AMG","SLK600","SLR","SLS AMG","V","V250","Viano","Vito","XLP800"]},{name:"Mercury",models:["Grand Marquis","Mariner","Milan","Montego","Mountaineer"]},{name:"MG",models:["3","350","360","5","6","GS","GT","HS","RX5","RX8","ZS"]},{name:"MINI",models:["Clubman","Cooper","Coupe","Countryman","Paceman","Roadster"]},{name:"Mitsubishi",models:["ASX","Attrage","Eclipse","Eclipse Cross","Galant","Grandis","L200","L300","Lancer","Mirage","Montero","Montero Sport","Outlander","Pajero","Pajero Sport","Space Star","SWB","Xpander"]},{name:"Morgan",model:["3 Wheeler","Aero8","Plus 4","Plus 8","Roadster"]},{name:"Nissan",models:["280 ZX","350Z","370z","Altima","Armada","GT-R","Juke","Kicks","Maxima","Micra","Murano","Navara","Pathfinder","Patrol","Patrol Pickup","Patrol Safari","Qashqai","Quest","Rogue","Sentra","Sunny","Tiida","Urvan","Versa","X-Trail","Xterra"]},{name:"Oldsmobile",models:[]},{name:"Opel",models:["Adam","Astra","Cascada","Corsa","Crossland","Grandland X","Insignia","Meriva","Mokka","Zafira Tourer"]},{name:"Pagani",models:["Huayra"]},{name:"Panoz",models:[]},{name:"Peugeot",models:["2008","206","207","208","3008","301","308","308 CC","407","408","5008","508","607","Boxer","Partner","Partner Tepee","RCZ","Traveller"]},{name:"Polaris",models:["RZR"]},{name:"Pontiac",models:["Solstice"]},{name:"Porsche",models:["911 4S","911 Carrera","911 Carrera 4","911 Carrera 4 GTS","911 Carrera GTS","911 Carrera S","911 GT2","911 GT3","911 GTS","911 S","911 Speedster","911 Targa","911 Targa 4","911 Targa 4 GTS","911 Targa 4S","911 Turbo","911 Turbo S","964 Carrera 2","918 Spyder","718 Boxster","718 Boxster GTS","718 Boxter S","718 Spyder","Boxster","Boxster GT4","Boxster GTS","Boxster S","Cayenne","Cayenne GTS","Cayenne S","Cayenne Turbo","Cayenne Turbo GT","Cayenne Turbo S","718 Cayman","718 Cayman GTS","718 Cayman S","Cayman","Cayman GT4","Cayman GTS","Cayman S","Macan","Macan GTS","Macan S","Macan Turbo","Panamera","Panamera 4","Panamera 4S","Panamera GTS","Panamera S","Panamera S Turbo","Panamera Turbo","Panamera Turbo S","Taycan"]},{name:"RAM",models:["RAM","1200","1500","2500"]},{name:"Range Rover",models:["Evoque","Evoque Convertible","Sport","Sport Autobiography","Velar","Velar R-Dynamic","Autobiography","HSE","Vogue","Vogue SE"]},{name:"Renault",models:["Captur","Clio","Dokker","Duster","Fluence","Koleos","Laguna","Logan","Megane","Safrane","Sandero","Symbol","Talisman","Trafic"]},{name:"Rolls-Royce",models:["Cullinan","Dawn","Ghost","Phantom","Wraith"]},{name:"Saab",models:["9-3"]},{name:"Saturn",models:[]},{name:"Scion",models:["iM"]},{name:"Seat",models:["Alhambra","Altea","Ibiza","Leon"]},{name:"Shelby",models:["Mustang","Cobra"]},{name:"Skoda",models:["Fabia","Kodiaq","Octavia","Rapid","Scala","Superb","Yeti"]},{name:"Smart",models:["Kona","ForFour","ForTwo"]},{name:"Spyker",models:["918 Spyder","718 Spyder"]},{name:"SsangYong",models:[]},{name:"Subaru",models:["BRZ","Crosstrek","Forester","Impreza","Legacy","Outback","WRX","XV"]},{name:"Suzuki",models:["Alto","APV","Baleno","Celerio","Ciaz","Dzire","Ertiga","Grand Vitara","Jimny","Kizashi","Swift","SX4","Vitara"]},{name:"Tata",models:["Tuta","Xenon"]},{name:"Tesla",models:["Model 3","Model S","Model X","Model Y","Roadster"]},{name:"Toyota",models:["4Runner","86","Aurion","Avalon","Avanza","C-HR","Camry","Celica","Corolla","Corolla Cross","FJ Cruiser","Fortuner","Granvia","Hiace","Highlander","Hilux","Innova","IQ","Land Cruiser","Prado","Previa","Prius","RAV 4","Rush","Sequoia","Sienna","Supra","Tacoma","Tundra","xA","Yaris","Zelas"]},{name:"Volkswagen",models:["Arteon","Beetle","Caddy","Caravelle","CC","EOS","Golf","ID.4","Jetta","Multivan","Passat","Polo","Scirocco","T-Roc","Teramont","Tiguan","Touareg"]},{name:"Volvo",models:["C30","C70","S40","S60","S80","S90","V40","V60","V70","XC40","XC60","XC70","XC90"]}],a=0;$("body").on("click","#open-modal",function(){a=0,$(".progress-bar").animate({width:`${a}%`},200),$("#back-arrow").css("visibility","hidden"),$(".slide input[type='radio']:not('.contact-type'):not('.car-type')").prop("checked",!1),$("#car-models-list").html(""),$("#range-miles input").val(15e3),$("#range-price input").val(7e4),$("#slot_time").val(-1),$("#datepicker").val(""),$("#instruction").val(""),$("#seller_email").val(""),$("#phoneNumber").val(""),$(".slide").eq(0).addClass("active").siblings().removeClass("active"),$("#animatedModal").css("display","block")}),$("body").on("click",".open-modal-car",function(){$("#open-modal").click(),$(`#${$(this).data("id")}`).click()}),$("#open-modal").animatedModal({color:"#fff",animationDuration:".35s"}),$("body").on("click",".btn-close",function(){setTimeout(()=>{$("#animatedModal").css("display","none")},500)}),["Older","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"].forEach(e=>{$("#car-years-list").prepend(`\n      <div class="label-wrapper">\n      <input type="radio" name="year" value="${e}" id="${e}">\n      <label for="${e}">\n        <span class="text">${e}</span>\n      </label>\n    </div>`)}),["GCC / UAE purchased","American Specs","Other (Japanese, European etc.)","I don't know"].forEach(e=>{$("#car-specs-list").append(`\n      <div class="label-wrapper">\n      <input type="radio" name="specs" value="${e}" id="${e}" class="input-specs">\n      <label for="${e}">\n        <span class="text">${e}</span>\n      </label>\n      <svg class="icon" width="25" height="25" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M14.5 0.75C6.91 0.75 0.75 6.91 0.75 14.5C0.75 22.09 6.91 28.25 14.5 28.25C22.09 28.25 28.25 22.09 28.25 14.5C28.25 6.91 22.09 0.75 14.5 0.75ZM11.75 21.375L4.875 14.5L6.81375 12.5613L11.75 17.4837L22.1863 7.0475L24.125 9L11.75 21.375Z" fill="currentColor"></path>\n      </svg>\n    </div>`)});const n=(e,a)=>{if(e.html(""),a.forEach(a=>{e.append(`<li>${a}</li>`)}),void 0===e.children[0])return $(".carxchange-modal").removeClass("search-opened"),e.removeClass("opened");$(".carxchange-modal").addClass("search-opened"),e.addClass("opened")};n($("#search-car-dropdown"),["Abarth","Alfa Romeo","Aston Martin","Audi","BAIC","Bentley","BMW","Borgward","Bugatti","Buick","BYD","Cadillac","Changan","Chery","Chevrolet","Chrysler","Citroen","CMC","Daewoo","Daihatsu","Dodge","Eagle","FAW-Bestune","Ferrari","FIAT","Fisker","Ford","GAC","Geely","Genesis","GMC","Great Wall","Haval","Honda","Hongqi","HUMMER","Hyundai","Infiniti","Isuzu","JAC","Jaguar","Jeep","Jetour","Kama","Kia","Lada","Lamborghini","Land Rover","Lexus","Lincoln","Lotus","Luxgen","Maserati","Maybach","Mazda","McLaren","Mercedes","Mercury","MG","MINI","Mitsubishi","Morgan","Nissan","Oldsmobile","Opel","Pagani","Panoz","Peugeot","Polaris","Pontiac","Porsche","RAM","Range Rover","Renault","Rolls-Royce","Saab","Saturn","Scion","Seat","Shelby","Skoda","Smart","Spyker","SsangYong","Subaru","Suzuki","Tata","Tesla","Toyota","Volkswagen","Volvo"]),$("body").on("click",".makes-drop-down li",function(e){e.stopPropagation(),$(this).parent().parent().find("input").val($(this).html()),$(this).parent().removeClass("opened"),$(".carxchange-modal").removeClass("search-opened")}),$("#search-car, #search-model").on("click",function(e){e.stopPropagation(),$(this).siblings(".makes-drop-down").addClass("opened"),$(".carxchange-modal").addClass("search-opened")}),$("#search-car, #search-model").on("keyup",function(){const e=$(this).val().toLowerCase();$(this).parent().find(".makes-drop-down li").each(function(){$(this).hide(),$(this).html().toLowerCase().includes(e)&&$(this).show()})}),$(window).on("click",function(){$(".makes-drop-down").removeClass("opened"),$(".carxchange-modal").removeClass("search-opened"),$("#other-car, #other-model").prop("checked",!1)}),$("body").on("click","#other-car",function(e){e.stopPropagation(),$("#search-car-dropdown").addClass("opened"),$(".carxchange-modal").addClass("search-opened")}),$("body").on("click","#other-model",function(e){e.stopPropagation(),$("#search-model-dropdown").addClass("opened"),$(".carxchange-modal").addClass("search-opened")}),$("body").on("click",".slide input[type='radio'], .search-field ul li, #continue-button",function(e){if($(this).hasClass("other-car")||$(this).hasClass("other-model")||$(this).hasClass("car-type")||$(this).hasClass("contact-type"))return;let a="";"INPUT"==e.target.nodeName?a=$(this).val():"BUTTON"==e.target.nodeName&&"continue-button"==e.target.id?(a=document.getElementById("range-miles").innerHTML,document.querySelector("lottie-player").play(),setTimeout(()=>{l("")},4e3)):a=$(this).html(),l(a)}),$("body").on("click","#slide-make input[type='radio']:not(.other-car), #slide-make .search-field li",function(e){let a="";a="INPUT"==e.target.nodeName?$(this).val():$(this).html(),o(a)});const o=a=>{const o=e.find(e=>e.name==a);n($("#search-model-dropdown"),o.models),$("#car-models-list").html("");for(let e=0;e<o.models.length;e++){const a=o.models[e];if(o.models.length>9&&9==e){$("#car-models-list").append('\n          <div class="label-wrapper">\n            <input type="radio" name="model" value="other-model" id="other-model" class="other-model">\n            <label for="other-model">\n              <span class="text">Other Model</span>\n            </label>\n          </div>\n        ');break}$("#car-models-list").append(`\n          <div class="label-wrapper">\n            <input type="radio" name="model" value="${a}" id="${a}">\n            <label for="${a}">\n              <span class="text">${a}</span>\n            </label>\n          </div>\n        `)}},r=()=>{let e=$(".slide.active"),n=$(".slide.active").index(),o=n>0?$(".slide.active").prev():null;0!=n&&(0==o.index()?$("#back-arrow").css("visibility","hidden"):$("#back-arrow").css("visibility","visible"),e.removeClass("active"),o.addClass("active").show(),a-=16.6666667,$(".progress-bar").animate({width:`${a}%`},200))};$(".v-list .item").on("click",function(){let e=$(".slide.active"),n=$(".slide.active").index(),o=$(this).index(),r=$(".slide").eq(o);o!=n&&(a-=16.6666667*(n-o),$(".progress-bar").animate({width:`${a}%`},200),$(this).addClass("active fade-item").nextAll().removeClass("fade-item active"),e.removeClass("active"),r.addClass("active").show())});const l=e=>{let n=$(".slide.active"),o=$(".slide.active").index(),r=o<8?n.next():null;8!=o&&(r.index()>0?$("#back-arrow").css("visibility","visible"):$("#back-arrow").css("visibility","hidden"),e.length>0&&""!==e&&($(".v-list .item.active").removeClass("active").find("span").html(e),$(".v-list .item").eq(r.index()).addClass("active fade-item")),n.removeClass("active"),r.addClass("active").show(),a+=16.6666667,$(".progress-bar").animate({width:`${a}%`},200))};function t(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}$("body").on("click","#back-arrow",function(){6==$(".slide.active").index()&&r(),r()}),$.fn.inputFilter=function(e){return this.on("input keydown keyup mousedown mouseup select contextmenu drop",function(){e(this.value)?(this.oldValue=this.value,this.oldSelectionStart=this.selectionStart,this.oldSelectionEnd=this.selectionEnd):this.hasOwnProperty("oldValue")?(this.value=this.oldValue,this.setSelectionRange(this.oldSelectionStart,this.oldSelectionEnd)):this.value=""})},$("#phoneNumber").inputFilter(function(e){return/^\d*$/.test(e)}),$("#phoneNumber").on("keyup fcous blur input",function(){!function(e){var a=e.value.replace(/\D/g,""),n={2:"-",5:"-"};e.value="";for(var o=0;o<a.length;o++)e.value+=(n[o]||"")+a[o]}(this)});$("#phoneNumber, #seller_email").on("keyup",function(){11==$("#phoneNumber").val().length&&$("#seller_email").val().length>0?$("#send-price").prop("disabled",!1):$("#send-price").prop("disabled",!0)}),$("#phoneNumber").on("blur",function(){$("#phoneNumber").val().length<11?$(this).addClass("error"):$(this).removeClass("error")}),$("#seller_email").on("blur",function(){0==$(this).val().length?$(this).addClass("error"):$(this).removeClass("error")});const i={fill:"#0076CE",background:"#eeeff4"},s=document.querySelectorAll(".range-slider");function d(e){const a=100*(e.value-e.min)/(e.max-e.min),n=`linear-gradient(90deg, ${i.fill} ${a}%, ${i.background} ${a+.1}%)`;e.style.background=n}Array.prototype.forEach.call(s,e=>{e.querySelector("input").addEventListener("input",a=>{"range-price"==e.getAttribute("data-id")?(document.getElementById(e.getAttribute("data-id")).innerHTML="AED "+t(a.target.value),a.target.value==e.querySelector("input").getAttribute("max")?(document.getElementById("range-full-alert").style.display="block",document.getElementById("range-full-alert").querySelector("input").value=a.target.value):document.getElementById("range-full-alert").style.display="none"):document.getElementById(e.getAttribute("data-id")).innerHTML=t(a.target.value)+" Kilometers",d(a.target)}),d(e.querySelector("input"))}),$("#send-price").on("click",function(){let e=$(this);e.html("Submitting...").prop("disabled",!0);let a={make:$("#cars-list input[type='radio']:checked").val(),model:$("#car-models-list input[type='radio']:checked").val(),year:$("#car-years-list input[type='radio']:checked").val(),specifications:$("#car-specs-list input[type='radio']:checked").val(),mileage:$("#range-miles").html(),type:$("#car-type input[type='radio']:checked").val(),reportType:$("#contact-type input[type='radio']:checked").val(),email:$("#seller_email").val(),phone:"+971-"+$("#phoneNumber").val()},n=$.ajax({url:"https://script.google.com/macros/s/AKfycbzJBXcrN3VVZo48xFUpKND4Y7O1RFYnlv7WCQusxYJAJjvkzgTkZwtz3Boore28lji3/exec",type:"post",data:a});setTimeout(()=>{n&&(e.html("Send me price").prop("disabled",!1),l(""),document.getElementById("thanks-lottie").play())},1e3)})});