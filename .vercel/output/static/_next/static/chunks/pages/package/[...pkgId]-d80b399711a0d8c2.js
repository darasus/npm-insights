;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [601],
  {
    3119: function (e, n, t) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/package/[...pkgId]',
        function () {
          return t(7317)
        },
      ])
    },
    1645: function (e, n, t) {
      'use strict'
      t.d(n, {
        Z: function () {
          return c
        },
      })
      var r = t(2641),
        i = t(3089),
        o = t(9106),
        a = t(7458),
        l = t(8424)
      function c(e) {
        var n = e.children,
          t = (0, o.Z)(e, ['children'])
        return (0, a.jsx)(
          l.xu,
          (0, i.Z)((0, r.Z)({ overflow: 'hidden', borderWidth: 'thin' }, t), {
            children: n,
          })
        )
      }
    },
    1361: function (e, n, t) {
      'use strict'
      t.d(n, {
        T: function () {
          return o
        },
      })
      var r = t(7458),
        i = t(9755)
      function o(e) {
        var n = e.h,
          t = void 0 === n ? 44 : n,
          o = e.w,
          a = void 0 === o ? 44 : o
        return (0, r.jsx)('svg', {
          width: a,
          height: t,
          viewBox: '0 0 22 22',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: (0, r.jsx)('path', {
            d: 'M21 6L11 21M21 6L11 11M21 6L11 0.999997L0.999992 6M0.999992 6L11 11M0.999992 6L11 21M11 11L11 21',
            stroke: i.r.color.brand,
          }),
        })
      }
    },
    4065: function (e, n, t) {
      'use strict'
      t.d(n, {
        C: function () {
          return v
        },
      })
      var r = t(947),
        i = t(2641),
        o = t(3089),
        a = t(4062),
        l = t(7458),
        c = t(2983),
        d = t(6516),
        s = t(8424),
        u = t(4832),
        h = t(3721),
        x = t(601),
        p = t(1645),
        g = t(4883),
        f = t(6380)
      function v() {
        var e,
          n = (0, g.useRouter)(),
          t = (0, c.useState)(''),
          v = t[0],
          m = t[1],
          j = (0, f.N)(v, 250),
          b = x.S.package.searchPackage.useQuery(
            { q: j },
            {
              enabled: Boolean(v),
              keepPreviousData: !0,
              refetchOnWindowFocus: !1,
            }
          ),
          k = (0, d.Kb)({
            items: b.data || [],
            itemToString: function (e) {
              return e ? e.name : ''
            },
            onInputValueChange: (function () {
              var e = (0, r.Z)(function (e) {
                var n
                return (0, a.__generator)(this, function (t) {
                  return (n = e.inputValue), m(n || ''), [2]
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
          w = k.isOpen,
          y =
            (k.selectedItem,
            k.getToggleButtonProps,
            k.getLabelProps,
            k.getMenuProps),
          I = k.getInputProps,
          S = k.getComboboxProps,
          Z = k.highlightedIndex,
          _ = k.getItemProps,
          C = w && b.data && b.data.length > 0
        return (0, l.jsx)(s.kC, {
          direction: 'column',
          align: 'center',
          children: (0, l.jsxs)(
            s.kC,
            (0, o.Z)((0, i.Z)({}, S()), {
              direction: 'column',
              flex: '1 1 auto',
              w: 'full',
              position: 'relative',
              zIndex: 'dropdown',
              children: [
                (0, l.jsx)(s.kC, {
                  direction: 'row',
                  alignItems: 'baseline',
                  w: 'full',
                  children: (0, l.jsxs)(u.BZ, {
                    w: 'full',
                    children: [
                      (0, l.jsx)(
                        u.II,
                        (0, o.Z)((0, i.Z)({ w: 'full' }, I()), {
                          placeholder: 'Search npm package...',
                          borderRadius: 'none',
                          _hover: { borderColor: 'brand.1000' },
                          _focusVisible: { borderColor: 'brand.1000' },
                          _placeholder: { color: 'brand.1000', opacity: 1 },
                        })
                      ),
                      (0, l.jsx)(u.xH, {
                        children:
                          b.isFetching &&
                          (0, l.jsx)(h.$, {
                            width: 15,
                            height: 15,
                            color: 'brand',
                          }),
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)(p.Z, {
                  borderWidth: C ? 'thin' : '0px',
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: '12',
                  children: (0, l.jsx)(
                    s.aV,
                    (0, o.Z)((0, i.Z)({}, y()), {
                      display: C ? void 0 : 'none',
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
                              c.createElement)(s.HC, (0, o.Z)((0, i.Z)({}, _({ item: e, index: n })), { key: n, transition: 'background-color 220ms, color 220ms', bg: n === Z ? 'brand.1000' : void 0, px: 4, py: 2, cursor: 'pointer' }), (0, l.jsx)(s.xv, { color: n === Z ? 'background.1000' : void 0, children: e.name }))
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
    7317: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return S
          },
          default: function () {
            return Z
          },
        })
      var r = t(7458),
        i = t(8424),
        o = t(601),
        a = Intl.NumberFormat('en', {
          notation: 'compact',
          style: 'unit',
          unit: 'byte',
          unitDisplay: 'narrow',
        }),
        l = Intl.NumberFormat('en', {
          notation: 'compact',
          unitDisplay: 'narrow',
        })
      function c(e) {
        return a.format(e)
      }
      var d = t(1645),
        s = t(191),
        u = t(5197),
        h = t(3721),
        x = t(4847),
        p = t(8626),
        g = t(6602),
        f = t(4900)
      function v(e) {
        var n = e.dataKey,
          t = e.label,
          o = e.description,
          a = e.data,
          l = void 0 === a ? [] : a,
          c = e.isLoading,
          v = (0, s.Z)((0, u.dQ)('colors', ['brand.1000', 'brand.400']), 2),
          m = v[0],
          j = v[1],
          b = !c && l.length > 0,
          k = !c && 0 === l.length
        return (0, r.jsx)(i.xu, {
          h: 'full',
          w: 'full',
          children: (0, r.jsxs)(d.Z, {
            display: 'flex',
            flexDirection: 'column',
            h: 'full',
            w: 'full',
            children: [
              c &&
                (0, r.jsxs)(i.kC, {
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  h: 'full',
                  w: 'full',
                  children: [
                    (0, r.jsx)(h.$, { mb: 2 }),
                    (0, r.jsx)(i.xu, {
                      children: (0, r.jsx)(i.xv, {
                        fontSize: 'sm',
                        px: 2,
                        textAlign: 'center',
                        lineHeight: 1.2,
                        children: 'Generating package data...',
                      }),
                    }),
                  ],
                }),
              b &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsxs)(i.kC, {
                      flexDirection: 'column',
                      alignItems: 'center',
                      pt: 4,
                      children: [
                        (0, r.jsx)(i.xv, {
                          fontWeight: 'bold',
                          fontSize: '2xl',
                          children: t,
                        }),
                        (0, r.jsx)(i.xv, { color: 'brand.900', children: o }),
                      ],
                    }),
                    (0, r.jsx)(x.h, {
                      children: (0, r.jsx)(p.T, {
                        data: l,
                        margin: { top: 0, right: 0, left: 0, bottom: 0 },
                        children: (0, r.jsx)(g.u, {
                          type: 'monotoneX',
                          dataKey: n,
                          stroke: m,
                          fill: j,
                        }),
                      }),
                    }),
                  ],
                }),
              k &&
                (0, r.jsxs)(i.kC, {
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  h: 'full',
                  w: 'full',
                  children: [
                    (0, r.jsx)(f.Z, { width: 30, height: 30 }),
                    (0, r.jsx)(i.xv, {
                      fontSize: 'sm',
                      textAlign: 'center',
                      px: 4,
                      children:
                        'Unfortunately no data is available for this package.',
                    }),
                  ],
                }),
            ],
          }),
        })
      }
      var m = t(1861),
        j = t(1294),
        b = t(4852),
        k = t(4065),
        w = t(1361)
      function y(e) {
        var n = e.children
        return (0, r.jsxs)(i.xu, {
          maxW: 'xl',
          m: '0 auto',
          p: 4,
          children: [
            (0, r.jsx)(i.M5, {
              mb: 4,
              children: (0, r.jsx)(b.rU, {
                href: '/',
                children: (0, r.jsx)(w.T, {}),
              }),
            }),
            (0, r.jsx)(i.xu, { mb: 4, children: (0, r.jsx)(k.C, {}) }),
            (0, r.jsx)(i.xu, { children: n }),
          ],
        })
      }
      var I = t(4883)
      var S = !0
      function Z(e) {
        var n,
          t,
          a,
          s,
          u,
          h = e.pkgInitialData,
          x = (function () {
            var e,
              n,
              t,
              r,
              i = (0, I.useRouter)()
            return 'string' ===
              typeof (null === (e = i.query) || void 0 === e ? void 0 : e.pkgId)
              ? null === (n = i.query) || void 0 === n
                ? void 0
                : n.pkgId
              : null === (t = i.query) ||
                void 0 === t ||
                null === (r = t.pkgId) ||
                void 0 === r
              ? void 0
              : r.join('/')
          })(),
          p = o.S.package.getInfo.useQuery(
            { pkgId: x },
            { enabled: !!x, refetchOnWindowFocus: !1, initialData: h }
          ).data,
          g = o.S.package.getSizeHistory.useQuery(
            { pkgId: x },
            { enabled: !!x, refetchOnWindowFocus: !1 }
          ),
          f = o.S.package.getPackageDownloads.useQuery(
            { pkgId: x },
            { enabled: !!x, refetchOnWindowFocus: !1 }
          ),
          k = null === (n = g.data) || void 0 === n ? void 0 : n.sizeHistory,
          w = k
            ? c(
                (null === k ||
                void 0 === k ||
                null ===
                  (t =
                    k[(null === k || void 0 === k ? void 0 : k.length) - 1]) ||
                void 0 === t
                  ? void 0
                  : t.gzip) || 0
              )
            : '',
          S = k
            ? c(
                (null === k ||
                void 0 === k ||
                null ===
                  (a =
                    k[(null === k || void 0 === k ? void 0 : k.length) - 1]) ||
                void 0 === a
                  ? void 0
                  : a.size) || 0
              )
            : '',
          Z = f.data
            ? ((u =
                (null === (s = f.data[f.data.length - 1]) || void 0 === s
                  ? void 0
                  : s.count) || 0),
              l.format(u))
            : ''
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(b.h_, {
              description: "Find out the size of '".concat(x, "'"),
              imageSrc: '/api/ogg?pkgId='
                .concat(
                  null === p || void 0 === p ? void 0 : p.name,
                  '&version='
                )
                .concat(
                  null === p || void 0 === p ? void 0 : p.latestVersion,
                  '&description='
                )
                .concat(null === p || void 0 === p ? void 0 : p.description),
              slug: x,
            }),
            (0, r.jsx)(y, {
              children: (0, r.jsxs)(i.kC, {
                flexDirection: 'column',
                alignItems: 'center',
                children: [
                  (0, r.jsxs)(d.Z, {
                    display: 'flex',
                    flexDirection: 'column',
                    mb: 4,
                    w: 'full',
                    p: 8,
                    bg: 'brand.1000',
                    border: 'none',
                    children: [
                      (0, r.jsx)(i.xu, {
                        children: (0, r.jsx)(i.xv, {
                          fontSize: '4xl',
                          fontWeight: 900,
                          color: 'background.1000',
                          lineHeight: 1,
                          children: ''
                            .concat(
                              null === p || void 0 === p ? void 0 : p.name,
                              '@'
                            )
                            .concat(
                              null === p || void 0 === p
                                ? void 0
                                : p.latestVersion
                            ),
                        }),
                      }),
                      (0, r.jsx)(i.xu, {
                        h: '10',
                        backgroundImage:
                          'repeating-linear-gradient(-45deg, transparent, transparent 8px, currentcolor 8px, currentcolor 10px)',
                        color: 'background.1000',
                        my: 2,
                      }),
                      (0, r.jsx)(i.xu, {
                        mb: 2,
                        children: (0, r.jsx)(i.xv, {
                          color: 'background.1000',
                          fontWeight: 500,
                          fontSize: 'lg',
                          lineHeight: 1,
                          children:
                            null === p || void 0 === p ? void 0 : p.description,
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)(i.rj, {
                    templateColumns: 'repeat(12, 1fr)',
                    gap: 4,
                    mx: 4,
                    w: 'full',
                    children: [
                      (0, r.jsx)(i.P4, {
                        colSpan: 4,
                        children:
                          (null === p || void 0 === p ? void 0 : p.homepage) &&
                          (0, r.jsx)(b.Qj, {
                            href:
                              null === p || void 0 === p ? void 0 : p.homepage,
                            leftIcon: (0, r.jsx)(m.Z, {
                              height: 15,
                              width: 15,
                            }),
                            children: 'Home',
                          }),
                      }),
                      (0, r.jsx)(i.P4, {
                        colSpan: 4,
                        children: (0, r.jsx)(b.Qj, {
                          href: 'https://npmjs.com/package/'.concat(
                            null === p || void 0 === p ? void 0 : p.name
                          ),
                          mr: 2,
                          leftIcon: (0, r.jsx)(j.Z, {
                            height: '15',
                            width: '15',
                          }),
                          children: 'npm',
                        }),
                      }),
                      (0, r.jsx)(i.P4, {
                        colSpan: 4,
                        children: (0, r.jsx)(b.Qj, {
                          href:
                            null === p || void 0 === p ? void 0 : p.repository,
                          mr: 2,
                          leftIcon: (0, r.jsx)(j.Z, {
                            height: '15',
                            width: '15',
                          }),
                          children: 'GitHub',
                        }),
                      }),
                      (0, r.jsx)(i.P4, {
                        colSpan: 6,
                        children: (0, r.jsx)(i.oM, {
                          ratio: 1,
                          children: (0, r.jsx)(v, {
                            dataKey: 'gzip',
                            label: w,
                            description: 'Gzipped',
                            data: k,
                            isLoading: g.isLoading,
                          }),
                        }),
                      }),
                      (0, r.jsx)(i.P4, {
                        colSpan: 6,
                        children: (0, r.jsx)(i.oM, {
                          ratio: 1,
                          children: (0, r.jsx)(v, {
                            dataKey: 'size',
                            label: S,
                            description: 'Minified',
                            data: k,
                            isLoading: g.isLoading,
                          }),
                        }),
                      }),
                      (0, r.jsx)(i.P4, {
                        colSpan: 12,
                        children: (0, r.jsx)(i.oM, {
                          ratio: 2,
                          children: (0, r.jsx)(v, {
                            dataKey: 'count',
                            label: Z,
                            description: 'Downloads yesterday',
                            data: f.data,
                            isLoading: f.isLoading,
                          }),
                        }),
                      }),
                    ],
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
          return o
        },
        N: function () {
          return l
        },
      })
      var r = t(4883),
        i = t(44)
      function o(e) {
        var n = e.slug,
          t = (0, r.useRouter)(),
          o = (0, i.v)()
        return t.pathname.startsWith('/package/') && n
          ? ''.concat(o, '/p/').concat(n)
          : ''.concat(o, '/')
      }
      var a = t(2983)
      function l(e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 250,
          t = (0, a.useState)(e),
          r = t[0],
          i = t[1]
        return (
          (0, a.useEffect)(
            function () {
              var t = setTimeout(function () {
                i(e)
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
          return g
        },
        Qj: function () {
          return v
        },
        h_: function () {
          return c
        },
      })
      var r = t(7458),
        i = t(8426),
        o = t.n(i),
        a = (t(2983), t(6380)),
        l = t(44),
        c = function (e) {
          var n = e.title,
            t = e.description,
            i = e.imageSrc,
            c = e.slug,
            d = (0, l.S)(),
            s = (0, a.i)({ slug: c }),
            u = n ? ''.concat(n, ' | NPM Package Size') : 'NPM Package Size',
            h = i ? ''.concat(d).concat(i) : ''.concat(d, '/thumbnail.png'),
            x = ''.concat(d, '/package/').concat(c)
          return (0, r.jsxs)(o(), {
            children: [
              (0, r.jsx)('title', { children: u }),
              (0, r.jsx)('meta', { name: 'title', content: u }),
              (0, r.jsx)('meta', { name: 'description', content: t }),
              (0, r.jsx)('meta', { property: 'og:type', content: 'website' }),
              (0, r.jsx)('meta', {
                property: 'og:url',
                content: c ? x : ''.concat(d, '/'),
              }),
              (0, r.jsx)('meta', { property: 'og:title', content: u }),
              (0, r.jsx)('meta', { property: 'og:description', content: t }),
              (0, r.jsx)('meta', { property: 'og:image', content: h }),
              (0, r.jsx)('meta', {
                property: 'twitter:card',
                content: 'summary_large_image',
              }),
              (0, r.jsx)('meta', {
                property: 'twitter:url',
                content: c ? x : ''.concat(d, '/'),
              }),
              (0, r.jsx)('meta', { property: 'twitter:title', content: u }),
              (0, r.jsx)('meta', {
                property: 'twitter:description',
                content: t,
              }),
              (0, r.jsx)('meta', { property: 'twitter:image', content: h }),
              (0, r.jsx)('link', { rel: 'canonical', href: s }),
            ],
          })
        },
        d = t(2641),
        s = t(3089),
        u = t(9106),
        h = t(9682),
        x = t.n(h),
        p = t(8424)
      function g(e) {
        var n = e.children,
          t = e.hoverStyles,
          i = void 0 === t || t,
          o = (0, u.Z)(e, ['children', 'hoverStyles'])
        return (0, r.jsx)(
          x(),
          (0, s.Z)((0, d.Z)({}, o), {
            children: (0, r.jsx)(p.rU, {
              _hover: { textDecoration: i ? 'underline' : 'none' },
              children: n,
            }),
          })
        )
      }
      var f = t(8165)
      function v(e) {
        var n = e.children,
          t = (0, u.Z)(e, ['children'])
        return (0, r.jsx)(
          f.zx,
          (0, s.Z)(
            (0, d.Z)(
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
    e.O(0, [335, 276, 774, 888, 179], function () {
      return (n = 3119), e((e.s = n))
      var n
    })
    var n = e.O()
    _N_E = n
  },
])
