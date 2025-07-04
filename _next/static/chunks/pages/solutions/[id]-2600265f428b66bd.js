(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2263],
  {
    17817: function (e, t, n) {
      "use strict";
      var i,
        o = n(67294);
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
        return o.createElement(
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
            (i = o.createElement("path", {
              d: "M14 8.5H3m11 0-3 3m3-3-3-3",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }))
        );
      };
    },
    27653: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/solutions/[id]",
        function () {
          return n(95179);
        },
      ]);
    },
    95179: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return ec;
          },
          default: function () {
            return _id_;
          },
        });
      var i,
        o,
        r,
        s,
        c,
        a,
        l = n(72253),
        u = n(14932),
        d = n(85893),
        m = n(43380),
        _ = n.n(m),
        p = n(94184),
        h = n.n(p),
        f = n(8043),
        x = n(17817),
        v = n(86225),
        g = n(35541),
        y = n(87751),
        w = n.n(y),
        k = n(58833),
        j = n(5034),
        C = n(92375),
        b = n(31894),
        S = n(1950),
        T = n(94845),
        N = n(26986),
        Z = n(69588),
        L = n(66922),
        E = n(15651),
        D = n(24919),
        R = n(47572),
        M = n(68880),
        I = n(34122),
        W = n(19483),
        O = n(92097),
        P = n(24250),
        A = n(85251),
        q = n(15731),
        F = n(40411),
        G = n(55140),
        K = n(15321),
        V = n(21830),
        z = n(8797),
        H = n(95032),
        B = n(13131),
        U = n(67294),
        Q = {
          scale: j.Z,
          accenture: C.Z,
          webflow: b.Z,
          alloy: S.Z,
          wild: T.Z,
          giphy: N.Z,
          luma: Z.Z,
          google: L.Z,
          shopify: E.Z,
          microsoft: D.Z,
          meta: R.Z,
          snapchat: M.Z,
          siemens: I.Z,
          burton: W.Z,
          neon: O.Z,
          columbia: P.Z,
          risd: A.Z,
          stanford: q.Z,
          northwestern: F.Z,
          brown: G.Z,
          yale: K.Z,
          mit: V.Z,
          ucla: z.Z,
          nyu: H.Z,
          berkley: B.Z,
        };
      function Item(e) {
        var t = e.children;
        return (0, d.jsx)("div", { className: w().item, children: t });
      }
      function Trusted(e) {
        var t = e.title,
          n = e.description,
          i = e.logos,
          o = (0, U.useRef)(null);
        return (
          (0, U.useEffect)(
            function () {
              o.current &&
                o.current.querySelectorAll("svg").forEach(function (e) {
                  var t,
                    n = e.getBoundingClientRect().width;
                  null === (t = e.parentElement) ||
                    void 0 === t ||
                    t.style.setProperty("--default-width", String(n) + "px");
                });
            },
            [o]
          ),
          (0, d.jsx)(k.$, {
            theme: "default",
            title: void 0 === t ? "Companies using Spline" : t,
            description:
              void 0 === n
                ? "Join thousands of companies using Spline to create interactive 3D experiences."
                : n,
            children: (0, d.jsx)("div", {
              ref: o,
              className: w().list,
              children: (void 0 === i
                ? ["scale", "google", "shopify", "accenture", "giphy"]
                : i
              ).map(function (e) {
                var t = Q[e];
                return (0, d.jsx)(Item, { children: (0, d.jsx)(t, {}) }, e);
              }),
            }),
          })
        );
      }
      var J = n(3623),
        $ = n.n(J);
      function WorkflowSection(e) {
        var t = e.title,
          n = e.description,
          i = e.workflow;
        return (0, d.jsx)(k.$, {
          theme: "default",
          title: t,
          description: n,
          children: (0, d.jsx)(FeatureTiles, { workflow: i }),
        });
      }
      var FeatureTiles = function (e) {
          var t = e.workflow;
          return (0, d.jsx)("div", {
            className: $().featureTilesContainer,
            children: t.map(function (e, t) {
              var n = e.icon;
              return (0,
              d.jsxs)("div", { className: $().featureTile, children: [(0, d.jsx)("div", { className: $().tileIcon, children: (0, d.jsx)(n, { className: $().icon }) }), (0, d.jsxs)("div", { className: $().tileContent, children: [(0, d.jsx)("h3", { className: $().tileTitle, children: e.title }), (0, d.jsx)("p", { className: $().tileDescription, children: e.description })] })] }, t);
            }),
          });
        },
        X = n(69368),
        Y = n.n(X);
      function CommunityRemixSection(e) {
        var t = e.library,
          n = e.title,
          i = e.description;
        return (0, d.jsx)(k.$, {
          theme: "default",
          title: void 0 === n ? "Remix from the Spline Community" : n,
          description:
            void 0 === i
              ? "Explore templates from our Spline Community product design collection to inspire your next project."
              : i,
          children: (0, d.jsx)("ul", {
            className: Y().grid,
            children: t.map(function (e, t) {
              var n = e.id;
              return (0,
              d.jsx)("li", { className: Y().card, children: (0, d.jsx)("a", { href: "https://app.spline.design/community/file/" + n, target: "_blank", rel: "noreferrer", children: (0, d.jsx)("div", { className: Y().thumbnail, children: (0, d.jsx)("div", { className: Y().thumbnailInnerBorder, children: (0, d.jsx)("img", { src: "https://community-filepreview.spline.design/" + n + ".jpg", alt: "Community template ".concat(n), loading: "lazy" }) }) }) }) }, t);
            }),
          }),
        });
      }
      var ee = n(87050),
        et = n.n(ee),
        en = n(91943);
      function CTASection(e) {
        var t = e.title,
          n = e.description;
        return (0, d.jsxs)("section", {
          className: h()("content content-container", et().section),
          children: [
            (0, d.jsx)(en.o, {
              title: void 0 === t ? "Design. Collaborate. Ship." : t,
              description:
                void 0 === n
                  ? "Superpower your team to deliver production-ready interactive 2D and 3D experiences all in one platform."
                  : n,
              layout: "center",
              size: "large",
              pWidth: "508px",
            }),
            (0, d.jsxs)("a", {
              className: h()(et().cta, et().ctaGetStarted),
              href: "https://app.spline.design",
              onClick: function () {
                (0, f.Wq)("ClickOnMenu", {
                  type: "launch",
                  from: "bottom-cta",
                });
              },
              children: [
                (0, d.jsx)("span", { children: "Get started" }),
                " — it's free ",
                (0, d.jsx)(x.Z, {}),
              ],
            }),
          ],
        });
      }
      var ei = n(63558),
        eo = n(41664),
        er = n.n(eo),
        UseCaseTemplate = function (e) {
          var t,
            n = e.heroTitle,
            i = e.heroDescription,
            o = e.useCaseKey,
            r = e.label,
            s = e.category,
            c = e.heroMedia,
            a = e.trustedTitle,
            l = e.trustedDescription,
            u = e.trustedLogos,
            m = e.workflowTitle,
            p = e.workflowDescription,
            y = e.workflowItems,
            w = e.communityTitle,
            k = e.communityDescription,
            j = e.communityLibrary,
            C = e.faqItems,
            b = e.ctaTitle,
            S = e.ctaDescription;
          return (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)("section", {
                className: _().heroSection,
                children: (0, d.jsxs)("div", {
                  className: _().heroContent,
                  children: [
                    (0, d.jsxs)("div", {
                      className: _().heroText,
                      children: [
                        (0, d.jsxs)("div", {
                          className: _().backLinkContainer,
                          children: [
                            (0, d.jsxs)(er(), {
                              href: "/solutions",
                              className: _().backLink,
                              children: [
                                (0, d.jsx)(x.Z, { className: _().backIcon }),
                                (0, d.jsx)("span", { children: s }),
                              ],
                            }),
                            "/",
                            (0, d.jsx)("span", {
                              className: _().label,
                              children: r,
                            }),
                          ],
                        }),
                        (0, d.jsx)("h1", {
                          className: _().heroTitle,
                          children: n,
                        }),
                        (0, d.jsx)("p", {
                          className: _().heroDescription,
                          children: i,
                        }),
                        (0, d.jsxs)("a", {
                          className: h()(
                            _().cta,
                            _().ctaGetStarted,
                            _().ctaAlignLeft
                          ),
                          href: "https://app.spline.design/",
                          onClick: function () {
                            (0, f.Wq)("ClickOnMenu", {
                              type: "launch",
                              from: o,
                            });
                          },
                          children: [
                            (0, d.jsx)("span", { children: "Get started" }),
                            " — it's free ",
                            (0, d.jsx)(x.Z, {}),
                          ],
                        }),
                      ],
                    }),
                    (0, d.jsx)("div", {
                      className: _().heroMedia,
                      children: (0, d.jsx)(g.X, {
                        className: _().heroVideo,
                        children:
                          ((t = "/assets/_use-cases/".concat(c)),
                          (0, d.jsx)(d.Fragment, {
                            children: (0, d.jsx)("video", {
                              className: _().video,
                              autoPlay: !0,
                              playsInline: !0,
                              loop: !0,
                              muted: !0,
                              src: "".concat(t, ".mp4"),
                              onClick: function (e) {
                                e.stopPropagation(), (0, f.Rg)(e.target);
                              },
                              onPlay: function (e) {
                                e.stopPropagation(), (0, f.Rg)(e.target);
                              },
                              onPause: function (e) {
                                e.stopPropagation(), (0, f.Rg)(e.target);
                              },
                              onError: function (e) {
                                var n,
                                  i = document.createElement("img");
                                (i.src = "".concat(t, ".jpg")),
                                  (i.onerror = function () {
                                    i.src = "".concat(t, ".png");
                                  }),
                                  (i.className = _().video),
                                  (i.style.objectFit = "cover"),
                                  (i.alt = "Hero Image"),
                                  null === (n = e.currentTarget.parentNode) ||
                                    void 0 === n ||
                                    n.replaceChild(i, e.currentTarget);
                              },
                            }),
                          })),
                      }),
                    }),
                  ],
                }),
              }),
              (0, d.jsx)("div", {
                className: h()("content content-container", _().miniSection),
                children: (0, d.jsx)(Trusted, {
                  title: a,
                  description: l,
                  logos: u,
                }),
              }),
              (0, d.jsx)(WorkflowSection, {
                title: m,
                description: p,
                workflow: y,
              }),
              (0, d.jsx)(CommunityRemixSection, {
                title: w,
                description: k,
                library: j,
              }),
              (0, d.jsx)(v.$, {
                theme: "default",
                title: "Frequently Asked Questions",
                className: h()(_().section),
                children: (0, d.jsx)(ei.B, { content: C }),
              }),
              (0, d.jsx)(CTASection, { title: b, description: S }),
            ],
          });
        };
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
      function point_light_extends() {
        return (point_light_extends =
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
      function code_extends() {
        return (code_extends =
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
      var es = {
          pencil: function (e) {
            return U.createElement(
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
              i ||
                (i = U.createElement("path", {
                  clipRule: "evenodd",
                  d: "M5.985 12.327a5.25 5.25 0 0 0-1.233 1.945l-2.4 6.722a.585.585 0 0 0 .723.756l5.779-1.78a5.25 5.25 0 0 0 2.169-1.304l9.885-9.885a2.87 2.87 0 0 0 0-4.062L19.28 3.09a2.87 2.87 0 0 0-4.062 0l-9.233 9.236Z",
                  stroke: "#fff",
                  strokeWidth: 1.5,
                })),
              o ||
                (o = U.createElement("path", {
                  d: "m14.25 5.25 4.5 4.5",
                  stroke: "#fff",
                  strokeWidth: 1.5,
                  strokeLinecap: "square",
                }))
            );
          },
          "point-light": function (e) {
            return U.createElement(
              "svg",
              point_light_extends(
                {
                  width: 24,
                  height: 24,
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                e
              ),
              r ||
                (r = U.createElement("path", {
                  clipRule: "evenodd",
                  d: "M8.25 17.25v-.722a6.063 6.063 0 0 0-1.5-3.992v0a6.062 6.062 0 0 1-1.5-3.992v-.401c0-3.255 2.686-5.893 6-5.893s6 2.638 6 5.893v.4a6.062 6.062 0 0 1-1.5 3.993v0a6.063 6.063 0 0 0-1.5 3.992v.722h-6Z",
                  stroke: "#fff",
                  strokeWidth: 1.5,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                })),
              s ||
                (s = U.createElement("path", {
                  d: "M8.25 17.25v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3",
                  stroke: "#fff",
                  strokeWidth: 1.5,
                  strokeLinecap: "square",
                }))
            );
          },
          code: function (e) {
            return U.createElement(
              "svg",
              code_extends(
                {
                  width: 24,
                  height: 24,
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                e
              ),
              c ||
                (c = U.createElement("path", {
                  d: "M6 16.5 1.5 12 6 7.5M18 16.5l4.5-4.5L18 7.5",
                  stroke: "#fff",
                  strokeWidth: 1.5,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                })),
              a ||
                (a = U.createElement("path", {
                  d: "m13.5 5.25-3 13.5",
                  stroke: "#fff",
                  strokeWidth: 1.5,
                  strokeLinecap: "round",
                }))
            );
          },
        },
        ec = !0,
        _id_ = function (e) {
          var t = e.useCaseData,
            n = e.id,
            i = t.workflow.items.map(function (e) {
              return (0, u._)((0, l._)({}, e), { icon: es[e.icon] });
            }),
            o = t.faq.items.map(function (e) {
              return (0,
              u._)((0, l._)({}, e), { id: String(e.id), content: (0, d.jsx)("p", { children: e.content }) });
            });
          return (0, d.jsx)(UseCaseTemplate, {
            heroTitle: t.hero.title,
            heroDescription: t.hero.description,
            useCaseKey: n,
            heroMedia: t.hero.media,
            label: t.label.value,
            category: t.category.value,
            trustedTitle: t.trusted.title,
            trustedDescription: t.trusted.description,
            trustedLogos: t.trusted.logos,
            workflowTitle: t.workflow.title,
            workflowDescription: t.workflow.description,
            workflowItems: i,
            communityTitle: t.community.title,
            communityDescription: t.community.description,
            communityLibrary: t.community.library,
            faqItems: o,
            ctaTitle: t.cta.title,
            ctaDescription: t.cta.description,
          });
        };
    },
    69368: function (e) {
      e.exports = {
        sectionHead: "CommunityRemixSection_sectionHead__r70Ko",
        sectionFoot: "CommunityRemixSection_sectionFoot__Kdxqt",
        icon: "CommunityRemixSection_icon__ykoaP",
        button: "CommunityRemixSection_button__xwDqU",
        buttonContent: "CommunityRemixSection_buttonContent__0Shwx",
        grid: "CommunityRemixSection_grid__HrEzM",
        card: "CommunityRemixSection_card__2Hzny",
        thumbnail: "CommunityRemixSection_thumbnail__y9KKN",
        thumbnailInnerBorder:
          "CommunityRemixSection_thumbnailInnerBorder__6Mv8y",
        emptyGrid: "CommunityRemixSection_emptyGrid__ieqEP",
        emptyThumb: "CommunityRemixSection_emptyThumb__svVUV",
      };
    },
    87050: function (e) {
      e.exports = {
        section: "CTASection_section__sWtdh",
        cta: "CTASection_cta__yal_e",
        ctaGetStarted: "CTASection_ctaGetStarted__2ZbKN",
      };
    },
    87751: function (e) {
      e.exports = {
        container: "Trusted_container__zMitr",
        list: "Trusted_list__CAKYh",
        item: "Trusted_item__dcM72",
      };
    },
    3623: function (e) {
      e.exports = {
        commentsContainer: "WorkflowSection_commentsContainer__Qhv0R",
        commentsVideo: "WorkflowSection_commentsVideo__ly9SI",
        featureTilesContainer: "WorkflowSection_featureTilesContainer__USm_Q",
        featureTile: "WorkflowSection_featureTile__idFBQ",
        tileIcon: "WorkflowSection_tileIcon___bEAJ",
        tileContent: "WorkflowSection_tileContent__db6Kh",
        tileTitle: "WorkflowSection_tileTitle__8kAAh",
        tileDescription: "WorkflowSection_tileDescription__ybpCz",
      };
    },
    43380: function (e) {
      e.exports = {
        cta: "use-cases_cta__mdLu2",
        ctaGetStarted: "use-cases_ctaGetStarted__77_O9",
        ctaAlignLeft: "use-cases_ctaAlignLeft__60FIS",
        noMargin: "use-cases_noMargin__DPUpV",
        heroSection: "use-cases_heroSection___aVZL",
        heroContent: "use-cases_heroContent__9PVcx",
        heroText: "use-cases_heroText__3s_jJ",
        backLinkContainer: "use-cases_backLinkContainer__0cY1h",
        backLink: "use-cases_backLink__aQi25",
        backIcon: "use-cases_backIcon__oFxx6",
        label: "use-cases_label__xzqgI",
        heroTitle: "use-cases_heroTitle__djvJK",
        heroDescription: "use-cases_heroDescription__hzeLM",
        heroMedia: "use-cases_heroMedia__HwMdw",
        heroVideo: "use-cases_heroVideo__4HL69",
        video: "use-cases_video__KVFtT",
      };
    },
  },
  function (e) {
    e.O(0, [1216, 6116, 747, 7074, 9774, 2888, 179], function () {
      return e((e.s = 27653));
    }),
      (_N_E = e.O());
  },
]);
