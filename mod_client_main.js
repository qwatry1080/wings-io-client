(function() {
  console.log("Hosted Script Ran! Aimbot.");
  var Zb, $b;

  function ac(b) {
    bc = b;
    for (var e = 0; 5 >= e; e++) {
      var f = e,
        d = p.planes[f][b][7],
        a = document.createElement("canvas"),
        c = a.getContext("2d"),
        g = p.frames.plane8;
      a.width = g.width;
      a.height = g.height;
      c.translate(g.width / 2, g.height / 2);
      g.draw(c);
      d.draw(c);
      d = a.toDataURL("image/png");
      a = void 0;
      c = document.styleSheets.length;
      for (g = 0; g < c; g++) {
        var h = document.styleSheets[g];
        if (null == h.href) {
          a = h;
          break
        }
      }
      a.addRule ? a.addRule(".btn-decal" + (f + 1) + ":before", "background-image: url(" + d + ")") : a.insertRule(".btn-decal" + (f + 1) + ":before{background-image: url(" +
        d + ")}", a.cssRules.length)
    }
    for (e = 0; 5 >= e; e++) jQuery("#check" + e)
      .hide();
    jQuery("#check" + b)
      .show()
  }

  function cc(b) {
    dc = b;
    for (var e = 0; 5 >= e; e++) jQuery("#checkD" + e)
      .hide();
    jQuery("#checkD" + b)
      .show()
  }

  function ec() {
    Aa = !1;
    jQuery("#beta")
      .show();
    Ab()
  }

  function fc() {
    var b = -1 < navigator.userAgent.indexOf("Chrome"),
      e = -1 < navigator.userAgent.indexOf("Safari");
    b && e && (e = !1);
    return e
  }

  function gc() {
    var b = "Low";
    Ba && (b = "High");
    var e = jQuery("#graphicsID")[0];
    e && (e.childNodes[0].data = "Graphics: " + b)
  }

  function hc() {
    jQuery("#pfArrow")
      .show();
    jQuery("#pfText")
      .show()
  }

  function ic() {
    jQuery("#copycheckimage")
      .hide();
    jQuery("#copyLink")
      .show();
    jQuery("#copyLinkBox")
      .hide();
    jQuery("#overlay2")
      .fadeIn(200);
    jQuery("#pfArrow")
      .hide();
    jQuery("#pfText")
      .hide();
    setTimeout(function() {
      jQuery("#copycheckimage")
        .fadeIn(300)
    }, 200);
    setTimeout(function() {
      jQuery("#overlay2")
        .fadeOut(200)
    }, 1E3);
    fb = !1
  }

  function jc() {
    var b = "images/sound_off.png";
    1 == O ? da = O = 0 : 0 == O && (O = 1, da = .05, b = "images/sound_on.png");
    window.localStorage.muteVol = O;
    jQuery("#soundImg")[0].src = b
  }

  function Bb() {
    if (null != adsense && adsense) 0 == kc && cpmstarAPI({
      kind: "createmodule",
      module: "anchor78670",
      config: {
        kind: "anchor",
        options: {
          dir: 1,
          width: "1050px"
        },
        request: {
          poolid: "78670",
          kind: "banner"
        }
      }
    }), window.googletag && (window.googletag.cmd.push(function() {
      Cb && (Cb = !1, setTimeout(function() {
          Cb = !0
        }, 6E4 * lc), window.googletag && window.googletag.pubads && window.googletag.pubads()
        .refresh && window.googletag.pubads()
        .refresh(window.ads))
    }), kc++);
    else {
      jQuery("#mpu-top")
        .show();
      var b = jQuery("#ldr-top");
      b && b.show();
      refreshSlots()
    }
  }

  function Kc() {
    A && A.disconnect()
  }

  function Db() {
    da = 1 * O;
    jQuery("#overlay")
      .hide();
    Y = !1
  }

  function mc() {
    if (Aa) {
      var b = Math.floor((R -
        Eb) / 1E3);
      0 > b && (b = 0);
      var e = 10 - b;
      0 > e ? (Aa = !1, Ab()) : (b = jQuery("#countdownText")[0], e = document.createTextNode(e), b.replaceChild(e, b.firstChild), setTimeout(mc, 500))
    }
  }

  function Lc() {
    Bb();
    0 < nc && (jQuery("#continueTop")
      .show(), jQuery("#continueBR")
      .show(), jQuery("#continue")
      .show(), jQuery("#nickInput")
      .hide(), jQuery("#skinPanel")
      .hide(), jQuery("#howto")
      .hide(), Aa = !0, Eb = +new Date, mc());
    jQuery("#overlay")
      .fadeIn(500);
    da = .05 * O;
    F.clearBonusDisplay()
  }

  function Fb(b) {
    if (G) Y = !0, Z || (ka = 1, v = null);
    else {
      Y = !0;
      Z || (ka = 1, v = null);
      hc();
      if (0 <= b) {
        Aa = !0;
        jQuery("#beta")
          .hide();
        var e =
          jQuery("#curScore")[0],
          f;
        f = u.isInstagib() ? document.createTextNode("Kills: " + b) : document.createTextNode("Current Score: " + b);
        e.replaceChild(f, e.firstChild)
      }
      nc = b;
      setTimeout(Lc, 1E3)
    }
  }

  function Ab() {
    jQuery("#continueTop")
      .hide();
    jQuery("#continueBR")
      .hide();
    jQuery("#continue")
      .hide();
    jQuery("#nickInput")
      .show();
    jQuery("#skinPanel")
      .hide();
    jQuery("#divOff")
      .show();
    jQuery("#divOn")
      .hide();
    jQuery("#howto")
      .show();
    jQuery("#beta")
      .show();
    Eb = +new Date
  }

  function Ua() {
    Gb = Object.keys(B)
      .length;
    document.title = "Wings!"
  }

  function Hb() {
    try {
      return window.self !== window.top
    } catch (b) {
      return !0
    }
  }

  function Va(b) {
    var e =
      "";
    10 > b && (e = "0");
    return e + parseInt(b)
  }

  function oc(b) {
    var e = parseInt(b / 1E3);
    b = parseInt(e / 60);
    var e = e - 60 * b,
      f = parseInt(b / 60);
    b -= 60 * f;
    return 0 == f ? Va(b) + ":" + Va(e) : Va(f) + ":" + Va(b) + ":" + Va(e)
  }

  function va(b, e, f, d) {
    return Math.sqrt((f - b) * (f - b) + (d - e) * (d - e))
  }

  function la() {
    return 50 > +new Date - R
  }

  function aa(b, e, f) {
    var d = z.getBounds();
    return b + f >= d[0].x && b - f <= d[1].x && e + f >= d[0].y && e - f <= d[1].y ? !0 : !1
  }

  function fa(b, e, f) {
    return b < e ? e : b > f ? f : b
  }

  function Da(b, e, f, d) {
    b && (this._size = b);
    e && (this._color = e);
    this._stroke = !!f;
    d && (this._strokeColor = d)
  }

  function ba(b, e, f) {
    b && (this._size = b);
    e && (this._color = e);
    f && (this._secondColor = f)
  }

  function ga(b) {
    "" == b && (b = "<Unnamed>");
    return b
  }

  function Ea(b, e, f, d, a, c) {
    c /= 2;
    b.beginPath();
    b.moveTo(e, f + c);
    b.lineTo(e, f + a - c);
    b.quadraticCurveTo(e, f + a, e + c, f + a);
    b.lineTo(e + d - c, f + a);
    b.quadraticCurveTo(e + d, f + a, e + d, f + a - c);
    b.lineTo(e + d, f + c);
    b.quadraticCurveTo(e + d, f, e + d - c, f);
    b.lineTo(e + c, f);
    b.quadraticCurveTo(e, f, e, f + c);
    b.closePath();
    b.fill()
  }

  function pc(b, e, f, d, a, c) {
    c /= 2;
    b.beginPath();
    b.moveTo(e, f +
      c);
    b.lineTo(e, f + a);
    b.lineTo(e + d, f + a);
    b.lineTo(e + d, f + c);
    b.quadraticCurveTo(e + d, f, e + d - c, f);
    b.lineTo(e + c, f);
    b.quadraticCurveTo(e, f, e, f + c);
    b.closePath();
    b.fill()
  }

  function gb(b, e, f) {
    var d = b * Math.cos(f) - e * Math.sin(f);
    b = e * Math.cos(f) + b * Math.sin(f);
    return {
      x: d,
      y: b
    }
  }
  window.location.href.split("/");
  var Ib = "https:" == window.location.protocol,
    G = window.location.pathname.indexOf("mobile"); - 1 == G && (G = 0);
  var Jb = 1E3 / 30 * 3,
    Mc = [{
      r: 255,
      g: 0,
      b: 0
    }, {
      r: 255,
      g: 119,
      b: 0
    }, {
      r: 255,
      g: 202,
      b: 0
    }, {
      r: 174,
      g: 231,
      b: 24
    }, {
      r: 0,
      g: 119,
      b: 255
    }, {
      r: 236,
      g: 19,
      b: 213
    }],
    ha = 2,
    hb = 0,
    ib = 0,
    ma = 0,
    U, qc = 0,
    rc = 0,
    H, ca = {},
    Ka, Wa, Kb = 1,
    Z = !1,
    wa = !0,
    Lb = !1,
    R = 0,
    Mb = 0,
    E = 1600,
    Nb = E / 2 - 100,
    $ = 5E3,
    ka = 1,
    Y = !0,
    Gb = 0,
    Xa = 0,
    Ob = !1,
    jb = 1,
    bc = 0,
    dc = 0,
    qa = 0,
    sc = 0,
    Aa = !1,
    Eb, nc = 0,
    da = 1,
    O = window.localStorage.muteVol,
    tc = 3,
    uc = 750,
    vc = 5,
    wc = 10,
    xc = 20,
    yc = 150,
    t = 1,
    kb = 0,
    zc = 0,
    Ac = .3,
    La = !1,
    Ma = null,
    Ba = !0,
    lb = !1,
    mb, ia, na, nb, Cb = !0,
    lc = 2,
    xa = !1;
  G && (xa = !0);
  var kc = 0,
    ob = !0,
    Na = !0,
    pb = !0,
    qb = !0,
    rb = !0,
    Ya = !0,
    sb = !0,
    tb = !0,
    Pb = !0,
    M, X, p, A, W = {},
    B = {},
    T = {},
    N = {},
    ja = [],
    v, ra, Qb, Oa = 0,
    z, F, oa, ya, L, Za = {},
    ub = 0,
    u, sa, $a = {},
    fb = !1;
  (function() {
    var b = window.location.search;
    "?" == b.charAt(0) && (b = b.slice(1));
    for (var b = b.split("&"), e = 0; e < b.length; e++) {
      var f = b[e].split("=");
      $a[f[0]] = f[1]
    }
  })();
  "true" == window.localStorage.lq && (Ba = !1);
  var vb = null,
    Bc = function() {
      var b = "";
      Ib && (b = "s");
      jQuery.get("http" + b + "://ip2l.wings.io/cc", function(b) {
        vb = b.substring(0, 2);
        window.localStorage.wingsCC = vb;
        window.localStorage.wingsCCTime = +new Date
      }, "text")
    };
  void 0 == window.localStorage.wingsCCTime || void 0 != window.localStorage.wingsCC && 2 != window.localStorage.wingsCC.length ? Bc() : 288E5 < +new Date - window.localStorage.wingsCCTime ? Bc() : vb = window.localStorage.wingsCC;
  var Rb = function() {
    R = +new Date;
    var b = 0;
    0 < Mb && (b = R - Mb);
    Mb = R;
    M.update(b);
    M.draw(b);
    window.requestAnimationFrame && window.requestAnimationFrame(Rb);
    Lb && (Lb = !1)
  };
  document.body.onselectstart = function() {
    return !1
  };
  window.switchSkins = function() {
    ec();
    Ob ? (jQuery("#howto")
      .show(), jQuery("#skinPanel")
      .hide(), jQuery("#divOff")
      .show(), jQuery("#divOn")
      .hide()) : (jQuery("#howto")
      .hide(), jQuery("#skinPanel")
      .show(), jQuery("#divOff")
      .hide(), jQuery("#divOn")
      .show());
    Ob = !Ob
  };
  window.setSkinColor = function(b) {
    ac(b)
  };
  window.setDecal = function(b) {
    cc(b)
  };
  window.clickPlay = function(b) {
    Z ? Db() : (window.localStorage.nick =
      b, document.getElementsByTagName("canvas")[0].style.cursor = "url(images/crosshair.png) 16 16, auto", kb++, U.mouseMoved = !1, A.sendNick(b, Aa), Aa && (Ab(), Aa = !1), u.isSpaceWars() ? F.showTip("Hint: Earn points faster by destroying asteroids.") : document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || 2 != kb && 4 != kb && 6 != kb || F.showTip("Press 'F' to toggle Fullscreen"))
  };
  window.setSpectate = function(b) {
    xa = !0;
    document.getElementsByTagName("canvas")[0].style.cursor = "default";
    Db();
    zc++;
    ec();
    Z ? (A.leave(),
      Z = !1, M.waitUntilNextFollow()) : M.followTopPlayer();
    ka = 0;
    zc % 2 || 1 >= Gb ? F.showTip("Press 'ESC' to go back") : F.showTip("Click to follow next player")
  };
  window.setContinue = function() {
    jQuery("#topGui")
      .show();
    jQuery("#roomFailed")
      .hide();
    Hb() || (parent.location.hash = "");
    A.getServerAndConnect()
  };
  window.toggleGraphics = function() {
    Ba = !Ba;
    M.resize();
    window.localStorage.lq = !Ba;
    gc()
  };
  window.copyRoomLink = function() {
    jQuery("#copyLink")
      .hide();
    jQuery("#copyLinkBox")
      .show();
    var b = jQuery("#roomlinkInput")[0];
    b.value = "http://classic.wings.io/#" + A.roomID;
    fb = !0;
    fc() &&
      (jQuery("#copyButton")[0].childNodes[0].data = "Close", jQuery("#safariTooltip")
        .show());
    setTimeout(function() {
      b.setSelectionRange(0, b.value.length);
      b.select();
      b.focus()
    }, 100)
  };
  window.setCopy = function() {
    var b = jQuery("#roomlinkInput")[0];
    b.value = "http://wings.io/#" + A.roomID;
    b.setSelectionRange(0, b.value.length);
    b.select();
    b.focus();
    if (fc()) jQuery("#copyLinkBox")
      .hide(), jQuery("#copyLink")
      .show(), fb = !1;
    else {
      try {
        document.execCommand("copy")
      } catch (e) {}
      ic()
    }
  };
  null != adsense && adsense && Bb();
  window.clickNoNames = function(b) {
    lb = !lb;
    b.checked = lb
  };
  window.toggleMute =
    function() {
      jc()
    };
  void 0 == O && (O = 1);
  var Cc = window.navigator.userAgent,
    Dc = -1 < Cc.indexOf("MSIE ") || -1 < Cc.indexOf("Trident/");
  "undefined" === typeof window.orientation || G || (window.location.href = "https://itunes.apple.com/us/app/wings.io/id1098205567?l=pt&ls=1&mt=8");
  if (0 == O || Dc) O = 1, G || jc();
  Dc && jQuery("#sndIcon")
    .hide();
  var wb;
  window.onblur = function() {
    wb = setTimeout(Kc, 3E5);
    wa = !1;
    da = 0;
    L && (L.sound.volume(0), L.sound.volume(0, mb), L.sound.volume(0, ia), L.sound.volume(0, na), nb && L.sound.volume(0, nb))
  };
  window.onfocus = function() {
    wb && (clearTimeout(wb),
      wb = null);
    Lb = wa = !0;
    da = 1 * O;
    for (var b in B) B[b].clearTrail()
  };
  window.connectToServer = function(b) {
    A.roomNumber = 0;
    A.remoteHost = b;
    A.connect();
    console.log("CONNECTING NOW to " + b)
  };
  window.disconnect = function() {
    A.disconnect();
    console.log("Disconnected.")
  };
  window.enterGame = function(b) {
    clickPlay(b);
    onfocus()
  };
  var Sb = !1;
  window.setInput = function(b, e, f) {
    U.angle = b;
    U.hover = e;
    !Sb && f ? A.sendShooting(f) : Sb && !f && A.sendShooting(f);
    Sb = f
  };
  window.wasKilled = function(b) {
    U.angle = Math.PI;
    U.hover = 1;
    G && (Aa = !0, b = {
        score: b
      }, "undefined" != typeof messageHandlers &&
      messageHandlers.wasKilled ? messageHandlers.wasKilled(JSON.stringify(b)) : window.webkit.messageHandlers.wasKilled.postMessage(b))
  };
  window.connectionClosed = function() {
    console.log("Connection was closed");
    U.angle = Math.PI;
    U.hover = 1;
    G && ("undefined" != typeof messageHandlers && messageHandlers.connectionClosed ? messageHandlers.connectionClosed(JSON.stringify({})) : window.webkit.messageHandlers.connectionClosed.postMessage({}))
  };
  if (G) window.onblur();
  window.localStorage.nick && (jQuery("#nick")[0].value = window.localStorage.nick);
  document.oncontextmenu = function() {
    return !1
  };
  var Nc = function() {
      this.eventType = {
        EVENT_NONE: 0,
        EVENT_WAITING: 1,
        EVENT_WARSHIP: 2,
        EVENT_INSTAGIB: 3,
        EVENT_GLADIATOR: 4,
        EVENT_SPACEWARS: 5
      };
      this.type = this.eventType.EVENT_NONE;
      this.endTime = 0;
      this.waiting = this.machinegunSwitch = this.railSwitch = !1;
      this.warshipsLeft = 3;
      this.warshipsEscaped = this.warshipsDestroyed = 0;
      this.setType = function(b) {
        this.type = b;
        this.isSpaceWars() ? (jQuery("#pfText")
          .css({
            "-webkit-filter": "brightness(100%)"
          }), jQuery("#pfArrow")
          .css({
            "-webkit-filter": "brightness(100%)"
          })) : (jQuery("#pfText")
          .css({
            "-webkit-filter": "brightness(0%)"
          }),
          jQuery("#pfArrow")
          .css({
            "-webkit-filter": "brightness(0%)"
          }));
        this.isWarship() && (this.warshipsLeft = 3, this.warshipsEscaped = this.warshipsDestroyed = 0)
      };
      this.isInEvent = function() {
        return this.type != this.eventType.EVENT_NONE && 0 == this.waiting
      };
      this.isInstagib = function() {
        return this.type == this.eventType.EVENT_INSTAGIB && 0 == this.waiting
      };
      this.isSpaceWars = function() {
        return this.type == this.eventType.EVENT_SPACEWARS && 0 == this.waiting
      };
      this.isWarship = function() {
        return this.type == this.eventType.EVENT_WARSHIP && 0 == this.waiting
      };
      this.getEventName = function() {
        return this.type == this.eventType.EVENT_INSTAGIB ? "SUDDEN DEATH" : this.type == this.eventType.EVENT_SPACEWARS ? "SPACE WARS" : this.type == this.eventType.EVENT_WARSHIP ? "WARSHIP ATTACK" : "NEW EVENT"
      };
      this.getEventColor = function() {
        return this.type == this.eventType.EVENT_SPACEWARS ? "#FF3300" : "#fe6800"
      };
      this.setWarshipInfo = function(b, e, f) {
        this.warshipsLeft = b;
        this.warshipsDestroyed = e;
        this.warshipsEscaped = f
      }
    },
    Tb = "Arial Black";
  G && (Tb = "Arial-BoldMT");
  Da.prototype = {
    _value: "",
    _color: "#000000",
    _stroke: !1,
    _strokeColor: "#000000",
    _strokeWidth: 3,
    _size: 16,
    _canvas: null,
    _ctx: null,
    _dirty: !1,
    _scale: 1,
    _font: "px 'proxima-nova-1','proxima-nova-2', " + Tb,
    _usingRoundedFrame: !1,
    _hmargin: 3,
    _vmargin: -1,
    _frameOpacity: .2,
    setFont: function(b) {
      this._font != b && (this._font = b, this._dirty = !0)
    },
    setSize: function(b) {
      this._size != b && (this._size = b, this._dirty = !0)
    },
    setScale: function(b) {
      this._scale != b && (this._scale = b, this._dirty = !0)
    },
    setColor: function(b) {
      this._color != b && (this._color = b, this._dirty = !0)
    },
    setStroke: function(b) {
      this._stroke !=
        b && (this._stroke = b, this._dirty = !0)
    },
    setStrokeWidth: function(b) {
      this._stroke != b && (this._strokeWidth = b, this._dirty = !0)
    },
    setStrokeColor: function(b) {
      this._strokeColor != b && (this._strokeColor = b, this._dirty = !0)
    },
    setValue: function(b) {
      b != this._value && (this._value = b, this._dirty = !0)
    },
    setHMargin: function(b) {
      b != this._hmargin && (this._hmargin = b, this._dirty = !0)
    },
    setVMargin: function(b) {
      b != this._vmargin && (this._vmargin = b, this._dirty = !0)
    },
    setUsingRoundedFrame: function(b) {
      b != this._usingRoundedFrame && (this._usingRoundedFrame =
        b, this._dirty = !0)
    },
    setRoundedFrameOpacity: function(b) {
      b != this._frameOpacity && (this._frameOpacity = b, this._dirty = !0)
    },
    render: function() {
      null == this._canvas && (this._canvas = document.createElement("canvas"), this._ctx = this._canvas.getContext("2d"));
      if (this._dirty) {
        this._dirty = !1;
        var b = this._canvas,
          e = this._ctx,
          f = this._value,
          d = this._scale,
          a = this._size,
          c = "Bold " + a + this._font;
        e.font = c;
        var g = e.measureText(f)
          .width,
          h = this._hmargin,
          q = 2; - 1 < this._vmargin && (q = this._vmargin);
        var n = 0;
        this._stroke && (n = this._strokeWidth);
        b.width =
          (g + 2 * h + n) * d;
        b.height = (a + 2 * q + n) * d;
        e.font = c;
        e.scale(d, d);
        e.globalAlpha = 1;
        e.lineJoin = "round";
        e.lineWidth = this._strokeWidth;
        e.strokeStyle = this._strokeColor;
        this._usingRoundedFrame && (e.fillStyle = "#000000", e.globalAlpha = this._frameOpacity, Ea(e, 0, 0, b.width, b.height, 10), e.globalAlpha = 1);
        e.fillStyle = this._color;
        this._stroke && e.strokeText(f, h + 2, a + q / 2);
        e.fillText(f, h + 2, a + q / 2)
      }
      return this._canvas
    }
  };
  ba.prototype = {
    _value: "",
    _color: "#000000",
    _secondColor: "#FFFFFF",
    _size: 16,
    _canvas: null,
    _ctx: null,
    _dirty: !1,
    _scale: 1,
    _font: "px 'proxima-nova-1','proxima-nova-2', " + Tb,
    _extrude: 3,
    _usingFrame: !1,
    _usingRoundedFrame: !1,
    _angX: 0,
    _angY: 0,
    _d: 5,
    _addTop: 0,
    setAddTop: function(b) {
      b != this._addTop && (this._addTop = b, this._dirty = !0)
    },
    setFont: function(b) {
      this._font != b && (this._font = b, this._dirty = !0)
    },
    setSize: function(b) {
      this._size != b && (this._size = b, this._dirty = !0)
    },
    setScale: function(b) {
      this._scale != b && (this._scale = b, this._dirty = !0)
    },
    setColor: function(b) {
      this._color != b && (this._color = b, this._dirty = !0)
    },
    setSecondColor: function(b) {
      this._secondColor !=
        b && (this._secondColor = b, this._dirty = !0)
    },
    setValue: function(b) {
      b != this._value && (this._value = b, this._dirty = !0)
    },
    setUsingRoundedFrame: function(b) {
      b != this.__usingRoundedFrame && (this._usingRoundedFrame = b, this._dirty = !0)
    },
    setUsingFrame: function(b) {
      b != this._usingFrame && (this._usingFrame = b, this._dirty = !0)
    },
    calcAngVector: function(b) {
      this._angX = Math.sin(b) * this._d;
      this._angY = Math.cos(b) * this._d
    },
    render: function() {
      null == this._canvas && (this._canvas = document.createElement("canvas"), this._ctx = this._canvas.getContext("2d"));
      if (this._dirty) {
        this._dirty = !1;
        var b = this._canvas,
          e = this._ctx,
          f = this._value,
          d = this._scale,
          a = this._size,
          c = "Bold " + a + this._font;
        e.font = c;
        var g = e.measureText(f)
          .width,
          h = ~~(.2 * a);
        b.width = (g + 6 + 10 + 2 * this._d) * d;
        b.height = (a + h + this._extrude + 2 * this._d + this._addTop) * d;
        e.font = c;
        e.scale(d, d);
        this._usingFrame && (e.globalAlpha = 1, e.fillStyle = "#000000", e.moveTo(this._angX, this._angY + 15 * t), e.lineTo(b.width + this._angX - 4 * t, this._angY + 7 * t), e.lineTo(b.width + this._angX - 15 * t, b.height + this._angY - 9 * t), e.lineTo(this._angX + 5 *
          t, b.height + this._angY - 17 * t), e.fill());
        this._usingRoundedFrame && (e.globalAlpha = .3, Ea(e, 0, 0, b.width, b.height, 40), e.globalAlpha = 1);
        G && (e.lineJoin = "round", e.lineWidth = 3, e.strokeStyle = this._secondColor, e.strokeText(f, 8 + this._d, a - h / 2 + 1 + this._d + this._addTop), this._extrude = 0);
        for (b = this._extrude; 0 <= b; b--) d = b, e.fillStyle = 0 == b ? this._color : this._secondColor, e.fillText(f, 8 + this._d, a - h / 2 + d + this._d + this._addTop)
      }
      return this._canvas
    }
  };
  var Oc = function() {
      this.loaded = !1;
      this.onLoad = null;
      this.spriteSheetLoaded = !1;
      this.gameSheet;
      this.frames = {};
      this.whitePlaneImages = {};
      this.planeFrames;
      this.planeFramesReflex;
      this.planes = [];
      this.doubleKillCanvas;
      this.tripleKillCanvas;
      this.quadKillCanvas;
      this.multiKillCanvas;
      this.warshipImage;
      this.whiteWarshipImage;
      this.cannonImage;
      this.warshipIcon;
      this.warshipLoaded = !1;
      this.warshipTextureLoadCount = 0;
      this.asteroidLoaded = !1;
      this.asteroidImage;
      this.whiteAsteroidImage;
      this.blinkImage;
      this.loadGameSpritesheet = function() {
        this.gameSheet = new Image;
        this.gameSheet.src = "images/sheet.png";
        this.gameSheet.onload =
          function() {
            p.loadGameSpritesheetFrames();
            p.spriteSheetLoaded = !0;
            p.loadAnimations();
            p.generateHudIcons();
            p.loaded = !0;
            p.onLoad()
          }
      };
      this.loadGameSpritesheetFrames = function() {
        for (var b = gameSheetInfo.length, e = 0; e < b; e++) {
          var f = gameSheetInfo[e],
            d = new xb;
          d.setFrameInfo(f, this.gameSheet);
          this.frames[f[0]] = d
        }
        for (e = 1; 8 >= e; e++) b = this.frames["plane" + e].renderTintedFrame("#FFFFFF")
          .canvas, this.whitePlaneImages["plane" + e] = b;
        for (e = 0; 5 >= e; e++) this.planes[e] = [];
        this.loadPlaneImages();
        for (e = 0; 5 >= e; e++) this.loadPlaneDecal(0,
          e), this.loadPlaneDecal(1, e), this.loadPlaneDecal(2, e), this.loadPlaneDecal(3, e), this.loadPlaneDecal(4, e), this.loadPlaneDecal(5, e)
      };
      this.loadPlaneImages = function(b, e) {
        for (var f = [], d = [], a = 1; 8 >= a; a++) {
          var c = this.frames["plane" + a];
          f.push(c);
          d.push(c.renderTintedFrame("rgba(0,100,255,1.0)"))
        }
        this.planeFrames = f;
        this.planeFramesReflex = d
      };
      this.loadPlaneDecal = function(b, e) {
        for (var f = Mc[e], d = [], a = 1; 8 >= a; a++) {
          var c;
          c = this.frames["decal" + b + "_" + a].generateTintImage2(f.r, f.g, f.b, 1);
          d.push(c)
        }
        this.planes[b][e] = d
      };
      this.loadAnimations = function() {
        for (var b = new Ub, e = new Ub, f = 0; 13 > f; f++) b.addFrame(this.frames["s" + f]), e.addFrame(this.frames["s" + f].renderTintedFrame("#2b9bf5"));
        b.setInterval(1E3 / 30);
        X.addAnimationInfo("splash", b);
        e.setInterval(1E3 / 30);
        X.addAnimationInfo("splashReflex", e);
        b = new Ub;
        b.addFrame(this.frames.e0);
        b.addFrame(this.frames.e0);
        b.addFrame(this.frames.e2);
        b.addFrame(this.frames.e3);
        b.addFrame(this.frames.e4);
        b.addFrame(this.frames.e5);
        b.addFrame(this.frames.e5);
        b.addFrame(this.frames.e7);
        b.addFrame(this.frames.e7);
        b.addFrame(this.frames.e9);
        b.addFrame(this.frames.e10);
        b.addFrame(this.frames.e11);
        b.addFrame(this.frames.e11);
        b.addFrame(this.frames.e13);
        b.addFrame(this.frames.e14);
        b.addFrame(this.frames.e15);
        b.addFrame(this.frames.e16);
        b.addFrame(this.frames.e17);
        b.addFrame(this.frames.e18);
        b.addFrame(this.frames.e19);
        b.addFrame(this.frames.e20);
        b.addFrame(this.frames.e21);
        b.addFrame(this.frames.e22);
        b.setInterval(1E3 / 30);
        X.addAnimationInfo("explosion", b)
      };
      this.generateTintedKillIcon = function(b, e, f, d) {
        var a;
        a =
          p.frames.iconkill;
        frameIconR = p.frames.killR;
        var c = a.generateRGBKs();
        f = a.generateTintImage(c, b, e, f);
        b = document.createElement("canvas");
        b.width = f.width;
        b.height = f.height;
        e = b.getContext("2d");
        e.drawImage(f.canvas, 0, 0);
        d = frameIconR.renderTintedFrame(d);
        d.x = a.width / 2;
        d.y = a.height / 2;
        d.draw(e);
        return b
      };
      this.generateHudIcons = function() {
        var b = 30,
          e = 0,
          e = this.generateTintedKillIcon(205, 154, 109, "#FFFFFF"),
          f = this.generateTintedKillIcon(172, 121, 76, "#BBBBBB"),
          d = document.createElement("canvas");
        d.width = e.width;
        d.height = e.height +
          b;
        var a = d.getContext("2d"),
          e = e.getContext("2d"),
          f = f.getContext("2d");
        a.drawImage(f.canvas, 0, 0);
        a.drawImage(e.canvas, 0, b);
        this.doubleKillCanvas = d;
        var b = 10,
          e = 70,
          d = .9,
          c = this.generateTintedKillIcon(167, 176, 185, "#FFFFFF"),
          f = this.generateTintedKillIcon(129, 138, 148, "#BBBBBB"),
          g = document.createElement("canvas");
        g.width = c.width + e;
        g.height = c.height + b;
        var h = g.getContext("2d"),
          e = c.getContext("2d"),
          f = f.getContext("2d"),
          a = g.width / 2 - c.width / 2 * d;
        h.save();
        h.translate(a, 0);
        h.scale(d, d);
        h.drawImage(f.canvas, -30, 0);
        h.drawImage(f.canvas,
          30, 0);
        h.restore();
        a = g.width / 2 - c.width / 2;
        h.drawImage(e.canvas, a, b);
        this.tripleKillCanvas = g;
        shift2Y = 20;
        shift2X = 160;
        d = .95;
        c = this.generateTintedKillIcon(240, 164, 0, "#FFFFFF");
        f = this.generateTintedKillIcon(200, 124, 0, "#ddaf63");
        b = this.generateTintedKillIcon(158, 98, 0, "#b25c5c");
        g = document.createElement("canvas");
        g.width = c.width + shift2X;
        g.height = c.height + 1.5 * shift2Y;
        a = g.width / 2 - c.width / 2 * d;
        h = g.getContext("2d");
        e = c.getContext("2d");
        f = f.getContext("2d");
        b = b.getContext("2d");
        h.save();
        h.translate(a, 0);
        h.scale(d, d);
        h.drawImage(b.canvas,
          0, 0);
        h.restore();
        a = g.width / 2 - c.width / 2 * d;
        h.save();
        h.translate(a, 0);
        h.scale(d, d);
        h.drawImage(f.canvas, -35, 15);
        h.drawImage(f.canvas, 35, 15);
        h.restore();
        a = g.width / 2 - c.width / 2;
        h.drawImage(e.canvas, a, 1.5 * shift2Y);
        this.quadKillCanvas = g;
        c = this.generateTintedKillIcon(222, 0, 0, "#FFFFFF");
        f = this.generateTintedKillIcon(172, 0, 0, "#d68080");
        b = this.generateTintedKillIcon(133, 0, 0, "#b25c5c");
        g = document.createElement("canvas");
        g.width = c.width + shift2X;
        g.height = c.height + 1.5 * shift2Y;
        a = g.width / 2 - c.width / 2 * .65;
        h = g.getContext("2d");
        e = c.getContext("2d");
        f = f.getContext("2d");
        b = b.getContext("2d");
        h.save();
        h.translate(a, 0);
        h.scale(.65, .65);
        h.drawImage(b.canvas, -105, 10);
        h.drawImage(b.canvas, 105, 10);
        h.drawImage(b.canvas, -40, 10);
        h.drawImage(b.canvas, 40, 10);
        h.drawImage(b.canvas, 0, shift2Y);
        h.restore();
        a = g.width / 2 - c.width / 2 * d;
        h.save();
        h.translate(a, 0);
        h.scale(d, d);
        h.drawImage(f.canvas, -35, shift2Y);
        h.drawImage(f.canvas, 35, shift2Y);
        h.restore();
        a = g.width / 2 - c.width / 2;
        h.drawImage(e.canvas, a, 1.5 * shift2Y);
        this.multiKillCanvas = g
      };
      this.load = function(b) {
        this.onLoad =
          b;
        this.loadGameSpritesheet()
      };
      this.loadTintImage = function(b, e, f) {
        var d = document.createElement("canvas"),
          a = d.getContext("2d"),
          c = b.width,
          g = b.height;
        d.width = c;
        d.height = g;
        var h = document.createElement("canvas");
        h.width = c;
        h.height = g;
        c = h.getContext("2d");
        c.fillStyle = f;
        c.fillRect(0, 0, h.width, h.height);
        c.globalCompositeOperation = "destination-atop";
        c.drawImage(b, 0, 0);
        a.globalAlpha = 1;
        a.drawImage(h, 0, 0);
        e(d)
      };
      this.verifyWarshipLoaded = function() {
        3 == this.warshipTextureLoadCount && (this.warshipLoaded = !0)
      };
      this.loadWarshipEvent =
        function() {
          this.warshipLoaded || (this.warshipImage = new Image, this.warshipImage.src = "images/events/battleship.png", this.warshipImage.onload = function() {
              p.warshipLoaded = !0;
              p.loadTintImage(p.warshipImage, function(b) {
                p.whiteWarshipImage = b;
                p.warshipTextureLoadCount++;
                p.verifyWarshipLoaded()
              }, "#FFFFFF")
            }, this.cannonImage = new Image, this.cannonImage.src = "images/events/shipcannon.png", this.cannonImage.onload = function() {
              p.warshipTextureLoadCount++;
              p.verifyWarshipLoaded()
            }, this.warshipIcon = new Image, this.warshipIcon.src =
            "images/events/warshipIcon.png", this.warshipIcon.onload = function() {
              p.warshipTextureLoadCount++;
              p.verifyWarshipLoaded()
            })
        };
      this.loadAsteroidEvent = function() {
        this.asteroidLoaded || (this.asteroidImage = new Image, this.asteroidImage.src = "images/events/asteroid.png", this.asteroidImage.onload = function() {
          p.asteroidLoaded = !0;
          p.loadTintImage(p.asteroidImage, function(b) {
            p.whiteAsteroidImage = b
          }, "#FF3333")
        }, this.blinkImage = new Image, this.blinkImage.src = "images/events/blink.png")
      }
    },
    Pc = function() {
      var b = this,
        e = !1,
        f = 0,
        d = 0;
      this.angle = Math.PI;
      this.throttle = 0;
      this.rotationValue = .1;
      this.varAngle = 0;
      this.mouseMoved = !1;
      this.hover = 1;
      b.keydown = function(a) {
        67 == a.keyCode && Y && fb ? setTimeout(function() {
          ic()
        }, 10) : Y || (32 == a.keyCode ? Z && A.sendShooting(!0) : 188 != a.keyCode && 49 != a.keyCode && (222 == a.keyCode ? Pb = !Pb : 51 == a.keyCode ? (tb = !tb, console.log("Toggled Gradient to " + tb)) : 52 == a.keyCode ? (ob = !ob, console.log("Toggled drawClouds to " + ob)) : 53 == a.keyCode ? (Na = !Na, console.log("Toggled drawWater to " + Na)) : 54 == a.keyCode ? (pb = !pb, console.log("Toggled drawExplosions to " +
          pb)) : 55 == a.keyCode ? (qb = !qb, console.log("Toggled drawSun to " + qb)) : 56 == a.keyCode ? (rb = !rb, console.log("Toggled drawItems to " + rb)) : 57 == a.keyCode ? (Ya = !Ya, console.log("Toggled drawTrails to " + Ya)) : 48 == a.keyCode ? (sb = !sb, console.log("Toggled drawSplashes to " + sb)) : 27 == a.keyCode ? (Bb(), da = .05 * O, jQuery("#overlay")
          .show(), hc(), Y = !0, Z || (ka = 1, v = null)) : 70 == a.keyCode && (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ?
          document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() : document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.msRequestFullscreen ? document.documentElement.msRequestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT), F.clearTip())))
      };
      b.keyup = function(a) {
        Y ||
          32 != a.keyCode || (Z ? A.sendShooting(!1) : (1 == ka ? (ka = 0, M.followTopPlayer()) : (ka = 1, v = null), u.isSpaceWars() && setTimeout(M.respawnParticles, 500)))
      };
      b.mousedown = function(a) {
        Y || (Z ? 0 == a.button && A.sendShooting(!0) : 0 == ka ? 0 == a.button ? M.PlayerFollowing(!0) : 2 == a.button && M.PlayerFollowing(!1) : (e = !0, f = a.clientX, d = a.clientY))
      };
      b.mouseup = function(a) {
        Y || (Z ? 0 == a.button && A.sendShooting(!1) : e = !1)
      };
      window.dist2 = (a, b) => (a.x - b.x)*(a.x - b.x) + (a.y - b.y)*(a.y - b.y);
      window.getAimbotTarget = function() {
        let bestScore = -1;
        for (const id in window.allPlanes) {
          const plane = window.allPlanes[id];
          if (!plane.inGame) {
            continue;
          }
          if (plane.score > bestScore) {
            window.aimbotTarget = plane;
            bestScore = plane.score;
          }
        }
        return;
        
        if (window.aimbotTarget == null || !window.aimbotTarget.inGame || window.targetDist > 1000) {
          window.aimbotTarget = null;
          let dist2Target = Number.POSITIVE_INFINITY;
          for (const i in window.allPlanes) {
            let plane = window.allPlanes[i];
            if (plane.x == window.myPlane2.x && plane.y == window.myPlane2.y) {
              console.log("Found myself");
              continue;
            }
            let d2 = dist2(plane, window.myPlane2);
            if (d2 < dist2Target) {
              window.aimbotTarget = plane;
              dist2Target = d2;
            }
          }
          window.targetDist = Math.sqrt(dist2Target);
        }
      }
      b.mousemove = function(a) {
        let clientX = a.clientX;
        let clientY = a.clientY;
        if (window.aimbot) {
          window.aimbotTarget = null;
          let dist2Target = Number.POSITIVE_INFINITY;
          for (const i in window.allPlanes) {
            let plane = window.allPlanes[i];
            if (plane.x == window.myPlane2.x && plane.y == window.myPlane2.y) {
              continue;
            }
            let d2 = dist2(plane, window.myPlane2);
            if (d2 < dist2Target) {
              window.aimbotTarget = plane;
              dist2Target = d2;
            }
          }
          //clientX = window.aimbotTarget.x - window.myPlane2.x;
          //clientY = window.aimbotTarget.y - window.myPlane2.y;
        }
        
        if (!Y && (b.mouseMoved = !0, qc = clientX, rc = clientY, e)) {
          var c = clientY - d,
            g = z.x,
            h = z.y,
            g = g - (clientX - f),
            h = h - c;
          h < -E / 2 ? h = -E / 2 : h > E / 2 && (h = E / 2);
          g < -$ ? g = -$ : g > $ && (g = $);
          z.setPosition(g, h);
          f = clientX;
          d = clientY
        }
        
        
        /*
        if (!Y && (b.mouseMoved = !0, qc = a.clientX, rc = a.clientY, e)) {
          var c = a.clientY - d,
            g = z.x,
            h = z.y,
            g = g - (a.clientX - f),
            h = h - c;
          h < -E / 2 ? h = -E / 2 : h > E / 2 && (h = E / 2);
          g < -$ ? g = -$ : g > $ && (g = $);
          z.setPosition(g, h);
          f = a.clientX;
          d = a.clientY
        }*/
      };
      function aimbotToggle(keypress) {
        if (!window.myPlane||!window.allPlanes||!window.myPlane2) {
          return;
        }
        //x = 88
        if (keypress.keyCode == 88) {
          window.aimbot = window.aimbot == null ? true : !window.aimbot;
        }
      }
      this.addListeners = function() {
        document.addEventListener("mousedown", b.mousedown, !1);
        document.addEventListener("mousemove", b.mousemove, !1);
        document.addEventListener("mouseup", b.mouseup, !1);
        document.addEventListener("keydown", aimbotToggle);
        document.addEventListener("keydown", b.keydown, !1);
        document.addEventListener("keyup", b.keyup, !1)
      }
    },
    Rc = function() {
      var b = [];
      this.draw = function(e) {
        for (var f = [], d = 0; d < b.length; d++) {
          var a = b[d];
          if (void 0 == B[a.id]) f.push(a);
          else if (a.weapon == Pa) {
            e.lineWidth =
              2 + 5 * (1 - a.a);
            e.beginPath();
            var c = parseInt(255 * a.a),
              g = e.createLinearGradient(a.hitPosition.x, a.hitPosition.y, a.origPosition.x, a.origPosition.y);
            0 > a.a && (a.a = 0);
            var h = 255;
            1 == a.special ? (h = 0, c = parseInt(.4 * c)) : 2 == a.special && (h = 200, c = parseInt(.1 * c));
            g.addColorStop(0, "rgba(255," + h + "," + c + "," + a.a + ")");
            g.addColorStop(a.a, "rgba(255," + h + "," + c + "," + a.a + ")");
            g.addColorStop(1, "rgba(255," + h + "," + c + ",0.0)");
            e.strokeStyle = g;
            e.moveTo(a.origPosition.x, a.origPosition.y);
            e.lineTo(a.hitPosition.x, a.hitPosition.y);
            e.stroke();
            var g = (a.hitPosition.x - a.origPosition.x) / 100,
              h = (a.hitPosition.y - a.origPosition.y) / 100,
              q = a.angle,
              n = a.origPosition.x,
              k = a.origPosition.y,
              m = 0;
            e.beginPath();
            e.lineWidth = 2 == a.special ? 10 : 4;
            var l = 5;
            a.special && (l = 8);
            for (c = 0; 100 > c; c++) {
              var m = m + Math.PI / 4,
                n = Math.sin(m - 4 * a.a) * (6 + (1 - a.a) * l),
                y = n * Math.cos(q),
                r = n * Math.sin(q),
                n = a.origPosition.x + g * c,
                k = a.origPosition.y + h * c;
              0 == c ? e.moveTo(n + y, k + r) : e.lineTo(n + y, k + r)
            }
            e.stroke();
            a.a -= .04;
            0 > a.a && f.push(a)
          } else if (u.isSpaceWars()) c = 45, a.isKing && (c = 90), g = a.curPosition.x, h = a.curPosition.y,
            q = a.curPosition.x - a.origPosition.x, m = a.curPosition.y - a.origPosition.y, q = Math.sqrt(q * q + m * m), q > c ? (q = a.curPosition.x - a.direction.x * c, m = a.curPosition.y - a.direction.y * c) : (q = a.origPosition.x, m = a.origPosition.y), a.isKing ? (e.shadowColor = "green", e.lineWidth = 9, e.strokeStyle = "rgba(50,255,50,0.7)", e.beginPath(), e.moveTo(g, h), e.lineTo(q, m), e.stroke(), e.lineWidth = 4, e.strokeStyle = "rgba(150,255,150,1.0)") : a.weapon != ab ? (e.shadowColor = "red", e.lineWidth = 7, e.strokeStyle = "rgba(255,50,50,1.0)", e.beginPath(), e.moveTo(g,
              h), e.lineTo(q, m), e.stroke(), e.lineWidth = 3, e.strokeStyle = "rgba(255,150,150,1.0)") : (e.shadowColor = "red", e.lineWidth = 7, e.strokeStyle = "rgba(255,126,39,1.0)", e.beginPath(), e.moveTo(g, h), e.lineTo(q, m), e.stroke(), e.lineWidth = 3, e.strokeStyle = "rgba(255,255,255,1.0)"), e.beginPath(), e.moveTo(g, h), e.lineTo(q, m), e.stroke(), a.finish ? f.push(a) : (c = a.curPosition.x - a.hitPosition.x, g = a.curPosition.y - a.hitPosition.y, c = Math.sqrt(c * c + g * g), a.a -= .05, g = 70 + 10 * Math.random(), c < g ? (a.finish = !0, a.curPosition.x = a.hitPosition.x,
              a.curPosition.y = a.hitPosition.y) : (a.curPosition.x += a.direction.x * g, a.curPosition.y += a.direction.y * g));
          else {
            e.lineWidth = 3;
            e.beginPath();
            c = 140;
            g = a.curPosition.x;
            h = a.curPosition.y;
            q = a.curPosition.x - a.origPosition.x;
            m = a.curPosition.y - a.origPosition.y;
            q = Math.sqrt(q * q + m * m);
            q > c ? (q = a.curPosition.x - a.direction.x * c, m = a.curPosition.y - a.direction.y * c) : (q = a.origPosition.x, m = a.origPosition.y);
            var c = e,
              n = r = y = l = void 0,
              n = q - g,
              r = m - h,
              p = g + .05 * n,
              k = h + .05 * r,
              l = Math.sqrt(n * n + r * r),
              n = n / l,
              r = r / l,
              n = 3 * n,
              r = 3 * r,
              l = p + -r,
              y = k + n,
              r = p - -r,
              n = k - n;
            c.moveTo(g, h);
            c.lineTo(l, y);
            c.lineTo(q, m);
            c.lineTo(r, n);
            e.fillStyle = "rgba(255,255,255," + a.a + ")";
            e.fill();
            a.finish ? f.push(a) : (c = a.curPosition.x - a.hitPosition.x, g = a.curPosition.y - a.hitPosition.y, c = Math.sqrt(c * c + g * g), a.a -= .05, g = 100, c < g ? (a.finish = !0, a.curPosition.x = a.hitPosition.x, a.curPosition.y = a.hitPosition.y) : (a.curPosition.x += a.direction.x * g, a.curPosition.y += a.direction.y * g))
          }
        }
        for (c = 0; c < f.length; c++) e = b.indexOf(f[c]), b.splice(e, 1);
        f.length = 0
      };
      this.addShot = function(e, f, d, a) {
        if (la() && xa) {
          var c =
            B[e];
          if (c) {
            var g = {};
            g.id = e;
            g.angle = c.angle;
            g.isKing = qa == e;
            g.hitPosition = {
              x: 10 * f,
              y: 10 * d
            };
            g.special = 0;
            u.isInstagib() ? g.special = 1 : u.isSpaceWars() && (g.special = 2);
            g.a = 1;
            g.weapon = a;
            f = gb(0, -10, c.angle);
            e = c.x + f.x;
            d = c.y + f.y;
            g.origPosition = {
              x: e,
              y: d
            };
            c = g.hitPosition.x - e;
            f = g.hitPosition.y - d;
            a != za && (a = Math.sqrt(c * c + f * f), g.direction = {
              x: c / a,
              y: f / a
            }, g.curPosition = {
              x: e,
              y: d
            }, g.finish = !1, (aa(e, d, 100) || aa(g.hitPosition.x, g.hitPosition.y, 100)) && b.push(g));
            a = E / 2;
            g.hitPosition.y > a && (e = f / c, oa.addSplash((a - (g.hitPosition.y -
              e * g.hitPosition.x)) / e, a + 6, 1, !1))
          }
        }
      };
      this.addMissileImpact = function(b, f) {
        var d = 10 * b,
          a = 10 * f;
        if (aa(d, a, 100) && la()) {
          var c = X.createAnimation("explosion");
          c.setScale(1);
          c.posX = 10 * b;
          c.posY = 10 * f;
          X.runAnimationBehind(c);
          d = 1 - va(d, a, H.x, H.y) / Qa;
          L.playSound(Qc, d, 1, Ra, null)
        }
      };
      this.addSplash = function(b, f, d, a) {
        if (sb && !u.isSpaceWars() && aa(b, f, 100) && la()) {
          var c = X.createAnimation("splash"),
            g = X.createAnimation("splashReflex");
          c.setScale(d);
          a && (c.scaleX *= 1.2 + .4 * Math.random());
          c.posX = b;
          c.posY = f - 61 * c.scaleY / 2;
          X.runAnimation(c);
          g.scaleX = c.scaleX;
          g.posX = c.posX;
          g.posY = c.posY + 77;
          g.scaleY = -2;
          X.runAnimationLayer2(g)
        }
      }
    },
    Vc = function() {
      var b, e, f, d = 0,
        a = !0,
        c, g, h, q, n = new Sc,
        k, m, l, y, r, J, pa, s, w, z = -1,
        ta = !1,
        F, C, P, S, V, K, Vb, ea = 1,
        Ga = 0,
        D, Fa, ua, E, I = 0,
        Sa, Ha, Ia, H = 0,
        bb, M, X = -1,
        T = !1,
        U = 0,
        Q, W, $, N, O, da, aa = null,
        ja = null,
        ca, fa, ia, ha, wa, na = 0,
        oa = 0,
        va = null,
        la, ma, ya, sa;
      this.draw = function(I) {
        if (ta) {
          C = document.createElement("canvas");
          var r = C.getContext("2d");
          this.renderLeaderboard(r, C)
        }
        if (0 < na) this.DrawWinnerLabel(I);
        else if (0 < oa) this.DrawWarshipDestroyedLabel(I);
        else {
          C && 0 < Gb && (!Y || Aa) && this.drawLeaderboard(I);
          if (v && !Y) {
            I.save();
            G ? I.scale(1.5 * t, 1.5 * t) : I.scale(t, t);
            var J = p.frames.indicator;
            I.translate(J.width / 2 + 6, J.height / 2 + 6);
            J.draw(I);
            this.DrawCurrentWeaponIcon(I, v.weapon);
            var r = 19,
              P = 0;
            G && (r = 24, P = -5);
            null == pa && (pa = new Da(r, "#FFFFFF"));
            var V = u.isInstagib();
            if (z != v.GetAmmo() || null == s) {
              var S = "\u221e";
              V || (z = v.GetAmmo(), -1 < z && (S = z));
              pa.setValue(S);
              s = pa.render();
              w = s.width
            }
            I.globalAlpha = 1;
            I.drawImage(s, .57 * -w, .19 * J.height + r / 2 + P);
            I.restore();
            this.DrawScore(I)
          }
          if (0 <
            d) {
            J = 0;
            r = +new Date - d;
            4E3 > r ? J = 3E3 > r ? 1 : 1 - (r - 3E3) / 1E3 : d = 0;
            h || (P = 20, G && (P = 30), r = !1, f ? (r = 40, G && (r = 50), q = new ba(r * t, "#FF0000", "#990000"), q.setValue(f), q.setUsingFrame(!0), r = !0, G ? q.setAddTop(35) : q.setAddTop(25)) : (q = null, P = G ? 45 : 35), h = new ba(P * t, "#FF0000", "#990000"), h.setValue(e), h.setUsingFrame(!r));
            P = .25 * canvas.height;
            a ? (h.setColor("#00ea11"), h.setSecondColor("#006b08"), q && (q.setColor("#00ea11"), q.setSecondColor("#006b08"))) : (h.setColor("#ff0608"), h.setSecondColor("#a20400"), q && (q.setColor("#ff0608"), q.setSecondColor("#a20400")));
            var r = h.render(),
              K;
            f && (K = q.render());
            I.globalAlpha = J;
            K && I.drawImage(K, .5 * canvas.width - K.width / 2, P - 5);
            I.drawImage(r, .5 * canvas.width - r.width / 2, P);
            I.globalAlpha = 1
          }
          k && (P = .6 * canvas.height, J = m / 1E3 * 10, 1 < J && (J = 1), g || (r = 30, G && (r = 40), g = new ba(r * t, "#FF0000", "#990000")), g.setValue(k), g.setUsingFrame(!0), r = g.render(), K = .1 * Math.sin(m / 100) * t, I.save(), I.translate(.5 * canvas.width, P), I.scale(1 + K, 1 + K), I.translate(-r.width / 2, 0), I.globalAlpha = J, I.drawImage(r, 0, 0), I.restore());
          l && (P = .397 * canvas.height, J = 1, y || (r = 20, G &&
            (r = 30), y = new ba(r * t, "#FF0000", "#990000")), y.setValue(l), y.setUsingFrame(!1), r = y.render(), I.save(), I.translate(.5 * canvas.width, P), I.scale(.8, .8), I.translate(-r.width / 2, 0), I.globalAlpha = J, I.drawImage(r, 0, 0), I.restore());
          A.hasConnection && xa && (u.waiting && !G ? this.DrawWarmupTime(I) : u.isInEvent() ? this.DrawEventLabel(I) : La && !Y && this.DrawLaserDeployed(I));
          null == k && n.shouldDraw() && (I.save(), I.translate(.5 * canvas.width, .67 * canvas.height), n.draw(I), I.restore());
          Z || Y || (K = "FREE MODE", 0 == ka && (K = v ? "Following " + ga(v.name) :
            "FOLLOW MODE"), c || (c = new ba(30 * t, "#ffd118", "#b56006")), c.setValue(K), c.setUsingFrame(!0), r = c.render(), I.globalAlpha = 1, P = .14 * canvas.height, I.drawImage(r, .5 * canvas.width - r.width / 2, P));
          Sa && (4E3 > H ? (null == Ia && (r = 20, G && (r = 30), Ha = new Da(r * t, "#ffd118", !0, "#633504"), Ha.setValue(Sa), Ha.setStrokeWidth(5), Ha.setRoundedFrameOpacity(.5), Ha.setHMargin(5), Ha.setUsingRoundedFrame(!0), Ia = Ha.render()), K = 1, 300 > H ? (K = H / 300, K = Math.sqrt(K, 10)) : 3700 < H && (K = 1 - (H - 3700) / 300, K = Math.sqrt(K, 10)), I.drawImage(Ia, Ka / 2 - Ia.width / 2, 1.1 *
            Ia.height * K - Ia.height)) : Sa = null);
          Y || G || D.draw(I);
          !Y && 0 < qa && this.DrawKing(I);
          ta && (ta = !1);
          b != t && (c = g = null, b = t)
        }
      };
      this.DrawKing = function(a) {
        if (F && 0 < F.length && 0 < Object.keys(B)
          .length) {
          var c = B[F[0]];
          if (c) {
            var d = ga(c.name);
            v && I != c.id && c.id == v.id && L.playSound(Tc, 1, 1, 1, null);
            I = c.id;
            d != Fa && (c = 25, G && (c = 35), ua = new ba(c * t, "#fe9b00", "#6e3800"), c = " ", Ba || (c = ""), G && (c = "  "), ua.setValue(c + "  King: " + d), ua.setUsingRoundedFrame(!0));
            Fa = d;
            E = ua.render()
          }
          ua && (a.save(), d = .83 * canvas.height, a.drawImage(E, .5 * canvas.width -
            E.width / 2, d), c = 20, Ba || (c = 13), a.translate(.5 * canvas.width - E.width / 2 + c, d + E.height / 2 - 2 * t), d = 1, G && (d = 1.5), a.scale(t * d, t * d), p.frames.crown.draw(a), a.restore())
        }
      };
      this.DrawLaserDeployed = function(a) {
        a.save();
        if (Ma != X) {
          X = Ma;
          var c = 25;
          G && (c = 35);
          M = new ba(c * t, "#fbc521", "#c78109");
          Ma ? M.setValue("     Super Weapon: " + Ma) : M.setValue("     Find The Super Weapon!");
          M.setUsingRoundedFrame(!0);
          bb = M.render()
        }
        c = .05 * canvas.height;
        a.drawImage(bb, .5 * canvas.width - bb.width / 2, c);
        var d = 30;
        Ba || (d = 20);
        a.translate(.5 * canvas.width -
          bb.width / 2 + d, c + bb.height / 2);
        a.scale(t, t);
        p.frames.laser.draw(a);
        a.restore()
      };
      this.DrawRank = function(a) {
        0 < v.rank && (void 0 == rankCanvas && (rankCanvas = document.createElement("canvas"), rankCanvas.width = 200, rankCanvas.height = 200, rankCanvasContext = rankCanvas.getContext("2d")), lastRankNumber != v.rank && (rankCanvasContext.clearRect(0, 0, 200, 200), rankCanvasContext.globalAlpha = .3, rankCanvasContext.fillStyle = "rgba(0,0,0,1.0)", Ea(rankCanvasContext, 0, 0, 200, 200, 30 * t), ca = new Da(15 * t, "#EEEEEE"), ca.setValue(v.rank), ca.setUsingRoundedFrame(!1),
          fa = ca.render(), lastRankNumber = v.rank), a.drawImage(rankCanvas, Ka - 200, Wa - 200))
      };
      this.DrawScore = function(a) {
        if (0 < v.rank) {
          var c = 16 * t,
            d = "Arial Black";
          G && (c = 36 * t, d = "Arial-BoldMT");
          var b = P * t,
            g = b,
            h = 30 * t,
            e = 5 * t,
            k = 10 * t,
            n = Ka - b - 5,
            f = V + 5 + 5;
          G && (h = 60 * t, g = b);
          void 0 == r && (r = document.createElement("canvas"), J = r.getContext("2d"));
          if (-1 != v.score)
            for (r.width = g, r.height = h, J.font = c + "px 'proxima-nova-1','proxima-nova-2', " + d, J.globalAlpha = .3, J.textBaseline = "hanging", Ea(J, 0, 0, b, h, 30 * t), J.globalAlpha = 1, c = 2; 0 <= c; c--) d = 0, 0 != c ? (J.fillStyle =
                "rgba(100,49,0,1.0)", d = c) : J.fillStyle = "rgba(255,156,0,1.0)", J.fillText(v.rank + ". You ", e, k + d), g = J.measureText(v.score)
              .width, J.fillText(v.score, b - e - g, k + d);
          a.drawImage(r, n, f + 5)
        }
      };
      this.DrawWarmupTime = function(a) {
        if (T) {
          T = !1;
          var c = u.endTime - R;
          if (0 > parseInt(c)) return;
          W = new ba(23 * t, u.getEventColor(), "#6e3800");
          W.setValue(u.getEventName());
          O = W.render();
          $ = new ba(20 * t, "#fe9b00", "#6e3800");
          $.setValue("STARTS IN");
          da = $.render();
          Q = new ba(27 * t, "#fe9b00", "#6e3800");
          Q.setValue(oc(c));
          N = Q.render()
        }
        if (N) {
          var c = .8 *
            canvas.height,
            d = O.width,
            d = da.width > d ? da.width : d,
            d = N.width > d ? N.width : d;
          a.fillStyle = "#000000";
          a.globalAlpha = .3;
          Ea(a, canvas.width - d - 20, c, d, 102, 20);
          a.globalAlpha = 1;
          a.drawImage(O, canvas.width - d - 20, c);
          a.drawImage(da, canvas.width - d / 2 - da.width / 2 - 20, c + 36);
          a.drawImage(N, canvas.width - d / 2 - N.width / 2 - 20, c + 60)
        }
      };
      this.DrawEventLabel = function(a) {
        if (T) {
          T = !1;
          var c = u.endTime - R;
          0 > parseInt(c) && (c = 0);
          W = new ba(25 * t, u.getEventColor(), "#6e3800");
          W.setValue(u.getEventName());
          O = W.render();
          Q = new ba(25 * t, "#fe9b00", "#6e3800");
          u.isWarship() ? 0 < u.warshipsLeft ? Q.setValue("Warships Left: " + u.warshipsLeft) : 0 == u.warshipsEscaped ? Q.setValue("All Warships Destroyed!") : Q.setValue(u.warshipsDestroyed + " Destroyed, " + u.warshipsEscaped + " Escaped!") : Q.setValue(oc(c));
          N = Q.render()
        }
        if (N) {
          var c = .04 * canvas.height,
            d = N.width < O.width ? O.width : N.width;
          a.fillStyle = "#000000";
          a.globalAlpha = .3;
          Ea(a, canvas.width / 2 - d / 2, c, d, 69, 20);
          a.globalAlpha = 1;
          a.drawImage(O, canvas.width / 2 - O.width / 2, c);
          a.drawImage(N, canvas.width / 2 - N.width / 2, c + 30)
        }
      };
      this.DrawWinnerLabel =
        function(a) {
          !ia && aa && (ia = new ba(55 * t, "#fe6800", "#6e3800"), ia.setValue("WINNER"), ha = ia.render(), wa = new ba(45 * t, "#fe9b00", "#6e3800"), wa.setValue(aa), renderedWinnerNameCachedText = wa.render());
          if (ha) {
            var c = .13 * canvas.height,
              d = ha.width > renderedWinnerNameCachedText.width ? ha.width : renderedWinnerNameCachedText.width;
            a.fillStyle = "#000000";
            a.globalAlpha = .3;
            Ea(a, canvas.width / 2 - d / 2, c, d, 140, 20);
            a.globalAlpha = 1;
            a.drawImage(ha, canvas.width / 2 - ha.width / 2, c);
            a.drawImage(renderedWinnerNameCachedText, canvas.width / 2 -
              renderedWinnerNameCachedText.width / 2, c + 70)
          }
        };
      this.DrawWarshipDestroyedLabel = function(a) {
        la || (la = new ba(45 * t, "#fe6800", "#6e3800"), null == va ? la.setValue("WARSHIP") : la.setValue(va), ma = la.render(), ya = new ba(35 * t, "#fe9b00", "#6e3800"), null == va ? ya.setValue("ESCAPED!") : ya.setValue("DESTROYED A WARSHIP!"), sa = ya.render());
        if (ma) {
          var c = .13 * canvas.height,
            d = ma.width > sa.width ? ma.width : sa.width;
          a.fillStyle = "#000000";
          a.globalAlpha = .3;
          Ea(a, canvas.width / 2 - d / 2, c, d, 114, 20);
          a.globalAlpha = 1;
          a.drawImage(ma, canvas.width /
            2 - ma.width / 2, c);
          a.drawImage(sa, canvas.width / 2 - sa.width / 2, c + 60)
        }
      };
      this.DrawLastEventWinner = function(a) {
        null != aa && aa != ja && (ca = new Da(15 * t, "#EEEEEE"), ca.setFont("px 'proxima-nova-1','proxima-nova-2', Arial Black"), ca.setValue("Last Event Winner: " + ga(aa) + " "), ca.setUsingRoundedFrame(!0), ja = aa, fa = ca.render());
        if (fa) {
          var c = 10 * t;
          a.drawImage(fa, canvas.width - fa.width - c, canvas.height - fa.height - c)
        }
      };
      this.DrawCurrentWeaponIcon = function(a, c) {
        Vb != c && (Vb = c, Ga = 1);
        1 == Ga ? (ea -= .15, 0 >= ea && (K = Vb, ea = 0, Ga = 2)) : 2 == Ga && (ea +=
          .15, 1 <= ea && (ea = 1, Ga = 0));
        var d = 0,
          b = 0,
          g = 0,
          h, e = !0;
        switch (K) {
          case Ta:
            d = 254;
            b = 69;
            g = 31;
            h = p.frames.iconRocket;
            break;
          case Ja:
            d = 112;
            b = 130;
            g = 144;
            h = p.frames.iconMachinegun;
            break;
          case ab:
            d = 243;
            b = 150;
            g = 40;
            h = p.frames.iconTrishoot;
            break;
          case Pa:
            d = 40;
            b = 179;
            g = 243;
            h = p.frames.iconRailgun;
            break;
          case cb:
            d = 181;
            b = 25;
            g = 255;
            h = p.frames.iconMelee;
            break;
          case db:
            g = b = d = 127;
            h = p.frames.iconBombdrop;
            break;
          case za:
            h = p.frames.iconLaserFull;
            e = !1;
            break;
          default:
            return
        }
        a.save();
        var k = Math.sqrt(ea);
        a.translate(0, -16);
        a.scale(k, k);
        a.translate(0,
          16);
        a.lineWidth = 3;
        e && (a.beginPath(), a.arc(-1, -11, 34, 0, 2 * Math.PI), a.closePath(), a.fillStyle = "rgba(0,0,0,0.4)", a.fill(), a.beginPath(), a.arc(-1, -17, 34, 0, 2 * Math.PI), a.closePath(), a.strokeStyle = "rgba(255,255,255,1.0)", a.fillStyle = "rgba(" + d + "," + b + "," + g + ",1.0)", a.fill(), a.stroke());
        a.translate(-1, -16);
        h.draw(a);
        a.restore()
      };
      this.update = function(a) {
        m += a;
        H += a;
        D.update(a);
        n.update(a);
        U -= a;
        0 > U && (U += 1E3, T = !0);
        0 < na && (na -= a);
        0 < oa && (oa -= a)
      };
      this.renderLeaderboard = function(a, c) {
        P = 270;
        V = 0;
        var d = 5 * t,
          b = 10 * t,
          g = 23 * t,
          h = 18 * t,
          e, k = 60 * t,
          n = 5 * t,
          f = 32,
          q = "Arial Black";
        G && (f = 42, P = 300, g = 33 * t, h = 28 * t, q = "Arial-BoldMT");
        e = V += d + g + d;
        var m = F.length;
        G && (m = 5);
        10 < m && (m = 10);
        for (var I = 0, l = 0; l < m; l++) {
          var r = B[F[l]];
          r && (V += h + b, r = a.measureText(ga(r.name))
            .width, I < r && (I = r))
        }
        V -= b;
        I > k && (P += I - k);
        S = P * t;
        V += d;
        V += n;
        c.width = S;
        c.height = V;
        k = h + "px 'proxima-nova-1','proxima-nova-2', " + q;
        a.fillStyle = "rgba(0,0,0,0.3)";
        Ea(a, 0, 0, S, V, 30 * t);
        a.fillStyle = "rgba(204,84,0,1.0)";
        pc(a, 0, 2, S, f * t, 30 * t);
        a.fillStyle = "rgba(254,102,3,1.0)";
        pc(a, 0, 0, S, f * t, 30 * t);
        l = "LEADERBOARD";
        u.isInstagib() && (l = "KILLS");
        a.font = g + "px 'proxima-nova-1','proxima-nova-2', " + q;
        a.textBaseline = "hanging";
        r = a.measureText(l)
          .width;
        a.fillStyle = "rgba(255,255,0,0.5)";
        a.fillText(l, S / 2 - r / 2, d + 1);
        a.fillStyle = "rgba(178,32,0,1.0)";
        a.fillText(l, S / 2 - r / 2, d);
        a.font = k;
        e += n;
        for (l = 0; l < m; l++)
          if (r = B[F[l]]) {
            for (n = 2; 0 <= n; n--) {
              g = ". ";
              r.inGame && r.id != qa || (g = ".     ");
              q = l + 1 + g + ga(r.name);
              g = 0;
              0 != n ? (a.fillStyle = "rgba(100,49,0,1.0)", g = n) : a.fillStyle = ra == r.id ? "rgba(255,156,0,1.0)" : "rgba(255,220,0,1.0)";
              a.font = k;
              a.measureText(q);
              a.fillText(q, d, e + g);
              q = a.measureText(r.score)
                .width;
              f = 1;
              I = 0;
              G && (I = -6, f = 1.5);
              if (r.inGame) r.id == qa && (a.save(), y = 38, 9 == l && (y = 50), a.translate(y * t * f + I, e + g + 7 * t * f), a.scale(t * f, t * f), p.frames.crown.draw(a), a.restore());
              else {
                a.save();
                var y = 38;
                9 == l && (y = 50);
                a.translate(y * t * f + I, e + g + 7 * t * f);
                a.scale(t * f, t * f);
                p.frames.skull.draw(a);
                a.restore()
              }
              a.fillText(r.score, S - d - q, e + g)
            }
            e += h + b
          }
      };
      this.drawLeaderboard = function(a) {
        a.drawImage(C, Ka - S - 5, 5)
      };
      this.addActivityMessage = function(a) {
        G || D.addActivityMessage(a)
      };
      this.addMessage =
        function(c, b, g) {
          e = c;
          h = null;
          f = g;
          d = +new Date;
          a = b
        };
      this.showTip = function(a) {
        G || (Sa && this.clearTip(), Sa = a, H = 0, Ia = null)
      };
      this.clearTip = function() {
        Sa = null
      };
      this.showTargetLockedMessage = function() {
        l || (l = "[ LOCKED ]")
      };
      this.clearTargetLockedMessage = function() {
        l = null
      };
      this.showWarningMessage = function(a) {
        k = a;
        m = 0
      };
      this.clearWarningMessage = function() {
        k = null
      };
      this.refreshLeaderboard = function(a) {
        F = a;
        ta = !0
      };
      this.addBonus = function(a, c) {
        n.push(a, c)
      };
      this.clearBonusDisplay = function() {
        n.clear()
      };
      this.clearNearMiss =
        function() {
          n.clearNearMiss()
        };
      this.setLastWinner = function(a, c) {
        aa = ga(a);
        console.log("Last Event Winner: " + a);
        c && (ia = null, na = 6E3)
      };
      this.setWarshipRemoved = function(a) {
        va = a;
        oa = 5E3;
        la = null
      };
      D = new Uc
    },
    Uc = function() {
      var b = [],
        e = [];
      this.update = function(f) {
        0 < e.length && 15E3 < R - e[0] && (b.shift(), e.shift())
      };
      this.draw = function(e) {
        e.globalAlpha = 1;
        var d = canvas.height - 180 * t,
          a;
        for (a in b) e.drawImage(b[a], 25, d + 26 * t + 5 + 14 * a * t + 15 * a * t)
      };
      this.addActivityMessage = function(f) {
        var d = new Da(14 * t, "#EEEEEE");
        d.setFont("px 'proxima-nova-1','proxima-nova-2', Arial Black");
        d.setValue("\u2022 " + f);
        d.setUsingRoundedFrame(!0);
        d.setHMargin(10);
        d.setVMargin(4);
        f = d.render();
        b.push(f);
        e.push(+new Date);
        5 < b.length && (b.shift(), e.shift());
        f = 0;
        for (var a in b) d = b[a].width + 5 + 5, d > f && (f = d)
      }
    },
    Xb = function() {
      var b = this;
      this.lastUpdate = this.highlightValue = 0;
      this.id = -1;
      this.dstY = this.dstX = this.origY = this.origX = this.prevY = this.prevX = this.y = this.x = 0;
      this.energy = 255;
      this.inGame = !0;
      this.updateBool = !1;
      this.momentum = this.speed = this.colorHue = 0;
      this.maxMomentum = 8;
      this.dstAngle = this.origAngle =
        this.angle = 0;
      this.controlAngle = -90;
      this.rotSpeed = 4;
      this.directionX = 0;
      this.directionY = -1;
      this.targetY = this.targetX = 0;
      this.targetMomentum = this.maxMomentum;
      this.name = "";
      this.first_set = !0;
      this.rank = -1;
      this.score = 0;
      this.frameSwitchTime = 40;
      this.timeToNextFrame = 0;
      this.flameState = 1;
      this.lastImage;
      this.lastImageReflex;
      this.flipLastImage = 1;
      this.planeImages = p.planeFrames;
      this.planeImagesReflex = p.planeFramesReflex;
      this.decalFrames;
      this.decalID = this.colorID = 0;
      this.isShooting = this.isBot = this.hadHover = this.hover = !1;
      var e = 0,
        f = 100,
        d = !1,
        a = new yb,
        c;
      a.fixedColor = !0;
      var g, h = 0;
      this.weapon = Ja;
      this.ammo = -1;
      var q = this.laserFrame = this.laserTimer = 0,
        n, k = 0,
        m = 0,
        l = 1,
        y = 0,
        r = [1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1],
        J, pa = !1,
        s = 0,
        t = 0,
        w = 0,
        x = 0,
        z = 0,
        C = 0,
        P = 1,
        S = 0,
        V = 0,
        K = !1,
        G = !0,
        ea = !1,
        Ga = 0,
        D = 0,
        Fa = 0,
        ua = null;
      this.update = function(b) {
        if (this.inGame) {
          var g = 400;
          ea && this.weapon == za && (g = 800);
          aa(this.x, this.y, g) ? pa || (a && a.clear(), c && c.clear(), pa = !0) : pa = !1;
          g = this.weapon == za && this.isShooting;
          0 < e && (f -= b, 0 > f && (f = 100, d = !d), e -= b);
          M.moveLeft && (this.controlAngle +=
            this.rotSpeed);
          M.moveRight && (this.controlAngle -= this.rotSpeed);
          360 < this.controlAngle ? this.controlAngle = 0 : 0 > this.controlAngle && (this.controlAngle = 360);
          var k = fa((R - this.lastUpdate) / Jb, 0, 1);
          if (window.aimbot) {
            k = 1;
          }
          this.prevX = this.x;
          this.prevY = this.y;
          var m = k * (this.dstY - this.origY) + this.origY;
          this.x = k * (this.dstX - this.origX) + this.origX;
          this.y = m;
          this.angle = k * (this.dstAngle - this.origAngle) + this.origAngle;
          k = this.x + 12 * Math.sin(-this.angle);
          m = this.y + 12 * Math.cos(-this.angle);
          a && (a.setPosition(k, m), u.isSpaceWars() && (a.width = .6, this.id ==
            qa && "#00FF00" != a.style && (a.style = "#00FF00")));
          c && c.setPosition(k, m);
          (k = !this.hover && !n && !this.isInvulnerable() && !g) ? 0 == this.hadHover && (this.hadHover = !0, a.push()): this.hadHover = !1;
          a && (a.enabled = k, a.update(b));
          c && (c.enabled = k, c.update(b));
          k = E / 2;
          m = k - 150;
          if (this.y > m && this.y < k && 0 >= h) {
            h = 5;
            var l = Math.random() / 2,
              m = (.5 + (.5 - (k - this.y) / (k - m) * .5)) * (.95 + l),
              l = 20 * Math.sin(this.angle);
            oa.addSplash(this.x - l, k + 5 * Math.random(), m, !0)
          }
          h -= b;
          n && (k = this.x + 12 * Math.sin(-this.angle), m = this.y + 12 * Math.cos(-this.angle), n.setPosition(k,
            m), n.update(b));
          v == this && (ib = 0 == ha ? ib + b : 0);
          2 != ha ? B[hb] && (t = Math.sqrt(ib / uc), 1 < t && (t = 1), s -= b, 0 >= s && (0 == ha ? (s = .7 > t ? 200 + s : 80 + s, L.playSound(Wb, .1, 1, Q, null)) : 1 == ha && (F.showTargetLockedMessage(), s = 50 + s, L.playSound(Wb, .1, 1.58, Q, null)))) : (s = 0, F.clearTargetLockedMessage());
          0 < ma ? (w -= b, 0 > w && (w = 100, L.playSound(Wb, .1, .5, Q, null))) : w = 0;
          this == v && (ia || L.playSound(Wc, .6, 1, Q, function(a) {
            ia = a
          }), na || L.playSound(Xc, 0, 1, Q, function(a) {
            na = a
          }), k = (E / 2 - this.y) / 1E3, 1 < k && (k = 1), ia && (m = L.sound._nodeById(ia), L.sound.volume(.5 * da,
            ia), .01 > k && !u.isSpaceWars() ? m && m.bufferSource && (m.bufferSource.playbackRate.value = .1) : (l = this.speed / 30, 1 < l && (l = 1), x += (.3 + .8 * l - x) / 30, m && m.bufferSource && (m.bufferSource.playbackRate.value = x))), na && (m = 0, .2 > k && .01 < k && !u.isSpaceWars() && (m = 1.7 * (.2 - k)), L.sound.volume(m * da, na)));
          g ? (k = va(this.x, this.y, H.x, H.y), g = 1 - k / 3E3, 1 < g && (g = 1), .1 > g && (g = 0), 0 == Fa ? (L.playSound(Yc, .2 * g, .5, Q, null), ua || L.playSound(Zc, .2 * g, 1, Q, function(a) {
            nb = ua = a
          })) : ua && L.sound.volume(.2 * g * da, ua), this.laserTimer += b, Fa += b) : this.stopLaserSound();
          n && this.weapon == cb && 1 < this.ammo && (this.ammo = 1);
          0 < q && (q -= b);
          J && J.update(b);
          0 < S && (S -= b)
        }
      };
      this.getCurrentFrameNum = function(a) {
        a = parseInt(g / (2 * Math.PI / 28)) + 1;
        return a = r[(a - 1) % 14]
      };
      this.draw = function(b, h) {
        if (this.inGame && pa) {
          a && a.draw(b);
          c && c.draw(b);
          n || (b.save(), b.translate(this.x, this.y), this.timeToNextFrame -= h, 0 >= this.timeToNextFrame && (this.flameState = !this.flameState, this.timeToNextFrame = this.frameSwitchTime), this.hover && (u.isSpaceWars() ? b.scale(.5, .5) : b.scale(.8, .8)), this.flameState && b.scale(.88,
            .88), b.rotate(this.angle - Math.PI / 2), b.translate(-23, 0), this.isInvulnerable() && d && (b.globalAlpha = .3), p.frames.throttleFlame.draw(b), b.restore());
          g = Math.abs((this.angle - Math.PI / 2) % (2 * Math.PI)) + 2 * Math.PI / 28 / 2;
          0 < this.angle - Math.PI / 2 && (g = 2 * Math.PI - g);
          this.flipLastImage = g > .5 * Math.PI && g < 1.5 * Math.PI ? -1 : 1;
          if (0 < q) {
            b.save();
            b.translate(this.x, this.y);
            b.scale(.8, .8 * this.flipLastImage);
            b.rotate((this.angle - Math.PI / 2) * this.flipLastImage);
            b.translate(-15, -4);
            var e = 1;
            60 > q ? e = q / 60 : 240 < q && (e = (300 - q) / 60);
            b.globalAlpha =
              e;
            p.frames.punch.draw(b);
            b.restore()
          }
          b.save();
          b.translate(this.x, this.y);
          b.scale(.7, .7);
          b.rotate(this.angle - Math.PI / 2);
          n ? (k -= h, 0 > k && (k = m, y++, 8 == y && (l *= -1)), y %= 14, e = r[y]) : y = e = this.getCurrentFrameNum(b);
          b.scale(1, this.flipLastImage * l);
          this.lastImage = this.planeImages[e - 1];
          void 0 == this.lastImage && (this.lastImage = this.planeImages[0]);
          this.lastImageReflex = this.planeImagesReflex[e - 1];
          void 0 == this.lastImageReflex && (this.lastImageReflex = this.planeImagesReflex[0]);
          this.isInvulnerable() && d && (b.globalAlpha = .3);
          this.lastImage.draw(b);
          var f = this.decalFrames[e - 1];
          void 0 == f && (f = this.decalFrames[0]);
          f.draw(b);
          16 < this.speed ? (C += .06, .9 < C && (C = .9)) : (C -= .06, 0 > C && (C = 0));
          b.rotate(-Math.PI / 2);
          b.translate(0, 8);
          P++;
          1 < P && (P = 0);
          0 == P && (z += 1, 2 < z && (z = 0));
          b.globalAlpha = C;
          p.frames["turbo" + z].draw(b);
          b.restore();
          0 < this.highlightValue && !this.isInvulnerable() && (this.highlightValue -= .05, 0 > this.highlightValue && (this.highlightValue = 0), b.save(), b.translate(this.x, this.y - 1), b.scale(.7, .7), b.rotate(this.angle - Math.PI / 2), b.globalAlpha =
            this.highlightValue, e = p.whitePlaneImages["plane" + e], g > .5 * Math.PI && g < 1.5 * Math.PI ? b.scale(1.2, -1.2) : b.scale(1.2, 1.2), e && b.drawImage(e, -e.width / 2, -e.height / 2), b.restore());
          n && n.draw(b);
          if (this.weapon == za) {
            e = !1;
            g > .5 * Math.PI && g < .5 * Math.PI + Math.PI || (e = !0);
            if (this.isShooting) {
              b.save();
              var J = this.x - 10 * Ga,
                s = this.y - 10 * D,
                f = 500;
              ea && (f = Math.sqrt(J * J + s * s) - 10);
              100 > f && (f = 100);
              var v = p.frames.laser_opening.height,
                K = Fa / 50,
                V = 1,
                S = .75 * Math.PI,
                J = !1;
              K > S ? (K = K < 2 * S ? K - S : S, V = Math.sin(.04 * Fa)) : J = !0;
              b.translate(this.x, this.y);
              b.rotate(this.angle + Math.PI);
              e ? b.translate(2, 22) : b.translate(-2, 22);
              var t = s = Math.sin(K) / Math.sin(S),
                w = !0;
              J && (K < .5 * Math.PI ? w = !1 : (K -= .5 * Math.PI, t = Math.sin(K) / Math.sin(S)));
              w && (b.scale((1 + .2 * V) * t, 1), b.translate(0, v / 2), p.frames.laser_opening.draw(b), f -= v, b.translate(0, f / 2 + v / 2 - 1), b.scale(1, f), p.frames.laser_stretch.draw(b), b.scale(1, 1 / f), b.translate(0, f / 2 - 10), 50 < this.laserTimer && (this.laserTimer = 0, this.laserFrame = (this.laserFrame + 1) % 3), ea ? p.frames["laser_collision" + this.laserFrame].draw(b) : (f = p.frames.laserfade.width,
                b.rotate(Math.PI / 2), b.translate(f / 2, 0), p.frames.laserfade.draw(b)));
              b.restore();
              b.save();
              b.translate(this.x, this.y);
              b.rotate(this.angle + Math.PI);
              e ? b.translate(2, 22) : b.translate(-2, 22);
              J && (b.scale(s, s), b.translate(0, 15), b.beginPath(), b.arc(0, 0, 15, 0, 2 * Math.PI), b.fill());
              b.restore()
            }
            b.save();
            b.translate(this.x, this.y);
            b.rotate(this.angle + Math.PI);
            b.translate(-3, 18);
            e && (b.scale(-1, 1), b.translate(-6, 0));
            b.rotate(-Math.PI / 2);
            p.frames.laserplug.draw(b);
            b.restore()
          }
        }
      };
      this.drawReflection = function(a, c) {
        if (this.inGame &&
          pa) {
          var b = E / 2,
            d = b - this.y;
          if (!(0 > d || 170 < d)) {
            var h = d / 170;
            a.save();
            a.translate(this.x, b + d - 25);
            a.scale(.8, .8 * -this.flipLastImage * (1 + 4 * h));
            g > .5 * Math.PI && g < 1.5 * Math.PI ? a.rotate(1.5 * Math.PI + (g - Math.PI / 2) + Math.PI) : a.rotate(this.angle - Math.PI / 2);
            b = 1;
            30 > d && 15 <= d ? b = (d - 15) / 15 : 15 > d && (b = 0);
            a.globalAlpha = .7 * (1 - h) * b;
            this.lastImageReflex.draw(a);
            a.restore()
          }
        }
      };
      this.drawInput = function(a) {
        if (this.inGame) {
          var c = -U.angle + Math.PI,
            b = !U.hover;
          .01 >= b && (b = .3);
          a.save();
          a.translate(this.x, this.y);
          a.rotate(c);
          a.translate(0, -28 -
            10 * b);
          a.fillStyle = "rgba(255,255,255,0.4)";
          a.beginPath();
          a.moveTo(-8.8 * b, 0);
          a.lineTo(8.8 * b, 0);
          a.lineTo(0, -22 * b);
          a.fill();
          a.restore();
          2 != ha && (c = B[hb]) && this.DrawLockCrosshair(a, c.x, c.y, t, ha);
          0 < ma && this.DrawLockCrosshair(a, this.x, this.y, 1, 1);
          a.lineWidth = 1;
          a.beginPath();
          u.isSpaceWars() ? a.strokeStyle = "rgba(255,255,255,0.3)" : a.strokeStyle = "rgba(0,0,255,0.1)";
          a.arc(this.x, this.y, 75, 0, 2 * Math.PI);
          a.closePath();
          a.stroke()
        }
      };
      this.DrawLockCrosshair = function(a, c, b, d, g) {
        if (this.inGame) {
          a.lineWidth = 4;
          a.save();
          var h =
            1;
          0 == ha && (h = 1 + 2 * (1 - d));
          a.beginPath();
          d = "hsla(43,100%," + (100 - 40 * d) + "%,1.0)";
          1 == g ? d = "rgba(255,0,0,1.0)" : a.setLineDash([12 * h, 6 * h, 12 * h, 0]);
          a.strokeStyle = d;
          g = 30 * h;
          a.rect(c - g / 2, b - g / 2, g, g);
          a.stroke();
          a.restore()
        }
      };
      this.drawInfo = function(a) {
        if (this.inGame && pa) {
          a.save();
          a.translate(this.x, this.y);
          if (!u.isInstagib()) {
            a.fillStyle = "rgba(126,219,226,1)";
            a.shadowOffsetX = 0;
            a.shadowOffsetY = 0;
            a.shadowBlur = 0;
            a.shadowColor = "rgba(255, 255, 255, 0.7)";
            a.lineWidth = 1;
            var c = 28;
            qa == this.id && (c *= 2);
            var d = 127.5;
            127.5 > this.energy &&
              63.75 < this.energy ? d = 30 : 63.75 > this.energy && (d = 0);
            a.fillStyle = "hsl(" + d + ", 100%, 50%)";
            a.fillRect(-c / 2 + 0, 20, this.energy / 255 * c, 8);
            a.strokeStyle = "rgba(255,255,255,1.0)";
            a.strokeRect(-c / 2, 20, c, 8)
          }
          G && !lb && (a.fillStyle = "rgba(255,255,255,1)", a.fillStyle = "rgba(255,255,255,1.0)", a.font = "Bold 15px 'proxima-nova-1','proxima-nova-2', arial, sans-serif", a.textBaseline = "hanging", c = a.measureText(b.name)
            .width, d = 38, u.isInstagib() && (d = 20), a.fillText(b.name, -c / 2, d));
          a.restore();
          c = !1;
          qa == this.id && (c = !0);
          d = !1;
          ub == this.id &&
            (d = !0);
          if (c || 0 < S || K || d) a.save(), a.translate(this.x, this.y - 30), K ? p.frames.pause.draw(a) : c ? p.frames.crown.draw(a) : d ? p.frames.revengeIcon.draw(a) : p.frames.frenzyIcon.draw(a), a.restore();
          J && (a.save(), d = 0, c && (d = 30), a.translate(this.x, this.y - d), J.draw(a), a.restore())
        }
      };
      this.setPose = function(b, d, g, h) {
        this.origX = this.x;
        this.origY = this.y;
        this.origAngle = this.dstAngle;
        this.dstX = 10 * b;
        this.dstY = 10 * d;
        this.dstAngle = g;
        this.first_set ? (this.origX = this.dstX, this.origY = this.dstY, this.x = this.dstX, this.y = this.dstY, this.origAngle =
          this.dstAngle, this.first_set = !1, A.firstClientListing || (e = 1E3 * tc)) : (b = this.dstX - this.origX, d = this.dstY - this.origY, this.speed = Math.sqrt(b * b + d * d) / 3);
        this.inGame || (this.inGame = !0, a && a.clear(), c && c.clear())
      };
      this.trailEffect = function() {
        wa && a && a.trailEffect()
      };
      this.hit = function(a) {
        la() && (this.highlightValue = 1)
      };
      this.setScore = function(a) {
        var c = a - this.score;
        0 < c && this == v && (J || (J = new $c), la() && J.addScore(c));
        this.score = a
      };
      this.incScore = function(a) {
        this.setScore(this.score + a)
      };
      this.setName = function(c) {
        this.name =
          c;
        if ("" == c || null == c) a = new yb, a.fixedColor = !0, a.style = N[Ja], a.clear()
      };
      this.setFlagInfo = function(b) {
        if (0 < b) {
          var d = b & 255;
          b >>= 8;
          var g = b & 255;
          b >>= 8;
          var h = 0 < (b & 4) ? !0 : !1,
            e = 0 < (b & 2) ? !0 : !1;
          G = 0 < (b & 8) ? !0 : !1;
          c = new ad;
          c.flipX = e;
          c.flipY = h;
          c.scale = g / 100;
          c.stringScale = d / 100;
          c.setTexture(this.name)
        } else this.showName = !0;
        a = new yb;
        a.fixedColor = !0;
        a.style = N[Ja];
        a.clear()
      };
      this.setEnergy = function(a) {
        this.energy = a;
        25 > a && !n ? (n = new Ec, n.init(15, this.x, this.y), k = 0, m = 20 + 40 * Math.random(), v == this && (L.playSound(bd, .7, 1, Q, null),
          F.clearNearMiss())) : 25 <= a && n && (delete n, n = null, l = 1)
      };
      this.GetAmmo = function() {
        return 1 == this.weapon ? -1 : this.ammo
      };
      this.setColorID = function(a) {
        this.colorID = a;
        this.decalFrames = p.planes[this.decalID][this.colorID]
      };
      this.setDecalID = function(a) {
        this.decalID = a;
        this.decalFrames = p.planes[this.decalID][this.colorID]
      };
      this.setColorHue = function(a) {
        this.colorHue = a
      };
      this.getSpeedDirectionX = function() {
        return this.x - this.prevX
      };
      this.getSpeedDirectionY = function() {
        return this.y - this.prevY
      };
      this.setRank = function(a) {
        this.rank =
          a
      };
      this.isInvulnerable = function() {
        return 0 < e
      };
      var N = {
        1: "rgba(255, 255, 255, 0.6)",
        2: "rgba(255, 156, 0, 1.0)",
        4: "rgba(255, 43, 0, 1.0)",
        8: "rgba(0, 140, 255, 1.0)",
        16: "rgba(255, 255, 0, 1.0)",
        128: "rgba(255, 0, 255, 1.0)",
        256: "rgba(137, 137, 137, 1.0)"
      };
      a.style = N[Ja];
      this.setWeapon = function(c) {
        a.style = N[c];
        a.width = 1;
        this.weapon = c
      };
      this.cleanup = function() {
        ia && L.sound.stop(ia);
        na && L.sound.stop(na);
        this.stopLaserSound();
        na = ia = null;
        this.first_set = !0;
        this.inGame = !1;
        F.clearTargetLockedMessage();
        ma = 0
      };
      this.setFrenzy =
        function() {
          S = 1E4
        };
      this.incKills = function() {
        V++
      };
      this.getKills = function() {
        return V
      };
      this.setPaused = function(a) {
        K = a ? !0 : !1
      };
      this.setIsBot = function(a) {
        this.isBot = a
      };
      this.setIsShooting = function(a) {
        !a && this.isShooting && (this.laserTimer = Fa = 0);
        this.isShooting = a
      };
      this.laserHit = function(a, c, b) {
        Ga = a;
        D = c;
        ea = b
      };
      this.prepareFollow = function() {};
      this.stopLaserSound = function() {
        ua && (L.sound.stop(ua), ua = nb = null)
      };
      this.dash = function() {
        this == v && L.playSound(cd, .15, 1, Q, null);
        q = 300
      };
      this.dashing = function() {
        return 0 < q
      };
      this.clearTrail =
        function() {
          a && a.clear()
        }
    },
    ed = function() {
      function b(a, c) {
        0 <= a && 24 > a && (f[a] += c)
      }
      var e, f, d, a, c, g, h = [],
        q = 0;
      this.update = function(b) {
        c = 1.1 * canvas.width / z.zoom;
        g = c / 25;
        a = Math.floor(H.x / g);
        null != d && d != a && (0 < d - a ? (f.splice(24, 24), f.splice(0, 0, 0), e.splice(24, 24), e.splice(0, 0, 0)) : (f.splice(0, 1), f.push(0), e.splice(0, 1), e.push(0)));
        d = a;
        for (var k = 0; 25 > k; k++) e[k] = 2 * f[k] - e[k];
        k = f;
        f = e;
        e = k;
        var k = f[0],
          m = f[0],
          l = f[1];
        f[0] = .99 * (.9 * m + .5 * (k + l) * (1 - .9));
        f[0] = fa(f[0], -100, 100);
        for (var y = 1; 24 > y; ++y) k = m, m = l, l = f[y + 1], f[y] = .99 * (.9 *
          m + .5 * (k + l) * (1 - .9)), f[y] = fa(f[y], -100, 100);
        k = m;
        m = l;
        f[24] = .99 * (.9 * m + .5 * (k + l) * (1 - .9));
        f[24] = fa(f[24], -100, 100);
        k = m;
        m = l;
        f[0] = .99 * (.9 * m + .5 * (k + l) * (1 - .9));
        f[0] = fa(f[0], -100, 100);
        k = m;
        m = l;
        f[1] = .99 * (.9 * m + .5 * (k + l) * (1 - .9));
        f[1] = fa(f[1], -100, 100);
        k = m;
        f[24] = .99 * (.9 * l + .5 * (k + l) * (1 - .9));
        f[24] = fa(f[24], -100, 100);
        k = parseInt(24 * Math.random());
        m = 20 * Math.random() / 20;
        f[k - 1] += m / 2;
        f[k] += m;
        f[k + 1] += m / 2;
        l = z.getBounds();
        if (l[1].y > E / 2) {
          k = h.length;
          q -= b;
          0 > q && (q = 125.6, 20 > k && (m = new dd, h.push(m), l = l[1].x - l[0].x, y = 0, v && (y = 50 * v.getSpeedDirectionX()),
            l = Math.random() * l - l / 2 + y, y = 250 * Math.random(), m.setPosition(l + H.x, E / 2 + y + 30, y)));
          l = [];
          for (y = 0; y < k; y++) m = h[y], m.update(b), m.deleting && l.push(m);
          for (b = 0; b < l.length; b++) k = h.indexOf(l[b]), h.splice(k, 1);
          l.length = 0
        }
      };
      this.drawBehind = function(a) {
        var c = E / 2 - H.y,
          b = .5 + c / (E / 2) * 6;
        this.drawWaterArea(a, 2 * b, "rgba(9,188,255,1.0)", 100, .25, .6, c);
        c = E / 2 - H.y;
        b = .5 + c / (E / 2) * 6;
        this.drawWaterArea(a, 4 * b, "rgba(8,164,254,1.0)", 100, .75, .8, c);
        this.drawWaterArea(a, 13 * b, "rgba(7,142,252,1.0)", 1E3, 0, 1, c)
      };
      this.drawFront = function(b) {
        var d =
          E / 2 - H.y,
          e = a * g,
          f = E / 2 + -30,
          q = b.createLinearGradient(0, f, 0, f + (600 + 2 * d));
        q.addColorStop(0, "rgba(7,142,252,1.0)");
        q.addColorStop(.55, "rgba(0,132,232,1.0)");
        q.addColorStop(1, "rgba(0,90,190,1.0)");
        b.fillStyle = q;
        b.beginPath();
        b.moveTo(e + g - c / 2, f + 30);
        b.lineTo(e + g + c / 2, f + 30);
        b.lineTo(e + 25 * g - c / 2, 1030 + f);
        b.lineTo(e + g - c / 2, 1030 + f);
        b.fill();
        b.restore();
        e = h.length;
        for (f = 0; f < e; f++) h[f].draw(b, d)
      };
      this.drawWaterArea = function(b, d, h, e, q, r, J) {
        J = a * g;
        var p = E / 2 + -30;
        b.save();
        b.fillStyle = h;
        b.beginPath();
        b.moveTo(J + g - c / 2, f[0] *
          r + p + d);
        for (h = 1; 25 > h; h++) {
          var s = h,
            s = s + parseInt(25 * q),
            s = s % 25;
          b.lineTo(J + (h + 1) * g - c / 2, f[s] * r + d + p)
        }
        b.lineTo(J + 25 * g - c / 2, e + d + p);
        b.lineTo(J + g - c / 2, e + d + p);
        b.fill();
        b.restore()
      };
      this.disturbSurface = function(c, d) {
        var h = 12.5,
          h = Math.floor(c / g) - a + 12.5;
        b(h - 2, d / 2);
        b(h - 1, d / 2);
        b(h, d);
        b(h + 1, d / 2);
        b(h + 2, d / 2)
      };
      (function() {
        e = [];
        f = [];
        for (var a = 0; 25 > a; a++) e.push(0), f.push(0)
      })()
    },
    dd = function() {
      var b = [118.17, 11.98, 26.9, -3.43, 1.91, -19.41, .45, -19.48, -.82, -19.55, -52.05, 2.79, -118.88, 11.55, -121.21, 11.85, -.57, -3.74, .26, -4.04, .57,
          -4.15, 121.8, 12.59, 118.17, 11.98
        ],
        e, f, d, a;
      this.deleting = !1;
      var c = 0;
      this.speed = .02;
      this.setPosition = function(c, b, q) {
        e = c;
        f = b;
        d = q;
        a = d / 250
      };
      this.update = function(a) {
        c += a / 1E3 * this.speed * 60;
        c >= Math.PI && (this.deleting = !0)
      };
      this.draw = function(d, h) {
        if (!this.deleting) {
          d.save();
          var q = Math.sin(c);
          d.globalAlpha = Math.sqrt(q);
          d.translate(e, f - 4 * c + h / 500 * 150 * a);
          d.scale(0 + 1 * q, 0 + .8 * q);
          d.translate(0, -20);
          d.fillStyle = "#b3dff9";
          d.beginPath();
          var q = b.length,
            n = .1 + .9 * a;
          d.moveTo(b[0] * n + 0, b[1] * n + 0);
          for (var k = 2; k < q; k += 6) d.bezierCurveTo(b[k] *
            n + 0, b[k + 1] * n + 0, b[k + 2] * n + 0, b[k + 3] * n + 0, b[k + 4] * n + 0, b[k + 5] * n + 0);
          d.fill();
          d.restore()
        }
      }
    },
    fd = function() {
      var b = [
          [-142.21, -1.18, -143.28, .36, -123.09, 11.23, -103.01, 13.96, -81.96, 16.82, -65.17, 14.9, -64.36, 15.65, -41.42, 37.12, -28.62, 36.17, -16.75, 36.02, 18.19, 35.56, 38.19, 16.67, 39.3, 18.03, 50.57, 31.83, 67.87, 39.26, 84.68, 33.47, 95.27, 29.83, 123.57, 5.67, 121.35, -3.74, 118.45, -15.98, 89.66, -8.14, 88.44, -10.77, 74.28, -41.45, 51.47, -22.75, 50.8, -23.76, 38.13, -43.02, 24.97, -62.52, -2.75, -60.1, -31.37, -57.6, -55.13, -17.35, -55.49, -17.57,
            -98.49, -44.18, -132.86, -14.55, -142.21, -1.18
          ],
          [-162.55, -1.68, -169.22, -19.07, -134.4, -35.44, -105.42, -35.13, -45.5, -34.48, -16.08, -8.51, 20.84, -12.63, 32.11, -13.89, 20.28, -39.57, 35.04, -45.63, 50.56, -52, 67.52, -44.38, 81.19, -32.08, 94.38, -20.22, 83.96, -10.24, 86.36, -8.17, 92.3, -3.06, 110.55, -8.9, 114.01, -1.75, 116.98, 4.4, 87.88, 27.98, 55.69, 21.98, 53.83, 21.64, 55.47, 33.56, 20.71, 36.54, 5.28, 37.87, -8.91, 30.47, -14.55, 25.77, -17.17, 23.58, -33.82, 38.42, -52.98, 36.38, -65.86, 35.01, -74.62, 20.26, -78.34, 16.38, -80.92, 13.67, -151.51, 27.09,
            -162.55, -1.68
          ],
          [-132.9, 30.86, -125.9, 10.58, -96.55, -22.97, -85.94, -23.79, -61.71, -25.67, -53.16, -17.53, -50.03, -17.63, -46.79, -17.74, -37.17, -49.76, -6.45, -50.02, 26.73, -50.29, 38.01, -16.34, 44.61, -16.75, 52.59, -17.25, 57.84, -24.32, 79.01, -23.54, 98.83, -22.8, 96.09, -12.23, 103.77, -9.21, 111.97, -5.97, 134.38, -11.68, 144.73, 7.12, 152.17, 20.65, 110.44, 38.48, 91.74, 39.3, 47.05, 41.27, -50.64, 19.62, -67.45, 24.81, -90.4, 31.9, -100.01, 37.45, -121.08, 38.84, -125.4, 39.13, -134.8, 36.38, -132.9, 30.86],
          [-142.3, 3.86, -142.68, -5.86, -66.59, -26.42,
            -45.57, -34.65, -22.55, -43.64, -21.3, -84.89, 5.81, -86.9, 25.18, -88.34, 99.82, -49.94, 103.2, -10.26, 104.1, .3, 137.86, -21.94, 136.83, -10.3, 133.75, 24.38, 117.81, 21.85, 111.08, 24.7, 107.63, 26.15, 88.76, 26.4, 83.17, 23.68, 82.44, 23.32, 49.7, 40.09, 19.75, 36.6, -18.88, 32.08, -37.22, 21.23, -53.51, 11.08, -57.67, 8.49, -66.63, 26.07, -94.62, 26.33, -103.38, 26.41, -112.73, 24.98, -123.85, 15.85, -126.35, 13.8, -141.87, 14.59, -142.3, 3.86
          ],
          [-142.63, 14.15, -142.06, 12.44, -131.98, 6.01, -92.96, -13.64, -80.08, -20.13, -78.45, -40.22, -32.37, -45.14, 6.08, -49.25,
            5.44, -26.43, 8.78, -26.51, 11.15, -26.56, 20.61, -40.86, 44.75, -43.15, 61.05, -44.69, 72.86, -34.19, 77.21, -31.3, 84.42, -26.5, 149.08, -20.62, 150.6, .29, 152.12, 21.2, 123.52, 42.13, 64.54, 49.68, 23.28, 54.96, 37.73, 31.1, 25.32, 30.57, 13.73, 30.07, -6.57, 48.69, -21.45, 46.17, -44.71, 42.24, -48.23, 33.33, -81.8, 18.87, -122.06, 1.53, -142.83, 14.75, -142.63, 14.15
          ],
          [-128.91, -3.91, -100.79, -29.51, -75.44, -28.12, -55.48, -25.64, -35.53, -23.16, -10.93, -12.78, 7.7, -16, 15.92, -17.42, 33.99, -43.08, 54.49, -43.88, 83.11, -44.99, 85.4, -21.07, 89.46, -21.25, 94.52,
            -21.48, 107.89, -29.23, 117.73, -3.17, 118.89, -.07, 136.54, 16.66, 149.39, 19.53, 149.68, 19.59, 95.95, 10.58, 17.5, 16.07, -5.04, 17.65, -60.8, 45.1, -108.87, 48.31, -130.84, 49.78, -145.13, 42.1, -143.01, 29.93, -140.38, 14.79, -134.29, .99, -128.91, -3.91
          ],
          [-105.63, 33.5, -112.73, 24.78, -104.42, 20.23, -104.9, 18.35, -106.19, 13.28, -101.31, -5.25, -88.8, -11.01, -73.37, -18.1, -65.27, -18.01, -49.55, -16.92, -46.11, -16.68, -52.73, -32.67, -37.48, -39.53, -19.05, -47.81, 18.24, -26.76, 24.38, -21.56, 26.14, -20.07, 44.72, -32.26, 63.81, -26.11, 106.07, -12.51, 112.47,
            3.21, 124.03, 10.2, 146.91, 24.05, 177.98, 16.35, 176.28, 17.17, 108.58, 50.11, -.39, 35.83, -2.15, 35.9, -18.66, 36.6, -90.36, 52.25, -105.63, 33.5
          ],
          [-515.42, -79.84, -511.96, -82.38, -492.91, -99.15, -444.49, -84.74, -379.42, -65.39, -353.57, -29.63, -347.84, -16.74, -347.52, -16.02, -326.45, -32.16, -294.56, -21.93, -266.34, -12.88, -255.45, 16.99, -233.61, 34.9, -195.97, 65.76, -153.63, 30.14, -135.04, 43.22, -79.08, 82.59, .11, -91.66, 104.06, 4.27, 177.97, 72.49, 215.12, 9.81, 234.44, 16.08, 252.34, 21.9, 289.03, 43.31, 332.29, 27.33, 368.2, 14.06, 416.81, -38.28,
            429.68, -21.59, 445.63, -.91, 440.5, -8.41, 442.5, -17, 454.3, -67.56, 497.46, -97.75, 506.29, -79.88, 515.12, -62.02, 527.33, 105.09, 482.02, 105.88, 436.97, 106.67, -558.17, 136.12, -560.32, 90.04, -566.63, -45.23, -534.53, -65.79, -515.42, -79.84
          ]
        ],
        e = [
          [876.66, -374.819, 1, 1.26],
          [97.633, -380.736, 0, 1],
          [192.926, 241.051, 2, 1],
          [-600.648, -471.205, 3, 1],
          [-1012.119, -182.729, 4, 1],
          [-309.131, -16.817, 5, 1],
          [-909.922, 275.895, 6, 1],
          [433.972, -27.105, 4, .82],
          [1061.589, 28.127, 5, 1],
          [1393.747, -174.289, 5, .61],
          [1571.903, 160.019, 0, 1.4],
          [2070.708, -424.461,
            5, 1
          ],
          [1890.094, -38.011, 3, .74],
          [2641.256, 167.835, 2, 1.3],
          [2775.003, -273.566, 1, 1.73],
          [3600.865, -10.901, 6, 1],
          [4304.657, -434.446, 3, 1.02],
          [4514.504, 49.961, 5, 1.34],
          [-1873.248, 78.997, 2, 1.85],
          [-1738.956, -423.752, 0, 1],
          [-2562.487, -248.492, 5, 1],
          [-2908.07, 273.062, 1, 1],
          [-3511.442, -140.75, 3, 1],
          [-3067.546, -513.007, 5, 1],
          [-4294.653, 81.801, 4, 1.18],
          [-4341.772, -444.099, 2, 1.49],
          [4534.451, 552.148, 7, 1],
          [3523.869, 548.891, 7, 1],
          [2523.538, 545.869, 7, 1],
          [1527.226, 539.951, 7, 1],
          [524.44, 534.033, 7, 1],
          [-491.107, 531.244, 7, 1],
          [-1491.259,
            530.667, 7, 1
          ],
          [-2491.026, 527.456, 7, 1],
          [-3488.818, 522.618, 7, 1],
          [-4489.133, 520.724, 7, 1],
          [5540.582, 549.447, 7, 1],
          [6532.003, 553.506, 7, 1],
          [5332.871, -202.519, 3, .92],
          [6297.753, -518.992, 0, 1.4],
          [6571.46, 146.567, 1, 1],
          [-5608.643, -91.44, 1, 1],
          [-6554.049, -474.834, 5, 1],
          [-6324.28, 338.097, 5, 1],
          [-5497.194, 515.894, 7, 1],
          [-6495.769, 511.43, 7, 1]
        ],
        f = [],
        d = [];
      this.drawCloudShape = function(a, c, b, d, e) {
        a.beginPath();
        var f = d.length;
        a.moveTo(d[0] * e + c, d[1] * e + b);
        for (var k = 2; k < f; k += 6) a.bezierCurveTo(d[k] * e + c, d[k + 1] * e + b, d[k + 2] * e + c, d[k +
          3] * e + b, d[k + 4] * e + c, d[k + 5] * e + b);
        a.fill()
      };
      this.drawCloud = function(a, c, g, h, e, f, k, m) {
        -7E3 > c && (c = (-c + 7E3) % 14E3, c = 7E3 - c);
        var l = c + d[h][0] * e,
          y = g + d[h][1] * e,
          r = c + d[h][2] * e,
          J = g + d[h][3] * e,
          p = z.getBounds();
        l = l > p[1].x || r < p[0].x || y > p[1].y || J < p[0].y ? !1 : !0;
        l && (a.save(), a.fillStyle = "rgba(190,227,249," + f + ")", this.drawCloudShape(a, c, g, b[h], e), a.clip(), a.fillStyle = "rgba(179,222,250," + f + ")", this.drawCloudShape(a, c + k, g + m, b[h], e), a.restore())
      };
      this.drawPreRenderedCloud = function(a, c, b, e, q, n) {
        -7E3 > c && (c = (-c + 7E3) % 14E3, c = 7E3 -
          c);
        var k = d[q][0],
          m = d[q][1],
          l = c + k * n,
          y = b + m * n,
          r = c + d[q][2] * n;
        q = b + d[q][3] * n;
        var J = z.getBounds();
        l = l > J[1].x || r < J[0].x || y > J[1].y || q < J[0].y ? !1 : !0;
        l && a.drawImage(f[e], c + k * n, b + m * n)
      };
      this.update = function(a) {
        Xa -= .03 * a
      };
      this.drawClouds = function(a) {
        for (var c = e.length, b = 0; b < c; b++) {
          var d = 2,
            f = e[b][0],
            n = e[b][1],
            k = 1,
            m = 1,
            l = 3,
            y = 9;
          0 == b % 2 && 7 != e[b][2] ? (f += .2 * (H.x - f), n += .2 * (H.y - n), k = .2, m = .7, l = 1, y = 3, d = .5, n *= Kb) : 7 == e[b][2] && (k = .8, n = Nb);
          this.drawCloud(a, f + Xa / 4 * d, n, e[b][2], e[b][3] * m, k, l, y)
        }
      };
      this.drawPreRenderedClouds = function(a) {
        var c =
          e.length,
          b = Xa,
          d = Kb;
        xa || (d = .6, b = 200);
        for (var f = 0; f < c; f++) {
          var n = 2,
            k = e[f][0],
            m = e[f][1],
            l = 1;
          0 == f % 2 && 7 != e[f][2] ? (k += .2 * (H.x - k), m += .2 * (H.y - m), n = .5, m *= d, l = .7) : 7 == e[f][2] && (m = Nb);
          this.drawPreRenderedCloud(a, k + b / 4 * n, m, f, e[f][2], e[f][3] * l)
        }
      };
      this.preRender = function(a) {
        a = e.length;
        for (var c = 1, g = 0; g < a; g++) {
          var h = e[g][2],
            q = -d[h][0] + d[h][2],
            n = -d[h][1] + d[h][3],
            k;
          k = document.createElement("canvas");
          var m = k.getContext("2d"),
            l = c = 1,
            y = 3,
            r = 9;
          0 == g % 2 && 7 != e[g][2] ? (c = .2, l = .7, y = 1, r = 3) : 7 == e[g][2] && (c = .8);
          var l = e[g][3] * l,
            J = -d[h][0] *
            l,
            p = -d[h][1] * l;
          k.width = q * l;
          k.height = n * l;
          m.fillStyle = "rgba(190,227,249," + c + ")";
          this.drawCloudShape(m, J, p, b[h], l);
          m.clip();
          m.fillStyle = "rgba(179,222,250," + c + ")";
          this.drawCloudShape(m, J + y, p + r, b[h], l);
          f.push(k)
        }
      };
      (function() {
        for (var a = 0; a < b.length; a++) {
          for (var c = b[a], e = c.length, h = 9999, f = 9999, n = -9999, k = -9999, m = !0, l = 0; l < e; l++) {
            var y = c[l];
            m ? (y < h && (h = y), y > n && (n = y)) : (y < f && (f = y), y > k && (k = y));
            m = !m
          }
          d.push([h, f, n, k])
        }
      })();
      this.preRender()
    },
    hd = function() {
      var b = [],
        e = 0,
        f;
      this.waves;
      var d = function() {
          this.vertexes = [];
          this.type = 0;
          this.add = function(a, c, b) {
            this.vertexes.push({
              x: a,
              y: c
            });
            this.type = b
          };
          this.draw = function(a, c) {
            if (7 == this.type) {
              if (a.fillStyle = "#F0F000", 3 != c) return
            } else if (8 == this.type) {
              if (a.fillStyle = "#0000F0", 2 != c) return
            } else if (a.fillStyle = "#f00000", 1 != c) return;
            a.beginPath();
            var b = this.vertexes.length,
              d = this.vertexes[0];
            a.moveTo(d.x, d.y);
            for (d = 1; d < b; d++) {
              var e = this.vertexes[d];
              a.lineTo(e.x, e.y)
            }
            a.closePath();
            a.fill()
          }
        },
        a = function() {
          this.posY = this.posX = 0;
          this.radius = 10;
          this.draw = function(a, c) {
            1 == c &&
              (a.beginPath(), a.fillStyle = "#f00", a.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI), a.closePath(), a.fill())
          }
        };
      this.loadColliders = function(c) {
        var e = new XMLHttpRequest;
        e.open("GET", c, !0);
        e.responseType = "arraybuffer";
        e.onload = function(c) {
          if (c = e.response) {
            c = new DataView(c);
            var g = 0,
              f = c.getUint8(g, !0),
              g = g + 1;
            if (191 != f) console.log("ERROR LOADING MAP FILE");
            else
              for (;;) {
                var m = c.getUint8(g, !0),
                  g = g + 1;
                if (0 == m) break;
                else if (1 == m || 2 == m || 3 == m || 4 == m || 5 == m || 6 == m || 7 == m || 8 == m)
                  if (f = c.getUint8(g, !0), g += 1, 1 == f) {
                    var f =
                      c,
                      m = new a,
                      l = f.getFloat32(g, !0),
                      g = g + 4,
                      y = f.getFloat32(g, !0),
                      g = g + 4,
                      f = f.getFloat32(g, !0),
                      g = g + 4;
                    m.posX = 10 * l;
                    m.posY = 10 * -y;
                    m.radius = 10 * f;
                    b.push(m)
                  } else {
                    if (2 == f)
                      for (f = c, l = f.getUint16(g, !0), g += 2, y = 0; y < l; y++) {
                        for (var r = f.getUint16(g, !0), g = g + 2, p = new d, s = 0; s < r; s++) {
                          var v = f.getFloat32(g, !0),
                            g = g + 4,
                            u = f.getFloat32(g, !0),
                            g = g + 4;
                          p.add(10 * v, 10 * -u, m)
                        }
                        b.push(p)
                      }
                  }
                else 9 == m || 10 == m || 11 == m ? (g += 4, g += 4, g += 4) : 43 == m && (g += 4, g += 4, g += 4)
              }
          }
        };
        e.send(null);
        console.log("Map loaded!")
      };
      this.drawColliders = function(a) {
        for (var c = b.length,
            d = 0; d < c; d++) b[d].draw(a, 1)
      };
      this.drawWater = function(a) {
        if (Na)
          for (var c = b.length, d = 0; d < c; d++) b[d].draw(a, 2)
      };
      this.drawGrassSand = function(a) {
        for (var c = b.length, d = 0; d < c; d++) b[d].draw(a, 3)
      };
      this.drawGradient = function(a) {
        var c = (canvas.width / 2 + (z.x * z.zoom - canvas.width / 2)) / z.zoom,
          b = (canvas.height / 2 + (z.y * z.zoom - canvas.height / 2)) / z.zoom,
          d = .75 * E;
        u.isSpaceWars() && (d = E);
        var d = a.createLinearGradient(0, -d, 0, d),
          f = 39,
          m = 161;
        u.isSpaceWars() && (f = 0, m = 55);
        if (0 < e) {
          var l = e / 2500;
          1 < l && (l = 1);
          f += (255 - f) * l;
          m += (255 - m) * l
        }
        u.isSpaceWars() ?
          (d.addColorStop(0, "rgba(" + parseInt(f) + ",0,0,1.0)"), d.addColorStop(.3, "rgba(" + parseInt(m) + ",0,55,1.0)"), d.addColorStop(.5, "rgba(" + parseInt(m) + ",0,75,1.0)"), d.addColorStop(.7, "rgba(" + parseInt(m) + ",0,55,1.0)"), d.addColorStop(1, "rgba(" + parseInt(f) + ",0,0,1.0)")) : tb ? (d.addColorStop(0, "rgba(" + parseInt(f) + ",145,202,1.0)"), d.addColorStop(1, "rgba(" + parseInt(m) + ",231,252,1.0)")) : d = "#62bae2";
        a.fillStyle = d;
        a.fillRect(c - canvas.width / 2 / z.zoom, b - canvas.height / 2 / z.zoom, canvas.width / z.zoom, canvas.height / z.zoom)
      };
      this.drawWaterBehind =
        function(a) {
          Na && this.waves.drawBehind(a)
        };
      this.drawWaterFront = function(a) {
        Na && this.waves.drawFront(a)
      };
      this.drawLimits = function(a) {
        var c = (canvas.width / 2 + (z.x * z.zoom - canvas.width / 2)) / z.zoom,
          b = (canvas.height / 2 + (z.y * z.zoom - canvas.height / 2)) / z.zoom,
          d = 500,
          e = 2 * E,
          f = 0,
          l = 0,
          y = 0,
          r = 0;
        if (0 < c) {
          var p = $ - c;
          p < d && (f = Math.min(1 - p / d, 1), f *= .2)
        } else p = $ + c, p < d && (l = Math.min(1 - p / d, 1), l *= .2);
        u.isSpaceWars() && (d = 200, 0 > b ? (p = E / 2, p += b, p < d && (y = Math.min(1 - p / d, 1), y *= .2)) : (p = E / 2, p -= b, p < d && (r = Math.min(1 - p / d, 1), r *= .2)));
        0 < c ? (d = f, d = y >
          d ? y : d, f = d = r > d ? r : d) : (d = l, d = y > d ? y : d, l = d = r > d ? r : d);
        r = y = d;
        0 < f ? (a.fillStyle = "rgba(200,0,0," + f + ")", a.fillRect($, -e / 2, 2500, e)) : (a.fillStyle = "rgba(200,0,0," + l + ")", a.fillRect(-$ - 2500, -e / 2, 2500, e));
        u.isSpaceWars() && (0 > b ? (a.fillStyle = "rgba(200,0,0," + y + ")", a.fillRect(-$, -E / 2 - 2500, 2 * $, 2500)) : (a.fillStyle = "rgba(200,0,0," + r + ")", a.fillRect(-$, E / 2, 2 * $, 2500)));
        u.isSpaceWars() || (a.fillStyle = "rgba(255,255,255,0.10)", a.fillRect(c - canvas.width / 2 / z.zoom, -E / 2 - 1, canvas.width / z.zoom, 6))
      };
      this.draw = function(a) {
        if (qb && !u.isSpaceWars()) {
          var c =
            .97 * z.x + 450,
            b = .97 * z.y - 100,
            d = a.createRadialGradient(c, b, 70, c, b, 350);
          d.addColorStop(0, "rgba(255,255,255,0.4)");
          d.addColorStop(.1, "rgba(255,255,255,0.13)");
          d.addColorStop(.15, "rgba(255,255,255,0.05)");
          d.addColorStop(.2, "rgba(255,255,255,0)");
          a.fillStyle = d;
          a.fillRect(c - 175, b - 175, 350, 350);
          a.fillStyle = "rgba(255,255,255,1)";
          a.beginPath();
          a.arc(c, b, 70, 0, 2 * Math.PI);
          a.fill()
        }
        ob && !u.isSpaceWars() && f.drawPreRenderedClouds(a)
      };
      var c = !1;
      this.update = function(a) {
        if (xa || !c)
          if (c = !0, this.waves.update(a), f.update(a),
            null != v) {
            var b = v.x < -$ || v.x > $;
            u.isSpaceWars() && (b |= v.y > E / 2 || v.y < -E / 2);
            b ? (0 == e && (L.playSound(gd, 1, 1, 1, null), F.showWarningMessage("YOU ABANDONED THE FIGHT!")), e += a) : (0 < e && F.clearWarningMessage(), e = 0)
          }
      };
      this.waves = new ed;
      f = new fd
    },
    Ja = 1,
    ab = 2,
    Ta = 4,
    Pa = 8,
    za = 16,
    cb = 128,
    db = 256,
    jd = function() {
      this.id = -1;
      this.y = this.x = 0;
      this.radius = 1.5;
      this.type;
      this.sinScaleY = this.sinScaleX = 0;
      this.fadingOut = this.grabbing = !1;
      var b = this.alpha = 0,
        e = 0,
        f = Math.random() * Math.PI * 2,
        d = 1,
        a = 0,
        c = 0,
        g = 0,
        h, q, n = 1,
        k = 1,
        m = 1,
        l = 0,
        y = !1;
      this.update = function(f) {
        var p =
          .06 * f;
        if (64 != this.type) {
          if (!u.isSpaceWars()) {
            var s = E / 2 - 20,
              v = this.y + e;
            l += f / 400;
            v < s ? (v > s - 30 && (d = (s - v) / 30), 1 > this.alpha && (this.alpha += f / 1E3, 1 < this.alpha && (this.alpha = 1)), e = (R - b) / 1E3 * Ac * 60) : (a += .1 * p, e += .1, k -= .008, 0 > k && (k = 0), m = Math.sqrt(k))
          }
          this.fadingOut && (y || u.isSpaceWars() || u.isInstagib() ? delete W[this.id] : (e += .25, this.alpha -= f / 1E3, 0 >= this.alpha && delete W[this.id]))
        }
        this.grabbing && ((f = B[c]) ? (s = Math.pow(g, 2), this.x = h + (f.x - h) * s, this.y = q + (f.y - q) * s, n = 1 - s, g += .07 * p, 1 < g && delete W[this.id]) : delete W[this.id])
      };
      this.drawItem = function(c, b) {
        if (64 == this.type) c.save(), c.beginPath(), this.sinScaleX += .1, this.sinScaleY += .12, c.translate(this.x, this.y + e), c.scale((1 + Math.sin(this.sinScaleX) / 6) * n * 1.3, (1 + Math.sin(this.sinScaleY) / 6) * n * 1.3), b.draw(c);
        else if (y || u.isSpaceWars()) v && u.isSpaceWars() && v.id == qa && (g = .3), c.save(), c.beginPath(), this.sinScaleX += .1, this.sinScaleY += .12, c.translate(this.x, this.y), c.scale((1 + Math.sin(this.sinScaleX) / 6) * n * 1.3, (1 + Math.sin(this.sinScaleY) / 6) * n * 1.3), c.scale(2, 2), c.globalAlpha = g, p.frames.wing.draw(c),
          c.scale(.5, .5), b.draw(c);
        else {
          var g = 1;
          !v || v.weapon != za || this.type != ab && this.type != Ta && this.type != Pa && this.type != cb && this.type != db || (g = .3);
          var h = p.frames.parachute;
          h.y = -h.height / 2 + 100 * (1 - m);
          c.save();
          this.grabbing ? c.translate(this.x, this.y) : c.translate(this.x, this.y + e);
          c.rotate(.2 * Math.sin(l + f) * d);
          c.scale(1 * n, 1 * n);
          c.translate(0, 10);
          c.globalAlpha = this.alpha * g * 1;
          c.save();
          0 < a && (c.globalAlpha = m * g * 1);
          c.scale(1 * (1 + (1 - m)), 1 * m);
          h.draw(c);
          c.restore();
          g = 0;
          this.type == za && (g = 8);
          c.translate(0, 4 * Math.sin(a) + g + 10);
          b.draw(c);
          c.globalAlpha = 1
        }
        c.restore()
      };
      this.draw = function(a) {
        if (rb) {
          var c = 40,
            b;
          32 == this.type ? b = p.frames.health : this.type == ab ? b = p.frames.trishoot : this.type == Pa ? b = p.frames.railgun : this.type == Ta ? b = p.frames.missile : this.type == cb ? b = p.frames.melee : this.type == db ? b = p.frames.bombdrop : this.type == za ? b = p.frames.laser : 64 == this.type && (c = 10, b = p.frames.wing);
          var d = this.y;
          this.grabbing || (d += e);
          if (!this.grabbing) {
            if (!aa(this.x, d, c)) return
          } else if (!aa(this.x, this.y, c)) return;
          this.drawItem(a, b)
        }
      };
      this.fadeOut = function() {
        this.fadingOut = !0
      };
      this.playerGrab = function(a) {
        this.grabbing = !0;
        c = a;
        this.y += e;
        h = this.x;
        q = this.y;
        delete W[this.id];
        this.id = "g" + this.id;
        W[this.id] = this;
        v && c == v.id && !u.isInstagib() && (64 == this.type ? v.incScore(vc) : v.incScore(wc))
      };
      this.setPosition = function(a, c) {
        this.x = 10 * a;
        this.y = 10 * c;
        this.y > -E / 2 && (this.alpha = 1);
        b = +new Date
      };
      u.isSpaceWars() && (y = !0)
    },
    wd = function() {
      function b(b, a, c) {
        169 != a && 172 != a && 162 != a && 178 != a || c || (ja = []);
        var e = !1,
          h = 1,
          f = 1,
          n = 0;
        c || (A.lastUpdateBool = !A.lastUpdateBool);
        for (;;) {
          n++;
          var k = b.getUint32(h, !0),
            h = h + 4;
          if (0 == k) {
            c = b;
            f = a;
            n = c.getUint8(h, !0);
            h += 1;
            for (k = 0; k < n; k++) {
              var m = c.getUint32(h, !0),
                h = h + 4;
              if (163 == f || 162 == f || 169 == f) var l = c.getUint8(h, !0),
                h = h + 1;
              var y = c.getFloat32(h, !0),
                h = h + 4,
                r = -c.getFloat32(h, !0),
                h = h + 4,
                p = c.getUint32(h, !0),
                h = h + 4,
                s = N[m];
              if (null == s) {
                s = new kd;
                N[m] = s;
                163 != f && 162 != f && 169 != f || s.setType(l);
                var m = B[p],
                  u = !1;
                m || (u = !0, m = T[p]);
                if (m) {
                  var t = Q,
                    w = 1;
                  u ? (t = Ra, u = va(m.x, m.y, H.x, H.y), w = 1 - u / Qa, .01 < w && L.playSound(ld, w, 1, t, null), m.cannonShoot()) : (v && p == v.id || (t = Ra, u = va(m.x, m.y, H.x, H.y), w = 1 - u / Qa), .01 <
                    w && L.playSound(md, w, 1, t, null), m.ammo--)
                }
              }
              s.lastUpdate = R;
              s.setPosition(y, r, p)
            }
            if (162 == a || 178 == a || 163 == a || 179 == a || 169 == a || 172 == a)
              for (l = h;;) {
                c = b.getUint32(l, !0);
                l += 4;
                if (0 == c) break;
                h = T[c];
                if (178 == a || 162 == a) f = b.getUint8(l, !0), l += 1, null == h && (h = new nd, T[c] = h, h.setType(f));
                h.id = c;
                h.lastUpdate = R;
                c = b.getFloat32(l, !0);
                l += 4;
                f = -b.getFloat32(l, !0);
                l += 4;
                n = b.getFloat32(l, !0);
                l += 4;
                k = b.getUint16(l, !0);
                l += 2;
                y = b.getUint8(l, !0);
                l += 1;
                h.type == zb ? (r = -b.getFloat32(l, !0), l += 4, p = b.getFloat32(l, !0), l += 4, h.setCannonAngle(p),
                  h.setFloatValue(r)) : h.type != eb || 162 != a && 178 != a || (r = b.getUint8(l, !0), l += 1, h.setFragment(r));
                h.setState(y);
                h.setPose(c, f, n);
                h.setEnergy(k)
              }
            break
          }
          var x = b.getUint16(h, !0),
            h = h + 2,
            y = x & 1,
            r = x & 2,
            z = x & 4,
            p = x & 1024,
            s = x & 2048;
          1 != n || 163 != a && 179 != a || (qa = x & 512 ? k : 0);
          y && (m = b.getFloat32(h, !0), h += 4, t = -b.getFloat32(h, !0), h += 4, u = b.getFloat32(h, !0), h += 4, w = b.getUint8(h, !0), h += 1);
          var C = B[k],
            P = x & 256;
          if (C && (P && C.setFrenzy(), C.setPaused(z), v == C)) {
            var z = x & 8,
              S = x & 16,
              V = x & 32,
              K = x & 128,
              G = x & 4096;
            x & 64 ? F.addBonus(64, 0) : V ? F.addBonus(32, 0) :
              S ? F.addBonus(16, 0) : z && F.addBonus(8, 0);
            G && (F.addBonus(4096, 0), Za[C.id] = 0);
            K && F.addBonus(128, 0);
            P && F.addBonus(256, C.getKills())
          }
          var ea;
          if (162 == a || 178 == a || 169 == a || 172 == a) ea = b.getUint32(h, !0), h += 4;
          if (162 != a && 178 != a || !y) 162 != a && 178 != a || y || null != C || (C = new Xb, B[k] = C, C.inGame = !1);
          else {
            162 == a ? (x = b.getUint16(h, !0), h += 2) : (x = b.getUint8(h, !0), h += 1);
            P = b.getUint16(h, !0);
            h += 2;
            z = b.getUint8(h, !0);
            h += 1;
            S = b.getUint8(h, !0);
            h += 1;
            V = b.getUint32(h, !0);
            h += 4;
            for (K = "";;) {
              G = b.getUint16(h, !0);
              h += 2;
              if (0 == G) break;
              K += String.fromCharCode(G)
            }
            null ==
              C && (C = new Xb, B[k] = C); - 1 != K.indexOf("\ufdfd") && (K = "<Unnamed>");
            C.setColorID(z);
            C.setDecalID(S);
            C.setName(K);
            C.setFlagInfo(V);
            C.setWeapon(x);
            C.ammo = P
            window.allPlanes = B;
          }
          if (null == C) console.log("ERROR: Receiving data for a player (" + k + ") that does not exist, ignoring!");
          else if (C.id = k, C.lastUpdate = R, C.updateBool = A.lastUpdateBool, y && (C.setPose(m, t, u), C.energy = w, C.setEnergy(w), C.hover = r, C.setIsBot(p), C.setIsShooting(s)), 169 == a || 172 == a || 162 == a || 178 == a) C.setScore(ea), c || (1 == f && (sc = k), ja.push(k), e = !0, C.setRank(f), f++)
        }
        e && F.refreshLeaderboard(ja)
      }

      function e(b, a) {
        var c = 1,
          e = b.getUint16(c, !0),
          c = c + 2,
          f = b.getUint32(c, !0),
          c = c + 4,
          q;
        168 == a ? (q = b.getUint8(c, !0), c += 1) : (q = b.getUint16(c, !0), c += 2);
        if (0 < f) {
          var n = 1,
            k = od;
          32 > q || 128 == q || 256 == q ? (c = b.getUint16(c, !0), B[f].setWeapon(q), B[f].ammo = c) : 64 == q ? (B[f].trailEffect(), k = pd, null != this.lastGrabbedWingTime && (q = R - this.lastGrabbedWingTime, 1E3 > q ? A.wingsInARow++ : A.wingsInARow = 0, n = 1 + .05 * A.wingsInARow, 1.5 < n && (n = 1.5)), this.lastGrabbedWingTime = R) : 32 == q && (k = qd);
          v && f == v.id && L.playSound(k, 1, n, Q, null);
          W[e].playerGrab(f)
        } else W[e].fadeOut()
      }
      var f;
      this.firstClientListing = !0;
      this.sentHello = this.hasConnection = !1;
      this.lastGrabbedWingTime = this.remoteHost = null;
      this.connectRetry = this.wingsInARow = 0;
      this.lastUpdateBool = !1;
      this.roomNumber = 0;
      this.directed = !1;
      this.roomID = 0;
      this.getServerAndConnect = function() {
        if (!G) {
          var b = null,
            b = "",
            a;
          Hb() || (a = parent.location.hash);
          if (a) b = a, b = b.substring(1, b.length), b = ";" + b, A.directed = !0;
          else if ($a.ip) {
            b = $a.ip;
            b = b.replace("%3A", ":");
            A.remoteHost = b;
            A.connect();
            return
          }
          a = vb;
          $a.cc && (a = $a.cc);
          if (void 0 == a) setTimeout(A.getServerAndConnect,
            200);
          else {
            var c = "";
            Ib && (c = "s");
            jQuery.ajax({
              url: "http" + c + "://master.wings.io/",
              type: "POST",
              success: function(a) {
                if ("0" == a) jQuery("#topGui")
                  .hide(), jQuery("#topGuiConnecting")
                  .hide(), jQuery("#roomFailed")
                  .show();
                else {
                  a = a.split("!");
                  A.roomID = 0;
                  1 < a.length && (A.roomID = a[1]);
                  var c = a[0];
                  a = c.split("/");
                  A.roomNumber = 0;
                  1 < a.length && (A.roomNumber = a[1], c = a[0]);
                  A.remoteHost = c;
                  A.connect()
                }
              },
              error: function() {
                setTimeout(A.getServerAndConnect, 1E3)
              },
              dataType: "text",
              contentType: "text/plain",
              method: "PUT",
              cache: !1,
              crossDomain: !0,
              data: a + b
            })
          }
        }
      };
      this.connect = function() {
        if (wa || G) {
          var b = "ws://" + A.remoteHost;
          console.log("fullhost: " + b);
          if (Ib) {
            var b = A.remoteHost.split(":")[0].split("."),
              a = parseInt(A.roomNumber) + 8079 + 1E3,
              b = "wss://ip-" + b[0] + "-" + b[1] + "-" + b[2] + "-" + b[3] + ".wings.io:" + a;
            console.log("isSecure RoomNumber: " + A.roomNumber)
          } else 0 < A.roomNumber && (b = "ws:" + b.split(":")[1] + ":" + (parseInt(A.roomNumber) + 8079), console.log("New full host: " + b));
          try {
            f = new WebSocket(b)
          } catch (c) {
            setTimeout(A.getServerAndConnect, 1E3);
            return
          }
          f.binaryType = "arraybuffer";
          f.onopen = A.onSocketOpen;
          f.onclose = A.onSocketClose;
          f.onmessage = A.onSocketMessage;
          f.onerror = A.onSocketError
        } else setTimeout(A.getServerAndConnect, 100)
      };
      this.disconnect = function() {
        A.directed && (Hb() || (window.location.hash = ""), A.directed = !1);
        A.roomID = 0;
        f && f.close()
      };
      this.onSocketOpen = function(b) {
        A.connectRetry = 0;
        A.hasConnection = !0;
        A.directed = !1;
        p.loaded && A.hello()
      };
      this.onSocketClose = function(b) {
        A.connectionClosed()
      };
      this.onSocketMessage = function(b) {
        A.processMessage(b.data)
      };
      this.onSocketError = function(b) {
        console.log("socket error")
      };
      this.hello = function() {
        G ? A.sendSingleByte(32) : A.sendSingleByte(1);
        A.ping();
        A.sentHello = !0;
        jQuery("#copyLink")
          .fadeIn(300);
        jQuery("#topGui")
          .show();
        jQuery("#topGuiConnecting")
          .hide();
        jQuery(".btn-needs-server")
          .removeAttr("disabled");
        jQuery("#nick")
          .focus();
        1 == G && ("undefined" != typeof messageHandlers && messageHandlers.didConnect ? messageHandlers.didConnect(JSON.stringify({})) : window.webkit.messageHandlers.didConnect.postMessage({}))
      };
      this.processMessage = function(d) {
        d = new DataView(d);
        var a = d.getUint8(0);
        if (0 != a)
          if (160 == a) {
            var c = 1,
              a = -d.getUint32(c, !0),
              c = c + 4,
              f = d.getFloat32(c, !0),
              c = c + 4,
              h = d.getFloat32(c, !0),
              c = c + 4,
              q = d.getFloat32(c, !0),
              c = c + 4,
              n = d.getFloat32(c, !0),
              c = c + 4,
              k = d.getFloat32(c, !0),
              c = c + 4,
              m = d.getFloat32(c, !0),
              c = c + 4,
              l = d.getFloat32(c, !0),
              c = c + 4,
              y = d.getFloat32(c, !0),
              c = c + 4,
              r = d.getFloat32(c, !0);
            d = d.getFloat32(c + 4, !0);
            Xa = a;
            $ = 10 * f;
            E = 10 * h;
            uc = 1E3 * q;
            tc = n;
            Kb = E / 2 / 650;
            Nb = E / 2 - 100;
            lc = k;
            Ac = m;
            yc = l;
            vc = y;
            wc = r;
            xc = d
          } else if (161 == a || 171 == a) xa = !0, G && ("undefined" != typeof messageHandlers && messageHandlers.didEnterGame ? messageHandlers.didEnterGame(JSON.stringify({})) :
          window.webkit.messageHandlers.didEnterGame.postMessage({})), c = 1, f = d.getUint32(c, !0), c += 4, h = d.getFloat32(c, !0), c += 4, q = -d.getFloat32(c, !0), c += 4, n = d.getFloat32(c, !0), c += 4, k = d.getUint8(c, !0), c += 1, m = d.getUint8(c, !0), c += 1, d = d.getUint32(c, !0), v = new Xb, v.id = f, v.setColorID(k), v.setDecalID(m), v.setName(myName), v.setFlagInfo(d), v.setPose(h, q, n), v.updateBool = A.lastUpdateBool, window.myPlane = B[f] = v, ra = f, Z = !0, Db(), Ua(), 161 == a && (Za[f] = 0);
        else if (162 == a || 178 == a) b(d, a, !1), this.firstClientListing = !1, Ua();
        else if (169 == a || 172 == a) b(d, a, !1),
          Ua();
        else if (163 == a || 179 == a) b(d, a, !1);
        else if (164 == a || 180 == a) 164 == a ? b(d, 162, !0) : b(d, 178, !0), Ua();
        else if (165 == a) {
          q = 1;
          a = d.getUint32(q, !0);
          q += 4;
          if (c = B[a]) f = d.getUint32(q, !0), q += 4, h = d.getUint8(q, !0), d = d.getUint32(q + 1, !0), q = v, !q && Qb && (q = Qb), q && f == q.id && (n = ga(B[a].name), F.addMessage("You killed", !0, n), u.isInstagib() || (a == qa ? q.incScore(yc) : q.incScore(xc))), 0 < f ? ((f = B[f]) ? (F.addActivityMessage(ga(c.name) + " was Killed by " + ga(f.name)), f.incKills(), Za[c.id] = f.id) : F.addActivityMessage(ga(c.name) + " was Killed"),
            X.addExplosion(c.dstX, c.dstY, c.getSpeedDirectionX(), c.getSpeedDirectionY()), v && v.id == a && (f ? F.addMessage("Killed by", !1, ga(f.name)) : F.addMessage("You were killed", !1, null), Z ? (Z = !1, Qb = v, v = null, ka = 1, wasKilled(d), Fb(d)) : (v = null, M.waitUntilNextFollow()))) : (Za[c.id] = 0, v && v.id == a && (5 == h ? F.addMessage("You left!", !1, null) : 4 == h ? F.addMessage("Abandoned!", !1, null) : 1 == h ? F.addMessage("Crashed!", !1, null) : 6 == h ? F.addMessage("Exploded!", !1, null) : 7 == h ? F.addMessage("KAMIKAZE!!", !1, null) : 8 == h ? F.addMessage("You were killed by a Warship!",
            !1, null) : 3 == h ? (F.addMessage("Splash!", !1, null), L.playSound(rd, .7, 1, Q, null), oa.addSplash(v.x, E / 2 + 10, 2, !1)) : F.addMessage("You were killed!", !1, null), Z ? (Z = !1, v = null, ma = 0, ka = 1, wasKilled(d), Fb(d)) : (v = null, M.waitUntilNextFollow())), 5 == h ? F.addActivityMessage(ga(c.name) + " left") : 4 == h && F.addActivityMessage(ga(c.name) + " abandoned"), X.addExplosion(c.dstX, c.dstY, .5 * c.getSpeedDirectionX(), .5 * c.getSpeedDirectionY())), null == c ? console.log("ERROR: Trying to remove a player that didnt exist!") : B[a].cleanup();
          else if (d =
            T[a]) d.type == eb && u.isSpaceWars() && (X.addExplosion(d.x, d.y, 0, 0), 3 != d.fragment && (d = 1 - va(d.x, d.y, H.x, H.y) / Qa, .01 < d && L.playSound(Fc, d, .4, Ra, null))), T[a].cleanup(), delete T[a];
          Ua()
        } else if (166 == a || 176 == a)
          for (c = 1, f = d.getUint16(c, !0), c += 2, h = 0; h < f; h++) {
            n = d.getUint32(c, !0);
            c += 4;
            176 == a ? (q = d.getUint16(c, !0), c += 2) : (q = d.getUint8(c, !0), c += 1);
            m = 1;
            l = Gc;
            switch (q) {
              case Ja:
                l = u.isSpaceWars() ? qa == n ? sd : Yb : td;
                break;
              case ab:
                u.isSpaceWars() ? (m = .7, l = Yb) : l = ud;
                break;
              case Pa:
                u.isSpaceWars() ? (l = Yb, m = 1.3) : l = vd
            }
            k = B[n];
            !k && 0 < n &&
              (y = T[n]) && console.log("specialEntity did shoot: " + y.id);
            y = Q;
            r = 1;
            v && n == v.id || !k || (y = Ra, r = 1 - va(k.x, k.y, H.x, H.y) / Qa);
            .01 < r && l != Gc && L.playSound(l, r, m, y, null);
            m = d.getUint16(c, !0);
            c += 2;
            q == cb && k.dash();
            l = d.getUint8(c, !0);
            c += 1;
            for (y = 0; y < l; y++) {
              var r = d.getFloat32(c, !0),
                c = c + 4,
                s = -d.getFloat32(c, !0),
                c = c + 4,
                t = 0,
                t = !1;
              if (q != Ta && q != db) oa.addShot(n, r, s, q);
              else {
                var t = d.getUint32(c, !0),
                  c = c + 4,
                  x = N[t];
                x && (delete N[t], delete x);
                t = !0
              }
              for (x = !1;;) {
                var z = d.getUint32(c, !0),
                  c = c + 4;
                if (0 == z) break;
                var Ca = B[z],
                  ta = !1;
                Ca || (Ca = T[z]) &&
                  (ta = !0);
                z == qa || ta || (t = !1);
                Ca && (Ca.hit(q), k && q == za && (x = !0, k.laserHit(r, s, !0)), v && (v.id == z ? L.playSound(Hc, 1, 1, Q, null) : n == v.id && L.playSound(Hc, 1, 2, Q, null)))
              }
              k && !x && k.laserHit(r, s, !1);
              t && oa.addMissileImpact(r, s)
            }
            0 < n && (n = B[n]) && q != Ta && q != db && (n.ammo = m, n.setWeapon(q))
          } else if (167 == a || 174 == a)
            for (c = 1;;) {
              f = d.getUint16(c, !0);
              if (0 == f) break;
              c += 2;
              174 == a ? (h = d.getUint16(c, !0), c += 2) : (h = d.getUint8(c, !0), c += 1);
              q = d.getFloat32(c, !0);
              c += 4;
              n = -d.getFloat32(c, !0);
              c += 4;
              k = new jd;
              W[f] = k;
              k.id = f;
              k.setPosition(q, n);
              k.type = h
            } else if (168 ==
              a || 173 == a) e(d, a);
            else if (170 == a) a = 1, c = d.getUint8(a, !0), 3 == c ? ma++ : 4 == c ? ma-- : (hb = 2 != c ? d.getUint32(a + 1, !0) : 0, ib = 0, ha = c);
        else if (16 == a) c = d.getUint8(1, !0), a = d.getUint32(2, !0), u.type = c, u.waiting = !0, u.endTime = +new Date + 1E3 * a;
        else if (17 == a) u.type = u.eventType.EVENT_NONE, u.waiting = !1, u.endTime = 0;
        else if (18 == a || 19 == a) c = 1, f = d.getUint8(c, !0), c++, a = d.getUint32(c, !0), c += 4, u.waiting = !1, u.setType(f), u.type == u.eventType.EVENT_WARSHIP && (h = d.getUint8(c, !0), c++, f = d.getUint8(c, !0), c++, d = d.getUint8(c, !0), u.setWarshipInfo(h,
          f, d)), M.whiteFlash = 1, u.endTime = +new Date + 1E3 * a, u.isInstagib() ? u.railSwitch = !0 : u.isWarship() ? p.loadWarshipEvent() : u.isSpaceWars() && p.loadAsteroidEvent();
        else if (20 == a) {
          u.type != u.eventType.EVENT_WARSHIP && (M.whiteFlash = 1);
          u.waiting = !1;
          if (u.isInstagib() || u.isSpaceWars()) u.machinegunSwitch = !0;
          u.setType(u.eventType.EVENT_NONE)
        } else if (22 == a) u.waiting = !1, u.type != u.eventType.EVENT_NONE && (u.type != u.eventType.EVENT_WARSHIP && (M.whiteFlash = 1), u.setType(u.eventType.EVENT_NONE));
        else if (23 == a) {
          c = 1;
          f = d.getUint32(c,
            !0);
          c += 4;
          if (0 < f) {
            if (a = B[f]) a = ga(a.name), F.setWarshipRemoved(a)
          } else F.setWarshipRemoved(null);
          a = d.getUint8(c, !0);
          c += 1;
          f = d.getUint8(c, !0);
          c += 1;
          d = d.getUint8(c, !0);
          u.setWarshipInfo(a, f, d)
        } else if (21 == a) {
          f = d.getUint8(1, !0);
          c = 2;
          for (a = "";;) {
            h = d.getUint16(c, !0);
            c += 2;
            if (0 == h) break;
            a += String.fromCharCode(h)
          }
          F.setLastWinner(a, f)
        }
      };
      this.connectionClosed = function() {
        M.gameCleanup();
        A.sentHello = !1;
        A.hasConnection = !1;
        A.firstClientListing = !0;
        connectionClosed();
        Fb(-1);
        jQuery("#topGui")
          .hide();
        jQuery("#topGuiConnecting")
          .show();
        jQuery("#copyLink")
          .fadeOut(300);
        jQuery(".btn-needs-server")
          .attr("disabled", "disabled");
        var b = this.connectRetry;
        5 < b && (b = 5);
        setTimeout(this.getServerAndConnect, 1E3 + 1E3 * b);
        A.connectRetry++
      };
      this.sendSingleByte = function(b) {
        var a = new ArrayBuffer(1);
        (new DataView(a))
        .setUint8(0, b);
        f.send(a)
      };
      this.sendNick = function(b, a) {
        myName = b;
        var c = new ArrayBuffer(3 + 2 * b.length),
          e = new DataView(c),
          h = 2;
        a && (h = 8);
        e.setUint8(0, h);
        e.setUint8(1, bc);
        e.setUint8(2, dc);
        for (h = 0; h < b.length; ++h) e.setUint16(3 + 2 * h, b.charCodeAt(h), !0);
        f.send(c)
      };
      window.getAngleToTarget = function() {
          let dx = window.myPlane.x - window.aimbotTarget.x;
          let dy = window.myPlane.y - window.aimbotTarget.y;
          let angle = Math.atan2(dy, dx) + Math.PI/2;
          if (angle < 0) {
            angle += 360;
          }
          return angle;
      }
      this.sendInput = function() {
        //console.log("Called sendInput");
        if (window.aimbot && window.myPlane) {
          window.getAimbotTarget();
          U.angle = window.getAngleToTarget();
        }
        var b = new ArrayBuffer(10),
          a = new DataView(b);
        a.setUint8(0, 3);
        a.setFloat64(1, U.angle, !0);
        var c = 0;
        if (U.hover || !wa) c |= 1;
        if (!wa || Y) c |= 2;
        a.setUint8(9, c, !0);
        f.send(b)
      };
      this.sendDirection = function() {
        var b = new ArrayBuffer(9),
          a = new DataView(b);
        a.setUint8(0, 4);
        a.setFloat64(1, U.angle, !0);
        f.send(b)
      };
      this.sendThrottle = function() {
        var b = new ArrayBuffer(2),
          a = new DataView(b);
        a.setUint8(0, 6);
        1 == U.throttle ? a.setUint8(1, 1) : a.setUint8(1, 0);
        f.send(b)
      };
      this.sendBraking = function(b) {
        var a = new ArrayBuffer(2),
          c = new DataView(a);
        c.setUint8(0, 4);
        b ? c.setUint8(1, 1) : c.setUint8(1, 0);
        f.send(a)
      };
      this.sendShooting = function(b) {
        var a = new ArrayBuffer(2),
          c = new DataView(a);
        c.setUint8(0, 5);
        b ? c.setUint8(1, 1) : c.setUint8(1, 0);
        f.send(a)
      };
      this.leave = function() {
        var b = new ArrayBuffer(1);
        (new DataView(b))
        .setUint8(0, 7);
        f.send(b)
      };
      this.ping = function() {
        if (this.hasConnection) {
          var b = new ArrayBuffer(1);
          (new DataView(b))
          .setUint8(0, 0);
          f.send(b)
        }
      }
    },
    Cd = function(b) {
      function e() {
        Z && A.hasConnection && A.sendInput()
      }
      var f = this,
        d, a, c = 0,
        g = 0,
        h = 0,
        q = !1,
        n = 1,
        k, m = 0,
        l = 0,
        y = !1,
        r = 1,
        x, pa = 0,
        M = 0,
        R = !1,
        Ca = 1,
        ta;
      this.whiteFlash = 0;
      f.followTopPlayer = function() {
        var a = -1,
          b = 0;
        for (id in B)
          if (B[id].inGame) {
            var c = B[id].score;
            a < c && (a = c, b = id)
          } b && (v = B[b], v.prepareFollow(), Oa = ra = b)
      };
      f.PlayerFollowing = function(a) {
        c = 0;
        if (0 == ja.length) ra = 0, v = null;
        else {
          var b = !1;
          0 == Oa && (b = !0);
          if (!b) {
            var b = !1,
              d;
            for (d in ja) {
              if (b) {
                var e = B[ja[d]];
                if (!e.inGame) continue;
                ra = ja[d];
                v = e;
                v.prepareFollow();
                Oa = ra;
                return
              }
              if (ja[d] == Oa)
                if (a) b = !0;
                else {
                  d--;
                  0 > d && (d = ja.length - 1);
                  e = B[ja[d]];
                  ra = ja[d];
                  v =
                    e;
                  v.prepareFollow();
                  Oa = ra;
                  return
                }
            }
          }
          ra = a = ja[0];
          v = B[a];
          v.prepareFollow();
          Oa = a
        }
      };
      f.waitUntilNextFollow = function() {
        c = 3E3
      };
      f.update = function(a) {
        if (p.loaded) {
          v && !v.inGame && 0 == ka && (v = null, ra = 0);
          F && F.update(a);
          mb && L.sound.volume(da, mb);
          La = !1;
          for (var b in W) W[b].update(a), W[b] && !La && W[b].type == za && (La = !0, Ma = null);
          var e = null;
          for (b in N) N[b].update(a), N[b].finished && (e = b);
          e && delete N[e];
          e = null;
          for (b in B) B[b].updateBool != A.lastUpdateBool ? (B[b] == v && (ra = 0), delete B[b]) : (!La && B[b].weapon == za && B[b].inGame && (La = !0, Ma = ga(B[b].name)), sc == b && B[b].inGame && (e = B[b]), u.railSwitch ? (B[b].setWeapon(Pa), B[b].ammo = -1) : u.fgunSwitch && (B[b].setWeapon(Ja), B[b].ammo = -1), B[b].update(a));
          for (b in T) T[b].update(a);
          u.railSwitch && (u.railSwitch = !1);
          u.machinegunSwitch && (u.machinegunSwitch = !1);
          z.update(a);
          if (!Z && 0 == ka && null == v && (c -= a, 0 >= c))
            for (b in B) {
              B[b].inGame && (v = B[b], v.prepareFollow(), ra = b);
              break
            }
          if (u.isSpaceWars()) {
            for (i in sa) {
              sa[i].update(z.getBounds(), z.zoom);
              var f = sa[i];
              .1 < Math.abs(ca.x) + Math.abs(ca.y) && (f.x -= (f.z -
                1) * ca.x * .5, f.y -= (f.z - 1) * ca.y * .5)
            }
            ca.x = 0;
            ca.y = 0
          }
          X.update(a);
          H = {
            x: (d.width / 2 + (z.x * z.zoom - d.width / 2)) / z.zoom,
            y: (d.height / 2 + (z.y * z.zoom - d.height / 2)) / z.zoom
          };
          ya.update(a);
          //U.angle is set here. z.x, z.y, qc, and rc are st by mouse movement.
          //U.hover also set.
          if (!G && null != v)
            if (U.mouseMoved) {
              a = 1;
              Ba || (a = 2);
              Zb = (qc + (z.x * z.zoom - d.width * a / 2)) / z.zoom;
              $b = (rc + (z.y * z.zoom - d.height * a / 2)) / z.zoom;
              a = Zb - v.x;
              var s = $b - v.y,
                f = Math.sqrt(a * a + s * s);
              a /= f;
              s /= f;
              U.hover = 75 < f ? 0 : 1;
              var t = f = 0;
              wa && (f = a, t = -s);
              0 != f && (a = Math.atan(t / f), 0 > f && (a = Math.PI + a), a += Math.PI / 2, U.angle = a)
            } else U.hover = 1, U.angle = Math.PI;
          t = z.getBounds();
          a = t[1].x;
          f = t[0].x;
          s = t[0].y;
          t = t[1].y;
          if (e && !aa(e.x, e.y, 30)) {
            var w = H.x - e.x,
              D = H.y - e.y,
              C = Math.sqrt(w * w + D * D);
            n = 1;
            1300 < C && (n = 1300 / C, .4 > n && (n = .4));
            D /= w;
            C = H.y - D * H.x;
            h = 0 > w ? D * a + C : D * f + C;
            h < s ? h = s : h > t && (h = t);
            g = (h - C) / D;
            1 < D ? D = 1 : -1 > D && (D = -1);
            k = Math.acos(D);
            0 > w && (k += Math.PI);
            q = !0
          } else q = !1;
          var E, w = !1;
          (ub = v ? Za[v.id] : 0) && 0 < ub && (E = B[ub], E == e && (w = !0));
          !E || aa(E.x, E.y, 30) || w ? y = !1 : (w = H.x - E.x, D = H.y - E.y, E = Math.sqrt(w * w + D * D), r = 1, 1300 < E && (r = 1300 / E, .4 > r && (r = .4)), D /= w, C = H.y - D * H.x, l = 0 > w ? D * a + C : D * f + C, l < s ? l = s : l > t && (l = t), m = (l - C) / D,
            1 < D ? D = 1 : -1 > D && (D = -1), x = Math.acos(D), 0 > w && (x += Math.PI), y = !0);
          if (u.isWarship()) {
            E = 99999;
            var e = 0,
              Q, I, O, Y;
            for (b in T)
              if (C = T[b], C.state == Ic && C.x > -$ && C.x < $) {
                var w = H.x - C.x,
                  D = H.y - C.y,
                  ba = Math.sqrt(w * w + D * D);
                ba < E && (Q = C.x, I = C.y, E = ba, e = b, O = w, Y = D)
              } 0 < e ? aa(Q, I, 120) ? R = !1 : (1300 < E && (Ca = 900 / E, .3 > Ca && (Ca = .3)), D = Y / O, C = H.y - D * H.x, M = 0 > O ? D * a + C : D * f + C, M < s ? M = s : M > t && (M = t), pa = (M - C) / D, 1 < D ? D = 1 : -1 > D && (D = -1), ta = Math.acos(D), 0 > O && (ta += Math.PI), R = !0) : R = !1
          }
        }
      };
      f.draw = function(b) {
        if (p.loaded) {
          z.setupContext();
          ya.drawGradient(a);
          ya.draw(a);
          var c = z.getBounds()[1].y,
            e = !1;
          if (u.isSpaceWars())
            for (i in sa) sa[i].draw(a);
          else c > E / 2 - 25 && (e = !0, ya.drawWaterBehind(a));
          if (xa) {
            for (var f in W) W[f].draw(a);
            oa.draw(a);
            for (f in N) N[f].draw(a, b);
            for (f in B) B[f].draw(a, b);
            for (f in B) B[f].drawInfo(a);
            Z && v.drawInput(a);
            for (f in T) T[f].draw(a);
            X.drawExplosions(a);
            X.drawBehind(a)
          }
          e && ya.drawWaterFront(a);
          if (xa) {
            if (!u.isSpaceWars()) {
              for (f in B) B[f].drawReflection(a, b);
              for (f in N) N[f].drawReflection(a, b);
              for (f in T) T[f].drawReflection(a, b)
            }
            X.drawLayer2(a);
            X.draw(a);
            for (f in T) T[f].drawInfo(a);
            ya.drawLimits(a);
            q && (b = 1, c = 0 < qa, a.save(), a.translate(g, h), a.scale(n, n), c && (a.save(), e = gb(0, 50, -k), a.translate(e.x, e.y), p.frames.crown.draw(a), a.restore()), a.rotate(-k), e = 1.2, c ? (a.translate(0, -(-20 - 10 * b)), e = .9) : a.translate(0, -(-30 - 10 * b)), a.fillStyle = "rgba(255,102,0,0.8)", a.beginPath(), a.moveTo(-8 * b * e, 0), a.lineTo(8 * b * e, 0), a.lineTo(0, -20 * b * e), a.fill(), a.restore());
            y && (b = 1, a.save(), a.translate(m, l), a.scale(r, r), a.save(), e = gb(0, 50, -x), a.translate(e.x, e.y), p.frames.revengeIcon.draw(a),
              a.restore(), a.rotate(-x), a.translate(0, -(-20 - 10 * b)), e = .9, a.fillStyle = "rgba(255,102,0,0.8)", a.beginPath(), a.moveTo(-8 * b * e, 0), a.lineTo(8 * b * e, 0), a.lineTo(0, -20 * b * e), a.fill(), a.restore());
            R && p.warshipIcon && (b = 1, a.save(), a.translate(pa, M), a.scale(Ca, Ca), a.save(), e = gb(0, 80, -ta), a.translate(e.x, e.y), a.drawImage(p.warshipIcon, -p.warshipIcon.width / 2, -p.warshipIcon.height / 2), a.restore(), a.rotate(-ta), e = .9, a.translate(0, -(-20 - 10 * b)), a.fillStyle = "rgba(255,102,0,0.8)", a.beginPath(), a.moveTo(-8 * b * e, 0), a.lineTo(8 *
              b * e, 0), a.lineTo(0, -20 * b * e), a.fill(), a.restore())
          }
          z.startUILayer();
          Pb && F.draw(a);
          0 < this.whiteFlash && (a.save(), a.globalAlpha = this.whiteFlash, a.fillStyle = "#FFFFFF", a.fillRect(0, 0, d.width, d.height), a.restore(), this.whiteFlash -= .015)
        }
      };
      f.gameCleanup = function() {
        v = void 0;
        ra = 0;
        Z = !1;
        hb = ma = 0;
        F && F.clearBonusDisplay();
        for (id in W) delete W[id];
        W = {};
        for (id in N) delete N[id];
        N = {};
        for (id in B) delete B[id];
        B = {};
        for (id in T) delete T[id];
        T = {}
      };
      var O;
      f.resize = function(a) {
        C();
        u.isSpaceWars() && (O && clearTimeout(O), O = setTimeout(f.respawnParticles,
          200))
      };
      var C = function() {
        var a = 2;
        Ba && (a = 1);
        d.width = window.innerWidth / a;
        d.height = window.innerHeight / a;
        Ka = d.width;
        Wa = d.height;
        var b = Wa * a,
          c = -50 + 50 * a + "%",
          a = "translate(" + c + "," + c + ") scale(" + a + ")";
        jQuery("#canvas")
          .css({
            transform: a
          });
        jQuery("#canvas")
          .css({
            "-ms-transform": a
          });
        jQuery("#canvas")
          .css({
            "-webkit-transform": a
          });
        t = .92 * Math.max(Wa / 916, Ka / 1500);
        t *= window.devicePixelRatio / jb;
        var e = Math.min(1, b / 916),
          a = 640 * e,
          c = (Wa - 916) / 2;
        0 > c && (c = 0);
        0 < a && (e = "translate(-50%,0%) scale(" + e + ")", jQuery("#mainDialog")
          .css({
            transform: e
          }), jQuery("#mainDialog")
          .css({
            "-ms-transform": e
          }),
          jQuery("#mainDialog")
          .css({
            "-webkit-transform": e
          }), b = b / 2 - .52 * a + c, jQuery("#mainDialog")
          .css({
            top: b + "px"
          }))
      };
      f.respawnParticles = function() {
        sa = [];
        for (var a = 0; 150 > a; a++) sa.push(new xd)
      };
      d = b;
      a = d.getContext("2d");
      C();
      ya = new hd;
      X = new yd;
      f.respawnParticles();
      p = new Oc;
      p.load(function() {
        console.log("Resources loaded!");
        1 == G && ("undefined" != typeof messageHandlers && messageHandlers.didLoad ? messageHandlers.didLoad(JSON.stringify({})) : window.webkit.messageHandlers.didLoad.postMessage({}));
        F = new Vc;
        oa = new Rc;
        A.hasConnection && !A.sentHello &&
          A.hello();
        setInterval(e, 40);
        cc(Math.floor(5 * Math.random()) + 1);
        ac(Math.floor(5 * Math.random()) + 1);
        console.log("Loading sounds!");
        L = new zd;
        L.load(function() {
          L.playSound(Ad, 1, 1, Q, function(a) {
            mb = a
          })
        })
      });
      myName = "";
      z = new Bd(d, a, 0, 0);
      A = new wd;
      A.getServerAndConnect()
    },
    Bd = function(b, e, f, d) {
      var a = this;
      this.x = f;
      this.y = d;
      this.minZoom = 1;
      this.maxZoom = 2;
      this.zoom = this.minZoom;
      var c = 0,
        g, h = 0,
        q = 0,
        n = 0,
        k = 0;
      this.setupContext = function() {
        var c = a.zoom,
          d = b.width / 2 - a.x * c,
          f = b.height / 2 - a.y * c;
        e.setTransform(1, 0, 0, 1, 0, 0);
        e.translate(d +
          n, f + k);
        e.scale(c, c)
      };
      this.applyShake = function(a) {
        if (xa)
          if (0 < c) {
            var b = g;
            250 > c && (b = c / 1E3 / .5 * g);
            h += 1;
            q += 1.1;
            var d = Math.sin(h) * (b / 4),
              b = Math.cos(q) * b;
            n = d;
            k = b;
            c -= a
          } else k = n = 0
      };
      this.update = function(b) {
        var c = a.maxZoom + (a.minZoom - a.maxZoom);
        xa || (a.y = 470);
        Z || 1 != ka || Y ? (a.zoom = 1 / (window.devicePixelRatio / jb) * 1.2, a.zoom *= t, G && (a.zoom += .3), null != v && (ca.x = v.x - a.x, ca.y = v.y - a.y, a.x = v.x, a.y = v.y)) : (c = 1 / (window.devicePixelRatio / jb) * .7 * t, a.zoom += (c - a.zoom) / 10);
        this.applyShake(b)
      };
      this.setPosition = function(b, c) {
        ca.x = b - a.x;
        ca.y = c -
          a.y;
        a.x = b;
        a.y = c
      };
      this.shake = function() {
        xa && (c = 500, g = 7)
      };
      this.getBounds = function() {
        return [{
          x: a.x - b.width / 2 / a.zoom,
          y: a.y - b.height / 2 / a.zoom
        }, {
          x: a.x + b.width / 2 / a.zoom,
          y: a.y + b.height / 2 / a.zoom
        }]
      };
      this.getOuterBounds = function() {
        return [{
          x: a.x - b.width / 2 / a.minZoom,
          y: a.y - b.height / 2 / a.minZoom
        }, {
          x: a.x + b.width / 2 / a.minZoom,
          y: a.y + b.height / 2 / a.minZoom
        }]
      };
      this.getInnerBounds = function() {
        return [{
          x: a.x - b.width / 2 / a.maxZoom,
          y: a.y - b.height / 2 / a.maxZoom
        }, {
          x: a.x + b.width / 2 / a.maxZoom,
          y: a.y + b.height / 2 / a.maxZoom
        }]
      };
      this.startUILayer =
        function() {
          e.setTransform(1, 0, 0, 1, 0, 0)
        }
    },
    xb = function() {
      this.width;
      this.height;
      var b, e, f, d, a = void 0;
      this.y = this.x = 0;
      var c, g;
      this.canvas;
      this.frameWithCanvas = function(a, b, d) {
        this.width = a.width;
        this.height = a.height;
        this.canvas = a;
        c = b;
        g = d
      };
      this.setFrameInfo = function(h, q) {
        a = q;
        b = h[1];
        e = h[2];
        this.width = h[3];
        this.height = h[4];
        f = h[5];
        d = h[6];
        c = -this.width * f;
        g = -this.height * d
      };
      this.draw = function(d) {
        a ? d.drawImage(a, b, e, this.width, this.height, c + this.x, g + this.y, this.width, this.height) : d.drawImage(this.canvas, 0, 0,
          this.width, this.height, c + this.x, g + this.y, this.width, this.height)
      };
      this.renderTintedFrame = function(d) {
        var f = document.createElement("canvas"),
          n = f.getContext("2d");
        f.width = this.width;
        f.height = this.height;
        var k = document.createElement("canvas");
        k.width = this.width;
        k.height = this.height;
        var m = k.getContext("2d");
        m.fillStyle = d;
        m.fillRect(0, 0, k.width, k.height);
        m.globalCompositeOperation = "destination-atop";
        m.drawImage(a, b, e, this.width, this.height, 0, 0, this.width, this.height);
        n.globalAlpha = 1;
        n.drawImage(k, 0, 0);
        d = new xb;
        d.frameWithCanvas(f,
          c, g);
        return d
      };
      this.getImageCopy = function() {
        var c = document.createElement("canvas");
        c.width = this.width;
        c.height = this.height;
        var d = c.getContext("2d");
        d.drawImage(a, b, e, this.width, this.height, 0, 0, this.width, this.height);
        var f = d.getImageData(0, 0, this.width, this.height);
        return {
          canvas: c,
          ctx: d,
          toData: f.data,
          to: f
        }
      };
      this.generateTintImage2 = function(d, f, n, k) {
        var m = document.createElement("canvas");
        m.width = this.width;
        m.height = this.height;
        var l = m.getContext("2d");
        l.drawImage(a, b, e, this.width, this.height, 0, 0, this.width, this.height);
        for (var p = l.getImageData(0, 0, this.width, this.height), r = p.data, s = r.length, t = 0; t < s;) r[t] = r[t++] * (1 - k) + d * k, r[t] = r[t++] * (1 - k) + f * k, r[t] = r[t++] * (1 - k) + n * k, r[t] = .8 * r[t++];
        l.putImageData(p, 0, 0);
        d = new xb;
        d.frameWithCanvas(m, c, g);
        return d
      };
      this.generateTintImage = function(a, b, d, e) {
        var f = document.createElement("canvas");
        f.width = this.width;
        f.height = this.height;
        var l = f.getContext("2d");
        l.globalAlpha = 1;
        l.globalCompositeOperation = "copy";
        l.drawImage(a[3], 0, 0);
        l.globalCompositeOperation = "lighter";
        0 < b && (l.globalAlpha = b / 255,
          l.drawImage(a[0], 0, 0));
        0 < d && (l.globalAlpha = d / 255, l.drawImage(a[1], 0, 0));
        0 < e && (l.globalAlpha = e / 255, l.drawImage(a[2], 0, 0));
        a = new xb;
        a.frameWithCanvas(f, c, g);
        return a
      };
      this.generateRGBKs = function() {
        var c = [],
          d = document.createElement("canvas");
        d.getContext("2d");
        d.width = this.width;
        d.height = this.height;
        d = document.createElement("canvas");
        d.width = this.width;
        d.height = this.height;
        d = d.getContext("2d");
        d.drawImage(a, b, e, this.width, this.height, 0, 0, this.width, this.height);
        for (var f = d.getImageData(0, 0, this.width, this.height)
            .data,
            g = f.length, m = this.getImageCopy(), l = this.getImageCopy(), p = this.getImageCopy(), d = this.getImageCopy(), r = 0; r < g; r += 4) m.toData[r] = f[r], m.toData[r + 1] = 0, m.toData[r + 2] = 0, m.toData[r + 3] = f[r + 3], l.toData[r] = 0, l.toData[r + 1] = f[r + 1], l.toData[r + 2] = 0, l.toData[r + 3] = f[r + 3], p.toData[r] = 0, p.toData[r + 1] = 0, p.toData[r + 2] = f[r + 2], p.toData[r + 3] = f[r + 3], d.toData[r] = 0, d.toData[r + 1] = 0, d.toData[r + 2] = 0, d.toData[r + 3] = f[r + 3];
        m.ctx.putImageData(m.to, 0, 0);
        l.ctx.putImageData(l.to, 0, 0);
        p.ctx.putImageData(p.to, 0, 0);
        d.ctx.putImageData(d.to,
          0, 0);
        f = new Image;
        f.src = m.canvas.toDataURL();
        m = new Image;
        m.src = l.canvas.toDataURL();
        l = new Image;
        l.src = p.canvas.toDataURL();
        p = new Image;
        p.src = d.canvas.toDataURL();
        c.push(f);
        c.push(m);
        c.push(l);
        c.push(p);
        return c
      };
      this.renderToCanvas = function() {
        var c = document.createElement("canvas"),
          d = c.getContext("2d");
        c.width = this.width;
        c.height = this.height;
        var f = document.createElement("canvas");
        f.width = this.width;
        f.height = this.height;
        f.getContext("2d");
        a ? d.drawImage(a, b, e, this.width, this.height, 0, 0, this.width, this.height) : d.drawImage(this.canvas,
          0, 0, this.width, this.height, 0, 0, this.width, this.height);
        d.globalAlpha = 1;
        d.drawImage(f, 0, 0);
        return c
      }
    },
    yd = function() {
      var b = {},
        e = [],
        f = [],
        d = [],
        a = [];
      this.addAnimationInfo = function(a, d) {
        b[a] = d
      };
      this.setAnimationInterval = function(a, d) {
        b[a].setInterval(d)
      };
      this.createAnimation = function(a) {
        a = b[a];
        var d = new Jc;
        d.setup(a);
        return d
      };
      this.runAnimation = function(a) {
        e.push(a)
      };
      this.runAnimationLayer2 = function(a) {
        f.push(a)
      };
      this.runAnimationBehind = function(a) {
        d.push(a)
      };
      this.addBlast = function(a, b, d, e, f) {
        var k = X.createAnimation("explosion");
        k.setScale(d);
        k.posX = a;
        k.posY = b;
        X.runAnimationBehind(k);
        a = 1 - va(a, b, H.x, H.y) / Qa;
        .01 < a && L.playSound(Fc, a * f, 1, e, null)
      };
      this.addExplosion = function(b, d, e, f) {
        if (pb && aa(b, d, 100) && la()) {
          if (1 >= a.length) {
            var n = new Dd;
            n.init(b, d, e, f);
            a.push(n)
          }
          this.addBlast(b, d, 1, Ra, 1);
          z.shake()
        }
      };
      this.update = function(b) {
        for (var g in e) {
          var h = e[g];
          h.update(b);
          h.deleting && (e.splice(g, 1), delete h)
        }
        for (g in d) h = d[g], h.update(b), h.deleting && (d.splice(g, 1), delete h);
        for (g in f) h = f[g], h.update(b), h.deleting && (f.splice(g, 1), delete h);
        for (var q in a) g = a[q], g.update(b), g.deleting && (a.splice(q, 1), delete g)
      };
      this.drawBehind = function(a) {
        for (var b in d) {
          var e = d[b];
          a.save();
          a.translate(e.posX, e.posY);
          a.scale(e.scaleX, e.scaleY);
          a.rotate(e.rotation);
          e.draw(a);
          a.restore()
        }
      };
      this.drawLayer2 = function(a) {
        for (var b in f) {
          var d = f[b];
          a.save();
          a.translate(d.posX, d.posY);
          a.scale(d.scaleX, d.scaleY);
          a.rotate(d.rotation);
          d.draw(a);
          a.restore()
        }
      };
      this.draw = function(a) {
        for (var b in e) {
          var d = e[b];
          a.save();
          a.translate(d.posX, d.posY);
          a.scale(d.scaleX, d.scaleY);
          a.rotate(d.rotation);
          d.draw(a);
          a.restore()
        }
      };
      this.drawExplosions = function(b) {
        for (var d in a) a[d].draw(b)
      }
    },
    Jc = function() {
      var b = 0,
        e = 0,
        f = 0;
      this.frames;
      this.frameCount = 0;
      this.deleting = !1;
      this.posY = this.posX = 0;
      this.scaleY = this.scaleX = 1;
      this.rotation = 0;
      this.alpha = 1;
      this.copy = function(b) {
        b = new Jc;
        b.frames = this.frames;
        b.frameCount = this.frameCount;
        b.deleting = this.deleting;
        b.posX = this.posX;
        b.posY = this.posY;
        b.scaleX = this.scaleX;
        b.scaleY = this.scaleY;
        b.rotation = this.rotation;
        b.alpha = this.alpha;
        b.setInterval(e);
        return b
      };
      this.setup = function(b) {
        e = b.interval;
        this.frames = b.frames;
        this.frameCount = b.frames.length
      };
      this.setInterval = function(b) {
        e = b
      };
      this.update = function(d) {
        this.deleting || (f > e && (b++, f -= e), f += d, b >= this.frameCount && (this.deleting = !0))
      };
      this.setScale = function(b) {
        this.scaleY = this.scaleX = b
      };
      this.draw = function(d) {
        1 > this.alpha && (d.globalAlpha = this.alpha);
        this.frames[b].draw(d)
      }
    },
    Ub = function() {
      this.frames = [];
      this.interval = 0;
      this.addFrame = function(b) {
        this.frames.push(b)
      };
      this.setInterval = function(b) {
        this.interval =
          b
      }
    };
  gameSheetInfo = [
    ["bomb", 522, 34, 11, 8, .545, .5],
    ["bombdrop", 887, 196, 23, 23, .5, .5],
    ["crown", 775, 232, 23, 19, .5, .5],
    ["decal0_1", 991, 205, 30, 9, .417, .556],
    ["decal0_2", 1023, 210, 29, 8, .397, .5],
    ["decal0_3", 991, 231, 27, 12, .352, .5],
    ["decal0_4", 241, 239, 28, 15, .375, .467],
    ["decal0_5", 882, 23, 26, 18, .327, .5],
    ["decal0_6", 785, 23, 30, 19, .417, .474],
    ["decal0_7", 622, 23, 28, 20, .375, .5],
    ["decal0_8", 351, 232, 29, 22, .397, .5],
    ["decal1_1", 1030, 200, 31, 8, .565, .625],
    ["decal1_2", 1034, 189, 32, 9, .516, .778],
    ["decal1_3", 1030, 200, 31, 8, .532, .5],
    ["decal1_4", 978, 174, 32, 13, .516, .538],
    ["decal1_5", 209, 239, 30, 15, .55, .6],
    ["decal1_6", 978, 118, 25, 18, .7, .5],
    ["decal1_7", 751, 23, 32, 19, .547, .474],
    ["decal1_8", 716, 23, 33, 19, .53, .474],
    ["decal2_1", 2, 243, 35, 11, .5, .727],
    ["decal2_2", 39, 243, 35, 11, .5, .636],
    ["decal2_3", 135, 242, 35, 12, .5, .583],
    ["decal2_4", 172, 242, 35, 12, .5, .5],
    ["decal2_5", 1005, 132, 35, 9, .5, .444],
    ["decal2_6", 1003, 143, 35, 9, .5, .444],
    ["decal2_7", 651, 247, 35, 7, .5, .571],
    ["decal2_8", 1005, 120, 35, 10, .5, .5],
    ["decal3_1", 991, 189, 15, 8, .833, .625],
    ["decal3_2", 523, 2,
      13, 8, .808, .625
    ],
    ["decal3_3", 977, 86, 12, 10, .708, .6],
    ["decal3_4", 978, 23, 11, 13, .773, .538],
    ["decal3_5", 715, 239, 12, 15, .792, .533],
    ["decal3_6", 977, 68, 12, 16, .792, .5],
    ["decal3_7", 977, 48, 12, 18, .792, .5],
    ["decal3_8", 523, 12, 12, 20, .792, .5],
    ["decal4_1", 688, 247, 25, 7, .62, .714],
    ["decal4_2", 978, 138, 23, 9, .587, .667],
    ["decal4_3", 1042, 220, 20, 10, .525, .6],
    ["decal4_4", 113, 243, 20, 11, .525, .545],
    ["decal4_5", 1020, 220, 20, 11, .525, .545],
    ["decal4_6", 1008, 191, 20, 12, .525, .5],
    ["decal4_7", 1012, 175, 20, 14, .525, .5],
    ["decal4_8", 271, 239, 21,
      15, .548, .467
    ],
    ["decal5_1", 991, 245, 27, 8, .648, .5],
    ["decal5_2", 393, 224, 27, 6, .648, .333],
    ["decal5_3", 991, 216, 27, 13, .648, .538],
    ["decal5_4", 1039, 171, 27, 16, .648, .5],
    ["decal5_5", 977, 98, 26, 18, .635, .5],
    ["decal5_6", 817, 23, 26, 19, .635, .474],
    ["decal5_7", 652, 23, 25, 20, .66, .5],
    ["decal5_8", 382, 232, 28, 22, .589, .5],
    ["e0", 384, 87, 51, 51, .549, .51],
    ["e10", 207, 2, 88, 85, .489, .541],
    ["e11", 659, 45, 92, 79, .511, .494],
    ["e13", 810, 121, 91, 73, .527, .562],
    ["e14", 825, 44, 79, 72, .57, .444],
    ["e15", 912, 189, 77, 65, .597, .385],
    ["e16", 207, 89, 80, 57, .613,
      .491
    ],
    ["e17", 903, 118, 73, 69, .671, .406],
    ["e18", 991, 23, 73, 65, .411, .692],
    ["e19", 422, 224, 40, 29, .425, .448],
    ["e2", 597, 129, 83, 80, .566, .537],
    ["e20", 800, 231, 34, 23, .5, .565],
    ["e21", 836, 231, 32, 23, .5, .522],
    ["e22", 870, 222, 31, 23, .516, .522],
    ["e3", 303, 147, 88, 83, .557, .53],
    ["e4", 384, 2, 88, 83, .557, .53],
    ["e5", 297, 2, 85, 84, .541, .5],
    ["e7", 205, 151, 96, 86, .448, .488],
    ["e9", 118, 151, 85, 89, .482, .483],
    ["frenzy", 393, 140, 128, 82, .5, .5],
    ["frenzyIcon", 956, 23, 20, 23, .5, .5],
    ["health", 906, 90, 23, 23, .5, .5],
    ["iconBombdrop", 347, 88, 35, 52, .486,
      .452
    ],
    ["iconLaserFull", 753, 44, 70, 75, .5, .5],
    ["iconMachinegun", 622, 211, 27, 36, .519, .5],
    ["iconMelee", 729, 203, 39, 32, .5, .5],
    ["iconRailgun", 546, 87, 42, 42, .5, .5],
    ["iconRocket", 625, 45, 32, 37, .5, .541],
    ["iconTrishoot", 474, 45, 40, 40, .5, .475],
    ["iconkill", 682, 126, 126, 75, .5, .5],
    ["indicator", 2, 2, 203, 147, .5, .5],
    ["killR", 729, 237, 44, 17, .364, 1.794],
    ["laser", 289, 89, 56, 56, .5, .5],
    ["laser_collision0", 799, 203, 36, 26, .542, .442],
    ["laser_collision1", 464, 224, 37, 27, .473, .426],
    ["laser_collision2", 503, 224, 34, 27, .485, .426],
    ["laser_opening",
      956, 48, 19, 67, .5, .5
    ],
    ["laser_stretch", 207, 148, 19, 1, .5, .5],
    ["laserfade", 539, 2, 527, 19, .5, .5],
    ["laserplug", 294, 239, 18, 15, .5, .5],
    ["melee", 931, 90, 23, 23, .5, .5],
    ["missile", 906, 56, 23, 23, .5, .5],
    ["missile_attack", 1019, 165, 18, 8, .5, .5],
    ["nearmiss", 2, 151, 114, 90, .5, .5],
    ["parachute", 837, 196, 25, 25, .5, .5],
    ["pause", 697, 203, 30, 34, .5, .735],
    ["plane1", 1005, 106, 35, 12, .5, .667],
    ["plane2", 76, 243, 35, 11, .5, .636],
    ["plane3", 910, 41, 35, 13, .5, .538],
    ["plane4", 910, 23, 35, 16, .5, .5],
    ["plane5", 845, 23, 35, 18, .5, .5],
    ["plane6", 679, 23, 35, 19,
      .5, .474
    ],
    ["plane7", 585, 23, 35, 20, .5, .5],
    ["plane8", 314, 232, 35, 22, .5, .5],
    ["punch", 539, 218, 81, 36, .5, .5],
    ["railgun", 931, 56, 23, 23, .5, .5],
    ["revenge", 523, 134, 72, 82, .514, .5],
    ["revengeIcon", 978, 149, 20, 23, .5, .5],
    ["s0", 1E3, 154, 17, 18, .647, -.361],
    ["s1", 864, 196, 21, 24, .619, -.063],
    ["s10", 474, 2, 47, 14, .489, -1.036],
    ["s11", 1005, 90, 52, 14, .5, -1.107],
    ["s12", 1019, 154, 19, 9, .526, -1.944],
    ["s2", 516, 45, 30, 40, .467, .363],
    ["s3", 514, 87, 30, 45, .5, .433],
    ["s4", 437, 87, 34, 50, .529, .45],
    ["s5", 473, 87, 39, 46, .513, .38],
    ["s6", 548, 45, 39, 39, .513,
      .269
    ],
    ["s7", 651, 211, 44, 34, .523, .162],
    ["s8", 474, 18, 46, 25, .522, -.14],
    ["s9", 537, 23, 46, 20, .5, -.475],
    ["skull", 1040, 146, 20, 23, .5, .5],
    ["throttleFlame", 1042, 131, 23, 13, .5, .5],
    ["trishoot", 1042, 106, 23, 23, .5, .5],
    ["turbo0", 590, 86, 30, 41, .467, .5],
    ["turbo1", 589, 45, 34, 39, .559, .526],
    ["turbo2", 622, 86, 23, 39, .348, .5],
    ["wing", 770, 203, 27, 27, .5, .5]
  ];
  var Ed = function() {
      this.color = {
        h: "61",
        s: "100%",
        l: "100%",
        a: 1
      };
      this.rotation = 0;
      this.scale = 1;
      this.pos = {
        x: 0,
        y: 0
      };
      this.speed = {
        x: 0,
        y: 0
      };
      this.time = 0;
      this.used = this.active = !1;
      this.rotationSpeed =
        0;
      this.draw = function(b) {
        b.save();
        b.translate(this.pos.x, this.pos.y);
        b.scale(this.scale, this.scale);
        b.rotate(this.rotation);
        var e = "hsla(" + this.color.h + "," + this.color.s + "," + this.color.l + "," + this.color.a + ")";
        b.translate(20, -2);
        b.beginPath();
        b.arc(0, 0, 25, 0, 2 * Math.PI, !1);
        b.fillStyle = e;
        b.fill();
        b.beginPath();
        b.arc(-15, -32, 7, 0, 2 * Math.PI, !1);
        b.fillStyle = e;
        b.fill();
        b.restore()
      }
    },
    Ec = function() {
      var b = 0,
        e = 0,
        f = [],
        d = 0;
      this.life = 400;
      var a, c, g, h;
      this.debreeAge = 0;
      this.alpha = 1;
      this.init = function(q, n, k) {
        d = q;
        a = 0;
        c = -.03;
        h = g = 0;
        b = n;
        e = k;
        q = this.life / d;
        for (n = 0; n < d; n++) k = new Ed, this.resetParticle(k), k.active = !1, k.time = q * n, f.push(k)
      };
      this.resetParticle = function(a) {
        a.pos.x = b;
        a.pos.y = e;
        a.speed.x = g;
        a.speed.y = h;
        a.time = 0;
        a.color.a = 1;
        a.rotationSpeed = (Math.random() - .5) / 10;
        a.rotation = 360 * Math.random()
      };
      this.update = function(b) {
        b = 1E3 / 60;
        for (var e = 0; e < d; e++) {
          var g = f[e];
          g.time >= this.life && (g.active || (g.active = !0, g.time %= this.life), this.resetParticle(g));
          g.time += b;
          if (g.active) {
            var h = g.time / this.life;
            1 < h && (h = 1);
            g.pos.x += 1 * g.speed.x;
            g.pos.y += 1 * g.speed.y;
            if (0 <= h && .1 > h) {
              var l = h / .1;
              g.scale = .2
            } else g.scale = .2 + (h - .1);
            g.rotation += g.rotationSpeed;
            0 <= h && .1 > h ? (l = h / .1, .8 < l && (l = .8), g.color.a = l) : g.color.a = .9 - (h - .1);
            0 <= h && .25 > h ? (l = h / .25, g.color.h = 61 * (1 - l), g.color.s = "100%", g.color.l = "50%") : .25 <= h && .3 >= h && (l = (h - .25) / (.3 - .25), g.color.h = 0, g.color.s = 100 * (1 - l) + "%", g.color.l = 100 * (.4 + .1 * (1 - l)) + "%");
            g.speed.x += 1 * a;
            g.speed.y += 1 * c
          }
        }
      };
      this.updateExplosion = function(b) {
        b = 1E3 / 60;
        for (var e = 0; e < d; e++) {
          var g = f[e];
          g.time >= this.life && (g.active || (g.active = !0,
            g.time %= this.life), this.resetParticle(g));
          g.time += b;
          if (g.active) {
            var h = g.time / this.life;
            1 < h && (h = 1);
            g.pos.x += 1 * g.speed.x;
            g.pos.y += 1 * g.speed.y;
            if (0 <= h && .1 > h) {
              var l = h / .1;
              g.scale = .25
            } else g.scale = .25 + (h - .1);
            g.rotation += g.rotationSpeed;
            0 <= h && .1 > h ? (l = h / .1, .8 < l && (l = .8), g.color.a = l * (1 - this.debreeAge)) : (l = Math.pow(1 - (h - .1) / .9, 1 + 5 * this.debreeAge), g.color.a = l.toFixed(2));
            g.color.a *= this.alpha;
            0 <= h && .25 > h ? (l = h / .25, g.color.h = (61 * (1 - l))
                .toFixed(2), h = 100 * (1 - this.debreeAge), g.color.s = h.toFixed(2) + "%", g.color.l = "50%") :
              .25 <= h && .4 >= h && (l = (h - .25) / (.4 - .25), g.color.h = 0, h = 100 * (1 - l) * (1 - this.debreeAge), g.color.s = h.toFixed(2) + "%", g.color.l = (100 * (.4 + .1 * (1 - l)))
                .toFixed(2) + "%");
            g.speed.x += 1 * a;
            g.speed.y += 1 * c
          }
        }
      };
      this.updateMissileSmoke = function(b) {
        b = 1E3 / 60;
        for (var e = 0; e < d; e++) {
          var g = f[e];
          g.time >= this.life && (g.active || (g.active = !0, g.time %= this.life), this.resetParticle(g));
          g.time += b;
          if (g.active) {
            var h = g.time / this.life;
            1 < h && (h = 1);
            g.pos.x += 1 * g.speed.x;
            g.pos.y += 1 * g.speed.y;
            if (0 <= h && .1 > h) {
              var l = h / .1;
              g.scale = .2
            } else g.scale = .2 + .1 *
              (h - .1);
            g.rotation += g.rotationSpeed;
            0 <= h && .1 > h ? (l = h / .1, .8 < l && (l = .8), g.color.a = l) : g.color.a = .9 - (h - .1);
            0 <= h && .25 > h ? (g.color.h = 57, g.color.s = "21%", g.color.l = "50%") : .25 <= h && (l = (h - .25) / .75, g.color.h = 57, g.color.s = "21%", h = 50 - 50 * l, 10 > h && (h = 10), g.color.l = h + "%");
            g.speed.x += 1 * a;
            g.speed.y += 1 * c
          }
        }
      };
      this.setPosition = function(a, c) {
        b = a;
        e = c
      };
      this.setLife = function(a) {
        this.life = a
      };
      this.draw = function(a) {
        for (var b = d - 1; 0 <= b; b--) {
          var c = f[b];
          c.active && c.draw(a)
        }
      }
    },
    Dd = function() {
      function b(a) {
        return Math.random() * a - a / 2
      }
      this.deleting = !1;
      var e = [],
        f, d;
      this.init = function(a, c, e, h) {
        f = a;
        d = c;
        a = 2 + 4 * Math.random();
        c = 2 + 4 * Math.random();
        var q = 2 + 4 * Math.random();
        Math.random();
        var n = Math.PI / 4,
          k = b(Math.PI / 2),
          m = b(n) + k,
          l = Math.cos(m),
          m = Math.sin(m),
          p = 2 / 3 * Math.PI + b(n) + k,
          r = Math.cos(p),
          p = Math.sin(p),
          k = 4 / 3 * Math.PI + b(n) + k,
          n = Math.cos(k),
          k = Math.sin(k);
        this.addDebree(l * a + e, m * a + h);
        this.addDebree(r * c + e, p * c + h);
        this.addDebree(n * q + e, k * q + h)
      };
      this.addDebree = function(a, b) {
        var g = new Fd;
        g.init(f, d);
        g.setSpeed(a, b);
        e.push(g)
      };
      this.update = function(a) {
        var b = 0;
        for (debreeID in e) {
          var d =
            e[debreeID];
          d.update(a);
          d.deleting && (e.splice(debreeID, 1), delete d);
          b++
        }
        0 == b && (this.deleting = !0)
      };
      this.draw = function(a) {
        for (debreeID in e) e[debreeID].draw(a)
      }
    },
    Fd = function() {
      var b, e, f, d, a, c = .08;
      u.isSpaceWars() && (c = 0);
      var g, h, q, n = 0;
      this.deleting = !1;
      this.init = function(a, b) {
        g = a;
        h = b;
        q = new Ec;
        q.init(15, g, h)
      };
      this.setSpeed = function(c, g) {
        b = c;
        e = g;
        f = 0;
        d = .2 * b;
        a = .2 * e
      };
      this.update = function(k) {
        f += c;
        g += b;
        h += e + f;
        b *= .975;
        e *= .975;
        c *= .975;
        Math.abs(b) < Math.abs(d) && (b = d);
        Math.abs(e) < Math.abs(a) && (e = a);
        3 < f && (f = 3);
        n +=
          k;
        500 < n && 2300 >= n ? q.debreeAge = (n - 500) / 2300 : 2300 < n && 2500 >= n ? q.alpha = (2500 - n) / 200 : 2500 < n && (delete q, this.deleting = !0);
        this.deleting || (q.setPosition(g, h), q.updateExplosion(k))
      };
      this.draw = function(a) {
        this.deleting || q.draw(a)
      }
    },
    kd = function() {
      this.lastUpdate = 0;
      this.id = -1;
      this.angle = this.speed = this.dstY = this.dstX = this.origY = this.origX = this.prevY = this.prevX = this.y = this.x = 0;
      this.controlAngle = -90;
      this.frameSwitchTime = 40;
      this.timeToNextFrame = 0;
      this.flameState = 1;
      this.lastImage;
      this.first_set = !0;
      this.colorHue =
        0;
      var b = new yb,
        e = 0,
        f = 0;
      this.finished = !1;
      this.type = 0;
      this.update = function(d) {
        var a = fa((R - this.lastUpdate) / Jb, 0, 1),
          c = this.y - this.prevY;
        0 == this.x - this.prevX && 0 == c && (f++, 50 < f && (this.finished = !0));
        this.prevX = this.x;
        this.prevY = this.y;
        this.x = a * (this.dstX - this.origX) + this.origX;
        this.y = a * (this.dstY - this.origY) + this.origY;
        b.setPosition(this.x, this.y);
        b.update(d);
        if (1 == this.type) u.isSpaceWars() && (this.angle += .2);
        else if (2 != this.type) {
          a = E / 2;
          c = a - 100;
          if (this.y > c && this.y < a && 0 >= e) {
            e = 5;
            var g = Math.random() / 2,
              c = (.2 +
                (.5 - (a - this.y) / (a - c) * .5)) * (.95 + g),
              g = 20 * Math.sin(this.angle);
            oa.addSplash(this.x - g, a + 5 * Math.random(), c, !0)
          }
          e -= d
        }
      };
      this.draw = function(d, a) {
        var c = 1;
        this.timeToNextFrame -= a;
        0 >= this.timeToNextFrame && (this.flameState = !this.flameState, this.timeToNextFrame = this.frameSwitchTime);
        var e = .7;
        this.flameState && (e = 1);
        0 == this.type && (b.width = 1.5 * e, b.style = "rgba(247, 189, 57, 1.0)", b.draw(d), b.width = .4 * e, b.style = "rgba(232, 247, 59, 1.0)", b.draw(d), d.save(), d.translate(this.x, this.y), this.flameState ? d.scale(.7, .7) : d.scale(.9,
          .9), d.rotate(this.angle), d.translate(-27, 0), p.frames.throttleFlame.draw(d), d.restore());
        d.save();
        d.translate(this.x, this.y);
        2 != this.type ? (1 == this.type && (c = 1.4), d.scale(c, c), 1 == this.type && p.blinkImage && u.isSpaceWars() && (d.scale(2, 2), d.drawImage(p.blinkImage, -p.blinkImage.width / 2, -p.blinkImage.height / 2), d.scale(.5, .5)), d.rotate(this.angle), 0 == this.type ? p.frames.missile_attack.draw(d) : p.frames.bomb.draw(d)) : (d.beginPath(), d.fillStyle = "#FF0000", d.arc(0, 0, 6, 0, 2 * Math.PI), d.fill(), d.beginPath(), d.fillStyle =
          "#FFFFFF", d.arc(0, 0, 4, 0, 2 * Math.PI), d.fill());
        d.restore()
      };
      this.drawReflection = function(b, a) {
        var c = E / 2,
          e = c - this.y;
        if (!(0 > e || 170 < e)) {
          var f = e / 170;
          b.save();
          b.translate(this.x, c + e - 25);
          c = 1;
          30 > e && 15 <= e ? c = (e - 15) / 15 : 15 > e && (c = 0);
          b.globalAlpha = .7 * (1 - f) * c;
          b.scale(1.1, .6);
          b.beginPath();
          b.fillStyle = "rgba(0,100,255,1.0)";
          b.arc(0, 0, 10, 0, 2 * Math.PI);
          b.fill();
          b.restore()
        }
      };
      this.setPosition = function(b, a, c) {
        this.origX = this.dstX;
        this.origY = this.dstY;
        this.dstX = 10 * b;
        this.dstY = 10 * a;
        this.first_set && ((b = B[c]) ? (a = 5 * Math.abs(Math.cos(b.angle +
          Math.PI / 2)), this.origX = b.x, this.origY = b.y + a, this.x = b.x, this.y = b.y) : (this.x = this.dstX, this.y = this.dstY, this.origX = this.dstX, this.origY = this.dstY), this.first_set = !1, 1 == this.type && (this.angle = Math.PI / 2));
        0 == this.type && (b = this.dstX - this.origX, a = this.dstY - this.origY, this.angle = 0 <= b ? Math.atan(a / b) : Math.atan(a / b) + Math.PI)
      };
      this.setColorHue = function(b) {
        this.colorHue = b
      };
      this.setType = function(d) {
        this.type = d;
        0 != d && delete b
      };
      this.getSpeedDirectionX = function() {
        return this.x - this.prevX
      };
      this.getSpeedDirectionY =
        function() {
          return this.y - this.prevY
        };
      b.tailAddJointInterval = 30;
      b.enabled = !0;
      b.trailTime = 100;
      b.width = 1.2;
      b.fixedColor = !0
    },
    yb = function() {
      this.tailAddJointInterval = 50;
      this.timeToNextJoint = 0;
      this.tailJoints = [
        []
      ];
      this.trailTimeEffectStart = this.trailTime = 600;
      this.trailEffectTime = 0;
      this.enabled = !1;
      this.width = 1;
      var b, e;
      this.fixedColor = !1;
      this.style;
      this.update = function(f) {
        var d = this.tailJoints.length - 1;
        if (0 >= this.timeToNextJoint && -1 < d) {
          this.timeToNextJoint = this.tailAddJointInterval;
          this.enabled && this.tailJoints[d].push({
            x: b,
            y: e,
            origX: b,
            origY: e,
            t: R,
            fx: (600 - Math.abs(this.trailEffectTime - 600)) / 600,
            style: this.style
          });
          for (var a = 0; a <= d; a++) {
            var c = this.tailJoints[a].length;
            if (0 < c) {
              c = R - this.tailJoints[a][0].t;
              c > this.trailTime && (this.tailJoints[a].splice(0, 1), 0 == this.tailJoints[a].length && this.tailJoints.splice(a, 1));
              break
            }
          }
        }
        for (var g = this.timeToNextJoint / 50, d = this.tailJoints.length - 1, a = 0; a <= d; a++) c = this.tailJoints[a].length, 1 >= c || (c = R - this.tailJoints[a][0].t, c > this.trailTime - this.tailAddJointInterval && (c = this.tailJoints[a][0].origY -
          this.tailJoints[a][1].origY, this.tailJoints[a][0].x = this.tailJoints[a][1].origX + (this.tailJoints[a][0].origX - this.tailJoints[a][1].origX) * g, this.tailJoints[a][0].y = this.tailJoints[a][1].origY + c * g));
        this.timeToNextJoint -= f;
        this.trailEffectTime = 0 > this.trailEffectTime ? 0 : this.trailEffectTime - f
      };
      this.draw = function(b) {
        if (Ya)
          for (var d = this.tailJoints.length, a = 0; a < d; a++)
            for (var c = this.tailJoints[a].length, e = 0; e < c - 1; e++) {
              b.strokeStyle = this.tailJoints[a][e].style;
              var h = e / c * (8 + 8 * this.tailJoints[a][e].fx);
              0 ==
                h && (h = .1);
              b.lineWidth = h * this.width;
              b.beginPath();
              b.lineTo(this.tailJoints[a][e].x, this.tailJoints[a][e].y);
              b.lineTo(this.tailJoints[a][e + 1].x, this.tailJoints[a][e + 1].y);
              b.stroke()
            }
      };
      this.setPosition = function(f, d) {
        b = f;
        e = d
      };
      this.push = function() {
        this.tailJoints.push([])
      };
      this.trailEffect = function() {
        this.trailEffectTime = 1200
      };
      this.clear = function() {
        this.tailJoints = [
          []
        ]
      }
    },
    ad = function() {
      this.tailJoints = [
        []
      ];
      this.maxPoints = 1;
      this.flagDivisions = 5;
      this.letterMinDistance = this.pointMinDistance = 10;
      this.texture;
      this.textureWidth;
      this.textureHeight;
      this.loaded = this.enabled = !1;
      this.width = 1;
      var b, e;
      this.style;
      this.flagHeight;
      this.flipX = !1;
      this.flipY = !0;
      this.stringScale = this.scale = 1;
      this.setTexture = function(b) {
        this.texture = new Image;
        this.texture.src = "flags/" + b.toLowerCase() + ".png";
        var d = this;
        this.texture.onload = function() {
          d.textureWidth = d.texture.width;
          d.textureHeight = d.texture.height;
          d.maxPoints = parseInt(d.textureWidth / 12);
          d.flagDivisions = d.maxPoints - 1;
          var a = d.scale;
          d.flagHeight = .5 * d.textureHeight * a;
          a = d.textureWidth *
            a / d.flagDivisions;
          d.pointMinDistance = a;
          d.letterMinDistance = a;
          d.enabled = !0;
          d.loaded = !0
        }
      };
      this.update = function(f) {
        f = !1;
        var d = this.tailJoints[0].length;
        if (0 == d) f = !0;
        else {
          var a = this.tailJoints[0][d - 1],
            c = a = Math.sqrt(Math.pow(a.x - b, 2) + Math.pow(a.y - e, 2));
          1 < d && (c = this.tailJoints[0][d - 2], c = Math.sqrt(Math.pow(c.x - b, 2) + Math.pow(c.y - e, 2)));
          a > this.pointMinDistance && c > 3 * this.pointMinDistance && (f = !0)
        }
        f && (this.tailJoints[0].push({
          x: b,
          y: e,
          origX: b,
          origY: e,
          t: R,
          fx: 0,
          style: this.style
        }), d > this.maxPoints && this.tailJoints[0].splice(0,
          1))
      };
      this.draw = function(f) {
        if (Ya && this.loaded && 0 < this.tailJoints.length)
          for (var d, a, c = this.letterMinDistance, g = !0, h = 0, q = 0, n, k, m, l, p, r, s = this.tailJoints[0].length - 2; 0 <= s; s--) {
            var t = this.tailJoints[0][s].x,
              w = this.tailJoints[0][s].y,
              u;
            g && (d = b, a = e);
            var v = t - d,
              x = w - a,
              A, C;
            u = Math.sqrt(Math.pow(v, 2) + Math.pow(x, 2));
            0 == u ? console.log("OOPS! Division by ZERO! " + s + " : " + v + ":::" + x) : (A = v / u, C = x / u);
            var v = !1,
              z, B;
            if (0 < u - c) {
              z = d + A * c;
              B = a + C * c;
              c = this.letterMinDistance;
              if (0 < h) {
                if (q < this.flagDivisions) {
                  d = this.flagHeight;
                  n = z -
                    n;
                  k = B - k;
                  n /= this.letterMinDistance;
                  k /= this.letterMinDistance;
                  k = -k * d;
                  n *= d;
                  u = z + k;
                  var v = B + n,
                    x = z - k,
                    E = B - n;
                  d = this.textureWidth;
                  a = this.textureHeight;
                  var K, F, G, H;
                  this.flipY && 0 < A ? (K = 0, F = a) : (K = a, F = 0);
                  this.flipX && 0 < A ? (G = q / this.flagDivisions * d, H = (q + 1) / this.flagDivisions * d) : (G = d * (1 - q / this.flagDivisions), H = d * (1 - (q + 1) / this.flagDivisions));
                  d = f;
                  a = this.texture;
                  m = [{
                    x: p,
                    y: r,
                    u: G,
                    v: K
                  }, {
                    x: m,
                    y: l,
                    u: G,
                    v: F
                  }, {
                    x: u,
                    y: v,
                    u: H,
                    v: F
                  }, {
                    x: x,
                    y: E,
                    u: H,
                    v: K
                  }];
                  l = [
                    [0, 1, 2],
                    [2, 3, 0]
                  ];
                  for (p = 0; 2 > p; p++) {
                    var D = l[p];
                    r = m[D[0]].x;
                    u = m[D[1]].x;
                    v = m[D[2]].x;
                    x = m[D[0]].y;
                    E = m[D[1]].y;
                    K = m[D[2]].y;
                    F = m[D[0]].u;
                    G = m[D[1]].u;
                    H = m[D[2]].u;
                    var L = m[D[0]].v,
                      M = m[D[1]].v,
                      D = m[D[2]].v;
                    d.save();
                    d.beginPath();
                    d.moveTo(r, x);
                    d.lineTo(u, E);
                    d.lineTo(v, K);
                    d.closePath();
                    d.clip();
                    var N = F * M + L * H + G * D - M * H - L * G - F * D;
                    d.transform((r * M + L * v + u * D - M * v - L * u - r * D) / N, (x * M + L * K + E * D - M * K - L * E - x * D) / N, (F * u + r * H + G * v - u * H - r * G - F * v) / N, (F * E + x * H + G * K - E * H - x * G - F * K) / N, (F * M * v + L * u * H + r * G * D - r * M * H - L * G * v - F * u * D) / N, (F * M * K + L * E * H + x * G * D - x * M * H - L * G * K - F * E * D) / N);
                    d.drawImage(a, 0, 0);
                    d.restore()
                  }
                  q++
                } else break;
                m = z + k;
                l = B + n;
                p = z - k;
                r =
                  B - n
              } else d = this.flagHeight, n = z - b, k = B - e, n /= this.letterMinDistance, k /= this.letterMinDistance, k = -k * d, n *= d, m = z + k, l = B + n, p = z - k, r = B - n, f.strokeStyle = "rgba(255, 255, 255, 0.3)", f.lineWidth = 2, f.beginPath(), f.lineTo(b, e), f.lineTo(z + k * this.stringScale, B + n * this.stringScale), f.stroke(), f.beginPath(), f.lineTo(b, e), f.lineTo(z - k * this.stringScale, B - n * this.stringScale), f.stroke();
              n = z;
              k = B;
              h++;
              v = !0
            } else c -= u;
            v ? (d = z, a = B, s++) : (d = t, a = w);
            g && (g = !1)
          }
      };
      this.setPosition = function(f, d) {
        b = f;
        e = d
      };
      this.push = function() {};
      this.trailEffect =
        function() {};
      this.clear = function() {
        this.tailJoints = [
          []
        ]
      }
    },
    $c = function() {
      var b = [],
        e = [],
        f;
      this.update = function(d) {
        0 < e.length && 2E3 < R - e[0] && (b.shift(), e.shift())
      };
      this.draw = function(d) {
        d.globalAlpha = 1;
        for (var a in b) {
          var c = b[a],
            f = (R - e[a]) / 2E3,
            h = f = Math.sqrt(f),
            h = .8 >= h ? h / .8 : 1 - (h - .8) / .2;
          d.globalAlpha = h;
          d.drawImage(c, -c.width / 2, 40 * -f - 10)
        }
        d.globalAlpha = 1
      };
      this.addScore = function(d) {
        var a = !1;
        f && 500 > R - f && (a = !0);
        var c;
        c = new Da(13, "#FFFFFF");
        c.setFont("px 'proxima-nova-1','proxima-nova-2', Arial Black");
        a ? d = b[b.length -
          1].number + d : f = R;
        c.setValue("+" + d);
        c = c.render();
        c.number = d;
        a ? (b.pop(), b.push(c)) : (b.push(c), e.push(+new Date))
      }
    },
    td = "shot",
    Yb = "laser",
    sd = "kinglaser",
    ud = "trishot",
    vd = "rail",
    md = "mlaunch",
    Qc = "mexpl",
    Fc = "mexpl",
    Hc = "phit",
    od = "weapgrab",
    qd = "hgrab",
    pd = "winggrab",
    gd = "warn",
    Wb = "lockon",
    Tc = "king",
    Wc = "planeloop",
    Xc = "waterloop",
    Ad = "env",
    rd = "bigsplash",
    bd = "crash",
    Yc = "lasershot",
    Zc = "laserloop",
    cd = "woosh",
    ld = "cannonshoot",
    Gc = "",
    Q = 0,
    Ra = 3,
    Qa = 600,
    zd = function() {
      this.sound;
      var b = !1,
        e = {},
        f = {
          bigsplash: [0, 1889.795918367347],
          cannonshoot: [3E3, 777.8684807256235],
          crash: [5E3, 991.7913832199545],
          env: [7E3, 4486.984126984126, 1],
          hgrab: [13E3, 208.9115646258506],
          king: [15E3, 1162.01814058957],
          kinglaser: [18E3, 533.9909297052152],
          laser: [2E4, 203.4467120181418],
          laserloop: [22E3, 898.934240362813, 1],
          lasershot: [24E3, 367.6643990929698],
          lockon: [26E3, 46.14512471655274],
          mexpl: [28E3, 1007.8231292517011],
          mlaunch: [31E3, 661.4512471655338],
          phit: [33E3, 206.30385487528002],
          planeloop: [35E3, 1427.7551020408196, 1],
          rail: [38E3, 840.7482993197277],
          shot: [4E4, 101.81405895691853],
          trishot: [42E3, 392.81179138321676],
          warn: [44E3, 2109.365079365077],
          waterloop: [48E3, 629.9092970521514, 1],
          weapgrab: [5E4, 202.06349206349472],
          winggrab: [52E3, 111.97278911564723],
          woosh: [54E3, 486.2585034013591]
        };
      this.load = function(d) {
        this.sound = new Howl({
          urls: ["sounds/out.ogg", "sounds/out.m4a", "sounds/out.mp3", "sounds/out.ac3"],
          sprite: f,
          onload: function() {
            b = !0;
            d && d()
          }
        })
      };
      this.playSound = function(d, a, c, g, h) {
        if (b && 0 != O && wa) {
          a *= da;
          var q = f[d];
          e[d] || (e[d] = 0);
          0 < g && e[d] >= g || (this.sound.play(d, function(b) {
            var d = L.sound._nodeById(b);
            d && d.bufferSource && (d.bufferSource.playbackRate.value = c);
            L.sound.volume(a, b);
            h && h(b)
          }), q = q[1], g != Q && e[d]++, setTimeout(function() {
            g != Q && e[d]--
          }, q))
        }
      };
      this.stop = function(d) {
        b && d.stop()
      };
      this.setVolume = function(b) {
        this.sound.volume(b)
      }
    },
    Sc = function() {
      var b = [],
        e = 0,
        f = null,
        d = null,
        a = null,
        c = null,
        g = 0,
        h = 0,
        e = 2E3,
        q = !1,
        n = 1,
        k = !1,
        m = 0,
        l = 0;
      this.update = function(a) {
        1 == g && (h += a, h > e && (q = !0));
        q ? (g -= .2, 0 > g && (g = 0, b.shift(), 0 < b.length ? this.processCode(b[0]) : d = null), m = -(1 - g)) : (1 > g && (g += .2, 1 < g && (g = 1)), m = 1 - (1.5 * g - .75) / .75)
      };
      this.draw = function(a) {
        d && (a.globalAlpha = g, a.scale((n + .2 * m) * t, (n + .2 * m) * t), a.drawImage(d, -d.width / 2, -d.height + 120), a.drawImage(currentText2Render, -currentText2Render.width / 2, 110), k ? (c.y = 30, c.draw(a)) : a.drawImage(c, -c.width / 2 - 5, -c.height - d.height + 120))
      };
      this.replaceCode = function(a) {
        for (var c in b) {
          if (64 >= b[c] && 64 >= a) return b[c] < a ? (b[c] = a, c) : -2;
          if (256 == b[c] && 256 == a || 128 == b[c] && 128 == a || 4096 == a) return c
        }
        return -1
      };
      this.push = function(a, c) {
        256 == a && (l = c);
        var d = this.replaceCode(a); - 1 == d ? (b.push(a), 1 == b.length &&
          this.processCode(a)) : 0 == d && this.processCode(a)
      };
      this.processCode = function(b) {
        q = !1;
        g = h = 0;
        var e = "",
          m = "KILL",
          s;
        k = !1;
        8 == b ? (e = "DOUBLE", s = "#cd9a6d", c = p.doubleKillCanvas, n = .8) : 16 == b ? (e = "TRIPLE", s = "#95b9c9", c = p.tripleKillCanvas, n = .9, m += "!") : 32 == b ? (e = "QUAD", s = "#f0a400", c = p.quadKillCanvas, n = 1, m += "!!") : 64 == b ? (e = "MULTI", s = "#de0000", c = p.multiKillCanvas, n = 1.1, m += "!!") : 128 == b ? (e = "NEAR", s = "#ffe774", c = p.frames.nearmiss, n = .8, m = "MISS", k = !0) : 4096 == b ? (e = "REVENGE", s = "#dd1824", c = p.frames.revenge, n = 1, m = "KILL", k = !0) : 256 ==
          b && (e = l + " KILL STREAK!", s = "#a5dd11", c = p.frames.frenzy, n = .8, m = "", k = !0);
        "" != e && (f = new Da(40, s, !0, "#000000"), f.setValue(e), f.setStrokeWidth(10), d = f.render(), a = new Da(40, s, !0, "#000000"), a.setValue(m), a.setStrokeWidth(10), currentText2Render = a.render())
      };
      this.clearNearMiss = function() {
        for (var a in b)
          if (128 == b[a]) {
            0 == a ? h = e : b.splice(a, 1);
            break
          }
      };
      this.clear = function() {
        b = [];
        null != d && (q = !0)
      };
      this.shouldDraw = function() {
        return g
      }
    },
    xd = function() {
      var b = this;
      b.x = 0;
      b.y = 0;
      b.z = 1 * Math.random() + .3;
      b.size = 1.2;
      b.opacity =
        .8 * Math.random() + .1;
      b.update = function(e) {
        if (0 == b.x || 0 == b.y) b.x = Math.random() * (e[1].x - e[0].x) + e[0].x, b.y = Math.random() * (e[1].y - e[0].y) + e[0].y;
        var f = e[1].x - e[0].x,
          d = e[1].y - e[0].y;
        b.x < e[0].x && (b.x += Math.ceil((e[0].x - b.x) / f) * f);
        b.y < e[0].y && (b.y += Math.ceil((e[0].y - b.y) / d) * d);
        b.x > e[1].x && (b.x -= Math.ceil((b.x - e[1].x) / f) * f);
        b.y > e[1].y && (b.y -= Math.ceil((b.y - e[1].y) / d) * d)
      };
      b.draw = function(e) {
        e.fillStyle = "rgba(226,219,226," + b.opacity + ")";
        e.beginPath();
        e.arc(b.x, b.y, this.z * this.size, 0, 2 * Math.PI, !0);
        e.closePath();
        e.fill()
      }
    },
    zb = 1,
    eb = 2,
    Ic = 0,
    nd = function() {
      this.lastUpdate = this.highlightValue = this.state = 0;
      this.id = -1;
      this.dstFloatValue = this.dstY = this.dstX = this.origFloatValue = this.origY = this.origX = this.prevFloatValue = this.prevY = this.prevX = this.floatValue = this.y = this.x = 0;
      this.energy = 255;
      this.inGame = !0;
      this.updateBool = !1;
      this.dstAngle = this.origAngle = this.angle = Math.PI / 2;
      this.name = "";
      this.first_set = !0;
      var b = this.isShooting = this.isBot = !1;
      this.type = 0;
      this.warshipContext = this.warshipCanvas = null;
      var e = 1,
        f = 20,
        d = 100,
        a = 1;
      this.fragment = 1;
      this.recoilTime = this.cannonAngle = 0;
      this.update = function(c) {
        if (this.inGame) {
          aa(this.x, this.y + this.floatValue, 120) ? b || (b = !0) : b = !1;
          var g = fa((R - this.lastUpdate) / Jb, 0, 1);
          this.prevX = this.x;
          this.prevY = this.y;
          this.prevFloatValue = this.floatValue;
          var h = g * (this.dstY - this.origY) + this.origY,
            q = g * (this.dstFloatValue - this.origFloatValue) + this.origFloatValue;
          this.x = g * (this.dstX - this.origX) + this.origX;
          this.y = h;
          this.floatValue = q;
          this.angle = g * (this.dstAngle - this.origAngle) + this.origAngle;
          this.cannonAngle =
            g * (this.dstCannonAngle - this.origCannonAngle) + this.origCannonAngle;
          0 < this.highlightValue && (this.highlightValue -= .06, 0 > this.highlightValue && (this.highlightValue = 0));
          this.type == zb && 1 == this.state && 0 < f && (e -= .02, 0 > e && (e = 0), d -= c, 0 > d && (d = 150, f -= 1, g = Math.random() * p.warshipImage.width - p.warshipImage.width / 2, h = Math.random() * p.warshipImage.height / 2 - p.warshipImage.height / 4, X.addBlast(this.x + g, this.y + h + q, .5, Q, 2)));
          2 == this.state ? (a -= .01, 0 > a && (a = 0)) : (a += .01, 1 < a && (a = 1));
          this.recoilTime = 0 < this.recoilTime ? this.recoilTime -
            c : 0
        }
      };
      this.loadWarshipCanvas = function() {
        var a = document.createElement("canvas"),
          b = a.getContext("2d"),
          d = p.warshipImage.height;
        a.width = p.warshipImage.width;
        a.height = d;
        this.warshipCanvas = a;
        this.warshipContext = b
      };
      this.draw = function(c) {
        if (this.inGame && b)
          if (this.type == zb && p.warshipLoaded) {
            if (p.warshipImage && !this.warshipCanvas && this.loadWarshipCanvas(), this.warshipCanvas) {
              c.save();
              c.globalAlpha = a;
              c.translate(this.x, this.y - 4);
              this.warshipContext.clearRect(0, 0, this.warshipCanvas.width, this.warshipCanvas.height);
              var d = .267 * this.warshipCanvas.width,
                e = .63 * this.warshipCanvas.height;
              this.warshipContext.save();
              this.warshipContext.translate(0, this.floatValue + 4);
              this.warshipContext.translate(this.warshipCanvas.width / 2, this.warshipCanvas.height / 2);
              this.warshipContext.rotate(this.angle);
              this.warshipContext.translate(-this.warshipCanvas.width / 2, -this.warshipCanvas.height / 2);
              this.warshipContext.translate(d, e);
              this.warshipContext.rotate(-this.cannonAngle);
              d = 10 * (1 - this.recoilTime / 200);
              this.warshipContext.translate(.5 *
                -p.cannonImage.width, -20 - d);
              this.warshipContext.drawImage(p.cannonImage, 0, 0);
              this.warshipContext.restore();
              this.warshipContext.save();
              this.warshipContext.translate(0, this.floatValue + 4);
              this.warshipContext.translate(this.warshipCanvas.width / 2, this.warshipCanvas.height / 2);
              this.warshipContext.rotate(this.angle);
              this.warshipContext.translate(-this.warshipCanvas.width / 2, -this.warshipCanvas.height / 2);
              this.warshipContext.drawImage(p.warshipImage, 0, 0);
              0 < this.highlightValue && (this.warshipContext.globalAlpha =
                .8 * this.highlightValue, this.warshipContext.drawImage(p.whiteWarshipImage, 0, 0), this.warshipContext.globalAlpha = 1);
              this.warshipContext.restore();
              1 == this.state && (c.globalAlpha = .8);
              c.drawImage(this.warshipCanvas, -p.warshipImage.width / 2, -p.warshipImage.height / 2);
              c.restore()
            }
          } else this.type == eb && p.asteroidImage && (c.save(), c.globalAlpha = a, c.translate(this.x, this.y), c.rotate(-this.angle), d = (3 - this.fragment + 1) / 3, c.scale(d, d), c.drawImage(p.asteroidImage, -p.asteroidImage.width / 2, -p.asteroidImage.height / 2), 0 <
            this.highlightValue && (c.globalAlpha = .8 * this.highlightValue, c.drawImage(p.whiteAsteroidImage, -p.asteroidImage.width / 2, -p.asteroidImage.height / 2), c.globalAlpha = 1), c.restore())
      };
      this.drawReflection = function(c, d) {
        this.inGame && b && this.type == zb && p.warshipLoaded && (c.save(), c.globalAlpha = .15 * a, c.translate(this.x, this.y + this.warshipCanvas.height - 4), c.scale(1, -1), c.drawImage(this.warshipCanvas, -p.warshipImage.width / 2, -p.warshipImage.height / 2), c.restore(), c.save(), c.translate(this.x + 85 + this.floatValue + 100 * this.angle,
          this.y + this.warshipCanvas.height / 2 - 4), c.globalAlpha = e * a, c.beginPath(), c.moveTo(-3, 1.5), c.lineTo(0, -1.5), c.lineTo(-300, 0), c.fillStyle = "rgba(255,255,255,1.0)", c.fill(), c.restore(), c.globalAlpha = 1)
      };
      this.drawInput = function(a) {};
      this.drawInfo = function(a) {
        if (this.inGame && b && this.state == Ic && 65535 != this.energy) {
          a.save();
          a.translate(this.x, this.y);
          a.fillStyle = "rgba(126,219,226,1)";
          a.shadowOffsetX = 0;
          a.shadowOffsetY = 0;
          a.shadowBlur = 0;
          a.shadowColor = "rgba(255, 255, 255, 0.7)";
          a.lineWidth = 1;
          var d = 28,
            e;
          this.type ==
            eb ? (e = 50 / this.fragment, d *= 3 / this.fragment) : (e = 55, d *= 5);
          var f = 512;
          32767.5 > this.energy && 16383.75 < this.energy ? f = 30 : 16383.75 > this.energy && (f = 0);
          a.fillStyle = "hsl(" + f + ", 100%, 50%)";
          a.fillRect(-d / 2 + 0, e + 0, this.energy / 65535 * d, 8);
          a.strokeStyle = "rgba(255,255,255,1.0)";
          a.strokeRect(-d / 2, e, d, 8);
          a.restore()
        }
      };
      this.hit = function(a) {
        la() && (this.highlightValue = a == Ta || this.type == eb ? this.highlightValue + 1 : this.highlightValue + .3, 1 < this.highlightValue && (this.highlightValue = 1))
      };
      this.setPose = function(a, b, d) {
        this.origX =
          this.x;
        this.origY = this.y;
        this.origAngle = this.dstAngle;
        this.dstX = 10 * a;
        this.dstY = 10 * b;
        this.dstAngle = d;
        this.first_set ? (this.origX = this.dstX, this.origY = this.dstY, this.x = this.dstX, this.y = this.dstY, this.origAngle = this.dstAngle, this.first_set = !1) : (a = this.dstX - this.origX, b = this.dstY - this.origY, this.speed = Math.sqrt(a * a + b * b) / 3);
        this.inGame || (this.inGame = !0)
      };
      this.setFloatValue = function(a) {
        this.origFloatValue = this.floatValue;
        this.dstFloatValue = 10 * a;
        this.first_set && (this.floatValue = this.dstFloatValue)
      };
      this.setType =
        function(a) {
          this.type = a
        };
      this.setState = function(a) {
        this.state = a
      };
      this.setEnergy = function(a) {
        this.energy = a
      };
      this.setFragment = function(b) {
        this.fragment = b;
        3 != b && 1 == b && (a = 0)
      };
      this.setCannonAngle = function(a) {
        this.origCannonAngle = this.cannonAngle;
        this.dstCannonAngle = a;
        this.first_set && (this.cannonAngle = this.dstCannonAngle)
      };
      this.cannonShoot = function() {
        this.recoilTime = 200
      };
      this.getSpeedDirectionX = function() {
        return this.x - this.prevX
      };
      this.getSpeedDirectionY = function() {
        return this.y - this.prevY
      };
      this.cleanup =
        function() {
          this.first_set = !0;
          this.inGame = !1
        }
    };
  window.onload = function() {
    Modernizr.canvas && Modernizr.websockets && (null == M && (window.devicePixelRatio && (jb = 1 < window.devicePixelRatio ? 2 : 1), u = new Nc, M = new Cd(document.getElementById("canvas")), window.addEventListener("resize", M.resize, !1), window.myPlane2 = U = new Pc, U.addListeners(), window.requestAnimationFrame ? window.requestAnimationFrame(Rb) : setInterval(Rb, 1E3 / 60), jQuery("#overlay")
      .show()), M.resize(), gc())
  }
})();
