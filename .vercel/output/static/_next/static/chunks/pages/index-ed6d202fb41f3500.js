;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    7284: function (e, n, t) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return t(9506)
        },
      ])
    },
    1645: function (e, n, t) {
      'use strict'
      t.d(n, {
        Z: function () {
          return u
        },
      })
      var r = t(2641),
        o = t(3089),
        i = t(9106),
        c = t(7458),
        a = t(8424)
      function u(e) {
        var n = e.children,
          t = (0, i.Z)(e, ['children'])
        return (0, c.jsx)(
          a.xu,
          (0, o.Z)((0, r.Z)({ overflow: 'hidden', borderWidth: 'thin' }, t), {
            children: n,
          })
        )
      }
    },
    1361: function (e, n, t) {
      'use strict'
      t.d(n, {
        T: function () {
          return i
        },
      })
      var r = t(7458),
        o = t(9755)
      function i(e) {
        var n = e.h,
          t = void 0 === n ? 44 : n,
          i = e.w,
          c = void 0 === i ? 44 : i
        return (0, r.jsx)('svg', {
          width: c,
          height: t,
          viewBox: '0 0 22 22',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: (0, r.jsx)('path', {
            d: 'M21 6L11 21M21 6L11 11M21 6L11 0.999997L0.999992 6M0.999992 6L11 11M0.999992 6L11 21M11 11L11 21',
            stroke: o.r.color.brand,
          }),
        })
      }
    },
    4065: function (e, n, t) {
      'use strict'
      t.d(n, {
        C: function () {
          return m
        },
      })
      var r = t(947),
        o = t(2641),
        i = t(3089),
        c = t(4062),
        a = t(7458),
        u = t(2983),
        s = t(6516),
        l = t(8424),
        d = t(4832),
        h = t(3721),
        p = t(601),
        f = t(1645),
        x = t(4883),
        g = t(6380)
      function m() {
        var e,
          n = (0, x.useRouter)(),
          t = (0, u.useState)(''),
          m = t[0],
          v = t[1],
          j = (0, g.N)(m, 250),
          b = p.S.package.searchPackage.useQuery(
            { q: j },
            {
              enabled: Boolean(m),
              keepPreviousData: !0,
              refetchOnWindowFocus: !1,
            }
          ),
          w = (0, s.Kb)({
            items: b.data || [],
            itemToString: function (e) {
              return e ? e.name : ''
            },
            onInputValueChange: (function () {
              var e = (0, r.Z)(function (e) {
                var n
                return (0, c.__generator)(this, function (t) {
                  return (n = e.inputValue), v(n || ''), [2]
                })
              })
              return function (n) {
                return e.apply(this, arguments)
              }
            })(),
            onSelectedItemChange: function (e) {
              e.selectedItem &&
                n.push('/package/'.concat(e.selectedItem.name), void 0, {
                  shallow: !0,
                })
            },
          }),
          k = w.isOpen,
          _ =
            (w.selectedItem,
            w.getToggleButtonProps,
            w.getLabelProps,
            w.getMenuProps),
          y = w.getInputProps,
          Z = w.getComboboxProps,
          C = w.highlightedIndex,
          P = w.getItemProps,
          I = k && b.data && b.data.length > 0
        return (0, a.jsx)(l.kC, {
          direction: 'column',
          align: 'center',
          children: (0, a.jsxs)(
            l.kC,
            (0, i.Z)((0, o.Z)({}, Z()), {
              direction: 'column',
              flex: '1 1 auto',
              w: 'full',
              position: 'relative',
              zIndex: 'dropdown',
              children: [
                (0, a.jsx)(l.kC, {
                  direction: 'row',
                  alignItems: 'baseline',
                  w: 'full',
                  children: (0, a.jsxs)(d.BZ, {
                    w: 'full',
                    children: [
                      (0, a.jsx)(
                        d.II,
                        (0, i.Z)((0, o.Z)({ w: 'full' }, y()), {
                          placeholder: 'Search npm package...',
                          borderRadius: 'none',
                          _hover: { borderColor: 'brand.1000' },
                          _focusVisible: { borderColor: 'brand.1000' },
                          _placeholder: { color: 'brand.1000', opacity: 1 },
                        })
                      ),
                      (0, a.jsx)(d.xH, {
                        children:
                          b.isFetching &&
                          (0, a.jsx)(h.$, {
                            width: 15,
                            height: 15,
                            color: 'brand',
                          }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)(f.Z, {
                  borderWidth: I ? 'thin' : '0px',
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: '12',
                  children: (0, a.jsx)(
                    l.aV,
                    (0, i.Z)((0, o.Z)({}, _()), {
                      display: I ? void 0 : 'none',
                      py: 2,
                      flex: 1,
                      overflowY: 'auto',
                      maxH: '52',
                      zIndex: 'dropdown',
                      bg: 'background.1000',
                      children:
                        null === (e = b.data) || void 0 === e
                          ? void 0
                          : e.map(function (e, n) {
                              return (0,
                              u.createElement)(l.HC, (0, i.Z)((0, o.Z)({}, P({ item: e, index: n })), { key: n, transition: 'background-color 220ms, color 220ms', bg: n === C ? 'brand.1000' : void 0, px: 4, py: 2, cursor: 'pointer' }), (0, a.jsx)(l.xv, { color: n === C ? 'background.1000' : void 0, children: e.name }))
                            }),
                    })
                  ),
                }),
              ],
            })
          ),
        })
      }
    },
    9506: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, {
          default: function () {
            return u
          },
        })
      var r = t(7458),
        o = t(8424),
        i = t(4852),
        c = t(1361),
        a = t(4065)
      function u() {
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(i.h_, {
              description: 'Find out the size of any NPM package',
              imageSrc: '/api/og',
            }),
            (0, r.jsx)(o.M5, {
              height: '100vh',
              width: '100wh',
              children: (0, r.jsxs)(o.kC, {
                w: 'full',
                maxW: 'lg',
                flexDirection: 'column',
                alignItems: 'center',
                children: [
                  (0, r.jsx)(o.M5, {
                    mb: 4,
                    children: (0, r.jsx)(i.rU, {
                      href: '/',
                      children: (0, r.jsx)(c.T, {}),
                    }),
                  }),
                  (0, r.jsx)(o.xu, {
                    mb: 4,
                    px: 4,
                    w: 'full',
                    children: (0, r.jsx)(a.C, {}),
                  }),
                  (0, r.jsx)(o.xv, {
                    children: 'Find the size of any NPM package',
                  }),
                ],
              }),
            }),
          ],
        })
      }
    },
    6380: function (e, n, t) {
      'use strict'
      t.d(n, {
        i: function () {
          return i
        },
        N: function () {
          return a
        },
      })
      var r = t(4883),
        o = t(44)
      function i(e) {
        var n = e.slug,
          t = (0, r.useRouter)(),
          i = (0, o.v)()
        return t.pathname.startsWith('/package/') && n
          ? ''.concat(i, '/p/').concat(n)
          : ''.concat(i, '/')
      }
      var c = t(2983)
      function a(e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 250,
          t = (0, c.useState)(e),
          r = t[0],
          o = t[1]
        return (
          (0, c.useEffect)(
            function () {
              var t = setTimeout(function () {
                o(e)
              }, n)
              return function () {
                clearTimeout(t)
              }
            },
            [e, n]
          ),
          r
        )
      }
    },
    4852: function (e, n, t) {
      'use strict'
      t.d(n, {
        rU: function () {
          return x
        },
        Qj: function () {
          return m
        },
        h_: function () {
          return u
        },
      })
      var r = t(7458),
        o = t(8426),
        i = t.n(o),
        c = (t(2983), t(6380)),
        a = t(44),
        u = function (e) {
          var n = e.title,
            t = e.description,
            o = e.imageSrc,
            u = e.slug,
            s = (0, a.S)(),
            l = (0, c.i)({ slug: u }),
            d = n ? ''.concat(n, ' | NPM Package Size') : 'NPM Package Size',
            h = o ? ''.concat(s).concat(o) : ''.concat(s, '/thumbnail.png'),
            p = ''.concat(s, '/package/').concat(u)
          return (0, r.jsxs)(i(), {
            children: [
              (0, r.jsx)('title', { children: d }),
              (0, r.jsx)('meta', { name: 'title', content: d }),
              (0, r.jsx)('meta', { name: 'description', content: t }),
              (0, r.jsx)('meta', { property: 'og:type', content: 'website' }),
              (0, r.jsx)('meta', {
                property: 'og:url',
                content: u ? p : ''.concat(s, '/'),
              }),
              (0, r.jsx)('meta', { property: 'og:title', content: d }),
              (0, r.jsx)('meta', { property: 'og:description', content: t }),
              (0, r.jsx)('meta', { property: 'og:image', content: h }),
              (0, r.jsx)('meta', {
                property: 'twitter:card',
                content: 'summary_large_image',
              }),
              (0, r.jsx)('meta', {
                property: 'twitter:url',
                content: u ? p : ''.concat(s, '/'),
              }),
              (0, r.jsx)('meta', { property: 'twitter:title', content: d }),
              (0, r.jsx)('meta', {
                property: 'twitter:description',
                content: t,
              }),
              (0, r.jsx)('meta', { property: 'twitter:image', content: h }),
              (0, r.jsx)('link', { rel: 'canonical', href: l }),
            ],
          })
        },
        s = t(2641),
        l = t(3089),
        d = t(9106),
        h = t(9682),
        p = t.n(h),
        f = t(8424)
      function x(e) {
        var n = e.children,
          t = e.hoverStyles,
          o = void 0 === t || t,
          i = (0, d.Z)(e, ['children', 'hoverStyles'])
        return (0, r.jsx)(
          p(),
          (0, l.Z)((0, s.Z)({}, i), {
            children: (0, r.jsx)(f.rU, {
              _hover: { textDecoration: o ? 'underline' : 'none' },
              children: n,
            }),
          })
        )
      }
      var g = t(8165)
      function m(e) {
        var n = e.children,
          t = (0, d.Z)(e, ['children'])
        return (0, r.jsx)(
          g.zx,
          (0, l.Z)(
            (0, s.Z)(
              {
                size: 'sm',
                as: 'a',
                mr: 2,
                target: '_blank',
                variant: 'outline',
                borderColor: 'brand.1000',
                color: 'brand.1000',
                borderRadius: 0,
                _hover: { backgroundColor: 'brand.100' },
                w: 'full',
                h: '14',
              },
              t
            ),
            { children: n }
          )
        )
      }
    },
  },
  function (e) {
    e.O(0, [335, 774, 888, 179], function () {
      return (n = 7284), e((e.s = n))
      var n
    })
    var n = e.O()
    _N_E = n
  },
])
