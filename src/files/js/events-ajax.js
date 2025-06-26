//event

!(function (a) {
	"object" == typeof module && module.exports ? (module.exports = a()) : (window.intlTelInput = a());
})(function (a) {
	"use strict";
	return (function () {
		function b(a, b) {
			if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
		}
		function c(a, b) {
			for (var c = 0; c < b.length; c++) {
				var d = b[c];
				(d.enumerable = d.enumerable || !1), (d.configurable = !0), "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);
			}
		}
		function d(a, b, d) {
			return b && c(a.prototype, b), d && c(a, d), a;
		}
		for (
			var e = [
					["Afghanistan (‫افغانستان‬‎)", "af", "93"],
					["Albania (Shqipëri)", "al", "355"],
					["Algeria (‫الجزائر‬‎)", "dz", "213"],
					["American Samoa", "as", "1", 5, ["684"]],
					["Andorra", "ad", "376"],
					["Angola", "ao", "244"],
					["Anguilla", "ai", "1", 6, ["264"]],
					["Antigua and Barbuda", "ag", "1", 7, ["268"]],
					["Argentina", "ar", "54"],
					["Armenia (Հայաստան)", "am", "374"],
					["Aruba", "aw", "297"],
					["Ascension Island", "ac", "247"],
					["Australia", "au", "61", 0],
					["Austria (Österreich)", "at", "43"],
					["Azerbaijan (Azərbaycan)", "az", "994"],
					["Bahamas", "bs", "1", 8, ["242"]],
					["Bahrain (‫البحرين‬‎)", "bh", "973"],
					["Bangladesh (বাংলাদেশ)", "bd", "880"],
					["Barbados", "bb", "1", 9, ["246"]],
					["Belarus (Беларусь)", "by", "375"],
					["Belgium (België)", "be", "32"],
					["Belize", "bz", "501"],
					["Benin (Bénin)", "bj", "229"],
					["Bermuda", "bm", "1", 10, ["441"]],
					["Bhutan (འབྲུག)", "bt", "975"],
					["Bolivia", "bo", "591"],
					["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
					["Botswana", "bw", "267"],
					["Brazil (Brasil)", "br", "55"],
					["British Indian Ocean Territory", "io", "246"],
					["British Virgin Islands", "vg", "1", 11, ["284"]],
					["Brunei", "bn", "673"],
					["Bulgaria (България)", "bg", "359"],
					["Burkina Faso", "bf", "226"],
					["Burundi (Uburundi)", "bi", "257"],
					["Cambodia (កម្ពុជា)", "kh", "855"],
					["Cameroon (Cameroun)", "cm", "237"],
					["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
					["Cape Verde (Kabu Verdi)", "cv", "238"],
					["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]],
					["Cayman Islands", "ky", "1", 12, ["345"]],
					["Central African Republic (République centrafricaine)", "cf", "236"],
					["Chad (Tchad)", "td", "235"],
					["Chile", "cl", "56"],
					["China (中国)", "cn", "86"],
					["Christmas Island", "cx", "61", 2, ["89164"]],
					["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]],
					["Colombia", "co", "57"],
					["Comoros (‫جزر القمر‬‎)", "km", "269"],
					["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
					["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
					["Cook Islands", "ck", "682"],
					["Costa Rica", "cr", "506"],
					["Côte d’Ivoire", "ci", "225"],
					["Croatia (Hrvatska)", "hr", "385"],
					["Cuba", "cu", "53"],
					["Curaçao", "cw", "599", 0],
					["Cyprus (Κύπρος)", "cy", "357"],
					["Czech Republic (Česká republika)", "cz", "420"],
					["Denmark (Danmark)", "dk", "45"],
					["Djibouti", "dj", "253"],
					["Dominica", "dm", "1", 13, ["767"]],
					["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]],
					["Ecuador", "ec", "593"],
					["Egypt (‫مصر‬‎)", "eg", "20"],
					["El Salvador", "sv", "503"],
					["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
					["Eritrea", "er", "291"],
					["Estonia (Eesti)", "ee", "372"],
					["Eswatini", "sz", "268"],
					["Ethiopia", "et", "251"],
					["Falkland Islands (Islas Malvinas)", "fk", "500"],
					["Faroe Islands (Føroyar)", "fo", "298"],
					["Fiji", "fj", "679"],
					["Finland (Suomi)", "fi", "358", 0],
					["France", "fr", "33"],
					["French Guiana (Guyane française)", "gf", "594"],
					["French Polynesia (Polynésie française)", "pf", "689"],
					["Gabon", "ga", "241"],
					["Gambia", "gm", "220"],
					["Georgia (საქართველო)", "ge", "995"],
					["Germany (Deutschland)", "de", "49"],
					["Ghana (Gaana)", "gh", "233"],
					["Gibraltar", "gi", "350"],
					["Greece (Ελλάδα)", "gr", "30"],
					["Greenland (Kalaallit Nunaat)", "gl", "299"],
					["Grenada", "gd", "1", 14, ["473"]],
					["Guadeloupe", "gp", "590", 0],
					["Guam", "gu", "1", 15, ["671"]],
					["Guatemala", "gt", "502"],
					["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]],
					["Guinea (Guinée)", "gn", "224"],
					["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
					["Guyana", "gy", "592"],
					["Haiti", "ht", "509"],
					["Honduras", "hn", "504"],
					["Hong Kong (香港)", "hk", "852"],
					["Hungary (Magyarország)", "hu", "36"],
					["Iceland (Ísland)", "is", "354"],
					["India (भारत)", "in", "91"],
					["Indonesia", "id", "62"],
					["Iran (‫ایران‬‎)", "ir", "98"],
					["Iraq (‫العراق‬‎)", "iq", "964"],
					["Ireland", "ie", "353"],
					["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]],
					["Israel (‫ישראל‬‎)", "il", "972"],
					["Italy (Italia)", "it", "39", 0],
					["Jamaica", "jm", "1", 4, ["876", "658"]],
					["Japan (日本)", "jp", "81"],
					["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]],
					["Jordan (‫الأردن‬‎)", "jo", "962"],
					["Kazakhstan (Казахстан)", "kz", "7", 1, ["33", "7"]],
					["Kenya", "ke", "254"],
					["Kiribati", "ki", "686"],
					["Kosovo", "xk", "383"],
					["Kuwait (‫الكويت‬‎)", "kw", "965"],
					["Kyrgyzstan (Кыргызстан)", "kg", "996"],
					["Laos (ລາວ)", "la", "856"],
					["Latvia (Latvija)", "lv", "371"],
					["Lebanon (‫لبنان‬‎)", "lb", "961"],
					["Lesotho", "ls", "266"],
					["Liberia", "lr", "231"],
					["Libya (‫ليبيا‬‎)", "ly", "218"],
					["Liechtenstein", "li", "423"],
					["Lithuania (Lietuva)", "lt", "370"],
					["Luxembourg", "lu", "352"],
					["Macau (澳門)", "mo", "853"],
					["North Macedonia (Македонија)", "mk", "389"],
					["Madagascar (Madagasikara)", "mg", "261"],
					["Malawi", "mw", "265"],
					["Malaysia", "my", "60"],
					["Maldives", "mv", "960"],
					["Mali", "ml", "223"],
					["Malta", "mt", "356"],
					["Marshall Islands", "mh", "692"],
					["Martinique", "mq", "596"],
					["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
					["Mauritius (Moris)", "mu", "230"],
					["Mayotte", "yt", "262", 1, ["269", "639"]],
					["Mexico (México)", "mx", "52"],
					["Micronesia", "fm", "691"],
					["Moldova (Republica Moldova)", "md", "373"],
					["Monaco", "mc", "377"],
					["Mongolia (Монгол)", "mn", "976"],
					["Montenegro (Crna Gora)", "me", "382"],
					["Montserrat", "ms", "1", 16, ["664"]],
					["Morocco (‫المغرب‬‎)", "ma", "212", 0],
					["Mozambique (Moçambique)", "mz", "258"],
					["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
					["Namibia (Namibië)", "na", "264"],
					["Nauru", "nr", "674"],
					["Nepal (नेपाल)", "np", "977"],
					["Netherlands (Nederland)", "nl", "31"],
					["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
					["New Zealand", "nz", "64"],
					["Nicaragua", "ni", "505"],
					["Niger (Nijar)", "ne", "227"],
					["Nigeria", "ng", "234"],
					["Niue", "nu", "683"],
					["Norfolk Island", "nf", "672"],
					["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
					["Northern Mariana Islands", "mp", "1", 17, ["670"]],
					["Norway (Norge)", "no", "47", 0],
					["Oman (‫عُمان‬‎)", "om", "968"],
					["Pakistan (‫پاکستان‬‎)", "pk", "92"],
					["Palau", "pw", "680"],
					["Palestine (‫فلسطين‬‎)", "ps", "970"],
					["Panama (Panamá)", "pa", "507"],
					["Papua New Guinea", "pg", "675"],
					["Paraguay", "py", "595"],
					["Peru (Perú)", "pe", "51"],
					["Philippines", "ph", "63"],
					["Poland (Polska)", "pl", "48"],
					["Portugal", "pt", "351"],
					["Puerto Rico", "pr", "1", 3, ["787", "939"]],
					["Qatar (‫قطر‬‎)", "qa", "974"],
					["Réunion (La Réunion)", "re", "262", 0],
					["Romania (România)", "ro", "40"],
					["Russia (Россия)", "ru", "7", 0],
					["Rwanda", "rw", "250"],
					["Saint Barthélemy", "bl", "590", 1],
					["Saint Helena", "sh", "290"],
					["Saint Kitts and Nevis", "kn", "1", 18, ["869"]],
					["Saint Lucia", "lc", "1", 19, ["758"]],
					["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2],
					["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
					["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]],
					["Samoa", "ws", "685"],
					["San Marino", "sm", "378"],
					["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
					["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
					["Senegal (Sénégal)", "sn", "221"],
					["Serbia (Србија)", "rs", "381"],
					["Seychelles", "sc", "248"],
					["Sierra Leone", "sl", "232"],
					["Singapore", "sg", "65"],
					["Sint Maarten", "sx", "1", 21, ["721"]],
					["Slovakia (Slovensko)", "sk", "421"],
					["Slovenia (Slovenija)", "si", "386"],
					["Solomon Islands", "sb", "677"],
					["Somalia (Soomaaliya)", "so", "252"],
					["South Africa", "za", "27"],
					["South Korea (대한민국)", "kr", "82"],
					["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
					["Spain (España)", "es", "34"],
					["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
					["Sudan (‫السودان‬‎)", "sd", "249"],
					["Suriname", "sr", "597"],
					["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]],
					["Sweden (Sverige)", "se", "46"],
					["Switzerland (Schweiz)", "ch", "41"],
					["Syria (‫سوريا‬‎)", "sy", "963"],
					["Taiwan (台灣)", "tw", "886"],
					["Tajikistan", "tj", "992"],
					["Tanzania", "tz", "255"],
					["Thailand (ไทย)", "th", "66"],
					["Timor-Leste", "tl", "670"],
					["Togo", "tg", "228"],
					["Tokelau", "tk", "690"],
					["Tonga", "to", "676"],
					["Trinidad and Tobago", "tt", "1", 22, ["868"]],
					["Tunisia (‫تونس‬‎)", "tn", "216"],
					["Turkey (Türkiye)", "tr", "90"],
					["Turkmenistan", "tm", "993"],
					["Turks and Caicos Islands", "tc", "1", 23, ["649"]],
					["Tuvalu", "tv", "688"],
					["U.S. Virgin Islands", "vi", "1", 24, ["340"]],
					["Uganda", "ug", "256"],
					["Ukraine (Україна)", "ua", "380"],
					["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"],
					["United Kingdom", "gb", "44", 0],
					["United States", "us", "1", 0],
					["Uruguay", "uy", "598"],
					["Uzbekistan (Oʻzbekiston)", "uz", "998"],
					["Vanuatu", "vu", "678"],
					["Vatican City (Città del Vaticano)", "va", "39", 1, ["06698"]],
					["Venezuela", "ve", "58"],
					["Vietnam (Việt Nam)", "vn", "84"],
					["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
					["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, ["5288", "5289"]],
					["Yemen (‫اليمن‬‎)", "ye", "967"],
					["Zambia", "zm", "260"],
					["Zimbabwe", "zw", "263"],
					["Åland Islands", "ax", "358", 1, ["18"]],
				],
				f = 0;
			f < e.length;
			f++
		) {
			var g = e[f];
			e[f] = { name: g[0], iso2: g[1], dialCode: g[2], priority: g[3] || 0, areaCodes: g[4] || null };
		}
		var h = {
			getInstance: function (a) {
				var b = a.getAttribute("data-intl-tel-input-id");
				return window.intlTelInputGlobals.instances[b];
			},
			instances: {},
			documentReady: function () {
				return "complete" === document.readyState;
			},
		};
		"object" == typeof window && (window.intlTelInputGlobals = h);
		var i = 0,
			j = { allowDropdown: !0, autoHideDialCode: !0, autoPlaceholder: "polite", customContainer: "", customPlaceholder: null, dropdownContainer: null, excludeCountries: [], formatOnDisplay: !0, geoIpLookup: null, hiddenInput: "", initialCountry: "", localizedCountries: null, nationalMode: !0, onlyCountries: [], placeholderNumberType: "MOBILE", preferredCountries: ["us", "gb"], separateDialCode: !1, utilsScript: "" },
			k = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"],
			l = function (a, b) {
				for (var c = Object.keys(a), d = 0; d < c.length; d++) b(c[d], a[c[d]]);
			},
			m = function (a) {
				l(window.intlTelInputGlobals.instances, function (b) {
					window.intlTelInputGlobals.instances[b][a]();
				});
			},
			n = (function () {
				function c(a, d) {
					var e = this;
					b(this, c), (this.id = i++), (this.a = a), (this.b = null), (this.c = null);
					var f = d || {};
					(this.d = {}),
						l(j, function (a, b) {
							e.d[a] = f.hasOwnProperty(a) ? f[a] : b;
						}),
						(this.e = Boolean(a.getAttribute("placeholder")));
				}
				return (
					d(c, [
						{
							key: "_init",
							value: function () {
								var a = this;
								if ((this.d.nationalMode && (this.d.autoHideDialCode = !1), this.d.separateDialCode && (this.d.autoHideDialCode = this.d.nationalMode = !1), (this.g = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)), this.g && (document.body.classList.add("iti-mobile"), this.d.dropdownContainer || (this.d.dropdownContainer = document.body)), "undefined" != typeof Promise)) {
									var b = new Promise(function (b, c) {
											(a.h = b), (a.i = c);
										}),
										c = new Promise(function (b, c) {
											(a.i0 = b), (a.i1 = c);
										});
									this.promise = Promise.all([b, c]);
								} else (this.h = this.i = function () {}), (this.i0 = this.i1 = function () {});
								(this.s = {}), this._b(), this._f(), this._h(), this._i(), this._i3();
							},
						},
						{
							key: "_b",
							value: function () {
								this._d(), this._d2(), this._e(), this.d.localizedCountries && this._d0(), (this.d.onlyCountries.length || this.d.localizedCountries) && this.p.sort(this._d1);
							},
						},
						{
							key: "_c",
							value: function (b, c, d) {
								c.length > this.countryCodeMaxLen && (this.countryCodeMaxLen = c.length), this.q.hasOwnProperty(c) || (this.q[c] = []);
								for (var e = 0; e < this.q[c].length; e++) if (this.q[c][e] === b) return;
								var f = d !== a ? d : this.q[c].length;
								this.q[c][f] = b;
							},
						},
						{
							key: "_d",
							value: function () {
								if (this.d.onlyCountries.length) {
									var a = this.d.onlyCountries.map(function (a) {
										return a.toLowerCase();
									});
									this.p = e.filter(function (b) {
										return a.indexOf(b.iso2) > -1;
									});
								} else if (this.d.excludeCountries.length) {
									var b = this.d.excludeCountries.map(function (a) {
										return a.toLowerCase();
									});
									this.p = e.filter(function (a) {
										return -1 === b.indexOf(a.iso2);
									});
								} else this.p = e;
							},
						},
						{
							key: "_d0",
							value: function () {
								for (var a = 0; a < this.p.length; a++) {
									var b = this.p[a].iso2.toLowerCase();
									this.d.localizedCountries.hasOwnProperty(b) && (this.p[a].name = this.d.localizedCountries[b]);
								}
							},
						},
						{
							key: "_d1",
							value: function (a, b) {
								return a.name.localeCompare(b.name);
							},
						},
						{
							key: "_d2",
							value: function () {
								(this.countryCodeMaxLen = 0), (this.dialCodes = {}), (this.q = {});
								for (var a = 0; a < this.p.length; a++) {
									var b = this.p[a];
									this.dialCodes[b.dialCode] || (this.dialCodes[b.dialCode] = !0), this._c(b.iso2, b.dialCode, b.priority);
								}
								for (var c = 0; c < this.p.length; c++) {
									var d = this.p[c];
									if (d.areaCodes)
										for (var e = this.q[d.dialCode][0], f = 0; f < d.areaCodes.length; f++) {
											for (var g = d.areaCodes[f], h = 1; h < g.length; h++) {
												var i = d.dialCode + g.substr(0, h);
												this._c(e, i), this._c(d.iso2, i);
											}
											this._c(d.iso2, d.dialCode + g);
										}
								}
							},
						},
						{
							key: "_e",
							value: function () {
								this.preferredCountries = [];
								for (var a = 0; a < this.d.preferredCountries.length; a++) {
									var b = this.d.preferredCountries[a].toLowerCase(),
										c = this._y(b, !1, !0);
									c && this.preferredCountries.push(c);
								}
							},
						},
						{
							key: "_e2",
							value: function (a, b, c) {
								var d = document.createElement(a);
								return (
									b &&
										l(b, function (a, b) {
											return d.setAttribute(a, b);
										}),
									c && c.appendChild(d),
									d
								);
							},
						},
						{
							key: "_f",
							value: function () {
								this.a.hasAttribute("autocomplete") || (this.a.form && this.a.form.hasAttribute("autocomplete")) || this.a.setAttribute("autocomplete", "off");
								var a = "iti";
								this.d.allowDropdown && (a += " iti--allow-dropdown"), this.d.separateDialCode && (a += " iti--separate-dial-code"), this.d.customContainer && ((a += " "), (a += this.d.customContainer));
								var b = this._e2("div", { class: a });
								if (
									(this.a.parentNode.insertBefore(b, this.a),
									(this.k = this._e2("div", { class: "iti__flag-container" }, b)),
									b.appendChild(this.a),
									(this.selectedFlag = this._e2("div", { class: "iti__selected-flag", role: "combobox", "aria-controls": "iti-".concat(this.id, "__country-listbox"), "aria-owns": "iti-".concat(this.id, "__country-listbox"), "aria-expanded": "false" }, this.k)),
									(this.l = this._e2("div", { class: "iti__flag" }, this.selectedFlag)),
									this.d.separateDialCode && (this.t = this._e2("div", { class: "iti__selected-dial-code" }, this.selectedFlag)),
									this.d.allowDropdown && (this.selectedFlag.setAttribute("tabindex", "0"), (this.u = this._e2("div", { class: "iti__arrow" }, this.selectedFlag)), (this.m = this._e2("ul", { class: "iti__country-list iti__hide", id: "iti-".concat(this.id, "__country-listbox"), role: "listbox", "aria-label": "List of countries" })), this.preferredCountries.length && (this._g(this.preferredCountries, "iti__preferred", !0), this._e2("li", { class: "iti__divider", role: "separator", "aria-disabled": "true" }, this.m)), this._g(this.p, "iti__standard"), this.d.dropdownContainer ? ((this.dropdown = this._e2("div", { class: "iti iti--container" })), this.dropdown.appendChild(this.m)) : this.k.appendChild(this.m)),
									this.d.hiddenInput)
								) {
									var c = this.d.hiddenInput,
										d = this.a.getAttribute("name");
									if (d) {
										var e = d.lastIndexOf("[");
										-1 !== e && (c = "".concat(d.substr(0, e), "[").concat(c, "]"));
									}
									(this.hiddenInput = this._e2("input", { type: "hidden", name: c })), b.appendChild(this.hiddenInput);
								}
							},
						},
						{
							key: "_g",
							value: function (a, b, c) {
								for (var d = "", e = 0; e < a.length; e++) {
									var f = a[e],
										g = c ? "-preferred" : "";
									(d += "<li class='iti__country ".concat(b, "' tabIndex='-1' id='iti-").concat(this.id, "__item-").concat(f.iso2).concat(g, "' role='option' data-dial-code='").concat(f.dialCode, "' data-country-code='").concat(f.iso2, "' aria-selected='false'>")), (d += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(f.iso2, "'></div></div>")), (d += "<span class='iti__country-name'>".concat(f.name, "</span>")), (d += "<span class='iti__dial-code'>+".concat(f.dialCode, "</span>")), (d += "</li>");
								}
								this.m.insertAdjacentHTML("beforeend", d);
							},
						},
						{
							key: "_h",
							value: function () {
								var a = this.a.getAttribute("value"),
									b = this.a.value,
									c = a && "+" === a.charAt(0) && (!b || "+" !== b.charAt(0)),
									d = c ? a : b,
									e = this._5(d),
									f = this._w(d),
									g = this.d,
									h = g.initialCountry,
									i = g.nationalMode,
									j = g.autoHideDialCode,
									k = g.separateDialCode;
								e && !f ? this._v(d) : "auto" !== h && (h ? this._z(h.toLowerCase()) : e && f ? this._z("us") : ((this.j = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.p[0].iso2), d || this._z(this.j)), d || i || j || k || (this.a.value = "+".concat(this.s.dialCode))), d && this._u(d);
							},
						},
						{
							key: "_i",
							value: function () {
								this._j(), this.d.autoHideDialCode && this._l(), this.d.allowDropdown && this._i2(), this.hiddenInput && this._i0();
							},
						},
						{
							key: "_i0",
							value: function () {
								var a = this;
								(this._a14 = function () {
									a.hiddenInput.value = a.getNumber();
								}),
									this.a.form && this.a.form.addEventListener("submit", this._a14);
							},
						},
						{
							key: "_i1",
							value: function () {
								for (var a = this.a; a && "LABEL" !== a.tagName; ) a = a.parentNode;
								return a;
							},
						},
						{
							key: "_i2",
							value: function () {
								var a = this;
								this._a9 = function (b) {
									a.m.classList.contains("iti__hide") ? a.a.focus() : b.preventDefault();
								};
								var b = this._i1();
								b && b.addEventListener("click", this._a9),
									(this._a10 = function () {
										!a.m.classList.contains("iti__hide") || a.a.disabled || a.a.readOnly || a._n();
									}),
									this.selectedFlag.addEventListener("click", this._a10),
									(this._a11 = function (b) {
										a.m.classList.contains("iti__hide") && -1 !== ["ArrowUp", "Up", "ArrowDown", "Down", " ", "Enter"].indexOf(b.key) && (b.preventDefault(), b.stopPropagation(), a._n()), "Tab" === b.key && a._2();
									}),
									this.k.addEventListener("keydown", this._a11);
							},
						},
						{
							key: "_i3",
							value: function () {
								var a = this;
								this.d.utilsScript && !window.intlTelInputUtils
									? window.intlTelInputGlobals.documentReady()
										? window.intlTelInputGlobals.loadUtils(this.d.utilsScript)
										: window.addEventListener("load", function () {
												window.intlTelInputGlobals.loadUtils(a.d.utilsScript);
										  })
									: this.i0(),
									"auto" === this.d.initialCountry ? this._i4() : this.h();
							},
						},
						{
							key: "_i4",
							value: function () {
								window.intlTelInputGlobals.autoCountry
									? this.handleAutoCountry()
									: window.intlTelInputGlobals.startedLoadingAutoCountry ||
									  ((window.intlTelInputGlobals.startedLoadingAutoCountry = !0),
									  "function" == typeof this.d.geoIpLookup &&
											this.d.geoIpLookup(
												function (a) {
													(window.intlTelInputGlobals.autoCountry = a.toLowerCase()),
														setTimeout(function () {
															return m("handleAutoCountry");
														});
												},
												function () {
													return m("rejectAutoCountryPromise");
												}
											));
							},
						},
						{
							key: "_j",
							value: function () {
								var a = this;
								(this._a12 = function () {
									a._v(a.a.value) && a._m2CountryChange();
								}),
									this.a.addEventListener("keyup", this._a12),
									(this._a13 = function () {
										setTimeout(a._a12);
									}),
									this.a.addEventListener("cut", this._a13),
									this.a.addEventListener("paste", this._a13);
							},
						},
						{
							key: "_j2",
							value: function (a) {
								var b = this.a.getAttribute("maxlength");
								return b && a.length > b ? a.substr(0, b) : a;
							},
						},
						{
							key: "_l",
							value: function () {
								var a = this;
								(this._a8 = function () {
									a._l2();
								}),
									this.a.form && this.a.form.addEventListener("submit", this._a8),
									this.a.addEventListener("blur", this._a8);
							},
						},
						{
							key: "_l2",
							value: function () {
								if ("+" === this.a.value.charAt(0)) {
									var a = this._m(this.a.value);
									(a && this.s.dialCode !== a) || (this.a.value = "");
								}
							},
						},
						{
							key: "_m",
							value: function (a) {
								return a.replace(/\D/g, "");
							},
						},
						{
							key: "_m2",
							value: function (a) {
								var b = document.createEvent("Event");
								b.initEvent(a, !0, !0), this.a.dispatchEvent(b);
							},
						},
						{
							key: "_n",
							value: function () {
								this.m.classList.remove("iti__hide"), this.selectedFlag.setAttribute("aria-expanded", "true"), this._o(), this.b && (this._x(this.b, !1), this._3(this.b, !0)), this._p(), this.u.classList.add("iti__arrow--up"), this._m2("open:countrydropdown");
							},
						},
						{
							key: "_n2",
							value: function (a, b, c) {
								c && !a.classList.contains(b) ? a.classList.add(b) : !c && a.classList.contains(b) && a.classList.remove(b);
							},
						},
						{
							key: "_o",
							value: function () {
								var a = this;
								if ((this.d.dropdownContainer && this.d.dropdownContainer.appendChild(this.dropdown), !this.g)) {
									var b = this.a.getBoundingClientRect(),
										c = window.pageYOffset || document.documentElement.scrollTop,
										d = b.top + c,
										e = this.m.offsetHeight,
										f = d + this.a.offsetHeight + e < c + window.innerHeight,
										g = d - e > c;
									if ((this._n2(this.m, "iti__country-list--dropup", !f && g), this.d.dropdownContainer)) {
										var h = !f && g ? 0 : this.a.offsetHeight;
										(this.dropdown.style.top = "".concat(d + h, "px")),
											(this.dropdown.style.left = "".concat(b.left + document.body.scrollLeft, "px")),
											(this._a4 = function () {
												return a._2();
											}),
											window.addEventListener("scroll", this._a4);
									}
								}
							},
						},
						{
							key: "_o2",
							value: function (a) {
								for (var b = a; b && b !== this.m && !b.classList.contains("iti__country"); ) b = b.parentNode;
								return b === this.m ? null : b;
							},
						},
						{
							key: "_p",
							value: function () {
								var a = this;
								(this._a0 = function (b) {
									var c = a._o2(b.target);
									c && a._x(c, !1);
								}),
									this.m.addEventListener("mouseover", this._a0),
									(this._a1 = function (b) {
										var c = a._o2(b.target);
										c && a._1(c);
									}),
									this.m.addEventListener("click", this._a1);
								var b = !0;
								(this._a2 = function () {
									b || a._2(), (b = !1);
								}),
									document.documentElement.addEventListener("click", this._a2);
								var c = "",
									d = null;
								(this._a3 = function (b) {
									b.preventDefault(),
										"ArrowUp" === b.key || "Up" === b.key || "ArrowDown" === b.key || "Down" === b.key
											? a._q(b.key)
											: "Enter" === b.key
											? a._r()
											: "Escape" === b.key
											? a._2()
											: /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(b.key) &&
											  (d && clearTimeout(d),
											  (c += b.key.toLowerCase()),
											  a._s(c),
											  (d = setTimeout(function () {
													c = "";
											  }, 1e3)));
								}),
									document.addEventListener("keydown", this._a3);
							},
						},
						{
							key: "_q",
							value: function (a) {
								var b = "ArrowUp" === a || "Up" === a ? this.c.previousElementSibling : this.c.nextElementSibling;
								b && (b.classList.contains("iti__divider") && (b = "ArrowUp" === a || "Up" === a ? b.previousElementSibling : b.nextElementSibling), this._x(b, !0));
							},
						},
						{
							key: "_r",
							value: function () {
								this.c && this._1(this.c);
							},
						},
						{
							key: "_s",
							value: function (a) {
								for (var b = 0; b < this.p.length; b++)
									if (this._t(this.p[b].name, a)) {
										var c = this.m.querySelector("#iti-".concat(this.id, "__item-").concat(this.p[b].iso2));
										this._x(c, !1), this._3(c, !0);
										break;
									}
							},
						},
						{
							key: "_t",
							value: function (a, b) {
								return a.substr(0, b.length).toLowerCase() === b;
							},
						},
						{
							key: "_u",
							value: function (a) {
								var b = a;
								if (this.d.formatOnDisplay && window.intlTelInputUtils && this.s) {
									var c = !this.d.separateDialCode && (this.d.nationalMode || "+" !== b.charAt(0)),
										d = intlTelInputUtils.numberFormat,
										e = d.NATIONAL,
										f = d.INTERNATIONAL,
										g = c ? e : f;
									b = intlTelInputUtils.formatNumber(b, this.s.iso2, g);
								}
								(b = this._7(b)), (this.a.value = b);
							},
						},
						{
							key: "_v",
							value: function (a) {
								var b = a,
									c = this.s.dialCode,
									d = "1" === c;
								b && this.d.nationalMode && d && "+" !== b.charAt(0) && ("1" !== b.charAt(0) && (b = "1".concat(b)), (b = "+".concat(b))), this.d.separateDialCode && c && "+" !== b.charAt(0) && (b = "+".concat(c).concat(b));
								var e = this._5(b, !0),
									f = this._m(b),
									g = null;
								if (e) {
									var h = this.q[this._m(e)],
										i = -1 !== h.indexOf(this.s.iso2) && f.length <= e.length - 1;
									if (!("1" === c && this._w(f)) && !i)
										for (var j = 0; j < h.length; j++)
											if (h[j]) {
												g = h[j];
												break;
											}
								} else "+" === b.charAt(0) && f.length ? (g = "") : (b && "+" !== b) || (g = this.j);
								return null !== g && this._z(g);
							},
						},
						{
							key: "_w",
							value: function (a) {
								var b = this._m(a);
								if ("1" === b.charAt(0)) {
									var c = b.substr(1, 3);
									return -1 !== k.indexOf(c);
								}
								return !1;
							},
						},
						{
							key: "_x",
							value: function (a, b) {
								var c = this.c;
								c && c.classList.remove("iti__highlight"), (this.c = a), this.c.classList.add("iti__highlight"), b && this.c.focus();
							},
						},
						{
							key: "_y",
							value: function (a, b, c) {
								for (var d = b ? e : this.p, f = 0; f < d.length; f++) if (d[f].iso2 === a) return d[f];
								if (c) return null;
								throw new Error("No country data for '".concat(a, "'"));
							},
						},
						{
							key: "_z",
							value: function (a) {
								var b = this.s.iso2 ? this.s : {};
								(this.s = a ? this._y(a, !1, !1) : {}), this.s.iso2 && (this.j = this.s.iso2), this.l.setAttribute("class", "iti__flag iti__".concat(a));
								var c = a ? "".concat(this.s.name, ": +").concat(this.s.dialCode) : "Unknown";
								if ((this.selectedFlag.setAttribute("title", c), this.d.separateDialCode)) {
									var d = this.s.dialCode ? "+".concat(this.s.dialCode) : "";
									this.t.innerHTML = d;
									var e = this.selectedFlag.offsetWidth || this._z2();
									this.a.style.paddingLeft = "".concat(e + 6, "px");
								}
								if ((this._0(), this.d.allowDropdown)) {
									var f = this.b;
									if ((f && (f.classList.remove("iti__active"), f.setAttribute("aria-selected", "false")), a)) {
										var g = this.m.querySelector("#iti-".concat(this.id, "__item-").concat(a, "-preferred")) || this.m.querySelector("#iti-".concat(this.id, "__item-").concat(a));
										g.setAttribute("aria-selected", "true"), g.classList.add("iti__active"), (this.b = g), this.selectedFlag.setAttribute("aria-activedescendant", g.getAttribute("id"));
									}
								}
								return b.iso2 !== a;
							},
						},
						{
							key: "_z2",
							value: function () {
								var a = this.a.parentNode.cloneNode();
								(a.style.visibility = "hidden"), document.body.appendChild(a);
								var b = this.k.cloneNode();
								a.appendChild(b);
								var c = this.selectedFlag.cloneNode(!0);
								b.appendChild(c);
								var d = c.offsetWidth;
								return a.parentNode.removeChild(a), d;
							},
						},
						{
							key: "_0",
							value: function () {
								var a = "aggressive" === this.d.autoPlaceholder || (!this.e && "polite" === this.d.autoPlaceholder);
								if (window.intlTelInputUtils && a) {
									var b = intlTelInputUtils.numberType[this.d.placeholderNumberType],
										c = this.s.iso2 ? intlTelInputUtils.getExampleNumber(this.s.iso2, this.d.nationalMode, b) : "";
									(c = this._7(c)), "function" == typeof this.d.customPlaceholder && (c = this.d.customPlaceholder(c, this.s)), this.a.setAttribute("placeholder", c);
								}
							},
						},
						{
							key: "_1",
							value: function (a) {
								var b = this._z(a.getAttribute("data-country-code"));
								this._2(), this._4(a.getAttribute("data-dial-code"), !0), this.a.focus();
								var c = this.a.value.length;
								this.a.setSelectionRange(c, c), b && this._m2CountryChange();
							},
						},
						{
							key: "_2",
							value: function () {
								this.m.classList.add("iti__hide"), this.selectedFlag.setAttribute("aria-expanded", "false"), this.u.classList.remove("iti__arrow--up"), document.removeEventListener("keydown", this._a3), document.documentElement.removeEventListener("click", this._a2), this.m.removeEventListener("mouseover", this._a0), this.m.removeEventListener("click", this._a1), this.d.dropdownContainer && (this.g || window.removeEventListener("scroll", this._a4), this.dropdown.parentNode && this.dropdown.parentNode.removeChild(this.dropdown)), this._m2("close:countrydropdown");
							},
						},
						{
							key: "_3",
							value: function (a, b) {
								var c = this.m,
									d = window.pageYOffset || document.documentElement.scrollTop,
									e = c.offsetHeight,
									f = c.getBoundingClientRect().top + d,
									g = f + e,
									h = a.offsetHeight,
									i = a.getBoundingClientRect().top + d,
									j = i + h,
									k = i - f + c.scrollTop,
									l = e / 2 - h / 2;
								if (i < f) b && (k -= l), (c.scrollTop = k);
								else if (j > g) {
									b && (k += l);
									var m = e - h;
									c.scrollTop = k - m;
								}
							},
						},
						{
							key: "_4",
							value: function (a, b) {
								var c,
									d = this.a.value,
									e = "+".concat(a);
								if ("+" === d.charAt(0)) {
									var f = this._5(d);
									c = f ? d.replace(f, e) : e;
								} else {
									if (this.d.nationalMode || this.d.separateDialCode) return;
									if (d) c = e + d;
									else {
										if (!b && this.d.autoHideDialCode) return;
										c = e;
									}
								}
								this.a.value = c;
							},
						},
						{
							key: "_5",
							value: function (a, b) {
								var c = "";
								if ("+" === a.charAt(0))
									for (var d = "", e = 0; e < a.length; e++) {
										var f = a.charAt(e);
										if (!isNaN(parseInt(f, 10))) {
											if (((d += f), b)) this.q[d] && (c = a.substr(0, e + 1));
											else if (this.dialCodes[d]) {
												c = a.substr(0, e + 1);
												break;
											}
											if (d.length === this.countryCodeMaxLen) break;
										}
									}
								return c;
							},
						},
						{
							key: "_6",
							value: function () {
								var a = this.a.value.trim(),
									b = this.s.dialCode,
									c = this._m(a);
								return (this.d.separateDialCode && "+" !== a.charAt(0) && b && c ? "+".concat(b) : "") + a;
							},
						},
						{
							key: "_7",
							value: function (a) {
								var b = a;
								if (this.d.separateDialCode) {
									var c = this._5(b);
									if (c) {
										c = "+".concat(this.s.dialCode);
										var d = " " === b[c.length] || "-" === b[c.length] ? c.length + 1 : c.length;
										b = b.substr(d);
									}
								}
								return this._j2(b);
							},
						},
						{
							key: "_m2CountryChange",
							value: function () {
								this._m2("countrychange");
							},
						},
						{
							key: "handleAutoCountry",
							value: function () {
								"auto" === this.d.initialCountry && ((this.j = window.intlTelInputGlobals.autoCountry), this.a.value || this.setCountry(this.j), this.h());
							},
						},
						{
							key: "handleUtils",
							value: function () {
								window.intlTelInputUtils && (this.a.value && this._u(this.a.value), this._0()), this.i0();
							},
						},
						{
							key: "destroy",
							value: function () {
								var a = this.a.form;
								if (this.d.allowDropdown) {
									this._2(), this.selectedFlag.removeEventListener("click", this._a10), this.k.removeEventListener("keydown", this._a11);
									var b = this._i1();
									b && b.removeEventListener("click", this._a9);
								}
								this.hiddenInput && a && a.removeEventListener("submit", this._a14), this.d.autoHideDialCode && (a && a.removeEventListener("submit", this._a8), this.a.removeEventListener("blur", this._a8)), this.a.removeEventListener("keyup", this._a12), this.a.removeEventListener("cut", this._a13), this.a.removeEventListener("paste", this._a13), this.a.removeAttribute("data-intl-tel-input-id");
								var c = this.a.parentNode;
								c.parentNode.insertBefore(this.a, c), c.parentNode.removeChild(c), delete window.intlTelInputGlobals.instances[this.id];
							},
						},
						{
							key: "getExtension",
							value: function () {
								return window.intlTelInputUtils ? intlTelInputUtils.getExtension(this._6(), this.s.iso2) : "";
							},
						},
						{
							key: "getNumber",
							value: function (a) {
								if (window.intlTelInputUtils) {
									var b = this.s.iso2;
									return intlTelInputUtils.formatNumber(this._6(), b, a);
								}
								return "";
							},
						},
						{
							key: "getNumberType",
							value: function () {
								return window.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._6(), this.s.iso2) : -99;
							},
						},
						{
							key: "getSelectedCountryData",
							value: function () {
								return this.s;
							},
						},
						{
							key: "getValidationError",
							value: function () {
								if (window.intlTelInputUtils) {
									var a = this.s.iso2;
									return intlTelInputUtils.getValidationError(this._6(), a);
								}
								return -99;
							},
						},
						{
							key: "isValidNumber",
							value: function () {
								var a = this._6().trim(),
									b = this.d.nationalMode ? this.s.iso2 : "";
								return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(a, b) : null;
							},
						},
						{
							key: "setCountry",
							value: function (a) {
								var b = a.toLowerCase();
								this.l.classList.contains("iti__".concat(b)) || (this._z(b), this._4(this.s.dialCode, !1), this._m2CountryChange());
							},
						},
						{
							key: "setNumber",
							value: function (a) {
								var b = this._v(a);
								this._u(a), b && this._m2CountryChange();
							},
						},
						{
							key: "setPlaceholderNumberType",
							value: function (a) {
								(this.d.placeholderNumberType = a), this._0();
							},
						},
					]),
					c
				);
			})();
		h.getCountryData = function () {
			return e;
		};
		var o = function (a, b, c) {
			var d = document.createElement("script");
			(d.onload = function () {
				m("handleUtils"), b && b();
			}),
				(d.onerror = function () {
					m("rejectUtilsScriptPromise"), c && c();
				}),
				(d.className = "iti-load-utils"),
				(d.async = !0),
				(d.src = a),
				document.body.appendChild(d);
		};
		return (
			(h.loadUtils = function (a) {
				if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
					if (((window.intlTelInputGlobals.startedLoadingUtilsScript = !0), "undefined" != typeof Promise))
						return new Promise(function (b, c) {
							return o(a, b, c);
						});
					o(a);
				}
				return null;
			}),
			(h.defaults = j),
			(h.version = "17.0.18"),
			function (a, b) {
				var c = new n(a, b);
				return c._init(), a.setAttribute("data-intl-tel-input-id", c.id), (window.intlTelInputGlobals.instances[c.id] = c), c;
			}
		);
	})();
});

!(function (t, e) {
	"object" == typeof exports && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : ((t = t || self).Sweetalert2 = e());
})(this, function () {
	"use strict";
	function r(t) {
		return (r =
			"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
				? function (t) {
						return typeof t;
				  }
				: function (t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
				  })(t);
	}
	function a(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
	}
	function o(t, e) {
		for (var n = 0; n < e.length; n++) {
			var o = e[n];
			(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
		}
	}
	function c(t, e, n) {
		return e && o(t.prototype, e), n && o(t, n), t;
	}
	function s() {
		return (s =
			Object.assign ||
			function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
				}
				return t;
			}).apply(this, arguments);
	}
	function u(t) {
		return (u = Object.setPrototypeOf
			? Object.getPrototypeOf
			: function (t) {
					return t.__proto__ || Object.getPrototypeOf(t);
			  })(t);
	}
	function l(t, e) {
		return (l =
			Object.setPrototypeOf ||
			function (t, e) {
				return (t.__proto__ = e), t;
			})(t, e);
	}
	function d() {
		if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
		if (Reflect.construct.sham) return !1;
		if ("function" == typeof Proxy) return !0;
		try {
			return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
		} catch (t) {
			return !1;
		}
	}
	function i(t, e, n) {
		return (i = d()
			? Reflect.construct
			: function (t, e, n) {
					var o = [null];
					o.push.apply(o, e);
					var i = new (Function.bind.apply(t, o))();
					return n && l(i, n.prototype), i;
			  }).apply(null, arguments);
	}
	function p(t, e) {
		return !e || ("object" != typeof e && "function" != typeof e)
			? (function (t) {
					if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return t;
			  })(t)
			: e;
	}
	function f(t, e, n) {
		return (f =
			"undefined" != typeof Reflect && Reflect.get
				? Reflect.get
				: function (t, e, n) {
						var o = (function (t, e) {
							for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)); );
							return t;
						})(t, e);
						if (o) {
							var i = Object.getOwnPropertyDescriptor(o, e);
							return i.get ? i.get.call(n) : i.value;
						}
				  })(t, e, n || t);
	}
	function m(e) {
		return Object.keys(e).map(function (t) {
			return e[t];
		});
	}
	function h(t) {
		return Array.prototype.slice.call(t);
	}
	function g(t, e) {
		var n;
		(n = '"'.concat(t, '" is deprecated and will be removed in the next major release. Please use "').concat(e, '" instead.')), -1 === z.indexOf(n) && (z.push(n), _(n));
	}
	function v(t) {
		return t && "function" == typeof t.toPromise;
	}
	function b(t) {
		return v(t) ? t.toPromise() : Promise.resolve(t);
	}
	function y(t) {
		return t && Promise.resolve(t) === t;
	}
	function w(t) {
		return t instanceof Element || ("object" === r((e = t)) && e.jquery);
		var e;
	}
	function t(t) {
		var e = {};
		for (var n in t) e[t[n]] = "swal2-" + t[n];
		return e;
	}
	function C(t) {
		var e = Q();
		return e ? e.querySelector(t) : null;
	}
	function e(t) {
		return C(".".concat(t));
	}
	function n() {
		var t = $();
		return h(t.querySelectorAll(".".concat(Y.icon)));
	}
	function k() {
		var t = n().filter(function (t) {
			return vt(t);
		});
		return t.length ? t[0] : null;
	}
	function x() {
		return e(Y.title);
	}
	function P() {
		return e(Y.content);
	}
	function A() {
		return e(Y.image);
	}
	function B() {
		return e(Y["progress-steps"]);
	}
	function S() {
		return e(Y["validation-message"]);
	}
	function E() {
		return C(".".concat(Y.actions, " .").concat(Y.confirm));
	}
	function O() {
		return C(".".concat(Y.actions, " .").concat(Y.cancel));
	}
	function T() {
		return e(Y.actions);
	}
	function L() {
		return e(Y.header);
	}
	function j() {
		return e(Y.footer);
	}
	function q() {
		return e(Y["timer-progress-bar"]);
	}
	function I() {
		return e(Y.close);
	}
	function V() {
		var t = h($().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function (t, e) {
				return (t = parseInt(t.getAttribute("tabindex"))), (e = parseInt(e.getAttribute("tabindex"))) < t ? 1 : t < e ? -1 : 0;
			}),
			e = h($().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function (t) {
				return "-1" !== t.getAttribute("tabindex");
			});
		return (function (t) {
			for (var e = [], n = 0; n < t.length; n++) -1 === e.indexOf(t[n]) && e.push(t[n]);
			return e;
		})(t.concat(e)).filter(function (t) {
			return vt(t);
		});
	}
	function M() {
		return !J() && !document.body.classList.contains(Y["no-backdrop"]);
	}
	function R() {
		return $().hasAttribute("data-loading");
	}
	function H(e, t) {
		var n;
		(e.textContent = ""),
			t &&
				((n = new DOMParser().parseFromString(t, "text/html")),
				h(n.querySelector("head").childNodes).forEach(function (t) {
					e.appendChild(t);
				}),
				h(n.querySelector("body").childNodes).forEach(function (t) {
					e.appendChild(t);
				}));
	}
	function D(t, e) {
		if (e) {
			for (var n = e.split(/\s+/), o = 0; o < n.length; o++) if (!t.classList.contains(n[o])) return;
			return 1;
		}
	}
	function N(t, e, n) {
		var o, i;
		if (
			((i = e),
			h((o = t).classList).forEach(function (t) {
				-1 === m(Y).indexOf(t) && -1 === m(Z).indexOf(t) && -1 === m(i.showClass).indexOf(t) && o.classList.remove(t);
			}),
			e.customClass && e.customClass[n])
		) {
			if ("string" != typeof e.customClass[n] && !e.customClass[n].forEach) return _("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(r(e.customClass[n]), '"'));
			mt(t, e.customClass[n]);
		}
	}
	var U = "SweetAlert2:",
		_ = function (t) {
			console.warn("".concat(U, " ").concat(t));
		},
		F = function (t) {
			console.error("".concat(U, " ").concat(t));
		},
		z = [],
		W = function (t) {
			return "function" == typeof t ? t() : t;
		},
		K = Object.freeze({ cancel: "cancel", backdrop: "backdrop", close: "close", esc: "esc", timer: "timer" }),
		Y = t(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "toast-column", "show", "hide", "close", "title", "header", "content", "html-container", "actions", "confirm", "cancel", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]),
		Z = t(["success", "warning", "info", "question", "error"]),
		Q = function () {
			return document.body.querySelector(".".concat(Y.container));
		},
		$ = function () {
			return e(Y.popup);
		},
		J = function () {
			return document.body.classList.contains(Y["toast-shown"]);
		},
		X = { previousBodyPadding: null };
	function G(t, e) {
		if (!e) return null;
		switch (e) {
			case "select":
			case "textarea":
			case "file":
				return gt(t, Y[e]);
			case "checkbox":
				return t.querySelector(".".concat(Y.checkbox, " input"));
			case "radio":
				return t.querySelector(".".concat(Y.radio, " input:checked")) || t.querySelector(".".concat(Y.radio, " input:first-child"));
			case "range":
				return t.querySelector(".".concat(Y.range, " input"));
			default:
				return gt(t, Y.input);
		}
	}
	function tt(t) {
		var e;
		t.focus(), "file" !== t.type && ((e = t.value), (t.value = ""), (t.value = e));
	}
	function et(t, e, n) {
		t &&
			e &&
			("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)),
			e.forEach(function (e) {
				t.forEach
					? t.forEach(function (t) {
							n ? t.classList.add(e) : t.classList.remove(e);
					  })
					: n
					? t.classList.add(e)
					: t.classList.remove(e);
			}));
	}
	function nt(t, e, n) {
		n || 0 === parseInt(n) ? (t.style[e] = "number" == typeof n ? "".concat(n, "px") : n) : t.style.removeProperty(e);
	}
	function ot(t, e) {
		var n = 1 < arguments.length && void 0 !== e ? e : "flex";
		(t.style.opacity = ""), (t.style.display = n);
	}
	function it(t) {
		(t.style.opacity = ""), (t.style.display = "none");
	}
	function rt(t, e, n) {
		e ? ot(t, n) : it(t);
	}
	function at(t) {
		return !!(t.scrollHeight > t.clientHeight);
	}
	function ct(t) {
		var e = window.getComputedStyle(t),
			n = parseFloat(e.getPropertyValue("animation-duration") || "0"),
			o = parseFloat(e.getPropertyValue("transition-duration") || "0");
		return 0 < n || 0 < o;
	}
	function st(t, e) {
		var n = 1 < arguments.length && void 0 !== e && e,
			o = q();
		vt(o) &&
			(n && ((o.style.transition = "none"), (o.style.width = "100%")),
			setTimeout(function () {
				(o.style.transition = "width ".concat(t / 1e3, "s linear")), (o.style.width = "0%");
			}, 10));
	}
	function ut() {
		return "undefined" == typeof window || "undefined" == typeof document;
	}
	function lt(t) {
		sn.isVisible() && ft !== t.target.value && sn.resetValidationMessage(), (ft = t.target.value);
	}
	function dt(t, e) {
		t instanceof HTMLElement ? e.appendChild(t) : "object" === r(t) ? wt(t, e) : t && H(e, t);
	}
	function pt(t, e) {
		var n = T(),
			o = E(),
			i = O();
		e.showConfirmButton || e.showCancelButton || it(n),
			N(n, e, "actions"),
			xt(o, "confirm", e),
			xt(i, "cancel", e),
			e.buttonsStyling
				? (function (t, e, n) {
						mt([t, e], Y.styled), n.confirmButtonColor && (t.style.backgroundColor = n.confirmButtonColor);
						n.cancelButtonColor && (e.style.backgroundColor = n.cancelButtonColor);
						{
							var o;
							R() || ((o = window.getComputedStyle(t).getPropertyValue("background-color")), (t.style.borderLeftColor = o), (t.style.borderRightColor = o));
						}
				  })(o, i, e)
				: (ht([o, i], Y.styled), (o.style.backgroundColor = o.style.borderLeftColor = o.style.borderRightColor = ""), (i.style.backgroundColor = i.style.borderLeftColor = i.style.borderRightColor = "")),
			e.reverseButtons && o.parentNode.insertBefore(i, o);
	}
	var ft,
		mt = function (t, e) {
			et(t, e, !0);
		},
		ht = function (t, e) {
			et(t, e, !1);
		},
		gt = function (t, e) {
			for (var n = 0; n < t.childNodes.length; n++) if (D(t.childNodes[n], e)) return t.childNodes[n];
		},
		vt = function (t) {
			return !(!t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length));
		},
		bt = '\n <div aria-labelledby="'
			.concat(Y.title, '" aria-describedby="')
			.concat(Y.content, '" class="')
			.concat(Y.popup, '" tabindex="-1">\n   <div class="')
			.concat(Y.header, '">\n     <ul class="')
			.concat(Y["progress-steps"], '"></ul>\n     <div class="')
			.concat(Y.icon, " ")
			.concat(Z.error, '"></div>\n     <div class="')
			.concat(Y.icon, " ")
			.concat(Z.question, '"></div>\n     <div class="')
			.concat(Y.icon, " ")
			.concat(Z.warning, '"></div>\n     <div class="')
			.concat(Y.icon, " ")
			.concat(Z.info, '"></div>\n     <div class="')
			.concat(Y.icon, " ")
			.concat(Z.success, '"></div>\n     <img class="')
			.concat(Y.image, '" />\n     <h2 class="')
			.concat(Y.title, '" id="')
			.concat(Y.title, '"></h2>\n     <button type="button" class="')
			.concat(Y.close, '"></button>\n   </div>\n   <div class="')
			.concat(Y.content, '">\n     <div id="')
			.concat(Y.content, '" class="')
			.concat(Y["html-container"], '"></div>\n     <input class="')
			.concat(Y.input, '" />\n     <input type="file" class="')
			.concat(Y.file, '" />\n     <div class="')
			.concat(Y.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="')
			.concat(Y.select, '"></select>\n     <div class="')
			.concat(Y.radio, '"></div>\n     <label for="')
			.concat(Y.checkbox, '" class="')
			.concat(Y.checkbox, '">\n       <input type="checkbox" />\n       <span class="')
			.concat(Y.label, '"></span>\n     </label>\n     <textarea class="')
			.concat(Y.textarea, '"></textarea>\n     <div class="')
			.concat(Y["validation-message"], '" id="')
			.concat(Y["validation-message"], '"></div>\n   </div>\n   <div class="')
			.concat(Y.actions, '">\n     <button type="button" class="')
			.concat(Y.confirm, '">OK</button>\n     <button type="button" class="')
			.concat(Y.cancel, '">Cancel</button>\n   </div>\n   <div class="')
			.concat(Y.footer, '"></div>\n   <div class="')
			.concat(Y["timer-progress-bar-container"], '">\n     <div class="')
			.concat(Y["timer-progress-bar"], '"></div>\n   </div>\n </div>\n')
			.replace(/(^|\n)\s*/g, ""),
		yt = function (t) {
			var e,
				n,
				o,
				i,
				r,
				a,
				c,
				s,
				u,
				l,
				d,
				p,
				f,
				m,
				h,
				g = !!(e = Q()) && (e.parentNode.removeChild(e), ht([document.documentElement, document.body], [Y["no-backdrop"], Y["toast-shown"], Y["has-column"]]), !0);
			ut()
				? F("SweetAlert2 requires document to initialize")
				: (((n = document.createElement("div")).className = Y.container),
				  g && mt(n, Y["no-transition"]),
				  H(n, bt),
				  (o = "string" == typeof (i = t.target) ? document.querySelector(i) : i).appendChild(n),
				  (r = t),
				  (a = $()).setAttribute("role", r.toast ? "alert" : "dialog"),
				  a.setAttribute("aria-live", r.toast ? "polite" : "assertive"),
				  r.toast || a.setAttribute("aria-modal", "true"),
				  (c = o),
				  "rtl" === window.getComputedStyle(c).direction && mt(Q(), Y.rtl),
				  (s = P()),
				  (u = gt(s, Y.input)),
				  (l = gt(s, Y.file)),
				  (d = s.querySelector(".".concat(Y.range, " input"))),
				  (p = s.querySelector(".".concat(Y.range, " output"))),
				  (f = gt(s, Y.select)),
				  (m = s.querySelector(".".concat(Y.checkbox, " input"))),
				  (h = gt(s, Y.textarea)),
				  (u.oninput = lt),
				  (l.onchange = lt),
				  (f.onchange = lt),
				  (m.onchange = lt),
				  (h.oninput = lt),
				  (d.oninput = function (t) {
						lt(t), (p.value = d.value);
				  }),
				  (d.onchange = function (t) {
						lt(t), (d.nextSibling.value = d.value);
				  }));
		},
		wt = function (t, e) {
			t.jquery ? Ct(e, t) : H(e, t.toString());
		},
		Ct = function (t, e) {
			if (((t.textContent = ""), 0 in e)) for (var n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
			else t.appendChild(e.cloneNode(!0));
		},
		kt = (function () {
			if (ut()) return !1;
			var t = document.createElement("div"),
				e = { WebkitAnimation: "webkitAnimationEnd", OAnimation: "oAnimationEnd oanimationend", animation: "animationend" };
			for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n) && void 0 !== t.style[n]) return e[n];
			return !1;
		})();
	function xt(t, e, n) {
		var o;
		rt(t, n["show".concat((o = e).charAt(0).toUpperCase() + o.slice(1), "Button")], "inline-block"), H(t, n["".concat(e, "ButtonText")]), t.setAttribute("aria-label", n["".concat(e, "ButtonAriaLabel")]), (t.className = Y[e]), N(t, n, "".concat(e, "Button")), mt(t, n["".concat(e, "ButtonClass")]);
	}
	function Pt(t, e) {
		var n,
			o,
			i,
			r,
			a,
			c,
			s,
			u,
			l = Q();
		l && ((n = l), "string" == typeof (o = e.backdrop) ? (n.style.background = o) : o || mt([document.documentElement, document.body], Y["no-backdrop"]), !e.backdrop && e.allowOutsideClick && _('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), (i = l), (r = e.position) in Y ? mt(i, Y[r]) : (_('The "position" parameter is not valid, defaulting to "center"'), mt(i, Y.center)), (a = l), !(c = e.grow) || "string" != typeof c || ((s = "grow-".concat(c)) in Y && mt(a, Y[s])), N(l, e, "container"), (u = document.body.getAttribute("data-swal2-queue-step")) && (l.setAttribute("data-queue-step", u), document.body.removeAttribute("data-swal2-queue-step")));
	}
	function At(t, e) {
		(t.placeholder && !e.inputPlaceholder) || (t.placeholder = e.inputPlaceholder);
	}
	var Bt = { promise: new WeakMap(), innerParams: new WeakMap(), domCache: new WeakMap() },
		St = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
		Et = function (t) {
			if (!jt[t.input]) return F('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input, '"'));
			var e = Lt(t.input),
				n = jt[t.input](e, t);
			ot(n),
				setTimeout(function () {
					tt(n);
				});
		},
		Ot = function (t, e) {
			var n = G(P(), t);
			if (n)
				for (var o in (!(function (t) {
					for (var e = 0; e < t.attributes.length; e++) {
						var n = t.attributes[e].name;
						-1 === ["type", "value", "style"].indexOf(n) && t.removeAttribute(n);
					}
				})(n),
				e))
					("range" === t && "placeholder" === o) || n.setAttribute(o, e[o]);
		},
		Tt = function (t) {
			var e = Lt(t.input);
			t.customClass && mt(e, t.customClass.input);
		},
		Lt = function (t) {
			var e = Y[t] ? Y[t] : Y.input;
			return gt(P(), e);
		},
		jt = {};
	(jt.text =
		jt.email =
		jt.password =
		jt.number =
		jt.tel =
		jt.url =
			function (t, e) {
				return "string" == typeof e.inputValue || "number" == typeof e.inputValue ? (t.value = e.inputValue) : y(e.inputValue) || _('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(r(e.inputValue), '"')), At(t, e), (t.type = e.input), t;
			}),
		(jt.file = function (t, e) {
			return At(t, e), t;
		}),
		(jt.range = function (t, e) {
			var n = t.querySelector("input"),
				o = t.querySelector("output");
			return (n.value = e.inputValue), (n.type = e.input), (o.value = e.inputValue), t;
		}),
		(jt.select = function (t, e) {
			var n;
			return (t.textContent = ""), e.inputPlaceholder && ((n = document.createElement("option")), H(n, e.inputPlaceholder), (n.value = ""), (n.disabled = !0), (n.selected = !0), t.appendChild(n)), t;
		}),
		(jt.radio = function (t) {
			return (t.textContent = ""), t;
		}),
		(jt.checkbox = function (t, e) {
			var n = G(P(), "checkbox");
			(n.value = 1), (n.id = Y.checkbox), (n.checked = Boolean(e.inputValue));
			var o = t.querySelector("span");
			return H(o, e.inputPlaceholder), t;
		}),
		(jt.textarea = function (e, t) {
			var n, o;
			return (
				(e.value = t.inputValue),
				At(e, t),
				"MutationObserver" in window &&
					((n = parseInt(window.getComputedStyle($()).width)),
					(o = parseInt(window.getComputedStyle($()).paddingLeft) + parseInt(window.getComputedStyle($()).paddingRight)),
					new MutationObserver(function () {
						var t = e.offsetWidth + o;
						$().style.width = n < t ? "".concat(t, "px") : null;
					}).observe(e, { attributes: !0, attributeFilter: ["style"] })),
				e
			);
		});
	function qt(t, e) {
		var n,
			o,
			i,
			r,
			a,
			c = P().querySelector("#".concat(Y.content));
		e.html ? (dt(e.html, c), ot(c, "block")) : e.text ? ((c.textContent = e.text), ot(c, "block")) : it(c),
			(n = t),
			(o = e),
			(i = P()),
			(r = Bt.innerParams.get(n)),
			(a = !r || o.input !== r.input),
			St.forEach(function (t) {
				var e = Y[t],
					n = gt(i, e);
				Ot(t, o.inputAttributes), (n.className = e), a && it(n);
			}),
			o.input && (a && Et(o), Tt(o)),
			N(P(), e, "content");
	}
	function It() {
		return Q() && Q().getAttribute("data-queue-step");
	}
	function Vt(t, s) {
		var u = B();
		if (!s.progressSteps || 0 === s.progressSteps.length) return it(u), 0;
		ot(u), (u.textContent = "");
		var l = parseInt(void 0 === s.currentProgressStep ? It() : s.currentProgressStep);
		l >= s.progressSteps.length && _("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),
			s.progressSteps.forEach(function (t, e) {
				var n,
					o,
					i,
					r,
					a,
					c = ((n = t), (o = document.createElement("li")), mt(o, Y["progress-step"]), H(o, n), o);
				u.appendChild(c), e === l && mt(c, Y["active-progress-step"]), e !== s.progressSteps.length - 1 && ((r = s), (a = document.createElement("li")), mt(a, Y["progress-step-line"]), r.progressStepsDistance && (a.style.width = r.progressStepsDistance), (i = a), u.appendChild(i));
			});
	}
	function Mt(t, e) {
		var n,
			o,
			i,
			r,
			a,
			c,
			s,
			u,
			l = L();
		N(l, e, "header"),
			Vt(0, e),
			(n = t),
			(o = e),
			(r = Bt.innerParams.get(n)) && o.icon === r.icon && k() ? N(k(), o, "icon") : (Dt(), o.icon && (-1 !== Object.keys(Z).indexOf(o.icon) ? ((i = C(".".concat(Y.icon, ".").concat(Z[o.icon]))), ot(i), Ut(i, o), Nt(), N(i, o, "icon"), mt(i, o.showClass.icon)) : F('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(o.icon, '"')))),
			(function (t) {
				var e = A();
				if (!t.imageUrl) return it(e);
				ot(e, ""), e.setAttribute("src", t.imageUrl), e.setAttribute("alt", t.imageAlt), nt(e, "width", t.imageWidth), nt(e, "height", t.imageHeight), (e.className = Y.image), N(e, t, "image");
			})(e),
			(a = e),
			(c = x()),
			rt(c, a.title || a.titleText),
			a.title && dt(a.title, c),
			a.titleText && (c.innerText = a.titleText),
			N(c, a, "title"),
			(s = e),
			(u = I()),
			H(u, s.closeButtonHtml),
			N(u, s, "closeButton"),
			rt(u, s.showCloseButton),
			u.setAttribute("aria-label", s.closeButtonAriaLabel);
	}
	function Rt(t, e) {
		var n, o, i, r;
		(n = e), (o = $()), nt(o, "width", n.width), nt(o, "padding", n.padding), n.background && (o.style.background = n.background), zt(o, n), Pt(0, e), Mt(t, e), qt(t, e), pt(0, e), (i = e), (r = j()), rt(r, i.footer), i.footer && dt(i.footer, r), N(r, i, "footer"), "function" == typeof e.onRender && e.onRender($());
	}
	function Ht() {
		return E() && E().click();
	}
	var Dt = function () {
			for (var t = n(), e = 0; e < t.length; e++) it(t[e]);
		},
		Nt = function () {
			for (var t = $(), e = window.getComputedStyle(t).getPropertyValue("background-color"), n = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), o = 0; o < n.length; o++) n[o].style.backgroundColor = e;
		},
		Ut = function (t, e) {
			(t.textContent = ""), e.iconHtml ? H(t, _t(e.iconHtml)) : "success" === e.icon ? H(t, '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ') : "error" === e.icon ? H(t, '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ') : H(t, _t({ question: "?", warning: "!", info: "i" }[e.icon]));
		},
		_t = function (t) {
			return '<div class="'.concat(Y["icon-content"], '">').concat(t, "</div>");
		},
		Ft = [],
		zt = function (t, e) {
			(t.className = "".concat(Y.popup, " ").concat(vt(t) ? e.showClass.popup : "")), e.toast ? (mt([document.documentElement, document.body], Y["toast-shown"]), mt(t, Y.toast)) : mt(t, Y.modal), N(t, e, "popup"), "string" == typeof e.customClass && mt(t, e.customClass), e.icon && mt(t, Y["icon-".concat(e.icon)]);
		};
	function Wt() {
		var t = $();
		t || sn.fire(), (t = $());
		var e = T(),
			n = E();
		ot(e), ot(n, "inline-block"), mt([t, e], Y.loading), (n.disabled = !0), t.setAttribute("data-loading", !0), t.setAttribute("aria-busy", !0), t.focus();
	}
	function Kt() {
		return new Promise(function (t) {
			var e = window.scrollX,
				n = window.scrollY;
			(Xt.restoreFocusTimeout = setTimeout(function () {
				Xt.previousActiveElement && Xt.previousActiveElement.focus ? (Xt.previousActiveElement.focus(), (Xt.previousActiveElement = null)) : document.body && document.body.focus(), t();
			}, 100)),
				void 0 !== e && void 0 !== n && window.scrollTo(e, n);
		});
	}
	function Yt() {
		if (Xt.timeout)
			return (
				(function () {
					var t = q(),
						e = parseInt(window.getComputedStyle(t).width);
					t.style.removeProperty("transition"), (t.style.width = "100%");
					var n = parseInt(window.getComputedStyle(t).width),
						o = parseInt((e / n) * 100);
					t.style.removeProperty("transition"), (t.style.width = "".concat(o, "%"));
				})(),
				Xt.timeout.stop()
			);
	}
	function Zt() {
		if (Xt.timeout) {
			var t = Xt.timeout.start();
			return st(t), t;
		}
	}
	function Qt(t) {
		return Object.prototype.hasOwnProperty.call(Gt, t);
	}
	function $t(t) {
		return ee[t];
	}
	function Jt(t) {
		for (var e in t) Qt((i = e)) || _('Unknown parameter "'.concat(i, '"')), t.toast && ((o = e), -1 !== ne.indexOf(o) && _('The parameter "'.concat(o, '" is incompatible with toasts'))), $t((n = e)) && g(n, $t(n));
		var n, o, i;
	}
	var Xt = {},
		Gt = {
			title: "",
			titleText: "",
			text: "",
			html: "",
			footer: "",
			icon: void 0,
			iconHtml: void 0,
			toast: !1,
			animation: !0,
			showClass: { popup: "swal2-show", backdrop: "swal2-backdrop-show", icon: "swal2-icon-show" },
			hideClass: { popup: "swal2-hide", backdrop: "swal2-backdrop-hide", icon: "swal2-icon-hide" },
			customClass: void 0,
			target: "body",
			backdrop: !0,
			heightAuto: !0,
			allowOutsideClick: !0,
			allowEscapeKey: !0,
			allowEnterKey: !0,
			stopKeydownPropagation: !0,
			keydownListenerCapture: !1,
			showConfirmButton: !0,
			showCancelButton: !1,
			preConfirm: void 0,
			confirmButtonText: "OK",
			confirmButtonAriaLabel: "",
			confirmButtonColor: void 0,
			cancelButtonText: "Cancel",
			cancelButtonAriaLabel: "",
			cancelButtonColor: void 0,
			buttonsStyling: !0,
			reverseButtons: !1,
			focusConfirm: !0,
			focusCancel: !1,
			showCloseButton: !1,
			closeButtonHtml: "&times;",
			closeButtonAriaLabel: "Close this dialog",
			showLoaderOnConfirm: !1,
			imageUrl: void 0,
			imageWidth: void 0,
			imageHeight: void 0,
			imageAlt: "",
			timer: void 0,
			timerProgressBar: !1,
			width: void 0,
			padding: void 0,
			background: void 0,
			input: void 0,
			inputPlaceholder: "",
			inputValue: "",
			inputOptions: {},
			inputAutoTrim: !0,
			inputAttributes: {},
			inputValidator: void 0,
			validationMessage: void 0,
			grow: !1,
			position: "center",
			progressSteps: [],
			currentProgressStep: void 0,
			progressStepsDistance: void 0,
			onBeforeOpen: void 0,
			onOpen: void 0,
			onRender: void 0,
			onClose: void 0,
			onAfterClose: void 0,
			onDestroy: void 0,
			scrollbarPadding: !0,
		},
		te = ["allowEscapeKey", "allowOutsideClick", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "footer", "hideClass", "html", "icon", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "onAfterClose", "onClose", "onDestroy", "progressSteps", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "text", "title", "titleText"],
		ee = { animation: 'showClass" and "hideClass' },
		ne = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusCancel", "heightAuto", "keydownListenerCapture"],
		oe = Object.freeze({
			isValidParameter: Qt,
			isUpdatableParameter: function (t) {
				return -1 !== te.indexOf(t);
			},
			isDeprecatedParameter: $t,
			argsToParams: function (o) {
				var i = {};
				return (
					"object" !== r(o[0]) || w(o[0])
						? ["title", "html", "icon"].forEach(function (t, e) {
								var n = o[e];
								"string" == typeof n || w(n) ? (i[t] = n) : void 0 !== n && F("Unexpected type of ".concat(t, '! Expected "string" or "Element", got ').concat(r(n)));
						  })
						: s(i, o[0]),
					i
				);
			},
			isVisible: function () {
				return vt($());
			},
			clickConfirm: Ht,
			clickCancel: function () {
				return O() && O().click();
			},
			getContainer: Q,
			getPopup: $,
			getTitle: x,
			getContent: P,
			getHtmlContainer: function () {
				return e(Y["html-container"]);
			},
			getImage: A,
			getIcon: k,
			getIcons: n,
			getCloseButton: I,
			getActions: T,
			getConfirmButton: E,
			getCancelButton: O,
			getHeader: L,
			getFooter: j,
			getTimerProgressBar: q,
			getFocusableElements: V,
			getValidationMessage: S,
			isLoading: R,
			fire: function () {
				for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
				return i(this, e);
			},
			mixin: function (r) {
				return (function (t) {
					!(function (t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
						(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && l(t, e);
					})(i, t);
					var n,
						o,
						e =
							((n = i),
							(o = d()),
							function () {
								var t,
									e = u(n);
								return p(this, o ? ((t = u(this).constructor), Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
							});
					function i() {
						return a(this, i), e.apply(this, arguments);
					}
					return (
						c(i, [
							{
								key: "_main",
								value: function (t) {
									return f(u(i.prototype), "_main", this).call(this, s({}, r, t));
								},
							},
						]),
						i
					);
				})(this);
			},
			queue: function (t) {
				var r = this;
				Ft = t;
				function a(t, e) {
					(Ft = []), t(e);
				}
				var c = [];
				return new Promise(function (i) {
					!(function e(n, o) {
						n < Ft.length
							? (document.body.setAttribute("data-swal2-queue-step", n),
							  r.fire(Ft[n]).then(function (t) {
									void 0 !== t.value ? (c.push(t.value), e(n + 1, o)) : a(i, { dismiss: t.dismiss });
							  }))
							: a(i, { value: c });
					})(0);
				});
			},
			getQueueStep: It,
			insertQueueStep: function (t, e) {
				return e && e < Ft.length ? Ft.splice(e, 0, t) : Ft.push(t);
			},
			deleteQueueStep: function (t) {
				void 0 !== Ft[t] && Ft.splice(t, 1);
			},
			showLoading: Wt,
			enableLoading: Wt,
			getTimerLeft: function () {
				return Xt.timeout && Xt.timeout.getTimerLeft();
			},
			stopTimer: Yt,
			resumeTimer: Zt,
			toggleTimer: function () {
				var t = Xt.timeout;
				return t && (t.running ? Yt : Zt)();
			},
			increaseTimer: function (t) {
				if (Xt.timeout) {
					var e = Xt.timeout.increase(t);
					return st(e, !0), e;
				}
			},
			isTimerRunning: function () {
				return Xt.timeout && Xt.timeout.isRunning();
			},
		});
	function ie() {
		var t,
			e = Bt.innerParams.get(this);
		e && ((t = Bt.domCache.get(this)), e.showConfirmButton || (it(t.confirmButton), e.showCancelButton || it(t.actions)), ht([t.popup, t.actions], Y.loading), t.popup.removeAttribute("aria-busy"), t.popup.removeAttribute("data-loading"), (t.confirmButton.disabled = !1), (t.cancelButton.disabled = !1));
	}
	function re() {
		null === X.previousBodyPadding &&
			document.body.scrollHeight > window.innerHeight &&
			((X.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"))),
			(document.body.style.paddingRight = "".concat(
				X.previousBodyPadding +
					(function () {
						var t = document.createElement("div");
						(t.className = Y["scrollbar-measure"]), document.body.appendChild(t);
						var e = t.getBoundingClientRect().width - t.clientWidth;
						return document.body.removeChild(t), e;
					})(),
				"px"
			)));
	}
	function ae() {
		return !!window.MSInputMethodContext && !!document.documentMode;
	}
	function ce() {
		var t = Q(),
			e = $();
		t.style.removeProperty("align-items"), e.offsetTop < 0 && (t.style.alignItems = "flex-start");
	}
	var se = function () {
			navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i) || ($().scrollHeight > window.innerHeight - 44 && (Q().style.paddingBottom = "".concat(44, "px")));
		},
		ue = function () {
			var e,
				t = Q();
			(t.ontouchstart = function (t) {
				e = le(t.target);
			}),
				(t.ontouchmove = function (t) {
					e && (t.preventDefault(), t.stopPropagation());
				});
		},
		le = function (t) {
			var e = Q();
			return t === e || !(at(e) || "INPUT" === t.tagName || (at(P()) && P().contains(t)));
		},
		de = { swalPromiseResolve: new WeakMap() };
	function pe(t, e, n, o) {
		var i;
		n
			? he(t, o)
			: (Kt().then(function () {
					return he(t, o);
			  }),
			  Xt.keydownTarget.removeEventListener("keydown", Xt.keydownHandler, { capture: Xt.keydownListenerCapture }),
			  (Xt.keydownHandlerAdded = !1)),
			e.parentNode && !document.body.getAttribute("data-swal2-queue-step") && e.parentNode.removeChild(e),
			M() &&
				(null !== X.previousBodyPadding && ((document.body.style.paddingRight = "".concat(X.previousBodyPadding, "px")), (X.previousBodyPadding = null)),
				D(document.body, Y.iosfix) && ((i = parseInt(document.body.style.top, 10)), ht(document.body, Y.iosfix), (document.body.style.top = ""), (document.body.scrollTop = -1 * i)),
				"undefined" != typeof window && ae() && window.removeEventListener("resize", ce),
				h(document.body.children).forEach(function (t) {
					t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden")), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden");
				})),
			ht([document.documentElement, document.body], [Y.shown, Y["height-auto"], Y["no-backdrop"], Y["toast-shown"], Y["toast-column"]]);
	}
	function fe(t) {
		var e,
			n,
			o,
			i = $();
		i &&
			(e = Bt.innerParams.get(this)) &&
			!D(i, e.hideClass.popup) &&
			((n = de.swalPromiseResolve.get(this)),
			ht(i, e.showClass.popup),
			mt(i, e.hideClass.popup),
			(o = Q()),
			ht(o, e.showClass.backdrop),
			mt(o, e.hideClass.backdrop),
			(function (t, e, n) {
				var o = Q(),
					i = kt && ct(e),
					r = n.onClose,
					a = n.onAfterClose;
				if (r !== null && typeof r === "function") {
					r(e);
				}
				if (i) {
					me(t, e, o, a);
				} else {
					pe(t, o, J(), a);
				}
			})(this, i, e),
			void 0 !== t ? ((t.isDismissed = void 0 !== t.dismiss), (t.isConfirmed = void 0 === t.dismiss)) : (t = { isDismissed: !0, isConfirmed: !1 }),
			n(t || {}));
	}
	var me = function (t, e, n, o) {
			(Xt.swalCloseEventFinishedCallback = pe.bind(null, t, n, J(), o)),
				e.addEventListener(kt, function (t) {
					t.target === e && (Xt.swalCloseEventFinishedCallback(), delete Xt.swalCloseEventFinishedCallback);
				});
		},
		he = function (t, e) {
			setTimeout(function () {
				"function" == typeof e && e(), t._destroy();
			});
		};
	function ge(t, e, n) {
		var o = Bt.domCache.get(t);
		e.forEach(function (t) {
			o[t].disabled = n;
		});
	}
	function ve(t, e) {
		if (!t) return !1;
		if ("radio" === t.type) for (var n = t.parentNode.parentNode.querySelectorAll("input"), o = 0; o < n.length; o++) n[o].disabled = e;
		else t.disabled = e;
	}
	var be = (function () {
			function n(t, e) {
				a(this, n), (this.callback = t), (this.remaining = e), (this.running = !1), this.start();
			}
			return (
				c(n, [
					{
						key: "start",
						value: function () {
							return this.running || ((this.running = !0), (this.started = new Date()), (this.id = setTimeout(this.callback, this.remaining))), this.remaining;
						},
					},
					{
						key: "stop",
						value: function () {
							return this.running && ((this.running = !1), clearTimeout(this.id), (this.remaining -= new Date() - this.started)), this.remaining;
						},
					},
					{
						key: "increase",
						value: function (t) {
							var e = this.running;
							return e && this.stop(), (this.remaining += t), e && this.start(), this.remaining;
						},
					},
					{
						key: "getTimerLeft",
						value: function () {
							return this.running && (this.stop(), this.start()), this.remaining;
						},
					},
					{
						key: "isRunning",
						value: function () {
							return this.running;
						},
					},
				]),
				n
			);
		})(),
		ye = {
			email: function (t, e) {
				return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid email address");
			},
			url: function (t, e) {
				return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid URL");
			},
		};
	function we(t) {
		var e, n;
		(e = t).inputValidator ||
			Object.keys(ye).forEach(function (t) {
				e.input === t && (e.inputValidator = ye[t]);
			}),
			t.showLoaderOnConfirm && !t.preConfirm && _("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),
			(t.animation = W(t.animation)),
			((n = t).target && ("string" != typeof n.target || document.querySelector(n.target)) && ("string" == typeof n.target || n.target.appendChild)) || (_('Target parameter is not valid, defaulting to "body"'), (n.target = "body")),
			"string" == typeof t.title && (t.title = t.title.split("\n").join("<br />")),
			yt(t);
	}
	function Ce(t) {
		var e = Q(),
			n = $();
		"function" == typeof t.onBeforeOpen && t.onBeforeOpen(n);
		var o = window.getComputedStyle(document.body).overflowY;
		je(e, n, t),
			Te(e, n),
			M() &&
				(Le(e, t.scrollbarPadding, o),
				h(document.body.children).forEach(function (t) {
					t === Q() ||
						(function (t, e) {
							if ("function" == typeof t.contains) return t.contains(e);
						})(t, Q()) ||
						(t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden")), t.setAttribute("aria-hidden", "true"));
				})),
			J() || Xt.previousActiveElement || (Xt.previousActiveElement = document.activeElement),
			"function" == typeof t.onOpen &&
				setTimeout(function () {
					return t.onOpen(n);
				}),
			ht(e, Y["no-transition"]);
	}
	function ke(t) {
		var e,
			n = $();
		t.target === n && ((e = Q()), n.removeEventListener(kt, ke), (e.style.overflowY = "auto"));
	}
	function xe(t, e) {
		"select" === e.input || "radio" === e.input ? Me(t, e) : -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(e.input) && (v(e.inputValue) || y(e.inputValue)) && Re(t, e);
	}
	function Pe(t, e) {
		t.disableButtons(), e.input ? Ne(t, e) : Ue(t, e, !0);
	}
	function Ae(t, e) {
		t.disableButtons(), e(K.cancel);
	}
	function Be(t, e) {
		t.closePopup({ value: e });
	}
	function Se(e, t, n, o) {
		t.keydownTarget && t.keydownHandlerAdded && (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, { capture: t.keydownListenerCapture }), (t.keydownHandlerAdded = !1)),
			n.toast ||
				((t.keydownHandler = function (t) {
					return ze(e, t, o);
				}),
				(t.keydownTarget = n.keydownListenerCapture ? window : $()),
				(t.keydownListenerCapture = n.keydownListenerCapture),
				t.keydownTarget.addEventListener("keydown", t.keydownHandler, { capture: t.keydownListenerCapture }),
				(t.keydownHandlerAdded = !0));
	}
	function Ee(t, e, n) {
		var o = V(),
			i = 0;
		if (i < o.length) return (e += n) === o.length ? (e = 0) : -1 === e && (e = o.length - 1), o[e].focus();
		$().focus();
	}
	function Oe(t, e, n) {
		Bt.innerParams.get(t).toast ? Qe(t, e, n) : (Je(e), Xe(e), Ge(t, e, n));
	}
	var Te = function (t, e) {
			kt && ct(e) ? ((t.style.overflowY = "hidden"), e.addEventListener(kt, ke)) : (t.style.overflowY = "auto");
		},
		Le = function (t, e, n) {
			var o;
			((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) || ("MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints)) && !D(document.body, Y.iosfix) && ((o = document.body.scrollTop), (document.body.style.top = "".concat(-1 * o, "px")), mt(document.body, Y.iosfix), ue(), se()),
				"undefined" != typeof window && ae() && (ce(), window.addEventListener("resize", ce)),
				e && "hidden" !== n && re(),
				setTimeout(function () {
					t.scrollTop = 0;
				});
		},
		je = function (t, e, n) {
			mt(t, n.showClass.backdrop), ot(e), mt(e, n.showClass.popup), mt([document.documentElement, document.body], Y.shown), n.heightAuto && n.backdrop && !n.toast && mt([document.documentElement, document.body], Y["height-auto"]);
		},
		qe = function (t) {
			return t.checked ? 1 : 0;
		},
		Ie = function (t) {
			return t.checked ? t.value : null;
		},
		Ve = function (t) {
			return t.files.length ? (null !== t.getAttribute("multiple") ? t.files : t.files[0]) : null;
		},
		Me = function (e, n) {
			function o(t) {
				return He[n.input](i, De(t), n);
			}
			var i = P();
			v(n.inputOptions) || y(n.inputOptions)
				? (Wt(),
				  b(n.inputOptions).then(function (t) {
						e.hideLoading(), o(t);
				  }))
				: "object" === r(n.inputOptions)
				? o(n.inputOptions)
				: F("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(r(n.inputOptions)));
		},
		Re = function (e, n) {
			var o = e.getInput();
			it(o),
				b(n.inputValue)
					.then(function (t) {
						(o.value = "number" === n.input ? parseFloat(t) || 0 : "".concat(t)), ot(o), o.focus(), e.hideLoading();
					})
					.catch(function (t) {
						F("Error in inputValue promise: ".concat(t)), (o.value = ""), ot(o), o.focus(), e.hideLoading();
					});
		},
		He = {
			select: function (t, e, i) {
				function r(t, e, n) {
					var o = document.createElement("option");
					(o.value = n), H(o, e), i.inputValue.toString() === n.toString() && (o.selected = !0), t.appendChild(o);
				}
				var a = gt(t, Y.select);
				e.forEach(function (t) {
					var e,
						n = t[0],
						o = t[1];
					Array.isArray(o)
						? (((e = document.createElement("optgroup")).label = n),
						  (e.disabled = !1),
						  a.appendChild(e),
						  o.forEach(function (t) {
								return r(e, t[1], t[0]);
						  }))
						: r(a, o, n);
				}),
					a.focus();
			},
			radio: function (t, e, a) {
				var c = gt(t, Y.radio);
				e.forEach(function (t) {
					var e = t[0],
						n = t[1],
						o = document.createElement("input"),
						i = document.createElement("label");
					(o.type = "radio"), (o.name = Y.radio), (o.value = e), a.inputValue.toString() === e.toString() && (o.checked = !0);
					var r = document.createElement("span");
					H(r, n), (r.className = Y.label), i.appendChild(o), i.appendChild(r), c.appendChild(i);
				});
				var n = c.querySelectorAll("input");
				n.length && n[0].focus();
			},
		},
		De = function o(n) {
			var i = [];
			return (
				"undefined" != typeof Map && n instanceof Map
					? n.forEach(function (t, e) {
							var n = t;
							"object" === r(n) && (n = o(n)), i.push([e, n]);
					  })
					: Object.keys(n).forEach(function (t) {
							var e = n[t];
							"object" === r(e) && (e = o(e)), i.push([t, e]);
					  }),
				i
			);
		},
		Ne = function (e, n) {
			var o = (function (t, e) {
				var n = t.getInput();
				if (!n) return null;
				switch (e.input) {
					case "checkbox":
						return qe(n);
					case "radio":
						return Ie(n);
					case "file":
						return Ve(n);
					default:
						return e.inputAutoTrim ? n.value.trim() : n.value;
				}
			})(e, n);
			n.inputValidator
				? (e.disableInput(),
				  Promise.resolve()
						.then(function () {
							return b(n.inputValidator(o, n.validationMessage));
						})
						.then(function (t) {
							e.enableButtons(), e.enableInput(), t ? e.showValidationMessage(t) : Ue(e, n, o);
						}))
				: e.getInput().checkValidity()
				? Ue(e, n, o)
				: (e.enableButtons(), e.showValidationMessage(n.validationMessage));
		},
		Ue = function (e, t, n) {
			t.showLoaderOnConfirm && Wt(),
				t.preConfirm
					? (e.resetValidationMessage(),
					  Promise.resolve()
							.then(function () {
								return b(t.preConfirm(n, t.validationMessage));
							})
							.then(function (t) {
								vt(S()) || !1 === t ? e.hideLoading() : Be(e, void 0 === t ? n : t);
							}))
					: Be(e, n);
		},
		_e = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"],
		Fe = ["Escape", "Esc"],
		ze = function (t, e, n) {
			var o = Bt.innerParams.get(t);
			o.stopKeydownPropagation && e.stopPropagation(), "Enter" === e.key ? We(t, e, o) : "Tab" === e.key ? Ke(e, o) : -1 !== _e.indexOf(e.key) ? Ye() : -1 !== Fe.indexOf(e.key) && Ze(e, o, n);
		},
		We = function (t, e, n) {
			if (!e.isComposing && e.target && t.getInput() && e.target.outerHTML === t.getInput().outerHTML) {
				if (-1 !== ["textarea", "file"].indexOf(n.input)) return;
				Ht(), e.preventDefault();
			}
		},
		Ke = function (t) {
			for (var e = t.target, n = V(), o = -1, i = 0; i < n.length; i++)
				if (e === n[i]) {
					o = i;
					break;
				}
			t.shiftKey ? Ee(0, o, -1) : Ee(0, o, 1), t.stopPropagation(), t.preventDefault();
		},
		Ye = function () {
			var t = E(),
				e = O();
			document.activeElement === t && vt(e) ? e.focus() : document.activeElement === e && vt(t) && t.focus();
		},
		Ze = function (t, e, n) {
			W(e.allowEscapeKey) && (t.preventDefault(), n(K.esc));
		},
		Qe = function (e, t, n) {
			t.popup.onclick = function () {
				var t = Bt.innerParams.get(e);
				t.showConfirmButton || t.showCancelButton || t.showCloseButton || t.input || n(K.close);
			};
		},
		$e = !1,
		Je = function (e) {
			e.popup.onmousedown = function () {
				e.container.onmouseup = function (t) {
					(e.container.onmouseup = void 0), t.target === e.container && ($e = !0);
				};
			};
		},
		Xe = function (e) {
			e.container.onmousedown = function () {
				e.popup.onmouseup = function (t) {
					(e.popup.onmouseup = void 0), (t.target !== e.popup && !e.popup.contains(t.target)) || ($e = !0);
				};
			};
		},
		Ge = function (n, o, i) {
			o.container.onclick = function (t) {
				var e = Bt.innerParams.get(n);
				$e ? ($e = !1) : t.target === o.container && W(e.allowOutsideClick) && i(K.backdrop);
			};
		};
	var tn = function (t, e, n) {
			var o = q();
			it(o),
				e.timer &&
					((t.timeout = new be(function () {
						n("timer"), delete t.timeout;
					}, e.timer)),
					e.timerProgressBar &&
						(ot(o),
						setTimeout(function () {
							t.timeout.running && st(e.timer);
						})));
		},
		en = function (t, e) {
			if (!e.toast) return W(e.allowEnterKey) ? (e.focusCancel && vt(t.cancelButton) ? t.cancelButton.focus() : e.focusConfirm && vt(t.confirmButton) ? t.confirmButton.focus() : void Ee(0, -1, 1)) : nn();
		},
		nn = function () {
			document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur();
		};
	var on,
		rn = function (t) {
			for (var e in t) t[e] = new WeakMap();
		},
		an = Object.freeze({
			hideLoading: ie,
			disableLoading: ie,
			getInput: function (t) {
				var e = Bt.innerParams.get(t || this),
					n = Bt.domCache.get(t || this);
				return n ? G(n.content, e.input) : null;
			},
			close: fe,
			closePopup: fe,
			closeModal: fe,
			closeToast: fe,
			enableButtons: function () {
				ge(this, ["confirmButton", "cancelButton"], !1);
			},
			disableButtons: function () {
				ge(this, ["confirmButton", "cancelButton"], !0);
			},
			enableInput: function () {
				return ve(this.getInput(), !1);
			},
			disableInput: function () {
				return ve(this.getInput(), !0);
			},
			showValidationMessage: function (t) {
				var e = Bt.domCache.get(this);
				H(e.validationMessage, t);
				var n = window.getComputedStyle(e.popup);
				(e.validationMessage.style.marginLeft = "-".concat(n.getPropertyValue("padding-left"))), (e.validationMessage.style.marginRight = "-".concat(n.getPropertyValue("padding-right"))), ot(e.validationMessage);
				var o = this.getInput();
				o && (o.setAttribute("aria-invalid", !0), o.setAttribute("aria-describedBy", Y["validation-message"]), tt(o), mt(o, Y.inputerror));
			},
			resetValidationMessage: function () {
				var t = Bt.domCache.get(this);
				t.validationMessage && it(t.validationMessage);
				var e = this.getInput();
				e && (e.removeAttribute("aria-invalid"), e.removeAttribute("aria-describedBy"), ht(e, Y.inputerror));
			},
			getProgressSteps: function () {
				return Bt.domCache.get(this).progressSteps;
			},
			_main: function (t) {
				Jt(t), Xt.currentInstance && Xt.currentInstance._destroy(), (Xt.currentInstance = this);
				var e = (function (t) {
					var e = s({}, Gt.showClass, t.showClass),
						n = s({}, Gt.hideClass, t.hideClass),
						o = s({}, Gt, t);
					if (((o.showClass = e), (o.hideClass = n), t.animation === false)) {
						o.showClass = { popup: "swal2-noanimation", backdrop: "swal2-noanimation" };
						o.hideClass = {};
					}
					return o;
				})(t);
				we(e), Object.freeze(e), Xt.timeout && (Xt.timeout.stop(), delete Xt.timeout), clearTimeout(Xt.restoreFocusTimeout);
				var n = (function (t) {
					var e = { popup: $(), container: Q(), content: P(), actions: T(), confirmButton: E(), cancelButton: O(), closeButton: I(), validationMessage: S(), progressSteps: B() };
					return Bt.domCache.set(t, e), e;
				})(this);
				return (
					Rt(this, e),
					Bt.innerParams.set(this, e),
					(function (n, o, i) {
						return new Promise(function (t) {
							var e = function t(e) {
								n.closePopup({ dismiss: e });
							};
							de.swalPromiseResolve.set(n, t);
							o.confirmButton.onclick = function () {
								return Pe(n, i);
							};
							o.cancelButton.onclick = function () {
								return Ae(n, e);
							};
							o.closeButton.onclick = function () {
								return e(K.close);
							};
							Oe(n, o, e);
							Se(n, Xt, i, e);
							if (i.toast && (i.input || i.footer || i.showCloseButton)) {
								mt(document.body, Y["toast-column"]);
							} else {
								ht(document.body, Y["toast-column"]);
							}
							xe(n, i);
							Ce(i);
							tn(Xt, i, e);
							en(o, i);
							setTimeout(function () {
								o.container.scrollTop = 0;
							});
						});
					})(this, n, e)
				);
			},
			update: function (e) {
				var t = $(),
					n = Bt.innerParams.get(this);
				if (!t || D(t, n.hideClass.popup)) return _("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
				var o = {};
				Object.keys(e).forEach(function (t) {
					sn.isUpdatableParameter(t) ? (o[t] = e[t]) : _('Invalid parameter to update: "'.concat(t, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'));
				});
				var i = s({}, n, o);
				Rt(this, i), Bt.innerParams.set(this, i), Object.defineProperties(this, { params: { value: s({}, this.params, e), writable: !1, enumerable: !0 } });
			},
			_destroy: function () {
				var t = Bt.domCache.get(this),
					e = Bt.innerParams.get(this);
				e && (t.popup && Xt.swalCloseEventFinishedCallback && (Xt.swalCloseEventFinishedCallback(), delete Xt.swalCloseEventFinishedCallback), Xt.deferDisposalTimer && (clearTimeout(Xt.deferDisposalTimer), delete Xt.deferDisposalTimer), "function" == typeof e.onDestroy && e.onDestroy(), delete this.params, delete Xt.keydownHandler, delete Xt.keydownTarget, rn(Bt), rn(de));
			},
		}),
		cn = (function () {
			function r() {
				if ((a(this, r), "undefined" != typeof window)) {
					"undefined" == typeof Promise && F("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"), (on = this);
					for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
					var o = Object.freeze(this.constructor.argsToParams(e));
					Object.defineProperties(this, { params: { value: o, writable: !1, enumerable: !0, configurable: !0 } });
					var i = this._main(this.params);
					Bt.promise.set(this, i);
				}
			}
			return (
				c(r, [
					{
						key: "then",
						value: function (t) {
							return Bt.promise.get(this).then(t);
						},
					},
					{
						key: "finally",
						value: function (t) {
							return Bt.promise.get(this).finally(t);
						},
					},
				]),
				r
			);
		})();
	s(cn.prototype, an),
		s(cn, oe),
		Object.keys(an).forEach(function (t) {
			cn[t] = function () {
				if (on) return on[t].apply(on, arguments);
			};
		}),
		(cn.DismissReason = K),
		(cn.version = "9.17.2");
	var sn = cn;
	return (sn.default = sn);
}),
	void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);
"undefined" != typeof document &&
	(function (e, t) {
		var n = e.createElement("style");
		if ((e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet)) n.styleSheet.disabled || (n.styleSheet.cssText = t);
		else
			try {
				n.innerHTML = t;
			} catch (e) {
				n.innerText = t;
			}
	})(
		document,
		'.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;padding:0;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent!important;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:"";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:.3125em;border-bottom-left-radius:.3125em}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}'
	);

// Google Tag Manager -->
function GoogleTag() {
	(function (w, d, s, l, i) {
		w[l] = w[l] || [];
		w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
		var f = d.getElementsByTagName(s)[0],
			j = d.createElement(s),
			dl = l != "dataLayer" ? "&l=" + l : "";
		j.async = true;
		j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
		f.parentNode.insertBefore(j, f);
	})(window, document, "script", "dataLayer", "GTM-M4GQMJL");
}
GoogleTag();
// End Google Tag Manager -->
// Google Tag Manager 2 -->
function GoogleTag2() {
	(function (w, d, s, l, i) {
		w[l] = w[l] || [];
		w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
		var f = d.getElementsByTagName(s)[0],
			j = d.createElement(s),
			dl = l != "dataLayer" ? "&l=" + l : "";
		j.async = true;
		j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
		f.parentNode.insertBefore(j, f);
	})(window, document, "script", "dataLayer", "GTM-MGDJM8M");
}
GoogleTag2();
// End Google Tag Manager -->

// Facebook Pixel -->
!(function (f, b, e, v, n, t, s) {
	if (f.fbq) return;
	n = f.fbq = function () {
		n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
	};
	if (!f._fbq) f._fbq = n;
	n.push = n;
	n.loaded = !0;
	n.version = "2.0";
	n.queue = [];
	t = b.createElement(e);
	t.async = !0;
	t.src = v;
	s = b.getElementsByTagName(e)[0];
	s.parentNode.insertBefore(t, s);
})(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
fbq("init", "836392614188080");
fbq("track", "PageView");
var facebookPixelImg = document.createElement("img");
facebookPixelImg.src = "https://www.facebook.com/tr?id=836392614188080&ev=PageView&noscript=1";
facebookPixelImg.style = "height: 1px;width:1px;display:none";
document.head.appendChild(facebookPixelImg);
// End Facebook Pixel -->

if (getMetaContent("isRecaptcha")) {
	(function () {
		var po = document.createElement("script");
		po.type = "text/javascript";
		po.async = true;
		po.defer = true;
		po.src = "https://www.google.com/recaptcha/api.js";
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(po, s);
	})();
}

let hasPhone = false;
let calls = [];
let whatsapps = [];

function dynamicallyLoadScript(url) {
	var intlTelInputCSS = document.createElement("link"); // create a script DOM node
	intlTelInputCSS.href = "https://drupal-landings.s3.eu-west-1.amazonaws.com/intl-tel/css/intlTelInput-dist.css"; // set its src to the provided URL
	intlTelInputCSS.setAttribute("rel", "stylesheet");
	document.head.appendChild(intlTelInputCSS); // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)

	let styles = document.createElement("style");
	styles.innerHTML = ".iti{width:100%;color:#000}";
	document.head.appendChild(styles);
	// document.querySelector(".iti .iti--allow-dropdown").style = "width:100%";
	// document.querySelector(".iti__country-name").style = "color:#000";
}
dynamicallyLoadScript();

function getMetaContent(name, defaultValue = undefined) {
	const session = document.getElementsByName(name);
	if (session.length > 0) {
		return session[0].content;
	}
	return defaultValue;
}

function setPhoneNumber(phoneNumber, whatsappNumber) {
	const callDefaultNumber = getMetaContent("call-dn", "+97148732081");
	let wpDefaultNumber;
	if (document.querySelector("html").getAttribute("lang") == "ru") {
		wpDefaultNumber = getMetaContent("wp-dn", "971522156205");
	} else {
		wpDefaultNumber = getMetaContent("wp-dn", "971523561901");
	}

	const phoneEls = document.querySelectorAll(".phone-replace");
	phoneEls.forEach((phoneEL) => {
		phoneEL.innerText = callDefaultNumber;
	});

	calls.forEach((call) => {
		call.setAttribute("href", "tel:" + callDefaultNumber);
	});

	whatsapps.forEach((whatsapp) => {
		whatsapp.setAttribute("href", "https://api.whatsapp.com/send?phone=" + wpDefaultNumber);
	});
}

function getPhoneNumber(landing_name, el, mtp) {
	if (!hasPhone) {
		let _data = {
			name: "landing",
			landing_name: landing_name,
			path: window.location.href,
			mtp: mtp,
		};

		fetch("https://api.axcapital.ae/api/telecom/general/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(_data),
		})
			.then((response) => response.json())
			.then((response) => {
				const phoneNumber = response["phone"] || null;
				const whatsappNumber = response["wp"] || null;

				setPhoneNumber(phoneNumber, whatsappNumber);
				window.location.href = el.getAttribute("href");
			})
			.catch(() => {
				setPhoneNumber(null, null);
				window.location.href = el.getAttribute("href");
			});

		hasPhone = true;
	} else {
		const callDefaultNumber = getMetaContent("call-dn", "+97148732081");
		const href = el.getAttribute("href") || callDefaultNumber;
		if (href) {
			window.location.href = el.getAttribute("href");
		}
	}
}

document.addEventListener("DOMContentLoaded", function () {
	// Events
	// if (isGTAGExists()) {
	// document.querySelectorAll("[data-gtag-click]").forEach(function (el) {
	// 	el.addEventListener("click", function (e) {
	// 		const event = el.getAttribute("data-gtag-click");
	// 		gtag("event", "click", {
	// 			event_category: event,
	// 		});
	// 		console.log("gtag click", event);

	// 		const yandex = getMetaContent("yandexId");
	// 		if (yandex) {
	// 			ym(yandex, "reachGoal", event);
	// 			console.log("ym click", event);
	// 		}
	// 	});
	// });
	function validateForm() {
		var response = grecaptcha.getResponse();
		if (response.length === 0) {
			alert("Please verify that you are not a robot.");
			return false;
		} else {
			return true;
		}
	}
	document.querySelectorAll("form[data-gtag-submit]").forEach(function (el) {
		const inputs = el.querySelectorAll("input");
		const btn = el.querySelector("button");
		const inputTel = el.querySelector("input[type='tel']");

		const siteKey = getMetaContent("isRecaptcha");
		const recaptchaDiv = document.createElement("div");
		recaptchaDiv.className = "g-recaptcha";
		recaptchaDiv.setAttribute("data-sitekey", siteKey);
		el.appendChild(recaptchaDiv);

		inputTel.addEventListener("focus", function () {
			let title = el.querySelector(".iti__selected-flag");
			this.setAttribute("value", `${title.getAttribute("title").split(": ").pop()} `);
		});
		inputTel.setAttribute("pattern", "[+]?[0-9].{8,15}$");
		var iti = window.intlTelInput(inputTel, {
			initialCountry: "auto",
			geoIpLookup: getIp,
			utilsScript: "https://drupal-landings.s3.eu-west-1.amazonaws.com/intl-tel/js/utils.js",
		});

		const info = document.querySelector(".alert-info");

		function process(event) {
			event.preventDefault();

			const phoneNumber = phoneInput.getNumber();

			info.style.display = "";
			info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
		}

		function getIp(callback) {
			fetch("https://ipinfo.io/json?token=1ca8e9d8abb2b0", { headers: { Accept: "application/json" } })
				.then((resp) => resp.json())
				.catch(() => {
					return {
						country: "us",
					};
				})
				.then((resp) => callback(resp.country));
		}

		// store the instance variable so we can access it in the console e.g. window.iti.getNumber()
		window.iti = iti;
		el.addEventListener("submit", async function (e) {
			e.preventDefault();
			if (validateForm()) {
				grecaptcha.execute();
				if (btn.hasAttribute("type")) {
					fetchData();
					Swal.fire(getMetaContent("thankyou-title", "Thank you for your interest!"), getMetaContent("thankyou-subtitle", "We'll get back to you soon"), "success");
					btn.removeAttribute("type");
				} else {
					// Swal.fire(getMetaContent("thankyou-title-repeat", "You've already submitted the form"), getMetaContent("thankyou-subtitle", "We'll get back to you soon"), "info");
					Swal.fire({
						title: getMetaContent("thankyou-title-repeat", "Do you want to resend the form?"),
						icon: "question",
						showCancelButton: true,
						confirmButtonText: getMetaContent("thankyou-btn-send", "Send"),
						cancelButtonText: getMetaContent("thankyou-btn-cancel", "Cancel"),
					}).then((result) => {
						/* Read more about isConfirmed, isDenied below */
						if (result.isConfirmed) {
							// response;
							fetchData();
							Swal.fire(getMetaContent("thankyou-repeat-ty", "Thank you!"), "", "success");
						} else if (result.isDismissed) {
							Swal.fire(getMetaContent("thankyou-repeat-cc", "Cancelled"), "", "info");
						}
					});
				}
				function init() {
					const data = {};
					for (let i = 0; i < inputs.length; i++) {
						const input = inputs[i];
						// `${input.getAttribute("name")}: ${input.value}`;
						data[input.getAttribute("name")] = input.value;
					}
					return JSON.stringify(data);
				}
				function fetchData() {
					fetch("https://form.sales-inquiries.ae/logger/ajax_form_receiver/", {
						method: "POST",
						body: init(),
					})
						.then((response) => {
							if (response.status == 200) {
								console.log("success=1. Status: " + response.status);
							} else if (response.status >= 400) {
								Swal.fire("Form has not been submitted", `success=0. Status: ${response.status} // Check INTEGROMAT first.`, "error");
								console.log("success=0. Status: " + response.status + "");
							}
						})
						.catch((err) => {
							console.log(err);
						});
				}

				const event = el.getAttribute("data-gtag-submit");
				gtag("event", "submit", {
					event_category: event,
				});

				const ads = getMetaContent("ads");
				if (ads) {
					gtag("event", "conversion", {
						send_to: ads,
					});
				}

				const yandex = getMetaContent("yandexId");
				if (yandex) {
					ym(yandex, "reachGoal", event);
					console.log("ym submit", event);
				}
			}
		});
	});
	// }

	// Calls
	calls = document.querySelectorAll(".event_call");
	whatsapps = document.querySelectorAll(".event_wp");
	const landingName = getMetaContent("project");
	const phoneReplaceOnly = document.querySelectorAll(".phone-replace-only");

	dynamicStyles = document.createElement("style");
	dynamicStyles.type = "text/css";
	document.head.appendChild(dynamicStyles);
	dynamicStyles.innerHTML = ".phone-replace-only{display:flex;cursor:pointer;font-kerning:none;-webkit-text-rendering:optimizeSpeed;text-rendering:optimizeSpeed;-webkit-transform:translateZ(0);transform:translateZ(0);}.phone-replace-only .char{opacity:0;filter:blur(10px);animation:chars 1s 0s 1 forwards}@keyframes chars{to{filter:blur(0px);opacity:1}}";

	phoneReplaceOnly.forEach(function (el) {
		const callDefaultNumber = getMetaContent("call-dn", "+97148732081");
		const href = el.getAttribute("href") || callDefaultNumber;

		el.addEventListener("click", function (event) {
			event.preventDefault();
			el.innerHTML = callDefaultNumber;
			if (el.hasAttribute("href")) {
				window.location.href = el.getAttribute("href");
			} else {
				el.classList.add("show-number");
				var arr = el.innerHTML.split("");
				var str = "";
				for (var i = 0; i < arr.length; i++) {
					if (arr[i]) {
						arr[i] = "<div class='char'>" + arr[i] + "</div>";
					}
					dynamicStyles.insertAdjacentHTML("beforeend", `.phone-replace-only .char:nth-child(${i + 1}){animation-delay:${(i + 1) / 15}s}`);
				}

				el.innerHTML = arr.join(" ");
				setTimeout(() => {
					el.innerHTML = callDefaultNumber;
				}, 1500);
				el.setAttribute("href", "tel:" + callDefaultNumber.replace(/[^+\d]/g, ""));

				if (window.matchMedia("(max-width: 991.99px)").matches && href) {
					window.location.href = el.getAttribute("href");
				}
			}
		});
	});

	calls.forEach(function (el) {
		el.addEventListener("click", function (event) {
			event.preventDefault();
			getPhoneNumber(landingName, el, "call");
		});
	});

	// Whatsapps
	whatsapps.forEach(function (el) {
		el.addEventListener("click", (event) => {
			event.preventDefault();
			getPhoneNumber(landingName, el, "wp");
		});
	});
});

function isGTAGExists() {
	if (typeof gtag === "function") {
		return true;
	} else {
		console.log("gtag not exists");
		return false;
	}
}

function isYMExists() {
	if (typeof ym === "function") {
		return true;
	} else {
		console.log("ym not exists");
		return false;
	}
}

// (function () {
// 	var po = document.createElement("script");
// 	po.type = "text/javascript";
// 	po.async = true;
// 	po.src = "https://www.google.com/recaptcha/api.js?render=explicit";
// 	var s = document.getElementsByTagName("script")[0];
// 	s.parentNode.insertBefore(po, s);
// })();

// function executeRecaptcha(apiKey, siteId) {
// 	grecaptcha.ready(function () {
// 		grecaptcha.execute(apiKey, { action: siteId }).then(function (token) {
// 			// Обработка токена reCAPTCHA для сайта с идентификатором siteId
// 		});
// 	});
// }

// // Вызов функции executeRecaptcha для каждого сайта
// setTimeout(() => {
// 	executeRecaptcha("6LdJNp4lAAAAADoIIQewIEkbTmEs9uWDpn6IVs6x", getMetaContent("project"));
// }, 1000);
