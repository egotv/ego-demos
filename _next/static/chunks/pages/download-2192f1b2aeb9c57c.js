(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1715],
  {
    54968: function (e, i, n) {
      "use strict";
      var t,
        o = n(67294);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (e) {
            for (var i = 1; i < arguments.length; i++) {
              var n = arguments[i];
              for (var t in n)
                Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
            }
            return e;
          }).apply(this, arguments);
      }
      i.Z = function (e) {
        return o.createElement(
          "svg",
          _extends(
            {
              width: 25,
              height: 24,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          t ||
            (t = o.createElement("path", {
              d: "M21.342 17.145a11.961 11.961 0 0 1-1.183 2.126c-.622.887-1.131 1.5-1.524 1.842-.608.56-1.26.846-1.958.862-.5 0-1.105-.143-1.809-.432-.705-.288-1.354-.43-1.947-.43-.622 0-1.289.142-2.002.43-.715.29-1.29.44-1.73.455-.67.029-1.337-.266-2.003-.885-.425-.371-.957-1.007-1.594-1.907-.683-.961-1.245-2.076-1.685-3.347-.471-1.373-.708-2.703-.708-3.99 0-1.474.319-2.746.957-3.811A5.612 5.612 0 0 1 6.16 6.03a5.39 5.39 0 0 1 2.709-.765c.531 0 1.228.165 2.095.488.864.324 1.418.489 1.662.489.181 0 .798-.192 1.842-.576.988-.355 1.822-.503 2.505-.445 1.851.15 3.242.88 4.167 2.194-1.656 1.003-2.475 2.408-2.458 4.21.015 1.404.524 2.572 1.525 3.5.453.43.96.763 1.523.999a16.41 16.41 0 0 1-.388 1.02ZM17.097.44c0 1.1-.402 2.128-1.203 3.079-.967 1.13-2.137 1.783-3.405 1.68a3.437 3.437 0 0 1-.026-.417c0-1.056.46-2.186 1.277-3.11.408-.469.926-.858 1.555-1.168.627-.306 1.22-.475 1.779-.504.016.147.023.294.023.44Z",
              fill: "#fff",
            }))
        );
      };
    },
    90827: function (e, i, n) {
      "use strict";
      var t,
        o = n(67294);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (e) {
            for (var i = 1; i < arguments.length; i++) {
              var n = arguments[i];
              for (var t in n)
                Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
            }
            return e;
          }).apply(this, arguments);
      }
      i.Z = function (e) {
        return o.createElement(
          "svg",
          _extends(
            {
              width: 32,
              height: 33,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          t ||
            (t = o.createElement("path", {
              d: "M3 17.5c0-3 0-8 13-8s13 5 13 8-2 6-5 6-5-3-8-3-5 3-8 3-5-3-5-6Z",
              stroke: "#717DFF",
              strokeWidth: 2,
              strokeLinecap: "round",
            }))
        );
      };
    },
    9561: function (e, i, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/download",
        function () {
          return n(43804);
        },
      ]);
    },
    42437: function (e, i) {
      "use strict";
      i.Z = {
        src: "/_next/static/media/editor-download.9b999160.jpg",
        height: 1160,
        width: 2160,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAdEAACAQQDAAAAAAAAAAAAAAAAAQIDBAchERJT/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEC/9oADAMBAAIRAxEAPwCyFFLF0J95bsOGtegAK8MIulv/2Q==",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    80613: function (e, i, n) {
      "use strict";
      n.d(i, {
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
      var t = n(72253),
        o = n(14932),
        a = n(47702),
        r = n(85893),
        s = n(94184),
        c = n.n(s),
        l = n(5078),
        d = n.n(l);
      function Button(e) {
        var i = e.children,
          n = e.className,
          s = e.theme,
          l = (0, a._)(e, ["children", "className", "theme"]);
        return (0, r.jsx)(
          "a",
          (0, o._)((0, t._)({}, l), {
            className: c()(n, d().button, d()[void 0 === s ? "default" : s]),
            children: i,
          })
        );
      }
      function IconButton(e) {
        var i = e.text,
          n = e.icon,
          s = e.className,
          l = (0, a._)(e, ["text", "icon", "className"]);
        return (0, r.jsx)(
          Button,
          (0, o._)((0, t._)({ className: c()(d().iconButton, s) }, l), {
            children: (0, r.jsxs)("div", {
              className: d().iconButtonContent,
              children: [(0, r.jsx)("div", { children: i }), n],
            }),
          })
        );
      }
      function PlanButton(e) {
        var i = e.big,
          n = e.type,
          s = e.className,
          l = e.children,
          u = (0, a._)(e, ["big", "type", "className", "children"]);
        return (0, r.jsx)(
          Button,
          (0, o._)(
            (0, t._)(
              {
                className: c()(
                  d().planButton,
                  i && d().isBig,
                  "free" === n && d().isFree,
                  "super" === n && d().isSuper,
                  "team" === n && d().isTeam,
                  "starter" === n && d().isStarter,
                  s
                ),
              },
              u
            ),
            { children: l }
          )
        );
      }
      function OutlineButton(e) {
        var i = e.children,
          n = e.className,
          s = e.active,
          l = void 0 !== s && s,
          u = (0, a._)(e, ["children", "className", "active"]);
        return (0, r.jsx)(
          "div",
          (0, o._)((0, t._)({}, u), {
            className: c()(n, d().outlineButton, l && d().active),
            children: i,
          })
        );
      }
    },
    35541: function (e, i, n) {
      "use strict";
      n.d(i, {
        X: function () {
          return MediaContainer;
        },
      });
      var t = n(85893),
        o = n(94184),
        a = n.n(o),
        r = n(1216),
        s = n(33042),
        c = n.n(s);
      function MediaContainer(e) {
        var i = e.children,
          n = e.className,
          o = e.isLazy,
          s = e.height;
        return (0, t.jsx)("div", {
          className: a()(c().content, n),
          children:
            void 0 === o || o
              ? (0, t.jsx)(r.ZP, {
                  offset: 100,
                  height: void 0 === s ? 518 : s,
                  once: !0,
                  children: i,
                })
              : i,
        });
      }
    },
    91943: function (e, i, n) {
      "use strict";
      n.d(i, {
        o: function () {
          return AsideContent;
        },
      });
      var t = n(75766),
        o = n(85893),
        a = n(94184),
        r = n.n(a),
        s = n(75620),
        c = n.n(s);
      function AsideContent(e) {
        var i,
          n,
          a = e.title,
          s = e.description,
          l = e.icon,
          d = e.layout,
          u = e.iconTheme,
          w = e.className,
          b = e.pWidth,
          p = e.largeTitle,
          h = e.soonLabel,
          m = void 0 !== h && h;
        return (0, o.jsxs)("div", {
          className: r()(
            c().container,
            w,
            ((i = {}),
            (0, t._)(i, c().left, "left" === d),
            (0, t._)(i, c().right, "right" === d),
            (0, t._)(i, c().center, "center" === d),
            (0, t._)(i, c().dark, "dark" === u),
            (0, t._)(i, c().none, "none" === u),
            (0, t._)(i, c().large, "large" === u),
            i)
          ),
          children: [
            l && (0, o.jsx)("div", { className: c().icon, children: l }),
            (0, o.jsxs)("div", {
              className: c().content,
              children: [
                (0, o.jsxs)("div", {
                  className: r()(
                    c().title,
                    ((n = {}),
                    (0, t._)(n, c().largeTitle, p),
                    (0, t._)(n, c().withSoonLabel, m),
                    n)
                  ),
                  children: [
                    a,
                    m &&
                      (0, o.jsx)("div", {
                        className: c().newLabel,
                        children: "SOON",
                      }),
                  ],
                }),
                (0, o.jsx)("p", {
                  style: { maxWidth: void 0 === b ? "100%" : b },
                  dangerouslySetInnerHTML: { __html: s },
                }),
              ],
            }),
          ],
        });
      }
    },
    86225: function (e, i, n) {
      "use strict";
      n.d(i, {
        $: function () {
          return Section;
        },
      });
      var t = n(72253),
        o = n(14932),
        a = n(47702),
        r = n(85893),
        s = n(94184),
        c = n.n(s),
        l = n(37599),
        d = n.n(l);
      function Section(e) {
        var i = e.theme,
          n = e.className,
          s = e.title,
          l = e.description,
          u = e.children,
          w = (0, a._)(e, [
            "theme",
            "className",
            "title",
            "description",
            "children",
          ]);
        return (0, r.jsxs)(
          "section",
          (0, o._)((0, t._)({}, w), {
            className: c()(
              "content content-container section",
              d().section,
              i && d()[i],
              n
            ),
            children: [
              (0, r.jsx)("h2", {
                className: c()(d().title, l && d().hasDescription),
                children: s,
              }),
              l &&
                (0, r.jsx)("p", {
                  className: c()("description-hero", d().description),
                  children: l,
                }),
              u,
            ],
          })
        );
      }
    },
    12993: function (e, i, n) {
      "use strict";
      n.d(i, {
        _: function () {
          return SectionHero;
        },
      });
      var t = n(72253),
        o = n(14932),
        a = n(47702),
        r = n(85893),
        s = n(94184),
        c = n.n(s),
        l = n(66565),
        d = n.n(l),
        u = n(25675),
        w = n.n(u);
      function SectionHero(e) {
        var i = e.className,
          n = e.title,
          s = e.description,
          l = e.head,
          u = e.backgroundImage,
          b = e.children,
          p = (0, a._)(e, [
            "className",
            "title",
            "description",
            "head",
            "backgroundImage",
            "children",
          ]);
        return (0, r.jsxs)(
          "section",
          (0, o._)((0, t._)({}, p), {
            className: c()(
              "content content-container section-hero",
              d().section,
              i
            ),
            children: [
              u &&
                (0, r.jsx)("div", {
                  className: d().backgroundImage,
                  children: (0, r.jsx)(w(), { src: u, alt: "hero background" }),
                }),
              l && (0, r.jsx)("div", { className: d().head, children: l }),
              (0, r.jsx)("h1", {
                className: c()("title-hero", d().title, l && d().hasHead),
                children: n,
              }),
              s &&
                (0, r.jsx)("p", {
                  className: c()("description-hero", d().description),
                  children: s,
                }),
              b,
            ],
          })
        );
      }
    },
    58833: function (e, i, n) {
      "use strict";
      n.d(i, {
        $: function () {
          return t.$;
        },
        _: function () {
          return o._;
        },
      });
      var t = n(86225),
        o = n(12993);
    },
    43804: function (e, i, n) {
      "use strict";
      n.r(i),
        n.d(i, {
          __N_SSG: function () {
            return E;
          },
          default: function () {
            return download;
          },
        });
      var t = n(72253),
        o = n(24043),
        a = n(85893),
        r = n(25675),
        s = n.n(r),
        c = n(58833),
        l = n(88834),
        d = n.n(l),
        u = n(94184),
        w = n.n(u),
        b = n(52236),
        p = n(42238),
        h = n.n(p),
        m = n(67294),
        _ = n(66661),
        f = n(80613),
        g = n(5078),
        A = n.n(g),
        v = n(15063),
        x = n.n(v),
        k = {
          MacOSM1:
            "https://cdn.spline.design/assets/Spline-0.12.5-arm64.mac.zip",
          MacOSIntel:
            "https://cdn.spline.design/assets/Spline-0.12.5-x64.mac.zip",
          Windows: "https://cdn.spline.design/assets/Spline-0.12.5.win.exe",
        };
      function MacDownloadButton() {
        return (0, a.jsxs)(_.fC, {
          children: [
            (0, a.jsx)(_.xz, {
              className: w()(A().button, A().default, x().trigger),
              children: "Download for Mac",
            }),
            (0, a.jsxs)(_.VY, {
              className: x().content,
              sideOffset: 8,
              sticky: "always",
              children: [
                (0, a.jsx)(_.ck, {
                  className: w()(x().item),
                  children: (0, a.jsx)("a", {
                    href: k.MacOSIntel,
                    children: "Intel Processor",
                  }),
                }),
                (0, a.jsx)(_.ck, {
                  className: w()(x().item),
                  children: (0, a.jsx)("a", {
                    href: k.MacOSM1,
                    children: "Apple Silicon",
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function WindowsDownloadButton() {
        return (0, a.jsx)(f.zx, {
          href: k.Windows,
          children: "Download Windows",
        });
      }
      function MacAlternativeDownloads() {
        return (0, a.jsxs)("div", {
          className: x().alternative,
          children: [
            "Also available to download for",
            " ",
            (0, a.jsx)("a", {
              href: k.MacOSM1,
              children: "Mac (Apple Silicon)",
            }),
            ",",
            " ",
            (0, a.jsx)("a", { href: k.MacOSIntel, children: "Mac (Intel)" }),
          ],
        });
      }
      function WindowsAlternativeDownloads() {
        return (0, a.jsxs)("div", {
          className: x().alternative,
          children: [
            "Also available to download for ",
            (0, a.jsx)("a", { href: k.Windows, children: "Windows" }),
          ],
        });
      }
      var B = n(90827),
        S = n(8043),
        j = n(17514),
        y = n(54968),
        N = n(35541),
        z = n(42437),
        C = {
          src: "/_next/static/media/download_vision_pro.bf3aab26.png",
          height: 734,
          width: 1166,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAV1BMVEWnb9ebYbzhcbioT76ob+HMasCmWM12U7zCctGQVLd6Ub2DWsHJbdutVbezdOXHeMuVb93YjsvShfDAcuTScM+/fvnSkq7vY8W0ad7IY96NYcqbe/vLffjK7MaTAAAAE3RSTlP8e/yK/IuC/vz7/nT7mYGKhzt41OYHUwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADVJREFUeJxj4JZiZ2fn4uRk4BPlkRQRFxFjEJBmYOFg4mBgEJJhkRAWFmVgEORnZeVlZmMEAC/qAfvtVYrCAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 5,
        },
        M = n(91943),
        O = new (h())(),
        E = !0,
        download = function () {
          var e = (0, b.q_)({
              from: { y: -20, opacity: 0 },
              to: { y: 0, opacity: 1 },
            }),
            i = (0, o._)((0, m.useState)(!1), 2),
            n = i[0],
            r = i[1],
            l = (0, o._)((0, m.useState)(!1), 2),
            u = l[0],
            p = l[1],
            h = (0, m.useMemo)(
              function () {
                return (!n && !u) || (n && u);
              },
              [n, u]
            );
          return (
            (0, m.useEffect)(function () {
              O.setUA(window.navigator.userAgent);
              var e = O.getOS();
              "Mac OS" === e.name ? r(!0) : "Windows" === e.name && p(!0);
            }, []),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(b.q.div, {
                  style: (0, t._)({}, e),
                  children: (0, a.jsxs)(c._, {
                    title: "Bring Spline to your desktop",
                    description:
                      "Continue your 3D design without any distractions. Spline is available for both Mac and Windows.",
                    className: w()(d().section, d().sectionHead),
                    children: [
                      (0, a.jsxs)("div", {
                        className: d().downloadButtons,
                        children: [
                          (n || h) && (0, a.jsx)(MacDownloadButton, {}),
                          (u || h) && (0, a.jsx)(WindowsDownloadButton, {}),
                        ],
                      }),
                      n && (0, a.jsx)(WindowsAlternativeDownloads, {}),
                      u && (0, a.jsx)(MacAlternativeDownloads, {}),
                      (0, a.jsx)("div", {
                        className: d().image,
                        children: (0, a.jsx)(N.X, {
                          children: (0, a.jsx)(s(), {
                            quality: 100,
                            src: z.Z,
                            alt: "Download editor preview",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("section", {
                  className: w()("content content-container section"),
                  children: (0, a.jsx)(M.o, {
                    title: "Spline apps on other platforms",
                    description:
                      "Explore different ways of experiencing your 3D designs.",
                    layout: "center",
                    pWidth: "460px",
                  }),
                }),
                (0, a.jsx)("section", {
                  className: w()(
                    "content content-container section",
                    d().section2
                  ),
                  children: (0, a.jsxs)("div", {
                    className: d().section2Columns,
                    children: [
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)(M.o, {
                            title: "Spline Mirror for visionOS",
                            description:
                              "Experience your Spline designs spatially.",
                            icon: (0, a.jsx)(B.Z, {}),
                            layout: "left",
                            iconTheme: "dark",
                          }),
                          (0, a.jsxs)(f.zx, {
                            href: "https://apps.apple.com/us/app/spline-mirror/id6477194143",
                            target: "_blank",
                            rel: "noreferrer",
                            className: d().button,
                            theme: "blue",
                            onClick: function () {
                              (0, S.Wq)("ClickOnDownloadAppStore", {
                                from: "splineDownloadPage",
                                path: j.O.download.url,
                              });
                            },
                            children: [
                              (0, a.jsx)(y.Z, {}),
                              (0, a.jsx)("span", {
                                children: "Apple App Store",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: w()(d().wrapperImageWithDarkBg),
                        children: (0, a.jsx)(N.X, {
                          className: w()(d().noMargin, d().mediaContainer),
                          children: (0, a.jsx)(s(), {
                            quality: 100,
                            src: C,
                            alt: "Spline Mirror for visionOS",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        };
    },
    5078: function (e) {
      e.exports = {
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
    15063: function (e) {
      e.exports = {
        trigger: "DownloadButtons_trigger__NuDR2",
        item: "DownloadButtons_item__6fAOF",
        content: "DownloadButtons_content__jB82q",
        alternative: "DownloadButtons_alternative__eIvqx",
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
    88834: function (e) {
      e.exports = {
        sectionFoot: "download_sectionFoot__fGE6Y",
        downloadButtons: "download_downloadButtons__nQ74L",
        image: "download_image__Esp7T",
        section2Columns: "download_section2Columns__aBv4e",
        reverse: "download_reverse__64dWd",
        wrapperImageWithDarkBg: "download_wrapperImageWithDarkBg__LclDT",
        mediaContainer: "download_mediaContainer__wegd0",
        section2: "download_section2__zYarU",
        button: "download_button__YeT8b",
        buttonAppStore: "download_buttonAppStore__u7Ed4",
      };
    },
    42238: function (e, i, n) {
      var t;
      !(function (o, a) {
        "use strict";
        var r = "function",
          s = "undefined",
          c = "object",
          l = "string",
          d = "major",
          u = "model",
          w = "name",
          b = "type",
          p = "vendor",
          h = "version",
          m = "architecture",
          _ = "console",
          f = "mobile",
          g = "tablet",
          A = "smarttv",
          v = "wearable",
          x = "embedded",
          k = "Amazon",
          B = "Apple",
          S = "ASUS",
          j = "BlackBerry",
          y = "Browser",
          N = "Chrome",
          z = "Firefox",
          C = "Google",
          M = "Huawei",
          O = "Microsoft",
          E = "Motorola",
          T = "Opera",
          D = "Samsung",
          U = "Sharp",
          P = "Sony",
          q = "Xiaomi",
          I = "Zebra",
          W = "Facebook",
          L = "Chromium OS",
          R = "Mac OS",
          extend = function (e, i) {
            var n = {};
            for (var t in e)
              i[t] && i[t].length % 2 == 0
                ? (n[t] = i[t].concat(e[t]))
                : (n[t] = e[t]);
            return n;
          },
          enumerize = function (e) {
            for (var i = {}, n = 0; n < e.length; n++)
              i[e[n].toUpperCase()] = e[n];
            return i;
          },
          has = function (e, i) {
            return typeof e === l && -1 !== lowerize(i).indexOf(lowerize(e));
          },
          lowerize = function (e) {
            return e.toLowerCase();
          },
          trim = function (e, i) {
            if (typeof e === l)
              return (
                (e = e.replace(/^\s\s*/, "")),
                typeof i === s ? e : e.substring(0, 350)
              );
          },
          rgxMapper = function (e, i) {
            for (var n, t, o, s, l, d, u = 0; u < i.length && !l; ) {
              var w = i[u],
                b = i[u + 1];
              for (n = t = 0; n < w.length && !l && w[n]; )
                if ((l = w[n++].exec(e)))
                  for (o = 0; o < b.length; o++)
                    (d = l[++t]),
                      typeof (s = b[o]) === c && s.length > 0
                        ? 2 === s.length
                          ? typeof s[1] == r
                            ? (this[s[0]] = s[1].call(this, d))
                            : (this[s[0]] = s[1])
                          : 3 === s.length
                          ? typeof s[1] !== r || (s[1].exec && s[1].test)
                            ? (this[s[0]] = d ? d.replace(s[1], s[2]) : a)
                            : (this[s[0]] = d ? s[1].call(this, d, s[2]) : a)
                          : 4 === s.length &&
                            (this[s[0]] = d
                              ? s[3].call(this, d.replace(s[1], s[2]))
                              : a)
                        : (this[s] = d || a);
              u += 2;
            }
          },
          strMapper = function (e, i) {
            for (var n in i)
              if (typeof i[n] === c && i[n].length > 0) {
                for (var t = 0; t < i[n].length; t++)
                  if (has(i[n][t], e)) return "?" === n ? a : n;
              } else if (has(i[n], e)) return "?" === n ? a : n;
            return e;
          },
          F = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
          H = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [h, [w, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [h, [w, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [w, h],
              [/opios[\/ ]+([\w\.]+)/i],
              [h, [w, T + " Mini"]],
              [/\bopr\/([\w\.]+)/i],
              [h, [w, T]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [w, h],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [h, [w, "UC" + y]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
              [h, [w, "WeChat(Win) Desktop"]],
              [/micromessenger\/([\w\.]+)/i],
              [h, [w, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [h, [w, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [h, [w, "IE"]],
              [/yabrowser\/([\w\.]+)/i],
              [h, [w, "Yandex"]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[w, /(.+)/, "$1 Secure " + y], h],
              [/\bfocus\/([\w\.]+)/i],
              [h, [w, z + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [h, [w, T + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [h, [w, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [h, [w, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [h, [w, T + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [h, [w, "MIUI " + y]],
              [/fxios\/([-\w\.]+)/i],
              [h, [w, z]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[w, "360 " + y]],
              [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
              [[w, /(.+)/, "$1 " + y], h],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[w, /_/g, " "], h],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
              ],
              [w, h],
              [
                /(metasr)[\/ ]?([\w\.]+)/i,
                /(lbbrowser)/i,
                /\[(linkedin)app\]/i,
              ],
              [w],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[w, W], h],
              [
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(chromium|instagram)[\/ ]([-\w\.]+)/i,
              ],
              [w, h],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [h, [w, "GSA"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [h, [w, N + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[w, N + " WebView"], h],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [h, [w, "Android " + y]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [w, h],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [h, [w, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [h, w],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                w,
                [
                  h,
                  strMapper,
                  {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/",
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [w, h],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[w, "Netscape"], h],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [h, [w, z + " Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
                /panasonic;(viera)/i,
              ],
              [w, h],
              [/(cobalt)\/([\w\.]+)/i],
              [w, [h, /master.|lts./, ""]],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[m, "amd64"]],
              [/(ia32(?=;))/i],
              [[m, lowerize]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[m, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[m, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[m, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[m, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[m, /ower/, "", lowerize]],
              [/(sun4\w)[;\)]/i],
              [[m, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[m, lowerize]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [u, [p, D], [b, g]],
              [
                /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]([-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [u, [p, D], [b, f]],
              [/\((ip(?:hone|od)[\w ]*);/i],
              [u, [p, B], [b, f]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [u, [p, B], [b, g]],
              [/(macintosh);/i],
              [u, [p, B]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [u, [p, U], [b, f]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [u, [p, M], [b, g]],
              [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [u, [p, M], [b, f]],
              [
                /\b(poco[\w ]+)(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
              ],
              [
                [u, /_/g, " "],
                [p, q],
                [b, f],
              ],
              [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                [u, /_/g, " "],
                [p, q],
                [b, g],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [u, [p, "OPPO"], [b, f]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [u, [p, "Vivo"], [b, f]],
              [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
              [u, [p, "Realme"], [b, f]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [u, [p, E], [b, f]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [u, [p, E], [b, g]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [u, [p, "LG"], [b, g]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [u, [p, "LG"], [b, f]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [u, [p, "Lenovo"], [b, g]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [u, /_/g, " "],
                [p, "Nokia"],
                [b, f],
              ],
              [/(pixel c)\b/i],
              [u, [p, C], [b, g]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [u, [p, C], [b, f]],
              [
                /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [u, [p, P], [b, f]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [u, "Xperia Tablet"],
                [p, P],
                [b, g],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [u, [p, "OnePlus"], [b, f]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [u, [p, k], [b, g]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [u, /(.+)/g, "Fire Phone $1"],
                [p, k],
                [b, f],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [u, p, [b, g]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [u, [p, j], [b, f]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [u, [p, S], [b, g]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [u, [p, S], [b, f]],
              [/(nexus 9)/i],
              [u, [p, "HTC"], [b, g]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [p, [u, /_/g, " "], [b, f]],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [u, [p, "Acer"], [b, g]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [u, [p, "Meizu"], [b, f]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [p, u, [b, f]],
              [
                /(kobo)\s(ereader|touch)/i,
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [p, u, [b, g]],
              [/(surface duo)/i],
              [u, [p, O], [b, g]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [u, [p, "Fairphone"], [b, f]],
              [/(u304aa)/i],
              [u, [p, "AT&T"], [b, f]],
              [/\bsie-(\w*)/i],
              [u, [p, "Siemens"], [b, f]],
              [/\b(rct\w+) b/i],
              [u, [p, "RCA"], [b, g]],
              [/\b(venue[\d ]{2,7}) b/i],
              [u, [p, "Dell"], [b, g]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [u, [p, "Verizon"], [b, g]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [u, [p, "Barnes & Noble"], [b, g]],
              [/\b(tm\d{3}\w+) b/i],
              [u, [p, "NuVision"], [b, g]],
              [/\b(k88) b/i],
              [u, [p, "ZTE"], [b, g]],
              [/\b(nx\d{3}j) b/i],
              [u, [p, "ZTE"], [b, f]],
              [/\b(gen\d{3}) b.+49h/i],
              [u, [p, "Swiss"], [b, f]],
              [/\b(zur\d{3}) b/i],
              [u, [p, "Swiss"], [b, g]],
              [/\b((zeki)?tb.*\b) b/i],
              [u, [p, "Zeki"], [b, g]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[p, "Dragon Touch"], u, [b, g]],
              [/\b(ns-?\w{0,9}) b/i],
              [u, [p, "Insignia"], [b, g]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [u, [p, "NextBook"], [b, g]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[p, "Voice"], u, [b, f]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[p, "LvTel"], u, [b, f]],
              [/\b(ph-1) /i],
              [u, [p, "Essential"], [b, f]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [u, [p, "Envizen"], [b, g]],
              [/\b(trio[-\w\. ]+) b/i],
              [u, [p, "MachSpeed"], [b, g]],
              [/\btu_(1491) b/i],
              [u, [p, "Rotor"], [b, g]],
              [/(shield[\w ]+) b/i],
              [u, [p, "Nvidia"], [b, g]],
              [/(sprint) (\w+)/i],
              [p, u, [b, f]],
              [/(kin\.[onetw]{3})/i],
              [
                [u, /\./g, " "],
                [p, O],
                [b, f],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [u, [p, I], [b, g]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [u, [p, I], [b, f]],
              [/smart-tv.+(samsung)/i],
              [p, [b, A]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [u, /^/, "SmartTV"],
                [p, D],
                [b, A],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [p, "LG"],
                [b, A],
              ],
              [/(apple) ?tv/i],
              [p, [u, B + " TV"], [b, A]],
              [/crkey/i],
              [
                [u, N + "cast"],
                [p, C],
                [b, A],
              ],
              [/droid.+aft(\w)( bui|\))/i],
              [u, [p, k], [b, A]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [u, [p, U], [b, A]],
              [/(bravia[\w ]+)( bui|\))/i],
              [u, [p, P], [b, A]],
              [/(mitv-\w{5}) bui/i],
              [u, [p, q], [b, A]],
              [/Hbbtv.*(technisat) (.*);/i],
              [p, u, [b, A]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [p, trim],
                [u, trim],
                [b, A],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[b, A]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [p, u, [b, _]],
              [/droid.+; (shield) bui/i],
              [u, [p, "Nvidia"], [b, _]],
              [/(playstation [345portablevi]+)/i],
              [u, [p, P], [b, _]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [u, [p, O], [b, _]],
              [/((pebble))app/i],
              [p, u, [b, v]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [u, [p, B], [b, v]],
              [/droid.+; (glass) \d/i],
              [u, [p, C], [b, v]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [u, [p, I], [b, v]],
              [/(quest( 2| pro)?)/i],
              [u, [p, W], [b, v]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [p, [b, x]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
              [u, [b, f]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [u, [b, g]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[b, g]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[b, f]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [u, [p, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [h, [w, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [h, [w, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
              ],
              [w, h],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [h, w],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [w, h],
              [
                /(windows) nt 6\.2; (arm)/i,
                /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
              ],
              [w, [h, strMapper, F]],
              [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [w, "Windows"],
                [h, strMapper, F],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [h, /_/g, "."],
                [w, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [w, R],
                [h, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [h, w],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [w, h],
              [/\(bb(10);/i],
              [h, [w, j]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [h, [w, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [h, [w, z + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [h, [w, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [h, [w, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [h, [w, N + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[w, L], h],
              [
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [w, h],
              [/(sunos) ?([\w\.\d]*)/i],
              [[w, "Solaris"], h],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [w, h],
            ],
          },
          UAParser = function (e, i) {
            if (
              (typeof e === c && ((i = e), (e = a)),
              !(this instanceof UAParser))
            )
              return new UAParser(e, i).getResult();
            var n = typeof o !== s && o.navigator ? o.navigator : a,
              t = e || (n && n.userAgent ? n.userAgent : ""),
              _ = n && n.userAgentData ? n.userAgentData : a,
              A = i ? extend(H, i) : H;
            return (
              (this.getBrowser = function () {
                var e,
                  i = {};
                return (
                  (i[w] = a),
                  (i[h] = a),
                  rgxMapper.call(i, t, A.browser),
                  (i[d] =
                    typeof (e = i[h]) === l
                      ? e.replace(/[^\d\.]/g, "").split(".")[0]
                      : a),
                  n &&
                    n.brave &&
                    typeof n.brave.isBrave == r &&
                    (i[w] = "Brave"),
                  i
                );
              }),
              (this.getCPU = function () {
                var e = {};
                return (e[m] = a), rgxMapper.call(e, t, A.cpu), e;
              }),
              (this.getDevice = function () {
                var e = {};
                return (
                  (e[p] = a),
                  (e[u] = a),
                  (e[b] = a),
                  rgxMapper.call(e, t, A.device),
                  !e[b] && _ && _.mobile && (e[b] = f),
                  "Macintosh" == e[u] &&
                    n &&
                    typeof n.standalone !== s &&
                    n.maxTouchPoints &&
                    n.maxTouchPoints > 2 &&
                    ((e[u] = "iPad"), (e[b] = g)),
                  e
                );
              }),
              (this.getEngine = function () {
                var e = {};
                return (
                  (e[w] = a), (e[h] = a), rgxMapper.call(e, t, A.engine), e
                );
              }),
              (this.getOS = function () {
                var e = {};
                return (
                  (e[w] = a),
                  (e[h] = a),
                  rgxMapper.call(e, t, A.os),
                  !e[w] &&
                    _ &&
                    "Unknown" != _.platform &&
                    (e[w] = _.platform
                      .replace(/chrome os/i, L)
                      .replace(/macos/i, R)),
                  e
                );
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return t;
              }),
              (this.setUA = function (e) {
                return (
                  (t = typeof e === l && e.length > 350 ? trim(e, 350) : e),
                  this
                );
              }),
              this.setUA(t),
              this
            );
          };
        (UAParser.VERSION = "1.0.34"),
          (UAParser.BROWSER = enumerize([w, h, d])),
          (UAParser.CPU = enumerize([m])),
          (UAParser.DEVICE = enumerize([u, p, b, _, f, A, g, v, x])),
          (UAParser.ENGINE = UAParser.OS = enumerize([w, h])),
          typeof i !== s
            ? (e.exports && (i = e.exports = UAParser), (i.UAParser = UAParser))
            : n.amdO
            ? a !==
                (t = function () {
                  return UAParser;
                }.call(i, n, i, e)) && (e.exports = t)
            : typeof o !== s && (o.UAParser = UAParser);
        var V = typeof o !== s && (o.jQuery || o.Zepto);
        if (V && !V.ua) {
          var Z = new UAParser();
          (V.ua = Z.getResult()),
            (V.ua.get = function () {
              return Z.getUA();
            }),
            (V.ua.set = function (e) {
              Z.setUA(e);
              var i = Z.getResult();
              for (var n in i) V.ua[n] = i[n];
            });
        }
      })("object" == typeof window ? window : this);
    },
  },
  function (e) {
    e.O(0, [2236, 1216, 9774, 2888, 179], function () {
      return e((e.s = 9561));
    }),
      (_N_E = e.O());
  },
]);
