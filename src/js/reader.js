var mxBasePath = "//drawdotio.appspot.com/mxgraph/", mxLoadStylesheets = mxLoadResources = false;
var mxClient = {VERSION: "1.10.4.2", IS_IE: 0 <= navigator.userAgent.indexOf("MSIE"), IS_IE6: 0 <= navigator.userAgent.indexOf("MSIE 6"), IS_QUIRKS: 0 <= navigator.userAgent.indexOf("MSIE") && (null == document.documentMode || 5 == document.documentMode), VML_PREFIX: "v", OFFICE_PREFIX: "o", IS_NS: 0 <= navigator.userAgent.indexOf("Mozilla/") && 0 > navigator.userAgent.indexOf("MSIE"), IS_OP: 0 <= navigator.userAgent.indexOf("Opera/"), IS_OT: 0 > navigator.userAgent.indexOf("Presto/2.4.") && 0 > navigator.userAgent.indexOf("Presto/2.3.") && 0 > navigator.userAgent.indexOf("Presto/2.2.") &&
    0 > navigator.userAgent.indexOf("Presto/2.1.") && 0 > navigator.userAgent.indexOf("Presto/2.0.") && 0 > navigator.userAgent.indexOf("Presto/1."), IS_SF: 0 <= navigator.userAgent.indexOf("AppleWebKit/") && 0 > navigator.userAgent.indexOf("Chrome/"), IS_GC: 0 <= navigator.userAgent.indexOf("Chrome/"), IS_MT: 0 <= navigator.userAgent.indexOf("Firefox/") && 0 > navigator.userAgent.indexOf("Firefox/1.") && 0 > navigator.userAgent.indexOf("Firefox/2.") || 0 <= navigator.userAgent.indexOf("Iceweasel/") && 0 > navigator.userAgent.indexOf("Iceweasel/1.") &&
    0 > navigator.userAgent.indexOf("Iceweasel/2.") || 0 <= navigator.userAgent.indexOf("SeaMonkey/") && 0 > navigator.userAgent.indexOf("SeaMonkey/1.") || 0 <= navigator.userAgent.indexOf("Iceape/") && 0 > navigator.userAgent.indexOf("Iceape/1."), IS_SVG: 0 <= navigator.userAgent.indexOf("Firefox/") || 0 <= navigator.userAgent.indexOf("Iceweasel/") || 0 <= navigator.userAgent.indexOf("Seamonkey/") || 0 <= navigator.userAgent.indexOf("Iceape/") || 0 <= navigator.userAgent.indexOf("Galeon/") || 0 <= navigator.userAgent.indexOf("Epiphany/") || 0 <=
    navigator.userAgent.indexOf("AppleWebKit/") || 0 <= navigator.userAgent.indexOf("Gecko/") || 0 <= navigator.userAgent.indexOf("Opera/"), NO_FO: 0 <= navigator.userAgent.indexOf("Firefox/1.") || 0 <= navigator.userAgent.indexOf("Iceweasel/1.") || 0 <= navigator.userAgent.indexOf("Firefox/2.") || 0 <= navigator.userAgent.indexOf("Iceweasel/2.") || 0 <= navigator.userAgent.indexOf("SeaMonkey/1.") || 0 <= navigator.userAgent.indexOf("Iceape/1.") || 0 <= navigator.userAgent.indexOf("Camino/1.") || 0 <= navigator.userAgent.indexOf("Epiphany/2.") ||
    0 <= navigator.userAgent.indexOf("Opera/") || 0 <= navigator.userAgent.indexOf("MSIE") || 0 <= navigator.userAgent.indexOf("Mozilla/2."), IS_VML: "MICROSOFT INTERNET EXPLORER" == navigator.appName.toUpperCase(), IS_MAC: 0 < navigator.userAgent.toUpperCase().indexOf("MACINTOSH"), IS_TOUCH: 0 < navigator.userAgent.toUpperCase().indexOf("IPAD") || 0 < navigator.userAgent.toUpperCase().indexOf("IPOD") || 0 < navigator.userAgent.toUpperCase().indexOf("IPHONE") || 0 < navigator.userAgent.toUpperCase().indexOf("ANDROID"), IS_LOCAL: 0 > document.location.href.indexOf("http://") &&
    0 > document.location.href.indexOf("https://"), isBrowserSupported: function () {
    return mxClient.IS_VML || mxClient.IS_SVG
}, link: function (a, b, c) {
    c = c || document;
    if (mxClient.IS_IE6)c.write('<link rel="' + a + '" href="' + b + '" charset="ISO-8859-1" type="text/css"/>'); else {
        var d = c.createElement("link");
        d.setAttribute("rel", a);
        d.setAttribute("href", b);
        d.setAttribute("charset", "ISO-8859-1");
        d.setAttribute("type", "text/css");
        c.getElementsByTagName("head")[0].appendChild(d)
    }
}, include: function (a) {
    document.write('<script src="' +
        a + '"><\/script>')
}, dispose: function () {
    for (var a = 0; a < mxEvent.objects.length; a++)null != mxEvent.objects[a].mxListenerList && mxEvent.removeAllListeners(mxEvent.objects[a])
}};
mxClient.IS_OP && mxClient.IS_OT ? mxClient.CSS_PREFIX = "O" : mxClient.IS_SF || mxClient.IS_GC ? mxClient.CSS_PREFIX = "Webkit" : mxClient.IS_MT ? mxClient.CSS_PREFIX = "Moz" : mxClient.IS_IE && 9 <= document.documentMode && (mxClient.CSS_PREFIX = "ms");
"undefined" == typeof mxLoadResources && (mxLoadResources = !0);
"undefined" == typeof mxResourceExtension && (mxResourceExtension = ".txt");
"undefined" == typeof mxLoadStylesheets && (mxLoadStylesheets = !0);
"undefined" != typeof mxBasePath && 0 < mxBasePath.length ? ("/" == mxBasePath.substring(mxBasePath.length - 1) && (mxBasePath = mxBasePath.substring(0, mxBasePath.length - 1)), mxClient.basePath = mxBasePath) : mxClient.basePath = ".";
"undefined" != typeof mxImageBasePath && 0 < mxImageBasePath.length ? ("/" == mxImageBasePath.substring(mxImageBasePath.length - 1) && (mxImageBasePath = mxImageBasePath.substring(0, mxImageBasePath.length - 1)), mxClient.imageBasePath = mxImageBasePath) : mxClient.imageBasePath = mxClient.basePath + "/images";
mxClient.language = "undefined" != typeof mxLanguage ? mxLanguage : mxClient.IS_IE ? navigator.userLanguage : navigator.language;
mxClient.defaultLanguage = "undefined" != typeof mxDefaultLanguage ? mxDefaultLanguage : "en";
mxLoadStylesheets && mxClient.link("stylesheet", mxClient.basePath + "/css/common.css");
"undefined" != typeof mxLanguages && (mxClient.languages = mxLanguages);
if (mxClient.IS_IE) {
    if (9 <= document.documentMode)mxClient.IS_VML = !1, mxClient.IS_SVG = true; else {
        8 == document.documentMode ? (document.namespaces.add(mxClient.VML_PREFIX, "urn:schemas-microsoft-com:vml", "#default#VML"), document.namespaces.add(mxClient.OFFICE_PREFIX, "urn:schemas-microsoft-com:office:office", "#default#VML")) : (document.namespaces.add(mxClient.VML_PREFIX, "urn:schemas-microsoft-com:vml"), document.namespaces.add(mxClient.OFFICE_PREFIX, "urn:schemas-microsoft-com:office:office"));
        var ss = document.createStyleSheet();
        ss.cssText = "v\\:*{behavior:url(#default#VML)}o\\:*{behavior:url(#default#VML)}";
        mxLoadStylesheets && mxClient.link("stylesheet", mxClient.basePath + "/css/explorer.css")
    }
    window.attachEvent("onunload", mxClient.dispose)
}
var mxLog = {consoleName: "Console", TRACE: !1, DEBUG: !0, WARN: !0, buffer: "", init: function () {
    if (mxLog.window == null && document.body != null) {
        var a = mxLog.consoleName + " - mxGraph " + mxClient.VERSION, b = document.createElement("table");
        b.setAttribute("width", "100%");
        b.setAttribute("height", "100%");
        var c = document.createElement("tbody"), d = document.createElement("tr"), e = document.createElement("td");
        e.style.verticalAlign = "top";
        mxLog.textarea = document.createElement("textarea");
        mxLog.textarea.setAttribute("readOnly", "true");
        mxLog.textarea.style.height = "100%";
        mxLog.textarea.style.resize = "none";
        mxLog.textarea.value = mxLog.buffer;
        mxLog.textarea.style.width = mxClient.IS_NS && document.compatMode != "BackCompat" ? "99%" : "100%";
        e.appendChild(mxLog.textarea);
        d.appendChild(e);
        c.appendChild(d);
        d = document.createElement("tr");
        mxLog.td = document.createElement("td");
        mxLog.td.style.verticalAlign = "top";
        mxLog.td.setAttribute("height", "30px");
        d.appendChild(mxLog.td);
        c.appendChild(d);
        b.appendChild(c);
        mxLog.addButton("Info", function () {
            mxLog.info()
        });
        mxLog.addButton("DOM", function () {
            var a = mxUtils.getInnerHtml(document.body);
            mxLog.debug(a)
        });
        mxLog.addButton("Trace", function () {
            mxLog.TRACE = !mxLog.TRACE;
            mxLog.TRACE ? mxLog.debug("Tracing enabled") : mxLog.debug("Tracing disabled")
        });
        mxLog.addButton("Copy", function () {
            try {
                mxUtils.copy(mxLog.textarea.value)
            } catch (a) {
                mxUtils.alert(a)
            }
        });
        mxLog.addButton("Show", function () {
            try {
                mxUtils.popup(mxLog.textarea.value)
            } catch (a) {
                mxUtils.alert(a)
            }
        });
        mxLog.addButton("Clear", function () {
            mxLog.textarea.value = ""
        });
        d = c = 0;
        if (typeof window.innerWidth === "number") {
            c = window.innerHeight;
            d = window.innerWidth
        } else {
            c = document.documentElement.clientHeight || document.body.clientHeight;
            d = document.body.clientWidth
        }
        mxLog.window = new mxWindow(a, b, Math.max(0, d - 320), Math.max(0, c - 210), 300, 160);
        mxLog.window.setMaximizable(true);
        mxLog.window.setScrollable(false);
        mxLog.window.setResizable(true);
        mxLog.window.setClosable(true);
        mxLog.window.destroyOnClose = false;
        if ((mxClient.IS_NS || mxClient.IS_IE) && !mxClient.IS_GC && !mxClient.IS_SF && document.compatMode !=
            "BackCompat") {
            var f = mxLog.window.getElement(), a = function () {
                mxLog.textarea.style.height = Math.max(0, f.offsetHeight - 70) + "px"
            };
            mxLog.window.addListener(mxEvent.RESIZE_END, a);
            mxLog.window.addListener(mxEvent.MAXIMIZE, a);
            mxLog.window.addListener(mxEvent.NORMALIZE, a);
            mxLog.textarea.style.height = "92px"
        }
    }
}, info: function () {
    mxLog.writeln(mxUtils.toString(navigator))
}, addButton: function (a, b) {
    var c = document.createElement("button");
    mxUtils.write(c, a);
    mxEvent.addListener(c, "click", b);
    mxLog.td.appendChild(c)
}, isVisible: function () {
    return mxLog.window !=
        null ? mxLog.window.isVisible() : false
}, show: function () {
    mxLog.setVisible(true)
}, setVisible: function (a) {
    mxLog.window == null && mxLog.init();
    mxLog.window != null && mxLog.window.setVisible(a)
}, enter: function (a) {
    if (mxLog.TRACE) {
        mxLog.writeln("Entering " + a);
        return(new Date).getTime()
    }
}, leave: function (a, b) {
    if (mxLog.TRACE) {
        var c = b != 0 ? " (" + ((new Date).getTime() - b) + " ms)" : "";
        mxLog.writeln("Leaving " + a + c)
    }
}, debug: function () {
    mxLog.DEBUG && mxLog.writeln.apply(this, arguments)
}, warn: function () {
    mxLog.WARN && mxLog.writeln.apply(this,
        arguments)
}, write: function () {
    for (var a = "", b = 0; b < arguments.length; b++) {
        a = a + arguments[b];
        b < arguments.length - 1 && (a = a + " ")
    }
    if (mxLog.textarea != null) {
        mxLog.textarea.value = mxLog.textarea.value + a;
        if (navigator.userAgent.indexOf("Presto/2.5") >= 0) {
            mxLog.textarea.style.visibility = "hidden";
            mxLog.textarea.style.visibility = "visible"
        }
        mxLog.textarea.scrollTop = mxLog.textarea.scrollHeight
    } else mxLog.buffer = mxLog.buffer + a
}, writeln: function () {
    for (var a = "", b = 0; b < arguments.length; b++) {
        a = a + arguments[b];
        b < arguments.length -
            1 && (a = a + " ")
    }
    mxLog.write(a + "\n")
}}, mxObjectIdentity = {FIELD_NAME: "mxObjectId", counter: 0, get: function (a) {
    if (typeof a == "object" && a[mxObjectIdentity.FIELD_NAME] == null) {
        var b = mxUtils.getFunctionName(a.constructor);
        a[mxObjectIdentity.FIELD_NAME] = b + "#" + mxObjectIdentity.counter++
    }
    return a[mxObjectIdentity.FIELD_NAME]
}, clear: function (a) {
    typeof a == "object" && delete a[mxObjectIdentity.FIELD_NAME]
}};
function mxDictionary() {
    this.clear()
}
mxDictionary.prototype.map = null;
mxDictionary.prototype.clear = function () {
    this.map = {}
};
mxDictionary.prototype.get = function (a) {
    return this.map[mxObjectIdentity.get(a)]
};
mxDictionary.prototype.put = function (a, b) {
    var c = mxObjectIdentity.get(a), d = this.map[c];
    this.map[c] = b;
    return d
};
mxDictionary.prototype.remove = function (a) {
    var a = mxObjectIdentity.get(a), b = this.map[a];
    delete this.map[a];
    return b
};
mxDictionary.prototype.getKeys = function () {
    var a = [], b;
    for (b in this.map)a.push(b);
    return a
};
mxDictionary.prototype.getValues = function () {
    var a = [], b;
    for (b in this.map)a.push(this.map[b]);
    return a
};
mxDictionary.prototype.visit = function (a) {
    for (var b in this.map)a(b, this.map[b])
};
var mxResources = {resources: [], extension: mxResourceExtension, resourcesEncoded: !1, loadDefaultBundle: !0, loadSpecialBundle: !0, isLanguageSupported: function (a) {
    return mxClient.languages != null ? mxUtils.indexOf(mxClient.languages, a) >= 0 : true
}, getDefaultBundle: function (a, b) {
    return mxResources.loadDefaultBundle || !mxResources.isLanguageSupported(b) ? a + mxResources.extension : null
}, getSpecialBundle: function (a, b) {
    if (mxClient.languages == null || !this.isLanguageSupported(b)) {
        var c = b.indexOf("-");
        c > 0 && (b = b.substring(0,
            c))
    }
    return mxResources.loadSpecialBundle && mxResources.isLanguageSupported(b) && b != mxClient.defaultLanguage ? a + "_" + b + mxResources.extension : null
}, add: function (a, b) {
    b = b != null ? b : mxClient.language.toLowerCase();
    if (b != mxConstants.NONE) {
        var c = mxResources.getDefaultBundle(a, b);
        if (c != null)try {
            var d = mxUtils.load(c);
            d.isReady() && mxResources.parse(d.getText())
        } catch (e) {
        }
        c = mxResources.getSpecialBundle(a, b);
        if (c != null)try {
            d = mxUtils.load(c);
            d.isReady() && mxResources.parse(d.getText())
        } catch (f) {
        }
    }
}, parse: function (a) {
    if (a !=
        null)for (var a = a.split("\n"), b = 0; b < a.length; b++)if (a[b].charAt(0) != "#") {
        var c = a[b].indexOf("=");
        if (c > 0) {
            var d = a[b].substring(0, c), e = a[b].length;
            a[b].charCodeAt(e - 1) == 13 && e--;
            c = a[b].substring(c + 1, e);
            if (this.resourcesEncoded) {
                c = c.replace(/\\(?=u[a-fA-F\d]{4})/g, "%");
                mxResources.resources[d] = unescape(c)
            } else mxResources.resources[d] = c
        }
    }
}, get: function (a, b, c) {
    a = mxResources.resources[a];
    a == null && (a = c);
    if (a != null && b != null) {
        for (var c = [], d = null, e = 0; e < a.length; e++) {
            var f = a.charAt(e);
            if (f == "{")d = ""; else if (d !=
                null && f == "}") {
                d = parseInt(d) - 1;
                d >= 0 && d < b.length && c.push(b[d]);
                d = null
            } else d != null ? d = d + f : c.push(f)
        }
        a = c.join("")
    }
    return a
}};
function mxPoint(a, b) {
    this.x = a != null ? a : 0;
    this.y = b != null ? b : 0
}
mxPoint.prototype.x = null;
mxPoint.prototype.y = null;
mxPoint.prototype.equals = function (a) {
    return a.x == this.x && a.y == this.y
};
mxPoint.prototype.clone = function () {
    return mxUtils.clone(this)
};
function mxRectangle(a, b, c, d) {
    mxPoint.call(this, a, b);
    this.width = c != null ? c : 0;
    this.height = d != null ? d : 0
}
mxRectangle.prototype = new mxPoint;
mxRectangle.prototype.constructor = mxRectangle;
mxRectangle.prototype.width = null;
mxRectangle.prototype.height = null;
mxRectangle.prototype.setRect = function (a, b, c, d) {
    this.x = a;
    this.y = b;
    this.width = c;
    this.height = d
};
mxRectangle.prototype.getCenterX = function () {
    return this.x + this.width / 2
};
mxRectangle.prototype.getCenterY = function () {
    return this.y + this.height / 2
};
mxRectangle.prototype.add = function (a) {
    if (a != null) {
        var b = Math.min(this.x, a.x), c = Math.min(this.y, a.y), d = Math.max(this.x + this.width, a.x + a.width), a = Math.max(this.y + this.height, a.y + a.height);
        this.x = b;
        this.y = c;
        this.width = d - b;
        this.height = a - c
    }
};
mxRectangle.prototype.grow = function (a) {
    this.x = this.x - a;
    this.y = this.y - a;
    this.width = this.width + 2 * a;
    this.height = this.height + 2 * a
};
mxRectangle.prototype.getPoint = function () {
    return new mxPoint(this.x, this.y)
};
mxRectangle.prototype.equals = function (a) {
    return a.x == this.x && a.y == this.y && a.width == this.width && a.height == this.height
};
var mxUtils = {errorResource: "none" != mxClient.language ? "error" : "", closeResource: "none" != mxClient.language ? "close" : "", errorImage: mxClient.imageBasePath + "/error.gif", removeCursors: function (a) {
    if (a.style != null)a.style.cursor = "";
    a = a.childNodes;
    if (a != null)for (var b = a.length, c = 0; c < b; c = c + 1)mxUtils.removeCursors(a[c])
}, getCurrentStyle: function () {
    return mxClient.IS_IE ? function (a) {
        return a != null ? a.currentStyle : null
    } : function (a) {
        return a != null ? window.getComputedStyle(a, "") : null
    }
}(), hasScrollbars: function (a) {
    a =
        mxUtils.getCurrentStyle(a);
    return a != null && (a.overflow == "scroll" || a.overflow == "auto")
}, bind: function (a, b) {
    return function () {
        return b.apply(a, arguments)
    }
}, eval: function (a) {
    var b = null;
    if (a.indexOf("function") >= 0)try {
        eval("var _mxJavaScriptExpression=" + a);
        b = _mxJavaScriptExpression;
        _mxJavaScriptExpression = null
    } catch (c) {
        mxLog.warn(c.message + " while evaluating " + a)
    } else try {
        b = eval(a)
    } catch (d) {
        mxLog.warn(d.message + " while evaluating " + a)
    }
    return b
}, findNode: function (a, b, c) {
    var d = a.getAttribute(b);
    if (d != null &&
        d == c)return a;
    for (a = a.firstChild; a != null;) {
        d = mxUtils.findNode(a, b, c);
        if (d != null)return d;
        a = a.nextSibling
    }
    return null
}, findNodeByAttribute: function () {
    return document.documentMode >= 9 ? function (a, b, c) {
        var d = null;
        if (a != null)if (a.nodeType == mxConstants.NODETYPE_ELEMENT && a.getAttribute(b) == c)d = a; else for (a = a.firstChild; a != null && d == null;) {
            d = mxUtils.findNodeByAttribute(a, b, c);
            a = a.nextSibling
        }
        return d
    } : mxClient.IS_IE ? function (a, b, c) {
        return a == null ? null : a.ownerDocument.selectSingleNode("//*[@" + b + "='" + c + "']")
    } :
        function (a, b, c) {
            return a == null ? null : a.ownerDocument.evaluate("//*[@" + b + "='" + c + "']", a.ownerDocument, null, XPathResult.ANY_TYPE, null).iterateNext()
        }
}(), getFunctionName: function (a) {
    var b = null;
    if (a != null)if (a.name != null)b = a.name; else {
        a = a.toString();
        for (b = 9; a.charAt(b) == " ";)b++;
        var c = a.indexOf("(", b), b = a.substring(b, c)
    }
    return b
}, indexOf: function (a, b) {
    if (a != null && b != null)for (var c = 0; c < a.length; c++)if (a[c] == b)return c;
    return-1
}, remove: function (a, b) {
    var c = null;
    if (typeof b == "object")for (var d = mxUtils.indexOf(b,
        a); d >= 0;) {
        b.splice(d, 1);
        c = a;
        d = mxUtils.indexOf(b, a)
    }
    for (var e in b)if (b[e] == a) {
        delete b[e];
        c = a
    }
    return c
}, isNode: function (a, b, c, d) {
    return a != null && !isNaN(a.nodeType) && (b == null || a.nodeName.toLowerCase() == b.toLowerCase()) ? c == null || a.getAttribute(c) == d : false
}, getChildNodes: function (a, b) {
    for (var b = b || mxConstants.NODETYPE_ELEMENT, c = [], d = a.firstChild; d != null;) {
        d.nodeType == b && c.push(d);
        d = d.nextSibling
    }
    return c
}, createXmlDocument: function () {
    var a = null;
    document.implementation && document.implementation.createDocument ?
        a = document.implementation.createDocument("", "", null) : window.ActiveXObject && (a = new ActiveXObject("Microsoft.XMLDOM"));
    return a
}, parseXml: function () {
    return mxClient.IS_IE && (typeof document.documentMode === "undefined" || document.documentMode < 9) ? function (a) {
        var b = mxUtils.createXmlDocument();
        b.async = "false";
        b.loadXML(a);
        return b
    } : function (a) {
        return(new DOMParser).parseFromString(a, "text/xml")
    }
}(), clearSelection: function () {
    if (document.selection)return function () {
        document.selection.empty()
    };
    if (window.getSelection)return function () {
        window.getSelection().removeAllRanges()
    }
}(),
    getPrettyXml: function (a, b, c) {
        var d = [];
        if (a != null) {
            b = b || "  ";
            c = c || "";
            if (a.nodeType == mxConstants.NODETYPE_TEXT)d.push(a.nodeValue); else {
                d.push(c + "<" + a.nodeName);
                var e = a.attributes;
                if (e != null)for (var f = 0; f < e.length; f++) {
                    var g = mxUtils.htmlEntities(e[f].nodeValue);
                    d.push(" " + e[f].nodeName + '="' + g + '"')
                }
                e = a.firstChild;
                if (e != null) {
                    for (d.push(">\n"); e != null;) {
                        d.push(mxUtils.getPrettyXml(e, b, c + b));
                        e = e.nextSibling
                    }
                    d.push(c + "</" + a.nodeName + ">\n")
                } else d.push("/>\n")
            }
        }
        return d.join("")
    }, removeWhitespace: function (a, b) {
        for (var c = b ? a.previousSibling : a.nextSibling; c != null && c.nodeType == mxConstants.NODETYPE_TEXT;) {
            var d = b ? c.previousSibling : c.nextSibling, e = mxUtils.getTextContent(c);
            mxUtils.trim(e).length == 0 && c.parentNode.removeChild(c);
            c = d
        }
    }, htmlEntities: function (a, b) {
        a = (a || "").replace(/&/g, "&amp;");
        a = a.replace(/"/g, "&quot;");
        a = a.replace(/\'/g, "&#39;");
        a = a.replace(/</g, "&lt;");
        a = a.replace(/>/g, "&gt;");
        if (b == null || b)a = a.replace(/\n/g, "&#xa;");
        return a
    }, isVml: function (a) {
        return a != null && a.tagUrn == "urn:schemas-microsoft-com:vml"
    },
    getXml: function (a, b) {
        var c = "";
        if (a != null) {
            c = a.xml;
            c = c == null ? a.innerHTML ? a.innerHTML : (new XMLSerializer).serializeToString(a) : c.replace(/\r\n\t[\t]*/g, "").replace(/>\r\n/g, ">").replace(/\r\n/g, "\n")
        }
        return c = c.replace(/\n/g, b || "&#xa;")
    }, getTextContent: function (a) {
        var b = "";
        if (a != null) {
            if (a.firstChild != null)a = a.firstChild;
            b = a.nodeValue || ""
        }
        return b
    }, getInnerHtml: function () {
        return mxClient.IS_IE ? function (a) {
            return a != null ? a.innerHTML : ""
        } : function (a) {
            return a != null ? (new XMLSerializer).serializeToString(a) :
                ""
        }
    }(), getOuterHtml: function () {
        return mxClient.IS_IE ? function (a) {
            if (a != null) {
                if (a.outerHTML != null)return a.outerHTML;
                var b = [];
                b.push("<" + a.nodeName);
                var c = a.attributes;
                if (c != null)for (var d = 0; d < c.length; d++) {
                    var e = c[d].nodeValue;
                    if (e != null && e.length > 0) {
                        b.push(" ");
                        b.push(c[d].nodeName);
                        b.push('="');
                        b.push(e);
                        b.push('"')
                    }
                }
                if (a.innerHTML.length == 0)b.push("/>"); else {
                    b.push(">");
                    b.push(a.innerHTML);
                    b.push("</" + a.nodeName + ">")
                }
                return b.join("")
            }
            return""
        } : function (a) {
            return a != null ? (new XMLSerializer).serializeToString(a) :
                ""
        }
    }(), write: function (a, b) {
        var c = a.ownerDocument.createTextNode(b);
        a != null && a.appendChild(c);
        return c
    }, writeln: function (a, b) {
        var c = a.ownerDocument.createTextNode(b);
        if (a != null) {
            a.appendChild(c);
            a.appendChild(document.createElement("br"))
        }
        return c
    }, br: function (a, b) {
        for (var b = b || 1, c = null, d = 0; d < b; d++)if (a != null) {
            c = a.ownerDocument.createElement("br");
            a.appendChild(c)
        }
        return c
    }, button: function (a, b, c) {
        c = c != null ? c : document;
        c = c.createElement("button");
        mxUtils.write(c, a);
        mxEvent.addListener(c, "click", function (a) {
            b(a)
        });
        return c
    }, para: function (a, b) {
        var c = document.createElement("p");
        mxUtils.write(c, b);
        a != null && a.appendChild(c);
        return c
    }, addTransparentBackgroundFilter: function (a) {
        a.style.filter = a.style.filter + ("progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + mxClient.imageBasePath + "/transparent.gif', sizingMethod='scale')")
    }, linkAction: function (a, b, c, d, e) {
        return mxUtils.link(a, b, function () {
            c.execute(d)
        }, e)
    }, linkInvoke: function (a, b, c, d, e, f) {
        return mxUtils.link(a, b, function () {
            c[d](e)
        }, f)
    }, link: function (a, b, c, d) {
        var e = document.createElement("span");
        e.style.color = "blue";
        e.style.textDecoration = "underline";
        e.style.cursor = "pointer";
        if (d != null)e.style.paddingLeft = d + "px";
        mxEvent.addListener(e, "click", c);
        mxUtils.write(e, b);
        a != null && a.appendChild(e);
        return e
    }, fit: function (a) {
        var b = parseInt(a.offsetLeft), c = parseInt(a.offsetWidth), d = document.body, e = document.documentElement, f = (d.scrollLeft || e.scrollLeft) + (d.clientWidth || e.clientWidth);
        if (b + c > f)a.style.left = Math.max(d.scrollLeft || e.scrollLeft, f - c) + "px";
        b = parseInt(a.offsetTop);
        c = parseInt(a.offsetHeight);
        f = (d.scrollTop || e.scrollTop) + Math.max(d.clientHeight || 0, e.clientHeight);
        if (b + c > f)a.style.top = Math.max(d.scrollTop || e.scrollTop, f - c) + "px"
    }, open: function (a) {
        if (mxClient.IS_NS) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
            } catch (b) {
                mxUtils.alert("Permission to read file denied.");
                return""
            }
            var c = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
            c.initWithPath(a);
            if (!c.exists()) {
                mxUtils.alert("File not found.");
                return""
            }
            a = Components.classes["@mozilla.org/network/file-input-stream;1"].createInstance(Components.interfaces.nsIFileInputStream);
            a.init(c, 1, 4, null);
            c = Components.classes["@mozilla.org/scriptableinputstream;1"].createInstance(Components.interfaces.nsIScriptableInputStream);
            c.init(a);
            return c.read(c.available())
        }
        c = (new ActiveXObject("Scripting.FileSystemObject")).OpenTextFile(a, 1);
        a = c.readAll();
        c.close();
        return a
    }, save: function (a, b) {
        if (mxClient.IS_NS) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
            } catch (c) {
                mxUtils.alert("Permission to write file denied.");
                return
            }
            var d = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
            d.initWithPath(a);
            d.exists() || d.create(0, 420);
            var e = Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(Components.interfaces.nsIFileOutputStream);
            e.init(d, 34, 4, null);
            e.write(b, b.length);
            e.flush();
            e.close()
        } else {
            d = (new ActiveXObject("Scripting.FileSystemObject")).CreateTextFile(a, true);
            d.Write(b);
            d.Close()
        }
    }, saveAs: function (a) {
        var b = document.createElement("iframe");
        b.setAttribute("src", "");
        b.style.visibility = "hidden";
        document.body.appendChild(b);
        try {
            if (mxClient.IS_NS) {
                var c = b.contentDocument;
                c.open();
                c.write(a);
                c.close();
                try {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                    b.focus();
                    saveDocument(c)
                } catch (d) {
                    mxUtils.alert("Permission to save document denied.")
                }
            } else {
                c = b.contentWindow.document;
                c.write(a);
                c.execCommand("SaveAs", false, document.location)
            }
        } finally {
            document.body.removeChild(b)
        }
    }, copy: function (a) {
        if (window.clipboardData)window.clipboardData.setData("Text",
            a); else {
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            var b = Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard);
            if (b) {
                var c = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);
                if (c) {
                    c.addDataFlavor("text/unicode");
                    var d = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
                    d.data = a;
                    c.setTransferData("text/unicode",
                        d, a.length * 2);
                    b.setData(c, null, Components.interfaces.nsIClipboard.kGlobalClipboard)
                }
            }
        }
    }, load: function (a) {
        a = new mxXmlRequest(a, null, "GET", false);
        a.send();
        return a
    }, get: function (a, b, c) {
        return(new mxXmlRequest(a, null, "GET")).send(b, c)
    }, post: function (a, b, c, d) {
        return(new mxXmlRequest(a, b)).send(c, d)
    }, submit: function (a, b, c, d) {
        return(new mxXmlRequest(a, b)).simulate(c, d)
    }, loadInto: function (a, b, c) {
        mxClient.IS_IE ? b.onreadystatechange = function () {
            b.readyState == 4 && c()
        } : b.addEventListener("load", c, false);
        b.load(a)
    },
    getValue: function (a, b, c) {
        a = a != null ? a[b] : null;
        a == null && (a = c);
        return a
    }, getNumber: function (a, b, c) {
        a = a != null ? a[b] : null;
        a == null && (a = c || 0);
        return Number(a)
    }, getColor: function (a, b, c) {
        a = a != null ? a[b] : null;
        a == null ? a = c : a == mxConstants.NONE && (a = null);
        return a
    }, clone: function (a, b, c) {
        var c = c != null ? c : false, d = null;
        if (a != null && typeof a.constructor == "function") {
            var d = new a.constructor, e;
            for (e in a)if (e != mxObjectIdentity.FIELD_NAME && (b == null || mxUtils.indexOf(b, e) < 0))d[e] = !c && typeof a[e] == "object" ? mxUtils.clone(a[e]) :
                a[e]
        }
        return d
    }, equalPoints: function (a, b) {
        if (a == null && b != null || a != null && b == null || a != null && b != null && a.length != b.length)return false;
        if (a != null && b != null)for (var c = 0; c < a.length; c++)if (a[c] == b[c] || a[c] != null && !a[c].equals(b[c]))return false;
        return true
    }, equalEntries: function (a, b) {
        if (a == null && b != null || a != null && b == null || a != null && b != null && a.length != b.length)return false;
        if (a != null && b != null)for (var c in a)if (a[c] != b[c])return false;
        return true
    }, extend: function (a, b) {
        var c = function () {
        };
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    }, toString: function (a) {
        var b = "", c;
        for (c in a)try {
            if (a[c] == null)b = b + (c + " = [null]\n"); else if (typeof a[c] == "function")b = b + (c + " => [Function]\n"); else if (typeof a[c] == "object")var d = mxUtils.getFunctionName(a[c].constructor), b = b + (c + " => [" + d + "]\n"); else b = b + (c + " = " + a[c] + "\n")
        } catch (e) {
            b = b + (c + "=" + e.message)
        }
        return b
    }, toRadians: function (a) {
        return Math.PI * a / 180
    }, arcToCurves: function (a, b, c, d, e, f, g, h, k) {
        h = h - a;
        k = k - b;
        if (c === 0 || d === 0)return m;
        var c = Math.abs(c), d = Math.abs(d),
            i = -h / 2, l = -k / 2, n = Math.cos(e * Math.PI / 180), m = Math.sin(e * Math.PI / 180), e = n * i + m * l, i = -1 * m * i + n * l, l = e * e, o = i * i, q = c * c, p = d * d, r = l / q + o / p;
        if (r > 1) {
            c = Math.sqrt(r) * c;
            d = Math.sqrt(r) * d;
            f = 0
        } else {
            r = 1;
            f === g && (r = -1);
            f = r * Math.sqrt((q * p - q * o - p * l) / (q * o + p * l))
        }
        l = f * c * i / d;
        o = -1 * f * d * e / c;
        h = n * l - m * o + h / 2;
        k = m * l + n * o + k / 2;
        q = Math.atan2((i - o) / d, (e - l) / c) - Math.atan2(0, 1);
        f = q >= 0 ? q : 2 * Math.PI + q;
        q = Math.atan2((-i - o) / d, (-e - l) / c) - Math.atan2((i - o) / d, (e - l) / c);
        e = q >= 0 ? q : 2 * Math.PI + q;
        g == 0 && e > 0 ? e = e - 2 * Math.PI : g != 0 && e < 0 && (e = e + 2 * Math.PI);
        for (var g = e * 2 / Math.PI,
                 g = Math.ceil(g < 0 ? -1 * g : g), e = e / g, i = 8 / 3 * Math.sin(e / 4) * Math.sin(e / 4) / Math.sin(e / 2), l = n * c, n = n * d, c = m * c, d = m * d, s = Math.cos(f), t = Math.sin(f), o = -i * (l * t + d * s), q = -i * (c * t - n * s), r = p = 0, m = [], y = 0; y < g; ++y) {
            var f = f + e, s = Math.cos(f), t = Math.sin(f), p = l * s - d * t + h, r = c * s + n * t + k, z = -i * (l * t + d * s), s = -i * (c * t - n * s), t = y * 6;
            m[t] = Number(o + a);
            m[t + 1] = Number(q + b);
            m[t + 2] = Number(p - z + a);
            m[t + 3] = Number(r - s + b);
            m[t + 4] = Number(p + a);
            m[t + 5] = Number(r + b);
            o = p + z;
            q = r + s
        }
        return m
    }, getBoundingBox: function (a, b) {
        var c = null;
        if (a != null && b != null && b != 0) {
            var d = mxUtils.toRadians(b),
                c = Math.cos(d), e = Math.sin(d), f = new mxPoint(a.x + a.width / 2, a.y + a.height / 2), g = new mxPoint(a.x, a.y), d = new mxPoint(a.x + a.width, a.y), h = new mxPoint(d.x, a.y + a.height), k = new mxPoint(a.x, h.y), g = mxUtils.getRotatedPoint(g, c, e, f), d = mxUtils.getRotatedPoint(d, c, e, f), h = mxUtils.getRotatedPoint(h, c, e, f), k = mxUtils.getRotatedPoint(k, c, e, f), c = new mxRectangle(g.x, g.y, 0, 0);
            c.add(new mxRectangle(d.x, d.y, 0, 0));
            c.add(new mxRectangle(h.x, h.y, 0, 0));
            c.add(new mxRectangle(k.x, k.y, 0, 0))
        }
        return c
    }, getRotatedPoint: function (a, b, c, d) {
        var d = d != null ? d : new mxPoint, e = a.x - d.x, a = a.y - d.y;
        return new mxPoint(e * b - a * c + d.x, a * b + e * c + d.y)
    }, getPortConstraints: function (a, b, c, d) {
        a = mxUtils.getValue(a.style, mxConstants.STYLE_PORT_CONSTRAINT, null);
        if (a == null)return d;
        d = a.toString();
        a = mxConstants.DIRECTION_MASK_NONE;
        d.indexOf(mxConstants.DIRECTION_NORTH) >= 0 && (a = a | mxConstants.DIRECTION_MASK_NORTH);
        d.indexOf(mxConstants.DIRECTION_WEST) >= 0 && (a = a | mxConstants.DIRECTION_MASK_WEST);
        d.indexOf(mxConstants.DIRECTION_SOUTH) >= 0 && (a = a | mxConstants.DIRECTION_MASK_SOUTH);
        d.indexOf(mxConstants.DIRECTION_EAST) >= 0 && (a = a | mxConstants.DIRECTION_MASK_EAST);
        return a
    }, reversePortConstraints: function (a) {
        var b = 0, b = (a & mxConstants.DIRECTION_MASK_WEST) << 3, b = b | (a & mxConstants.DIRECTION_MASK_NORTH) << 1, b = b | (a & mxConstants.DIRECTION_MASK_SOUTH) >> 1;
        return b = b | (a & mxConstants.DIRECTION_MASK_EAST) >> 3
    }, findNearestSegment: function (a, b, c) {
        var d = -1;
        if (a.absolutePoints.length > 0)for (var e = a.absolutePoints[0], f = null, g = 1; g < a.absolutePoints.length; g++) {
            var h = a.absolutePoints[g], e = mxUtils.ptSegDistSq(e.x,
                e.y, h.x, h.y, b, c);
            if (f == null || e < f) {
                f = e;
                d = g - 1
            }
            e = h
        }
        return d
    }, rectangleIntersectsSegment: function (a, b, c) {
        var d = a.y, e = a.x, f = d + a.height, g = e + a.width, a = b.x, h = c.x;
        if (b.x > c.x) {
            a = c.x;
            h = b.x
        }
        h > g && (h = g);
        a < e && (a = e);
        if (a > h)return false;
        var e = b.y, g = c.y, k = c.x - b.x;
        if (Math.abs(k) > 1.0E-7) {
            c = (c.y - b.y) / k;
            b = b.y - c * b.x;
            e = c * a + b;
            g = c * h + b
        }
        if (e > g) {
            b = g;
            g = e;
            e = b
        }
        g > f && (g = f);
        e < d && (e = d);
        return e > g ? false : true
    }, contains: function (a, b, c) {
        return a.x <= b && a.x + a.width >= b && a.y <= c && a.y + a.height >= c
    }, intersects: function (a, b) {
        var c = a.width, d = a.height,
            e = b.width, f = b.height;
        if (e <= 0 || f <= 0 || c <= 0 || d <= 0)return false;
        var g = a.x, h = a.y, k = b.x, i = b.y, e = e + k, f = f + i, c = c + g, d = d + h;
        return(e < k || e > g) && (f < i || f > h) && (c < g || c > k) && (d < h || d > i)
    }, intersectsHotspot: function (a, b, c, d, e, f) {
        d = d != null ? d : 1;
        e = e != null ? e : 0;
        f = f != null ? f : 0;
        if (d > 0) {
            var g = a.getCenterX(), h = a.getCenterY(), k = a.width, i = a.height, l = mxUtils.getValue(a.style, mxConstants.STYLE_STARTSIZE) * a.view.scale;
            if (l > 0)if (mxUtils.getValue(a.style, mxConstants.STYLE_HORIZONTAL, true)) {
                h = a.y + l / 2;
                i = l
            } else {
                g = a.x + l / 2;
                k = l
            }
            k = Math.max(e,
                k * d);
            i = Math.max(e, i * d);
            if (f > 0) {
                k = Math.min(k, f);
                i = Math.min(i, f)
            }
            a = new mxRectangle(g - k / 2, h - i / 2, k, i);
            return mxUtils.contains(a, b, c)
        }
        return true
    }, getOffset: function (a, b) {
        var c = 0, d = 0;
        if (b != null && b)var e = document.body, f = document.documentElement, c = c + (e.scrollLeft || f.scrollLeft), d = d + (e.scrollTop || f.scrollTop);
        for (; a.offsetParent;) {
            c = c + a.offsetLeft;
            d = d + a.offsetTop;
            a = a.offsetParent
        }
        return new mxPoint(c, d)
    }, getScrollOrigin: function (a) {
        for (var b = document.body, c = document.documentElement, d = new mxPoint(b.scrollLeft ||
            c.scrollLeft, b.scrollTop || c.scrollTop); a != null && a != b && a != c;) {
            if (!isNaN(a.scrollLeft) && !isNaN(a.scrollTop)) {
                d.x = d.x + a.scrollLeft;
                d.y = d.y + a.scrollTop
            }
            a = a.parentNode
        }
        return d
    }, convertPoint: function (a, b, c) {
        var d = mxUtils.getScrollOrigin(a), a = mxUtils.getOffset(a);
        a.x = a.x - d.x;
        a.y = a.y - d.y;
        return new mxPoint(b - a.x, c - a.y)
    }, ltrim: function (a, b) {
        return a.replace(RegExp("^[" + (b || "\\s") + "]+", "g"), "")
    }, rtrim: function (a, b) {
        return a.replace(RegExp("[" + (b || "\\s") + "]+$", "g"), "")
    }, trim: function (a, b) {
        return mxUtils.ltrim(mxUtils.rtrim(a,
            b), b)
    }, isNumeric: function (a) {
        return a != null && (a.length == null || a.length > 0 && a.indexOf("0x") < 0 && a.indexOf("0X") < 0) && !isNaN(a)
    }, mod: function (a, b) {
        return(a % b + b) % b
    }, intersection: function (a, b, c, d, e, f, g, h) {
        var k = (h - f) * (c - a) - (g - e) * (d - b), g = ((g - e) * (b - f) - (h - f) * (a - e)) / k, e = ((c - a) * (b - f) - (d - b) * (a - e)) / k;
        return g >= 0 && g <= 1 && e >= 0 && e <= 1 ? new mxPoint(a + g * (c - a), b + g * (d - b)) : null
    }, ptSegDistSq: function (a, b, c, d, e, f) {
        c = c - a;
        d = d - b;
        e = e - a;
        f = f - b;
        if (e * c + f * d <= 0)c = 0; else {
            e = c - e;
            f = d - f;
            a = e * c + f * d;
            c = a <= 0 ? 0 : a * a / (c * c + d * d)
        }
        e = e * e + f * f - c;
        e < 0 && (e =
            0);
        return e
    }, relativeCcw: function (a, b, c, d, e, f) {
        c = c - a;
        d = d - b;
        e = e - a;
        f = f - b;
        a = e * d - f * c;
        if (a == 0) {
            a = e * c + f * d;
            if (a > 0) {
                a = (e - c) * c + (f - d) * d;
                a < 0 && (a = 0)
            }
        }
        return a < 0 ? -1 : a > 0 ? 1 : 0
    }, animateChanges: function (a, b) {
        mxEffects.animateChanges.apply(this, arguments)
    }, cascadeOpacity: function (a, b, c) {
        mxEffects.cascadeOpacity.apply(this, arguments)
    }, fadeOut: function (a, b, c, d, e, f) {
        mxEffects.fadeOut.apply(this, arguments)
    }, setOpacity: function (a, b) {
        mxUtils.isVml(a) ? a.style.filter = b >= 100 ? null : "alpha(opacity=" + b / 5 + ")" : mxClient.IS_IE && (typeof document.documentMode ===
            "undefined" || document.documentMode < 9) ? a.style.filter = b >= 100 ? null : "alpha(opacity=" + b + ")" : a.style.opacity = b / 100
    }, createImage: function (a) {
        var b = null;
        if (mxClient.IS_IE6 && document.compatMode != "CSS1Compat") {
            b = document.createElement(mxClient.VML_PREFIX + ":image");
            b.setAttribute("src", a);
            b.style.borderStyle = "none"
        } else {
            b = document.createElement("img");
            b.setAttribute("src", a);
            b.setAttribute("border", "0")
        }
        return b
    }, sortCells: function (a, b) {
        var b = b != null ? b : true, c = new mxDictionary;
        a.sort(function (a, e) {
            var f = c.get(a);
            if (f == null) {
                f = mxCellPath.create(a).split(mxCellPath.PATH_SEPARATOR);
                c.put(a, f)
            }
            var g = c.get(e);
            if (g == null) {
                g = mxCellPath.create(e).split(mxCellPath.PATH_SEPARATOR);
                c.put(e, g)
            }
            f = mxCellPath.compare(f, g);
            return f == 0 ? 0 : f > 0 == b ? 1 : -1
        });
        return a
    }, getStylename: function (a) {
        if (a != null) {
            a = a.split(";")[0];
            if (a.indexOf("=") < 0)return a
        }
        return""
    }, getStylenames: function (a) {
        var b = [];
        if (a != null)for (var a = a.split(";"), c = 0; c < a.length; c++)a[c].indexOf("=") < 0 && b.push(a[c]);
        return b
    }, indexOfStylename: function (a, b) {
        if (a != null &&
            b != null)for (var c = a.split(";"), d = 0, e = 0; e < c.length; e++) {
            if (c[e] == b)return d;
            d = d + (c[e].length + 1)
        }
        return-1
    }, addStylename: function (a, b) {
        if (mxUtils.indexOfStylename(a, b) < 0) {
            a == null ? a = "" : a.length > 0 && a.charAt(a.length - 1) != ";" && (a = a + ";");
            a = a + b
        }
        return a
    }, removeStylename: function (a, b) {
        var c = [];
        if (a != null)for (var d = a.split(";"), e = 0; e < d.length; e++)d[e] != b && c.push(d[e]);
        return c.join(";")
    }, removeAllStylenames: function (a) {
        var b = [];
        if (a != null)for (var a = a.split(";"), c = 0; c < a.length; c++)a[c].indexOf("=") >= 0 && b.push(a[c]);
        return b.join(";")
    }, setCellStyles: function (a, b, c, d) {
        if (b != null && b.length > 0) {
            a.beginUpdate();
            try {
                for (var e = 0; e < b.length; e++)if (b[e] != null) {
                    var f = mxUtils.setStyle(a.getStyle(b[e]), c, d);
                    a.setStyle(b[e], f)
                }
            } finally {
                a.endUpdate()
            }
        }
    }, setStyle: function (a, b, c) {
        var d = c != null && (typeof c.length == "undefined" || c.length > 0);
        if (a == null || a.length == 0)d && (a = b + "=" + c); else {
            var e = a.indexOf(b + "=");
            if (e < 0) {
                if (d) {
                    d = a.charAt(a.length - 1) == ";" ? "" : ";";
                    a = a + d + b + "=" + c
                }
            } else {
                b = d ? b + "=" + c : "";
                c = a.indexOf(";", e);
                d || c++;
                a = a.substring(0,
                    e) + b + (c > e ? a.substring(c) : "")
            }
        }
        return a
    }, setCellStyleFlags: function (a, b, c, d, e) {
        if (b != null && b.length > 0) {
            a.beginUpdate();
            try {
                for (var f = 0; f < b.length; f++)if (b[f] != null) {
                    var g = mxUtils.setStyleFlag(a.getStyle(b[f]), c, d, e);
                    a.setStyle(b[f], g)
                }
            } finally {
                a.endUpdate()
            }
        }
    }, setStyleFlag: function (a, b, c, d) {
        if (a == null || a.length == 0)a = d || d == null ? b + "=" + c : b + "=0"; else {
            var e = a.indexOf(b + "=");
            if (e < 0) {
                e = a.charAt(a.length - 1) == ";" ? "" : ";";
                a = d || d == null ? a + e + b + "=" + c : a + e + b + "=0"
            } else var f = a.indexOf(";", e), g = "", g = f < 0 ? a.substring(e +
                b.length + 1) : a.substring(e + b.length + 1, f), g = d == null ? parseInt(g) ^ c : d ? parseInt(g) | c : parseInt(g) & ~c, a = a.substring(0, e) + b + "=" + g + (f >= 0 ? a.substring(f) : "")
        }
        return a
    }, getAlignmentAsPoint: function (a, b) {
        var c = 0, d = 0;
        a == mxConstants.ALIGN_CENTER ? c = -0.5 : a == mxConstants.ALIGN_RIGHT && (c = -1);
        b == mxConstants.ALIGN_MIDDLE ? d = -0.5 : b == mxConstants.ALIGN_BOTTOM && (d = -1);
        return new mxPoint(c, d)
    }, getSizeForString: function (a, b, c) {
        var b = b != null ? b : mxConstants.DEFAULT_FONTSIZE, c = c != null ? c : mxConstants.DEFAULT_FONTFAMILY, d = document.createElement("div");
        d.style.fontFamily = c;
        d.style.fontSize = Math.round(b) + "px";
        d.style.lineHeight = Math.round(b * mxConstants.LINE_HEIGHT) + "px";
        d.style.position = "absolute";
        d.style.whiteSpace = "nowrap";
        d.style.visibility = "hidden";
        d.style.display = mxClient.IS_QUIRKS ? "inline" : "inline-block";
        d.style.zoom = "1";
        d.innerHTML = a;
        document.body.appendChild(d);
        a = new mxRectangle(0, 0, d.offsetWidth, d.offsetHeight);
        document.body.removeChild(d);
        return a
    }, getViewXml: function (a, b, c, d, e) {
        d = d != null ? d : 0;
        e = e != null ? e : 0;
        b = b != null ? b : 1;
        c == null && (c = [a.getModel().getRoot()]);
        var f = a.getView(), g = null, h = f.isEventsEnabled();
        f.setEventsEnabled(false);
        var k = f.drawPane, i = f.overlayPane;
        if (a.dialect == mxConstants.DIALECT_SVG) {
            f.drawPane = document.createElementNS(mxConstants.NS_SVG, "g");
            f.canvas.appendChild(f.drawPane);
            f.overlayPane = document.createElementNS(mxConstants.NS_SVG, "g")
        } else {
            f.drawPane = f.drawPane.cloneNode(false);
            f.canvas.appendChild(f.drawPane);
            f.overlayPane = f.overlayPane.cloneNode(false)
        }
        f.canvas.appendChild(f.overlayPane);
        var l = f.getTranslate();
        f.translate = new mxPoint(d,
            e);
        b = new mxTemporaryCellStates(a.getView(), b, c);
        try {
            g = (new mxCodec).encode(a.getView())
        } finally {
            b.destroy();
            f.translate = l;
            f.canvas.removeChild(f.drawPane);
            f.canvas.removeChild(f.overlayPane);
            f.drawPane = k;
            f.overlayPane = i;
            f.setEventsEnabled(h)
        }
        return g
    }, getScaleForPageCount: function (a, b, c, d) {
        if (a < 1)return 1;
        var c = c != null ? c : mxConstants.PAGE_FORMAT_A4_PORTRAIT, d = d != null ? d : 0, e = c.width - d * 2, c = c.height - d * 2, d = b.getGraphBounds().clone(), b = b.getView().getScale();
        d.width = d.width / b;
        d.height = d.height / b;
        var b = d.width,
            c = b / d.height / (e / c), d = Math.sqrt(a), f = Math.sqrt(c), c = d * f, d = d / f;
        if (c < 1 && d > a)var g = d / a, d = a, c = c / g;
        if (d < 1 && c > a) {
            g = c / a;
            c = a;
            d = d / g
        }
        g = Math.ceil(c) * Math.ceil(d);
        for (f = 0; g > a;) {
            var g = Math.floor(c) / c, h = Math.floor(d) / d;
            g == 1 && (g = Math.floor(c - 1) / c);
            h == 1 && (h = Math.floor(d - 1) / d);
            g = g > h ? g : h;
            c = c * g;
            d = d * g;
            g = Math.ceil(c) * Math.ceil(d);
            f++;
            if (f > 10)break
        }
        return e * c / b * 0.99999
    }, show: function (a, b, c, d) {
        c = c != null ? c : 0;
        d = d != null ? d : 0;
        b == null ? b = window.open().document : b.open();
        var e = a.getGraphBounds(), c = -e.x + c, d = -e.y + d;
        if (mxClient.IS_IE) {
            for (var e =
                "<html><head>", f = document.getElementsByTagName("base"), g = 0; g < f.length; g++)e = e + f[g].outerHTML;
            e = e + "<style>";
            for (g = 0; g < document.styleSheets.length; g++)try {
                e = e + document.styleSheets(g).cssText
            } catch (h) {
            }
            e = e + "</style></head><body>" + a.container.innerHTML;
            b.writeln(e + "</body><html>");
            b.close();
            a = b.body.getElementsByTagName("DIV")[0];
            if (a != null) {
                a.style.position = "absolute";
                a.style.left = c + "px";
                a.style.top = d + "px"
            }
        } else {
            b.writeln("<html");
            b.writeln("<head>");
            f = document.getElementsByTagName("base");
            for (g = 0; g <
                f.length; g++)b.writeln(mxUtils.getOuterHtml(f[g]));
            f = document.getElementsByTagName("link");
            for (g = 0; g < f.length; g++)b.writeln(mxUtils.getOuterHtml(f[g]));
            f = document.getElementsByTagName("style");
            for (g = 0; g < f.length; g++)b.writeln(mxUtils.getOuterHtml(f[g]));
            b.writeln("</head>");
            b.writeln("</html>");
            b.close();
            b.body == null && b.documentElement.appendChild(b.createElement("body"));
            b.body.style.overflow = "auto";
            for (a = a.container.firstChild; a != null;) {
                g = a.cloneNode(true);
                b.body.appendChild(g);
                a = a.nextSibling
            }
            a =
                b.getElementsByTagName("g")[0];
            if (a != null) {
                a.setAttribute("transform", "translate(" + c + "," + d + ")");
                c = a.ownerSVGElement;
                c.setAttribute("width", e.width + Math.max(e.x, 0) + 3);
                c.setAttribute("height", e.height + Math.max(e.y, 0) + 3)
            }
        }
        mxUtils.removeCursors(b.body);
        return b
    }, printScreen: function (a) {
        var b = window.open();
        mxUtils.show(a, b.document);
        a = function () {
            b.focus();
            b.print();
            b.close()
        };
        mxClient.IS_GC ? b.setTimeout(a, 500) : a()
    }, popup: function (a, b) {
        if (b) {
            var c = document.createElement("div");
            c.style.overflow = "scroll";
            c.style.width = "636px";
            c.style.height = "460px";
            var d = document.createElement("pre");
            d.innerHTML = mxUtils.htmlEntities(a, false).replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");
            c.appendChild(d);
            c = new mxWindow("Popup Window", c, document.body.clientWidth / 2 - 320, (document.body.clientHeight || document.documentElement.clientHeight) / 2 - 240, 640, 480, false, true);
            c.setClosable(true);
            c.setVisible(true)
        } else if (mxClient.IS_NS) {
            c = window.open();
            c.document.writeln("<pre>" + mxUtils.htmlEntities(a) + "</pre");
            c.document.close()
        } else {
            c =
                window.open();
            d = c.document.createElement("pre");
            d.innerHTML = mxUtils.htmlEntities(a, false).replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");
            c.document.body.appendChild(d)
        }
    }, alert: function (a) {
        alert(a)
    }, prompt: function (a, b) {
        return prompt(a, b)
    }, confirm: function (a) {
        return confirm(a)
    }, error: function (a, b, c, d) {
        var e = document.createElement("div");
        e.style.padding = "20px";
        var f = document.createElement("img");
        f.setAttribute("src", d || mxUtils.errorImage);
        f.setAttribute("valign", "bottom");
        f.style.verticalAlign = "middle";
        e.appendChild(f);
        e.appendChild(document.createTextNode("\u00a0"));
        e.appendChild(document.createTextNode("\u00a0"));
        e.appendChild(document.createTextNode("\u00a0"));
        mxUtils.write(e, a);
        var a = document.body.clientWidth, d = document.body.clientHeight || document.documentElement.clientHeight, g = new mxWindow(mxResources.get(mxUtils.errorResource) || mxUtils.errorResource, e, (a - b) / 2, d / 4, b, null, false, true);
        if (c) {
            mxUtils.br(e);
            b = document.createElement("p");
            c = document.createElement("button");
            mxClient.IS_IE ? c.style.cssText =
                "float:right" : c.setAttribute("style", "float:right");
            mxEvent.addListener(c, "click", function () {
                g.destroy()
            });
            mxUtils.write(c, mxResources.get(mxUtils.closeResource) || mxUtils.closeResource);
            b.appendChild(c);
            e.appendChild(b);
            mxUtils.br(e);
            g.setClosable(true)
        }
        g.setVisible(true);
        return g
    }, makeDraggable: function (a, b, c, d, e, f, g, h, k, i) {
        a = new mxDragSource(a, c);
        a.dragOffset = new mxPoint(e != null ? e : 0, f != null ? f : mxConstants.TOOLTIP_VERTICAL_OFFSET);
        a.autoscroll = g;
        a.setGuidesEnabled(false);
        if (k != null)a.highlightDropTargets =
            k;
        if (i != null)a.getDropTarget = i;
        a.getGraphForEvent = function (a) {
            return typeof b == "function" ? b(a) : b
        };
        if (d != null) {
            a.createDragElement = function () {
                return d.cloneNode(true)
            };
            if (h)a.createPreviewElement = function (a) {
                var b = d.cloneNode(true), c = parseInt(b.style.width), e = parseInt(b.style.height);
                b.style.width = Math.round(c * a.view.scale) + "px";
                b.style.height = Math.round(e * a.view.scale) + "px";
                return b
            }
        }
        return a
    }}, mxConstants = {DEFAULT_HOTSPOT: 0.3, MIN_HOTSPOT_SIZE: 8, MAX_HOTSPOT_SIZE: 0, RENDERING_HINT_EXACT: "exact", RENDERING_HINT_FASTER: "faster",
    RENDERING_HINT_FASTEST: "fastest", DIALECT_SVG: "svg", DIALECT_VML: "vml", DIALECT_MIXEDHTML: "mixedHtml", DIALECT_PREFERHTML: "preferHtml", DIALECT_STRICTHTML: "strictHtml", NS_SVG: "http://www.w3.org/2000/svg", NS_XHTML: "http://www.w3.org/1999/xhtml", NS_XLINK: "http://www.w3.org/1999/xlink", SHADOWCOLOR: "gray", SHADOW_OFFSET_X: 2, SHADOW_OFFSET_Y: 3, SHADOW_OPACITY: 1, NODETYPE_ELEMENT: 1, NODETYPE_ATTRIBUTE: 2, NODETYPE_TEXT: 3, NODETYPE_CDATA: 4, NODETYPE_ENTITY_REFERENCE: 5, NODETYPE_ENTITY: 6, NODETYPE_PROCESSING_INSTRUCTION: 7,
    NODETYPE_COMMENT: 8, NODETYPE_DOCUMENT: 9, NODETYPE_DOCUMENTTYPE: 10, NODETYPE_DOCUMENT_FRAGMENT: 11, NODETYPE_NOTATION: 12, TOOLTIP_VERTICAL_OFFSET: 16, DEFAULT_VALID_COLOR: "#00FF00", DEFAULT_INVALID_COLOR: "#FF0000", HIGHLIGHT_STROKEWIDTH: 3, CURSOR_MOVABLE_VERTEX: "move", CURSOR_MOVABLE_EDGE: "move", CURSOR_LABEL_HANDLE: "default", CURSOR_BEND_HANDLE: "pointer", CURSOR_CONNECT: "pointer", HIGHLIGHT_COLOR: "#00FF00", CONNECT_TARGET_COLOR: "#0000FF", INVALID_CONNECT_TARGET_COLOR: "#FF0000", DROP_TARGET_COLOR: "#0000FF", VALID_COLOR: "#00FF00",
    INVALID_COLOR: "#FF0000", EDGE_SELECTION_COLOR: "#00FF00", VERTEX_SELECTION_COLOR: "#00FF00", VERTEX_SELECTION_STROKEWIDTH: 1, EDGE_SELECTION_STROKEWIDTH: 1, VERTEX_SELECTION_DASHED: !0, EDGE_SELECTION_DASHED: !0, GUIDE_COLOR: "#FF0000", GUIDE_STROKEWIDTH: 1, OUTLINE_COLOR: "#0099FF", OUTLINE_STROKEWIDTH: mxClient.IS_IE ? 2 : 3, HANDLE_SIZE: 7, LABEL_HANDLE_SIZE: 4, HANDLE_FILLCOLOR: "#00FF00", HANDLE_STROKECOLOR: "black", LABEL_HANDLE_FILLCOLOR: "yellow", CONNECT_HANDLE_FILLCOLOR: "#0000FF", LOCKED_HANDLE_FILLCOLOR: "#FF0000", OUTLINE_HANDLE_FILLCOLOR: "#00FFFF",
    OUTLINE_HANDLE_STROKECOLOR: "#0033FF", DEFAULT_FONTFAMILY: "Arial,Helvetica", DEFAULT_FONTSIZE: 11, LINE_HEIGHT: 1.2, DEFAULT_FONTSTYLE: 0, DEFAULT_STARTSIZE: 40, DEFAULT_MARKERSIZE: 6, DEFAULT_IMAGESIZE: 24, ENTITY_SEGMENT: 30, RECTANGLE_ROUNDING_FACTOR: 0.15, LINE_ARCSIZE: 20, ARROW_SPACING: 10, ARROW_WIDTH: 30, ARROW_SIZE: 30, PAGE_FORMAT_A4_PORTRAIT: new mxRectangle(0, 0, 826, 1169), PAGE_FORMAT_A4_LANDSCAPE: new mxRectangle(0, 0, 1169, 826), PAGE_FORMAT_LETTER_PORTRAIT: new mxRectangle(0, 0, 850, 1100), PAGE_FORMAT_LETTER_LANDSCAPE: new mxRectangle(0,
        0, 1100, 850), NONE: "none", STYLE_PERIMETER: "perimeter", STYLE_SOURCE_PORT: "sourcePort", STYLE_TARGET_PORT: "targetPort", STYLE_PORT_CONSTRAINT: "portConstraint", STYLE_OPACITY: "opacity", STYLE_TEXT_OPACITY: "textOpacity", STYLE_OVERFLOW: "overflow", STYLE_ORTHOGONAL: "orthogonal", STYLE_EXIT_X: "exitX", STYLE_EXIT_Y: "exitY", STYLE_EXIT_PERIMETER: "exitPerimeter", STYLE_ENTRY_X: "entryX", STYLE_ENTRY_Y: "entryY", STYLE_ENTRY_PERIMETER: "entryPerimeter", STYLE_WHITE_SPACE: "whiteSpace", STYLE_ROTATION: "rotation", STYLE_FILLCOLOR: "fillColor",
    STYLE_SWIMLANE_FILLCOLOR: "swimlaneFillColor", STYLE_GRADIENTCOLOR: "gradientColor", STYLE_GRADIENT_DIRECTION: "gradientDirection", STYLE_STROKECOLOR: "strokeColor", STYLE_SEPARATORCOLOR: "separatorColor", STYLE_STROKEWIDTH: "strokeWidth", STYLE_ALIGN: "align", STYLE_VERTICAL_ALIGN: "verticalAlign", STYLE_LABEL_POSITION: "labelPosition", STYLE_VERTICAL_LABEL_POSITION: "verticalLabelPosition", STYLE_IMAGE_ASPECT: "imageAspect", STYLE_IMAGE_ALIGN: "imageAlign", STYLE_IMAGE_VERTICAL_ALIGN: "imageVerticalAlign", STYLE_GLASS: "glass",
    STYLE_IMAGE: "image", STYLE_IMAGE_WIDTH: "imageWidth", STYLE_IMAGE_HEIGHT: "imageHeight", STYLE_IMAGE_BACKGROUND: "imageBackground", STYLE_IMAGE_BORDER: "imageBorder", STYLE_FLIPH: "flipH", STYLE_FLIPV: "flipV", STYLE_NOLABEL: "noLabel", STYLE_NOEDGESTYLE: "noEdgeStyle", STYLE_LABEL_BACKGROUNDCOLOR: "labelBackgroundColor", STYLE_LABEL_BORDERCOLOR: "labelBorderColor", STYLE_LABEL_PADDING: "labelPadding", STYLE_INDICATOR_SHAPE: "indicatorShape", STYLE_INDICATOR_IMAGE: "indicatorImage", STYLE_INDICATOR_COLOR: "indicatorColor", STYLE_INDICATOR_STROKECOLOR: "indicatorStrokeColor",
    STYLE_INDICATOR_GRADIENTCOLOR: "indicatorGradientColor", STYLE_INDICATOR_SPACING: "indicatorSpacing", STYLE_INDICATOR_WIDTH: "indicatorWidth", STYLE_INDICATOR_HEIGHT: "indicatorHeight", STYLE_INDICATOR_DIRECTION: "indicatorDirection", STYLE_SHADOW: "shadow", STYLE_SEGMENT: "segment", STYLE_ENDARROW: "endArrow", STYLE_STARTARROW: "startArrow", STYLE_ENDSIZE: "endSize", STYLE_STARTSIZE: "startSize", STYLE_SWIMLANE_LINE: "swimlaneLine", STYLE_ENDFILL: "endFill", STYLE_STARTFILL: "startFill", STYLE_DASHED: "dashed", STYLE_DASH_PATTERN: "dashPattern",
    STYLE_ROUNDED: "rounded", STYLE_CURVED: "curved", STYLE_ARCSIZE: "arcSize", STYLE_SMOOTH: "smooth", STYLE_SOURCE_PERIMETER_SPACING: "sourcePerimeterSpacing", STYLE_TARGET_PERIMETER_SPACING: "targetPerimeterSpacing", STYLE_PERIMETER_SPACING: "perimeterSpacing", STYLE_SPACING: "spacing", STYLE_SPACING_TOP: "spacingTop", STYLE_SPACING_LEFT: "spacingLeft", STYLE_SPACING_BOTTOM: "spacingBottom", STYLE_SPACING_RIGHT: "spacingRight", STYLE_HORIZONTAL: "horizontal", STYLE_DIRECTION: "direction", STYLE_ELBOW: "elbow", STYLE_FONTCOLOR: "fontColor",
    STYLE_FONTFAMILY: "fontFamily", STYLE_FONTSIZE: "fontSize", STYLE_FONTSTYLE: "fontStyle", STYLE_AUTOSIZE: "autosize", STYLE_FOLDABLE: "foldable", STYLE_EDITABLE: "editable", STYLE_BENDABLE: "bendable", STYLE_MOVABLE: "movable", STYLE_RESIZABLE: "resizable", STYLE_CLONEABLE: "cloneable", STYLE_DELETABLE: "deletable", STYLE_SHAPE: "shape", STYLE_EDGE: "edgeStyle", STYLE_LOOP: "loopStyle", STYLE_ROUTING_CENTER_X: "routingCenterX", STYLE_ROUTING_CENTER_Y: "routingCenterY", FONT_BOLD: 1, FONT_ITALIC: 2, FONT_UNDERLINE: 4, FONT_SHADOW: 8, SHAPE_RECTANGLE: "rectangle",
    SHAPE_ELLIPSE: "ellipse", SHAPE_DOUBLE_ELLIPSE: "doubleEllipse", SHAPE_RHOMBUS: "rhombus", SHAPE_LINE: "line", SHAPE_IMAGE: "image", SHAPE_ARROW: "arrow", SHAPE_LABEL: "label", SHAPE_CYLINDER: "cylinder", SHAPE_SWIMLANE: "swimlane", SHAPE_CONNECTOR: "connector", SHAPE_ACTOR: "actor", SHAPE_CLOUD: "cloud", SHAPE_TRIANGLE: "triangle", SHAPE_HEXAGON: "hexagon", ARROW_CLASSIC: "classic", ARROW_BLOCK: "block", ARROW_OPEN: "open", ARROW_OVAL: "oval", ARROW_DIAMOND: "diamond", ARROW_DIAMOND_THIN: "diamondThin", ALIGN_LEFT: "left", ALIGN_CENTER: "center",
    ALIGN_RIGHT: "right", ALIGN_TOP: "top", ALIGN_MIDDLE: "middle", ALIGN_BOTTOM: "bottom", DIRECTION_NORTH: "north", DIRECTION_SOUTH: "south", DIRECTION_EAST: "east", DIRECTION_WEST: "west", DIRECTION_MASK_NONE: 0, DIRECTION_MASK_WEST: 1, DIRECTION_MASK_NORTH: 2, DIRECTION_MASK_SOUTH: 4, DIRECTION_MASK_EAST: 8, DIRECTION_MASK_ALL: 15, ELBOW_VERTICAL: "vertical", ELBOW_HORIZONTAL: "horizontal", EDGESTYLE_ELBOW: "elbowEdgeStyle", EDGESTYLE_ENTITY_RELATION: "entityRelationEdgeStyle", EDGESTYLE_LOOP: "loopEdgeStyle", EDGESTYLE_SIDETOSIDE: "sideToSideEdgeStyle",
    EDGESTYLE_TOPTOBOTTOM: "topToBottomEdgeStyle", EDGESTYLE_ORTHOGONAL: "orthogonalEdgeStyle", EDGESTYLE_SEGMENT: "segmentEdgeStyle", PERIMETER_ELLIPSE: "ellipsePerimeter", PERIMETER_RECTANGLE: "rectanglePerimeter", PERIMETER_RHOMBUS: "rhombusPerimeter", PERIMETER_TRIANGLE: "trianglePerimeter"};
function mxEventObject(a) {
    this.name = a;
    this.properties = [];
    for (var b = 1; b < arguments.length; b = b + 2)arguments[b + 1] != null && (this.properties[arguments[b]] = arguments[b + 1])
}
mxEventObject.prototype.name = null;
mxEventObject.prototype.properties = null;
mxEventObject.prototype.consumed = false;
mxEventObject.prototype.getName = function () {
    return this.name
};
mxEventObject.prototype.getProperties = function () {
    return this.properties
};
mxEventObject.prototype.getProperty = function (a) {
    return this.properties[a]
};
mxEventObject.prototype.isConsumed = function () {
    return this.consumed
};
mxEventObject.prototype.consume = function () {
    this.consumed = true
};
function mxMouseEvent(a, b) {
    this.evt = a;
    this.state = b
}
mxMouseEvent.prototype.consumed = false;
mxMouseEvent.prototype.evt = null;
mxMouseEvent.prototype.graphX = null;
mxMouseEvent.prototype.graphY = null;
mxMouseEvent.prototype.state = null;
mxMouseEvent.prototype.getEvent = function () {
    return this.evt
};
mxMouseEvent.prototype.getSource = function () {
    return mxEvent.getSource(this.evt)
};
mxMouseEvent.prototype.isSource = function (a) {
    if (a != null)for (var b = this.getSource(); b != null;) {
        if (b == a.node)return true;
        b = b.parentNode
    }
    return false
};
mxMouseEvent.prototype.getX = function () {
    return mxEvent.getClientX(this.getEvent())
};
mxMouseEvent.prototype.getY = function () {
    return mxEvent.getClientY(this.getEvent())
};
mxMouseEvent.prototype.getGraphX = function () {
    return this.graphX
};
mxMouseEvent.prototype.getGraphY = function () {
    return this.graphY
};
mxMouseEvent.prototype.getState = function () {
    return this.state
};
mxMouseEvent.prototype.getCell = function () {
    var a = this.getState();
    return a != null ? a.cell : null
};
mxMouseEvent.prototype.isPopupTrigger = function () {
    return mxEvent.isPopupTrigger(this.getEvent())
};
mxMouseEvent.prototype.isConsumed = function () {
    return this.consumed
};
mxMouseEvent.prototype.consume = function (a) {
    (a != null ? a : 1) && this.evt.preventDefault && this.evt.preventDefault();
    this.evt.returnValue = false;
    this.consumed = true
};
function mxEventSource(a) {
    this.setEventSource(a)
}
mxEventSource.prototype.eventListeners = null;
mxEventSource.prototype.eventsEnabled = true;
mxEventSource.prototype.eventSource = null;
mxEventSource.prototype.isEventsEnabled = function () {
    return this.eventsEnabled
};
mxEventSource.prototype.setEventsEnabled = function (a) {
    this.eventsEnabled = a
};
mxEventSource.prototype.getEventSource = function () {
    return this.eventSource
};
mxEventSource.prototype.setEventSource = function (a) {
    this.eventSource = a
};
mxEventSource.prototype.addListener = function (a, b) {
    if (this.eventListeners == null)this.eventListeners = [];
    this.eventListeners.push(a);
    this.eventListeners.push(b)
};
mxEventSource.prototype.removeListener = function (a) {
    if (this.eventListeners != null)for (var b = 0; b < this.eventListeners.length;)this.eventListeners[b + 1] == a ? this.eventListeners.splice(b, 2) : b = b + 2
};
mxEventSource.prototype.fireEvent = function (a, b) {
    if (this.eventListeners != null && this.isEventsEnabled()) {
        a == null && (a = new mxEventObject);
        b == null && (b = this.getEventSource());
        b == null && (b = this);
        for (var c = [b, a], d = 0; d < this.eventListeners.length; d = d + 2) {
            var e = this.eventListeners[d];
            (e == null || e == a.getName()) && this.eventListeners[d + 1].apply(this, c)
        }
    }
};
var mxEvent = {objects: [], addListener: function () {
    var a = function (a, c, d) {
        if (a.mxListenerList == null) {
            a.mxListenerList = [];
            mxEvent.objects.push(a)
        }
        a.mxListenerList.push({name: c, f: d})
    };
    return window.addEventListener ? function (b, c, d) {
        b.addEventListener(c, d, false);
        a(b, c, d)
    } : function (b, c, d) {
        b.attachEvent("on" + c, d);
        a(b, c, d)
    }
}(), removeListener: function () {
    var a = function (a, c, d) {
        if (a.mxListenerList != null) {
            for (var c = a.mxListenerList.length, e = 0; e < c; e++)if (a.mxListenerList[e].f == d) {
                a.mxListenerList.splice(e, 1);
                break
            }
            if (a.mxListenerList.length ==
                0)a.mxListenerList = null
        }
    };
    return window.removeEventListener ? function (b, c, d) {
        b.removeEventListener(c, d, false);
        a(b, c, d)
    } : function (b, c, d) {
        b.detachEvent("on" + c, d);
        a(b, c, d)
    }
}(), removeAllListeners: function (a) {
    var b = a.mxListenerList;
    if (b != null)for (; b.length > 0;) {
        var c = b[0];
        mxEvent.removeListener(a, c.name, c.f)
    }
}, addGestureListeners: function (a, b, c, d) {
    b != null && mxEvent.addListener(a, "mousedown", b);
    c != null && mxEvent.addListener(a, "mousemove", c);
    d != null && mxEvent.addListener(a, "mouseup", d);
    if (mxClient.IS_TOUCH) {
        b !=
            null && mxEvent.addListener(a, "touchstart", b);
        c != null && mxEvent.addListener(a, "touchmove", c);
        d != null && mxEvent.addListener(a, "touchend", d)
    }
}, removeGestureListeners: function (a, b, c, d) {
    b != null && mxEvent.removeListener(a, "mousedown", b);
    c != null && mxEvent.removeListener(a, "mousemove", c);
    d != null && mxEvent.removeListener(a, "mouseup", d);
    if (mxClient.IS_TOUCH) {
        b != null && mxEvent.removeListener(a, "touchstart", b);
        c != null && mxEvent.removeListener(a, "touchmove", c);
        d != null && mxEvent.removeListener(a, "touchend", d)
    }
}, redirectMouseEvents: function (a, b, c, d, e, f, g) {
    var h = function (a) {
        return typeof c == "function" ? c(a) : c
    };
    mxEvent.addGestureListeners(a, function (a) {
        d != null ? d(a) : mxEvent.isConsumed(a) || b.fireMouseEvent(mxEvent.MOUSE_DOWN, new mxMouseEvent(a, h(a)))
    }, function (a) {
        e != null ? e(a) : mxEvent.isConsumed(a) || b.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(a, h(a)))
    }, function (a) {
        f != null ? f(a) : mxEvent.isConsumed(a) || b.fireMouseEvent(mxEvent.MOUSE_UP, new mxMouseEvent(a, h(a)))
    });
    mxEvent.addListener(a, "dblclick", function (a) {
        if (g != null)g(a); else if (!mxEvent.isConsumed(a)) {
            var c =
                h(a);
            b.dblClick(a, c != null ? c.cell : null)
        }
    })
}, release: function (a) {
    if (a != null) {
        mxEvent.removeAllListeners(a);
        a = a.childNodes;
        if (a != null)for (var b = a.length, c = 0; c < b; c = c + 1)mxEvent.release(a[c])
    }
}, addMouseWheelListener: function (a) {
    if (a != null) {
        var b = function (b) {
            if (b == null)b = window.event;
            var d = 0, d = mxClient.IS_NS && !mxClient.IS_SF && !mxClient.IS_GC ? -b.detail / 2 : b.wheelDelta / 120;
            d != 0 && a(b, d > 0)
        };
        mxClient.IS_NS ? mxEvent.addListener(window, mxClient.IS_SF || mxClient.IS_GC ? "mousewheel" : "DOMMouseScroll", b) : mxEvent.addListener(document,
            "mousewheel", b)
    }
}, disableContextMenu: function () {
    return mxClient.IS_IE && (typeof document.documentMode === "undefined" || document.documentMode < 9) ? function (a) {
        mxEvent.addListener(a, "contextmenu", function () {
            return false
        })
    } : function (a) {
        a.setAttribute("oncontextmenu", "return false;")
    }
}(), getSource: function (a) {
    return a.srcElement != null ? a.srcElement : a.target
}, isConsumed: function (a) {
    return a.isConsumed != null && a.isConsumed
}, isLeftMouseButton: function (a) {
    return a.button == (mxClient.IS_IE && (typeof document.documentMode ===
        "undefined" || document.documentMode < 9) ? 1 : 0)
}, isRightMouseButton: function (a) {
    return a.button == 2
}, isPopupTrigger: function (a) {
    return mxEvent.isRightMouseButton(a) || mxEvent.isShiftDown(a) && !mxEvent.isControlDown(a)
}, isShiftDown: function (a) {
    return a != null ? a.shiftKey : false
}, isAltDown: function (a) {
    return a != null ? a.altKey : false
}, isControlDown: function (a) {
    return a != null ? a.ctrlKey : false
}, isMetaDown: function (a) {
    return a != null ? a.metaKey : false
}, getMainEvent: function (a) {
    (a.type == "touchstart" || a.type == "touchmove") &&
        a.touches != null && a.touches[0] != null ? a = a.touches[0] : a.type == "touchend" && (a.changedTouches != null && a.changedTouches[0] != null) && (a = a.changedTouches[0]);
    return a
}, getClientX: function (a) {
    return mxEvent.getMainEvent(a).clientX
}, getClientY: function (a) {
    return mxEvent.getMainEvent(a).clientY
}, consume: function (a, b, c) {
    c = c != null ? c : true;
    if (b != null ? b : 1)if (a.preventDefault) {
        c && a.stopPropagation();
        a.preventDefault()
    } else if (c)a.cancelBubble = true;
    a.isConsumed = true;
    a.returnValue = false
}, LABEL_HANDLE: -1, ROTATION_HANDLE: -2,
    MOUSE_DOWN: "mouseDown", MOUSE_MOVE: "mouseMove", MOUSE_UP: "mouseUp", ACTIVATE: "activate", RESIZE_START: "resizeStart", RESIZE: "resize", RESIZE_END: "resizeEnd", MOVE_START: "moveStart", MOVE: "move", MOVE_END: "moveEnd", PAN_START: "panStart", PAN: "pan", PAN_END: "panEnd", MINIMIZE: "minimize", NORMALIZE: "normalize", MAXIMIZE: "maximize", HIDE: "hide", SHOW: "show", CLOSE: "close", DESTROY: "destroy", REFRESH: "refresh", SIZE: "size", SELECT: "select", FIRED: "fired", GET: "get", RECEIVE: "receive", CONNECT: "connect", DISCONNECT: "disconnect",
    SUSPEND: "suspend", RESUME: "resume", MARK: "mark", SESSION: "session", ROOT: "root", POST: "post", OPEN: "open", SAVE: "save", BEFORE_ADD_VERTEX: "beforeAddVertex", ADD_VERTEX: "addVertex", AFTER_ADD_VERTEX: "afterAddVertex", DONE: "done", EXECUTE: "execute", BEGIN_UPDATE: "beginUpdate", END_UPDATE: "endUpdate", BEFORE_UNDO: "beforeUndo", UNDO: "undo", REDO: "redo", CHANGE: "change", NOTIFY: "notify", LAYOUT_CELLS: "layoutCells", CLICK: "click", SCALE: "scale", TRANSLATE: "translate", SCALE_AND_TRANSLATE: "scaleAndTranslate", UP: "up", DOWN: "down",
    ADD: "add", REMOVE: "remove", CLEAR: "clear", ADD_CELLS: "addCells", CELLS_ADDED: "cellsAdded", MOVE_CELLS: "moveCells", CELLS_MOVED: "cellsMoved", RESIZE_CELLS: "resizeCells", CELLS_RESIZED: "cellsResized", TOGGLE_CELLS: "toggleCells", CELLS_TOGGLED: "cellsToggled", ORDER_CELLS: "orderCells", CELLS_ORDERED: "cellsOrdered", REMOVE_CELLS: "removeCells", CELLS_REMOVED: "cellsRemoved", GROUP_CELLS: "groupCells", UNGROUP_CELLS: "ungroupCells", REMOVE_CELLS_FROM_PARENT: "removeCellsFromParent", FOLD_CELLS: "foldCells", CELLS_FOLDED: "cellsFolded",
    ALIGN_CELLS: "alignCells", LABEL_CHANGED: "labelChanged", CONNECT_CELL: "connectCell", CELL_CONNECTED: "cellConnected", SPLIT_EDGE: "splitEdge", FLIP_EDGE: "flipEdge", START_EDITING: "startEditing", ADD_OVERLAY: "addOverlay", REMOVE_OVERLAY: "removeOverlay", UPDATE_CELL_SIZE: "updateCellSize", ESCAPE: "escape", CLICK: "click", DOUBLE_CLICK: "doubleClick", START: "start", RESET: "reset"};
function mxImage(a, b, c) {
    this.src = a;
    this.width = b;
    this.height = c
}
mxImage.prototype.src = null;
mxImage.prototype.width = null;
mxImage.prototype.height = null;
function mxUndoableEdit(a, b) {
    this.source = a;
    this.changes = [];
    this.significant = b != null ? b : true
}
mxUndoableEdit.prototype.source = null;
mxUndoableEdit.prototype.changes = null;
mxUndoableEdit.prototype.significant = null;
mxUndoableEdit.prototype.undone = false;
mxUndoableEdit.prototype.redone = false;
mxUndoableEdit.prototype.isEmpty = function () {
    return this.changes.length == 0
};
mxUndoableEdit.prototype.isSignificant = function () {
    return this.significant
};
mxUndoableEdit.prototype.add = function (a) {
    this.changes.push(a)
};
mxUndoableEdit.prototype.notify = function () {
};
mxUndoableEdit.prototype.die = function () {
};
mxUndoableEdit.prototype.undo = function () {
    if (!this.undone) {
        for (var a = this.changes.length - 1; a >= 0; a--) {
            var b = this.changes[a];
            b.execute != null ? b.execute() : b.undo != null && b.undo()
        }
        this.undone = true;
        this.redone = false
    }
    this.notify()
};
mxUndoableEdit.prototype.redo = function () {
    if (!this.redone) {
        for (var a = this.changes.length, b = 0; b < a; b++) {
            var c = this.changes[b];
            c.execute != null ? c.execute() : c.redo != null && c.redo()
        }
        this.undone = false;
        this.redone = true
    }
    this.notify()
};
var mxUrlConverter = function () {
    var a = true, b = null, c = null;
    return{isEnabled: function () {
        return a
    }, setEnabled: function (b) {
        a = b
    }, getBaseUrl: function () {
        return b
    }, setBaseUrl: function (a) {
        b = a
    }, getBaseDomain: function () {
        return b
    }, setBaseDomain: function (a) {
        b = a
    }, isRelativeUrl: function (a) {
        return a.substring(0, 7) != "http://" && a.substring(0, 8) != "https://" && a.substring(0, 10) != "data:image"
    }, convert: function (d) {
        if (a && this.isRelativeUrl(d)) {
            if (b == null) {
                c = location.protocol + "//" + location.host;
                b = c + location.pathname;
                var e = b.lastIndexOf("/");
                e > 0 && (b = b.substring(0, e + 1))
            }
            d = d.charAt(0) == "/" ? c + d : b + d
        }
        return d
    }}
};
function mxPanningManager(a) {
    this.thread = null;
    this.active = false;
    this.dy = this.dx = this.t0y = this.t0x = this.tdy = this.tdx = 0;
    this.scrollbars = false;
    this.scrollTop = this.scrollLeft = 0;
    this.mouseListener = {mouseDown: function () {
    }, mouseMove: function () {
    }, mouseUp: mxUtils.bind(this, function () {
        this.active && this.stop()
    })};
    a.addMouseListener(this.mouseListener);
    mxEvent.addListener(document, "mouseup", mxUtils.bind(this, function () {
        this.active && this.stop()
    }));
    var b = mxUtils.bind(this, function () {
        this.scrollbars = mxUtils.hasScrollbars(a.container);
        this.scrollLeft = a.container.scrollLeft;
        this.scrollTop = a.container.scrollTop;
        return window.setInterval(mxUtils.bind(this, function () {
            this.tdx = this.tdx - this.dx;
            this.tdy = this.tdy - this.dy;
            if (this.scrollbars) {
                var b = -a.container.scrollLeft - Math.ceil(this.dx), d = -a.container.scrollTop - Math.ceil(this.dy);
                a.panGraph(b, d);
                a.panDx = this.scrollLeft - a.container.scrollLeft;
                a.panDy = this.scrollTop - a.container.scrollTop;
                a.fireEvent(new mxEventObject(mxEvent.PAN))
            } else a.panGraph(this.getDx(), this.getDy())
        }), this.delay)
    });
    this.isActive = function () {
        return active
    };
    this.getDx = function () {
        return Math.round(this.tdx)
    };
    this.getDy = function () {
        return Math.round(this.tdy)
    };
    this.start = function () {
        this.t0x = a.view.translate.x;
        this.t0y = a.view.translate.y;
        this.active = true
    };
    this.panTo = function (c, d, e, f) {
        this.active || this.start();
        this.scrollLeft = a.container.scrollLeft;
        this.scrollTop = a.container.scrollTop;
        var f = f != null ? f : 0, g = a.container;
        this.dx = c + (e != null ? e : 0) - g.scrollLeft - g.clientWidth;
        this.dx = this.dx < 0 && Math.abs(this.dx) < this.border ?
            this.border + this.dx : this.handleMouseOut ? Math.max(this.dx, 0) : 0;
        if (this.dx == 0) {
            this.dx = c - g.scrollLeft;
            this.dx = this.dx > 0 && this.dx < this.border ? this.dx - this.border : this.handleMouseOut ? Math.min(0, this.dx) : 0
        }
        this.dy = d + f - g.scrollTop - g.clientHeight;
        this.dy = this.dy < 0 && Math.abs(this.dy) < this.border ? this.border + this.dy : this.handleMouseOut ? Math.max(this.dy, 0) : 0;
        if (this.dy == 0) {
            this.dy = d - g.scrollTop;
            this.dy = this.dy > 0 && this.dy < this.border ? this.dy - this.border : this.handleMouseOut ? Math.min(0, this.dy) : 0
        }
        if (this.dx !=
            0 || this.dy != 0) {
            this.dx = this.dx * this.damper;
            this.dy = this.dy * this.damper;
            if (this.thread == null)this.thread = b()
        } else if (this.thread != null) {
            window.clearInterval(this.thread);
            this.thread = null
        }
    };
    this.stop = function () {
        if (this.active) {
            this.active = false;
            if (this.thread != null) {
                window.clearInterval(this.thread);
                this.thread = null
            }
            this.tdy = this.tdx = 0;
            if (this.scrollbars) {
                a.panDx = 0;
                a.panDy = 0;
                a.fireEvent(new mxEventObject(mxEvent.PAN))
            } else {
                var b = a.panDx, d = a.panDy;
                if (b != 0 || d != 0) {
                    a.panGraph(0, 0);
                    a.view.setTranslate(this.t0x +
                        b / a.view.scale, this.t0y + d / a.view.scale)
                }
            }
        }
    };
    this.destroy = function () {
        a.removeMouseListener(this.mouseListener)
    }
}
mxPanningManager.prototype.damper = 1 / 6;
mxPanningManager.prototype.delay = 10;
mxPanningManager.prototype.handleMouseOut = true;
mxPanningManager.prototype.border = 0;
function mxPopupMenu(a) {
    this.factoryMethod = a;
    a != null && this.init()
}
mxPopupMenu.prototype = new mxEventSource;
mxPopupMenu.prototype.constructor = mxPopupMenu;
mxPopupMenu.prototype.submenuImage = mxClient.imageBasePath + "/submenu.gif";
mxPopupMenu.prototype.zIndex = 10006;
mxPopupMenu.prototype.factoryMethod = null;
mxPopupMenu.prototype.useLeftButtonForPopup = false;
mxPopupMenu.prototype.enabled = true;
mxPopupMenu.prototype.itemCount = 0;
mxPopupMenu.prototype.autoExpand = false;
mxPopupMenu.prototype.smartSeparators = false;
mxPopupMenu.prototype.labels = true;
mxPopupMenu.prototype.init = function () {
    this.table = document.createElement("table");
    this.table.className = "mxPopupMenu";
    this.tbody = document.createElement("tbody");
    this.table.appendChild(this.tbody);
    this.div = document.createElement("div");
    this.div.className = "mxPopupMenu";
    this.div.style.display = "inline";
    this.div.style.zIndex = this.zIndex;
    this.div.appendChild(this.table);
    mxEvent.disableContextMenu(this.div)
};
mxPopupMenu.prototype.isEnabled = function () {
    return this.enabled
};
mxPopupMenu.prototype.setEnabled = function (a) {
    this.enabled = a
};
mxPopupMenu.prototype.isPopupTrigger = function (a) {
    return a.isPopupTrigger() || this.useLeftButtonForPopup && mxEvent.isLeftMouseButton(a.getEvent())
};
mxPopupMenu.prototype.addItem = function (a, b, c, d, e, f) {
    d = d || this;
    this.itemCount++;
    if (d.willAddSeparator) {
        d.containsItems && this.addSeparator(d, true);
        d.willAddSeparator = false
    }
    d.containsItems = true;
    var g = document.createElement("tr");
    g.className = "mxPopupMenuItem";
    var h = document.createElement("td");
    h.className = "mxPopupMenuIcon";
    if (b != null) {
        e = document.createElement("img");
        e.src = b;
        h.appendChild(e)
    } else if (e != null) {
        b = document.createElement("div");
        b.className = e;
        h.appendChild(b)
    }
    g.appendChild(h);
    if (this.labels) {
        h =
            document.createElement("td");
        h.className = "mxPopupMenuItem" + (f != null && !f ? " disabled" : "");
        mxUtils.write(h, a);
        h.align = "left";
        g.appendChild(h);
        a = document.createElement("td");
        a.className = "mxPopupMenuItem" + (f != null && !f ? " disabled" : "");
        a.style.paddingRight = "6px";
        a.style.textAlign = "right";
        g.appendChild(a);
        d.div == null && this.createSubmenu(d)
    }
    d.tbody.appendChild(g);
    if (f == null || f) {
        mxEvent.addGestureListeners(g, mxUtils.bind(this, function (a) {
            this.eventReceiver = g;
            if (d.activeRow != g && d.activeRow != d) {
                d.activeRow !=
                    null && d.activeRow.div.parentNode != null && this.hideSubmenu(d);
                if (g.div != null) {
                    this.showSubmenu(d, g);
                    d.activeRow = g
                }
            }
            mxEvent.consume(a)
        }), mxUtils.bind(this, function () {
            if (d.activeRow != g && d.activeRow != d) {
                d.activeRow != null && d.activeRow.div.parentNode != null && this.hideSubmenu(d);
                if (this.autoExpand && g.div != null) {
                    this.showSubmenu(d, g);
                    d.activeRow = g
                }
            }
            g.className = "mxPopupMenuItemHover"
        }), mxUtils.bind(this, function (a) {
            if (this.eventReceiver == g) {
                d.activeRow != g && this.hideMenu();
                c != null && c(a)
            }
            this.eventReceiver = null;
            mxEvent.consume(a)
        }));
        mxEvent.addListener(g, "mouseout", mxUtils.bind(this, function () {
            g.className = "mxPopupMenuItem"
        }))
    }
    return g
};
mxPopupMenu.prototype.createSubmenu = function (a) {
    a.table = document.createElement("table");
    a.table.className = "mxPopupMenu";
    a.tbody = document.createElement("tbody");
    a.table.appendChild(a.tbody);
    a.div = document.createElement("div");
    a.div.className = "mxPopupMenu";
    a.div.style.position = "absolute";
    a.div.style.display = "inline";
    a.div.style.zIndex = this.zIndex;
    a.div.appendChild(a.table);
    var b = document.createElement("img");
    b.setAttribute("src", this.submenuImage);
    td = a.firstChild.nextSibling.nextSibling;
    td.appendChild(b)
};
mxPopupMenu.prototype.showSubmenu = function (a, b) {
    if (b.div != null) {
        b.div.style.left = a.div.offsetLeft + b.offsetLeft + b.offsetWidth - 1 + "px";
        b.div.style.top = a.div.offsetTop + b.offsetTop + "px";
        document.body.appendChild(b.div);
        var c = parseInt(b.div.offsetLeft), d = parseInt(b.div.offsetWidth), e = document.body, f = document.documentElement;
        if (c + d > (e.scrollLeft || f.scrollLeft) + (e.clientWidth || f.clientWidth))b.div.style.left = a.div.offsetLeft - d + (mxClient.IS_IE ? 6 : -6) + "px";
        mxUtils.fit(b.div)
    }
};
mxPopupMenu.prototype.addSeparator = function (a, b) {
    a = a || this;
    if (this.smartSeparators && !b)a.willAddSeparator = true; else if (a.tbody != null) {
        a.willAddSeparator = false;
        var c = document.createElement("tr"), d = document.createElement("td");
        d.className = "mxPopupMenuIcon";
        d.style.padding = "0 0 0 0px";
        c.appendChild(d);
        d = document.createElement("td");
        d.style.padding = "0 0 0 0px";
        d.setAttribute("colSpan", "2");
        var e = document.createElement("hr");
        e.setAttribute("size", "1");
        d.appendChild(e);
        c.appendChild(d);
        a.tbody.appendChild(c)
    }
};
mxPopupMenu.prototype.popup = function (a, b, c, d) {
    if (this.div != null && this.tbody != null && this.factoryMethod != null) {
        this.div.style.left = a + "px";
        for (this.div.style.top = b + "px"; this.tbody.firstChild != null;) {
            mxEvent.release(this.tbody.firstChild);
            this.tbody.removeChild(this.tbody.firstChild)
        }
        this.itemCount = 0;
        this.factoryMethod(this, c, d);
        if (this.itemCount > 0) {
            this.showMenu();
            this.fireEvent(new mxEventObject(mxEvent.SHOW))
        }
    }
};
mxPopupMenu.prototype.isMenuShowing = function () {
    return this.div != null && this.div.parentNode == document.body
};
mxPopupMenu.prototype.showMenu = function () {
    if (document.documentMode >= 9)this.div.style.filter = "none";
    document.body.appendChild(this.div);
    mxUtils.fit(this.div)
};
mxPopupMenu.prototype.hideMenu = function () {
    if (this.div != null) {
        this.div.parentNode != null && this.div.parentNode.removeChild(this.div);
        this.hideSubmenu(this);
        this.containsItems = false
    }
};
mxPopupMenu.prototype.hideSubmenu = function (a) {
    if (a.activeRow != null) {
        this.hideSubmenu(a.activeRow);
        a.activeRow.div.parentNode != null && a.activeRow.div.parentNode.removeChild(a.activeRow.div);
        a.activeRow = null
    }
};
mxPopupMenu.prototype.destroy = function () {
    if (this.div != null) {
        mxEvent.release(this.div);
        this.div.parentNode != null && this.div.parentNode.removeChild(this.div);
        this.div = null
    }
};
function mxImageExport() {
}
mxImageExport.prototype.includeOverlays = false;
mxImageExport.prototype.drawState = function (a, b) {
    if (a != null) {
        this.visitStatesRecursive(a, b, this.drawCellState);
        this.includeOverlays && this.visitStatesRecursive(a, b, this.drawOverlays)
    }
};
mxImageExport.prototype.visitStatesRecursive = function (a, b, c) {
    if (a != null) {
        c(a, b);
        for (var d = a.view.graph, e = d.model.getChildCount(a.cell), f = 0; f < e; f++)this.visitStatesRecursive(d.view.getState(d.model.getChildAt(a.cell, f)), b, c)
    }
};
mxImageExport.prototype.drawCellState = function (a, b) {
    if (a.shape instanceof mxShape) {
        b.save();
        a.shape.paint(b);
        b.restore()
    }
    if (a.text != null) {
        b.save();
        a.text.paint(b);
        b.restore()
    }
};
mxImageExport.prototype.drawOverlays = function (a, b) {
    a.overlays != null && a.overlays.visit(function (a, d) {
        d instanceof mxShape && d.paint(b)
    })
};
function mxAbstractCanvas2D() {
    this.converter = this.createUrlConverter();
    this.reset()
}
mxAbstractCanvas2D.prototype.state = null;
mxAbstractCanvas2D.prototype.states = null;
mxAbstractCanvas2D.prototype.path = null;
mxAbstractCanvas2D.prototype.rotateHtml = true;
mxAbstractCanvas2D.prototype.lastX = 0;
mxAbstractCanvas2D.prototype.lastY = 0;
mxAbstractCanvas2D.prototype.moveOp = "M";
mxAbstractCanvas2D.prototype.lineOp = "L";
mxAbstractCanvas2D.prototype.quadOp = "Q";
mxAbstractCanvas2D.prototype.curveOp = "C";
mxAbstractCanvas2D.prototype.closeOp = "Z";
mxAbstractCanvas2D.prototype.pointerEvents = false;
mxAbstractCanvas2D.prototype.createUrlConverter = function () {
    return new mxUrlConverter
};
mxAbstractCanvas2D.prototype.reset = function () {
    this.state = this.createState();
    this.states = []
};
mxAbstractCanvas2D.prototype.createState = function () {
    return{dx: 0, dy: 0, scale: 1, alpha: 1, fillColor: null, fillAlpha: 1, gradientColor: null, gradientAlpha: 1, gradientDirection: null, strokeColor: null, strokeWidth: 1, dashed: false, dashPattern: "3 3", lineCap: "flat", lineJoin: "miter", miterLimit: 10, fontColor: "#000000", fontBackgroundColor: null, fontBorderColor: null, fontSize: mxConstants.DEFAULT_FONTSIZE, fontFamily: mxConstants.DEFAULT_FONTFAMILY, fontStyle: 0, shadow: false, shadowColor: mxConstants.SHADOWCOLOR, shadowAlpha: mxConstants.SHADOW_OPACITY,
        shadowDx: mxConstants.SHADOW_OFFSET_X, shadowDy: mxConstants.SHADOW_OFFSET_Y, rotation: 0, rotationCx: 0, rotationCy: 0}
};
mxAbstractCanvas2D.prototype.format = function (a) {
    return Math.round(parseFloat(a))
};
mxAbstractCanvas2D.prototype.addOp = function () {
    if (this.path != null) {
        this.path.push(arguments[0]);
        if (arguments.length > 2)for (var a = this.state, b = 2; b < arguments.length; b = b + 2) {
            this.lastX = arguments[b - 1];
            this.lastY = arguments[b];
            this.path.push(this.format((this.lastX + a.dx) * a.scale));
            this.path.push(this.format((this.lastY + a.dy) * a.scale))
        }
    }
};
mxAbstractCanvas2D.prototype.rotatePoint = function (a, b, c, d, e) {
    c = c * (Math.PI / 180);
    return mxUtils.getRotatedPoint(new mxPoint(a, b), Math.cos(c), Math.sin(c), new mxPoint(d, e))
};
mxAbstractCanvas2D.prototype.save = function () {
    this.states.push(this.state);
    this.state = mxUtils.clone(this.state)
};
mxAbstractCanvas2D.prototype.restore = function () {
    this.state = this.states.pop()
};
mxAbstractCanvas2D.prototype.scale = function (a) {
    this.state.scale = this.state.scale * a;
    this.state.strokeWidth = this.state.strokeWidth * a
};
mxAbstractCanvas2D.prototype.translate = function (a, b) {
    this.state.dx = this.state.dx + a;
    this.state.dy = this.state.dy + b
};
mxAbstractCanvas2D.prototype.setAlpha = function (a) {
    this.state.alpha = a
};
mxAbstractCanvas2D.prototype.setFillColor = function (a) {
    a == mxConstants.NONE && (a = null);
    this.state.fillColor = a;
    this.state.gradientColor = null
};
mxAbstractCanvas2D.prototype.setGradient = function (a, b, c, d, e, f, g, h, k) {
    c = this.state;
    c.fillColor = a;
    c.fillAlpha = h != null ? h : 1;
    c.gradientColor = b;
    c.gradientAlpha = k != null ? k : 1;
    c.gradientDirection = g
};
mxAbstractCanvas2D.prototype.setStrokeColor = function (a) {
    a == mxConstants.NONE && (a = null);
    this.state.strokeColor = a
};
mxAbstractCanvas2D.prototype.setStrokeWidth = function (a) {
    this.state.strokeWidth = a
};
mxAbstractCanvas2D.prototype.setDashed = function (a) {
    this.state.dashed = a
};
mxAbstractCanvas2D.prototype.setDashPattern = function (a) {
    this.state.dashPattern = a
};
mxAbstractCanvas2D.prototype.setLineCap = function (a) {
    this.state.lineCap = a
};
mxAbstractCanvas2D.prototype.setLineJoin = function (a) {
    this.state.lineJoin = a
};
mxAbstractCanvas2D.prototype.setMiterLimit = function (a) {
    this.state.miterLimit = a
};
mxAbstractCanvas2D.prototype.setFontColor = function (a) {
    a == mxConstants.NONE && (a = null);
    this.state.fontColor = a
};
mxAbstractCanvas2D.prototype.setFontBackgroundColor = function (a) {
    a == mxConstants.NONE && (a = null);
    this.state.fontBackgroundColor = a
};
mxAbstractCanvas2D.prototype.setFontBorderColor = function (a) {
    a == mxConstants.NONE && (a = null);
    this.state.fontBorderColor = a
};
mxAbstractCanvas2D.prototype.setFontSize = function (a) {
    this.state.fontSize = a
};
mxAbstractCanvas2D.prototype.setFontFamily = function (a) {
    this.state.fontFamily = a
};
mxAbstractCanvas2D.prototype.setFontStyle = function (a) {
    a == null && (a = 0);
    this.state.fontStyle = a
};
mxAbstractCanvas2D.prototype.setShadow = function (a) {
    this.state.shadow = a
};
mxAbstractCanvas2D.prototype.setShadowColor = function (a) {
    a == mxConstants.NONE && (a = null);
    this.state.shadowColor = a
};
mxAbstractCanvas2D.prototype.setShadowAlpha = function (a) {
    this.state.shadowAlpha = a
};
mxAbstractCanvas2D.prototype.setShadowOffset = function (a, b) {
    this.state.shadowDx = a;
    this.state.shadowDy = b
};
mxAbstractCanvas2D.prototype.begin = function () {
    this.lastY = this.lastX = 0;
    this.path = []
};
mxAbstractCanvas2D.prototype.moveTo = function (a, b) {
    this.addOp(this.moveOp, a, b)
};
mxAbstractCanvas2D.prototype.lineTo = function (a, b) {
    this.addOp(this.lineOp, a, b)
};
mxAbstractCanvas2D.prototype.quadTo = function (a, b, c, d) {
    this.addOp(this.quadOp, a, b, c, d)
};
mxAbstractCanvas2D.prototype.curveTo = function (a, b, c, d, e, f) {
    this.addOp(this.curveOp, a, b, c, d, e, f)
};
mxAbstractCanvas2D.prototype.arcTo = function (a, b, c, d, e, f, g) {
    a = mxUtils.arcToCurves(this.lastX, this.lastY, a, b, c, d, e, f, g);
    for (b = 0; b < a.length; b = b + 6)this.curveTo(a[b], a[b + 1], a[b + 2], a[b + 3], a[b + 4], a[b + 5])
};
mxAbstractCanvas2D.prototype.close = function () {
    this.addOp(this.closeOp)
};
mxAbstractCanvas2D.prototype.end = function () {
};
function mxSvgCanvas2D(a, b) {
    mxAbstractCanvas2D.call(this);
    this.root = a;
    this.gradients = [];
    this.defs = null;
    this.styleEnabled = b != null ? b : false;
    var c = null;
    if (a.ownerDocument != document)for (c = a; c != null && c.nodeName != "svg";)c = c.parentNode;
    if (c != null) {
        if (c.getElementsByTagName("defs").length > 0)this.defs = c.getElementsByTagName("defs")[0];
        if (this.defs == null) {
            this.defs = this.createElement("defs");
            c.firstChild != null ? c.insertBefore(this.defs, c.firstChild) : c.appendChild(this.defs)
        }
        this.styleEnabled && this.defs.appendChild(this.createStyle())
    }
}
mxUtils.extend(mxSvgCanvas2D, mxAbstractCanvas2D);
mxSvgCanvas2D.prototype.node = null;
mxSvgCanvas2D.prototype.matchHtmlAlignment = true;
mxSvgCanvas2D.prototype.textEnabled = true;
mxSvgCanvas2D.prototype.foEnabled = true;
mxSvgCanvas2D.prototype.strokeTolerance = 0;
mxSvgCanvas2D.prototype.refCount = 0;
mxSvgCanvas2D.prototype.blockImagePointerEvents = false;
mxSvgCanvas2D.prototype.reset = function () {
    mxAbstractCanvas2D.prototype.reset.apply(this, arguments);
    this.gradients = []
};
mxSvgCanvas2D.prototype.createStyle = function () {
    var a = this.createElement("style");
    a.setAttribute("type", "text/css");
    mxUtils.write(a, "svg{font-family:" + mxConstants.DEFAULT_FONTFAMILY + ";font-size:" + mxConstants.DEFAULT_FONTSIZE + ";fill:none;stroke-miterlimit:10}");
    return a
};
mxSvgCanvas2D.prototype.createElement = function (a, b) {
    if (this.root.ownerDocument.createElementNS != null)return this.root.ownerDocument.createElementNS(b || mxConstants.NS_SVG, a);
    var c = this.root.ownerDocument.createElement(a);
    b != null && c.setAttribute("xmlns", b);
    return c
};
mxSvgCanvas2D.prototype.createGradientId = function (a, b, c, d, e) {
    a.charAt(0) == "#" && (a = a.substring(1));
    b.charAt(0) == "#" && (b = b.substring(1));
    a = a.toLowerCase() + "-" + c;
    b = b.toLowerCase() + "-" + d;
    c = null;
    if (e == null || e == mxConstants.DIRECTION_SOUTH)c = "s"; else if (e == mxConstants.DIRECTION_EAST)c = "e"; else {
        d = a;
        a = b;
        b = d;
        e == mxConstants.DIRECTION_NORTH ? c = "s" : e == mxConstants.DIRECTION_WEST && (c = "e")
    }
    return"mx-gradient-" + a + "-" + b + "-" + c
};
mxSvgCanvas2D.prototype.getSvgGradient = function (a, b, c, d, e) {
    var f = this.createGradientId(a, b, c, d, e), g = this.gradients[f];
    if (g == null) {
        var h = this.root.ownerSVGElement, k = 0, i = f + "-" + k;
        if (h != null)for (g = h.ownerDocument.getElementById(i); g != null && g.ownerSVGElement != h;) {
            i = f + "-" + k++;
            g = h.ownerDocument.getElementById(i)
        } else i = "id" + ++this.refCount;
        if (g == null) {
            g = this.createSvgGradient(a, b, c, d, e);
            g.setAttribute("id", i);
            this.defs != null ? this.defs.appendChild(g) : h.appendChild(g)
        }
        this.gradients[f] = g
    }
    return g.getAttribute("id")
};
mxSvgCanvas2D.prototype.createSvgGradient = function (a, b, c, d, e) {
    var f = this.createElement("linearGradient");
    f.setAttribute("x1", "0%");
    f.setAttribute("y1", "0%");
    f.setAttribute("x2", "0%");
    f.setAttribute("y2", "0%");
    e == null || e == mxConstants.DIRECTION_SOUTH ? f.setAttribute("y2", "100%") : e == mxConstants.DIRECTION_EAST ? f.setAttribute("x2", "100%") : e == mxConstants.DIRECTION_NORTH ? f.setAttribute("y1", "100%") : e == mxConstants.DIRECTION_WEST && f.setAttribute("x1", "100%");
    c = c < 1 ? ";stop-opacity:" + c : "";
    e = this.createElement("stop");
    e.setAttribute("offset", "0%");
    e.setAttribute("style", "stop-color:" + a + c);
    f.appendChild(e);
    c = d < 1 ? ";stop-opacity:" + d : "";
    e = this.createElement("stop");
    e.setAttribute("offset", "100%");
    e.setAttribute("style", "stop-color:" + b + c);
    f.appendChild(e);
    return f
};
mxSvgCanvas2D.prototype.addNode = function (a, b) {
    var c = this.node, d = this.state;
    if (c != null) {
        if (c.nodeName == "path")if (this.path != null && this.path.length > 0)c.setAttribute("d", this.path.join(" ")); else return;
        if (a && d.fillColor != null)this.updateFill(); else if (!this.styleEnabled) {
            c.nodeName == "ellipse" && mxClient.IS_NS && !mxClient.IS_GC && !mxClient.IS_SF ? c.setAttribute("fill", "transparent") : c.setAttribute("fill", "none");
            a = false
        }
        b && d.strokeColor != null ? this.updateStroke() : this.styleEnabled || c.setAttribute("stroke",
            "none");
        d.transform != null && d.transform.length > 0 && c.setAttribute("transform", d.transform);
        d.shadow && this.root.appendChild(this.createShadow(c));
        this.strokeTolerance > 0 && !a && this.root.appendChild(this.createTolerance(c));
        this.pointerEvents && (c.nodeName != "path" || this.path[this.path.length - 1] == this.closeOp) && c.setAttribute("pointer-events", "all");
        this.root.appendChild(c)
    }
};
mxSvgCanvas2D.prototype.updateFill = function () {
    var a = this.state;
    a.alpha < 1 && this.node.setAttribute("fill-opacity", a.alpha);
    a.fillColor != null && (a.gradientColor != null ? this.node.setAttribute("fill", "url(#" + this.getSvgGradient(a.fillColor, a.gradientColor, a.fillAlpha, a.gradientAlpha, a.gradientDirection) + ")") : this.node.setAttribute("fill", a.fillColor.toLowerCase()))
};
mxSvgCanvas2D.prototype.updateStroke = function () {
    var a = this.state;
    this.node.setAttribute("stroke", a.strokeColor.toLowerCase());
    a.alpha < 1 && this.node.setAttribute("stroke-opacity", a.alpha);
    var b = Math.max(1, this.format(a.strokeWidth * a.scale));
    b != 1 && this.node.setAttribute("stroke-width", b);
    this.node.nodeName == "path" && this.updateStrokeAttributes();
    a.dashed && this.node.setAttribute("stroke-dasharray", this.createDashPattern(b))
};
mxSvgCanvas2D.prototype.updateStrokeAttributes = function () {
    var a = this.state;
    a.lineJoin != null && a.lineJoin != "miter" && this.node.setAttribute("stroke-linejoin", a.lineJoin);
    if (a.lineCap != null) {
        var b = a.lineCap;
        b == "flat" && (b = "butt");
        b != "butt" && this.node.setAttribute("stroke-linecap", b)
    }
    a.miterLimit != null && (!this.styleEnabled || a.miterLimit != 10) && this.node.setAttribute("stroke-miterlimit", a.miterLimit)
};
mxSvgCanvas2D.prototype.createDashPattern = function (a) {
    var b = this.state.dashPattern.split(" "), c = [];
    if (b.length > 0)for (var d = 0; d < b.length; d++)c[d] = Number(b[d]) * a;
    return c.join(" ")
};
mxSvgCanvas2D.prototype.createTolerance = function (a) {
    var a = a.cloneNode(true), b = parseFloat(a.getAttribute("stroke-width") || 1) + this.strokeTolerance;
    a.setAttribute("pointer-events", "stroke");
    a.setAttribute("visibility", "hidden");
    a.removeAttribute("stroke-dasharray");
    a.setAttribute("stroke-width", b);
    a.setAttribute("fill", "none");
    a.setAttribute("stroke", mxClient.IS_OP ? "none" : "white");
    return a
};
mxSvgCanvas2D.prototype.createShadow = function (a) {
    var a = a.cloneNode(true), b = this.state;
    a.getAttribute("fill") != "none" && a.setAttribute("fill", b.shadowColor);
    a.getAttribute("stroke") != "none" && a.setAttribute("stroke", b.shadowColor);
    a.setAttribute("transform", "translate(" + this.format(b.shadowDx * b.scale) + "," + this.format(b.shadowDy * b.scale) + ")" + (b.transform || ""));
    a.setAttribute("opacity", b.shadowAlpha);
    return a
};
mxSvgCanvas2D.prototype.rotate = function (a, b, c, d, e) {
    if (a != 0 || b || c) {
        var f = this.state, d = d + f.dx, e = e + f.dy, d = d * f.scale, e = e * f.scale;
        f.transform = f.transform || "";
        if (b && c)a = a + 180; else if (b ^ c) {
            var g = b ? d : 0, h = b ? -1 : 1, k = c ? e : 0, i = c ? -1 : 1;
            f.transform = f.transform + ("translate(" + this.format(g) + "," + this.format(k) + ")scale(" + this.format(h) + "," + this.format(i) + ")translate(" + this.format(-g) + "," + this.format(-k) + ")")
        }
        if (b ? !c : c)a = a * -1;
        if (a != 0)f.transform = f.transform + ("rotate(" + this.format(a) + "," + this.format(d) + "," + this.format(e) +
            ")");
        f.rotation = f.rotation + a;
        f.rotationCx = d;
        f.rotationCy = e
    }
};
mxSvgCanvas2D.prototype.begin = function () {
    mxAbstractCanvas2D.prototype.begin.apply(this, arguments);
    this.node = this.createElement("path")
};
mxSvgCanvas2D.prototype.rect = function (a, b, c, d) {
    var e = this.state, f = this.createElement("rect");
    f.setAttribute("x", this.format((a + e.dx) * e.scale));
    f.setAttribute("y", this.format((b + e.dy) * e.scale));
    f.setAttribute("width", this.format(c * e.scale));
    f.setAttribute("height", this.format(d * e.scale));
    this.node = f
};
mxSvgCanvas2D.prototype.roundrect = function (a, b, c, d, e, f) {
    this.rect(a, b, c, d);
    e > 0 && this.node.setAttribute("rx", this.format(e * this.state.scale));
    f > 0 && this.node.setAttribute("ry", this.format(f * this.state.scale))
};
mxSvgCanvas2D.prototype.ellipse = function (a, b, c, d) {
    var e = this.state, f = this.createElement("ellipse");
    f.setAttribute("cx", Math.round((a + c / 2 + e.dx) * e.scale));
    f.setAttribute("cy", Math.round((b + d / 2 + e.dy) * e.scale));
    f.setAttribute("rx", c / 2 * e.scale);
    f.setAttribute("ry", d / 2 * e.scale);
    this.node = f
};
mxSvgCanvas2D.prototype.image = function (a, b, c, d, e, f, g, h) {
    var e = this.converter.convert(e), f = f != null ? f : true, g = g != null ? g : false, h = h != null ? h : false, k = this.state, a = a + k.dx, b = b + k.dy, i = this.createElement("image");
    i.setAttribute("x", this.format(a * k.scale));
    i.setAttribute("y", this.format(b * k.scale));
    i.setAttribute("width", this.format(c * k.scale));
    i.setAttribute("height", this.format(d * k.scale));
    i.setAttributeNS == null ? i.setAttribute("xlink:href", e) : i.setAttributeNS(mxConstants.NS_XLINK, "href", e);
    f || i.setAttribute("preserveAspectRatio",
        "none");
    k.alpha < 1 && i.setAttribute("opacity", k.alpha);
    e = this.state.transform || "";
    if (g || h) {
        var l = f = 1, n = 0, m = 0;
        if (g) {
            f = -1;
            n = -c - 2 * a
        }
        if (h) {
            l = -1;
            m = -d - 2 * b
        }
        e = e + ("scale(" + f + "," + l + ")translate(" + n + "," + m + ")")
    }
    e.length > 0 && i.setAttribute("transform", e);
    this.root.appendChild(i);
    if (this.blockImagePointerEvents) {
        i.setAttribute("style", "pointer-events:none");
        i = this.createElement("rect");
        i.setAttribute("visibility", "hidden");
        i.setAttribute("pointer-events", "fill");
        i.setAttribute("x", this.format(a * k.scale));
        i.setAttribute("y",
            this.format(b * k.scale));
        i.setAttribute("width", this.format(c * k.scale));
        i.setAttribute("height", this.format(d * k.scale));
        this.root.appendChild(i)
    }
};
mxSvgCanvas2D.prototype.createDiv = function (a, b, c, d, e) {
    c = this.state;
    d = "display:inline-block;font-size:" + Math.round(c.fontSize) + "px;font-family:" + c.fontFamily + ";color:" + c.fontColor + ";line-height:" + Math.round(c.fontSize * mxConstants.LINE_HEIGHT) + "px;" + d;
    (c.fontStyle & mxConstants.FONT_BOLD) == mxConstants.FONT_BOLD && (d = d + "font-weight:bold;");
    (c.fontStyle & mxConstants.FONT_ITALIC) == mxConstants.FONT_ITALIC && (d = d + "font-style:italic;");
    (c.fontStyle & mxConstants.FONT_UNDERLINE) == mxConstants.FONT_UNDERLINE && (d = d +
        "font-decoration:underline;");
    b == mxConstants.ALIGN_CENTER ? d = d + "text-align:center;" : b == mxConstants.ALIGN_RIGHT && (d = d + "text-align:right;");
    b = "";
    c.fontBackgroundColor != null && (b = b + ("background-color:" + c.fontBackgroundColor + ";"));
    c.fontBorderColor != null && (b = b + ("border:1px solid " + c.fontBorderColor + ";"));
    if (!mxUtils.isNode(a)) {
        c = document.createElement("textarea");
        c.innerHTML = a.replace(/&lt;/g, "&amp;lt;").replace(/&gt;/g, "&amp;gt;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        a = c.value;
        e ? d = d + b : b.length > 0 &&
            (a = '<div xmlns="http://www.w3.org/1999/xhtml" style="display:inline-block;' + b + '">' + a + "</div>")
    }
    if (!mxClient.IS_IE && document.createElementNS) {
        e = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
        e.setAttribute("style", d);
        mxUtils.isNode(a) ? this.root.ownerDocument != document ? e.appendChild(a.cloneNode(true)) : e.appendChild(a) : e.innerHTML = a;
        return e
    }
    if (mxUtils.isNode(a) && this.root.ownerDocument != document)a = a.outerHTML;
    a = a.replace(/<br>/g, "<br />").replace(/<hr>/g, "<hr />");
    return mxUtils.parseXml('<div xmlns="http://www.w3.org/1999/xhtml" style="' +
        d + '">' + a + "</div>").documentElement
};
mxSvgCanvas2D.prototype.text = function (a, b, c, d, e, f, g, h, k, i, l, n) {
    if (this.textEnabled && e != null) {
        var n = n != null ? n : 0, m = this.state, a = a + m.dx, b = b + m.dy;
        if (this.foEnabled && k == "html") {
            var o = "vertical-align:top;";
            if (l) {
                o = o + "overflow:hidden;";
                d > 0 && (o = o + ("max-height:" + Math.round(d) + "px;"));
                c > 0 && (o = o + ("width:" + Math.round(c) + "px;"))
            } else if (i) {
                o = o + ("width:" + Math.round(c) + "px;");
                d > 0 && (o = o + ("max-height:" + Math.round(d) + "px;"))
            }
            if (h) {
                !l && c > 0 && (o = o + ("width:" + Math.round(c) + "px;"));
                o = o + "white-space:normal;"
            } else o = o + "white-space:nowrap;";
            h = this.createElement("g");
            m.alpha < 1 && h.setAttribute("opacity", m.alpha);
            k = this.createElement("foreignObject");
            k.setAttribute("pointer-events", "all");
            o = this.createDiv(e, f, g, o, i);
            if (o != null) {
                h.appendChild(k);
                this.root.appendChild(h);
                var q = 0;
                if (mxClient.IS_IE && !mxClient.IS_SVG) {
                    var p = document.createElement("div");
                    p.style.cssText = o.getAttribute("style");
                    p.style.display = mxClient.IS_QUIRKS ? "inline" : "inline-block";
                    p.style.visibility = "hidden";
                    p.innerHTML = mxUtils.isNode(e) ? e.outerHTML : e;
                    document.body.appendChild(p);
                    q = p.offsetWidth;
                    d = mxClient.IS_QUIRKS && d > 0 && l ? Math.min(d, p.offsetHeight + 2) : p.offsetHeight;
                    p.parentNode.removeChild(p);
                    k.appendChild(o)
                } else if (this.root.ownerDocument != document) {
                    o.style.visibility = "hidden";
                    document.body.appendChild(o);
                    q = o.offsetWidth;
                    d = o.offsetHeight;
                    k.appendChild(o);
                    o.style.visibility = ""
                } else {
                    k.appendChild(o);
                    q = o.offsetWidth;
                    d = o.offsetHeight
                }
                c = i ? Math.max(c, q) : q;
                m.alpha < 1 && h.setAttribute("opacity", m.alpha);
                i = e = 0;
                f == mxConstants.ALIGN_CENTER ? e = e - c / 2 : f == mxConstants.ALIGN_RIGHT && (e = e -
                    c);
                a = a + e;
                g == mxConstants.ALIGN_MIDDLE ? i = i - d / 2 : g == mxConstants.ALIGN_BOTTOM && (i = i - d);
                b = b + i;
                f = m.scale != 1 ? "scale(" + m.scale + ")" : "";
                if (m.rotation != 0 && this.rotateHtml) {
                    f = f + ("rotate(" + m.rotation + "," + c / 2 + "," + d / 2 + ")");
                    b = this.rotatePoint((a + c / 2) * m.scale, (b + d / 2) * m.scale, m.rotation, m.rotationCx, m.rotationCy);
                    a = b.x - c * m.scale / 2;
                    b = b.y - d * m.scale / 2
                } else {
                    a = a * m.scale;
                    b = b * m.scale
                }
                n != 0 && (f = f + ("rotate(" + n + "," + -e + "," + -i + ")"));
                h.setAttribute("transform", "translate(" + Math.round(a) + "," + Math.round(b) + ")" + f);
                k.setAttribute("width",
                    Math.round(Math.max(1, c)));
                k.setAttribute("height", Math.round(Math.max(1, d)))
            }
        } else this.plainText(a, b, c, d, e, f, g, h, i, l, n)
    }
};
mxSvgCanvas2D.prototype.createClip = function (a, b, c, d) {
    for (var a = Math.round(a), b = Math.round(b), c = Math.round(c), d = Math.round(d), e = "mx-clip-" + a + "-" + b + "-" + c + "-" + d, f = 0, g = e + "-" + f; document.getElementById(g) != null;)g = e + "-" + ++f;
    clip = this.createElement("clipPath");
    clip.setAttribute("id", g);
    e = this.createElement("rect");
    e.setAttribute("x", a);
    e.setAttribute("y", b);
    e.setAttribute("width", c);
    e.setAttribute("height", d);
    clip.appendChild(e);
    return clip
};
mxSvgCanvas2D.prototype.plainText = function (a, b, c, d, e, f, g, h, k, i, l) {
    var l = l != null ? l : 0, h = this.state, n = Math.round(h.fontSize), m = this.createElement("g"), o = h.transform || "";
    l != 0 && (o = o + ("rotate(" + l + "," + this.format(a * h.scale) + "," + this.format(b * h.scale) + ")"));
    if (i && c > 0 && d > 0) {
        var q = a, l = b;
        f == mxConstants.ALIGN_CENTER ? q = q - c / 2 : f == mxConstants.ALIGN_RIGHT && (q = q - c);
        g == mxConstants.ALIGN_MIDDLE ? l = l - d / 2 : g == mxConstants.ALIGN_BOTTOM && (l = l - d);
        l = this.createClip(q * h.scale - 2, l * h.scale - 2, c * h.scale + 4, d * h.scale + 4);
        this.defs !=
            null ? this.defs.appendChild(l) : this.root.appendChild(l);
        m.setAttribute("clip-path", "url(#" + l.getAttribute("id") + ")")
    }
    this.updateFont(m, f);
    l = f == mxConstants.ALIGN_RIGHT ? "end" : f == mxConstants.ALIGN_CENTER ? "middle" : "start";
    l != "start" && m.setAttribute("text-anchor", l);
    (!this.styleEnabled || n != mxConstants.DEFAULT_FONTSIZE) && m.setAttribute("font-size", Math.round(n * h.scale) + "px");
    o.length > 0 && m.setAttribute("transform", o);
    h.alpha < 1 && m.setAttribute("opacity", h.alpha);
    var o = e.split("\n"), q = Math.round(n * mxConstants.LINE_HEIGHT),
        p = n + (o.length - 1) * q, l = b + n - 1;
    if (g == mxConstants.ALIGN_MIDDLE) {
        d = (this.matchHtmlAlignment && i && d > 0 ? Math.min(p, d) : p) / 2;
        l = l - (d + 1)
    } else if (g == mxConstants.ALIGN_BOTTOM) {
        d = this.matchHtmlAlignment && i && d > 0 ? Math.min(p, d) : p;
        l = l - (d + 2)
    }
    for (d = 0; d < o.length; d++) {
        if (o[d].length > 0 && mxUtils.trim(o[d]).length > 0) {
            i = this.createElement("text");
            i.setAttribute("x", this.format(a * h.scale));
            i.setAttribute("y", this.format(l * h.scale));
            mxUtils.write(i, o[d]);
            m.appendChild(i)
        }
        l = l + q
    }
    this.root.appendChild(m);
    this.addTextBackground(m,
        e, a, b, c, p, f, g, k)
};
mxSvgCanvas2D.prototype.updateFont = function (a) {
    var b = this.state;
    a.setAttribute("fill", b.fontColor);
    (!this.styleEnabled || b.fontFamily != mxConstants.DEFAULT_FONTFAMILY) && a.setAttribute("font-family", b.fontFamily);
    (b.fontStyle & mxConstants.FONT_BOLD) == mxConstants.FONT_BOLD && a.setAttribute("font-weight", "bold");
    (b.fontStyle & mxConstants.FONT_ITALIC) == mxConstants.FONT_ITALIC && a.setAttribute("font-style", "italic");
    (b.fontStyle & mxConstants.FONT_UNDERLINE) == mxConstants.FONT_UNDERLINE && a.setAttribute("text-decoration", "underline")
};
mxSvgCanvas2D.prototype.addTextBackground = function (a, b, c, d, e, f, g, h, k) {
    var i = this.state;
    if (i.fontBackgroundColor != null || i.fontBorderColor != null) {
        var l = null;
        if (k) {
            g == mxConstants.ALIGN_CENTER ? c = c - e / 2 : g == mxConstants.ALIGN_RIGHT && (c = c - e);
            h == mxConstants.ALIGN_MIDDLE ? d = d - f / 2 : h == mxConstants.ALIGN_BOTTOM && (d = d - f);
            l = new mxRectangle((c + 1) * i.scale, d * i.scale, (e - 2) * i.scale, (f + 2) * i.scale)
        } else if (a.getBBox != null && this.root.ownerDocument == document) {
            l = a.getBBox();
            b = mxClient.IS_IE && mxClient.IS_SVG;
            l = new mxRectangle(l.x,
                l.y + (b ? 0 : 1), l.width, l.height + (b ? 1 : 0))
        } else {
            l = document.createElement("div");
            l.style.lineHeight = Math.round(i.fontSize * mxConstants.LINE_HEIGHT) + "px";
            l.style.fontSize = Math.round(i.fontSize) + "px";
            l.style.fontFamily = i.fontFamily;
            l.style.whiteSpace = "nowrap";
            l.style.position = "absolute";
            l.style.visibility = "hidden";
            l.style.display = mxClient.IS_QUIRKS ? "inline" : "inline-block";
            l.style.zoom = "1";
            if ((i.fontStyle & mxConstants.FONT_BOLD) == mxConstants.FONT_BOLD)l.style.fontWeight = "bold";
            if ((i.fontStyle & mxConstants.FONT_ITALIC) ==
                mxConstants.FONT_ITALIC)l.style.fontStyle = "italic";
            b = mxUtils.htmlEntities(b, false);
            l.innerHTML = b.replace(/\n/g, "<br/>");
            document.body.appendChild(l);
            e = l.offsetWidth;
            f = l.offsetHeight;
            l.parentNode.removeChild(l);
            g == mxConstants.ALIGN_CENTER ? c = c - e / 2 : g == mxConstants.ALIGN_RIGHT && (c = c - e);
            h == mxConstants.ALIGN_MIDDLE ? d = d - f / 2 : h == mxConstants.ALIGN_BOTTOM && (d = d - f);
            l = new mxRectangle((c + 1) * i.scale, (d + 2) * i.scale, e * i.scale, (f + 1) * i.scale)
        }
        if (l != null) {
            b = this.createElement("rect");
            b.setAttribute("fill", i.fontBackgroundColor ||
                "none");
            b.setAttribute("stroke", i.fontBorderColor || "none");
            b.setAttribute("x", Math.floor(l.x - 1));
            b.setAttribute("y", Math.floor(l.y - 1));
            b.setAttribute("width", Math.ceil(l.width + 2));
            b.setAttribute("height", Math.ceil(l.height));
            i = i.fontBorderColor != null ? Math.max(1, this.format(i.scale)) : 0;
            b.setAttribute("stroke-width", i);
            this.root.ownerDocument == document && mxUtils.mod(i, 2) == 1 && b.setAttribute("transform", "translate(0.5, 0.5)");
            a.insertBefore(b, a.firstChild)
        }
    }
};
mxSvgCanvas2D.prototype.stroke = function () {
    this.addNode(false, true)
};
mxSvgCanvas2D.prototype.fill = function () {
    this.addNode(true, false)
};
mxSvgCanvas2D.prototype.fillAndStroke = function () {
    this.addNode(true, true)
};
var mxVmlCanvas2D = function (a) {
    mxAbstractCanvas2D.call(this);
    this.root = a
};
mxUtils.extend(mxVmlCanvas2D, mxAbstractCanvas2D);
mxVmlCanvas2D.prototype.node = null;
mxVmlCanvas2D.prototype.textEnabled = true;
mxVmlCanvas2D.prototype.moveOp = "m";
mxVmlCanvas2D.prototype.lineOp = "l";
mxVmlCanvas2D.prototype.curveOp = "c";
mxVmlCanvas2D.prototype.closeOp = "x e";
mxVmlCanvas2D.prototype.rotatedHtmlBackground = "";
mxVmlCanvas2D.prototype.vmlScale = 1;
mxVmlCanvas2D.prototype.addNode = function (a, b) {
    var c = this.node, d = this.state;
    if (c != null) {
        if (c.nodeName == "shape")if (this.path != null && this.path.length > 0) {
            c.path = this.path.join(" ");
            c.style.width = this.root.style.width;
            c.style.height = this.root.style.height;
            c.coordsize = parseInt(c.style.width) + " " + parseInt(c.style.height)
        } else return;
        c.strokeweight = this.format(Math.max(1, d.strokeWidth * d.scale / this.vmlScale)) + "px";
        d.shadow && this.root.appendChild(this.createShadow(c, a && d.fillColor != null, b && d.strokeColor != null));
        if (b && d.strokeColor != null) {
            c.stroked = "true";
            c.strokecolor = d.strokeColor
        } else c.stroked = "false";
        c.appendChild(this.createStroke());
        a && d.fillColor != null ? c.appendChild(this.createFill()) : this.pointerEvents && (c.nodeName != "shape" || this.path[this.path.length - 1] == this.closeOp) ? c.appendChild(this.createTransparentFill()) : c.filled = "false";
        this.root.appendChild(c)
    }
};
mxVmlCanvas2D.prototype.createTransparentFill = function () {
    var a = document.createElement(mxClient.VML_PREFIX + ":fill");
    a.src = mxClient.imageBasePath + "/transparent.gif";
    a.type = "tile";
    return a
};
mxVmlCanvas2D.prototype.createFill = function () {
    var a = this.state, b = document.createElement(mxClient.VML_PREFIX + ":fill");
    b.color = a.fillColor;
    if (a.gradientColor != null) {
        b.type = "gradient";
        b.method = "none";
        b.color2 = a.gradientColor;
        var c = 180 - a.rotation, c = a.gradientDirection == mxConstants.DIRECTION_WEST ? c - (90 + (this.root.style.flip == "x" ? 180 : 0)) : a.gradientDirection == mxConstants.DIRECTION_EAST ? c + (90 + (this.root.style.flip == "x" ? 180 : 0)) : a.gradientDirection == mxConstants.DIRECTION_NORTH ? c - (180 + (this.root.style.flip ==
            "y" ? -180 : 0)) : c + (this.root.style.flip == "y" ? -180 : 0);
        if (this.root.style.flip == "x" || this.root.style.flip == "y")c = c * -1;
        b.angle = mxUtils.mod(c, 360);
        b.opacity = a.alpha * a.fillAlpha * 100 + "%";
        b.setAttribute(mxClient.OFFICE_PREFIX + ":opacity2", a.alpha * a.gradientAlpha * 100 + "%")
    } else if (a.alpha < 1)b.opacity = a.alpha * 100 + "%";
    return b
};
mxVmlCanvas2D.prototype.createStroke = function () {
    var a = this.state, b = document.createElement(mxClient.VML_PREFIX + ":stroke");
    b.endcap = a.lineCap || "flat";
    b.joinstyle = a.lineJoin || "miter";
    b.miterlimit = a.miterLimit || "10";
    if (a.alpha < 1)b.opacity = a.alpha * 100 + "%";
    if (a.dashed)b.dashstyle = this.getVmlDashStyle();
    return b
};
mxVmlCanvas2D.prototype.getVmlDashStyle = function () {
    var a = "dash";
    if (this.state.dashPattern != null) {
        var b = this.state.dashPattern.split(" ");
        b.length > 0 && b[0] == 1 && (a = "0 2")
    }
    return a
};
mxVmlCanvas2D.prototype.createShadow = function (a, b, c) {
    var d = this.state, e = -d.rotation * (Math.PI / 180), f = Math.cos(e), e = Math.sin(e), g = d.shadowDx * d.scale, h = d.shadowDy * d.scale;
    this.root.style.flip == "x" ? g = g * -1 : this.root.style.flip == "y" && (h = h * -1);
    var k = a.cloneNode(true);
    k.style.marginLeft = Math.round(g * f - h * e) + "px";
    k.style.marginTop = Math.round(g * e + h * f) + "px";
    if (document.documentMode == 8) {
        k.strokeweight = a.strokeweight;
        if (a.nodeName == "shape") {
            k.path = this.path.join(" ");
            k.style.width = this.root.style.width;
            k.style.height =
                this.root.style.height;
            k.coordsize = parseInt(a.style.width) + " " + parseInt(a.style.height)
        }
    }
    if (c) {
        k.strokecolor = d.shadowColor;
        k.appendChild(this.createShadowStroke())
    } else k.stroked = "false";
    b ? k.appendChild(this.createShadowFill()) : k.filled = "false";
    return k
};
mxVmlCanvas2D.prototype.createShadowFill = function () {
    var a = document.createElement(mxClient.VML_PREFIX + ":fill");
    a.color = this.state.shadowColor;
    a.opacity = this.state.alpha * this.state.shadowAlpha * 100 + "%";
    return a
};
mxVmlCanvas2D.prototype.createShadowStroke = function () {
    var a = this.createStroke();
    a.opacity = this.state.alpha * this.state.shadowAlpha * 100 + "%";
    return a
};
mxVmlCanvas2D.prototype.rotate = function (a, b, c, d, e) {
    if (b && c)a = a + 180; else if (b)this.root.style.flip = "x"; else if (c)this.root.style.flip = "y";
    if (b ? !c : c)a = a * -1;
    this.root.style.rotation = a;
    this.state.rotation = this.state.rotation + a;
    this.state.rotationCx = d;
    this.state.rotationCy = e
};
mxVmlCanvas2D.prototype.begin = function () {
    mxAbstractCanvas2D.prototype.begin.apply(this, arguments);
    this.node = document.createElement(mxClient.VML_PREFIX + ":shape");
    this.node.style.position = "absolute"
};
mxVmlCanvas2D.prototype.quadTo = function (a, b, c, d) {
    var e = this.state, f = (this.lastX + e.dx) * e.scale, g = (this.lastY + e.dy) * e.scale, a = (a + e.dx) * e.scale, b = (b + e.dy) * e.scale, c = (c + e.dx) * e.scale, d = (d + e.dy) * e.scale, g = g + 2 / 3 * (b - g), h = c + 2 / 3 * (a - c), b = d + 2 / 3 * (b - d);
    this.path.push("c " + this.format(f + 2 / 3 * (a - f)) + " " + this.format(g) + " " + this.format(h) + " " + this.format(b) + " " + this.format(c) + " " + this.format(d));
    this.lastX = c / e.scale - e.dx;
    this.lastY = d / e.scale - e.dy
};
mxVmlCanvas2D.prototype.createRect = function (a, b, c, d, e) {
    var f = this.state, a = document.createElement(a);
    a.style.position = "absolute";
    a.style.left = this.format((b + f.dx) * f.scale) + "px";
    a.style.top = this.format((c + f.dy) * f.scale) + "px";
    a.style.width = this.format(d * f.scale) + "px";
    a.style.height = this.format(e * f.scale) + "px";
    return a
};
mxVmlCanvas2D.prototype.rect = function (a, b, c, d) {
    this.node = this.createRect(mxClient.VML_PREFIX + ":rect", a, b, c, d)
};
mxVmlCanvas2D.prototype.roundrect = function (a, b, c, d, e, f) {
    this.node = this.createRect(mxClient.VML_PREFIX + ":roundrect", a, b, c, d);
    this.node.setAttribute("arcsize", Math.max(e * 100 / c, f * 100 / d) + "%")
};
mxVmlCanvas2D.prototype.ellipse = function (a, b, c, d) {
    this.node = this.createRect(mxClient.VML_PREFIX + ":oval", a, b, c, d)
};
mxVmlCanvas2D.prototype.image = function (a, b, c, d, e, f, g, h) {
    var k = null;
    if (f) {
        k = this.createRect(mxClient.VML_PREFIX + ":rect", a, b, c, d);
        k.stroked = "false";
        a = document.createElement(mxClient.VML_PREFIX + ":fill");
        a.aspect = f ? "atmost" : "ignore";
        a.rotate = "true";
        a.type = "frame";
        a.src = e;
        k.appendChild(a)
    } else {
        k = this.createRect(mxClient.VML_PREFIX + ":image", a, b, c, d);
        k.src = e
    }
    if (g && h)k.style.rotation = "180"; else if (g)k.style.flip = "x"; else if (h)k.style.flip = "y";
    if (this.state.alpha < 1)k.style.filter = k.style.filter + ("alpha(opacity=" +
        this.state.alpha * 100 + ")");
    this.root.appendChild(k)
};
mxVmlCanvas2D.prototype.createDiv = function (a, b, c, d) {
    var c = document.createElement("div"), e = this.state, f = "";
    e.fontBackgroundColor != null && (f = f + ("background-color:" + e.fontBackgroundColor + ";"));
    e.fontBorderColor != null && (f = f + ("border:1px solid " + e.fontBorderColor + ";"));
    if (mxUtils.isNode(a))c.appendChild(a); else if (f.length > 0 && !d) {
        d = document.createElement("div");
        d.style.cssText = f;
        d.style.display = mxClient.IS_QUIRKS ? "inline" : "inline-block";
        d.style.zoom = "1";
        d.innerHTML = a;
        c.appendChild(d)
    } else {
        c.style.cssText =
            f;
        c.innerHTML = a
    }
    a = c.style;
    a.fontSize = Math.round(e.fontSize / this.vmlScale) + "px";
    a.fontFamily = e.fontFamily;
    a.color = e.fontColor;
    a.verticalAlign = "top";
    a.textAlign = b || "left";
    a.lineHeight = Math.round(e.fontSize * mxConstants.LINE_HEIGHT / this.vmlScale) + "px";
    if ((e.fontStyle & mxConstants.FONT_BOLD) == mxConstants.FONT_BOLD)a.fontWeight = "bold";
    if ((e.fontStyle & mxConstants.FONT_ITALIC) == mxConstants.FONT_ITALIC)a.fontStyle = "italic";
    if ((e.fontStyle & mxConstants.FONT_UNDERLINE) == mxConstants.FONT_UNDERLINE)a.fontDecoration =
        "underline";
    return c
};
mxVmlCanvas2D.prototype.text = function (a, b, c, d, e, f, g, h, k, i, l, n) {
    if (this.textEnabled && e != null) {
        var m = this.state;
        if (k == "html") {
            if (m.rotation != null) {
                b = this.rotatePoint(a, b, m.rotation, m.rotationCx, m.rotationCy);
                a = b.x;
                b = b.y
            }
            if (document.documentMode == 8) {
                a = a + m.dx;
                b = b + m.dy
            } else {
                a = a * m.scale;
                b = b * m.scale
            }
            k = document.documentMode == 8 ? document.createElement(mxClient.VML_PREFIX + ":group") : document.createElement("div");
            k.style.position = "absolute";
            k.style.display = "inline";
            k.style.left = this.format(a) + "px";
            k.style.top =
                this.format(b) + "px";
            k.style.zoom = m.scale;
            var o = document.createElement("div");
            o.style.position = "relative";
            o.style.display = "inline";
            var q = mxUtils.getAlignmentAsPoint(f, g), p = q.x, q = q.y, e = this.createDiv(e, f, g, i), f = document.createElement("div");
            if (h) {
                if (!l && c > 0)e.style.width = Math.round(c) + "px";
                e.style.whiteSpace = "normal"
            } else e.style.whiteSpace = "nowrap";
            h = m.rotation + (n || 0);
            if (this.rotateHtml && h != 0) {
                f.style.display = "inline";
                f.style.zoom = "1";
                f.appendChild(e);
                if (document.documentMode == 8 && this.root.nodeName !=
                    "DIV") {
                    o.appendChild(f);
                    k.appendChild(o)
                } else k.appendChild(f)
            } else if (document.documentMode == 8) {
                o.appendChild(e);
                k.appendChild(o)
            } else {
                e.style.display = "inline";
                k.appendChild(e)
            }
            if (this.root.nodeName != "DIV") {
                n = document.createElement(mxClient.VML_PREFIX + ":rect");
                n.stroked = "false";
                n.filled = "false";
                n.appendChild(k);
                this.root.appendChild(n)
            } else this.root.appendChild(k);
            if (l) {
                e.style.overflow = "hidden";
                if (c > 0)e.style.width = Math.round(c) + "px";
                if (d > 0 && document.documentMode == 8)e.style.maxHeight = Math.round(d) +
                    "px"
            } else if (i) {
                e.style.width = c + "px";
                if (d > 0)e.style.maxHeight = Math.round(d) + "px"
            }
            if (this.rotateHtml && h != 0) {
                c = h * (Math.PI / 180);
                h = parseFloat(parseFloat(Math.cos(c)).toFixed(8));
                n = parseFloat(parseFloat(Math.sin(-c)).toFixed(8));
                c = c % (2 * Math.PI);
                c < 0 && (c = c + 2 * Math.PI);
                c = c % Math.PI;
                c > Math.PI / 2 && (c = Math.PI - c);
                var g = Math.cos(c), r = Math.sin(c);
                if (document.documentMode == 8) {
                    e.style.display = "inline-block";
                    f.style.display = "inline-block";
                    o.style.display = "inline-block"
                }
                e.style.visibility = "hidden";
                document.body.appendChild(e);
                c = e.offsetWidth;
                o = e.offsetHeight;
                if (mxClient.IS_QUIRKS && (l || i) && o > d) {
                    o = d;
                    e.style.height = o + "px"
                }
                d = o;
                l = (d - d * g + c * -r) / 2 - n * c * (p + 0.5) + h * d * (q + 0.5);
                i = (c - c * g + d * -r) / 2 + h * c * (p + 0.5) + n * d * (q + 0.5);
                if (k.nodeName == "group" && this.root.nodeName == "DIV") {
                    p = document.createElement("div");
                    p.style.display = "inline-block";
                    p.style.position = "absolute";
                    p.style.left = this.format(a + (i - c / 2) * m.scale) + "px";
                    p.style.top = this.format(b + (l - d / 2) * m.scale) + "px";
                    k.parentNode.appendChild(p);
                    p.appendChild(k)
                } else {
                    m = document.documentMode == 8 ? 1 : m.scale;
                    k.style.left = this.format(a + (i - c / 2) * m) + "px";
                    k.style.top = this.format(b + (l - d / 2) * m) + "px"
                }
                f.style.filter = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + n + ", M21=" + -n + ", M22=" + h + ", sizingMethod='auto expand')";
                f.style.backgroundColor = this.rotatedHtmlBackground;
                if (this.state.alpha < 1)f.style.filter = f.style.filter + ("alpha(opacity=" + this.state.alpha * 100 + ")");
                e.style.visibility = "";
                f.appendChild(e)
            } else if (document.documentMode != 8) {
                e.style.verticalAlign = "top";
                if (this.state.alpha < 1)k.style.filter =
                    "alpha(opacity=" + this.state.alpha * 100 + ")";
                m = e.parentNode;
                e.style.visibility = "hidden";
                document.body.appendChild(e);
                c = e.offsetWidth;
                o = e.offsetHeight;
                if (mxClient.IS_QUIRKS && l && o > d) {
                    o = d;
                    e.style.height = o + "px"
                }
                d = o;
                e.style.visibility = "";
                m.appendChild(e);
                k.style.left = this.format(a + c * p * this.state.scale) + "px";
                k.style.top = this.format(b + d * q * this.state.scale) + "px"
            } else {
                if (this.state.alpha < 1)e.style.filter = "alpha(opacity=" + this.state.alpha * 100 + ")";
                o.style.left = p * 100 + "%";
                o.style.top = q * 100 + "%"
            }
        } else this.plainText(a,
            b, c, d, mxUtils.htmlEntities(e, false), f, g, h, k, i, l, n)
    }
};
mxVmlCanvas2D.prototype.plainText = function (a, b, c, d, e, f, g, h, k, i, l, n) {
    d = this.state;
    a = (a + d.dx) * d.scale;
    b = (b + d.dy) * d.scale;
    c = document.createElement(mxClient.VML_PREFIX + ":shape");
    c.style.width = "1px";
    c.style.height = "1px";
    c.stroked = "false";
    i = document.createElement(mxClient.VML_PREFIX + ":fill");
    i.color = d.fontColor;
    i.opacity = d.alpha * 100 + "%";
    c.appendChild(i);
    i = document.createElement(mxClient.VML_PREFIX + ":path");
    i.textpathok = "true";
    i.v = "m " + this.format(0) + " " + this.format(0) + " l " + this.format(1) + " " + this.format(0);
    c.appendChild(i);
    i = document.createElement(mxClient.VML_PREFIX + ":textpath");
    i.style.cssText = "v-text-align:" + f;
    i.style.align = f;
    i.style.fontFamily = d.fontFamily;
    i.string = e;
    i.on = "true";
    f = Math.round(d.fontSize * d.scale / this.vmlScale);
    i.style.fontSize = f + "px";
    if ((d.fontStyle & mxConstants.FONT_BOLD) == mxConstants.FONT_BOLD)i.style.fontWeight = "bold";
    if ((d.fontStyle & mxConstants.FONT_ITALIC) == mxConstants.FONT_ITALIC)i.style.fontStyle = "italic";
    if ((d.fontStyle & mxConstants.FONT_UNDERLINE) == mxConstants.FONT_UNDERLINE)i.style.textDecoration =
        "underline";
    e = e.split("\n");
    d = f + (e.length - 1) * f * mxConstants.LINE_HEIGHT;
    f = e = 0;
    g == mxConstants.ALIGN_BOTTOM ? f = -d / 2 : g != mxConstants.ALIGN_MIDDLE && (f = d / 2);
    if (n != null) {
        c.style.rotation = n;
        g = n * (Math.PI / 180);
        e = Math.sin(g) * f;
        f = Math.cos(g) * f
    }
    c.appendChild(i);
    c.style.left = this.format(a - e) + "px";
    c.style.top = this.format(b + f) + "px";
    this.root.appendChild(c)
};
mxVmlCanvas2D.prototype.stroke = function () {
    this.addNode(false, true)
};
mxVmlCanvas2D.prototype.fill = function () {
    this.addNode(true, false)
};
mxVmlCanvas2D.prototype.fillAndStroke = function () {
    this.addNode(true, true)
};
function mxStencil(a) {
    this.desc = a;
    this.parseDescription();
    this.parseConstraints()
}
mxStencil.prototype.desc = null;
mxStencil.prototype.constraints = null;
mxStencil.prototype.aspect = null;
mxStencil.prototype.w0 = null;
mxStencil.prototype.h0 = null;
mxStencil.prototype.bgNode = null;
mxStencil.prototype.fgNode = null;
mxStencil.prototype.strokewidth = null;
mxStencil.prototype.parseDescription = function () {
    this.fgNode = this.desc.getElementsByTagName("foreground")[0];
    this.bgNode = this.desc.getElementsByTagName("background")[0];
    this.w0 = Number(this.desc.getAttribute("w") || 100);
    this.h0 = Number(this.desc.getAttribute("h") || 100);
    var a = this.desc.getAttribute("aspect");
    this.aspect = a != null ? a : "variable";
    a = this.desc.getAttribute("strokewidth");
    this.strokewidth = a != null ? a : "1"
};
mxStencil.prototype.parseConstraints = function () {
    var a = this.desc.getElementsByTagName("connections")[0];
    if (a != null) {
        a = mxUtils.getChildNodes(a);
        if (a != null && a.length > 0) {
            this.constraints = [];
            for (var b = 0; b < a.length; b++)this.constraints.push(this.parseConstraint(a[b]))
        }
    }
};
mxStencil.prototype.parseConstraint = function (a) {
    var b = Number(a.getAttribute("x")), c = Number(a.getAttribute("y")), a = a.getAttribute("perimeter") == "1";
    return new mxConnectionConstraint(new mxPoint(b, c), a)
};
mxStencil.prototype.evaluateAttribute = function (a, b, c) {
    b = a.getAttribute(b);
    if (b == null) {
        a = mxUtils.getTextContent(a);
        if (a != null) {
            a = mxUtils.eval(a);
            typeof a == "function" && (b = a(c))
        }
    }
    return b
};
mxStencil.prototype.drawShape = function (a, b, c, d, e, f) {
    this.drawChildren(a, b, c, d, e, f, this.bgNode, false);
    this.drawChildren(a, b, c, d, e, f, this.fgNode, true)
};
mxStencil.prototype.drawChildren = function (a, b, c, d, e, f, g, h) {
    if (g != null) {
        var k = mxUtils.getValue(b.style, mxConstants.STYLE_DIRECTION, null), c = this.computeAspect(b.style, c, d, e, f, k), d = Math.min(c.width, c.height), d = this.strokewidth == "inherit" ? Number(mxUtils.getNumber(b.style, mxConstants.STYLE_STROKEWIDTH, 1)) : Number(this.strokewidth) * d;
        a.setStrokeWidth(d);
        for (g = g.firstChild; g != null;) {
            g.nodeType == mxConstants.NODETYPE_ELEMENT && this.drawNode(a, b, g, c, h);
            g = g.nextSibling
        }
    }
};
mxStencil.prototype.computeAspect = function (a, b, c, d, e, f) {
    var a = b, b = d / this.w0, g = e / this.h0;
    if (f = f == "north" || f == "south")var g = d / this.h0, b = e / this.w0, h = (d - e) / 2, a = a + h, c = c - h;
    if (this.aspect == "fixed") {
        b = g = Math.min(b, g);
        if (f) {
            a = a + (e - this.w0 * b) / 2;
            c = c + (d - this.h0 * g) / 2
        } else {
            a = a + (d - this.w0 * b) / 2;
            c = c + (e - this.h0 * g) / 2
        }
    }
    return new mxRectangle(a, c, b, g)
};
mxStencil.prototype.drawNode = function (a, b, c, d, e) {
    var f = c.nodeName, g = d.x, h = d.y, k = d.width, i = d.height, l = Math.min(k, i);
    if (f == "save")a.save(); else if (f == "restore")a.restore(); else if (f == "path") {
        a.begin();
        for (c = c.firstChild; c != null;) {
            c.nodeType == mxConstants.NODETYPE_ELEMENT && this.drawNode(a, b, c, d, e);
            c = c.nextSibling
        }
    } else if (f == "close")a.close(); else if (f == "move")a.moveTo(g + Number(c.getAttribute("x")) * k, h + Number(c.getAttribute("y")) * i); else if (f == "line")a.lineTo(g + Number(c.getAttribute("x")) * k, h + Number(c.getAttribute("y")) *
        i); else if (f == "quad")a.quadTo(g + Number(c.getAttribute("x1")) * k, h + Number(c.getAttribute("y1")) * i, g + Number(c.getAttribute("x2")) * k, h + Number(c.getAttribute("y2")) * i); else if (f == "curve")a.curveTo(g + Number(c.getAttribute("x1")) * k, h + Number(c.getAttribute("y1")) * i, g + Number(c.getAttribute("x2")) * k, h + Number(c.getAttribute("y2")) * i, g + Number(c.getAttribute("x3")) * k, h + Number(c.getAttribute("y3")) * i); else if (f == "arc")a.arcTo(Number(c.getAttribute("rx")) * k, Number(c.getAttribute("ry")) * i, Number(c.getAttribute("x-axis-rotation")),
        Number(c.getAttribute("large-arc-flag")), Number(c.getAttribute("sweep-flag")), g + Number(c.getAttribute("x")) * k, h + Number(c.getAttribute("y")) * i); else if (f == "rect")a.rect(g + Number(c.getAttribute("x")) * k, h + Number(c.getAttribute("y")) * i, Number(c.getAttribute("w")) * k, Number(c.getAttribute("h")) * i); else if (f == "roundrect") {
        b = c.getAttribute("arcsize");
        b == 0 && (b = mxConstants.RECTANGLE_ROUNDING_FACTOR * 100);
        l = Number(c.getAttribute("w")) * k;
        d = Number(c.getAttribute("h")) * i;
        b = Number(b) / 100;
        b = Math.min(l * b, d * b);
        a.roundrect(g +
            Number(c.getAttribute("x")) * k, h + Number(c.getAttribute("y")) * i, l, d, b, b)
    } else if (f == "ellipse")a.ellipse(g + Number(c.getAttribute("x")) * k, h + Number(c.getAttribute("y")) * i, Number(c.getAttribute("w")) * k, Number(c.getAttribute("h")) * i); else if (f == "image") {
        b = this.evaluateAttribute(c, "src", b);
        a.image(g + Number(c.getAttribute("x")) * k, h + Number(c.getAttribute("y")) * i, Number(c.getAttribute("w")) * k, Number(c.getAttribute("h")) * i, b, false, c.getAttribute("flipH") == "1", c.getAttribute("flipV") == "1")
    } else if (f == "text") {
        l =
            this.evaluateAttribute(c, "str", b);
        d = c.getAttribute("vertical") == "1" ? -90 : 0;
        if (c.getAttribute("align-shape") == "0")var n = b.rotation, m = mxUtils.getValue(b.style, mxConstants.STYLE_FLIPH, 0) == 1, b = mxUtils.getValue(b.style, mxConstants.STYLE_FLIPV, 0) == 1, d = m && b ? d - n : m || b ? d + n : d - n;
        d = d - c.getAttribute("rotation");
        a.text(g + Number(c.getAttribute("x")) * k, h + Number(c.getAttribute("y")) * i, 0, 0, l, c.getAttribute("align") || "left", c.getAttribute("valign") || "top", false, "", false, false, d)
    } else if (f == "include-shape") {
        n = mxStencilRegistry.getStencil(c.getAttribute("name"));
        if (n != null) {
            g = g + Number(c.getAttribute("x")) * k;
            h = h + Number(c.getAttribute("y")) * i;
            l = Number(c.getAttribute("w")) * k;
            d = Number(c.getAttribute("h")) * i;
            c = new mxRectangle(g, h, l, d);
            n.drawShape(a, b, c, true);
            n.drawShape(a, b, c, false)
        }
    } else if (f == "fillstroke")a.fillAndStroke(); else if (f == "fill")a.fill(); else if (f == "stroke")a.stroke(); else if (f == "strokewidth")a.setStrokeWidth(Number(c.getAttribute("width")) * l); else if (f == "dashed")a.setDashed(c.getAttribute("dashed") == "1"); else if (f == "dashpattern") {
        c = c.getAttribute("pattern");
        if (c != null) {
            c = c.split(" ");
            k = [];
            for (i = 0; i < c.length; i++)c[i].length > 0 && k.push(Number(c[i]) * l);
            c = k.join(" ");
            a.setDashPattern(c)
        }
    } else f == "strokecolor" ? a.setStrokeColor(c.getAttribute("color")) : f == "linecap" ? a.setLineCap(c.getAttribute("cap")) : f == "linejoin" ? a.setLineJoin(c.getAttribute("join")) : f == "miterlimit" ? a.setMiterLimit(Number(c.getAttribute("limit"))) : f == "fillcolor" ? a.setFillColor(c.getAttribute("color")) : f == "fontcolor" ? a.setFontColor(c.getAttribute("color")) : f == "fontstyle" ? a.setFontStyle(c.getAttribute("style")) :
        f == "fontfamily" ? a.setFontFamily(c.getAttribute("family")) : f == "fontsize" && a.setFontSize(Number(c.getAttribute("size")) * l);
    e && (f == "fillstroke" || f == "fill" || f == "stroke") && a.setShadow(false)
};
function mxShape(a) {
    this.stencil = a;
    this.strokewidth = 1;
    this.rotation = 0;
    this.opacity = 100;
    this.flipV = this.flipH = false
}
mxShape.prototype.dialect = null;
mxShape.prototype.scale = 1;
mxShape.prototype.bounds = null;
mxShape.prototype.points = null;
mxShape.prototype.node = null;
mxShape.prototype.style = null;
mxShape.prototype.style = null;
mxShape.prototype.boundingBox = null;
mxShape.prototype.stencil = null;
mxShape.prototype.svgStrokeTolerance = 6;
mxShape.prototype.pointerEvents = true;
mxShape.prototype.stencilPointerEvents = false;
mxShape.prototype.vmlScale = 1;
mxShape.prototype.init = function (a) {
    if (this.node == null) {
        this.node = this.create(a);
        a != null && a.appendChild(this.node)
    }
};
mxShape.prototype.isParseVml = function () {
    return true
};
mxShape.prototype.isHtmlAllowed = function () {
    return false
};
mxShape.prototype.getSvgScreenOffset = function () {
    return mxUtils.mod(Math.max(1, Math.round(this.strokewidth * this.scale)), 2) == 1 ? 0.5 : 0
};
mxShape.prototype.create = function (a) {
    var b = null;
    return b = a.ownerSVGElement != null ? this.createSvg(a) : document.documentMode == 8 || this.dialect == mxConstants.DIALECT_SVG || this.dialect != mxConstants.DIALECT_VML && this.isHtmlAllowed() ? this.createHtml(a) : this.createVml(a)
};
mxShape.prototype.createSvg = function () {
    return document.createElementNS(mxConstants.NS_SVG, "g")
};
mxShape.prototype.createVml = function () {
    var a = document.createElement(mxClient.VML_PREFIX + ":group");
    a.style.position = "absolute";
    return a
};
mxShape.prototype.createHtml = function () {
    var a = document.createElement("div");
    a.style.position = "absolute";
    return a
};
mxShape.prototype.reconfigure = function () {
    this.redraw()
};
mxShape.prototype.redraw = function () {
    this.updateBoundsFromPoints();
    if (this.checkBounds()) {
        this.node.style.visibility = "";
        this.node.nodeName == "DIV" && this.isHtmlAllowed() ? this.redrawHtmlShape() : this.redrawShape();
        this.updateBoundingBox()
    } else {
        this.node.style.visibility = "hidden";
        this.boundingBox = null
    }
};
mxShape.prototype.updateBoundsFromPoints = function () {
    var a = this.points;
    if (a != null && a.length > 0 && a[0] != null) {
        this.bounds = new mxRectangle(Number(a[0].x), Number(a[0].y), 1, 1);
        for (var b = 1; b < this.points.length; b++)a[b] != null && this.bounds.add(new mxRectangle(Number(a[b].x), Number(a[b].y), 1, 1))
    }
};
mxShape.prototype.checkBounds = function () {
    return this.bounds != null && !isNaN(this.bounds.x) && !isNaN(this.bounds.y) && !isNaN(this.bounds.width) && !isNaN(this.bounds.height) && this.bounds.width > 0 && this.bounds.height > 0
};
mxShape.prototype.createVmlGroup = function () {
    var a = document.createElement(mxClient.VML_PREFIX + ":group");
    a.style.position = "absolute";
    a.style.width = this.node.style.width;
    a.style.height = this.node.style.height;
    return a
};
mxShape.prototype.redrawShape = function () {
    var a = this.createCanvas();
    for (a.pointerEvents = this.pointerEvents; this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);
    this.paint(a);
    this.node != a.root && this.node.insertAdjacentHTML("beforeend", a.root.outerHTML);
    if (this.node.nodeName == "DIV" && document.documentMode == 8) {
        this.node.style.filter = "";
        (this.stencil == null || !this.stencilPointerEvents) && mxUtils.addTransparentBackgroundFilter(this.node)
    }
    this.destroyCanvas(a)
};
mxShape.prototype.createCanvas = function () {
    var a = null, b = null;
    if (this.node.ownerSVGElement != null) {
        a = new mxSvgCanvas2D(this.node, false);
        a.strokeTolerance = this.svgStrokeTolerance;
        a.blockImagePointerEvents = mxClient.IS_NS && !mxClient.IS_SF && !mxClient.IS_GC;
        b = this.getSvgScreenOffset();
        b != 0 ? this.node.setAttribute("transform", "translate(" + b + "," + b + ")") : this.node.removeAttribute("transform")
    } else {
        this.updateVmlContainer();
        var c = Math.max(1, Math.round(this.bounds.width)), d = Math.max(1, Math.round(this.bounds.height)),
            b = document.documentMode == 8 && this.isParseVml() ? this.createVmlGroup() : this.node, a = new mxVmlCanvas2D(b, false);
        if (b.tagUrn != "") {
            b.coordsize = c * this.vmlScale + "," + d * this.vmlScale;
            a.scale(this.vmlScale);
            a.vmlScale = this.vmlScale
        }
        b = this.scale;
        a.translate(-Math.round(this.bounds.x / b), -Math.round(this.bounds.y / b))
    }
    return a
};
mxShape.prototype.updateVmlContainer = function () {
    this.node.style.left = Math.round(this.bounds.x) + "px";
    this.node.style.top = Math.round(this.bounds.y) + "px";
    var a = Math.max(1, Math.round(this.bounds.width)), b = Math.max(1, Math.round(this.bounds.height));
    this.node.style.width = a + "px";
    this.node.style.height = b + "px";
    this.node.style.overflow = "visible"
};
mxShape.prototype.destroyCanvas = function (a) {
    if (a instanceof mxSvgCanvas2D) {
        for (var b in a.gradients) {
            var c = a.gradients[b];
            c.mxRefCount = (c.mxRefCount || 0) + 1
        }
        this.releaseSvgGradients(this.oldGradients);
        this.oldGradients = a.gradients
    }
};
mxShape.prototype.paint = function (a) {
    var b = this.scale, c = this.bounds.x / b, d = this.bounds.y / b, e = this.bounds.width / b, f = this.bounds.height / b;
    if (this.isPaintBoundsInverted())var g = (e - f) / 2, c = c + g, d = d - g, g = e, e = f, f = g;
    this.updateTransform(a, c, d, e, f);
    this.configureCanvas(a, c, d, e, f);
    if (this.stencil != null)this.paintStencilShape(a, c, d, e, f); else {
        a.setStrokeWidth(this.strokewidth);
        if (this.points != null) {
            c = [];
            for (d = 0; d < this.points.length; d++)c.push(new mxPoint(this.points[d].x / b, this.points[d].y / b));
            this.paintEdgeShape(a,
                c)
        } else this.paintVertexShape(a, c, d, e, f)
    }
};
mxShape.prototype.configureCanvas = function (a, b, c, d, e) {
    var f = null;
    this.style != null && (f = this.style.dashPattern);
    a.setAlpha(this.opacity / 100);
    this.isShadow != null && a.setShadow(this.isShadow);
    this.isDashed != null && a.setDashed(this.isDashed);
    f != null && a.setDashPattern(f);
    if (this.gradient != null) {
        b = this.getGradientBounds(a, b, c, d, e);
        a.setGradient(this.fill, this.gradient, b.x, b.y, b.width, b.height, this.gradientDirection)
    } else a.setFillColor(this.fill);
    a.setStrokeColor(this.stroke)
};
mxShape.prototype.getGradientBounds = function (a, b, c, d, e) {
    return new mxRectangle(b, c, d, e)
};
mxShape.prototype.updateTransform = function (a, b, c, d, e) {
    a.scale(this.scale);
    a.rotate(this.getShapeRotation(), this.flipH, this.flipV, b + d / 2, c + e / 2)
};
mxShape.prototype.paintStencilShape = function (a, b, c, d, e) {
    this.stencilPointerEvents && (this.dialect == mxConstants.DIALECT_SVG ? this.addTransparentBackgroundRectangle(this.node, b, c, d, e) : document.documentMode != 8 && this.setTransparentBackgroundImage(this.node));
    this.stencil.drawShape(a, this, b, c, d, e)
};
mxShape.prototype.paintVertexShape = function (a, b, c, d, e) {
    this.paintBackground(a, b, c, d, e);
    a.setShadow(false);
    this.paintForeground(a, b, c, d, e)
};
mxShape.prototype.paintBackground = function () {
};
mxShape.prototype.paintForeground = function () {
};
mxShape.prototype.paintEdgeShape = function () {
};
mxShape.prototype.getArcSize = function (a, b) {
    var c = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, mxConstants.RECTANGLE_ROUNDING_FACTOR * 100) / 100;
    return Math.min(a * c, b * c)
};
mxShape.prototype.paintGlassEffect = function (a, b, c, d, e, f) {
    var g = Math.ceil(this.strokewidth / 2);
    a.setGradient("#ffffff", "#ffffff", b, c, d, e * 0.6, "south", 0.9, 0.1);
    a.begin();
    f = f + 2 * g;
    if (this.isRounded) {
        a.moveTo(b - g + f, c - g);
        a.quadTo(b - g, c - g, b - g, c - g + f);
        a.lineTo(b - g, c + e * 0.4);
        a.quadTo(b + d * 0.5, c + e * 0.7, b + d + g, c + e * 0.4);
        a.lineTo(b + d + g, c - g + f);
        a.quadTo(b + d + g, c - g, b + d + g - f, c - g)
    } else {
        a.moveTo(b - g, c - g);
        a.lineTo(b - g, c + e * 0.4);
        a.quadTo(b + d * 0.5, c + e * 0.7, b + d + g, c + e * 0.4);
        a.lineTo(b + d + g, c - g)
    }
    a.close();
    a.fill()
};
mxShape.prototype.apply = function (a) {
    this.state = a;
    this.style = a.style;
    if (this.style != null) {
        this.fill = mxUtils.getValue(this.style, mxConstants.STYLE_FILLCOLOR, this.fill);
        this.gradient = mxUtils.getValue(this.style, mxConstants.STYLE_GRADIENTCOLOR, this.gradient);
        this.gradientDirection = mxUtils.getValue(this.style, mxConstants.STYLE_GRADIENT_DIRECTION, this.gradientDirection);
        this.opacity = mxUtils.getValue(this.style, mxConstants.STYLE_OPACITY, this.opacity);
        this.stroke = mxUtils.getValue(this.style, mxConstants.STYLE_STROKECOLOR,
            this.stroke);
        this.strokewidth = mxUtils.getNumber(this.style, mxConstants.STYLE_STROKEWIDTH, this.strokewidth);
        this.spacing = mxUtils.getValue(this.style, mxConstants.STYLE_SPACING, this.spacing);
        this.startSize = mxUtils.getNumber(this.style, mxConstants.STYLE_STARTSIZE, this.startSize);
        this.endSize = mxUtils.getNumber(this.style, mxConstants.STYLE_ENDSIZE, this.endSize);
        this.startArrow = mxUtils.getValue(this.style, mxConstants.STYLE_STARTARROW, this.startArrow);
        this.endArrow = mxUtils.getValue(this.style, mxConstants.STYLE_ENDARROW,
            this.endArrow);
        this.rotation = mxUtils.getValue(this.style, mxConstants.STYLE_ROTATION, this.rotation);
        this.direction = mxUtils.getValue(this.style, mxConstants.STYLE_DIRECTION, this.direction);
        this.flipH = mxUtils.getValue(this.style, mxConstants.STYLE_FLIPH, 0) == 1;
        this.flipV = mxUtils.getValue(this.style, mxConstants.STYLE_FLIPV, 0) == 1;
        if (this.stencil != null) {
            this.flipH = mxUtils.getValue(this.style, "stencilFlipH", 0) == 1 || this.flipH;
            this.flipV = mxUtils.getValue(this.style, "stencilFlipV", 0) == 1 || this.flipV
        }
        if (this.direction ==
            "north" || this.direction == "south") {
            a = this.flipH;
            this.flipH = this.flipV;
            this.flipV = a
        }
        this.isShadow = mxUtils.getValue(this.style, mxConstants.STYLE_SHADOW, this.isShadow) == 1;
        this.isDashed = mxUtils.getValue(this.style, mxConstants.STYLE_DASHED, this.isDashed) == 1;
        this.isRounded = mxUtils.getValue(this.style, mxConstants.STYLE_ROUNDED, this.isRounded) == 1;
        this.glass = mxUtils.getValue(this.style, mxConstants.STYLE_GLASS, this.glass) == 1;
        if (this.fill == "none")this.fill = null;
        if (this.gradient == "none")this.gradient = null;
        if (this.stroke ==
            "none")this.stroke = null
    }
};
mxShape.prototype.setCursor = function (a) {
    a == null && (a = "");
    this.cursor = a;
    if (this.node != null)this.node.style.cursor = a
};
mxShape.prototype.getCursor = function () {
    return this.cursor
};
mxShape.prototype.updateBoundingBox = function () {
    if (this.bounds != null) {
        var a = this.createBoundingBox();
        if (a != null) {
            this.augmentBoundingBox(a);
            var b = this.getShapeRotation();
            b != 0 && (a = mxUtils.getBoundingBox(a, b));
            a.x = Math.floor(a.x);
            a.y = Math.floor(a.y);
            a.width = Math.ceil(a.width);
            a.height = Math.ceil(a.height)
        }
        this.boundingBox = a
    }
};
mxShape.prototype.createBoundingBox = function () {
    var a = this.bounds.clone();
    if (this.isPaintBoundsInverted()) {
        var b = (a.width - a.height) / 2;
        a.x = a.x + b;
        a.y = a.y - b;
        b = a.width;
        a.width = a.height;
        a.height = b
    }
    return a
};
mxShape.prototype.augmentBoundingBox = function (a) {
    if (this.isShadow) {
        a.width = a.width + Math.ceil(mxConstants.SHADOW_OFFSET_X * this.scale);
        a.height = a.height + Math.ceil(mxConstants.SHADOW_OFFSET_Y * this.scale)
    }
    var b = Math.ceil(this.strokewidth * this.scale);
    a.grow(Math.ceil(b / 2))
};
mxShape.prototype.isPaintBoundsInverted = function () {
    return this.stencil == null && (this.direction == "north" || this.direction == "south")
};
mxShape.prototype.getRotation = function () {
    return this.rotation != null ? this.rotation : 0
};
mxShape.prototype.getTextRotation = function () {
    var a = this.getRotation();
    mxUtils.getValue(this.style, mxConstants.STYLE_HORIZONTAL, 1) != 1 && (a = a + mxText.prototype.verticalTextRotation);
    return a
};
mxShape.prototype.getShapeRotation = function () {
    var a = this.getRotation();
    this.direction != null && (this.direction == "north" ? a = a + 270 : this.direction == "west" ? a = a + 180 : this.direction == "south" && (a = a + 90));
    return a
};
mxShape.prototype.addTransparentBackgroundRectangle = function (a, b, c, d, e) {
    a = document.createElementNS(mxConstants.NS_SVG, "rect");
    a.setAttribute("x", b);
    a.setAttribute("y", c);
    a.setAttribute("width", d);
    a.setAttribute("height", e);
    a.setAttribute("fill", "none");
    a.setAttribute("stroke", "none");
    a.setAttribute("pointer-events", "all");
    this.node.appendChild(a)
};
mxShape.prototype.setTransparentBackgroundImage = function (a) {
    a.style.backgroundImage = "url('" + mxClient.imageBasePath + "/transparent.gif')"
};
mxShape.prototype.releaseSvgGradients = function (a) {
    if (a != null)for (var b in a) {
        var c = a[b];
        c.mxRefCount = (c.mxRefCount || 0) - 1;
        c.mxRefCount == 0 && c.parentNode != null && c.parentNode.removeChild(c)
    }
};
mxShape.prototype.destroy = function () {
    if (this.node != null) {
        mxEvent.release(this.node);
        this.node.parentNode != null && this.node.parentNode.removeChild(this.node);
        this.node = null
    }
    this.releaseSvgGradients(this.oldGradients);
    this.oldGradients = null
};
var mxStencilRegistry = {stencils: [], addStencil: function (a, b) {
    mxStencilRegistry.stencils[a] = b
}, getStencil: function (a) {
    return mxStencilRegistry.stencils[a]
}}, mxMarker = {markers: [], addMarker: function (a, b) {
    mxMarker.markers[a] = b
}, createMarker: function (a, b, c, d, e, f, g, h, k, i) {
    var l = mxMarker.markers[c];
    return l != null ? l(a, b, c, d, e, f, g, h, k, i) : null
}};
(function () {
    function a(a, b, e, f, g, h, k, i, l, n) {
        var b = g * l * 1.118, i = h * l * 1.118, g = g * (k + l), h = h * (k + l), m = f.clone();
        m.x = m.x - b;
        m.y = m.y - i;
        k = e != mxConstants.ARROW_CLASSIC ? 1 : 0.75;
        f.x = f.x + (-g * k - b);
        f.y = f.y + (-h * k - i);
        return function () {
            a.begin();
            a.moveTo(m.x, m.y);
            a.lineTo(m.x - g - h / 2, m.y - h + g / 2);
            e == mxConstants.ARROW_CLASSIC && a.lineTo(m.x - g * 3 / 4, m.y - h * 3 / 4);
            a.lineTo(m.x + h / 2 - g, m.y - h - g / 2);
            a.close();
            n ? a.fillAndStroke() : a.stroke()
        }
    }

    function b(a, b, e, f, g, h, k, i, l, n) {
        var i = e == mxConstants.ARROW_DIAMOND ? 0.7071 : 0.9862, b = g * l * i, i = h * l * i,
            g = g * (k + l), h = h * (k + l), m = f.clone();
        m.x = m.x - b;
        m.y = m.y - i;
        f.x = f.x + (-g - b);
        f.y = f.y + (-h - i);
        var o = e == mxConstants.ARROW_DIAMOND ? 2 : 3.4;
        return function () {
            a.begin();
            a.moveTo(m.x, m.y);
            a.lineTo(m.x - g / 2 - h / o, m.y + g / o - h / 2);
            a.lineTo(m.x - g, m.y - h);
            a.lineTo(m.x - g / 2 + h / o, m.y - h / 2 - g / o);
            a.close();
            n ? a.fillAndStroke() : a.stroke()
        }
    }

    mxMarker.addMarker("classic", a);
    mxMarker.addMarker("block", a);
    mxMarker.addMarker("open", function (a, b, e, f, g, h, k, i, l) {
        var b = g * l * 1.118, e = h * l * 1.118, g = g * (k + l), h = h * (k + l), n = f.clone();
        n.x = n.x - b;
        n.y = n.y - e;
        f.x =
            f.x + -b * 2;
        f.y = f.y + -e * 2;
        return function () {
            a.begin();
            a.moveTo(n.x - g - h / 2, n.y - h + g / 2);
            a.lineTo(n.x, n.y);
            a.lineTo(n.x + h / 2 - g, n.y - h - g / 2);
            a.stroke()
        }
    });
    mxMarker.addMarker("oval", function (a, b, e, f, g, h, k, i, l, n) {
        var m = k / 2, o = f.clone();
        f.x = f.x - g * m;
        f.y = f.y - h * m;
        return function () {
            a.ellipse(o.x - m, o.y - m, k, k);
            n ? a.fillAndStroke() : a.stroke()
        }
    });
    mxMarker.addMarker("diamond", b);
    mxMarker.addMarker("diamondThin", b)
})();
function mxActor(a, b, c, d) {
    mxShape.call(this);
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = d != null ? d : 1
}
mxUtils.extend(mxActor, mxShape);
mxActor.prototype.paintVertexShape = function (a, b, c, d, e) {
    a.translate(b, c);
    a.begin();
    this.redrawPath(a, b, c, d, e);
    a.fillAndStroke()
};
mxActor.prototype.redrawPath = function (a, b, c, d, e) {
    b = d / 3;
    a.moveTo(0, e);
    a.curveTo(0, 3 * e / 5, 0, 2 * e / 5, d / 2, 2 * e / 5);
    a.curveTo(d / 2 - b, 2 * e / 5, d / 2 - b, 0, d / 2, 0);
    a.curveTo(d / 2 + b, 0, d / 2 + b, 2 * e / 5, d / 2, 2 * e / 5);
    a.curveTo(d, 2 * e / 5, d, 3 * e / 5, d, e);
    a.close()
};
function mxCloud(a, b, c, d) {
    mxActor.call(this);
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = d != null ? d : 1
}
mxUtils.extend(mxCloud, mxActor);
mxCloud.prototype.redrawPath = function (a, b, c, d, e) {
    a.moveTo(0.25 * d, 0.25 * e);
    a.curveTo(0.05 * d, 0.25 * e, 0, 0.5 * e, 0.16 * d, 0.55 * e);
    a.curveTo(0, 0.66 * e, 0.18 * d, 0.9 * e, 0.31 * d, 0.8 * e);
    a.curveTo(0.4 * d, e, 0.7 * d, e, 0.8 * d, 0.8 * e);
    a.curveTo(d, 0.8 * e, d, 0.6 * e, 0.875 * d, 0.5 * e);
    a.curveTo(d, 0.3 * e, 0.8 * d, 0.1 * e, 0.625 * d, 0.2 * e);
    a.curveTo(0.5 * d, 0.05 * e, 0.3 * d, 0.05 * e, 0.25 * d, 0.25 * e);
    a.close()
};
function mxRectangleShape(a, b, c, d) {
    mxShape.call(this);
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = d != null ? d : 1
}
mxUtils.extend(mxRectangleShape, mxShape);
mxRectangleShape.prototype.isHtmlAllowed = function () {
    return!this.isRounded && !this.glass && this.rotation == 0
};
mxRectangleShape.prototype.paintBackground = function (a, b, c, d, e) {
    if (this.isRounded) {
        var f = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, mxConstants.RECTANGLE_ROUNDING_FACTOR * 100) / 100, f = Math.min(d * f, e * f);
        a.roundrect(b, c, d, e, f, f)
    } else a.rect(b, c, d, e);
    a.fillAndStroke()
};
mxRectangleShape.prototype.paintForeground = function (a, b, c, d, e) {
    this.glass && this.paintGlassEffect(a, b, c, d, e, this.getArcSize(d + this.strokewidth, e + this.strokewidth))
};
mxRectangleShape.prototype.redrawHtmlShape = function () {
    this.updateHtmlBounds(this.node);
    this.updateHtmlFilters(this.node);
    this.updateHtmlColors(this.node)
};
mxRectangleShape.prototype.updateHtmlBounds = function (a) {
    var b = document.documentMode >= 9 ? 0 : Math.ceil(this.strokewidth * this.scale);
    a.style.borderWidth = Math.max(1, b) + "px";
    a.style.overflow = "hidden";
    a.style.left = Math.round(this.bounds.x - b / 2) + "px";
    a.style.top = Math.round(this.bounds.y - b / 2) + "px";
    document.compatMode == "CSS1Compat" && (b = -b);
    a.style.width = Math.round(Math.max(0, this.bounds.width + b)) + "px";
    a.style.height = Math.round(Math.max(0, this.bounds.height + b)) + "px"
};
mxRectangleShape.prototype.updateHtmlColors = function (a) {
    var b = this.stroke;
    if (b != null && b != mxConstants.NONE) {
        a.style.borderColor = b;
        if (this.isDashed)a.style.borderStyle = "dashed"; else if (this.strokewidth > 0)a.style.borderStyle = "solid";
        a.style.borderWidth = Math.max(1, Math.ceil(this.strokewidth * this.scale)) + "px"
    } else a.style.borderWidth = "0px";
    b = this.fill;
    if (b != null && b != mxConstants.NONE) {
        a.style.backgroundColor = b;
        a.style.backgroundImage = "none"
    } else this.pointerEvents ? a.style.backgroundColor = "transparent" :
        document.documentMode == 8 ? mxUtils.addTransparentBackgroundFilter(a) : this.setTransparentBackgroundImage(a)
};
mxRectangleShape.prototype.updateHtmlFilters = function (a) {
    var b = "";
    this.opacity < 100 && (b = b + ("alpha(opacity=" + this.opacity + ")"));
    this.isShadow && (b = b + ("progid:DXImageTransform.Microsoft.dropShadow (OffX='" + Math.round(mxConstants.SHADOW_OFFSET_X * this.scale) + "', OffY='" + Math.round(mxConstants.SHADOW_OFFSET_Y * this.scale) + "', Color='" + mxConstants.SHADOWCOLOR + "')"));
    if (this.gradient) {
        var c = this.fill, d = this.gradient, e = "0", f = {east: 0, south: 1, west: 2, north: 3}, g = this.direction != null ? f[this.direction] : 0;
        this.gradientDirection !=
            null && (g = mxUtils.mod(g + f[this.gradientDirection] - 1, 4));
        if (g == 1) {
            e = "1";
            f = c;
            c = d;
            d = f
        } else if (g == 2) {
            f = c;
            c = d;
            d = f
        } else g == 3 && (e = "1");
        b = b + ("progid:DXImageTransform.Microsoft.gradient(startColorStr='" + c + "', endColorStr='" + d + "', gradientType='" + e + "')")
    }
    a.style.filter = b
};
function mxEllipse(a, b, c, d) {
    mxShape.call(this);
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = d != null ? d : 1
}
mxUtils.extend(mxEllipse, mxShape);
mxEllipse.prototype.paintVertexShape = function (a, b, c, d, e) {
    a.ellipse(b, c, d, e);
    a.fillAndStroke()
};
function mxDoubleEllipse(a, b, c, d) {
    mxShape.call(this);
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = d != null ? d : 1
}
mxUtils.extend(mxDoubleEllipse, mxShape);
mxDoubleEllipse.prototype.vmlScale = 10;
mxDoubleEllipse.prototype.paintBackground = function (a, b, c, d, e) {
    a.ellipse(b, c, d, e);
    a.fillAndStroke()
};
mxDoubleEllipse.prototype.paintForeground = function (a, b, c, d, e) {
    var f = Math.min(4, Math.min(d / 5, e / 5)), d = d - 2 * f, e = e - 2 * f;
    d > 0 && e > 0 && a.ellipse(b + f, c + f, d, e);
    a.stroke()
};
function mxRhombus(a, b, c, d) {
    mxShape.call(this);
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = d != null ? d : 1
}
mxUtils.extend(mxRhombus, mxShape);
mxRhombus.prototype.paintVertexShape = function (a, b, c, d, e) {
    var f = d / 2, g = e / 2;
    a.begin();
    a.moveTo(b + f, c);
    a.lineTo(b + d, c + g);
    a.lineTo(b + f, c + e);
    a.lineTo(b, c + g);
    a.close();
    a.fillAndStroke()
};
function mxPolyline(a, b, c) {
    mxShape.call(this);
    this.points = a;
    this.stroke = b;
    this.strokewidth = c != null ? c : 1
}
mxUtils.extend(mxPolyline, mxShape);
mxPolyline.prototype.getRotation = function () {
    return 0
};
mxPolyline.prototype.paintEdgeShape = function (a, b) {
    this.paintLine(a, b, this.isRounded)
};
mxPolyline.prototype.paintLine = function (a, b, c) {
    var d = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, mxConstants.LINE_ARCSIZE) / 2, e = b[0], f = b[b.length - 1];
    a.begin();
    a.moveTo(e.x, e.y);
    for (var g = 1; g < b.length - 1; g++) {
        var h = b[g], k = e.x - h.x, e = e.y - h.y;
        if (c && g < b.length - 1 && (k != 0 || e != 0)) {
            var i = Math.sqrt(k * k + e * e), k = k * Math.min(d, i / 2) / i, e = e * Math.min(d, i / 2) / i;
            a.lineTo(h.x + k, h.y + e);
            e = b[g + 1];
            k = e.x - h.x;
            e = e.y - h.y;
            i = Math.max(1, Math.sqrt(k * k + e * e));
            k = k * Math.min(d, i / 2) / i;
            e = e * Math.min(d, i / 2) / i;
            k = h.x + k;
            e = h.y + e;
            a.quadTo(h.x,
                h.y, k, e);
            h = new mxPoint(k, e)
        } else a.lineTo(h.x, h.y);
        e = h
    }
    a.lineTo(f.x, f.y);
    a.stroke()
};
function mxArrow(a, b, c, d, e, f, g) {
    mxShape.call(this);
    this.points = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = d != null ? d : 1;
    this.arrowWidth = e != null ? e : mxConstants.ARROW_WIDTH;
    this.spacing = f != null ? f : mxConstants.ARROW_SPACING;
    this.endSize = g != null ? g : mxConstants.ARROW_SIZE
}
mxUtils.extend(mxArrow, mxShape);
mxArrow.prototype.paintEdgeShape = function (a, b) {
    var c = mxConstants.ARROW_SPACING, d = mxConstants.ARROW_WIDTH, e = mxConstants.ARROW_SIZE, f = b[0], g = b[b.length - 1], h = g.x - f.x, k = g.y - f.y, i = Math.sqrt(h * h + k * k), l = i - 2 * c - e, h = h / i, k = k / i, i = d * k / 3, d = -d * h / 3, e = f.x - i / 2 + c * h, f = f.y - d / 2 + c * k, n = e + i, m = f + d, o = n + l * h, l = m + l * k, q = o + i, p = l + d, r = q - 3 * i, s = p - 3 * d;
    a.begin();
    a.moveTo(e, f);
    a.lineTo(n, m);
    a.lineTo(o, l);
    a.lineTo(q, p);
    a.lineTo(g.x - c * h, g.y - c * k);
    a.lineTo(r, s);
    a.lineTo(r + i, s + d);
    a.close();
    a.fillAndStroke()
};
function mxText(a, b, c, d, e, f, g, h, k, i, l, n, m, o, q, p, r, s, t, y) {
    mxShape.call(this);
    this.value = a;
    this.bounds = b;
    this.color = e != null ? e : "black";
    this.align = c != null ? c : "";
    this.valign = d != null ? d : "";
    this.family = f != null ? f : mxConstants.DEFAULT_FONTFAMILY;
    this.size = g != null ? g : mxConstants.DEFAULT_FONTSIZE;
    this.fontStyle = h != null ? h : mxConstants.DEFAULT_FONTSTYLE;
    this.spacing = parseInt(k || 2);
    this.spacingTop = this.spacing + parseInt(i || 0);
    this.spacingRight = this.spacing + parseInt(l || 0);
    this.spacingBottom = this.spacing + parseInt(n || 0);
    this.spacingLeft = this.spacing + parseInt(m || 0);
    this.horizontal = o != null ? o : true;
    this.background = q;
    this.border = p;
    this.wrap = r != null ? r : false;
    this.clipped = s != null ? s : false;
    this.overflow = t != null ? t : "visible";
    this.labelPadding = y != null ? y : 0;
    this.rotation = 0
}
mxUtils.extend(mxText, mxShape);
mxText.prototype.baseSpacingTop = 0;
mxText.prototype.baseSpacingBottom = 0;
mxText.prototype.baseSpacingLeft = 0;
mxText.prototype.baseSpacingRight = 0;
mxText.prototype.replaceLinefeeds = true;
mxText.prototype.verticalTextRotation = -90;
mxText.prototype.ignoreClippedStringSize = true;
mxText.prototype.ignoreStringSize = false;
mxText.prototype.isParseVml = function () {
    return false
};
mxText.prototype.isHtmlAllowed = function () {
    return document.documentMode != 8
};
mxText.prototype.getSvgScreenOffset = function () {
    return 0
};
mxText.prototype.checkBounds = function () {
    return this.bounds != null && !isNaN(this.bounds.x) && !isNaN(this.bounds.y) && !isNaN(this.bounds.width) && !isNaN(this.bounds.height)
};
mxText.prototype.updateBoundingBox = function () {
    var a = this.node;
    if (document.documentMode == 8 && a.firstChild != null) {
        a = a.firstChild;
        if (a.firstChild != null)a = a.firstChild
    }
    this.boundingBox = this.bounds.clone();
    var b = this.getTextRotation();
    if (!this.ignoreStringSize && a != null && this.overflow != "fill" && (!this.clipped || !this.ignoreClippedStringSize)) {
        var c = null, d = null;
        if (a.ownerSVGElement != null)if (a.firstChild != null && a.firstChild.firstChild != null && a.firstChild.firstChild.nodeName == "foreignObject") {
            a = a.firstChild.firstChild;
            c = this.wrap ? this.bounds.width : parseInt(a.getAttribute("width")) * this.scale;
            d = parseInt(a.getAttribute("height")) * this.scale
        } else {
            b = a.getBBox();
            if (b.width == 0 && b.height == 0)return;
            this.boundingBox = new mxRectangle(b.x, b.y, b.width, b.height);
            b = 0
        } else {
            d = this.state.view.textDiv;
            if (this.offsetWidth != null && this.offsetHeight != null) {
                c = this.wrap ? this.bounds.width : this.offsetWidth * this.scale;
                d = this.offsetHeight * this.scale
            } else if (d != null) {
                this.updateFont(d);
                this.updateSize(d);
                if (mxUtils.isNode(this.value))d.innerHTML =
                    this.value.outerHTML; else {
                    c = this.replaceLinefeeds ? this.value.replace(/\n/g, "<br/>") : this.value;
                    d.innerHTML = c
                }
                c = this.wrap ? this.bounds.width : d.offsetWidth * this.scale;
                d = d.offsetHeight * this.scale
            } else {
                c = this.wrap ? this.bounds.width : a.offsetWidth * this.scale;
                d = a.offsetHeight * this.scale
            }
        }
        if (c != null && d != null)this.boundingBox = new mxRectangle(this.bounds.x + this.margin.x * c, this.bounds.y + this.margin.y * d, c, d)
    } else {
        this.boundingBox.x = this.boundingBox.x + this.margin.x * this.boundingBox.width;
        this.boundingBox.y = this.boundingBox.y +
            this.margin.y * this.boundingBox.height
    }
    if (this.boundingBox != null) {
        if (b != 0) {
            b = mxUtils.getBoundingBox(this.boundingBox, b);
            this.boundingBox.x = b.x;
            this.boundingBox.y = b.y;
            if (!mxClient.IS_QUIRKS) {
                this.boundingBox.width = b.width;
                this.boundingBox.height = b.height
            }
        }
        this.boundingBox.x = Math.floor(this.boundingBox.x);
        this.boundingBox.y = Math.floor(this.boundingBox.y);
        this.boundingBox.width = Math.ceil(this.boundingBox.width);
        this.boundingBox.height = Math.ceil(this.boundingBox.height)
    }
};
mxText.prototype.getShapeRotation = function () {
    return 0
};
mxText.prototype.getTextRotation = function () {
    return this.state != null && this.state.shape != null ? this.state.shape.getTextRotation() : 0
};
mxText.prototype.isPaintBoundsInverted = function () {
    return!this.horizontal && this.state != null && this.state.view.graph.model.isVertex(this.state.cell)
};
mxText.prototype.configureCanvas = function (a, b, c, d, e) {
    mxShape.prototype.configureCanvas.apply(this, arguments);
    a.setFontColor(this.color);
    a.setFontBackgroundColor(this.background);
    a.setFontBorderColor(this.border);
    a.setFontFamily(this.family);
    a.setFontSize(this.size);
    a.setFontStyle(this.fontStyle)
};
mxText.prototype.updateVmlContainer = function () {
    this.node.style.left = Math.round(this.bounds.x) + "px";
    this.node.style.top = Math.round(this.bounds.y) + "px";
    this.node.style.width = "1px";
    this.node.style.height = "1px";
    this.node.style.overflow = "visible"
};
mxText.prototype.paint = function (a) {
    var b = this.scale, c = this.bounds.x / b, d = this.bounds.y / b, e = this.bounds.width / b, b = this.bounds.height / b;
    this.updateTransform(a, c, d, e, b);
    this.configureCanvas(a, c, d, e, b);
    var f = mxUtils.isNode(this.value) || this.dialect == mxConstants.DIALECT_STRICTHTML, g = f || a instanceof mxVmlCanvas2D ? "html" : "", h = this.value;
    !f && g == "html" && (h = mxUtils.htmlEntities(h, false));
    h = !mxUtils.isNode(this.value) && this.replaceLinefeeds && g == "html" ? h.replace(/\n/g, "<br/>") : h;
    a.text(c, d, e, b, h, this.align, this.valign,
        this.wrap, g, this.overflow == "fill", this.clipped, this.getTextRotation())
};
mxText.prototype.redrawHtmlShape = function () {
    var a = this.node.style;
    a.opacity = this.opacity < 1 ? this.opacity : "";
    a.overflow = "";
    a.width = "";
    a.height = "";
    this.updateFont(this.node);
    this.updateSize(this.node);
    this.updateValue();
    this.offsetHeight = this.offsetWidth = null;
    mxClient.CSS_PREFIX != null ? this.updateHtmlTransform() : this.updateHtmlFilter()
};
mxText.prototype.updateHtmlTransform = function () {
    var a = this.getTextRotation(), b = this.node.style, c = this.margin.x, d = this.margin.y;
    if (a != 0) {
        b[mxClient.CSS_PREFIX + "TransformOrigin"] = -c * 100 + "% " + -d * 100 + "%";
        b[mxClient.CSS_PREFIX + "Transform"] = "translate(" + c * 100 + "%," + d * 100 + "%)scale(" + this.scale + ") rotate(" + a + "deg)"
    } else {
        b[mxClient.CSS_PREFIX + "TransformOrigin"] = "0% 0%";
        b[mxClient.CSS_PREFIX + "Transform"] = "scale(" + this.scale + ")translate(" + c * 100 + "%," + d * 100 + "%)"
    }
    b.left = Math.round(this.bounds.x) + "px";
    b.top = Math.round(this.bounds.y) +
        "px"
};
mxText.prototype.updateHtmlFilter = function () {
    var a = this.node.style, b = this.margin.x, c = this.margin.y, d = this.scale;
    a.filter = "";
    var e = 0, f = 0, g = this.state != null ? this.state.view.textDiv : null;
    if (g != null) {
        g.style.overflow = "";
        g.style.height = "";
        g.style.width = "";
        this.updateFont(g);
        this.updateSize(g);
        if (mxUtils.isNode(this.value))g.innerHTML = this.value.outerHTML; else {
            var h = this.value;
            this.dialect != mxConstants.DIALECT_STRICTHTML && (h = mxUtils.htmlEntities(h, false));
            h = this.replaceLinefeeds ? h.replace(/\n/g, "<br/>") : h;
            g.innerHTML = h
        }
        e = g.offsetWidth + 2;
        f = g.offsetHeight + 2
    } else {
        e = this.node.offsetWidth;
        f = this.node.offsetHeight + 1
    }
    this.offsetWidth = e;
    this.offsetHeight = f;
    g = this.bounds.width / d;
    h = this.bounds.height / d;
    if (mxClient.IS_QUIRKS && (this.clipped || this.overflow == "fill") && h > 0) {
        h = Math.min(h, f);
        a.height = Math.round(h + 1) + "px"
    } else h = f;
    if (this.overflow != "fill")if (mxClient.IS_QUIRKS && (this.clipped || this.wrap) && g > 0) {
        g = Math.min(g, e);
        a.width = Math.round(g) + "px"
    } else g = e;
    var h = h * d, g = g * d, e = this.getTextRotation() * (Math.PI / 180), f =
        parseFloat(parseFloat(Math.cos(e)).toFixed(8)), k = parseFloat(parseFloat(Math.sin(-e)).toFixed(8)), e = e % (2 * Math.PI);
    e < 0 && (e = e + 2 * Math.PI);
    e = e % Math.PI;
    e > Math.PI / 2 && (e = Math.PI - e);
    var i = Math.cos(e), l = Math.sin(-e), b = g * -(b + 0.5), c = h * -(c + 0.5), n = (h - h * i + g * l) / 2 + k * b - f * c;
    if (e != 0)a.filter = "progid:DXImageTransform.Microsoft.Matrix(M11=" + f + ", M12=" + k + ", M21=" + -k + ", M22=" + f + ", sizingMethod='auto expand')";
    a.zoom = d;
    a.left = Math.round(this.bounds.x + ((g - g * i + h * l) / 2 - f * b - k * c) - g / 2) + "px";
    a.top = Math.round(this.bounds.y + n - h / 2) +
        "px"
};
mxText.prototype.updateValue = function () {
    if (mxUtils.isNode(this.value)) {
        this.node.innerHTML = "";
        this.node.appendChild(this.value)
    } else {
        var a = this.value;
        this.dialect != mxConstants.DIALECT_STRICTHTML && (a = mxUtils.htmlEntities(a, false));
        var a = this.replaceLinefeeds ? a.replace(/\n/g, "<br/>") : a, b = this.background != null && this.background != mxConstants.NONE ? this.background : null, c = this.border != null && this.border != mxConstants.NONE ? this.border : null;
        if (b != null || c != null)if (this.overflow == "fill") {
            if (b != null)this.node.style.backgroundColor = b;
            if (c != null)this.node.style.border = "1px solid " + c
        } else {
            var d = "";
            b != null && (d = d + ("background-color:" + b + ";"));
            c != null && (d = d + ("border:1px solid " + c + ";"));
            a = '<div style="zoom:1;' + d + "display:inline-block;_display:inline;padding-bottom:1px;padding-right:1px;line-height:" + this.node.style.lineHeight + '">' + a + "</div>";
            this.node.style.lineHeight = ""
        }
        this.node.innerHTML = a
    }
};
mxText.prototype.updateFont = function (a) {
    a = a.style;
    a.lineHeight = Math.round(this.size * mxConstants.LINE_HEIGHT) + "px";
    a.fontSize = Math.round(this.size) + "px";
    a.fontFamily = this.family;
    a.verticalAlign = "top";
    a.color = this.color;
    a.fontWeight = (this.fontStyle & mxConstants.FONT_BOLD) == mxConstants.FONT_BOLD ? "bold" : "";
    a.fontStyle = (this.fontStyle & mxConstants.FONT_ITALIC) == mxConstants.FONT_ITALIC ? "italic" : "";
    a.fontDecoration = (this.fontStyle & mxConstants.FONT_UNDERLINE) == mxConstants.FONT_UNDERLINE ? "underline" : "";
    a.textAlign =
        this.align == mxConstants.ALIGN_CENTER ? "center" : this.align == mxConstants.ALIGN_RIGHT ? "right" : "left"
};
mxText.prototype.updateSize = function (a) {
    var b = Math.round(this.bounds.width / this.scale), c = Math.round(this.bounds.height / this.scale), a = a.style;
    if (this.clipped) {
        a.overflow = "hidden";
        if (c > 0)a.maxHeight = c + "px";
        if (b > 0)a.width = b + "px"
    } else if (this.overflow == "fill") {
        a.width = b + "px";
        if (c > 0)a.maxHeight = c + "px"
    }
    if (this.wrap) {
        if (!this.clipped && b > 0)a.width = b + "px";
        a.whiteSpace = "normal"
    } else a.whiteSpace = "nowrap"
};
mxText.prototype.updateMargin = function () {
    this.margin = mxUtils.getAlignmentAsPoint(this.align, this.valign)
};
mxText.prototype.getSpacing = function () {
    var a = 0, b = 0, a = this.align == mxConstants.ALIGN_CENTER ? (this.spacingLeft - this.spacingRight) / 2 : this.align == mxConstants.ALIGN_RIGHT ? -this.spacingRight - this.baseSpacingRight : this.spacingLeft + this.baseSpacingLeft, b = this.valign == mxConstants.ALIGN_MIDDLE ? (this.spacingTop - this.spacingBottom) / 2 : this.valign == mxConstants.ALIGN_BOTTOM ? -this.spacingBottom - this.baseSpacingBottom : this.spacingTop + this.baseSpacingTop;
    return new mxPoint(a, b)
};
function mxTriangle() {
    mxActor.call(this)
}
mxUtils.extend(mxTriangle, mxActor);
mxTriangle.prototype.redrawPath = function (a, b, c, d, e) {
    a.moveTo(0, 0);
    a.lineTo(d, 0.5 * e);
    a.lineTo(0, e);
    a.close()
};
function mxHexagon() {
    mxActor.call(this)
}
mxUtils.extend(mxHexagon, mxActor);
mxHexagon.prototype.redrawPath = function (a, b, c, d, e) {
    a.moveTo(0.25 * d, 0);
    a.lineTo(0.75 * d, 0);
    a.lineTo(d, 0.5 * e);
    a.lineTo(0.75 * d, e);
    a.lineTo(0.25 * d, e);
    a.lineTo(0, 0.5 * e);
    a.close()
};
function mxLine(a, b, c) {
    mxShape.call(this);
    this.bounds = a;
    this.stroke = b;
    this.strokewidth = c != null ? c : 1
}
mxUtils.extend(mxLine, mxShape);
mxLine.prototype.paintVertexShape = function (a, b, c, d, e) {
    c = c + e / 2;
    a.begin();
    a.moveTo(b, c);
    a.lineTo(b + d, c);
    a.stroke()
};
function mxImageShape(a, b, c, d, e) {
    mxShape.call(this);
    this.bounds = a;
    this.image = b;
    this.fill = c;
    this.stroke = d;
    this.strokewidth = e != null ? e : 1;
    this.shadow = false
}
mxUtils.extend(mxImageShape, mxRectangleShape);
mxImageShape.prototype.preserveImageAspect = true;
mxImageShape.prototype.getSvgScreenOffset = function () {
    return!mxClient.IS_IE ? 0.5 : 0
};
mxImageShape.prototype.apply = function (a) {
    mxShape.prototype.apply.apply(this, arguments);
    this.gradient = this.stroke = this.fill = null;
    if (this.style != null) {
        this.fill = mxUtils.getValue(this.style, mxConstants.STYLE_IMAGE_BACKGROUND);
        this.stroke = mxUtils.getValue(this.style, mxConstants.STYLE_IMAGE_BORDER);
        this.preserveImageAspect = mxUtils.getNumber(this.style, mxConstants.STYLE_IMAGE_ASPECT, 1) == 1;
        this.flipH = this.flipH || mxUtils.getValue(this.style, "imageFlipH", 0) == 1;
        this.flipV = this.flipV || mxUtils.getValue(this.style,
            "imageFlipV", 0) == 1
    }
};
mxImageShape.prototype.isHtmlAllowed = function () {
    return!this.preserveImageAspect
};
mxImageShape.prototype.createHtml = function () {
    var a = document.createElement("div");
    a.style.position = "absolute";
    return a
};
mxImageShape.prototype.paintVertexShape = function (a, b, c, d, e) {
    if (this.image != null) {
        var f = mxUtils.getValue(this.style, mxConstants.STYLE_IMAGE_BACKGROUND, null), g = mxUtils.getValue(this.style, mxConstants.STYLE_IMAGE_BORDER, null);
        if (f != null || g != null) {
            a.setFillColor(f);
            a.setStrokeColor(g);
            a.rect(b, c, d, e);
            a.fillAndStroke()
        }
        a.image(b, c, d, e, this.image, this.preserveImageAspect, false, false)
    } else mxRectangleShape.prototype.paintBackground.apply(this, arguments)
};
mxImageShape.prototype.redrawHtmlShape = function () {
    this.node.style.left = Math.round(this.bounds.x) + "px";
    this.node.style.top = Math.round(this.bounds.y) + "px";
    this.node.style.width = Math.max(0, Math.round(this.bounds.width)) + "px";
    this.node.style.height = Math.max(0, Math.round(this.bounds.height)) + "px";
    this.node.style.backgroundColor = this.fill || "";
    this.node.style.borderColor = this.stroke || "";
    this.node.innerHTML = "";
    if (this.image != null) {
        var a = document.createElement(mxClient.IS_IE6 || mxClient.CSS_PREFIX == null && this.rotation !=
            0 ? mxClient.VML_PREFIX + ":image" : "img");
        a.style.position = "absolute";
        a.src = this.image;
        var b = this.opacity < 100 ? "alpha(opacity=" + this.opacity + ")" : "";
        this.node.style.filter = b;
        this.flipH && this.flipV ? b = b + "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)" : this.flipH ? b = b + "progid:DXImageTransform.Microsoft.BasicImage(mirror=1)" : this.flipV && (b = b + "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)");
        if (a.style.filter != b)a.style.filter = b;
        a.nodeName == "image" ? a.style.rotation = this.rotation :
            a.style[mxClient.CSS_PREFIX + "Transform"] = "rotate(" + this.rotation + "deg)";
        a.style.width = this.node.style.width;
        a.style.height = this.node.style.height;
        this.node.style.backgroundImage = "";
        this.node.appendChild(a)
    } else this.setTransparentBackgroundImage(this.node)
};
function mxLabel(a, b, c, d) {
    mxRectangleShape.call(this, a, b, c, d)
}
mxUtils.extend(mxLabel, mxRectangleShape);
mxLabel.prototype.imageSize = mxConstants.DEFAULT_IMAGESIZE;
mxLabel.prototype.spacing = 2;
mxLabel.prototype.indicatorSize = 10;
mxLabel.prototype.indicatorSpacing = 2;
mxLabel.prototype.init = function (a) {
    mxShape.prototype.init.apply(this, arguments);
    if (this.indicatorColor != null && this.indicatorShape != null) {
        this.indicator = new this.indicatorShape;
        this.indicator.dialect = this.dialect;
        this.indicator.bounds = this.bounds;
        this.indicator.fill = this.indicatorColor;
        this.indicator.stroke = this.indicatorColor;
        this.indicator.gradient = this.indicatorGradientColor;
        this.indicator.direction = this.indicatorDirection;
        this.indicator.init(this.node)
    }
};
mxLabel.prototype.redraw = function () {
    if (this.indicator != null) {
        this.indicator.fill = this.indicatorColor;
        this.indicator.stroke = this.indicatorColor;
        this.indicator.gradient = this.indicatorGradientColor;
        this.indicator.direction = this.indicatorDirection
    }
    mxShape.prototype.redraw.apply(this, arguments)
};
mxLabel.prototype.isHtmlAllowed = function () {
    return mxRectangleShape.prototype.isHtmlAllowed.apply(this, arguments) && this.indicatorColor == null && this.indicatorShape == null
};
mxLabel.prototype.paintForeground = function (a, b, c, d, e) {
    this.paintImage(a, b, c, d, e);
    this.paintIndicator(a, b, c, d, e);
    mxRectangleShape.prototype.paintForeground.apply(this, arguments)
};
mxLabel.prototype.paintImage = function (a, b, c, d, e) {
    if (this.image != null) {
        b = this.getImageBounds(b, c, d, e);
        a.image(b.x, b.y, b.width, b.height, this.image, false, false, false)
    }
};
mxLabel.prototype.getImageBounds = function (a, b, c, d) {
    var e = mxUtils.getValue(this.style, mxConstants.STYLE_IMAGE_ALIGN, mxConstants.ALIGN_LEFT), f = mxUtils.getValue(this.style, mxConstants.STYLE_IMAGE_VERTICAL_ALIGN, mxConstants.ALIGN_MIDDLE), g = mxUtils.getNumber(this.style, mxConstants.STYLE_IMAGE_WIDTH, mxConstants.DEFAULT_IMAGESIZE), h = mxUtils.getNumber(this.style, mxConstants.STYLE_IMAGE_HEIGHT, mxConstants.DEFAULT_IMAGESIZE), k = mxUtils.getNumber(this.style, mxConstants.STYLE_SPACING, this.spacing) + 5, a = e == mxConstants.ALIGN_CENTER ?
        a + (c - g) / 2 : e == mxConstants.ALIGN_RIGHT ? a + (c - g - k) : a + k, b = f == mxConstants.ALIGN_TOP ? b + k : f == mxConstants.ALIGN_BOTTOM ? b + (d - h - k) : b + (d - h) / 2;
    return new mxRectangle(a, b, g, h)
};
mxLabel.prototype.paintIndicator = function (a, b, c, d, e) {
    if (this.indicator != null) {
        this.indicator.bounds = this.getIndicatorBounds(b, c, d, e);
        this.indicator.paint(a)
    } else if (this.indicatorImage != null) {
        b = this.getIndicatorBounds(b, c, d, e);
        a.image(b.x, b.y, b.width, b.height, this.indicatorImage, false, false, false)
    }
};
mxLabel.prototype.getIndicatorBounds = function (a, b, c, d) {
    var e = mxUtils.getValue(this.style, mxConstants.STYLE_IMAGE_ALIGN, mxConstants.ALIGN_LEFT), f = mxUtils.getValue(this.style, mxConstants.STYLE_IMAGE_VERTICAL_ALIGN, mxConstants.ALIGN_MIDDLE), g = mxUtils.getNumber(this.style, mxConstants.STYLE_INDICATOR_WIDTH, this.indicatorSize), h = mxUtils.getNumber(this.style, mxConstants.STYLE_INDICATOR_HEIGHT, this.indicatorSize), k = this.spacing + 5, a = e == mxConstants.ALIGN_RIGHT ? a + (c - g - k) : e == mxConstants.ALIGN_CENTER ? a + (c - g) /
        2 : a + k, b = f == mxConstants.ALIGN_BOTTOM ? b + (d - h - k) : f == mxConstants.ALIGN_TOP ? b + k : b + (d - h) / 2;
    return new mxRectangle(a, b, g, h)
};
mxLabel.prototype.redrawHtmlShape = function () {
    for (mxRectangleShape.prototype.redrawHtmlShape.apply(this, arguments); this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);
    if (this.image != null) {
        var a = document.createElement("img");
        a.style.position = "relative";
        a.setAttribute("border", "0");
        var b = this.getImageBounds(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height);
        b.x = b.x - this.bounds.x;
        b.y = b.y - this.bounds.y;
        a.style.left = Math.round(b.x) + "px";
        a.style.top = Math.round(b.y) + "px";
        a.style.width = Math.round(b.width) + "px";
        a.style.height = Math.round(b.height) + "px";
        a.src = this.image;
        this.node.appendChild(a)
    }
};
function mxCylinder(a, b, c, d) {
    mxShape.call(this);
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = d != null ? d : 1
}
mxUtils.extend(mxCylinder, mxShape);
mxCylinder.prototype.maxHeight = 40;
mxCylinder.prototype.svgStrokeTolerance = 0;
mxCylinder.prototype.paintVertexShape = function (a, b, c, d, e) {
    a.translate(b, c);
    a.begin();
    this.redrawPath(a, b, c, d, e, false);
    a.fillAndStroke();
    a.setShadow(false);
    a.begin();
    this.redrawPath(a, b, c, d, e, true);
    a.stroke()
};
mxCylinder.prototype.redrawPath = function (a, b, c, d, e, f) {
    b = Math.min(this.maxHeight, Math.round(e / 5));
    if (f && this.fill != null || !f && this.fill == null) {
        a.moveTo(0, b);
        a.curveTo(0, 2 * b, d, 2 * b, d, b);
        if (!f) {
            a.stroke();
            a.begin()
        }
    }
    if (!f) {
        a.moveTo(0, b);
        a.curveTo(0, -b / 3, d, -b / 3, d, b);
        a.lineTo(d, e - b);
        a.curveTo(d, e + b / 3, 0, e + b / 3, 0, e - b);
        a.close()
    }
};
function mxConnector(a, b, c) {
    mxPolyline.call(this, a, b, c)
}
mxUtils.extend(mxConnector, mxPolyline);
mxConnector.prototype.paintEdgeShape = function (a, b) {
    var c = this.createMarker(a, b, true), d = this.createMarker(a, b, false);
    this.style == null || this.style[mxConstants.STYLE_CURVED] != 1 ? this.paintLine(a, b, this.isRounded) : this.paintCurvedLine(a, b);
    a.setFillColor(this.stroke);
    a.setShadow(false);
    a.setDashed(false);
    c != null && c();
    d != null && d()
};
mxConnector.prototype.paintCurvedLine = function (a, b) {
    a.begin();
    var c = b[0], d = b.length;
    a.moveTo(c.x, c.y);
    for (c = 1; c < d - 2; c++) {
        var e = b[c], f = b[c + 1];
        a.quadTo(e.x, e.y, (e.x + f.x) / 2, (e.y + f.y) / 2)
    }
    e = b[d - 2];
    f = b[d - 1];
    a.quadTo(e.x, e.y, f.x, f.y);
    a.stroke()
};
mxConnector.prototype.createMarker = function (a, b, c) {
    var d = b.length, e = c ? b[1] : b[d - 2], b = c ? b[0] : b[d - 1], d = b.x - e.x, f = b.y - e.y, g = Math.max(1, Math.sqrt(d * d + f * f)), e = d / g, d = f / g, f = mxUtils.getNumber(this.style, c ? mxConstants.STYLE_STARTSIZE : mxConstants.STYLE_ENDSIZE, mxConstants.DEFAULT_MARKERSIZE), g = mxUtils.getValue(this.style, c ? mxConstants.STYLE_STARTARROW : mxConstants.STYLE_ENDARROW);
    return mxMarker.createMarker(a, this, g, b, e, d, f, c, this.strokewidth, this.style[c ? mxConstants.STYLE_STARTFILL : mxConstants.STYLE_ENDFILL] !=
        0)
};
mxConnector.prototype.augmentBoundingBox = function (a) {
    mxShape.prototype.augmentBoundingBox.apply(this, arguments);
    var b = 0;
    mxUtils.getValue(this.style, mxConstants.STYLE_STARTARROW, mxConstants.NONE) != mxConstants.NONE && (b = mxUtils.getNumber(this.style, mxConstants.STYLE_STARTSIZE, mxConstants.DEFAULT_MARKERSIZE) + 1);
    mxUtils.getValue(this.style, mxConstants.STYLE_ENDARROW, mxConstants.NONE) != mxConstants.NONE && (b = Math.max(b, mxUtils.getNumber(this.style, mxConstants.STYLE_ENDSIZE, mxConstants.DEFAULT_MARKERSIZE)) + 1);
    a.grow(Math.ceil(b * this.scale))
};
function mxSwimlane(a, b, c, d) {
    mxShape.call(this);
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = d != null ? d : 1
}
mxUtils.extend(mxSwimlane, mxShape);
mxSwimlane.prototype.imageSize = 16;
mxSwimlane.prototype.getGradientBounds = function (a, b, c, d, e) {
    a = Math.min(e, mxUtils.getValue(this.style, mxConstants.STYLE_STARTSIZE, mxConstants.DEFAULT_STARTSIZE));
    return new mxRectangle(b, c, d, a)
};
mxSwimlane.prototype.getRotation = function () {
    var a = mxShape.prototype.getRotation.apply(this, arguments);
    mxUtils.getValue(this.style, mxConstants.STYLE_HORIZONTAL, 1) != 1 && (a = a + mxText.prototype.verticalTextRotation);
    return a
};
mxSwimlane.prototype.getTextRotation = function () {
    return this.getRotation()
};
mxSwimlane.prototype.isPaintBoundsInverted = function () {
    return mxShape.prototype.isPaintBoundsInverted.apply(this, arguments) || mxUtils.getValue(this.style, mxConstants.STYLE_HORIZONTAL, 1) != 1
};
mxSwimlane.prototype.getArcSize = function (a, b, c) {
    a = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, mxConstants.RECTANGLE_ROUNDING_FACTOR * 100) / 100;
    return c * a * 3
};
mxSwimlane.prototype.paintVertexShape = function (a, b, c, d, e) {
    var f = Math.min(e, mxUtils.getValue(this.style, mxConstants.STYLE_STARTSIZE, mxConstants.DEFAULT_STARTSIZE)), g = mxUtils.getValue(this.style, mxConstants.STYLE_SWIMLANE_FILLCOLOR, mxConstants.NONE), h = mxUtils.getValue(this.style, mxConstants.STYLE_SWIMLANE_LINE, 1) == 1, k = 0;
    a.translate(b, c);
    if (this.isRounded) {
        k = this.getArcSize(d, e, f);
        this.paintRoundedSwimlane(a, b, c, d, e, f, k, g, h)
    } else this.paintSwimlane(a, b, c, d, e, f, g, h);
    g = mxUtils.getValue(this.style, mxConstants.STYLE_SEPARATORCOLOR,
        mxConstants.NONE);
    this.paintSeparator(a, d, f, e, g);
    if (this.image != null) {
        e = this.getImageBounds(b, f, d, e);
        a.image(e.x - b, e.y - c, e.width, e.height, this.image, false, false, false)
    }
    if (this.glass) {
        a.setShadow(false);
        this.paintGlassEffect(a, 0, 0, d, f, k)
    }
};
mxSwimlane.prototype.paintSwimlane = function (a, b, c, d, e, f, g, h) {
    if (g != mxConstants.NONE) {
        a.save();
        a.setFillColor(g);
        a.rect(0, 0, d, e);
        a.fillAndStroke();
        a.restore();
        a.setShadow(false)
    }
    a.begin();
    a.moveTo(0, f);
    a.lineTo(0, 0);
    a.lineTo(d, 0);
    a.lineTo(d, f);
    h && a.close();
    a.fillAndStroke();
    if (f < e && g == mxConstants.NONE) {
        a.pointerEvents = false;
        a.begin();
        a.moveTo(0, f);
        a.lineTo(0, e);
        a.lineTo(d, e);
        a.lineTo(d, f);
        a.stroke()
    }
};
mxSwimlane.prototype.paintRoundedSwimlane = function (a, b, c, d, e, f, g, h, k) {
    if (h != mxConstants.NONE) {
        a.save();
        a.setFillColor(h);
        a.roundrect(0, 0, d, e, g, g);
        a.fillAndStroke();
        a.restore();
        a.setShadow(false)
    }
    a.begin();
    a.moveTo(d, f);
    a.lineTo(d, g);
    a.quadTo(d, 0, d - Math.min(d / 2, g), 0);
    a.lineTo(Math.min(d / 2, g), 0);
    a.quadTo(0, 0, 0, g);
    a.lineTo(0, f);
    k && a.close();
    a.fillAndStroke();
    if (f < e && h == mxConstants.NONE) {
        a.pointerEvents = false;
        a.begin();
        a.moveTo(0, f);
        a.lineTo(0, e - g);
        a.quadTo(0, e, Math.min(d / 2, g), e);
        a.lineTo(d - Math.min(d /
            2, g), e);
        a.quadTo(d, e, d, e - g);
        a.lineTo(d, f);
        a.stroke()
    }
};
mxSwimlane.prototype.paintSeparator = function (a, b, c, d, e) {
    if (e != mxConstants.NONE) {
        a.setStrokeColor(e);
        a.setDashed(true);
        a.begin();
        a.moveTo(b, c);
        a.lineTo(b, d);
        a.stroke();
        a.setDashed(false)
    }
};
mxSwimlane.prototype.getImageBounds = function (a, b, c) {
    return new mxRectangle(a + c - this.imageSize, b, this.imageSize, this.imageSize)
};
function mxGraphModel(a) {
    this.currentEdit = this.createUndoableEdit();
    a != null ? this.setRoot(a) : this.clear()
}
mxGraphModel.prototype = new mxEventSource;
mxGraphModel.prototype.constructor = mxGraphModel;
mxGraphModel.prototype.root = null;
mxGraphModel.prototype.cells = null;
mxGraphModel.prototype.maintainEdgeParent = true;
mxGraphModel.prototype.createIds = true;
mxGraphModel.prototype.prefix = "";
mxGraphModel.prototype.postfix = "";
mxGraphModel.prototype.nextId = 0;
mxGraphModel.prototype.currentEdit = null;
mxGraphModel.prototype.updateLevel = 0;
mxGraphModel.prototype.endingUpdate = false;
mxGraphModel.prototype.clear = function () {
    this.setRoot(this.createRoot())
};
mxGraphModel.prototype.isCreateIds = function () {
    return this.createIds
};
mxGraphModel.prototype.setCreateIds = function (a) {
    this.createIds = a
};
mxGraphModel.prototype.createRoot = function () {
    var a = new mxCell;
    a.insert(new mxCell);
    return a
};
mxGraphModel.prototype.getCell = function (a) {
    return this.cells != null ? this.cells[a] : null
};
mxGraphModel.prototype.filterCells = function (a, b) {
    var c = null;
    if (a != null)for (var c = [], d = 0; d < a.length; d++)b(a[d]) && c.push(a[d]);
    return c
};
mxGraphModel.prototype.getDescendants = function (a) {
    return this.filterDescendants(null, a)
};
mxGraphModel.prototype.filterDescendants = function (a, b) {
    var c = [], b = b || this.getRoot();
    (a == null || a(b)) && c.push(b);
    for (var d = this.getChildCount(b), e = 0; e < d; e++)var f = this.getChildAt(b, e), c = c.concat(this.filterDescendants(a, f));
    return c
};
mxGraphModel.prototype.getRoot = function (a) {
    var b = a || this.root;
    if (a != null)for (; a != null;) {
        b = a;
        a = this.getParent(a)
    }
    return b
};
mxGraphModel.prototype.setRoot = function (a) {
    this.execute(new mxRootChange(this, a));
    return a
};
mxGraphModel.prototype.rootChanged = function (a) {
    var b = this.root;
    this.root = a;
    this.nextId = 0;
    this.cells = null;
    this.cellAdded(a);
    return b
};
mxGraphModel.prototype.isRoot = function (a) {
    return a != null && this.root == a
};
mxGraphModel.prototype.isLayer = function (a) {
    return this.isRoot(this.getParent(a))
};
mxGraphModel.prototype.isAncestor = function (a, b) {
    for (; b != null && b != a;)b = this.getParent(b);
    return b == a
};
mxGraphModel.prototype.contains = function (a) {
    return this.isAncestor(this.root, a)
};
mxGraphModel.prototype.getParent = function (a) {
    return a != null ? a.getParent() : null
};
mxGraphModel.prototype.add = function (a, b, c) {
    if (b != a && a != null && b != null) {
        c == null && (c = this.getChildCount(a));
        var d = a != this.getParent(b);
        this.execute(new mxChildChange(this, a, b, c));
        this.maintainEdgeParent && d && this.updateEdgeParents(b)
    }
    return b
};
mxGraphModel.prototype.cellAdded = function (a) {
    if (a != null) {
        a.getId() == null && this.createIds && a.setId(this.createId(a));
        if (a.getId() != null) {
            var b = this.getCell(a.getId());
            if (b != a) {
                for (; b != null;) {
                    a.setId(this.createId(a));
                    b = this.getCell(a.getId())
                }
                if (this.cells == null)this.cells = {};
                this.cells[a.getId()] = a
            }
        }
        if (mxUtils.isNumeric(a.getId()))this.nextId = Math.max(this.nextId, a.getId());
        for (var b = this.getChildCount(a), c = 0; c < b; c++)this.cellAdded(this.getChildAt(a, c))
    }
};
mxGraphModel.prototype.createId = function () {
    var a = this.nextId;
    this.nextId++;
    return this.prefix + a + this.postfix
};
mxGraphModel.prototype.updateEdgeParents = function (a, b) {
    for (var b = b || this.getRoot(a), c = this.getChildCount(a), d = 0; d < c; d++)this.updateEdgeParents(this.getChildAt(a, d), b);
    for (var e = this.getEdgeCount(a), c = [], d = 0; d < e; d++)c.push(this.getEdgeAt(a, d));
    for (d = 0; d < c.length; d++) {
        e = c[d];
        this.isAncestor(b, e) && this.updateEdgeParent(e, b)
    }
};
mxGraphModel.prototype.updateEdgeParent = function (a, b) {
    for (var c = this.getTerminal(a, true), d = this.getTerminal(a, false), e = null; c != null && !this.isEdge(c) && c.geometry != null && c.geometry.relative;)c = this.getParent(c);
    for (; d != null && !this.isEdge(d) && d.geometry != null && d.geometry.relative;)d = this.getParent(d);
    if (this.isAncestor(b, c) && this.isAncestor(b, d)) {
        e = c == d ? this.getParent(c) : this.getNearestCommonAncestor(c, d);
        if (e != null && (this.getParent(e) != this.root || this.isAncestor(e, a)) && this.getParent(a) != e) {
            c = this.getGeometry(a);
            if (c != null) {
                var f = this.getOrigin(this.getParent(a)), g = this.getOrigin(e), d = g.x - f.x, f = g.y - f.y, c = c.clone();
                c.translate(-d, -f);
                this.setGeometry(a, c)
            }
            this.add(e, a, this.getChildCount(e))
        }
    }
};
mxGraphModel.prototype.getOrigin = function (a) {
    var b = null;
    if (a != null) {
        b = this.getOrigin(this.getParent(a));
        if (!this.isEdge(a)) {
            a = this.getGeometry(a);
            if (a != null) {
                b.x = b.x + a.x;
                b.y = b.y + a.y
            }
        }
    } else b = new mxPoint;
    return b
};
mxGraphModel.prototype.getNearestCommonAncestor = function (a, b) {
    if (a != null && b != null) {
        var c = mxCellPath.create(b);
        if (c != null && c.length > 0) {
            var d = a, e = mxCellPath.create(d);
            if (c.length < e.length)var d = b, f = e, e = c, c = f;
            for (; d != null;) {
                f = this.getParent(d);
                if (c.indexOf(e + mxCellPath.PATH_SEPARATOR) == 0 && f != null)return d;
                e = mxCellPath.getParentPath(e);
                d = f
            }
        }
    }
    return null
};
mxGraphModel.prototype.remove = function (a) {
    a == this.root ? this.setRoot(null) : this.getParent(a) != null && this.execute(new mxChildChange(this, null, a));
    return a
};
mxGraphModel.prototype.cellRemoved = function (a) {
    if (a != null && this.cells != null) {
        for (var b = this.getChildCount(a) - 1; b >= 0; b--)this.cellRemoved(this.getChildAt(a, b));
        this.cells != null && a.getId() != null && delete this.cells[a.getId()]
    }
};
mxGraphModel.prototype.parentForCellChanged = function (a, b, c) {
    var d = this.getParent(a);
    if (b != null)(b != d || d.getIndex(a) != c) && b.insert(a, c); else if (d != null) {
        c = d.getIndex(a);
        d.remove(c)
    }
    !this.contains(d) && b != null ? this.cellAdded(a) : b == null && this.cellRemoved(a);
    return d
};
mxGraphModel.prototype.getChildCount = function (a) {
    return a != null ? a.getChildCount() : 0
};
mxGraphModel.prototype.getChildAt = function (a, b) {
    return a != null ? a.getChildAt(b) : null
};
mxGraphModel.prototype.getChildren = function (a) {
    return a != null ? a.children : null
};
mxGraphModel.prototype.getChildVertices = function (a) {
    return this.getChildCells(a, true, false)
};
mxGraphModel.prototype.getChildEdges = function (a) {
    return this.getChildCells(a, false, true)
};
mxGraphModel.prototype.getChildCells = function (a, b, c) {
    for (var b = b != null ? b : false, c = c != null ? c : false, d = this.getChildCount(a), e = [], f = 0; f < d; f++) {
        var g = this.getChildAt(a, f);
        (!c && !b || c && this.isEdge(g) || b && this.isVertex(g)) && e.push(g)
    }
    return e
};
mxGraphModel.prototype.getTerminal = function (a, b) {
    return a != null ? a.getTerminal(b) : null
};
mxGraphModel.prototype.setTerminal = function (a, b, c) {
    var d = b != this.getTerminal(a, c);
    this.execute(new mxTerminalChange(this, a, b, c));
    this.maintainEdgeParent && d && this.updateEdgeParent(a, this.getRoot());
    return b
};
mxGraphModel.prototype.setTerminals = function (a, b, c) {
    this.beginUpdate();
    try {
        this.setTerminal(a, b, true);
        this.setTerminal(a, c, false)
    } finally {
        this.endUpdate()
    }
};
mxGraphModel.prototype.terminalForCellChanged = function (a, b, c) {
    var d = this.getTerminal(a, c);
    b != null ? b.insertEdge(a, c) : d != null && d.removeEdge(a, c);
    return d
};
mxGraphModel.prototype.getEdgeCount = function (a) {
    return a != null ? a.getEdgeCount() : 0
};
mxGraphModel.prototype.getEdgeAt = function (a, b) {
    return a != null ? a.getEdgeAt(b) : null
};
mxGraphModel.prototype.getDirectedEdgeCount = function (a, b, c) {
    for (var d = 0, e = this.getEdgeCount(a), f = 0; f < e; f++) {
        var g = this.getEdgeAt(a, f);
        g != c && this.getTerminal(g, b) == a && d++
    }
    return d
};
mxGraphModel.prototype.getConnections = function (a) {
    return this.getEdges(a, true, true, false)
};
mxGraphModel.prototype.getIncomingEdges = function (a) {
    return this.getEdges(a, true, false, false)
};
mxGraphModel.prototype.getOutgoingEdges = function (a) {
    return this.getEdges(a, false, true, false)
};
mxGraphModel.prototype.getEdges = function (a, b, c, d) {
    for (var b = b != null ? b : true, c = c != null ? c : true, d = d != null ? d : true, e = this.getEdgeCount(a), f = [], g = 0; g < e; g++) {
        var h = this.getEdgeAt(a, g), k = this.getTerminal(h, true), i = this.getTerminal(h, false);
        (d && k == i || k != i && (b && i == a || c && k == a)) && f.push(h)
    }
    return f
};
mxGraphModel.prototype.getEdgesBetween = function (a, b, c) {
    var c = c != null ? c : false, d = this.getEdgeCount(a), e = this.getEdgeCount(b), f = a, g = d;
    if (e < d) {
        g = e;
        f = b
    }
    d = [];
    for (e = 0; e < g; e++) {
        var h = this.getEdgeAt(f, e), k = this.getTerminal(h, true), i = this.getTerminal(h, false), l = i == a && k == b;
        (k == a && i == b || !c && l) && d.push(h)
    }
    return d
};
mxGraphModel.prototype.getOpposites = function (a, b, c, d) {
    var c = c != null ? c : true, d = d != null ? d : true, e = [];
    if (a != null)for (var f = 0; f < a.length; f++) {
        var g = this.getTerminal(a[f], true), h = this.getTerminal(a[f], false);
        g == b && h != null && h != b && d ? e.push(h) : h == b && (g != null && g != b && c) && e.push(g)
    }
    return e
};
mxGraphModel.prototype.getTopmostCells = function (a) {
    for (var b = [], c = 0; c < a.length; c++) {
        for (var d = a[c], e = true, f = this.getParent(d); f != null;) {
            if (mxUtils.indexOf(a, f) >= 0) {
                e = false;
                break
            }
            f = this.getParent(f)
        }
        e && b.push(d)
    }
    return b
};
mxGraphModel.prototype.isVertex = function (a) {
    return a != null ? a.isVertex() : false
};
mxGraphModel.prototype.isEdge = function (a) {
    return a != null ? a.isEdge() : false
};
mxGraphModel.prototype.isConnectable = function (a) {
    return a != null ? a.isConnectable() : false
};
mxGraphModel.prototype.getValue = function (a) {
    return a != null ? a.getValue() : null
};
mxGraphModel.prototype.setValue = function (a, b) {
    this.execute(new mxValueChange(this, a, b));
    return b
};
mxGraphModel.prototype.valueForCellChanged = function (a, b) {
    return a.valueChanged(b)
};
mxGraphModel.prototype.getGeometry = function (a) {
    return a != null ? a.getGeometry() : null
};
mxGraphModel.prototype.setGeometry = function (a, b) {
    b != this.getGeometry(a) && this.execute(new mxGeometryChange(this, a, b));
    return b
};
mxGraphModel.prototype.geometryForCellChanged = function (a, b) {
    var c = this.getGeometry(a);
    a.setGeometry(b);
    return c
};
mxGraphModel.prototype.getStyle = function (a) {
    return a != null ? a.getStyle() : null
};
mxGraphModel.prototype.setStyle = function (a, b) {
    b != this.getStyle(a) && this.execute(new mxStyleChange(this, a, b));
    return b
};
mxGraphModel.prototype.styleForCellChanged = function (a, b) {
    var c = this.getStyle(a);
    a.setStyle(b);
    return c
};
mxGraphModel.prototype.isCollapsed = function (a) {
    return a != null ? a.isCollapsed() : false
};
mxGraphModel.prototype.setCollapsed = function (a, b) {
    b != this.isCollapsed(a) && this.execute(new mxCollapseChange(this, a, b));
    return b
};
mxGraphModel.prototype.collapsedStateForCellChanged = function (a, b) {
    var c = this.isCollapsed(a);
    a.setCollapsed(b);
    return c
};
mxGraphModel.prototype.isVisible = function (a) {
    return a != null ? a.isVisible() : false
};
mxGraphModel.prototype.setVisible = function (a, b) {
    b != this.isVisible(a) && this.execute(new mxVisibleChange(this, a, b));
    return b
};
mxGraphModel.prototype.visibleStateForCellChanged = function (a, b) {
    var c = this.isVisible(a);
    a.setVisible(b);
    return c
};
mxGraphModel.prototype.execute = function (a) {
    a.execute();
    this.beginUpdate();
    this.currentEdit.add(a);
    this.fireEvent(new mxEventObject(mxEvent.EXECUTE, "change", a));
    this.endUpdate()
};
mxGraphModel.prototype.beginUpdate = function () {
    this.updateLevel++;
    this.fireEvent(new mxEventObject(mxEvent.BEGIN_UPDATE))
};
mxGraphModel.prototype.endUpdate = function () {
    this.updateLevel--;
    if (!this.endingUpdate) {
        this.endingUpdate = this.updateLevel == 0;
        this.fireEvent(new mxEventObject(mxEvent.END_UPDATE, "edit", this.currentEdit));
        try {
            if (this.endingUpdate && !this.currentEdit.isEmpty()) {
                this.fireEvent(new mxEventObject(mxEvent.BEFORE_UNDO, "edit", this.currentEdit));
                var a = this.currentEdit;
                this.currentEdit = this.createUndoableEdit();
                a.notify();
                this.fireEvent(new mxEventObject(mxEvent.UNDO, "edit", a))
            }
        } finally {
            this.endingUpdate = false
        }
    }
};
mxGraphModel.prototype.createUndoableEdit = function () {
    var a = new mxUndoableEdit(this, true);
    a.notify = function () {
        a.source.fireEvent(new mxEventObject(mxEvent.CHANGE, "edit", a, "changes", a.changes));
        a.source.fireEvent(new mxEventObject(mxEvent.NOTIFY, "edit", a, "changes", a.changes))
    };
    return a
};
mxGraphModel.prototype.mergeChildren = function (a, b, c) {
    c = c != null ? c : true;
    this.beginUpdate();
    try {
        var d = {};
        this.mergeChildrenImpl(a, b, c, d);
        for (var e in d) {
            var f = d[e], g = this.getTerminal(f, true);
            if (g != null) {
                g = d[mxCellPath.create(g)];
                this.setTerminal(f, g, true)
            }
            g = this.getTerminal(f, false);
            if (g != null) {
                g = d[mxCellPath.create(g)];
                this.setTerminal(f, g, false)
            }
        }
    } finally {
        this.endUpdate()
    }
};
mxGraphModel.prototype.mergeChildrenImpl = function (a, b, c, d) {
    this.beginUpdate();
    try {
        for (var e = a.getChildCount(), f = 0; f < e; f++) {
            var g = a.getChildAt(f);
            if (typeof g.getId == "function") {
                var h = g.getId(), k = h != null && (!this.isEdge(g) || !c) ? this.getCell(h) : null;
                if (k == null) {
                    var i = g.clone();
                    i.setId(h);
                    i.setTerminal(g.getTerminal(true), true);
                    i.setTerminal(g.getTerminal(false), false);
                    k = b.insert(i);
                    this.cellAdded(k)
                }
                d[mxCellPath.create(g)] = k;
                this.mergeChildrenImpl(g, k, c, d)
            }
        }
    } finally {
        this.endUpdate()
    }
};
mxGraphModel.prototype.getParents = function (a) {
    var b = [];
    if (a != null)for (var c = {}, d = 0; d < a.length; d++) {
        var e = this.getParent(a[d]);
        if (e != null) {
            var f = mxCellPath.create(e);
            if (c[f] == null) {
                c[f] = e;
                b.push(e)
            }
        }
    }
    return b
};
mxGraphModel.prototype.cloneCell = function (a) {
    return a != null ? this.cloneCells([a], true)[0] : null
};
mxGraphModel.prototype.cloneCells = function (a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)a[e] != null ? d.push(this.cloneCellImpl(a[e], c, b)) : d.push(null);
    for (e = 0; e < d.length; e++)d[e] != null && this.restoreClone(d[e], a[e], c);
    return d
};
mxGraphModel.prototype.cloneCellImpl = function (a, b, c) {
    var d = this.cellCloned(a);
    b[mxObjectIdentity.get(a)] = d;
    if (c)for (var c = this.getChildCount(a), e = 0; e < c; e++) {
        var f = this.cloneCellImpl(this.getChildAt(a, e), b, true);
        d.insert(f)
    }
    return d
};
mxGraphModel.prototype.cellCloned = function (a) {
    return a.clone()
};
mxGraphModel.prototype.restoreClone = function (a, b, c) {
    var d = this.getTerminal(b, true);
    if (d != null) {
        d = c[mxObjectIdentity.get(d)];
        d != null && d.insertEdge(a, true)
    }
    d = this.getTerminal(b, false);
    if (d != null) {
        d = c[mxObjectIdentity.get(d)];
        d != null && d.insertEdge(a, false)
    }
    for (var d = this.getChildCount(a), e = 0; e < d; e++)this.restoreClone(this.getChildAt(a, e), this.getChildAt(b, e), c)
};
function mxRootChange(a, b) {
    this.model = a;
    this.previous = this.root = b
}
mxRootChange.prototype.execute = function () {
    this.root = this.previous;
    this.previous = this.model.rootChanged(this.previous)
};
function mxChildChange(a, b, c, d) {
    this.model = a;
    this.previous = this.parent = b;
    this.child = c;
    this.previousIndex = this.index = d
}
mxChildChange.prototype.execute = function () {
    var a = this.model.getParent(this.child), b = a != null ? a.getIndex(this.child) : 0;
    this.previous == null && this.connect(this.child, false);
    a = this.model.parentForCellChanged(this.child, this.previous, this.previousIndex);
    this.previous != null && this.connect(this.child, true);
    this.parent = this.previous;
    this.previous = a;
    this.index = this.previousIndex;
    this.previousIndex = b
};
mxChildChange.prototype.connect = function (a, b) {
    var b = b != null ? b : true, c = a.getTerminal(true), d = a.getTerminal(false);
    c != null && (b ? this.model.terminalForCellChanged(a, c, true) : this.model.terminalForCellChanged(a, null, true));
    d != null && (b ? this.model.terminalForCellChanged(a, d, false) : this.model.terminalForCellChanged(a, null, false));
    a.setTerminal(c, true);
    a.setTerminal(d, false);
    c = this.model.getChildCount(a);
    for (d = 0; d < c; d++)this.connect(this.model.getChildAt(a, d), b)
};
function mxTerminalChange(a, b, c, d) {
    this.model = a;
    this.cell = b;
    this.previous = this.terminal = c;
    this.source = d
}
mxTerminalChange.prototype.execute = function () {
    this.terminal = this.previous;
    this.previous = this.model.terminalForCellChanged(this.cell, this.previous, this.source)
};
function mxValueChange(a, b, c) {
    this.model = a;
    this.cell = b;
    this.previous = this.value = c
}
mxValueChange.prototype.execute = function () {
    this.value = this.previous;
    this.previous = this.model.valueForCellChanged(this.cell, this.previous)
};
function mxStyleChange(a, b, c) {
    this.model = a;
    this.cell = b;
    this.previous = this.style = c
}
mxStyleChange.prototype.execute = function () {
    this.style = this.previous;
    this.previous = this.model.styleForCellChanged(this.cell, this.previous)
};
function mxGeometryChange(a, b, c) {
    this.model = a;
    this.cell = b;
    this.previous = this.geometry = c
}
mxGeometryChange.prototype.execute = function () {
    this.geometry = this.previous;
    this.previous = this.model.geometryForCellChanged(this.cell, this.previous)
};
function mxCollapseChange(a, b, c) {
    this.model = a;
    this.cell = b;
    this.previous = this.collapsed = c
}
mxCollapseChange.prototype.execute = function () {
    this.collapsed = this.previous;
    this.previous = this.model.collapsedStateForCellChanged(this.cell, this.previous)
};
function mxVisibleChange(a, b, c) {
    this.model = a;
    this.cell = b;
    this.previous = this.visible = c
}
mxVisibleChange.prototype.execute = function () {
    this.visible = this.previous;
    this.previous = this.model.visibleStateForCellChanged(this.cell, this.previous)
};
function mxCellAttributeChange(a, b, c) {
    this.cell = a;
    this.attribute = b;
    this.previous = this.value = c
}
mxCellAttributeChange.prototype.execute = function () {
    var a = this.cell.getAttribute(this.attribute);
    this.previous == null ? this.cell.value.removeAttribute(this.attribute) : this.cell.setAttribute(this.attribute, this.previous);
    this.previous = a
};
function mxCell(a, b, c) {
    this.value = a;
    this.setGeometry(b);
    this.setStyle(c);
    if (this.onInit != null)this.onInit()
}
mxCell.prototype.id = null;
mxCell.prototype.value = null;
mxCell.prototype.geometry = null;
mxCell.prototype.style = null;
mxCell.prototype.vertex = false;
mxCell.prototype.edge = false;
mxCell.prototype.connectable = true;
mxCell.prototype.visible = true;
mxCell.prototype.collapsed = false;
mxCell.prototype.parent = null;
mxCell.prototype.source = null;
mxCell.prototype.target = null;
mxCell.prototype.children = null;
mxCell.prototype.edges = null;
mxCell.prototype.mxTransient = "id value parent source target children edges".split(" ");
mxCell.prototype.getId = function () {
    return this.id
};
mxCell.prototype.setId = function (a) {
    this.id = a
};
mxCell.prototype.getValue = function () {
    return this.value
};
mxCell.prototype.setValue = function (a) {
    this.value = a
};
mxCell.prototype.valueChanged = function (a) {
    var b = this.getValue();
    this.setValue(a);
    return b
};
mxCell.prototype.getGeometry = function () {
    return this.geometry
};
mxCell.prototype.setGeometry = function (a) {
    this.geometry = a
};
mxCell.prototype.getStyle = function () {
    return this.style
};
mxCell.prototype.setStyle = function (a) {
    this.style = a
};
mxCell.prototype.isVertex = function () {
    return this.vertex
};
mxCell.prototype.setVertex = function (a) {
    this.vertex = a
};
mxCell.prototype.isEdge = function () {
    return this.edge
};
mxCell.prototype.setEdge = function (a) {
    this.edge = a
};
mxCell.prototype.isConnectable = function () {
    return this.connectable
};
mxCell.prototype.setConnectable = function (a) {
    this.connectable = a
};
mxCell.prototype.isVisible = function () {
    return this.visible
};
mxCell.prototype.setVisible = function (a) {
    this.visible = a
};
mxCell.prototype.isCollapsed = function () {
    return this.collapsed
};
mxCell.prototype.setCollapsed = function (a) {
    this.collapsed = a
};
mxCell.prototype.getParent = function () {
    return this.parent
};
mxCell.prototype.setParent = function (a) {
    this.parent = a
};
mxCell.prototype.getTerminal = function (a) {
    return a ? this.source : this.target
};
mxCell.prototype.setTerminal = function (a, b) {
    b ? this.source = a : this.target = a;
    return a
};
mxCell.prototype.getChildCount = function () {
    return this.children == null ? 0 : this.children.length
};
mxCell.prototype.getIndex = function (a) {
    return mxUtils.indexOf(this.children, a)
};
mxCell.prototype.getChildAt = function (a) {
    return this.children == null ? null : this.children[a]
};
mxCell.prototype.insert = function (a, b) {
    if (a != null) {
        if (b == null) {
            b = this.getChildCount();
            a.getParent() == this && b--
        }
        a.removeFromParent();
        a.setParent(this);
        if (this.children == null) {
            this.children = [];
            this.children.push(a)
        } else this.children.splice(b, 0, a)
    }
    return a
};
mxCell.prototype.remove = function (a) {
    var b = null;
    if (this.children != null && a >= 0) {
        b = this.getChildAt(a);
        if (b != null) {
            this.children.splice(a, 1);
            b.setParent(null)
        }
    }
    return b
};
mxCell.prototype.removeFromParent = function () {
    this.parent != null && this.parent.remove(this.parent.getIndex(this))
};
mxCell.prototype.getEdgeCount = function () {
    return this.edges == null ? 0 : this.edges.length
};
mxCell.prototype.getEdgeIndex = function (a) {
    return mxUtils.indexOf(this.edges, a)
};
mxCell.prototype.getEdgeAt = function (a) {
    return this.edges == null ? null : this.edges[a]
};
mxCell.prototype.insertEdge = function (a, b) {
    if (a != null) {
        a.removeFromTerminal(b);
        a.setTerminal(this, b);
        if (this.edges == null || a.getTerminal(!b) != this || mxUtils.indexOf(this.edges, a) < 0) {
            if (this.edges == null)this.edges = [];
            this.edges.push(a)
        }
    }
    return a
};
mxCell.prototype.removeEdge = function (a, b) {
    if (a != null) {
        if (a.getTerminal(!b) != this && this.edges != null) {
            var c = this.getEdgeIndex(a);
            c >= 0 && this.edges.splice(c, 1)
        }
        a.setTerminal(null, b)
    }
    return a
};
mxCell.prototype.removeFromTerminal = function (a) {
    var b = this.getTerminal(a);
    b != null && b.removeEdge(this, a)
};
mxCell.prototype.getAttribute = function (a, b) {
    var c = this.getValue();
    return(c != null && c.nodeType == mxConstants.NODETYPE_ELEMENT ? c.getAttribute(a) : null) || b
};
mxCell.prototype.setAttribute = function (a, b) {
    var c = this.getValue();
    c != null && c.nodeType == mxConstants.NODETYPE_ELEMENT && c.setAttribute(a, b)
};
mxCell.prototype.clone = function () {
    var a = mxUtils.clone(this, this.mxTransient);
    a.setValue(this.cloneValue());
    return a
};
mxCell.prototype.cloneValue = function () {
    var a = this.getValue();
    a != null && (typeof a.clone == "function" ? a = a.clone() : isNaN(a.nodeType) || (a = a.cloneNode(true)));
    return a
};
function mxGeometry(a, b, c, d) {
    mxRectangle.call(this, a, b, c, d)
}
mxGeometry.prototype = new mxRectangle;
mxGeometry.prototype.constructor = mxGeometry;
mxGeometry.prototype.TRANSLATE_CONTROL_POINTS = true;
mxGeometry.prototype.alternateBounds = null;
mxGeometry.prototype.sourcePoint = null;
mxGeometry.prototype.targetPoint = null;
mxGeometry.prototype.points = null;
mxGeometry.prototype.offset = null;
mxGeometry.prototype.relative = false;
mxGeometry.prototype.swap = function () {
    if (this.alternateBounds != null) {
        var a = new mxRectangle(this.x, this.y, this.width, this.height);
        this.x = this.alternateBounds.x;
        this.y = this.alternateBounds.y;
        this.width = this.alternateBounds.width;
        this.height = this.alternateBounds.height;
        this.alternateBounds = a
    }
};
mxGeometry.prototype.getTerminalPoint = function (a) {
    return a ? this.sourcePoint : this.targetPoint
};
mxGeometry.prototype.setTerminalPoint = function (a, b) {
    b ? this.sourcePoint = a : this.targetPoint = a;
    return a
};
mxGeometry.prototype.translate = function (a, b) {
    this.clone();
    if (!this.relative) {
        this.x = this.x + a;
        this.y = this.y + b
    }
    if (this.sourcePoint != null) {
        this.sourcePoint.x = this.sourcePoint.x + a;
        this.sourcePoint.y = this.sourcePoint.y + b
    }
    if (this.targetPoint != null) {
        this.targetPoint.x = this.targetPoint.x + a;
        this.targetPoint.y = this.targetPoint.y + b
    }
    if (this.TRANSLATE_CONTROL_POINTS && this.points != null)for (var c = this.points.length, d = 0; d < c; d++) {
        var e = this.points[d];
        if (e != null) {
            e.x = e.x + a;
            e.y = e.y + b
        }
    }
};
var mxCellPath = {PATH_SEPARATOR: ".", create: function (a) {
    var b = "";
    if (a != null)for (var c = a.getParent(); c != null;) {
        b = c.getIndex(a) + mxCellPath.PATH_SEPARATOR + b;
        a = c;
        c = a.getParent()
    }
    a = b.length;
    a > 1 && (b = b.substring(0, a - 1));
    return b
}, getParentPath: function (a) {
    if (a != null) {
        var b = a.lastIndexOf(mxCellPath.PATH_SEPARATOR);
        if (b >= 0)return a.substring(0, b);
        if (a.length > 0)return""
    }
    return null
}, resolve: function (a, b) {
    var c = a;
    if (b != null)for (var d = b.split(mxCellPath.PATH_SEPARATOR), e = 0; e < d.length; e++)c = c.getChildAt(parseInt(d[e]));
    return c
}, compare: function (a, b) {
    for (var c = Math.min(a.length, b.length), d = 0, e = 0; e < c; e++)if (a[e] != b[e]) {
        if (a[e].length == 0 || b[e].length == 0)d = a[e] == b[e] ? 0 : a[e] > b[e] ? 1 : -1; else {
            c = parseInt(a[e]);
            e = parseInt(b[e]);
            d = c == e ? 0 : c > e ? 1 : -1
        }
        break
    }
    if (d == 0) {
        c = a.length;
        e = b.length;
        c != e && (d = c > e ? 1 : -1)
    }
    return d
}}, mxPerimeter = {RectanglePerimeter: function (a, b, c, d) {
    var b = a.getCenterX(), e = a.getCenterY(), f = Math.atan2(c.y - e, c.x - b), g = new mxPoint(0, 0), h = Math.PI, k = Math.PI / 2 - f, i = Math.atan2(a.height, a.width);
    if (f < -h + i || f > h - i) {
        g.x = a.x;
        g.y = e - a.width * Math.tan(f) / 2
    } else if (f < -i) {
        g.y = a.y;
        g.x = b - a.height * Math.tan(k) / 2
    } else if (f < i) {
        g.x = a.x + a.width;
        g.y = e + a.width * Math.tan(f) / 2
    } else {
        g.y = a.y + a.height;
        g.x = b + a.height * Math.tan(k) / 2
    }
    if (d) {
        if (c.x >= a.x && c.x <= a.x + a.width)g.x = c.x; else if (c.y >= a.y && c.y <= a.y + a.height)g.y = c.y;
        if (c.x < a.x)g.x = a.x; else if (c.x > a.x + a.width)g.x = a.x + a.width;
        if (c.y < a.y)g.y = a.y; else if (c.y > a.y + a.height)g.y = a.y + a.height
    }
    return g
}, EllipsePerimeter: function (a, b, c, d) {
    var e = a.x, f = a.y, g = a.width / 2, h = a.height / 2, k = e + g, i = f + h, b = c.x, c =
        c.y, l = parseInt(b - k), n = parseInt(c - i);
    if (l == 0 && n != 0)return new mxPoint(k, i + h * n / Math.abs(n));
    if (l == 0 && n == 0)return new mxPoint(b, c);
    if (d) {
        if (c >= f && c <= f + a.height) {
            a = c - i;
            a = Math.sqrt(g * g * (1 - a * a / (h * h))) || 0;
            b <= e && (a = -a);
            return new mxPoint(k + a, c)
        }
        if (b >= e && b <= e + a.width) {
            a = b - k;
            a = Math.sqrt(h * h * (1 - a * a / (g * g))) || 0;
            c <= f && (a = -a);
            return new mxPoint(b, i + a)
        }
    }
    e = n / l;
    i = i - e * k;
    f = g * g * e * e + h * h;
    a = -2 * k * f;
    h = Math.sqrt(a * a - 4 * f * (g * g * e * e * k * k + h * h * k * k - g * g * h * h));
    g = (-a + h) / (2 * f);
    h = (-a - h) / (2 * f);
    k = e * g + i;
    i = e * h + i;
    e = Math.sqrt(Math.pow(g - b, 2) +
        Math.pow(k - c, 2));
    b = Math.sqrt(Math.pow(h - b, 2) + Math.pow(i - c, 2));
    f = c = 0;
    if (e < b) {
        c = g;
        f = k
    } else {
        c = h;
        f = i
    }
    return new mxPoint(c, f)
}, RhombusPerimeter: function (a, b, c, d) {
    var b = a.x, e = a.y, f = a.width, a = a.height, g = b + f / 2, h = e + a / 2, k = c.x, c = c.y;
    if (g == k)return h > c ? new mxPoint(g, e) : new mxPoint(g, e + a);
    if (h == c)return g > k ? new mxPoint(b, h) : new mxPoint(b + f, h);
    var i = g, l = h;
    d && (k >= b && k <= b + f ? i = k : c >= e && c <= e + a && (l = c));
    return k < g ? c < h ? mxUtils.intersection(k, c, i, l, g, e, b, h) : mxUtils.intersection(k, c, i, l, g, e + a, b, h) : c < h ? mxUtils.intersection(k,
        c, i, l, g, e, b + f, h) : mxUtils.intersection(k, c, i, l, g, e + a, b + f, h)
}, TrianglePerimeter: function (a, b, c, d) {
    var b = b != null ? b.style[mxConstants.STYLE_DIRECTION] : null, e = b == mxConstants.DIRECTION_NORTH || b == mxConstants.DIRECTION_SOUTH, f = a.x, g = a.y, h = a.width, a = a.height, k = f + h / 2, i = g + a / 2, l = new mxPoint(f, g), n = new mxPoint(f + h, i), m = new mxPoint(f, g + a);
    if (b == mxConstants.DIRECTION_NORTH) {
        l = m;
        n = new mxPoint(k, g);
        m = new mxPoint(f + h, g + a)
    } else if (b == mxConstants.DIRECTION_SOUTH) {
        n = new mxPoint(k, g + a);
        m = new mxPoint(f + h, g)
    } else if (b ==
        mxConstants.DIRECTION_WEST) {
        l = new mxPoint(f + h, g);
        n = new mxPoint(f, i);
        m = new mxPoint(f + h, g + a)
    }
    var o = c.x - k, q = c.y - i, o = e ? Math.atan2(o, q) : Math.atan2(q, o), p = e ? Math.atan2(h, a) : Math.atan2(a, h), q = false, q = b == mxConstants.DIRECTION_NORTH || b == mxConstants.DIRECTION_WEST ? o > -p && o < p : o < -Math.PI + p || o > Math.PI - p, p = null;
    if (q)p = d && (e && c.x >= l.x && c.x <= m.x || !e && c.y >= l.y && c.y <= m.y) ? e ? new mxPoint(c.x, l.y) : new mxPoint(l.x, c.y) : b == mxConstants.DIRECTION_NORTH ? new mxPoint(f + h / 2 + a * Math.tan(o) / 2, g + a) : b == mxConstants.DIRECTION_SOUTH ?
        new mxPoint(f + h / 2 - a * Math.tan(o) / 2, g) : b == mxConstants.DIRECTION_WEST ? new mxPoint(f + h, g + a / 2 + h * Math.tan(o) / 2) : new mxPoint(f, g + a / 2 - h * Math.tan(o) / 2); else {
        if (d) {
            d = new mxPoint(k, i);
            if (c.y >= g && c.y <= g + a) {
                d.x = e ? k : b == mxConstants.DIRECTION_WEST ? f + h : f;
                d.y = c.y
            } else if (c.x >= f && c.x <= f + h) {
                d.x = c.x;
                d.y = !e ? i : b == mxConstants.DIRECTION_NORTH ? g + a : g
            }
            k = d.x;
            i = d.y
        }
        p = e && c.x <= f + h / 2 || !e && c.y <= g + a / 2 ? mxUtils.intersection(c.x, c.y, k, i, l.x, l.y, n.x, n.y) : mxUtils.intersection(c.x, c.y, k, i, n.x, n.y, m.x, m.y)
    }
    p == null && (p = new mxPoint(k, i));
    return p
}};
function mxStylesheet() {
    this.styles = {};
    this.putDefaultVertexStyle(this.createDefaultVertexStyle());
    this.putDefaultEdgeStyle(this.createDefaultEdgeStyle())
}
mxStylesheet.prototype.createDefaultVertexStyle = function () {
    var a = {};
    a[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RECTANGLE;
    a[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
    a[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_MIDDLE;
    a[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_CENTER;
    a[mxConstants.STYLE_FILLCOLOR] = "#C3D9FF";
    a[mxConstants.STYLE_STROKECOLOR] = "#6482B9";
    a[mxConstants.STYLE_FONTCOLOR] = "#774400";
    return a
};
mxStylesheet.prototype.createDefaultEdgeStyle = function () {
    var a = {};
    a[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_CONNECTOR;
    a[mxConstants.STYLE_ENDARROW] = mxConstants.ARROW_CLASSIC;
    a[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_MIDDLE;
    a[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_CENTER;
    a[mxConstants.STYLE_STROKECOLOR] = "#6482B9";
    a[mxConstants.STYLE_FONTCOLOR] = "#446299";
    return a
};
mxStylesheet.prototype.putDefaultVertexStyle = function (a) {
    this.putCellStyle("defaultVertex", a)
};
mxStylesheet.prototype.putDefaultEdgeStyle = function (a) {
    this.putCellStyle("defaultEdge", a)
};
mxStylesheet.prototype.getDefaultVertexStyle = function () {
    return this.styles.defaultVertex
};
mxStylesheet.prototype.getDefaultEdgeStyle = function () {
    return this.styles.defaultEdge
};
mxStylesheet.prototype.putCellStyle = function (a, b) {
    this.styles[a] = b
};
mxStylesheet.prototype.getCellStyle = function (a, b) {
    var c = b;
    if (a != null && a.length > 0)for (var d = a.split(";"), c = c != null && a.charAt(0) != ";" ? mxUtils.clone(c) : {}, e = 0; e < d.length; e++) {
        var f = d[e], g = f.indexOf("=");
        if (g >= 0) {
            var h = f.substring(0, g), f = f.substring(g + 1);
            f == mxConstants.NONE ? delete c[h] : c[h] = mxUtils.isNumeric(f) ? parseFloat(f) : f
        } else {
            f = this.styles[f];
            if (f != null)for (h in f)c[h] = f[h]
        }
    }
    return c
};
function mxCellState(a, b, c) {
    this.view = a;
    this.cell = b;
    this.style = c;
    this.origin = new mxPoint;
    this.absoluteOffset = new mxPoint
}
mxCellState.prototype = new mxRectangle;
mxCellState.prototype.constructor = mxCellState;
mxCellState.prototype.view = null;
mxCellState.prototype.cell = null;
mxCellState.prototype.style = null;
mxCellState.prototype.invalid = true;
mxCellState.prototype.invalidOrder = false;
mxCellState.prototype.orderChanged = false;
mxCellState.prototype.origin = null;
mxCellState.prototype.absolutePoints = null;
mxCellState.prototype.absoluteOffset = null;
mxCellState.prototype.visibleSourceState = null;
mxCellState.prototype.visibleTargetState = null;
mxCellState.prototype.terminalDistance = 0;
mxCellState.prototype.length = 0;
mxCellState.prototype.segments = null;
mxCellState.prototype.shape = null;
mxCellState.prototype.text = null;
mxCellState.prototype.getPerimeterBounds = function (a, b) {
    a = a || 0;
    b = b != null ? b : new mxRectangle(this.x, this.y, this.width, this.height);
    if (this.shape != null && this.shape.stencil != null) {
        var c = this.shape.stencil.computeAspect(this.style, b.x, b.y, b.width, b.height);
        b.x = c.x;
        b.y = c.y;
        b.width = this.shape.stencil.w0 * c.width;
        b.height = this.shape.stencil.h0 * c.height
    }
    a != 0 && b.grow(a);
    return b
};
mxCellState.prototype.setAbsoluteTerminalPoint = function (a, b) {
    if (b) {
        if (this.absolutePoints == null)this.absolutePoints = [];
        this.absolutePoints.length == 0 ? this.absolutePoints.push(a) : this.absolutePoints[0] = a
    } else if (this.absolutePoints == null) {
        this.absolutePoints = [];
        this.absolutePoints.push(null);
        this.absolutePoints.push(a)
    } else this.absolutePoints.length == 1 ? this.absolutePoints.push(a) : this.absolutePoints[this.absolutePoints.length - 1] = a
};
mxCellState.prototype.setCursor = function (a) {
    this.shape != null && this.shape.setCursor(a);
    this.text != null && this.text.setCursor(a)
};
mxCellState.prototype.getVisibleTerminal = function (a) {
    a = this.getVisibleTerminalState(a);
    return a != null ? a.cell : null
};
mxCellState.prototype.getVisibleTerminalState = function (a) {
    return a ? this.visibleSourceState : this.visibleTargetState
};
mxCellState.prototype.setVisibleTerminalState = function (a, b) {
    b ? this.visibleSourceState = a : this.visibleTargetState = a
};
mxCellState.prototype.destroy = function () {
    this.view.graph.cellRenderer.destroy(this)
};
mxCellState.prototype.clone = function () {
    var a = new mxCellState(this.view, this.cell, this.style);
    if (this.absolutePoints != null) {
        a.absolutePoints = [];
        for (var b = 0; b < this.absolutePoints.length; b++)a.absolutePoints[b] = this.absolutePoints[b].clone()
    }
    if (this.origin != null)a.origin = this.origin.clone();
    if (this.absoluteOffset != null)a.absoluteOffset = this.absoluteOffset.clone();
    if (this.boundingBox != null)a.boundingBox = this.boundingBox.clone();
    a.terminalDistance = this.terminalDistance;
    a.segments = this.segments;
    a.length =
        this.length;
    a.x = this.x;
    a.y = this.y;
    a.width = this.width;
    a.height = this.height;
    return a
};
function mxGraphSelectionModel(a) {
    this.graph = a;
    this.cells = []
}
mxGraphSelectionModel.prototype = new mxEventSource;
mxGraphSelectionModel.prototype.constructor = mxGraphSelectionModel;
mxGraphSelectionModel.prototype.doneResource = "none" != mxClient.language ? "done" : "";
mxGraphSelectionModel.prototype.updatingSelectionResource = "none" != mxClient.language ? "updatingSelection" : "";
mxGraphSelectionModel.prototype.graph = null;
mxGraphSelectionModel.prototype.singleSelection = false;
mxGraphSelectionModel.prototype.isSingleSelection = function () {
    return this.singleSelection
};
mxGraphSelectionModel.prototype.setSingleSelection = function (a) {
    this.singleSelection = a
};
mxGraphSelectionModel.prototype.isSelected = function (a) {
    return a != null ? mxUtils.indexOf(this.cells, a) >= 0 : false
};
mxGraphSelectionModel.prototype.isEmpty = function () {
    return this.cells.length == 0
};
mxGraphSelectionModel.prototype.clear = function () {
    this.changeSelection(null, this.cells)
};
mxGraphSelectionModel.prototype.setCell = function (a) {
    a != null && this.setCells([a])
};
mxGraphSelectionModel.prototype.setCells = function (a) {
    if (a != null) {
        this.singleSelection && (a = [this.getFirstSelectableCell(a)]);
        for (var b = [], c = 0; c < a.length; c++)this.graph.isCellSelectable(a[c]) && b.push(a[c]);
        this.changeSelection(b, this.cells)
    }
};
mxGraphSelectionModel.prototype.getFirstSelectableCell = function (a) {
    if (a != null)for (var b = 0; b < a.length; b++)if (this.graph.isCellSelectable(a[b]))return a[b];
    return null
};
mxGraphSelectionModel.prototype.addCell = function (a) {
    a != null && this.addCells([a])
};
mxGraphSelectionModel.prototype.addCells = function (a) {
    if (a != null) {
        var b = null;
        if (this.singleSelection) {
            b = this.cells;
            a = [this.getFirstSelectableCell(a)]
        }
        for (var c = [], d = 0; d < a.length; d++)!this.isSelected(a[d]) && this.graph.isCellSelectable(a[d]) && c.push(a[d]);
        this.changeSelection(c, b)
    }
};
mxGraphSelectionModel.prototype.removeCell = function (a) {
    a != null && this.removeCells([a])
};
mxGraphSelectionModel.prototype.removeCells = function (a) {
    if (a != null) {
        for (var b = [], c = 0; c < a.length; c++)this.isSelected(a[c]) && b.push(a[c]);
        this.changeSelection(null, b)
    }
};
mxGraphSelectionModel.prototype.changeSelection = function (a, b) {
    if (a != null && a.length > 0 && a[0] != null || b != null && b.length > 0 && b[0] != null) {
        var c = new mxSelectionChange(this, a, b);
        c.execute();
        var d = new mxUndoableEdit(this, false);
        d.add(c);
        this.fireEvent(new mxEventObject(mxEvent.UNDO, "edit", d))
    }
};
mxGraphSelectionModel.prototype.cellAdded = function (a) {
    a != null && !this.isSelected(a) && this.cells.push(a)
};
mxGraphSelectionModel.prototype.cellRemoved = function (a) {
    if (a != null) {
        a = mxUtils.indexOf(this.cells, a);
        a >= 0 && this.cells.splice(a, 1)
    }
};
function mxSelectionChange(a, b, c) {
    this.selectionModel = a;
    this.added = b != null ? b.slice() : null;
    this.removed = c != null ? c.slice() : null
}
mxSelectionChange.prototype.execute = function () {
    var a = mxLog.enter("mxSelectionChange.execute");
    window.status = mxResources.get(this.selectionModel.updatingSelectionResource) || this.selectionModel.updatingSelectionResource;
    if (this.removed != null)for (var b = 0; b < this.removed.length; b++)this.selectionModel.cellRemoved(this.removed[b]);
    if (this.added != null)for (b = 0; b < this.added.length; b++)this.selectionModel.cellAdded(this.added[b]);
    b = this.added;
    this.added = this.removed;
    this.removed = b;
    window.status = mxResources.get(this.selectionModel.doneResource) ||
        this.selectionModel.doneResource;
    mxLog.leave("mxSelectionChange.execute", a);
    this.selectionModel.fireEvent(new mxEventObject(mxEvent.CHANGE, "added", this.added, "removed", this.removed))
};
function mxCellEditor(a) {
    this.graph = a
}
mxCellEditor.prototype.graph = null;
mxCellEditor.prototype.textarea = null;
mxCellEditor.prototype.editingCell = null;
mxCellEditor.prototype.trigger = null;
mxCellEditor.prototype.modified = false;
mxCellEditor.prototype.autoSize = true;
mxCellEditor.prototype.emptyLabelText = "";
mxCellEditor.prototype.textNode = "";
mxCellEditor.prototype.init = function () {
    this.textarea = document.createElement("textarea");
    this.textarea.className = "mxCellEditor";
    this.textarea.style.position = "absolute";
    this.textarea.style.overflow = "visible";
    this.textarea.setAttribute("cols", "20");
    this.textarea.setAttribute("rows", "4");
    if (mxClient.IS_NS)this.textarea.style.resize = "none";
    mxEvent.addListener(this.textarea, "blur", mxUtils.bind(this, function () {
        this.focusLost()
    }));
    mxEvent.addListener(this.textarea, "keydown", mxUtils.bind(this, function (a) {
        if (!mxEvent.isConsumed(a))if (a.keyCode ==
            113 || this.graph.isEnterStopsCellEditing() && a.keyCode == 13 && !mxEvent.isControlDown(a) && !mxEvent.isShiftDown(a)) {
            this.graph.stopEditing(false);
            mxEvent.consume(a)
        } else if (a.keyCode == 27) {
            this.graph.stopEditing(true);
            mxEvent.consume(a)
        } else {
            if (this.clearOnChange) {
                this.clearOnChange = false;
                this.textarea.value = ""
            }
            this.setModified(true)
        }
    }));
    mxEvent.addListener(this.textarea, "keypress", mxUtils.bind(this, function (a) {
        this.autoSize && !mxEvent.isConsumed(a) && setTimeout(mxUtils.bind(this, function () {
            this.resize()
        }),
            0)
    }))
};
mxCellEditor.prototype.resize = function () {
    if (this.textDiv != null) {
        var a = this.graph.getView().getState(this.editingCell), b = this.graph.isLabelClipped(a.cell), c = this.graph.isWrapping(a.cell);
        if (this.graph.getModel().isEdge(a.cell)) {
            this.bounds.x = a.absoluteOffset.x;
            this.bounds.y = a.absoluteOffset.y;
            this.bounds.width = 0;
            this.bounds.height = 0
        } else if (this.bounds != null) {
            this.bounds.x = a.x;
            this.bounds.y = a.y;
            this.bounds.width = a.width;
            this.bounds.height = a.height;
            var d = mxUtils.getValue(a.style, mxConstants.STYLE_LABEL_POSITION, mxConstants.ALIGN_CENTER);
            if (d == mxConstants.ALIGN_LEFT)this.bounds.x = this.bounds.x - a.width; else if (d == mxConstants.ALIGN_RIGHT)this.bounds.x = this.bounds.x + a.width;
            d = mxUtils.getValue(a.style, mxConstants.STYLE_VERTICAL_LABEL_POSITION, mxConstants.ALIGN_MIDDLE);
            if (d == mxConstants.ALIGN_TOP)this.bounds.y = this.bounds.y - a.height; else if (d == mxConstants.ALIGN_BOTTOM)this.bounds.y = this.bounds.y + a.height
        }
        d = this.textarea.value;
        if (d.charAt(d.length - 1) == "\n" || d == "")d = d + "&nbsp;";
        d = mxUtils.htmlEntities(d, false);
        if (c) {
            this.textDiv.style.whiteSpace =
                "normal";
            this.textDiv.style.width = this.bounds.width + "px"
        } else d = d.replace(/ /g, "&nbsp;");
        d = d.replace(/\n/g, "<br/>");
        this.textDiv.innerHTML = d;
        var d = this.textDiv.offsetWidth + 30, e = this.textDiv.offsetHeight + 16, d = Math.max(d, 40), e = Math.max(e, 20);
        if (b) {
            d = Math.min(this.bounds.width - 4, d);
            e = Math.min(this.bounds.height, e)
        }
        var f = a.text != null ? a.text.margin : null;
        if (f == null) {
            f = mxUtils.getValue(a.style, mxConstants.STYLE_ALIGN, mxConstants.ALIGN_CENTER);
            a = mxUtils.getValue(a.style, mxConstants.STYLE_VERTICAL_ALIGN, mxConstants.ALIGN_MIDDLE);
            f = mxUtils.getAlignmentAsPoint(f, a)
        }
        if (f != null) {
            if (b || !c)this.textarea.style.left = Math.max(0, Math.round(this.bounds.x - f.x * this.bounds.width + f.x * d) - 3) + "px";
            this.textarea.style.top = Math.max(0, Math.round(this.bounds.y - f.y * this.bounds.height + f.y * e) + 4) + "px"
        }
        if (b || !c)this.textarea.style.width = d + "px";
        this.textarea.style.height = e + "px"
    }
};
mxCellEditor.prototype.isModified = function () {
    return this.modified
};
mxCellEditor.prototype.setModified = function (a) {
    this.modified = a
};
mxCellEditor.prototype.focusLost = function () {
    this.stopEditing(!this.graph.isInvokesStopCellEditing())
};
mxCellEditor.prototype.startEditing = function (a, b) {
    this.textarea == null && this.init();
    this.stopEditing(true);
    var c = this.graph.getView().getState(a);
    if (c != null) {
        this.editingCell = a;
        this.trigger = b;
        this.textNode = null;
        if (c.text != null && this.isHideLabel(c)) {
            this.textNode = c.text.node;
            this.textNode.style.visibility = "hidden"
        }
        var d = this.graph.getView().scale, d = mxUtils.getValue(c.style, mxConstants.STYLE_FONTSIZE, mxConstants.DEFAULT_FONTSIZE) * d, e = mxUtils.getValue(c.style, mxConstants.STYLE_FONTFAMILY, mxConstants.DEFAULT_FONTFAMILY),
            f = mxUtils.getValue(c.style, mxConstants.STYLE_FONTCOLOR, "black"), g = mxUtils.getValue(c.style, mxConstants.STYLE_ALIGN, mxConstants.ALIGN_LEFT), h = (mxUtils.getValue(c.style, mxConstants.STYLE_FONTSTYLE, 0) & mxConstants.FONT_BOLD) == mxConstants.FONT_BOLD, k = (mxUtils.getValue(c.style, mxConstants.STYLE_FONTSTYLE, 0) & mxConstants.FONT_ITALIC) == mxConstants.FONT_ITALIC, i = (mxUtils.getValue(c.style, mxConstants.STYLE_FONTSTYLE, 0) & mxConstants.FONT_UNDERLINE) == mxConstants.FONT_UNDERLINE;
        this.textarea.style.fontSize = Math.round(d) +
            "px";
        this.textarea.style.lineHeight = Math.round(d * mxConstants.LINE_HEIGHT) + "px";
        this.textarea.style.fontFamily = e;
        this.textarea.style.textAlign = g;
        this.textarea.style.color = f;
        this.textarea.style.fontWeight = h ? "bold" : "normal";
        this.textarea.style.fontStyle = k ? "italic" : "";
        this.textarea.style.textDecoration = i ? "underline" : "";
        this.textarea.style.overflow = "auto";
        this.textarea.style.outline = "none";
        this.bounds = d = this.getEditorBounds(c);
        this.textarea.style.left = d.x + "px";
        this.textarea.style.top = d.y + "px";
        this.textarea.style.width =
            d.width + "px";
        this.textarea.style.height = d.height + "px";
        this.textarea.style.zIndex = 5;
        c = this.getInitialValue(c, b);
        if (c == null || c.length == 0) {
            c = this.getEmptyLabelText();
            this.clearOnChange = true
        } else this.clearOnChange = false;
        this.setModified(false);
        this.textarea.value = c;
        this.graph.container.appendChild(this.textarea);
        if (this.textarea.style.display != "none") {
            if (this.autoSize) {
                this.textDiv = this.createTextDiv();
                document.body.appendChild(this.textDiv);
                this.resize()
            }
            this.textarea.focus();
            this.textarea.select()
        }
    }
};
mxCellEditor.prototype.createTextDiv = function () {
    var a = document.createElement("div"), b = a.style;
    b.position = "absolute";
    b.whiteSpace = "nowrap";
    b.visibility = "hidden";
    b.display = mxClient.IS_QUIRKS ? "inline" : "inline-block";
    b.zoom = "1";
    b.verticalAlign = "top";
    b.lineHeight = this.textarea.style.lineHeight;
    b.fontSize = this.textarea.style.fontSize;
    b.fontFamily = this.textarea.style.fontFamily;
    b.fontWeight = this.textarea.style.fontWeight;
    b.textAlign = this.textarea.style.textAlign;
    b.fontStyle = this.textarea.style.fontStyle;
    b.textDecoration = this.textarea.style.textDecoration;
    return a
};
mxCellEditor.prototype.stopEditing = function (a) {
    if (this.editingCell != null) {
        if (this.textNode != null) {
            this.textNode.style.visibility = "visible";
            this.textNode = null
        }
        !a && this.isModified() && this.graph.labelChanged(this.editingCell, this.getCurrentValue(), this.trigger);
        if (this.textDiv != null) {
            document.body.removeChild(this.textDiv);
            this.textDiv = null
        }
        this.bounds = this.trigger = this.editingCell = null;
        this.textarea.blur();
        this.textarea.parentNode.removeChild(this.textarea)
    }
};
mxCellEditor.prototype.getInitialValue = function (a, b) {
    return this.graph.getEditingValue(a.cell, b)
};
mxCellEditor.prototype.getCurrentValue = function () {
    return this.textarea.value.replace(/\r/g, "")
};
mxCellEditor.prototype.isHideLabel = function () {
    return true
};
mxCellEditor.prototype.getMinimumSize = function (a) {
    var b = this.graph.getView().scale;
    return new mxRectangle(0, 0, a.text == null ? 30 : a.text.size * b + 20, this.textarea.style.textAlign == "left" ? 120 : 40)
};
mxCellEditor.prototype.getEditorBounds = function (a) {
    var b = this.graph.getModel().isEdge(a.cell), c = this.graph.getView().scale, d = this.getMinimumSize(a), e = d.width, d = d.height, f = parseInt(a.style[mxConstants.STYLE_SPACING] || 2) * c, g = parseInt(a.style[mxConstants.STYLE_SPACING_TOP] || 0) * c + f, h = parseInt(a.style[mxConstants.STYLE_SPACING_RIGHT] || 0) * c + f, k = parseInt(a.style[mxConstants.STYLE_SPACING_BOTTOM] || 0) * c + f, c = parseInt(a.style[mxConstants.STYLE_SPACING_LEFT] || 0) * c + f, h = new mxRectangle(a.x, a.y, Math.max(e, a.width -
        c - h), Math.max(d, a.height - g - k));
    if (b) {
        h.x = a.absoluteOffset.x;
        h.y = a.absoluteOffset.y;
        if (a.text != null && a.text.boundingBox != null) {
            if (a.text.boundingBox.x > 0)h.x = a.text.boundingBox.x;
            if (a.text.boundingBox.y > 0)h.y = a.text.boundingBox.y
        }
    } else if (a.text != null && a.text.boundingBox != null) {
        h.x = Math.min(h.x, a.text.boundingBox.x);
        h.y = Math.min(h.y, a.text.boundingBox.y)
    }
    h.x = h.x + c;
    h.y = h.y + g;
    if (a.text != null && a.text.boundingBox != null)if (b) {
        h.width = Math.max(e, a.text.boundingBox.width);
        h.height = Math.max(d, a.text.boundingBox.height)
    } else {
        h.width =
            Math.max(h.width, a.text.boundingBox.width);
        h.height = Math.max(h.height, a.text.boundingBox.height)
    }
    if (this.graph.getModel().isVertex(a.cell)) {
        b = mxUtils.getValue(a.style, mxConstants.STYLE_LABEL_POSITION, mxConstants.ALIGN_CENTER);
        if (b == mxConstants.ALIGN_LEFT)h.x = h.x - a.width; else if (b == mxConstants.ALIGN_RIGHT)h.x = h.x + a.width;
        b = mxUtils.getValue(a.style, mxConstants.STYLE_VERTICAL_LABEL_POSITION, mxConstants.ALIGN_MIDDLE);
        if (b == mxConstants.ALIGN_TOP)h.y = h.y - a.height; else if (b == mxConstants.ALIGN_BOTTOM)h.y =
            h.y + a.height
    }
    return h
};
mxCellEditor.prototype.getEmptyLabelText = function () {
    return this.emptyLabelText
};
mxCellEditor.prototype.getEditingCell = function () {
    return this.editingCell
};
mxCellEditor.prototype.destroy = function () {
    if (this.textarea != null) {
        mxEvent.release(this.textarea);
        this.textarea.parentNode != null && this.textarea.parentNode.removeChild(this.textarea);
        this.textarea = null
    }
};
function mxCellRenderer() {
}
mxCellRenderer.prototype.defaultEdgeShape = mxConnector;
mxCellRenderer.prototype.defaultVertexShape = mxRectangleShape;
mxCellRenderer.prototype.defaultTextShape = mxText;
mxCellRenderer.prototype.legacyControlPosition = true;
mxCellRenderer.prototype.defaultShapes = {};
mxCellRenderer.registerShape = function (a, b) {
    mxCellRenderer.prototype.defaultShapes[a] = b
};
mxCellRenderer.registerShape(mxConstants.SHAPE_RECTANGLE, mxRectangleShape);
mxCellRenderer.registerShape(mxConstants.SHAPE_ELLIPSE, mxEllipse);
mxCellRenderer.registerShape(mxConstants.SHAPE_RHOMBUS, mxRhombus);
mxCellRenderer.registerShape(mxConstants.SHAPE_CYLINDER, mxCylinder);
mxCellRenderer.registerShape(mxConstants.SHAPE_CONNECTOR, mxConnector);
mxCellRenderer.registerShape(mxConstants.SHAPE_ACTOR, mxActor);
mxCellRenderer.registerShape(mxConstants.SHAPE_TRIANGLE, mxTriangle);
mxCellRenderer.registerShape(mxConstants.SHAPE_HEXAGON, mxHexagon);
mxCellRenderer.registerShape(mxConstants.SHAPE_CLOUD, mxCloud);
mxCellRenderer.registerShape(mxConstants.SHAPE_LINE, mxLine);
mxCellRenderer.registerShape(mxConstants.SHAPE_ARROW, mxArrow);
mxCellRenderer.registerShape(mxConstants.SHAPE_DOUBLE_ELLIPSE, mxDoubleEllipse);
mxCellRenderer.registerShape(mxConstants.SHAPE_SWIMLANE, mxSwimlane);
mxCellRenderer.registerShape(mxConstants.SHAPE_IMAGE, mxImageShape);
mxCellRenderer.registerShape(mxConstants.SHAPE_LABEL, mxLabel);
mxCellRenderer.prototype.initialize = function (a, b) {
    var c = a.view.graph.getModel();
    if (a.view.graph.container != null && a.shape == null && a.cell != a.view.currentRoot && (c.isVertex(a.cell) || c.isEdge(a.cell))) {
        this.createShape(a);
        if (a.shape != null && (b == null || b)) {
            this.initializeShape(a);
            if (a.view.graph.ordered || c.isEdge(a.cell))a.invalidOrder = true; else if (a.view.graph.keepEdgesInForeground && this.firstEdge != null)this.firstEdge.parentNode == a.shape.node.parentNode ? this.insertState(a, this.firstEdge) : this.firstEdge = null;
            a.shape.scale = a.view.scale;
            this.createCellOverlays(a);
            this.installListeners(a)
        }
    }
};
mxCellRenderer.prototype.initializeShape = function (a) {
    a.shape.init(a.view.getDrawPane())
};
mxCellRenderer.prototype.getPreviousStateInContainer = function (a, b) {
    for (var c = null, d = a.view.graph, e = d.getModel(), f = a.cell, g = e.getParent(f); g != null && c == null;) {
        c = this.findPreviousStateInContainer(d, g, f, b);
        f = g;
        g = e.getParent(f)
    }
    return c
};
mxCellRenderer.prototype.findPreviousStateInContainer = function (a, b, c, d) {
    for (var e = null, f = a.getModel(), c = c != null ? b.getIndex(c) - 1 : f.getChildCount(b) - 1; c >= 0 && e == null; c--)e = this.findPreviousStateInContainer(a, f.getChildAt(b, c), null, d);
    if (e == null) {
        e = a.view.getState(b);
        if (e != null && (e.shape == null || e.shape.node == null || e.shape.node.parentNode != d))e = null
    }
    return e
};
mxCellRenderer.prototype.order = function (a) {
    var b = a.shape.node.parentNode, c = this.getPreviousStateInContainer(a, b), d = b.firstChild;
    if (c != null) {
        d = c.shape.node;
        if (c.text != null && c.text.node != null && c.text.node.parentNode == b)d = c.text.node;
        d = d.nextSibling
    }
    this.insertState(a, d)
};
mxCellRenderer.prototype.orderEdge = function (a) {
    var b = a.view, c = b.graph.getModel();
    if (b.graph.keepEdgesInForeground) {
        if (this.firstEdge == null || this.firstEdge.parentNode == null || this.firstEdge.parentNode != a.shape.node.parentNode)this.firstEdge = a.shape.node
    } else if (b.graph.keepEdgesInBackground) {
        var d = a.shape.node, e = d.parentNode, c = c.getParent(a.cell), b = b.getState(c), e = b != null && b.shape != null && b.shape.node != null ? b.shape.node.nextSibling : e.firstChild;
        e != null && e != d && this.insertState(a, e)
    }
};
mxCellRenderer.prototype.insertState = function (a, b) {
    a.shape.node.parentNode.insertBefore(a.shape.node, b);
    a.text != null && (a.text.node != null && a.text.node.parentNode == a.shape.node.parentNode) && a.shape.node.parentNode.insertBefore(a.text.node, a.shape.node.nextSibling)
};
mxCellRenderer.prototype.createShape = function (a) {
    if (a.style != null) {
        var b = mxStencilRegistry.getStencil(a.style[mxConstants.STYLE_SHAPE]);
        if (b != null)a.shape = new mxShape(b); else {
            b = this.getShapeConstructor(a);
            a.shape = new b
        }
        a.shape.points = a.absolutePoints;
        a.shape.bounds = new mxRectangle(a.x, a.y, a.width, a.height);
        a.shape.dialect = a.view.graph.dialect;
        this.configureShape(a)
    }
};
mxCellRenderer.prototype.getShape = function (a) {
    return a != null ? mxCellRenderer.prototype.defaultShapes[a] : null
};
mxCellRenderer.prototype.getShapeConstructor = function (a) {
    var b = this.getShape(a.style[mxConstants.STYLE_SHAPE]);
    b == null && (b = a.view.graph.getModel().isEdge(a.cell) ? this.defaultEdgeShape : this.defaultVertexShape);
    return b
};
mxCellRenderer.prototype.configureShape = function (a) {
    a.shape.apply(a);
    a.shape.image = a.view.graph.getImage(a);
    a.shape.indicatorShape = this.getShape(a.view.graph.getIndicatorShape(a));
    a.shape.indicatorColor = a.view.graph.getIndicatorColor(a);
    a.shape.indicatorGradientColor = a.view.graph.getIndicatorGradientColor(a);
    a.shape.indicatorDirection = a.style[mxConstants.STYLE_INDICATOR_DIRECTION];
    a.shape.indicatorImage = a.view.graph.getIndicatorImage(a);
    this.postConfigureShape(a)
};
mxCellRenderer.prototype.postConfigureShape = function (a) {
    if (a.shape != null) {
        this.resolveColor(a, "indicatorColor", mxConstants.STYLE_FILLCOLOR);
        this.resolveColor(a, "indicatorGradientColor", mxConstants.STYLE_GRADIENTCOLOR);
        this.resolveColor(a, "fill", mxConstants.STYLE_FILLCOLOR);
        this.resolveColor(a, "stroke", mxConstants.STYLE_STROKECOLOR);
        this.resolveColor(a, "gradient", mxConstants.STYLE_GRADIENTCOLOR)
    }
};
mxCellRenderer.prototype.resolveColor = function (a, b, c) {
    var d = a.shape[b], e = a.view.graph, f = null;
    if (d == "inherit")f = e.model.getParent(a.cell); else if (d == "swimlane") {
        f = e.model.getTerminal(a.cell, false) != null ? e.model.getTerminal(a.cell, false) : a.cell;
        f = e.getSwimlane(f);
        c = e.swimlaneIndicatorColorAttribute
    } else if (d == "indicated")a.shape[b] = a.shape.indicatorColor;
    if (f != null) {
        d = e.getView().getState(f);
        a.shape[b] = null;
        d != null && (a.shape[b] = d.shape != null && b != "indicatorColor" ? d.shape[b] : d.style[c])
    }
};
mxCellRenderer.prototype.getLabelValue = function (a) {
    return a.view.graph.getLabel(a.cell)
};
mxCellRenderer.prototype.createLabel = function (a, b) {
    var c = a.view.graph;
    c.getModel().isEdge(a.cell);
    if (a.style[mxConstants.STYLE_FONTSIZE] > 0 || a.style[mxConstants.STYLE_FONTSIZE] == null) {
        var d = c.isHtmlLabel(a.cell) || b != null && mxUtils.isNode(b);
        a.text = new this.defaultTextShape(b, new mxRectangle, a.style[mxConstants.STYLE_ALIGN] || mxConstants.ALIGN_CENTER, c.getVerticalAlign(a), a.style[mxConstants.STYLE_FONTCOLOR], a.style[mxConstants.STYLE_FONTFAMILY], a.style[mxConstants.STYLE_FONTSIZE], a.style[mxConstants.STYLE_FONTSTYLE],
            a.style[mxConstants.STYLE_SPACING], a.style[mxConstants.STYLE_SPACING_TOP], a.style[mxConstants.STYLE_SPACING_RIGHT], a.style[mxConstants.STYLE_SPACING_BOTTOM], a.style[mxConstants.STYLE_SPACING_LEFT], a.style[mxConstants.STYLE_HORIZONTAL], a.style[mxConstants.STYLE_LABEL_BACKGROUNDCOLOR], a.style[mxConstants.STYLE_LABEL_BORDERCOLOR], c.isWrapping(a.cell) && c.isHtmlLabel(a.cell), c.isLabelClipped(a.cell), a.style[mxConstants.STYLE_OVERFLOW], a.style[mxConstants.STYLE_LABEL_PADDING]);
        a.text.opacity = mxUtils.getValue(a.style,
            mxConstants.STYLE_TEXT_OPACITY, 100);
        a.text.dialect = d ? mxConstants.DIALECT_STRICTHTML : a.view.graph.dialect;
        a.text.state = a;
        this.initializeLabel(a);
        var e = false, f = function (b) {
            var d = a;
            if (mxClient.IS_TOUCH || e) {
                d = mxEvent.getClientX(b);
                b = mxEvent.getClientY(b);
                b = mxUtils.convertPoint(c.container, d, b);
                d = c.view.getState(c.getCellAt(b.x, b.y))
            }
            return d
        };
        mxEvent.addGestureListeners(a.text.node, mxUtils.bind(this, function (b) {
            if (this.isLabelEvent(a, b)) {
                c.fireMouseEvent(mxEvent.MOUSE_DOWN, new mxMouseEvent(b, a));
                e = c.dialect !=
                    mxConstants.DIALECT_SVG && mxEvent.getSource(b).nodeName == "IMG"
            }
        }), mxUtils.bind(this, function (b) {
            this.isLabelEvent(a, b) && c.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(b, f(b)))
        }), mxUtils.bind(this, function (b) {
            if (this.isLabelEvent(a, b)) {
                c.fireMouseEvent(mxEvent.MOUSE_UP, new mxMouseEvent(b, f(b)));
                e = false
            }
        }));
        mxEvent.addListener(a.text.node, "dblclick", mxUtils.bind(this, function (b) {
            if (this.isLabelEvent(a, b)) {
                c.dblClick(b, a.cell);
                mxEvent.consume(b)
            }
        }))
    }
};
mxCellRenderer.prototype.initializeLabel = function (a) {
    var b = a.view.graph;
    a.text.dialect != mxConstants.DIALECT_SVG && (mxClient.IS_SVG && mxClient.NO_FO ? a.text.init(b.container) : mxUtils.isVml(a.view.getDrawPane()) && (a.shape.label != null ? a.text.init(a.shape.label) : a.text.init(a.shape.node)));
    if (a.text.node == null) {
        a.text.init(a.view.getDrawPane());
        a.shape != null && a.text != null && a.shape.node.parentNode.insertBefore(a.text.node, a.shape.node.nextSibling)
    }
};
mxCellRenderer.prototype.createCellOverlays = function (a) {
    var b = a.view.graph.getCellOverlays(a.cell), c = null;
    if (b != null)for (var c = new mxDictionary, d = 0; d < b.length; d++) {
        var e = a.overlays != null ? a.overlays.remove(b[d]) : null;
        if (e == null) {
            e = new mxImageShape(new mxRectangle, b[d].image.src);
            e.dialect = a.view.graph.dialect;
            e.preserveImageAspect = false;
            e.overlay = b[d];
            this.initializeOverlay(a, e);
            this.installCellOverlayListeners(a, b[d], e);
            if (b[d].cursor != null)e.node.style.cursor = b[d].cursor
        }
        c.put(b[d], e)
    }
    a.overlays !=
        null && a.overlays.visit(function (a, b) {
        b.destroy()
    });
    a.overlays = c
};
mxCellRenderer.prototype.initializeOverlay = function (a, b) {
    b.init(a.view.getOverlayPane())
};
mxCellRenderer.prototype.installCellOverlayListeners = function (a, b, c) {
    var d = a.view.graph;
    mxEvent.addListener(c.node, "click", function (c) {
        d.isEditing() && d.stopEditing(!d.isInvokesStopCellEditing());
        b.fireEvent(new mxEventObject(mxEvent.CLICK, "event", c, "cell", a.cell))
    });
    mxEvent.addGestureListeners(c.node, function (a) {
        mxEvent.consume(a)
    }, function (b) {
        d.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(b, a))
    });
    mxClient.IS_TOUCH && mxEvent.addListener(c.node, "touchend", function (c) {
        b.fireEvent(new mxEventObject(mxEvent.CLICK,
            "event", c, "cell", a.cell))
    })
};
mxCellRenderer.prototype.createControl = function (a) {
    var b = a.view.graph, c = b.getFoldingImage(a);
    if (b.foldingEnabled && c != null) {
        if (a.control == null) {
            var d = new mxRectangle(0, 0, c.width, c.height);
            a.control = new mxImageShape(d, c.src);
            a.control.preserveImageAspect = false;
            a.control.dialect = b.dialect;
            this.initControl(a, a.control, true, function (c) {
                if (b.isEnabled()) {
                    var d = !b.isCellCollapsed(a.cell);
                    b.foldCells(d, false, [a.cell]);
                    mxEvent.consume(c)
                }
            })
        }
    } else if (a.control != null) {
        a.control.destroy();
        a.control = null
    }
};
mxCellRenderer.prototype.initControl = function (a, b, c, d) {
    var e = a.view.graph;
    if (e.isHtmlLabel(a.cell) && mxClient.NO_FO && e.dialect == mxConstants.DIALECT_SVG) {
        b.dialect = mxConstants.DIALECT_PREFERHTML;
        b.init(e.container);
        b.node.style.zIndex = 1
    } else b.init(a.view.getOverlayPane());
    b = b.innerNode || b.node;
    if (d) {
        if (e.isEnabled())b.style.cursor = "pointer";
        mxEvent.addListener(b, "click", d)
    }
    c && mxEvent.addGestureListeners(b, function (b) {
        e.fireMouseEvent(mxEvent.MOUSE_DOWN, new mxMouseEvent(b, a));
        mxEvent.consume(b)
    }, function (b) {
        e.fireMouseEvent(mxEvent.MOUSE_MOVE,
            new mxMouseEvent(b, a))
    });
    return b
};
mxCellRenderer.prototype.isShapeEvent = function () {
    return true
};
mxCellRenderer.prototype.isLabelEvent = function () {
    return true
};
mxCellRenderer.prototype.installListeners = function (a) {
    var b = a.view.graph, c = function (c) {
        var d = a;
        if (b.dialect != mxConstants.DIALECT_SVG && mxEvent.getSource(c).nodeName == "IMG" || mxClient.IS_TOUCH) {
            d = mxEvent.getClientX(c);
            c = mxEvent.getClientY(c);
            c = mxUtils.convertPoint(b.container, d, c);
            d = b.view.getState(b.getCellAt(c.x, c.y))
        }
        return d
    }, d = false;
    mxEvent.addListener(a.shape.node, "gesturestart", mxUtils.bind(this, function (a) {
        b.lastTouchTime = 0;
        d = true;
        mxEvent.consume(a)
    }));
    mxEvent.addGestureListeners(a.shape.node,
        mxUtils.bind(this, function (c) {
            this.isShapeEvent(a, c) && !d ? b.fireMouseEvent(mxEvent.MOUSE_DOWN, new mxMouseEvent(c, a.shape != null && mxEvent.getSource(c) == a.shape.content ? null : a)) : d && mxEvent.consume(c)
        }), mxUtils.bind(this, function (e) {
            this.isShapeEvent(a, e) && !d ? b.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(e, a.shape != null && mxEvent.getSource(e) == a.shape.content ? null : c(e))) : d && mxEvent.consume(e)
        }), mxUtils.bind(this, function (e) {
            this.isShapeEvent(a, e) && !d ? b.fireMouseEvent(mxEvent.MOUSE_UP, new mxMouseEvent(e,
                a.shape != null && mxEvent.getSource(e) == a.shape.content ? null : c(e))) : d && mxEvent.consume(e)
        }));
    var e = mxClient.IS_TOUCH ? "gestureend" : "dblclick";
    mxEvent.addListener(a.shape.node, e, mxUtils.bind(this, function (c) {
        d = false;
        if (e == "gestureend") {
            b.lastTouchTime = 0;
            if (b.gestureEnabled) {
                b.handleGesture(a, c);
                mxEvent.consume(c)
            }
        } else if (this.isShapeEvent(a, c)) {
            b.dblClick(c, a.shape != null && mxEvent.getSource(c) == a.shape.content ? null : a.cell);
            mxEvent.consume(c)
        }
    }))
};
mxCellRenderer.prototype.redrawLabel = function (a, b) {
    var c = this.getLabelValue(a);
    if (a.text == null && c != null && (mxUtils.isNode(c) || c.length > 0))this.createLabel(a, c); else if (a.text != null && (c == null || c.length == 0)) {
        a.text.destroy();
        a.text = null
    }
    if (a.text != null) {
        var d = a.view.graph, e = d.isWrapping(a.cell), d = d.isLabelClipped(a.cell), f = this.getLabelBounds(a);
        if (b || a.text.value != c || a.text.isWrapping != e || a.text.isClipping != d || a.text.scale != a.view.scale || !a.text.bounds.equals(f)) {
            a.text.value = c;
            a.text.bounds = f;
            a.text.scale =
                this.getTextScale(a);
            a.text.isWrapping = e;
            a.text.isClipping = d;
            a.text.redraw()
        }
    }
};
mxCellRenderer.prototype.getTextScale = function (a) {
    return a.view.scale
};
mxCellRenderer.prototype.getLabelBounds = function (a) {
    var b = a.view.graph, c = a.view.scale, d = b.getModel().isEdge(a.cell), e = new mxRectangle(a.absoluteOffset.x, a.absoluteOffset.y);
    a.text.updateMargin();
    if (d) {
        d = a.text.getSpacing();
        e.x = e.x + d.x * c;
        e.y = e.y + d.y * c;
        b = b.getCellGeometry(a.cell);
        if (b != null) {
            e.width = Math.max(0, a.text.margin.x * b.width * c - a.text.spacingLeft * c - a.text.spacingRight * c);
            e.height = Math.max(0, a.text.margin.y * b.height * c - a.text.spacingTop * c - a.text.spacingBottom * c)
        }
    } else {
        if (a.text.isPaintBoundsInverted()) {
            d =
                e.x;
            e.x = e.y;
            e.y = d
        }
        e.x = e.x + a.x;
        e.y = e.y + a.y;
        e.width = Math.max(1, a.width);
        e.height = Math.max(1, a.height);
        if (b.isSwimlane(a.cell)) {
            b = b.getStartSize(a.cell);
            if (b.width > 0) {
                d = Math.min(e.width, b.width * c);
                if (a.shape.flipH)e.x = e.x + (e.width - d);
                e.width = d
            } else if (b.height > 0) {
                d = Math.min(e.height, b.height * c);
                if (a.shape.flipV)e.y = e.y + (e.height - d);
                e.height = d
            }
        }
        this.rotateLabelBounds(a, e)
    }
    return e
};
mxCellRenderer.prototype.rotateLabelBounds = function (a, b) {
    if (a.text.isPaintBoundsInverted()) {
        var c = (a.width - a.height) / 2;
        b.x = b.x + c;
        b.y = b.y - c;
        c = b.width;
        b.width = b.height;
        b.height = c
    }
    b.x = b.x - a.text.margin.x * b.width;
    b.y = b.y - a.text.margin.y * b.height;
    if (a.style[mxConstants.STYLE_OVERFLOW] != "fill") {
        var c = a.view.scale, d = a.text.getSpacing();
        b.x = b.x + d.x * c;
        b.y = b.y + d.y * c;
        b.width = Math.max(0, b.width - a.text.spacingLeft * c - a.text.spacingRight * c);
        b.height = Math.max(0, b.height - a.text.spacingTop * c - a.text.spacingBottom * c)
    }
    var e =
        a.text.getTextRotation();
    if (e != 0 && a != null && a.view.graph.model.isVertex(a.cell)) {
        c = a.getCenterX();
        d = a.getCenterY();
        if (b.x != c || b.y != d) {
            e = e * (Math.PI / 180);
            pt = mxUtils.getRotatedPoint(new mxPoint(b.x, b.y), Math.cos(e), Math.sin(e), new mxPoint(c, d));
            b.x = pt.x;
            b.y = pt.y
        }
    }
};
mxCellRenderer.prototype.redrawCellOverlays = function (a, b) {
    this.createCellOverlays(a);
    if (a.overlays != null) {
        var c = mxUtils.mod(mxUtils.getValue(a.style, mxConstants.STYLE_ROTATION, 0), 90), d = mxUtils.toRadians(c), e = Math.cos(d), f = Math.sin(d);
        a.overlays.visit(function (d, h) {
            var k = h.overlay.getBounds(a);
            if (!a.view.graph.getModel().isEdge(a.cell) && a.shape != null && c != 0) {
                var i = k.getCenterX(), l = k.getCenterY(), l = mxUtils.getRotatedPoint(new mxPoint(i, l), e, f, new mxPoint(a.getCenterX(), a.getCenterY())), i = l.x, l = l.y;
                k.x =
                    Math.round(i - k.width / 2);
                k.y = Math.round(l - k.height / 2)
            }
            if (b || h.bounds == null || h.scale != a.view.scale || !h.bounds.equals(k)) {
                h.bounds = k;
                h.scale = a.view.scale;
                h.redraw()
            }
        })
    }
};
mxCellRenderer.prototype.redrawControl = function (a, b) {
    if (a.control != null) {
        var c = this.getControlBounds(a), d = this.legacyControlPosition ? mxUtils.getValue(a.style, mxConstants.STYLE_ROTATION, 0) : a.shape.getTextRotation(), e = a.view.scale;
        if (b || a.control.scale != e || !a.control.bounds.equals(c) || a.control.rotation != d) {
            a.control.rotation = d;
            a.control.bounds = c;
            a.control.scale = e;
            a.control.redraw()
        }
    }
};
mxCellRenderer.prototype.getControlBounds = function (a) {
    if (a.control != null) {
        var b = a.control.scale, c = a.control.bounds.width / b, b = a.control.bounds.height / b, d = a.view.scale, e = a.getCenterX(), f = a.getCenterY();
        if (!a.view.graph.getModel().isEdge(a.cell)) {
            e = a.x + c * d;
            f = a.y + b * d;
            if (a.shape != null) {
                var g = a.shape.getShapeRotation();
                if (this.legacyControlPosition)g = mxUtils.getValue(a.style, mxConstants.STYLE_ROTATION, 0); else if (a.shape.isPaintBoundsInverted())var h = (a.width - a.height) / 2, e = e + h, f = f - h;
                if (g != 0) {
                    h = mxUtils.toRadians(g);
                    g = Math.cos(h);
                    h = Math.sin(h);
                    f = mxUtils.getRotatedPoint(new mxPoint(e, f), g, h, new mxPoint(a.getCenterX(), a.getCenterY()));
                    e = f.x;
                    f = f.y
                }
            }
        }
        return a.view.graph.getModel().isEdge(a.cell), new mxRectangle(Math.round(e - c / 2 * d), Math.round(f - b / 2 * d), Math.round(c * d), Math.round(b * d))
    }
    return null
};
mxCellRenderer.prototype.redraw = function (a, b, c) {
    if (a.shape != null) {
        var d = false;
        a.view.graph.getModel().isEdge(a.cell);
        reconfigure = b != null ? b : false;
        this.createControl(a);
        if (a.orderChanged || a.invalidOrder)a.view.graph.ordered ? this.order(a) : this.orderEdge(a);
        if (a.orderChanged || !mxUtils.equalEntries(a.shape.style, a.style)) {
            this.configureShape(a);
            b = true
        }
        delete a.invalidOrder;
        delete a.orderChanged;
        if (b || a.shape.bounds == null || a.shape.scale != a.view.scale || !a.shape.bounds.equals(a) || !mxUtils.equalPoints(a.shape.points,
            a.absolutePoints)) {
            d = true;
            a.shape.points = a.absolutePoints != null ? a.absolutePoints.slice() : null;
            a.shape.bounds = new mxRectangle(a.x, a.y, a.width, a.height);
            a.shape.scale = a.view.scale;
            c == null || c ? a.shape.redraw() : a.shape.updateBoundingBox()
        }
        if (c == null || c) {
            this.redrawLabel(a, d);
            this.redrawCellOverlays(a, d);
            this.redrawControl(a, d)
        }
    }
};
mxCellRenderer.prototype.destroy = function (a) {
    if (a.shape != null) {
        if (a.text != null) {
            a.text.destroy();
            a.text = null
        }
        if (a.overlays != null) {
            a.overlays.visit(function (a, c) {
                c.destroy()
            });
            a.overlays = null
        }
        if (a.control != null) {
            a.control.destroy();
            a.control = null
        }
        a.shape.destroy();
        a.shape = null
    }
};
var mxEdgeStyle = {EntityRelation: function (a, b, c, d, e) {
    var f = a.view, g = f.graph, d = mxUtils.getValue(a.style, mxConstants.STYLE_SEGMENT, mxConstants.ENTITY_SEGMENT) * f.scale, h = a.absolutePoints, k = h[0], i = h[h.length - 1], h = false;
    if (k != null) {
        b = new mxCellState;
        b.x = k.x;
        b.y = k.y
    } else if (b != null) {
        var l = mxUtils.getPortConstraints(b, a, true, mxConstants.DIRECTION_MASK_NONE);
        if (l != mxConstants.DIRECTION_MASK_NONE)h = l == mxConstants.DIRECTION_MASK_WEST; else {
            k = g.getCellGeometry(b.cell);
            k.relative ? h = k.x <= 0.5 : c != null && (h = c.x + c.width <
                b.x)
        }
    } else return;
    k = true;
    if (i != null) {
        c = new mxCellState;
        c.x = i.x;
        c.y = i.y
    } else if (c != null) {
        l = mxUtils.getPortConstraints(c, a, false, mxConstants.DIRECTION_MASK_NONE);
        if (l != mxConstants.DIRECTION_MASK_NONE)k = l == mxConstants.DIRECTION_MASK_WEST; else {
            a = g.getCellGeometry(c.cell);
            a.relative ? k = a.x <= 0.5 : b != null && (k = b.x + b.width < c.x)
        }
    }
    if (b != null && c != null) {
        a = h ? b.x : b.x + b.width;
        b = f.getRoutingCenterY(b);
        g = k ? c.x : c.x + c.width;
        c = f.getRoutingCenterY(c);
        f = new mxPoint(a + (h ? -d : d), b);
        i = new mxPoint(g + (k ? -d : d), c);
        if (h == k) {
            d = h ? Math.min(a,
                g) - d : Math.max(a, g) + d;
            e.push(new mxPoint(d, b));
            e.push(new mxPoint(d, c))
        } else {
            if (f.x < i.x == h) {
                d = b + (c - b) / 2;
                e.push(f);
                e.push(new mxPoint(f.x, d));
                e.push(new mxPoint(i.x, d))
            } else e.push(f);
            e.push(i)
        }
    }
}, Loop: function (a, b, c, d, e) {
    if (b != null) {
        var c = a.view, f = c.graph, d = d != null && d.length > 0 ? d[0] : null;
        if (d != null) {
            d = c.transformControlPoint(a, d);
            mxUtils.contains(b, d.x, d.y) && (d = null)
        }
        var g = 0, h = 0, k = 0, i = 0, f = mxUtils.getValue(a.style, mxConstants.STYLE_SEGMENT, f.gridSize) * c.scale, a = mxUtils.getValue(a.style, mxConstants.STYLE_DIRECTION,
            mxConstants.DIRECTION_WEST);
        if (a == mxConstants.DIRECTION_NORTH || a == mxConstants.DIRECTION_SOUTH) {
            g = c.getRoutingCenterX(b);
            h = f
        } else {
            k = c.getRoutingCenterY(b);
            i = f
        }
        if (d == null || d.x < b.x || d.x > b.x + b.width)if (d != null) {
            g = d.x;
            i = Math.max(Math.abs(k - d.y), i)
        } else a == mxConstants.DIRECTION_NORTH ? k = b.y - 2 * h : a == mxConstants.DIRECTION_SOUTH ? k = b.y + b.height + 2 * h : g = a == mxConstants.DIRECTION_EAST ? b.x - 2 * i : b.x + b.width + 2 * i; else if (d != null) {
            g = c.getRoutingCenterX(b);
            h = Math.max(Math.abs(g - d.x), i);
            k = d.y;
            i = 0
        }
        e.push(new mxPoint(g - h, k -
            i));
        e.push(new mxPoint(g + h, k + i))
    }
}, ElbowConnector: function (a, b, c, d, e) {
    var f = d != null && d.length > 0 ? d[0] : null, g = false, h = false;
    if (b != null && c != null)if (f != null)var k = Math.min(b.x, c.x), i = Math.max(b.x + b.width, c.x + c.width), h = Math.min(b.y, c.y), l = Math.max(b.y + b.height, c.y + c.height), f = a.view.transformControlPoint(a, f), g = f.y < h || f.y > l, h = f.x < k || f.x > i; else {
        k = Math.max(b.x, c.x);
        i = Math.min(b.x + b.width, c.x + c.width);
        g = k == i;
        if (!g) {
            h = Math.max(b.y, c.y);
            l = Math.min(b.y + b.height, c.y + c.height);
            h = h == l
        }
    }
    !h && (g || a.style[mxConstants.STYLE_ELBOW] ==
        mxConstants.ELBOW_VERTICAL) ? mxEdgeStyle.TopToBottom(a, b, c, d, e) : mxEdgeStyle.SideToSide(a, b, c, d, e)
}, SideToSide: function (a, b, c, d, e) {
    var f = a.view, d = d != null && d.length > 0 ? d[0] : null, g = a.absolutePoints, h = g[0], g = g[g.length - 1];
    d != null && (d = f.transformControlPoint(a, d));
    if (h != null) {
        b = new mxCellState;
        b.x = h.x;
        b.y = h.y
    }
    if (g != null) {
        c = new mxCellState;
        c.x = g.x;
        c.y = g.y
    }
    if (b != null && c != null) {
        a = Math.max(b.x, c.x);
        h = Math.min(b.x + b.width, c.x + c.width);
        a = d != null ? d.x : h + (a - h) / 2;
        h = f.getRoutingCenterY(b);
        f = f.getRoutingCenterY(c);
        if (d != null) {
            if (d.y >= b.y && d.y <= b.y + b.height)h = d.y;
            if (d.y >= c.y && d.y <= c.y + c.height)f = d.y
        }
        !mxUtils.contains(c, a, h) && !mxUtils.contains(b, a, h) && e.push(new mxPoint(a, h));
        !mxUtils.contains(c, a, f) && !mxUtils.contains(b, a, f) && e.push(new mxPoint(a, f));
        if (e.length == 1)if (d != null)!mxUtils.contains(c, a, d.y) && !mxUtils.contains(b, a, d.y) && e.push(new mxPoint(a, d.y)); else {
            f = Math.max(b.y, c.y);
            b = Math.min(b.y + b.height, c.y + c.height);
            e.push(new mxPoint(a, f + (b - f) / 2))
        }
    }
}, TopToBottom: function (a, b, c, d, e) {
    var f = a.view, d = d != null &&
        d.length > 0 ? d[0] : null, g = a.absolutePoints, h = g[0], g = g[g.length - 1];
    d != null && (d = f.transformControlPoint(a, d));
    if (h != null) {
        b = new mxCellState;
        b.x = h.x;
        b.y = h.y
    }
    if (g != null) {
        c = new mxCellState;
        c.x = g.x;
        c.y = g.y
    }
    if (b != null && c != null) {
        h = Math.max(b.y, c.y);
        g = Math.min(b.y + b.height, c.y + c.height);
        a = f.getRoutingCenterX(b);
        if (d != null && d.x >= b.x && d.x <= b.x + b.width)a = d.x;
        h = d != null ? d.y : g + (h - g) / 2;
        !mxUtils.contains(c, a, h) && !mxUtils.contains(b, a, h) && e.push(new mxPoint(a, h));
        a = d != null && d.x >= c.x && d.x <= c.x + c.width ? d.x : f.getRoutingCenterX(c);
        !mxUtils.contains(c, a, h) && !mxUtils.contains(b, a, h) && e.push(new mxPoint(a, h));
        if (e.length == 1)if (d != null && e.length == 1)!mxUtils.contains(c, d.x, h) && !mxUtils.contains(b, d.x, h) && e.push(new mxPoint(d.x, h)); else {
            f = Math.max(b.x, c.x);
            b = Math.min(b.x + b.width, c.x + c.width);
            e.push(new mxPoint(f + (b - f) / 2, h))
        }
    }
}, SegmentConnector: function (a, b, c, d, e) {
    var f = a.absolutePoints, g = true, h = null, k = f[0];
    k == null && b != null ? k = new mxPoint(a.view.getRoutingCenterX(b), a.view.getRoutingCenterY(b)) : k != null && (k = k.clone());
    var i = f.length -
        1;
    if (d != null && d.length > 0) {
        for (var h = a.view.transformControlPoint(a, d[0]), l = b, n = f[0], m = false, o = false, m = h, q = d.length, p = 0; p < 2; p++) {
            var r = n != null && n.x == m.x, s = n != null && n.y == m.y, t = l != null && m.y >= l.y && m.y <= l.y + l.height, l = l != null && m.x >= l.x && m.x <= l.x + l.width, m = s || n == null && t, o = r || n == null && l;
            if (n != null && !s && !r && (t || l)) {
                g = t ? false : true;
                break
            }
            if (o || m) {
                g = m;
                p == 1 && (g = d.length % 2 == 0 ? m : o);
                break
            }
            l = c;
            n = f[i];
            m = a.view.transformControlPoint(a, d[q - 1])
        }
        g && (f[0] != null && f[0].y != h.y || f[0] == null && b != null && (h.y < b.y || h.y > b.y + b.height)) ?
            e.push(new mxPoint(k.x, h.y)) : !g && (f[0] != null && f[0].x != h.x || f[0] == null && b != null && (h.x < b.x || h.x > b.x + b.width)) && e.push(new mxPoint(h.x, k.y));
        g ? k.y = h.y : k.x = h.x;
        for (p = 0; p < d.length; p++) {
            g = !g;
            h = a.view.transformControlPoint(a, d[p]);
            g ? k.y = h.y : k.x = h.x;
            e.push(k.clone())
        }
    } else {
        h = k;
        g = true
    }
    k = f[i];
    k == null && c != null && (k = new mxPoint(a.view.getRoutingCenterX(c), a.view.getRoutingCenterY(c)));
    g && (f[i] != null && f[i].y != h.y || f[i] == null && c != null && (h.y < c.y || h.y > c.y + c.height)) ? e.push(new mxPoint(k.x, h.y)) : !g && (f[i] != null && f[i].x !=
        h.x || f[i] == null && c != null && (h.x < c.x || h.x > c.x + c.width)) && e.push(new mxPoint(h.x, k.y));
    if (f[0] == null && b != null)for (; e.length > 1 && mxUtils.contains(b, e[1].x, e[1].y);)e = e.splice(1, 1);
    if (f[i] == null && c != null)for (; e.length > 1 && mxUtils.contains(c, e[e.length - 1].x, e[e.length - 1].y);)e = e.splice(e.length - 1, 1)
}, orthBuffer: 10, dirVectors: [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 0]
], wayPoints1: [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
], routePatterns: [
    [
        [513, 2308, 2081, 2562],
        [513, 1090, 514,
            2184, 2114, 2561],
        [513, 1090, 514, 2564, 2184, 2562],
        [513, 2308, 2561, 1090, 514, 2568, 2308]
    ],
    [
        [514, 1057, 513, 2308, 2081, 2562],
        [514, 2184, 2114, 2561],
        [514, 2184, 2562, 1057, 513, 2564, 2184],
        [514, 1057, 513, 2568, 2308, 2561]
    ],
    [
        [1090, 514, 1057, 513, 2308, 2081, 2562],
        [2114, 2561],
        [1090, 2562, 1057, 513, 2564, 2184],
        [1090, 514, 1057, 513, 2308, 2561, 2568]
    ],
    [
        [2081, 2562],
        [1057, 513, 1090, 514, 2184, 2114, 2561],
        [1057, 513, 1090, 514, 2184, 2562, 2564],
        [1057, 2561, 1090, 514, 2568, 2308]
    ]
], inlineRoutePatterns: [
    [null, [2114, 2568], null, null],
    [null, [514, 2081, 2114,
        2568], null, null],
    [null, [2114, 2561], null, null],
    [
        [2081, 2562],
        [1057, 2114, 2568],
        [2184, 2562],
        null
    ]
], vertexSeperations: [], limits: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
], LEFT_MASK: 32, TOP_MASK: 64, RIGHT_MASK: 128, BOTTOM_MASK: 256, LEFT: 1, TOP: 2, RIGHT: 4, BOTTOM: 8, SIDE_MASK: 480, CENTER_MASK: 512, SOURCE_MASK: 1024, TARGET_MASK: 2048, VERTEX_MASK: 3072, OrthConnector: function (a, b, c, d, e) {
    var f = a.view.graph, g = b == null ? false : f.getModel().isEdge(b.cell), f = c == null ? false : f.getModel().isEdge(c.cell);
    if (d != null && d.length > 0 || g || f)mxEdgeStyle.SegmentConnector(a,
        b, c, d, e); else {
        var d = a.absolutePoints, h = d[0], k = d[d.length - 1], d = b != null ? b.x : h.x, g = b != null ? b.y : h.y, i = b != null ? b.width : 1, l = b != null ? b.height : 1, n = c != null ? c.x : k.x, m = c != null ? c.y : k.y, o = c != null ? c.width : 1, q = c != null ? c.height : 1, f = a.view.scale * mxEdgeStyle.orthBuffer, p = [mxConstants.DIRECTION_MASK_ALL, mxConstants.DIRECTION_MASK_ALL];
        b != null && (p[0] = mxUtils.getPortConstraints(b, a, true, mxConstants.DIRECTION_MASK_ALL));
        c != null && (p[1] = mxUtils.getPortConstraints(c, a, false, mxConstants.DIRECTION_MASK_ALL));
        a = [0, 0];
        d = [
            [d,
                g, i, l],
            [n, m, o, q]
        ];
        for (i = 0; i < 2; i++) {
            mxEdgeStyle.limits[i][1] = d[i][0] - f;
            mxEdgeStyle.limits[i][2] = d[i][1] - f;
            mxEdgeStyle.limits[i][4] = d[i][0] + d[i][2] + f;
            mxEdgeStyle.limits[i][8] = d[i][1] + d[i][3] + f
        }
        i = d[0][0] + d[0][2] / 2 - (d[1][0] + d[1][2] / 2);
        l = d[0][1] + d[0][3] / 2 - (d[1][1] + d[1][3] / 2);
        g = 0;
        if (i < 0)g = l < 0 ? 2 : 1; else if (l <= 0) {
            g = 3;
            i == 0 && (g = 2)
        }
        l = null;
        b != null && (l = h);
        b = [
            [0.5, 0.5],
            [0.5, 0.5]
        ];
        for (i = 0; i < 2; i++) {
            if (l != null) {
                b[i][0] = (l.x - d[i][0]) / d[i][2];
                if (b[i][0] < 0.01)a[i] = mxConstants.DIRECTION_MASK_WEST; else if (b[i][0] > 0.99)a[i] =
                    mxConstants.DIRECTION_MASK_EAST;
                b[i][1] = (l.y - d[i][1]) / d[i][3];
                if (b[i][1] < 0.01)a[i] = mxConstants.DIRECTION_MASK_NORTH; else if (b[i][1] > 0.99)a[i] = mxConstants.DIRECTION_MASK_SOUTH
            }
            l = null;
            c != null && (l = k)
        }
        i = d[0][1] - (d[1][1] + d[1][3]);
        l = d[0][0] - (d[1][0] + d[1][2]);
        n = d[1][1] - (d[0][1] + d[0][3]);
        m = d[1][0] - (d[0][0] + d[0][2]);
        mxEdgeStyle.vertexSeperations[1] = Math.max(l - 2 * f, 0);
        mxEdgeStyle.vertexSeperations[2] = Math.max(i - 2 * f, 0);
        mxEdgeStyle.vertexSeperations[4] = Math.max(n - 2 * f, 0);
        mxEdgeStyle.vertexSeperations[3] = Math.max(m -
            2 * f, 0);
        c = [];
        h = [];
        k = [];
        h[0] = l >= m ? mxConstants.DIRECTION_MASK_WEST : mxConstants.DIRECTION_MASK_EAST;
        k[0] = i >= n ? mxConstants.DIRECTION_MASK_NORTH : mxConstants.DIRECTION_MASK_SOUTH;
        h[1] = mxUtils.reversePortConstraints(h[0]);
        k[1] = mxUtils.reversePortConstraints(k[0]);
        l = l >= m ? l : m;
        n = i >= n ? i : n;
        m = [
            [0, 0],
            [0, 0]
        ];
        o = false;
        for (i = 0; i < 2; i++)if (a[i] == 0) {
            (h[i] & p[i]) == 0 && (h[i] = mxUtils.reversePortConstraints(h[i]));
            (k[i] & p[i]) == 0 && (k[i] = mxUtils.reversePortConstraints(k[i]));
            m[i][0] = k[i];
            m[i][1] = h[i]
        }
        if (n > f * 2 && l > f * 2)if ((h[0] &
            p[0]) > 0 && (k[1] & p[1]) > 0) {
            m[0][0] = h[0];
            m[0][1] = k[0];
            m[1][0] = k[1];
            m[1][1] = h[1];
            o = true
        } else if ((k[0] & p[0]) > 0 && (h[1] & p[1]) > 0) {
            m[0][0] = k[0];
            m[0][1] = h[0];
            m[1][0] = h[1];
            m[1][1] = k[1];
            o = true
        }
        if (n > f * 2 && !o) {
            m[0][0] = k[0];
            m[0][1] = h[0];
            m[1][0] = k[1];
            m[1][1] = h[1];
            o = true
        }
        if (l > f * 2 && !o) {
            m[0][0] = h[0];
            m[0][1] = k[0];
            m[1][0] = h[1];
            m[1][1] = k[1]
        }
        for (i = 0; i < 2; i++)if (a[i] == 0) {
            (m[i][0] & p[i]) == 0 && (m[i][0] = m[i][1]);
            c[i] = m[i][0] & p[i];
            c[i] = c[i] | (m[i][1] & p[i]) << 8;
            c[i] = c[i] | (m[1 - i][i] & p[i]) << 16;
            c[i] = c[i] | (m[1 - i][1 - i] & p[i]) << 24;
            (c[i] & 15) ==
                0 && (c[i] = c[i] << 8);
            (c[i] & 3840) == 0 && (c[i] = c[i] & 15 | c[i] >> 8);
            (c[i] & 983040) == 0 && (c[i] = c[i] & 65535 | (c[i] & 251658240) >> 8);
            a[i] = c[i] & 15;
            if (p[i] == mxConstants.DIRECTION_MASK_WEST || p[i] == mxConstants.DIRECTION_MASK_NORTH || p[i] == mxConstants.DIRECTION_MASK_EAST || p[i] == mxConstants.DIRECTION_MASK_SOUTH)a[i] = p[i]
        }
        i = a[0] == mxConstants.DIRECTION_MASK_EAST ? 3 : a[0];
        p = a[1] == mxConstants.DIRECTION_MASK_EAST ? 3 : a[1];
        i = i - g;
        p = p - g;
        i < 1 && (i = i + 4);
        p < 1 && (p = p + 4);
        p = mxEdgeStyle.routePatterns[i - 1][p - 1];
        mxEdgeStyle.wayPoints1[0][0] = d[0][0];
        mxEdgeStyle.wayPoints1[0][1] = d[0][1];
        switch (a[0]) {
            case mxConstants.DIRECTION_MASK_WEST:
                mxEdgeStyle.wayPoints1[0][0] = mxEdgeStyle.wayPoints1[0][0] - f;
                mxEdgeStyle.wayPoints1[0][1] = mxEdgeStyle.wayPoints1[0][1] + b[0][1] * d[0][3];
                break;
            case mxConstants.DIRECTION_MASK_SOUTH:
                mxEdgeStyle.wayPoints1[0][0] = mxEdgeStyle.wayPoints1[0][0] + b[0][0] * d[0][2];
                mxEdgeStyle.wayPoints1[0][1] = mxEdgeStyle.wayPoints1[0][1] + (d[0][3] + f);
                break;
            case mxConstants.DIRECTION_MASK_EAST:
                mxEdgeStyle.wayPoints1[0][0] = mxEdgeStyle.wayPoints1[0][0] +
                    (d[0][2] + f);
                mxEdgeStyle.wayPoints1[0][1] = mxEdgeStyle.wayPoints1[0][1] + b[0][1] * d[0][3];
                break;
            case mxConstants.DIRECTION_MASK_NORTH:
                mxEdgeStyle.wayPoints1[0][0] = mxEdgeStyle.wayPoints1[0][0] + b[0][0] * d[0][2];
                mxEdgeStyle.wayPoints1[0][1] = mxEdgeStyle.wayPoints1[0][1] - f
        }
        f = 0;
        h = c = (a[0] & (mxConstants.DIRECTION_MASK_EAST | mxConstants.DIRECTION_MASK_WEST)) > 0 ? 0 : 1;
        for (i = k = 0; i < p.length; i++) {
            k = p[i] & 15;
            q = k == mxConstants.DIRECTION_MASK_EAST ? 3 : k;
            q = q + g;
            q > 4 && (q = q - 4);
            l = mxEdgeStyle.dirVectors[q - 1];
            k = q % 2 > 0 ? 0 : 1;
            if (k != c) {
                f++;
                mxEdgeStyle.wayPoints1[f][0] = mxEdgeStyle.wayPoints1[f - 1][0];
                mxEdgeStyle.wayPoints1[f][1] = mxEdgeStyle.wayPoints1[f - 1][1]
            }
            var r = (p[i] & mxEdgeStyle.TARGET_MASK) > 0, o = (p[i] & mxEdgeStyle.SOURCE_MASK) > 0, n = (p[i] & mxEdgeStyle.SIDE_MASK) >> 5, n = n << g;
            n > 15 && (n = n >> 4);
            m = (p[i] & mxEdgeStyle.CENTER_MASK) > 0;
            if ((o || r) && n < 9) {
                q = 0;
                o = o ? 0 : 1;
                q = m && k == 0 ? d[o][0] + b[o][0] * d[o][2] : m ? d[o][1] + b[o][1] * d[o][3] : mxEdgeStyle.limits[o][n];
                if (k == 0) {
                    n = (q - mxEdgeStyle.wayPoints1[f][0]) * l[0];
                    n > 0 && (mxEdgeStyle.wayPoints1[f][0] = mxEdgeStyle.wayPoints1[f][0] +
                        l[0] * n)
                } else {
                    n = (q - mxEdgeStyle.wayPoints1[f][1]) * l[1];
                    n > 0 && (mxEdgeStyle.wayPoints1[f][1] = mxEdgeStyle.wayPoints1[f][1] + l[1] * n)
                }
            } else if (m) {
                mxEdgeStyle.wayPoints1[f][0] = mxEdgeStyle.wayPoints1[f][0] + l[0] * Math.abs(mxEdgeStyle.vertexSeperations[q] / 2);
                mxEdgeStyle.wayPoints1[f][1] = mxEdgeStyle.wayPoints1[f][1] + l[1] * Math.abs(mxEdgeStyle.vertexSeperations[q] / 2)
            }
            f > 0 && mxEdgeStyle.wayPoints1[f][k] == mxEdgeStyle.wayPoints1[f - 1][k] ? f-- : c = k
        }
        for (i = 0; i <= f; i++) {
            if (i == f && (((a[1] & (mxConstants.DIRECTION_MASK_EAST | mxConstants.DIRECTION_MASK_WEST)) >
                0 ? 0 : 1) == h ? 0 : 1) != (f + 1) % 2)break;
            e.push(new mxPoint(mxEdgeStyle.wayPoints1[i][0], mxEdgeStyle.wayPoints1[i][1]))
        }
    }
}, getRoutePattern: function (a, b, c, d) {
    var e = a[0] == mxConstants.DIRECTION_MASK_EAST ? 3 : a[0], a = a[1] == mxConstants.DIRECTION_MASK_EAST ? 3 : a[1], e = e - b, a = a - b;
    e < 1 && (e = e + 4);
    a < 1 && (a = a + 4);
    b = routePatterns[e - 1][a - 1];
    if (c == 0 || d == 0)inlineRoutePatterns[e - 1][a - 1] != null && (b = inlineRoutePatterns[e - 1][a - 1]);
    return b
}}, mxStyleRegistry = {values: [], putValue: function (a, b) {
    mxStyleRegistry.values[a] = b
}, getValue: function (a) {
    return mxStyleRegistry.values[a]
},
    getName: function (a) {
        for (var b in mxStyleRegistry.values)if (mxStyleRegistry.values[b] == a)return b;
        return null
    }};
mxStyleRegistry.putValue(mxConstants.EDGESTYLE_ELBOW, mxEdgeStyle.ElbowConnector);
mxStyleRegistry.putValue(mxConstants.EDGESTYLE_ENTITY_RELATION, mxEdgeStyle.EntityRelation);
mxStyleRegistry.putValue(mxConstants.EDGESTYLE_LOOP, mxEdgeStyle.Loop);
mxStyleRegistry.putValue(mxConstants.EDGESTYLE_SIDETOSIDE, mxEdgeStyle.SideToSide);
mxStyleRegistry.putValue(mxConstants.EDGESTYLE_TOPTOBOTTOM, mxEdgeStyle.TopToBottom);
mxStyleRegistry.putValue(mxConstants.EDGESTYLE_ORTHOGONAL, mxEdgeStyle.OrthConnector);
mxStyleRegistry.putValue(mxConstants.EDGESTYLE_SEGMENT, mxEdgeStyle.SegmentConnector);
mxStyleRegistry.putValue(mxConstants.PERIMETER_ELLIPSE, mxPerimeter.EllipsePerimeter);
mxStyleRegistry.putValue(mxConstants.PERIMETER_RECTANGLE, mxPerimeter.RectanglePerimeter);
mxStyleRegistry.putValue(mxConstants.PERIMETER_RHOMBUS, mxPerimeter.RhombusPerimeter);
mxStyleRegistry.putValue(mxConstants.PERIMETER_TRIANGLE, mxPerimeter.TrianglePerimeter);
function mxGraphView(a) {
    this.graph = a;
    this.translate = new mxPoint;
    this.graphBounds = new mxRectangle;
    this.states = new mxDictionary
}
mxGraphView.prototype = new mxEventSource;
mxGraphView.prototype.constructor = mxGraphView;
mxGraphView.prototype.EMPTY_POINT = new mxPoint;
mxGraphView.prototype.doneResource = "none" != mxClient.language ? "done" : "";
mxGraphView.prototype.updatingDocumentResource = "none" != mxClient.language ? "updatingDocument" : "";
mxGraphView.prototype.allowEval = false;
mxGraphView.prototype.captureDocumentGesture = true;
mxGraphView.prototype.optimizeVmlReflows = true;
mxGraphView.prototype.rendering = true;
mxGraphView.prototype.graph = null;
mxGraphView.prototype.currentRoot = null;
mxGraphView.prototype.graphBounds = null;
mxGraphView.prototype.scale = 1;
mxGraphView.prototype.translate = null;
mxGraphView.prototype.updateStyle = false;
mxGraphView.prototype.getGraphBounds = function () {
    return this.graphBounds
};
mxGraphView.prototype.setGraphBounds = function (a) {
    this.graphBounds = a
};
mxGraphView.prototype.getBounds = function (a) {
    var b = null;
    if (a != null && a.length > 0)for (var c = this.graph.getModel(), d = 0; d < a.length; d++)if (c.isVertex(a[d]) || c.isEdge(a[d])) {
        var e = this.getState(a[d]);
        e != null && (b == null ? b = new mxRectangle(e.x, e.y, e.width, e.height) : b.add(e))
    }
    return b
};
mxGraphView.prototype.setCurrentRoot = function (a) {
    if (this.currentRoot != a) {
        var b = new mxCurrentRootChange(this, a);
        b.execute();
        var c = new mxUndoableEdit(this, false);
        c.add(b);
        this.fireEvent(new mxEventObject(mxEvent.UNDO, "edit", c));
        this.graph.sizeDidChange()
    }
    return a
};
mxGraphView.prototype.scaleAndTranslate = function (a, b, c) {
    var d = this.scale, e = new mxPoint(this.translate.x, this.translate.y);
    if (this.scale != a || this.translate.x != b || this.translate.y != c) {
        this.scale = a;
        this.translate.x = b;
        this.translate.y = c;
        if (this.isEventsEnabled()) {
            this.revalidate();
            this.graph.sizeDidChange()
        }
    }
    this.fireEvent(new mxEventObject(mxEvent.SCALE_AND_TRANSLATE, "scale", a, "previousScale", d, "translate", this.translate, "previousTranslate", e))
};
mxGraphView.prototype.getScale = function () {
    return this.scale
};
mxGraphView.prototype.setScale = function (a) {
    var b = this.scale;
    if (this.scale != a) {
        this.scale = a;
        if (this.isEventsEnabled()) {
            this.revalidate();
            this.graph.sizeDidChange()
        }
    }
    this.fireEvent(new mxEventObject(mxEvent.SCALE, "scale", a, "previousScale", b))
};
mxGraphView.prototype.getTranslate = function () {
    return this.translate
};
mxGraphView.prototype.setTranslate = function (a, b) {
    var c = new mxPoint(this.translate.x, this.translate.y);
    if (this.translate.x != a || this.translate.y != b) {
        this.translate.x = a;
        this.translate.y = b;
        if (this.isEventsEnabled()) {
            this.revalidate();
            this.graph.sizeDidChange()
        }
    }
    this.fireEvent(new mxEventObject(mxEvent.TRANSLATE, "translate", this.translate, "previousTranslate", c))
};
mxGraphView.prototype.refresh = function () {
    this.currentRoot != null && this.clear();
    this.revalidate()
};
mxGraphView.prototype.revalidate = function () {
    this.invalidate();
    this.validate()
};
mxGraphView.prototype.clear = function (a, b, c) {
    var d = this.graph.getModel(), a = a || d.getRoot(), b = b != null ? b : false, c = c != null ? c : true;
    this.removeState(a);
    if (c && (b || a != this.currentRoot))for (var c = d.getChildCount(a), e = 0; e < c; e++)this.clear(d.getChildAt(a, e), b); else this.invalidate(a)
};
mxGraphView.prototype.invalidate = function (a, b, c, d) {
    var e = this.graph.getModel(), a = a || e.getRoot(), b = b != null ? b : true, c = c != null ? c : true, d = d != null ? d : false, f = this.getState(a);
    if (f != null) {
        f.invalid = true;
        if (d)f.orderChanged = true
    }
    if (b)for (var g = e.getChildCount(a), f = 0; f < g; f++)this.invalidate(e.getChildAt(a, f), b, c, d);
    if (c) {
        d = e.getEdgeCount(a);
        for (f = 0; f < d; f++)this.invalidate(e.getEdgeAt(a, f), b, c)
    }
};
mxGraphView.prototype.validate = function (a) {
    var b = mxLog.enter("mxGraphView.validate");
    window.status = mxResources.get(this.updatingDocumentResource) || this.updatingDocumentResource;
    var c = null;
    if (this.optimizeVmlReflows && this.canvas != null && this.textDiv == null && (document.documentMode == 8 || mxClient.IS_QUIRKS)) {
        c = this.canvas.style.display;
        this.canvas.style.display = "none";
        var d = document.createElement("div");
        d.style.position = "absolute";
        d.style.whiteSpace = "nowrap";
        d.style.visibility = "hidden";
        d.style.display = mxClient.IS_QUIRKS ?
            "inline" : "inline-block";
        d.style.zoom = "1";
        document.body.appendChild(d);
        this.textDiv = d
    }
    a = a || (this.currentRoot != null ? this.currentRoot : this.graph.getModel().getRoot());
    this.validateBounds(null, a);
    a = this.validatePoints(null, a);
    a == null && (a = new mxRectangle);
    this.setGraphBounds(a);
    this.validateBackground();
    if (c != null) {
        this.canvas.style.display = c;
        document.body.removeChild(this.textDiv);
        this.textDiv = null
    }
    window.status = mxResources.get(this.doneResource) || this.doneResource;
    mxLog.leave("mxGraphView.validate",
        b)
};
mxGraphView.prototype.createBackgroundPageShape = function (a) {
    return new mxRectangleShape(a, "white", "black")
};
mxGraphView.prototype.validateBackground = function () {
    var a = this.graph.getBackgroundImage();
    if (a != null) {
        if (this.backgroundImage == null || this.backgroundImage.image != a.src) {
            this.backgroundImage != null && this.backgroundImage.destroy();
            var b = new mxRectangle(0, 0, 1, 1);
            this.backgroundImage = new mxImageShape(b, a.src);
            this.backgroundImage.dialect = this.graph.dialect;
            this.backgroundImage.init(this.backgroundPane);
            this.backgroundImage.redraw()
        }
        this.redrawBackgroundImage(this.backgroundImage, a)
    } else if (this.backgroundImage !=
        null) {
        this.backgroundImage.destroy();
        this.backgroundImage = null
    }
    if (this.graph.pageVisible) {
        b = this.getBackgroundPageBounds();
        if (this.backgroundPageShape == null) {
            this.backgroundPageShape = this.createBackgroundPageShape(b);
            this.backgroundPageShape.scale = this.scale;
            this.backgroundPageShape.isShadow = true;
            this.backgroundPageShape.dialect = this.graph.dialect;
            this.backgroundPageShape.init(this.backgroundPane);
            this.backgroundPageShape.redraw();
            mxEvent.addListener(this.backgroundPageShape.node, "dblclick", mxUtils.bind(this,
                function (a) {
                    this.graph.dblClick(a)
                }));
            mxEvent.addGestureListeners(this.backgroundPageShape.node, mxUtils.bind(this, function (a) {
                this.graph.fireMouseEvent(mxEvent.MOUSE_DOWN, new mxMouseEvent(a))
            }), mxUtils.bind(this, function (a) {
                this.graph.tooltipHandler != null && this.graph.tooltipHandler.isHideOnHover() && this.graph.tooltipHandler.hide();
                this.graph.isMouseDown && !mxEvent.isConsumed(a) && this.graph.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(a))
            }), mxUtils.bind(this, function (a) {
                this.graph.fireMouseEvent(mxEvent.MOUSE_UP,
                    new mxMouseEvent(a))
            }))
        } else {
            this.backgroundPageShape.scale = this.scale;
            this.backgroundPageShape.bounds = b;
            this.backgroundPageShape.redraw()
        }
    } else if (this.backgroundPageShape != null) {
        this.backgroundPageShape.destroy();
        this.backgroundPageShape = null
    }
};
mxGraphView.prototype.getBackgroundPageBounds = function () {
    var a = this.graph.pageFormat, b = this.scale * this.graph.pageScale;
    return new mxRectangle(this.scale * this.translate.x, this.scale * this.translate.y, a.width * b, a.height * b)
};
mxGraphView.prototype.redrawBackgroundImage = function (a, b) {
    a.scale = this.scale;
    a.bounds.x = this.scale * this.translate.x;
    a.bounds.y = this.scale * this.translate.y;
    a.bounds.width = this.scale * b.width;
    a.bounds.height = this.scale * b.height;
    a.redraw()
};
mxGraphView.prototype.validateBounds = function (a, b) {
    var c = this.graph.getModel(), d = this.getState(b, true);
    if (d != null && d.invalid) {
        if (this.graph.isCellVisible(b)) {
            if (b != this.currentRoot && a != null) {
                d.absoluteOffset.x = 0;
                d.absoluteOffset.y = 0;
                d.origin.x = a.origin.x;
                d.origin.y = a.origin.y;
                var e = this.graph.getCellGeometry(b);
                if (e != null) {
                    if (!c.isEdge(b)) {
                        var f = e.offset || this.EMPTY_POINT;
                        if (e.relative) {
                            d.origin.x = d.origin.x + (e.x * a.width / this.scale + f.x);
                            d.origin.y = d.origin.y + (e.y * a.height / this.scale + f.y)
                        } else {
                            d.absoluteOffset.x =
                                this.scale * f.x;
                            d.absoluteOffset.y = this.scale * f.y;
                            d.origin.x = d.origin.x + e.x;
                            d.origin.y = d.origin.y + e.y
                        }
                    }
                    d.x = this.scale * (this.translate.x + d.origin.x);
                    d.y = this.scale * (this.translate.y + d.origin.y);
                    d.width = this.scale * e.width;
                    d.height = this.scale * e.height;
                    if (c.isVertex(b)) {
                        if (e.relative) {
                            f = mxUtils.toRadians(a.style[mxConstants.STYLE_ROTATION] || "0");
                            if (f != 0) {
                                var e = Math.cos(f), f = Math.sin(f), g = new mxPoint(d.getCenterX(), d.getCenterY()), h = new mxPoint(a.getCenterX(), a.getCenterY()), e = mxUtils.getRotatedPoint(g,
                                    e, f, h);
                                d.x = e.x - d.width / 2;
                                d.y = e.y - d.height / 2
                            }
                        }
                        this.updateVertexLabelOffset(d)
                    }
                }
            }
        } else this.removeState(b);
        f = this.graph.getChildOffsetForCell(b);
        if (f != null) {
            d.origin.x = d.origin.x + f.x;
            d.origin.y = d.origin.y + f.y
        }
    }
    if (d != null && (!this.graph.isCellCollapsed(b) || b == this.currentRoot)) {
        e = c.getChildCount(b);
        for (f = 0; f < e; f++) {
            g = c.getChildAt(b, f);
            this.validateBounds(d, g)
        }
    }
};
mxGraphView.prototype.updateVertexLabelOffset = function (a) {
    var b = mxUtils.getValue(a.style, mxConstants.STYLE_LABEL_POSITION, mxConstants.ALIGN_CENTER);
    if (b == mxConstants.ALIGN_LEFT)a.absoluteOffset.x = a.absoluteOffset.x - a.width; else if (b == mxConstants.ALIGN_RIGHT)a.absoluteOffset.x = a.absoluteOffset.x + a.width;
    b = mxUtils.getValue(a.style, mxConstants.STYLE_VERTICAL_LABEL_POSITION, mxConstants.ALIGN_MIDDLE);
    if (b == mxConstants.ALIGN_TOP)a.absoluteOffset.y = a.absoluteOffset.y - a.height; else if (b == mxConstants.ALIGN_BOTTOM)a.absoluteOffset.y =
        a.absoluteOffset.y + a.height
};
mxGraphView.prototype.validatePoints = function (a, b) {
    var c = this.graph.getModel(), d = this.getState(b), e = null;
    if (d != null) {
        if (d.invalid) {
            var f = this.graph.getCellGeometry(b);
            if (f != null && c.isEdge(b)) {
                var g = this.getState(this.getVisibleTerminal(b, true));
                d.setVisibleTerminalState(g, true);
                if (g != null && c.isEdge(g.cell) && !c.isAncestor(g.cell, b)) {
                    var h = this.getState(c.getParent(g.cell));
                    this.validatePoints(h, g.cell)
                }
                var k = this.getState(this.getVisibleTerminal(b, false));
                d.setVisibleTerminalState(k, false);
                if (k != null &&
                    c.isEdge(k.cell) && !c.isAncestor(k.cell, b)) {
                    h = this.getState(c.getParent(k.cell));
                    this.validatePoints(h, k.cell)
                }
                this.updateFixedTerminalPoints(d, g, k);
                this.updatePoints(d, f.points, g, k);
                this.updateFloatingTerminalPoints(d, g, k);
                this.updateEdgeBounds(d);
                this.updateEdgeLabelOffset(d)
            } else if (f != null && f.relative && a != null && c.isEdge(a.cell)) {
                f = this.getPoint(a, f);
                if (f != null) {
                    d.x = f.x;
                    d.y = f.y;
                    f.x = f.x / this.scale - this.translate.x;
                    f.y = f.y / this.scale - this.translate.y;
                    d.origin = f;
                    this.childMoved(a, d)
                }
            }
            d.invalid = false;
            b != this.currentRoot && this.graph.cellRenderer.redraw(d, false, this.isRendering())
        }
        if (c.isEdge(b) || c.isVertex(b)) {
            d.shape != null && d.shape.boundingBox != null && (e = d.shape.boundingBox.clone());
            d.text != null && !this.graph.isLabelClipped(d.cell) && d.text.boundingBox != null && (e != null ? e.add(d.text.boundingBox) : e = d.text.boundingBox.clone())
        }
    }
    if (d != null && (!this.graph.isCellCollapsed(b) || b == this.currentRoot)) {
        f = c.getChildCount(b);
        for (g = 0; g < f; g++) {
            h = c.getChildAt(b, g);
            h = this.validatePoints(d, h);
            h != null && (e == null ? e = h :
                e.add(h))
        }
    }
    return e
};
mxGraphView.prototype.childMoved = function (a, b) {
    var c = b.cell;
    if (!this.graph.isCellCollapsed(c) || c == this.currentRoot)for (var d = this.graph.getModel(), e = d.getChildCount(c), f = 0; f < e; f++)this.validateBounds(b, d.getChildAt(c, f))
};
mxGraphView.prototype.updateFixedTerminalPoints = function (a, b, c) {
    this.updateFixedTerminalPoint(a, b, true, this.graph.getConnectionConstraint(a, b, true));
    this.updateFixedTerminalPoint(a, c, false, this.graph.getConnectionConstraint(a, c, false))
};
mxGraphView.prototype.updateFixedTerminalPoint = function (a, b, c, d) {
    var e = null;
    d != null && (e = this.graph.getConnectionPoint(b, d));
    if (e == null && b == null) {
        var b = this.scale, d = this.translate, f = a.origin, e = this.graph.getCellGeometry(a.cell).getTerminalPoint(c);
        e != null && (e = new mxPoint(b * (d.x + e.x + f.x), b * (d.y + e.y + f.y)))
    }
    a.setAbsoluteTerminalPoint(e, c)
};
mxGraphView.prototype.updatePoints = function (a, b, c, d) {
    if (a != null) {
        var e = [];
        e.push(a.absolutePoints[0]);
        var f = this.getEdgeStyle(a, b, c, d);
        if (f != null) {
            c = this.getTerminalPort(a, c, true);
            d = this.getTerminalPort(a, d, false);
            f(a, c, d, b, e)
        } else if (b != null)for (f = 0; f < b.length; f++)if (b[f] != null) {
            d = mxUtils.clone(b[f]);
            e.push(this.transformControlPoint(a, d))
        }
        b = a.absolutePoints;
        e.push(b[b.length - 1]);
        a.absolutePoints = e
    }
};
mxGraphView.prototype.transformControlPoint = function (a, b) {
    var c = a.origin;
    return new mxPoint(this.scale * (b.x + this.translate.x + c.x), this.scale * (b.y + this.translate.y + c.y))
};
mxGraphView.prototype.getEdgeStyle = function (a, b, c, d) {
    a = c != null && c == d ? mxUtils.getValue(a.style, mxConstants.STYLE_LOOP, this.graph.defaultLoopStyle) : !mxUtils.getValue(a.style, mxConstants.STYLE_NOEDGESTYLE, false) ? a.style[mxConstants.STYLE_EDGE] : null;
    if (typeof a == "string") {
        b = mxStyleRegistry.getValue(a);
        b == null && this.isAllowEval() && (b = mxUtils.eval(a));
        a = b
    }
    return typeof a == "function" ? a : null
};
mxGraphView.prototype.updateFloatingTerminalPoints = function (a, b, c) {
    var d = a.absolutePoints, e = d[0];
    d[d.length - 1] == null && c != null && this.updateFloatingTerminalPoint(a, c, b, false);
    e == null && b != null && this.updateFloatingTerminalPoint(a, b, c, true)
};
mxGraphView.prototype.updateFloatingTerminalPoint = function (a, b, c, d) {
    var b = this.getTerminalPort(a, b, d), e = this.getNextPoint(a, c, d), f = this.graph.isOrthogonal(a), c = mxUtils.toRadians(Number(b.style[mxConstants.STYLE_ROTATION] || "0")), g = new mxPoint(b.getCenterX(), b.getCenterY());
    if (c != 0)var h = Math.cos(-c), k = Math.sin(-c), e = mxUtils.getRotatedPoint(e, h, k, g);
    h = parseFloat(a.style[mxConstants.STYLE_PERIMETER_SPACING] || 0);
    h = h + parseFloat(a.style[d ? mxConstants.STYLE_SOURCE_PERIMETER_SPACING : mxConstants.STYLE_TARGET_PERIMETER_SPACING] ||
        0);
    b = this.getPerimeterPoint(b, e, c == 0 && f, h);
    if (c != 0) {
        h = Math.cos(c);
        k = Math.sin(c);
        b = mxUtils.getRotatedPoint(b, h, k, g)
    }
    a.setAbsoluteTerminalPoint(b, d)
};
mxGraphView.prototype.getTerminalPort = function (a, b, c) {
    a = mxUtils.getValue(a.style, c ? mxConstants.STYLE_SOURCE_PORT : mxConstants.STYLE_TARGET_PORT);
    if (a != null) {
        a = this.getState(this.graph.getModel().getCell(a));
        a != null && (b = a)
    }
    return b
};
mxGraphView.prototype.getPerimeterPoint = function (a, b, c, d) {
    var e = null;
    if (a != null) {
        var f = this.getPerimeterFunction(a);
        if (f != null && b != null) {
            d = this.getPerimeterBounds(a, d);
            if (d.width > 0 || d.height > 0)e = f(d, a, b, c)
        }
        e == null && (e = this.getPoint(a))
    }
    return e
};
mxGraphView.prototype.getRoutingCenterX = function (a) {
    var b = a.style != null ? parseFloat(a.style[mxConstants.STYLE_ROUTING_CENTER_X]) || 0 : 0;
    return a.getCenterX() + b * a.width
};
mxGraphView.prototype.getRoutingCenterY = function (a) {
    var b = a.style != null ? parseFloat(a.style[mxConstants.STYLE_ROUTING_CENTER_Y]) || 0 : 0;
    return a.getCenterY() + b * a.height
};
mxGraphView.prototype.getPerimeterBounds = function (a, b) {
    b = b != null ? b : 0;
    a != null && (b = b + parseFloat(a.style[mxConstants.STYLE_PERIMETER_SPACING] || 0));
    return a.getPerimeterBounds(b * this.scale)
};
mxGraphView.prototype.getPerimeterFunction = function (a) {
    a = a.style[mxConstants.STYLE_PERIMETER];
    if (typeof a == "string") {
        var b = mxStyleRegistry.getValue(a);
        b == null && this.isAllowEval() && (b = mxUtils.eval(a));
        a = b
    }
    return typeof a == "function" ? a : null
};
mxGraphView.prototype.getNextPoint = function (a, b, c) {
    var a = a.absolutePoints, d = null;
    if (a != null && (c || a.length > 2 || b == null)) {
        d = a.length;
        d = a[c ? Math.min(1, d - 1) : Math.max(0, d - 2)]
    }
    d == null && b != null && (d = new mxPoint(b.getCenterX(), b.getCenterY()));
    return d
};
mxGraphView.prototype.getVisibleTerminal = function (a, b) {
    for (var c = this.graph.getModel(), d = c.getTerminal(a, b), e = d; d != null && d != this.currentRoot;) {
        if (!this.graph.isCellVisible(e) || this.graph.isCellCollapsed(d))e = d;
        d = c.getParent(d)
    }
    c.getParent(e) == c.getRoot() && (e = null);
    return e
};
mxGraphView.prototype.updateEdgeBounds = function (a) {
    var b = a.absolutePoints;
    a.length = 0;
    if (b != null && b.length > 0) {
        var c = b[0], d = b[b.length - 1];
        if (c == null || d == null)a.cell != this.currentRoot && this.clear(a.cell, true); else {
            if (c.x != d.x || c.y != d.y) {
                var e = d.x - c.x, f = d.y - c.y;
                a.terminalDistance = Math.sqrt(e * e + f * f)
            } else a.terminalDistance = 0;
            var d = 0, g = [], f = c;
            if (f != null) {
                for (var c = f.x, h = f.y, k = c, i = h, l = 1; l < b.length; l++) {
                    var n = b[l];
                    if (n != null) {
                        e = f.x - n.x;
                        f = f.y - n.y;
                        e = Math.sqrt(e * e + f * f);
                        g.push(e);
                        d = d + e;
                        f = n;
                        c = Math.min(f.x, c);
                        h = Math.min(f.y, h);
                        k = Math.max(f.x, k);
                        i = Math.max(f.y, i)
                    }
                }
                a.length = d;
                a.segments = g;
                a.x = c;
                a.y = h;
                a.width = Math.max(1, k - c);
                a.height = Math.max(1, i - h)
            }
        }
    }
};
mxGraphView.prototype.getPoint = function (a, b) {
    var c = a.getCenterX(), d = a.getCenterY();
    if (a.segments != null && (b == null || b.relative)) {
        for (var e = a.absolutePoints.length, f = ((b != null ? b.x / 2 : 0) + 0.5) * a.length, g = a.segments[0], h = 0, k = 1; f > h + g && k < e - 1;) {
            h = h + g;
            g = a.segments[k++]
        }
        e = g == 0 ? 0 : (f - h) / g;
        f = a.absolutePoints[k - 1];
        k = a.absolutePoints[k];
        if (f != null && k != null) {
            h = c = d = 0;
            if (b != null) {
                var d = b.y, i = b.offset;
                if (i != null) {
                    c = i.x;
                    h = i.y
                }
            }
            i = k.x - f.x;
            k = k.y - f.y;
            c = f.x + i * e + ((g == 0 ? 0 : k / g) * d + c) * this.scale;
            d = f.y + k * e - ((g == 0 ? 0 : i / g) * d - h) * this.scale
        }
    } else if (b !=
        null) {
        i = b.offset;
        if (i != null) {
            c = c + i.x;
            d = d + i.y
        }
    }
    return new mxPoint(c, d)
};
mxGraphView.prototype.getRelativePoint = function (a, b, c) {
    var d = this.graph.getModel().getGeometry(a.cell);
    if (d != null) {
        var e = a.absolutePoints.length;
        if (d.relative && e > 1) {
            for (var d = a.length, f = a.segments, g = a.absolutePoints[0], h = a.absolutePoints[1], k = mxUtils.ptSegDistSq(g.x, g.y, h.x, h.y, b, c), i = 0, l = 0, n = 0, m = 2; m < e; m++) {
                l = l + f[m - 2];
                h = a.absolutePoints[m];
                g = mxUtils.ptSegDistSq(g.x, g.y, h.x, h.y, b, c);
                if (g <= k) {
                    k = g;
                    i = m - 1;
                    n = l
                }
                g = h
            }
            e = f[i];
            g = a.absolutePoints[i];
            h = a.absolutePoints[i + 1];
            f = h.x;
            k = h.y;
            a = g.x - f;
            i = g.y - k;
            f = (a - (b -
                f)) * a + (i - (c - k)) * i;
            a = Math.sqrt(f <= 0 ? 0 : f * f / (a * a + i * i));
            a > e && (a = e);
            e = Math.sqrt(mxUtils.ptSegDistSq(g.x, g.y, h.x, h.y, b, c));
            mxUtils.relativeCcw(g.x, g.y, h.x, h.y, b, c) == -1 && (e = -e);
            return new mxPoint((d / 2 - n - a) / d * -2, e / this.scale)
        }
    }
    return new mxPoint
};
mxGraphView.prototype.updateEdgeLabelOffset = function (a) {
    var b = a.absolutePoints;
    a.absoluteOffset.x = a.getCenterX();
    a.absoluteOffset.y = a.getCenterY();
    if (b != null && b.length > 0 && a.segments != null) {
        var c = this.graph.getCellGeometry(a.cell);
        if (c.relative) {
            var d = this.getPoint(a, c);
            if (d != null)a.absoluteOffset = d
        } else {
            var d = b[0], e = b[b.length - 1];
            if (d != null && e != null) {
                var b = e.x - d.x, f = e.y - d.y, g = e = 0, c = c.offset;
                if (c != null) {
                    e = c.x;
                    g = c.y
                }
                c = d.y + f / 2 + g * this.scale;
                a.absoluteOffset.x = d.x + b / 2 + e * this.scale;
                a.absoluteOffset.y = c
            }
        }
    }
};
mxGraphView.prototype.getState = function (a, b) {
    var b = b || false, c = null;
    if (a != null) {
        c = this.states.get(a);
        if (this.graph.isCellVisible(a))if (c == null && b && this.graph.isCellVisible(a)) {
            c = this.createState(a);
            this.states.put(a, c)
        } else if (b && c != null && this.updateStyle)c.style = this.graph.getCellStyle(a)
    }
    return c
};
mxGraphView.prototype.isRendering = function () {
    return this.rendering
};
mxGraphView.prototype.setRendering = function (a) {
    this.rendering = a
};
mxGraphView.prototype.isAllowEval = function () {
    return this.allowEval
};
mxGraphView.prototype.setAllowEval = function (a) {
    this.allowEval = a
};
mxGraphView.prototype.getStates = function () {
    return this.states
};
mxGraphView.prototype.setStates = function (a) {
    this.states = a
};
mxGraphView.prototype.getCellStates = function (a) {
    if (a == null)return this.states;
    for (var b = [], c = 0; c < a.length; c++) {
        var d = this.getState(a[c]);
        d != null && b.push(d)
    }
    return b
};
mxGraphView.prototype.removeState = function (a) {
    var b = null;
    if (a != null) {
        b = this.states.remove(a);
        if (b != null) {
            this.graph.cellRenderer.destroy(b);
            b.destroy()
        }
    }
    return b
};
mxGraphView.prototype.createState = function (a) {
    var b = this.graph.getCellStyle(a), a = new mxCellState(this, a, b);
    this.graph.cellRenderer.initialize(a, this.isRendering());
    return a
};
mxGraphView.prototype.getCanvas = function () {
    return this.canvas
};
mxGraphView.prototype.getBackgroundPane = function () {
    return this.backgroundPane
};
mxGraphView.prototype.getDrawPane = function () {
    return this.drawPane
};
mxGraphView.prototype.getOverlayPane = function () {
    return this.overlayPane
};
mxGraphView.prototype.isContainerEvent = function (a) {
    a = mxEvent.getSource(a);
    return a == this.graph.container || a.parentNode == this.backgroundPane || a.parentNode != null && a.parentNode.parentNode == this.backgroundPane || a == this.canvas.parentNode || a == this.canvas || a == this.backgroundPane || a == this.drawPane || a == this.overlayPane
};
mxGraphView.prototype.isScrollEvent = function (a) {
    var b = mxUtils.getOffset(this.graph.container), a = new mxPoint(a.clientX - b.x, a.clientY - b.y), b = this.graph.container.offsetWidth, c = this.graph.container.clientWidth;
    if (b > c && a.x > c + 2 && a.x <= b)return true;
    b = this.graph.container.offsetHeight;
    c = this.graph.container.clientHeight;
    return b > c && a.y > c + 2 && a.y <= b ? true : false
};
mxGraphView.prototype.init = function () {
    this.installListeners();
    var a = this.graph;
    a.dialect == mxConstants.DIALECT_SVG ? this.createSvg() : a.dialect == mxConstants.DIALECT_VML ? this.createVml() : this.createHtml()
};
mxGraphView.prototype.installListeners = function () {
    var a = this.graph, b = a.container;
    if (b != null) {
        mxEvent.addGestureListeners(b, mxUtils.bind(this, function (b) {
            mxClient.IS_TOUCH && a.isEditing() && a.stopEditing(!a.isInvokesStopCellEditing());
            this.isContainerEvent(b) && (!mxClient.IS_IE && !mxClient.IS_GC && !mxClient.IS_OP && !mxClient.IS_SF || !this.isScrollEvent(b)) && a.fireMouseEvent(mxEvent.MOUSE_DOWN, new mxMouseEvent(b))
        }), mxUtils.bind(this, function (b) {
            this.isContainerEvent(b) && a.fireMouseEvent(mxEvent.MOUSE_MOVE,
                new mxMouseEvent(b))
        }), mxUtils.bind(this, function (b) {
            this.isContainerEvent(b) && a.fireMouseEvent(mxEvent.MOUSE_UP, new mxMouseEvent(b))
        }));
        mxEvent.addListener(b, "dblclick", mxUtils.bind(this, function (b) {
            a.dblClick(b)
        }));
        var c = function (c) {
            var e = null;
            if (mxClient.IS_TOUCH) {
                e = mxEvent.getClientX(c);
                c = mxEvent.getClientY(c);
                c = mxUtils.convertPoint(b, e, c);
                e = a.view.getState(a.getCellAt(c.x, c.y))
            }
            return e
        };
        a.addMouseListener({mouseDown: function () {
            a.panningHandler.hideMenu()
        }, mouseMove: function () {
        }, mouseUp: function () {
        }});
        this.moveHandler = mxUtils.bind(this, function (b) {
            a.tooltipHandler != null && a.tooltipHandler.isHideOnHover() && a.tooltipHandler.hide();
            this.captureDocumentGesture && (a.isMouseDown && !mxEvent.isConsumed(b)) && a.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(b, c(b)))
        });
        this.endHandler = mxUtils.bind(this, function (b) {
            this.captureDocumentGesture && a.fireMouseEvent(mxEvent.MOUSE_UP, new mxMouseEvent(b))
        });
        mxEvent.addGestureListeners(document, null, this.moveHandler, this.endHandler)
    }
};
mxGraphView.prototype.createHtml = function () {
    var a = this.graph.container;
    if (a != null) {
        this.canvas = this.createHtmlPane("100%", "100%");
        this.backgroundPane = this.createHtmlPane("1px", "1px");
        this.drawPane = this.createHtmlPane("1px", "1px");
        this.overlayPane = this.createHtmlPane("1px", "1px");
        this.canvas.appendChild(this.backgroundPane);
        this.canvas.appendChild(this.drawPane);
        this.canvas.appendChild(this.overlayPane);
        a.appendChild(this.canvas);
        if (mxClient.IS_QUIRKS) {
            a = mxUtils.bind(this, function () {
                var a = this.getGraphBounds();
                this.updateHtmlCanvasSize(a.x + a.width + this.graph.border, a.y + a.height + this.graph.border)
            });
            mxEvent.addListener(window, "resize", a)
        }
    }
};
mxGraphView.prototype.updateHtmlCanvasSize = function (a, b) {
    if (this.graph.container != null) {
        var c = this.graph.container.offsetHeight;
        this.canvas.style.width = this.graph.container.offsetWidth < a ? a + "px" : "100%";
        this.canvas.style.height = c < b ? b + "px" : "100%"
    }
};
mxGraphView.prototype.createHtmlPane = function (a, b) {
    var c = document.createElement("DIV");
    if (a != null && b != null) {
        c.style.position = "absolute";
        c.style.left = "0px";
        c.style.top = "0px";
        c.style.width = a;
        c.style.height = b
    } else c.style.position = "relative";
    return c
};
mxGraphView.prototype.createVml = function () {
    var a = this.graph.container;
    if (a != null) {
        var b = a.offsetWidth, c = a.offsetHeight;
        this.canvas = this.createVmlPane(b, c);
        this.backgroundPane = this.createVmlPane(b, c);
        this.drawPane = this.createVmlPane(b, c);
        this.overlayPane = this.createVmlPane(b, c);
        this.canvas.appendChild(this.backgroundPane);
        this.canvas.appendChild(this.drawPane);
        this.canvas.appendChild(this.overlayPane);
        a.appendChild(this.canvas)
    }
};
mxGraphView.prototype.createVmlPane = function (a, b) {
    var c = document.createElement(mxClient.VML_PREFIX + ":group");
    c.style.position = "absolute";
    c.style.left = "0px";
    c.style.top = "0px";
    c.style.width = a + "px";
    c.style.height = b + "px";
    c.setAttribute("coordsize", a + "," + b);
    c.setAttribute("coordorigin", "0,0");
    return c
};
mxGraphView.prototype.createSvg = function () {
    var a = this.graph.container;
    this.canvas = document.createElementNS(mxConstants.NS_SVG, "g");
    this.backgroundPane = document.createElementNS(mxConstants.NS_SVG, "g");
    this.canvas.appendChild(this.backgroundPane);
    this.drawPane = document.createElementNS(mxConstants.NS_SVG, "g");
    this.canvas.appendChild(this.drawPane);
    this.overlayPane = document.createElementNS(mxConstants.NS_SVG, "g");
    this.canvas.appendChild(this.overlayPane);
    var b = document.createElementNS(mxConstants.NS_SVG,
        "svg");
    b.style.width = "100%";
    b.style.height = "100%";
    if (mxClient.IS_IE)b.style.marginBottom = "-4px";
    b.appendChild(this.canvas);
    if (a != null) {
        a.appendChild(b);
        if (mxUtils.getCurrentStyle(a).position == "static")a.style.position = "relative"
    }
};
mxGraphView.prototype.destroy = function () {
    var a = this.canvas != null ? this.canvas.ownerSVGElement : null;
    if (a == null)a = this.canvas;
    if (a != null && a.parentNode != null) {
        this.clear(this.currentRoot, true);
        mxEvent.removeGestureListeners(document, null, this.moveHandler, this.endHandler);
        mxEvent.release(this.graph.container);
        a.parentNode.removeChild(a);
        this.overlayPane = this.drawPane = this.backgroundPane = this.canvas = this.endHandler = this.moveHandler = null
    }
};
function mxCurrentRootChange(a, b) {
    this.view = a;
    this.previous = this.root = b;
    this.isUp = b == null;
    if (!this.isUp)for (var c = this.view.currentRoot, d = this.view.graph.getModel(); c != null;) {
        if (c == b) {
            this.isUp = true;
            break
        }
        c = d.getParent(c)
    }
}
mxCurrentRootChange.prototype.execute = function () {
    var a = this.view.currentRoot;
    this.view.currentRoot = this.previous;
    this.previous = a;
    a = this.view.graph.getTranslateForRoot(this.view.currentRoot);
    if (a != null)this.view.translate = new mxPoint(-a.x, -a.y);
    this.view.fireEvent(new mxEventObject(this.isUp ? mxEvent.UP : mxEvent.DOWN, "root", this.view.currentRoot, "previous", this.previous));
    if (this.isUp) {
        this.view.clear(this.view.currentRoot, true);
        this.view.validate()
    } else this.view.refresh();
    this.isUp = !this.isUp
};
function mxGraph(a, b, c, d) {
    this.mouseListeners = null;
    this.renderHint = c;
    this.dialect = mxClient.IS_SVG ? mxConstants.DIALECT_SVG : c == mxConstants.RENDERING_HINT_EXACT && mxClient.IS_VML ? mxConstants.DIALECT_VML : c == mxConstants.RENDERING_HINT_FASTEST ? mxConstants.DIALECT_STRICTHTML : c == mxConstants.RENDERING_HINT_FASTER ? mxConstants.DIALECT_PREFERHTML : mxConstants.DIALECT_MIXEDHTML;
    this.model = b != null ? b : new mxGraphModel;
    this.multiplicities = [];
    this.imageBundles = [];
    this.cellRenderer = this.createCellRenderer();
    this.setSelectionModel(this.createSelectionModel());
    this.setStylesheet(d != null ? d : this.createStylesheet());
    this.view = this.createGraphView();
    this.graphModelChangeListener = mxUtils.bind(this, function (a, b) {
        this.graphModelChanged(b.getProperty("edit").changes)
    });
    this.model.addListener(mxEvent.CHANGE, this.graphModelChangeListener);
    this.createHandlers();
    a != null && this.init(a);
    this.view.revalidate()
}
mxLoadResources && mxResources.add(mxClient.basePath + "/resources/graph");
mxGraph.prototype = new mxEventSource;
mxGraph.prototype.constructor = mxGraph;
mxGraph.prototype.EMPTY_ARRAY = [];
mxGraph.prototype.mouseListeners = null;
mxGraph.prototype.isMouseDown = false;
mxGraph.prototype.model = null;
mxGraph.prototype.view = null;
mxGraph.prototype.stylesheet = null;
mxGraph.prototype.selectionModel = null;
mxGraph.prototype.cellEditor = null;
mxGraph.prototype.cellRenderer = null;
mxGraph.prototype.multiplicities = null;
mxGraph.prototype.renderHint = null;
mxGraph.prototype.dialect = null;
mxGraph.prototype.gridSize = 10;
mxGraph.prototype.gridEnabled = true;
mxGraph.prototype.portsEnabled = true;
mxGraph.prototype.doubleTapEnabled = true;
mxGraph.prototype.doubleTapTimeout = 700;
mxGraph.prototype.doubleTapTolerance = 25;
mxGraph.prototype.lastTouchY = 0;
mxGraph.prototype.lastTouchY = 0;
mxGraph.prototype.lastTouchTime = 0;
mxGraph.prototype.gestureEnabled = true;
mxGraph.prototype.tolerance = 4;
mxGraph.prototype.defaultOverlap = 0.5;
mxGraph.prototype.defaultParent = null;
mxGraph.prototype.alternateEdgeStyle = null;
mxGraph.prototype.backgroundImage = null;
mxGraph.prototype.pageVisible = false;
mxGraph.prototype.pageBreaksVisible = false;
mxGraph.prototype.pageBreakColor = "gray";
mxGraph.prototype.pageBreakDashed = true;
mxGraph.prototype.minPageBreakDist = 20;
mxGraph.prototype.preferPageSize = false;
mxGraph.prototype.pageFormat = mxConstants.PAGE_FORMAT_A4_PORTRAIT;
mxGraph.prototype.pageScale = 1.5;
mxGraph.prototype.enabled = true;
mxGraph.prototype.escapeEnabled = true;
mxGraph.prototype.invokesStopCellEditing = true;
mxGraph.prototype.enterStopsCellEditing = false;
mxGraph.prototype.useScrollbarsForPanning = true;
mxGraph.prototype.exportEnabled = true;
mxGraph.prototype.importEnabled = true;
mxGraph.prototype.cellsLocked = false;
mxGraph.prototype.cellsCloneable = true;
mxGraph.prototype.foldingEnabled = true;
mxGraph.prototype.cellsEditable = true;
mxGraph.prototype.cellsDeletable = true;
mxGraph.prototype.cellsMovable = true;
mxGraph.prototype.edgeLabelsMovable = true;
mxGraph.prototype.vertexLabelsMovable = false;
mxGraph.prototype.dropEnabled = false;
mxGraph.prototype.splitEnabled = true;
mxGraph.prototype.cellsResizable = true;
mxGraph.prototype.cellsBendable = true;
mxGraph.prototype.cellsSelectable = true;
mxGraph.prototype.cellsDisconnectable = true;
mxGraph.prototype.autoSizeCells = false;
mxGraph.prototype.autoScroll = true;
mxGraph.prototype.timerAutoScroll = false;
mxGraph.prototype.allowAutoPanning = false;
mxGraph.prototype.ignoreScrollbars = false;
mxGraph.prototype.autoExtend = true;
mxGraph.prototype.maximumGraphBounds = null;
mxGraph.prototype.minimumGraphSize = null;
mxGraph.prototype.minimumContainerSize = null;
mxGraph.prototype.maximumContainerSize = null;
mxGraph.prototype.resizeContainer = false;
mxGraph.prototype.border = 0;
mxGraph.prototype.ordered = true;
mxGraph.prototype.keepEdgesInForeground = false;
mxGraph.prototype.keepEdgesInBackground = true;
mxGraph.prototype.allowNegativeCoordinates = true;
mxGraph.prototype.constrainChildren = true;
mxGraph.prototype.extendParents = true;
mxGraph.prototype.extendParentsOnAdd = true;
mxGraph.prototype.collapseToPreferredSize = true;
mxGraph.prototype.zoomFactor = 1.2;
mxGraph.prototype.keepSelectionVisibleOnZoom = false;
mxGraph.prototype.centerZoom = true;
mxGraph.prototype.resetViewOnRootChange = true;
mxGraph.prototype.resetEdgesOnResize = false;
mxGraph.prototype.resetEdgesOnMove = false;
mxGraph.prototype.resetEdgesOnConnect = true;
mxGraph.prototype.allowLoops = false;
mxGraph.prototype.defaultLoopStyle = mxEdgeStyle.Loop;
mxGraph.prototype.multigraph = true;
mxGraph.prototype.connectableEdges = false;
mxGraph.prototype.allowDanglingEdges = true;
mxGraph.prototype.cloneInvalidEdges = false;
mxGraph.prototype.disconnectOnMove = true;
mxGraph.prototype.labelsVisible = true;
mxGraph.prototype.htmlLabels = false;
mxGraph.prototype.swimlaneSelectionEnabled = true;
mxGraph.prototype.swimlaneNesting = true;
mxGraph.prototype.swimlaneIndicatorColorAttribute = mxConstants.STYLE_FILLCOLOR;
mxGraph.prototype.imageBundles = null;
mxGraph.prototype.minFitScale = 0.1;
mxGraph.prototype.maxFitScale = 8;
mxGraph.prototype.panDx = 0;
mxGraph.prototype.panDy = 0;
mxGraph.prototype.collapsedImage = new mxImage(mxClient.imageBasePath + "/collapsed.gif", 9, 9);
mxGraph.prototype.expandedImage = new mxImage(mxClient.imageBasePath + "/expanded.gif", 9, 9);
mxGraph.prototype.warningImage = new mxImage(mxClient.imageBasePath + "/warning" + (mxClient.IS_MAC ? ".png" : ".gif"), 16, 16);
mxGraph.prototype.alreadyConnectedResource = "none" != mxClient.language ? "alreadyConnected" : "";
mxGraph.prototype.containsValidationErrorsResource = "none" != mxClient.language ? "containsValidationErrors" : "";
mxGraph.prototype.collapseExpandResource = "none" != mxClient.language ? "collapse-expand" : "";
mxGraph.prototype.init = function (a) {
    this.container = a;
    this.cellEditor = this.createCellEditor();
    this.view.init();
    this.sizeDidChange();
    if (mxClient.IS_IE) {
        mxEvent.addListener(window, "unload", mxUtils.bind(this, function () {
            this.destroy()
        }));
        mxEvent.addListener(a, "selectstart", mxUtils.bind(this, function () {
            return this.isEditing()
        }))
    }
    document.documentMode == 8 && a.insertAdjacentHTML("beforeend", '<v:group style="DISPLAY: none;"></v:group>')
};
mxGraph.prototype.createHandlers = function () {
    this.tooltipHandler = new mxTooltipHandler(this);
    this.tooltipHandler.setEnabled(false);
    this.panningHandler = new mxPanningHandler(this);
    this.panningHandler.panningEnabled = false;
    this.selectionCellsHandler = new mxSelectionCellsHandler(this);
    this.connectionHandler = new mxConnectionHandler(this);
    this.connectionHandler.setEnabled(false);
    this.graphHandler = new mxGraphHandler(this)
};
mxGraph.prototype.createSelectionModel = function () {
    return new mxGraphSelectionModel(this)
};
mxGraph.prototype.createStylesheet = function () {
    return new mxStylesheet
};
mxGraph.prototype.createGraphView = function () {
    return new mxGraphView(this)
};
mxGraph.prototype.createCellRenderer = function () {
    return new mxCellRenderer
};
mxGraph.prototype.createCellEditor = function () {
    return new mxCellEditor(this)
};
mxGraph.prototype.getModel = function () {
    return this.model
};
mxGraph.prototype.getView = function () {
    return this.view
};
mxGraph.prototype.getStylesheet = function () {
    return this.stylesheet
};
mxGraph.prototype.setStylesheet = function (a) {
    this.stylesheet = a
};
mxGraph.prototype.getSelectionModel = function () {
    return this.selectionModel
};
mxGraph.prototype.setSelectionModel = function (a) {
    this.selectionModel = a
};
mxGraph.prototype.getSelectionCellsForChanges = function (a) {
    for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c];
        if (d.constructor != mxRootChange) {
            var e = null;
            if (d instanceof mxChildChange && d.previous == null)e = d.child; else if (d.cell != null && d.cell instanceof mxCell)e = d.cell;
            e != null && mxUtils.indexOf(b, e) < 0 && b.push(e)
        }
    }
    return this.getModel().getTopmostCells(b)
};
mxGraph.prototype.graphModelChanged = function (a) {
    for (var b = 0; b < a.length; b++)this.processChange(a[b]);
    this.removeSelectionCells(this.getRemovedCellsForChanges(a));
    this.view.validate();
    this.sizeDidChange()
};
mxGraph.prototype.getRemovedCellsForChanges = function (a) {
    for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c];
        if (d instanceof mxRootChange)break; else d instanceof mxChildChange ? d.previous != null && d.parent == null && (b = b.concat(this.model.getDescendants(d.child))) : d instanceof mxVisibleChange && (b = b.concat(this.model.getDescendants(d.cell)))
    }
    return b
};
mxGraph.prototype.processChange = function (a) {
    if (a instanceof mxRootChange) {
        this.clearSelection();
        this.removeStateForCell(a.previous);
        if (this.resetViewOnRootChange) {
            this.view.scale = 1;
            this.view.translate.x = 0;
            this.view.translate.y = 0
        }
        this.fireEvent(new mxEventObject(mxEvent.ROOT))
    } else if (a instanceof mxChildChange) {
        var b = this.model.getParent(a.child);
        if (b != null)this.view.invalidate(a.child, true, false, a.previous != null); else {
            this.removeStateForCell(a.child);
            this.view.currentRoot == a.child && this.home()
        }
        if (b !=
            a.previous) {
            b != null && this.view.invalidate(b, false, false);
            a.previous != null && this.view.invalidate(a.previous, false, false)
        }
    } else if (a instanceof mxTerminalChange || a instanceof mxGeometryChange)this.view.invalidate(a.cell); else if (a instanceof mxValueChange)this.view.invalidate(a.cell, false, false); else if (a instanceof mxStyleChange) {
        this.view.invalidate(a.cell, true, true, false);
        this.view.removeState(a.cell)
    } else a.cell != null && a.cell instanceof mxCell && this.removeStateForCell(a.cell)
};
mxGraph.prototype.removeStateForCell = function (a) {
    for (var b = this.model.getChildCount(a), c = 0; c < b; c++)this.removeStateForCell(this.model.getChildAt(a, c));
    this.view.removeState(a)
};
mxGraph.prototype.addCellOverlay = function (a, b) {
    if (a.overlays == null)a.overlays = [];
    a.overlays.push(b);
    var c = this.view.getState(a);
    c != null && this.cellRenderer.redraw(c);
    this.fireEvent(new mxEventObject(mxEvent.ADD_OVERLAY, "cell", a, "overlay", b));
    return b
};
mxGraph.prototype.getCellOverlays = function (a) {
    return a.overlays
};
mxGraph.prototype.removeCellOverlay = function (a, b) {
    if (b == null)this.removeCellOverlays(a); else {
        var c = mxUtils.indexOf(a.overlays, b);
        if (c >= 0) {
            a.overlays.splice(c, 1);
            if (a.overlays.length == 0)a.overlays = null;
            c = this.view.getState(a);
            c != null && this.cellRenderer.redraw(c);
            this.fireEvent(new mxEventObject(mxEvent.REMOVE_OVERLAY, "cell", a, "overlay", b))
        } else b = null
    }
    return b
};
mxGraph.prototype.removeCellOverlays = function (a) {
    var b = a.overlays;
    if (b != null) {
        a.overlays = null;
        var c = this.view.getState(a);
        c != null && this.cellRenderer.redraw(c);
        for (c = 0; c < b.length; c++)this.fireEvent(new mxEventObject(mxEvent.REMOVE_OVERLAY, "cell", a, "overlay", b[c]))
    }
    return b
};
mxGraph.prototype.clearCellOverlays = function (a) {
    a = a != null ? a : this.model.getRoot();
    this.removeCellOverlays(a);
    for (var b = this.model.getChildCount(a), c = 0; c < b; c++)this.clearCellOverlays(this.model.getChildAt(a, c))
};
mxGraph.prototype.setCellWarning = function (a, b, c, d) {
    if (b != null && b.length > 0) {
        c = c != null ? c : this.warningImage;
        b = new mxCellOverlay(c, "<font color=red>" + b + "</font>");
        d && b.addListener(mxEvent.CLICK, mxUtils.bind(this, function () {
            this.isEnabled() && this.setSelectionCell(a)
        }));
        return this.addCellOverlay(a, b)
    }
    this.removeCellOverlays(a);
    return null
};
mxGraph.prototype.startEditing = function (a) {
    this.startEditingAtCell(null, a)
};
mxGraph.prototype.startEditingAtCell = function (a, b) {
    if (a == null) {
        a = this.getSelectionCell();
        a != null && !this.isCellEditable(a) && (a = null)
    }
    if (a != null) {
        this.fireEvent(new mxEventObject(mxEvent.START_EDITING, "cell", a, "event", b));
        this.cellEditor.startEditing(a, b)
    }
};
mxGraph.prototype.getEditingValue = function (a) {
    return this.convertValueToString(a)
};
mxGraph.prototype.stopEditing = function (a) {
    this.cellEditor.stopEditing(a)
};
mxGraph.prototype.labelChanged = function (a, b, c) {
    this.model.beginUpdate();
    try {
        this.cellLabelChanged(a, b, this.isAutoSizeCell(a));
        this.fireEvent(new mxEventObject(mxEvent.LABEL_CHANGED, "cell", a, "value", b, "event", c))
    } finally {
        this.model.endUpdate()
    }
    return a
};
mxGraph.prototype.cellLabelChanged = function (a, b, c) {
    this.model.beginUpdate();
    try {
        this.model.setValue(a, b);
        c && this.cellSizeUpdated(a, false)
    } finally {
        this.model.endUpdate()
    }
};
mxGraph.prototype.escape = function () {
    this.stopEditing(true);
    this.connectionHandler.reset();
    this.graphHandler.reset();
    for (var a = this.getSelectionCells(), b = 0; b < a.length; b++) {
        var c = this.view.getState(a[b]);
        c != null && c.handler != null && c.handler.reset()
    }
};
mxGraph.prototype.click = function (a) {
    var b = a.getEvent(), c = a.getCell(), d = new mxEventObject(mxEvent.CLICK, "event", b, "cell", c);
    a.isConsumed() && d.consume();
    this.fireEvent(d);
    if (this.isEnabled() && !mxEvent.isConsumed(b) && !d.isConsumed())if (c != null)this.selectCellForEvent(c, b); else {
        c = null;
        this.isSwimlaneSelectionEnabled() && (c = this.getSwimlaneAt(a.getGraphX(), a.getGraphY()));
        c != null ? this.selectCellForEvent(c, b) : this.isToggleEvent(b) || this.clearSelection()
    }
};
mxGraph.prototype.dblClick = function (a, b) {
    var c = new mxEventObject(mxEvent.DOUBLE_CLICK, "event", a, "cell", b);
    this.fireEvent(c);
    this.isEnabled() && (!mxEvent.isConsumed(a) && !c.isConsumed() && b != null && this.isCellEditable(b)) && this.startEditingAtCell(b, a)
};
mxGraph.prototype.scrollPointToVisible = function (a, b, c, d) {
    if (!this.timerAutoScroll && (this.ignoreScrollbars || mxUtils.hasScrollbars(this.container))) {
        var e = this.container, d = d != null ? d : 20;
        if (a >= e.scrollLeft && b >= e.scrollTop && a <= e.scrollLeft + e.clientWidth && b <= e.scrollTop + e.clientHeight) {
            var f = e.scrollLeft + e.clientWidth - a;
            if (f < d) {
                a = e.scrollLeft;
                e.scrollLeft = e.scrollLeft + (d - f);
                if (c && a == e.scrollLeft) {
                    if (this.dialect == mxConstants.DIALECT_SVG) {
                        var a = this.view.getDrawPane().ownerSVGElement, g = this.container.scrollWidth +
                            d - f;
                        a.setAttribute("width", g)
                    } else {
                        g = Math.max(e.clientWidth, e.scrollWidth) + d - f;
                        a = this.view.getCanvas();
                        a.style.width = g + "px"
                    }
                    e.scrollLeft = e.scrollLeft + (d - f)
                }
            } else {
                f = a - e.scrollLeft;
                if (f < d)e.scrollLeft = e.scrollLeft - (d - f)
            }
            f = e.scrollTop + e.clientHeight - b;
            if (f < d) {
                a = e.scrollTop;
                e.scrollTop = e.scrollTop + (d - f);
                if (a == e.scrollTop && c) {
                    if (this.dialect == mxConstants.DIALECT_SVG) {
                        a = this.view.getDrawPane().ownerSVGElement;
                        b = this.container.scrollHeight + d - f;
                        a.setAttribute("height", b)
                    } else {
                        b = Math.max(e.clientHeight, e.scrollHeight) +
                            d - f;
                        a = this.view.getCanvas();
                        a.style.height = b + "px"
                    }
                    e.scrollTop = e.scrollTop + (d - f)
                }
            } else {
                f = b - e.scrollTop;
                if (f < d)e.scrollTop = e.scrollTop - (d - f)
            }
        }
    } else if (this.allowAutoPanning && !this.panningHandler.active) {
        if (this.panningManager == null)this.panningManager = this.createPanningManager();
        this.panningManager.panTo(a + this.panDx, b + this.panDy)
    }
};
mxGraph.prototype.createPanningManager = function () {
    return new mxPanningManager(this)
};
mxGraph.prototype.getBorderSizes = function () {
    function a(a) {
        var b = 0, b = a == "thin" ? 2 : a == "medium" ? 4 : a == "thick" ? 6 : parseInt(a);
        isNaN(b) && (b = 0);
        return b
    }

    var b = mxUtils.getCurrentStyle(this.container), c = new mxRectangle;
    c.x = a(b.borderLeftWidth) + parseInt(b.paddingLeft || 0);
    c.y = a(b.borderTopWidth) + parseInt(b.paddingTop || 0);
    c.width = a(b.borderRightWidth) + parseInt(b.paddingRight || 0);
    c.height = a(b.borderBottomWidth) + parseInt(b.paddingBottom || 0);
    return c
};
mxGraph.prototype.getPreferredPageSize = function (a, b, c) {
    var a = this.view.scale, d = this.view.translate, e = this.pageFormat, f = a * this.pageScale, e = new mxRectangle(0, 0, e.width * f, e.height * f), b = this.pageBreaksVisible ? Math.ceil(b / e.width) : 1, c = this.pageBreaksVisible ? Math.ceil(c / e.height) : 1;
    return new mxRectangle(0, 0, b * e.width + 2 + d.x / a, c * e.height + 2 + d.y / a)
};
mxGraph.prototype.sizeDidChange = function () {
    var a = this.getGraphBounds();
    if (this.container != null) {
        var b = this.getBorder(), c = Math.max(0, a.x + a.width + 1 + b), b = Math.max(0, a.y + a.height + 1 + b);
        if (this.minimumContainerSize != null) {
            c = Math.max(c, this.minimumContainerSize.width);
            b = Math.max(b, this.minimumContainerSize.height)
        }
        this.resizeContainer && this.doResizeContainer(c, b);
        if (this.preferPageSize || !mxClient.IS_IE && this.pageVisible) {
            var d = this.getPreferredPageSize(a, c, b);
            if (d != null) {
                c = d.width;
                b = d.height
            }
        }
        if (this.minimumGraphSize !=
            null) {
            c = Math.max(c, this.minimumGraphSize.width * this.view.scale);
            b = Math.max(b, this.minimumGraphSize.height * this.view.scale)
        }
        c = Math.ceil(c - 1);
        b = Math.ceil(b - 1);
        if (this.dialect == mxConstants.DIALECT_SVG) {
            d = this.view.getDrawPane().ownerSVGElement;
            d.style.minWidth = Math.max(1, c) + "px";
            d.style.minHeight = Math.max(1, b) + "px"
        } else if (mxClient.IS_QUIRKS)this.view.updateHtmlCanvasSize(Math.max(1, c), Math.max(1, b)); else {
            this.view.canvas.style.minWidth = Math.max(1, c) + "px";
            this.view.canvas.style.minHeight = Math.max(1,
                b) + "px"
        }
        this.updatePageBreaks(this.pageBreaksVisible, c - 1, b - 1)
    }
    this.fireEvent(new mxEventObject(mxEvent.SIZE, "bounds", a))
};
mxGraph.prototype.doResizeContainer = function (a, b) {
    if (mxClient.IS_IE)if (mxClient.IS_QUIRKS)var c = this.getBorderSizes(), a = a + Math.max(2, c.x + c.width + 1), b = b + Math.max(2, c.y + c.height + 1); else if (document.documentMode >= 9) {
        a = a + 3;
        b = b + 5
    } else {
        a = a + 1;
        b = b + 1
    } else b = b + 1;
    if (this.maximumContainerSize != null) {
        a = Math.min(this.maximumContainerSize.width, a);
        b = Math.min(this.maximumContainerSize.height, b)
    }
    this.container.style.width = Math.ceil(a) + "px";
    this.container.style.height = Math.ceil(b) + "px"
};
mxGraph.prototype.updatePageBreaks = function (a, b, c) {
    var d = this.view.scale, e = this.view.translate, f = this.pageFormat, g = d * this.pageScale, e = new mxRectangle(d * e.x, d * e.y, f.width * g, f.height * g), a = a && Math.min(e.width, e.height) > this.minPageBreakDist;
    e.x = mxUtils.mod(e.x, e.width);
    e.y = mxUtils.mod(e.y, e.height);
    f = a ? Math.ceil((b - e.x) / e.width) : 0;
    a = a ? Math.ceil((c - e.y) / e.height) : 0;
    if (this.horizontalPageBreaks == null && f > 0)this.horizontalPageBreaks = [];
    if (this.horizontalPageBreaks != null) {
        for (g = 0; g <= f; g++) {
            var h = [new mxPoint(e.x +
                g * e.width, 1), new mxPoint(e.x + g * e.width, c)];
            if (this.horizontalPageBreaks[g] != null) {
                this.horizontalPageBreaks[g].scale = 1;
                this.horizontalPageBreaks[g].points = h;
                this.horizontalPageBreaks[g].redraw()
            } else {
                h = new mxPolyline(h, this.pageBreakColor, this.scale);
                h.dialect = this.dialect;
                h.isDashed = this.pageBreakDashed;
                h.scale = d;
                h.init(this.view.backgroundPane);
                h.redraw();
                this.horizontalPageBreaks[g] = h
            }
        }
        for (g = f; g < this.horizontalPageBreaks.length; g++)this.horizontalPageBreaks[g].destroy();
        this.horizontalPageBreaks.splice(f,
            this.horizontalPageBreaks.length - f)
    }
    if (this.verticalPageBreaks == null && a > 0)this.verticalPageBreaks = [];
    if (this.verticalPageBreaks != null) {
        for (g = 0; g <= a; g++) {
            h = [new mxPoint(1, e.y + g * e.height), new mxPoint(b, e.y + g * e.height)];
            if (this.verticalPageBreaks[g] != null) {
                this.verticalPageBreaks[g].scale = 1;
                this.verticalPageBreaks[g].points = h;
                this.verticalPageBreaks[g].redraw()
            } else {
                h = new mxPolyline(h, this.pageBreakColor, d);
                h.dialect = this.dialect;
                h.isDashed = this.pageBreakDashed;
                h.scale = d;
                h.init(this.view.backgroundPane);
                h.redraw();
                this.verticalPageBreaks[g] = h
            }
        }
        for (g = a; g < this.verticalPageBreaks.length; g++)this.verticalPageBreaks[g].destroy();
        this.verticalPageBreaks.splice(a, this.verticalPageBreaks.length - a)
    }
};
mxGraph.prototype.getCellStyle = function (a) {
    var b = this.model.getStyle(a), c = null, c = this.model.isEdge(a) ? this.stylesheet.getDefaultEdgeStyle() : this.stylesheet.getDefaultVertexStyle();
    b != null && (c = this.postProcessCellStyle(this.stylesheet.getCellStyle(b, c)));
    if (c == null)c = mxGraph.prototype.EMPTY_ARRAY;
    return c
};
mxGraph.prototype.postProcessCellStyle = function (a) {
    if (a != null) {
        var b = a[mxConstants.STYLE_IMAGE], c = this.getImageFromBundles(b);
        c != null ? a[mxConstants.STYLE_IMAGE] = c : c = b;
        if (c != null && c.substring(0, 11) == "data:image/") {
            b = c.indexOf(",");
            b > 0 && (c = c.substring(0, b) + ";base64," + c.substring(b + 1));
            a[mxConstants.STYLE_IMAGE] = c
        }
    }
    return a
};
mxGraph.prototype.setCellStyle = function (a, b) {
    b = b || this.getSelectionCells();
    if (b != null) {
        this.model.beginUpdate();
        try {
            for (var c = 0; c < b.length; c++)this.model.setStyle(b[c], a)
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.toggleCellStyle = function (a, b, c) {
    c = c || this.getSelectionCell();
    this.toggleCellStyles(a, b, [c])
};
mxGraph.prototype.toggleCellStyles = function (a, b, c) {
    b = b != null ? b : false;
    c = c || this.getSelectionCells();
    if (c != null && c.length > 0) {
        var d = this.view.getState(c[0]), d = d != null ? d.style : this.getCellStyle(c[0]);
        if (d != null) {
            b = mxUtils.getValue(d, a, b) ? 0 : 1;
            this.setCellStyles(a, b, c)
        }
    }
};
mxGraph.prototype.setCellStyles = function (a, b, c) {
    c = c || this.getSelectionCells();
    mxUtils.setCellStyles(this.model, c, a, b)
};
mxGraph.prototype.toggleCellStyleFlags = function (a, b, c) {
    this.setCellStyleFlags(a, b, null, c)
};
mxGraph.prototype.setCellStyleFlags = function (a, b, c, d) {
    d = d || this.getSelectionCells();
    if (d != null && d.length > 0) {
        if (c == null) {
            var e = this.view.getState(d[0]), e = e != null ? e.style : this.getCellStyle(d[0]);
            e != null && (c = (parseInt(e[a] || 0) & b) != b)
        }
        mxUtils.setCellStyleFlags(this.model, d, a, b, c)
    }
};
mxGraph.prototype.alignCells = function (a, b, c) {
    b == null && (b = this.getSelectionCells());
    if (b != null && b.length > 1) {
        if (c == null)for (var d = 0; d < b.length; d++) {
            var e = this.getCellGeometry(b[d]);
            if (e != null && !this.model.isEdge(b[d]))if (c == null)if (a == mxConstants.ALIGN_CENTER) {
                c = e.x + e.width / 2;
                break
            } else if (a == mxConstants.ALIGN_RIGHT)c = e.x + e.width; else if (a == mxConstants.ALIGN_TOP)c = e.y; else if (a == mxConstants.ALIGN_MIDDLE) {
                c = e.y + e.height / 2;
                break
            } else c = a == mxConstants.ALIGN_BOTTOM ? e.y + e.height : e.x; else c = a == mxConstants.ALIGN_RIGHT ?
                Math.max(c, e.x + e.width) : a == mxConstants.ALIGN_TOP ? Math.min(c, e.y) : a == mxConstants.ALIGN_BOTTOM ? Math.max(c, e.y + e.height) : Math.min(c, e.x)
        }
        if (c != null) {
            this.model.beginUpdate();
            try {
                for (d = 0; d < b.length; d++) {
                    e = this.getCellGeometry(b[d]);
                    if (e != null && !this.model.isEdge(b[d])) {
                        e = e.clone();
                        a == mxConstants.ALIGN_CENTER ? e.x = c - e.width / 2 : a == mxConstants.ALIGN_RIGHT ? e.x = c - e.width : a == mxConstants.ALIGN_TOP ? e.y = c : a == mxConstants.ALIGN_MIDDLE ? e.y = c - e.height / 2 : a == mxConstants.ALIGN_BOTTOM ? e.y = c - e.height : e.x = c;
                        this.model.setGeometry(b[d],
                            e)
                    }
                }
                this.fireEvent(new mxEventObject(mxEvent.ALIGN_CELLS, "align", a, "cells", b))
            } finally {
                this.model.endUpdate()
            }
        }
    }
    return b
};
mxGraph.prototype.flipEdge = function (a) {
    if (a != null && this.alternateEdgeStyle != null) {
        this.model.beginUpdate();
        try {
            var b = this.model.getStyle(a);
            b == null || b.length == 0 ? this.model.setStyle(a, this.alternateEdgeStyle) : this.model.setStyle(a, null);
            this.resetEdge(a);
            this.fireEvent(new mxEventObject(mxEvent.FLIP_EDGE, "edge", a))
        } finally {
            this.model.endUpdate()
        }
    }
    return a
};
mxGraph.prototype.addImageBundle = function (a) {
    this.imageBundles.push(a)
};
mxGraph.prototype.removeImageBundle = function (a) {
    for (var b = [], c = 0; c < this.imageBundles.length; c++)this.imageBundles[c] != a && b.push(this.imageBundles[c]);
    this.imageBundles = b
};
mxGraph.prototype.getImageFromBundles = function (a) {
    if (a != null)for (var b = 0; b < this.imageBundles.length; b++) {
        var c = this.imageBundles[b].getImage(a);
        if (c != null)return c
    }
    return null
};
mxGraph.prototype.orderCells = function (a, b) {
    b == null && (b = mxUtils.sortCells(this.getSelectionCells(), true));
    this.model.beginUpdate();
    try {
        this.cellsOrdered(b, a);
        this.fireEvent(new mxEventObject(mxEvent.ORDER_CELLS, "back", a, "cells", b))
    } finally {
        this.model.endUpdate()
    }
    return b
};
mxGraph.prototype.cellsOrdered = function (a, b) {
    if (a != null) {
        this.model.beginUpdate();
        try {
            for (var c = 0; c < a.length; c++) {
                var d = this.model.getParent(a[c]);
                b ? this.model.add(d, a[c], c) : this.model.add(d, a[c], this.model.getChildCount(d) - 1)
            }
            this.fireEvent(new mxEventObject(mxEvent.CELLS_ORDERED, "back", b, "cells", a))
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.groupCells = function (a, b, c) {
    c == null && (c = mxUtils.sortCells(this.getSelectionCells(), true));
    c = this.getCellsForGroup(c);
    a == null && (a = this.createGroupCell(c));
    var d = this.getBoundsForGroup(a, c, b);
    if (c.length > 0 && d != null) {
        var e = this.model.getParent(a);
        e == null && (e = this.model.getParent(c[0]));
        this.model.beginUpdate();
        try {
            this.getCellGeometry(a) == null && this.model.setGeometry(a, new mxGeometry);
            var f = this.model.getChildCount(e);
            this.cellsAdded([a], e, f, null, null, false);
            f = this.model.getChildCount(a);
            this.cellsAdded(c, a, f, null, null, false, false);
            this.cellsMoved(c, -d.x, -d.y, false, true);
            this.cellsResized([a], [d]);
            this.fireEvent(new mxEventObject(mxEvent.GROUP_CELLS, "group", a, "border", b, "cells", c))
        } finally {
            this.model.endUpdate()
        }
    }
    return a
};
mxGraph.prototype.getCellsForGroup = function (a) {
    var b = [];
    if (a != null && a.length > 0) {
        var c = this.model.getParent(a[0]);
        b.push(a[0]);
        for (var d = 1; d < a.length; d++)this.model.getParent(a[d]) == c && b.push(a[d])
    }
    return b
};
mxGraph.prototype.getBoundsForGroup = function (a, b, c) {
    b = this.getBoundingBoxFromGeometry(b);
    if (b != null) {
        if (this.isSwimlane(a)) {
            a = this.getStartSize(a);
            b.x = b.x - a.width;
            b.y = b.y - a.height;
            b.width = b.width + a.width;
            b.height = b.height + a.height
        }
        b.x = b.x - c;
        b.y = b.y - c;
        b.width = b.width + 2 * c;
        b.height = b.height + 2 * c
    }
    return b
};
mxGraph.prototype.createGroupCell = function () {
    var a = new mxCell("");
    a.setVertex(true);
    a.setConnectable(false);
    return a
};
mxGraph.prototype.ungroupCells = function (a) {
    var b = [];
    if (a == null) {
        for (var a = this.getSelectionCells(), c = [], d = 0; d < a.length; d++)this.model.getChildCount(a[d]) > 0 && c.push(a[d]);
        a = c
    }
    if (a != null && a.length > 0) {
        this.model.beginUpdate();
        try {
            for (d = 0; d < a.length; d++) {
                var e = this.model.getChildren(a[d]);
                if (e != null && e.length > 0) {
                    var e = e.slice(), f = this.model.getParent(a[d]), g = this.model.getChildCount(f);
                    this.cellsAdded(e, f, g, null, null, true);
                    b = b.concat(e)
                }
            }
            this.cellsRemoved(this.addAllEdges(a));
            this.fireEvent(new mxEventObject(mxEvent.UNGROUP_CELLS,
                "cells", a))
        } finally {
            this.model.endUpdate()
        }
    }
    return b
};
mxGraph.prototype.removeCellsFromParent = function (a) {
    a == null && (a = this.getSelectionCells());
    this.model.beginUpdate();
    try {
        var b = this.getDefaultParent(), c = this.model.getChildCount(b);
        this.cellsAdded(a, b, c, null, null, true);
        this.fireEvent(new mxEventObject(mxEvent.REMOVE_CELLS_FROM_PARENT, "cells", a))
    } finally {
        this.model.endUpdate()
    }
    return a
};
mxGraph.prototype.updateGroupBounds = function (a, b, c) {
    a == null && (a = this.getSelectionCells());
    b = b != null ? b : 0;
    c = c != null ? c : false;
    this.model.beginUpdate();
    try {
        for (var d = 0; d < a.length; d++) {
            var e = this.getCellGeometry(a[d]);
            if (e != null) {
                var f = this.getChildCells(a[d]);
                if (f != null && f.length > 0) {
                    var g = this.getBoundingBoxFromGeometry(f);
                    if (g.width > 0 && g.height > 0) {
                        var h = this.isSwimlane(a[d]) ? this.getStartSize(a[d]) : new mxRectangle, e = e.clone();
                        if (c) {
                            e.x = e.x + (g.x - h.width - b);
                            e.y = e.y + (g.y - h.height - b)
                        }
                        e.width = g.width + h.width +
                            2 * b;
                        e.height = g.height + h.height + 2 * b;
                        this.model.setGeometry(a[d], e);
                        this.moveCells(f, -g.x + h.width + b, -g.y + h.height + b)
                    }
                }
            }
        }
    } finally {
        this.model.endUpdate()
    }
    return a
};
mxGraph.prototype.cloneCells = function (a, b) {
    var b = b != null ? b : true, c = null;
    if (a != null) {
        for (var d = {}, c = [], e = 0; e < a.length; e++) {
            var f = mxCellPath.create(a[e]);
            d[f] = a[e];
            c.push(a[e])
        }
        if (c.length > 0)for (var f = this.view.scale, g = this.view.translate, c = this.model.cloneCells(a, true), e = 0; e < a.length; e++)if (!b && this.model.isEdge(c[e]) && this.getEdgeValidationError(c[e], this.model.getTerminal(c[e], true), this.model.getTerminal(c[e], false)) != null)c[e] = null; else {
            var h = this.model.getGeometry(c[e]);
            if (h != null) {
                var k = this.view.getState(a[e]),
                    i = this.view.getState(this.model.getParent(a[e]));
                if (k != null && i != null) {
                    var l = i.origin.x, i = i.origin.y;
                    if (this.model.isEdge(c[e])) {
                        for (var k = k.absolutePoints, n = this.model.getTerminal(a[e], true), m = mxCellPath.create(n); n != null && d[m] == null;) {
                            n = this.model.getParent(n);
                            m = mxCellPath.create(n)
                        }
                        n == null && h.setTerminalPoint(new mxPoint(k[0].x / f - g.x, k[0].y / f - g.y), true);
                        n = this.model.getTerminal(a[e], false);
                        for (m = mxCellPath.create(n); n != null && d[m] == null;) {
                            n = this.model.getParent(n);
                            m = mxCellPath.create(n)
                        }
                        if (n == null) {
                            n =
                                k.length - 1;
                            h.setTerminalPoint(new mxPoint(k[n].x / f - g.x, k[n].y / f - g.y), false)
                        }
                        h = h.points;
                        if (h != null)for (k = 0; k < h.length; k++) {
                            h[k].x = h[k].x + l;
                            h[k].y = h[k].y + i
                        }
                    } else {
                        h.x = h.x + l;
                        h.y = h.y + i
                    }
                }
            }
        } else c = []
    }
    return c
};
mxGraph.prototype.insertVertex = function (a, b, c, d, e, f, g, h, k) {
    return this.addCell(this.createVertex(a, b, c, d, e, f, g, h, k), a)
};
mxGraph.prototype.createVertex = function (a, b, c, d, e, f, g, h, k) {
    a = new mxGeometry(d, e, f, g);
    a.relative = k != null ? k : false;
    c = new mxCell(c, a, h);
    c.setId(b);
    c.setVertex(true);
    c.setConnectable(true);
    return c
};
mxGraph.prototype.insertEdge = function (a, b, c, d, e, f) {
    return this.addEdge(this.createEdge(a, b, c, d, e, f), a, d, e)
};
mxGraph.prototype.createEdge = function (a, b, c, d, e, f) {
    a = new mxCell(c, new mxGeometry, f);
    a.setId(b);
    a.setEdge(true);
    a.geometry.relative = true;
    return a
};
mxGraph.prototype.addEdge = function (a, b, c, d, e) {
    return this.addCell(a, b, e, c, d)
};
mxGraph.prototype.addCell = function (a, b, c, d, e) {
    return this.addCells([a], b, c, d, e)[0]
};
mxGraph.prototype.addCells = function (a, b, c, d, e) {
    b == null && (b = this.getDefaultParent());
    c == null && (c = this.model.getChildCount(b));
    this.model.beginUpdate();
    try {
        this.cellsAdded(a, b, c, d, e, false, true);
        this.fireEvent(new mxEventObject(mxEvent.ADD_CELLS, "cells", a, "parent", b, "index", c, "source", d, "target", e))
    } finally {
        this.model.endUpdate()
    }
    return a
};
mxGraph.prototype.cellsAdded = function (a, b, c, d, e, f, g) {
    if (a != null && b != null && c != null) {
        this.model.beginUpdate();
        try {
            for (var h = f ? this.view.getState(b) : null, k = h != null ? h.origin : null, i = new mxPoint(0, 0), h = 0; h < a.length; h++)if (a[h] == null)c--; else {
                var l = this.model.getParent(a[h]);
                if (k != null && a[h] != b && b != l) {
                    var n = this.view.getState(l), m = n != null ? n.origin : i, o = this.model.getGeometry(a[h]);
                    if (o != null) {
                        var q = m.x - k.x, p = m.y - k.y, o = o.clone();
                        o.translate(q, p);
                        if (!o.relative && this.model.isVertex(a[h]) && !this.isAllowNegativeCoordinates()) {
                            o.x =
                                Math.max(0, o.x);
                            o.y = Math.max(0, o.y)
                        }
                        this.model.setGeometry(a[h], o)
                    }
                }
                b == l && c--;
                this.model.add(b, a[h], c + h);
                this.isExtendParentsOnAdd() && this.isExtendParent(a[h]) && this.extendParent(a[h]);
                (g == null || g) && this.constrainChild(a[h]);
                d != null && this.cellConnected(a[h], d, true);
                e != null && this.cellConnected(a[h], e, false)
            }
            this.fireEvent(new mxEventObject(mxEvent.CELLS_ADDED, "cells", a, "parent", b, "index", c, "source", d, "target", e, "absolute", f))
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.removeCells = function (a, b) {
    b = b != null ? b : true;
    a == null && (a = this.getDeletableCells(this.getSelectionCells()));
    b && (a = this.getDeletableCells(this.addAllEdges(a)));
    this.model.beginUpdate();
    try {
        this.cellsRemoved(a);
        this.fireEvent(new mxEventObject(mxEvent.REMOVE_CELLS, "cells", a, "includeEdges", b))
    } finally {
        this.model.endUpdate()
    }
    return a
};
mxGraph.prototype.cellsRemoved = function (a) {
    if (a != null && a.length > 0) {
        var b = this.view.scale, c = this.view.translate;
        this.model.beginUpdate();
        try {
            for (var d = {}, e = 0; e < a.length; e++) {
                var f = mxCellPath.create(a[e]);
                d[f] = a[e]
            }
            for (e = 0; e < a.length; e++) {
                for (var g = this.getConnections(a[e]), h = 0; h < g.length; h++) {
                    f = mxCellPath.create(g[h]);
                    if (d[f] == null) {
                        var k = this.model.getGeometry(g[h]);
                        if (k != null) {
                            var i = this.view.getState(g[h]);
                            if (i != null) {
                                var k = k.clone(), l = i.getVisibleTerminal(true) == a[e], n = i.absolutePoints, m = l ? 0 : n.length -
                                    1;
                                k.setTerminalPoint(new mxPoint(n[m].x / b - c.x, n[m].y / b - c.y), l);
                                this.model.setTerminal(g[h], null, l);
                                this.model.setGeometry(g[h], k)
                            }
                        }
                    }
                }
                this.model.remove(a[e])
            }
            this.fireEvent(new mxEventObject(mxEvent.CELLS_REMOVED, "cells", a))
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.splitEdge = function (a, b, c, d, e) {
    d = d || 0;
    e = e || 0;
    c == null && (c = this.cloneCells([a])[0]);
    var f = this.model.getParent(a), g = this.model.getTerminal(a, true);
    this.model.beginUpdate();
    try {
        this.cellsMoved(b, d, e, false, false);
        this.cellsAdded(b, f, this.model.getChildCount(f), null, null, true);
        this.cellsAdded([c], f, this.model.getChildCount(f), g, b[0], false);
        this.cellConnected(a, b[0], true);
        this.fireEvent(new mxEventObject(mxEvent.SPLIT_EDGE, "edge", a, "cells", b, "newEdge", c, "dx", d, "dy", e))
    } finally {
        this.model.endUpdate()
    }
    return c
};
mxGraph.prototype.toggleCells = function (a, b, c) {
    b == null && (b = this.getSelectionCells());
    c && (b = this.addAllEdges(b));
    this.model.beginUpdate();
    try {
        this.cellsToggled(b, a);
        this.fireEvent(new mxEventObject(mxEvent.TOGGLE_CELLS, "show", a, "cells", b, "includeEdges", c))
    } finally {
        this.model.endUpdate()
    }
    return b
};
mxGraph.prototype.cellsToggled = function (a, b) {
    if (a != null && a.length > 0) {
        this.model.beginUpdate();
        try {
            for (var c = 0; c < a.length; c++)this.model.setVisible(a[c], b)
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.foldCells = function (a, b, c, d) {
    b = b != null ? b : false;
    c == null && (c = this.getFoldableCells(this.getSelectionCells(), a));
    this.stopEditing(false);
    this.model.beginUpdate();
    try {
        this.cellsFolded(c, a, b, d);
        this.fireEvent(new mxEventObject(mxEvent.FOLD_CELLS, "collapse", a, "recurse", b, "cells", c))
    } finally {
        this.model.endUpdate()
    }
    return c
};
mxGraph.prototype.cellsFolded = function (a, b, c, d) {
    if (a != null && a.length > 0) {
        this.model.beginUpdate();
        try {
            for (var e = 0; e < a.length; e++)if ((!d || this.isCellFoldable(a[e], b)) && b != this.isCellCollapsed(a[e])) {
                this.model.setCollapsed(a[e], b);
                this.swapBounds(a[e], b);
                this.isExtendParent(a[e]) && this.extendParent(a[e]);
                c && this.foldCells(this.model.getChildren(a[e]), b, c)
            }
            this.fireEvent(new mxEventObject(mxEvent.CELLS_FOLDED, "cells", a, "collapse", b, "recurse", c))
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.swapBounds = function (a, b) {
    if (a != null) {
        var c = this.model.getGeometry(a);
        if (c != null) {
            c = c.clone();
            this.updateAlternateBounds(a, c, b);
            c.swap();
            this.model.setGeometry(a, c)
        }
    }
};
mxGraph.prototype.updateAlternateBounds = function (a, b) {
    if (a != null && b != null)if (b.alternateBounds == null) {
        var c = b;
        if (this.collapseToPreferredSize) {
            var d = this.getPreferredSizeForCell(a);
            if (d != null) {
                c = d;
                d = this.view.getState(a);
                d = d != null ? d.style : this.getCellStyle(a);
                d = mxUtils.getValue(d, mxConstants.STYLE_STARTSIZE);
                if (d > 0)c.height = Math.max(c.height, d)
            }
        }
        b.alternateBounds = new mxRectangle(b.x, b.y, c.width, c.height)
    } else {
        b.alternateBounds.x = b.x;
        b.alternateBounds.y = b.y
    }
};
mxGraph.prototype.addAllEdges = function (a) {
    var b = a.slice();
    return b = b.concat(this.getAllEdges(a))
};
mxGraph.prototype.getAllEdges = function (a) {
    var b = [];
    if (a != null)for (var c = 0; c < a.length; c++) {
        for (var d = this.model.getEdgeCount(a[c]), e = 0; e < d; e++)b.push(this.model.getEdgeAt(a[c], e));
        d = this.model.getChildren(a[c]);
        b = b.concat(this.getAllEdges(d))
    }
    return b
};
mxGraph.prototype.updateCellSize = function (a, b) {
    b = b != null ? b : false;
    this.model.beginUpdate();
    try {
        this.cellSizeUpdated(a, b);
        this.fireEvent(new mxEventObject(mxEvent.UPDATE_CELL_SIZE, "cell", a, "ignoreChildren", b))
    } finally {
        this.model.endUpdate()
    }
    return a
};
mxGraph.prototype.cellSizeUpdated = function (a, b) {
    if (a != null) {
        this.model.beginUpdate();
        try {
            var c = this.getPreferredSizeForCell(a), d = this.model.getGeometry(a);
            if (c != null && d != null) {
                var e = this.isCellCollapsed(a), d = d.clone();
                if (this.isSwimlane(a)) {
                    var f = this.view.getState(a), g = f != null ? f.style : this.getCellStyle(a), h = this.model.getStyle(a);
                    h == null && (h = "");
                    if (mxUtils.getValue(g, mxConstants.STYLE_HORIZONTAL, true)) {
                        h = mxUtils.setStyle(h, mxConstants.STYLE_STARTSIZE, c.height + 8);
                        if (e)d.height = c.height + 8;
                        d.width =
                            c.width
                    } else {
                        h = mxUtils.setStyle(h, mxConstants.STYLE_STARTSIZE, c.width + 8);
                        if (e)d.width = c.width + 8;
                        d.height = c.height
                    }
                    this.model.setStyle(a, h)
                } else {
                    d.width = c.width;
                    d.height = c.height
                }
                if (!b && !e) {
                    var k = this.view.getBounds(this.model.getChildren(a));
                    if (k != null) {
                        var i = this.view.translate, l = this.view.scale, n = (k.y + k.height) / l - d.y - i.y;
                        d.width = Math.max(d.width, (k.x + k.width) / l - d.x - i.x);
                        d.height = Math.max(d.height, n)
                    }
                }
                this.cellsResized([a], [d])
            }
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.getPreferredSizeForCell = function (a) {
    var b = null;
    if (a != null) {
        var c = this.view.getState(a), d = c != null ? c.style : this.getCellStyle(a);
        if (d != null && !this.model.isEdge(a)) {
            var e = d[mxConstants.STYLE_FONTSIZE] || mxConstants.DEFAULT_FONTSIZE, f = 0, b = 0;
            if ((this.getImage(c) != null || d[mxConstants.STYLE_IMAGE] != null) && d[mxConstants.STYLE_SHAPE] == mxConstants.SHAPE_LABEL) {
                d[mxConstants.STYLE_VERTICAL_ALIGN] == mxConstants.ALIGN_MIDDLE && (f = f + (parseFloat(d[mxConstants.STYLE_IMAGE_WIDTH]) || mxLabel.prototype.imageSize));
                d[mxConstants.STYLE_ALIGN] != mxConstants.ALIGN_CENTER && (b = b + (parseFloat(d[mxConstants.STYLE_IMAGE_HEIGHT]) || mxLabel.prototype.imageSize))
            }
            f = f + 2 * (d[mxConstants.STYLE_SPACING] || 0);
            f = f + (d[mxConstants.STYLE_SPACING_LEFT] || 0);
            f = f + (d[mxConstants.STYLE_SPACING_RIGHT] || 0);
            b = b + 2 * (d[mxConstants.STYLE_SPACING] || 0);
            b = b + (d[mxConstants.STYLE_SPACING_TOP] || 0);
            b = b + (d[mxConstants.STYLE_SPACING_BOTTOM] || 0);
            c = this.getFoldingImage(c);
            c != null && (f = f + (c.width + 8));
            c = this.getLabel(a);
            if (c != null && c.length > 0) {
                this.isHtmlLabel(a) ||
                (c = c.replace(/\n/g, "<br>"));
                e = mxUtils.getSizeForString(c, e, d[mxConstants.STYLE_FONTFAMILY]);
                a = e.width + f;
                b = e.height + b;
                if (!mxUtils.getValue(d, mxConstants.STYLE_HORIZONTAL, true)) {
                    d = b;
                    b = a;
                    a = d
                }
                if (this.gridEnabled) {
                    a = this.snap(a + this.gridSize / 2);
                    b = this.snap(b + this.gridSize / 2)
                }
                b = new mxRectangle(0, 0, a, b)
            } else {
                d = 4 * this.gridSize;
                b = new mxRectangle(0, 0, d, d)
            }
        }
    }
    return b
};
mxGraph.prototype.handleGesture = function (a, b) {
    if (Math.abs(1 - b.scale) > 0.2) {
        var c = this.view.scale, d = this.view.translate, e = a.width * b.scale, f = a.height * b.scale, g = a.y - (f - a.height) / 2, c = new mxRectangle(this.snap((a.x - (e - a.width) / 2) / c) - d.x, this.snap(g / c) - d.y, this.snap(e / c), this.snap(f / c));
        this.resizeCell(a.cell, c)
    }
};
mxGraph.prototype.resizeCell = function (a, b) {
    return this.resizeCells([a], [b])[0]
};
mxGraph.prototype.resizeCells = function (a, b) {
    this.model.beginUpdate();
    try {
        this.cellsResized(a, b);
        this.fireEvent(new mxEventObject(mxEvent.RESIZE_CELLS, "cells", a, "bounds", b))
    } finally {
        this.model.endUpdate()
    }
    return a
};
mxGraph.prototype.cellsResized = function (a, b) {
    if (a != null && b != null && a.length == b.length) {
        this.model.beginUpdate();
        try {
            for (var c = 0; c < a.length; c++) {
                var d = b[c], e = this.model.getGeometry(a[c]);
                if (e != null && (e.x != d.x || e.y != d.y || e.width != d.width || e.height != d.height)) {
                    e = e.clone();
                    if (e.relative) {
                        var f = e.offset;
                        if (f != null) {
                            f.x = f.x + (d.x - e.x);
                            f.y = f.y + (d.y - e.y)
                        }
                    } else {
                        e.x = d.x;
                        e.y = d.y
                    }
                    e.width = d.width;
                    e.height = d.height;
                    if (!e.relative && this.model.isVertex(a[c]) && !this.isAllowNegativeCoordinates()) {
                        e.x = Math.max(0, e.x);
                        e.y = Math.max(0, e.y)
                    }
                    this.model.setGeometry(a[c], e);
                    this.isExtendParent(a[c]) && this.extendParent(a[c])
                }
            }
            this.resetEdgesOnResize && this.resetEdges(a);
            this.fireEvent(new mxEventObject(mxEvent.CELLS_RESIZED, "cells", a, "bounds", b))
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.extendParent = function (a) {
    if (a != null) {
        var b = this.model.getParent(a), c = this.model.getGeometry(b);
        if (b != null && c != null && !this.isCellCollapsed(b)) {
            a = this.model.getGeometry(a);
            if (a != null && (c.width < a.x + a.width || c.height < a.y + a.height)) {
                c = c.clone();
                c.width = Math.max(c.width, a.x + a.width);
                c.height = Math.max(c.height, a.y + a.height);
                this.cellsResized([b], [c])
            }
        }
    }
};
mxGraph.prototype.importCells = function (a, b, c, d, e) {
    return this.moveCells(a, b, c, true, d, e)
};
mxGraph.prototype.moveCells = function (a, b, c, d, e, f) {
    b = b != null ? b : 0;
    c = c != null ? c : 0;
    d = d != null ? d : false;
    if (a != null && (b != 0 || c != 0 || d || e != null)) {
        this.model.beginUpdate();
        try {
            if (d) {
                a = this.cloneCells(a, this.isCloneInvalidEdges());
                e == null && (e = this.getDefaultParent())
            }
            var g = this.isAllowNegativeCoordinates();
            e != null && this.setAllowNegativeCoordinates(true);
            this.cellsMoved(a, b, c, !d && this.isDisconnectOnMove() && this.isAllowDanglingEdges(), e == null);
            this.setAllowNegativeCoordinates(g);
            if (e != null) {
                var h = this.model.getChildCount(e);
                this.cellsAdded(a, e, h, null, null, true)
            }
            this.fireEvent(new mxEventObject(mxEvent.MOVE_CELLS, "cells", a, "dx", b, "dy", c, "clone", d, "target", e, "event", f))
        } finally {
            this.model.endUpdate()
        }
    }
    return a
};
mxGraph.prototype.cellsMoved = function (a, b, c, d, e) {
    if (a != null && (b != 0 || c != 0)) {
        this.model.beginUpdate();
        try {
            d && this.disconnectGraph(a);
            for (var f = 0; f < a.length; f++) {
                this.translateCell(a[f], b, c);
                e && this.constrainChild(a[f])
            }
            this.resetEdgesOnMove && this.resetEdges(a);
            this.fireEvent(new mxEventObject(mxEvent.CELLS_MOVED, "cells", a, "dx", c, "dy", c, "disconnect", d))
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.translateCell = function (a, b, c) {
    var d = this.model.getGeometry(a);
    if (d != null) {
        d = d.clone();
        d.translate(b, c);
        if (!d.relative && this.model.isVertex(a) && !this.isAllowNegativeCoordinates()) {
            d.x = Math.max(0, d.x);
            d.y = Math.max(0, d.y)
        }
        if (d.relative && !this.model.isEdge(a))if (d.offset == null)d.offset = new mxPoint(b, c); else {
            d.offset.x = d.offset.x + b;
            d.offset.y = d.offset.y + c
        }
        this.model.setGeometry(a, d)
    }
};
mxGraph.prototype.getCellContainmentArea = function (a) {
    if (a != null && !this.model.isEdge(a)) {
        var b = this.model.getParent(a);
        if (b == this.getDefaultParent() || b == this.getCurrentRoot())return this.getMaximumGraphBounds();
        if (b != null && b != this.getDefaultParent()) {
            var c = this.model.getGeometry(b);
            if (c != null) {
                var d = a = 0, e = c.width, c = c.height;
                if (this.isSwimlane(b)) {
                    b = this.getStartSize(b);
                    a = b.width;
                    e = e - b.width;
                    d = b.height;
                    c = c - b.height
                }
                return new mxRectangle(a, d, e, c)
            }
        }
    }
    return null
};
mxGraph.prototype.getMaximumGraphBounds = function () {
    return this.maximumGraphBounds
};
mxGraph.prototype.constrainChild = function (a) {
    if (a != null) {
        var b = this.model.getGeometry(a), c = this.isConstrainChild(a) ? this.getCellContainmentArea(a) : this.getMaximumGraphBounds();
        if (b != null && c != null && !b.relative && (b.x < c.x || b.y < c.y || c.width < b.x + b.width || c.height < b.y + b.height)) {
            a = this.getOverlap(a);
            if (c.width > 0)b.x = Math.min(b.x, c.x + c.width - (1 - a) * b.width);
            if (c.height > 0)b.y = Math.min(b.y, c.y + c.height - (1 - a) * b.height);
            b.x = Math.max(b.x, c.x - b.width * a);
            b.y = Math.max(b.y, c.y - b.height * a)
        }
    }
};
mxGraph.prototype.resetEdges = function (a) {
    if (a != null) {
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = mxCellPath.create(a[c]);
            b[d] = a[c]
        }
        this.model.beginUpdate();
        try {
            for (c = 0; c < a.length; c++) {
                var e = this.model.getEdges(a[c]);
                if (e != null)for (d = 0; d < e.length; d++) {
                    var f = this.view.getState(e[d]), g = f != null ? f.getVisibleTerminal(true) : this.view.getVisibleTerminal(e[d], true), h = f != null ? f.getVisibleTerminal(false) : this.view.getVisibleTerminal(e[d], false), k = mxCellPath.create(g), i = mxCellPath.create(h);
                    (b[k] == null || b[i] == null) &&
                    this.resetEdge(e[d])
                }
                this.resetEdges(this.model.getChildren(a[c]))
            }
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.resetEdge = function (a) {
    var b = this.model.getGeometry(a);
    if (b != null && b.points != null && b.points.length > 0) {
        b = b.clone();
        b.points = [];
        this.model.setGeometry(a, b)
    }
    return a
};
mxGraph.prototype.getAllConnectionConstraints = function (a) {
    return a != null && a.shape != null && a.shape.stencil != null ? a.shape.stencil.constraints : null
};
mxGraph.prototype.getConnectionConstraint = function (a, b, c) {
    var b = null, d = a.style[c ? mxConstants.STYLE_EXIT_X : mxConstants.STYLE_ENTRY_X];
    if (d != null) {
        var e = a.style[c ? mxConstants.STYLE_EXIT_Y : mxConstants.STYLE_ENTRY_Y];
        e != null && (b = new mxPoint(parseFloat(d), parseFloat(e)))
    }
    d = false;
    b != null && (d = mxUtils.getValue(a.style, c ? mxConstants.STYLE_EXIT_PERIMETER : mxConstants.STYLE_ENTRY_PERIMETER, true));
    return new mxConnectionConstraint(b, d)
};
mxGraph.prototype.setConnectionConstraint = function (a, b, c, d) {
    if (d != null) {
        this.model.beginUpdate();
        try {
            if (d == null || d.point == null) {
                this.setCellStyles(c ? mxConstants.STYLE_EXIT_X : mxConstants.STYLE_ENTRY_X, null, [a]);
                this.setCellStyles(c ? mxConstants.STYLE_EXIT_Y : mxConstants.STYLE_ENTRY_Y, null, [a]);
                this.setCellStyles(c ? mxConstants.STYLE_EXIT_PERIMETER : mxConstants.STYLE_ENTRY_PERIMETER, null, [a])
            } else if (d.point != null) {
                this.setCellStyles(c ? mxConstants.STYLE_EXIT_X : mxConstants.STYLE_ENTRY_X, d.point.x, [a]);
                this.setCellStyles(c ?
                    mxConstants.STYLE_EXIT_Y : mxConstants.STYLE_ENTRY_Y, d.point.y, [a]);
                d.perimeter ? this.setCellStyles(c ? mxConstants.STYLE_EXIT_PERIMETER : mxConstants.STYLE_ENTRY_PERIMETER, null, [a]) : this.setCellStyles(c ? mxConstants.STYLE_EXIT_PERIMETER : mxConstants.STYLE_ENTRY_PERIMETER, "0", [a])
            }
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.getConnectionPoint = function (a, b) {
    var c = null;
    if (a != null) {
        var d = this.view.getPerimeterBounds(a), e = new mxPoint(d.getCenterX(), d.getCenterY()), f = a.style[mxConstants.STYLE_DIRECTION], g = 0;
        if (f != null) {
            f == "north" ? g = g + 270 : f == "west" ? g = g + 180 : f == "south" && (g = g + 90);
            if (f == "north" || f == "south") {
                d.x = d.x + (d.width / 2 - d.height / 2);
                d.y = d.y + (d.height / 2 - d.width / 2);
                var h = d.width;
                d.width = d.height;
                d.height = h
            }
        }
        if (b.point != null) {
            var k = c = 1, i = 0, l = 0;
            if (this.getModel().isVertex(a.cell)) {
                var n = a.style[mxConstants.STYLE_FLIPH],
                    m = a.style[mxConstants.STYLE_FLIPV];
                if (a.shape.stencil != null) {
                    n = mxUtils.getValue(a.style, "stencilFlipH", 0) == 1 || n;
                    m = mxUtils.getValue(a.style, "stencilFlipV", 0) == 1 || m
                }
                if (f == "north" || f == "south") {
                    h = n;
                    n = m;
                    m = h
                }
                if (n) {
                    c = -1;
                    i = -d.width
                }
                if (m) {
                    k = -1;
                    l = -d.height
                }
            }
            c = new mxPoint(d.x + b.point.x * d.width * c - i, d.y + b.point.y * d.height * k - l)
        }
        f = a.style[mxConstants.STYLE_ROTATION] || 0;
        if (b.perimeter) {
            if (g != 0 && c != null) {
                h = d = 0;
                g == 90 ? h = 1 : g == 180 ? d = -1 : f == 270 && (h = -1);
                c = mxUtils.getRotatedPoint(c, d, h, e)
            }
            c != null && b.perimeter && (c = this.view.getPerimeterPoint(a,
                c, false))
        } else f = f + g;
        if (f != 0 && c != null) {
            g = mxUtils.toRadians(f);
            d = Math.cos(g);
            h = Math.sin(g);
            c = mxUtils.getRotatedPoint(c, d, h, e)
        }
    }
    return c
};
mxGraph.prototype.connectCell = function (a, b, c, d) {
    this.model.beginUpdate();
    try {
        var e = this.model.getTerminal(a, c);
        this.cellConnected(a, b, c, d);
        this.fireEvent(new mxEventObject(mxEvent.CONNECT_CELL, "edge", a, "terminal", b, "source", c, "previous", e))
    } finally {
        this.model.endUpdate()
    }
    return a
};
mxGraph.prototype.cellConnected = function (a, b, c, d) {
    if (a != null) {
        this.model.beginUpdate();
        try {
            var e = this.model.getTerminal(a, c);
            this.setConnectionConstraint(a, b, c, d);
            if (this.isPortsEnabled()) {
                d = null;
                if (this.isPort(b)) {
                    d = b.getId();
                    b = this.getTerminalForPort(b, c)
                }
                this.setCellStyles(c ? mxConstants.STYLE_SOURCE_PORT : mxConstants.STYLE_TARGET_PORT, d, [a])
            }
            this.model.setTerminal(a, b, c);
            this.resetEdgesOnConnect && this.resetEdge(a);
            this.fireEvent(new mxEventObject(mxEvent.CELL_CONNECTED, "edge", a, "terminal", b, "source",
                c, "previous", e))
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.disconnectGraph = function (a) {
    if (a != null) {
        this.model.beginUpdate();
        try {
            for (var b = this.view.scale, c = this.view.translate, d = {}, e = 0; e < a.length; e++) {
                var f = mxCellPath.create(a[e]);
                d[f] = a[e]
            }
            for (e = 0; e < a.length; e++)if (this.model.isEdge(a[e])) {
                var g = this.model.getGeometry(a[e]);
                if (g != null) {
                    var h = this.view.getState(a[e]), k = this.view.getState(this.model.getParent(a[e]));
                    if (h != null && k != null) {
                        var g = g.clone(), i = -k.origin.x, l = -k.origin.y, n = h.absolutePoints, m = this.model.getTerminal(a[e], true);
                        if (m !=
                            null && this.isCellDisconnectable(a[e], m, true)) {
                            for (var o = mxCellPath.create(m); m != null && d[o] == null;) {
                                m = this.model.getParent(m);
                                o = mxCellPath.create(m)
                            }
                            if (m == null) {
                                g.setTerminalPoint(new mxPoint(n[0].x / b - c.x + i, n[0].y / b - c.y + l), true);
                                this.model.setTerminal(a[e], null, true)
                            }
                        }
                        var q = this.model.getTerminal(a[e], false);
                        if (q != null && this.isCellDisconnectable(a[e], q, false)) {
                            for (var p = mxCellPath.create(q); q != null && d[p] == null;) {
                                q = this.model.getParent(q);
                                p = mxCellPath.create(q)
                            }
                            if (q == null) {
                                var r = n.length - 1;
                                g.setTerminalPoint(new mxPoint(n[r].x /
                                    b - c.x + i, n[r].y / b - c.y + l), false);
                                this.model.setTerminal(a[e], null, false)
                            }
                        }
                        this.model.setGeometry(a[e], g)
                    }
                }
            }
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.getCurrentRoot = function () {
    return this.view.currentRoot
};
mxGraph.prototype.getTranslateForRoot = function () {
    return null
};
mxGraph.prototype.isPort = function () {
    return false
};
mxGraph.prototype.getTerminalForPort = function (a) {
    return this.model.getParent(a)
};
mxGraph.prototype.getChildOffsetForCell = function () {
    return null
};
mxGraph.prototype.enterGroup = function (a) {
    a = a || this.getSelectionCell();
    if (a != null && this.isValidRoot(a)) {
        this.view.setCurrentRoot(a);
        this.clearSelection()
    }
};
mxGraph.prototype.exitGroup = function () {
    var a = this.model.getRoot(), b = this.getCurrentRoot();
    if (b != null) {
        for (var c = this.model.getParent(b); c != a && !this.isValidRoot(c) && this.model.getParent(c) != a;)c = this.model.getParent(c);
        c == a || this.model.getParent(c) == a ? this.view.setCurrentRoot(null) : this.view.setCurrentRoot(c);
        this.view.getState(b) != null && this.setSelectionCell(b)
    }
};
mxGraph.prototype.home = function () {
    var a = this.getCurrentRoot();
    if (a != null) {
        this.view.setCurrentRoot(null);
        this.view.getState(a) != null && this.setSelectionCell(a)
    }
};
mxGraph.prototype.isValidRoot = function (a) {
    return a != null
};
mxGraph.prototype.getGraphBounds = function () {
    return this.view.getGraphBounds()
};
mxGraph.prototype.getCellBounds = function (a, b, c) {
    var d = [a];
    b && (d = d.concat(this.model.getEdges(a)));
    d = this.view.getBounds(d);
    if (c)for (var c = this.model.getChildCount(a), e = 0; e < c; e++) {
        var f = this.getCellBounds(this.model.getChildAt(a, e), b, true);
        d != null ? d.add(f) : d = f
    }
    return d
};
mxGraph.prototype.getBoundingBoxFromGeometry = function (a, b) {
    var b = b != null ? b : false, c = null;
    if (a != null)for (var d = 0; d < a.length; d++)if (b || this.model.isVertex(a[d])) {
        var e = this.getCellGeometry(a[d]);
        if (e != null) {
            var f = e.points;
            if (f != null && f.length > 0) {
                for (var g = new mxRectangle(f[0].x, f[0].y, 0, 0), h = function (a) {
                    a != null && g.add(new mxRectangle(a.x, a.y, 0, 0))
                }, k = 1; k < f.length; k++)h(f[k]);
                h(e.getTerminalPoint(true));
                h(e.getTerminalPoint(false))
            }
            c == null ? c = new mxRectangle(e.x, e.y, e.width, e.height) : c.add(e)
        }
    }
    return c
};
mxGraph.prototype.refresh = function (a) {
    this.view.clear(a, a == null);
    this.view.validate();
    this.sizeDidChange();
    this.fireEvent(new mxEventObject(mxEvent.REFRESH))
};
mxGraph.prototype.snap = function (a) {
    this.gridEnabled && (a = Math.round(a / this.gridSize) * this.gridSize);
    return a
};
mxGraph.prototype.panGraph = function (a, b) {
    if (this.useScrollbarsForPanning && mxUtils.hasScrollbars(this.container)) {
        this.container.scrollLeft = -a;
        this.container.scrollTop = -b
    } else {
        var c = this.view.getCanvas();
        if (this.dialect == mxConstants.DIALECT_SVG)if (a == 0 && b == 0) {
            mxClient.IS_IE ? c.setAttribute("transform", "translate(" + a + "," + b + ")") : c.removeAttribute("transform");
            if (this.shiftPreview1 != null) {
                for (var d = this.shiftPreview1.firstChild; d != null;) {
                    var e = d.nextSibling;
                    this.container.appendChild(d);
                    d = e
                }
                this.shiftPreview1.parentNode.removeChild(this.shiftPreview1);
                this.shiftPreview1 = null;
                this.container.appendChild(c.parentNode);
                for (d = this.shiftPreview2.firstChild; d != null;) {
                    e = d.nextSibling;
                    this.container.appendChild(d);
                    d = e
                }
                this.shiftPreview2.parentNode.removeChild(this.shiftPreview2);
                this.shiftPreview2 = null
            }
        } else {
            c.setAttribute("transform", "translate(" + a + "," + b + ")");
            if (this.shiftPreview1 == null) {
                this.shiftPreview1 = document.createElement("div");
                this.shiftPreview1.style.position = "absolute";
                this.shiftPreview1.style.overflow = "visible";
                this.shiftPreview2 = document.createElement("div");
                this.shiftPreview2.style.position = "absolute";
                this.shiftPreview2.style.overflow = "visible";
                for (var f = this.shiftPreview1, d = this.container.firstChild; d != null;) {
                    e = d.nextSibling;
                    d != c.parentNode ? f.appendChild(d) : f = this.shiftPreview2;
                    d = e
                }
                this.container.insertBefore(this.shiftPreview1, c.parentNode);
                this.container.appendChild(this.shiftPreview2)
            }
            this.shiftPreview1.style.left = a + "px";
            this.shiftPreview1.style.top = b + "px";
            this.shiftPreview2.style.left = a + "px";
            this.shiftPreview2.style.top = b + "px"
        } else {
            c.style.left =
                a + "px";
            c.style.top = b + "px"
        }
        this.panDx = a;
        this.panDy = b;
        this.fireEvent(new mxEventObject(mxEvent.PAN))
    }
};
mxGraph.prototype.zoomIn = function () {
    this.zoom(this.zoomFactor)
};
mxGraph.prototype.zoomOut = function () {
    this.zoom(1 / this.zoomFactor)
};
mxGraph.prototype.zoomActual = function () {
    if (this.view.scale == 1)this.view.setTranslate(0, 0); else {
        this.view.translate.x = 0;
        this.view.translate.y = 0;
        this.view.setScale(1)
    }
};
mxGraph.prototype.zoomTo = function (a, b) {
    this.zoom(a / this.view.scale, b)
};
mxGraph.prototype.zoom = function (a, b) {
    var b = b != null ? b : this.centerZoom, c = this.view.scale * a, d = this.view.getState(this.getSelectionCell());
    if (this.keepSelectionVisibleOnZoom && d != null) {
        d = new mxRectangle(d.x * a, d.y * a, d.width * a, d.height * a);
        this.view.scale = c;
        if (!this.scrollRectToVisible(d)) {
            this.view.revalidate();
            this.view.setScale(c)
        }
    } else if (b && !mxUtils.hasScrollbars(this.container)) {
        var d = this.container.offsetWidth, e = this.container.offsetHeight;
        if (a > 1)var f = (a - 1) / (c * 2), d = d * -f, e = e * -f; else {
            f = (1 / a - 1) / (this.view.scale *
                2);
            d = d * f;
            e = e * f
        }
        this.view.scaleAndTranslate(c, this.view.translate.x + d, this.view.translate.y + e)
    } else {
        this.view.setScale(c);
        if (mxUtils.hasScrollbars(this.container)) {
            e = d = 0;
            if (b) {
                d = this.container.offsetWidth * (a - 1) / 2;
                e = this.container.offsetHeight * (a - 1) / 2
            }
            this.container.scrollLeft = Math.round(this.container.scrollLeft * a + d);
            this.container.scrollTop = Math.round(this.container.scrollTop * a + e)
        }
    }
};
mxGraph.prototype.zoomToRect = function (a) {
    var b = this.container.clientWidth / a.width / (this.container.clientHeight / a.height);
    a.x = Math.max(0, a.x);
    a.y = Math.max(0, a.y);
    var c = Math.min(this.container.scrollWidth, a.x + a.width), d = Math.min(this.container.scrollHeight, a.y + a.height);
    a.width = c - a.x;
    a.height = d - a.y;
    if (b < 1) {
        b = a.height / b;
        c = (b - a.height) / 2;
        a.height = b;
        b = Math.min(a.y, c);
        a.y = a.y - b;
        d = Math.min(this.container.scrollHeight, a.y + a.height);
        a.height = d - a.y
    } else {
        b = a.width * b;
        c = (b - a.width) / 2;
        a.width = b;
        b = Math.min(a.x,
            c);
        a.x = a.x - b;
        c = Math.min(this.container.scrollWidth, a.x + a.width);
        a.width = c - a.x
    }
    b = this.container.clientWidth / a.width;
    c = this.view.scale * b;
    if (mxUtils.hasScrollbars(this.container)) {
        this.view.setScale(c);
        this.container.scrollLeft = Math.round(a.x * b);
        this.container.scrollTop = Math.round(a.y * b)
    } else this.view.scaleAndTranslate(c, this.view.translate.x - a.x / this.view.scale, this.view.translate.y - a.y / this.view.scale)
};
mxGraph.prototype.fit = function (a, b) {
    if (this.container != null) {
        var a = a != null ? a : 0, b = b != null ? b : false, c = this.container.clientWidth, d = this.container.clientHeight, e = this.view.getGraphBounds();
        if (b && e.x != null && e.y != null) {
            e.width = e.width + e.x;
            e.height = e.height + e.y;
            e.x = 0;
            e.y = 0
        }
        var f = this.view.scale, g = e.width / f, h = e.height / f;
        if (this.backgroundImage != null) {
            g = Math.max(g, this.backgroundImage.width - e.x / f);
            h = Math.max(h, this.backgroundImage.height - e.y / f)
        }
        var k = b ? a : 2 * a, c = Math.floor(Math.min(c / (g + k), d / (h + k)) * 100) / 100;
        this.minFitScale != null && (c = Math.max(c, this.minFitScale));
        this.maxFitScale != null && (c = Math.min(c, this.maxFitScale));
        if (b)this.view.scale != c && this.view.setScale(c); else if (mxUtils.hasScrollbars(this.container)) {
            this.view.setScale(c);
            if (e.x != null)this.container.scrollLeft = Math.round(e.x / f) * c - a - Math.max(0, (this.container.clientWidth - g * c) / 2);
            if (e.y != null)this.container.scrollTop = Math.round(e.y / f) * c - a - Math.max(0, (this.container.clientHeight - h * c) / 2)
        } else this.view.scaleAndTranslate(c, e.x != null ? Math.floor(this.view.translate.x -
            e.x / f + a + 1) : a, e.y != null ? Math.floor(this.view.translate.y - e.y / f + a + 1) : a)
    }
    return this.view.scale
};
mxGraph.prototype.scrollCellToVisible = function (a, b) {
    var c = -this.view.translate.x, d = -this.view.translate.y, e = this.view.getState(a);
    if (e != null) {
        c = new mxRectangle(c + e.x, d + e.y, e.width, e.height);
        if (b && this.container != null) {
            d = this.container.clientWidth;
            e = this.container.clientHeight;
            c.x = c.getCenterX() - d / 2;
            c.width = d;
            c.y = c.getCenterY() - e / 2;
            c.height = e
        }
        this.scrollRectToVisible(c) && this.view.setTranslate(this.view.translate.x, this.view.translate.y)
    }
};
mxGraph.prototype.scrollRectToVisible = function (a) {
    var b = false;
    if (a != null) {
        var c = this.container.offsetWidth, d = this.container.offsetHeight, e = Math.min(c, a.width), f = Math.min(d, a.height);
        if (mxUtils.hasScrollbars(this.container)) {
            c = this.container;
            a.x = a.x + this.view.translate.x;
            a.y = a.y + this.view.translate.y;
            var g = c.scrollLeft - a.x, d = Math.max(g - c.scrollLeft, 0);
            if (g > 0)c.scrollLeft = c.scrollLeft - (g + 2); else {
                g = a.x + e - c.scrollLeft - c.clientWidth;
                if (g > 0)c.scrollLeft = c.scrollLeft + (g + 2)
            }
            e = c.scrollTop - a.y;
            g = Math.max(0,
                e - c.scrollTop);
            if (e > 0)c.scrollTop = c.scrollTop - (e + 2); else {
                e = a.y + f - c.scrollTop - c.clientHeight;
                if (e > 0)c.scrollTop = c.scrollTop + (e + 2)
            }
            !this.useScrollbarsForPanning && (d != 0 || g != 0) && this.view.setTranslate(d, g)
        } else {
            var g = -this.view.translate.x, h = -this.view.translate.y, k = this.view.scale;
            if (a.x + e > g + c) {
                this.view.translate.x = this.view.translate.x - (a.x + e - c - g) / k;
                b = true
            }
            if (a.y + f > h + d) {
                this.view.translate.y = this.view.translate.y - (a.y + f - d - h) / k;
                b = true
            }
            if (a.x < g) {
                this.view.translate.x = this.view.translate.x + (g - a.x) / k;
                b = true
            }
            if (a.y < h) {
                this.view.translate.y = this.view.translate.y + (h - a.y) / k;
                b = true
            }
            if (b) {
                this.view.refresh();
                this.selectionCellsHandler != null && this.selectionCellsHandler.refresh()
            }
        }
    }
    return b
};
mxGraph.prototype.getCellGeometry = function (a) {
    return this.model.getGeometry(a)
};
mxGraph.prototype.isCellVisible = function (a) {
    return this.model.isVisible(a)
};
mxGraph.prototype.isCellCollapsed = function (a) {
    return this.model.isCollapsed(a)
};
mxGraph.prototype.isCellConnectable = function (a) {
    return this.model.isConnectable(a)
};
mxGraph.prototype.isOrthogonal = function (a) {
    var b = a.style[mxConstants.STYLE_ORTHOGONAL];
    if (b != null)return b;
    a = this.view.getEdgeStyle(a);
    return a == mxEdgeStyle.SegmentConnector || a == mxEdgeStyle.ElbowConnector || a == mxEdgeStyle.SideToSide || a == mxEdgeStyle.TopToBottom || a == mxEdgeStyle.EntityRelation || a == mxEdgeStyle.OrthConnector
};
mxGraph.prototype.isLoop = function (a) {
    var b = a.getVisibleTerminalState(true), a = a.getVisibleTerminalState(false);
    return b != null && b == a
};
mxGraph.prototype.isCloneEvent = function (a) {
    return mxEvent.isControlDown(a)
};
mxGraph.prototype.isToggleEvent = function (a) {
    return mxClient.IS_MAC ? mxEvent.isMetaDown(a) : mxEvent.isControlDown(a)
};
mxGraph.prototype.isGridEnabledEvent = function (a) {
    return a != null && !mxEvent.isAltDown(a)
};
mxGraph.prototype.isConstrainedEvent = function (a) {
    return mxEvent.isShiftDown(a)
};
mxGraph.prototype.isForceMarqueeEvent = function (a) {
    return mxEvent.isAltDown(a)
};
mxGraph.prototype.validationAlert = function (a) {
    mxUtils.alert(a)
};
mxGraph.prototype.isEdgeValid = function (a, b, c) {
    return this.getEdgeValidationError(a, b, c) == null
};
mxGraph.prototype.getEdgeValidationError = function (a, b, c) {
    if (a != null && !this.isAllowDanglingEdges() && (b == null || c == null))return"";
    if (a != null && this.model.getTerminal(a, true) == null && this.model.getTerminal(a, false) == null)return null;
    if (!this.allowLoops && b == c && b != null || !this.isValidConnection(b, c))return"";
    if (b != null && c != null) {
        var d = "";
        if (!this.multigraph) {
            var e = this.model.getEdgesBetween(b, c, true);
            if (e.length > 1 || e.length == 1 && e[0] != a)d = d + ((mxResources.get(this.alreadyConnectedResource) || this.alreadyConnectedResource) +
                "\n")
        }
        var e = this.model.getDirectedEdgeCount(b, true, a), f = this.model.getDirectedEdgeCount(c, false, a);
        if (this.multiplicities != null)for (var g = 0; g < this.multiplicities.length; g++) {
            var h = this.multiplicities[g].check(this, a, b, c, e, f);
            h != null && (d = d + h)
        }
        h = this.validateEdge(a, b, c);
        h != null && (d = d + h);
        return d.length > 0 ? d : null
    }
    return this.allowDanglingEdges ? null : ""
};
mxGraph.prototype.validateEdge = function () {
    return null
};
mxGraph.prototype.validateGraph = function (a, b) {
    for (var a = a != null ? a : this.model.getRoot(), b = b != null ? b : {}, c = true, d = this.model.getChildCount(a), e = 0; e < d; e++) {
        var f = this.model.getChildAt(a, e), g = b;
        this.isValidRoot(f) && (g = {});
        g = this.validateGraph(f, g);
        g != null ? this.setCellWarning(f, g.replace(/\n/g, "<br>")) : this.setCellWarning(f, null);
        c = c && g == null
    }
    d = "";
    this.isCellCollapsed(a) && !c && (d = d + ((mxResources.get(this.containsValidationErrorsResource) || this.containsValidationErrorsResource) + "\n"));
    d = this.model.isEdge(a) ?
        d + (this.getEdgeValidationError(a, this.model.getTerminal(a, true), this.model.getTerminal(a, false)) || "") : d + (this.getCellValidationError(a) || "");
    e = this.validateCell(a, b);
    e != null && (d = d + e);
    this.model.getParent(a) == null && this.view.validate();
    return d.length > 0 || !c ? d : null
};
mxGraph.prototype.getCellValidationError = function (a) {
    var b = this.model.getDirectedEdgeCount(a, true), c = this.model.getDirectedEdgeCount(a, false), a = this.model.getValue(a), d = "";
    if (this.multiplicities != null)for (var e = 0; e < this.multiplicities.length; e++) {
        var f = this.multiplicities[e];
        if (f.source && mxUtils.isNode(a, f.type, f.attr, f.value) && (f.max == 0 && b > 0 || f.min == 1 && b == 0 || f.max == 1 && b > 1))d = d + (f.countError + "\n"); else if (!f.source && mxUtils.isNode(a, f.type, f.attr, f.value) && (f.max == 0 && c > 0 || f.min == 1 && c == 0 || f.max == 1 &&
            c > 1))d = d + (f.countError + "\n")
    }
    return d.length > 0 ? d : null
};
mxGraph.prototype.validateCell = function () {
    return null
};
mxGraph.prototype.getBackgroundImage = function () {
    return this.backgroundImage
};
mxGraph.prototype.setBackgroundImage = function (a) {
    this.backgroundImage = a
};
mxGraph.prototype.getFoldingImage = function (a) {
    if (a != null && this.foldingEnabled && !this.getModel().isEdge(a.cell)) {
        var b = this.isCellCollapsed(a.cell);
        if (this.isCellFoldable(a.cell, !b))return b ? this.collapsedImage : this.expandedImage
    }
    return null
};
mxGraph.prototype.convertValueToString = function (a) {
    a = this.model.getValue(a);
    if (a != null) {
        if (mxUtils.isNode(a))return a.nodeName;
        if (typeof a.toString == "function")return a.toString()
    }
    return""
};
mxGraph.prototype.getLabel = function (a) {
    var b = "";
    if (this.labelsVisible && a != null) {
        var c = this.view.getState(a), c = c != null ? c.style : this.getCellStyle(a);
        mxUtils.getValue(c, mxConstants.STYLE_NOLABEL, false) || (b = this.convertValueToString(a))
    }
    return b
};
mxGraph.prototype.isHtmlLabel = function () {
    return this.isHtmlLabels()
};
mxGraph.prototype.isHtmlLabels = function () {
    return this.htmlLabels
};
mxGraph.prototype.setHtmlLabels = function (a) {
    this.htmlLabels = a
};
mxGraph.prototype.isWrapping = function (a) {
    var b = this.view.getState(a), a = b != null ? b.style : this.getCellStyle(a);
    return a != null ? a[mxConstants.STYLE_WHITE_SPACE] == "wrap" : false
};
mxGraph.prototype.isLabelClipped = function (a) {
    var b = this.view.getState(a), a = b != null ? b.style : this.getCellStyle(a);
    return a != null ? a[mxConstants.STYLE_OVERFLOW] == "hidden" : false
};
mxGraph.prototype.getTooltip = function (a, b) {
    var c = null;
    if (a != null) {
        if (a.control != null && (b == a.control.node || b.parentNode == a.control.node)) {
            c = this.collapseExpandResource;
            c = mxResources.get(c) || c
        }
        c == null && a.overlays != null && a.overlays.visit(function (a, d) {
            if (c == null && (b == d.node || b.parentNode == d.node))c = d.overlay.toString()
        });
        if (c == null) {
            var d = this.selectionCellsHandler.getHandler(a.cell);
            d != null && typeof d.getTooltipForNode == "function" && (c = d.getTooltipForNode(b))
        }
        c == null && (c = this.getTooltipForCell(a.cell))
    }
    return c
};
mxGraph.prototype.getTooltipForCell = function (a) {
    var b = null;
    return b = a != null && a.getTooltip != null ? a.getTooltip() : this.convertValueToString(a)
};
mxGraph.prototype.getCursorForCell = function () {
    return null
};
mxGraph.prototype.getStartSize = function (a) {
    var b = new mxRectangle, c = this.view.getState(a), a = c != null ? c.style : this.getCellStyle(a);
    if (a != null) {
        c = parseInt(mxUtils.getValue(a, mxConstants.STYLE_STARTSIZE, mxConstants.DEFAULT_STARTSIZE));
        mxUtils.getValue(a, mxConstants.STYLE_HORIZONTAL, true) ? b.height = c : b.width = c
    }
    return b
};
mxGraph.prototype.getImage = function (a) {
    return a != null && a.style != null ? a.style[mxConstants.STYLE_IMAGE] : null
};
mxGraph.prototype.getVerticalAlign = function (a) {
    return a != null && a.style != null ? a.style[mxConstants.STYLE_VERTICAL_ALIGN] || mxConstants.ALIGN_MIDDLE : null
};
mxGraph.prototype.getIndicatorColor = function (a) {
    return a != null && a.style != null ? a.style[mxConstants.STYLE_INDICATOR_COLOR] : null
};
mxGraph.prototype.getIndicatorGradientColor = function (a) {
    return a != null && a.style != null ? a.style[mxConstants.STYLE_INDICATOR_GRADIENTCOLOR] : null
};
mxGraph.prototype.getIndicatorShape = function (a) {
    return a != null && a.style != null ? a.style[mxConstants.STYLE_INDICATOR_SHAPE] : null
};
mxGraph.prototype.getIndicatorImage = function (a) {
    return a != null && a.style != null ? a.style[mxConstants.STYLE_INDICATOR_IMAGE] : null
};
mxGraph.prototype.getBorder = function () {
    return this.border
};
mxGraph.prototype.setBorder = function (a) {
    this.border = a
};
mxGraph.prototype.isSwimlane = function (a) {
    if (a != null && this.model.getParent(a) != this.model.getRoot()) {
        var b = this.view.getState(a), b = b != null ? b.style : this.getCellStyle(a);
        if (b != null && !this.model.isEdge(a))return b[mxConstants.STYLE_SHAPE] == mxConstants.SHAPE_SWIMLANE
    }
    return false
};
mxGraph.prototype.isResizeContainer = function () {
    return this.resizeContainer
};
mxGraph.prototype.setResizeContainer = function (a) {
    this.resizeContainer = a
};
mxGraph.prototype.isEnabled = function () {
    return this.enabled
};
mxGraph.prototype.setEnabled = function (a) {
    this.enabled = a
};
mxGraph.prototype.isEscapeEnabled = function () {
    return this.escapeEnabled
};
mxGraph.prototype.setEscapeEnabled = function (a) {
    this.escapeEnabled = a
};
mxGraph.prototype.isInvokesStopCellEditing = function () {
    return this.invokesStopCellEditing
};
mxGraph.prototype.setInvokesStopCellEditing = function (a) {
    this.invokesStopCellEditing = a
};
mxGraph.prototype.isEnterStopsCellEditing = function () {
    return this.enterStopsCellEditing
};
mxGraph.prototype.setEnterStopsCellEditing = function (a) {
    this.enterStopsCellEditing = a
};
mxGraph.prototype.isCellLocked = function (a) {
    var b = this.model.getGeometry(a);
    return this.isCellsLocked() || b != null && this.model.isVertex(a) && b.relative
};
mxGraph.prototype.isCellsLocked = function () {
    return this.cellsLocked
};
mxGraph.prototype.setCellsLocked = function (a) {
    this.cellsLocked = a
};
mxGraph.prototype.getCloneableCells = function (a) {
    return this.model.filterCells(a, mxUtils.bind(this, function (a) {
        return this.isCellCloneable(a)
    }))
};
mxGraph.prototype.isCellCloneable = function (a) {
    var b = this.view.getState(a), a = b != null ? b.style : this.getCellStyle(a);
    return this.isCellsCloneable() && a[mxConstants.STYLE_CLONEABLE] != 0
};
mxGraph.prototype.isCellsCloneable = function () {
    return this.cellsCloneable
};
mxGraph.prototype.setCellsCloneable = function (a) {
    this.cellsCloneable = a
};
mxGraph.prototype.getExportableCells = function (a) {
    return this.model.filterCells(a, mxUtils.bind(this, function (a) {
        return this.canExportCell(a)
    }))
};
mxGraph.prototype.canExportCell = function () {
    return this.exportEnabled
};
mxGraph.prototype.getImportableCells = function (a) {
    return this.model.filterCells(a, mxUtils.bind(this, function (a) {
        return this.canImportCell(a)
    }))
};
mxGraph.prototype.canImportCell = function () {
    return this.importEnabled
};
mxGraph.prototype.isCellSelectable = function () {
    return this.isCellsSelectable()
};
mxGraph.prototype.isCellsSelectable = function () {
    return this.cellsSelectable
};
mxGraph.prototype.setCellsSelectable = function (a) {
    this.cellsSelectable = a
};
mxGraph.prototype.getDeletableCells = function (a) {
    return this.model.filterCells(a, mxUtils.bind(this, function (a) {
        return this.isCellDeletable(a)
    }))
};
mxGraph.prototype.isCellDeletable = function (a) {
    var b = this.view.getState(a), a = b != null ? b.style : this.getCellStyle(a);
    return this.isCellsDeletable() && a[mxConstants.STYLE_DELETABLE] != 0
};
mxGraph.prototype.isCellsDeletable = function () {
    return this.cellsDeletable
};
mxGraph.prototype.setCellsDeletable = function (a) {
    this.cellsDeletable = a
};
mxGraph.prototype.isLabelMovable = function (a) {
    return!this.isCellLocked(a) && (this.model.isEdge(a) && this.edgeLabelsMovable || this.model.isVertex(a) && this.vertexLabelsMovable)
};
mxGraph.prototype.getMovableCells = function (a) {
    return this.model.filterCells(a, mxUtils.bind(this, function (a) {
        return this.isCellMovable(a)
    }))
};
mxGraph.prototype.isCellMovable = function (a) {
    var b = this.view.getState(a), b = b != null ? b.style : this.getCellStyle(a);
    return this.isCellsMovable() && !this.isCellLocked(a) && b[mxConstants.STYLE_MOVABLE] != 0
};
mxGraph.prototype.isCellsMovable = function () {
    return this.cellsMovable
};
mxGraph.prototype.setCellsMovable = function (a) {
    this.cellsMovable = a
};
mxGraph.prototype.isGridEnabled = function () {
    return this.gridEnabled
};
mxGraph.prototype.setGridEnabled = function (a) {
    this.gridEnabled = a
};
mxGraph.prototype.isPortsEnabled = function () {
    return this.portsEnabled
};
mxGraph.prototype.setPortsEnabled = function (a) {
    this.portsEnabled = a
};
mxGraph.prototype.getGridSize = function () {
    return this.gridSize
};
mxGraph.prototype.setGridSize = function (a) {
    this.gridSize = a
};
mxGraph.prototype.getTolerance = function () {
    return this.tolerance
};
mxGraph.prototype.setTolerance = function (a) {
    this.tolerance = a
};
mxGraph.prototype.isVertexLabelsMovable = function () {
    return this.vertexLabelsMovable
};
mxGraph.prototype.setVertexLabelsMovable = function (a) {
    this.vertexLabelsMovable = a
};
mxGraph.prototype.isEdgeLabelsMovable = function () {
    return this.edgeLabelsMovable
};
mxGraph.prototype.setEdgeLabelsMovable = function (a) {
    this.edgeLabelsMovable = a
};
mxGraph.prototype.isSwimlaneNesting = function () {
    return this.swimlaneNesting
};
mxGraph.prototype.setSwimlaneNesting = function (a) {
    this.swimlaneNesting = a
};
mxGraph.prototype.isSwimlaneSelectionEnabled = function () {
    return this.swimlaneSelectionEnabled
};
mxGraph.prototype.setSwimlaneSelectionEnabled = function (a) {
    this.swimlaneSelectionEnabled = a
};
mxGraph.prototype.isMultigraph = function () {
    return this.multigraph
};
mxGraph.prototype.setMultigraph = function (a) {
    this.multigraph = a
};
mxGraph.prototype.isAllowLoops = function () {
    return this.allowLoops
};
mxGraph.prototype.setAllowDanglingEdges = function (a) {
    this.allowDanglingEdges = a
};
mxGraph.prototype.isAllowDanglingEdges = function () {
    return this.allowDanglingEdges
};
mxGraph.prototype.setConnectableEdges = function (a) {
    this.connectableEdges = a
};
mxGraph.prototype.isConnectableEdges = function () {
    return this.connectableEdges
};
mxGraph.prototype.setCloneInvalidEdges = function (a) {
    this.cloneInvalidEdges = a
};
mxGraph.prototype.isCloneInvalidEdges = function () {
    return this.cloneInvalidEdges
};
mxGraph.prototype.setAllowLoops = function (a) {
    this.allowLoops = a
};
mxGraph.prototype.isDisconnectOnMove = function () {
    return this.disconnectOnMove
};
mxGraph.prototype.setDisconnectOnMove = function (a) {
    this.disconnectOnMove = a
};
mxGraph.prototype.isDropEnabled = function () {
    return this.dropEnabled
};
mxGraph.prototype.setDropEnabled = function (a) {
    this.dropEnabled = a
};
mxGraph.prototype.isSplitEnabled = function () {
    return this.splitEnabled
};
mxGraph.prototype.setSplitEnabled = function (a) {
    this.splitEnabled = a
};
mxGraph.prototype.isCellResizable = function (a) {
    var b = this.view.getState(a), b = b != null ? b.style : this.getCellStyle(a);
    return this.isCellsResizable() && !this.isCellLocked(a) && b[mxConstants.STYLE_RESIZABLE] != 0
};
mxGraph.prototype.isCellsResizable = function () {
    return this.cellsResizable
};
mxGraph.prototype.setCellsResizable = function (a) {
    this.cellsResizable = a
};
mxGraph.prototype.isTerminalPointMovable = function () {
    return true
};
mxGraph.prototype.isCellBendable = function (a) {
    var b = this.view.getState(a), b = b != null ? b.style : this.getCellStyle(a);
    return this.isCellsBendable() && !this.isCellLocked(a) && b[mxConstants.STYLE_BENDABLE] != 0
};
mxGraph.prototype.isCellsBendable = function () {
    return this.cellsBendable
};
mxGraph.prototype.setCellsBendable = function (a) {
    this.cellsBendable = a
};
mxGraph.prototype.isCellEditable = function (a) {
    var b = this.view.getState(a), b = b != null ? b.style : this.getCellStyle(a);
    return this.isCellsEditable() && !this.isCellLocked(a) && b[mxConstants.STYLE_EDITABLE] != 0
};
mxGraph.prototype.isCellsEditable = function () {
    return this.cellsEditable
};
mxGraph.prototype.setCellsEditable = function (a) {
    this.cellsEditable = a
};
mxGraph.prototype.isCellDisconnectable = function (a) {
    return this.isCellsDisconnectable() && !this.isCellLocked(a)
};
mxGraph.prototype.isCellsDisconnectable = function () {
    return this.cellsDisconnectable
};
mxGraph.prototype.setCellsDisconnectable = function (a) {
    this.cellsDisconnectable = a
};
mxGraph.prototype.isValidSource = function (a) {
    return a == null && this.allowDanglingEdges || a != null && (!this.model.isEdge(a) || this.connectableEdges) && this.isCellConnectable(a)
};
mxGraph.prototype.isValidTarget = function (a) {
    return this.isValidSource(a)
};
mxGraph.prototype.isValidConnection = function (a, b) {
    return this.isValidSource(a) && this.isValidTarget(b)
};
mxGraph.prototype.setConnectable = function (a) {
    this.connectionHandler.setEnabled(a)
};
mxGraph.prototype.isConnectable = function () {
    return this.connectionHandler.isEnabled()
};
mxGraph.prototype.setTooltips = function (a) {
    this.tooltipHandler.setEnabled(a)
};
mxGraph.prototype.setPanning = function (a) {
    this.panningHandler.panningEnabled = a
};
mxGraph.prototype.isEditing = function (a) {
    if (this.cellEditor != null) {
        var b = this.cellEditor.getEditingCell();
        return a == null ? b != null : a == b
    }
    return false
};
mxGraph.prototype.isAutoSizeCell = function (a) {
    var b = this.view.getState(a), a = b != null ? b.style : this.getCellStyle(a);
    return this.isAutoSizeCells() || a[mxConstants.STYLE_AUTOSIZE] == 1
};
mxGraph.prototype.isAutoSizeCells = function () {
    return this.autoSizeCells
};
mxGraph.prototype.setAutoSizeCells = function (a) {
    this.autoSizeCells = a
};
mxGraph.prototype.isExtendParent = function (a) {
    return!this.getModel().isEdge(a) && this.isExtendParents()
};
mxGraph.prototype.isExtendParents = function () {
    return this.extendParents
};
mxGraph.prototype.setExtendParents = function (a) {
    this.extendParents = a
};
mxGraph.prototype.isExtendParentsOnAdd = function () {
    return this.extendParentsOnAdd
};
mxGraph.prototype.setExtendParentsOnAdd = function (a) {
    this.extendParentsOnAdd = a
};
mxGraph.prototype.isConstrainChild = function (a) {
    return this.isConstrainChildren() && !this.getModel().isEdge(this.getModel().getParent(a))
};
mxGraph.prototype.isConstrainChildren = function () {
    return this.constrainChildren
};
mxGraph.prototype.setConstrainChildren = function (a) {
    this.constrainChildren = a
};
mxGraph.prototype.isAllowNegativeCoordinates = function () {
    return this.allowNegativeCoordinates
};
mxGraph.prototype.setAllowNegativeCoordinates = function (a) {
    this.allowNegativeCoordinates = a
};
mxGraph.prototype.getOverlap = function (a) {
    return this.isAllowOverlapParent(a) ? this.defaultOverlap : 0
};
mxGraph.prototype.isAllowOverlapParent = function () {
    return false
};
mxGraph.prototype.getFoldableCells = function (a, b) {
    return this.model.filterCells(a, mxUtils.bind(this, function (a) {
        return this.isCellFoldable(a, b)
    }))
};
mxGraph.prototype.isCellFoldable = function (a) {
    var b = this.view.getState(a), b = b != null ? b.style : this.getCellStyle(a);
    return this.model.getChildCount(a) > 0 && b[mxConstants.STYLE_FOLDABLE] != 0
};
mxGraph.prototype.isValidDropTarget = function (a, b, c) {
    return a != null && (this.isSplitEnabled() && this.isSplitTarget(a, b, c) || !this.model.isEdge(a) && (this.isSwimlane(a) || this.model.getChildCount(a) > 0 && !this.isCellCollapsed(a)))
};
mxGraph.prototype.isSplitTarget = function (a, b) {
    if (this.model.isEdge(a) && b != null && b.length == 1 && this.isCellConnectable(b[0]) && this.getEdgeValidationError(a, this.model.getTerminal(a, true), b[0]) == null) {
        var c = this.model.getTerminal(a, true), d = this.model.getTerminal(a, false);
        return!this.model.isAncestor(b[0], c) && !this.model.isAncestor(b[0], d)
    }
    return false
};
mxGraph.prototype.getDropTarget = function (a, b, c) {
    if (!this.isSwimlaneNesting())for (var d = 0; d < a.length; d++)if (this.isSwimlane(a[d]))return null;
    d = mxUtils.convertPoint(this.container, mxEvent.getClientX(b), mxEvent.getClientY(b));
    d.x = d.x - this.panDx;
    d.y = d.y - this.panDy;
    d = this.getSwimlaneAt(d.x, d.y);
    if (c == null)c = d; else if (d != null) {
        for (var e = this.model.getParent(d); e != null && this.isSwimlane(e) && e != c;)e = this.model.getParent(e);
        e == c && (c = d)
    }
    for (; c != null && !this.isValidDropTarget(c, a, b) && !this.model.isLayer(c);)c =
        this.model.getParent(c);
    return!this.model.isLayer(c) && mxUtils.indexOf(a, c) < 0 ? c : null
};
mxGraph.prototype.getDefaultParent = function () {
    var a = this.defaultParent;
    if (a == null) {
        a = this.getCurrentRoot();
        a == null && (a = this.model.getChildAt(this.model.getRoot(), 0))
    }
    return a
};
mxGraph.prototype.setDefaultParent = function (a) {
    this.defaultParent = a
};
mxGraph.prototype.getSwimlane = function (a) {
    for (; a != null && !this.isSwimlane(a);)a = this.model.getParent(a);
    return a
};
mxGraph.prototype.getSwimlaneAt = function (a, b, c) {
    c = c || this.getDefaultParent();
    if (c != null)for (var d = this.model.getChildCount(c), e = 0; e < d; e++) {
        var f = this.model.getChildAt(c, e), g = this.getSwimlaneAt(a, b, f);
        if (g != null)return g;
        if (this.isSwimlane(f) && this.intersects(this.view.getState(f), a, b))return f
    }
    return null
};
mxGraph.prototype.getCellAt = function (a, b, c, d, e) {
    d = d != null ? d : true;
    e = e != null ? e : true;
    c = c != null ? c : this.getDefaultParent();
    if (c != null)for (var f = this.model.getChildCount(c) - 1; f >= 0; f--) {
        var g = this.model.getChildAt(c, f), h = this.getCellAt(a, b, g, d, e);
        if (h != null)return h;
        if (this.isCellVisible(g) && (e && this.model.isEdge(g) || d && this.model.isVertex(g)) && this.intersects(this.view.getState(g), a, b))return g
    }
    return null
};
mxGraph.prototype.intersects = function (a, b, c) {
    if (a != null) {
        var d = a.absolutePoints;
        if (d != null)for (var a = this.tolerance * this.tolerance, e = d[0], f = 1; f < d.length; f++) {
            var g = d[f];
            if (mxUtils.ptSegDistSq(e.x, e.y, g.x, g.y, b, c) <= a)return true;
            e = g
        } else if (mxUtils.contains(a, b, c))return true
    }
    return false
};
mxGraph.prototype.hitsSwimlaneContent = function (a, b, c) {
    var d = this.getView().getState(a), a = this.getStartSize(a);
    if (d != null) {
        var e = this.getView().getScale(), b = b - d.x, c = c - d.y;
        if (a.width > 0 && b > 0 && b > a.width * e || a.height > 0 && c > 0 && c > a.height * e)return true
    }
    return false
};
mxGraph.prototype.getChildVertices = function (a) {
    return this.getChildCells(a, true, false)
};
mxGraph.prototype.getChildEdges = function (a) {
    return this.getChildCells(a, false, true)
};
mxGraph.prototype.getChildCells = function (a, b, c) {
    a = a != null ? a : this.getDefaultParent();
    a = this.model.getChildCells(a, b != null ? b : false, c != null ? c : false);
    b = [];
    for (c = 0; c < a.length; c++)this.isCellVisible(a[c]) && b.push(a[c]);
    return b
};
mxGraph.prototype.getConnections = function (a, b) {
    return this.getEdges(a, b, true, true, false)
};
mxGraph.prototype.getIncomingEdges = function (a, b) {
    return this.getEdges(a, b, true, false, false)
};
mxGraph.prototype.getOutgoingEdges = function (a, b) {
    return this.getEdges(a, b, false, true, false)
};
mxGraph.prototype.getEdges = function (a, b, c, d, e, f) {
    for (var c = c != null ? c : true, d = d != null ? d : true, e = e != null ? e : true, f = f != null ? f : false, g = [], h = this.isCellCollapsed(a), k = this.model.getChildCount(a), i = 0; i < k; i++) {
        var l = this.model.getChildAt(a, i);
        if (h || !this.isCellVisible(l))g = g.concat(this.model.getEdges(l, c, d))
    }
    g = g.concat(this.model.getEdges(a, c, d));
    h = [];
    for (i = 0; i < g.length; i++) {
        l = this.view.getState(g[i]);
        k = l != null ? l.getVisibleTerminal(true) : this.view.getVisibleTerminal(g[i], true);
        l = l != null ? l.getVisibleTerminal(false) :
            this.view.getVisibleTerminal(g[i], false);
        (e && k == l || k != l && (c && l == a && (b == null || this.isValidAncestor(k, b, f)) || d && k == a && (b == null || this.isValidAncestor(l, b, f)))) && h.push(g[i])
    }
    return h
};
mxGraph.prototype.isValidAncestor = function (a, b, c) {
    return c ? this.model.isAncestor(b, a) : this.model.getParent(a) == b
};
mxGraph.prototype.getOpposites = function (a, b, c, d) {
    var c = c != null ? c : true, d = d != null ? d : true, e = [], f = {};
    if (a != null)for (var g = 0; g < a.length; g++) {
        var h = this.view.getState(a[g]), k = h != null ? h.getVisibleTerminal(true) : this.view.getVisibleTerminal(a[g], true), h = h != null ? h.getVisibleTerminal(false) : this.view.getVisibleTerminal(a[g], false);
        if (k == b && h != null && h != b && d) {
            var i = mxCellPath.create(h);
            if (f[i] == null) {
                f[i] = h;
                e.push(h)
            }
        } else if (h == b && k != null && k != b && c) {
            i = mxCellPath.create(k);
            if (f[i] == null) {
                f[i] = k;
                e.push(k)
            }
        }
    }
    return e
};
mxGraph.prototype.getEdgesBetween = function (a, b, c) {
    for (var c = c != null ? c : false, d = this.getEdges(a), e = [], f = 0; f < d.length; f++) {
        var g = this.view.getState(d[f]), h = g != null ? g.getVisibleTerminal(true) : this.view.getVisibleTerminal(d[f], true), g = g != null ? g.getVisibleTerminal(false) : this.view.getVisibleTerminal(d[f], false);
        (h == a && g == b || !c && h == b && g == a) && e.push(d[f])
    }
    return e
};
mxGraph.prototype.getPointForEvent = function (a, b) {
    var c = mxUtils.convertPoint(this.container, mxEvent.getClientX(a), mxEvent.getClientY(a)), d = this.view.scale, e = this.view.translate, f = b != false ? this.gridSize / 2 : 0;
    c.x = this.snap(c.x / d - e.x - f);
    c.y = this.snap(c.y / d - e.y - f);
    return c
};
mxGraph.prototype.getCells = function (a, b, c, d, e, f) {
    f = f != null ? f : [];
    if (c > 0 || d > 0) {
        var g = a + c, h = b + d, e = e || this.getDefaultParent();
        if (e != null)for (var k = this.model.getChildCount(e), i = 0; i < k; i++) {
            var l = this.model.getChildAt(e, i), n = this.view.getState(l);
            this.isCellVisible(l) && n != null && (n.x >= a && n.y >= b && n.x + n.width <= g && n.y + n.height <= h ? f.push(l) : this.getCells(a, b, c, d, l, f))
        }
    }
    return f
};
mxGraph.prototype.getCellsBeyond = function (a, b, c, d, e) {
    var f = [];
    if (d || e) {
        c == null && (c = this.getDefaultParent());
        if (c != null)for (var g = this.model.getChildCount(c), h = 0; h < g; h++) {
            var k = this.model.getChildAt(c, h), i = this.view.getState(k);
            this.isCellVisible(k) && i != null && (!d || i.x >= a) && (!e || i.y >= b) && f.push(k)
        }
    }
    return f
};
mxGraph.prototype.findTreeRoots = function (a, b, c) {
    var b = b != null ? b : false, c = c != null ? c : false, d = [];
    if (a != null) {
        for (var e = this.getModel(), f = e.getChildCount(a), g = null, h = 0, k = 0; k < f; k++) {
            var i = e.getChildAt(a, k);
            if (this.model.isVertex(i) && this.isCellVisible(i)) {
                for (var l = this.getConnections(i, b ? a : null), n = 0, m = 0, o = 0; o < l.length; o++)this.view.getVisibleTerminal(l[o], true) == i ? n++ : m++;
                (c && n == 0 && m > 0 || !c && m == 0 && n > 0) && d.push(i);
                l = c ? m - n : n - m;
                if (l > h) {
                    h = l;
                    g = i
                }
            }
        }
        d.length == 0 && g != null && d.push(g)
    }
    return d
};
mxGraph.prototype.traverse = function (a, b, c, d, e) {
    if (c != null && a != null) {
        var b = b != null ? b : true, e = e || [], f = mxCellPath.create(a);
        if (e[f] == null) {
            e[f] = a;
            d = c(a, d);
            if (d == null || d) {
                d = this.model.getEdgeCount(a);
                if (d > 0)for (f = 0; f < d; f++) {
                    var g = this.model.getEdgeAt(a, f), h = this.model.getTerminal(g, true) == a;
                    (!b || h) && this.traverse(this.model.getTerminal(g, !h), b, c, g, e)
                }
            }
        }
    }
};
mxGraph.prototype.isCellSelected = function (a) {
    return this.getSelectionModel().isSelected(a)
};
mxGraph.prototype.isSelectionEmpty = function () {
    return this.getSelectionModel().isEmpty()
};
mxGraph.prototype.clearSelection = function () {
    return this.getSelectionModel().clear()
};
mxGraph.prototype.getSelectionCount = function () {
    return this.getSelectionModel().cells.length
};
mxGraph.prototype.getSelectionCell = function () {
    return this.getSelectionModel().cells[0]
};
mxGraph.prototype.getSelectionCells = function () {
    return this.getSelectionModel().cells.slice()
};
mxGraph.prototype.setSelectionCell = function (a) {
    this.getSelectionModel().setCell(a)
};
mxGraph.prototype.setSelectionCells = function (a) {
    this.getSelectionModel().setCells(a)
};
mxGraph.prototype.addSelectionCell = function (a) {
    this.getSelectionModel().addCell(a)
};
mxGraph.prototype.addSelectionCells = function (a) {
    this.getSelectionModel().addCells(a)
};
mxGraph.prototype.removeSelectionCell = function (a) {
    this.getSelectionModel().removeCell(a)
};
mxGraph.prototype.removeSelectionCells = function (a) {
    this.getSelectionModel().removeCells(a)
};
mxGraph.prototype.selectRegion = function (a, b) {
    var c = this.getCells(a.x, a.y, a.width, a.height);
    this.selectCellsForEvent(c, b);
    return c
};
mxGraph.prototype.selectNextCell = function () {
    this.selectCell(true)
};
mxGraph.prototype.selectPreviousCell = function () {
    this.selectCell()
};
mxGraph.prototype.selectParentCell = function () {
    this.selectCell(false, true)
};
mxGraph.prototype.selectChildCell = function () {
    this.selectCell(false, false, true)
};
mxGraph.prototype.selectCell = function (a, b, c) {
    var d = this.selectionModel, e = d.cells.length > 0 ? d.cells[0] : null;
    d.cells.length > 1 && d.clear();
    var d = e != null ? this.model.getParent(e) : this.getDefaultParent(), f = this.model.getChildCount(d);
    if (e == null && f > 0) {
        a = this.model.getChildAt(d, 0);
        this.setSelectionCell(a)
    } else if ((e == null || b) && this.view.getState(d) != null && this.model.getGeometry(d) != null)this.getCurrentRoot() != d && this.setSelectionCell(d); else if (e != null && c) {
        if (this.model.getChildCount(e) > 0) {
            a = this.model.getChildAt(e,
                0);
            this.setSelectionCell(a)
        }
    } else if (f > 0) {
        b = d.getIndex(e);
        if (a) {
            b++;
            a = this.model.getChildAt(d, b % f)
        } else {
            b--;
            a = this.model.getChildAt(d, b < 0 ? f - 1 : b)
        }
        this.setSelectionCell(a)
    }
};
mxGraph.prototype.selectAll = function (a) {
    a = a || this.getDefaultParent();
    a = this.model.getChildren(a);
    a != null && this.setSelectionCells(a)
};
mxGraph.prototype.selectVertices = function (a) {
    this.selectCells(true, false, a)
};
mxGraph.prototype.selectEdges = function (a) {
    this.selectCells(false, true, a)
};
mxGraph.prototype.selectCells = function (a, b, c) {
    c = c || this.getDefaultParent();
    this.setSelectionCells(this.model.filterDescendants(mxUtils.bind(this, function (c) {
        return this.view.getState(c) != null && this.model.getChildCount(c) == 0 && (this.model.isVertex(c) && a || this.model.isEdge(c) && b)
    }), c))
};
mxGraph.prototype.selectCellForEvent = function (a, b) {
    var c = this.isCellSelected(a);
    this.isToggleEvent(b) ? c ? this.removeSelectionCell(a) : this.addSelectionCell(a) : (!c || this.getSelectionCount() != 1) && this.setSelectionCell(a)
};
mxGraph.prototype.selectCellsForEvent = function (a, b) {
    this.isToggleEvent(b) ? this.addSelectionCells(a) : this.setSelectionCells(a)
};
mxGraph.prototype.createHandler = function (a) {
    var b = null;
    if (a != null)if (this.model.isEdge(a.cell)) {
        b = this.view.getEdgeStyle(a);
        b = this.isLoop(a) || b == mxEdgeStyle.ElbowConnector || b == mxEdgeStyle.SideToSide || b == mxEdgeStyle.TopToBottom ? new mxElbowEdgeHandler(a) : b == mxEdgeStyle.SegmentConnector || b == mxEdgeStyle.OrthConnector ? new mxEdgeSegmentHandler(a) : new mxEdgeHandler(a)
    } else b = new mxVertexHandler(a);
    return b
};
mxGraph.prototype.addMouseListener = function (a) {
    if (this.mouseListeners == null)this.mouseListeners = [];
    this.mouseListeners.push(a)
};
mxGraph.prototype.removeMouseListener = function (a) {
    if (this.mouseListeners != null)for (var b = 0; b < this.mouseListeners.length; b++)if (this.mouseListeners[b] == a) {
        this.mouseListeners.splice(b, 1);
        break
    }
};
mxGraph.prototype.updateMouseEvent = function (a) {
    if (a.graphX == null || a.graphY == null) {
        var b = mxUtils.convertPoint(this.container, a.getX(), a.getY());
        a.graphX = b.x - this.panDx;
        a.graphY = b.y - this.panDy
    }
};
mxGraph.prototype.fireMouseEvent = function (a, b, c) {
    c == null && (c = this);
    this.updateMouseEvent(b);
    if (a == mxEvent.MOUSE_DOWN)this.isMouseDown = true;
    if (mxClient.IS_TOUCH && this.doubleTapEnabled && a == mxEvent.MOUSE_DOWN) {
        var d = (new Date).getTime();
        if (d - this.lastTouchTime < this.doubleTapTimeout && Math.abs(this.lastTouchX - b.getX()) < this.doubleTapTolerance && Math.abs(this.lastTouchY - b.getY()) < this.doubleTapTolerance) {
            this.lastTouchTime = 0;
            this.dblClick(b.getEvent(), b.getCell());
            b.getEvent().cancelBubble = true
        } else {
            this.lastTouchX =
                b.getX();
            this.lastTouchY = b.getY();
            this.lastTouchTime = d
        }
    }
    d = b.getEvent().detail != 2;
    if (mxClient.IS_IE && document.compatMode == "CSS1Compat") {
        if (this.lastMouseX != null && Math.abs(this.lastMouseX - b.getX()) > this.doubleTapTolerance || this.lastMouseY != null && Math.abs(this.lastMouseY - b.getY()) > this.doubleTapTolerance)d = true;
        if (a == mxEvent.MOUSE_UP) {
            this.lastMouseX = b.getX();
            this.lastMouseY = b.getY()
        }
    }
    if ((a != mxEvent.MOUSE_UP || this.isMouseDown) && d) {
        if (a == mxEvent.MOUSE_UP)this.isMouseDown = false;
        if (!this.isEditing() && (mxClient.IS_OP ||
            mxClient.IS_SF || mxClient.IS_GC || mxClient.IS_IE && mxClient.IS_SVG || b.getEvent().target != this.container)) {
            a == mxEvent.MOUSE_MOVE && (this.isMouseDown && this.autoScroll) && this.scrollPointToVisible(b.getGraphX(), b.getGraphY(), this.autoExtend);
            if (this.mouseListeners != null) {
                c = [c, b];
                b.getEvent().returnValue = true;
                for (d = 0; d < this.mouseListeners.length; d++) {
                    var e = this.mouseListeners[d];
                    a == mxEvent.MOUSE_DOWN ? e.mouseDown.apply(e, c) : a == mxEvent.MOUSE_MOVE ? e.mouseMove.apply(e, c) : a == mxEvent.MOUSE_UP && e.mouseUp.apply(e,
                        c)
                }
            }
            a == mxEvent.MOUSE_UP && this.click(b)
        }
    } else if (a == mxEvent.MOUSE_UP)this.isMouseDown = false
};
mxGraph.prototype.destroy = function () {
    if (!this.destroyed) {
        this.destroyed = true;
        this.tooltipHandler != null && this.tooltipHandler.destroy();
        this.selectionCellsHandler != null && this.selectionCellsHandler.destroy();
        this.panningHandler != null && this.panningHandler.destroy();
        this.connectionHandler != null && this.connectionHandler.destroy();
        this.graphHandler != null && this.graphHandler.destroy();
        this.cellEditor != null && this.cellEditor.destroy();
        this.view != null && this.view.destroy();
        if (this.model != null && this.graphModelChangeListener !=
            null) {
            this.model.removeListener(this.graphModelChangeListener);
            this.graphModelChangeListener = null
        }
        this.container = null
    }
};
function mxConnectionConstraint(a, b) {
    this.point = a;
    this.perimeter = b != null ? b : true
}
mxConnectionConstraint.prototype.point = null;
mxConnectionConstraint.prototype.perimeter = null;
function mxGraphHandler(a) {
    this.graph = a;
    this.graph.addMouseListener(this);
    this.panHandler = mxUtils.bind(this, function () {
        this.updatePreviewShape()
    });
    this.graph.addListener(mxEvent.PAN, this.panHandler)
}
mxGraphHandler.prototype.graph = null;
mxGraphHandler.prototype.maxCells = mxClient.IS_IE ? 20 : 50;
mxGraphHandler.prototype.enabled = true;
mxGraphHandler.prototype.highlightEnabled = true;
mxGraphHandler.prototype.cloneEnabled = true;
mxGraphHandler.prototype.moveEnabled = true;
mxGraphHandler.prototype.guidesEnabled = false;
mxGraphHandler.prototype.guide = null;
mxGraphHandler.prototype.currentDx = null;
mxGraphHandler.prototype.currentDy = null;
mxGraphHandler.prototype.updateCursor = true;
mxGraphHandler.prototype.selectEnabled = true;
mxGraphHandler.prototype.removeCellsFromParent = true;
mxGraphHandler.prototype.connectOnDrop = false;
mxGraphHandler.prototype.scrollOnMove = true;
mxGraphHandler.prototype.minimumSize = 6;
mxGraphHandler.prototype.previewColor = "black";
mxGraphHandler.prototype.htmlPreview = false;
mxGraphHandler.prototype.shape = null;
mxGraphHandler.prototype.scaleGrid = false;
mxGraphHandler.prototype.rotationEnabled = true;
mxGraphHandler.prototype.isEnabled = function () {
    return this.enabled
};
mxGraphHandler.prototype.setEnabled = function (a) {
    this.enabled = a
};
mxGraphHandler.prototype.isCloneEnabled = function () {
    return this.cloneEnabled
};
mxGraphHandler.prototype.setCloneEnabled = function (a) {
    this.cloneEnabled = a
};
mxGraphHandler.prototype.isMoveEnabled = function () {
    return this.moveEnabled
};
mxGraphHandler.prototype.setMoveEnabled = function (a) {
    this.moveEnabled = a
};
mxGraphHandler.prototype.isSelectEnabled = function () {
    return this.selectEnabled
};
mxGraphHandler.prototype.setSelectEnabled = function (a) {
    this.selectEnabled = a
};
mxGraphHandler.prototype.isRemoveCellsFromParent = function () {
    return this.removeCellsFromParent
};
mxGraphHandler.prototype.setRemoveCellsFromParent = function (a) {
    this.removeCellsFromParent = a
};
mxGraphHandler.prototype.getInitialCellForEvent = function (a) {
    return a.getCell()
};
mxGraphHandler.prototype.isDelayedSelection = function (a) {
    return this.graph.isCellSelected(a)
};
mxGraphHandler.prototype.mouseDown = function (a, b) {
    if (!b.isConsumed() && this.isEnabled() && this.graph.isEnabled() && !this.graph.isForceMarqueeEvent(b.getEvent()) && b.getState() != null) {
        var c = this.getInitialCellForEvent(b);
        this.cell = null;
        this.delayedSelection = this.isDelayedSelection(c);
        this.isSelectEnabled() && !this.delayedSelection && this.graph.selectCellForEvent(c, b.getEvent());
        if (this.isMoveEnabled()) {
            var d = this.graph.model, e = d.getGeometry(c);
            this.graph.isCellMovable(c) && (!d.isEdge(c) || this.graph.getSelectionCount() >
                1 || e.points != null && e.points.length > 0 || d.getTerminal(c, true) == null || d.getTerminal(c, false) == null || this.graph.allowDanglingEdges || this.graph.isCloneEvent(b.getEvent()) && this.graph.isCellsCloneable()) && this.start(c, b.getX(), b.getY());
            this.cellWasClicked = true;
            if (!mxClient.IS_SF && !mxClient.IS_GC || b.getSource().nodeName != "SELECT")b.consume(); else if (mxClient.IS_SF && b.getSource().nodeName == "SELECT") {
                this.cellWasClicked = false;
                this.first = null
            }
        }
    }
};
mxGraphHandler.prototype.getGuideStates = function () {
    var a = this.graph.getDefaultParent(), b = this.graph.getModel(), c = mxUtils.bind(this, function (a) {
        return this.graph.view.getState(a) != null && b.isVertex(a) && b.getGeometry(a) != null && !b.getGeometry(a).relative
    });
    return this.graph.view.getCellStates(b.filterDescendants(c, a))
};
mxGraphHandler.prototype.getCells = function (a) {
    return!this.delayedSelection && this.graph.isCellMovable(a) ? [a] : this.graph.getMovableCells(this.graph.getSelectionCells())
};
mxGraphHandler.prototype.getPreviewBounds = function (a) {
    a = this.getBoundingBox(a);
    if (a != null) {
        a.grow(-1, -1);
        if (a.width < this.minimumSize) {
            a.x = a.x - (this.minimumSize - a.width) / 2;
            a.width = this.minimumSize
        }
        if (a.height < this.minimumSize) {
            a.y = a.y - (this.minimumSize - a.height) / 2;
            a.height = this.minimumSize
        }
    }
    return a
};
mxGraphHandler.prototype.getBoundingBox = function (a) {
    var b = null;
    if (a != null && a.length > 0)for (var c = this.graph.getModel(), d = 0; d < a.length; d++)if (c.isVertex(a[d]) || c.isEdge(a[d])) {
        var e = this.graph.view.getState(a[d]);
        if (e != null) {
            var f = e;
            if (c.isVertex(a[d]) && e.shape != null && e.shape.boundingBox != null)f = e.shape.boundingBox;
            b == null ? b = new mxRectangle(f.x, f.y, f.width, f.height) : b.add(f)
        }
    }
    return b
};
mxGraphHandler.prototype.createPreviewShape = function (a) {
    a = new mxRectangleShape(a, null, this.previewColor);
    a.isDashed = true;
    if (this.htmlPreview) {
        a.dialect = mxConstants.DIALECT_STRICTHTML;
        a.init(this.graph.container)
    } else {
        a.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_VML : mxConstants.DIALECT_SVG;
        a.init(this.graph.getView().getOverlayPane());
        a.pointerEvents = false
    }
    return a
};
mxGraphHandler.prototype.start = function (a, b, c) {
    this.cell = a;
    this.first = mxUtils.convertPoint(this.graph.container, b, c);
    this.cells = this.getCells(this.cell);
    this.bounds = this.graph.getView().getBounds(this.cells);
    this.pBounds = this.getPreviewBounds(this.cells);
    if (this.guidesEnabled)this.guide = new mxGuide(this.graph, this.getGuideStates())
};
mxGraphHandler.prototype.useGuidesForEvent = function (a) {
    return this.guide != null ? this.guide.isEnabledForEvent(a.getEvent()) : true
};
mxGraphHandler.prototype.snap = function (a) {
    var b = this.scaleGrid ? this.graph.view.scale : 1;
    a.x = this.graph.snap(a.x / b) * b;
    a.y = this.graph.snap(a.y / b) * b;
    return a
};
mxGraphHandler.prototype.mouseMove = function (a, b) {
    var c = this.graph;
    if (!b.isConsumed() && c.isMouseDown && this.cell != null && this.first != null && this.bounds != null) {
        var d = mxUtils.convertPoint(c.container, b.getX(), b.getY()), e = d.x - this.first.x, f = d.y - this.first.y, d = c.tolerance;
        if (this.shape != null || Math.abs(e) > d || Math.abs(f) > d) {
            if (this.highlight == null)this.highlight = new mxCellHighlight(this.graph, mxConstants.DROP_TARGET_COLOR, 3);
            if (this.shape == null)this.shape = this.createPreviewShape(this.bounds);
            var g = c.isGridEnabledEvent(b.getEvent()),
                d = true;
            if (this.guide != null && this.useGuidesForEvent(b)) {
                f = this.guide.move(this.bounds, new mxPoint(e, f), g);
                d = false;
                e = f.x;
                f = f.y
            } else if (g)var h = c.getView().translate, k = c.getView().scale, g = this.bounds.x - (c.snap(this.bounds.x / k - h.x) + h.x) * k, h = this.bounds.y - (c.snap(this.bounds.y / k - h.y) + h.y) * k, f = this.snap(new mxPoint(e, f)), e = f.x - g, f = f.y - h;
            this.guide != null && d && this.guide.hide();
            c.isConstrainedEvent(b.getEvent()) && (Math.abs(e) > Math.abs(f) ? f = 0 : e = 0);
            this.currentDx = e;
            this.currentDy = f;
            this.updatePreviewShape();
            e = null;
            d = b.getCell();
            c.isDropEnabled() && this.highlightEnabled && (e = c.getDropTarget(this.cells, b.getEvent(), d));
            f = e;
            for (g = c.getModel(); f != null && f != this.cells[0];)f = g.getParent(f);
            var h = c.isCloneEvent(b.getEvent()) && c.isCellsCloneable() && this.isCloneEnabled(), k = c.getView().getState(e), i = false;
            if (k != null && f == null && (g.getParent(this.cell) != e || h)) {
                if (this.target != e) {
                    this.target = e;
                    this.setHighlightColor(mxConstants.DROP_TARGET_COLOR)
                }
                i = true
            } else {
                this.target = null;
                if (this.connectOnDrop && d != null && this.cells.length ==
                    1 && c.getModel().isVertex(d) && c.isCellConnectable(d)) {
                    k = c.getView().getState(d);
                    if (k != null) {
                        this.setHighlightColor(c.getEdgeValidationError(null, this.cell, d) == null ? mxConstants.VALID_COLOR : mxConstants.INVALID_CONNECT_TARGET_COLOR);
                        i = true
                    }
                }
            }
            k != null && i ? this.highlight.highlight(k) : this.highlight.hide()
        }
        b.consume();
        mxEvent.consume(b.getEvent())
    } else if ((this.isMoveEnabled() || this.isCloneEnabled()) && this.updateCursor && !b.isConsumed() && b.getState() != null && !c.isMouseDown) {
        e = c.getCursorForCell(b.getCell());
        e == null && (c.isEnabled() && c.isCellMovable(b.getCell())) && (e = c.getModel().isEdge(b.getCell()) ? mxConstants.CURSOR_MOVABLE_EDGE : mxConstants.CURSOR_MOVABLE_VERTEX);
        b.getState().setCursor(e);
        b.consume()
    }
};
mxGraphHandler.prototype.updatePreviewShape = function () {
    if (this.shape != null) {
        this.shape.bounds = new mxRectangle(Math.round(this.pBounds.x + this.currentDx - this.graph.panDx), Math.round(this.pBounds.y + this.currentDy - this.graph.panDy), this.pBounds.width, this.pBounds.height);
        this.shape.redraw()
    }
};
mxGraphHandler.prototype.setHighlightColor = function (a) {
    this.highlight != null && this.highlight.setHighlightColor(a)
};
mxGraphHandler.prototype.mouseUp = function (a, b) {
    if (!b.isConsumed()) {
        var c = this.graph;
        if (this.cell != null && this.first != null && this.shape != null && this.currentDx != null && this.currentDy != null) {
            var d = c.getView().scale, e = c.isCloneEvent(b.getEvent()) && c.isCellsCloneable() && this.isCloneEnabled(), f = this.currentDx / d, d = this.currentDy / d, g = b.getCell();
            if (this.connectOnDrop && this.target == null && g != null && c.getModel().isVertex(g) && c.isCellConnectable(g) && c.isEdgeValid(null, this.cell, g))c.connectionHandler.connect(this.cell,
                g, b.getEvent()); else {
                g = this.target;
                c.isSplitEnabled() && c.isSplitTarget(g, this.cells, b.getEvent()) ? c.splitEdge(g, this.cells, null, f, d) : this.moveCells(this.cells, f, d, e, this.target, b.getEvent())
            }
        } else this.isSelectEnabled() && (this.delayedSelection && this.cell != null) && this.selectDelayed(b)
    }
    this.cellWasClicked && b.consume();
    this.reset()
};
mxGraphHandler.prototype.selectDelayed = function (a) {
    this.graph.selectCellForEvent(this.cell, a.getEvent())
};
mxGraphHandler.prototype.reset = function () {
    this.destroyShapes();
    this.delayedSelection = this.cellWasClicked = false;
    this.target = this.cell = this.first = this.guides = this.currentDy = this.currentDx = null
};
mxGraphHandler.prototype.shouldRemoveCellsFromParent = function (a, b, c) {
    if (this.graph.getModel().isVertex(a)) {
        a = this.graph.getView().getState(a);
        c = mxUtils.convertPoint(this.graph.container, mxEvent.getClientX(c), mxEvent.getClientY(c));
        return a != null && !mxUtils.contains(a, c.x, c.y)
    }
    return false
};
mxGraphHandler.prototype.moveCells = function (a, b, c, d, e, f) {
    d && (a = this.graph.getCloneableCells(a));
    e == null && (this.isRemoveCellsFromParent() && this.shouldRemoveCellsFromParent(this.graph.getModel().getParent(this.cell), a, f)) && (e = this.graph.getDefaultParent());
    a = this.graph.moveCells(a, b - this.graph.panDx / this.graph.view.scale, c - this.graph.panDy / this.graph.view.scale, d, e, f);
    this.isSelectEnabled() && this.scrollOnMove && this.graph.scrollCellToVisible(a[0]);
    d && this.graph.setSelectionCells(a)
};
mxGraphHandler.prototype.destroyShapes = function () {
    if (this.shape != null) {
        this.shape.destroy();
        this.shape = null
    }
    if (this.guide != null) {
        this.guide.destroy();
        this.guide = null
    }
    if (this.highlight != null) {
        this.highlight.destroy();
        this.highlight = null
    }
};
mxGraphHandler.prototype.destroy = function () {
    this.graph.removeMouseListener(this);
    this.graph.removeListener(this.panHandler);
    this.destroyShapes()
};
function mxPanningHandler(a, b) {
    if (a != null) {
        this.graph = a;
        this.factoryMethod = b;
        this.graph.addMouseListener(this);
        this.init()
    }
}
mxPanningHandler.prototype = new mxPopupMenu;
mxPanningHandler.prototype.constructor = mxPanningHandler;
mxPanningHandler.prototype.graph = null;
mxPanningHandler.prototype.triggerX = null;
mxPanningHandler.prototype.triggerY = null;
mxPanningHandler.prototype.usePopupTrigger = true;
mxPanningHandler.prototype.useLeftButtonForPanning = false;
mxPanningHandler.prototype.selectOnPopup = true;
mxPanningHandler.prototype.clearSelectionOnBackground = true;
mxPanningHandler.prototype.ignoreCell = false;
mxPanningHandler.prototype.previewEnabled = true;
mxPanningHandler.prototype.useGrid = false;
mxPanningHandler.prototype.panningEnabled = true;
mxPanningHandler.prototype.isPanningEnabled = function () {
    return this.panningEnabled
};
mxPanningHandler.prototype.setPanningEnabled = function (a) {
    this.panningEnabled = a
};
mxPanningHandler.prototype.init = function () {
    mxPopupMenu.prototype.init.apply(this);
    mxEvent.addListener(this.div, mxClient.IS_TOUCH ? "touchmove" : "mousemove", mxUtils.bind(this, function () {
        this.graph.tooltipHandler.hide()
    }))
};
mxPanningHandler.prototype.isPanningTrigger = function (a) {
    var b = a.getEvent();
    return this.useLeftButtonForPanning && (this.ignoreCell || a.getState() == null) && mxEvent.isLeftMouseButton(b) || mxEvent.isControlDown(b) && mxEvent.isShiftDown(b) || this.usePopupTrigger && mxEvent.isPopupTrigger(b)
};
mxPanningHandler.prototype.mouseDown = function (a, b) {
    if (!b.isConsumed() && this.isEnabled()) {
        this.hideMenu();
        this.dx0 = -this.graph.container.scrollLeft;
        this.dy0 = -this.graph.container.scrollTop;
        var c = mxUtils.convertPoint(this.graph.container, b.getX(), b.getY());
        this.triggerX = c.x;
        this.triggerY = c.y;
        this.popupTrigger = this.isPopupTrigger(b);
        this.panningTrigger = this.isPanningEnabled() && this.isPanningTrigger(b);
        this.startX = b.getX();
        this.startY = b.getY();
        this.panningTrigger && this.consumePanningTrigger(b)
    }
};
mxPanningHandler.prototype.consumePanningTrigger = function (a) {
    a.consume()
};
mxPanningHandler.prototype.mouseMove = function (a, b) {
    var c = b.getX() - this.startX, d = b.getY() - this.startY;
    if (this.active) {
        if (this.previewEnabled) {
            if (this.useGrid) {
                c = this.graph.snap(c);
                d = this.graph.snap(d)
            }
            this.graph.panGraph(c + this.dx0, d + this.dy0)
        }
        this.fireEvent(new mxEventObject(mxEvent.PAN, "event", b));
        b.consume()
    } else if (this.panningTrigger) {
        var e = this.active;
        this.active = Math.abs(c) > this.graph.tolerance || Math.abs(d) > this.graph.tolerance;
        !e && this.active && this.fireEvent(new mxEventObject(mxEvent.PAN_START,
            "event", b))
    }
};
mxPanningHandler.prototype.mouseUp = function (a, b) {
    var c = Math.abs(b.getX() - this.startX), d = Math.abs(b.getY() - this.startY);
    if (this.active) {
        if (!this.graph.useScrollbarsForPanning || !mxUtils.hasScrollbars(this.graph.container)) {
            c = b.getX() - this.startX;
            d = b.getY() - this.startY;
            if (this.useGrid) {
                c = this.graph.snap(c);
                d = this.graph.snap(d)
            }
            var e = this.graph.getView().scale, f = this.graph.getView().translate;
            this.graph.panGraph(0, 0);
            this.panGraph(f.x + c / e, f.y + d / e)
        }
        this.active = false;
        this.fireEvent(new mxEventObject(mxEvent.PAN_END, "event",
            b));
        b.consume()
    } else if (this.popupTrigger && c < this.graph.tolerance && d < this.graph.tolerance) {
        c = this.getCellForPopupEvent(b);
        this.graph.isEnabled() && this.selectOnPopup && c != null && !this.graph.isCellSelected(c) ? this.graph.setSelectionCell(c) : this.clearSelectionOnBackground && c == null && this.graph.clearSelection();
        this.graph.tooltipHandler.hide();
        d = mxUtils.getScrollOrigin();
        d = new mxPoint(b.getX() + d.x, b.getY() + d.y);
        this.popup(d.x + 1, d.y + 1, c, b.getEvent());
        b.consume()
    }
    this.popupTrigger = this.panningTrigger = false
};
mxPanningHandler.prototype.getCellForPopupEvent = function (a) {
    return a.getCell()
};
mxPanningHandler.prototype.panGraph = function (a, b) {
    this.graph.getView().setTranslate(a, b)
};
mxPanningHandler.prototype.destroy = function () {
    this.graph.removeMouseListener(this);
    mxPopupMenu.prototype.destroy.apply(this)
};
function mxCellMarker(a, b, c, d) {
    mxEventSource.call(this);
    if (a != null) {
        this.graph = a;
        this.validColor = b != null ? b : mxConstants.DEFAULT_VALID_COLOR;
        this.invalidColor = b != null ? c : mxConstants.DEFAULT_INVALID_COLOR;
        this.hotspot = d != null ? d : mxConstants.DEFAULT_HOTSPOT;
        this.highlight = new mxCellHighlight(a)
    }
}
mxUtils.extend(mxCellMarker, mxEventSource);
mxCellMarker.prototype.graph = null;
mxCellMarker.prototype.enabled = true;
mxCellMarker.prototype.hotspot = mxConstants.DEFAULT_HOTSPOT;
mxCellMarker.prototype.hotspotEnabled = false;
mxCellMarker.prototype.validColor = null;
mxCellMarker.prototype.invalidColor = null;
mxCellMarker.prototype.currentColor = null;
mxCellMarker.prototype.validState = null;
mxCellMarker.prototype.markedState = null;
mxCellMarker.prototype.setEnabled = function (a) {
    this.enabled = a
};
mxCellMarker.prototype.isEnabled = function () {
    return this.enabled
};
mxCellMarker.prototype.setHotspot = function (a) {
    this.hotspot = a
};
mxCellMarker.prototype.getHotspot = function () {
    return this.hotspot
};
mxCellMarker.prototype.setHotspotEnabled = function (a) {
    this.hotspotEnabled = a
};
mxCellMarker.prototype.isHotspotEnabled = function () {
    return this.hotspotEnabled
};
mxCellMarker.prototype.hasValidState = function () {
    return this.validState != null
};
mxCellMarker.prototype.getValidState = function () {
    return this.validState
};
mxCellMarker.prototype.getMarkedState = function () {
    return this.markedState
};
mxCellMarker.prototype.reset = function () {
    this.validState = null;
    if (this.markedState != null) {
        this.markedState = null;
        this.unmark()
    }
};
mxCellMarker.prototype.process = function (a) {
    var b = null;
    if (this.isEnabled()) {
        var b = this.getState(a), c = b != null ? this.isValidState(b) : false, a = this.getMarkerColor(a.getEvent(), b, c);
        this.validState = c ? b : null;
        if (b != this.markedState || a != this.currentColor) {
            this.currentColor = a;
            if (b != null && this.currentColor != null) {
                this.markedState = b;
                this.mark()
            } else if (this.markedState != null) {
                this.markedState = null;
                this.unmark()
            }
        }
    }
    return b
};
mxCellMarker.prototype.markCell = function (a, b) {
    var c = this.graph.getView().getState(a);
    if (c != null) {
        this.currentColor = b != null ? b : this.validColor;
        this.markedState = c;
        this.mark()
    }
};
mxCellMarker.prototype.mark = function () {
    this.highlight.setHighlightColor(this.currentColor);
    this.highlight.highlight(this.markedState);
    this.fireEvent(new mxEventObject(mxEvent.MARK, "state", this.markedState))
};
mxCellMarker.prototype.unmark = function () {
    this.mark()
};
mxCellMarker.prototype.isValidState = function () {
    return true
};
mxCellMarker.prototype.getMarkerColor = function (a, b, c) {
    return c ? this.validColor : this.invalidColor
};
mxCellMarker.prototype.getState = function (a) {
    var b = this.graph.getView();
    cell = this.getCell(a);
    b = this.getStateToMark(b.getState(cell));
    return b != null && this.intersects(b, a) ? b : null
};
mxCellMarker.prototype.getCell = function (a) {
    return a.getCell()
};
mxCellMarker.prototype.getStateToMark = function (a) {
    return a
};
mxCellMarker.prototype.intersects = function (a, b) {
    return this.hotspotEnabled ? mxUtils.intersectsHotspot(a, b.getGraphX(), b.getGraphY(), this.hotspot, mxConstants.MIN_HOTSPOT_SIZE, mxConstants.MAX_HOTSPOT_SIZE) : true
};
mxCellMarker.prototype.destroy = function () {
    this.graph.getView().removeListener(this.resetHandler);
    this.graph.getModel().removeListener(this.resetHandler);
    this.highlight.destroy()
};
function mxSelectionCellsHandler(a) {
    mxEventSource.call(this);
    this.graph = a;
    this.handlers = new mxDictionary;
    this.graph.addMouseListener(this);
    this.refreshHandler = mxUtils.bind(this, function () {
        this.isEnabled() && this.refresh()
    });
    this.graph.getSelectionModel().addListener(mxEvent.CHANGE, this.refreshHandler);
    this.graph.getModel().addListener(mxEvent.CHANGE, this.refreshHandler);
    this.graph.getView().addListener(mxEvent.SCALE, this.refreshHandler);
    this.graph.getView().addListener(mxEvent.TRANSLATE, this.refreshHandler);
    this.graph.getView().addListener(mxEvent.SCALE_AND_TRANSLATE, this.refreshHandler);
    this.graph.getView().addListener(mxEvent.DOWN, this.refreshHandler);
    this.graph.getView().addListener(mxEvent.UP, this.refreshHandler)
}
mxUtils.extend(mxSelectionCellsHandler, mxEventSource);
mxSelectionCellsHandler.prototype.graph = null;
mxSelectionCellsHandler.prototype.enabled = true;
mxSelectionCellsHandler.prototype.refreshHandler = null;
mxSelectionCellsHandler.prototype.maxHandlers = 100;
mxSelectionCellsHandler.prototype.handlers = null;
mxSelectionCellsHandler.prototype.isEnabled = function () {
    return this.enabled
};
mxSelectionCellsHandler.prototype.setEnabled = function (a) {
    this.enabled = a
};
mxSelectionCellsHandler.prototype.getHandler = function (a) {
    return this.handlers.get(a)
};
mxSelectionCellsHandler.prototype.reset = function () {
    this.handlers.visit(function (a, b) {
        b.reset.apply(b)
    })
};
mxSelectionCellsHandler.prototype.refresh = function () {
    var a = this.handlers;
    this.handlers = new mxDictionary;
    for (var b = this.graph.getSelectionCells(), c = 0; c < b.length; c++) {
        var d = this.graph.view.getState(b[c]);
        if (d != null) {
            var e = a.remove(b[c]);
            if (e != null)if (e.state != d) {
                e.destroy();
                e = null
            } else e.redraw();
            if (e == null) {
                e = this.graph.createHandler(d);
                this.fireEvent(new mxEventObject(mxEvent.ADD, "state", d))
            }
            e != null && this.handlers.put(b[c], e)
        }
    }
    a.visit(mxUtils.bind(this, function (a, b) {
        this.fireEvent(new mxEventObject(mxEvent.REMOVE,
            "state", b.state));
        b.destroy()
    }))
};
mxSelectionCellsHandler.prototype.mouseDown = function (a, b) {
    if (this.graph.isEnabled() && this.isEnabled()) {
        var c = [a, b];
        this.handlers.visit(function (a, b) {
            b.mouseDown.apply(b, c)
        })
    }
};
mxSelectionCellsHandler.prototype.mouseMove = function (a, b) {
    if (this.graph.isEnabled() && this.isEnabled()) {
        var c = [a, b];
        this.handlers.visit(function (a, b) {
            b.mouseMove.apply(b, c)
        })
    }
};
mxSelectionCellsHandler.prototype.mouseUp = function (a, b) {
    if (this.graph.isEnabled() && this.isEnabled()) {
        var c = [a, b];
        this.handlers.visit(function (a, b) {
            b.mouseUp.apply(b, c)
        })
    }
};
mxSelectionCellsHandler.prototype.destroy = function () {
    this.graph.removeMouseListener(this);
    if (this.refreshHandler != null) {
        this.graph.getSelectionModel().removeListener(this.refreshHandler);
        this.graph.getModel().removeListener(this.refreshHandler);
        this.graph.getView().removeListener(this.refreshHandler);
        this.refreshHandler = null
    }
};
function mxConnectionHandler(a, b) {
    mxEventSource.call(this);
    if (a != null) {
        this.graph = a;
        this.factoryMethod = b;
        this.init()
    }
}
mxUtils.extend(mxConnectionHandler, mxEventSource);
mxConnectionHandler.prototype.graph = null;
mxConnectionHandler.prototype.factoryMethod = true;
mxConnectionHandler.prototype.moveIconFront = false;
mxConnectionHandler.prototype.moveIconBack = false;
mxConnectionHandler.prototype.connectImage = null;
mxConnectionHandler.prototype.targetConnectImage = false;
mxConnectionHandler.prototype.enabled = true;
mxConnectionHandler.prototype.select = true;
mxConnectionHandler.prototype.createTarget = false;
mxConnectionHandler.prototype.marker = null;
mxConnectionHandler.prototype.constraintHandler = null;
mxConnectionHandler.prototype.error = null;
mxConnectionHandler.prototype.waypointsEnabled = false;
mxConnectionHandler.prototype.tapAndHoldEnabled = true;
mxConnectionHandler.prototype.tapAndHoldDelay = 500;
mxConnectionHandler.prototype.tapAndHoldInProgress = false;
mxConnectionHandler.prototype.tapAndHoldValid = false;
mxConnectionHandler.prototype.tapAndHoldTolerance = 4;
mxConnectionHandler.prototype.initialTouchX = 0;
mxConnectionHandler.prototype.initialTouchY = 0;
mxConnectionHandler.prototype.ignoreMouseDown = false;
mxConnectionHandler.prototype.first = null;
mxConnectionHandler.prototype.connectIconOffset = new mxPoint(0, mxConstants.TOOLTIP_VERTICAL_OFFSET);
mxConnectionHandler.prototype.edgeState = null;
mxConnectionHandler.prototype.changeHandler = null;
mxConnectionHandler.prototype.drillHandler = null;
mxConnectionHandler.prototype.mouseDownCounter = 0;
mxConnectionHandler.prototype.movePreviewAway = mxClient.IS_VML;
mxConnectionHandler.prototype.isEnabled = function () {
    return this.enabled
};
mxConnectionHandler.prototype.setEnabled = function (a) {
    this.enabled = a
};
mxConnectionHandler.prototype.isCreateTarget = function () {
    return this.createTarget
};
mxConnectionHandler.prototype.setCreateTarget = function (a) {
    this.createTarget = a
};
mxConnectionHandler.prototype.createShape = function () {
    var a = new mxPolyline([], mxConstants.INVALID_COLOR);
    a.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_VML : mxConstants.DIALECT_SVG;
    a.init(this.graph.getView().getOverlayPane());
    a.svgStrokeTolerance = 0;
    a.pointerEvents = false;
    a.isDashed = true;
    if (this.graph.dialect == mxConstants.DIALECT_SVG)a.node.setAttribute("pointer-events", "none"); else {
        var b = mxUtils.bind(this, function (a) {
            a = mxUtils.convertPoint(this.graph.container, mxEvent.getClientX(a),
                mxEvent.getClientY(a));
            return this.graph.view.getState(this.graph.getCellAt(a.x, a.y))
        });
        mxEvent.redirectMouseEvents(a.node, this.graph, b)
    }
    return a
};
mxConnectionHandler.prototype.init = function () {
    this.graph.addMouseListener(this);
    this.marker = this.createMarker();
    this.constraintHandler = new mxConstraintHandler(this.graph);
    this.changeHandler = mxUtils.bind(this, function () {
        if (this.iconState != null)this.iconState = this.graph.getView().getState(this.iconState.cell);
        if (this.iconState != null)this.redrawIcons(this.icons, this.iconState); else {
            this.destroyIcons(this.icons);
            this.previous = null
        }
        this.constraintHandler.reset()
    });
    this.graph.getModel().addListener(mxEvent.CHANGE,
        this.changeHandler);
    this.graph.getView().addListener(mxEvent.SCALE, this.changeHandler);
    this.graph.getView().addListener(mxEvent.TRANSLATE, this.changeHandler);
    this.graph.getView().addListener(mxEvent.SCALE_AND_TRANSLATE, this.changeHandler);
    this.drillHandler = mxUtils.bind(this, function () {
        this.destroyIcons(this.icons)
    });
    this.graph.addListener(mxEvent.START_EDITING, this.drillHandler);
    this.graph.getView().addListener(mxEvent.DOWN, this.drillHandler);
    this.graph.getView().addListener(mxEvent.UP, this.drillHandler)
};
mxConnectionHandler.prototype.isConnectableCell = function () {
    return true
};
mxConnectionHandler.prototype.createMarker = function () {
    var a = new mxCellMarker(this.graph);
    a.hotspotEnabled = true;
    a.getCell = mxUtils.bind(this, function (b, c) {
        c = mxCellMarker.prototype.getCell.apply(a, arguments);
        this.error = null;
        if (!this.isConnectableCell(c))return null;
        if (c != null)if (this.isConnecting()) {
            if (this.previous != null) {
                this.error = this.validateConnection(this.previous.cell, c);
                if (this.error != null && this.error.length == 0) {
                    c = null;
                    if (this.isCreateTarget())this.error = null
                }
            }
        } else this.isValidSource(c) || (c =
            null); else if (this.isConnecting() && !this.isCreateTarget() && !this.graph.allowDanglingEdges)this.error = "";
        return c
    });
    a.isValidState = mxUtils.bind(this, function (b) {
        return this.isConnecting() ? this.error == null : mxCellMarker.prototype.isValidState.apply(a, arguments)
    });
    a.getMarkerColor = mxUtils.bind(this, function (b, c, d) {
        return this.connectImage == null || this.isConnecting() ? mxCellMarker.prototype.getMarkerColor.apply(a, arguments) : null
    });
    a.intersects = mxUtils.bind(this, function (b, c) {
        return this.connectImage != null ||
            this.isConnecting() ? true : mxCellMarker.prototype.intersects.apply(a, arguments)
    });
    return a
};
mxConnectionHandler.prototype.start = function (a, b, c, d) {
    this.previous = a;
    this.first = new mxPoint(b, c);
    this.edgeState = d != null ? d : this.createEdgeState(null);
    this.marker.currentColor = this.marker.validColor;
    this.marker.markedState = a;
    this.marker.mark();
    this.fireEvent(new mxEventObject(mxEvent.START, "state", this.previous))
};
mxConnectionHandler.prototype.isConnecting = function () {
    return this.first != null && this.shape != null
};
mxConnectionHandler.prototype.isValidSource = function (a) {
    return this.graph.isValidSource(a)
};
mxConnectionHandler.prototype.isValidTarget = function () {
    return true
};
mxConnectionHandler.prototype.validateConnection = function (a, b) {
    return!this.isValidTarget(b) ? "" : this.graph.getEdgeValidationError(null, a, b)
};
mxConnectionHandler.prototype.getConnectImage = function () {
    return this.connectImage
};
mxConnectionHandler.prototype.isMoveIconToFrontForState = function (a) {
    return a.text != null && a.text.node.parentNode == this.graph.container ? true : this.moveIconFront
};
mxConnectionHandler.prototype.createIcons = function (a) {
    var b = this.getConnectImage(a);
    if (b != null && a != null) {
        this.iconState = a;
        var c = [], d = new mxRectangle(0, 0, b.width, b.height), e = new mxImageShape(d, b.src, null, null, 0);
        e.preserveImageAspect = false;
        if (this.isMoveIconToFrontForState(a)) {
            e.dialect = mxConstants.DIALECT_STRICTHTML;
            e.init(this.graph.container)
        } else {
            e.dialect = this.graph.dialect == mxConstants.DIALECT_SVG ? mxConstants.DIALECT_SVG : mxConstants.DIALECT_VML;
            e.init(this.graph.getView().getOverlayPane());
            this.moveIconBack &&
                e.node.previousSibling != null && e.node.parentNode.insertBefore(e.node, e.node.parentNode.firstChild)
        }
        e.node.style.cursor = mxConstants.CURSOR_CONNECT;
        var f = mxUtils.bind(this, function () {
            return this.currentState != null ? this.currentState : a
        }), b = mxUtils.bind(this, function (a) {
            if (!mxEvent.isConsumed(a)) {
                this.icon = e;
                this.graph.fireMouseEvent(mxEvent.MOUSE_DOWN, new mxMouseEvent(a, f()))
            }
        });
        mxEvent.redirectMouseEvents(e.node, this.graph, f, b);
        c.push(e);
        this.redrawIcons(c, this.iconState);
        return c
    }
    return null
};
mxConnectionHandler.prototype.redrawIcons = function (a, b) {
    if (a != null && a[0] != null && b != null) {
        var c = this.getIconPosition(a[0], b);
        a[0].bounds.x = c.x;
        a[0].bounds.y = c.y;
        a[0].redraw()
    }
};
mxConnectionHandler.prototype.getIconPosition = function (a, b) {
    var c = this.graph.getView().scale, d = b.getCenterX(), e = b.getCenterY();
    if (this.graph.isSwimlane(b.cell))var f = this.graph.getStartSize(b.cell), d = f.width != 0 ? b.x + f.width * c / 2 : d, e = f.height != 0 ? b.y + f.height * c / 2 : e;
    return new mxPoint(d - a.bounds.width / 2, e - a.bounds.height / 2)
};
mxConnectionHandler.prototype.destroyIcons = function (a) {
    if (a != null) {
        this.iconState = null;
        for (var b = 0; b < a.length; b++)a[b].destroy()
    }
};
mxConnectionHandler.prototype.isStartEvent = function (a) {
    return!this.graph.isForceMarqueeEvent(a.getEvent()) && (this.constraintHandler.currentFocus != null && this.constraintHandler.currentConstraint != null || this.previous != null && this.error == null && (this.icons == null || this.icons != null && this.icon != null))
};
mxConnectionHandler.prototype.mouseDown = function (a, b) {
    this.mouseDownCounter++;
    if (this.isEnabled() && this.graph.isEnabled() && !b.isConsumed() && !this.isConnecting() && this.isStartEvent(b)) {
        if (this.constraintHandler.currentConstraint != null && this.constraintHandler.currentFocus != null && this.constraintHandler.currentPoint != null) {
            this.sourceConstraint = this.constraintHandler.currentConstraint;
            this.previous = this.constraintHandler.currentFocus;
            this.first = this.constraintHandler.currentPoint.clone()
        } else this.first =
            new mxPoint(b.getGraphX(), b.getGraphY());
        this.edgeState = this.createEdgeState(b);
        this.mouseDownCounter = 1;
        if (this.waypointsEnabled && this.shape == null) {
            this.waypoints = null;
            this.shape = this.createShape()
        }
        this.previous == null && this.edgeState != null && this.edgeState.cell.geometry.setTerminalPoint(this.graph.getPointForEvent(b.getEvent()), true);
        this.fireEvent(new mxEventObject(mxEvent.START, "state", this.previous));
        b.consume()
    } else if (mxClient.IS_TOUCH && this.tapAndHoldEnabled && !this.tapAndHoldInProgress && this.isEnabled() &&
        this.graph.isEnabled() && !this.isConnecting()) {
        this.tapAndHoldInProgress = true;
        this.initialTouchX = b.getX();
        this.initialTouchY = b.getY();
        var c = this.graph.view.getState(this.marker.getCell(b));
        this.tapAndHoldThread && window.clearTimeout(this.tapAndHoldThread);
        this.tapAndHoldThread = window.setTimeout(mxUtils.bind(this, function () {
            this.tapAndHoldValid && this.tapAndHold(b, c);
            this.tapAndHoldValid = this.tapAndHoldInProgress = false
        }), this.tapAndHoldDelay);
        this.tapAndHoldValid = true
    }
    this.selectedIcon = this.icon;
    this.icon =
        null
};
mxConnectionHandler.prototype.tapAndHold = function (a, b) {
    if (b != null) {
        this.marker.currentColor = this.marker.validColor;
        this.marker.markedState = b;
        this.marker.mark();
        this.first = new mxPoint(a.getGraphX(), a.getGraphY());
        this.edgeState = this.createEdgeState(a);
        this.previous = b;
        this.fireEvent(new mxEventObject(mxEvent.START, "state", this.previous))
    }
};
mxConnectionHandler.prototype.isImmediateConnectSource = function (a) {
    return!this.graph.isCellMovable(a.cell)
};
mxConnectionHandler.prototype.createEdgeState = function () {
    return null
};
mxConnectionHandler.prototype.updateCurrentState = function (a) {
    var b = this.marker.process(a);
    this.constraintHandler.update(a, this.first == null);
    this.currentState = b
};
mxConnectionHandler.prototype.convertWaypoint = function (a) {
    var b = this.graph.getView().getScale(), c = this.graph.getView().getTranslate();
    a.x = a.x / b - c.x;
    a.y = a.y / b - c.y
};
mxConnectionHandler.prototype.mouseMove = function (a, b) {
    if (this.tapAndHoldValid)this.tapAndHoldValid = Math.abs(this.initialTouchX - b.getX()) < this.tapAndHoldTolerance && Math.abs(this.initialTouchY - b.getY()) < this.tapAndHoldTolerance;
    if (!b.isConsumed() && (this.ignoreMouseDown || this.first != null || !this.graph.isMouseDown)) {
        if (!this.isEnabled() && this.currentState != null) {
            this.destroyIcons(this.icons);
            this.currentState = null
        }
        (this.first != null || this.isEnabled() && this.graph.isEnabled()) && this.updateCurrentState(b);
        if (this.first != null) {
            var c = this.graph.getView().scale, c = new mxPoint(this.graph.snap(b.getGraphX() / c) * c, this.graph.snap(b.getGraphY() / c) * c), d = null, e = c;
            if (this.constraintHandler.currentConstraint != null && this.constraintHandler.currentFocus != null && this.constraintHandler.currentPoint != null) {
                d = this.constraintHandler.currentConstraint;
                e = this.constraintHandler.currentPoint.clone()
            }
            var f = this.first;
            if (this.selectedIcon != null) {
                var g = this.selectedIcon.bounds.width, h = this.selectedIcon.bounds.height;
                if (this.currentState !=
                    null && this.targetConnectImage) {
                    g = this.getIconPosition(this.selectedIcon, this.currentState);
                    this.selectedIcon.bounds.x = g.x;
                    this.selectedIcon.bounds.y = g.y
                } else this.selectedIcon.bounds = new mxRectangle(b.getGraphX() + this.connectIconOffset.x, b.getGraphY() + this.connectIconOffset.y, g, h);
                this.selectedIcon.redraw()
            }
            if (this.edgeState != null) {
                this.edgeState.absolutePoints = [null, this.currentState != null ? null : e];
                this.graph.view.updateFixedTerminalPoint(this.edgeState, this.previous, true, this.sourceConstraint);
                if (this.currentState !=
                    null) {
                    d == null && (d = this.graph.getConnectionConstraint(this.edgeState, this.previous, false));
                    this.edgeState.setAbsoluteTerminalPoint(null, false);
                    this.graph.view.updateFixedTerminalPoint(this.edgeState, this.currentState, false, d)
                }
                f = null;
                if (this.waypoints != null) {
                    f = [];
                    for (e = 0; e < this.waypoints.length; e++) {
                        d = this.waypoints[e].clone();
                        this.convertWaypoint(d);
                        f[e] = d
                    }
                }
                this.graph.view.updatePoints(this.edgeState, f, this.previous, this.currentState);
                this.graph.view.updateFloatingTerminalPoints(this.edgeState, this.previous,
                    this.currentState);
                e = this.edgeState.absolutePoints[this.edgeState.absolutePoints.length - 1];
                f = this.edgeState.absolutePoints[0]
            } else {
                if (this.currentState != null && this.constraintHandler.currentConstraint == null) {
                    g = this.getTargetPerimeterPoint(this.currentState, b);
                    g != null && (e = g)
                }
                if (this.sourceConstraint == null && this.previous != null) {
                    g = this.getSourcePerimeterPoint(this.previous, this.waypoints != null && this.waypoints.length > 0 ? this.waypoints[0] : e, b);
                    g != null && (f = g)
                }
            }
            if (this.currentState == null && this.movePreviewAway) {
                g =
                    f;
                if (this.edgeState != null && this.edgeState.absolutePoints.length > 2) {
                    d = this.edgeState.absolutePoints[this.edgeState.absolutePoints.length - 2];
                    d != null && (g = d)
                }
                d = e.x - g.x;
                g = e.y - g.y;
                h = Math.sqrt(d * d + g * g);
                if (h == 0)return;
                e.x = e.x - d * 4 / h;
                e.y = e.y - g * 4 / h
            }
            if (this.shape == null) {
                d = Math.abs(c.x - this.first.x);
                g = Math.abs(c.y - this.first.y);
                if (d > this.graph.tolerance || g > this.graph.tolerance) {
                    this.shape = this.createShape();
                    this.updateCurrentState(b)
                }
            }
            if (this.shape != null) {
                if (this.edgeState != null)this.shape.points = this.edgeState.absolutePoints;
                else {
                    c = [f];
                    this.waypoints != null && (c = c.concat(this.waypoints));
                    c.push(e);
                    this.shape.points = c
                }
                this.drawPreview()
            }
            mxEvent.consume(b.getEvent());
            b.consume()
        } else if (!this.isEnabled() || !this.graph.isEnabled())this.constraintHandler.reset(); else if (this.previous != this.currentState && this.edgeState == null) {
            this.destroyIcons(this.icons);
            this.icons = null;
            if (this.currentState != null && this.error == null) {
                this.icons = this.createIcons(this.currentState);
                if (this.icons == null) {
                    this.currentState.setCursor(mxConstants.CURSOR_CONNECT);
                    b.consume()
                }
            }
            this.previous = this.currentState
        } else this.previous == this.currentState && (this.currentState != null && this.icons == null && !this.graph.isMouseDown) && b.consume();
        this.constraintHandler.currentConstraint != null && this.marker.reset();
        if (!this.graph.isMouseDown && this.currentState != null && this.icons != null) {
            c = false;
            f = b.getSource();
            for (e = 0; e < this.icons.length && !c; e++)c = f == this.icons[e].node || f.parentNode == this.icons[e].node;
            c || this.updateIcons(this.currentState, this.icons, b)
        }
    } else this.constraintHandler.reset()
};
mxConnectionHandler.prototype.getTargetPerimeterPoint = function (a) {
    var b = null, c = a.view, d = c.getPerimeterFunction(a);
    if (d != null) {
        var e = this.waypoints != null && this.waypoints.length > 0 ? this.waypoints[this.waypoints.length - 1] : new mxPoint(this.previous.getCenterX(), this.previous.getCenterY()), a = d(c.getPerimeterBounds(a), this.edgeState, e, false);
        a != null && (b = a)
    } else b = new mxPoint(a.getCenterX(), a.getCenterY());
    return b
};
mxConnectionHandler.prototype.getSourcePerimeterPoint = function (a, b) {
    var c = null, d = a.view, e = d.getPerimeterFunction(a), f = new mxPoint(a.getCenterX(), a.getCenterY());
    if (e != null) {
        var g = mxUtils.getValue(a.style, mxConstants.STYLE_ROTATION, 0), h = -g * (Math.PI / 180);
        g != 0 && (b = mxUtils.getRotatedPoint(new mxPoint(b.x, b.y), Math.cos(h), Math.sin(h), f));
        d = e(d.getPerimeterBounds(a), a, b, false);
        if (d != null) {
            g != 0 && (d = mxUtils.getRotatedPoint(new mxPoint(d.x, d.y), Math.cos(-h), Math.sin(-h), f));
            c = d
        }
    } else c = f;
    return c
};
mxConnectionHandler.prototype.updateIcons = function () {
};
mxConnectionHandler.prototype.isStopEvent = function (a) {
    return a.getState() != null
};
mxConnectionHandler.prototype.addWaypointForEvent = function (a) {
    var b = mxUtils.convertPoint(this.graph.container, a.getX(), a.getY()), c = Math.abs(b.x - this.first.x), b = Math.abs(b.y - this.first.y);
    if (this.waypoints != null || this.mouseDownCounter > 1 && (c > this.graph.tolerance || b > this.graph.tolerance)) {
        if (this.waypoints == null)this.waypoints = [];
        c = this.graph.view.scale;
        b = new mxPoint(this.graph.snap(a.getGraphX() / c) * c, this.graph.snap(a.getGraphY() / c) * c);
        this.waypoints.push(b)
    }
};
mxConnectionHandler.prototype.mouseUp = function (a, b) {
    if (!b.isConsumed() && this.isConnecting()) {
        if (this.waypointsEnabled && !this.isStopEvent(b)) {
            this.addWaypointForEvent(b);
            b.consume();
            return
        }
        if (this.error == null) {
            var c = this.previous != null ? this.previous.cell : null, d = null;
            if (this.constraintHandler.currentConstraint != null && this.constraintHandler.currentFocus != null)d = this.constraintHandler.currentFocus.cell;
            if (d == null && this.marker.hasValidState())d = this.marker.validState.cell;
            this.connect(c, d, b.getEvent(),
                b.getCell())
        } else {
            this.previous != null && (this.marker.validState != null && this.previous.cell == this.marker.validState.cell) && this.graph.selectCellForEvent(this.marker.source, evt);
            this.error.length > 0 && this.graph.validationAlert(this.error)
        }
        this.destroyIcons(this.icons);
        b.consume()
    }
    this.first != null && this.reset();
    this.tapAndHoldValid = this.tapAndHoldInProgress = false
};
mxConnectionHandler.prototype.reset = function () {
    if (this.shape != null) {
        this.shape.destroy();
        this.shape = null
    }
    this.destroyIcons(this.icons);
    this.icons = null;
    this.marker.reset();
    this.constraintHandler.reset();
    this.sourceConstraint = this.error = this.previous = this.edgeState = this.selectedIcon = null;
    this.mouseDownCounter = 0;
    this.icon = this.first = null;
    this.fireEvent(new mxEventObject(mxEvent.RESET))
};
mxConnectionHandler.prototype.drawPreview = function () {
    var a = this.error == null;
    this.shape.strokewidth = this.getEdgeWidth(a);
    this.shape.stroke = this.getEdgeColor(a);
    this.shape.redraw()
};
mxConnectionHandler.prototype.getEdgeColor = function (a) {
    return a ? mxConstants.VALID_COLOR : mxConstants.INVALID_COLOR
};
mxConnectionHandler.prototype.getEdgeWidth = function (a) {
    return a ? 3 : 1
};
mxConnectionHandler.prototype.connect = function (a, b, c, d) {
    if (b != null || this.isCreateTarget() || this.graph.allowDanglingEdges) {
        var e = this.graph.getModel(), f = null;
        e.beginUpdate();
        try {
            if (a != null && b == null && this.isCreateTarget()) {
                b = this.createTargetVertex(c, a);
                if (b != null) {
                    d = this.graph.getDropTarget([b], c, d);
                    if (d == null || !this.graph.getModel().isEdge(d)) {
                        var g = this.graph.getView().getState(d);
                        if (g != null) {
                            var h = e.getGeometry(b);
                            h.x = h.x - g.origin.x;
                            h.y = h.y - g.origin.y
                        }
                    } else d = this.graph.getDefaultParent();
                    this.graph.addCell(b,
                        d)
                }
            }
            var k = this.graph.getDefaultParent();
            if (a != null && b != null && e.getParent(a) == e.getParent(b) && e.getParent(e.getParent(a)) != e.getRoot()) {
                k = e.getParent(a);
                a.geometry != null && a.geometry.relative && (b.geometry != null && b.geometry.relative) && (k = e.getParent(k))
            }
            h = g = null;
            if (this.edgeState != null) {
                g = this.edgeState.cell.value;
                h = this.edgeState.cell.style
            }
            f = this.insertEdge(k, null, g, a, b, h);
            if (f != null) {
                this.graph.setConnectionConstraint(f, a, true, this.sourceConstraint);
                this.graph.setConnectionConstraint(f, b, false, this.constraintHandler.currentConstraint);
                this.edgeState != null && e.setGeometry(f, this.edgeState.cell.geometry);
                var i = e.getGeometry(f);
                if (i == null) {
                    i = new mxGeometry;
                    i.relative = true;
                    e.setGeometry(f, i)
                }
                if (this.waypoints != null && this.waypoints.length > 0) {
                    var l = this.graph.view.scale, n = this.graph.view.translate;
                    i.points = [];
                    for (a = 0; a < this.waypoints.length; a++) {
                        var m = this.waypoints[a];
                        i.points.push(new mxPoint(m.x / l - n.x, m.y / l - n.y))
                    }
                }
                if (b == null) {
                    m = this.graph.getPointForEvent(c, false);
                    m.x = m.x - this.graph.panDx / this.graph.view.scale;
                    m.y = m.y - this.graph.panDy /
                        this.graph.view.scale;
                    i.setTerminalPoint(m, false)
                }
                this.fireEvent(new mxEventObject(mxEvent.CONNECT, "cell", f, "event", c, "target", d))
            }
        } catch (o) {
            mxLog.show();
            mxLog.debug(o.message)
        } finally {
            e.endUpdate()
        }
        this.select && this.selectCells(f, b)
    }
};
mxConnectionHandler.prototype.selectCells = function (a) {
    this.graph.setSelectionCell(a)
};
mxConnectionHandler.prototype.insertEdge = function (a, b, c, d, e, f) {
    if (this.factoryMethod == null)return this.graph.insertEdge(a, b, c, d, e, f);
    b = this.createEdge(c, d, e, f);
    return b = this.graph.addEdge(b, a, d, e)
};
mxConnectionHandler.prototype.createTargetVertex = function (a, b) {
    for (var c = this.graph.getCellGeometry(b); c != null && c.relative;) {
        b = this.graph.getModel().getParent(b);
        c = this.graph.getCellGeometry(b)
    }
    var d = this.graph.cloneCells([b])[0], c = this.graph.getModel().getGeometry(d);
    if (c != null) {
        var e = this.graph.getPointForEvent(a);
        c.x = this.graph.snap(e.x - c.width / 2) - this.graph.panDx / this.graph.view.scale;
        c.y = this.graph.snap(e.y - c.height / 2) - this.graph.panDy / this.graph.view.scale;
        if (this.first != null) {
            var f = this.graph.view.getState(b);
            if (f != null) {
                var g = this.getAlignmentTolerance();
                if (Math.abs(this.graph.snap(this.first.x) - this.graph.snap(e.x)) <= g)c.x = f.x; else if (Math.abs(this.graph.snap(this.first.y) - this.graph.snap(e.y)) <= g)c.y = f.y
            }
        }
    }
    return d
};
mxConnectionHandler.prototype.getAlignmentTolerance = function () {
    return this.graph.isGridEnabled() ? this.graph.gridSize : this.graph.tolerance
};
mxConnectionHandler.prototype.createEdge = function (a, b, c, d) {
    var e = null;
    this.factoryMethod != null && (e = this.factoryMethod(b, c, d));
    if (e == null) {
        e = new mxCell(a || "");
        e.setEdge(true);
        e.setStyle(d);
        a = new mxGeometry;
        a.relative = true;
        e.setGeometry(a)
    }
    return e
};
mxConnectionHandler.prototype.destroy = function () {
    this.graph.removeMouseListener(this);
    if (this.shape != null) {
        this.shape.destroy();
        this.shape = null
    }
    if (this.marker != null) {
        this.marker.destroy();
        this.marker = null
    }
    if (this.constraintHandler != null) {
        this.constraintHandler.destroy();
        this.constraintHandler = null
    }
    if (this.changeHandler != null) {
        this.graph.getModel().removeListener(this.changeHandler);
        this.graph.getView().removeListener(this.changeHandler);
        this.changeHandler = null
    }
    if (this.drillHandler != null) {
        this.graph.removeListener(this.drillHandler);
        this.graph.getView().removeListener(this.drillHandler);
        this.drillHandler = null
    }
};
function mxConstraintHandler(a) {
    this.graph = a
}
mxConstraintHandler.prototype.pointImage = new mxImage(mxClient.imageBasePath + "/point.gif", 5, 5);
mxConstraintHandler.prototype.graph = null;
mxConstraintHandler.prototype.enabled = true;
mxConstraintHandler.prototype.highlightColor = mxConstants.DEFAULT_VALID_COLOR;
mxConstraintHandler.prototype.isEnabled = function () {
    return this.enabled
};
mxConstraintHandler.prototype.setEnabled = function (a) {
    this.enabled = a
};
mxConstraintHandler.prototype.reset = function () {
    if (this.focusIcons != null) {
        for (var a = 0; a < this.focusIcons.length; a++)this.focusIcons[a].destroy();
        this.focusIcons = null
    }
    if (this.focusHighlight != null) {
        this.focusHighlight.destroy();
        this.focusHighlight = null
    }
    this.focusPoints = this.currentFocus = this.currentPoint = this.currentFocusArea = this.currentConstraint = null
};
mxConstraintHandler.prototype.getTolerance = function () {
    return this.graph.getTolerance()
};
mxConstraintHandler.prototype.getImageForConstraint = function () {
    return this.pointImage
};
mxConstraintHandler.prototype.isEventIgnored = function () {
    return false
};
mxConstraintHandler.prototype.update = function (a, b) {
    if (this.isEnabled() && !this.isEventIgnored(a)) {
        var c = this.getTolerance(), d = new mxRectangle(a.getGraphX() - c, a.getGraphY() - c, 2 * c, 2 * c), e = a.getCell() != null ? this.graph.isCellConnectable(a.getCell()) : false;
        if (this.currentFocusArea == null || !mxUtils.intersects(this.currentFocusArea, d) || a.getState() != null && this.currentFocus != null && e) {
            this.currentFocusArea = null;
            if (a.getState() != this.currentFocus) {
                this.currentFocus = null;
                this.constraints = a.getState() != null && e ?
                    this.graph.getAllConnectionConstraints(a.getState(), b) : null;
                if (this.constraints != null) {
                    this.currentFocus = a.getState();
                    this.currentFocusArea = new mxRectangle(a.getState().x, a.getState().y, a.getState().width, a.getState().height);
                    if (this.focusIcons != null) {
                        for (e = 0; e < this.focusIcons.length; e++)this.focusIcons[e].destroy();
                        this.focusPoints = this.focusIcons = null
                    }
                    this.focusIcons = [];
                    this.focusPoints = [];
                    for (e = 0; e < this.constraints.length; e++) {
                        var f = this.graph.getConnectionPoint(a.getState(), this.constraints[e]),
                            g = this.getImageForConstraint(a.getState(), this.constraints[e], f), h = g.src, g = new mxRectangle(f.x - g.width / 2, f.y - g.height / 2, g.width, g.height), g = new mxImageShape(g, h);
                        g.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_MIXEDHTML : mxConstants.DIALECT_SVG;
                        g.preserveImageAspect = false;
                        g.init(this.graph.getView().getOverlayPane());
                        g.node.previousSibling != null && g.node.parentNode.insertBefore(g.node, g.node.parentNode.firstChild);
                        h = mxUtils.bind(this, function () {
                            return this.currentFocus != null ?
                                this.currentFocus : a.getState()
                        });
                        g.redraw();
                        mxEvent.redirectMouseEvents(g.node, this.graph, h);
                        this.currentFocusArea.add(g.bounds);
                        this.focusIcons.push(g);
                        this.focusPoints.push(f)
                    }
                    this.currentFocusArea.grow(c)
                } else if (this.focusIcons != null) {
                    if (this.focusHighlight != null) {
                        this.focusHighlight.destroy();
                        this.focusHighlight = null
                    }
                    for (e = 0; e < this.focusIcons.length; e++)this.focusIcons[e].destroy();
                    this.focusPoints = this.focusIcons = null
                }
            }
        }
        this.currentPoint = this.currentConstraint = null;
        if (this.focusIcons != null &&
            this.constraints != null && (a.getState() == null || this.currentFocus == a.getState()))for (e = 0; e < this.focusIcons.length; e++)if (mxUtils.intersects(this.focusIcons[e].bounds, d)) {
            this.currentConstraint = this.constraints[e];
            this.currentPoint = this.focusPoints[e];
            c = this.focusIcons[e].bounds.clone();
            c.grow(mxClient.IS_IE ? 3 : 2);
            if (mxClient.IS_IE) {
                c.width = c.width - 1;
                c.height = c.height - 1
            }
            if (this.focusHighlight == null) {
                c = new mxRectangleShape(c, null, this.highlightColor, 3);
                c.dialect = this.graph.dialect == mxConstants.DIALECT_SVG ?
                    mxConstants.DIALECT_SVG : mxConstants.DIALECT_VML;
                c.init(this.graph.getView().getOverlayPane());
                this.focusHighlight = c;
                h = mxUtils.bind(this, function () {
                    return this.currentFocus != null ? this.currentFocus : a.getState()
                });
                mxEvent.redirectMouseEvents(c.node, this.graph, h)
            } else {
                this.focusHighlight.bounds = c;
                this.focusHighlight.redraw()
            }
            break
        }
        if (this.currentConstraint == null && this.focusHighlight != null) {
            this.focusHighlight.destroy();
            this.focusHighlight = null
        }
    }
};
mxConstraintHandler.prototype.destroy = function () {
    this.reset()
};
function mxTooltipHandler(a, b) {
    if (a != null) {
        this.graph = a;
        this.delay = b || 500;
        this.graph.addMouseListener(this)
    }
}
mxTooltipHandler.prototype.zIndex = 10005;
mxTooltipHandler.prototype.graph = null;
mxTooltipHandler.prototype.delay = null;
mxTooltipHandler.prototype.hideOnHover = false;
mxTooltipHandler.prototype.enabled = true;
mxTooltipHandler.prototype.isEnabled = function () {
    return this.enabled
};
mxTooltipHandler.prototype.setEnabled = function (a) {
    this.enabled = a
};
mxTooltipHandler.prototype.isHideOnHover = function () {
    return this.hideOnHover
};
mxTooltipHandler.prototype.setHideOnHover = function (a) {
    this.hideOnHover = a
};
mxTooltipHandler.prototype.init = function () {
    if (document.body != null) {
        this.div = document.createElement("div");
        this.div.className = "mxTooltip";
        this.div.style.visibility = "hidden";
        this.div.style.zIndex = this.zIndex;
        document.body.appendChild(this.div);
        mxEvent.addListener(this.div, "mousedown", mxUtils.bind(this, function () {
            this.hideTooltip()
        }))
    }
};
mxTooltipHandler.prototype.mouseDown = function (a, b) {
    this.reset(b, false);
    this.hideTooltip()
};
mxTooltipHandler.prototype.mouseMove = function (a, b) {
    if (b.getX() != this.lastX || b.getY() != this.lastY) {
        this.reset(b, true);
        (this.isHideOnHover() || b.getState() != this.state || b.getSource() != this.node && (!this.stateSource || b.getState() != null && this.stateSource == (b.isSource(b.getState().shape) || !b.isSource(b.getState().text)))) && this.hideTooltip()
    }
    this.lastX = b.getX();
    this.lastY = b.getY()
};
mxTooltipHandler.prototype.mouseUp = function (a, b) {
    this.reset(b, true);
    this.hideTooltip()
};
mxTooltipHandler.prototype.resetTimer = function () {
    if (this.thread != null) {
        window.clearTimeout(this.thread);
        this.thread = null
    }
};
mxTooltipHandler.prototype.reset = function (a, b) {
    this.resetTimer();
    if (b && this.isEnabled() && a.getState() != null && (this.div == null || this.div.style.visibility == "hidden")) {
        var c = a.getState(), d = a.getSource(), e = a.getX(), f = a.getY(), g = a.isSource(c.shape) || a.isSource(c.text);
        this.thread = window.setTimeout(mxUtils.bind(this, function () {
            if (!this.graph.isEditing() && !this.graph.panningHandler.isMenuShowing()) {
                this.show(this.graph.getTooltip(c, d, e, f), e, f);
                this.state = c;
                this.node = d;
                this.stateSource = g
            }
        }), this.delay)
    }
};
mxTooltipHandler.prototype.hide = function () {
    this.resetTimer();
    this.hideTooltip()
};
mxTooltipHandler.prototype.hideTooltip = function () {
    if (this.div != null)this.div.style.visibility = "hidden"
};
mxTooltipHandler.prototype.show = function (a, b, c) {
    if (a != null && a.length > 0) {
        this.div == null && this.init();
        var d = mxUtils.getScrollOrigin();
        this.div.style.left = b + d.x + "px";
        this.div.style.top = c + mxConstants.TOOLTIP_VERTICAL_OFFSET + d.y + "px";
        if (mxUtils.isNode(a)) {
            this.div.innerHTML = "";
            this.div.appendChild(a)
        } else this.div.innerHTML = a.replace(/\n/g, "<br>");
        this.div.style.visibility = "";
        mxUtils.fit(this.div)
    }
};
mxTooltipHandler.prototype.destroy = function () {
    this.graph.removeMouseListener(this);
    mxEvent.release(this.div);
    this.div != null && this.div.parentNode != null && this.div.parentNode.removeChild(this.div);
    this.div = null
};
function mxCellHighlight(a, b, c) {
    if (a != null) {
        this.graph = a;
        this.highlightColor = b != null ? b : mxConstants.DEFAULT_VALID_COLOR;
        this.strokeWidth = c != null ? c : mxConstants.HIGHLIGHT_STROKEWIDTH;
        this.repaintHandler = mxUtils.bind(this, function () {
            this.repaint()
        });
        this.graph.getView().addListener(mxEvent.SCALE, this.repaintHandler);
        this.graph.getView().addListener(mxEvent.TRANSLATE, this.repaintHandler);
        this.graph.getView().addListener(mxEvent.SCALE_AND_TRANSLATE, this.repaintHandler);
        this.graph.getModel().addListener(mxEvent.CHANGE,
            this.repaintHandler);
        this.resetHandler = mxUtils.bind(this, function () {
            this.hide()
        });
        this.graph.getView().addListener(mxEvent.DOWN, this.resetHandler);
        this.graph.getView().addListener(mxEvent.UP, this.resetHandler)
    }
}
mxCellHighlight.prototype.keepOnTop = false;
mxCellHighlight.prototype.graph = true;
mxCellHighlight.prototype.state = null;
mxCellHighlight.prototype.spacing = 2;
mxCellHighlight.prototype.resetHandler = null;
mxCellHighlight.prototype.setHighlightColor = function (a) {
    this.highlightColor = a;
    if (this.shape != null)this.shape.stroke = a
};
mxCellHighlight.prototype.drawHighlight = function () {
    this.shape = this.createShape();
    this.repaint();
    !this.keepOnTop && this.shape.node.parentNode.firstChild != this.shape.node && this.shape.node.parentNode.insertBefore(this.shape.node, this.shape.node.parentNode.firstChild)
};
mxCellHighlight.prototype.createShape = function () {
    var a = null, a = this.graph.model.isEdge(this.state.cell) ? new mxPolyline(this.state.absolutePoints, this.highlightColor, this.strokeWidth) : new mxRectangleShape(new mxRectangle, null, this.highlightColor, this.strokeWidth);
    a.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_VML : mxConstants.DIALECT_SVG;
    a.init(this.graph.getView().getOverlayPane());
    mxEvent.redirectMouseEvents(a.node, this.graph, this.state);
    a.svgStrokeTolerance = 0;
    a.pointerEvents =
        false;
    return a
};
mxCellHighlight.prototype.repaint = function () {
    if (this.state != null && this.shape != null) {
        var a = 0;
        if (this.graph.model.isEdge(this.state.cell))this.shape.points = this.state.absolutePoints; else {
            this.shape.bounds = new mxRectangle(this.state.x - this.spacing, this.state.y - this.spacing, this.state.width + 2 * this.spacing, this.state.height + 2 * this.spacing);
            a = Number(this.state.style[mxConstants.STYLE_ROTATION] || "0")
        }
        this.state.shape != null && this.shape.setCursor(this.state.shape.getCursor());
        if (a != 0)this.shape.rotation = a;
        this.shape.redraw()
    }
};
mxCellHighlight.prototype.hide = function () {
    this.highlight(null)
};
mxCellHighlight.prototype.highlight = function (a) {
    if (this.state != a) {
        if (this.shape != null) {
            this.shape.destroy();
            this.shape = null
        }
        this.state = a;
        this.state != null && this.drawHighlight()
    }
};
mxCellHighlight.prototype.destroy = function () {
    this.graph.getView().removeListener(this.repaintHandler);
    this.graph.getModel().removeListener(this.repaintHandler);
    this.graph.getView().removeListener(this.resetHandler);
    this.graph.getModel().removeListener(this.resetHandler);
    if (this.shape != null) {
        this.shape.destroy();
        this.shape = null
    }
};
var mxCodecRegistry = {codecs: [], aliases: [], register: function (a) {
    if (a != null) {
        var b = a.getName();
        mxCodecRegistry.codecs[b] = a;
        var c = mxUtils.getFunctionName(a.template.constructor);
        c != b && mxCodecRegistry.addAlias(c, b)
    }
    return a
}, addAlias: function (a, b) {
    mxCodecRegistry.aliases[a] = b
}, getCodec: function (a) {
    var b = null;
    if (a != null) {
        var b = mxUtils.getFunctionName(a), c = mxCodecRegistry.aliases[b];
        c != null && (b = c);
        b = mxCodecRegistry.codecs[b];
        if (b == null)try {
            b = new mxObjectCodec(new a);
            mxCodecRegistry.register(b)
        } catch (d) {
        }
    }
    return b
}};
function mxCodec(a) {
    this.document = a || mxUtils.createXmlDocument();
    this.objects = []
}
mxCodec.prototype.document = null;
mxCodec.prototype.objects = null;
mxCodec.prototype.encodeDefaults = false;
mxCodec.prototype.putObject = function (a, b) {
    return this.objects[a] = b
};
mxCodec.prototype.getObject = function (a) {
    var b = null;
    if (a != null) {
        b = this.objects[a];
        if (b == null) {
            b = this.lookup(a);
            if (b == null) {
                a = this.getElementById(a);
                a != null && (b = this.decode(a))
            }
        }
    }
    return b
};
mxCodec.prototype.lookup = function () {
    return null
};
mxCodec.prototype.getElementById = function (a, b) {
    return mxUtils.findNodeByAttribute(this.document.documentElement, b != null ? b : "id", a)
};
mxCodec.prototype.getId = function (a) {
    var b = null;
    if (a != null) {
        b = this.reference(a);
        if (b == null && a instanceof mxCell) {
            b = a.getId();
            if (b == null) {
                b = mxCellPath.create(a);
                b.length == 0 && (b = "root")
            }
        }
    }
    return b
};
mxCodec.prototype.reference = function () {
    return null
};
mxCodec.prototype.encode = function (a) {
    var b = null;
    if (a != null && a.constructor != null) {
        var c = mxCodecRegistry.getCodec(a.constructor);
        c != null ? b = c.encode(this, a) : mxUtils.isNode(a) ? b = mxClient.IS_IE ? a.cloneNode(true) : this.document.importNode(a, true) : mxLog.warn("mxCodec.encode: No codec for " + mxUtils.getFunctionName(a.constructor))
    }
    return b
};
mxCodec.prototype.decode = function (a, b) {
    var c = null;
    if (a != null && a.nodeType == mxConstants.NODETYPE_ELEMENT) {
        var d = null;
        try {
            d = eval(a.nodeName)
        } catch (e) {
        }
        try {
            var f = mxCodecRegistry.getCodec(d);
            if (f != null)c = f.decode(this, a, b); else {
                c = a.cloneNode(true);
                c.removeAttribute("as")
            }
        } catch (g) {
            mxLog.debug("Cannot decode " + a.nodeName + ": " + g.message)
        }
    }
    return c
};
mxCodec.prototype.encodeCell = function (a, b, c) {
    b.appendChild(this.encode(a));
    if (c == null || c)for (var c = a.getChildCount(), d = 0; d < c; d++)this.encodeCell(a.getChildAt(d), b)
};
mxCodec.prototype.isCellCodec = function (a) {
    return a != null && typeof a.isCellCodec == "function" ? a.isCellCodec() : false
};
mxCodec.prototype.decodeCell = function (a, b) {
    var b = b != null ? b : true, c = null;
    if (a != null && a.nodeType == mxConstants.NODETYPE_ELEMENT) {
        c = mxCodecRegistry.getCodec(a.nodeName);
        if (!this.isCellCodec(c))for (var d = a.firstChild; d != null && !this.isCellCodec(c);) {
            c = mxCodecRegistry.getCodec(d.nodeName);
            d = d.nextSibling
        }
        this.isCellCodec(c) || (c = mxCodecRegistry.getCodec(mxCell));
        c = c.decode(this, a);
        b && this.insertIntoGraph(c)
    }
    return c
};
mxCodec.prototype.insertIntoGraph = function (a) {
    var b = a.parent, c = a.getTerminal(true), d = a.getTerminal(false);
    a.setTerminal(null, false);
    a.setTerminal(null, true);
    a.parent = null;
    b != null && b.insert(a);
    c != null && c.insertEdge(a, true);
    d != null && d.insertEdge(a, false)
};
mxCodec.prototype.setAttribute = function (a, b, c) {
    b != null && c != null && a.setAttribute(b, c)
};
function mxObjectCodec(a, b, c, d) {
    this.template = a;
    this.exclude = b != null ? b : [];
    this.idrefs = c != null ? c : [];
    this.mapping = d != null ? d : [];
    this.reverse = {};
    for (var e in this.mapping)this.reverse[this.mapping[e]] = e
}
mxObjectCodec.prototype.template = null;
mxObjectCodec.prototype.exclude = null;
mxObjectCodec.prototype.idrefs = null;
mxObjectCodec.prototype.mapping = null;
mxObjectCodec.prototype.reverse = null;
mxObjectCodec.prototype.getName = function () {
    return mxUtils.getFunctionName(this.template.constructor)
};
mxObjectCodec.prototype.cloneTemplate = function () {
    return new this.template.constructor
};
mxObjectCodec.prototype.getFieldName = function (a) {
    if (a != null) {
        var b = this.reverse[a];
        b != null && (a = b)
    }
    return a
};
mxObjectCodec.prototype.getAttributeName = function (a) {
    if (a != null) {
        var b = this.mapping[a];
        b != null && (a = b)
    }
    return a
};
mxObjectCodec.prototype.isExcluded = function (a, b) {
    return b == mxObjectIdentity.FIELD_NAME || mxUtils.indexOf(this.exclude, b) >= 0
};
mxObjectCodec.prototype.isReference = function (a, b) {
    return mxUtils.indexOf(this.idrefs, b) >= 0
};
mxObjectCodec.prototype.encode = function (a, b) {
    var c = a.document.createElement(this.getName()), b = this.beforeEncode(a, b, c);
    this.encodeObject(a, b, c);
    return this.afterEncode(a, b, c)
};
mxObjectCodec.prototype.encodeObject = function (a, b, c) {
    a.setAttribute(c, "id", a.getId(b));
    for (var d in b) {
        var e = d, f = b[e];
        if (f != null && !this.isExcluded(b, e, f, true)) {
            mxUtils.isNumeric(e) && (e = null);
            this.encodeValue(a, b, e, f, c)
        }
    }
};
mxObjectCodec.prototype.encodeValue = function (a, b, c, d, e) {
    if (d != null) {
        if (this.isReference(b, c, d, true)) {
            var f = a.getId(d);
            if (f == null) {
                mxLog.warn("mxObjectCodec.encode: No ID for " + this.getName() + "." + c + "=" + d);
                return
            }
            d = f
        }
        f = this.template[c];
        if (c == null || a.encodeDefaults || f != d) {
            c = this.getAttributeName(c);
            this.writeAttribute(a, b, c, d, e)
        }
    }
};
mxObjectCodec.prototype.writeAttribute = function (a, b, c, d, e) {
    typeof d != "object" ? this.writePrimitiveAttribute(a, b, c, d, e) : this.writeComplexAttribute(a, b, c, d, e)
};
mxObjectCodec.prototype.writePrimitiveAttribute = function (a, b, c, d, e) {
    d = this.convertValueToXml(d);
    if (c == null) {
        b = a.document.createElement("add");
        typeof d == "function" ? b.appendChild(a.document.createTextNode(d)) : a.setAttribute(b, "value", d);
        e.appendChild(b)
    } else typeof d != "function" && a.setAttribute(e, c, d)
};
mxObjectCodec.prototype.writeComplexAttribute = function (a, b, c, d, e) {
    a = a.encode(d);
    if (a != null) {
        c != null && a.setAttribute("as", c);
        e.appendChild(a)
    } else mxLog.warn("mxObjectCodec.encode: No node for " + this.getName() + "." + c + ": " + d)
};
mxObjectCodec.prototype.convertValueToXml = function (a) {
    if (typeof a.length == "undefined" && (a == true || a == false))a = a == true ? "1" : "0";
    return a
};
mxObjectCodec.prototype.convertValueFromXml = function (a) {
    mxUtils.isNumeric(a) && (a = parseFloat(a));
    return a
};
mxObjectCodec.prototype.beforeEncode = function (a, b) {
    return b
};
mxObjectCodec.prototype.afterEncode = function (a, b, c) {
    return c
};
mxObjectCodec.prototype.decode = function (a, b, c) {
    var d = b.getAttribute("id"), e = a.objects[d];
    if (e == null) {
        e = c || this.cloneTemplate();
        d != null && a.putObject(d, e)
    }
    b = this.beforeDecode(a, b, e);
    this.decodeNode(a, b, e);
    return this.afterDecode(a, b, e)
};
mxObjectCodec.prototype.decodeNode = function (a, b, c) {
    if (b != null) {
        this.decodeAttributes(a, b, c);
        this.decodeChildren(a, b, c)
    }
};
mxObjectCodec.prototype.decodeAttributes = function (a, b, c) {
    b = b.attributes;
    if (b != null)for (var d = 0; d < b.length; d++)this.decodeAttribute(a, b[d], c)
};
mxObjectCodec.prototype.decodeAttribute = function (a, b, c) {
    var d = b.nodeName;
    if (d != "as" && d != "id") {
        var b = this.convertValueFromXml(b.nodeValue), e = this.getFieldName(d);
        if (this.isReference(c, e, b, false)) {
            a = a.getObject(b);
            if (a == null) {
                mxLog.warn("mxObjectCodec.decode: No object for " + this.getName() + "." + d + "=" + b);
                return
            }
            b = a
        }
        this.isExcluded(c, d, b, false) || (c[d] = b)
    }
};
mxObjectCodec.prototype.decodeChildren = function (a, b, c) {
    for (b = b.firstChild; b != null;) {
        var d = b.nextSibling;
        b.nodeType == mxConstants.NODETYPE_ELEMENT && !this.processInclude(a, b, c) && this.decodeChild(a, b, c);
        b = d
    }
};
mxObjectCodec.prototype.decodeChild = function (a, b, c) {
    var d = this.getFieldName(b.getAttribute("as"));
    if (d == null || !this.isExcluded(c, d, b, false)) {
        var e = this.getFieldTemplate(c, d, b), f = null;
        if (b.nodeName == "add") {
            f = b.getAttribute("value");
            f == null && (f = mxUtils.eval(mxUtils.getTextContent(b)))
        } else f = a.decode(b, e);
        this.addObjectValue(c, d, f, e)
    }
};
mxObjectCodec.prototype.getFieldTemplate = function (a, b) {
    var c = a[b];
    c instanceof Array && c.length > 0 && (c = null);
    return c
};
mxObjectCodec.prototype.addObjectValue = function (a, b, c, d) {
    c != null && c != d && (b != null && b.length > 0 ? a[b] = c : a.push(c))
};
mxObjectCodec.prototype.processInclude = function (a, b, c) {
    if (b.nodeName == "include") {
        b = b.getAttribute("name");
        if (b != null)try {
            var d = mxUtils.load(b).getDocumentElement();
            d != null && a.decode(d, c)
        } catch (e) {
        }
        return true
    }
    return false
};
mxObjectCodec.prototype.beforeDecode = function (a, b) {
    return b
};
mxObjectCodec.prototype.afterDecode = function (a, b, c) {
    return c
};
mxCodecRegistry.register(function () {
    var a = new mxObjectCodec(new mxCell, ["children", "edges", "overlays", "mxTransient"], ["parent", "source", "target"]);
    a.isCellCodec = function () {
        return true
    };
    a.isExcluded = function (a, c, d, e) {
        return mxObjectCodec.prototype.isExcluded.apply(this, arguments) || e && c == "value" && d.nodeType == mxConstants.NODETYPE_ELEMENT
    };
    a.afterEncode = function (a, c, d) {
        if (c.value != null && c.value.nodeType == mxConstants.NODETYPE_ELEMENT) {
            var e = d, d = mxClient.IS_IE ? c.value.cloneNode(true) : a.document.importNode(c.value,
                true);
            d.appendChild(e);
            a = e.getAttribute("id");
            d.setAttribute("id", a);
            e.removeAttribute("id")
        }
        return d
    };
    a.beforeDecode = function (a, c, d) {
        var e = c, f = this.getName();
        if (c.nodeName != f) {
            e = c.getElementsByTagName(f)[0];
            if (e != null && e.parentNode == c) {
                mxUtils.removeWhitespace(e, true);
                mxUtils.removeWhitespace(e, false);
                e.parentNode.removeChild(e)
            } else e = null;
            d.value = c.cloneNode(true);
            c = d.value.getAttribute("id");
            if (c != null) {
                d.setId(c);
                d.value.removeAttribute("id")
            }
        } else d.setId(c.getAttribute("id"));
        if (e != null)for (c =
                               0; c < this.idrefs.length; c++) {
            var f = this.idrefs[c], g = e.getAttribute(f);
            if (g != null) {
                e.removeAttribute(f);
                var h = a.objects[g] || a.lookup(g);
                if (h == null) {
                    g = a.getElementById(g);
                    g != null && (h = (mxCodecRegistry.codecs[g.nodeName] || this).decode(a, g))
                }
                d[f] = h
            }
        }
        return e
    };
    return a
}());
mxCodecRegistry.register(function () {
    var a = new mxObjectCodec(new mxGraphModel);
    a.encodeObject = function (a, c, d) {
        var e = a.document.createElement("root");
        a.encodeCell(c.getRoot(), e);
        d.appendChild(e)
    };
    a.decodeChild = function (a, c, d) {
        c.nodeName == "root" ? this.decodeRoot(a, c, d) : mxObjectCodec.prototype.decodeChild.apply(this, arguments)
    };
    a.decodeRoot = function (a, c, d) {
        for (var e = null, c = c.firstChild; c != null;) {
            var f = a.decodeCell(c);
            f != null && f.getParent() == null && (e = f);
            c = c.nextSibling
        }
        e != null && d.setRoot(e)
    };
    return a
}());
mxCodecRegistry.register(function () {
    var a = new mxObjectCodec(new mxStylesheet);
    a.encode = function (a, c) {
        var d = a.document.createElement(this.getName()), e;
        for (e in c.styles) {
            var f = c.styles[e], g = a.document.createElement("add");
            if (e != null) {
                g.setAttribute("as", e);
                for (var h in f) {
                    var k = this.getStringValue(h, f[h]);
                    if (k != null) {
                        var i = a.document.createElement("add");
                        i.setAttribute("value", k);
                        i.setAttribute("as", h);
                        g.appendChild(i)
                    }
                }
                g.childNodes.length > 0 && d.appendChild(g)
            }
        }
        return d
    };
    a.getStringValue = function (a, c) {
        var d = typeof c;
        d == "function" ? c = mxStyleRegistry.getName(style[j]) : d == "object" && (c = null);
        return c
    };
    a.decode = function (a, c, d) {
        var d = d || new this.template.constructor, e = c.getAttribute("id");
        e != null && (a.objects[e] = d);
        for (c = c.firstChild; c != null;) {
            if (!this.processInclude(a, c, d) && c.nodeName == "add") {
                e = c.getAttribute("as");
                if (e != null) {
                    var f = c.getAttribute("extend"), g = f != null ? mxUtils.clone(d.styles[f]) : null;
                    if (g == null) {
                        f != null && mxLog.warn("mxStylesheetCodec.decode: stylesheet " + f + " not found to extend");
                        g =
                        {}
                    }
                    for (f = c.firstChild; f != null;) {
                        if (f.nodeType == mxConstants.NODETYPE_ELEMENT) {
                            var h = f.getAttribute("as");
                            if (f.nodeName == "add") {
                                var k = mxUtils.getTextContent(f), i = null;
                                if (k != null && k.length > 0)i = mxUtils.eval(k); else {
                                    i = f.getAttribute("value");
                                    mxUtils.isNumeric(i) && (i = parseFloat(i))
                                }
                                i != null && (g[h] = i)
                            } else f.nodeName == "remove" && delete g[h]
                        }
                        f = f.nextSibling
                    }
                    d.putCellStyle(e, g)
                }
            }
            c = c.nextSibling
        }
        return d
    };
    return a
}());
(function () {
    function a() {
    }

    function b() {
    }

    function c() {
    }

    function d() {
    }

    function e() {
    }

    function f() {
    }

    function g() {
        mxRectangleShape.call(this)
    }

    function h() {
        mxRectangleShape.call(this)
    }

    function k() {
    }

    function i() {
    }

    function l() {
    }

    function n() {
    }

    function m() {
    }

    function o() {
    }

    function q() {
        mxArrow.call(this)
    }

    a.prototype = new mxCylinder;
    a.prototype.constructor = a;
    a.prototype.size = 20;
    a.prototype.redrawPath = function (a, b, c, d, e, f) {
        b = Math.min(d, Math.min(e, mxUtils.getValue(this.style, "size", this.size)));
        f ? (a.moveTo(b, e),
            a.lineTo(b, b), a.lineTo(0, 0), a.moveTo(b, b), a.lineTo(d, b)) : (a.moveTo(0, 0), a.lineTo(d - b, 0), a.lineTo(d, b), a.lineTo(d, e), a.lineTo(b, e), a.lineTo(0, e - b), a.lineTo(0, 0), a.close());
        a.end()
    };
    mxCellRenderer.prototype.defaultShapes.cube = a;
    b.prototype = new mxCylinder;
    b.prototype.constructor = b;
    b.prototype.size = 30;
    b.prototype.redrawPath = function (a, b, c, d, e, f) {
        b = Math.min(d, Math.min(e, mxUtils.getValue(this.style, "size", this.size)));
        f ? (a.moveTo(d - b, 0), a.lineTo(d - b, b), a.lineTo(d, b)) : (a.moveTo(0, 0), a.lineTo(d - b, 0), a.lineTo(d,
            b), a.lineTo(d, e), a.lineTo(0, e), a.lineTo(0, 0), a.close());
        a.end()
    };
    mxCellRenderer.prototype.defaultShapes.note = b;
    c.prototype = new mxCylinder;
    c.prototype.constructor = c;
    c.prototype.tabWidth = 60;
    c.prototype.tabHeight = 20;
    c.prototype.tabPosition = "right";
    c.prototype.redrawPath = function (a, b, c, d, e, f) {
        var g = mxUtils.getValue(this.style, "tabWidth", this.tabWidth), c = mxUtils.getValue(this.style, "tabHeight", this.tabHeight), b = mxUtils.getValue(this.style, "tabPosition", this.tabPosition), g = Math.min(d, g), c = Math.min(e, c);
        f ? "left" == b ? (a.moveTo(0, c), a.lineTo(g, c)) : (a.moveTo(d - g, c), a.lineTo(d, c)) : ("left" == b ? (a.moveTo(0, 0), a.lineTo(g, 0), a.lineTo(g, c), a.lineTo(d, c)) : (a.moveTo(0, c), a.lineTo(d - g, c), a.lineTo(d - g, 0), a.lineTo(d, 0)), a.lineTo(d, e), a.lineTo(0, e), a.lineTo(0, c), a.close());
        a.end()
    };
    mxCellRenderer.prototype.defaultShapes.folder = c;
    d.prototype = new mxCylinder;
    d.prototype.constructor = d;
    d.prototype.size = 30;
    d.prototype.redrawPath = function (a, b, c, d, e, f) {
        b = Math.min(d, Math.min(e, mxUtils.getValue(this.style, "size", this.size)));
        f || (a.moveTo(b, 0), a.lineTo(d, 0), a.lineTo(d, e), a.lineTo(0, e), a.lineTo(0, b), a.lineTo(b, 0), a.close(), a.end())
    };
    mxCellRenderer.prototype.defaultShapes.card = d;
    e.prototype = new mxCylinder;
    e.prototype.constructor = e;
    e.prototype.size = 0.4;
    e.prototype.redrawPath = function (a, b, c, d, e, f) {
        b = mxUtils.getValue(this.style, "size", this.size);
        b *= e;
        f || (a.moveTo(0, b / 2), a.quadTo(d / 4, 1.4 * b, d / 2, b / 2), a.quadTo(3 * d / 4, b * (1 - 1.4), d, b / 2), a.lineTo(d, e - b / 2), a.quadTo(3 * d / 4, e - 1.4 * b, d / 2, e - b / 2), a.quadTo(d / 4, e - b * (1 - 1.4), 0, e - b / 2), a.lineTo(0,
            b / 2), a.close(), a.end())
    };
    mxCellRenderer.prototype.defaultShapes.tape = e;
    f.prototype = new mxCylinder;
    f.prototype.constructor = f;
    f.prototype.size = 0.2;
    f.prototype.redrawPath = function (a, b, c, d, e, f) {
        b = d * mxUtils.getValue(this.style, "size", this.size);
        f || (a.moveTo(0, 0), a.lineTo(d - b, 0), a.lineTo(d, e / 2), a.lineTo(d - b, e), a.lineTo(0, e), a.lineTo(b, e / 2), a.close(), a.end())
    };
    mxCellRenderer.prototype.defaultShapes.step = f;
    mxUtils.extend(g, mxRectangleShape);
    g.prototype.isHtmlAllowed = function () {
        return!1
    };
    g.prototype.paintForeground =
        function (a, b, c, d, e) {
            var f = Math.min(d / 5, e / 5) + 1;
            a.begin();
            a.moveTo(b + d / 2, c + f);
            a.lineTo(b + d / 2, c + e - f);
            a.moveTo(b + f, c + e / 2);
            a.lineTo(b + d - f, c + e / 2);
            a.end();
            a.stroke();
            mxRectangleShape.prototype.paintForeground.apply(this, arguments)
        };
    mxCellRenderer.prototype.defaultShapes.plus = g;
    mxUtils.extend(h, mxRectangleShape);
    h.prototype.isHtmlAllowed = function () {
        return!1
    };
    h.prototype.paintForeground = function (a, b, c, d, e) {
        if (null != this.style) {
            if (1 == this.style["double"]) {
                var f = Math.max(2, this.strokewidth + 1);
                mxRectangleShape.prototype.paintBackground.call(this,
                    a, b + f, c + f, d - 2 * f, e - 2 * f);
                mxRectangleShape.prototype.paintForeground.apply(this, arguments);
                b += f;
                c += f;
                d -= 2 * f;
                e -= 2 * f
            }
            a.setDashed(false);
            var f = 0, g = null;
            do {
                g = mxCellRenderer.prototype.defaultShapes[this.style["symbol" + f]];
                if (null != g) {
                    var h = this.style["symbol" + f + "Align"], i = this.style["symbol" + f + "VerticalAlign"], k = this.style["symbol" + f + "Width"], l = this.style["symbol" + f + "Height"], m = this.style["symbol" + f + "Spacing"] || 0, n = this.style["symbol" + f + "ArcSpacing"];
                    null != n && (m += this.getArcSize(d + this.strokewidth, e + this.strokewidth) *
                        n);
                    var n = b, o = c, n = h == mxConstants.ALIGN_CENTER ? n + (d - k) / 2 : h == mxConstants.ALIGN_RIGHT ? n + (d - k - m) : n + m, o = i == mxConstants.ALIGN_MIDDLE ? o + (e - l) / 2 : i == mxConstants.ALIGN_BOTTOM ? o + (e - l - m) : o + m;
                    a.save();
                    h = new g;
                    h.style = this.style;
                    g.prototype.paintVertexShape.call(h, a, n, o, k, l);
                    a.restore()
                }
                f++
            } while (null != g)
        }
    };
    mxCellRenderer.prototype.defaultShapes.ext = h;
    k.prototype = new mxCylinder;
    k.prototype.constructor = k;
    k.prototype.redrawPath = function (a, b, c, d, e, f) {
        f ? (a.moveTo(0, 0), a.lineTo(d / 2, e / 2), a.lineTo(d, 0), a.end()) : (a.moveTo(0,
            0), a.lineTo(d, 0), a.lineTo(d, e), a.lineTo(0, e), a.close())
    };
    mxCellRenderer.prototype.defaultShapes.message = k;
    i.prototype = new mxCylinder;
    i.prototype.constructor = i;
    i.prototype.addPipe = true;
    i.prototype.redrawPath = function (a, b, c, d, e, f) {
        b = d / 3;
        c = e / 4;
        f || (a.moveTo(d / 2, c), a.curveTo(d / 2 - b, c, d / 2 - b, 0, d / 2, 0), a.curveTo(d / 2 + b, 0, d / 2 + b, c, d / 2, c), a.close(), a.moveTo(d / 2, c), a.lineTo(d / 2, 2 * e / 3), a.moveTo(d / 2, e / 3), a.lineTo(0, e / 3), a.moveTo(d / 2, e / 3), a.lineTo(d, e / 3), a.moveTo(d / 2, 2 * e / 3), a.lineTo(0, e), a.moveTo(d / 2, 2 * e / 3), a.lineTo(d,
            e), a.end())
    };
    mxCellRenderer.prototype.defaultShapes.umlActor = i;
    l.prototype = new mxCylinder;
    l.prototype.constructor = l;
    l.prototype.size = 10;
    l.prototype.addPipe = true;
    l.prototype.redrawPath = function (a, b, c, d, e, f) {
        b = mxUtils.getValue(this.style, "size", this.size);
        c = 2 * b / 3;
        f || (a.moveTo(d / 2, b), a.curveTo(d / 2 - c, b, d / 2 - c, 0, d / 2, 0), a.curveTo(d / 2 + c, 0, d / 2 + c, b, d / 2, b), a.close(), a.moveTo(d / 2, b), a.lineTo(d / 2, e), a.end())
    };
    mxCellRenderer.prototype.defaultShapes.lollipop = l;
    n.prototype = new mxCylinder;
    n.prototype.constructor = n;
    n.prototype.jettyWidth = 32;
    n.prototype.jettyHeight = 12;
    n.prototype.redrawPath = function (a, b, c, d, e, f) {
        var g = mxUtils.getValue(this.style, "jettyWidth", this.jettyWidth), b = mxUtils.getValue(this.style, "jettyHeight", this.jettyHeight), c = g / 2, g = c + g / 2, h = 0.3 * e - b / 2, i = 0.7 * e - b / 2;
        f ? (a.moveTo(c, h), a.lineTo(g, h), a.lineTo(g, h + b), a.lineTo(c, h + b), a.moveTo(c, i), a.lineTo(g, i), a.lineTo(g, i + b), a.lineTo(c, i + b)) : (a.moveTo(c, 0), a.lineTo(d, 0), a.lineTo(d, e), a.lineTo(c, e), a.lineTo(c, i + b), a.lineTo(0, i + b), a.lineTo(0, i), a.lineTo(c, i),
            a.lineTo(c, h + b), a.lineTo(0, h + b), a.lineTo(0, h), a.lineTo(c, h), a.close());
        a.end()
    };
    mxCellRenderer.prototype.defaultShapes.component = n;
    m.prototype = new mxDoubleEllipse;
    m.prototype.constructor = m;
    m.prototype.outerStroke = true;
    m.prototype.paintVertexShape = function (a, b, c, d, e) {
        var f = Math.min(4, Math.min(d / 5, e / 5));
        0 < d && 0 < e && (a.ellipse(b + f, c + f, d - 2 * f, e - 2 * f), a.fillAndStroke());
        a.setShadow(false);
        this.outerStroke && (a.ellipse(b, c, d, e), a.stroke())
    };
    mxCellRenderer.prototype.defaultShapes.endState = m;
    o.prototype = new m;
    o.prototype.constructor =
        o;
    o.prototype.outerStroke = false;
    mxCellRenderer.prototype.defaultShapes.startState = o;
    var p = mxImageExport.prototype.initShapes;
    mxImageExport.prototype.initShapes = function () {
        function a(b) {
            return{drawShape: function (a, c, d, e) {
                var c = d.x, f = d.y, g = d.width, d = d.height;
                if (e)return e = Math.min(4, Math.min(g / 5, d / 5)), g -= 2 * e, d -= 2 * e, 0 < g && 0 < d && a.ellipse(c + e, f + e, g, d), !0;
                a.fillAndStroke();
                b && (a.ellipse(c, f, g, d), a.stroke())
            }}
        }

        p.apply(this, arguments);
        this.shapes.endState = a(true);
        this.shapes.startState = a(false)
    };
    mxUtils.extend(q,
        mxArrow);
    q.prototype.paintEdgeShape = function (a, b) {
        var c = b[0], d = b[b.length - 1], e = d.x - c.x, d = d.y - c.y, f = Math.sqrt(e * e + d * d), g = e / f, h = d / f, e = 10 * h / 3, d = -10 * g / 3, i = c.x - e / 2, c = c.y - d / 2, k = i + e, l = c + d, g = k + f * g, f = l + f * h, h = g + e - 3 * e, m = f + d - 3 * d;
        a.begin();
        a.moveTo(k, l);
        a.lineTo(g, f);
        a.moveTo(h + e, m + d);
        a.lineTo(i, c);
        a.stroke()
    };
    mxCellRenderer.prototype.defaultShapes.link = q;
    mxMarker.addMarker("dash", function (a, b, c, d, e, f, g, h, i) {
        var k = e * (g + i + 1), l = f * (g + i + 1);
        return function () {
            a.begin();
            a.moveTo(d.x - k / 2 - l / 2, d.y - l / 2 + k / 2);
            a.lineTo(d.x +
                l / 2 - 3 * k / 2, d.y - 3 * l / 2 - k / 2);
            a.stroke()
        }
    });
    if ("undefined" != typeof mxVertexHandler) {
        var r = function (a) {
            mxVertexHandler.call(this, a)
        };
        mxUtils.extend(r, mxVertexHandler);
        r.prototype.useGridForSpecialHandle = false;
        r.prototype.init = function () {
            this.horizontal = mxUtils.getValue(this.state.style, mxConstants.STYLE_HORIZONTAL, !0);
            var a = this.state.view.graph;
            if (null != this.handleImage) {
                var b = new mxRectangle(0, 0, this.handleImage.width, this.handleImage.height);
                this.specialHandle = new mxImageShape(b, this.handleImage.src)
            } else b =
                new mxRectangle(0, 0, 10, 10), this.specialHandle = new mxRhombus(b, mxConstants.HANDLE_FILLCOLOR, mxConstants.HANDLE_STROKECOLOR);
            this.specialHandle.dialect = a.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_VML : mxConstants.DIALECT_SVG;
            this.specialHandle.init(a.getView().getOverlayPane());
            this.specialHandle.node.style.cursor = this.getSpecialHandleCursor();
            mxEvent.redirectMouseEvents(this.specialHandle.node, a, this.state);
            mxVertexHandler.prototype.init.apply(this, arguments)
        };
        r.prototype.getSpecialHandleCursor =
            function () {
                return"default"
            };
        r.prototype.redraw = function () {
            mxVertexHandler.prototype.redraw.apply(this, arguments);
            this.specialHandle.bounds = this.getSpecialHandleBounds(this.specialHandle.bounds.width);
            this.specialHandle.redraw()
        };
        r.prototype.destroy = function () {
            mxVertexHandler.prototype.destroy.apply(this, arguments);
            null != this.specialHandle && (this.specialHandle.destroy(), this.specialHandle = null)
        };
        r.prototype.getHandleForEvent = function (a) {
            return a.isSource(this.specialHandle) ? -99 : mxVertexHandler.prototype.getHandleForEvent.apply(this,
                arguments)
        };
        r.prototype.mouseMove = function (a, b) {
            if (!b.isConsumed() && -99 == this.index) {
                var c = new mxPoint(b.getGraphX(), b.getGraphY());
                this.constrainPoint(c);
                var d = this.graph.isGridEnabledEvent(b.getEvent()), e = this.graph.getView().scale;
                d && this.useGridForSpecialHandle && (c.x = this.graph.snap(c.x / e) * e, c.y = this.graph.snap(c.y / e) * e);
                this.updateStyle(c);
                this.moveSizerTo(this.specialHandle, c.x, c.y);
                this.state.view.graph.cellRenderer.redraw(this.state, !0);
                b.consume()
            } else mxVertexHandler.prototype.mouseMove.apply(this,
                arguments)
        };
        r.prototype.mouseUp = function (a, b) {
            !b.isConsumed() && -99 == this.index ? (this.applyStyle(), this.reset(), b.consume()) : mxVertexHandler.prototype.mouseUp.apply(this, arguments)
        };
        r.prototype.getSpecialHandleBounds = function (a) {
            var b = this.state.shape.getShapeRotation(), c = mxUtils.toRadians(b), b = Math.cos(c), c = Math.sin(c), d = new mxRectangle(this.state.x, this.state.y, this.state.width, this.state.height);
            if (this.state.shape.isPaintBoundsInverted()) {
                var e = (d.width - d.height) / 2;
                d.x += e;
                d.y -= e;
                e = d.width;
                d.width =
                    d.height;
                d.height = e
            }
            e = this.getSpecialHandlePoint(d);
            this.state.shape.flipH && (e.x = 2 * d.x + d.width - e.x);
            this.state.shape.flipV && (e.y = 2 * d.y + d.height - e.y);
            e = mxUtils.getRotatedPoint(e, b, c, new mxPoint(this.state.getCenterX(), this.state.getCenterY()));
            return new mxRectangle(e.x - a / 2, e.y - a / 2, a, a)
        };
        r.prototype.getSpecialHandlePoint = function () {
            return null
        };
        r.prototype.updateStyle = function () {
        };
        r.prototype.constrainPoint = function (a) {
            a.x = Math.max(this.state.x, Math.min(this.state.x + this.state.width, a.x));
            a.y = Math.max(this.state.y,
                Math.min(this.state.y + this.state.height, a.y))
        };
        r.prototype.applyStyle = function () {
        };
        var s = function (a) {
            mxVertexHandler.call(this, a)
        };
        mxUtils.extend(s, r);
        s.prototype.getSpecialHandlePoint = function (a) {
            var b = this.graph.getView().scale, c = Math.min(a.width, mxUtils.getValue(this.state.style, "tabWidth", 60) * b), b = Math.min(a.height, mxUtils.getValue(this.state.style, "tabHeight", 20) * b), c = "left" == mxUtils.getValue(this.state.style, "tabPosition", "right") ? a.x + c : a.x + a.width - c;
            return new mxPoint(c, a.y + b)
        };
        s.prototype.updateStyle =
            function (a) {
                var b = this.state.shape.getShapeRotation(), b = mxUtils.toRadians(b), c = Math.cos(-b), d = Math.sin(-b), e = new mxRectangle(this.state.x, this.state.y, this.state.width, this.state.height);
                if (this.state.shape.isPaintBoundsInverted()) {
                    var f = (e.width - e.height) / 2;
                    e.x += f;
                    e.y -= f;
                    f = e.width;
                    e.width = e.height;
                    e.height = f
                }
                f = new mxPoint(a.x, a.y);
                f = mxUtils.getRotatedPoint(f, c, d, new mxPoint(this.state.getCenterX(), this.state.getCenterY()));
                this.state.shape.flipH && (f.x = 2 * e.x + e.width - f.x);
                this.state.shape.flipV && (f.y =
                    2 * e.y + e.height - f.y);
                f = this.updateStyleUnrotated(f, e);
                null != f && (this.state.shape.flipH && (f.x = 2 * e.x + e.width - f.x), this.state.shape.flipV && (f.y = 2 * e.y + e.height - f.y), c = Math.cos(b), d = Math.sin(b), f = mxUtils.getRotatedPoint(f, c, d, new mxPoint(this.state.getCenterX(), this.state.getCenterY())), a.x = f.x, a.y = f.y)
            };
        s.prototype.updateStyleUnrotated = function (a, b) {
            var c = "left" == mxUtils.getValue(this.state.style, "tabPosition", "right") ? a.x - b.x : b.x + b.width - a.x, d = a.y - b.y, e = this.graph.getView().scale;
            this.state.style.tabWidth =
                Math.round(Math.max(1, c) / e);
            this.state.style.tabHeight = Math.round(Math.max(1, d) / e)
        };
        s.prototype.applyStyle = function () {
            var a = this.graph.getModel();
            a.beginUpdate();
            try {
                this.state.view.graph.setCellStyles("tabWidth", this.state.style.tabWidth, [this.state.cell]), this.state.view.graph.setCellStyles("tabHeight", this.state.style.tabHeight, [this.state.cell])
            } finally {
                a.endUpdate()
            }
        };
        r = function (a) {
            mxVertexHandler.call(this, a)
        };
        mxUtils.extend(r, s);
        r.prototype.getSpecialHandlePoint = function (a) {
            var b = this.graph.getView().scale,
                c = mxUtils.getValue(this.state.style, mxConstants.STYLE_STARTSIZE, mxConstants.DEFAULT_STARTSIZE);
            return new mxPoint(a.x + a.width / 2, a.y + Math.min(a.height, c * b))
        };
        r.prototype.updateStyleUnrotated = function (a, b) {
            a.x = b.x + b.width / 2;
            startSize = a.y - b.y;
            var c = this.graph.getView().scale;
            this.state.style.startSize = Math.round(Math.max(1, startSize) / c);
            return a
        };
        r.prototype.applyStyle = function () {
            this.state.view.graph.setCellStyles("startSize", this.state.style.startSize, [this.state.cell])
        };
        var t = function (a) {
            mxVertexHandler.call(this,
                a)
        };
        mxUtils.extend(t, s);
        t.prototype.defaultValue = 20;
        t.prototype.scaleFactor = 1;
        t.prototype.getSpecialHandlePoint = function (a) {
            var b = this.graph.getView().scale, b = Math.min(a.width, Math.min(a.height, mxUtils.getValue(this.state.style, "size", this.defaultValue) * b / this.scaleFactor));
            return new mxPoint(a.x + b, a.y + b)
        };
        t.prototype.updateStyleUnrotated = function (a, b) {
            var c = Math.max(0, Math.min(Math.min(b.width / this.scaleFactor, a.x - b.x), Math.min(b.height / this.scaleFactor, a.y - b.y))), d = this.graph.getView().scale;
            this.state.style.size =
                Math.round(Math.max(1, c) / d) * this.scaleFactor;
            return new mxPoint(b.x + c, b.y + c)
        };
        t.prototype.applyStyle = function () {
            this.state.view.graph.setCellStyles("size", this.state.style.size, [this.state.cell])
        };
        var y = function (a) {
            mxVertexHandler.call(this, a)
        };
        mxUtils.extend(y, t);
        y.prototype.defaultValue = 30;
        y.prototype.scaleFactor = 2;
        var z = function (a) {
            mxVertexHandler.call(this, a)
        };
        mxUtils.extend(z, t);
        z.prototype.defaultValue = 30;
        z.prototype.scaleFactor = 1;
        z.prototype.getSpecialHandlePoint = function (a) {
            var b = this.graph.getView().scale,
                b = Math.min(a.width, Math.min(a.height, mxUtils.getValue(this.state.style, "size", this.defaultValue) * b / this.scaleFactor));
            return new mxPoint(a.x + a.width - b, a.y + b)
        };
        z.prototype.updateStyleUnrotated = function (a, b) {
            var c = Math.max(0, Math.min(Math.min(b.width / this.scaleFactor, a.x - b.x + b.width), Math.min(b.height / this.scaleFactor, a.y - b.y))), d = this.graph.getView().scale;
            this.state.style.size = Math.round(Math.max(1, c) / d) * this.scaleFactor;
            return new mxPoint(b.x + b.width - c, b.y + c)
        };
        var C = function (a) {
            mxVertexHandler.call(this,
                a)
        };
        mxUtils.extend(C, t);
        C.prototype.defaultValue = 0.2;
        C.prototype.scaleFactor = 1;
        C.prototype.getSpecialHandlePoint = function (a) {
            var b = mxUtils.getValue(this.state.style, "size", this.defaultValue);
            return new mxPoint(a.x + a.width * b, a.y + a.height / 2)
        };
        C.prototype.updateStyleUnrotated = function (a, b) {
            var c = Math.min(1, (a.x - b.x) / b.width);
            this.state.style.size = c;
            return new mxPoint(b.x + c * b.width, b.y + b.height / 2)
        };
        var F = function (a) {
            mxVertexHandler.call(this, a)
        };
        mxUtils.extend(F, t);
        F.prototype.defaultValue = 0.4;
        F.prototype.scaleFactor =
            1;
        F.prototype.getSpecialHandlePoint = function (a) {
            var b = mxUtils.getValue(this.state.style, "size", this.defaultValue);
            return new mxPoint(a.x + a.width / 2, a.y + b * a.height / 2)
        };
        F.prototype.updateStyleUnrotated = function (a, b) {
            var c = Math.max(0, Math.min(1, 2 * ((a.y - b.y) / b.height)));
            this.state.style.size = c;
            return new mxPoint(b.x + b.width / 2, b.y + c * b.height / 2)
        };
        var I = {swimlane: r, folder: s, cube: t, card: y, note: z, step: C, tape: F}, A = mxGraph.prototype.createHandler;
        mxGraph.prototype.createHandler = function (a) {
            if (null != a) {
                var b =
                    I[a.style.shape];
                if (null != b)return new b(a)
            }
            return A.apply(this, arguments)
        }
    }
    mxGraph.prototype.getAllConnectionConstraints = function (a) {
        if (null != a && null != a.shape)if (null != a.shape.stencil) {
            if (null != a.shape.stencil)return a.shape.stencil.constraints
        } else if (null != a.shape.constraints)return a.shape.constraints;
        return null
    };
    mxRectangleShape.prototype.constraints = [new mxConnectionConstraint(new mxPoint(0.25, 0), !0), new mxConnectionConstraint(new mxPoint(0.5, 0), !0), new mxConnectionConstraint(new mxPoint(0.75,
        0), !0), new mxConnectionConstraint(new mxPoint(0, 0.25), !0), new mxConnectionConstraint(new mxPoint(0, 0.5), !0), new mxConnectionConstraint(new mxPoint(0, 0.75), !0), new mxConnectionConstraint(new mxPoint(1, 0.25), !0), new mxConnectionConstraint(new mxPoint(1, 0.5), !0), new mxConnectionConstraint(new mxPoint(1, 0.75), !0), new mxConnectionConstraint(new mxPoint(0.25, 1), !0), new mxConnectionConstraint(new mxPoint(0.5, 1), !0), new mxConnectionConstraint(new mxPoint(0.75, 1), !0)];
    mxLabel.prototype.constraints = mxRectangleShape.prototype.constraints;
    mxImageShape.prototype.constraints = mxRectangleShape.prototype.constraints;
    mxSwimlane.prototype.constraints = mxRectangleShape.prototype.constraints;
    g.prototype.constraints = mxRectangleShape.prototype.constraints;
    b.prototype.constraints = mxRectangleShape.prototype.constraints;
    d.prototype.constraints = mxRectangleShape.prototype.constraints;
    a.prototype.constraints = mxRectangleShape.prototype.constraints;
    c.prototype.constraints = mxRectangleShape.prototype.constraints;
    mxCylinder.prototype.constraints = [new mxConnectionConstraint(new mxPoint(0.15,
        0.05), !1), new mxConnectionConstraint(new mxPoint(0.5, 0), !0), new mxConnectionConstraint(new mxPoint(0.85, 0.05), !1), new mxConnectionConstraint(new mxPoint(0, 0.3), !0), new mxConnectionConstraint(new mxPoint(0, 0.5), !0), new mxConnectionConstraint(new mxPoint(0, 0.7), !0), new mxConnectionConstraint(new mxPoint(1, 0.3), !0), new mxConnectionConstraint(new mxPoint(1, 0.5), !0), new mxConnectionConstraint(new mxPoint(1, 0.7), !0), new mxConnectionConstraint(new mxPoint(0.15, 0.95), !1), new mxConnectionConstraint(new mxPoint(0.5,
        1), !0), new mxConnectionConstraint(new mxPoint(0.85, 0.95), !1)];
    i.prototype.constraints = [new mxConnectionConstraint(new mxPoint(0.25, 0.1), !1), new mxConnectionConstraint(new mxPoint(0.5, 0), !1), new mxConnectionConstraint(new mxPoint(0.75, 0.1), !1), new mxConnectionConstraint(new mxPoint(0, 1 / 3), !1), new mxConnectionConstraint(new mxPoint(0, 1), !1), new mxConnectionConstraint(new mxPoint(1, 1 / 3), !1), new mxConnectionConstraint(new mxPoint(1, 1), !1), new mxConnectionConstraint(new mxPoint(0.5, 0.5), !1)];
    n.prototype.constraints =
        [new mxConnectionConstraint(new mxPoint(0.25, 0), !0), new mxConnectionConstraint(new mxPoint(0.5, 0), !0), new mxConnectionConstraint(new mxPoint(0.75, 0), !0), new mxConnectionConstraint(new mxPoint(0, 0.3), !0), new mxConnectionConstraint(new mxPoint(0, 0.7), !0), new mxConnectionConstraint(new mxPoint(1, 0.25), !0), new mxConnectionConstraint(new mxPoint(1, 0.5), !0), new mxConnectionConstraint(new mxPoint(1, 0.75), !0), new mxConnectionConstraint(new mxPoint(0.25, 1), !0), new mxConnectionConstraint(new mxPoint(0.5, 1),
            !0), new mxConnectionConstraint(new mxPoint(0.75, 1), !0)];
    mxActor.prototype.constraints = [new mxConnectionConstraint(new mxPoint(0.5, 0), !0), new mxConnectionConstraint(new mxPoint(0.25, 0.2), !1), new mxConnectionConstraint(new mxPoint(0.1, 0.5), !1), new mxConnectionConstraint(new mxPoint(0, 0.75), !0), new mxConnectionConstraint(new mxPoint(0.75, 0.25), !1), new mxConnectionConstraint(new mxPoint(0.9, 0.5), !1), new mxConnectionConstraint(new mxPoint(1, 0.75), !0), new mxConnectionConstraint(new mxPoint(0.25, 1), !0),
        new mxConnectionConstraint(new mxPoint(0.5, 1), !0), new mxConnectionConstraint(new mxPoint(0.75, 1), !0)];
    e.prototype.constraints = [new mxConnectionConstraint(new mxPoint(0, 0.35), !1), new mxConnectionConstraint(new mxPoint(0, 0.5), !1), new mxConnectionConstraint(new mxPoint(0, 0.65), !1), new mxConnectionConstraint(new mxPoint(1, 0.35), !1), new mxConnectionConstraint(new mxPoint(1, 0.5), !1), new mxConnectionConstraint(new mxPoint(1, 0.65), !1), new mxConnectionConstraint(new mxPoint(0.25, 1), !1), new mxConnectionConstraint(new mxPoint(0.75,
        0), !1)];
    f.prototype.constraints = [new mxConnectionConstraint(new mxPoint(0.25, 0), !0), new mxConnectionConstraint(new mxPoint(0.5, 0), !0), new mxConnectionConstraint(new mxPoint(0.75, 0), !0), new mxConnectionConstraint(new mxPoint(0.25, 1), !0), new mxConnectionConstraint(new mxPoint(0.5, 1), !0), new mxConnectionConstraint(new mxPoint(0.75, 1), !0), new mxConnectionConstraint(new mxPoint(0.1, 0.25), !1), new mxConnectionConstraint(new mxPoint(0.2, 0.5), !1), new mxConnectionConstraint(new mxPoint(0.1, 0.75), !1), new mxConnectionConstraint(new mxPoint(0.9,
        0.25), !1), new mxConnectionConstraint(new mxPoint(1, 0.5), !1), new mxConnectionConstraint(new mxPoint(0.9, 0.75), !1)];
    mxLine.prototype.constraints = [new mxConnectionConstraint(new mxPoint(0, 0.5), !1), new mxConnectionConstraint(new mxPoint(0.25, 0.5), !1), new mxConnectionConstraint(new mxPoint(0.75, 0.5), !1), new mxConnectionConstraint(new mxPoint(1, 0.5), !1)];
    l.prototype.constraints = [new mxConnectionConstraint(new mxPoint(0.5, 0), !1), new mxConnectionConstraint(new mxPoint(0.5, 1), !1)];
    mxEllipse.prototype.constraints =
        [new mxConnectionConstraint(new mxPoint(0, 0), !0), new mxConnectionConstraint(new mxPoint(1, 0), !0), new mxConnectionConstraint(new mxPoint(0, 1), !0), new mxConnectionConstraint(new mxPoint(1, 1), !0), new mxConnectionConstraint(new mxPoint(0.5, 0), !0), new mxConnectionConstraint(new mxPoint(0.5, 1), !0), new mxConnectionConstraint(new mxPoint(0, 0.5), !0), new mxConnectionConstraint(new mxPoint(1, 0.5))];
    mxDoubleEllipse.prototype.constraints = mxEllipse.prototype.constraints;
    mxRhombus.prototype.constraints = mxEllipse.prototype.constraints;
    mxTriangle.prototype.constraints = [new mxConnectionConstraint(new mxPoint(0, 0.25), !0), new mxConnectionConstraint(new mxPoint(0, 0.5), !0), new mxConnectionConstraint(new mxPoint(0, 0.75), !0), new mxConnectionConstraint(new mxPoint(0.5, 0), !0), new mxConnectionConstraint(new mxPoint(0.5, 1), !0), new mxConnectionConstraint(new mxPoint(1, 0.5), !0)];
    mxHexagon.prototype.constraints = [new mxConnectionConstraint(new mxPoint(0.375, 0), !0), new mxConnectionConstraint(new mxPoint(0.5, 0), !0), new mxConnectionConstraint(new mxPoint(0.625,
        0), !0), new mxConnectionConstraint(new mxPoint(0.125, 0.25), !1), new mxConnectionConstraint(new mxPoint(0, 0.5), !0), new mxConnectionConstraint(new mxPoint(0.125, 0.75), !1), new mxConnectionConstraint(new mxPoint(0.875, 0.25), !1), new mxConnectionConstraint(new mxPoint(0, 0.5), !0), new mxConnectionConstraint(new mxPoint(1, 0.5), !0), new mxConnectionConstraint(new mxPoint(0.875, 0.75), !1), new mxConnectionConstraint(new mxPoint(0.375, 1), !0), new mxConnectionConstraint(new mxPoint(0.5, 1), !0), new mxConnectionConstraint(new mxPoint(0.625,
        1), !0)];
    mxCloud.prototype.constraints = [new mxConnectionConstraint(new mxPoint(0.25, 0.25), !1), new mxConnectionConstraint(new mxPoint(0.4, 0.1), !1), new mxConnectionConstraint(new mxPoint(0.16, 0.55), !1), new mxConnectionConstraint(new mxPoint(0.07, 0.4), !1), new mxConnectionConstraint(new mxPoint(0.31, 0.8), !1), new mxConnectionConstraint(new mxPoint(0.13, 0.77), !1), new mxConnectionConstraint(new mxPoint(0.8, 0.8), !1), new mxConnectionConstraint(new mxPoint(0.55, 0.95), !1), new mxConnectionConstraint(new mxPoint(0.875,
        0.5), !1), new mxConnectionConstraint(new mxPoint(0.96, 0.7), !1), new mxConnectionConstraint(new mxPoint(0.625, 0.2), !1), new mxConnectionConstraint(new mxPoint(0.88, 0.25), !1)];
    mxArrow.prototype.constraints = null
})();
var Base64 = {_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (a, b) {
    var c = "", d, e, f, g, h, k, i = 0;
    for (null != b && b || (a = Base64._utf8_encode(a)); i < a.length;)d = a.charCodeAt(i++), e = a.charCodeAt(i++), f = a.charCodeAt(i++), g = d >> 2, d = (d & 3) << 4 | e >> 4, h = (e & 15) << 2 | f >> 6, k = f & 63, isNaN(e) ? h = k = 64 : isNaN(f) && (k = 64), c = c + this._keyStr.charAt(g) + this._keyStr.charAt(d) + this._keyStr.charAt(h) + this._keyStr.charAt(k);
    return c
}, decode: function (a, b) {
    for (var b = null != b ? b : !1, c = "", d, e, f, g, h, k = 0, a = a.replace(/[^A-Za-z0-9\+\/\=]/g,
        ""); k < a.length;)d = this._keyStr.indexOf(a.charAt(k++)), e = this._keyStr.indexOf(a.charAt(k++)), g = this._keyStr.indexOf(a.charAt(k++)), h = this._keyStr.indexOf(a.charAt(k++)), d = d << 2 | e >> 4, e = (e & 15) << 4 | g >> 2, f = (g & 3) << 6 | h, c += String.fromCharCode(d), 64 != g && (c += String.fromCharCode(e)), 64 != h && (c += String.fromCharCode(f));
    b || (c = Base64._utf8_decode(c));
    return c
}, _utf8_encode: function (a) {
    for (var a = a.replace(/\r\n/g, "\n"), b = "", c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b +=
            String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d & 63 | 128))
    }
    return b
}, _utf8_decode: function (a) {
    for (var b = "", c = 0, d = c1 = c2 = 0; c < a.length;)d = a.charCodeAt(c), 128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (c2 = a.charCodeAt(c + 1), b += String.fromCharCode((d & 31) << 6 | c2 & 63), c += 2) : (c2 = a.charCodeAt(c + 1), c3 = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (c2 & 63) << 6 | c3 & 63), c += 3);
    return b
}};
(function () {
    var a, b, c = null, d, e, f, g, h, k, i, l, n, m, o, q, p, r, s = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535], t = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], y = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99], z = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], C = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], F = [16, 17, 18, 0, 8, 7, 9, 6, 10,
        5, 11, 4, 12, 3, 13, 2, 14, 1, 15], I = function () {
        this.list = this.next = null
    }, A = function () {
        this.n = this.b = this.e = 0;
        this.t = null
    }, H = function (a, b, c, d, e, f) {
        this.BMAX = 16;
        this.N_MAX = 288;
        this.status = 0;
        this.root = null;
        this.m = 0;
        var g = Array(this.BMAX + 1), h, i, k, l, m, n, o, q = Array(this.BMAX + 1), p, r, t, s = new A, v = Array(this.BMAX);
        l = Array(this.N_MAX);
        var u, w = Array(this.BMAX + 1), y, z, C;
        C = this.root = null;
        for (m = 0; m < g.length; m++)g[m] = 0;
        for (m = 0; m < q.length; m++)q[m] = 0;
        for (m = 0; m < v.length; m++)v[m] = null;
        for (m = 0; m < l.length; m++)l[m] = 0;
        for (m = 0; m < w.length; m++)w[m] =
            0;
        h = 256 < b ? a[256] : this.BMAX;
        p = a;
        r = 0;
        m = b;
        do g[p[r]]++, r++; while (0 < --m);
        if (g[0] == b)this.root = null, this.status = this.m = 0; else {
            for (n = 1; n <= this.BMAX && 0 == g[n]; n++);
            o = n;
            f < n && (f = n);
            for (m = this.BMAX; 0 != m && 0 == g[m]; m--);
            k = m;
            f > m && (f = m);
            for (y = 1 << n; n < m; n++, y <<= 1)if (0 > (y -= g[n])) {
                this.status = 2;
                this.m = f;
                return
            }
            if (0 > (y -= g[m]))this.status = 2, this.m = f; else {
                g[m] += y;
                w[1] = n = 0;
                p = g;
                r = 1;
                for (t = 2; 0 < --m;)w[t++] = n += p[r++];
                p = a;
                m = r = 0;
                do if (0 != (n = p[r++]))l[w[n]++] = m; while (++m < b);
                b = w[k];
                w[0] = m = 0;
                p = l;
                r = 0;
                l = -1;
                u = q[0] = 0;
                t = null;
                for (z = 0; o <=
                    k; o++)for (a = g[o]; 0 < a--;) {
                    for (; o > u + q[1 + l];) {
                        u += q[1 + l];
                        l++;
                        z = (z = k - u) > f ? f : z;
                        if ((i = 1 << (n = o - u)) > a + 1) {
                            i -= a + 1;
                            for (t = o; ++n < z && !((i <<= 1) <= g[++t]);)i -= g[t]
                        }
                        u + n > h && u < h && (n = h - u);
                        z = 1 << n;
                        q[1 + l] = n;
                        t = Array(z);
                        for (i = 0; i < z; i++)t[i] = new A;
                        C = null == C ? this.root = new I : C.next = new I;
                        C.next = null;
                        C.list = t;
                        v[l] = t;
                        0 < l && (w[l] = m, s.b = q[l], s.e = 16 + n, s.t = t, n = (m & (1 << u) - 1) >> u - q[l], v[l - 1][n].e = s.e, v[l - 1][n].b = s.b, v[l - 1][n].n = s.n, v[l - 1][n].t = s.t)
                    }
                    s.b = o - u;
                    r >= b ? s.e = 99 : p[r] < c ? (s.e = 256 > p[r] ? 16 : 15, s.n = p[r++]) : (s.e = e[p[r] - c], s.n = d[p[r++] - c]);
                    i = 1 << o - u;
                    for (n = m >> u; n < z; n += i)t[n].e = s.e, t[n].b = s.b, t[n].n = s.n, t[n].t = s.t;
                    for (n = 1 << o - 1; 0 != (m & n); n >>= 1)m ^= n;
                    for (m ^= n; (m & (1 << u) - 1) != w[l];)u -= q[l], l--
                }
                this.m = q[1];
                this.status = 0 != y && 1 != k ? 1 : 0
            }
        }
    }, u = function (a) {
        for (; g < a;) {
            var b = f, c;
            c = p.length == r ? -1 : p.charCodeAt(r++) & 255;
            f = b | c << g;
            g += 8
        }
    }, w = function (a) {
        return f & s[a]
    }, v = function (a) {
        f >>= a;
        g -= a
    }, G = function (c, d, e) {
        var f, g, k;
        if (0 == e)return 0;
        for (k = 0; ;) {
            u(o);
            g = n.list[w(o)];
            for (f = g.e; 16 < f;) {
                if (99 == f)return-1;
                v(g.b);
                f -= 16;
                u(f);
                g = g.t[w(f)];
                f = g.e
            }
            v(g.b);
            if (16 == f)b &= 32767,
                c[d + k++] = a[b++] = g.n; else {
                if (15 == f)break;
                u(f);
                i = g.n + w(f);
                v(f);
                u(q);
                g = m.list[w(q)];
                for (f = g.e; 16 < f;) {
                    if (99 == f)return-1;
                    v(g.b);
                    f -= 16;
                    u(f);
                    g = g.t[w(f)];
                    f = g.e
                }
                v(g.b);
                u(f);
                l = b - g.n - w(f);
                for (v(f); 0 < i && k < e;)i--, l &= 32767, b &= 32767, c[d + k++] = a[b++] = a[l++]
            }
            if (k == e)return e
        }
        h = -1;
        return k
    }, K = function (a, b, c) {
        var d, e, f, g, h, i, k, l = Array(316);
        for (d = 0; d < l.length; d++)l[d] = 0;
        u(5);
        i = 257 + w(5);
        v(5);
        u(5);
        k = 1 + w(5);
        v(5);
        u(4);
        d = 4 + w(4);
        v(4);
        if (286 < i || 30 < k)return-1;
        for (e = 0; e < d; e++)u(3), l[F[e]] = w(3), v(3);
        for (; 19 > e; e++)l[F[e]] = 0;
        o = 7;
        e = new H(l, 19, 19, null, null, o);
        if (0 != e.status)return-1;
        n = e.root;
        o = e.m;
        g = i + k;
        for (d = f = 0; d < g;)if (u(o), h = n.list[w(o)], e = h.b, v(e), e = h.n, 16 > e)l[d++] = f = e; else if (16 == e) {
            u(2);
            e = 3 + w(2);
            v(2);
            if (d + e > g)return-1;
            for (; 0 < e--;)l[d++] = f
        } else {
            17 == e ? (u(3), e = 3 + w(3), v(3)) : (u(7), e = 11 + w(7), v(7));
            if (d + e > g)return-1;
            for (; 0 < e--;)l[d++] = 0;
            f = 0
        }
        o = 9;
        e = new H(l, i, 257, t, y, o);
        0 == o && (e.status = 1);
        if (0 != e.status)return-1;
        n = e.root;
        o = e.m;
        for (d = 0; d < k; d++)l[d] = l[d + i];
        q = 6;
        e = new H(l, k, 0, z, C, q);
        m = e.root;
        q = e.m;
        return 0 == q && 257 < i || 0 != e.status ? -1 :
            G(a, b, c)
    }, J = function (p, r, s) {
        var B, E;
        for (B = 0; B < s && !(k && -1 == h);) {
            if (0 < i) {
                if (0 != h)for (; 0 < i && B < s;)i--, l &= 32767, b &= 32767, p[r + B++] = a[b++] = a[l++]; else {
                    for (; 0 < i && B < s;)i--, b &= 32767, u(8), p[r + B++] = a[b++] = w(8), v(8);
                    0 == i && (h = -1)
                }
                if (B == s)break
            }
            if (-1 == h) {
                if (k)break;
                u(1);
                0 != w(1) && (k = !0);
                v(1);
                u(2);
                h = w(2);
                v(2);
                n = null;
                i = 0
            }
            switch (h) {
                case 0:
                    E = p;
                    var A = r + B, J = s - B, D = void 0, D = g & 7;
                    v(D);
                    u(16);
                    D = w(16);
                    v(16);
                    u(16);
                    if (D != (~f & 65535))E = -1; else {
                        v(16);
                        i = D;
                        for (D = 0; 0 < i && D < J;)i--, b &= 32767, u(8), E[A + D++] = a[b++] = w(8), v(8);
                        0 == i && (h = -1);
                        E =
                            D
                    }
                    break;
                case 1:
                    if (null != n)E = G(p, r + B, s - B); else a:{
                        E = p;
                        A = r + B;
                        J = s - B;
                        if (null == c) {
                            for (var x = void 0, D = Array(288), x = void 0, x = 0; 144 > x; x++)D[x] = 8;
                            for (; 256 > x; x++)D[x] = 9;
                            for (; 280 > x; x++)D[x] = 7;
                            for (; 288 > x; x++)D[x] = 8;
                            e = 7;
                            x = new H(D, 288, 257, t, y, e);
                            if (0 != x.status) {
                                alert("HufBuild error: " + x.status);
                                E = -1;
                                break a
                            }
                            c = x.root;
                            e = x.m;
                            for (x = 0; 30 > x; x++)D[x] = 5;
                            zip_fixed_bd = 5;
                            x = new H(D, 30, 0, z, C, zip_fixed_bd);
                            if (1 < x.status) {
                                c = null;
                                alert("HufBuild error: " + x.status);
                                E = -1;
                                break a
                            }
                            d = x.root;
                            zip_fixed_bd = x.m
                        }
                        n = c;
                        m = d;
                        o = e;
                        q = zip_fixed_bd;
                        E = G(E, A, J)
                    }
                    break;
                case 2:
                    E = null != n ? G(p, r + B, s - B) : K(p, r + B, s - B);
                    break;
                default:
                    E = -1
            }
            if (-1 == E)return k ? 0 : -1;
            B += E
        }
        return B
    };
    window.RawDeflate || (RawDeflate = {});
    RawDeflate.inflate = function (c) {
        var d;
        null == a && (a = Array(65536));
        g = f = b = 0;
        h = -1;
        k = false;
        i = l = 0;
        n = null;
        p = c;
        r = 0;
        for (var e = Array(1024), m = []; 0 < (c = J(e, 0, e.length));) {
            var o = Array(c);
            for (d = 0; d < c; d++)o[d] = String.fromCharCode(e[d]);
            m[m.length] = o.join("")
        }
        p = null;
        return m.join("")
    }
})();
(function (a, b, c) {
    mxStencilRegistry.parseStencilSet = function (a, b, c) {
        var c = null != c ? c : !0, d = a.documentElement, a = d.firstChild, e = "", d = d.getAttribute("name");
        for (null != d && (e = d + "."); null != a;) {
            if (a.nodeType == mxConstants.NODETYPE_ELEMENT && (d = a.getAttribute("name"), null != d)) {
                var f = a.getAttribute("w"), m = a.getAttribute("h"), f = null == f ? 80 : parseInt(f, 10), m = null == m ? 80 : parseInt(m, 10), e = e.toLowerCase(), o = d.replace(/ /g, "_");
                c && mxStencilRegistry.addStencil(e + o.toLowerCase(), new mxStencil(a));
                null != b && b(e, o, d, f, m)
            }
            a =
                a.nextSibling
        }
    };
    mxConstants.SHADOWCOLOR = "#d0d0d0";
    mxGraph.prototype.isHtmlLabel = function (a) {
        var b = this.view.getState(a);
        return"1" == (null != b ? b.style : this.getCellStyle(a)).html
    };
    var d = mxGraph.prototype.convertValueToString;
    mxGraph.prototype.convertValueToString = function (a) {
        return null != a.value && "object" == typeof a.value ? a.value.getAttribute("label") : d.apply(this, arguments)
    };
    mxGraph.prototype.getLinkForCell = function (a) {
        return null != a.value && "object" == typeof a.value ? a.value.getAttribute("link") : null
    };
    mxGraph.prototype.getImageFromBundles = function (a) {
        return null != a ? ("http://" != a.substring(0, 7) && ("https://" != a.substring(0, 8) && "data:image" != a.substring(0, 10)) && ("/" == a.charAt(0) && (a = a.substring(1, a.length)), a = "http://drawdotio.appspot.com/" + a), a) : null
    };
    if (null != b)for (var e = 0; e < b.length; e++) {
        var f = mxUtils.parseXml(b[e]);
        mxStencilRegistry.parseStencilSet(f)
    }
    null != c && eval(c);
    mxClient.IS_TOUCH && (mxPanningHandler.prototype.isPanningTrigger = function () {
        return!0
    });
    (function () {
        if (mxClient.isBrowserSupported())for (var b =
            document.getElementsByTagName("*"), c = 0; c < b.length; c++)b[c].className.toString().indexOf("mxgraph") >= 0 && function (d) {
            try {
                for (var e = d.firstChild; e != null && e.nodeType != mxConstants.NODETYPE_ELEMENT;)e = e.nextSibling;
                var f = e.innerHTML, f = f.substring(0, 16) == "&lt;mxGraphModel" ? f.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;gt;/g, "&gt;").replace(/&amp;lt;/g, "&lt;").replace(/&amp;quot;/g, "&quot;").replace(/&#xa;/g, "\n") : f.substring(0, 15) == "%3CmxGraphModel" ? decodeURIComponent(f) : decodeURIComponent(RawDeflate.inflate(Base64.decode(f,
                    true))), n = mxUtils.parseXml(f);
                if (n.documentElement != null && n.documentElement.nodeName == "mxGraphModel") {
                    var m = new mxCodec(n), o = n.documentElement;
                    d.innerHTML = "";
                    var q = new mxGraph(d);
                    q.resetViewOnRootChange = false;
                    q.setTooltips(false);
                    q.setEnabled(false);
                    if (a != null) {
                        var p = mxUtils.parseXml(a);
                        (new mxCodec(p)).decode(p.documentElement, q.getStylesheet())
                    }
                    if (o.getAttribute("pan") != "0") {
                        q.panningHandler.useLeftButtonForPanning = true;
                        q.panningHandler.ignoreCell = true;
                        d.style.cursor = "move";
                        q.setPanning(true)
                    } else d.style.cursor =
                        "default";
                    var r = o.getAttribute("resize"), s = Number(o.getAttribute("border") || 0);
                    q.border = s;
                    var t = o.getAttribute("fit");
                    if (t != "1" && r != "0" || b[c].style.width == "" && b[c].style.height == "") {
                        q.resizeContainer = true;
                        q.centerZoom = false
                    } else q.centerZoom = true;
                    var y = o.getAttribute("highlight");
                    if (o.getAttribute("links") != "0") {
                        var z = d.style.cursor, C = q.getTolerance();
                        q.addMouseListener({currentState: null, currentLink: null, highlight: y != null ? new mxCellHighlight(q, y, 2) : null, startX: 0, startY: 0, mouseDown: function (a, b) {
                            this.startX =
                                b.getGraphX();
                            this.startY = b.getGraphY()
                        }, mouseMove: function (a, b) {
                            if (q.isMouseDown) {
                                if (this.currentLink != null) {
                                    var c = Math.abs(this.startX - b.getGraphX()), d = Math.abs(this.startY - b.getGraphY());
                                    (c > C || d > C) && this.clear()
                                }
                            } else if (!(this.currentState != null && (b.getState() == this.currentState || b.getState() == null) && q.intersects(this.currentState, b.getGraphX(), b.getGraphY()))) {
                                c = q.view.getState(b.getCell());
                                if (c != this.currentState) {
                                    this.currentState != null && this.clear();
                                    this.currentState = c;
                                    this.currentState !=
                                        null && this.activate(this.currentState)
                                }
                            }
                        }, mouseUp: function () {
                            var a = this.currentLink;
                            this.clear();
                            a != null && window.open(a)
                        }, activate: function (a) {
                            this.currentLink = q.getLinkForCell(a.cell);
                            if (this.currentLink != null) {
                                d.setAttribute("title", this.currentLink);
                                d.style.cursor = "pointer";
                                this.highlight != null && this.highlight.highlight(a)
                            }
                        }, clear: function () {
                            d.removeAttribute("title");
                            d.style.cursor = z;
                            this.currentLink = this.currentState = null;
                            this.highlight != null && this.highlight.hide()
                        }})
                    }
                    var F = Number(o.getAttribute("x0") ||
                        0), I = Number(o.getAttribute("y0") || 0);
                    q.view.translate.x = -F + s;
                    q.view.translate.y = -I + s;
                    m.decode(o, q.getModel());
                    if (t != "0") {
                        q.fit(s);
                        if (r == "1") {
                            q.resizeContainer = true;
                            q.centerZoom = false
                        }
                    }
                    if (o.getAttribute("zoom") != "0") {
                        var A = document.createElement("div");
                        A.style.position = "absolute";
                        A.style.overflow = "visible";
                        A.style.cursor = "pointer";
                        var H = q.getBorderSizes(), u = 0, w = 10, v = 16, G = 16;
                        if (mxClient.IS_QUIRKS) {
                            v = v - 1;
                            G = G - 1
                        } else if (mxClient.IS_TOUCH) {
                            G = v = 24;
                            w = 14
                        }
                        e = function (a, b) {
                            var c = document.createElement("div");
                            c.style.position = "absolute";
                            c.style.border = "1px solid gray";
                            c.style.textAlign = "center";
                            c.style.cursor = "hand";
                            c.style.width = v + "px";
                            c.style.height = G + "px";
                            c.style.left = u + "px";
                            c.style.top = "0px";
                            c.style.backgroundColor = "white";
                            mxUtils.setOpacity(c, 50);
                            var d = document.createElement("table");
                            d.style.borderWidth = "0px";
                            d.style.width = "100%";
                            d.style.height = "100%";
                            var e = document.createElement("tbody"), f = document.createElement("tr"), g = document.createElement("td");
                            g.style.verticalAlign = "middle";
                            g.style.textAlign =
                                "center";
                            g.style.fontSize = w + "px";
                            g.style.padding = "0px";
                            mxUtils.write(g, a);
                            f.appendChild(g);
                            e.appendChild(f);
                            d.appendChild(e);
                            c.appendChild(d);
                            d = mxClient.IS_TOUCH ? "touchend" : "mouseup";
                            mxEvent.addListener(c, mxClient.IS_TOUCH ? "touchstart" : "mousedown", function (a) {
                                mxEvent.consume(a)
                            });
                            mxEvent.addListener(c, d, function (a) {
                                b();
                                mxEvent.consume(a)
                            });
                            u = u + v;
                            A.appendChild(c)
                        };
                        e("+", function () {
                            q.zoomIn()
                        });
                        e("-", function () {
                            q.zoomOut()
                        });
                        e = function () {
                            A.style.top = d.offsetTop + H.y + "px";
                            A.style.left = d.offsetLeft + H.x +
                                "px";
                            A.style.visibility = "visible"
                        };
                        if (mxClient.IS_TOUCH)e(); else {
                            f = function () {
                                A.style.visibility = "hidden"
                            };
                            mxEvent.addListener(d, "mouseover", e);
                            mxEvent.addListener(A, "mouseover", e);
                            mxEvent.addListener(d, "mouseout", f);
                            mxEvent.addListener(A, "mouseout", f);
                            f()
                        }
                        d.nextSibling != null ? d.parentNode.insertBefore(A, d.nextSibling) : d.parentNode.appendChild(A)
                    }
                }
            } catch (K) {
                throw K;
            }
        }(b[c])
    })()