
if (document.qzScript || (document.qzScript = 1, !document.querySelectorAll && document.createStyleSheet && function (n, t) {

}(), qz = {
    tm: 0,
    dcs: "",
    ssl: (document.location.protocol == "http:" ? "http" : "https") + ":",
    lk: 0,
    qv: 0,
    addE: function (n, t, i, r) {
        var u;
        if (t != "DOMContentLoaded" || document.addEventListener || (n = window, t = "load"), typeof n == "string" && (n = qz.obj(n)), t instanceof Array) {
            for (u in t) qz.addE(n, t[u], i, r);
            return
        }
        if (n instanceof Array) for (u in n) qz.addE(n[u], t, i, r); else {
            if (!n || typeof n != "object") return;
            if (t == "tclick") {
                qz.addE(n, "click", i, r);
                n.touchEvt = function (n) {
                    if (document.moveing) return !1;
                    i(n);
                    n.preventDefault()
                };
                qz.addE(n, "touchstart", n.touchEvt);
                return
            }
            r && (i = function (n, t) {
                return function (i) {
                    t(n, i)
                }
            }(n, i), r = 0);
            n.addEventListener ? n.addEventListener(t, i, !0) : n.attachEvent("on" + t, i)
        }
    },
    data: {},
    host: "www.poll-maker.com",
    tst: 0,
    popInit: function (n) {
        var o = n.getAttribute("data-quiz"), t = qz.data[o + "-" + n.k], c, e, r, u, i, a;
        if (qz.addE(window, "message", function (n) {
            return function (t) {
                var i, r;
                if ((t.data + " ").substr(0, 1) == "{") {
                    if (i = JSON.parse(t.data), i.qid != n.id || i.k !== n.k) return;
                    switch (i.act) {
                        case"init":
                            n.op && n.f.contentWindow.postMessage('{"act":"op","op":' +
                                n.op + "}", "*");
                            n.winit = 1;
                            qz.popQuiz(n.a);
                            n.m.className = "qp_quiz";
                            qz.evt(n.id, n.k, "Load", {status: "loaded"});
                            break;
                        case"window":
                            i.evt.status && setTimeout(function (n) {
                                return function () {
                                    var t = qz.findPos(n), i = t.y + t.sp.scrollTop - 35;
                                    qz.easeScroll(i)
                                }
                            }(f), 350);
                            break;
                        case"verifycb":
                            n.f.removeAttribute("qpmax");
                        case"height":
                            i.h && n.emtypeN != 2 && n.emtypeN != 3 && n.emtypeN != 4 && n.emtypeN != 6 && (n.emtypeN == 1 ? n.h && n.h != "auto" || (n.f.style.height = i.h + 0 + "px", n.m.qpfr && (n.m.style.height = "")) : (n.f.style.height = i.h + 0 + "px;", n.f.inith || (n.f.parentNode.style.height = i.tmax + 0 + "px", n.f.style.minHeight = "100%", n.emtypeN == 5 && (r = i.tmax + 0 + 80, n.winx.style.cssText = "bottom:" + r + "px;bottom:min(calc(100% - 40px)," + r + "px)"))), n.f.inith = 1, n.f.contentWindow.postMessage('{"act":"hfin"}', "*"));
                            qz.evt(n.id, n.k, "Height", i);
                            break;
                        case"max":
                            qz.obj("qp-frstyle") || document.body.insertAdjacentHTML("beforeBegin", "<STYLE id='qp-frstyle'>IFRAME[qpmax='1'] {position:fixed; top:0; left:0; bottom:0; right:0; height:100%!important; width:100%!important; background:transparent!important;}<STYLE>");
                            n.f.setAttribute("qpmax", 1);
                            break;
                        case"min":
                            n.f.removeAttribute("qpmax");
                            break;
                        case"body":
                            document.body.setAttribute(i.n, i.v)
                    }
                }
            }
        }(t)), c = "https://poll-maker.com", t.host && (c = t.host), t.f = document.createElement("IFRAME"), t.f.src = c + "/" + o + (t.eurl ? "?" + t.eurl : "") + "#fr=" + encodeURIComponent(document.location + "") + "&frk=" + t.k, t.f.setAttribute("scrolling", "auto"), t.f.setAttribute("frameborder", "0"), t.f.style.cssText = t.emtypeN == 2 ? "position:fixed; height:100%; width:100%; zindex:1; top:0px; left:0px; background:transparent;" : "width:" + (t.emtypeN == 1 && t.w ? t.w : "100%") + "; height:" + (t.emtypeN == 5 && t.sh && (!t.h || t.h == "auto") ? t.sh + "px" : "100%") + "; background:transparent; border:0; overflow:auto;", t.m.appendChild(t.f), n.ready = 1, e = {
            src: qz.ref(),
            lnk: []
        }, e.src && !qz.getHost()) {
            if (r = qz.obj("A[href*='linkto.run/'][href*='" + o.substr(1) + "']", 3), r) for (u = 0; u < r.length; u++) {
                i = {};
                a = r[u].parentNode;
                i.v = r[u].getAttribute("href").split("linkto.run/")[1].split("/")[0];
                var l = i.t = r[u].innerText, s = r[u].previousSibling, h = r[u].nextSibling;
                i.t = "[" +
                    i.t + "]";
                s && s.nodeType == 3 && s.textContent && (i.t = s.textContent + "" + i.t);
                h && h.nodeType == 3 && h.textContent && (i.t += h.textContent + "");
                i.t = i.t.replace(/^[\s\r\f\n\t]+|[\s\r\f\n\t]+$/gi, "");
                "[" + l + "]" == i.t && (i.t = l);
                r[u].getAttribute("rel") == "nofollow" && (i.nf = 1);
                e.lnk.push(i)
            }
            qz.xSend("Quiz.Track_Ref " + o.substr(1), e.src ? "ref=" + encodeURIComponent(JSON.stringify(e)) : "", function () {
                return function () {
                }
            }(t))
        }
    },
    dataProp: function (n, t) {
        for (var i, r, e, o, u = 0, f = n.attributes, s = f.length; u < s; u++) i = f[u].nodeName.split("-"), r = f[u].nodeValue, i[0] == "data" && (e = {
            type: "emtype",
            emtype: "emtypeN",
            width: "w",
            height: "h",
            fullscreen: "fs"
        }[i[1]], i = e ? e : i[1], o = parseFloat(r), r + "" == o + "" && (r = o), t[i] = r)
    },
    init: function () {
        var i, e, t, r, o, f, n, u, c;
        for (window.qzAsyncInit && window.qzAsyncInit(), i = document.querySelectorAll("A[quiz],DIV[quiz],A[data-quiz],DIV[data-quiz]", 1), n = 0; n < i.length; n++) if (!i[n].loaded) {
            for (e = i[n].getAttribute("quiz"), e || (e = i[n].getAttribute("data-quiz")), i[n].k = n, t = {
                id: e,
                k: n,
                m: document.createElement("DIV"),
                lnk: document.createElement("SPAN"),
                a: i[n],
                html: "",
                sk: 0
            }, qz.dataProp(i[n], t), (i[n].tagName == "DIV" || (i[n].innerHTML + "").indexOf("Loading") != -1) && (i[n].innerHTML = "", i[n].style.display = "inline"), r = i[n]; r && r.className !== "qp_frame";) r = r.previousSibling ? r.previousSibling : r.parentNode;
            if (i[n].parentNode.insertBefore(t.lnk, i[n]), r && r.className == "qp_frame" ? (t.m = r, t.m.qpfr = 1, t.m.className += " qp_quiz") : (t.m.className = "qp_quiz", i[n].parentNode.insertBefore(t.m, i[n])), i[n].parentNode.style.textAlign = "center", i[n].loaded = !0, qz.data[e + "-" + n] = t, t.m.setAttribute("q", e), n > 0 && !t.emtypeN) t.m.innerHTML = "<div style='margin:10px 0;padding:10px;border:1px solid #EC0000;color:#EC0000;max-width:500px;background-color:#FFEAEA;font-family:Arial;font-size:14px;'>Error: Unable to load Quiz, there is already a quiz on this page<\/div>"
            else if (t.emtypeN) qz.buildPop(t); else {
                if (o = {
                    src: qz.ref(),
                    lnk: []
                }, o.src && (f = qz.obj("A[href*='linkto.run/'][href*='" + e.substr(1) + "']", 3), f)) for (n = 0; n < f.length; n++) {
                    u = {};
                    c = f[n].parentNode;
                    u.v = f[n].getAttribute("href").split("linkto.run/")[1].split("/")[0];
                    var h = u.t = f[n].innerText, r = f[n].previousSibling, s = f[n].nextSibling;
                    u.t = "[" + u.t + "]";
                    r && r.nodeType == 3 && r.textContent && (u.t = r.textContent + "" + u.t);
                    s && s.nodeType == 3 && s.textContent && (u.t += s.textContent + "");
                    u.t = u.t.replace(/^[\s\r\f\n\t]+|[\s\r\f\n\t]+$/gi, "");
                    "[" + h + "]" == u.t && (u.t = h);
                    f[n].getAttribute("rel") == "nofollow" && (u.nf = 1);
                    o.lnk.push(u)
                }
                t.m.style.cssText = (t.emtype && t.emtype != 4 ? "display:none;" : "") + " position:relative; margin-bottom:20px; color:#525252; font-family:'open sans',sans-serif; font-weight:400; font-size:14px; line-height:1.5; text-align:center; -webkit-transition:height 150ms ease-out,opacity 100ms ease-out 150ms; transition:height 150ms ease-out,opacity 100ms ease-out 150ms; -moz-transition:height 150ms ease-out,opacity 100ms ease-out 150ms;";
                t.w && (t.m.style.maxWidth = t.w, i[n].style.maxWidth = t.w);
                t.h && (t.m.style.height = t.h, t.m.style.overflow = "auto", t.m.setAttribute("scroll", 1));
                t.fs && (document.body.className += " quiz-page");
                qz.xSend("Quiz.Take " +
                    e.substr(1), o.src ? "ref=" + encodeURIComponent(JSON.stringify(o)) : "", function (n, t) {
                    return function (n) {
                        var i = "?tt=" + (new Date).getTime();
                        t.fs && (n = n.replace(/ quiz[\-]embed/gi, ""));
                        t.html = n;
                        t.sc = qz.getScripts(n);
                        t.lnk.innerHTML = "<link id='qz-css-" + t.id + "' onLoad=\"qz.styleLoad('" + t.id + "')\" href='" + qz.ssl + "//" + (qz.tst ? qz.host + "/3012/CDN" : "cdn.poll-maker.com") + "/quiz-embed-v1.css" + i + "' rel='stylesheet' type='text/css'>";
                        qz.leTFN = function (n, t) {
                            return function () {
                                qz.leStyle(n, t)
                            }
                        }(t.id, t.k);
                        qz.leTMR = setTimeout(qz.leTFN, 1e3);
                        qz.abTrack(t.id)
                    }
                }(t.m, t))
            }
        }
    },
    buildPop: function (n) {
        if (n.emtypeN > 2) {
            n.win = document.createElement("DIV");
            n.win.className = "qp_quiz_win qp_em" + n.emtypeN;
            n.m.parentNode.insertBefore(n.win, n.m);
            var t = "";
            qz.obj("qp-win-css") || (t += ".qp_quiz_win\t\t\t\t\t\t\t\t{opacity:0; position:fixed; top:0; left:0; bottom:0; right:0; padding:30px; transition:opacity 300ms ease-out; pointer-events:none; box-sizing:border-box; z-index:2;}", t += ".qp_quiz_win .qp_quiz\t\t\t\t\t\t{display:block; position:relative; overflow:hidden; height:100%; max-height:calc(100% - 0px); width:calc(100% - 0px); border-radius:6px; box-shadow:1px 1px 6px 1px rgba(0,0,0,0.3); pointer-events:none;}", t += ".qp_quiz_win[show='1']\t\t\t\t\t{opacity:1; pointer-events:all; background:rgba(0,0,0,0.4);}", t += ".qp_quiz_win[show='1'] .qp_quiz, .qp_quiz_win[show='1'] .qp_win_close {pointer-events:all;}", t += "*[data-quiz]:hover\t\t\t\t\t\t{filter:brightness(0.95);}", t += "*[data-quiz][data-dark]:hover\t\t\t\t{filter:brightness(1.2);}", t += "BODY[qpshow='1']\t\t\t\t\t\t\t{overflow:hidden!important;}", t += ".qp_quiz_win.qp_em3 .qp_quiz IFRAME\t\t{height:100%!important;}", t += ".qp_quiz_win.qp_em4 .qp_quiz\t\t\t\t{transition:left 300ms linear!important; left:100%; width:85%;}", t += ".qp_quiz_win.qp_em4[show='1'] .qp_quiz\t{left:15%;}", t += ".qp_quiz_win.qp_em5, .qp_quiz_win.qp_em6\t{background:transparent; pointer-events:none;}", t += ".qp_quiz_win.qp_em5 .qp_quiz\t\t\t\t{position:absolute; transition:bottom 300ms linear; top:auto; bottom:-100%; right:20px; left:auto; width:50%; max-height:calc(100% - 120px);}", t += ".qp_quiz_win.qp_em5 .qp_win_close \t\t{right:0; top:auto; bottom:-100%;}", t += ".qp_quiz_win.qp_em5[show='1'] .qp_quiz\t{bottom:100px;}", t += ".qp_quiz_win.qp_em5[show='1'] + A[data-quiz='" + n.id + "'] {}", t += ".qp_quiz_win.qp_em6 .qp_win_close \t\t{left:calc(50% - 20px); display:block; top:50px; transition:none;}", t += ".qp_quiz_win.qp_em6 .qp_quiz\t\t\t\t{transition:left 300ms linear; top:40px; left:100%; width:calc(50% + 30px); max-height:calc(100% - 80px)!important; border-top-right-radius:0; border-bottom-right-radius:0;}", t += ".qp_quiz_win.qp_em6[show='1'] .qp_quiz\t{left:50%;}", t += ".qp_win_close {position:absolute; z-index:99; top:10px; right:10px; width:40px; line-height:40px; text-align:center; cursor:pointer; border-radius:100%; opacity:1; pointer-events:none; transition:opacity 300ms ease-out;}", t += ".qp_win_close:before {content:'X'; font-family:'Arial'; font-size:20px;}", t += ".qp_win_close:hover {color:#0057ad; background-color:rgba(255,255,255,1); box-shadow:1px 1px 3px 0px rgba(0,0,0,0.8);}", t += "@media only screen and (max-width:479px) {", t += ".qp_quiz_win\t\t\t\t\t\t\t\t{padding:20px;}", t += ".qp_quiz_win.qp_em5 .qp_quiz\t\t\t\t{left:0; width:100%;}", t += ".qp_quiz_win.qp_em6 .qp_quiz\t\t\t\t{width:calc(100% + 20px); top:20px;  height:calc(100% - 40px)!important;}", t += ".qp_quiz_win.qp_em6[show='1'] .qp_quiz\t{left:0;}", t += ".qp_quiz_win.qp_em6 .qp_win_close\t\t\t{left:0; top:40px;}", t += "}", t = "<STYLE id='qp-win-css'>" + t + "<\/STYLE>");
            n.win.innerHTML = "<div class='qp_win_close'><\/div>" +
                t;
            n.win.appendChild(n.m);
            n.winx = n.win.childNodes[0];
            qz.addE(n.winx, "click", function (n) {
                return function () {
                    qz.startQuiz(n)
                }
            }(n.a));
            n.a.style.opacity == "0.5" && (n.a.start = 1, qz.popInit(n.a));
            (n.seconds || n.exit || n.scroll) && (n.a.pop = 1, qz.popInit(n.a), n.autoPop = function (n) {
                return function (t) {
                    if (t && t.type == "scroll", !t || t.type != "mouseout" || t.clientY < 50 && t.relatedTarget == null && t.target.nodeName.toLowerCase() !== "select") {
                        var i = qz.data[n];
                        i.win.s || i.win.fpop || (i.winit ? (i.a.start = 1, qz.popQuiz(i.a)) : i.a.start = 1);
                        i.win.fpop = 1
                    }
                }
            }(n.id + "-" + n.k), n.seconds && (n.popTMR = setTimeout(n.autoPop, n.seconds * 1e3)), n.scroll && qz.addE(window, "load", function (n) {
                return function () {
                    qz.addE(window, "scroll", n.autoPop)
                }
            }(n)), n.exit && qz.addE(window, "load", function (n) {
                return function () {
                    qz.addE(document, "mouseout", n.autoPop)
                }
            }(n)))
        } else qz.popInit(n.a)
    },
    getScripts: function (n) {
        var r = n.match(/[\<]SCRIPT[^\>]*[\>]([^\<]|[\<][^s]|[\<]S[^C])+[\<][\/]SCRIPT[\>]/gi), t = "", u, i;
        if (r && r.length) for (u = 0; u < r.length; u++) i = r[u].split(">"), i.shift(), i = i.join(">"), t += i.substr(0, i.length - 9), t && t.substr(t.length - 1) != ";" && (t += ";");
        return t
    },

}, document.currentScript && (qz.dcs = document.currentScript.src + "", qz.host = qz.dcs.split("/")[2]), qz.host.split(".")[0] == "test" && (qz.tst = 1)), "loaded;interactive;complete".indexOf(document.readyState) != -1 ? qz.init() : qz.addE(document, "DOMContentLoaded", qz.init), gg = {

}, !document.qzVote) {

}


