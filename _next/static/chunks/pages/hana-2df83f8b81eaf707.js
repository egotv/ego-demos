(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5525],
  {
    17817: function (e, t, n) {
      "use strict";
      var i,
        a = n(67294);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      t.Z = function (e) {
        return a.createElement(
          "svg",
          _extends(
            {
              width: 17,
              height: 16,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          i ||
            (i = a.createElement("path", {
              d: "M14 8.5H3m11 0-3 3m3-3-3-3",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }))
        );
      };
    },
    64154: function (e, t, n) {
      "use strict";
      var i,
        a = n(67294);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      t.Z = function (e) {
        return a.createElement(
          "svg",
          _extends(
            {
              width: 16,
              height: 16,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          i ||
            (i = a.createElement("path", {
              d: "m13 4.5-7 7-3-3",
              stroke: "#fff",
              strokeWidth: 1.5,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }))
        );
      };
    },
    56292: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/hana",
        function () {
          return n(53798);
        },
      ]);
    },
    35541: function (e, t, n) {
      "use strict";
      n.d(t, {
        X: function () {
          return MediaContainer;
        },
      });
      var i = n(85893),
        a = n(94184),
        o = n.n(a),
        c = n(1216),
        s = n(33042),
        l = n.n(s);
      function MediaContainer(e) {
        var t = e.children,
          n = e.className,
          a = e.isLazy,
          s = e.height;
        return (0, i.jsx)("div", {
          className: o()(l().content, n),
          children:
            void 0 === a || a
              ? (0, i.jsx)(c.ZP, {
                  offset: 100,
                  height: void 0 === s ? 518 : s,
                  once: !0,
                  children: t,
                })
              : t,
        });
      }
    },
    91943: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return AsideContent;
        },
      });
      var i = n(75766),
        a = n(85893),
        o = n(94184),
        c = n.n(o),
        s = n(75620),
        l = n.n(s);
      function AsideContent(e) {
        var t,
          n,
          o = e.title,
          s = e.description,
          d = e.icon,
          h = e.layout,
          _ = e.iconTheme,
          v = e.className,
          g = e.pWidth,
          b = e.largeTitle,
          w = e.soonLabel,
          m = void 0 !== w && w;
        return (0, a.jsxs)("div", {
          className: c()(
            l().container,
            v,
            ((t = {}),
            (0, i._)(t, l().left, "left" === h),
            (0, i._)(t, l().right, "right" === h),
            (0, i._)(t, l().center, "center" === h),
            (0, i._)(t, l().dark, "dark" === _),
            (0, i._)(t, l().none, "none" === _),
            (0, i._)(t, l().large, "large" === _),
            t)
          ),
          children: [
            d && (0, a.jsx)("div", { className: l().icon, children: d }),
            (0, a.jsxs)("div", {
              className: l().content,
              children: [
                (0, a.jsxs)("div", {
                  className: c()(
                    l().title,
                    ((n = {}),
                    (0, i._)(n, l().largeTitle, b),
                    (0, i._)(n, l().withSoonLabel, m),
                    n)
                  ),
                  children: [
                    o,
                    m &&
                      (0, a.jsx)("div", {
                        className: l().newLabel,
                        children: "SOON",
                      }),
                  ],
                }),
                (0, a.jsx)("p", {
                  style: { maxWidth: void 0 === g ? "100%" : g },
                  dangerouslySetInnerHTML: { __html: s },
                }),
              ],
            }),
          ],
        });
      }
    },
    86225: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return Section;
        },
      });
      var i = n(72253),
        a = n(14932),
        o = n(47702),
        c = n(85893),
        s = n(94184),
        l = n.n(s),
        d = n(37599),
        h = n.n(d);
      function Section(e) {
        var t = e.theme,
          n = e.className,
          s = e.title,
          d = e.description,
          _ = e.children,
          v = (0, o._)(e, [
            "theme",
            "className",
            "title",
            "description",
            "children",
          ]);
        return (0, c.jsxs)(
          "section",
          (0, a._)((0, i._)({}, v), {
            className: l()(
              "content content-container section",
              h().section,
              t && h()[t],
              n
            ),
            children: [
              (0, c.jsx)("h2", {
                className: l()(h().title, d && h().hasDescription),
                children: s,
              }),
              d &&
                (0, c.jsx)("p", {
                  className: l()("description-hero", h().description),
                  children: d,
                }),
              _,
            ],
          })
        );
      }
    },
    12993: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return SectionHero;
        },
      });
      var i = n(72253),
        a = n(14932),
        o = n(47702),
        c = n(85893),
        s = n(94184),
        l = n.n(s),
        d = n(66565),
        h = n.n(d),
        _ = n(25675),
        v = n.n(_);
      function SectionHero(e) {
        var t = e.className,
          n = e.title,
          s = e.description,
          d = e.head,
          _ = e.backgroundImage,
          g = e.children,
          b = (0, o._)(e, [
            "className",
            "title",
            "description",
            "head",
            "backgroundImage",
            "children",
          ]);
        return (0, c.jsxs)(
          "section",
          (0, a._)((0, i._)({}, b), {
            className: l()(
              "content content-container section-hero",
              h().section,
              t
            ),
            children: [
              _ &&
                (0, c.jsx)("div", {
                  className: h().backgroundImage,
                  children: (0, c.jsx)(v(), { src: _, alt: "hero background" }),
                }),
              d && (0, c.jsx)("div", { className: h().head, children: d }),
              (0, c.jsx)("h1", {
                className: l()("title-hero", h().title, d && h().hasHead),
                children: n,
              }),
              s &&
                (0, c.jsx)("p", {
                  className: l()("description-hero", h().description),
                  children: s,
                }),
              g,
            ],
          })
        );
      }
    },
    58833: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return i.$;
        },
        _: function () {
          return a._;
        },
      });
      var i = n(86225),
        a = n(12993);
    },
    53798: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return hana;
          },
        });
      var i,
        a,
        o,
        c,
        s,
        l,
        d,
        h,
        _,
        v,
        g,
        b,
        w,
        m,
        k,
        x,
        S,
        j,
        I,
        E,
        C,
        P,
        D,
        U,
        B,
        L,
        R,
        N,
        F,
        z,
        H,
        V,
        W,
        Z,
        q,
        G,
        Y,
        et,
        er,
        en,
        ei,
        ea,
        eu,
        es,
        ef,
        el,
        ed,
        eh,
        e_,
        ep,
        ev,
        eg,
        eb,
        ey,
        ew,
        em,
        ek,
        ex,
        eO,
        eS,
        eA,
        ej,
        eI,
        eE,
        eC,
        eP,
        eD,
        eM,
        eT,
        eU,
        eB,
        eL,
        eR,
        eN,
        eF,
        ez,
        eH,
        eV,
        eW,
        eK,
        eJ,
        eZ,
        eq,
        eQ,
        eX,
        e$,
        eG,
        eY,
        e0,
        e1,
        e2,
        e3,
        e5,
        e4,
        e6,
        e8,
        e7,
        e9,
        te,
        tt,
        tr,
        tn,
        ti,
        to,
        tu,
        ts,
        tf,
        tl,
        td,
        th,
        t_,
        tp,
        tv,
        tg,
        tb,
        ty,
        tw,
        tm,
        tk,
        tx,
        tO,
        tS,
        tA,
        tj,
        tI,
        tE,
        tC,
        tP,
        tD,
        tM,
        tT,
        tU,
        tB,
        tL,
        tR,
        tN,
        tF,
        tz,
        tH,
        tV,
        tW,
        tK,
        tJ,
        tZ,
        tq,
        tQ,
        tX,
        t$,
        tG,
        tY,
        t0,
        t1,
        t2,
        t3,
        t5,
        t4,
        t6,
        t8,
        t7,
        t9,
        rt,
        rr,
        rn,
        ri,
        ra,
        ro,
        ru,
        rs,
        rf,
        rl,
        rd = n(85893),
        rh = n(35748),
        r_ = n.n(rh),
        rp = n(94184),
        rv = n.n(rp),
        rg = n(58833),
        rb = n(25938),
        ry = n.n(rb),
        rw = n(67294);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var arrow = function (e) {
        return rw.createElement(
          "svg",
          _extends(
            {
              width: 24,
              height: 24,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          nO ||
            (nO = rw.createElement("path", {
              d: "M9 21.75 3 3l18.75 6.75-9.75 3-3 9Z",
              stroke: "#fff",
              strokeWidth: 1.5,
              strokeLinejoin: "round",
              opacity: 0.6,
            }))
        );
      };
      function user_extends() {
        return (user_extends =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var user = function (e) {
        return rw.createElement(
          "svg",
          user_extends(
            {
              width: 24,
              height: 24,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          nS ||
            (nS = rw.createElement(
              "g",
              { opacity: 0.6, stroke: "#fff", strokeWidth: 1.5 },
              rw.createElement("path", {
                d: "M15.75 7.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z",
              }),
              rw.createElement("path", {
                d: "M15 18.75H7.498c-1.657 0-3.018-1.4-2.287-2.888 1.263-2.569 4.024-4.612 6.787-4.612 1.5 0 3.001.628 3.751 1.255",
                strokeLinecap: "round",
              }),
              rw.createElement("path", {
                d: "M19.5 12.75v6m-3-3h6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              })
            ))
        );
      };
      function folder_extends() {
        return (folder_extends =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var folder = function (e) {
        return rw.createElement(
          "svg",
          folder_extends(
            {
              width: 25,
              height: 24,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          nA ||
            (nA = rw.createElement(
              "g",
              { opacity: 0.6 },
              rw.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.084 4.5a.75.75 0 0 0-.75.75v10.5A2.25 2.25 0 0 0 5.584 18h13.5a2.25 2.25 0 0 0 2.25-2.25v-6a2.25 2.25 0 0 0-2.25-2.25H13.61a2.25 2.25 0 0 1-1.405-.493L9.276 4.664a.75.75 0 0 0-.468-.164H4.084Zm-2.25.75A2.25 2.25 0 0 1 4.084 3h4.724c.51 0 1.006.174 1.405.493l2.929 2.343A.75.75 0 0 0 13.61 6h5.474a3.75 3.75 0 0 1 3.75 3.75v6a3.75 3.75 0 0 1-3.75 3.75h-13.5a3.75 3.75 0 0 1-3.75-3.75V5.25Z",
                fill: "#fff",
              }),
              rw.createElement("path", {
                d: "M15.334 6.75H2.584",
                stroke: "#fff",
                strokeWidth: 1.5,
              })
            ))
        );
      };
      function CommentsCollabSection() {
        return (0, rd.jsx)(rg.$, {
          theme: "default",
          title: "Design together in real-time",
          description: (0, rd.jsx)(rd.Fragment, {
            children:
              "Design interactivity on an infinite canvas with real-time collaboration. Organized on a shared workspace for your entire team.",
          }),
          children: (0, rd.jsx)(FeatureTiles, {}),
        });
      }
      var FeatureTiles = function () {
          return (0, rd.jsxs)("div", {
            className: ry().featureTilesContainer,
            children: [
              (0, rd.jsxs)("div", {
                className: ry().featureTile,
                children: [
                  (0, rd.jsx)("div", {
                    className: ry().tileIcon,
                    children: (0, rd.jsx)(arrow, { className: ry().icon }),
                  }),
                  (0, rd.jsxs)("div", {
                    className: ry().tileContent,
                    children: [
                      (0, rd.jsx)("h3", {
                        className: ry().tileTitle,
                        children: "Real-time Multiplayer",
                      }),
                      (0, rd.jsx)("p", {
                        className: ry().tileDescription,
                        children:
                          "Design together with your entire team on the same environment.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, rd.jsxs)("div", {
                className: ry().featureTile,
                children: [
                  (0, rd.jsx)("div", {
                    className: ry().tileIcon,
                    children: (0, rd.jsx)(user, { className: ry().icon }),
                  }),
                  (0, rd.jsxs)("div", {
                    className: ry().tileContent,
                    children: [
                      (0, rd.jsx)("h3", {
                        className: ry().tileTitle,
                        children: "Roles & Permissions",
                      }),
                      (0, rd.jsx)("p", {
                        className: ry().tileDescription,
                        children:
                          "Take full control over individual Editor and Viewer roles.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, rd.jsxs)("div", {
                className: ry().featureTile,
                children: [
                  (0, rd.jsx)("div", {
                    className: ry().tileIcon,
                    children: (0, rd.jsx)(folder, { className: ry().icon }),
                  }),
                  (0, rd.jsxs)("div", {
                    className: ry().tileContent,
                    children: [
                      (0, rd.jsx)("h3", {
                        className: ry().tileTitle,
                        children: "File Management",
                      }),
                      (0, rd.jsx)("p", {
                        className: ry().tileDescription,
                        children:
                          "A shared team space to store and manage all files and projects.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        rm = n(38621),
        rk = n.n(rm),
        rx = n(91943),
        rO = n(17817),
        rS = n(8043);
      function CTASection(e) {
        var t = e.title,
          n = e.description;
        return (0, rd.jsxs)("section", {
          className: rv()("content content-container", rk().section),
          children: [
            (0, rd.jsx)(rx.o, {
              title: void 0 === t ? "Design. Collaborate. Ship." : t,
              description:
                void 0 === n
                  ? "Superpower your team to deliver production-ready interactive 2D and 3D experiences all in one platform."
                  : n,
              layout: "center",
              size: "large",
              pWidth: "508px",
            }),
            (0, rd.jsxs)("a", {
              className: rv()(rk().cta, rk().ctaGetStarted),
              href: "https://app.spline.design",
              onClick: function () {
                (0, rS.Wq)("ClickOnMenu", {
                  type: "launch",
                  from: "bottom-cta",
                });
              },
              children: [
                (0, rd.jsx)("span", { children: "Get started" }),
                " — it's free ",
                (0, rd.jsx)(rO.Z, {}),
              ],
            }),
          ],
        });
      }
      var rA = n(75766),
        rj = n(27859),
        rI = n.n(rj),
        rE = n(22678),
        rC = n(11010),
        rP = n(48564),
        rD = n(2267),
        rM = n(18007),
        rT = n(72253),
        rU = n(14932),
        rB = n(47702),
        rL = n(19726),
        rR = n(24043),
        rN = n(11640),
        rF = n(248),
        rz = n(88421),
        rH = n(58894),
        rV = n(49633),
        rW = n(20414),
        rK = n(83454),
        rJ = n(48764).lW,
        rZ = Object.defineProperty,
        vi = function (e) {
          throw TypeError(e);
        },
        Ce = function (e, t, n) {
          var i;
          return (i =
            (void 0 === t ? "undefined" : (0, rz._)(t)) != "symbol"
              ? t + ""
              : t) in e
            ? rZ(e, i, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[i] = n);
        },
        xi = function (e, t, n) {
          return t.has(e) || vi("Cannot " + n);
        },
        O = function (e, t, n) {
          return xi(e, t, "read from private field"), n ? n.call(e) : t.get(e);
        },
        Q = function (e, t, n) {
          return t.has(e)
            ? vi("Cannot add the same private member more than once")
            : t instanceof WeakSet
            ? t.add(e)
            : t.set(e, n);
        },
        be = function (e, t, n, i) {
          return (
            xi(e, t, "write to private field"),
            i ? i.call(e, n) : t.set(e, n),
            n
          );
        },
        rq = (((nf = rq || {})[(nf.Update = 0)] = "Update"), nf),
        rQ =
          (((nl = rQ || {})[(nl.Add = 1)] = "Add"),
          (nl[(nl.Delete = 2)] = "Delete"),
          (nl[(nl.Unlink = 3)] = "Unlink"),
          nl),
        rX =
          (((nd = rX || {})[(nd.Add = 4)] = "Add"),
          (nd[(nd.Delete = 5)] = "Delete"),
          (nd[(nd.Move = 6)] = "Move"),
          nd),
        r$ =
          (((nh = r$ || {})[(nh.Add = 7)] = "Add"),
          (nh[(nh.Delete = 8)] = "Delete"),
          (nh[(nh.Move = 9)] = "Move"),
          nh),
        rG = (function () {
          function Sr() {
            (0, rP._)(this, Sr);
          }
          return (
            (0, rD._)(Sr, [
              {
                key: "modifyById",
                value: function (e, t) {
                  if (void 0 === this[e]) throw Error("not expected");
                  var n = (0, rU._)((0, rT._)({}, this), (0, rA._)({}, e, t));
                  return Object.setPrototypeOf(n, Sr.prototype), n;
                },
              },
              {
                key: "add",
                value: function (e, t) {
                  var n, i;
                  return null !==
                    (i =
                      null ===
                        (n = this.runOp({ type: rQ.Add, id: e, data: t })) ||
                      void 0 === n
                        ? void 0
                        : n.data) && void 0 !== i
                    ? i
                    : this;
                },
              },
              {
                key: "runOp",
                value: function (e) {
                  if (e.type === rQ.Add) {
                    var t,
                      n = this[e.id];
                    t =
                      void 0 === n
                        ? { type: rQ.Delete, id: e.id }
                        : { type: rQ.Add, id: e.id, data: n };
                    var i = e.id,
                      a = e.data,
                      o = (0, rU._)((0, rT._)({}, this), (0, rA._)({}, i, a));
                    return (
                      Object.setPrototypeOf(o, Sr.prototype),
                      { data: o, actual: e, reverse: t }
                    );
                  }
                  if (e.type === rQ.Delete) {
                    var c = e.id,
                      s = this[c];
                    if (void 0 === s) return null;
                    var l = (0, rT._)({}, this);
                    return (
                      Object.setPrototypeOf(l, Sr.prototype),
                      delete l[c],
                      {
                        data: l,
                        actual: e,
                        reverse: { type: rQ.Add, id: c, data: s },
                      }
                    );
                  }
                  return null;
                },
              },
            ]),
            Sr
          );
        })();
      function hi(e) {
        if (void 0 !== e.deepFreeze) {
          e.deepFreeze(e);
          return;
        }
        var t = Object.getOwnPropertyNames(e),
          n = !0,
          i = !1,
          a = void 0;
        try {
          for (
            var o, c = t[Symbol.iterator]();
            !(n = (o = c.next()).done);
            n = !0
          ) {
            var s = e[o.value];
            s && "object" == typeof s && hi(s);
          }
        } catch (e) {
          (i = !0), (a = e);
        } finally {
          try {
            n || null == c.return || c.return();
          } finally {
            if (i) throw a;
          }
        }
        return Object.freeze(e);
      }
      function Si(e, t) {
        for (var n = 0; n < e.length && n < t.length; ) {
          if (e[n] < t[n]) return -1;
          if (e[n] > t[n]) return 1;
          n += 1;
        }
        return n !== t.length ? -1 : n !== e.length ? 1 : 0;
      }
      var rY = (function (e) {
        (0, rM._)(ec, e);
        var t = (0, rV._)(ec);
        function ec() {
          return (0, rP._)(this, ec), t.apply(this, arguments);
        }
        return ec;
      })((0, rH._)(Error));
      function on(e) {
        var t = (0, rT._)({}, e);
        return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), t;
      }
      function qe(e, t, n) {
        if (
          (void 0 === e
            ? void 0 === t
              ? ((e = 0), (t = 10))
              : (e = t - 10)
            : void 0 === t && (t = e + 10),
          e > t)
        ) {
          var i = e;
          (e = t), (t = i);
        }
        for (var a = [], o = 1 / (n + 1), c = 0; c < n; c++) {
          var s = e + (t - e) * (c + 0.75 + 0.5 * Math.random()) * o;
          a.push(s);
        }
        return a;
      }
      function di(e) {
        return (
          e instanceof Uint8Array ||
          e instanceof Uint16Array ||
          e instanceof Uint32Array ||
          e instanceof Int8Array ||
          e instanceof Int16Array ||
          e instanceof Int32Array ||
          e instanceof Float32Array ||
          e instanceof Float64Array
        );
      }
      var r0 = (function (e) {
        (0, rM._)(_n, e);
        var t = (0, rV._)(_n);
        function _n() {
          for (var e, n = arguments.length, i = Array(n), a = 0; a < n; a++)
            i[a] = arguments[a];
          return (
            (0, rP._)(this, _n),
            (e = t.call.apply(t, [this].concat((0, rF._)(i)))),
            Ce((0, rE._)(e), "objCaches"),
            Ce((0, rE._)(e), "parentCaches"),
            Object.setPrototypeOf((0, rE._)(e), _n.prototype),
            e
          );
        }
        return (
          (0, rD._)(_n, [
            {
              key: "deepFreeze",
              value: function () {
                for (var e = 0; e < this.length; ) hi(this[e]), e++;
              },
            },
            {
              key: "fillCaches0",
              value: function (e, t) {
                this.objCaches.set(e.id, e), this.parentCaches.set(e.id, t);
                var n = !0,
                  i = !1,
                  a = void 0;
                try {
                  for (
                    var o, c = e.children[Symbol.iterator]();
                    !(n = (o = c.next()).done);
                    n = !0
                  ) {
                    var s = o.value;
                    this.fillCaches0(s, e.id);
                  }
                } catch (e) {
                  (i = !0), (a = e);
                } finally {
                  try {
                    n || null == c.return || c.return();
                  } finally {
                    if (i) throw a;
                  }
                }
              },
            },
            {
              key: "fillCaches",
              value: function () {
                if (void 0 === this.objCaches) {
                  (this.objCaches = new Map()), (this.parentCaches = new Map());
                  var e = !0,
                    t = !1,
                    n = void 0;
                  try {
                    for (
                      var i, a = this[Symbol.iterator]();
                      !(e = (i = a.next()).done);
                      e = !0
                    ) {
                      var o = i.value;
                      this.fillCaches0(o, null);
                    }
                  } catch (e) {
                    (t = !0), (n = e);
                  } finally {
                    try {
                      e || null == a.return || a.return();
                    } finally {
                      if (t) throw n;
                    }
                  }
                }
              },
            },
            {
              key: "randomId",
              value: function () {
                this.fillCaches();
                var e = Array.from(this.objCaches.keys());
                if (0 !== e.length)
                  return e[
                    Math.max(0, Math.floor(Math.random() * e.length) - 1)
                  ];
              },
            },
            {
              key: "nonExistOrDescendantOf",
              value: function (e, t) {
                if (!this.has(e)) return !0;
                for (; e; ) {
                  var n = this.parent(e);
                  if (n === t) return !0;
                  e = n;
                }
                return !1;
              },
            },
            {
              key: "rootAcestor",
              value: function (e) {
                for (; e; ) {
                  var t = this.parent(e);
                  if (t) e = t;
                  else break;
                }
                return e;
              },
            },
            {
              key: "isDescendantOf",
              value: function (e, t) {
                for (; e; ) {
                  var n = this.parent(e);
                  if (n === t) return !0;
                  e = n;
                }
                return !1;
              },
            },
            {
              key: "data",
              value: function (e) {
                var t;
                return null === (t = this.get(e)) || void 0 === t
                  ? void 0
                  : t.data;
              },
            },
            {
              key: "has",
              value: function (e) {
                return void 0 !== this.childrenOf(e);
              },
            },
            {
              key: "get",
              value: function (e) {
                return this.fillCaches(), this.objCaches.get(e);
              },
            },
            {
              key: "childrenOf",
              value: function (e) {
                var t;
                return null === e
                  ? this
                  : null === (t = this.get(e)) || void 0 === t
                  ? void 0
                  : t.children;
              },
            },
            {
              key: "traverseFrom",
              value: function (e, t) {
                if (null === e) this.traverse(t);
                else {
                  var n = this.get(e);
                  n &&
                    (function rc(e, t) {
                      var n = !0,
                        i = !1,
                        a = void 0;
                      if (!0 !== t(e.id, e.data))
                        try {
                          for (
                            var o, c = e.children[Symbol.iterator]();
                            !(n = (o = c.next()).done);
                            n = !0
                          ) {
                            var s = o.value;
                            rc(s, t);
                          }
                        } catch (e) {
                          (i = !0), (a = e);
                        } finally {
                          try {
                            n || null == c.return || c.return();
                          } finally {
                            if (i) throw a;
                          }
                        }
                    })(n, t);
                }
              },
            },
            {
              key: "traverse",
              value: function (e) {
                !(function tc(e, t) {
                  var n = !0,
                    i = !1,
                    a = void 0;
                  try {
                    for (
                      var o, c = e[Symbol.iterator]();
                      !(n = (o = c.next()).done);
                      n = !0
                    ) {
                      var s = o.value;
                      !0 !== t(s.id, s.data) && tc(s.children, t);
                    }
                  } catch (e) {
                    (i = !0), (a = e);
                  } finally {
                    try {
                      n || null == c.return || c.return();
                    } finally {
                      if (i) throw a;
                    }
                  }
                })(this, e);
              },
            },
            {
              key: "totalSize",
              value: function () {
                return this.fillCaches(), this.objCaches.size;
              },
            },
            {
              key: "parent",
              value: function (e) {
                return this.fillCaches(), this.parentCaches.get(e);
              },
            },
            {
              key: "childrenArray",
              value: function (e) {
                return null === e ? this : this.get(e).children;
              },
            },
            {
              key: "modifyById",
              value: function (e, t) {
                if (void 0 === this.get(e)) throw Error("not expected");
                var n = this.parent(e),
                  i = this.childrenArray(n),
                  a = i.findIndex(function (t) {
                    return t.id === e;
                  });
                if (a < 0) throw Error("not expected");
                var o = i[a];
                return (
                  ((i = (0, rF._)(i))[a] = (0, rU._)((0, rT._)({}, o), {
                    data: t,
                  })),
                  this.modifyArrayBy(n, i)
                );
              },
            },
            {
              key: "modifyArrayBy",
              value: function (e, t) {
                for (var n = this, i = e, a = t; null !== i; )
                  !(function () {
                    var e = a,
                      t = i;
                    if (void 0 === (i = n.parent(i))) throw Error();
                    var o = (a = n.childrenArray(i)).findIndex(function (e) {
                      return e.id === t;
                    });
                    if (o < 0) throw Error();
                    (a = (0, rF._)(a))[o] = (0, rU._)((0, rT._)({}, a[o]), {
                      children: e,
                    });
                  })();
                Object.setPrototypeOf(a, _n.prototype);
                var o = a;
                return o.fillCaches(), o;
              },
            },
            {
              key: "runOp",
              value: function (e) {
                switch (e.type) {
                  case r$.Add:
                    return this.addOp(e);
                  case r$.Delete:
                    return this.deleteOp(e);
                  case r$.Move:
                    return this.moveOp(e);
                }
                return null;
              },
            },
            {
              key: "checkDuplicatedIdRec",
              value: function (e) {
                var t = e.id,
                  n = e.children;
                if (void 0 !== this.get(t)) return !0;
                var i = !0,
                  a = !1,
                  o = void 0;
                try {
                  for (
                    var c, s = n[Symbol.iterator]();
                    !(i = (c = s.next()).done);
                    i = !0
                  ) {
                    var l = c.value;
                    if (this.checkDuplicatedIdRec(l)) return !0;
                  }
                } catch (e) {
                  (a = !0), (o = e);
                } finally {
                  try {
                    i || null == s.return || s.return();
                  } finally {
                    if (a) throw o;
                  }
                }
                return !1;
              },
            },
            {
              key: "addOp",
              value: function (e) {
                var t = e.parent,
                  n = e.fi,
                  i = e.id,
                  a = e.data,
                  o = e.children;
                if (
                  (null !== t && void 0 === this.get(t)) ||
                  this.checkDuplicatedIdRec(e)
                )
                  return null;
                var c = this.childrenArray(t),
                  s = { fi: n, id: i, data: a, children: o };
                return (
                  (c = (0, rF._)(c).concat([s])).sort(function (e, t) {
                    return e.fi - t.fi;
                  }),
                  (e.localIndex = c.indexOf(s)),
                  {
                    data: this.modifyArrayBy(t, c),
                    actual: e,
                    reverse: { type: r$.Delete, id: i },
                  }
                );
              },
            },
            {
              key: "deleteOp",
              value: function (e) {
                var t = e.id;
                if (null === this.get(t)) return null;
                var n = this.parent(t);
                if (void 0 === n) return null;
                var i = this.childrenArray(n),
                  a = i.findIndex(function (e) {
                    return e.id === t;
                  });
                e.localIndex = a;
                var o = (i = (0, rF._)(i)).splice(a, 1)[0];
                return {
                  data: this.modifyArrayBy(n, i),
                  actual: e,
                  reverse: (0, rU._)((0, rT._)({ type: r$.Add }, o), {
                    parent: n,
                  }),
                };
              },
            },
            {
              key: "moveOp",
              value: function (e) {
                var t = e.parent,
                  n = e.fi,
                  i = e.id;
                if (null !== t && void 0 === this.get(t))
                  return this.deleteOp({ type: r$.Delete, id: i });
                if (null !== t)
                  for (var a = t; null !== a; ) {
                    if (void 0 === a) throw Error();
                    if (a === i) throw new rY("cyclic tree");
                    a = this.parent(a);
                  }
                var o = this.parent(i);
                if (void 0 === o) return null;
                var c = o,
                  s = this.childrenArray(o),
                  l = s.findIndex(function (e) {
                    return e.id === i;
                  }),
                  d = (s = (0, rF._)(s)).splice(l, 1)[0],
                  h = this.modifyArrayBy(o, s);
                (o = t), (s = h.childrenArray(o));
                var _ = d.fi;
                return (
                  (d = (0, rU._)((0, rT._)({}, d), { fi: n })),
                  (s = (0, rF._)(s).concat([d])).sort(function (e, t) {
                    return e.fi - t.fi;
                  }),
                  (e.localIndex = s.indexOf(d)),
                  {
                    data: (h = h.modifyArrayBy(o, s)),
                    actual: e,
                    reverse: { type: r$.Move, parent: c, fi: _, id: i },
                  }
                );
              },
            },
            {
              key: "previous",
              value: function (e, t) {
                if (null === t) {
                  var n = this.childrenArray(e);
                  return 0 === n.length ? null : n[n.length - 1].id;
                }
                var i = null,
                  a = !0,
                  o = !1,
                  c = void 0;
                try {
                  for (
                    var s, l = this.childrenArray(e)[Symbol.iterator]();
                    !(a = (s = l.next()).done);
                    a = !0
                  ) {
                    var d = s.value;
                    if (d.id === t) return i;
                    i = d.id;
                  }
                } catch (e) {
                  (o = !0), (c = e);
                } finally {
                  try {
                    a || null == l.return || l.return();
                  } finally {
                    if (o) throw c;
                  }
                }
                return null;
              },
            },
            {
              key: "traverseSortNext",
              value: function (e) {
                var t = this.parent(e);
                if (void 0 !== t) {
                  var n = this.childrenArray(t),
                    i =
                      n.findIndex(function (t) {
                        return t.id === e;
                      }) + 1;
                  if (i < n.length) return n[i].id;
                  if (t) return this.traverseSortNext(t);
                }
              },
            },
            {
              key: "sortNext",
              value: function (e) {
                var t = this.childrenArray(e);
                return t.length > 0 ? t[0].id : this.traverseSortNext(e);
              },
            },
            {
              key: "traverseSortPrevious",
              value: function (e) {
                var t = this.childrenArray(e);
                return t.length > 0
                  ? this.traverseSortPrevious(t[t.length - 1].id)
                  : e;
              },
            },
            {
              key: "sortPrevious",
              value: function (e) {
                var t = this.parent(e);
                if (void 0 !== t) {
                  var n = this.childrenArray(t),
                    i =
                      n.findIndex(function (t) {
                        return t.id === e;
                      }) - 1;
                  return i >= 0 ? this.traverseSortPrevious(n[i].id) : t;
                }
              },
            },
            {
              key: "getAllSorted",
              value: function (e) {
                var t = [],
                  n = !0,
                  i = !1,
                  a = void 0;
                try {
                  for (
                    var o, c = e[Symbol.iterator]();
                    !(n = (o = c.next()).done);
                    n = !0
                  ) {
                    var s = o.value,
                      l = this.getWithSortKey(s.id);
                    void 0 !== l && t.push((0, rT._)({}, s, l));
                  }
                } catch (e) {
                  (i = !0), (a = e);
                } finally {
                  try {
                    n || null == c.return || c.return();
                  } finally {
                    if (i) throw a;
                  }
                }
                t.sort(function (e, t) {
                  return Si(e.sortKey, t.sortKey);
                });
                var d = !0,
                  h = !1,
                  _ = void 0;
                try {
                  for (
                    var v, g = t[Symbol.iterator]();
                    !(d = (v = g.next()).done);
                    d = !0
                  ) {
                    var b = v.value;
                    delete b.sortKey;
                  }
                } catch (e) {
                  (h = !0), (_ = e);
                } finally {
                  try {
                    d || null == g.return || g.return();
                  } finally {
                    if (h) throw _;
                  }
                }
                return t;
              },
            },
            {
              key: "getAllIdSorted",
              value: function (e) {
                var t = [],
                  n = !0,
                  i = !1,
                  a = void 0;
                try {
                  for (
                    var o, c = e[Symbol.iterator]();
                    !(n = (o = c.next()).done);
                    n = !0
                  ) {
                    var s = o.value,
                      l = this.getWithSortKey(s);
                    void 0 !== l && t.push(l);
                  }
                } catch (e) {
                  (i = !0), (a = e);
                } finally {
                  try {
                    n || null == c.return || c.return();
                  } finally {
                    if (i) throw a;
                  }
                }
                t.sort(function (e, t) {
                  return Si(e.sortKey, t.sortKey);
                });
                var d = !0,
                  h = !1,
                  _ = void 0;
                try {
                  for (
                    var v, g = t[Symbol.iterator]();
                    !(d = (v = g.next()).done);
                    d = !0
                  ) {
                    var b = v.value;
                    delete b.sortKey;
                  }
                } catch (e) {
                  (h = !0), (_ = e);
                } finally {
                  try {
                    d || null == g.return || g.return();
                  } finally {
                    if (h) throw _;
                  }
                }
                return t.map(function (e) {
                  return e.id;
                });
              },
            },
            {
              key: "getWithSortKey",
              value: function (e) {
                var t = e,
                  n = [],
                  i = this.get(t),
                  a = i;
                if (void 0 !== i) {
                  for (; t; )
                    n.splice(0, 0, i.fi),
                      null !== (t = this.parent(t)) && (i = this.get(t));
                  return (0, rU._)((0, rT._)({}, a), { sortKey: n });
                }
              },
            },
            {
              key: "insertBeforeHelper",
              value: function (e, t, n) {
                return this.insertAfterHelper(e, this.previous(e, t), n);
              },
            },
            {
              key: "insertAfterHelper",
              value: function (e, t, n) {
                var i = this.childrenArray(e);
                if (null === t) {
                  if (0 === i.length) return qe(0, n, n);
                  var a = i[0].fi;
                  return qe(a - n, a, n);
                }
                var o = this.get(t);
                if (void 0 === o || this.parent(t) !== e)
                  throw Error("illegal args");
                var c = i.find(function (e) {
                  return e.fi > o.fi;
                });
                if (void 0 !== c) return qe(o.fi, c.fi, n);
                var s = i[i.length - 1].fi;
                return qe(s, s + n, n);
              },
            },
          ]),
          _n
        );
      })((0, rH._)(Array));
      (nj || (nj = {})).runOp = function (e, t) {
        if (t.type !== rq.Update) return null;
        if (Array.isArray(e)) {
          var n = t.props,
            i = {},
            a = (0, rF._)(e),
            o = !1,
            c = !0,
            s = !1,
            l = void 0;
          if (n)
            try {
              for (
                var d, h = Object.keys(n)[Symbol.iterator]();
                !(c = (d = h.next()).done);
                c = !0
              ) {
                var _ = d.value,
                  v = parseInt(_);
                if (isNaN(v)) throw Error("wrong index");
                (i[_] = a[v]), (a[v] = n[_]), (o = !0);
              }
            } catch (e) {
              (s = !0), (l = e);
            } finally {
              try {
                c || null == h.return || h.return();
              } finally {
                if (s) throw l;
              }
            }
          return o
            ? { data: a, actual: t, reverse: { type: rq.Update, props: i } }
            : null;
        }
        var g = t.props,
          b = {},
          w = (0, rT._)({}, e),
          m = !1,
          k = !0,
          x = !1,
          S = void 0;
        if (g)
          try {
            for (
              var j, I = Object.keys(g)[Symbol.iterator]();
              !(k = (j = I.next()).done);
              k = !0
            ) {
              var E = j.value;
              b[E] = w[E];
              var C = g[E];
              void 0 === C ? delete w[E] : (w[E] = C), (m = !0);
            }
          } catch (e) {
            (x = !0), (S = e);
          } finally {
            try {
              k || null == I.return || I.return();
            } finally {
              if (x) throw S;
            }
          }
        return m
          ? { data: w, actual: t, reverse: { type: rq.Update, props: b } }
          : null;
      };
      var r1 = (function (e) {
        (0, rM._)(gn, e);
        var t = (0, rV._)(gn);
        function gn() {
          for (var e, n = arguments.length, i = Array(n), a = 0; a < n; a++)
            i[a] = arguments[a];
          return (
            (0, rP._)(this, gn),
            (e = t.call.apply(t, [this].concat((0, rF._)(i)))),
            Ce((0, rE._)(e), "objCaches"),
            Object.setPrototypeOf((0, rE._)(e), gn.prototype),
            e
          );
        }
        return (
          (0, rD._)(gn, [
            {
              key: "deepFreeze",
              value: function () {
                for (var e = 0; e < this.length; ) hi(this[e]), e++;
              },
            },
            {
              key: "fillCaches0",
              value: function (e) {
                this.objCaches.set(e.id, e);
              },
            },
            {
              key: "fillCaches",
              value: function () {
                if (void 0 === this.objCaches) {
                  (this.objCaches = new Map()),
                    (Object.getOwnPropertyDescriptor(
                      this,
                      "objCaches"
                    ).enumerable = !1);
                  var e = !0,
                    t = !1,
                    n = void 0;
                  try {
                    for (
                      var i, a = this[Symbol.iterator]();
                      !(e = (i = a.next()).done);
                      e = !0
                    ) {
                      var o = i.value;
                      this.fillCaches0(o);
                    }
                  } catch (e) {
                    (t = !0), (n = e);
                  } finally {
                    try {
                      e || null == a.return || a.return();
                    } finally {
                      if (t) throw n;
                    }
                  }
                }
              },
            },
            {
              key: "randomId",
              value: function () {
                this.fillCaches();
                var e = Array.from(this.objCaches.keys());
                if (0 !== e.length)
                  return e[
                    Math.max(0, Math.floor(Math.random() * e.length) - 1)
                  ];
              },
            },
            {
              key: "data",
              value: function (e) {
                var t;
                return null === (t = this.get(e)) || void 0 === t
                  ? void 0
                  : t.data;
              },
            },
            {
              key: "get",
              value: function (e) {
                return this.fillCaches(), this.objCaches.get(e);
              },
            },
            {
              key: "modifyById",
              value: function (e, t) {
                if (void 0 === this.get(e)) throw Error("not expected");
                var n = this,
                  i = n.findIndex(function (t) {
                    return t.id === e;
                  });
                if (i < 0) throw Error("not expected");
                var a = n[i];
                return (
                  ((n = (0, rF._)(n))[i] = (0, rU._)((0, rT._)({}, a), {
                    data: t,
                  })),
                  this.modifyArrayBy(n)
                );
              },
            },
            {
              key: "modifyArrayBy",
              value: function (e) {
                return (
                  Object.setPrototypeOf(e, gn.prototype),
                  (void 0 === rK ? "undefined" : (0, rz._)(rK)) < "u" ||
                    e.fillCaches(),
                  e
                );
              },
            },
            {
              key: "runOp",
              value: function (e) {
                switch (e.type) {
                  case rX.Add:
                    return this.addOp(e);
                  case rX.Delete:
                    return this.deleteOp(e);
                  case rX.Move:
                    return this.moveOp(e);
                }
                return null;
              },
            },
            {
              key: "addOp",
              value: function (e) {
                var t = e.fi,
                  n = e.id,
                  i = e.data,
                  a = this,
                  o = { fi: t, id: n, data: i };
                return (
                  (a = (0, rF._)(a).concat([o])).sort(function (e, t) {
                    return e.fi - t.fi;
                  }),
                  (e.localIndex = a.indexOf(o)),
                  {
                    data: this.modifyArrayBy(a),
                    actual: e,
                    reverse: { type: rX.Delete, id: n },
                  }
                );
              },
            },
            {
              key: "deleteOp",
              value: function (e) {
                var t = e.id,
                  n = this,
                  i = n.findIndex(function (e) {
                    return e.id === t;
                  });
                if (-1 === i) return null;
                e.localIndex = i;
                var a = (n = (0, rF._)(n)).splice(i, 1)[0];
                return {
                  data: this.modifyArrayBy(n),
                  actual: e,
                  reverse: (0, rT._)({ type: rX.Add }, a),
                };
              },
            },
            {
              key: "moveOp",
              value: function (e) {
                var t = e.fi,
                  n = e.id,
                  i = this,
                  a = (i = (0, rF._)(i)).findIndex(function (e) {
                    return e.id === n;
                  });
                if (-1 === a) return null;
                var o = i[a].fi,
                  c = (0, rU._)((0, rT._)({}, i[a]), { fi: t });
                return (
                  (i[a] = c),
                  i.sort(function (e, t) {
                    return e.fi - t.fi;
                  }),
                  (e.localIndex = i.indexOf(c)),
                  {
                    data: this.modifyArrayBy(i),
                    actual: e,
                    reverse: { type: rX.Move, fi: o, id: n },
                  }
                );
              },
            },
            {
              key: "previous",
              value: function (e) {
                if (null === e)
                  return 0 === this.length ? null : this[this.length - 1].id;
                var t = null,
                  n = !0,
                  i = !1,
                  a = void 0;
                try {
                  for (
                    var o, c = this[Symbol.iterator]();
                    !(n = (o = c.next()).done);
                    n = !0
                  ) {
                    var s = o.value;
                    if (s.id === e) return t;
                    t = s.id;
                  }
                } catch (e) {
                  (i = !0), (a = e);
                } finally {
                  try {
                    n || null == c.return || c.return();
                  } finally {
                    if (i) throw a;
                  }
                }
                return null;
              },
            },
            {
              key: "insertBeforeHelper",
              value: function (e, t) {
                return this.insertAfterHelper(this.previous(e), t);
              },
            },
            {
              key: "insertAfterHelper",
              value: function (e, t) {
                if (null === e) {
                  if (0 === this.length) return qe(0, t, t);
                  var n = this[0].fi;
                  return qe(n - t, n, t);
                }
                var i = this.get(e);
                if (void 0 === i) throw Error("illegal args");
                var a = this.find(function (e) {
                  return e.fi > i.fi;
                });
                if (void 0 !== a) return qe(i.fi, a.fi, t);
                var o = this[this.length - 1].fi;
                return qe(o, o + t, t);
              },
            },
          ]),
          gn
        );
      })((0, rH._)(Array));
      function Er(e, t) {
        return null === e ? null : ((e.cur[e.len] = t), (e.len += 1), e);
      }
      function Ir(e) {
        e && (e.len -= 1);
      }
      function mt(e) {
        return e && "object" == typeof e && e instanceof r2;
      }
      var r2 = (function () {
        function Oe() {
          (0, rP._)(this, Oe);
        }
        return (
          (0, rD._)(Oe, [
            { key: "unusedFunOverridesTable", value: function (e) {} },
            {
              key: "runOp",
              value: function (e) {
                for (var t = [], n = this, i = 0, a = {}; i < e.path.length; ) {
                  if (
                    (t.push(n),
                    void 0 !== (n = void 0 === n ? void 0 : n[e.path[i]]) &&
                      !mt(n))
                  )
                    return null;
                  i += 1;
                }
                n = n ? on(n) : new Oe();
                var o = !0,
                  c = !1,
                  s = void 0;
                try {
                  for (
                    var l, d = Object.entries(e.props)[Symbol.iterator]();
                    !(o = (l = d.next()).done);
                    o = !0
                  ) {
                    var h = (0, rR._)(l.value, 2),
                      _ = h[0],
                      v = h[1],
                      g = n[_];
                    (a[_] = g), void 0 === v ? delete n[_] : (n[_] = v);
                  }
                } catch (e) {
                  (c = !0), (s = e);
                } finally {
                  try {
                    o || null == d.return || d.return();
                  } finally {
                    if (c) throw s;
                  }
                }
                for (; i > 0; ) {
                  if (0 === Object.keys(n).length) {
                    var b = t[i - 1];
                    b && ((n = on(b)), delete n[e.path[i - 1]]);
                  } else {
                    var w = t[i - 1];
                    if (w) {
                      var m = on(w);
                      (m[e.path[i - 1]] = n), (n = m);
                    } else {
                      var k = new Oe();
                      (k[e.path[i - 1]] = n), (n = k);
                    }
                  }
                  i -= 1;
                }
                var x = Object.setPrototypeOf(n, Oe.prototype),
                  S = (0, rU._)((0, rT._)({}, e), { props: a });
                return { data: x, actual: e, reverse: S };
              },
            },
          ]),
          Oe
        );
      })();
      function _i(e, t) {
        if (void 0 !== t) {
          var n = !1,
            i = e.map(function (e) {
              var i = e.id,
                a = Ht(e.data, t[i]);
              if (
                ((n = n || void 0 !== a),
                void 0 === a && (a = e.data),
                !e.children)
              )
                return (0, rU._)((0, rT._)({}, e), { id: i, data: a });
              var o = _i(e.children, t);
              return (
                void 0 !== o ? (n = !0) : (o = e.children),
                (0, rU._)((0, rT._)({}, e), { id: i, data: a, children: o })
              );
            });
          if (n) return i;
        }
      }
      function Ht(e, t) {
        if (!mt(t)) return t;
        if (e instanceof r0) {
          var n = _i(e, t);
          return (
            void 0 !== n && Object.setPrototypeOf(n, Object.getPrototypeOf(e)),
            n
          );
        }
        if (e instanceof r1)
          return (function (e, t) {
            if (void 0 !== t) {
              var n = !1,
                i = e.map(function (e) {
                  var i = e.id,
                    a = Ht(e.data, t[i]);
                  return (
                    (n = n || void 0 !== a),
                    void 0 === a && (a = e.data),
                    (0, rU._)((0, rT._)({}, e), { id: i, data: a })
                  );
                });
              if (n)
                return Object.setPrototypeOf(i, Object.getPrototypeOf(e)), i;
            }
          })(e, t);
        if (Array.isArray(e)) {
          var i = !1,
            a = e.map(function (e, n) {
              var a = Ht(e, t[n]);
              return (i = i || void 0 !== a), void 0 === a && (a = e), a;
            });
          return i
            ? (Object.setPrototypeOf(a, Object.getPrototypeOf(e)), a)
            : void 0;
        }
        if (e instanceof r2) return gi(e, t);
        if (e && "object" == typeof e) {
          var o = {},
            c = !1,
            s = !0,
            l = !1,
            d = void 0;
          try {
            for (
              var h, _ = Object.entries(e)[Symbol.iterator]();
              !(s = (h = _.next()).done);
              s = !0
            ) {
              var v = (0, rR._)(h.value, 2),
                g = v[0],
                b = v[1],
                w = Ht(b, t[g]);
              (c = c || void 0 !== w), void 0 === w && (w = b), (o[g] = w);
            }
          } catch (e) {
            (l = !0), (d = e);
          } finally {
            try {
              s || null == _.return || _.return();
            } finally {
              if (l) throw d;
            }
          }
          return c
            ? (Object.setPrototypeOf(o, Object.getPrototypeOf(e)), o)
            : void 0;
        }
      }
      function gi(e, t) {
        if (void 0 === e) return t;
        if (void 0 === t) return e;
        if (!mt(t)) return t;
        if (!mt(e)) return nI.apply(e, t);
        var n = new Set(),
          i = !0,
          a = !1,
          o = void 0;
        try {
          for (
            var c, s = Object.keys(e)[Symbol.iterator]();
            !(i = (c = s.next()).done);
            i = !0
          ) {
            var l = c.value;
            n.add(l);
          }
        } catch (e) {
          (a = !0), (o = e);
        } finally {
          try {
            i || null == s.return || s.return();
          } finally {
            if (a) throw o;
          }
        }
        var d = !0,
          h = !1,
          _ = void 0;
        try {
          for (
            var v, g = Object.keys(t)[Symbol.iterator]();
            !(d = (v = g.next()).done);
            d = !0
          ) {
            var b = v.value;
            n.add(b);
          }
        } catch (e) {
          (h = !0), (_ = e);
        } finally {
          try {
            d || null == g.return || g.return();
          } finally {
            if (h) throw _;
          }
        }
        var w = new r2(),
          m = !0,
          k = !1,
          x = void 0;
        try {
          for (
            var S, j = n[Symbol.iterator]();
            !(m = (S = j.next()).done);
            m = !0
          ) {
            var I = S.value,
              E = gi(
                void 0 === e ? void 0 : e[I],
                void 0 === t ? void 0 : t[I]
              );
            w[I] = E;
          }
        } catch (e) {
          (k = !0), (x = e);
        } finally {
          try {
            m || null == j.return || j.return();
          } finally {
            if (k) throw x;
          }
        }
        return w;
      }
      ((n_ = nI || (nI = {})).apply = function (e, t) {
        var n;
        return null !== (n = Ht(e, t)) && void 0 !== n ? n : e;
      }),
        (n_.merge = function (e, t) {
          return gi(e, t);
        }),
        (n_.filterOp = function (e, t) {
          for (var n = 0, i = t.path, a = e; n < i.length && void 0 !== a; ) {
            if (void 0 === (a = nD.zoomOnce(a, i[n]))) return t;
            if (!mt(a)) return;
            n += 1;
          }
          if (void 0 === a) return t;
          if (mt(a)) {
            if (t.type === rq.Update) {
              var o = (0, rT._)({}, t.props),
                c = !0,
                s = !1,
                l = void 0;
              try {
                for (
                  var d, h = Object.keys(a)[Symbol.iterator]();
                  !(c = (d = h.next()).done);
                  c = !0
                ) {
                  var _ = d.value;
                  delete o[_];
                }
              } catch (e) {
                (s = !0), (l = e);
              } finally {
                try {
                  c || null == h.return || h.return();
                } finally {
                  if (s) throw l;
                }
              }
              return (0, rU._)((0, rT._)({}, t), { props: o });
            }
            if (t.type !== rQ.Add && t.type !== rX.Add && t.type !== r$.Add)
              return t;
            var v = _i([t], a);
            return v ? (console.log(v), v) : t;
          }
        }),
        ((nE || (nE = {})).replaceProps = function (e, t) {
          var n = nD.zoom(t, e.path);
          if ("object" != typeof n)
            return (0, rU._)((0, rT._)({}, e), { props: {} });
          var i = {},
            a = !0,
            o = !1,
            c = void 0;
          try {
            for (
              var s, l = Object.keys(e.props)[Symbol.iterator]();
              !(a = (s = l.next()).done);
              a = !0
            ) {
              var d = s.value;
              i[d] = n[d];
            }
          } catch (e) {
            (o = !0), (c = e);
          } finally {
            try {
              a || null == l.return || l.return();
            } finally {
              if (o) throw c;
            }
          }
          return (0, rU._)((0, rT._)({}, e), { props: i });
        }),
        (np = nC || (nC = {})),
        (nv = function (e, t) {
          for (var n = t.path, i = []; ; ) {
            var a,
              o,
              c = void 0;
            if (
              (e instanceof r2 &&
                t.type === rq.Update &&
                null ===
                  (c = e.runOp(
                    (0, rU._)((0, rT._)({}, t), { path: n.slice(i.length) })
                  )) &&
                (c = void 0),
              void 0 === c &&
                i.length === n.length &&
                (c =
                  e instanceof r0 || e instanceof r1 || e instanceof rG
                    ? e.runOp(t)
                    : nj.runOp(e, t)),
              void 0 !== c)
            ) {
              if (null === c) return null;
              for (var s = c.data, l = i.length - 1; l >= 0; l--) {
                var d = n[l],
                  h = i[l];
                if (h instanceof r0) {
                  if ("number" == typeof d) throw Error("illegal arg");
                  s = h.modifyById(d, s);
                } else if (h instanceof r1) {
                  if ("number" == typeof d) throw Error("illegal arg");
                  s = h.modifyById(d, s);
                } else if (h instanceof rG) {
                  if ("number" == typeof d) throw Error("illegal arg");
                  s = h.modifyById(d, s);
                } else if (h instanceof r2)
                  s = Object.setPrototypeOf(
                    (0, rU._)((0, rT._)({}, h), (0, rA._)({}, d, s)),
                    r2.prototype
                  );
                else if ("object" != typeof h) return null;
                else if (Array.isArray(h)) {
                  if ("string" == typeof d && isNaN((d = parseInt(d))))
                    throw Error("Invalid path");
                  var _ = s;
                  (s = (0, rF._)(h))[d] = _;
                } else s = (0, rU._)((0, rT._)({}, h), (0, rA._)({}, d, s));
              }
              return {
                data: s,
                actual: (0, rU._)((0, rT._)({}, c.actual), { path: n }),
                reverse: (0, rU._)((0, rT._)({}, c.reverse), { path: n }),
              };
            }
            var v = n[i.length],
              g = void 0;
            if (e instanceof r0) {
              if ("number" == typeof v) throw Error("");
              g = null === (a = e.get(v)) || void 0 === a ? void 0 : a.data;
            } else if (e instanceof r1) {
              if ("number" == typeof v) throw Error("");
              g = null === (o = e.get(v)) || void 0 === o ? void 0 : o.data;
            } else null !== e && (g = e[v]);
            if (void 0 === g) return null;
            i.push(e), (e = g);
          }
        }),
        (ng = function (e, t) {
          for (var n = 0; n < e.length && n < t.length; n++)
            if (e[n] !== t[n]) return !0;
          return !1;
        }),
        (nb = function (e, t) {
          if (e.length !== t.length) return !1;
          for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
          return !0;
        }),
        (np.drop = function (e, t) {
          return (0, rU._)((0, rT._)({}, e), { path: e.path.slice(t) });
        }),
        (np.applySimple = function (e, t) {
          var n, i;
          return null !==
            (i = null === (n = nv(e, t)) || void 0 === n ? void 0 : n.data) &&
            void 0 !== i
            ? i
            : e;
        }),
        (np.apply = nv),
        (np.pathDisjoint = ng),
        (np.pathEq = nb),
        (np.commutative = function (e, t) {
          return ng(e.path, t.path);
        }),
        (np.subsumed = function (e, t) {
          return (
            !!(
              e.type === rq.Update &&
              t.type === rq.Update &&
              nb(e.path, t.path)
            ) &&
            Object.keys(e.props).every(function (e) {
              return void 0 !== t.props[e];
            })
          );
        }),
        (ny = nP || (nP = {})),
        (nw = function (e, t) {
          var n = e,
            i = [],
            a = [],
            o = !0,
            c = !1,
            s = void 0;
          try {
            for (
              var l, d = t[Symbol.iterator]();
              !(o = (l = d.next()).done);
              o = !0
            ) {
              var h = (function () {
                var e = l.value;
                try {
                  if (
                    e.type === rQ.Unlink ||
                    (e.type === rX.Delete &&
                      "variables" === e.path[e.path.length - 1])
                  ) {
                    var t = void 0,
                      o = void 0,
                      c = void 0;
                    if (
                      (e.type === rQ.Unlink
                        ? ((t = nD.zoom(n, (0, rF._)(e.path).concat([e.id]))),
                          (c = nC.apply(
                            n,
                            (0, rU._)((0, rT._)({}, e), { type: rQ.Delete })
                          )))
                        : ((t = nD.zoom(
                            n,
                            (0, rF._)(e.path).concat([e.id, "value"])
                          )),
                          (c = nC.apply(n, e))),
                      null !== c)
                    ) {
                      n = c.data;
                      var s,
                        d,
                        h,
                        _,
                        v = (0, rR._)(
                          ((s = n),
                          (d = (0, rA._)({}, e.id, t)),
                          (_ = { cur: [], result: [], len: 0 }),
                          [
                            (s =
                              null !==
                                (h = (function Kt(e, t, n) {
                                  if (e instanceof r0) {
                                    var i = (function nc(e, t, n) {
                                      var i = !1,
                                        a = e.map(function (e) {
                                          var a = e.id,
                                            o = t[a];
                                          if (
                                            void 0 !== o &&
                                            "string" == typeof o &&
                                            ((i = !0), (a = o), null !== n)
                                          )
                                            throw Error("not supported");
                                          var c = Kt(e.data, t, Er(n, a));
                                          Ir(n),
                                            (i = i || void 0 !== c),
                                            void 0 === c && (c = e.data);
                                          var s = nc(e.children, t, n);
                                          return (
                                            void 0 !== s
                                              ? (i = !0)
                                              : (s = e.children),
                                            (0, rU._)((0, rT._)({}, e), {
                                              id: a,
                                              data: c,
                                              children: s,
                                            })
                                          );
                                        });
                                      if (i) return a;
                                    })(e, t, n);
                                    return (
                                      void 0 !== i &&
                                        Object.setPrototypeOf(
                                          i,
                                          Object.getPrototypeOf(e)
                                        ),
                                      i
                                    );
                                  }
                                  if (e instanceof r1)
                                    return (function (e, t, n) {
                                      var i = !1,
                                        a = e.map(function (e) {
                                          var a = e.id,
                                            o = t[a];
                                          if (
                                            void 0 !== o &&
                                            "string" == typeof o &&
                                            ((i = !0), (a = o), null !== n)
                                          )
                                            throw Error("not supported");
                                          var c = Kt(e.data, t, Er(n, a));
                                          return (
                                            Ir(n),
                                            (i = i || void 0 !== c),
                                            void 0 === c && (c = e.data),
                                            (0, rU._)((0, rT._)({}, e), {
                                              id: a,
                                              data: c,
                                            })
                                          );
                                        });
                                      if (i)
                                        return (
                                          Object.setPrototypeOf(
                                            a,
                                            Object.getPrototypeOf(e)
                                          ),
                                          a
                                        );
                                    })(e, t, n);
                                  if (Array.isArray(e)) {
                                    var a = !1,
                                      o = e.map(function (e, i) {
                                        var o = Kt(e, t, Er(n, i));
                                        return (
                                          Ir(n),
                                          (a = a || void 0 !== o),
                                          void 0 === o && (o = e),
                                          o
                                        );
                                      });
                                    return a
                                      ? (Object.setPrototypeOf(
                                          o,
                                          Object.getPrototypeOf(e)
                                        ),
                                        o)
                                      : void 0;
                                  }
                                  if (e && "object" == typeof e && !di(e)) {
                                    var c = {},
                                      s = !1,
                                      l = !0,
                                      d = !1,
                                      h = void 0;
                                    try {
                                      for (
                                        var _,
                                          v =
                                            Object.entries(e)[
                                              Symbol.iterator
                                            ]();
                                        !(l = (_ = v.next()).done);
                                        l = !0
                                      ) {
                                        var g = (0, rR._)(_.value, 2),
                                          b = g[0],
                                          w = g[1];
                                        if (
                                          "name" !== b &&
                                          "variableId" !== b
                                        ) {
                                          var m = t[b];
                                          if ("string" == typeof m) {
                                            if (null !== n)
                                              throw Error("not supported");
                                            (s = !0), (b = m);
                                          }
                                          var k = Kt(w, t, Er(n, b));
                                          Ir(n),
                                            (s = s || void 0 !== k),
                                            void 0 === k && (k = w),
                                            (c[b] = k);
                                        } else c[b] = w;
                                      }
                                    } catch (e) {
                                      (d = !0), (h = e);
                                    } finally {
                                      try {
                                        l || null == v.return || v.return();
                                      } finally {
                                        if (d) throw h;
                                      }
                                    }
                                    return s
                                      ? (Object.setPrototypeOf(
                                          c,
                                          Object.getPrototypeOf(e)
                                        ),
                                        c)
                                      : void 0;
                                  }
                                  if ("string" == typeof e) {
                                    var x,
                                      S = t[e];
                                    return (
                                      void 0 !== S &&
                                        ((x = n),
                                        null !== x &&
                                          x.result.push(x.cur.slice(0, x.len))),
                                      S
                                    );
                                  }
                                })(s, d, _)) && void 0 !== h
                                ? h
                                : s),
                            _.result,
                          ]),
                          2
                        ),
                        g = v[0],
                        b = v[1];
                      n = g;
                      for (var w = 0; w < b.length; w++)
                        !(function (c) {
                          var s = b[c],
                            l = s.pop();
                          if ("number" == typeof l) {
                            for (var d = [l], h = c + 1; h < b.length; h++) {
                              var _ = b[h],
                                v = _[_.length - 1];
                              if (
                                "number" == typeof v &&
                                nD.equal(s, _.slice(0, _.length - 1))
                              )
                                d.push(v), b.splice(h, 1);
                              else break;
                            }
                            var g = nD.zoom(n, s);
                            (o = g.map(function (t, n) {
                              return d.includes(n) ? e.id : t;
                            })),
                              (t = g),
                              (l = s.pop());
                          } else {
                            if ("alphaOverride" === l || "alpha" === l) {
                              var w = (t /= 100),
                                m = nD.zoom(n, s.slice(0, s.length - 2)),
                                k = m.layers.map(function (e) {
                                  return e.id === s[s.length - 1]
                                    ? (0, rU._)((0, rT._)({}, e), {
                                        data: (0, rU._)(
                                          (0, rT._)({}, e.data),
                                          (0, rA._)({}, l, w)
                                        ),
                                      })
                                    : e;
                                });
                              Object.setPrototypeOf(
                                k,
                                Object.getPrototypeOf(m.layers)
                              ),
                                (m.layers = k);
                            }
                            o = e.id;
                          }
                          i.push({
                            type: rq.Update,
                            path: s,
                            props: (0, rA._)({}, l, t),
                          }),
                            a.push({
                              type: rq.Update,
                              path: s,
                              props: (0, rA._)({}, l, o),
                            });
                        })(w);
                      a.push(c.reverse), i.push(c.actual);
                    }
                  } else {
                    var m = nC.apply(n, e);
                    null !== m &&
                      (i.push(m.actual), (n = m.data), a.push(m.reverse));
                  }
                } catch (e) {
                  if (e instanceof rY) return { v: null };
                  throw e;
                }
              })();
              if ("object" === (0, rz._)(h)) return h.v;
            }
          } catch (e) {
            (c = !0), (s = e);
          } finally {
            try {
              o || null == d.return || d.return();
            } finally {
              if (c) throw s;
            }
          }
          return { data: n, actual: i, reverse: a.reverse() };
        }),
        (ny.empty = function () {
          return [];
        }),
        (ny.removePrefix = function (e, t) {
          var n = [],
            i = !0,
            a = !1,
            o = void 0;
          try {
            for (
              var c, s = e[Symbol.iterator]();
              !(i = (c = s.next()).done);
              i = !0
            ) {
              var l = c.value,
                d = (0, rN._)(l.path),
                h = d[0],
                _ = d.slice(1);
              h === t && n.push((0, rU._)((0, rT._)({}, l), { path: _ }));
            }
          } catch (e) {
            (a = !0), (o = e);
          } finally {
            try {
              i || null == s.return || s.return();
            } finally {
              if (a) throw o;
            }
          }
          return n;
        }),
        (ny.addPrefix = function (e, t) {
          return e.map(function (e) {
            return (0,
            rU._)((0, rT._)({}, e), { path: [t].concat((0, rF._)(e.path)) });
          });
        }),
        (ny.concat = function (e, t) {
          return (0, rF._)(e).concat((0, rF._)(t));
        }),
        (ny.compress = function (e, t) {
          return (0, rF._)(
            e.filter(function (e) {
              return !t.some(function (t) {
                return nC.subsumed(e, t);
              });
            })
          ).concat((0, rF._)(t));
        }),
        (ny.commutative = function (e, t) {
          return e.every(function (e) {
            return t.every(function (t) {
              return nC.commutative(e, t);
            });
          });
        }),
        (ny.applyAll = function (e, t) {
          var n = !0,
            i = !1,
            a = void 0;
          try {
            for (
              var o, c = t[Symbol.iterator]();
              !(n = (o = c.next()).done);
              n = !0
            ) {
              var s = o.value,
                l = nw(e, s);
              null !== l && (e = l.data);
            }
          } catch (e) {
            (i = !0), (a = e);
          } finally {
            try {
              n || null == c.return || c.return();
            } finally {
              if (i) throw a;
            }
          }
          return e;
        }),
        (ny.apply = nw);
      var r3 = Symbol(),
        r5 = Symbol(),
        r4 = Symbol(),
        r6 = (function () {
          function br() {
            (0, rP._)(this, br);
          }
          return (
            (0, rD._)(br, [
              {
                key: "reportOp",
                value: function (e, t) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : [],
                    i = this;
                  if (null !== t) {
                    for (i._current = t.data; !(i instanceof na); ) {
                      var a = i._path,
                        o = i._current;
                      if (
                        ("" !== a && n.splice(0, 0, a),
                        null === (i = i._parent))
                      )
                        return;
                      i.update(a, o);
                    }
                    i.push(n, e, t.actual, t.reverse);
                  }
                },
              },
              {
                key: "deleteChildren",
                value: function (e) {
                  if (this._children) {
                    var t = this._children[e];
                    if (t) {
                      var n = t[r4];
                      n && n(), delete this._children[e];
                    }
                  }
                },
              },
            ]),
            br
          );
        })(),
        r8 = (function (e) {
          (0, rM._)(Zc, e);
          var t = (0, rV._)(Zc);
          function Zc(e, n, i) {
            var a;
            return (
              (0, rP._)(this, Zc),
              ((a = t.call(this))._parent = e),
              (a._path = n),
              (a._current = i),
              (0, rL._)(a)
            );
          }
          return (
            (0, rD._)(Zc, [
              {
                key: "update",
                value: function (e, t) {
                  if (Array.isArray(this._current)) {
                    if ("string" == typeof e && isNaN((e = parseInt(e))))
                      throw Error("Invalid path");
                    (this._current = (0, rF._)(this._current)),
                      (this._current[e] = t);
                  } else
                    this._current = (0, rU._)(
                      (0, rT._)({}, this._current),
                      (0, rA._)({}, e, t)
                    );
                },
              },
              {
                key: "runOp",
                value: function (e) {
                  this.reportOp(e, nj.runOp(this._current, e), e.path);
                },
              },
            ]),
            Zc
          );
        })(r6),
        r7 = (function (e) {
          (0, rM._)(Qc, e);
          var t = (0, rV._)(Qc);
          function Qc(e, n, i) {
            var a;
            return (
              (0, rP._)(this, Qc),
              ((a = t.call(this))._parent = e),
              (a._path = n),
              (a._current = i),
              (0, rL._)(a)
            );
          }
          return (
            (0, rD._)(Qc, [
              {
                key: "update",
                value: function (e, t) {
                  (this._current = (0, rU._)(
                    (0, rT._)({}, this._current),
                    (0, rA._)({}, e, t)
                  )),
                    Object.setPrototypeOf(this._current, rG.prototype);
                },
              },
              {
                key: "runOp",
                value: function (e) {
                  this.reportOp(e, this._current.runOp(e));
                },
              },
            ]),
            Qc
          );
        })(r6),
        r9 = {
          get: function (e, t) {
            if (t === r4)
              return function () {
                e._parent = null;
              };
            if (t === r3) return e._current;
            if (t === r5) return e;
            var n = e._current,
              i = e._children;
            if ("push" === t && Array.isArray(n))
              throw Error("not supported to expand array");
            var a = void 0 === i ? void 0 : i[t];
            if (void 0 !== a) return a;
            var o = n[t],
              c = wi(e, t, o);
            return c !== o
              ? (void 0 === i && ((i = {}), (e._children = i)), (i[t] = c), c)
              : o;
          },
          has: function (e, t) {
            return t in e._current;
          },
          ownKeys: function (e) {
            return Reflect.ownKeys(e._current);
          },
          defineProperty: function () {
            throw Error("not supported");
          },
          getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e._current);
          },
          setPrototypeOf: function () {
            throw Error("not supported");
          },
          getOwnPropertyDescriptor: function (e, t) {
            var n = e._current,
              i = Reflect.getOwnPropertyDescriptor(n, t);
            return (
              i && {
                writable: !0,
                configurable: !0,
                enumerable: i.enumerable,
                value: n[t],
              }
            );
          },
        },
        nt = (0, rU._)((0, rT._)({}, r9), {
          set: function (e, t, n) {
            var i,
              a = {
                type: rq.Update,
                props: (0, rA._)(
                  {},
                  t,
                  null !==
                    (i =
                      n instanceof nn || n instanceof ni
                        ? n._current
                        : null !== n && "object" == typeof n
                        ? n[r3]
                        : n) && void 0 !== i
                    ? i
                    : n
                ),
              };
            return e.deleteChildren(t), e.runOp(a), !0;
          },
          deleteProperty: function (e, t) {
            var n = { type: rq.Update, props: (0, rA._)({}, t, void 0) };
            return e.deleteChildren(t), e.runOp(n), !0;
          },
        }),
        nr = (0, rU._)((0, rT._)({}, r9), {
          set: function (e, t, n) {
            return (
              void 0 === n
                ? this.deleteProperty(e, t)
                : (e.deleteChildren(t),
                  e.runOp({ type: rQ.Add, id: t, data: n })),
              !0
            );
          },
          deleteProperty: function (e, t) {
            return e.runOp({ type: rQ.Delete, id: t }), !0;
          },
        }),
        nn = (function (e) {
          (0, rM._)(wr, e);
          var t = (0, rV._)(wr);
          function wr(e, n, i) {
            var a;
            return (
              (0, rP._)(this, wr),
              ((a = t.call(this))._children = {}),
              (a._parent = e),
              (a._path = n),
              (a._current = i),
              (a[r4] = function () {
                a._parent = null;
              }),
              (0, rL._)(a)
            );
          }
          return (
            (0, rD._)(wr, [
              {
                key: "unproxy",
                value: function () {
                  return this._current;
                },
              },
              {
                key: "update",
                value: function (e, t) {
                  this._current = this._current.modifyById(e, t);
                },
              },
              {
                key: "runOp",
                value: function (e) {
                  this.reportOp(e, this._current.runOp(e));
                },
              },
              {
                key: "randomId",
                value: function () {
                  return this._current.randomId();
                },
              },
              {
                key: "isDescendantOf",
                value: function (e, t) {
                  return this._current.isDescendantOf(e, t);
                },
              },
              {
                key: "childrenOf",
                value: function (e) {
                  return this._current.childrenOf(e);
                },
              },
              {
                key: "get",
                value: function (e) {
                  return this._current.get(e);
                },
              },
              {
                key: "parent",
                value: function (e) {
                  return this._current.parent(e);
                },
              },
              {
                key: "traverse",
                value: function (e) {
                  var t = this;
                  this._current.traverse(function (n, i) {
                    e(n, t.data(n));
                  });
                },
              },
              {
                key: "data",
                value: function (e) {
                  var t,
                    n = this._current,
                    i = this._children,
                    a = void 0 === i ? void 0 : i[e];
                  if (void 0 !== a) return a;
                  var o =
                      null === (t = n.get(e)) || void 0 === t ? void 0 : t.data,
                    c = wi(this, e, o);
                  return c !== o
                    ? (void 0 === i && ((i = {}), (this._children = i)),
                      (i[e] = c),
                      c)
                    : o;
                },
              },
              {
                key: "add",
                value: function (e, t, n, i, a) {
                  this.runOp({
                    type: r$.Add,
                    parent: e,
                    fi: t,
                    id: n,
                    data: i,
                    children: a,
                  });
                },
              },
              {
                key: "move",
                value: function (e, t, n) {
                  this.runOp({ type: r$.Move, parent: e, fi: t, id: n });
                },
              },
              {
                key: "insertAfter",
                value: function (e, t, n) {
                  for (
                    var i = this._current.insertAfterHelper(e, t, n.length),
                      a = 0;
                    a < n.length;
                    a++
                  ) {
                    var o = n[a];
                    this.add(e, i[a], o.id, o.data, o.children);
                  }
                },
              },
              {
                key: "insertBefore",
                value: function (e, t, n) {
                  for (
                    var i = this._current.insertBeforeHelper(e, t, n.length),
                      a = 0;
                    a < n.length;
                    a++
                  ) {
                    var o = n[a];
                    this.add(e, i[a], o.id, o.data, o.children);
                  }
                },
              },
              {
                key: "moveAfter",
                value: function (e, t, n) {
                  for (
                    var i = this._current.insertAfterHelper(e, t, n.length),
                      a = 0;
                    a < n.length;
                    a++
                  ) {
                    var o = n[a];
                    this.move(e, i[a], o);
                  }
                },
              },
              {
                key: "moveBefore",
                value: function (e, t, n) {
                  for (
                    var i = this._current.insertBeforeHelper(e, t, n.length),
                      a = 0;
                    a < n.length;
                    a++
                  ) {
                    var o = n[a];
                    this.move(e, i[a], o);
                  }
                },
              },
              {
                key: "delete",
                value: function (e) {
                  this.deleteChildren(e),
                    this.runOp({ type: r$.Delete, id: e });
                },
              },
              {
                key: "sortNext",
                value: function (e) {
                  return this._current.sortNext(e);
                },
              },
              {
                key: "sortPrevious",
                value: function (e) {
                  return this._current.sortPrevious(e);
                },
              },
              {
                key: "getAllSorted",
                value: function (e) {
                  return this._current.getAllSorted(e);
                },
              },
            ]),
            wr
          );
        })(r6),
        ni = (function (e) {
          (0, rM._)(pr, e);
          var t = (0, rV._)(pr);
          function pr(e, n, i) {
            var a;
            return (
              (0, rP._)(this, pr),
              ((a = t.call(this))._children = {}),
              (a._parent = e),
              (a._path = n),
              (a._current = i),
              (a[r4] = function () {
                a._parent = null;
              }),
              (0, rL._)(a)
            );
          }
          return (
            (0, rD._)(pr, [
              {
                key: "unproxy",
                value: function () {
                  return this._current;
                },
              },
              {
                key: "length",
                get: function () {
                  return this._current.length;
                },
              },
              {
                key: "forEach",
                value: function (e) {
                  for (var t = this.length, n = 0; n < t; n++) {
                    var i = this._current[n].id,
                      a = this._current[n].fi;
                    e(this.data(this._current[n].id), i, a);
                  }
                },
              },
              {
                key: "find",
                value: function (e) {
                  for (var t = this.length, n = 0; n < t; n++) {
                    var i = this._current[n].id;
                    if (e(this.data(i), i)) return this.get(i);
                  }
                },
              },
              {
                key: "update",
                value: function (e, t) {
                  this._current = this._current.modifyById(e, t);
                },
              },
              {
                key: "randomId",
                value: function () {
                  return this._current.randomId();
                },
              },
              {
                key: "get",
                value: function (e) {
                  return (0, rU._)((0, rT._)({}, this._current.get(e)), {
                    data: this.data(e),
                  });
                },
              },
              {
                key: "at",
                value: function (e) {
                  var t = this._current.at(e),
                    n = t.id;
                  return { id: n, fi: t.fi, data: this.data(n) };
                },
              },
              {
                key: "data",
                value: function (e) {
                  var t,
                    n = this._current,
                    i = this._children,
                    a = void 0 === i ? void 0 : i[e];
                  if (void 0 !== a) return a;
                  var o =
                      null === (t = n.get(e)) || void 0 === t ? void 0 : t.data,
                    c = wi(this, e, o);
                  return c !== o
                    ? (void 0 === i && ((i = {}), (this._children = i)),
                      (i[e] = c),
                      c)
                    : o;
                },
              },
              {
                key: "runOp",
                value: function (e) {
                  this.reportOp(e, this._current.runOp(e));
                },
              },
              {
                key: "add",
                value: function (e, t, n) {
                  this.runOp({ type: rX.Add, fi: e, id: t, data: n });
                },
              },
              {
                key: "move",
                value: function (e, t) {
                  this.runOp({ type: rX.Move, fi: e, id: t });
                },
              },
              {
                key: "insertAfter",
                value: function (e, t) {
                  for (
                    var n = this._current.insertAfterHelper(e, t.length), i = 0;
                    i < t.length;
                    i++
                  ) {
                    var a = t[i];
                    this.add(n[i], a.id, a.data);
                  }
                },
              },
              {
                key: "insertBefore",
                value: function (e, t) {
                  for (
                    var n = this._current.insertBeforeHelper(e, t.length),
                      i = 0;
                    i < t.length;
                    i++
                  ) {
                    var a = t[i];
                    this.add(n[i], a.id, a.data);
                  }
                },
              },
              {
                key: "moveAfter",
                value: function (e, t) {
                  for (
                    var n = this._current.insertAfterHelper(e, t.length), i = 0;
                    i < t.length;
                    i++
                  ) {
                    var a = t[i];
                    this.move(n[i], a);
                  }
                },
              },
              {
                key: "moveBefore",
                value: function (e, t) {
                  for (
                    var n = this._current.insertBeforeHelper(e, t.length),
                      i = 0;
                    i < t.length;
                    i++
                  ) {
                    var a = t[i];
                    this.move(n[i], a);
                  }
                },
              },
              {
                key: "delete",
                value: function (e) {
                  this.deleteChildren(e),
                    this.runOp({ type: rX.Delete, id: e });
                },
              },
            ]),
            pr
          );
        })(r6);
      function ln(e, t, n) {
        if (e.length > 0) {
          var i = e[e.length - 1];
          if (
            i.type === rq.Update &&
            t.type === rq.Update &&
            nD.equal(i.path, n)
          ) {
            Object.assign(i.props, t.props);
            return;
          }
        }
        e.push((0, rU._)((0, rT._)({}, t), { path: n }));
      }
      var na = (function (e) {
        (0, rM._)(ta, e);
        var t = (0, rV._)(ta);
        function ta(e) {
          var n;
          return (
            (0, rP._)(this, ta),
            ((n = t.call(this)).ts = []),
            (n.actual = []),
            (n.reverse = []),
            (n._current = e),
            (0, rL._)(n)
          );
        }
        return (
          (0, rD._)(ta, [
            {
              key: "update",
              value: function (e, t) {
                if ("" !== e) throw Error("");
                this._current = t;
              },
            },
            {
              key: "push",
              value: function (e, t, n, i) {
                ln(this.ts, t, e),
                  ln(this.actual, n, e),
                  ln(this.reverse, i, e);
              },
            },
            {
              key: "result",
              value: function () {
                return {
                  data: this._current,
                  ts: this.ts,
                  actual: this.actual,
                  reverse: this.reverse.reverse(),
                };
              },
            },
          ]),
          ta
        );
      })(r6);
      function wi(e, t, n) {
        return n instanceof r0
          ? new nn(e, t, n)
          : n instanceof r1
          ? new ni(e, t, n)
          : n instanceof rG
          ? new Proxy(new r7(e, t, n), nr)
          : null !== n && "object" == typeof n
          ? di(n)
            ? n
            : new Proxy(new r8(e, t, n), nt)
          : n;
      }
      function yr(e) {
        if (e instanceof nn || e instanceof ni) return e._current;
        if (null === e || "object" != typeof e) return e;
        var t = e[r3];
        return void 0 !== t ? t : e;
      }
      function Ct(e, t) {
        var n = [];
        if (t.length !== e.length) return null;
        for (var i = 0; i < e.length; ) {
          if ("*" === t[i]) n.push(e[i]);
          else if (e[i] !== t[i]) return null;
          i += 1;
        }
        return n;
      }
      (nm = nD || (nD = {})),
        (nk = function (e, t) {
          return ((e instanceof r0 || e instanceof nn) &&
            "string" == typeof t) ||
            ((e instanceof r1 || e instanceof ni) && "string" == typeof t)
            ? e.data(t)
            : ("number" == typeof t && Array.isArray(e)) ||
              ("string" == typeof t && "object" == typeof e && null !== e)
            ? e[t]
            : void 0;
        }),
        (nx = function (e, t) {
          for (
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
            n < t.length && void 0 !== e;

          )
            (e = nk(e, t[n])), (n += 1);
          return e;
        }),
        (nm.equal = function (e, t) {
          if (t.length !== e.length) return !1;
          for (var n = 0; n < e.length; ) {
            if (e[n] !== t[n]) return !1;
            n += 1;
          }
          return !0;
        }),
        (nm.removeOverridden = function (e, t, n) {
          var i = nx(n, e);
          if (void 0 === i || "object" != typeof i || null === i) return t;
          var a = (0, rT._)({}, t);
          return (
            Object.keys(i).forEach(function (e) {
              delete a[e];
            }),
            a
          );
        }),
        (nm.zoomOnce = nk),
        (nm.zoom = nx);
      var cc = function cc() {
          (0, rP._)(this, cc);
        },
        nu = (function (e) {
          (0, rM._)(Oi, e);
          var t = (0, rV._)(Oi);
          function Oi(e) {
            var n;
            return (
              (0, rP._)(this, Oi), ((n = t.call(this)).id = e), (0, rL._)(n)
            );
          }
          return Oi;
        })(cc),
        ns = (function (e) {
          (0, rM._)(Ai, e);
          var t = (0, rV._)(Ai);
          function Ai(e) {
            var n;
            return (
              (0, rP._)(this, Ai), ((n = t.call(this)).data = e), (0, rL._)(n)
            );
          }
          return Ai;
        })(cc);
      try {
        nM = new TextDecoder();
      } catch (e) {}
      var nf,
        nl,
        nd,
        nh,
        n_,
        np,
        nv,
        ng,
        nb,
        ny,
        nw,
        nm,
        nk,
        nx,
        nO,
        nS,
        nA,
        nj,
        nI,
        nE,
        nC,
        nP,
        nD,
        nM,
        nT,
        nU,
        nB,
        nL,
        nR,
        nN,
        nF,
        nz = 0,
        nH = {},
        nV = 0,
        nW = 0,
        nK = [],
        nJ = { useRecords: !1, mapsAsObjects: !0 },
        ac = function ac() {
          (0, rP._)(this, ac);
        },
        nZ = new ac();
      nZ.name = "MessagePack 0xC1";
      var nq,
        nQ = !1,
        nX = 2;
      try {
        Function("");
      } catch (e) {
        nX = 1 / 0;
      }
      var n$ = (function () {
        function qt(e) {
          (0, rP._)(this, qt),
            e &&
              (!1 === e.useRecords &&
                void 0 === e.mapsAsObjects &&
                (e.mapsAsObjects = !0),
              e.sequential &&
                !1 !== e.trusted &&
                ((e.trusted = !0),
                !e.structures &&
                  !1 != e.useRecords &&
                  ((e.structures = []),
                  e.maxSharedStructures || (e.maxSharedStructures = 0))),
              e.structures
                ? (e.structures.sharedLength = e.structures.length)
                : e.getStructures &&
                  (((e.structures = []).uninitialized = !0),
                  (e.structures.sharedLength = 0)),
              e.int64AsNumber && (e.int64AsType = "number")),
            Object.assign(this, e);
        }
        return (
          (0, rD._)(qt, [
            {
              key: "unpack",
              value: function (e, t) {
                var n = this;
                if (nT)
                  return _c(function () {
                    return (
                      yn(),
                      n ? n.unpack(e, t) : qt.prototype.unpack.call(nJ, e, t)
                    );
                  });
                e.buffer ||
                  e.constructor !== ArrayBuffer ||
                  (e =
                    (void 0 === rJ ? "undefined" : (0, rz._)(rJ)) < "u"
                      ? rJ.from(e)
                      : new Uint8Array(e)),
                  "object" == typeof t
                    ? ((nU = t.end || e.length), (nz = t.start || 0))
                    : ((nz = 0), (nU = t > -1 ? t : e.length)),
                  (nW = 0),
                  (nL = null),
                  (nR = null),
                  (nT = e);
                try {
                  nF =
                    e.dataView ||
                    (e.dataView = new DataView(
                      e.buffer,
                      e.byteOffset,
                      e.byteLength
                    ));
                } catch (t) {
                  throw (
                    ((nT = null),
                    e instanceof Uint8Array
                      ? t
                      : Error(
                          "Source must be a Uint8Array or Buffer but was a " +
                            (e && "object" == typeof e
                              ? e.constructor.name
                              : void 0 === e
                              ? "undefined"
                              : (0, rz._)(e))
                        ))
                  );
                }
                if (this instanceof qt) {
                  if (((nH = this), this.structures))
                    return (nB = this.structures), mr(t);
                  (!nB || nB.length > 0) && (nB = []);
                } else (nH = nJ), (!nB || nB.length > 0) && (nB = []);
                return mr(t);
              },
            },
            {
              key: "unpackMultiple",
              value: function (e, t) {
                var n,
                  i = 0;
                try {
                  nQ = !0;
                  var a = e.length,
                    o = this ? this.unpack(e, a) : it.unpack(e, a);
                  if (t) {
                    if (!1 === t(o, i, nz)) return;
                    for (; nz < a; )
                      if (((i = nz), !1 === t(mr(), i, nz))) return;
                  } else {
                    for (n = [o]; nz < a; ) (i = nz), n.push(mr());
                    return n;
                  }
                } catch (e) {
                  throw ((e.lastPosition = i), (e.values = n), e);
                } finally {
                  (nQ = !1), yn();
                }
              },
            },
            {
              key: "_mergeStructures",
              value: function (e, t) {
                Object.isFrozen((e = e || [])) &&
                  (e = e.map(function (e) {
                    return e.slice(0);
                  }));
                for (var n = 0, i = e.length; n < i; n++) {
                  var a = e[n];
                  a &&
                    ((a.isShared = !0),
                    n >= 32 && (a.highByte = (n - 32) >> 5));
                }
                for (var o in ((e.sharedLength = e.length), t || []))
                  if (o >= 0) {
                    var c = e[o],
                      s = t[o];
                    s &&
                      (c &&
                        ((e.restoreStructures || (e.restoreStructures = []))[
                          o
                        ] = c),
                      (e[o] = s));
                  }
                return (this.structures = e);
              },
            },
            {
              key: "decode",
              value: function (e, t) {
                return this.unpack(e, t);
              },
            },
          ]),
          qt
        );
      })();
      function mr(e) {
        try {
          if (!nH.trusted && !nQ) {
            var t,
              n,
              i = nB.sharedLength || 0;
            i < nB.length && (nB.length = i);
          }
          if (
            ((nH.randomAccessStructure && nT[nz] < 64 && nT[nz] >= 32 && nq) ||
              (t = ee()),
            nR && ((nz = nR.postBundlePosition), (nR = null)),
            nQ && (nB.restoreStructures = null),
            nz == nU)
          )
            nB && nB.restoreStructures && Ii(),
              (nB = null),
              (nT = null),
              nN && (nN = null);
          else {
            if (nz > nU) throw Error("Unexpected end of MessagePack data");
            if (!nQ) {
              try {
                n = JSON.stringify(t, function (e, t) {
                  return (void 0 === t ? "undefined" : (0, rz._)(t)) == "bigint"
                    ? "".concat(t, "n")
                    : t;
                }).slice(0, 100);
              } catch (e) {
                n = "(JSON view not available " + e + ")";
              }
              throw Error("Data read, but end of buffer not reached " + n);
            }
          }
          return t;
        } catch (e) {
          throw (
            (nB && nB.restoreStructures && Ii(),
            yn(),
            (e instanceof RangeError ||
              e.message.startsWith("Unexpected end of buffer") ||
              nz > nU) &&
              (e.incomplete = !0),
            e)
          );
        }
      }
      function Ii() {
        for (var e in nB.restoreStructures) nB[e] = nB.restoreStructures[e];
        nB.restoreStructures = null;
      }
      function ee() {
        var e,
          t = nT[nz++];
        if (t < 160) {
          if (t < 128) {
            if (t < 64) return t;
            var n = nB[63 & t] || (nH.getStructures && oc()[63 & t]);
            return n ? (n.read || (n.read = pi(n, 63 & t)), n.read()) : t;
          }
          if (t < 144) {
            if (((t -= 128), nH.mapsAsObjects)) {
              for (var i = {}, a = 0; a < t; a++) {
                var o = uc();
                "__proto__" === o && (o = "__proto_"), (i[o] = ee());
              }
              return i;
            }
            for (var c = new Map(), s = 0; s < t; s++) c.set(ee(), ee());
            return c;
          }
          for (var l = Array((t -= 144)), d = 0; d < t; d++) l[d] = ee();
          return nH.freezeData ? Object.freeze(l) : l;
        }
        if (t < 192) {
          var h = t - 160;
          if (nW >= nz) return nL.slice(nz - nV, (nz += h) - nV);
          if (0 == nW && nU < 140) {
            var _ = h < 16 ? yi(h) : lc(h);
            if (null != _) return _;
          }
          return nY(h);
        }
        switch (t) {
          case 192:
            return null;
          case 193:
            return nR
              ? (e = ee()) > 0
                ? nR[1].slice(nR.position1, (nR.position1 += e))
                : nR[0].slice(nR.position0, (nR.position0 -= e))
              : nZ;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            if (void 0 === (e = nT[nz++]))
              throw Error("Unexpected end of buffer");
            return un(e);
          case 197:
            return (e = nF.getUint16(nz)), (nz += 2), un(e);
          case 198:
            return (e = nF.getUint32(nz)), (nz += 4), un(e);
          case 199:
            return je(nT[nz++]);
          case 200:
            return (e = nF.getUint16(nz)), (nz += 2), je(e);
          case 201:
            return (e = nF.getUint32(nz)), (nz += 4), je(e);
          case 202:
            if (((e = nF.getFloat32(nz)), nH.useFloat32 > 2)) {
              var v = n9[((127 & nT[nz]) << 1) | (nT[nz + 1] >> 7)];
              return (nz += 4), ((v * e + (e > 0 ? 0.5 : -0.5)) >> 0) / v;
            }
            return (nz += 4), e;
          case 203:
            return (e = nF.getFloat64(nz)), (nz += 8), e;
          case 204:
            return nT[nz++];
          case 205:
            return (e = nF.getUint16(nz)), (nz += 2), e;
          case 206:
            return (e = nF.getUint32(nz)), (nz += 4), e;
          case 207:
            return (
              "number" === nH.int64AsType
                ? (e = 4294967296 * nF.getUint32(nz) + nF.getUint32(nz + 4))
                : "string" === nH.int64AsType
                ? (e = nF.getBigUint64(nz).toString())
                : "auto" === nH.int64AsType
                ? (e = nF.getBigUint64(nz)) <= BigInt(2) << BigInt(52) &&
                  (e = Number(e))
                : (e = nF.getBigUint64(nz)),
              (nz += 8),
              e
            );
          case 208:
            return nF.getInt8(nz++);
          case 209:
            return (e = nF.getInt16(nz)), (nz += 2), e;
          case 210:
            return (e = nF.getInt32(nz)), (nz += 4), e;
          case 211:
            return (
              "number" === nH.int64AsType
                ? (e = 4294967296 * nF.getInt32(nz) + nF.getUint32(nz + 4))
                : "string" === nH.int64AsType
                ? (e = nF.getBigInt64(nz).toString())
                : "auto" === nH.int64AsType
                ? (e = nF.getBigInt64(nz)) >= BigInt(-2) << BigInt(52) &&
                  e <= BigInt(2) << BigInt(52) &&
                  (e = Number(e))
                : (e = nF.getBigInt64(nz)),
              (nz += 8),
              e
            );
          case 212:
            if (114 == (e = nT[nz++])) return Ci(63 & nT[nz++]);
            var g = nK[e];
            if (g)
              return g.read
                ? (nz++, g.read(ee()))
                : g.noBuffer
                ? (nz++, g())
                : g(nT.subarray(nz, ++nz));
            throw Error("Unknown extension " + e);
          case 213:
            return 114 == (e = nT[nz])
              ? (nz++, Ci(63 & nT[nz++], nT[nz++]))
              : je(2);
          case 214:
            return je(4);
          case 215:
            return je(8);
          case 216:
            return je(16);
          case 217:
            return (
              (e = nT[nz++]),
              nW >= nz ? nL.slice(nz - nV, (nz += e) - nV) : n0(e)
            );
          case 218:
            return (
              (e = nF.getUint16(nz)),
              (nz += 2),
              nW >= nz ? nL.slice(nz - nV, (nz += e) - nV) : n1(e)
            );
          case 219:
            return (
              (e = nF.getUint32(nz)),
              (nz += 4),
              nW >= nz ? nL.slice(nz - nV, (nz += e) - nV) : n2(e)
            );
          case 220:
            return (e = nF.getUint16(nz)), (nz += 2), Bi(e);
          case 221:
            return (e = nF.getUint32(nz)), (nz += 4), Bi(e);
          case 222:
            return (e = nF.getUint16(nz)), (nz += 2), Ui(e);
          case 223:
            return (e = nF.getUint32(nz)), (nz += 4), Ui(e);
          default:
            if (t >= 224) return t - 256;
            if (void 0 === t) {
              var b = Error("Unexpected end of MessagePack data");
              throw ((b.incomplete = !0), b);
            }
            throw Error("Unknown MessagePack token " + t);
        }
      }
      var nG = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;
      function pi(e, t) {
        function r() {
          if (r.count++ > nX) {
            var n = (e.read = Function(
              "r",
              "return function(){return " +
                (nH.freezeData ? "Object.freeze" : "") +
                "({" +
                e
                  .map(function (e) {
                    return "__proto__" === e
                      ? "__proto_:r()"
                      : nG.test(e)
                      ? e + ":r()"
                      : "[" + JSON.stringify(e) + "]:r()";
                  })
                  .join(",") +
                "})}"
            )(ee));
            return 0 === e.highByte && (e.read = Pi(t, e.read)), n();
          }
          for (var i = {}, a = 0, o = e.length; a < o; a++) {
            var c = e[a];
            "__proto__" === c && (c = "__proto_"), (i[c] = ee());
          }
          return nH.freezeData ? Object.freeze(i) : i;
        }
        return (r.count = 0), 0 === e.highByte ? Pi(t, r) : r;
      }
      var Pi = function (e, t) {
        return function () {
          var n = nT[nz++];
          if (0 === n) return t();
          var i = e < 32 ? -(e + (n << 5)) : e + (n << 5),
            a = nB[i] || oc()[i];
          if (!a) throw Error("Record id is not defined for " + i);
          return a.read || (a.read = pi(a, e)), a.read();
        };
      };
      function oc() {
        var e = _c(function () {
          return (nT = null), nH.getStructures();
        });
        return (nB = nH._mergeStructures(e, nB));
      }
      var nY = kr,
        n0 = kr,
        n1 = kr,
        n2 = kr;
      function kr(e) {
        if (e < 16 && (t = yi(e))) return t;
        if (e > 64 && nM) return nM.decode(nT.subarray(nz, (nz += e)));
        var t,
          n = nz + e,
          i = [];
        for (t = ""; nz < n; ) {
          var a = nT[nz++];
          if ((128 & a) == 0) i.push(a);
          else if ((224 & a) == 192) {
            var o = 63 & nT[nz++];
            i.push(((31 & a) << 6) | o);
          } else if ((240 & a) == 224) {
            var c = 63 & nT[nz++],
              s = 63 & nT[nz++];
            i.push(((31 & a) << 12) | (c << 6) | s);
          } else if ((248 & a) == 240) {
            var l =
              ((7 & a) << 18) |
              ((63 & nT[nz++]) << 12) |
              ((63 & nT[nz++]) << 6) |
              (63 & nT[nz++]);
            l > 65535 &&
              ((l -= 65536),
              i.push(((l >>> 10) & 1023) | 55296),
              (l = 56320 | (1023 & l))),
              i.push(l);
          } else i.push(a);
          i.length >= 4096 && ((t += n3.apply(String, i)), (i.length = 0));
        }
        return i.length > 0 && (t += n3.apply(String, i)), t;
      }
      function Bi(e) {
        for (var t = Array(e), n = 0; n < e; n++) t[n] = ee();
        return nH.freezeData ? Object.freeze(t) : t;
      }
      function Ui(e) {
        if (nH.mapsAsObjects) {
          for (var t = {}, n = 0; n < e; n++) {
            var i = uc();
            "__proto__" === i && (i = "__proto_"), (t[i] = ee());
          }
          return t;
        }
        for (var a = new Map(), o = 0; o < e; o++) a.set(ee(), ee());
        return a;
      }
      var n3 = String.fromCharCode;
      function lc(e) {
        for (var t = nz, n = Array(e), i = 0; i < e; i++) {
          var a = nT[nz++];
          if ((128 & a) > 0) {
            nz = t;
            return;
          }
          n[i] = a;
        }
        return n3.apply(String, n);
      }
      function yi(e) {
        if (e < 4) {
          if (e < 2) {
            if (0 === e) return "";
            var t = nT[nz++];
            if ((128 & t) > 1) {
              nz -= 1;
              return;
            }
            return n3(t);
          }
          var n = nT[nz++],
            i = nT[nz++];
          if ((128 & n) > 0 || (128 & i) > 0) {
            nz -= 2;
            return;
          }
          if (e < 3) return n3(n, i);
          var a = nT[nz++];
          if ((128 & a) > 0) {
            nz -= 3;
            return;
          }
          return n3(n, i, a);
        }
        var o = nT[nz++],
          c = nT[nz++],
          s = nT[nz++],
          l = nT[nz++];
        if ((128 & o) > 0 || (128 & c) > 0 || (128 & s) > 0 || (128 & l) > 0) {
          nz -= 4;
          return;
        }
        if (e < 6) {
          if (4 === e) return n3(o, c, s, l);
          var d = nT[nz++];
          if ((128 & d) > 0) {
            nz -= 5;
            return;
          }
          return n3(o, c, s, l, d);
        }
        if (e < 8) {
          var h = nT[nz++],
            _ = nT[nz++];
          if ((128 & h) > 0 || (128 & _) > 0) {
            nz -= 6;
            return;
          }
          if (e < 7) return n3(o, c, s, l, h, _);
          var v = nT[nz++];
          if ((128 & v) > 0) {
            nz -= 7;
            return;
          }
          return n3(o, c, s, l, h, _, v);
        }
        var g = nT[nz++],
          b = nT[nz++],
          w = nT[nz++],
          m = nT[nz++];
        if ((128 & g) > 0 || (128 & b) > 0 || (128 & w) > 0 || (128 & m) > 0) {
          nz -= 8;
          return;
        }
        if (e < 10) {
          if (8 === e) return n3(o, c, s, l, g, b, w, m);
          var k = nT[nz++];
          if ((128 & k) > 0) {
            nz -= 9;
            return;
          }
          return n3(o, c, s, l, g, b, w, m, k);
        }
        if (e < 12) {
          var x = nT[nz++],
            S = nT[nz++];
          if ((128 & x) > 0 || (128 & S) > 0) {
            nz -= 10;
            return;
          }
          if (e < 11) return n3(o, c, s, l, g, b, w, m, x, S);
          var j = nT[nz++];
          if ((128 & j) > 0) {
            nz -= 11;
            return;
          }
          return n3(o, c, s, l, g, b, w, m, x, S, j);
        }
        var I = nT[nz++],
          E = nT[nz++],
          C = nT[nz++],
          P = nT[nz++];
        if ((128 & I) > 0 || (128 & E) > 0 || (128 & C) > 0 || (128 & P) > 0) {
          nz -= 12;
          return;
        }
        if (e < 14) {
          if (12 === e) return n3(o, c, s, l, g, b, w, m, I, E, C, P);
          var D = nT[nz++];
          if ((128 & D) > 0) {
            nz -= 13;
            return;
          }
          return n3(o, c, s, l, g, b, w, m, I, E, C, P, D);
        }
        var U = nT[nz++],
          B = nT[nz++];
        if ((128 & U) > 0 || (128 & B) > 0) {
          nz -= 14;
          return;
        }
        if (e < 15) return n3(o, c, s, l, g, b, w, m, I, E, C, P, U, B);
        var L = nT[nz++];
        if ((128 & L) > 0) {
          nz -= 15;
          return;
        }
        return n3(o, c, s, l, g, b, w, m, I, E, C, P, U, B, L);
      }
      function Ri() {
        var e,
          t = nT[nz++];
        if (t < 192) e = t - 160;
        else
          switch (t) {
            case 217:
              e = nT[nz++];
              break;
            case 218:
              (e = nF.getUint16(nz)), (nz += 2);
              break;
            case 219:
              (e = nF.getUint32(nz)), (nz += 4);
              break;
            default:
              throw Error("Expected string");
          }
        return kr(e);
      }
      function un(e) {
        return nH.copyBuffers
          ? Uint8Array.prototype.slice.call(nT, nz, (nz += e))
          : nT.subarray(nz, (nz += e));
      }
      function je(e) {
        var t,
          n = nT[nz++];
        if (nK[n])
          return nK[n](nT.subarray(nz, (t = nz += e)), function (e) {
            nz = e;
            try {
              return ee();
            } finally {
              nz = t;
            }
          });
        throw Error("Unknown extension type " + n);
      }
      var n5 = Array(4096);
      function uc() {
        var e = nT[nz++];
        if (!(e >= 160) || !(e < 192)) return nz--, hc(ee());
        if (((e -= 160), nW >= nz)) return nL.slice(nz - nV, (nz += e) - nV);
        if (!(0 == nW && nU < 180)) return nY(e);
        var t,
          n =
            ((e << 5) ^ (e > 1 ? nF.getUint16(nz) : e > 0 ? nT[nz] : 0)) & 4095,
          i = n5[n],
          a = nz,
          o = nz + e - 3,
          c = 0;
        if (i && i.bytes == e) {
          for (; a < o; ) {
            if ((t = nF.getUint32(a)) != i[c++]) {
              a = 1879048192;
              break;
            }
            a += 4;
          }
          for (o += 3; a < o; )
            if ((t = nT[a++]) != i[c++]) {
              a = 1879048192;
              break;
            }
          if (a === o) return (nz = a), i.string;
          (o -= 3), (a = nz);
        }
        for (i = [], n5[n] = i, i.bytes = e; a < o; )
          (t = nF.getUint32(a)), i.push(t), (a += 4);
        for (o += 3; a < o; ) (t = nT[a++]), i.push(t);
        var s = e < 16 ? yi(e) : lc(e);
        return null != s ? (i.string = s) : (i.string = nY(e));
      }
      function hc(e) {
        if ("string" == typeof e) return e;
        if (
          "number" == typeof e ||
          "boolean" == typeof e ||
          (void 0 === e ? "undefined" : (0, rz._)(e)) == "bigint"
        )
          return e.toString();
        if (null == e) return e + "";
        throw Error(
          "Invalid property type for record",
          void 0 === e ? "undefined" : (0, rz._)(e)
        );
      }
      var Ci = function (e, t) {
        var n = ee().map(hc),
          i = e;
        void 0 !== t &&
          ((e = e < 32 ? -((t << 5) + e) : (t << 5) + e), (n.highByte = t));
        var a = nB[e];
        return (
          a &&
            (a.isShared || nQ) &&
            ((nB.restoreStructures || (nB.restoreStructures = []))[e] = a),
          (nB[e] = n),
          (n.read = pi(n, i)),
          n.read()
        );
      };
      (nK[0] = function () {}),
        (nK[0].noBuffer = !0),
        (nK[66] = function (e) {
          for (
            var t = e.length, n = BigInt(128 & e[0] ? e[0] - 256 : e[0]), i = 1;
            i < t;
            i++
          )
            (n <<= BigInt(8)), (n += BigInt(e[i]));
          return n;
        });
      var n4 = {
        Error: Error,
        TypeError: TypeError,
        ReferenceError: ReferenceError,
      };
      (nK[101] = function () {
        var e = ee();
        return (n4[e[0]] || Error)(e[1], { cause: e[2] });
      }),
        (nK[105] = function (e) {
          if (!1 === nH.structuredClone)
            throw Error("Structured clone extension is disabled");
          var t = nF.getUint32(nz - 4);
          nN || (nN = new Map());
          var n,
            i = nT[nz],
            a = {
              target: (n =
                (i >= 144 && i < 160) || 220 == i || 221 == i ? [] : {}),
            };
          nN.set(t, a);
          var o = ee();
          return a.used ? Object.assign(n, o) : ((a.target = o), o);
        }),
        (nK[112] = function (e) {
          if (!1 === nH.structuredClone)
            throw Error("Structured clone extension is disabled");
          var t = nF.getUint32(nz - 4),
            n = nN.get(t);
          return (n.used = !0), n.target;
        }),
        (nK[115] = function () {
          return new Set(ee());
        });
      var n6 = [
          "Int8",
          "Uint8",
          "Uint8Clamped",
          "Int16",
          "Uint16",
          "Int32",
          "Uint32",
          "Float32",
          "Float64",
          "BigInt64",
          "BigUint64",
        ].map(function (e) {
          return e + "Array";
        }),
        n8 = "object" == typeof globalThis ? globalThis : window;
      (nK[116] = function (e) {
        var t = e[0],
          n = n6[t];
        if (!n) {
          if (16 === t) {
            var i = new ArrayBuffer(e.length - 1);
            return new Uint8Array(i).set(e.subarray(1)), i;
          }
          throw Error("Could not find typed array for code " + t);
        }
        return new n8[n](Uint8Array.prototype.slice.call(e, 1).buffer);
      }),
        (nK[120] = function () {
          var e = ee();
          return new RegExp(e[0], e[1]);
        });
      var n7 = [];
      function _c(e) {
        var t,
          n = nU,
          i = nz,
          a = nV,
          o = nW,
          c = nL,
          s = nN,
          l = nR,
          d = new Uint8Array(nT.slice(0, nU)),
          h = nB,
          _ = nB.slice(0, nB.length),
          v = nH,
          g = nQ,
          b = e();
        return (
          (nU = n),
          (nz = i),
          (nV = a),
          (nW = o),
          (nL = c),
          (nN = s),
          (nR = l),
          (nT = d),
          (nQ = g),
          (t = nB = h).splice.apply(t, [0, nB.length].concat((0, rF._)(_))),
          (nH = v),
          (nF = new DataView(nT.buffer, nT.byteOffset, nT.byteLength)),
          b
        );
      }
      function yn() {
        (nT = null), (nN = null), (nB = null);
      }
      (nK[98] = function (e) {
        var t = (e[0] << 24) + (e[1] << 16) + (e[2] << 8) + e[3],
          n = nz;
        return (
          (nz += t - e.length),
          (nR = n7),
          ((nR = [Ri(), Ri()]).position0 = 0),
          (nR.position1 = 0),
          (nR.postBundlePosition = nz),
          (nz = n),
          ee()
        );
      }),
        (nK[255] = function (e) {
          return new Date(
            4 == e.length
              ? (16777216 * e[0] + (e[1] << 16) + (e[2] << 8) + e[3]) * 1e3
              : 8 == e.length
              ? ((e[0] << 22) + (e[1] << 14) + (e[2] << 6) + (e[3] >> 2)) /
                  1e6 +
                ((3 & e[3]) * 4294967296 +
                  16777216 * e[4] +
                  (e[5] << 16) +
                  (e[6] << 8) +
                  e[7]) *
                  1e3
              : 12 == e.length
              ? ((e[0] << 24) + (e[1] << 16) + (e[2] << 8) + e[3]) / 1e6 +
                ((128 & e[4] ? -281474976710656 : 0) +
                  1099511627776 * e[6] +
                  4294967296 * e[7] +
                  16777216 * e[8] +
                  (e[9] << 16) +
                  (e[10] << 8) +
                  e[11]) *
                  1e3
              : "invalid"
          );
        });
      for (var n9 = Array(147), ie = 0; ie < 256; ie++)
        n9[ie] = +("1e" + Math.floor(45.15 - 0.30103 * ie));
      var it = new n$({ useRecords: !1 });
      it.unpack, it.unpackMultiple, it.unpack;
      var ir = new Float32Array(1);
      new Uint8Array(ir.buffer, 0, 4);
      try {
        ii = new TextEncoder();
      } catch (e) {}
      var ii,
        ia,
        io,
        ic,
        iu,
        is,
        il,
        id,
        ih = (void 0 === rJ ? "undefined" : (0, rz._)(rJ)) < "u",
        i_ = ih
          ? function (e) {
              return rJ.allocUnsafeSlow(e);
            }
          : Uint8Array,
        ip = ih ? rJ : Uint8Array,
        iv = ih ? 4294967296 : 2144337920,
        ig = 0,
        ib = null,
        iy = /[\u0080-\uFFFF]/,
        iw = Symbol("record-id"),
        im = (function (e) {
          (0, rM._)(bc, e);
          var t = (0, rV._)(bc);
          function bc(e) {
            (0, rP._)(this, bc), ((n = t.call(this, e)).offset = 0);
            var n,
              i,
              a,
              o,
              c,
              s = ip.prototype.utf8Write
                ? function (e, t) {
                    return ic.utf8Write(e, t, ic.byteLength - t);
                  }
                : !!ii &&
                  !!ii.encodeInto &&
                  function (e, t) {
                    return ii.encodeInto(e, ic.subarray(t)).written;
                  },
              l = (0, rE._)(n);
            e || (e = {});
            var d = e && e.sequential,
              h = e.structures || e.saveStructures,
              _ = e.maxSharedStructures;
            if ((null == _ && (_ = h ? 32 : 0), _ > 8160))
              throw Error("Maximum maxSharedStructure is 8160");
            e.structuredClone && null == e.moreTypes && (n.moreTypes = !0);
            var v = e.maxOwnStructures;
            null == v && (v = h ? 32 : 64),
              n.structures || !1 == e.useRecords || (n.structures = []);
            var g = _ > 32 || v + _ > 64,
              b = _ + 64,
              w = _ + v + 64;
            if (w > 8256)
              throw Error(
                "Maximum maxSharedStructure + maxOwnStructure is 8192"
              );
            var m = [],
              k = 0,
              x = 0;
            n.pack = n.encode = function (e, t) {
              if (
                (ic ||
                  ((is =
                    (ic = new i_(8192)).dataView ||
                    (ic.dataView = new DataView(ic.buffer, 0, 8192))),
                  (ig = 0)),
                (il = ic.length - 10) - ig < 2048
                  ? ((is =
                      (ic = new i_(ic.length)).dataView ||
                      (ic.dataView = new DataView(ic.buffer, 0, ic.length))),
                    (il = ic.length - 10),
                    (ig = 0))
                  : (ig = (ig + 7) & 2147483640),
                (i = ig),
                t & iS && (ig += 255 & t),
                (c = l.structuredClone ? new Map() : null),
                l.bundleStrings && "string" != typeof e
                  ? ((ib = []).size = 1 / 0)
                  : (ib = null),
                (o = l.structures))
              ) {
                o.uninitialized && (o = l._mergeStructures(l.getStructures()));
                var n,
                  s = o.sharedLength || 0;
                if (s > _)
                  throw Error(
                    "Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " +
                      o.sharedLength
                  );
                if (!o.transitions) {
                  o.transitions = Object.create(null);
                  for (var h = 0; h < s; h++) {
                    var v = o[h];
                    if (v) {
                      for (
                        var g = void 0, b = o.transitions, w = 0, m = v.length;
                        w < m;
                        w++
                      ) {
                        var k = v[w];
                        (g = b[k]) || (g = b[k] = Object.create(null)), (b = g);
                      }
                      b[iw] = h + 64;
                    }
                  }
                  this.lastNamedStructuresLength = s;
                }
                d || (o.nextId = s + 64);
              }
              a && (a = !1);
              try {
                l.randomAccessStructure &&
                e &&
                e.constructor &&
                e.constructor === Object
                  ? Kc(e)
                  : K(e);
                var x = ib;
                if ((ib && zi(i, K, 0), c && c.idsToInsert)) {
                  for (
                    var S = c.idsToInsert.sort(function (e, t) {
                        return e.offset > t.offset ? 1 : -1;
                      }),
                      j = S.length,
                      I = -1;
                    x && j > 0;

                  ) {
                    var E = S[--j].offset + i;
                    E < x.stringsPosition + i && -1 === I && (I = 0),
                      E > x.position + i
                        ? I >= 0 && (I += 6)
                        : (I >= 0 &&
                            (is.setUint32(
                              x.position + i,
                              is.getUint32(x.position + i) + I
                            ),
                            (I = -1)),
                          (x = x.previous),
                          j++);
                  }
                  I >= 0 &&
                    x &&
                    is.setUint32(
                      x.position + i,
                      is.getUint32(x.position + i) + I
                    ),
                    (ig += 6 * S.length) > il && re(ig),
                    (l.offset = ig);
                  var C = (function (e, t) {
                    for (
                      var n, i = 6 * t.length, a = e.length - i;
                      (n = t.pop());

                    ) {
                      var o = n.offset,
                        c = n.id;
                      e.copyWithin(o + i, o, a);
                      var s = o + (i -= 6);
                      (e[s++] = 214),
                        (e[s++] = 105),
                        (e[s++] = c >> 24),
                        (e[s++] = (c >> 16) & 255),
                        (e[s++] = (c >> 8) & 255),
                        (e[s++] = 255 & c),
                        (a = o);
                    }
                    return e;
                  })(ic.subarray(i, ig), S);
                  return (c = null), C;
                }
                return (
                  (l.offset = ig),
                  t & ix
                    ? ((ic.start = i), (ic.end = ig), ic)
                    : ic.subarray(i, ig)
                );
              } catch (e) {
                throw ((n = e), e);
              } finally {
                if (o && (se(), a && l.saveStructures)) {
                  var P,
                    D = o.sharedLength || 0,
                    U = ic.subarray(i, ig),
                    B =
                      (((P = o).isCompatible = function (e) {
                        var t =
                          !e || (l.lastNamedStructuresLength || 0) === e.length;
                        return t || l._mergeStructures(e), t;
                      }),
                      P);
                  if (!n)
                    return !1 === l.saveStructures(B, B.isCompatible)
                      ? l.pack(e, t)
                      : ((l.lastNamedStructuresLength = D),
                        ic.length > 1073741824 && (ic = null),
                        U);
                }
                ic.length > 1073741824 && (ic = null), t & iO && (ig = i);
              }
            };
            var se = function () {
                x < 10 && x++;
                var e = o.sharedLength || 0;
                if ((o.length > e && !d && (o.length = e), k > 1e4))
                  (o.transitions = null),
                    (x = 0),
                    (k = 0),
                    m.length > 0 && (m = []);
                else if (m.length > 0 && !d) {
                  for (var t = 0, n = m.length; t < n; t++) m[t][iw] = 0;
                  m = [];
                }
              },
              _e = function (e) {
                var t = e.length;
                t < 16
                  ? (ic[ig++] = 144 | t)
                  : t < 65536
                  ? ((ic[ig++] = 220),
                    (ic[ig++] = t >> 8),
                    (ic[ig++] = 255 & t))
                  : ((ic[ig++] = 221), is.setUint32(ig, t), (ig += 4));
                for (var n = 0; n < t; n++) K(e[n]);
              },
              K = function (e) {
                ig > il && (ic = re(ig));
                var t,
                  a = void 0 === e ? "undefined" : (0, rz._)(e);
                if ("string" === a) {
                  var o = e.length;
                  if (ib && o >= 4 && o < 4096) {
                    if ((ib.size += o) > 21760) {
                      var l,
                        d,
                        h = (ib[0] ? 3 * ib[0].length + ib[1].length : 0) + 10;
                      ig + h > il && (ic = re(ig + h)),
                        ib.position
                          ? ((l = ib),
                            (ic[ig] = 200),
                            (ig += 3),
                            (ic[ig++] = 98),
                            (d = ig - i),
                            (ig += 4),
                            zi(i, K, 0),
                            is.setUint16(d + i - 3, ig - i - d))
                          : ((ic[ig++] = 214),
                            (ic[ig++] = 98),
                            (d = ig - i),
                            (ig += 4)),
                        ((ib = ["", ""]).previous = l),
                        (ib.size = 0),
                        (ib.position = d);
                    }
                    var _ = iy.test(e);
                    (ib[_ ? 0 : 1] += e), (ic[ig++] = 193), K(_ ? -o : o);
                    return;
                  }
                  g = o < 32 ? 1 : o < 256 ? 2 : o < 65536 ? 3 : 5;
                  var v = 3 * o;
                  if ((ig + v > il && (ic = re(ig + v)), o < 64 || !s)) {
                    var g,
                      b,
                      w,
                      m,
                      k = ig + g;
                    for (b = 0; b < o; b++)
                      (w = e.charCodeAt(b)) < 128
                        ? (ic[k++] = w)
                        : (w < 2048
                            ? (ic[k++] = (w >> 6) | 192)
                            : ((64512 & w) == 55296 &&
                              (64512 & (m = e.charCodeAt(b + 1))) == 56320
                                ? ((w =
                                    65536 + ((1023 & w) << 10) + (1023 & m)),
                                  b++,
                                  (ic[k++] = (w >> 18) | 240),
                                  (ic[k++] = ((w >> 12) & 63) | 128))
                                : (ic[k++] = (w >> 12) | 224),
                              (ic[k++] = ((w >> 6) & 63) | 128)),
                          (ic[k++] = (63 & w) | 128));
                    t = k - ig - g;
                  } else t = s(e, ig + g);
                  t < 32
                    ? (ic[ig++] = 160 | t)
                    : t < 256
                    ? (g < 2 && ic.copyWithin(ig + 2, ig + 1, ig + 1 + t),
                      (ic[ig++] = 217),
                      (ic[ig++] = t))
                    : t < 65536
                    ? (g < 3 && ic.copyWithin(ig + 3, ig + 2, ig + 2 + t),
                      (ic[ig++] = 218),
                      (ic[ig++] = t >> 8),
                      (ic[ig++] = 255 & t))
                    : (g < 5 && ic.copyWithin(ig + 5, ig + 3, ig + 3 + t),
                      (ic[ig++] = 219),
                      is.setUint32(ig, t),
                      (ig += 4)),
                    (ig += t);
                } else if ("number" === a) {
                  if (e >>> 0 === e)
                    e < 32 ||
                    (e < 128 && !1 === n.useRecords) ||
                    (e < 64 && !n.randomAccessStructure)
                      ? (ic[ig++] = e)
                      : e < 256
                      ? ((ic[ig++] = 204), (ic[ig++] = e))
                      : e < 65536
                      ? ((ic[ig++] = 205),
                        (ic[ig++] = e >> 8),
                        (ic[ig++] = 255 & e))
                      : ((ic[ig++] = 206), is.setUint32(ig, e), (ig += 4));
                  else if (e >> 0 === e)
                    e >= -32
                      ? (ic[ig++] = 256 + e)
                      : e >= -128
                      ? ((ic[ig++] = 208), (ic[ig++] = e + 256))
                      : e >= -32768
                      ? ((ic[ig++] = 209), is.setInt16(ig, e), (ig += 2))
                      : ((ic[ig++] = 210), is.setInt32(ig, e), (ig += 4));
                  else {
                    if (
                      (D = n.useFloat32) > 0 &&
                      e < 4294967296 &&
                      e >= -2147483648
                    ) {
                      if (
                        ((ic[ig++] = 202),
                        is.setFloat32(ig, e),
                        D < 4 ||
                          (U =
                            e *
                            n9[((127 & ic[ig]) << 1) | (ic[ig + 1] >> 7)]) >>
                            0 ===
                            U)
                      ) {
                        ig += 4;
                        return;
                      }
                      ig--;
                    }
                    (ic[ig++] = 203), is.setFloat64(ig, e), (ig += 8);
                  }
                } else if ("object" === a || "function" === a) {
                  if (e) {
                    if (c) {
                      var x = c.get(e);
                      if (x) {
                        if (!x.id) {
                          var S = c.idsToInsert || (c.idsToInsert = []);
                          x.id = S.push(x);
                        }
                        (ic[ig++] = 214),
                          (ic[ig++] = 112),
                          is.setUint32(ig, x.id),
                          (ig += 4);
                        return;
                      }
                      c.set(e, { offset: ig - i });
                    }
                    var j = e.constructor;
                    if (j === Object) E(e);
                    else if (j === Array) _e(e);
                    else if (j === Map) {
                      if (n.mapAsEmptyObject) ic[ig++] = 128;
                      else {
                        (t = e.size) < 16
                          ? (ic[ig++] = 128 | t)
                          : t < 65536
                          ? ((ic[ig++] = 222),
                            (ic[ig++] = t >> 8),
                            (ic[ig++] = 255 & t))
                          : ((ic[ig++] = 223), is.setUint32(ig, t), (ig += 4));
                        var I = !0,
                          C = !1,
                          P = void 0;
                        try {
                          for (
                            var D, U, B, L = e[Symbol.iterator]();
                            !(I = (B = L.next()).done);
                            I = !0
                          ) {
                            var R = (0, rR._)(B.value, 2),
                              N = R[0],
                              F = R[1];
                            K(N), K(F);
                          }
                        } catch (e) {
                          (C = !0), (P = e);
                        } finally {
                          try {
                            I || null == L.return || L.return();
                          } finally {
                            if (C) throw P;
                          }
                        }
                      }
                    } else {
                      for (var z = 0, H = ia.length; z < H; z++) {
                        var V = (function (t, i) {
                          var a = io[t];
                          if (e instanceof a) {
                            var o = ia[t];
                            if (o.write) {
                              o.type &&
                                ((ic[ig++] = 212),
                                (ic[ig++] = o.type),
                                (ic[ig++] = 0));
                              var c = o.write.call((0, rE._)(n), e);
                              return (
                                c === e
                                  ? Array.isArray(e)
                                    ? _e(e)
                                    : E(e)
                                  : K(c),
                                { v: void 0 }
                              );
                            }
                            var s = ic,
                              l = is,
                              d = ig;
                            ic = null;
                            var h = void 0;
                            try {
                              h = o.pack.call(
                                (0, rE._)(n),
                                e,
                                function (e) {
                                  return (
                                    (ic = s),
                                    (s = null),
                                    (ig += e) > il && re(ig),
                                    {
                                      target: ic,
                                      targetView: is,
                                      position: ig - e,
                                    }
                                  );
                                },
                                K
                              );
                            } finally {
                              s &&
                                ((ic = s),
                                (is = l),
                                (ig = d),
                                (il = ic.length - 10));
                            }
                            return (
                              h &&
                                (h.length + ig > il && re(h.length + ig),
                                (ig = (function (e, t, n, i) {
                                  var a = e.length;
                                  switch (a) {
                                    case 1:
                                      t[n++] = 212;
                                      break;
                                    case 2:
                                      t[n++] = 213;
                                      break;
                                    case 4:
                                      t[n++] = 214;
                                      break;
                                    case 8:
                                      t[n++] = 215;
                                      break;
                                    case 16:
                                      t[n++] = 216;
                                      break;
                                    default:
                                      a < 256
                                        ? ((t[n++] = 199), (t[n++] = a))
                                        : (a < 65536
                                            ? ((t[n++] = 200),
                                              (t[n++] = a >> 8))
                                            : ((t[n++] = 201),
                                              (t[n++] = a >> 24),
                                              (t[n++] = (a >> 16) & 255),
                                              (t[n++] = (a >> 8) & 255)),
                                          (t[n++] = 255 & a));
                                  }
                                  return (t[n++] = i), t.set(e, n), (n += a);
                                })(h, ic, ig, o.type))),
                              { v: void 0 }
                            );
                          }
                        })(z, 0);
                        if ("object" === (0, rz._)(V)) return V.v;
                      }
                      if (Array.isArray(e)) _e(e);
                      else {
                        if (e.toJSON) {
                          var W = e.toJSON();
                          if (W !== e) return K(W);
                        }
                        if ("function" === a)
                          return K(n.writeFunction && n.writeFunction(e));
                        E(e);
                      }
                    }
                  } else ic[ig++] = 192;
                } else if ("boolean" === a) ic[ig++] = e ? 195 : 194;
                else if ("bigint" === a) {
                  if (
                    e < BigInt(1) << BigInt(63) &&
                    e >= -(BigInt(1) << BigInt(63))
                  )
                    (ic[ig++] = 211), is.setBigInt64(ig, e);
                  else if (e < BigInt(1) << BigInt(64) && e > 0)
                    (ic[ig++] = 207), is.setBigUint64(ig, e);
                  else if (n.largeBigIntToFloat)
                    (ic[ig++] = 203), is.setFloat64(ig, Number(e));
                  else {
                    if (n.largeBigIntToString) return K(e.toString());
                    if (
                      n.useBigIntExtension &&
                      e < Math.pow(BigInt(2), BigInt(1023)) &&
                      e > -Math.pow(BigInt(2), BigInt(1023))
                    ) {
                      (ic[ig++] = 199), ig++, (ic[ig++] = 66);
                      var Z,
                        q = [];
                      do {
                        var G = e & BigInt(255);
                        (Z =
                          (G & BigInt(128)) ===
                          (e < BigInt(0) ? BigInt(128) : BigInt(0))),
                          q.push(G),
                          (e >>= BigInt(8));
                      } while (!((e === BigInt(0) || e === BigInt(-1)) && Z));
                      ic[ig - 2] = q.length;
                      for (var Y = q.length; Y > 0; ) ic[ig++] = Number(q[--Y]);
                      return;
                    }
                    throw RangeError(
                      e +
                        " was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string"
                    );
                  }
                  ig += 8;
                } else if ("undefined" === a)
                  n.encodeUndefinedAsNil
                    ? (ic[ig++] = 192)
                    : ((ic[ig++] = 212), (ic[ig++] = 0), (ic[ig++] = 0));
                else throw Error("Unknown type: " + a);
              },
              S =
                n.variableMapSize || n.coercibleKeyAsNumber || n.skipValues
                  ? function (e) {
                      if (n.skipValues)
                        for (var t in ((i = []), e))
                          ("function" != typeof e.hasOwnProperty ||
                            e.hasOwnProperty(t)) &&
                            !n.skipValues.includes(e[t]) &&
                            i.push(t);
                      else i = Object.keys(e);
                      var i,
                        a,
                        o = i.length;
                      if (
                        (o < 16
                          ? (ic[ig++] = 128 | o)
                          : o < 65536
                          ? ((ic[ig++] = 222),
                            (ic[ig++] = o >> 8),
                            (ic[ig++] = 255 & o))
                          : ((ic[ig++] = 223), is.setUint32(ig, o), (ig += 4)),
                        n.coercibleKeyAsNumber)
                      )
                        for (var c = 0; c < o; c++) {
                          var s = Number((a = i[c]));
                          K(isNaN(s) ? a : s), K(e[a]);
                        }
                      else for (var l = 0; l < o; l++) K((a = i[l])), K(e[a]);
                    }
                  : function (e) {
                      ic[ig++] = 222;
                      var t = ig - i;
                      ig += 2;
                      var n = 0;
                      for (var a in e)
                        ("function" != typeof e.hasOwnProperty ||
                          e.hasOwnProperty(a)) &&
                          (K(a), K(e[a]), n++);
                      if (n > 65535)
                        throw Error(
                          'Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object'
                        );
                      (ic[t++ + i] = n >> 8), (ic[t + i] = 255 & n);
                    },
              j =
                !1 === n.useRecords
                  ? S
                  : e.progressiveRecords && !g
                  ? function (e) {
                      var t,
                        n,
                        a =
                          o.transitions ||
                          (o.transitions = Object.create(null)),
                        c = ig++ - i;
                      for (var s in e)
                        if (
                          "function" != typeof e.hasOwnProperty ||
                          e.hasOwnProperty(s)
                        ) {
                          if ((t = a[s])) a = t;
                          else {
                            var l = Object.keys(e),
                              d = a;
                            a = o.transitions;
                            for (var h = 0, _ = 0, v = l.length; _ < v; _++) {
                              var g = l[_];
                              (t = a[g]) ||
                                ((t = a[g] = Object.create(null)), h++),
                                (a = t);
                            }
                            c + i + 1 == ig
                              ? (ig--, le(a, l, h))
                              : Rt(a, l, c, h),
                              (n = !0),
                              (a = d[s]);
                          }
                          K(e[s]);
                        }
                      if (!n) {
                        var b = a[iw];
                        b ? (ic[c + i] = b) : Rt(a, Object.keys(e), c, 0);
                      }
                    }
                  : function (e) {
                      var t,
                        n =
                          o.transitions ||
                          (o.transitions = Object.create(null)),
                        i = 0;
                      for (var a in e)
                        ("function" != typeof e.hasOwnProperty ||
                          e.hasOwnProperty(a)) &&
                          ((t = n[a]) ||
                            ((t = n[a] = Object.create(null)), i++),
                          (n = t));
                      var c = n[iw];
                      for (var s in (c
                        ? c >= 96 && g
                          ? ((ic[ig++] = (31 & (c -= 96)) + 96),
                            (ic[ig++] = c >> 5))
                          : (ic[ig++] = c)
                        : le(n, n.__keys__ || Object.keys(e), i),
                      e))
                        ("function" != typeof e.hasOwnProperty ||
                          e.hasOwnProperty(s)) &&
                          K(e[s]);
                    },
              I = "function" == typeof n.useRecords && n.useRecords,
              E = I
                ? function (e) {
                    I(e) ? j(e) : S(e);
                  }
                : j,
              re = function (e) {
                if (e > 16777216) {
                  if (e - i > iv)
                    throw Error(
                      "Packed buffer would be larger than maximum buffer size"
                    );
                  t = Math.min(
                    iv,
                    4096 *
                      Math.round(
                        Math.max((e - i) * (e > 67108864 ? 1.25 : 2), 4194304) /
                          4096
                      )
                  );
                } else
                  t = ((Math.max((e - i) << 2, ic.length - 1) >> 12) + 1) << 12;
                var t,
                  n = new i_(t);
                return (
                  (is =
                    n.dataView || (n.dataView = new DataView(n.buffer, 0, t))),
                  (e = Math.min(e, ic.length)),
                  ic.copy ? ic.copy(n, 0, i, e) : n.set(ic.slice(i, e)),
                  (ig -= i),
                  (i = 0),
                  (il = n.length - 10),
                  (ic = n)
                );
              },
              le = function (e, t, i) {
                var c = o.nextId;
                c || (c = 64),
                  c < b && n.shouldShareStructure && !n.shouldShareStructure(t)
                    ? ((c = o.nextOwnId) < w || (c = b), (o.nextOwnId = c + 1))
                    : (c >= w && (c = b), (o.nextId = c + 1));
                var s = (t.highByte = c >= 96 && g ? (c - 96) >> 5 : -1);
                (e[iw] = c),
                  (e.__keys__ = t),
                  (o[c - 64] = t),
                  c < b
                    ? ((t.isShared = !0),
                      (o.sharedLength = c - 63),
                      (a = !0),
                      s >= 0
                        ? ((ic[ig++] = (31 & c) + 96), (ic[ig++] = s))
                        : (ic[ig++] = c))
                    : (s >= 0
                        ? ((ic[ig++] = 213),
                          (ic[ig++] = 114),
                          (ic[ig++] = (31 & c) + 96),
                          (ic[ig++] = s))
                        : ((ic[ig++] = 212), (ic[ig++] = 114), (ic[ig++] = c)),
                      i && (k += x * i),
                      m.length >= v && (m.shift()[iw] = 0),
                      m.push(e),
                      K(t));
              },
              Rt = function (e, t, n, a) {
                var o = ic,
                  c = ig,
                  s = il,
                  l = i;
                (ig = 0),
                  (i = 0),
                  (ic = iu) || (iu = ic = new i_(8192)),
                  (il = ic.length - 10),
                  le(e, t, a),
                  (iu = ic);
                var d = ig;
                if (((ic = o), (ig = c), (il = s), (i = l), d > 1)) {
                  var h = ig + d - 1;
                  h > il && re(h);
                  var _ = n + i;
                  ic.copyWithin(_ + d, _ + 1, ig),
                    ic.set(iu.slice(0, d), _),
                    (ig = h);
                } else ic[n + i] = iu[0];
              },
              Kc = function (e) {
                var t = id(
                  e,
                  ic,
                  i,
                  ig,
                  o,
                  re,
                  function (e, t, n) {
                    if (n) return (a = !0);
                    ig = t;
                    var i = ic;
                    return (
                      K(e),
                      se(),
                      i !== ic
                        ? { position: ig, targetView: is, target: ic }
                        : ig
                    );
                  },
                  (0, rE._)(n)
                );
                if (0 === t) return E(e);
                ig = t;
              };
            return (0, rL._)(n);
          }
          return (
            (0, rD._)(bc, [
              {
                key: "useBuffer",
                value: function (e) {
                  (ic = e).dataView ||
                    (ic.dataView = new DataView(
                      ic.buffer,
                      ic.byteOffset,
                      ic.byteLength
                    )),
                    (ig = 0);
                },
              },
              {
                key: "position",
                get: function () {
                  return ig;
                },
                set: function (e) {
                  ig = e;
                },
              },
              {
                key: "clearSharedData",
                value: function () {
                  this.structures && (this.structures = []),
                    this.typedStructs && (this.typedStructs = []);
                },
              },
            ]),
            bc
          );
        })(n$);
      function Li(e, t, n, i) {
        var a = e.byteLength;
        if (a + 1 < 256) {
          var o = n(4 + a),
            c = o.target,
            s = o.position;
          (c[s++] = 199), (c[s++] = a + 1);
        } else if (a + 1 < 65536) {
          var l = n(5 + a),
            c = l.target,
            s = l.position;
          (c[s++] = 200), (c[s++] = (a + 1) >> 8), (c[s++] = (a + 1) & 255);
        } else {
          var d = n(7 + a),
            c = d.target,
            s = d.position,
            h = d.targetView;
          (c[s++] = 201), h.setUint32(s, a + 1), (s += 4);
        }
        (c[s++] = 116),
          (c[s++] = t),
          e.buffer || (e = new Uint8Array(e)),
          c.set(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), s);
      }
      function Mi(e, t) {
        var n,
          i,
          a = e.byteLength;
        if (a < 256) {
          var o = t(a + 2),
            n = o.target,
            i = o.position;
          (n[i++] = 196), (n[i++] = a);
        } else if (a < 65536) {
          var c = t(a + 3),
            n = c.target,
            i = c.position;
          (n[i++] = 197), (n[i++] = a >> 8), (n[i++] = 255 & a);
        } else {
          var s = t(a + 5),
            n = s.target,
            i = s.position,
            l = s.targetView;
          (n[i++] = 198), l.setUint32(i, a), (i += 4);
        }
        n.set(e, i);
      }
      function zi(e, t, n) {
        if (ib.length > 0) {
          is.setUint32(ib.position + e, ig + n - ib.position - e),
            (ib.stringsPosition = ig - e);
          var i = ib;
          (ib = null), t(i[0]), t(i[1]);
        }
      }
      function Bt(e) {
        if (e.Class) {
          if (!e.pack && !e.write)
            throw Error("Extension has no pack or write function");
          if (e.pack && !e.type)
            throw Error(
              "Extension has no type (numeric code to identify the extension)"
            );
          io.unshift(e.Class), ia.unshift(e);
        }
        e.unpack ? (nK[e.type] = e.unpack) : (nK[e.type] = e);
      }
      (io = [
        Date,
        Set,
        Error,
        RegExp,
        ArrayBuffer,
        Object.getPrototypeOf(Uint8Array.prototype).constructor,
        ac,
      ]),
        (ia = [
          (0, rA._)({}, "pack", function (e, t, n) {
            var i = e.getTime() / 1e3;
            if (
              (this.useTimestamp32 || 0 === e.getMilliseconds()) &&
              i >= 0 &&
              i < 4294967296
            ) {
              var a = t(6),
                o = a.target,
                c = a.targetView,
                s = a.position;
              (o[s++] = 214), (o[s++] = 255), c.setUint32(s, i);
            } else if (i > 0 && i < 4294967296) {
              var l = t(10),
                d = l.target,
                h = l.targetView,
                _ = l.position;
              (d[_++] = 215),
                (d[_++] = 255),
                h.setUint32(
                  _,
                  4e6 * e.getMilliseconds() + ((i / 1e3 / 4294967296) >> 0)
                ),
                h.setUint32(_ + 4, i);
            } else if (isNaN(i)) {
              if (this.onInvalidDate) return t(0), n(this.onInvalidDate());
              var v = t(3),
                g = v.target,
                b = (v.targetView, v.position);
              (g[b++] = 212), (g[b++] = 255), (g[b++] = 255);
            } else {
              var w = t(15),
                m = w.target,
                k = w.targetView,
                x = w.position;
              (m[x++] = 199),
                (m[x++] = 12),
                (m[x++] = 255),
                k.setUint32(x, 1e6 * e.getMilliseconds()),
                k.setBigInt64(x + 4, BigInt(Math.floor(i)));
            }
          }),
          {
            pack: function (e, t, n) {
              if (this.setAsEmptyObject) return t(0), n({});
              var i = Array.from(e),
                a = t(this.moreTypes ? 3 : 0),
                o = a.target,
                c = a.position;
              this.moreTypes && ((o[c++] = 212), (o[c++] = 115), (o[c++] = 0)),
                n(i);
            },
          },
          {
            pack: function (e, t, n) {
              var i = t(this.moreTypes ? 3 : 0),
                a = i.target,
                o = i.position;
              this.moreTypes && ((a[o++] = 212), (a[o++] = 101), (a[o++] = 0)),
                n([e.name, e.message, e.cause]);
            },
          },
          {
            pack: function (e, t, n) {
              var i = t(this.moreTypes ? 3 : 0),
                a = i.target,
                o = i.position;
              this.moreTypes && ((a[o++] = 212), (a[o++] = 120), (a[o++] = 0)),
                n([e.source, e.flags]);
            },
          },
          {
            pack: function (e, t) {
              this.moreTypes
                ? Li(e, 16, t)
                : Mi(ih ? rJ.from(e) : new Uint8Array(e), t);
            },
          },
          {
            pack: function (e, t) {
              var n = e.constructor;
              n !== ip && this.moreTypes
                ? Li(e, n6.indexOf(n.name), t)
                : Mi(e, t);
            },
          },
          {
            pack: function (e, t) {
              var n = t(1);
              n.target[n.position] = 193;
            },
          },
        ]);
      var ik = new im({ useRecords: !1 });
      ik.pack, ik.pack;
      var ix = 512,
        iO = 1024,
        iS = 2048,
        iA = new im({ structuredClone: !0 });
      Bt({
        Class: rG.prototype.constructor,
        type: 1,
        write: function (e) {
          return (0, rT._)({}, e);
        },
        read: function (e) {
          return Object.setPrototypeOf(e, rG.prototype), e;
        },
      }),
        Bt({
          Class: r1.prototype.constructor,
          type: 2,
          write: function (e) {
            return (0, rF._)(e);
          },
          read: function (e) {
            return Object.setPrototypeOf(e, r1.prototype), e;
          },
        }),
        Bt({
          Class: r0.prototype.constructor,
          type: 3,
          write: function (e) {
            return (0, rF._)(e);
          },
          read: function (e) {
            return Object.setPrototypeOf(e, r0.prototype), e;
          },
        }),
        Bt({
          Class: nu.prototype.constructor,
          type: 4,
          write: function (e) {
            return e.id;
          },
          read: function (e) {
            return new nu(e);
          },
        }),
        Bt({
          Class: ns.prototype.constructor,
          type: 5,
          write: function (e) {
            return e.data;
          },
          read: function (e) {
            return new ns(e);
          },
        }),
        Bt({
          Class: r2.prototype.constructor,
          type: 6,
          write: function (e) {
            return (0, rT._)({}, e);
          },
          read: function (e) {
            return Object.setPrototypeOf(e, r2.prototype), e;
          },
        }),
        (i = er || (er = {})),
        (a = function (e) {
          return iA.pack(e);
        }),
        (i.serialize = a),
        (i.deserialize = function (e) {
          return iA.unpack(e);
        }),
        (i.checksum = function (e) {
          return (function (e) {
            var t = 0;
            if (0 === e.length) return t;
            for (var n = 0; n < e.length; n++)
              (t = (t << 5) - t + e[n]), (t &= t);
            return t;
          })(
            a(
              (function kn(e) {
                if (di(e)) return e;
                if (Array.isArray(e)) return e.map(kn);
                if ("object" != typeof e || null === e) return e;
                var t = {},
                  n = !0,
                  i = !1,
                  a = void 0;
                try {
                  for (
                    var o, c = Object.keys(e).sort()[Symbol.iterator]();
                    !(n = (o = c.next()).done);
                    n = !0
                  ) {
                    var s = o.value;
                    t[s] = kn(e[s]);
                  }
                } catch (e) {
                  (i = !0), (a = e);
                } finally {
                  try {
                    n || null == c.return || c.return();
                  } finally {
                    if (i) throw a;
                  }
                }
                return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), t;
              })(e)
            )
          ).toString();
        });
      var ij = Array(128).fill(void 0);
      ij.push(void 0, null, !0, !1);
      var iI = 0,
        iE = null;
      function Vt() {
        return (
          (null === iE || 0 === iE.byteLength) &&
            (iE = new Uint8Array(en.memory.buffer)),
          iE
        );
      }
      var iC =
          ("undefined" == typeof TextEncoder
            ? "undefined"
            : (0, rz._)(TextEncoder)) < "u"
            ? new TextEncoder("utf-8")
            : {
                encode: function () {
                  throw Error("TextEncoder not available");
                },
              },
        iP =
          "function" == typeof iC.encodeInto
            ? function (e, t) {
                return iC.encodeInto(e, t);
              }
            : function (e, t) {
                var n = iC.encode(e);
                return t.set(n), { read: e.length, written: n.length };
              };
      function Pe(e, t, n) {
        if (void 0 === n) {
          var i = iC.encode(e),
            a = t(i.length, 1) >>> 0;
          return (
            Vt()
              .subarray(a, a + i.length)
              .set(i),
            (iI = i.length),
            a
          );
        }
        for (var o = e.length, c = t(o, 1) >>> 0, s = Vt(), l = 0; l < o; l++) {
          var d = e.charCodeAt(l);
          if (d > 127) break;
          s[c + l] = d;
        }
        if (l !== o) {
          0 !== l && (e = e.slice(l)),
            (c = n(c, o, (o = l + 3 * e.length), 1) >>> 0);
          var h = iP(e, Vt().subarray(c + l, c + o));
          (l += h.written), (c = n(c, o, l, 1) >>> 0);
        }
        return (iI = l), c;
      }
      var iD = null;
      function J() {
        return (
          (null === iD ||
            !0 === iD.buffer.detached ||
            (void 0 === iD.buffer.detached &&
              iD.buffer !== en.memory.buffer)) &&
            (iD = new DataView(en.memory.buffer)),
          iD
        );
      }
      var iM = ij.length;
      function p(e) {
        iM === ij.length && ij.push(ij.length + 1);
        var t = iM;
        return (iM = ij[t]), (ij[t] = e), t;
      }
      function ne(e, t) {
        try {
          return e.apply(this, t);
        } catch (e) {
          en.__wbindgen_export_2(p(e));
        }
      }
      var iT = null;
      function Ni(e, t) {
        return (
          (e >>>= 0),
          ((null === iT || 0 === iT.byteLength) &&
            (iT = new Float32Array(en.memory.buffer)),
          iT).subarray(e / 4, e / 4 + t)
        );
      }
      function T(e) {
        return null == e;
      }
      var iU =
        ("undefined" == typeof TextDecoder
          ? "undefined"
          : (0, rz._)(TextDecoder)) < "u"
          ? new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })
          : {
              decode: function () {
                throw Error("TextDecoder not available");
              },
            };
      function we(e, t) {
        return (e >>>= 0), iU.decode(Vt().subarray(e, e + t));
      }
      function yc(e, t) {
        return (e >>>= 0), Vt().subarray(e / 1, e / 1 + t);
      }
      function hn(e) {
        var t = ij[e];
        return e < 132 || ((ij[e] = iM), (iM = e)), t;
      }
      ("undefined" == typeof TextDecoder
        ? "undefined"
        : (0, rz._)(TextDecoder)) < "u" && iU.decode();
      var iB =
        ("undefined" == typeof FinalizationRegistry
          ? "undefined"
          : (0, rz._)(FinalizationRegistry)) > "u"
          ? { register: function () {}, unregister: function () {} }
          : new FinalizationRegistry(function (e) {
              en.__wbindgen_export_4.get(e.dtor)(e.a, e.b);
            });
      function Ea(e, t, n) {
        en.__wbindgen_export_5(e, t, p(n));
      }
      var iL = ["same-origin", "no-cors", "cors", "navigate"],
        iR =
          ("undefined" == typeof FinalizationRegistry
            ? "undefined"
            : (0, rz._)(FinalizationRegistry)) > "u"
            ? { register: function () {}, unregister: function () {} }
            : new FinalizationRegistry(function (e) {
                return en.__wbg_engine_free(e >>> 0, 1);
              }),
        iN = (function () {
          function Pa(e, t) {
            (0, rP._)(this, Pa);
            var n = en.engine_new_from_canvas(p(e), p(t));
            return (
              (this.__wbg_ptr = n >>> 0),
              iR.register(this, this.__wbg_ptr, this),
              this
            );
          }
          return (
            (0, rD._)(Pa, [
              {
                key: "__destroy_into_raw",
                value: function () {
                  var e = this.__wbg_ptr;
                  return (this.__wbg_ptr = 0), iR.unregister(this), e;
                },
              },
              {
                key: "free",
                value: function () {
                  var e = this.__destroy_into_raw();
                  en.__wbg_engine_free(e, 0);
                },
              },
              {
                key: "reset",
                value: function (e) {
                  en.engine_reset(this.__wbg_ptr, p(e));
                },
              },
              {
                key: "resize",
                value: function (e, t) {
                  en.engine_resize(this.__wbg_ptr, p(e), t);
                },
              },
              {
                key: "onFrame",
                value: function () {
                  en.engine_onFrame(this.__wbg_ptr);
                },
              },
              {
                key: "samplePixels",
                value: function (e, t) {
                  try {
                    var n = en.__wbindgen_add_to_stack_pointer(-16);
                    en.engine_samplePixels(n, this.__wbg_ptr, p(e), p(t));
                    var i = J().getInt32(n + 0, !0),
                      a = J().getInt32(n + 4, !0),
                      o = yc(i, a).slice();
                    return en.__wbindgen_export_3(i, 1 * a, 1), o;
                  } finally {
                    en.__wbindgen_add_to_stack_pointer(16);
                  }
                },
              },
            ]),
            Pa
          );
        })();
      ("undefined" == typeof FinalizationRegistry
        ? "undefined"
        : (0, rz._)(FinalizationRegistry)) > "u" ||
        new FinalizationRegistry(function (e) {
          return en.__wbg_readonlyengine_free(e >>> 0, 1);
        });
      var iF =
          ("undefined" == typeof FinalizationRegistry
            ? "undefined"
            : (0, rz._)(FinalizationRegistry)) > "u"
            ? { register: function () {}, unregister: function () {} }
            : new FinalizationRegistry(function (e) {
                return en.__wbg_scenecontroller_free(e >>> 0, 1);
              }),
        iz = (function () {
          function Ua() {
            (0, rP._)(this, Ua);
          }
          return (
            (0, rD._)(Ua, [
              {
                key: "__destroy_into_raw",
                value: function () {
                  var e = this.__wbg_ptr;
                  return (this.__wbg_ptr = 0), iF.unregister(this), e;
                },
              },
              {
                key: "free",
                value: function () {
                  var e = this.__destroy_into_raw();
                  en.__wbg_scenecontroller_free(e, 0);
                },
              },
              {
                key: "is_play_mode",
                get: function () {
                  return (
                    0 !==
                    en.__wbg_get_scenecontroller_is_play_mode(this.__wbg_ptr)
                  );
                },
                set: function (e) {
                  en.__wbg_set_scenecontroller_is_play_mode(this.__wbg_ptr, e);
                },
              },
              {
                key: "updateCached",
                value: function () {
                  en.scenecontroller_updateCached(this.__wbg_ptr);
                },
              },
              {
                key: "onPointerDown",
                value: function (e, t) {
                  en.scenecontroller_onPointerDown(this.__wbg_ptr, p(e), t);
                },
              },
              {
                key: "onPointerUp",
                value: function (e, t) {
                  en.scenecontroller_onPointerUp(this.__wbg_ptr, p(e), t);
                },
              },
              {
                key: "onPointerMove",
                value: function (e, t) {
                  en.scenecontroller_onPointerMove(this.__wbg_ptr, p(e), t);
                },
              },
              {
                key: "start",
                value: function () {
                  en.scenecontroller_start(this.__wbg_ptr);
                },
              },
              {
                key: "present",
                value: function (e) {
                  en.scenecontroller_present(this.__wbg_ptr, T(e) ? 0 : p(e));
                },
              },
              {
                key: "stop",
                value: function () {
                  en.scenecontroller_stop(this.__wbg_ptr);
                },
              },
              {
                key: "onPointerEnter",
                value: function () {
                  en.scenecontroller_onPointerEnter(this.__wbg_ptr);
                },
              },
              {
                key: "onPointerLeave",
                value: function () {
                  en.scenecontroller_onPointerLeave(this.__wbg_ptr);
                },
              },
              {
                key: "onKeyDown",
                value: function (e) {
                  var t = Pe(e, en.__wbindgen_export_0, en.__wbindgen_export_1),
                    n = iI;
                  en.scenecontroller_onKeyDown(this.__wbg_ptr, t, n);
                },
              },
              {
                key: "onKeyUp",
                value: function (e) {
                  var t = Pe(e, en.__wbindgen_export_0, en.__wbindgen_export_1),
                    n = iI;
                  en.scenecontroller_onKeyUp(this.__wbg_ptr, t, n);
                },
              },
            ]),
            Ua
          );
        })();
      function Ra(e, t) {
        return _Ra.apply(this, arguments);
      }
      function _Ra() {
        return (_Ra = (0, rC._)(function (e, t) {
          var n, i, a;
          return (0, rW.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                if (!("function" == typeof Response && e instanceof Response))
                  return [3, 7];
                if ("function" != typeof WebAssembly.instantiateStreaming)
                  return [3, 4];
                o.label = 1;
              case 1:
                return (
                  o.trys.push([1, 3, , 4]),
                  [4, WebAssembly.instantiateStreaming(e, t)]
                );
              case 2:
              case 6:
                return [2, o.sent()];
              case 3:
                if (
                  ((n = o.sent()),
                  "application/wasm" != e.headers.get("Content-Type"))
                )
                  console.warn(
                    "`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
                    n
                  );
                else throw n;
                return [3, 4];
              case 4:
                return [4, e.arrayBuffer()];
              case 5:
                return (i = o.sent()), [4, WebAssembly.instantiate(i, t)];
              case 7:
                return [4, WebAssembly.instantiate(e, t)];
              case 8:
                return [
                  2,
                  (a = o.sent()) instanceof WebAssembly.Instance
                    ? { instance: a, module: e }
                    : a,
                ];
              case 9:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      function kc(e) {
        return _kc.apply(this, arguments);
      }
      function _kc() {
        return (_kc = (0, rC._)(function (e) {
          var t, i, a, o;
          return (0, rW.Jh)(this, function (c) {
            var s;
            switch (c.label) {
              case 0:
                if (void 0 !== en) return [2, en];
                return (
                  (void 0 === e ? "undefined" : (0, rz._)(e)) < "u" &&
                    (Object.getPrototypeOf(e) === Object.prototype
                      ? (e = e.module_or_path)
                      : console.warn(
                          "using deprecated parameters for the initialization function; pass a single object instead"
                        )),
                  (void 0 === e ? "undefined" : (0, rz._)(e)) > "u" &&
                    (e = new n.U(n(97237))),
                  ((s = {}).wbg = {}),
                  (s.wbg.__wbg_String_8f0eb39a4a4c2f66 = function (e, t) {
                    var n = Pe(
                        String(ij[t]),
                        en.__wbindgen_export_0,
                        en.__wbindgen_export_1
                      ),
                      i = iI;
                    J().setInt32(e + 4, i, !0), J().setInt32(e + 0, n, !0);
                  }),
                  (s.wbg.__wbg_activeTexture_0f19d8acfa0a14c2 = function (
                    e,
                    t
                  ) {
                    ij[e].activeTexture(t >>> 0);
                  }),
                  (s.wbg.__wbg_activeTexture_460f2e367e813fb0 = function (
                    e,
                    t
                  ) {
                    ij[e].activeTexture(t >>> 0);
                  }),
                  (s.wbg.__wbg_arrayBuffer_d1b44c4390db422f = function () {
                    return ne(function (e) {
                      return p(ij[e].arrayBuffer());
                    }, arguments);
                  }),
                  (s.wbg.__wbg_attachShader_3d4eb6af9e3e7bd1 = function (
                    e,
                    t,
                    n
                  ) {
                    ij[e].attachShader(ij[t], ij[n]);
                  }),
                  (s.wbg.__wbg_attachShader_94e758c8b5283eb2 = function (
                    e,
                    t,
                    n
                  ) {
                    ij[e].attachShader(ij[t], ij[n]);
                  }),
                  (s.wbg.__wbg_bindBuffer_309c9a6c21826cf5 = function (
                    e,
                    t,
                    n
                  ) {
                    ij[e].bindBuffer(t >>> 0, ij[n]);
                  }),
                  (s.wbg.__wbg_bindBuffer_f32f587f1c2962a7 = function (
                    e,
                    t,
                    n
                  ) {
                    ij[e].bindBuffer(t >>> 0, ij[n]);
                  }),
                  (s.wbg.__wbg_bindFramebuffer_bd02c8cc707d670f = function (
                    e,
                    t,
                    n
                  ) {
                    ij[e].bindFramebuffer(t >>> 0, ij[n]);
                  }),
                  (s.wbg.__wbg_bindFramebuffer_e48e83c0f973944d = function (
                    e,
                    t,
                    n
                  ) {
                    ij[e].bindFramebuffer(t >>> 0, ij[n]);
                  }),
                  (s.wbg.__wbg_bindRenderbuffer_53eedd88e52b4cb5 = function (
                    e,
                    t,
                    n
                  ) {
                    ij[e].bindRenderbuffer(t >>> 0, ij[n]);
                  }),
                  (s.wbg.__wbg_bindRenderbuffer_55e205fecfddbb8c = function (
                    e,
                    t,
                    n
                  ) {
                    ij[e].bindRenderbuffer(t >>> 0, ij[n]);
                  }),
                  (s.wbg.__wbg_bindTexture_a6e795697f49ebd1 = function (
                    e,
                    t,
                    n
                  ) {
                    ij[e].bindTexture(t >>> 0, ij[n]);
                  }),
                  (s.wbg.__wbg_bindTexture_bc8eb316247f739d = function (
                    e,
                    t,
                    n
                  ) {
                    ij[e].bindTexture(t >>> 0, ij[n]);
                  }),
                  (s.wbg.__wbg_bindVertexArrayOES_da8e7059b789629e = function (
                    e,
                    t
                  ) {
                    ij[e].bindVertexArrayOES(ij[t]);
                  }),
                  (s.wbg.__wbg_bindVertexArray_6b4b88581064b71f = function (
                    e,
                    t
                  ) {
                    ij[e].bindVertexArray(ij[t]);
                  }),
                  (s.wbg.__wbg_blendEquation_c23d111ad6d268ff = function (
                    e,
                    t
                  ) {
                    ij[e].blendEquation(t >>> 0);
                  }),
                  (s.wbg.__wbg_blendEquation_cec7bc41f3e5704c = function (
                    e,
                    t
                  ) {
                    ij[e].blendEquation(t >>> 0);
                  }),
                  (s.wbg.__wbg_blendFunc_9454884a3cfd2911 = function (e, t, n) {
                    ij[e].blendFunc(t >>> 0, n >>> 0);
                  }),
                  (s.wbg.__wbg_blendFunc_c3b74be5a39c665f = function (e, t, n) {
                    ij[e].blendFunc(t >>> 0, n >>> 0);
                  }),
                  (s.wbg.__wbg_blitFramebuffer_7303bdff77cfe967 = function (
                    e,
                    t,
                    n,
                    i,
                    a,
                    o,
                    c,
                    s,
                    l,
                    d,
                    h
                  ) {
                    ij[e].blitFramebuffer(
                      t,
                      n,
                      i,
                      a,
                      o,
                      c,
                      s,
                      l,
                      d >>> 0,
                      h >>> 0
                    );
                  }),
                  (s.wbg.__wbg_bufferData_463178757784fcac = function (
                    e,
                    t,
                    n,
                    i
                  ) {
                    ij[e].bufferData(t >>> 0, n, i >>> 0);
                  }),
                  (s.wbg.__wbg_bufferData_d99b6b4eb5283f20 = function (
                    e,
                    t,
                    n,
                    i
                  ) {
                    ij[e].bufferData(t >>> 0, n, i >>> 0);
                  }),
                  (s.wbg.__wbg_bufferSubData_4e973eefe9236d04 = function (
                    e,
                    t,
                    n,
                    i
                  ) {
                    ij[e].bufferSubData(t >>> 0, n, ij[i]);
                  }),
                  (s.wbg.__wbg_bufferSubData_dcd4d16031a60345 = function (
                    e,
                    t,
                    n,
                    i
                  ) {
                    ij[e].bufferSubData(t >>> 0, n, ij[i]);
                  }),
                  (s.wbg.__wbg_buffer_609cc3eee51ed158 = function (e) {
                    return p(ij[e].buffer);
                  }),
                  (s.wbg.__wbg_call_672a4d21634d4a24 = function () {
                    return ne(function (e, t) {
                      return p(ij[e].call(ij[t]));
                    }, arguments);
                  }),
                  (s.wbg.__wbg_clearBufferfv_65ea413f7f2554a2 = function (
                    e,
                    t,
                    n,
                    i,
                    a
                  ) {
                    ij[e].clearBufferfv(t >>> 0, n, Ni(i, a));
                  }),
                  (s.wbg.__wbg_compileShader_0ad770bbdbb9de21 = function (
                    e,
                    t
                  ) {
                    ij[e].compileShader(ij[t]);
                  }),
                  (s.wbg.__wbg_compileShader_2307c9d370717dd5 = function (
                    e,
                    t
                  ) {
                    ij[e].compileShader(ij[t]);
                  }),
                  (s.wbg.__wbg_createBuffer_7a9ec3d654073660 = function (e) {
                    var t = ij[e].createBuffer();
                    return T(t) ? 0 : p(t);
                  }),
                  (s.wbg.__wbg_createBuffer_9886e84a67b68c89 = function (e) {
                    var t = ij[e].createBuffer();
                    return T(t) ? 0 : p(t);
                  }),
                  (s.wbg.__wbg_createFramebuffer_7824f69bba778885 = function (
                    e
                  ) {
                    var t = ij[e].createFramebuffer();
                    return T(t) ? 0 : p(t);
                  }),
                  (s.wbg.__wbg_createFramebuffer_c8d70ebc4858051e = function (
                    e
                  ) {
                    var t = ij[e].createFramebuffer();
                    return T(t) ? 0 : p(t);
                  }),
                  (s.wbg.__wbg_createProgram_8ff56c485f3233d0 = function (e) {
                    var t = ij[e].createProgram();
                    return T(t) ? 0 : p(t);
                  }),
                  (s.wbg.__wbg_createProgram_da203074cafb1038 = function (e) {
                    var t = ij[e].createProgram();
                    return T(t) ? 0 : p(t);
                  }),
                  (s.wbg.__wbg_createRenderbuffer_d88aa9403faa38ea = function (
                    e
                  ) {
                    var t = ij[e].createRenderbuffer();
                    return T(t) ? 0 : p(t);
                  }),
                  (s.wbg.__wbg_createRenderbuffer_fd347ae14f262eaa = function (
                    e
                  ) {
                    var t = ij[e].createRenderbuffer();
                    return T(t) ? 0 : p(t);
                  }),
                  (s.wbg.__wbg_createShader_4a256a8cc9c1ce4f = function (e, t) {
                    var n = ij[e].createShader(t >>> 0);
                    return T(n) ? 0 : p(n);
                  }),
                  (s.wbg.__wbg_createShader_983150fb1243ee56 = function (e, t) {
                    var n = ij[e].createShader(t >>> 0);
                    return T(n) ? 0 : p(n);
                  }),
                  (s.wbg.__wbg_createTexture_9c536c79b635fdef = function (e) {
                    var t = ij[e].createTexture();
                    return T(t) ? 0 : p(t);
                  }),
                  (s.wbg.__wbg_createTexture_bfaa54c0cd22e367 = function (e) {
                    var t = ij[e].createTexture();
                    return T(t) ? 0 : p(t);
                  }),
                  (s.wbg.__wbg_createVertexArrayOES_991b44f100f93329 =
                    function (e) {
                      var t = ij[e].createVertexArrayOES();
                      return T(t) ? 0 : p(t);
                    }),
                  (s.wbg.__wbg_createVertexArray_e435029ae2660efd = function (
                    e
                  ) {
                    var t = ij[e].createVertexArray();
                    return T(t) ? 0 : p(t);
                  }),
                  (s.wbg.__wbg_debug_3cb59063b29f58c1 = function (e) {
                    console.debug(ij[e]);
                  }),
                  (s.wbg.__wbg_deleteBuffer_7ed96e1bf7c02e87 = function (e, t) {
                    ij[e].deleteBuffer(ij[t]);
                  }),
                  (s.wbg.__wbg_deleteBuffer_a7822433fc95dfb8 = function (e, t) {
                    ij[e].deleteBuffer(ij[t]);
                  }),
                  (s.wbg.__wbg_deleteFramebuffer_66853fb7101488cb = function (
                    e,
                    t
                  ) {
                    ij[e].deleteFramebuffer(ij[t]);
                  }),
                  (s.wbg.__wbg_deleteFramebuffer_cd3285ee5a702a7a = function (
                    e,
                    t
                  ) {
                    ij[e].deleteFramebuffer(ij[t]);
                  }),
                  (s.wbg.__wbg_deleteProgram_3fa626bbc0001eb7 = function (
                    e,
                    t
                  ) {
                    ij[e].deleteProgram(ij[t]);
                  }),
                  (s.wbg.__wbg_deleteProgram_71a133c6d053e272 = function (
                    e,
                    t
                  ) {
                    ij[e].deleteProgram(ij[t]);
                  }),
                  (s.wbg.__wbg_deleteRenderbuffer_59f4369653485031 = function (
                    e,
                    t
                  ) {
                    ij[e].deleteRenderbuffer(ij[t]);
                  }),
                  (s.wbg.__wbg_deleteRenderbuffer_8808192853211567 = function (
                    e,
                    t
                  ) {
                    ij[e].deleteRenderbuffer(ij[t]);
                  }),
                  (s.wbg.__wbg_deleteShader_8d42f169deda58ac = function (e, t) {
                    ij[e].deleteShader(ij[t]);
                  }),
                  (s.wbg.__wbg_deleteShader_c65a44796c5004d8 = function (e, t) {
                    ij[e].deleteShader(ij[t]);
                  }),
                  (s.wbg.__wbg_deleteTexture_a30f5ca0163c4110 = function (
                    e,
                    t
                  ) {
                    ij[e].deleteTexture(ij[t]);
                  }),
                  (s.wbg.__wbg_deleteTexture_bb82c9fec34372ba = function (
                    e,
                    t
                  ) {
                    ij[e].deleteTexture(ij[t]);
                  }),
                  (s.wbg.__wbg_deleteVertexArrayOES_1ee7a06a4b23ec8c =
                    function (e, t) {
                      ij[e].deleteVertexArrayOES(ij[t]);
                    }),
                  (s.wbg.__wbg_deleteVertexArray_77fe73664a3332ae = function (
                    e,
                    t
                  ) {
                    ij[e].deleteVertexArray(ij[t]);
                  }),
                  (s.wbg.__wbg_disable_2702df5b5da5dd21 = function (e, t) {
                    ij[e].disable(t >>> 0);
                  }),
                  (s.wbg.__wbg_disable_8b53998501a7a85b = function (e, t) {
                    ij[e].disable(t >>> 0);
                  }),
                  (s.wbg.__wbg_done_769e5ede4b31c67b = function (e) {
                    return ij[e].done;
                  }),
                  (s.wbg.__wbg_drawArrays_6acaa2669c105f3a = function (
                    e,
                    t,
                    n,
                    i
                  ) {
                    ij[e].drawArrays(t >>> 0, n, i);
                  }),
                  (s.wbg.__wbg_drawArrays_6d29ea2ebc0c72a2 = function (
                    e,
                    t,
                    n,
                    i
                  ) {
                    ij[e].drawArrays(t >>> 0, n, i);
                  }),
                  (s.wbg.__wbg_enableVertexAttribArray_607be07574298e5e =
                    function (e, t) {
                      ij[e].enableVertexAttribArray(t >>> 0);
                    }),
                  (s.wbg.__wbg_enableVertexAttribArray_93c3d406a41ad6c7 =
                    function (e, t) {
                      ij[e].enableVertexAttribArray(t >>> 0);
                    }),
                  (s.wbg.__wbg_enable_51114837e05ee280 = function (e, t) {
                    ij[e].enable(t >>> 0);
                  }),
                  (s.wbg.__wbg_enable_d183fef39258803f = function (e, t) {
                    ij[e].enable(t >>> 0);
                  }),
                  (s.wbg.__wbg_entries_3265d4158b33e5dc = function (e) {
                    return p(Object.entries(ij[e]));
                  }),
                  (s.wbg.__wbg_error_524f506f44df1645 = function (e) {
                    console.error(ij[e]);
                  }),
                  (s.wbg.__wbg_error_7534b8e9a36f1ab4 = function (e, t) {
                    var n, i;
                    try {
                      (n = e), (i = t), console.error(we(e, t));
                    } finally {
                      en.__wbindgen_export_3(n, i, 1);
                    }
                  }),
                  (s.wbg.__wbg_fetch_b7bf320f681242d2 = function (e, t) {
                    return p(ij[e].fetch(ij[t]));
                  }),
                  (s.wbg.__wbg_framebufferRenderbuffer_2fdd12e89ad81eb9 =
                    function (e, t, n, i, a) {
                      ij[e].framebufferRenderbuffer(
                        t >>> 0,
                        n >>> 0,
                        i >>> 0,
                        ij[a]
                      );
                    }),
                  (s.wbg.__wbg_framebufferRenderbuffer_8b88592753b54715 =
                    function (e, t, n, i, a) {
                      ij[e].framebufferRenderbuffer(
                        t >>> 0,
                        n >>> 0,
                        i >>> 0,
                        ij[a]
                      );
                    }),
                  (s.wbg.__wbg_framebufferTexture2D_81a565732bd5d8fe =
                    function (e, t, n, i, a, o) {
                      ij[e].framebufferTexture2D(
                        t >>> 0,
                        n >>> 0,
                        i >>> 0,
                        ij[a],
                        o
                      );
                    }),
                  (s.wbg.__wbg_framebufferTexture2D_ed855d0b097c557a =
                    function (e, t, n, i, a, o) {
                      ij[e].framebufferTexture2D(
                        t >>> 0,
                        n >>> 0,
                        i >>> 0,
                        ij[a],
                        o
                      );
                    }),
                  (s.wbg.__wbg_generateMipmap_13d3d6406de35b14 = function (
                    e,
                    t
                  ) {
                    ij[e].generateMipmap(t >>> 0);
                  }),
                  (s.wbg.__wbg_generateMipmap_e3b21a330b500089 = function (
                    e,
                    t
                  ) {
                    ij[e].generateMipmap(t >>> 0);
                  }),
                  (s.wbg.__wbg_getActiveUniform_3c49cb0b185d71e0 = function (
                    e,
                    t,
                    n
                  ) {
                    var i = ij[e].getActiveUniform(ij[t], n >>> 0);
                    return T(i) ? 0 : p(i);
                  }),
                  (s.wbg.__wbg_getActiveUniform_999b2093d93c3d0e = function (
                    e,
                    t,
                    n
                  ) {
                    var i = ij[e].getActiveUniform(ij[t], n >>> 0);
                    return T(i) ? 0 : p(i);
                  }),
                  (s.wbg.__wbg_getContext_fc19859df6331073 = function () {
                    return ne(function (e, t, n, i) {
                      var a = ij[e].getContext(we(t, n), ij[i]);
                      return T(a) ? 0 : p(a);
                    }, arguments);
                  }),
                  (s.wbg.__wbg_getExtension_ff0fb1398bcf28c3 = function () {
                    return ne(function (e, t, n) {
                      var i = ij[e].getExtension(we(t, n));
                      return T(i) ? 0 : p(i);
                    }, arguments);
                  }),
                  (s.wbg.__wbg_getParameter_e3429f024018310f = function () {
                    return ne(function (e, t) {
                      return p(ij[e].getParameter(t >>> 0));
                    }, arguments);
                  }),
                  (s.wbg.__wbg_getProgramInfoLog_631c180b1b21c8ed = function (
                    e,
                    t,
                    n
                  ) {
                    var i = ij[t].getProgramInfoLog(ij[n]),
                      a = T(i)
                        ? 0
                        : Pe(i, en.__wbindgen_export_0, en.__wbindgen_export_1),
                      o = iI;
                    J().setInt32(e + 4, o, !0), J().setInt32(e + 0, a, !0);
                  }),
                  (s.wbg.__wbg_getProgramInfoLog_a998105a680059db = function (
                    e,
                    t,
                    n
                  ) {
                    var i = ij[t].getProgramInfoLog(ij[n]),
                      a = T(i)
                        ? 0
                        : Pe(i, en.__wbindgen_export_0, en.__wbindgen_export_1),
                      o = iI;
                    J().setInt32(e + 4, o, !0), J().setInt32(e + 0, a, !0);
                  }),
                  (s.wbg.__wbg_getProgramParameter_0c411f0cd4185c5b = function (
                    e,
                    t,
                    n
                  ) {
                    return p(ij[e].getProgramParameter(ij[t], n >>> 0));
                  }),
                  (s.wbg.__wbg_getProgramParameter_360f95ff07ac068d = function (
                    e,
                    t,
                    n
                  ) {
                    return p(ij[e].getProgramParameter(ij[t], n >>> 0));
                  }),
                  (s.wbg.__wbg_getRandomValues_0fd9e2d73ca5f48f = function () {
                    return ne(function (e, t) {
                      globalThis.crypto.getRandomValues(yc(e, t));
                    }, arguments);
                  }),
                  (s.wbg.__wbg_getShaderInfoLog_7e7b38fb910ec534 = function (
                    e,
                    t,
                    n
                  ) {
                    var i = ij[t].getShaderInfoLog(ij[n]),
                      a = T(i)
                        ? 0
                        : Pe(i, en.__wbindgen_export_0, en.__wbindgen_export_1),
                      o = iI;
                    J().setInt32(e + 4, o, !0), J().setInt32(e + 0, a, !0);
                  }),
                  (s.wbg.__wbg_getShaderInfoLog_f59c3112acc6e039 = function (
                    e,
                    t,
                    n
                  ) {
                    var i = ij[t].getShaderInfoLog(ij[n]),
                      a = T(i)
                        ? 0
                        : Pe(i, en.__wbindgen_export_0, en.__wbindgen_export_1),
                      o = iI;
                    J().setInt32(e + 4, o, !0), J().setInt32(e + 0, a, !0);
                  }),
                  (s.wbg.__wbg_getShaderParameter_511b5f929074fa31 = function (
                    e,
                    t,
                    n
                  ) {
                    return p(ij[e].getShaderParameter(ij[t], n >>> 0));
                  }),
                  (s.wbg.__wbg_getShaderParameter_6dbe0b8558dc41fd = function (
                    e,
                    t,
                    n
                  ) {
                    return p(ij[e].getShaderParameter(ij[t], n >>> 0));
                  }),
                  (s.wbg.__wbg_getSupportedExtensions_8c007dbb54905635 =
                    function (e) {
                      var t = ij[e].getSupportedExtensions();
                      return T(t) ? 0 : p(t);
                    }),
                  (s.wbg.__wbg_getUniformLocation_657a2b6d102bd126 = function (
                    e,
                    t,
                    n,
                    i
                  ) {
                    var a = ij[e].getUniformLocation(ij[t], we(n, i));
                    return T(a) ? 0 : p(a);
                  }),
                  (s.wbg.__wbg_getUniformLocation_838363001c74dc21 = function (
                    e,
                    t,
                    n,
                    i
                  ) {
                    var a = ij[e].getUniformLocation(ij[t], we(n, i));
                    return T(a) ? 0 : p(a);
                  }),
                  (s.wbg.__wbg_get_67b2ba62fc30de12 = function () {
                    return ne(function (e, t) {
                      return p(Reflect.get(ij[e], ij[t]));
                    }, arguments);
                  }),
                  (s.wbg.__wbg_get_b9b93047fe3cf45b = function (e, t) {
                    return p(ij[e][t >>> 0]);
                  }),
                  (s.wbg.__wbg_getwithrefkey_1dc361bd10053bfe = function (
                    e,
                    t
                  ) {
                    return p(ij[e][ij[t]]);
                  }),
                  (s.wbg.__wbg_info_3daf2e093e091b66 = function (e) {
                    console.info(ij[e]);
                  }),
                  (s.wbg.__wbg_instanceof_ArrayBuffer_e14585432e3737fc =
                    function (e) {
                      var t;
                      try {
                        t = ij[e] instanceof ArrayBuffer;
                      } catch (e) {
                        t = !1;
                      }
                      return t;
                    }),
                  (s.wbg.__wbg_instanceof_ImageBitmap_d093d508663e313d =
                    function (e) {
                      var t;
                      try {
                        t = ij[e] instanceof ImageBitmap;
                      } catch (e) {
                        t = !1;
                      }
                      return t;
                    }),
                  (s.wbg.__wbg_instanceof_Map_f3469ce2244d2430 = function (e) {
                    var t;
                    try {
                      t = ij[e] instanceof Map;
                    } catch (e) {
                      t = !1;
                    }
                    return t;
                  }),
                  (s.wbg.__wbg_instanceof_Response_f2cc20d9f7dfd644 = function (
                    e
                  ) {
                    var t;
                    try {
                      t = ij[e] instanceof Response;
                    } catch (e) {
                      t = !1;
                    }
                    return t;
                  }),
                  (s.wbg.__wbg_instanceof_Uint8Array_17156bcf118086a9 =
                    function (e) {
                      var t;
                      try {
                        t = ij[e] instanceof Uint8Array;
                      } catch (e) {
                        t = !1;
                      }
                      return t;
                    }),
                  (s.wbg.__wbg_instanceof_WebGl2RenderingContext_2b6045efeb76568d =
                    function (e) {
                      var t;
                      try {
                        t = ij[e] instanceof WebGL2RenderingContext;
                      } catch (e) {
                        t = !1;
                      }
                      return t;
                    }),
                  (s.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function (
                    e
                  ) {
                    var t;
                    try {
                      t = ij[e] instanceof Window;
                    } catch (e) {
                      t = !1;
                    }
                    return t;
                  }),
                  (s.wbg.__wbg_invalidateFramebuffer_83f643d2a4936456 =
                    function () {
                      return ne(function (e, t, n) {
                        ij[e].invalidateFramebuffer(t >>> 0, ij[n]);
                      }, arguments);
                    }),
                  (s.wbg.__wbg_isArray_a1eab7e0d067391b = function (e) {
                    return Array.isArray(ij[e]);
                  }),
                  (s.wbg.__wbg_isSafeInteger_343e2beeeece1bb0 = function (e) {
                    return Number.isSafeInteger(ij[e]);
                  }),
                  (s.wbg.__wbg_iterator_9a24c88df860dc65 = function () {
                    return p(Symbol.iterator);
                  }),
                  (s.wbg.__wbg_length_a446193dc22c12f8 = function (e) {
                    return ij[e].length;
                  }),
                  (s.wbg.__wbg_length_e2d2a49132c1b256 = function (e) {
                    return ij[e].length;
                  }),
                  (s.wbg.__wbg_linkProgram_067ee06739bdde81 = function (e, t) {
                    ij[e].linkProgram(ij[t]);
                  }),
                  (s.wbg.__wbg_linkProgram_e002979fe36e5b2a = function (e, t) {
                    ij[e].linkProgram(ij[t]);
                  }),
                  (s.wbg.__wbg_loadImageFromBytes_71f8ead60be139bf = function (
                    e
                  ) {
                    var t, n, i;
                    return p(
                      ((t = hn(e)),
                      (n = new Blob([t])),
                      (i = URL.createObjectURL(n)),
                      createImageBitmap(n).finally(function () {
                        URL.revokeObjectURL(i);
                      }))
                    );
                  }),
                  (s.wbg.__wbg_log_c222819a41e063d3 = function (e) {
                    console.log(ij[e]);
                  }),
                  (s.wbg.__wbg_name_f5089a8a6c7a983a = function (e, t) {
                    var n = Pe(
                        ij[t].name,
                        en.__wbindgen_export_0,
                        en.__wbindgen_export_1
                      ),
                      i = iI;
                    J().setInt32(e + 4, i, !0), J().setInt32(e + 0, n, !0);
                  }),
                  (s.wbg.__wbg_new_405e22f390576ce2 = function () {
                    return p({});
                  }),
                  (s.wbg.__wbg_new_78feb108b6472713 = function () {
                    return p([]);
                  }),
                  (s.wbg.__wbg_new_8a6f238a6ece86ea = function () {
                    return p(Error());
                  }),
                  (s.wbg.__wbg_new_a12002a7f91c75be = function (e) {
                    return p(new Uint8Array(ij[e]));
                  }),
                  (s.wbg.__wbg_newnoargs_105ed471475aaf50 = function (e, t) {
                    return p(Function(we(e, t)));
                  }),
                  (s.wbg.__wbg_newwithbyteoffsetandlength_840f3c038856d4e9 =
                    function (e, t, n) {
                      return p(new Int8Array(ij[e], t >>> 0, n >>> 0));
                    }),
                  (s.wbg.__wbg_newwithbyteoffsetandlength_999332a180064b59 =
                    function (e, t, n) {
                      return p(new Int32Array(ij[e], t >>> 0, n >>> 0));
                    }),
                  (s.wbg.__wbg_newwithbyteoffsetandlength_d4a86622320ea258 =
                    function (e, t, n) {
                      return p(new Uint16Array(ij[e], t >>> 0, n >>> 0));
                    }),
                  (s.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a =
                    function (e, t, n) {
                      return p(new Uint8Array(ij[e], t >>> 0, n >>> 0));
                    }),
                  (s.wbg.__wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354 =
                    function (e, t, n) {
                      return p(new Float32Array(ij[e], t >>> 0, n >>> 0));
                    }),
                  (s.wbg.__wbg_newwithbyteoffsetandlength_f1dead44d1fc7212 =
                    function (e, t, n) {
                      return p(new Uint32Array(ij[e], t >>> 0, n >>> 0));
                    }),
                  (s.wbg.__wbg_newwithbyteoffsetandlength_f254047f7e80e7ff =
                    function (e, t, n) {
                      return p(new Int16Array(ij[e], t >>> 0, n >>> 0));
                    }),
                  (s.wbg.__wbg_newwithstrandinit_06c535e0a867c635 =
                    function () {
                      return ne(function (e, t, n) {
                        return p(new Request(we(e, t), ij[n]));
                      }, arguments);
                    }),
                  (s.wbg.__wbg_next_25feadfc0913fea9 = function (e) {
                    return p(ij[e].next);
                  }),
                  (s.wbg.__wbg_next_6574e1a8a62d1055 = function () {
                    return ne(function (e) {
                      return p(ij[e].next());
                    }, arguments);
                  }),
                  (s.wbg.__wbg_now_d18023d54d4e5500 = function (e) {
                    return ij[e].now();
                  }),
                  (s.wbg.__wbg_ok_3aaf32d069979723 = function (e) {
                    return ij[e].ok;
                  }),
                  (s.wbg.__wbg_performance_c185c0cdc2766575 = function (e) {
                    var t = ij[e].performance;
                    return T(t) ? 0 : p(t);
                  }),
                  (s.wbg.__wbg_pixelStorei_6aba5d04cdcaeaf6 = function (
                    e,
                    t,
                    n
                  ) {
                    ij[e].pixelStorei(t >>> 0, n);
                  }),
                  (s.wbg.__wbg_pixelStorei_c8520e4b46f4a973 = function (
                    e,
                    t,
                    n
                  ) {
                    ij[e].pixelStorei(t >>> 0, n);
                  }),
                  (s.wbg.__wbg_push_737cfc8c1432c2c6 = function (e, t) {
                    return ij[e].push(ij[t]);
                  }),
                  (s.wbg.__wbg_queueMicrotask_97d92b4fcc8a61c5 = function (e) {
                    queueMicrotask(ij[e]);
                  }),
                  (s.wbg.__wbg_queueMicrotask_d3219def82552485 = function (e) {
                    return p(ij[e].queueMicrotask);
                  }),
                  (s.wbg.__wbg_readBuffer_1c35b1e4939f881d = function (e, t) {
                    ij[e].readBuffer(t >>> 0);
                  }),
                  (s.wbg.__wbg_readPixels_51a0c02cdee207a5 = function () {
                    return ne(function (e, t, n, i, a, o, c, s) {
                      ij[e].readPixels(t, n, i, a, o >>> 0, c >>> 0, ij[s]);
                    }, arguments);
                  }),
                  (s.wbg.__wbg_readPixels_a6cbb21794452142 = function () {
                    return ne(function (e, t, n, i, a, o, c, s) {
                      ij[e].readPixels(t, n, i, a, o >>> 0, c >>> 0, s);
                    }, arguments);
                  }),
                  (s.wbg.__wbg_readPixels_cd64c5a7b0343355 = function () {
                    return ne(function (e, t, n, i, a, o, c, s) {
                      ij[e].readPixels(t, n, i, a, o >>> 0, c >>> 0, ij[s]);
                    }, arguments);
                  }),
                  (s.wbg.__wbg_renderbufferStorageMultisample_13fbd5e58900c6fe =
                    function (e, t, n, i, a, o) {
                      ij[e].renderbufferStorageMultisample(
                        t >>> 0,
                        n,
                        i >>> 0,
                        a,
                        o
                      );
                    }),
                  (s.wbg.__wbg_resolve_4851785c9c5f573d = function (e) {
                    return p(Promise.resolve(ij[e]));
                  }),
                  (s.wbg.__wbg_set_65595bdd868b3009 = function (e, t, n) {
                    ij[e].set(ij[t], n >>> 0);
                  }),
                  (s.wbg.__wbg_set_bb8cecf6a62b9f46 = function () {
                    return ne(function (e, t, n) {
                      return Reflect.set(ij[e], ij[t], ij[n]);
                    }, arguments);
                  }),
                  (s.wbg.__wbg_setmethod_3c5280fe5d890842 = function (e, t, n) {
                    ij[e].method = we(t, n);
                  }),
                  (s.wbg.__wbg_setmode_5dc300b865044b65 = function (e, t) {
                    ij[e].mode = iL[t];
                  }),
                  (s.wbg.__wbg_shaderSource_72d3e8597ef85b67 = function (
                    e,
                    t,
                    n,
                    i
                  ) {
                    ij[e].shaderSource(ij[t], we(n, i));
                  }),
                  (s.wbg.__wbg_shaderSource_ad0087e637a35191 = function (
                    e,
                    t,
                    n,
                    i
                  ) {
                    ij[e].shaderSource(ij[t], we(n, i));
                  }),
                  (s.wbg.__wbg_size_3d0a84da1d4aaea9 = function (e) {
                    return ij[e].size;
                  }),
                  (s.wbg.__wbg_stack_0ed75d68575b0f3c = function (e, t) {
                    var n = Pe(
                        ij[t].stack,
                        en.__wbindgen_export_0,
                        en.__wbindgen_export_1
                      ),
                      i = iI;
                    J().setInt32(e + 4, i, !0), J().setInt32(e + 0, n, !0);
                  }),
                  (s.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 =
                    function () {
                      var e =
                        (void 0 === n.g ? "undefined" : (0, rz._)(n.g)) > "u"
                          ? null
                          : n.g;
                      return T(e) ? 0 : p(e);
                    }),
                  (s.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 =
                    function () {
                      var e =
                        ("undefined" == typeof globalThis
                          ? "undefined"
                          : (0, rz._)(globalThis)) > "u"
                          ? null
                          : globalThis;
                      return T(e) ? 0 : p(e);
                    }),
                  (s.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 =
                    function () {
                      var e =
                        ("undefined" == typeof self
                          ? "undefined"
                          : (0, rz._)(self)) > "u"
                          ? null
                          : self;
                      return T(e) ? 0 : p(e);
                    }),
                  (s.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 =
                    function () {
                      var e = window;
                      return T(e) ? 0 : p(e);
                    }),
                  (s.wbg.__wbg_texImage2D_5f2835f02b1d1077 = function () {
                    return ne(function (e, t, n, i, a, o, c, s, l, d) {
                      ij[e].texImage2D(
                        t >>> 0,
                        n,
                        i,
                        a,
                        o,
                        c,
                        s >>> 0,
                        l >>> 0,
                        ij[d]
                      );
                    }, arguments);
                  }),
                  (s.wbg.__wbg_texImage2D_7b15c62fc9c12b16 = function () {
                    return ne(function (e, t, n, i, a, o, c) {
                      ij[e].texImage2D(t >>> 0, n, i, a >>> 0, o >>> 0, ij[c]);
                    }, arguments);
                  }),
                  (s.wbg.__wbg_texImage2D_b8edcb5692f65f88 = function () {
                    return ne(function (e, t, n, i, a, o, c, s, l, d) {
                      ij[e].texImage2D(
                        t >>> 0,
                        n,
                        i,
                        a,
                        o,
                        c,
                        s >>> 0,
                        l >>> 0,
                        ij[d]
                      );
                    }, arguments);
                  }),
                  (s.wbg.__wbg_texImage2D_f1dc2cc64f0d7e5e = function () {
                    return ne(function (e, t, n, i, a, o, c) {
                      ij[e].texImage2D(t >>> 0, n, i, a >>> 0, o >>> 0, ij[c]);
                    }, arguments);
                  }),
                  (s.wbg.__wbg_texParameteri_8112b26b3c360b7e = function (
                    e,
                    t,
                    n,
                    i
                  ) {
                    ij[e].texParameteri(t >>> 0, n >>> 0, i);
                  }),
                  (s.wbg.__wbg_texParameteri_ef50743cb94d507e = function (
                    e,
                    t,
                    n,
                    i
                  ) {
                    ij[e].texParameteri(t >>> 0, n >>> 0, i);
                  }),
                  (s.wbg.__wbg_texStorage2D_fbda848497f3674e = function (
                    e,
                    t,
                    n,
                    i,
                    a,
                    o
                  ) {
                    ij[e].texStorage2D(t >>> 0, n, i >>> 0, a, o);
                  }),
                  (s.wbg.__wbg_then_44b73946d2fb3e7d = function (e, t) {
                    return p(ij[e].then(ij[t]));
                  }),
                  (s.wbg.__wbg_then_48b406749878a531 = function (e, t, n) {
                    return p(ij[e].then(ij[t], ij[n]));
                  }),
                  (s.wbg.__wbg_type_a43080ecd49da621 = function (e) {
                    return ij[e].type;
                  }),
                  (s.wbg.__wbg_uniform1f_21390b04609a9fa5 = function (e, t, n) {
                    ij[e].uniform1f(ij[t], n);
                  }),
                  (s.wbg.__wbg_uniform1f_dc009a0e7f7e5977 = function (e, t, n) {
                    ij[e].uniform1f(ij[t], n);
                  }),
                  (s.wbg.__wbg_uniform1i_5ddd9d8ccbd390bb = function (e, t, n) {
                    ij[e].uniform1i(ij[t], n);
                  }),
                  (s.wbg.__wbg_uniform1i_ed95b6129dce4d84 = function (e, t, n) {
                    ij[e].uniform1i(ij[t], n);
                  }),
                  (s.wbg.__wbg_uniform2f_56af4e1731d87421 = function (
                    e,
                    t,
                    n,
                    i
                  ) {
                    ij[e].uniform2f(ij[t], n, i);
                  }),
                  (s.wbg.__wbg_uniform2f_b69b5369bc019bd5 = function (
                    e,
                    t,
                    n,
                    i
                  ) {
                    ij[e].uniform2f(ij[t], n, i);
                  }),
                  (s.wbg.__wbg_uniform4f_36b8f9be15064aa7 = function (
                    e,
                    t,
                    n,
                    i,
                    a,
                    o
                  ) {
                    ij[e].uniform4f(ij[t], n, i, a, o);
                  }),
                  (s.wbg.__wbg_uniform4f_f7ea07febf8b5108 = function (
                    e,
                    t,
                    n,
                    i,
                    a,
                    o
                  ) {
                    ij[e].uniform4f(ij[t], n, i, a, o);
                  }),
                  (s.wbg.__wbg_uniformMatrix3x2fv_79357317e9637d05 = function (
                    e,
                    t,
                    n,
                    i,
                    a
                  ) {
                    ij[e].uniformMatrix3x2fv(ij[t], 0 !== n, Ni(i, a));
                  }),
                  (s.wbg.__wbg_useProgram_473bf913989b6089 = function (e, t) {
                    ij[e].useProgram(ij[t]);
                  }),
                  (s.wbg.__wbg_useProgram_9b2660f7bb210471 = function (e, t) {
                    ij[e].useProgram(ij[t]);
                  }),
                  (s.wbg.__wbg_value_cd1ffa7b1ab794f1 = function (e) {
                    return p(ij[e].value);
                  }),
                  (s.wbg.__wbg_vertexAttribIPointer_d0c67543348c90ce =
                    function (e, t, n, i, a, o) {
                      ij[e].vertexAttribIPointer(t >>> 0, n, i >>> 0, a, o);
                    }),
                  (s.wbg.__wbg_vertexAttribPointer_550dc34903e3d1ea = function (
                    e,
                    t,
                    n,
                    i,
                    a,
                    o,
                    c
                  ) {
                    ij[e].vertexAttribPointer(
                      t >>> 0,
                      n,
                      i >>> 0,
                      0 !== a,
                      o,
                      c
                    );
                  }),
                  (s.wbg.__wbg_vertexAttribPointer_7a2a506cdbe3aebc = function (
                    e,
                    t,
                    n,
                    i,
                    a,
                    o,
                    c
                  ) {
                    ij[e].vertexAttribPointer(
                      t >>> 0,
                      n,
                      i >>> 0,
                      0 !== a,
                      o,
                      c
                    );
                  }),
                  (s.wbg.__wbg_viewport_a1b4d71297ba89af = function (
                    e,
                    t,
                    n,
                    i,
                    a
                  ) {
                    ij[e].viewport(t, n, i, a);
                  }),
                  (s.wbg.__wbg_viewport_e615e98f676f2d39 = function (
                    e,
                    t,
                    n,
                    i,
                    a
                  ) {
                    ij[e].viewport(t, n, i, a);
                  }),
                  (s.wbg.__wbg_warn_4ca3906c248c47c4 = function (e) {
                    console.warn(ij[e]);
                  }),
                  (s.wbg.__wbindgen_as_number = function (e) {
                    return +ij[e];
                  }),
                  (s.wbg.__wbindgen_bigint_from_i64 = function (e) {
                    return p(e);
                  }),
                  (s.wbg.__wbindgen_bigint_from_u64 = function (e) {
                    return p(BigInt.asUintN(64, e));
                  }),
                  (s.wbg.__wbindgen_bigint_get_as_i64 = function (e, t) {
                    var n = ij[t],
                      i =
                        (void 0 === n ? "undefined" : (0, rz._)(n)) == "bigint"
                          ? n
                          : void 0;
                    J().setBigInt64(e + 8, T(i) ? BigInt(0) : i, !0),
                      J().setInt32(e + 0, !T(i), !0);
                  }),
                  (s.wbg.__wbindgen_boolean_get = function (e) {
                    var t = ij[e];
                    return "boolean" == typeof t ? (t ? 1 : 0) : 2;
                  }),
                  (s.wbg.__wbindgen_cb_drop = function (e) {
                    var t = hn(e).original;
                    return 1 == t.cnt-- && ((t.a = 0), !0);
                  }),
                  (s.wbg.__wbindgen_closure_wrapper1249 = function (e, t, n) {
                    var i, a;
                    return p(
                      ((i = { a: e, b: t, cnt: 1, dtor: 248 }),
                      ((a = function () {
                        for (
                          var e = arguments.length, t = Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        i.cnt++;
                        var a = i.a;
                        i.a = 0;
                        try {
                          return Ea.apply(
                            void 0,
                            [a, i.b].concat((0, rF._)(t))
                          );
                        } finally {
                          0 == --i.cnt
                            ? (en.__wbindgen_export_4.get(i.dtor)(a, i.b),
                              iB.unregister(i))
                            : (i.a = a);
                        }
                      }).original = i),
                      iB.register(a, i, i),
                      a)
                    );
                  }),
                  (s.wbg.__wbindgen_debug_string = function (e, t) {
                    var n = Pe(
                        (function vn(e) {
                          var t,
                            n = void 0 === e ? "undefined" : (0, rz._)(e);
                          if ("number" == n || "boolean" == n || null == e)
                            return "".concat(e);
                          if ("string" == n) return '"'.concat(e, '"');
                          if ("symbol" == n) {
                            var i = e.description;
                            return null == i
                              ? "Symbol"
                              : "Symbol(".concat(i, ")");
                          }
                          if ("function" == n) {
                            var a = e.name;
                            return "string" == typeof a && a.length > 0
                              ? "Function(".concat(a, ")")
                              : "Function";
                          }
                          if (Array.isArray(e)) {
                            var o = e.length,
                              c = "[";
                            o > 0 && (c += vn(e[0]));
                            for (var s = 1; s < o; s++) c += ", " + vn(e[s]);
                            return c + "]";
                          }
                          var l = /\[object ([^\]]+)\]/.exec(toString.call(e));
                          if (!l || !(l.length > 1)) return toString.call(e);
                          if ("Object" == (t = l[1]))
                            try {
                              return "Object(" + JSON.stringify(e) + ")";
                            } catch (e) {
                              return "Object";
                            }
                          return e instanceof Error
                            ? ""
                                .concat(e.name, ": ")
                                .concat(e.message, "\n")
                                .concat(e.stack)
                            : t;
                        })(ij[t]),
                        en.__wbindgen_export_0,
                        en.__wbindgen_export_1
                      ),
                      i = iI;
                    J().setInt32(e + 4, i, !0), J().setInt32(e + 0, n, !0);
                  }),
                  (s.wbg.__wbindgen_error_new = function (e, t) {
                    return p(Error(we(e, t)));
                  }),
                  (s.wbg.__wbindgen_in = function (e, t) {
                    return ij[e] in ij[t];
                  }),
                  (s.wbg.__wbindgen_is_bigint = function (e) {
                    return "bigint" == (0, rz._)(ij[e]);
                  }),
                  (s.wbg.__wbindgen_is_function = function (e) {
                    return "function" == typeof ij[e];
                  }),
                  (s.wbg.__wbindgen_is_object = function (e) {
                    var t = ij[e];
                    return "object" == typeof t && null !== t;
                  }),
                  (s.wbg.__wbindgen_is_string = function (e) {
                    return "string" == typeof ij[e];
                  }),
                  (s.wbg.__wbindgen_is_undefined = function (e) {
                    return void 0 === ij[e];
                  }),
                  (s.wbg.__wbindgen_jsval_eq = function (e, t) {
                    return ij[e] === ij[t];
                  }),
                  (s.wbg.__wbindgen_jsval_loose_eq = function (e, t) {
                    return ij[e] == ij[t];
                  }),
                  (s.wbg.__wbindgen_memory = function () {
                    return p(en.memory);
                  }),
                  (s.wbg.__wbindgen_number_get = function (e, t) {
                    var n = ij[t],
                      i = "number" == typeof n ? n : void 0;
                    J().setFloat64(e + 8, T(i) ? 0 : i, !0),
                      J().setInt32(e + 0, !T(i), !0);
                  }),
                  (s.wbg.__wbindgen_number_new = function (e) {
                    return p(e);
                  }),
                  (s.wbg.__wbindgen_object_clone_ref = function (e) {
                    return p(ij[e]);
                  }),
                  (s.wbg.__wbindgen_object_drop_ref = function (e) {
                    hn(e);
                  }),
                  (s.wbg.__wbindgen_string_get = function (e, t) {
                    var n = ij[t],
                      i = "string" == typeof n ? n : void 0,
                      a = T(i)
                        ? 0
                        : Pe(i, en.__wbindgen_export_0, en.__wbindgen_export_1),
                      o = iI;
                    J().setInt32(e + 4, o, !0), J().setInt32(e + 0, a, !0);
                  }),
                  (s.wbg.__wbindgen_string_new = function (e, t) {
                    return p(we(e, t));
                  }),
                  (s.wbg.__wbindgen_throw = function (e, t) {
                    throw Error(we(e, t));
                  }),
                  (t = s),
                  ("string" == typeof e ||
                    ("function" == typeof Request && e instanceof Request) ||
                    ("function" == typeof URL && e instanceof URL)) &&
                    (e = fetch(e)),
                  [4, e]
                );
              case 1:
                return [4, Ra.apply(void 0, [c.sent(), t])];
              case 2:
                return (
                  (a = (i = c.sent()).instance),
                  (o = i.module),
                  [
                    2,
                    ((en = a.exports),
                    (kc.__wbindgen_wasm_module = o),
                    (iD = null),
                    (iT = null),
                    (iE = null),
                    en.__wbindgen_start(),
                    en),
                  ]
                );
            }
          });
        })).apply(this, arguments);
      }
      function y(e) {
        var t = yr(e);
        if ("object" != typeof t || null === t) throw Error("Expected object");
      }
      function f(e, t, n, i, a, o) {
        var c = a ? e : e[n],
          s = c;
        if (void 0 === s) {
          if (t) return;
          if (void 0 !== o) s = o;
          else throw Error("Expected field " + n);
        }
        var l = i(s);
        l !== c && (a ? Object.assign(e, l) : (e[n] = l));
      }
      function M(e, t, n) {
        var i = n(e);
        return i !== e && (i.type = t), i;
      }
      function Le(e, t, n) {
        var i = e.value,
          a = n(i);
        return a !== yr(i) && (e.value = a), e;
      }
      function A(e) {
        if ("number" != typeof e) throw Error("Expected number");
        return e;
      }
      function Ut(e) {
        if ("number" != typeof e || e % 1 != 0) throw Error("Expected integer");
        return e;
      }
      function oe(e) {
        if ("string" != typeof e) throw Error("Expected string");
        return e;
      }
      function $(e) {
        if ("boolean" != typeof e) throw Error("Expected boolean");
        return e;
      }
      function vt(e) {
        return function (t) {
          if (!Array.isArray(yr(t))) throw Error("Expected array");
          for (var n = 0; n < t.length; n++) e(t.at(n));
          return t;
        };
      }
      function lt(e, t) {
        return function (n) {
          if (!Array.isArray(yr(n)) || n.length !== t)
            throw Error("Expected array");
          for (var i = 0; i < n.length; i++) e(n.at(i));
          return n;
        };
      }
      function X(e) {
        return function (t) {
          return null !== t && e(t), t;
        };
      }
      var mc = function (e) {
          return e;
        },
        iH = (((o = iH || {}).x = "x"), (o.y = "y"), o),
        iV = ["x", "y"];
      (iH || (iH = {})).check = function (e) {
        if (!iV.includes(e)) throw Error("Invalid value for AxisData");
        return e;
      };
      var iW =
          (((c = iW || {}).x = "x"),
          (c.nx = "-x"),
          (c.y = "y"),
          (c.ny = "-y"),
          c),
        iK = ["x", "-x", "y", "-y"];
      ((iW || (iW = {})).check = function (e) {
        if (!iK.includes(e))
          throw Error("Invalid value for DirectionalAxisData");
        return e;
      }),
        ((ei || (ei = {})).check = lt(A, 2)),
        ((ea || (ea = {})).check = lt(A, 3)),
        ((eu || (eu = {})).check = lt(A, 6)),
        ((es || (es = {})).check = lt(A, 4)),
        ((ef || (ef = {})).check = function (e) {
          if (!(e instanceof Uint8Array))
            throw Error("Invalid value for UInt8Array");
          return e;
        }),
        ((el || (el = {})).check = function (e) {
          if (!(e instanceof Uint8Array))
            throw Error("Invalid value for PlatformUInt8Array");
          return e;
        }),
        ((ed || (ed = {})).check = function (e) {
          return function (t) {
            return "string" == typeof t ? t : e(t);
          };
        });
      var iJ = lt(ed.check(A), 2);
      (eh || (eh = {})).check = iJ;
      var iZ = lt(ed.check(A), 3);
      (e_ || (e_ = {})).check = iZ;
      var iq = lt(ed.check(A), 4);
      function vc(e) {
        return vt(ev.check(e));
      }
      function xc(e) {
        return vt(eb.check(e));
      }
      function Sc(e, t) {
        return "number" == typeof e && "number" == typeof t
          ? Math.abs(e - t) < Number.EPSILON
          : e === t;
      }
      function xr(e, t) {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++) if (!Sc(e[n], t[n])) return !1;
        return !0;
      }
      function at(e, t) {
        if (!t) return e;
        var n = !1,
          i = (0, rT._)({}, e);
        for (var a in t) {
          var o = t[a];
          if (void 0 === o) {
            console.warn("should not contain undefined value in replacement");
            continue;
          }
          void 0 !== i[a] && ((n = !0), (i[a] = o));
        }
        return n ? i : e;
      }
      function Lt(e, t, n) {
        if (!n) return e;
        var i = e[t];
        if (null == i) return e;
        var a = at(i, n);
        return a === i ? e : (0, rU._)((0, rT._)({}, e), (0, rA._)({}, t, a));
      }
      function Yi(e, t, n) {
        if (!n) return e;
        var i = e[t];
        return null == i || i === n
          ? e
          : (0, rU._)((0, rT._)({}, e), (0, rA._)({}, t, n));
      }
      ((ep || (ep = {})).check = iq),
        ((ev || (ev = {})).check = function (e) {
          return function (t) {
            return (
              y(t),
              f(t, !1, "data", e, !1),
              f(t, !1, "fi", A, !1),
              f(t, !1, "id", em.check, !1),
              t
            );
          };
        }),
        ((eg || (eg = {})).check = vc),
        ((eb || (eb = {})).check = function (e) {
          return function (t) {
            return (
              y(t),
              f(t, !1, "data", e, !1),
              f(t, !1, "fi", A, !1),
              f(t, !1, "id", em.check, !1),
              f(t, !1, "children", ek.check(e), !1),
              t
            );
          };
        }),
        ((ey || (ey = {})).check = xc),
        ((ew || (ew = {})).check = function (e) {
          var t;
          return (
            (t = em.check),
            function (n) {
              for (var i in (y(n), n)) t(i), e(n[i]);
              return n;
            }
          );
        }),
        ((em || (em = {})).check = function (e) {
          if ("string" != typeof e) throw Error("Expected string");
          return e;
        }),
        ((ek || (ek = {})).check = function (e) {
          return function (t) {
            return (
              t instanceof nn
                ? t.traverse(function (t, n) {
                    e(n);
                  })
                : Object.setPrototypeOf(xc(e)(t), r0.prototype),
              t
            );
          };
        }),
        ((ex || (ex = {})).check = function (e) {
          return function (t) {
            for (var n in (y(t), t)) e(t[n]);
            if (yr(t) !== t) {
              if (Object.getPrototypeOf(t) !== rG.prototype)
                throw Error("cannot set prototype");
            } else
              Object.getPrototypeOf(t) !== rG.prototype &&
                Object.setPrototypeOf(t, rG.prototype);
            return t;
          };
        }),
        ((eO || (eO = {})).check = function (e) {
          return function (t) {
            return (
              t instanceof ni
                ? t.forEach(function (t) {
                    e(t);
                  })
                : Object.setPrototypeOf(vc(e)(t), r1.prototype),
              t
            );
          };
        }),
        ((eS || (eS = {})).check = function (e) {
          if ((y(e), "transition" === e.type))
            return M(e, "transition", eA.check);
          throw Error("Invalid type for ActionData");
        });
      var iQ =
          (((s = iQ || {}).once = "once"),
          (s.repeat = "repeat"),
          (s.toggle = "toggle"),
          s),
        iX = ["once", "repeat", "toggle"];
      ((iQ || (iQ = {})).check = function (e) {
        if (!iX.includes(e)) throw Error("Invalid value for RunModeData");
        return e;
      }),
        ((eA || (eA = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "object", X(em.check), !1),
            f(e, !1, "tweens", eO.check(eI.check), !1),
            f(e, !1, "runMode", iQ.check, !1),
            f(e, !1, "repeat", Ut, !1),
            f(e, !1, "direction", iY.check, !1),
            f(e, !1, "delay", A, !1),
            f(e, !1, "delayDirection", i1.check, !1),
            e
          );
        });
      var Oc = function (e) {
        switch ((y(e), e.type)) {
          case "current":
            return Le(e, "current", mc), e;
          case "state":
            return Le(e, "state", X(em.check)), e;
          default:
            throw Error("Invalid type for TweenStateData");
        }
      };
      (ej || (ej = {})).check = Oc;
      var Ac = function (e) {
        return (
          y(e),
          f(e, !1, "state", ej.check, !1),
          f(e, !1, "duration", A, !1),
          f(e, !1, "easing", i$.check, !1),
          f(e, !1, "repeat", Ut, !1),
          f(e, !1, "direction", iY.check, !1),
          f(e, !1, "delay", A, !1),
          f(e, !1, "delayDirection", i1.check, !1),
          f(e, !1, "control1", X(ei.check), !1),
          f(e, !1, "control2", X(ei.check), !1),
          f(e, !1, "mass", X(A), !1),
          f(e, !1, "stiffness", X(A), !1),
          f(e, !1, "damping", X(A), !1),
          f(e, !1, "velocity", X(A), !1),
          e
        );
      };
      (eI || (eI = {})).check = Ac;
      var i$ =
          (((l = i$ || {})[(l.linear = 0)] = "linear"),
          (l[(l.ease = 1)] = "ease"),
          (l[(l.easeIn = 2)] = "easeIn"),
          (l[(l.easeOut = 3)] = "easeOut"),
          (l[(l.easeInOut = 4)] = "easeInOut"),
          (l[(l.bezier = 5)] = "bezier"),
          (l[(l.spring = 6)] = "spring"),
          l),
        iG = [0, 1, 2, 3, 4, 5, 6];
      (i$ || (i$ = {})).check = function (e) {
        if (!iG.includes(e)) throw Error("Invalid value for EasingData");
        return e;
      };
      var iY =
          (((d = iY || {}).normal = "normal"),
          (d.pingpong = "pingpong"),
          (d.pingpongRewind = "pingpongRewind"),
          d),
        i0 = ["normal", "pingpong", "pingpongRewind"];
      (iY || (iY = {})).check = function (e) {
        if (!i0.includes(e))
          throw Error("Invalid value for RepeatDirectionData");
        return e;
      };
      var i1 =
          (((h = i1 || {}).startOnce = "startOnce"),
          (h.start = "start"),
          (h.end = "end"),
          (h.startEnd = "startEnd"),
          h),
        i2 = ["startOnce", "start", "end", "startEnd"];
      ((i1 || (i1 = {})).check = function (e) {
        if (!i2.includes(e))
          throw Error("Invalid value for DelayDirectionData");
        return e;
      }),
        (ej.check = function (e) {
          return (
            "base" === e.type
              ? ((e.type = "state"), (e.value = null))
              : void 0 !== e.id && ((e.value = e.id), (e.id = void 0)),
            Oc(e)
          );
        }),
        ((_ = eI || (eI = {})).defaultData = function (e) {
          return Ac({
            state: e,
            repeat: 0,
            delay: 0,
            delayDirection: "startOnce",
            direction: "normal",
            duration: 1e3,
            easing: 4,
            control1: null,
            control2: null,
            mass: null,
            stiffness: null,
            damping: null,
            velocity: null,
          });
        }),
        (_.defaultDataSpring = {
          mass: 1,
          stiffness: 80,
          damping: 10,
          velocity: 0,
        }),
        (_.defaultDataBezier = { control1: [0.5, 0], control2: [0.5, 1] }),
        (_.defaultDataEasing = {
          linear: [0, 0, 1, 1],
          ease: [0.25, 0.1, 0.25, 1],
          easeIn: [0.42, 0, 1, 1],
          easeOut: [0, 0, 0.58, 1],
          easeInOut: [0.42, 0, 0.58, 1],
        }),
        ((eA || (eA = {})).defaultData = function (e) {
          return {
            type: "transition",
            runMode: "once",
            object: e,
            tweens: new r1(),
            repeat: 0,
            delay: 0,
            delayDirection: "startOnce",
            direction: "normal",
          };
        }),
        ((eE || (eE = {})).check = function (e) {
          return y(e), f(e, !1, "enabled", $, !1, !0), e;
        }),
        ((eC || (eC = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "base", eE.check, !0),
            f(e, !1, "offset", ei.check, !1),
            f(e, !1, "blur", A, !1),
            f(e, !1, "spread", A, !1),
            f(e, !1, "color", es.check, !1),
            e
          );
        }),
        ((eP || (eP = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "base", eE.check, !0),
            f(e, !1, "offset", ei.check, !1),
            f(e, !1, "blur", A, !1),
            f(e, !1, "spread", A, !1),
            f(e, !1, "color", es.check, !1),
            e
          );
        }),
        ((eD || (eD = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "base", eE.check, !0),
            f(e, !1, "radius", A, !1, 10),
            e
          );
        }),
        ((eM || (eM = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "base", eE.check, !0),
            f(e, !1, "radius", A, !1, 10),
            e
          );
        });
      var Pn = function (e) {
        switch ((y(e), e.type)) {
          case "DropShadow":
            return M(e, "DropShadow", eC.check);
          case "InnerShadow":
            return M(e, "InnerShadow", eP.check);
          case "LayerBlur":
            return M(e, "LayerBlur", eD.check);
          case "BackgroundBlur":
            return M(e, "BackgroundBlur", eM.check);
          default:
            throw Error("Invalid type for EffectData");
        }
      };
      ((eT || (eT = {})).check = Pn),
        ((eU || (eU = {})).check = function (e) {
          return (
            y(e),
            f(e, !0, "offset", ei.check, !1),
            f(e, !0, "blur", A, !1),
            f(e, !0, "spread", A, !1),
            f(e, !0, "color", es.check, !1),
            f(e, !0, "radius", A, !1),
            e
          );
        }),
        ((v = eT || (eT = {})).defaultData = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "DropShadow";
          switch (e) {
            case "LayerBlur":
            case "BackgroundBlur":
              return Pn({ type: e, radius: 10, enabled: !0 });
            case "DropShadow":
            case "InnerShadow":
              return Pn({
                type: e,
                offset: [0, 4],
                blur: 5,
                spread: 0,
                color: [0, 0, 0, 0.4],
                enabled: !0,
              });
          }
        }),
        (v.applyState = function (e, t) {
          return at(e, t);
        }),
        (v.statefulKeys = ["offset", "blur", "spread", "color", "radius"]),
        ((eB || (eB = {})).check = function (e) {
          return y(e), f(e, !1, "enabled", $, !1, !0), e;
        });
      var Ec = function (e) {
        switch ((y(e), e.type)) {
          case "start":
            return M(e, "start", eR.check);
          case "mouseDown":
            return M(e, "mouseDown", eN.check);
          case "mouseUp":
            return M(e, "mouseUp", eN.check);
          case "mousePress":
            return M(e, "mousePress", eN.check);
          case "mouseHover":
            return M(e, "mouseHover", eF.check);
          case "keyDown":
            return M(e, "keyDown", ez.check);
          case "keyUp":
            return M(e, "keyUp", ez.check);
          case "keyPress":
            return M(e, "keyPress", ez.check);
          case "follow":
            return M(e, "follow", eH.check);
          case "lookAt":
            return M(e, "lookAt", eW.check);
          default:
            throw Error("Invalid type for EventData");
        }
      };
      ((eL || (eL = {})).check = Ec),
        ((eR || (eR = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "base", eB.check, !0),
            f(e, !1, "actions", eO.check(eS.check), !1),
            e
          );
        });
      var Ic = function (e) {
        return (
          y(e),
          f(e, !1, "base", eB.check, !0),
          f(e, !1, "actions", eO.check(eS.check), !1),
          f(e, !1, "mode", i3.check, !1),
          e
        );
      };
      ((eN || (eN = {})).check = Ic),
        ((eF || (eF = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "base", eB.check, !0),
            f(e, !1, "actions", eO.check(eS.check), !1),
            e
          );
        });
      var i3 = (((g = i3 || {}).object = "object"), (g.canvas = "canvas"), g),
        i5 = ["object", "canvas"];
      (i3 || (i3 = {})).check = function (e) {
        if (!i5.includes(e))
          throw Error("Invalid value for MouseEventModeData");
        return e;
      };
      var Pc = function (e) {
        return (
          y(e),
          f(e, !1, "base", eB.check, !0),
          f(e, !1, "actions", eO.check(eS.check), !1),
          f(e, !1, "key", X(oe), !1),
          e
        );
      };
      (ez || (ez = {})).check = Pc;
      var Bc = function (e) {
        return (
          y(e),
          f(e, !1, "base", eB.check, !0),
          f(e, !1, "dampingFactor", A, !1),
          f(e, !1, "resetOnPointerLeave", $, !1),
          f(e, !1, "resetSpeed", A, !1),
          f(e, !1, "enabledTranslation", vt($), !1),
          f(e, !1, "maxDelta", A, !1),
          f(e, !1, "target", eV.check, !1),
          f(e, !1, "limitDistanceEnabled", $, !1),
          f(e, !1, "limitDistance", A, !1),
          f(e, !1, "snapDelay", A, !1),
          f(e, !1, "resetAfterDistanceLimit", $, !1),
          f(e, !1, "actions", eO.check(eS.check), !1),
          f(e, !1, "limitType", i4.check, !1, "Radial"),
          f(
            e,
            !1,
            "planarLimitDistance",
            ei.check,
            !1,
            eH.default_planar_limit_distance()
          ),
          e
        );
      };
      (eH || (eH = {})).check = Bc;
      var Uc = function (e) {
        switch ((y(e), e.type)) {
          case "entity":
            return Le(e, "entity", em.check), e;
          case "cursor":
            return Le(e, "cursor", mc), e;
          default:
            throw Error("Invalid type for FollowEventTargetData");
        }
      };
      (eV || (eV = {})).check = Uc;
      var i4 = (((b = i4 || {}).Radial = "Radial"), (b.Planar = "Planar"), b),
        i6 = ["Radial", "Planar"];
      (i4 || (i4 = {})).check = function (e) {
        if (!i6.includes(e)) throw Error("Invalid value for FollowLimitType");
        return e;
      };
      var Rc = function (e) {
        return (
          y(e),
          f(e, !1, "base", eB.check, !0),
          f(e, !1, "axis", iH.check, !1),
          f(e, !1, "dampingFactor", A, !1),
          f(e, !1, "resetOnPointerLeave", $, !1),
          f(e, !1, "resetSpeed", A, !1),
          f(e, !1, "target", eV.check, !1),
          f(e, !1, "limitDistanceEnabled", $, !1),
          f(e, !1, "limitDistance", A, !1),
          f(e, !1, "snapDelay", A, !1),
          f(e, !1, "resetAfterDistanceLimit", $, !1),
          e
        );
      };
      ((eW || (eW = {})).check = Rc),
        (eV.check = function (e) {
          return void 0 !== e.id && ((e.value = e.id), (e.id = void 0)), Uc(e);
        }),
        ((eL || (eL = {})).defaultData = function () {
          return Ec({ enabled: !0, type: "start", actions: [] });
        }),
        ((eN || (eN = {})).defaultData = function () {
          return Ic({ enabled: !0, mode: "object", actions: [] });
        }),
        ((ez || (ez = {})).defaultData = function () {
          return Pc({ enabled: !0, key: null, actions: [] });
        }),
        ((eH || (eH = {})).defaultData = function () {
          return Bc({
            enabled: !0,
            actions: [],
            maxDelta: 0,
            dampingFactor: 1,
            target: { type: "cursor" },
            resetOnPointerLeave: !0,
            resetAfterDistanceLimit: !1,
            enabledTranslation: [!0, !0],
            limitDistanceEnabled: !1,
            limitDistance: 1e3,
            snapDelay: 0,
            resetSpeed: 5,
            limitType: "Radial",
            planarLimitDistance: [1e3, 1e3],
          });
        }),
        ((eW || (eW = {})).defaultData = function () {
          return Rc({
            enabled: !0,
            dampingFactor: 1,
            axis: iH.y,
            target: { type: "cursor" },
            resetOnPointerLeave: !0,
            resetAfterDistanceLimit: !0,
            limitDistanceEnabled: !1,
            limitDistance: 1e3,
            snapDelay: 0,
            resetSpeed: 5,
          });
        }),
        ((eH || (eH = {})).default_planar_limit_distance = function () {
          return [1e3, 1e3];
        }),
        ((eK || (eK = {})).check = function (e) {
          return y(e), f(e, !1, "color", ed.check(es.check), !1), e;
        }),
        ((eJ || (eJ = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "image", X(em.check), !1, null),
            f(e, !1, "opacity", ed.check(A), !1, eJ.default_opacity()),
            e
          );
        });
      var Tc = function (e) {
        switch ((y(e), e.type)) {
          case "Color":
            return M(e, "Color", eK.check);
          case "Image":
            return M(e, "Image", eJ.check);
          default:
            throw Error("Invalid type for FillData");
        }
      };
      ((eZ || (eZ = {})).check = Tc),
        ((eq || (eq = {})).check = function (e) {
          return y(e), f(e, !0, "color", ed.check(es.check), !1), e;
        }),
        ((w = eZ || (eZ = {})).defaultData = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "Color";
          return "Image" === e ? eJ.defaultData() : eK.defaultData();
        }),
        (w.applyState = function (e, t) {
          return at(e, t);
        }),
        (w.statefulKeys = ["color"]),
        ((m = eJ || (eJ = {})).defaultData = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null;
          return { type: "Image", image: e, opacity: m.default_opacity() };
        }),
        (m.default_opacity = function () {
          return 1;
        }),
        ((eK || (eK = {})).defaultData = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : [0.2, 0.2, 0.2, 1];
          return { type: "Color", color: e };
        }),
        (eZ.check = function (e) {
          void 0 === e.type && void 0 !== e.color && (e.type = "Color"), Tc(e);
        }),
        ((eQ || (eQ = {})).check = function (e) {
          return y(e), f(e, !1, "size", eh.check, !1), e;
        }),
        ((eX || (eX = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "base", eQ.check, !0),
            f(e, !1, "cornerRadius", ep.check, !1),
            e
          );
        }),
        ((e$ || (e$ = {})).check = function (e) {
          return y(e), f(e, !1, "base", eQ.check, !0), e;
        });
      var i8 =
          (((k = i8 || {}).Left = "Left"),
          (k.Right = "Right"),
          (k.Center = "Center"),
          (k.Justify = "Justify"),
          k),
        i7 = ["Left", "Right", "Center", "Justify"];
      (i8 || (i8 = {})).check = function (e) {
        if (!i7.includes(e)) throw Error("Invalid value for HorizontalAlign");
        return e;
      };
      var i9 =
          (((x = i9 || {}).Top = "Top"),
          (x.Center = "Center"),
          (x.Bottom = "Bottom"),
          x),
        ae = ["Top", "Center", "Bottom"];
      ((i9 || (i9 = {})).check = function (e) {
        if (!ae.includes(e)) throw Error("Invalid value for VerticalAlign");
        return e;
      }),
        ((eG || (eG = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "base", eQ.check, !0),
            f(e, !1, "cornerRadius", ep.check, !1),
            e
          );
        });
      var ar =
          (((S = ar || {}).None = "None"),
          (S.Upper = "Upper"),
          (S.Lower = "Lower"),
          S),
        an = ["None", "Upper", "Lower"];
      ((ar || (ar = {})).check = function (e) {
        if (!an.includes(e)) throw Error("Invalid value for TextTransform");
        return e;
      }),
        ((eY || (eY = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "base", eQ.check, !0),
            f(e, !1, "text", ed.check(oe), !1),
            f(e, !1, "fontSize", ed.check(A), !1),
            f(e, !1, "horizontalAlign", i8.check, !1),
            f(e, !1, "verticalAlign", i9.check, !1),
            f(e, !1, "lineHeight", A, !1, 1.2),
            f(e, !1, "letterSpacing", A, !1, 0),
            f(e, !1, "textTransform", ar.check, !1, "None"),
            f(e, !1, "font", em.check, !1, eY.default_font()),
            e
          );
        });
      var ai =
          (((j = ai || {}).AND = "AND"), (j.OR = "OR"), (j.DIFF = "DIFF"), j),
        aa = ["AND", "OR", "DIFF"];
      ((ai || (ai = {})).check = function (e) {
        if (!aa.includes(e)) throw Error("Invalid value for BooleanOpData");
        return e;
      }),
        ((e0 || (e0 = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "base", eQ.check, !0),
            f(e, !1, "op", ai.check, !1),
            f(e, !1, "corner", ed.check(A), !1, e0.default_corner()),
            e
          );
        }),
        ((e1 || (e1 = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "base", eQ.check, !0),
            f(e, !1, "bytes", ef.check, !1),
            e
          );
        });
      var Cc = function (e) {
        switch ((y(e), e.type)) {
          case "Rectangle":
            return M(e, "Rectangle", eX.check);
          case "Ellipse":
            return M(e, "Ellipse", e$.check);
          case "Text":
            return M(e, "Text", eY.check);
          case "Frame":
            return M(e, "Frame", eG.check);
          case "Boolean":
            return M(e, "Boolean", e0.check);
          case "VecNet":
            return M(e, "VecNet", e1.check);
          default:
            throw Error("Invalid type for ShapeData");
        }
      };
      ((e2 || (e2 = {})).check = Cc),
        ((e3 || (e3 = {})).check = function (e) {
          return (
            y(e),
            f(e, !0, "size", eh.check, !1),
            f(e, !0, "cornerRadius", ep.check, !1),
            f(e, !0, "corner", ed.check(A), !1),
            f(e, !0, "fontSize", ed.check(A), !1),
            f(e, !0, "bytes", ef.check, !1),
            e
          );
        }),
        ((eY || (eY = {})).default_font = function () {
          return "Inter_regular";
        }),
        ((I = e2 || (e2 = {})).defaultData = function () {
          var e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "Rectangle",
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [100, 100];
          switch (t) {
            case "Rectangle":
            case "Frame":
              e = { type: t, cornerRadius: [0, 0, 0, 0], size: n };
              break;
            case "Ellipse":
              e = { type: t, size: n };
              break;
            case "Text":
              e = {
                type: t,
                text: "Hello",
                fontSize: 24,
                horizontalAlign: "Left",
                verticalAlign: "Top",
                lineHeight: 1.2,
                letterSpacing: 0,
                textTransform: "None",
                font: "Inter_regular",
                size: n,
              };
              break;
            case "Boolean":
              e = { type: t, size: n, op: "DIFF", corner: 0 };
              break;
            case "VecNet":
              e = { type: t, bytes: new Uint8Array(), size: n };
          }
          return Cc(e);
        }),
        (I.applyState = function (e, t) {
          return at(e, t);
        }),
        (I.statefulKeys = [
          "size",
          "cornerRadius",
          "corner",
          "fontSize",
          "bytes",
        ]),
        ((e0 || (e0 = {})).default_corner = function () {
          return 0;
        });
      var ao =
          (((E = ao || {}).Butt = "Butt"),
          (E.Round = "Round"),
          (E.Square = "Square"),
          E),
        au = ["Butt", "Round", "Square"];
      (ao || (ao = {})).check = function (e) {
        if (!au.includes(e)) throw Error("Invalid value for StrokeCap");
        return e;
      };
      var as =
          (((C = as || {}).Inside = "Inside"),
          (C.Outside = "Outside"),
          (C.Center = "Center"),
          C),
        af = ["Inside", "Outside", "Center"];
      (as || (as = {})).check = function (e) {
        if (!af.includes(e)) throw Error("Invalid value for StrokeAlign");
        return e;
      };
      var al =
          (((P = al || {}).Miter = "Miter"),
          (P.Round = "Round"),
          (P.Bevel = "Bevel"),
          P),
        ad = ["Miter", "Round", "Bevel"];
      ((al || (al = {})).check = function (e) {
        if (!ad.includes(e)) throw Error("Invalid value for StrokeJoin");
        return e;
      }),
        ((e5 || (e5 = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "color", ed.check(es.check), !1),
            f(e, !1, "thickness", A, !1),
            f(e, !1, "align", as.check, !1, "Center"),
            f(e, !1, "join", al.check, !1, "Miter"),
            f(e, !1, "cap", ao.check, !1, "Round"),
            e
          );
        }),
        ((e4 || (e4 = {})).check = function (e) {
          return (
            y(e),
            f(e, !0, "color", ed.check(es.check), !1),
            f(e, !0, "thickness", A, !1),
            e
          );
        }),
        ((D = e5 || (e5 = {})).defaultData = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 2,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [1, 1, 1, 1];
          return {
            color: t,
            thickness: e,
            align: "Center",
            join: "Miter",
            cap: "Round",
          };
        }),
        (D.applyState = function (e, t) {
          return at(e, t);
        }),
        (D.statefulKeys = ["color", "thickness"]),
        ((e6 || (e6 = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "position", eh.check, !1),
            f(e, !1, "rotation", ed.check(A), !1),
            f(e, !1, "scale", eh.check, !1),
            f(e, !1, "shear", eh.check, !1),
            f(e, !1, "pivot", ei.check, !1),
            e
          );
        }),
        ((e8 || (e8 = {})).check = function (e) {
          return (
            y(e),
            f(e, !0, "position", eh.check, !1),
            f(e, !0, "rotation", ed.check(A), !1),
            f(e, !0, "scale", eh.check, !1),
            f(e, !0, "shear", eh.check, !1),
            f(e, !0, "pivot", ei.check, !1),
            e
          );
        }),
        ((e7 || (e7 = {})).check = function (e) {
          return (
            y(e),
            f(e, !0, "position", eh.check, !1),
            f(e, !0, "rotation", ed.check(A), !1),
            f(e, !0, "scale", eh.check, !1),
            f(e, !0, "shear", eh.check, !1),
            f(e, !0, "pivot", ei.check, !1),
            e
          );
        });
      var ah = (((U = ah || {}).World = "World"), (U.Tangent = "Tangent"), U),
        a_ = ["World", "Tangent"];
      (ah || (ah = {})).check = function (e) {
        if (!a_.includes(e))
          throw Error("Invalid value for PathAlignOrientation");
        return e;
      };
      var Fc = function (e) {
        return (
          y(e),
          f(e, !0, "object", em.check, !1),
          f(e, !1, "orientation", ah.check, !1),
          f(e, !1, "offset", ed.check(A), !1),
          f(e, !1, "slide", ed.check(A), !1),
          e
        );
      };
      ((e9 || (e9 = {})).check = Fc),
        ((te || (te = {})).check = function (e) {
          return (
            y(e),
            f(e, !0, "offset", ed.check(A), !1),
            f(e, !0, "slide", ed.check(A), !1),
            e
          );
        }),
        ((tt || (tt = {})).check = function (e) {
          return (
            y(e),
            f(e, !0, "object", em.check, !1),
            f(e, !0, "orientation", ah.check, !1),
            f(e, !0, "offset", ed.check(A), !1),
            f(e, !0, "slide", ed.check(A), !1),
            e
          );
        });
      var ap =
          (((B = ap || {}).Left = "Left"),
          (B.Right = "Right"),
          (B.LeftAndRight = "LeftAndRight"),
          (B.Center = "Center"),
          (B.Scale = "Scale"),
          B),
        av = ["Left", "Right", "LeftAndRight", "Center", "Scale"];
      (ap || (ap = {})).check = function (e) {
        if (!av.includes(e))
          throw Error("Invalid value for ConstraintHorizontal");
        return e;
      };
      var ag =
          (((L = ag || {}).Top = "Top"),
          (L.Bottom = "Bottom"),
          (L.TopAndBottom = "TopAndBottom"),
          (L.Center = "Center"),
          (L.Scale = "Scale"),
          L),
        ab = ["Top", "Bottom", "TopAndBottom", "Center", "Scale"];
      ((ag || (ag = {})).check = function (e) {
        if (!ab.includes(e))
          throw Error("Invalid value for ConstraintVertical");
        return e;
      }),
        ((tr || (tr = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "visible", $, !1, !0),
            f(e, !1, "raycastLock", $, !1, !1),
            f(e, !1, "eventsPassthrough", $, !1, !1),
            f(e, !1, "name", oe, !1, ""),
            f(e, !1, "transform", e6.check, !0),
            f(e, !1, "horizontalConstraint", ap.check, !1, "Left"),
            f(e, !1, "verticalConstraint", ag.check, !1, "Top"),
            f(e, !1, "events", eO.check(eL.check), !1),
            f(e, !1, "effects", eO.check(eT.check), !1),
            f(e, !1, "states", eO.check(tf.check), !1),
            f(e, !0, "pathAlign", e9.check, !1),
            e
          );
        }),
        ((tn || (tn = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "name", oe, !1),
            f(e, !1, "transform", e8.check, !0),
            f(e, !0, "effects", ex.check(eU.check), !1),
            f(e, !0, "pathAlign", te.check, !1),
            e
          );
        }),
        ((ti || (ti = {})).check = function (e) {
          return (
            y(e),
            f(e, !0, "visible", $, !1),
            f(e, !0, "raycastLock", $, !1),
            f(e, !0, "eventsPassthrough", $, !1),
            f(e, !0, "name", oe, !1),
            f(e, !1, "transform", e7.check, !0),
            f(e, !0, "events", eO.check(eL.check), !1),
            f(e, !0, "effects", eO.check(eT.check), !1),
            f(e, !0, "states", eO.check(tf.check), !1),
            f(e, !0, "pathAlign", tt.check, !1),
            e
          );
        });
      var Lc = function (e) {
        return y(e), f(e, !1, "base", tr.check, !0), e;
      };
      (to || (to = {})).check = Lc;
      var Mc = function (e) {
        return (
          y(e),
          f(e, !1, "base", tr.check, !0),
          f(e, !1, "shape", e2.check, !1),
          f(e, !1, "fill", X(eZ.check), !1),
          f(e, !1, "fills", X(ex.check(eZ.check)), !1, null),
          f(e, !1, "stroke", X(e5.check), !1),
          e
        );
      };
      ((tu || (tu = {})).check = Mc),
        ((ts || (ts = {})).check = function (e) {
          switch ((y(e), e.type)) {
            case "Shape":
              return M(e, "Shape", tu.check);
            case "Group":
              return M(e, "Group", to.check);
            default:
              throw Error("Invalid type for ObjectData");
          }
        });
      var zc = function (e) {
        return (
          y(e),
          f(e, !1, "base", tn.check, !0),
          f(e, !0, "shape", e3.check, !1),
          f(e, !0, "fill", eq.check, !1),
          f(e, !0, "fills", ex.check(eq.check), !1),
          f(e, !0, "stroke", e4.check, !1),
          e
        );
      };
      ((tf || (tf = {})).check = zc),
        ((tl || (tl = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "base", ti.check, !0),
            f(e, !0, "shape", e2.check, !1),
            f(e, !0, "fill", X(eZ.check), !1),
            f(e, !0, "fills", X(ex.check(eZ.check)), !1),
            f(e, !0, "stroke", X(e5.check), !1),
            e
          );
        }),
        ((R = e6 || (e6 = {})).identity = {
          position: [0, 0],
          rotation: 0,
          scale: [1, 1],
          shear: [0, 0],
          pivot: [0, 0],
        }),
        (R.merge = function (e, t) {
          return {
            position: (null == t ? void 0 : t.position) || e.position,
            rotation: (null == t ? void 0 : t.rotation) || e.rotation,
            scale: (null == t ? void 0 : t.scale) || e.scale,
            shear: (null == t ? void 0 : t.shear) || e.shear,
            pivot: (null == t ? void 0 : t.pivot) || e.pivot,
          };
        }),
        (R.diff = function (e, t) {
          return (function (e) {
            var t = !0,
              n = !1,
              i = void 0;
            try {
              for (
                var a, o = Object.keys(e)[Symbol.iterator]();
                !(t = (a = o.next()).done);
                t = !0
              ) {
                var c = a.value;
                void 0 === e[c] && delete e[c];
              }
            } catch (e) {
              (n = !0), (i = e);
            } finally {
              try {
                t || null == o.return || o.return();
              } finally {
                if (n) throw i;
              }
            }
            return e;
          })({
            position: xr(e.position, t.position) ? void 0 : t.position,
            rotation: Sc(e.rotation, t.rotation) ? void 0 : t.rotation,
            scale: xr(e.scale, t.scale) ? void 0 : t.scale,
            shear: xr(e.shear, t.shear) ? void 0 : t.shear,
            pivot: xr(e.pivot, t.pivot) ? void 0 : t.pivot,
          });
        }),
        (N = ts || (ts = {})),
        (F = function (e, t) {
          if (void 0 === t) return e;
          t.name;
          var n = t.effects,
            i = t.pathAlign,
            a = t.shape,
            o = t.stroke,
            c = t.fill,
            s =
              (t.fills,
              (0, rB._)(t, [
                "name",
                "effects",
                "pathAlign",
                "shape",
                "stroke",
                "fill",
                "fills",
              ])),
            l = (function (e, t, n) {
              if (!t) return e;
              var i = !1,
                a = e.map(function (e) {
                  var a = t[e.id];
                  if (void 0 === a) return e;
                  var o = n(e.data, a);
                  return e.data !== o
                    ? ((i = !0), (0, rU._)((0, rT._)({}, e), { data: o }))
                    : e;
                });
              return i ? (Object.setPrototypeOf(a, r1.prototype), a) : e;
            })(e.effects, n, eT.applyState);
          switch (e.type) {
            case "Shape":
              return (
                (e = Lt(
                  (e = Yi((e = at(e, s)), "effects", l)),
                  "pathAlign",
                  i
                )),
                (e = Lt(e, "stroke", o)),
                (e = Lt(e, "fill", c)),
                (e = Lt(e, "shape", a))
              );
            case "Group":
              return (e = Lt(
                (e = Yi((e = at(e, s)), "effects", l)),
                "pathAlign",
                i
              ));
          }
        }),
        (N.applyStateFromData = function (e, t) {
          if (void 0 === t) return e;
          var n = e.states.data(t);
          return void 0 === n ? e : F(e, n);
        }),
        (N.applyState = F),
        (N.toDiff = function (e, t) {
          return (function (e, t) {
            var n = {};
            for (var i in e) e[i] !== t[i] && (n[i] = t[i]);
            return n;
          })(e, t);
        }),
        (N.statefulKeys = ["position", "rotation", "scale", "shear", "pivot"]),
        (N.statefulSimpleContainerKeys = [
          "shape",
          "fill",
          "stroke",
          "pathAlign",
        ]),
        (N.statefulTableContainerKeys = ["effects"]),
        (N.transformOp = function (e, t, n) {
          function u(t, i) {
            if (t.type !== rq.Update) return [e, [t]];
            var a = (0, rR._)(
                (function (e, t) {
                  var n, i;
                  for (var a in e)
                    t.includes(a)
                      ? (void 0 === n && (n = {}), (n[a] = e[a]))
                      : (void 0 === i && (i = {}), (i[a] = e[a]));
                  return [n, i];
                })(t.props, i),
                2
              ),
              o = a[0],
              c = a[1],
              s = [],
              l = e;
            if (void 0 !== o) {
              var d = [];
              if (void 0 === nD.zoom(e, t.path)) {
                var h = t.path[0],
                  _ = t.path[1];
                N.statefulSimpleContainerKeys.includes(h)
                  ? d.push({
                      type: rq.Update,
                      path: [],
                      props: (0, rA._)({}, h, {}),
                    })
                  : N.statefulTableContainerKeys.includes(h) &&
                    (void 0 === nD.zoom(e, [h]) &&
                      d.push({
                        type: rq.Update,
                        path: [],
                        props: (0, rA._)({}, h, new rG()),
                      }),
                    d.push({ type: rQ.Add, path: [h], id: _, data: {} }));
              }
              d.push((0, rU._)((0, rT._)({}, t), { props: o })),
                zc(
                  (l =
                    null !==
                      (m =
                        null === (w = nP.apply(e, d)) || void 0 === w
                          ? void 0
                          : w.data) && void 0 !== m
                      ? m
                      : e)
                );
              var v = !0,
                g = !1,
                b = void 0;
              try {
                for (
                  var w, m, k, x = d[Symbol.iterator]();
                  !(v = (k = x.next()).done);
                  v = !0
                ) {
                  var S = k.value;
                  s.push(
                    (0, rU._)((0, rT._)({}, S), {
                      path: ["states", n].concat((0, rF._)(S.path)),
                    })
                  );
                }
              } catch (e) {
                (g = !0), (b = e);
              } finally {
                try {
                  v || null == x.return || x.return();
                } finally {
                  if (g) throw b;
                }
              }
            }
            return (
              void 0 !== c && s.push((0, rU._)((0, rT._)({}, t), { props: c })),
              [l, s]
            );
          }
          if (t.type === rq.Update) {
            if (0 === t.path.length) return u(t, N.statefulKeys);
            if (Ct(t.path, ["pathAlign"])) return u(t, e9.statefulKeys);
            if (Ct(t.path, ["stroke"])) return u(t, e5.statefulKeys);
            if (Ct(t.path, ["fill"])) return u(t, eZ.statefulKeys);
            if (Ct(t.path, ["shape"])) return u(t, e2.statefulKeys);
            if (Ct(t.path, ["effects", "*"])) return u(t, eT.statefulKeys);
          }
          return [e, [t]];
        }),
        ((tu || (tu = {})).defaultData = function (e) {
          return Mc({
            shape: e2.defaultData(e),
            fill: eZ.defaultData(),
            fills: null,
            stroke: null,
            visible: !0,
            raycastLock: !1,
            eventsPassthrough: !1,
            name: "Shape",
            horizontalConstraint: "Left",
            verticalConstraint: "Top",
            events: [],
            effects: [],
            states: [],
            position: [0, 0],
            rotation: 0,
            scale: [1, 1],
            shear: [0, 0],
            pivot: [0, 0],
          });
        }),
        ((to || (to = {})).defaultData = function () {
          return Lc({
            visible: !0,
            raycastLock: !1,
            eventsPassthrough: !1,
            name: "Group",
            horizontalConstraint: "Left",
            verticalConstraint: "Top",
            events: [],
            effects: [],
            states: [],
            position: [0, 0],
            rotation: 0,
            scale: [1, 1],
            shear: [0, 0],
            pivot: [0, 0],
          });
        }),
        ((z = e9 || (e9 = {})).defaultData = function () {
          return Fc({ orientation: "Tangent", offset: 0, slide: 0 });
        }),
        (z.statefulKeys = ["offset", "slide"]),
        ((td || (td = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "counters", ex.check(th.check), !1),
            f(e, !1, "randoms", ex.check(t_.check), !1),
            f(e, !1, "timers", ex.check(tg.check), !1),
            f(e, !1, "times", ex.check(tp.check), !1),
            e
          );
        }),
        ((th || (th = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "name", oe, !1, ""),
            f(e, !1, "startValue", A, !1),
            f(e, !1, "increment", A, !1),
            f(e, !1, "updateInterval", A, !1),
            f(e, !1, "endValue", X(A), !1),
            f(e, !1, "repeat", X($), !1),
            e
          );
        }),
        ((t_ || (t_ = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "name", oe, !1, ""),
            f(e, !1, "updateInterval", A, !1),
            f(e, !1, "min", A, !1),
            f(e, !1, "max", A, !1),
            f(e, !1, "decimals", Ut, !1),
            e
          );
        });
      var ay =
          (((H = ay || {}).HhMmSs = "HhMmSs"),
          (H.HhMm = "HhMm"),
          (H.Hh = "Hh"),
          (H.Mm = "Mm"),
          (H.Ss = "Ss"),
          (H.Year = "Year"),
          (H.Month = "Month"),
          (H.DayOfYear = "DayOfYear"),
          (H.DayOfMonth = "DayOfMonth"),
          (H.SecondOfDay = "SecondOfDay"),
          H),
        aw = [
          "HhMmSs",
          "HhMm",
          "Hh",
          "Mm",
          "Ss",
          "Year",
          "Month",
          "DayOfYear",
          "DayOfMonth",
          "SecondOfDay",
        ];
      (ay || (ay = {})).check = function (e) {
        if (!aw.includes(e)) throw Error("Invalid value for TimeFormat");
        return e;
      };
      var am =
          (((V = am || {})._12 = "_12"),
          (V._12Ampm = "_12Ampm"),
          (V._24 = "_24"),
          V),
        ak = ["_12", "_12Ampm", "_24"];
      ((am || (am = {})).check = function (e) {
        if (!ak.includes(e)) throw Error("Invalid value for TimeFormat12h24h");
        return e;
      }),
        ((tp || (tp = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "name", oe, !1, ""),
            f(e, !1, "format", ay.check, !1),
            f(e, !1, "format12h24h", am.check, !1),
            f(e, !1, "timeZone", X(oe), !1),
            e
          );
        });
      var ax =
          (((W = ax || {}).Timer = "Timer"), (W.Stopwatch = "Stopwatch"), W),
        aO = ["Timer", "Stopwatch"];
      ((ax || (ax = {})).check = function (e) {
        if (!aO.includes(e)) throw Error("Invalid value for TimerMode");
        return e;
      }),
        ((tv || (tv = {})).check = function (e) {
          switch ((y(e), e.type)) {
            case "HhMmSs":
              return Le(e, "HhMmSs", ea.check), e;
            case "MmSs":
              return Le(e, "MmSs", ei.check), e;
            case "Number":
              return Le(e, "Number", A), e;
            case "Number3Decimal":
              return Le(e, "Number3Decimal", A), e;
            default:
              throw Error("Invalid type for TimerValue");
          }
        }),
        ((tg || (tg = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "name", oe, !1, ""),
            f(e, !1, "mode", ax.check, !1),
            f(e, !1, "startValue", tv.check, !1),
            f(e, !1, "endValue", tv.check, !1),
            f(e, !1, "hasEnd", $, !1),
            f(e, !1, "repeat", $, !1),
            e
          );
        }),
        ((tb || (tb = {})).check = function (e) {
          return y(e), f(e, !1, "data", el.check, !1), e;
        }),
        ((ty || (ty = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "filename", oe, !1),
            f(e, !1, "data", el.check, !1),
            f(e, !1, "mimeType", oe, !1),
            e
          );
        }),
        ((tw || (tw = {})).check = function (e) {
          return y(e), f(e, !1, "data", el.check, !1), e;
        });
      var aS =
          (((Z = aS || {}).Vector = "Vector"),
          (Z.Quaternion = "Quaternion"),
          Z),
        aA = ["Vector", "Quaternion"];
      ((aS || (aS = {})).check = function (e) {
        if (!aA.includes(e)) throw Error("Invalid value for TrackType");
        return e;
      }),
        ((tm || (tm = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "type", aS.check, !1),
            f(e, !1, "name", oe, !1),
            f(e, !1, "times", vt(A), !1),
            f(e, !1, "values", vt(A), !1),
            e
          );
        }),
        ((tk || (tk = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "duration", A, !1),
            f(e, !1, "tracks", vt(tm.check), !1),
            e
          );
        }),
        ((tx || (tx = {})).check = function (e) {
          return function (t) {
            return (
              y(t),
              f(t, !1, "name", oe, !1),
              f(t, !1, "data", e, !1),
              f(t, !1, "persistent", $, !1, !1),
              t
            );
          };
        }),
        ((tO || (tO = {})).check = function (e) {
          switch ((y(e), e.type)) {
            case "Url":
              return Le(e, "Url", oe), e;
            case "Local":
              return Le(e, "Local", ef.check), e;
            default:
              throw Error("Invalid type for FontData");
          }
        }),
        ((tS || (tS = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "colors", ex.check(tx.check(es.check)), !1),
            f(e, !1, "numbers", ex.check(tx.check(A)), !1),
            f(e, !1, "booleans", ex.check(tx.check($)), !1),
            f(e, !1, "strings", ex.check(tx.check(oe)), !1),
            f(e, !1, "dynamicVariables", td.check, !1),
            f(e, !1, "fonts", ex.check(tx.check(tO.check)), !1),
            f(e, !1, "animations", ex.check(tx.check(tk.check)), !1),
            f(e, !1, "audios", ex.check(tx.check(ty.check)), !1),
            f(e, !1, "images", ex.check(tx.check(tb.check)), !1),
            f(e, !1, "videos", ex.check(tx.check(tw.check)), !1),
            e
          );
        }),
        ((tA || (tA = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "backgroundColor", ed.check(es.check), !1),
            f(e, !1, "objects", ek.check(ts.check), !1),
            e
          );
        }),
        ((tj || (tj = {})).check = function (e) {
          return y(e), f(e, !0, "backgroundColor", ed.check(es.check), !1), e;
        }),
        ((tI || (tI = {})).check = function (e) {
          return y(e), f(e, !1, "schema", X(Ut), !1), e;
        });
      var aj =
          (((q = aj || {}).Cover = "Cover"),
          (q.Contain = "Contain"),
          (q.Actual = "Actual"),
          (q.Responsive = "Responsive"),
          q),
        aI = ["Cover", "Contain", "Actual", "Responsive"];
      (aj || (aj = {})).check = function (e) {
        if (!aI.includes(e))
          throw Error("Invalid value for PresentationSizing");
        return e;
      };
      var aE = (((G = aE || {}).Play = "Play"), (G.Present = "Present"), G),
        aC = ["Play", "Present"];
      (aE || (aE = {})).check = function (e) {
        if (!aC.includes(e)) throw Error("Invalid value for PublishMode");
        return e;
      };
      var aP = (((Y = aP || {}).png = "png"), (Y.jpg = "jpg"), Y),
        aD = ["png", "jpg"];
      ((aP || (aP = {})).check = function (e) {
        if (!aD.includes(e)) throw Error("Invalid value for ImageFormat");
        return e;
      }),
        ((tE || (tE = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "logo", $, !1, !0),
            f(e, !1, "mode", aE.check, !1, "Present"),
            f(e, !1, "presentationSizing", aj.check, !1, "Contain"),
            f(e, !1, "allowPageScroll", $, !1, !0),
            f(e, !1, "showBackground", $, !1, !0),
            e
          );
        });
      var Vc = function (e) {
        return (
          y(e),
          f(e, !1, "presentationSizing", aj.check, !1, "Contain"),
          f(e, !1, "allowPageScroll", $, !1, !0),
          f(e, !1, "showBackground", $, !1, !0),
          f(e, !1, "imageFormat", aP.check, !1, "png"),
          f(e, !1, "imageRatio", Ut, !1, 1),
          e
        );
      };
      (tC || (tC = {})).check = Vc;
      var Nc = function (e) {
        return (
          y(e),
          f(e, !1, "schema", Ut, !1),
          f(e, !1, "scenes", eO.check(tA.check), !1),
          f(e, !1, "assets", tS.check, !1),
          f(e, !1, "publish", tE.check, !1),
          f(e, !1, "framePublish", ex.check(tC.check), !1, tC.default_table()),
          e
        );
      };
      ((tP || (tP = {})).check = Nc),
        ((tP || (tP = {})).defaultData = function () {
          return Nc({
            schema: 6,
            scenes: [
              {
                fi: 0,
                id: "32603ebf4-bd9a-54ba-c1e9-6645c3ee7a53",
                data: { backgroundColor: [0.11, 0.11, 0.11, 1], objects: [] },
              },
            ],
            assets: {
              images: {},
              videos: {},
              colors: {},
              audios: {},
              numbers: {},
              booleans: {},
              strings: {},
              dynamicVariables: {
                counters: {},
                randoms: {},
                timers: {},
                times: {},
              },
              fonts: {},
              animations: {},
            },
            publish: {
              logo: !0,
              mode: "Present",
              presentationSizing: "Contain",
              allowPageScroll: !0,
              showBackground: !0,
            },
            framePublish: {},
          });
        }),
        (0, rT._)({}, nP),
        ((et = tC || (tC = {})).defaultData = function () {
          return Vc({
            presentationSizing: "Contain",
            allowPageScroll: !0,
            showBackground: !0,
            imageFormat: "png",
            imageRatio: 1,
          });
        }),
        (et.default_table = function () {
          return new rG();
        }),
        ((tD || (tD = {})).check = function (e) {
          return (
            y(e), f(e, !0, "position", ei.check, !1), f(e, !0, "zoom", A, !1), e
          );
        }),
        ((tM || (tM = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "scene", em.check, !1),
            f(e, !1, "parent", X(em.check), !1),
            f(e, !1, "object", eb.check(ts.check), !1),
            e
          );
        }),
        ((tT || (tT = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "scene", em.check, !1),
            f(e, !1, "id", em.check, !1),
            e
          );
        }),
        ((tU || (tU = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "scene", em.check, !1),
            f(e, !1, "id", em.check, !1),
            f(e, !1, "parent", X(em.check), !1),
            f(e, !1, "fi", A, !1),
            e
          );
        }),
        ((tB || (tB = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "scene", em.check, !1),
            f(e, !1, "id", em.check, !1),
            f(e, !1, "data", tl.check, !1),
            f(e, !1, "dataStateful", tl.check, !1),
            e
          );
        }),
        ((tL || (tL = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "scene", em.check, !1),
            f(e, !1, "data", tj.check, !1),
            e
          );
        }),
        ((tR || (tR = {})).check = function (e) {
          switch ((y(e), e.type)) {
            case "AddObject":
              return M(e, "AddObject", tM.check);
            case "DeleteObject":
              return M(e, "DeleteObject", tT.check);
            case "MoveObject":
              return M(e, "MoveObject", tU.check);
            case "UpdateObject":
              return M(e, "UpdateObject", tB.check);
            case "UpdateScene":
              return M(e, "UpdateScene", tL.check);
            default:
              throw Error("Invalid type for DocumentUpdate");
          }
        }),
        ((tN || (tN = {})).check = function (e) {
          return (
            y(e),
            f(e, !1, "object", em.check, !1),
            f(e, !1, "state", X(em.check), !1),
            e
          );
        });
      var aM = {},
        aT = (function (e) {
          (0, rM._)(eo, e);
          var t = (0, rV._)(eo);
          function eo() {
            return (0, rP._)(this, eo), t.apply(this, arguments);
          }
          return (
            (0, rD._)(eo, [
              {
                key: "scene",
                get: function () {
                  var e = {};
                  return (
                    Object.setPrototypeOf(e, iz.prototype),
                    (e.__wbg_ptr = this.__wbg_ptr),
                    e
                  );
                },
              },
            ]),
            eo
          );
        })(iN),
        aU = (function () {
          function no(e, t) {
            var n = this;
            (0, rP._)(this, no),
              Ce(this, "canvas"),
              Ce(this, "unloadable", !1),
              Ce(this, "loading", "lazy"),
              Q(this, tF, "local"),
              Ce(this, "data"),
              Ce(this, "wasmURL"),
              Q(this, tz),
              Q(this, tH),
              Q(this, tV),
              Q(this, tW, !1),
              Q(this, tK),
              Q(this, tJ),
              Q(this, tZ),
              Q(this, tq, function () {
                n.data &&
                  (be(n, tz, new aT(n.canvas, n.data)),
                  O(n, tz).resize(
                    [n.canvas.width, n.canvas.height],
                    window.devicePixelRatio
                  ),
                  n.data.publish.mode === aE.Present
                    ? O(n, tz).scene.present()
                    : O(n, tz).scene.start());
              }),
              Q(this, tQ, function () {
                var e;
                null === (e = O(n, tz)) || void 0 === e || e.free(),
                  be(n, tz, void 0);
              }),
              Ce(this, "resize", function () {
                var e,
                  t,
                  i = Math.ceil(n.canvas.clientWidth * window.devicePixelRatio),
                  a = Math.ceil(
                    n.canvas.clientHeight * window.devicePixelRatio
                  );
                (n.canvas.width = i),
                  (n.canvas.height = a),
                  null === (e = O(n, tz)) ||
                    void 0 === e ||
                    e.resize([i, a], window.devicePixelRatio);
                var o = n.canvas.getBoundingClientRect();
                be(n, tJ, o.top + window.scrollY),
                  be(n, tZ, o.left + window.scrollX),
                  null === (t = O(n, tz)) || void 0 === t || t.onFrame();
              }),
              Q(this, tX, function () {
                var e = "global" === n.eventsTarget ? window : n.canvas;
                n.canvas.addEventListener("pointerdown", O(n, tY)),
                  n.canvas.addEventListener("pointerup", O(n, t0)),
                  e.addEventListener("pointermove", O(n, t1)),
                  window.addEventListener("keydown", O(n, t2)),
                  window.addEventListener("keyup", O(n, t3)),
                  n.canvas.addEventListener("pointerenter", O(n, t5)),
                  n.canvas.addEventListener("pointerleave", O(n, t4));
              }),
              Q(this, t$, function () {
                n.canvas.removeEventListener("pointerdown", O(n, tY)),
                  n.canvas.removeEventListener("pointerup", O(n, t0)),
                  window.removeEventListener("pointermove", O(n, t1)),
                  n.canvas.removeEventListener("pointermove", O(n, t1)),
                  window.removeEventListener("keydown", O(n, t2)),
                  window.removeEventListener("keyup", O(n, t3)),
                  n.canvas.removeEventListener("pointerenter", O(n, t5)),
                  n.canvas.removeEventListener("pointerleave", O(n, t4));
              }),
              Q(this, tG, function (e) {
                return [e.pageX - O(n, tZ), e.pageY - O(n, tJ)];
              }),
              Q(this, tY, function (e) {
                var t,
                  i = O(n, tG).call(n, e);
                null === (t = O(n, tz)) ||
                  void 0 === t ||
                  t.scene.onPointerDown(i, "touch" === e.pointerType);
              }),
              Q(this, t0, function (e) {
                var t,
                  i = O(n, tG).call(n, e);
                null === (t = O(n, tz)) ||
                  void 0 === t ||
                  t.scene.onPointerUp(i, "touch" === e.pointerType);
              }),
              Q(this, t1, function (e) {
                var t,
                  i = O(n, tG).call(n, e);
                null === (t = O(n, tz)) ||
                  void 0 === t ||
                  t.scene.onPointerMove(i, "touch" === e.pointerType);
              }),
              Q(this, t2, function (e) {
                var t;
                null === (t = O(n, tz)) ||
                  void 0 === t ||
                  t.scene.onKeyDown(e.key);
              }),
              Q(this, t3, function (e) {
                var t;
                null === (t = O(n, tz)) ||
                  void 0 === t ||
                  t.scene.onKeyUp(e.key);
              }),
              Q(this, t5, function () {
                var e;
                null === (e = O(n, tz)) ||
                  void 0 === e ||
                  e.scene.onPointerEnter(),
                  n.resize();
              }),
              Q(this, t4, function () {
                var e;
                null === (e = O(n, tz)) ||
                  void 0 === e ||
                  e.scene.onPointerLeave();
              }),
              Q(this, t6, function () {
                var e;
                be(n, tK, window.requestAnimationFrame(O(n, t6))),
                  O(n, tW) &&
                    (null === (e = O(n, tz)) || void 0 === e || e.onFrame());
              }),
              (this.canvas = e);
            var i = e.getBoundingClientRect();
            be(this, tJ, i.top + window.scrollY),
              be(this, tZ, i.left + window.scrollX),
              t &&
                (void 0 !== t.unloadable && (this.unloadable = t.unloadable),
                void 0 !== t.loading && (this.loading = t.loading),
                void 0 !== t.eventsTarget &&
                  (this.eventsTarget = t.eventsTarget),
                void 0 !== t.wasmURL && (this.wasmURL = t.wasmURL));
          }
          return (
            (0, rD._)(no, [
              {
                key: "eventsTarget",
                get: function () {
                  return O(this, tF);
                },
                set: function (e) {
                  O(this, tF) !== e &&
                    (be(this, tF, e),
                    O(this, t$).call(this),
                    O(this, tX).call(this));
                },
              },
              {
                key: "load",
                value: function (e) {
                  var t = this;
                  return (0, rC._)(function () {
                    var n, i, a;
                    return (0, rW.Jh)(this, function (o) {
                      switch (o.label) {
                        case 0:
                          return [4, fetch(e)];
                        case 1:
                          if (!(n = o.sent()).ok)
                            throw Error(
                              "Failed to fetch "
                                .concat(e, ": ")
                                .concat(n.statusText)
                            );
                          return [4, n.arrayBuffer()];
                        case 2:
                          return (
                            (i = o.sent()),
                            (a = new Uint8Array(i)),
                            [4, t.start(a)]
                          );
                        case 3:
                          return o.sent(), [2];
                      }
                    });
                  })();
                },
              },
              {
                key: "start",
                value: function (e) {
                  var t = this;
                  return (0, rC._)(function () {
                    var n;
                    return (0, rW.Jh)(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return (
                            Array.isArray(e) && (e = new Uint8Array(e)),
                            (n = er.deserialize(e)),
                            (t.data = n),
                            [
                              4,
                              (function () {
                                var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : "";
                                return (
                                  aM[e] ||
                                    (aM[e] = kc(
                                      e ? { module_or_path: e } : void 0
                                    )),
                                  aM[e]
                                );
                              })(t.wasmURL),
                            ]
                          );
                        case 1:
                          return (
                            i.sent(),
                            t.canvas.addEventListener(
                              "contextmenu",
                              function (e) {
                                return e.preventDefault();
                              }
                            ),
                            n.publish.allowPageScroll ||
                              (t.canvas.addEventListener("wheel", function (e) {
                                return e.preventDefault();
                              }),
                              t.canvas.addEventListener(
                                "touchstart",
                                function (e) {
                                  return e.preventDefault();
                                }
                              )),
                            t.canvas.addEventListener(
                              "webglcontextlost",
                              function () {
                                O(t, tQ).call(t), O(t, tW) && O(t, tq).call(t);
                              }
                            ),
                            O(t, tX).call(t),
                            be(
                              t,
                              tV,
                              new IntersectionObserver(
                                function (e) {
                                  var n = e[0];
                                  be(t, tW, n.isIntersecting),
                                    O(t, tW) &&
                                      void 0 === O(t, tz) &&
                                      O(t, tq).call(t),
                                    !O(t, tW) &&
                                      void 0 !== O(t, tz) &&
                                      t.unloadable &&
                                      O(t, tQ).call(t);
                                },
                                { rootMargin: "200px 0px 0px 0px" }
                              )
                            ),
                            O(t, tV).observe(t.canvas),
                            (t.canvas.style.width = "100%"),
                            (t.canvas.style.height = "100%"),
                            be(t, tH, new ResizeObserver(t.resize)),
                            O(t, tH).observe(t.canvas),
                            be(t, tK, window.requestAnimationFrame(O(t, t6))),
                            "eager" === t.loading && O(t, tq).call(t),
                            [2]
                          );
                      }
                    });
                  })();
                },
              },
              {
                key: "dispose",
                value: function () {
                  var e, t;
                  O(this, t$).call(this),
                    O(this, tQ).call(this),
                    null === (e = O(this, tH)) ||
                      void 0 === e ||
                      e.disconnect(),
                    null === (t = O(this, tV)) ||
                      void 0 === t ||
                      t.disconnect(),
                    O(this, tK) && window.cancelAnimationFrame(O(this, tK));
                },
              },
            ]),
            no
          );
        })();
      function Hana(e) {
        var t = e.url,
          n = (0, rw.useRef)(null);
        return (
          (0, rw.useEffect)(
            function () {
              if (n.current) {
                var e = new aU(n.current, { unloadable: !0 });
                return (
                  e.load(t),
                  function () {
                    e.dispose();
                  }
                );
              }
            },
            [t]
          ),
          (0, rd.jsx)("canvas", { ref: n })
        );
      }
      (tF = new WeakMap()),
        (tz = new WeakMap()),
        (tH = new WeakMap()),
        (tV = new WeakMap()),
        (tW = new WeakMap()),
        (tK = new WeakMap()),
        (tJ = new WeakMap()),
        (tZ = new WeakMap()),
        (tq = new WeakMap()),
        (tQ = new WeakMap()),
        (tX = new WeakMap()),
        (t$ = new WeakMap()),
        (tG = new WeakMap()),
        (tY = new WeakMap()),
        (t0 = new WeakMap()),
        (t1 = new WeakMap()),
        (t2 = new WeakMap()),
        (t3 = new WeakMap()),
        (t5 = new WeakMap()),
        (t4 = new WeakMap()),
        (t6 = new WeakMap());
      var aB = [
        {
          title: "Familiar Design Tools",
          text: "Design on an infinite canvas with frames, pen tool, booleans, shapes and more.",
          sceneUrl: "/scenes/Hana bentos 1.hanacode",
        },
        {
          title: "Powerful Interactivity",
          text: "Create interactive experiences with states, events, and actions.",
          badge: "new",
          sceneUrl: "/scenes/Hana bentos 2.hanacode",
        },
        {
          title: "Animated Experiences",
          text: "Add motion to your designs with States and Transitions.",
          sceneUrl: "/scenes/Hana bentos 3.hanacode",
        },
        {
          title: "Visual Effects",
          text: "Use shadows and blurs to create real-time visual effects. ",
          sceneUrl: "/scenes/Hana bentos 4.hanacode",
        },
        {
          title: "Real-time booleans",
          text: "Create sophisticated boolean systems and animate them in real-time.",
          sceneUrl: "/scenes/Hana bentos 5.hanacode",
        },
        {
          title: "Vector networks",
          text: "Make vector networks and add unique interactivity to it.",
          sceneUrl: "/scenes/Hana bentos 6.hanacode",
        },
        {
          title: "On-canvas Preview",
          text: "Preview your interactivity and animations right on canvas.",
          sceneUrl: "/scenes/Hana bentos 7.hanacode",
        },
        {
          title: "Production-Ready Exports",
          text: "Integrate your interactive designs into your websites, web apps, and digital products.",
          sceneUrl: "/scenes/Hana bentos 8.hanacode",
        },
      ];
      function CollaborateSection() {
        return (0, rd.jsx)(rg.$, {
          theme: "default",
          id: "features",
          title: "A design tool, built for interactivity",
          description:
            "A fast, familiar interface with the tools you need to design real-time interactive interfaces, motion and graphics.",
          children: (0, rd.jsx)("ul", {
            className: rI().list,
            children: aB.map(function (e) {
              var t;
              return (0,
              rd.jsxs)("li", { className: rI().card, children: [(0, rd.jsx)("div", { className: rI().imageContainer, children: (0, rd.jsx)(Hana, { url: e.sceneUrl }) }), (0, rd.jsxs)("div", { className: rI().cardContent, children: [(0, rd.jsx)("h3", { className: rI().cardTitle, children: e.title }), (0, rd.jsx)("p", { className: rI().cardText, children: e.text }), (0, rd.jsx)("div", { className: rv()(rI().cardBadge, ((t = {}), (0, rA._)(t, rI().cardBadgeNew, "new" === e.badge), (0, rA._)(t, rI().cardBadgeCompleted, "completed" === e.badge), t)), children: e.badge })] })] }, e.title);
            }),
          }),
        });
      }
      var aL = n(44392),
        aR = n.n(aL),
        aN = n(85562),
        aF = n.n(aN);
      function copy_extends() {
        return (copy_extends =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var copy = function (e) {
          return rw.createElement(
            "svg",
            copy_extends({ width: 16, height: 16, fill: "none" }, e),
            t8 ||
              (t8 = rw.createElement("path", {
                d: "M2.5 6.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-7Z",
                stroke: "#fff",
              })),
            t7 ||
              (t7 = rw.createElement("path", {
                d: "M11.5 10a.5.5 0 0 0 0 1v-1ZM6 3.5a.5.5 0 0 0 1 0H6ZM7.5 2h5V1h-5v1Zm5.5.5v7h1v-7h-1Zm-.5 7.5h-1v1h1v-1ZM7 3.5v-1H6v1h1Zm6 6a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 14 9.5h-1ZM12.5 2a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 12.5 1v1Zm-5-1A1.5 1.5 0 0 0 6 2.5h1a.5.5 0 0 1 .5-.5V1Z",
                fill: "#fff",
              }))
          );
        },
        az = n(64154),
        aH =
          '<span class="comment">&lt;!-- Add your 2D scene using an iframe --&gt;</span>\n<span class="punctuation">&lt;</span><span class="component">iframe</span> \n    <span class="keyword">src</span>=<span class="string">"https://my.spline.design/interactivedemoscopycopy-M0nGtAJy6gYjlE6vSKYpYbUa/"</span>\n    <span class="keyword">width</span>=<span class="string">"100%"</span>\n    <span class="keyword">height</span>=<span class="string">"100%"</span>\n    <span class="keyword">style</span>=<span class="string">"{{ border: \'none\' }}"</span>\n<span class="punctuation">/&gt;</span>',
        aV = {
          Webflow: {
            "2d": "https://docs.spline.design/doc/exporting-in-hana/docqB6tzlb52",
            "3d": "https://docs.spline.design/doc/integrating-with-webflow/doc9gU5omPVR",
          },
          Framer: {
            "2d": "https://docs.spline.design/doc/exporting-in-hana/docqB6tzlb52",
            "3d": "https://docs.spline.design/doc/integrating-with-framer/docL4CpxxDk8",
          },
          "Wix Studio": {
            "2d": "https://docs.spline.design/doc/exporting-in-hana/docqB6tzlb52",
            "3d": "https://docs.spline.design/doc/integrating-with-wix-studio/docxk2Qw9AI7",
          },
          "HTML / JS": {
            "2d": "https://docs.spline.design/doc/exporting-in-hana/docqB6tzlb52",
            "3d": "https://www.npmjs.com/package/@splinetool/runtime",
          },
          React: {
            "2d": "#",
            "3d": "https://github.com/splinetool/react-spline",
          },
          "Next.js": {
            "2d": "#",
            "3d": "https://github.com/splinetool/react-spline#nextjs",
          },
          Swift: {
            "2d": "#",
            "3d": "https://docs.spline.design/doc/native-3d-embeds-for-ios/docFKClkdmir",
          },
          Kotlin: {
            "2d": "#",
            "3d": "https://docs.spline.design/doc/native-3d-embeds-for-android/docnJvBW765Z",
          },
          Notion:
            "https://docs.spline.design/doc/exporting-in-hana/docqB6tzlb52",
          Shopify:
            "https://docs.spline.design/doc/exporting-in-hana/docqB6tzlb52",
        },
        aW = {
          Webflow: { docsUrl: aV.Webflow["3d"] },
          Framer: { docsUrl: aV.Framer["3d"] },
          "Wix Studio": { docsUrl: aV["Wix Studio"]["3d"] },
          "HTML / JS": { docsUrl: aV["HTML / JS"]["3d"] },
          React: { docsUrl: aV.React["3d"] },
          "Next.js": { docsUrl: aV["Next.js"]["3d"] },
          Swift: { docsUrl: aV.Swift["3d"] },
          Kotlin: { docsUrl: aV.Kotlin["3d"] },
          Notion: { docsUrl: aV.Notion["3d"] },
          Shopify: { docsUrl: aV.Shopify["3d"] },
        },
        aK = {
          Webflow: { docsUrl: aV.Webflow["2d"] },
          Framer: { docsUrl: aV.Framer["2d"] },
          "Wix Studio": { docsUrl: aV["Wix Studio"]["2d"] },
          "HTML / JS": { docsUrl: aV["HTML / JS"]["2d"] },
          Notion: { docsUrl: aV.Notion },
          Shopify: { docsUrl: aV.Shopify },
        },
        aJ = {
          Webflow: aH,
          Framer: aH,
          "Wix Studio": aH,
          "HTML / JS": aH,
          Notion:
            '<span class="keyword">https://my.spline.design/interactivedemoscopycopy-M0nGtAJy6gYjlE6vSKYpYbUa/</span>',
          Shopify: aH,
        },
        CodeBlock = function (e) {
          var t,
            n,
            i = e.code,
            a = e.filename,
            o = e.className,
            c = e.showFooter,
            s = void 0 !== c && c,
            l = e.framework,
            d = e.config,
            h = (0, rR._)((0, rw.useState)(!1), 2),
            _ = h[0],
            v = h[1],
            g =
              (null == i
                ? void 0
                : null === (n = i.split("\n")) || void 0 === n
                ? void 0
                : n.length) || 0,
            b = (void 0 === d ? aW : d)[void 0 === l ? "HTML / JS" : l];
          (0, rw.useEffect)(
            function () {
              if (_) {
                var e = setTimeout(function () {
                  v(!1);
                }, 2e3);
                return function () {
                  return clearTimeout(e);
                };
              }
            },
            [_]
          );
          var w =
            ((t = (0, rC._)(function () {
              var e, t;
              return (0, rW.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      n.trys.push([0, 2, , 3]),
                      (t =
                        (null ==
                        (e = document.querySelector(
                          ".".concat(aF().code, " code")
                        ))
                          ? void 0
                          : e.textContent) || i),
                      [4, navigator.clipboard.writeText(t)]
                    );
                  case 1:
                    return n.sent(), v(!0), [3, 3];
                  case 2:
                    return (
                      console.error("Failed to copy code:", n.sent()), [3, 3]
                    );
                  case 3:
                    return [2];
                }
              });
            })),
            function () {
              return t.apply(this, arguments);
            });
          return (0, rd.jsxs)("div", {
            className: rv()(
              aF().codeContainer,
              o,
              (0, rA._)({}, aF().noFooter, !s)
            ),
            children: [
              a &&
                (0, rd.jsx)("div", {
                  className: aF().codeHeader,
                  children: (0, rd.jsx)("span", { children: a }),
                }),
              (0, rd.jsxs)("div", {
                className: aF().codeGrid,
                children: [
                  (0, rd.jsx)("div", {
                    className: aF().lineNumbers,
                    children: Array.from({ length: g }, function (e, t) {
                      return (0, rd.jsx)("div", { children: t + 1 }, t + 1);
                    }),
                  }),
                  (0, rd.jsx)("div", {
                    className: aF().codeContent,
                    children: (0, rd.jsx)("pre", {
                      className: aF().code,
                      children: (0, rd.jsx)("code", {
                        dangerouslySetInnerHTML: { __html: i },
                      }),
                    }),
                  }),
                ],
              }),
              s &&
                b &&
                (0, rd.jsxs)("div", {
                  className: aF().codeFooter,
                  children: [
                    (0, rd.jsxs)("button", {
                      className: rv()(
                        aF().footerButton,
                        (0, rA._)({}, aF().copied, _)
                      ),
                      onClick: w,
                      children: [
                        _ ? (0, rd.jsx)(az.Z, {}) : (0, rd.jsx)(copy, {}),
                        _ ? "Copied!" : "Copy Code",
                      ],
                    }),
                    (0, rd.jsx)("a", {
                      href: b.docsUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: aF().footerButton,
                      children: "Docs",
                    }),
                  ],
                }),
            ],
          });
        };
      function webflow_extends() {
        return (webflow_extends =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      function framer_extends() {
        return (framer_extends =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      function wix_extends() {
        return (wix_extends =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      function html_extends() {
        return (html_extends =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      function notion_extends() {
        return (notion_extends =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      function shopify_extends() {
        return (shopify_extends =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var aZ = [
        {
          icon: function (e) {
            return rw.createElement(
              "svg",
              webflow_extends(
                {
                  width: 36,
                  height: 36,
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                e
              ),
              t9 ||
                (t9 = rw.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "m35.25 7.5-11.009 21h-10.34l4.607-8.703h-.206C14.5 24.61 8.83 27.78.75 28.5v-8.583s5.169-.298 8.208-3.415H.75V7.5h9.225v7.404l.207-.001 3.77-7.403h6.975v7.357h.208l3.91-7.357H35.25Z",
                  fill: "#fff",
                }))
            );
          },
          name: "Webflow",
        },
        {
          icon: function (e) {
            return rw.createElement(
              "svg",
              framer_extends(
                {
                  width: 36,
                  height: 36,
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                e
              ),
              rt ||
                (rt = rw.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M6.975 23.25H18v10.5L6.975 23.25Z",
                  fill: "#fff",
                })),
              rr ||
                (rr = rw.createElement("path", {
                  d: "M18 12.75H6.975v10.5h22.05L18 12.75ZM6.975 2.25 18 12.75h11.025V2.25H6.975Z",
                  fill: "#fff",
                }))
            );
          },
          name: "Framer",
        },
        {
          icon: function (e) {
            return rw.createElement(
              "svg",
              wix_extends(
                {
                  width: 46,
                  height: 36,
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                e
              ),
              rw.createElement(
                "g",
                { clipPath: "url(#wix_svg__a)" },
                rw.createElement(
                  "mask",
                  {
                    id: "wix_svg__b",
                    style: { maskType: "luminance" },
                    maskUnits: "userSpaceOnUse",
                    x: 0,
                    y: 9,
                    width: 46,
                    height: 18,
                  },
                  rn ||
                    (rn = rw.createElement("path", {
                      d: "M.5 9h44.812v18H.5V9Z",
                      fill: "#fff",
                    }))
                ),
                ri ||
                  (ri = rw.createElement(
                    "g",
                    { mask: "url(#wix_svg__b)" },
                    rw.createElement("path", {
                      d: "M45.311 9h-2.475c-.338 0-.671.086-.97.25a2.099 2.099 0 0 0-.744.693l-3.31 5.066a.216.216 0 0 1-.368 0l-3.31-5.066a2.098 2.098 0 0 0-.744-.693 2.01 2.01 0 0 0-.97-.25h-2.476l5.898 9.025L29.977 27h2.475c.338 0 .672-.086.97-.25.3-.165.555-.402.745-.693l3.277-5.016a.226.226 0 0 1 .08-.074.216.216 0 0 1 .288.074l3.278 5.016c.19.29.445.529.743.693.3.164.632.25.97.25h2.476l-5.865-8.975L45.311 9Zm-20.46 1.841V27h1.183c.233 0 .464-.047.68-.14a1.77 1.77 0 0 0 .575-.4c.165-.17.296-.373.385-.597a1.9 1.9 0 0 0 .135-.704V9h-1.183a1.72 1.72 0 0 0-.68.14 1.77 1.77 0 0 0-.575.4 1.848 1.848 0 0 0-.385.597 1.9 1.9 0 0 0-.135.704ZM22.682 9H21.63c-.562 0-1.108.198-1.548.562-.44.365-.747.873-.872 1.442l-2.355 10.742-2.062-10.027c-.38-1.854-2.214-3.103-4.089-2.566-1.195.342-2.08 1.39-2.339 2.647l-2.04 9.932-2.35-10.727A2.59 2.59 0 0 0 3.1 9.563 2.428 2.428 0 0 0 1.55 9H.5l3.946 18H5.94c1.357 0 2.53-.985 2.812-2.361l2.522-12.28a.324.324 0 0 1 .313-.264c.15 0 .281.11.313.263l2.524 12.282a3.001 3.001 0 0 0 1.004 1.696 2.81 2.81 0 0 0 1.808.663h1.5L22.682 9Z",
                      fill: "#fff",
                    })
                  ))
              ),
              ra ||
                (ra = rw.createElement(
                  "defs",
                  null,
                  rw.createElement(
                    "clipPath",
                    { id: "wix_svg__a" },
                    rw.createElement("path", {
                      fill: "#fff",
                      transform: "translate(.5 9)",
                      d: "M0 0h45v18H0z",
                    })
                  )
                ))
            );
          },
          name: "Wix Studio",
        },
        {
          icon: function (e) {
            return rw.createElement(
              "svg",
              html_extends(
                {
                  width: 36,
                  height: 36,
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                e
              ),
              ro ||
                (ro = rw.createElement("path", {
                  d: "M33 3H3v30h30V3Z",
                  fill: "#fff",
                })),
              ru ||
                (ru = rw.createElement("path", {
                  d: "M23.152 26.438c.605.987 1.391 1.712 2.781 1.712 1.169 0 1.915-.584 1.915-1.39 0-.967-.767-1.31-2.053-1.872l-.704-.302c-2.035-.867-3.386-1.953-3.386-4.248 0-2.114 1.61-3.724 4.129-3.724 1.792 0 3.08.624 4.009 2.257l-2.195 1.41c-.484-.867-1.005-1.208-1.814-1.208-.826 0-1.35.524-1.35 1.208 0 .846.524 1.188 1.734 1.712l.704.302c2.396 1.027 3.748 2.074 3.748 4.428 0 2.538-1.994 3.929-4.671 3.929-2.618 0-4.31-1.248-5.137-2.883l2.29-1.33Zm-9.958.244c.443.786.846 1.45 1.814 1.45.926 0 1.51-.362 1.51-1.771v-9.586h2.82V26.4c0 2.92-1.712 4.248-4.21 4.248-2.257 0-3.564-1.168-4.229-2.575l2.295-1.39Z",
                  fill: "#000",
                }))
            );
          },
          name: "HTML / JS",
        },
        {
          icon: function (e) {
            return rw.createElement(
              "svg",
              notion_extends(
                {
                  width: 36,
                  height: 36,
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                e
              ),
              rs ||
                (rs = rw.createElement(
                  "g",
                  { clipPath: "url(#notion_svg__a)" },
                  rw.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M22.086.082 2.166 1.553C.56 1.692 0 2.743 0 4.001v21.837c0 .98.348 1.82 1.188 2.94l4.683 6.089c.769.98 1.468 1.19 2.937 1.12l23.133-1.4c1.956-.139 2.516-1.05 2.516-2.59V7.43c0-.795-.314-1.025-1.24-1.704L26.7 1.131C25.162.013 24.533-.129 22.086.081ZM9.331 7.028c-1.889.127-2.317.156-3.39-.716l-2.727-2.17c-.277-.28-.138-.63.56-.7l19.15-1.4c1.608-.14 2.445.42 3.074.91l3.284 2.38c.14.07.49.49.07.49L9.576 7.011l-.245.016ZM7.13 31.788V10.932c0-.91.28-1.33 1.117-1.401L30.96 8.2c.77-.07 1.118.42 1.118 1.33v20.716c0 .91-.14 1.681-1.397 1.75l-21.736 1.26c-1.258.07-1.816-.348-1.816-1.47ZM28.585 12.05c.14.63 0 1.26-.63 1.332l-1.047.208v15.398c-.91.49-1.748.77-2.447.77-1.119 0-1.398-.35-2.236-1.4l-6.85-10.778v10.428l2.166.49s0 1.26-1.748 1.26l-4.82.28c-.141-.28 0-.98.488-1.12l1.259-.348V14.78l-1.747-.14c-.14-.63.209-1.54 1.188-1.611l5.172-.348 7.128 10.917v-9.658l-1.817-.21c-.14-.77.419-1.331 1.117-1.4l4.824-.28Z",
                    fill: "#fff",
                  })
                )),
              rf ||
                (rf = rw.createElement(
                  "defs",
                  null,
                  rw.createElement(
                    "clipPath",
                    { id: "notion_svg__a" },
                    rw.createElement("path", {
                      fill: "#fff",
                      d: "M0 0h36v36H0z",
                    })
                  )
                ))
            );
          },
          name: "Notion",
        },
        {
          icon: function (e) {
            return rw.createElement(
              "svg",
              shopify_extends(
                {
                  width: 32,
                  height: 32,
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                e
              ),
              rl ||
                (rl = rw.createElement("path", {
                  d: "m20.272 31.328 9.229-2S26.17 6.796 26.144 6.646c-.027-.147-.147-.247-.27-.247-.124 0-2.468-.173-2.468-.173s-1.628-1.627-1.825-1.8c-.047-.05-.098-.074-.148-.1l-1.161 27.002Zm.765-27.05c-.027 0-.074.024-.098.024-.027 0-.372.101-.914.27-.545-1.575-1.508-3.031-3.209-3.031h-.147c-.496-.62-1.086-.89-1.606-.89-3.972 0-5.876 4.96-6.466 7.475-1.53.472-2.637.817-2.766.867-.864.27-.887.295-.985 1.111-.097.59-2.344 17.99-2.344 17.99l17.352 3.256 1.183-27.072Zm-4.52 1.207v.175c-.958.297-2.02.618-3.057.938.593-2.269 1.701-3.382 2.663-3.802.25.643.395 1.506.395 2.69ZM14.94 1.712a.86.86 0 0 1 .52.175c-1.256.59-2.64 2.096-3.21 5.108-.803.257-1.61.504-2.42.74.668-2.296 2.273-6.023 5.11-6.023Zm.69 13.398s-1.037-.54-2.268-.54c-1.852 0-1.926 1.16-1.926 1.456 0 1.58 4.147 2.195 4.147 5.922 0 2.937-1.852 4.813-4.368 4.813-3.012 0-4.542-1.876-4.542-1.876l.815-2.666s1.581 1.359 2.91 1.359a1.188 1.188 0 0 0 1.237-1.184c0-2.073-3.406-2.174-3.406-5.577 0-2.863 2.05-5.651 6.22-5.651 1.606 0 2.393.466 2.393.466l-1.213 3.478Zm1.58-12.487c.889.103 1.458 1.111 1.825 2.248-.442.15-.938.297-1.48.468v-.32c0-.962-.123-1.753-.344-2.396Z",
                  fill: "#fff",
                }))
            );
          },
          name: "Shopify",
        },
      ];
      function InteractiveSection2D() {
        var e = (0, rR._)((0, rw.useState)("Webflow"), 2),
          t = e[0],
          n = e[1];
        return (0, rd.jsxs)(rg.$, {
          className: aR().section,
          title: (0, rd.jsx)("div", {
            children: (0, rd.jsx)("h2", {
              className: aR().title,
              children: "Ship interactivity for the web",
            }),
          }),
          description:
            "Seamlessly integrate interactive experiences into your websites, web apps, and digital products.",
          children: [
            (0, rd.jsxs)("div", {
              className: aR().content,
              children: [
                (0, rd.jsxs)("div", {
                  className: aR().scene,
                  children: [
                    (0, rd.jsx)(Hana, {
                      url: "/scenes/hana-interactive.hanacode",
                    }),
                    (0, rd.jsx)("div", {
                      className: aR().disclaimer,
                      children: "Move mouse or finger to interact",
                    }),
                    (0, rd.jsx)("a", {
                      href: "https://app.spline.design/ui/5a1fc62a-454e-4ed1-98d4-10f7a15f2c22",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: aR().linkButton,
                      children: "Remix scene",
                    }),
                  ],
                }),
                (0, rd.jsx)(CodeBlock, {
                  code: aJ[t],
                  filename:
                    "HTML / JS" === t
                      ? "SplineComponent.js"
                      : "Webflow" === t
                      ? "Webflow Project"
                      : "Framer" === t
                      ? "Framer Project"
                      : "Notion" === t
                      ? "Notion Embed"
                      : "Shopify" === t
                      ? "Shopify Project"
                      : "Wix Project",
                  framework: t,
                  className: aR().codeEditor,
                  showFooter: !0,
                  config: aK,
                }),
              ],
            }),
            (0, rd.jsx)("div", {
              className: aR().frameworks,
              children: aZ.map(function (e) {
                var i = e.icon,
                  a = e.name;
                return (0, rd.jsxs)(
                  "button",
                  {
                    className: rv()(
                      aR().framework,
                      (0, rA._)({}, aR().active, t === a)
                    ),
                    onClick: function () {
                      return n(a);
                    },
                    children: [
                      (0, rd.jsx)(i, {}),
                      (0, rd.jsx)("span", { children: a }),
                    ],
                  },
                  a
                );
              }),
            }),
          ],
        });
      }
      var aq = n(35541),
        hana = function () {
          return (0, rd.jsxs)(rd.Fragment, {
            children: [
              (0, rd.jsxs)("section", {
                className: rv()(
                  "content content-container section",
                  r_().sectionHeader
                ),
                children: [
                  (0, rd.jsx)(rx.o, {
                    layout: "center",
                    headingLevel: "h1",
                    title: "Hana is a canvas for interactive design by Spline",
                    titleWidth: "580px",
                    description:
                      "A web-based collaborative design tool to create production-ready interactive real-time experiences in 2D.",
                    pWidth: "577px",
                  }),
                  (0, rd.jsxs)("a", {
                    className: rv()(r_().cta, r_().ctaGetStarted),
                    href: "https://app.spline.design",
                    onClick: function () {
                      (0, rS.Wq)("ClickOnMenu", {
                        type: "launch",
                        from: "2d-hero",
                      });
                    },
                    children: [
                      (0, rd.jsx)("span", { children: "Get started" }),
                      " — it’s free ",
                      (0, rd.jsx)(rO.Z, {}),
                    ],
                  }),
                  (0, rd.jsx)(aq.X, {
                    children: (0, rd.jsx)("div", {
                      className: r_().videoContainer,
                      children: (0, rd.jsx)("video", {
                        className: r_().video,
                        autoPlay: !0,
                        playsInline: !0,
                        loop: !0,
                        muted: !0,
                        src: "https://cdn.spline.design/_assets/_videos/spline_2d_editor.mp4",
                        width: "1080",
                        height: "634",
                        onClick: function (e) {
                          e.stopPropagation(), (0, rS.Rg)(e.target);
                        },
                        onPlay: function (e) {
                          e.stopPropagation(), (0, rS.Rg)(e.target);
                        },
                        onPause: function (e) {
                          e.stopPropagation(), (0, rS.Rg)(e.target);
                        },
                      }),
                    }),
                  }),
                ],
              }),
              (0, rd.jsx)(CollaborateSection, {}),
              (0, rd.jsx)(CommentsCollabSection, {}),
              (0, rd.jsx)(InteractiveSection2D, {}),
              (0, rd.jsx)(CTASection, {}),
            ],
          });
        };
    },
    38621: function (e) {
      e.exports = {
        section: "CTASection_section__OFc4f",
        cta: "CTASection_cta__JK8RG",
        ctaGetStarted: "CTASection_ctaGetStarted__6c9DM",
      };
    },
    27859: function (e) {
      e.exports = {
        description: "CollaborateSection_description__F5Wxm",
        list: "CollaborateSection_list__VwQql",
        card: "CollaborateSection_card__hL_mE",
        cardContent: "CollaborateSection_cardContent__wl_0Q",
        cardTitle: "CollaborateSection_cardTitle__pu5Jf",
        cardText: "CollaborateSection_cardText__EGma3",
        cardBadge: "CollaborateSection_cardBadge__hc96_",
        cardBadgeCompleted: "CollaborateSection_cardBadgeCompleted__lp2pB",
        cardBadgeNew: "CollaborateSection_cardBadgeNew__D_sAV",
        imageContainer: "CollaborateSection_imageContainer__r46GA",
      };
    },
    25938: function (e) {
      e.exports = {
        commentsContainer: "CommentsCollabSection_commentsContainer__kIJik",
        commentsVideo: "CommentsCollabSection_commentsVideo__pZlOw",
        featureTilesContainer:
          "CommentsCollabSection_featureTilesContainer__izU_2",
        featureTile: "CommentsCollabSection_featureTile__jpaOO",
        tileIcon: "CommentsCollabSection_tileIcon__NydCF",
        tileContent: "CommentsCollabSection_tileContent__YbtsZ",
        tileTitle: "CommentsCollabSection_tileTitle__rKmzG",
        tileDescription: "CommentsCollabSection_tileDescription__xrjtM",
      };
    },
    44392: function (e) {
      e.exports = {
        section: "InteractiveSection2D_section__NIoQP",
        title: "InteractiveSection2D_title__Vk2sV",
        platforms: "InteractiveSection2D_platforms__FjFX8",
        platform: "InteractiveSection2D_platform__wEnlX",
        content: "InteractiveSection2D_content__J57jc",
        scene: "InteractiveSection2D_scene__4f4pA",
        disclaimer: "InteractiveSection2D_disclaimer__0ZxLv",
        sceneLoading: "InteractiveSection2D_sceneLoading__gWpKB",
        sceneError: "InteractiveSection2D_sceneError__NSj6x",
        frameworks: "InteractiveSection2D_frameworks__7xtMf",
        framework: "InteractiveSection2D_framework__vKwmh",
        active: "InteractiveSection2D_active__D5U4f",
        codeEditor: "InteractiveSection2D_codeEditor__v2L3Q",
        linkButton: "InteractiveSection2D_linkButton__1qxXW",
      };
    },
    85562: function (e) {
      e.exports = {
        codeContainer: "CodeBlock_codeContainer__xJvX7",
        noFooter: "CodeBlock_noFooter__LFLHm",
        codeGrid: "CodeBlock_codeGrid__jaImp",
        codeHeader: "CodeBlock_codeHeader__xWI0g",
        lineNumbers: "CodeBlock_lineNumbers__3kzZJ",
        codeContent: "CodeBlock_codeContent__nmtsY",
        code: "CodeBlock_code__NDowE",
        codeFooter: "CodeBlock_codeFooter__IckEc",
        footerButton: "CodeBlock_footerButton__BN3un",
        copied: "CodeBlock_copied__QrFwQ",
      };
    },
    33042: function (e) {
      e.exports = { content: "MediaContainer_content__QTJE8" };
    },
    75620: function (e) {
      e.exports = {
        container: "AsideContent_container__tsoMZ",
        left: "AsideContent_left__q5YzM",
        right: "AsideContent_right__N2U6S",
        icon: "AsideContent_icon__or7s3",
        center: "AsideContent_center__VSpuC",
        content: "AsideContent_content__td3rj",
        dark: "AsideContent_dark__U2ZaU",
        large: "AsideContent_large__PkdMI",
        title: "AsideContent_title__sWHJH",
        withSoonLabel: "AsideContent_withSoonLabel__UKEVU",
        largeTitle: "AsideContent_largeTitle__KzXvV",
        newLabel: "AsideContent_newLabel__LPkr1",
      };
    },
    37599: function (e) {
      e.exports = {
        title: "Section_title__eyzPR",
        hasDescription: "Section_hasDescription__eTjJf",
        default: "Section_default__P6jiX",
        bigger: "Section_bigger__7cheX",
      };
    },
    66565: function (e) {
      e.exports = {
        section: "SectionHero_section__Z93Er",
        title: "SectionHero_title__v_t8k",
        hasHead: "SectionHero_hasHead__zZj4h",
        backgroundImage: "SectionHero_backgroundImage__Mcu3V",
        head: "SectionHero_head__wADRX",
      };
    },
    35748: function (e) {
      e.exports = {
        sectionHeader: "__2d-editor_sectionHeader__BqHVi",
        cta: "__2d-editor_cta__9FLyq",
        ctaGetStarted: "__2d-editor_ctaGetStarted__Pz1CH",
        noMargin: "__2d-editor_noMargin__7HCgL",
        heroImages: "__2d-editor_heroImages__2jZ6T",
        heroSky: "__2d-editor_heroSky__VxEsA",
        video: "__2d-editor_video__Y_5SK",
        heroDescription: "__2d-editor_heroDescription__p6xVJ",
        heroIcons: "__2d-editor_heroIcons__HZ0QJ",
        lastSection: "__2d-editor_lastSection__H8QIy",
        videoContainer: "__2d-editor_videoContainer__s_1FZ",
      };
    },
    97237: function (e, t, n) {
      "use strict";
      e.exports = n.p + "static/media/hana.01706299.wasm";
    },
  },
  function (e) {
    e.O(0, [1216, 2594, 9774, 2888, 179], function () {
      return e((e.s = 56292));
    }),
      (_N_E = e.O());
  },
]);
