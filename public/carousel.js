(() => {
  var t = {
      966: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          var i = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
          if (!i) {
            if (
              Array.isArray(t) ||
              (i = (function (t, e) {
                if (!t) return;
                if ("string" == typeof t) return r(t, e);
                var i = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === i && t.constructor && (i = t.constructor.name);
                if ("Map" === i || "Set" === i) return Array.from(t);
                if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return r(t, e);
              })(t)) ||
              (e && t && "number" == typeof t.length)
            ) {
              i && (t = i);
              var o = 0,
                n = function () {};
              return {
                s: n,
                n: function () {
                  return o >= t.length ? { done: !0 } : { done: !1, value: t[o++] };
                },
                e: function (t) {
                  throw t;
                },
                f: n,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var s,
            l = !0,
            a = !1;
          return {
            s: function () {
              i = i.call(t);
            },
            n: function () {
              var t = i.next();
              return (l = t.done), t;
            },
            e: function (t) {
              (a = !0), (s = t);
            },
            f: function () {
              try {
                l || null == i.return || i.return();
              } finally {
                if (a) throw s;
              }
            },
          };
        }
        function r(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
          return i;
        }
        function i(t, e) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
          }
        }
        function o(e, r) {
          if (r && ("object" === t(r) || "function" == typeof r)) return r;
          if (void 0 !== r) throw new TypeError("Derived constructors may only return object or undefined");
          return n(e);
        }
        function n(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        }
        function s(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (s = function (t) {
              if (null === t || ((r = t), -1 === Function.toString.call(r).indexOf("[native code]"))) return t;
              var r;
              if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, i);
              }
              function i() {
                return l(t, arguments, d(this).constructor);
              }
              return (
                (i.prototype = Object.create(t.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } })), c(i, t)
              );
            }),
            s(t)
          );
        }
        function l(t, e, r) {
          return (
            (l = a()
              ? Reflect.construct
              : function (t, e, r) {
                  var i = [null];
                  i.push.apply(i, e);
                  var o = new (Function.bind.apply(t, i))();
                  return r && c(o, r.prototype), o;
                }),
            l.apply(null, arguments)
          );
        }
        function a() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (t) {
            return !1;
          }
        }
        function c(t, e) {
          return (
            (c =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t;
              }),
            c(t, e)
          );
        }
        function d(t) {
          return (
            (d = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            d(t)
          );
        }
        function h(t, e, r) {
          return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t;
        }
        var u = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && c(t, e);
          })(_, t);
          var r,
            s,
            l,
            u,
            f,
            v =
              ((r = _),
              (s = a()),
              function () {
                var t,
                  e = d(r);
                if (s) {
                  var i = d(this).constructor;
                  t = Reflect.construct(e, arguments, i);
                } else t = e.apply(this, arguments);
                return o(this, t);
              });
          function _() {
            var t;
            return (
              (function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
              })(this, _),
              h(n((t = v.call(this))), "_slidesPerScroll", void 0),
              h(n(t), "_withControls", void 0),
              h(n(t), "_mode", void 0),
              h(n(t), "_type", void 0),
              h(n(t), "_scrollMode", void 0),
              h(n(t), "_interval", void 0),
              h(n(t), "_onHoverStop", void 0),
              h(n(t), "_isBrowser", void 0),
              h(n(t), "_isMobile", void 0),
              h(n(t), "_withIndicators", void 0),
              h(n(t), "_id", void 0),
              h(n(t), "_scrollInterval", void 0),
              h(n(t), "_scrollDirection", 1),
              h(n(t), "_clonedItems", 0),
              h(n(t), "_scrollPerClick", void 0),
              h(n(t), "_isCenteredMode", void 0),
              h(n(t), "_sliderWidth", void 0),
              h(n(t), "_contentArray", []),
              h(n(t), "_marginLeft", void 0),
              h(n(t), "_contentWidth", void 0),
              h(n(t), "_marginRight", void 0),
              h(n(t), "previousButton", void 0),
              h(n(t), "nextButton", void 0),
              h(n(t), "slider", void 0),
              h(n(t), "sliderContainer", void 0),
              h(n(t), "carouselContainer", void 0),
              h(n(t), "INVERT_TIMEOUT", 490),
              h(n(t), "scrollContinously", function () {
                t._scrollInterval = setInterval(function () {
                  (t._scrollDirection = 1), t.moveTo(t._scrollDirection), t._withIndicators && t.changeActiveItem();
                }, t._interval);
              }),
              h(n(t), "stopContinousScroll", function () {
                clearInterval(t._scrollInterval);
              }),
              h(n(t), "addCloneElements", function () {
                if ("cards" == t._type) {
                  t._clonedItems = t._contentArray.length;
                  var r,
                    i = 0,
                    o = 0,
                    n = e(t._contentArray);
                  try {
                    for (n.s(); !(r = n.n()).done; ) {
                      var s = r.value;
                      if ((i += s.offsetLeft) + s.offsetWidth > t.sliderContainer.offsetWidth) break;
                      o++;
                    }
                  } catch (t) {
                    n.e(t);
                  } finally {
                    n.f();
                  }
                  for (var l = 0; l < o; l++) {
                    var a = t._contentArray[l].cloneNode(!0);
                    a.classList.add("clone"), t.slider.appendChild(a);
                  }
                  for (var c = t._contentArray.length; c > o; c--) {
                    var d = t._contentArray[c - 1].cloneNode(!0);
                    d.classList.add("clone"), t.slider.insertBefore(d, t.slider.children[0]);
                  }
                  t.transformCarousel(
                    "-".concat(t._scrollPerClick * (t._contentArray.length - o) + (t._scrollPerClick - t._contentWidth) - 1, "px"),
                    !0
                  );
                }
                if ("banner" == t._type)
                  if (
                    ((t._clonedItems = 2),
                    t.slider.appendChild(t._contentArray[0].cloneNode(!0)),
                    t.slider.appendChild(t._contentArray[1].cloneNode(!0)),
                    t.slider.insertBefore(t._contentArray[t._contentArray.length - 1].cloneNode(!0), t.slider.children[0]),
                    t.slider.insertBefore(t._contentArray[t._contentArray.length - 2].cloneNode(!0), t.slider.children[0]),
                    t._isCenteredMode)
                  ) {
                    var h = (t.sliderContainer.offsetWidth - t._scrollPerClick) / 2;
                    t.transformCarousel("-".concat(Math.abs(t._clonedItems * t._scrollPerClick - h), "px"), !0);
                  } else t.transformCarousel("-".concat(Math.abs(t._clonedItems * t._scrollPerClick - 1), "px"), !0);
              }),
              t
            );
          }
          return (
            (l = _),
            (u = [
              {
                key: "connectedCallback",
                value: function () {
                  var t = this;
                  setTimeout(function () {
                    (t._withControls = t.getAttribute("withcontrols") || "auto"),
                      (t._mode = t.getAttribute("mode") || "standard"),
                      (t._type = t.getAttribute("type") || "cards"),
                      (t._scrollMode = t.getAttribute("scrollmode") || "manual"),
                      (t._interval = +t.getAttribute("interval") || 2e3),
                      (t._onHoverStop = "false" !== t.getAttribute("onhoverstop")),
                      (t._isBrowser = "false" !== t.getAttribute("isbrowser")),
                      (t._isMobile = "true" === t.getAttribute("ismobile")),
                      (t._slidesPerScroll = +t.getAttribute("slidesperscroll")),
                      (t._withIndicators = "true" == t.getAttribute("withindicators")),
                      (t._isCenteredMode = "true" == t.getAttribute("isCenteredMode")),
                      (t._observer = new MutationObserver(function (e) {
                        e.forEach(function (e) {
                          "attributes" === e.type &&
                            (console.log("Attribute " + e.attributeName + " changed to " + t.getAttribute(e.attributeName)),
                            (t._slidesPerScroll = +t.getAttribute("slidesperscroll")),
                            "cards" == t._type &&
                              ((t._scrollPerClick = t._contentArray[1].offsetLeft * t._slidesPerScroll),
                              console.log({ scrollPerClick: t._scrollPerClick })));
                        });
                      })),
                      t.initCarousel(),
                      t._observer.observe(t, { attributes: !0 });
                  }, 0);
                },
              },
              {
                key: "initCarousel",
                value: function () {
                  this._isBrowser &&
                    (this.loadComponents(),
                    this.setProperties(),
                    this.addRemoveListenersOnArrows(),
                    this.checkIfDisplayArrows(),
                    this.addRemoveSliderEventListeners(),
                    "wrap" === this._mode &&
                      (this.sliderContainer.scrollWidth > this.sliderContainer.offsetWidth ? this.addCloneElements() : this.hideArrows("both")),
                    "auto" === this._scrollMode && (this.hideArrows("both"), this.scrollContinously()),
                    this._withIndicators && "banner" === this._type && this.generateIndicators());
                },
              },
              {
                key: "loadComponents",
                value: function () {
                  (this.previousButton = this.querySelector("#jpl-previous")),
                    (this.nextButton = this.querySelector("#jpl-next")),
                    (this.sliderContainer = this.querySelector(".jpl-slider-wrapper")),
                    (this.slider = this.querySelector(".jpl-slider"));
                },
              },
              {
                key: "setProperties",
                value: function () {
                  (this._contentArray = this.querySelectorAll(".jpl-carousel-item")),
                    (this._marginLeft = this._contentArray[0].offsetLeft),
                    (this._contentWidth = this._contentArray[0].offsetWidth),
                    (this._marginRight = this._contentArray[1].offsetLeft - (this._marginLeft + this._contentWidth) - this._marginLeft),
                    "cards" == this._type &&
                      ((this._scrollPerClick = this._contentArray[1].offsetLeft * this._slidesPerScroll),
                      console.log({ scrollPerClick: this._scrollPerClick })),
                    "banner" == this._type &&
                      (this._isCenteredMode
                        ? (this._scrollPerClick = this._marginLeft + this._marginRight + this._contentWidth)
                        : (this._scrollPerClick = this._contentArray[1].offsetLeft)),
                    this._isCenteredMode
                      ? (this._sliderWidth = (this._marginLeft + this._marginRight + this._contentWidth) * this._contentArray.length)
                      : (this._sliderWidth = this._contentArray[1].offsetLeft * this._contentArray.length),
                    ("wrap" != this._mode && "standard" != this._mode) ||
                      (this.slider.style.setProperty("transform", "translateX(0px)"),
                      this.slider.style.setProperty("transition", "all 0.2s ease-in-out"));
                },
              },
              {
                key: "addRemoveListenersOnArrows",
                value: function () {
                  var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "addEventListener";
                  this.previousButton[e]("click", function (e) {
                    setTimeout(function () {
                      t.previousButton.classList.remove("no-click");
                    }, t.INVERT_TIMEOUT),
                      (t._scrollDirection = 0),
                      t.moveTo(t._scrollDirection),
                      t._withIndicators && t.changeActiveItem();
                  }),
                    this.nextButton[e]("click", function (e) {
                      console.log("Right BTN CLICKED..."),
                        setTimeout(function () {
                          t.nextButton.classList.remove("no-click");
                        }, t.INVERT_TIMEOUT),
                        (t._scrollDirection = 1),
                        t.moveTo(t._scrollDirection),
                        t._withIndicators && t.changeActiveItem();
                    });
                },
              },
              {
                key: "getTranslateX",
                value: function () {
                  var t = this.slider.style.transform,
                    e = t.indexOf("("),
                    r = t.indexOf("px");
                  return Math.abs(+t.slice(e + 1, r));
                },
              },
              {
                key: "moveTo",
                value: function (t) {
                  if ("wrap" == this._mode) {
                    var e = this.getTranslateX();
                    0 == t ? (e -= this._scrollPerClick) : 1 == t && (e += this._scrollPerClick),
                      this.transformCarousel("-".concat(e, "px")),
                      this.checkIfInvert(t, e);
                  }
                  if ("standard" == this._mode) {
                    var r = this.getTranslateX();
                    0 == t
                      ? (console.log(this._sliderWidth, r, this.sliderContainer.offsetWidth, this._scrollPerClick), (r -= this._scrollPerClick))
                      : 1 == t &&
                        (console.log(this._sliderWidth - (r + this.sliderContainer.offsetWidth), this._scrollPerClick),
                        this._sliderWidth - (r + this.sliderContainer.offsetWidth) <= this._scrollPerClick
                          ? (r += this._sliderWidth - (r + this.sliderContainer.offsetWidth))
                          : (r += this._scrollPerClick)),
                      this.transformCarousel("-".concat(r, "px"));
                  }
                },
              },
              {
                key: "checkIfInvert",
                value: function (t, e) {
                  var r = this;
                  1 === t &&
                    e >= this._sliderWidth &&
                    setTimeout(function () {
                      r.transformCarousel("-".concat(Math.abs(e - r._sliderWidth), "px"), !0);
                    }, this.INVERT_TIMEOUT),
                    0 == t &&
                      (Math.abs(e) <= this._scrollPerClick ||
                        (this._isCenteredMode && Math.abs(e - (this._marginLeft + this._marginRight)) <= this._scrollPerClick)) &&
                      ((e = this._sliderWidth + e),
                      setTimeout(function () {
                        r.transformCarousel("-".concat(Math.abs(e), "px"), !0);
                      }, this.INVERT_TIMEOUT));
                },
              },
              {
                key: "transformCarousel",
                value: function (t) {
                  var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                  e ? this.slider.style.setProperty("transition", "all 0.2s ease-in-out") : this.slider.style.setProperty("transition", "none"),
                    this.slider.style.setProperty("transform", "translateX(".concat(t, ")"));
                },
              },
              {
                key: "hideArrows",
                value: function (t) {
                  console.log("hideArrows", t),
                    "left" === t
                      ? this.nextButton.style.setProperty("display", "none")
                      : "right" === t
                      ? this.previousButton.style.setProperty("display", "none")
                      : "both" === t &&
                        (this.nextButton.style.setProperty("display", "none"), this.previousButton.style.setProperty("display", "none"));
                },
              },
              {
                key: "showArrows",
                value: function (t) {
                  "left" === t
                    ? this.nextButton.style.setProperty("display", "block")
                    : "right" === t
                    ? this.previousButton.style.setProperty("display", "block")
                    : "both" === t &&
                      (this.nextButton.style.setProperty("display", "block"), this.previousButton.style.setProperty("display", "block"));
                },
              },
              {
                key: "checkIfDisplayArrows",
                value: function () {
                  this._isMobile || "false" == this._withControls
                    ? this.hideArrows("both")
                    : "true" == this._withControls
                    ? this.showArrows("both")
                    : ("wrap" == this._mode && "auto" == this._scrollMode) || ("wrap" != this._mode && "auto" == this._scrollMode)
                    ? this.hideArrows("both")
                    : "wrap" == this._mode && "auto" != this._scrollMode
                    ? this.showArrows("both")
                    : this.getTranslateX();
                },
              },
              {
                key: "addRemoveSliderEventListeners",
                value: function () {
                  var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "addEventListener";
                  this.sliderContainer[e]("scroll", function (e) {
                    "wrap" == t._mode && t._isMobile && t.handleEdgeMovement(), "auto" != t._scrollMode && t.checkIfDisplayArrows();
                  }),
                    this.sliderContainer[e]("transitionend", function (e) {
                      "wrap" == t._mode && t._isMobile && t.handleEdgeMovement(), "auto" != t._scrollMode && t.checkIfDisplayArrows();
                    }),
                    this.sliderContainer[e]("transitionend", function (e) {
                      t.previousButton.classList.remove("no-click"), t.nextButton.classList.remove("no-click");
                    }),
                    this.sliderContainer[e]("mouseenter", function (e) {
                      "auto" === t._scrollMode && t._onHoverStop && t.stopContinousScroll();
                    }),
                    this.sliderContainer[e]("mouseleave", function (e) {
                      "auto" === t._scrollMode && t._onHoverStop && t.scrollContinously();
                    }),
                    this._isMobile ||
                      this.sliderContainer[e]("mousewheel", function (t) {
                        t.deltaX && t.preventDefault();
                      }),
                    this._isMobile &&
                      (this.sliderContainer[e]("touchstart", function (t) {
                        t.preventDefault();
                      }),
                      this.sliderContainer[e](
                        "touchend",
                        function (e) {
                          var r = e.changedTouches[0].pageX < 0 ? 1 : (t._scrollDirection = e.changedTouches[0].pageX > 0 ? 0 : "");
                          isNaN(r) || ((t._scrollDirection = r), t.handleEdgeMovement());
                        },
                        { passive: !0 }
                      ));
                },
              },
              {
                key: "changeActiveItem",
                value: function () {
                  var t,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    r = this.querySelectorAll(".jpl-indicator-list-item"),
                    i = this.querySelector(".jpl-indicator-list-item.active"),
                    o = +i.dataset.index;
                  if (e) t = e.target;
                  else {
                    var n = 1 == this._scrollDirection ? o + 1 : o - 1;
                    if (n >= r.length) {
                      if ("wrap" != this._mode) return null;
                      n = 0;
                    }
                    if (-1 == n) {
                      if ("wrap" != this._mode) return null;
                      n = r.length - 1;
                    }
                    t = r[n];
                  }
                  var s = +t.dataset.index;
                  if ((i.classList.remove("active"), t.classList.contains("small"))) {
                    if (
                      (s > o &&
                        (r[s - 5] && r[s - 5].classList.add("small"),
                        r[s - 6] && r[s - 6].classList.add("hide", "small"),
                        r[s + 1] && r[s + 1].classList.remove("hide")),
                      s < o &&
                        (r[s + 5] && r[s + 5].classList.add("small"),
                        r[s + 6] && r[s + 6].classList.add("hide", "small"),
                        r[s - 1] && r[s - 1].classList.remove("hide")),
                      !e && 0 === s && o == r.length - 1)
                    )
                      for (var l = 0; l < r.length; l++)
                        0 == l && r[l].classList.add("active"),
                          l < 5 && (r[l].classList.remove("hide"), r[l].classList.remove("small")),
                          5 === l && r[l].classList.add("small"),
                          l > 5 && (r[l].classList.add("hide"), r[l].classList.add("small"));
                    if (!e && s == r.length - 1 && 0 == o)
                      for (var a = 0; a < r.length; a++)
                        a == r.length - 1 && r[a].classList.add("active"),
                          a + 5 < r.length && (r[a].classList.add("hide"), r[a].classList.add("small")),
                          a + 5 === r.length && r[a].classList.add("small"),
                          a + 5 > r.length && (r[a].classList.remove("hide"), r[a].classList.remove("small"));
                    t.classList.remove("small");
                  }
                  if ("banner" == this._type && e) {
                    if ("wrap" === this._mode) {
                      var c = 2 * this._scrollPerClick + s * this._scrollPerClick,
                        d = this.getTranslateX();
                      d || (c = this._scrollPerClick), this.transformCarousel("-".concat(c, "px"), !0), this.checkIfInvert(this._scrollDirection, c);
                    }
                    if ("standard" === this._mode) {
                      var h = this._scrollPerClick * s;
                      this.sliderContainer.scrollTo({ left: h, behavior: "smooth" });
                    }
                  }
                  t.classList.add("active");
                },
              },
              {
                key: "generateIndicators",
                value: function () {
                  var t = this;
                  this._indicatorsContainer = this.querySelector(".jpl-indicators-wrapper");
                  for (var e = '<ul class="jpl-indicator-list">', r = 0; r < this._contentArray.length; r++)
                    e +=
                      0 == r
                        ? '<li class="jpl-indicator-list-item active" data-index="'.concat(r, '"></li>')
                        : 5 == r
                        ? '<li class="jpl-indicator-list-item small" data-index="'.concat(r, '"></li>')
                        : r > 5
                        ? '<li class="jpl-indicator-list-item small hide" data-index="'.concat(r, '"></li>')
                        : '<li class="jpl-indicator-list-item" data-index="'.concat(r, '"></li>');
                  (e += "</ul>"),
                    (this._indicatorsContainer.innerHTML = e),
                    setTimeout(function () {
                      t.addRemoveListenerToIndicator();
                    }, 0);
                },
              },
              {
                key: "addRemoveListenerToIndicator",
                value: function () {
                  var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "addEventListener";
                  this._withIndicators &&
                    (this.querySelectorAll(".jpl-indicator-list-item").forEach(function (r) {
                      r[e]("click", function (e) {
                        t.changeActiveItem(e);
                      });
                    }),
                    this.querySelectorAll(".jpl-indicator-list-item-small").forEach(function (r) {
                      r[e]("click", function (e) {
                        t.changeActiveItem(e);
                      });
                    }));
                },
              },
              {
                key: "handleEdgeMovement",
                value: function () {
                  this.moveTo(this._scrollDirection), this._withIndicators && this.changeActiveItem();
                },
              },
              {
                key: "debounce",
                value: function (t) {
                  var e,
                    r = this,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.INVERT_TIMEOUT;
                  return function () {
                    for (var o = arguments.length, n = new Array(o), s = 0; s < o; s++) n[s] = arguments[s];
                    clearTimeout(e),
                      (e = setTimeout(function () {
                        t.apply(r, n);
                      }, i));
                  };
                },
              },
              {
                key: "getItemById",
                value: function (t) {
                  return t
                    ? this._contentArray.find(function (e) {
                        return e.getAttribute("id") === t;
                      })
                    : null;
                },
              },
              {
                key: "removeAllEventListeners",
                value: function () {
                  this.addRemoveListenersOnArrows("removeEventListener"),
                    this.addRemoveSliderEventListeners("removeEventListener"),
                    this._withIndicators && this.addRemoveListenerToIndicator("removeEventListener");
                },
              },
              {
                key: "disconnectedCallback",
                value: function () {
                  this.removeAllEventListeners();
                },
              },
            ]),
            u && i(l.prototype, u),
            f && i(l, f),
            Object.defineProperty(l, "prototype", { writable: !1 }),
            _
          );
        })(s(HTMLElement));
        window && window.customElements.define("jpl-carousel", u);
      },
    },
    e = {};
  function r(i) {
    var o = e[i];
    if (void 0 !== o) return o.exports;
    var n = (e[i] = { exports: {} });
    return t[i](n, n.exports, r), n.exports;
  }
  (r.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return r.d(e, { a: e }), e;
  }),
    (r.d = (t, e) => {
      for (var i in e) r.o(e, i) && !r.o(t, i) && Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
    }),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      "use strict";
      r(966);
    })();
})();
