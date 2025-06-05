(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5515],
  {
    17817: function (t, e, n) {
      "use strict";
      var i,
        r = n(67294);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          }).apply(this, arguments);
      }
      e.Z = function (t) {
        return r.createElement(
          "svg",
          _extends(
            {
              width: 17,
              height: 16,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            t
          ),
          i ||
            (i = r.createElement("path", {
              d: "M14 8.5H3m11 0-3 3m3-3-3-3",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }))
        );
      };
    },
    28125: function (t, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/ai-hero.02b3f528.png",
        height: 1080,
        width: 1920,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAACVBMVEUAAAELBRQaDyz8uQuFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEklEQVR4nGNgQAKMMJoJxkIFAACpAAZv0FkeAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    10339: function (t, e, n) {
      "use strict";
      n.d(e, {
        HL: function () {
          return AIBlock;
        },
        O9: function () {
          return FakeButtons;
        },
        KX: function () {
          return FakeInput;
        },
      });
      var i = n(24043),
        r = n(85893),
        a = n(76437),
        s = n.n(a),
        c = n(5459),
        o = n.n(c),
        l = n(35541),
        u = n(67294),
        A = n(80613),
        esm_useInterval = function (t, e) {
          var n = (0, u.useRef)(function () {});
          (0, u.useEffect)(function () {
            n.current = t;
          }),
            (0, u.useEffect)(
              function () {
                if (null !== e) {
                  var t = setInterval(function () {
                    return n.current();
                  }, e || 0);
                  return function () {
                    return clearInterval(t);
                  };
                }
              },
              [e]
            );
        },
        d = n(94184),
        _ = n.n(d);
      function FakeInput(t) {
        var e = t.text;
        return (0, r.jsx)("div", {
          className: s().fakeInput,
          children: (0, r.jsx)(o(), {
            options: {
              strings: Array.isArray(e) ? e : [e],
              autoStart: !0,
              loop: !0,
              delay: 50,
              deleteSpeed: 20,
              pauseFor: 5e3,
            },
          }),
        });
      }
      function FakeButtons(t) {
        var e = t.labels,
          n = t.className,
          a = (0, i._)((0, u.useState)(0), 2),
          c = a[0],
          o = a[1];
        return (
          esm_useInterval(function () {
            o((c + 1) % e.length);
          }, 2200),
          (0, r.jsx)("div", {
            className: _()(s().fakeButtons, n),
            children: e.map(function (t, e) {
              return (0, r.jsx)(A.f5, { active: e === c, children: t }, e);
            }),
          })
        );
      }
      function AIBlock(t) {
        var e = t.title,
          n = t.description,
          i = t.icon,
          a = t.video,
          c = t.children;
        return (0, r.jsxs)("div", {
          className: s().container,
          children: [
            (0, r.jsxs)("div", {
              className: s().left,
              children: [
                i && (0, r.jsx)("div", { className: s().icon, children: i }),
                (0, r.jsx)("h3", { children: e }),
                (0, r.jsx)("p", { children: n }),
                c,
              ],
            }),
            (0, r.jsx)("div", {
              className: s().right,
              children: (0, r.jsx)(l.X, {
                className: s().videoContainer,
                children: (0, r.jsx)("video", {
                  autoPlay: !0,
                  playsInline: !0,
                  loop: !0,
                  muted: !0,
                  src: a,
                  width: "1080",
                  height: "1080",
                  onClick: function (t) {
                    t.stopPropagation();
                  },
                  onPlay: function (t) {
                    t.stopPropagation();
                  },
                  onPause: function (t) {
                    t.stopPropagation();
                  },
                }),
              }),
            }),
          ],
        });
      }
    },
    53106: function (t, e, n) {
      "use strict";
      n.d(e, {
        a: function () {
          return AITextures;
        },
      });
      var i = n(85893),
        r = n(25675),
        a = n.n(r),
        s = n(54266),
        c = n.n(s),
        o = n(35541),
        l = {
          src: "/_next/static/media/mosaic.415ddcd6.png",
          height: 316,
          width: 316,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEV9k62tvMh9j6l+lLCcrLxqfqR/lbRMaXGXssVvh6x7lbmCmblvhqpgd6Knt8SYqLiWp7iUorSarsTAzNCRobZ4jrCRqMSHmbJ+l7ybscidrsWjh+iFAAAAFHRSTlMs/azc+v3xACz86eWs/q6urujg+XCkKQEAAAAJcEhZcwAACxMAAAsTAQCanBgAAABBSURBVHicBcEFAoAwDACxm3aC0xn/fygJkq4YLUIqc5hZ4Ohh6Ds3oraVw1fx2vpq4eHUnL3xFmrfh7lB0uacRX5voQLobotMIAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        u = {
          src: "/_next/static/media/bricks.1e0ed04c.png",
          height: 316,
          width: 316,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAbFBMVEW5bVe3b1iRRjaIQzWWXEzWlHagY1LGemFMaXGtVkPRgWeLRDS/clm4ZlE+LyqwXElwNCijV0TFbFNpMiirWUVeLCHig2KzblmKTDx6QTWUX0+mcFimZlKiVULQgWaUTT3ynXxaOC+aRjaiXEsJGRx1AAAAHHRSTlP96eSv/Cz4/AAuqP6w3Pj+r+jb36gu+q3+8bEr0OpzgwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAENJREFUeJwFwYUBwCAAwLDiMHcFZv//uAR/HrjKeILIW5mEQbFEcAX79cYMNTY+9nYMrLrRTn8TQdKmqw/4WcmxC/4HetIDao0i4xUAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        A = {
          src: "/_next/static/media/concrete.87d688cd.png",
          height: 316,
          width: 316,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEWkopytq6aUko14dnFsameWlI98eXOTkoxMaXGCgHtta2aEg3x2dG+ko560sqyVlI5bWlWPjomLiYSGhH+cmpOopqCysKpsamV3dXC7urWRj4iMVr+4AAAAE3RSTlP6/avtLf6uLAD94+n46bHar9mvvPAIkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAENJREFUeJwFwQkWgCAIBcCPooAt1sO1+x+0GagE4BaFHBh7X4LcEgZRQPTUO/WKuL7mnl5kP62ZBXCZc1lkKOdSHtYfX8oCwb1cUxgAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        d = {
          src: "/_next/static/media/water.945af9ee.png",
          height: 316,
          width: 316,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAV1BMVEVInP+W2P99zP9yxf+CzP9IoP+v5v+Fzf9MaXFzwv9Gm/+r6v+K0/9grv9lsP9auf6X2f+Y3/9xyf+e3v+k5f+S2/99x/9TsP+M0v9zw/+9+v9ewf990/+XgIsuAAAAGXRSTlMq+/Gu6eD8/AAoraLV56bl1KKm///////+3CqgTwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAENJREFUeJwFwQkCwBAMBMBFSOjdILT9/zs7A0HwPmQBtjm5UcbeWVN6FlDTWlVXUO88nJ64Px7N1QuIZvYeGYISY4H8bSoDJ/ANcMwAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        };
      function GridItem(t) {
        var e = t.label,
          n = t.children;
        return (0, i.jsxs)("div", {
          className: c().gridItem,
          children: [
            n,
            (0, i.jsxs)("div", {
              className: c().label,
              children: ["“", e, "”"],
            }),
          ],
        });
      }
      function AITextures() {
        return (0, i.jsxs)("div", {
          className: c().container,
          children: [
            (0, i.jsx)("div", {
              className: c().left,
              children: (0, i.jsx)(o.X, {
                className: c().videoContainer,
                children: (0, i.jsx)("video", {
                  autoPlay: !0,
                  playsInline: !0,
                  loop: !0,
                  muted: !0,
                  src: "https://cdn.spline.design/_assets/_videos/ai/ai_textures_video_loop_square_compressed.mp4",
                  poster:
                    "/_next/static/media/ai_textures_video_loop_square_compressed.c0a3dd9e.png",
                  width: "1080",
                  height: "1080",
                  onClick: function (t) {
                    t.stopPropagation();
                  },
                  onPlay: function (t) {
                    t.stopPropagation();
                  },
                  onPause: function (t) {
                    t.stopPropagation();
                  },
                }),
              }),
            }),
            (0, i.jsxs)("div", {
              className: c().right,
              children: [
                (0, i.jsx)(GridItem, {
                  label: "blue mosaic",
                  children: (0, i.jsx)(a(), {
                    src: l,
                    quality: 100,
                    alt: "mosaic",
                    width: "158",
                    height: "158",
                  }),
                }),
                (0, i.jsx)(GridItem, {
                  label: "water",
                  children: (0, i.jsx)(a(), {
                    src: d,
                    quality: 100,
                    alt: "water",
                    width: "158",
                    height: "158",
                  }),
                }),
                (0, i.jsx)(GridItem, {
                  label: "bricks",
                  children: (0, i.jsx)(a(), {
                    src: u,
                    quality: 100,
                    alt: "bricks",
                    width: "158",
                    height: "158",
                  }),
                }),
                (0, i.jsx)(GridItem, {
                  label: "concrete",
                  children: (0, i.jsx)(a(), {
                    src: A,
                    quality: 100,
                    alt: "concrete",
                    width: "158",
                    height: "158",
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    80613: function (t, e, n) {
      "use strict";
      n.d(e, {
        ak: function () {
          return PlanButton;
        },
        f5: function () {
          return OutlineButton;
        },
        hU: function () {
          return IconButton;
        },
        zx: function () {
          return Button;
        },
      });
      var i = n(72253),
        r = n(14932),
        a = n(47702),
        s = n(85893),
        c = n(94184),
        o = n.n(c),
        l = n(5078),
        u = n.n(l);
      function Button(t) {
        var e = t.children,
          n = t.className,
          c = t.theme,
          l = (0, a._)(t, ["children", "className", "theme"]);
        return (0, s.jsx)(
          "a",
          (0, r._)((0, i._)({}, l), {
            className: o()(n, u().button, u()[void 0 === c ? "default" : c]),
            children: e,
          })
        );
      }
      function IconButton(t) {
        var e = t.text,
          n = t.icon,
          c = t.className,
          l = (0, a._)(t, ["text", "icon", "className"]);
        return (0, s.jsx)(
          Button,
          (0, r._)((0, i._)({ className: o()(u().iconButton, c) }, l), {
            children: (0, s.jsxs)("div", {
              className: u().iconButtonContent,
              children: [(0, s.jsx)("div", { children: e }), n],
            }),
          })
        );
      }
      function PlanButton(t) {
        var e = t.big,
          n = t.type,
          c = t.className,
          l = t.children,
          A = (0, a._)(t, ["big", "type", "className", "children"]);
        return (0, s.jsx)(
          Button,
          (0, r._)(
            (0, i._)(
              {
                className: o()(
                  u().planButton,
                  e && u().isBig,
                  "free" === n && u().isFree,
                  "super" === n && u().isSuper,
                  "team" === n && u().isTeam,
                  "starter" === n && u().isStarter,
                  c
                ),
              },
              A
            ),
            { children: l }
          )
        );
      }
      function OutlineButton(t) {
        var e = t.children,
          n = t.className,
          c = t.active,
          l = void 0 !== c && c,
          A = (0, a._)(t, ["children", "className", "active"]);
        return (0, s.jsx)(
          "div",
          (0, r._)((0, i._)({}, A), {
            className: o()(n, u().outlineButton, l && u().active),
            children: e,
          })
        );
      }
    },
    63558: function (t, e, n) {
      "use strict";
      n.d(e, {
        B: function () {
          return Faq;
        },
      });
      var i,
        r,
        a = n(72253),
        s = n(14932),
        c = n(47702),
        o = n(85893),
        l = n(6116),
        u = n(94184),
        A = n.n(u),
        d = n(63768),
        _ = n.n(d),
        h = n(67294);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          }).apply(this, arguments);
      }
      var plus = function (t) {
        return h.createElement(
          "svg",
          _extends(
            {
              width: 16,
              height: 16,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            t
          ),
          i ||
            (i = h.createElement("path", {
              d: "M8 3v10M3 8h10",
              stroke: "#fff",
              strokeLinecap: "round",
              opacity: 0.8,
            }))
        );
      };
      function minus_extends() {
        return (minus_extends =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          }).apply(this, arguments);
      }
      var minus = function (t) {
          return h.createElement(
            "svg",
            minus_extends(
              {
                width: 16,
                height: 16,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              t
            ),
            r ||
              (r = h.createElement("path", {
                d: "M2.5 7.5h11",
                stroke: "#fff",
                strokeLinecap: "round",
                opacity: 0.8,
              }))
          );
        },
        m = n(8043);
      function FaqItem(t) {
        var e = t.title,
          n = t.children,
          i = t.className,
          r = (0, c._)(t, ["title", "children", "className"]);
        return (0, o.jsxs)(
          l.ck,
          (0, s._)((0, a._)({}, r), {
            className: A()(_().item, i),
            children: [
              (0, o.jsxs)(l.xz, {
                className: _().itemTrigger,
                onClick: function (t) {
                  "closed" === t.currentTarget.getAttribute("data-state") &&
                    (0, m.Wq)("OnFaqIemOpen", { id: r.value });
                },
                children: [
                  e,
                  (0, o.jsxs)("div", {
                    className: _().itemIcon,
                    children: [
                      (0, o.jsx)(plus, { className: _().plus }),
                      (0, o.jsx)(minus, { className: _().minus }),
                    ],
                  }),
                ],
              }),
              (0, o.jsx)(l.VY, { className: _().itemContent, children: n }),
            ],
          })
        );
      }
      function Faq(t) {
        var e = t.content;
        return (0, o.jsx)(l.fC, {
          type: "multiple",
          className: _().container,
          children: e.map(function (t) {
            return (0,
            o.jsx)(FaqItem, { title: t.title, value: t.id, children: t.content }, t.id);
          }),
        });
      }
    },
    35541: function (t, e, n) {
      "use strict";
      n.d(e, {
        X: function () {
          return MediaContainer;
        },
      });
      var i = n(85893),
        r = n(94184),
        a = n.n(r),
        s = n(1216),
        c = n(33042),
        o = n.n(c);
      function MediaContainer(t) {
        var e = t.children,
          n = t.className,
          r = t.isLazy,
          c = t.height;
        return (0, i.jsx)("div", {
          className: a()(o().content, n),
          children:
            void 0 === r || r
              ? (0, i.jsx)(s.ZP, {
                  offset: 100,
                  height: void 0 === c ? 518 : c,
                  once: !0,
                  children: e,
                })
              : e,
        });
      }
    },
    86225: function (t, e, n) {
      "use strict";
      n.d(e, {
        $: function () {
          return Section;
        },
      });
      var i = n(72253),
        r = n(14932),
        a = n(47702),
        s = n(85893),
        c = n(94184),
        o = n.n(c),
        l = n(37599),
        u = n.n(l);
      function Section(t) {
        var e = t.theme,
          n = t.className,
          c = t.title,
          l = t.description,
          A = t.children,
          d = (0, a._)(t, [
            "theme",
            "className",
            "title",
            "description",
            "children",
          ]);
        return (0, s.jsxs)(
          "section",
          (0, r._)((0, i._)({}, d), {
            className: o()(
              "content content-container section",
              u().section,
              e && u()[e],
              n
            ),
            children: [
              (0, s.jsx)("h2", {
                className: o()(u().title, l && u().hasDescription),
                children: c,
              }),
              l &&
                (0, s.jsx)("p", {
                  className: o()("description-hero", u().description),
                  children: l,
                }),
              A,
            ],
          })
        );
      }
    },
    12993: function (t, e, n) {
      "use strict";
      n.d(e, {
        _: function () {
          return SectionHero;
        },
      });
      var i = n(72253),
        r = n(14932),
        a = n(47702),
        s = n(85893),
        c = n(94184),
        o = n.n(c),
        l = n(66565),
        u = n.n(l),
        A = n(25675),
        d = n.n(A);
      function SectionHero(t) {
        var e = t.className,
          n = t.title,
          c = t.description,
          l = t.head,
          A = t.backgroundImage,
          _ = t.children,
          h = (0, a._)(t, [
            "className",
            "title",
            "description",
            "head",
            "backgroundImage",
            "children",
          ]);
        return (0, s.jsxs)(
          "section",
          (0, r._)((0, i._)({}, h), {
            className: o()(
              "content content-container section-hero",
              u().section,
              e
            ),
            children: [
              A &&
                (0, s.jsx)("div", {
                  className: u().backgroundImage,
                  children: (0, s.jsx)(d(), { src: A, alt: "hero background" }),
                }),
              l && (0, s.jsx)("div", { className: u().head, children: l }),
              (0, s.jsx)("h1", {
                className: o()("title-hero", u().title, l && u().hasHead),
                children: n,
              }),
              c &&
                (0, s.jsx)("p", {
                  className: o()("description-hero", u().description),
                  children: c,
                }),
              _,
            ],
          })
        );
      }
    },
    58833: function (t, e, n) {
      "use strict";
      n.d(e, {
        $: function () {
          return i.$;
        },
        _: function () {
          return r._;
        },
      });
      var i = n(86225),
        r = n(12993);
    },
    76437: function (t) {
      t.exports = {
        container: "AIBlock_container__LtNB8",
        left: "AIBlock_left__FZGFu",
        icon: "AIBlock_icon__qNsxk",
        fakeInput: "AIBlock_fakeInput__2xhA8",
        fakeButtons: "AIBlock_fakeButtons__r9JGg",
        right: "AIBlock_right__iY_4b",
        videoContainer: "AIBlock_videoContainer__7WCCr",
      };
    },
    54266: function (t) {
      t.exports = {
        container: "AITextures_container__oizkp",
        left: "AITextures_left__Zx8Wg",
        right: "AITextures_right__CH2Na",
        gridItem: "AITextures_gridItem__PTAdz",
        label: "AITextures_label__ScUu2",
        videoContainer: "AITextures_videoContainer__7zxcc",
      };
    },
    5078: function (t) {
      t.exports = {
        button: "Button_button__8jU_S",
        default: "Button_default__QeEpw",
        purple: "Button_purple__1c0Ov",
        gold: "Button_gold__Fkv1n",
        grey: "Button_grey__Lt2Ru",
        blue: "Button_blue__bdrmH",
        gradientBlue: "Button_gradientBlue__ZCW26",
        iconButton: "Button_iconButton__Yww7_",
        iconButtonContent: "Button_iconButtonContent__MzPyR",
        planButton: "Button_planButton__aI7z_",
        isFree: "Button_isFree__TqZLx",
        isSuper: "Button_isSuper__oBJo6",
        isStarter: "Button_isStarter__iipiU",
        isTeam: "Button_isTeam__QlX59",
        isBig: "Button_isBig__wbjZO",
        outlineButton: "Button_outlineButton__z8yIi",
        active: "Button_active__Fwmwl",
      };
    },
    63768: function (t) {
      t.exports = {
        container: "Faq_container__DlpMb",
        item: "Faq_item__6ohSn",
        itemTrigger: "Faq_itemTrigger___XXOn",
        plus: "Faq_plus__misMK",
        minus: "Faq_minus__2Uk1K",
        itemContent: "Faq_itemContent__Rxxgp",
        itemIcon: "Faq_itemIcon__c8m6z",
      };
    },
    33042: function (t) {
      t.exports = { content: "MediaContainer_content__QTJE8" };
    },
    37599: function (t) {
      t.exports = {
        title: "Section_title__eyzPR",
        hasDescription: "Section_hasDescription__eTjJf",
        default: "Section_default__P6jiX",
        bigger: "Section_bigger__7cheX",
      };
    },
    66565: function (t) {
      t.exports = {
        section: "SectionHero_section__Z93Er",
        title: "SectionHero_title__v_t8k",
        hasHead: "SectionHero_hasHead__zZj4h",
        backgroundImage: "SectionHero_backgroundImage__Mcu3V",
        head: "SectionHero_head__wADRX",
      };
    },
  },
]);
