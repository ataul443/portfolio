webpackJsonp(
  [0],
  {
    JiHu: function(t, e) {},
    L3d9: function(t, e) {},
    Mrrh: function(t, e) {},
    NHnr: function(t, e, a) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var s = a("7+uW"),
        n = {
          name: "Header",
          props: { user: Object },
          data: function() {
            return {
              links: [
                { tag: "Blog", link: "/" },
                { tag: "Projects", link: "/projects" },
                { tag: "Photos", link: "/about" }
              ],
              burgerIsActive: !1
            };
          },
          methods: {
            toggleMenu: function() {
              this.burgerIsActive = !this.burgerIsActive;
            }
          },
          filters: {
            "to-upper": function(t) {
              return t ? t.toUpperCase() : "";
            }
          }
        },
        i = {
          render: function() {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e;
            return a("nav", { staticClass: "navbar is-white" }, [
              a("div", { staticClass: "navbar-brand" }, [
                a("span", { staticClass: "brand" }, [
                  a("strong", [t._v(t._s(t._f("to-upper")(this.user.name)))])
                ]),
                t._v(" "),
                a(
                  "div",
                  {
                    class: {
                      "navbar-burger": !0,
                      "is-active": t.burgerIsActive
                    },
                    on: {
                      click: function(e) {
                        t.toggleMenu();
                      }
                    }
                  },
                  [
                    a("span", { attrs: { "area-hidden": "true" } }),
                    t._v(" "),
                    a("span", { attrs: { "area-hidden": "true" } }),
                    t._v(" "),
                    a("span", { attrs: { "area-hidden": "true" } })
                  ]
                )
              ]),
              t._v(" "),
              a(
                "div",
                { class: { "navbar-menu": !0, "is-active": t.burgerIsActive } },
                [
                  a(
                    "div",
                    { staticClass: "navbar-end" },
                    t._l(t.links, function(e) {
                      return a(
                        "a",
                        {
                          key: e.tag,
                          staticClass: "navbar-item",
                          attrs: { href: e.link }
                        },
                        [a("span", [t._v(t._s(t._f("to-upper")(e.tag)))])]
                      );
                    })
                  )
                ]
              )
            ]);
          },
          staticRenderFns: []
        };
      var r = a("VU/8")(
          n,
          i,
          !1,
          function(t) {
            a("JiHu");
          },
          "data-v-1ebda56a",
          null
        ).exports,
        o = { name: "Banner", props: { user: Object } },
        c = {
          render: function() {
            var t = this,
              e = t.$createElement,
              s = t._self._c || e;
            return s("section", { staticClass: "hero content-container" }, [
              s("div", { staticClass: "hero-body" }, [
                s("div", { staticClass: "container has-text-centered" }, [
                  s(
                    "figure",
                    {
                      staticClass: "image is-128x128",
                      staticStyle: { margin: "0 auto" }
                    },
                    [
                      s("img", {
                        staticClass: "is-rounded profile-image",
                        attrs: { src: a("lhV4"), alt: t.user }
                      })
                    ]
                  ),
                  t._v(" "),
                  s("h1", { staticClass: "big-title" }, [
                    t._v(t._s(t.user.name))
                  ]),
                  t._v(" "),
                  s("h2", { staticClass: "big-subtitle" }, [
                    t._v(t._s(t.user.role))
                  ])
                ])
              ])
            ]);
          },
          staticRenderFns: []
        };
      var l = a("VU/8")(
          o,
          c,
          !1,
          function(t) {
            a("L3d9");
          },
          "data-v-1869c10c",
          null
        ).exports,
        u = {
          name: "ContactLinks",
          props: { platform: Boolean, size: String },
          data: function() {
            return {
              links: [
                { platform: "Github", link: "wwww.github.com/ataul443" },
                { platform: "Email", link: "wwww.gmail.com" },
                { platform: "Facebook", link: "wwww.facebook.com" },
                { platform: "Twitter", link: "wwww.twitter.com" },
                { platform: "Linkedin", link: "wwww.linkedin.com" }
              ]
            };
          },
          methods: {
            getIconClass: function(t) {
              var e = "fa-" + this.size;
              if ("Email" === t) {
                var a = { fas: !0, "fa-envelope-square": !0 };
                return (a[e] = !0), a;
              }
              var s = { fab: !0 };
              return (
                (s[
                  "fa-" + t.toLowerCase() + ("Linkedin" === t ? "" : "-square")
                ] = !0),
                (s[e] = !0),
                s
              );
            },
            getSocialContainerClass: function() {
              var t = { "social-container": !0, "is-flex": !0 };
              return this.platform
                ? ((t["social-container-vertical"] = !0), t)
                : t;
            },
            getSocialItemClass: function() {
              return this.platform
                ? { "social-item": !0, "si-color": !0 }
                : { "social-item": !0, "si-footer-color": !0 };
            }
          }
        },
        p = {
          render: function() {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e;
            return a(
              "div",
              { class: t.getSocialContainerClass() },
              t._l(t.links, function(e) {
                return a(
                  "a",
                  {
                    key: e.link,
                    class: t.getSocialItemClass(),
                    attrs: { href: e.link }
                  },
                  [
                    a("span", { staticClass: "icon is-medium" }, [
                      a("i", { class: t.getIconClass(e.platform) })
                    ]),
                    t._v(" "),
                    a(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.platform,
                            expression: "platform"
                          }
                        ]
                      },
                      [t._v(t._s(e.platform))]
                    )
                  ]
                );
              })
            );
          },
          staticRenderFns: []
        };
      var v = a("VU/8")(
          u,
          p,
          !1,
          function(t) {
            a("TEEe");
          },
          "data-v-b3d654ba",
          null
        ).exports,
        f = {
          name: "HomePageBody",
          props: { user: Object },
          components: { "contact-links": v }
        },
        d = {
          render: function() {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e;
            return a("div", { staticClass: "section is-paddingless" }, [
              a("div", { staticClass: "container" }, [
                a("div", { staticClass: "columns body-container" }, [
                  a(
                    "div",
                    {
                      staticClass:
                        "column is-offset-3 is-4 is-flex vertical-items"
                    },
                    [
                      a("span", { staticClass: "body-title" }, [
                        t._v("About me")
                      ]),
                      t._v(" "),
                      a("span", { staticClass: "about-content" }, [
                        t._v(
                          "\n        " +
                            t._s(t.user.name) +
                            " loves programming, writing, speaking, traveling, and\n      lifting heavy things. He does not love talking about himself in the\n      3rd person. He is the co-founder of Gruntwork, a company that provides\n      DevOps as a Service. He's also the author of two books published by\n      O'Reilly Media: Hello, Startup and Terraform: Up & Running. Previously,\n      he worked as a software engineer at LinkedIn, TripAdvisor, Cisco\n      Systems, and Thomson Financial and got his BS and Masters at Cornell\n      University. For more info, check out his writing, speaking, projects,\n      and photos.\n      "
                        )
                      ])
                    ]
                  ),
                  t._v(" "),
                  a(
                    "div",
                    {
                      staticClass:
                        "column is-offset-1 is-4 is-flex vertical-items"
                    },
                    [
                      a("span", { staticClass: "body-title " }, [
                        t._v("Contact")
                      ]),
                      t._v(" "),
                      a("contact-links", {
                        attrs: { platform: !0, size: "2x" }
                      })
                    ],
                    1
                  )
                ])
              ])
            ]);
          },
          staticRenderFns: []
        };
      var m = { name: "Footer", components: { "contact-links": v } },
        h = {
          render: function() {
            var t = this.$createElement,
              e = this._self._c || t;
            return e("div", { staticClass: "footer foot-container" }, [
              e(
                "div",
                { staticClass: "content content-container" },
                [
                  e("p", { staticClass: "foot-tag" }, [
                    this._v("\n      Made by Shekh Ataul ♥\n    ")
                  ]),
                  this._v(" "),
                  e("contact-links", {
                    staticClass: "contact-links-adjust",
                    attrs: { size: "", platform: !1 }
                  })
                ],
                1
              )
            ]);
          },
          staticRenderFns: []
        };
      var g = {
          name: "App",
          components: {
            "app-header": r,
            "app-banner": l,
            "home-page-body": a("VU/8")(
              f,
              d,
              !1,
              function(t) {
                a("QAMF");
              },
              "data-v-7350b9ba",
              null
            ).exports,
            "app-footer": a("VU/8")(
              m,
              h,
              !1,
              function(t) {
                a("Mrrh");
              },
              "data-v-459dfdfc",
              null
            ).exports
          },
          data: function() {
            return { user: { name: "Dev Shekh", role: "Software Developer" } };
          }
        },
        b = {
          render: function() {
            var t = this.$createElement,
              e = this._self._c || t;
            return e(
              "div",
              [
                e("app-header", { attrs: { user: this.user } }),
                this._v(" "),
                e("app-banner", { attrs: { user: this.user } }),
                this._v(" "),
                e("home-page-body", { attrs: { user: this.user } }),
                this._v(" "),
                e("app-footer")
              ],
              1
            );
          },
          staticRenderFns: []
        };
      var _ = a("VU/8")(
          g,
          b,
          !1,
          function(t) {
            a("gKig");
          },
          null,
          null
        ).exports,
        k = a("/ocq");
      s.a.use(k.a);
      var C = new k.a({
        routes: [{ path: "/", name: "Homepage", component: !1 }]
      });
      (s.a.config.productionTip = !1),
        new s.a({
          el: "#app",
          router: C,
          components: { App: _ },
          template: "<App/>"
        });
    },
    QAMF: function(t, e) {},
    TEEe: function(t, e) {},
    gKig: function(t, e) {},
    lhV4: function(t, e, a) {
      t.exports = a.p + "static/img/profile.c6422f4.jpeg";
    }
  },
  ["NHnr"]
);
//# sourceMappingURL=app.0a9e761cbe5da68c502d.js.map
