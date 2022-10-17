;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    7373: function (t, e, r) {
      'use strict'
      r.d(e, {
        If: function () {
          return a
        },
        SG: function () {
          return v
        },
      })
      var n = r(2983),
        o = r(7201),
        i = (0, n.createContext)({})
      function a() {
        const t = (0, n.useContext)(i)
        if (void 0 === t)
          throw new Error(
            'useColorMode must be used within a ColorModeProvider'
          )
        return t
      }
      i.displayName = 'ColorModeContext'
      var s = 'chakra-ui-light',
        u = 'chakra-ui-dark'
      var l = 'chakra-ui-color-mode'
      var c,
        d =
          ((c = l),
          {
            ssr: !1,
            type: 'localStorage',
            get(t) {
              if (!(null == globalThis ? void 0 : globalThis.document)) return t
              let e
              try {
                e = localStorage.getItem(c) || t
              } catch (r) {}
              return e || t
            },
            set(t) {
              try {
                localStorage.setItem(c, t)
              } catch (e) {}
            },
          })
      function f(t, e) {
        const r = t.match(new RegExp(`(^| )${e}=([^;]+)`))
        return null == r ? void 0 : r[2]
      }
      function p(t, e) {
        return {
          ssr: !!e,
          type: 'cookie',
          get: (r) =>
            e
              ? f(e, t)
              : ((null == globalThis ? void 0 : globalThis.document) &&
                  f(document.cookie, t)) ||
                r,
          set(e) {
            document.cookie = `${t}=${e}; max-age=31536000; path=/`
          },
        }
      }
      p(l)
      var h = () => {}
      function m(t, e) {
        return 'cookie' === t.type && t.ssr ? t.get(e) : e
      }
      function v(t) {
        const {
            value: e,
            children: r,
            options: {
              useSystemColorMode: a,
              initialColorMode: l,
              disableTransitionOnChange: c,
            } = {},
            colorModeManager: f = d,
          } = t,
          p = 'dark' === l ? 'dark' : 'light',
          [v, g] = (0, n.useState)(() => m(f, p)),
          [y, b] = (0, n.useState)(() => m(f)),
          {
            getSystemTheme: x,
            setClassName: S,
            setDataset: w,
            addListener: k,
          } = (0, n.useMemo)(
            () =>
              (function (t = {}) {
                const { preventTransition: e = !0 } = t,
                  r = {
                    setDataset: (t) => {
                      const n = e ? r.preventTransition() : void 0
                      ;(document.documentElement.dataset.theme = t),
                        (document.documentElement.style.colorScheme = t),
                        null == n || n()
                    },
                    setClassName(t) {
                      document.body.classList.add(t ? u : s),
                        document.body.classList.remove(t ? s : u)
                    },
                    query: () =>
                      window.matchMedia('(prefers-color-scheme: dark)'),
                    getSystemTheme: (t) =>
                      r.query().matches ?? 'dark' === t ? 'dark' : 'light',
                    addListener(t) {
                      const e = r.query(),
                        n = (e) => {
                          t(e.matches ? 'dark' : 'light')
                        }
                      return (
                        'function' === typeof e.addListener
                          ? e.addListener(n)
                          : e.addEventListener('change', n),
                        () => {
                          'function' === typeof e.removeListener
                            ? e.removeListener(n)
                            : e.removeEventListener('change', n)
                        }
                      )
                    },
                    preventTransition() {
                      const t = document.createElement('style')
                      return (
                        t.appendChild(
                          document.createTextNode(
                            '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
                          )
                        ),
                        document.head.appendChild(t),
                        () => {
                          window.getComputedStyle(document.body),
                            requestAnimationFrame(() => {
                              requestAnimationFrame(() => {
                                document.head.removeChild(t)
                              })
                            })
                        }
                      )
                    },
                  }
                return r
              })({ preventTransition: c }),
            [c]
          ),
          C = 'system' !== l || v ? v : y,
          _ = (0, n.useCallback)(
            (t) => {
              const e = 'system' === t ? x() : t
              g(e), S('dark' === e), w(e), f.set(e)
            },
            [f, x, S, w]
          )
        ;(0, o.G)(() => {
          'system' === l && b(x())
        }, []),
          (0, n.useEffect)(() => {
            const t = f.get()
            _(t || ('system' !== l ? p : 'system'))
          }, [f, p, l, _])
        const E = (0, n.useCallback)(() => {
          _('dark' === C ? 'light' : 'dark')
        }, [C, _])
        ;(0, n.useEffect)(() => {
          if (a) return k(_)
        }, [a, k, _])
        const A = (0, n.useMemo)(
          () => ({
            colorMode: e ?? C,
            toggleColorMode: e ? h : E,
            setColorMode: e ? h : _,
            forced: void 0 !== e,
          }),
          [C, E, _, e]
        )
        return n.createElement(i.Provider, { value: A }, r)
      }
      v.displayName = 'ColorModeProvider'
    },
    7021: function (t, e, r) {
      'use strict'
      r.d(e, {
        JO: function () {
          return s
        },
      })
      var n = r(2983),
        o = r(5197),
        i = r(9712),
        a = {
          path: n.createElement(
            'g',
            { stroke: 'currentColor', strokeWidth: '1.5' },
            n.createElement('path', {
              strokeLinecap: 'round',
              fill: 'none',
              d: 'M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25',
            }),
            n.createElement('path', {
              fill: 'currentColor',
              strokeLinecap: 'round',
              d: 'M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0',
            }),
            n.createElement('circle', {
              fill: 'none',
              strokeMiterlimit: '10',
              cx: '12',
              cy: '12',
              r: '11.25',
            })
          ),
          viewBox: '0 0 24 24',
        },
        s = (0, o.Gp)((t, e) => {
          const {
              as: r,
              viewBox: s,
              color: u = 'currentColor',
              focusable: l = !1,
              children: c,
              className: d,
              __css: f,
              ...p
            } = t,
            h = {
              ref: e,
              focusable: l,
              className: (0, i.cx)('chakra-icon', d),
              __css: {
                w: '1em',
                h: '1em',
                display: 'inline-block',
                lineHeight: '1em',
                flexShrink: 0,
                color: u,
                ...f,
              },
            },
            m = s ?? a.viewBox
          if (r && 'string' !== typeof r)
            return n.createElement(o.m$.svg, { as: r, ...h, ...p })
          const v = c ?? a.path
          return n.createElement(
            o.m$.svg,
            { verticalAlign: 'middle', viewBox: m, ...h, ...p },
            v
          )
        })
      s.displayName = 'Icon'
    },
    4837: function (t, e, r) {
      'use strict'
      r.d(e, {
        k: function () {
          return o
        },
      })
      var n = r(2983)
      function o(t = {}) {
        const {
            name: e,
            strict: r = !0,
            hookName: o = 'useContext',
            providerName: i = 'Provider',
            errorMessage: a,
          } = t,
          s = (0, n.createContext)(void 0)
        return (
          (s.displayName = e),
          [
            s.Provider,
            function t() {
              var e
              const u = (0, n.useContext)(s)
              if (!u && r) {
                const r = new Error(
                  a ??
                    `${o} returned \`undefined\`. Seems you forgot to wrap component within ${i}`
                )
                throw (
                  ((r.name = 'ContextError'),
                  null == (e = Error.captureStackTrace) || e.call(Error, r, t),
                  r)
                )
              }
              return u
            },
            s,
          ]
        )
      }
    },
    7201: function (t, e, r) {
      'use strict'
      r.d(e, {
        G: function () {
          return o
        },
      })
      var n = r(2983),
        o = Boolean(null == globalThis ? void 0 : globalThis.document)
          ? n.useLayoutEffect
          : n.useEffect
    },
    9712: function (t, e, r) {
      'use strict'
      r.d(e, {
        cx: function () {
          return n
        },
      })
      var n = (...t) => t.filter(Boolean).join(' ')
    },
    3721: function (t, e, r) {
      'use strict'
      r.d(e, {
        $: function () {
          return u
        },
      })
      var n = r(2983),
        o = r(8918),
        i = r(5197),
        a = r(65),
        s = (0, o.F4)({
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }),
        u = (0, i.Gp)((t, e) => {
          const r = (0, i.mq)('Spinner', t),
            {
              label: o = 'Loading...',
              thickness: u = '2px',
              speed: l = '0.45s',
              emptyColor: c = 'transparent',
              className: d,
              ...f
            } = (0, a.Lr)(t),
            p = ((...t) => t.filter(Boolean).join(' '))('chakra-spinner', d),
            h = {
              display: 'inline-block',
              borderColor: 'currentColor',
              borderStyle: 'solid',
              borderRadius: '99999px',
              borderWidth: u,
              borderBottomColor: c,
              borderLeftColor: c,
              animation: `${s} ${l} linear infinite`,
              ...r,
            }
          return n.createElement(
            i.m$.div,
            { ref: e, __css: h, className: p, ...f },
            o && n.createElement(i.m$.span, { srOnly: !0 }, o)
          )
        })
      u.displayName = 'Spinner'
    },
    65: function (t, e, r) {
      'use strict'
      r.d(e, {
        D: function () {
          return Qt
        },
        Lr: function () {
          return Xt
        },
        Ud: function () {
          return Yt
        },
        ZR: function () {
          return Lt
        },
        c0: function () {
          return Dt
        },
        cC: function () {
          return It
        },
        fj: function () {
          return Ht
        },
        fr: function () {
          return l
        },
        gJ: function () {
          return lt
        },
        iv: function () {
          return Nt
        },
        k0: function () {
          return Wt
        },
      })
      var n = r(9123),
        o = r.n(n)
      function i(t) {
        const e = typeof t
        return (
          null != t && ('object' === e || 'function' === e) && !Array.isArray(t)
        )
      }
      function a(t, ...e) {
        return s(t) ? t(...e) : t
      }
      var s = (t) => 'function' === typeof t,
        u = (t) =>
          'string' === typeof t ? t.replace(/!(important)?$/, '').trim() : t,
        l = (t, e) => (r) => {
          const n = String(e),
            o = ((t) => /!(important)?$/.test(t))(n),
            a = u(n),
            s = t ? `${t}.${a}` : a
          let l = i(r.__cssMap) && s in r.__cssMap ? r.__cssMap[s].varRef : e
          return (l = u(l)), o ? `${l} !important` : l
        }
      function c(t) {
        const { scale: e, transform: r, compose: n } = t
        return (t, o) => {
          const i = l(e, t)(o)
          let a = (null == r ? void 0 : r(i, o)) ?? i
          return n && (a = n(a, o)), a
        }
      }
      var d =
        (...t) =>
        (e) =>
          t.reduce((t, e) => e(t), e)
      function f(t, e) {
        return (r) => {
          const n = { property: r, scale: t }
          return (n.transform = c({ scale: t, transform: e })), n
        }
      }
      var p =
        ({ rtl: t, ltr: e }) =>
        (r) =>
          'rtl' === r.direction ? t : e
      var h = [
        'rotate(var(--chakra-rotate, 0))',
        'scaleX(var(--chakra-scale-x, 1))',
        'scaleY(var(--chakra-scale-y, 1))',
        'skewX(var(--chakra-skew-x, 0))',
        'skewY(var(--chakra-skew-y, 0))',
      ]
      var m = {
          '--chakra-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-drop-shadow': 'var(--chakra-empty,/*!*/ /*!*/)',
          filter: [
            'var(--chakra-blur)',
            'var(--chakra-brightness)',
            'var(--chakra-contrast)',
            'var(--chakra-grayscale)',
            'var(--chakra-hue-rotate)',
            'var(--chakra-invert)',
            'var(--chakra-saturate)',
            'var(--chakra-sepia)',
            'var(--chakra-drop-shadow)',
          ].join(' '),
        },
        v = {
          backdropFilter: [
            'var(--chakra-backdrop-blur)',
            'var(--chakra-backdrop-brightness)',
            'var(--chakra-backdrop-contrast)',
            'var(--chakra-backdrop-grayscale)',
            'var(--chakra-backdrop-hue-rotate)',
            'var(--chakra-backdrop-invert)',
            'var(--chakra-backdrop-opacity)',
            'var(--chakra-backdrop-saturate)',
            'var(--chakra-backdrop-sepia)',
          ].join(' '),
          '--chakra-backdrop-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-backdrop-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-backdrop-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-backdrop-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-backdrop-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-backdrop-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-backdrop-opacity': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-backdrop-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-backdrop-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
        }
      var g = {
          'row-reverse': {
            space: '--chakra-space-x-reverse',
            divide: '--chakra-divide-x-reverse',
          },
          'column-reverse': {
            space: '--chakra-space-y-reverse',
            divide: '--chakra-divide-y-reverse',
          },
        },
        y = '& > :not(style) ~ :not(style)',
        b = {
          [y]: {
            marginInlineStart:
              'calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))',
            marginInlineEnd:
              'calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))',
          },
        },
        x = {
          [y]: {
            marginTop:
              'calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))',
            marginBottom:
              'calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))',
          },
        },
        S = {
          'to-t': 'to top',
          'to-tr': 'to top right',
          'to-r': 'to right',
          'to-br': 'to bottom right',
          'to-b': 'to bottom',
          'to-bl': 'to bottom left',
          'to-l': 'to left',
          'to-tl': 'to top left',
        },
        w = new Set(Object.values(S)),
        k = new Set([
          'none',
          '-moz-initial',
          'inherit',
          'initial',
          'revert',
          'unset',
        ]),
        C = (t) => t.trim()
      var _ = (t) => 'string' === typeof t && t.includes('(') && t.includes(')')
      var E = (t) => (e) => `${t}(${e})`,
        A = {
          filter: (t) => ('auto' !== t ? t : m),
          backdropFilter: (t) => ('auto' !== t ? t : v),
          ring: (t) =>
            (function (t) {
              return {
                '--chakra-ring-offset-shadow':
                  'var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)',
                '--chakra-ring-shadow':
                  'var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)',
                '--chakra-ring-width': t,
                boxShadow: [
                  'var(--chakra-ring-offset-shadow)',
                  'var(--chakra-ring-shadow)',
                  'var(--chakra-shadow, 0 0 #0000)',
                ].join(', '),
              }
            })(A.px(t)),
          bgClip: (t) =>
            'text' === t
              ? { color: 'transparent', backgroundClip: 'text' }
              : { backgroundClip: t },
          transform: (t) =>
            'auto' === t
              ? [
                  'translateX(var(--chakra-translate-x, 0))',
                  'translateY(var(--chakra-translate-y, 0))',
                  ...h,
                ].join(' ')
              : 'auto-gpu' === t
              ? [
                  'translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)',
                  ...h,
                ].join(' ')
              : t,
          vh: (t) => ('$100vh' === t ? 'var(--chakra-vh)' : t),
          px(t) {
            if (null == t) return t
            const { unitless: e } = ((t) => {
              const e = parseFloat(t.toString()),
                r = t.toString().replace(String(e), '')
              return { unitless: !r, value: e, unit: r }
            })(t)
            return e || 'number' === typeof t ? `${t}px` : t
          },
          fraction: (t) => ('number' !== typeof t || t > 1 ? t : 100 * t + '%'),
          float: (t, e) =>
            'rtl' === e.direction ? { left: 'right', right: 'left' }[t] : t,
          degree(t) {
            if (
              (function (t) {
                return /^var\(--.+\)$/.test(t)
              })(t) ||
              null == t
            )
              return t
            const e = 'string' === typeof t && !t.endsWith('deg')
            return 'number' === typeof t || e ? `${t}deg` : t
          },
          gradient: (t, e) =>
            (function (t, e) {
              var r
              if (null == t || k.has(t)) return t
              const { type: n, values: o } =
                (null ==
                (r = /(?<type>^[a-z-A-Z]+)\((?<values>(.*))\)/g.exec(t))
                  ? void 0
                  : r.groups) ?? {}
              if (!n || !o) return t
              const i = n.includes('-gradient') ? n : `${n}-gradient`,
                [a, ...s] = o.split(',').map(C).filter(Boolean)
              if (0 === (null == s ? void 0 : s.length)) return t
              const u = a in S ? S[a] : a
              return (
                s.unshift(u),
                `${i}(${s
                  .map((t) => {
                    if (w.has(t)) return t
                    const r = t.indexOf(' '),
                      [n, o] =
                        -1 !== r ? [t.substr(0, r), t.substr(r + 1)] : [t],
                      i = _(o) ? o : o && o.split(' '),
                      a = `colors.${n}`,
                      s = a in e.__cssMap ? e.__cssMap[a].varRef : n
                    return i
                      ? [s, ...(Array.isArray(i) ? i : [i])].join(' ')
                      : s
                  })
                  .join(', ')})`
              )
            })(t, e ?? {}),
          blur: E('blur'),
          opacity: E('opacity'),
          brightness: E('brightness'),
          contrast: E('contrast'),
          dropShadow: E('drop-shadow'),
          grayscale: E('grayscale'),
          hueRotate: E('hue-rotate'),
          invert: E('invert'),
          saturate: E('saturate'),
          sepia: E('sepia'),
          bgImage(t) {
            if (null == t) return t
            return _(t) || k.has(t) ? t : `url(${t})`
          },
          outline(t) {
            const e = '0' === String(t) || 'none' === String(t)
            return null !== t && e
              ? { outline: '2px solid transparent', outlineOffset: '2px' }
              : { outline: t }
          },
          flexDirection(t) {
            const { space: e, divide: r } = g[t] ?? {},
              n = { flexDirection: t }
            return e && (n[e] = 1), r && (n[r] = 1), n
          },
        },
        P = {
          borderWidths: f('borderWidths'),
          borderStyles: f('borderStyles'),
          colors: f('colors'),
          borders: f('borders'),
          radii: f('radii', A.px),
          space: f('space', d(A.vh, A.px)),
          spaceT: f('space', d(A.vh, A.px)),
          degreeT: (t) => ({ property: t, transform: A.degree }),
          prop: (t, e, r) => ({
            property: t,
            scale: e,
            ...(e && { transform: c({ scale: e, transform: r }) }),
          }),
          propT: (t, e) => ({ property: t, transform: e }),
          sizes: f('sizes', d(A.vh, A.px)),
          sizesT: f('sizes', d(A.vh, A.fraction)),
          shadows: f('shadows'),
          logical: function (t) {
            const { property: e, scale: r, transform: n } = t
            return {
              scale: r,
              property: p(e),
              transform: r ? c({ scale: r, compose: n }) : n,
            }
          },
          blur: f('blur', A.blur),
        },
        R = {
          background: P.colors('background'),
          backgroundColor: P.colors('backgroundColor'),
          backgroundImage: P.propT('backgroundImage', A.bgImage),
          backgroundSize: !0,
          backgroundPosition: !0,
          backgroundRepeat: !0,
          backgroundAttachment: !0,
          backgroundClip: { transform: A.bgClip },
          bgSize: P.prop('backgroundSize'),
          bgPosition: P.prop('backgroundPosition'),
          bg: P.colors('background'),
          bgColor: P.colors('backgroundColor'),
          bgPos: P.prop('backgroundPosition'),
          bgRepeat: P.prop('backgroundRepeat'),
          bgAttachment: P.prop('backgroundAttachment'),
          bgGradient: P.propT('backgroundImage', A.gradient),
          bgClip: { transform: A.bgClip },
        }
      Object.assign(R, { bgImage: R.backgroundImage, bgImg: R.backgroundImage })
      var T = {
        border: P.borders('border'),
        borderWidth: P.borderWidths('borderWidth'),
        borderStyle: P.borderStyles('borderStyle'),
        borderColor: P.colors('borderColor'),
        borderRadius: P.radii('borderRadius'),
        borderTop: P.borders('borderTop'),
        borderBlockStart: P.borders('borderBlockStart'),
        borderTopLeftRadius: P.radii('borderTopLeftRadius'),
        borderStartStartRadius: P.logical({
          scale: 'radii',
          property: { ltr: 'borderTopLeftRadius', rtl: 'borderTopRightRadius' },
        }),
        borderEndStartRadius: P.logical({
          scale: 'radii',
          property: {
            ltr: 'borderBottomLeftRadius',
            rtl: 'borderBottomRightRadius',
          },
        }),
        borderTopRightRadius: P.radii('borderTopRightRadius'),
        borderStartEndRadius: P.logical({
          scale: 'radii',
          property: { ltr: 'borderTopRightRadius', rtl: 'borderTopLeftRadius' },
        }),
        borderEndEndRadius: P.logical({
          scale: 'radii',
          property: {
            ltr: 'borderBottomRightRadius',
            rtl: 'borderBottomLeftRadius',
          },
        }),
        borderRight: P.borders('borderRight'),
        borderInlineEnd: P.borders('borderInlineEnd'),
        borderBottom: P.borders('borderBottom'),
        borderBlockEnd: P.borders('borderBlockEnd'),
        borderBottomLeftRadius: P.radii('borderBottomLeftRadius'),
        borderBottomRightRadius: P.radii('borderBottomRightRadius'),
        borderLeft: P.borders('borderLeft'),
        borderInlineStart: { property: 'borderInlineStart', scale: 'borders' },
        borderInlineStartRadius: P.logical({
          scale: 'radii',
          property: {
            ltr: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
            rtl: ['borderTopRightRadius', 'borderBottomRightRadius'],
          },
        }),
        borderInlineEndRadius: P.logical({
          scale: 'radii',
          property: {
            ltr: ['borderTopRightRadius', 'borderBottomRightRadius'],
            rtl: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
          },
        }),
        borderX: P.borders(['borderLeft', 'borderRight']),
        borderInline: P.borders('borderInline'),
        borderY: P.borders(['borderTop', 'borderBottom']),
        borderBlock: P.borders('borderBlock'),
        borderTopWidth: P.borderWidths('borderTopWidth'),
        borderBlockStartWidth: P.borderWidths('borderBlockStartWidth'),
        borderTopColor: P.colors('borderTopColor'),
        borderBlockStartColor: P.colors('borderBlockStartColor'),
        borderTopStyle: P.borderStyles('borderTopStyle'),
        borderBlockStartStyle: P.borderStyles('borderBlockStartStyle'),
        borderBottomWidth: P.borderWidths('borderBottomWidth'),
        borderBlockEndWidth: P.borderWidths('borderBlockEndWidth'),
        borderBottomColor: P.colors('borderBottomColor'),
        borderBlockEndColor: P.colors('borderBlockEndColor'),
        borderBottomStyle: P.borderStyles('borderBottomStyle'),
        borderBlockEndStyle: P.borderStyles('borderBlockEndStyle'),
        borderLeftWidth: P.borderWidths('borderLeftWidth'),
        borderInlineStartWidth: P.borderWidths('borderInlineStartWidth'),
        borderLeftColor: P.colors('borderLeftColor'),
        borderInlineStartColor: P.colors('borderInlineStartColor'),
        borderLeftStyle: P.borderStyles('borderLeftStyle'),
        borderInlineStartStyle: P.borderStyles('borderInlineStartStyle'),
        borderRightWidth: P.borderWidths('borderRightWidth'),
        borderInlineEndWidth: P.borderWidths('borderInlineEndWidth'),
        borderRightColor: P.colors('borderRightColor'),
        borderInlineEndColor: P.colors('borderInlineEndColor'),
        borderRightStyle: P.borderStyles('borderRightStyle'),
        borderInlineEndStyle: P.borderStyles('borderInlineEndStyle'),
        borderTopRadius: P.radii([
          'borderTopLeftRadius',
          'borderTopRightRadius',
        ]),
        borderBottomRadius: P.radii([
          'borderBottomLeftRadius',
          'borderBottomRightRadius',
        ]),
        borderLeftRadius: P.radii([
          'borderTopLeftRadius',
          'borderBottomLeftRadius',
        ]),
        borderRightRadius: P.radii([
          'borderTopRightRadius',
          'borderBottomRightRadius',
        ]),
      }
      Object.assign(T, {
        rounded: T.borderRadius,
        roundedTop: T.borderTopRadius,
        roundedTopLeft: T.borderTopLeftRadius,
        roundedTopRight: T.borderTopRightRadius,
        roundedTopStart: T.borderStartStartRadius,
        roundedTopEnd: T.borderStartEndRadius,
        roundedBottom: T.borderBottomRadius,
        roundedBottomLeft: T.borderBottomLeftRadius,
        roundedBottomRight: T.borderBottomRightRadius,
        roundedBottomStart: T.borderEndStartRadius,
        roundedBottomEnd: T.borderEndEndRadius,
        roundedLeft: T.borderLeftRadius,
        roundedRight: T.borderRightRadius,
        roundedStart: T.borderInlineStartRadius,
        roundedEnd: T.borderInlineEndRadius,
        borderStart: T.borderInlineStart,
        borderEnd: T.borderInlineEnd,
        borderTopStartRadius: T.borderStartStartRadius,
        borderTopEndRadius: T.borderStartEndRadius,
        borderBottomStartRadius: T.borderEndStartRadius,
        borderBottomEndRadius: T.borderEndEndRadius,
        borderStartRadius: T.borderInlineStartRadius,
        borderEndRadius: T.borderInlineEndRadius,
        borderStartWidth: T.borderInlineStartWidth,
        borderEndWidth: T.borderInlineEndWidth,
        borderStartColor: T.borderInlineStartColor,
        borderEndColor: T.borderInlineEndColor,
        borderStartStyle: T.borderInlineStartStyle,
        borderEndStyle: T.borderInlineEndStyle,
      })
      var M = {
          color: P.colors('color'),
          textColor: P.colors('color'),
          fill: P.colors('fill'),
          stroke: P.colors('stroke'),
        },
        O = {
          boxShadow: P.shadows('boxShadow'),
          mixBlendMode: !0,
          blendMode: P.prop('mixBlendMode'),
          backgroundBlendMode: !0,
          bgBlendMode: P.prop('backgroundBlendMode'),
          opacity: !0,
        }
      Object.assign(O, { shadow: O.boxShadow })
      var j = {
          filter: { transform: A.filter },
          blur: P.blur('--chakra-blur'),
          brightness: P.propT('--chakra-brightness', A.brightness),
          contrast: P.propT('--chakra-contrast', A.contrast),
          hueRotate: P.degreeT('--chakra-hue-rotate'),
          invert: P.propT('--chakra-invert', A.invert),
          saturate: P.propT('--chakra-saturate', A.saturate),
          dropShadow: P.propT('--chakra-drop-shadow', A.dropShadow),
          backdropFilter: { transform: A.backdropFilter },
          backdropBlur: P.blur('--chakra-backdrop-blur'),
          backdropBrightness: P.propT(
            '--chakra-backdrop-brightness',
            A.brightness
          ),
          backdropContrast: P.propT('--chakra-backdrop-contrast', A.contrast),
          backdropHueRotate: P.degreeT('--chakra-backdrop-hue-rotate'),
          backdropInvert: P.propT('--chakra-backdrop-invert', A.invert),
          backdropSaturate: P.propT('--chakra-backdrop-saturate', A.saturate),
        },
        F = {
          alignItems: !0,
          alignContent: !0,
          justifyItems: !0,
          justifyContent: !0,
          flexWrap: !0,
          flexDirection: { transform: A.flexDirection },
          experimental_spaceX: {
            static: b,
            transform: c({
              scale: 'space',
              transform: (t) => (null !== t ? { '--chakra-space-x': t } : null),
            }),
          },
          experimental_spaceY: {
            static: x,
            transform: c({
              scale: 'space',
              transform: (t) => (null != t ? { '--chakra-space-y': t } : null),
            }),
          },
          flex: !0,
          flexFlow: !0,
          flexGrow: !0,
          flexShrink: !0,
          flexBasis: P.sizes('flexBasis'),
          justifySelf: !0,
          alignSelf: !0,
          order: !0,
          placeItems: !0,
          placeContent: !0,
          placeSelf: !0,
          gap: P.space('gap'),
          rowGap: P.space('rowGap'),
          columnGap: P.space('columnGap'),
        }
      Object.assign(F, { flexDir: F.flexDirection })
      var D = {
          gridGap: P.space('gridGap'),
          gridColumnGap: P.space('gridColumnGap'),
          gridRowGap: P.space('gridRowGap'),
          gridColumn: !0,
          gridRow: !0,
          gridAutoFlow: !0,
          gridAutoColumns: !0,
          gridColumnStart: !0,
          gridColumnEnd: !0,
          gridRowStart: !0,
          gridRowEnd: !0,
          gridAutoRows: !0,
          gridTemplate: !0,
          gridTemplateColumns: !0,
          gridTemplateRows: !0,
          gridTemplateAreas: !0,
          gridArea: !0,
        },
        B = {
          appearance: !0,
          cursor: !0,
          resize: !0,
          userSelect: !0,
          pointerEvents: !0,
          outline: { transform: A.outline },
          outlineOffset: !0,
          outlineColor: P.colors('outlineColor'),
        },
        z = {
          width: P.sizesT('width'),
          inlineSize: P.sizesT('inlineSize'),
          height: P.sizes('height'),
          blockSize: P.sizes('blockSize'),
          boxSize: P.sizes(['width', 'height']),
          minWidth: P.sizes('minWidth'),
          minInlineSize: P.sizes('minInlineSize'),
          minHeight: P.sizes('minHeight'),
          minBlockSize: P.sizes('minBlockSize'),
          maxWidth: P.sizes('maxWidth'),
          maxInlineSize: P.sizes('maxInlineSize'),
          maxHeight: P.sizes('maxHeight'),
          maxBlockSize: P.sizes('maxBlockSize'),
          overflow: !0,
          overflowX: !0,
          overflowY: !0,
          overscrollBehavior: !0,
          overscrollBehaviorX: !0,
          overscrollBehaviorY: !0,
          display: !0,
          verticalAlign: !0,
          boxSizing: !0,
          boxDecorationBreak: !0,
          float: P.propT('float', A.float),
          objectFit: !0,
          objectPosition: !0,
          visibility: !0,
          isolation: !0,
        }
      Object.assign(z, {
        w: z.width,
        h: z.height,
        minW: z.minWidth,
        maxW: z.maxWidth,
        minH: z.minHeight,
        maxH: z.maxHeight,
        overscroll: z.overscrollBehavior,
        overscrollX: z.overscrollBehaviorX,
        overscrollY: z.overscrollBehaviorY,
      })
      var I = {
        listStyleType: !0,
        listStylePosition: !0,
        listStylePos: P.prop('listStylePosition'),
        listStyleImage: !0,
        listStyleImg: P.prop('listStyleImage'),
      }
      var $ = ((t) => {
          const e = new WeakMap()
          return (r, n, o, i) => {
            if ('undefined' === typeof r) return t(r, n, o)
            e.has(r) || e.set(r, new Map())
            const a = e.get(r)
            if (a.has(n)) return a.get(n)
            const s = t(r, n, o, i)
            return a.set(n, s), s
          }
        })(function (t, e, r, n) {
          const o = 'string' === typeof e ? e.split('.') : [e]
          for (n = 0; n < o.length && t; n += 1) t = t[o[n]]
          return void 0 === t ? r : t
        }),
        L = {
          border: '0px',
          clip: 'rect(0, 0, 0, 0)',
          width: '1px',
          height: '1px',
          margin: '-1px',
          padding: '0px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          position: 'absolute',
        },
        V = {
          position: 'static',
          width: 'auto',
          height: 'auto',
          clip: 'auto',
          padding: '0',
          margin: '0',
          overflow: 'visible',
          whiteSpace: 'normal',
        },
        q = (t, e, r) => {
          const n = {},
            o = $(t, e, {})
          for (const i in o) {
            ;(i in r && null != r[i]) || (n[i] = o[i])
          }
          return n
        },
        U = {
          srOnly: {
            transform: (t) => (!0 === t ? L : 'focusable' === t ? V : {}),
          },
          layerStyle: {
            processResult: !0,
            transform: (t, e, r) => q(e, `layerStyles.${t}`, r),
          },
          textStyle: {
            processResult: !0,
            transform: (t, e, r) => q(e, `textStyles.${t}`, r),
          },
          apply: { processResult: !0, transform: (t, e, r) => q(e, t, r) },
        },
        N = {
          position: !0,
          pos: P.prop('position'),
          zIndex: P.prop('zIndex', 'zIndices'),
          inset: P.spaceT('inset'),
          insetX: P.spaceT(['left', 'right']),
          insetInline: P.spaceT('insetInline'),
          insetY: P.spaceT(['top', 'bottom']),
          insetBlock: P.spaceT('insetBlock'),
          top: P.spaceT('top'),
          insetBlockStart: P.spaceT('insetBlockStart'),
          bottom: P.spaceT('bottom'),
          insetBlockEnd: P.spaceT('insetBlockEnd'),
          left: P.spaceT('left'),
          insetInlineStart: P.logical({
            scale: 'space',
            property: { ltr: 'left', rtl: 'right' },
          }),
          right: P.spaceT('right'),
          insetInlineEnd: P.logical({
            scale: 'space',
            property: { ltr: 'right', rtl: 'left' },
          }),
        }
      Object.assign(N, {
        insetStart: N.insetInlineStart,
        insetEnd: N.insetInlineEnd,
      })
      var W = {
          ring: { transform: A.ring },
          ringColor: P.colors('--chakra-ring-color'),
          ringOffset: P.prop('--chakra-ring-offset-width'),
          ringOffsetColor: P.colors('--chakra-ring-offset-color'),
          ringInset: P.prop('--chakra-ring-inset'),
        },
        H = {
          margin: P.spaceT('margin'),
          marginTop: P.spaceT('marginTop'),
          marginBlockStart: P.spaceT('marginBlockStart'),
          marginRight: P.spaceT('marginRight'),
          marginInlineEnd: P.spaceT('marginInlineEnd'),
          marginBottom: P.spaceT('marginBottom'),
          marginBlockEnd: P.spaceT('marginBlockEnd'),
          marginLeft: P.spaceT('marginLeft'),
          marginInlineStart: P.spaceT('marginInlineStart'),
          marginX: P.spaceT(['marginInlineStart', 'marginInlineEnd']),
          marginInline: P.spaceT('marginInline'),
          marginY: P.spaceT(['marginTop', 'marginBottom']),
          marginBlock: P.spaceT('marginBlock'),
          padding: P.space('padding'),
          paddingTop: P.space('paddingTop'),
          paddingBlockStart: P.space('paddingBlockStart'),
          paddingRight: P.space('paddingRight'),
          paddingBottom: P.space('paddingBottom'),
          paddingBlockEnd: P.space('paddingBlockEnd'),
          paddingLeft: P.space('paddingLeft'),
          paddingInlineStart: P.space('paddingInlineStart'),
          paddingInlineEnd: P.space('paddingInlineEnd'),
          paddingX: P.space(['paddingInlineStart', 'paddingInlineEnd']),
          paddingInline: P.space('paddingInline'),
          paddingY: P.space(['paddingTop', 'paddingBottom']),
          paddingBlock: P.space('paddingBlock'),
        }
      Object.assign(H, {
        m: H.margin,
        mt: H.marginTop,
        mr: H.marginRight,
        me: H.marginInlineEnd,
        marginEnd: H.marginInlineEnd,
        mb: H.marginBottom,
        ml: H.marginLeft,
        ms: H.marginInlineStart,
        marginStart: H.marginInlineStart,
        mx: H.marginX,
        my: H.marginY,
        p: H.padding,
        pt: H.paddingTop,
        py: H.paddingY,
        px: H.paddingX,
        pb: H.paddingBottom,
        pl: H.paddingLeft,
        ps: H.paddingInlineStart,
        paddingStart: H.paddingInlineStart,
        pr: H.paddingRight,
        pe: H.paddingInlineEnd,
        paddingEnd: H.paddingInlineEnd,
      })
      var Q = {
          textDecorationColor: P.colors('textDecorationColor'),
          textDecoration: !0,
          textDecor: { property: 'textDecoration' },
          textDecorationLine: !0,
          textDecorationStyle: !0,
          textDecorationThickness: !0,
          textUnderlineOffset: !0,
          textShadow: P.shadows('textShadow'),
        },
        G = {
          clipPath: !0,
          transform: P.propT('transform', A.transform),
          transformOrigin: !0,
          translateX: P.spaceT('--chakra-translate-x'),
          translateY: P.spaceT('--chakra-translate-y'),
          skewX: P.degreeT('--chakra-skew-x'),
          skewY: P.degreeT('--chakra-skew-y'),
          scaleX: P.prop('--chakra-scale-x'),
          scaleY: P.prop('--chakra-scale-y'),
          scale: P.prop(['--chakra-scale-x', '--chakra-scale-y']),
          rotate: P.degreeT('--chakra-rotate'),
        },
        K = {
          transition: !0,
          transitionDelay: !0,
          animation: !0,
          willChange: !0,
          transitionDuration: P.prop(
            'transitionDuration',
            'transition.duration'
          ),
          transitionProperty: P.prop(
            'transitionProperty',
            'transition.property'
          ),
          transitionTimingFunction: P.prop(
            'transitionTimingFunction',
            'transition.easing'
          ),
        },
        Y = {
          fontFamily: P.prop('fontFamily', 'fonts'),
          fontSize: P.prop('fontSize', 'fontSizes', A.px),
          fontWeight: P.prop('fontWeight', 'fontWeights'),
          lineHeight: P.prop('lineHeight', 'lineHeights'),
          letterSpacing: P.prop('letterSpacing', 'letterSpacings'),
          textAlign: !0,
          fontStyle: !0,
          wordBreak: !0,
          overflowWrap: !0,
          textOverflow: !0,
          textTransform: !0,
          whiteSpace: !0,
          noOfLines: {
            static: {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 'var(--chakra-line-clamp)',
            },
            property: '--chakra-line-clamp',
          },
        },
        X = {
          scrollBehavior: !0,
          scrollSnapAlign: !0,
          scrollSnapStop: !0,
          scrollSnapType: !0,
          scrollMargin: P.spaceT('scrollMargin'),
          scrollMarginTop: P.spaceT('scrollMarginTop'),
          scrollMarginBottom: P.spaceT('scrollMarginBottom'),
          scrollMarginLeft: P.spaceT('scrollMarginLeft'),
          scrollMarginRight: P.spaceT('scrollMarginRight'),
          scrollMarginX: P.spaceT(['scrollMarginLeft', 'scrollMarginRight']),
          scrollMarginY: P.spaceT(['scrollMarginTop', 'scrollMarginBottom']),
          scrollPadding: P.spaceT('scrollPadding'),
          scrollPaddingTop: P.spaceT('scrollPaddingTop'),
          scrollPaddingBottom: P.spaceT('scrollPaddingBottom'),
          scrollPaddingLeft: P.spaceT('scrollPaddingLeft'),
          scrollPaddingRight: P.spaceT('scrollPaddingRight'),
          scrollPaddingX: P.spaceT(['scrollPaddingLeft', 'scrollPaddingRight']),
          scrollPaddingY: P.spaceT(['scrollPaddingTop', 'scrollPaddingBottom']),
        }
      function Z(t) {
        return i(t) && t.reference ? t.reference : String(t)
      }
      var J = (t, ...e) => e.map(Z).join(` ${t} `).replace(/calc/g, ''),
        tt = (...t) => `calc(${J('+', ...t)})`,
        et = (...t) => `calc(${J('-', ...t)})`,
        rt = (...t) => `calc(${J('*', ...t)})`,
        nt = (...t) => `calc(${J('/', ...t)})`,
        ot = (t) => {
          const e = Z(t)
          return null == e || Number.isNaN(parseFloat(e))
            ? rt(e, -1)
            : String(e).startsWith('-')
            ? String(e).slice(1)
            : `-${e}`
        },
        it = Object.assign(
          (t) => ({
            add: (...e) => it(tt(t, ...e)),
            subtract: (...e) => it(et(t, ...e)),
            multiply: (...e) => it(rt(t, ...e)),
            divide: (...e) => it(nt(t, ...e)),
            negate: () => it(ot(t)),
            toString: () => t.toString(),
          }),
          { add: tt, subtract: et, multiply: rt, divide: nt, negate: ot }
        )
      function at(t) {
        return (function (t) {
          return t.replace(/[!-,/:-@[-^`{-~]/g, '\\$&')
        })(
          (function (t) {
            if (t.includes('\\.')) return t
            return Number.isInteger(parseFloat(t.toString()))
              ? t
              : t.replace('.', '\\.')
          })(
            (function (t, e = '-') {
              return t.replace(/\s+/g, e)
            })(t.toString())
          )
        )
      }
      function st(t, e) {
        return `var(${t}${e ? `, ${e}` : ''})`
      }
      function ut(t, e = '') {
        return at(
          `--${(function (t, e = '') {
            return [e, t].filter(Boolean).join('-')
          })(t, e)}`
        )
      }
      function lt(t, e, r) {
        const n = ut(t, r)
        return { variable: n, reference: st(n, e) }
      }
      function ct(t) {
        const e = null == t ? 0 : t.length
        return e ? t[e - 1] : void 0
      }
      function dt(t) {
        if (null == t) return t
        const { unitless: e } = (function (t) {
          const e = parseFloat(t.toString()),
            r = t.toString().replace(String(e), '')
          return { unitless: !r, value: e, unit: r }
        })(t)
        return e || 'number' === typeof t ? `${t}px` : t
      }
      var ft = (t, e) => (parseInt(t[1], 10) > parseInt(e[1], 10) ? 1 : -1),
        pt = (t) => Object.fromEntries(Object.entries(t).sort(ft))
      function ht(t) {
        const e = pt(t)
        return Object.assign(Object.values(e), e)
      }
      function mt(t) {
        if (!t) return t
        const e = (t = dt(t) ?? t).endsWith('px') ? -1 : -0.0625
        return 'number' === typeof t
          ? `${t + e}`
          : t.replace(/(\d+\.?\d*)/u, (t) => `${parseFloat(t) + e}`)
      }
      function vt(t, e) {
        const r = ['@media screen']
        return (
          t && r.push('and', `(min-width: ${dt(t)})`),
          e && r.push('and', `(max-width: ${dt(e)})`),
          r.join(' ')
        )
      }
      function gt(t) {
        if (!t) return null
        t.base = t.base ?? '0px'
        const e = ht(t),
          r = Object.entries(t)
            .sort(ft)
            .map(([t, e], r, n) => {
              let [, o] = n[r + 1] ?? []
              return (
                (o = parseFloat(o) > 0 ? mt(o) : void 0),
                {
                  _minW: mt(e),
                  breakpoint: t,
                  minW: e,
                  maxW: o,
                  maxWQuery: vt(null, o),
                  minWQuery: vt(e),
                  minMaxQuery: vt(e, o),
                }
              )
            }),
          n = (function (t) {
            const e = Object.keys(pt(t))
            return new Set(e)
          })(t),
          o = Array.from(n.values())
        return {
          keys: n,
          normalized: e,
          isResponsive(t) {
            const e = Object.keys(t)
            return e.length > 0 && e.every((t) => n.has(t))
          },
          asObject: pt(t),
          asArray: ht(t),
          details: r,
          media: [null, ...e.map((t) => vt(t)).slice(1)],
          toArrayValue(t) {
            if (!i(t)) throw new Error('toArrayValue: value must be an object')
            const e = o.map((e) => t[e] ?? null)
            for (; null === ct(e); ) e.pop()
            return e
          },
          toObjectValue(t) {
            if (!Array.isArray(t))
              throw new Error('toObjectValue: value must be an array')
            return t.reduce((t, e, r) => {
              const n = o[r]
              return null != n && null != e && (t[n] = e), t
            }, {})
          },
        }
      }
      var yt = (t, e) => `${t}:hover ${e}, ${t}[data-hover] ${e}`,
        bt = (t, e) => `${t}:focus ${e}, ${t}[data-focus] ${e}`,
        xt = (t, e) => `${t}:focus-visible ${e}`,
        St = (t, e) => `${t}:focus-within ${e}`,
        wt = (t, e) => `${t}:active ${e}, ${t}[data-active] ${e}`,
        kt = (t, e) => `${t}:disabled ${e}, ${t}[data-disabled] ${e}`,
        Ct = (t, e) => `${t}:invalid ${e}, ${t}[data-invalid] ${e}`,
        _t = (t, e) => `${t}:checked ${e}, ${t}[data-checked] ${e}`,
        Et = (t, e) => `${t}:placeholder-shown ${e}`,
        At = (t) =>
          Rt((e) => t(e, '&'), '[role=group]', '[data-group]', '.group'),
        Pt = (t) => Rt((e) => t(e, '~ &'), '[data-peer]', '.peer'),
        Rt = (t, ...e) => e.map(t).join(', '),
        Tt = {
          _hover: '&:hover, &[data-hover]',
          _active: '&:active, &[data-active]',
          _focus: '&:focus, &[data-focus]',
          _highlighted: '&[data-highlighted]',
          _focusWithin: '&:focus-within',
          _focusVisible: '&:focus-visible, &[data-focus-visible]',
          _disabled:
            '&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]',
          _readOnly: '&[aria-readonly=true], &[readonly], &[data-readonly]',
          _before: '&::before',
          _after: '&::after',
          _empty: '&:empty',
          _expanded: '&[aria-expanded=true], &[data-expanded]',
          _checked: '&[aria-checked=true], &[data-checked]',
          _grabbed: '&[aria-grabbed=true], &[data-grabbed]',
          _pressed: '&[aria-pressed=true], &[data-pressed]',
          _invalid: '&[aria-invalid=true], &[data-invalid]',
          _valid: '&[data-valid], &[data-state=valid]',
          _loading: '&[data-loading], &[aria-busy=true]',
          _selected: '&[aria-selected=true], &[data-selected]',
          _hidden: '&[hidden], &[data-hidden]',
          _autofill: '&:-webkit-autofill',
          _even: '&:nth-of-type(even)',
          _odd: '&:nth-of-type(odd)',
          _first: '&:first-of-type',
          _last: '&:last-of-type',
          _notFirst: '&:not(:first-of-type)',
          _notLast: '&:not(:last-of-type)',
          _visited: '&:visited',
          _activeLink: '&[aria-current=page]',
          _activeStep: '&[aria-current=step]',
          _indeterminate:
            '&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]',
          _groupHover: At(yt),
          _peerHover: Pt(yt),
          _groupFocus: At(bt),
          _peerFocus: Pt(bt),
          _groupFocusVisible: At(xt),
          _peerFocusVisible: Pt(xt),
          _groupActive: At(wt),
          _peerActive: Pt(wt),
          _groupDisabled: At(kt),
          _peerDisabled: Pt(kt),
          _groupInvalid: At(Ct),
          _peerInvalid: Pt(Ct),
          _groupChecked: At(_t),
          _peerChecked: Pt(_t),
          _groupFocusWithin: At(St),
          _peerFocusWithin: Pt(St),
          _peerPlaceholderShown: Pt(Et),
          _placeholder: '&::placeholder',
          _placeholderShown: '&:placeholder-shown',
          _fullScreen: '&:fullscreen',
          _selection: '&::selection',
          _rtl: '[dir=rtl] &, &[dir=rtl]',
          _ltr: '[dir=ltr] &, &[dir=ltr]',
          _mediaDark: '@media (prefers-color-scheme: dark)',
          _mediaReduceMotion: '@media (prefers-reduced-motion: reduce)',
          _dark:
            '.chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]',
          _light:
            '.chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]',
        },
        Mt = Object.keys(Tt)
      function Ot(t, e) {
        return lt(String(t).replace(/\./g, '-'), void 0, e)
      }
      var jt = [
        'colors',
        'borders',
        'borderWidths',
        'borderStyles',
        'fonts',
        'fontSizes',
        'fontWeights',
        'letterSpacings',
        'lineHeights',
        'radii',
        'space',
        'shadows',
        'sizes',
        'zIndices',
        'transition',
        'blur',
      ]
      function Ft(t, e = 1 / 0) {
        return (i(t) || Array.isArray(t)) && e
          ? Object.entries(t).reduce(
              (t, [r, n]) => (
                i(n) || Array.isArray(n)
                  ? Object.entries(Ft(n, e - 1)).forEach(([e, n]) => {
                      t[`${r}.${e}`] = n
                    })
                  : (t[r] = n),
                t
              ),
              {}
            )
          : t
      }
      function Dt(t) {
        var e
        const r = (function (t) {
            const { __cssMap: e, __cssVars: r, __breakpoints: n, ...o } = t
            return o
          })(t),
          n = (function (t) {
            return (function (t, e) {
              const r = {}
              for (const n of e) n in t && (r[n] = t[n])
              return r
            })(t, jt)
          })(r),
          a = (function (t) {
            return t.semanticTokens
          })(r),
          s = (function ({ tokens: t, semanticTokens: e }) {
            const r = Object.entries(Ft(t) ?? {}).map(([t, e]) => [
                t,
                { isSemantic: !1, value: e },
              ]),
              n = Object.entries(Ft(e, 1) ?? {}).map(([t, e]) => [
                t,
                { isSemantic: !0, value: e },
              ])
            return Object.fromEntries([...r, ...n])
          })({ tokens: n, semanticTokens: a }),
          u = null == (e = r.config) ? void 0 : e.cssVarPrefix,
          { cssMap: l, cssVars: c } = (function (t, e) {
            let r = {}
            const n = {}
            for (const [a, s] of Object.entries(t)) {
              const { isSemantic: u, value: l } = s,
                { variable: c, reference: d } = Ot(
                  a,
                  null == e ? void 0 : e.cssVarPrefix
                )
              if (!u) {
                if (a.startsWith('space')) {
                  const t = a.split('.'),
                    [e, ...r] = t,
                    o = `${e}.-${r.join('.')}`,
                    i = it.negate(l),
                    s = it.negate(d)
                  n[o] = { value: i, var: c, varRef: s }
                }
                ;(r[c] = l), (n[a] = { value: l, var: c, varRef: d })
                continue
              }
              const f = (r) => {
                  const n = [String(a).split('.')[0], r].join('.')
                  if (!t[n]) return r
                  const { reference: o } = Ot(
                    n,
                    null == e ? void 0 : e.cssVarPrefix
                  )
                  return o
                },
                p = i(l) ? l : { default: l }
              ;(r = o()(
                r,
                Object.entries(p).reduce((t, [e, r]) => {
                  var n
                  const o = f(r)
                  return 'default' === e
                    ? ((t[c] = o), t)
                    : ((t[(null == (n = Tt) ? void 0 : n[e]) ?? e] = {
                        [c]: o,
                      }),
                      t)
                }, {})
              )),
                (n[a] = { value: d, var: c, varRef: d })
            }
            return { cssVars: r, cssMap: n }
          })(s, { cssVarPrefix: u })
        return (
          Object.assign(r, {
            __cssVars: {
              '--chakra-ring-inset': 'var(--chakra-empty,/*!*/ /*!*/)',
              '--chakra-ring-offset-width': '0px',
              '--chakra-ring-offset-color': '#fff',
              '--chakra-ring-color': 'rgba(66, 153, 225, 0.6)',
              '--chakra-ring-offset-shadow': '0 0 #0000',
              '--chakra-ring-shadow': '0 0 #0000',
              '--chakra-space-x-reverse': '0',
              '--chakra-space-y-reverse': '0',
              ...c,
            },
            __cssMap: l,
            __breakpoints: gt(r.breakpoints),
          }),
          r
        )
      }
      var Bt = o()({}, R, T, M, F, z, j, W, B, D, U, N, O, H, X, Y, Q, G, I, K),
        zt = Object.assign({}, H, z, F, D, N),
        It = (Object.keys(zt), [...Object.keys(Bt), ...Mt]),
        $t = { ...Bt, ...Tt },
        Lt = (t) => t in $t
      var Vt = (t, e) =>
          t.startsWith('--') &&
          'string' === typeof e &&
          !(function (t) {
            return /^var\(--.+\)$/.test(t)
          })(e),
        qt = (t, e) => {
          if (null == e) return e
          const r = (e) => {
              var r, n
              return null == (n = null == (r = t.__cssMap) ? void 0 : r[e])
                ? void 0
                : n.varRef
            },
            n = (t) => r(t) ?? t,
            [o, i] = (function (t) {
              const e = []
              let r = '',
                n = !1
              for (let o = 0; o < t.length; o++) {
                const i = t[o]
                '(' === i
                  ? ((n = !0), (r += i))
                  : ')' === i
                  ? ((n = !1), (r += i))
                  : ',' !== i || n
                  ? (r += i)
                  : (e.push(r), (r = ''))
              }
              return (r = r.trim()), r && e.push(r), e
            })(e)
          return (e = r(o) ?? n(i) ?? n(e))
        }
      function Ut(t) {
        const { configs: e = {}, pseudos: r = {}, theme: n } = t,
          s = (t, u = !1) => {
            var l
            const c = a(t, n),
              d = ((t) => (e) => {
                if (!e.__breakpoints) return t
                const {
                    isResponsive: r,
                    toArrayValue: n,
                    media: o,
                  } = e.__breakpoints,
                  s = {}
                for (const u in t) {
                  let l = a(t[u], e)
                  if (null == l) continue
                  if (((l = i(l) && r(l) ? n(l) : l), !Array.isArray(l))) {
                    s[u] = l
                    continue
                  }
                  const c = l.slice(0, o.length).length
                  for (let t = 0; t < c; t += 1) {
                    const e = null == o ? void 0 : o[t]
                    e
                      ? ((s[e] = s[e] || {}), null != l[t] && (s[e][u] = l[t]))
                      : (s[u] = l[t])
                  }
                }
                return s
              })(c)(n)
            let f = {}
            for (let p in d) {
              let t = a(d[p], n)
              p in r && (p = r[p]), Vt(p, t) && (t = qt(n, t))
              let h = e[p]
              if ((!0 === h && (h = { property: p }), i(t))) {
                ;(f[p] = f[p] ?? {}), (f[p] = o()({}, f[p], s(t, !0)))
                continue
              }
              let m =
                (null == (l = null == h ? void 0 : h.transform)
                  ? void 0
                  : l.call(h, t, n, c)) ?? t
              m = (null == h ? void 0 : h.processResult) ? s(m, !0) : m
              const v = a(null == h ? void 0 : h.property, n)
              if (!u && (null == h ? void 0 : h.static)) {
                const t = a(h.static, n)
                f = o()({}, f, t)
              }
              if (v && Array.isArray(v)) for (const e of v) f[e] = m
              else
                v
                  ? '&' === v && i(m)
                    ? (f = o()({}, f, m))
                    : (f[v] = m)
                  : i(m)
                  ? (f = o()({}, f, m))
                  : (f[p] = m)
            }
            return f
          }
        return s
      }
      var Nt = (t) => (e) => Ut({ theme: e, pseudos: Tt, configs: Bt })(t)
      function Wt(t) {
        return t
      }
      function Ht(t) {
        return t
      }
      function Qt(t) {
        return {
          definePartsStyle: (t) => t,
          defineMultiStyleConfig: (e) => ({ parts: t, ...e }),
        }
      }
      function Gt(t, e) {
        for (let r = e + 1; r < t.length; r++) if (null != t[r]) return r
        return -1
      }
      function Kt(t) {
        const e = t.__breakpoints
        return function (t, r, n, s) {
          var u, l
          if (!e) return
          const c = {},
            d = (function (t, e) {
              return Array.isArray(t)
                ? t
                : i(t)
                ? e(t)
                : null != t
                ? [t]
                : void 0
            })(n, e.toArrayValue)
          if (!d) return c
          const f = d.length,
            p = 1 === f,
            h = !!t.parts
          for (let i = 0; i < f; i++) {
            const n = e.details[i],
              f = e.details[Gt(d, i)],
              m = vt(n.minW, null == f ? void 0 : f._minW),
              v = a(null == (u = t[r]) ? void 0 : u[d[i]], s)
            v &&
              (h
                ? null == (l = t.parts) ||
                  l.forEach((t) => {
                    o()(c, { [t]: p ? v[t] : { [m]: v[t] } })
                  })
                : h
                ? (c[m] = v)
                : p
                ? o()(c, v)
                : (c[m] = v))
          }
          return c
        }
      }
      function Yt(t) {
        return (e) => {
          const { variant: r, size: n, theme: i } = e,
            s = Kt(i)
          return o()(
            {},
            a(t.baseStyle ?? {}, e),
            s(t, 'sizes', n, e),
            s(t, 'variants', r, e)
          )
        }
      }
      function Xt(t) {
        return (function (t, e = []) {
          const r = Object.assign({}, t)
          for (const n of e) n in r && delete r[n]
          return r
        })(t, ['styleConfig', 'size', 'variant', 'colorScheme'])
      }
    },
    5197: function (t, e, r) {
      'use strict'
      r.d(e, {
        ZL: function () {
          return D
        },
        f6: function () {
          return M
        },
        m$: function () {
          return N
        },
        Gp: function () {
          return L
        },
        LP: function () {
          return T
        },
        jC: function () {
          return U
        },
        mq: function () {
          return q
        },
        Fg: function () {
          return P
        },
        dQ: function () {
          return R
        },
      })
      var n = r(2983),
        o = r(7373),
        i = r(3739)
      var a = r(65),
        s = r(8598),
        u = r(8918),
        l = r(7998),
        c = r(192),
        d =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        f = (0, c.Z)(function (t) {
          return (
            d.test(t) ||
            (111 === t.charCodeAt(0) &&
              110 === t.charCodeAt(1) &&
              t.charCodeAt(2) < 91)
          )
        }),
        p = r(3041),
        h = r(8543),
        m = r(5117),
        v = f,
        g = function (t) {
          return 'theme' !== t
        },
        y = function (t) {
          return 'string' === typeof t && t.charCodeAt(0) > 96 ? v : g
        },
        b = function (t, e, r) {
          var n
          if (e) {
            var o = e.shouldForwardProp
            n =
              t.__emotion_forwardProp && o
                ? function (e) {
                    return t.__emotion_forwardProp(e) && o(e)
                  }
                : o
          }
          return (
            'function' !== typeof n && r && (n = t.__emotion_forwardProp), n
          )
        },
        x = function (t) {
          var e = t.cache,
            r = t.serialized,
            n = t.isStringTag
          ;(0, p.hC)(e, r, n)
          ;(0, m.L)(function () {
            return (0, p.My)(e, r, n)
          })
          return null
        },
        S = function t(e, r) {
          var o,
            a,
            s = e.__emotion_real === e,
            u = (s && e.__emotion_base) || e
          void 0 !== r && ((o = r.label), (a = r.target))
          var c = b(e, r, s),
            d = c || y(u),
            f = !d('as')
          return function () {
            var m = arguments,
              v =
                s && void 0 !== e.__emotion_styles
                  ? e.__emotion_styles.slice(0)
                  : []
            if (
              (void 0 !== o && v.push('label:' + o + ';'),
              null == m[0] || void 0 === m[0].raw)
            )
              v.push.apply(v, m)
            else {
              0, v.push(m[0][0])
              for (var g = m.length, S = 1; S < g; S++) v.push(m[S], m[0][S])
            }
            var w = (0, i.w)(function (t, e, r) {
              var o = (f && t.as) || u,
                s = '',
                l = [],
                m = t
              if (null == t.theme) {
                for (var g in ((m = {}), t)) m[g] = t[g]
                m.theme = (0, n.useContext)(i.T)
              }
              'string' === typeof t.className
                ? (s = (0, p.fp)(e.registered, l, t.className))
                : null != t.className && (s = t.className + ' ')
              var b = (0, h.O)(v.concat(l), e.registered, m)
              ;(s += e.key + '-' + b.name), void 0 !== a && (s += ' ' + a)
              var S = f && void 0 === c ? y(o) : d,
                w = {}
              for (var k in t) (f && 'as' === k) || (S(k) && (w[k] = t[k]))
              return (
                (w.className = s),
                (w.ref = r),
                (0, n.createElement)(
                  n.Fragment,
                  null,
                  (0, n.createElement)(x, {
                    cache: e,
                    serialized: b,
                    isStringTag: 'string' === typeof o,
                  }),
                  (0, n.createElement)(o, w)
                )
              )
            })
            return (
              (w.displayName =
                void 0 !== o
                  ? o
                  : 'Styled(' +
                    ('string' === typeof u
                      ? u
                      : u.displayName || u.name || 'Component') +
                    ')'),
              (w.defaultProps = e.defaultProps),
              (w.__emotion_real = w),
              (w.__emotion_base = u),
              (w.__emotion_styles = v),
              (w.__emotion_forwardProp = c),
              Object.defineProperty(w, 'toString', {
                value: function () {
                  return '.' + a
                },
              }),
              (w.withComponent = function (e, n) {
                return t(
                  e,
                  (0, l.Z)({}, r, n, { shouldForwardProp: b(w, n, !0) })
                ).apply(void 0, v)
              }),
              w
            )
          }
        },
        w = S.bind()
      ;[
        'a',
        'abbr',
        'address',
        'area',
        'article',
        'aside',
        'audio',
        'b',
        'base',
        'bdi',
        'bdo',
        'big',
        'blockquote',
        'body',
        'br',
        'button',
        'canvas',
        'caption',
        'cite',
        'code',
        'col',
        'colgroup',
        'data',
        'datalist',
        'dd',
        'del',
        'details',
        'dfn',
        'dialog',
        'div',
        'dl',
        'dt',
        'em',
        'embed',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'html',
        'i',
        'iframe',
        'img',
        'input',
        'ins',
        'kbd',
        'keygen',
        'label',
        'legend',
        'li',
        'link',
        'main',
        'map',
        'mark',
        'marquee',
        'menu',
        'menuitem',
        'meta',
        'meter',
        'nav',
        'noscript',
        'object',
        'ol',
        'optgroup',
        'option',
        'output',
        'p',
        'param',
        'picture',
        'pre',
        'progress',
        'q',
        'rp',
        'rt',
        'ruby',
        's',
        'samp',
        'script',
        'section',
        'select',
        'small',
        'source',
        'span',
        'strong',
        'style',
        'sub',
        'summary',
        'sup',
        'table',
        'tbody',
        'td',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'time',
        'title',
        'tr',
        'track',
        'u',
        'ul',
        'var',
        'video',
        'wbr',
        'circle',
        'clipPath',
        'defs',
        'ellipse',
        'foreignObject',
        'g',
        'image',
        'line',
        'linearGradient',
        'mask',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'stop',
        'svg',
        'text',
        'tspan',
      ].forEach(function (t) {
        w[t] = w(t)
      })
      var k = w,
        C = r(9123),
        _ = r.n(C),
        E = r(8555),
        A = r.n(E)
      function P() {
        const t = (0, n.useContext)(i.T)
        if (!t)
          throw Error(
            'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`'
          )
        return t
      }
      function R(t, e, r) {
        const n = P()
        return T(t, e, r)(n)
      }
      function T(t, e, r) {
        const n = Array.isArray(e) ? e : [e],
          o = Array.isArray(r) ? r : [r]
        return (r) => {
          const i = o.filter(Boolean),
            a = n.map((e, n) => {
              if ('breakpoints' === t)
                return (function (t, e, r) {
                  if (null == e) return e
                  const n = (e) => {
                    var r, n
                    return null ==
                      (n = null == (r = t.__breakpoints) ? void 0 : r.asArray)
                      ? void 0
                      : n[e]
                  }
                  return n(e) ?? n(r) ?? r
                })(r, e, i[n] ?? e)
              return (function (t, e, r) {
                if (null == e) return e
                const n = (e) => {
                  var r, n
                  return null == (n = null == (r = t.__cssMap) ? void 0 : r[e])
                    ? void 0
                    : n.value
                }
                return n(e) ?? n(r) ?? r
              })(r, `${t}.${e}`, i[n] ?? e)
            })
          return Array.isArray(e) ? a : a[0]
        }
      }
      function M(t) {
        const { cssVarsRoot: e, theme: r, children: o } = t,
          s = (0, n.useMemo)(() => (0, a.c0)(r), [r])
        return n.createElement(
          i.a,
          { theme: s },
          n.createElement(O, { root: e }),
          o
        )
      }
      function O({ root: t = ':host, :root' }) {
        const e = [t, '[data-theme]'].join(',')
        return n.createElement(u.xB, { styles: (t) => ({ [e]: t.__cssVars }) })
      }
      var [j, F] = (function (t = {}) {
        const {
            strict: e = !0,
            errorMessage:
              r = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
            name: o,
          } = t,
          i = (0, n.createContext)(void 0)
        return (
          (i.displayName = o),
          [
            i.Provider,
            function t() {
              var o
              const a = (0, n.useContext)(i)
              if (!a && e) {
                const e = new Error(r)
                throw (
                  ((e.name = 'ContextError'),
                  null == (o = Error.captureStackTrace) || o.call(Error, e, t),
                  e)
                )
              }
              return a
            },
            i,
          ]
        )
      })({
        name: 'StylesContext',
        errorMessage:
          'useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ',
      })
      function D() {
        const { colorMode: t } = (0, o.If)()
        return n.createElement(u.xB, {
          styles: (e) => {
            const r = (0, s.Wf)(e, 'styles.global'),
              n = (0, s.Pu)(r, { theme: e, colorMode: t })
            if (!n) return
            return (0, a.iv)(n)(e)
          },
        })
      }
      var B = new Set([
          ...a.cC,
          'textStyle',
          'layerStyle',
          'apply',
          'noOfLines',
          'focusBorderColor',
          'errorBorderColor',
          'as',
          '__css',
          'css',
          'sx',
        ]),
        z = new Set(['htmlWidth', 'htmlHeight', 'htmlSize'])
      function I(t) {
        return z.has(t) || !B.has(t)
      }
      function $(t, e) {
        const { baseStyle: r, ...i } = e ?? {}
        i.shouldForwardProp || (i.shouldForwardProp = I)
        const u = (
            ({ baseStyle: t }) =>
            (e) => {
              const { theme: r, css: n, __css: o, sx: i, ...u } = e,
                l = (0, s.lw)(u, (t, e) => (0, a.ZR)(e)),
                c = (0, s.Pu)(t, e),
                d = Object.assign({}, o, c, (0, s.YU)(l), i),
                f = (0, a.iv)(d)(e.theme)
              return n ? [f, n] : f
            }
          )({ baseStyle: r }),
          l = k(t, i)(u)
        return n.forwardRef(function (t, e) {
          const { colorMode: r, forced: i } = (0, o.If)()
          return n.createElement(l, {
            ref: e,
            'data-theme': i ? r : void 0,
            ...t,
          })
        })
      }
      function L(t) {
        return (0, n.forwardRef)(t)
      }
      function V(t, e = {}) {
        const { styleConfig: r, ...i } = e,
          { theme: u, colorMode: l } = { ...(0, o.If)(), theme: P() },
          c = (0, s.Wf)(u, `components.${t}`),
          d = r || c,
          f = _()(
            { theme: u, colorMode: l },
            (null == d ? void 0 : d.defaultProps) ?? {},
            (0, s.YU)((0, s.CE)(i, ['children']))
          ),
          p = (0, n.useRef)({})
        if (d) {
          const t = (0, a.Ud)(d)(f)
          A()(p.current, t) || (p.current = t)
        }
        return p.current
      }
      function q(t, e = {}) {
        return V(t, e)
      }
      function U(t, e = {}) {
        return V(t, e)
      }
      var N = (function () {
        const t = new Map()
        return new Proxy($, {
          apply: (t, e, r) => $(...r),
          get: (e, r) => (t.has(r) || t.set(r, $(r)), t.get(r)),
        })
      })()
    },
    8598: function (t, e, r) {
      'use strict'
      r.d(e, {
        YU: function () {
          return l
        },
        mf: function () {
          return i
        },
        Wf: function () {
          return s
        },
        lw: function () {
          return u
        },
        CE: function () {
          return a
        },
        zG: function () {
          return d
        },
        Pu: function () {
          return c
        },
      })
      r(9123)
      var n = (1 / 60) * 1e3,
        o =
          'undefined' !== typeof performance
            ? function () {
                return performance.now()
              }
            : function () {
                return Date.now()
              }
      function i(t) {
        return 'function' === typeof t
      }
      function a(t, e) {
        const r = {}
        return (
          Object.keys(t).forEach((n) => {
            e.includes(n) || (r[n] = t[n])
          }),
          r
        )
      }
      var s = ((t) => {
        const e = new WeakMap()
        return (r, n, o, i) => {
          if ('undefined' === typeof r) return t(r, n, o)
          e.has(r) || e.set(r, new Map())
          const a = e.get(r)
          if (a.has(n)) return a.get(n)
          const s = t(r, n, o, i)
          return a.set(n, s), s
        }
      })(function (t, e, r, n) {
        const o = 'string' === typeof e ? e.split('.') : [e]
        for (n = 0; n < o.length && t; n += 1) t = t[o[n]]
        return void 0 === t ? r : t
      })
      function u(t, e) {
        const r = {}
        return (
          Object.keys(t).forEach((n) => {
            const o = t[n]
            e(o, n, t) && (r[n] = o)
          }),
          r
        )
      }
      var l = (t) => u(t, (t) => null !== t && void 0 !== t)
      ;[
        'input:not(:disabled):not([disabled])',
        'select:not(:disabled):not([disabled])',
        'textarea:not(:disabled):not([disabled])',
        'embed',
        'iframe',
        'object',
        'a[href]',
        'area[href]',
        'button:not(:disabled):not([disabled])',
        '[tabindex]',
        'audio[controls]',
        'video[controls]',
        '*[tabindex]:not([aria-disabled])',
        '*[contenteditable]',
      ].join()
      function c(t, ...e) {
        return i(t) ? t(...e) : t
      }
      var d =
        (...t) =>
        (e) =>
          t.reduce((t, e) => e(t), e)
      Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER
      Object.freeze(['base', 'sm', 'md', 'lg', 'xl', '2xl'])
    },
    8902: function (t, e, r) {
      'use strict'
      r.d(e, {
        Z: function () {
          return ot
        },
      })
      var n = (function () {
          function t(t) {
            var e = this
            ;(this._insertTag = function (t) {
              var r
              ;(r =
                0 === e.tags.length
                  ? e.insertionPoint
                    ? e.insertionPoint.nextSibling
                    : e.prepend
                    ? e.container.firstChild
                    : e.before
                  : e.tags[e.tags.length - 1].nextSibling),
                e.container.insertBefore(t, r),
                e.tags.push(t)
            }),
              (this.isSpeedy = void 0 === t.speedy || t.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = t.nonce),
              (this.key = t.key),
              (this.container = t.container),
              (this.prepend = t.prepend),
              (this.insertionPoint = t.insertionPoint),
              (this.before = null)
          }
          var e = t.prototype
          return (
            (e.hydrate = function (t) {
              t.forEach(this._insertTag)
            }),
            (e.insert = function (t) {
              this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
                this._insertTag(
                  (function (t) {
                    var e = document.createElement('style')
                    return (
                      e.setAttribute('data-emotion', t.key),
                      void 0 !== t.nonce && e.setAttribute('nonce', t.nonce),
                      e.appendChild(document.createTextNode('')),
                      e.setAttribute('data-s', ''),
                      e
                    )
                  })(this)
                )
              var e = this.tags[this.tags.length - 1]
              if (this.isSpeedy) {
                var r = (function (t) {
                  if (t.sheet) return t.sheet
                  for (var e = 0; e < document.styleSheets.length; e++)
                    if (document.styleSheets[e].ownerNode === t)
                      return document.styleSheets[e]
                })(e)
                try {
                  r.insertRule(t, r.cssRules.length)
                } catch (n) {
                  0
                }
              } else e.appendChild(document.createTextNode(t))
              this.ctr++
            }),
            (e.flush = function () {
              this.tags.forEach(function (t) {
                return t.parentNode && t.parentNode.removeChild(t)
              }),
                (this.tags = []),
                (this.ctr = 0)
            }),
            t
          )
        })(),
        o = Math.abs,
        i = String.fromCharCode,
        a = Object.assign
      function s(t) {
        return t.trim()
      }
      function u(t, e, r) {
        return t.replace(e, r)
      }
      function l(t, e) {
        return t.indexOf(e)
      }
      function c(t, e) {
        return 0 | t.charCodeAt(e)
      }
      function d(t, e, r) {
        return t.slice(e, r)
      }
      function f(t) {
        return t.length
      }
      function p(t) {
        return t.length
      }
      function h(t, e) {
        return e.push(t), t
      }
      var m = 1,
        v = 1,
        g = 0,
        y = 0,
        b = 0,
        x = ''
      function S(t, e, r, n, o, i, a) {
        return {
          value: t,
          root: e,
          parent: r,
          type: n,
          props: o,
          children: i,
          line: m,
          column: v,
          length: a,
          return: '',
        }
      }
      function w(t, e) {
        return a(
          S('', null, null, '', null, null, 0),
          t,
          { length: -t.length },
          e
        )
      }
      function k() {
        return (b = y > 0 ? c(x, --y) : 0), v--, 10 === b && ((v = 1), m--), b
      }
      function C() {
        return (b = y < g ? c(x, y++) : 0), v++, 10 === b && ((v = 1), m++), b
      }
      function _() {
        return c(x, y)
      }
      function E() {
        return y
      }
      function A(t, e) {
        return d(x, t, e)
      }
      function P(t) {
        switch (t) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4
          case 58:
            return 3
          case 34:
          case 39:
          case 40:
          case 91:
            return 2
          case 41:
          case 93:
            return 1
        }
        return 0
      }
      function R(t) {
        return (m = v = 1), (g = f((x = t))), (y = 0), []
      }
      function T(t) {
        return (x = ''), t
      }
      function M(t) {
        return s(A(y - 1, F(91 === t ? t + 2 : 40 === t ? t + 1 : t)))
      }
      function O(t) {
        for (; (b = _()) && b < 33; ) C()
        return P(t) > 2 || P(b) > 3 ? '' : ' '
      }
      function j(t, e) {
        for (
          ;
          --e &&
          C() &&
          !(b < 48 || b > 102 || (b > 57 && b < 65) || (b > 70 && b < 97));

        );
        return A(t, E() + (e < 6 && 32 == _() && 32 == C()))
      }
      function F(t) {
        for (; C(); )
          switch (b) {
            case t:
              return y
            case 34:
            case 39:
              34 !== t && 39 !== t && F(b)
              break
            case 40:
              41 === t && F(t)
              break
            case 92:
              C()
          }
        return y
      }
      function D(t, e) {
        for (; C() && t + b !== 57 && (t + b !== 84 || 47 !== _()); );
        return '/*' + A(e, y - 1) + '*' + i(47 === t ? t : C())
      }
      function B(t) {
        for (; !P(_()); ) C()
        return A(t, y)
      }
      var z = '-ms-',
        I = '-moz-',
        $ = '-webkit-',
        L = 'comm',
        V = 'rule',
        q = 'decl',
        U = '@keyframes'
      function N(t, e) {
        for (var r = '', n = p(t), o = 0; o < n; o++)
          r += e(t[o], o, t, e) || ''
        return r
      }
      function W(t, e, r, n) {
        switch (t.type) {
          case '@import':
          case q:
            return (t.return = t.return || t.value)
          case L:
            return ''
          case U:
            return (t.return = t.value + '{' + N(t.children, n) + '}')
          case V:
            t.value = t.props.join(',')
        }
        return f((r = N(t.children, n)))
          ? (t.return = t.value + '{' + r + '}')
          : ''
      }
      function H(t, e) {
        switch (
          (function (t, e) {
            return (
              (((((((e << 2) ^ c(t, 0)) << 2) ^ c(t, 1)) << 2) ^ c(t, 2)) <<
                2) ^
              c(t, 3)
            )
          })(t, e)
        ) {
          case 5103:
            return $ + 'print-' + t + t
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return $ + t + t
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return $ + t + I + t + z + t + t
          case 6828:
          case 4268:
            return $ + t + z + t + t
          case 6165:
            return $ + t + z + 'flex-' + t + t
          case 5187:
            return (
              $ +
              t +
              u(t, /(\w+).+(:[^]+)/, '-webkit-box-$1$2-ms-flex-$1$2') +
              t
            )
          case 5443:
            return $ + t + z + 'flex-item-' + u(t, /flex-|-self/, '') + t
          case 4675:
            return (
              $ +
              t +
              z +
              'flex-line-pack' +
              u(t, /align-content|flex-|-self/, '') +
              t
            )
          case 5548:
            return $ + t + z + u(t, 'shrink', 'negative') + t
          case 5292:
            return $ + t + z + u(t, 'basis', 'preferred-size') + t
          case 6060:
            return (
              $ +
              'box-' +
              u(t, '-grow', '') +
              $ +
              t +
              z +
              u(t, 'grow', 'positive') +
              t
            )
          case 4554:
            return $ + u(t, /([^-])(transform)/g, '$1-webkit-$2') + t
          case 6187:
            return (
              u(
                u(u(t, /(zoom-|grab)/, $ + '$1'), /(image-set)/, $ + '$1'),
                t,
                ''
              ) + t
            )
          case 5495:
          case 3959:
            return u(t, /(image-set\([^]*)/, $ + '$1$`$1')
          case 4968:
            return (
              u(
                u(
                  t,
                  /(.+:)(flex-)?(.*)/,
                  '-webkit-box-pack:$3-ms-flex-pack:$3'
                ),
                /s.+-b[^;]+/,
                'justify'
              ) +
              $ +
              t +
              t
            )
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return u(t, /(.+)-inline(.+)/, $ + '$1$2') + t
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (f(t) - 1 - e > 6)
              switch (c(t, e + 1)) {
                case 109:
                  if (45 !== c(t, e + 4)) break
                case 102:
                  return (
                    u(
                      t,
                      /(.+:)(.+)-([^]+)/,
                      '$1-webkit-$2-$3$1' +
                        I +
                        (108 == c(t, e + 3) ? '$3' : '$2-$3')
                    ) + t
                  )
                case 115:
                  return ~l(t, 'stretch')
                    ? H(u(t, 'stretch', 'fill-available'), e) + t
                    : t
              }
            break
          case 4949:
            if (115 !== c(t, e + 1)) break
          case 6444:
            switch (c(t, f(t) - 3 - (~l(t, '!important') && 10))) {
              case 107:
                return u(t, ':', ':' + $) + t
              case 101:
                return (
                  u(
                    t,
                    /(.+:)([^;!]+)(;|!.+)?/,
                    '$1' +
                      $ +
                      (45 === c(t, 14) ? 'inline-' : '') +
                      'box$3$1' +
                      $ +
                      '$2$3$1' +
                      z +
                      '$2box$3'
                  ) + t
                )
            }
            break
          case 5936:
            switch (c(t, e + 11)) {
              case 114:
                return $ + t + z + u(t, /[svh]\w+-[tblr]{2}/, 'tb') + t
              case 108:
                return $ + t + z + u(t, /[svh]\w+-[tblr]{2}/, 'tb-rl') + t
              case 45:
                return $ + t + z + u(t, /[svh]\w+-[tblr]{2}/, 'lr') + t
            }
            return $ + t + z + t + t
        }
        return t
      }
      function Q(t) {
        return T(G('', null, null, null, [''], (t = R(t)), 0, [0], t))
      }
      function G(t, e, r, n, o, a, s, c, d) {
        for (
          var p = 0,
            m = 0,
            v = s,
            g = 0,
            y = 0,
            b = 0,
            x = 1,
            S = 1,
            w = 1,
            A = 0,
            P = '',
            R = o,
            T = a,
            F = n,
            z = P;
          S;

        )
          switch (((b = A), (A = C()))) {
            case 40:
              if (108 != b && 58 == z.charCodeAt(v - 1)) {
                ;-1 != l((z += u(M(A), '&', '&\f')), '&\f') && (w = -1)
                break
              }
            case 34:
            case 39:
            case 91:
              z += M(A)
              break
            case 9:
            case 10:
            case 13:
            case 32:
              z += O(b)
              break
            case 92:
              z += j(E() - 1, 7)
              continue
            case 47:
              switch (_()) {
                case 42:
                case 47:
                  h(Y(D(C(), E()), e, r), d)
                  break
                default:
                  z += '/'
              }
              break
            case 123 * x:
              c[p++] = f(z) * w
            case 125 * x:
            case 59:
            case 0:
              switch (A) {
                case 0:
                case 125:
                  S = 0
                case 59 + m:
                  y > 0 &&
                    f(z) - v &&
                    h(
                      y > 32
                        ? X(z + ';', n, r, v - 1)
                        : X(u(z, ' ', '') + ';', n, r, v - 2),
                      d
                    )
                  break
                case 59:
                  z += ';'
                default:
                  if (
                    (h(
                      (F = K(z, e, r, p, m, o, c, P, (R = []), (T = []), v)),
                      a
                    ),
                    123 === A)
                  )
                    if (0 === m) G(z, e, F, F, R, a, v, c, T)
                    else
                      switch (g) {
                        case 100:
                        case 109:
                        case 115:
                          G(
                            t,
                            F,
                            F,
                            n &&
                              h(K(t, F, F, 0, 0, o, c, P, o, (R = []), v), T),
                            o,
                            T,
                            v,
                            c,
                            n ? R : T
                          )
                          break
                        default:
                          G(z, F, F, F, [''], T, 0, c, T)
                      }
              }
              ;(p = m = y = 0), (x = w = 1), (P = z = ''), (v = s)
              break
            case 58:
              ;(v = 1 + f(z)), (y = b)
            default:
              if (x < 1)
                if (123 == A) --x
                else if (125 == A && 0 == x++ && 125 == k()) continue
              switch (((z += i(A)), A * x)) {
                case 38:
                  w = m > 0 ? 1 : ((z += '\f'), -1)
                  break
                case 44:
                  ;(c[p++] = (f(z) - 1) * w), (w = 1)
                  break
                case 64:
                  45 === _() && (z += M(C())),
                    (g = _()),
                    (m = v = f((P = z += B(E())))),
                    A++
                  break
                case 45:
                  45 === b && 2 == f(z) && (x = 0)
              }
          }
        return a
      }
      function K(t, e, r, n, i, a, l, c, f, h, m) {
        for (
          var v = i - 1, g = 0 === i ? a : [''], y = p(g), b = 0, x = 0, w = 0;
          b < n;
          ++b
        )
          for (
            var k = 0, C = d(t, v + 1, (v = o((x = l[b])))), _ = t;
            k < y;
            ++k
          )
            (_ = s(x > 0 ? g[k] + ' ' + C : u(C, /&\f/g, g[k]))) && (f[w++] = _)
        return S(t, e, r, 0 === i ? V : c, f, h, m)
      }
      function Y(t, e, r) {
        return S(t, e, r, L, i(b), d(t, 2, -2), 0)
      }
      function X(t, e, r, n) {
        return S(t, e, r, q, d(t, 0, n), d(t, n + 1, -1), n)
      }
      var Z = function (t, e, r) {
          for (
            var n = 0, o = 0;
            (n = o), (o = _()), 38 === n && 12 === o && (e[r] = 1), !P(o);

          )
            C()
          return A(t, y)
        },
        J = function (t, e) {
          return T(
            (function (t, e) {
              var r = -1,
                n = 44
              do {
                switch (P(n)) {
                  case 0:
                    38 === n && 12 === _() && (e[r] = 1),
                      (t[r] += Z(y - 1, e, r))
                    break
                  case 2:
                    t[r] += M(n)
                    break
                  case 4:
                    if (44 === n) {
                      ;(t[++r] = 58 === _() ? '&\f' : ''), (e[r] = t[r].length)
                      break
                    }
                  default:
                    t[r] += i(n)
                }
              } while ((n = C()))
              return t
            })(R(t), e)
          )
        },
        tt = new WeakMap(),
        et = function (t) {
          if ('rule' === t.type && t.parent && !(t.length < 1)) {
            for (
              var e = t.value,
                r = t.parent,
                n = t.column === r.column && t.line === r.line;
              'rule' !== r.type;

            )
              if (!(r = r.parent)) return
            if (
              (1 !== t.props.length || 58 === e.charCodeAt(0) || tt.get(r)) &&
              !n
            ) {
              tt.set(t, !0)
              for (
                var o = [], i = J(e, o), a = r.props, s = 0, u = 0;
                s < i.length;
                s++
              )
                for (var l = 0; l < a.length; l++, u++)
                  t.props[u] = o[s]
                    ? i[s].replace(/&\f/g, a[l])
                    : a[l] + ' ' + i[s]
            }
          }
        },
        rt = function (t) {
          if ('decl' === t.type) {
            var e = t.value
            108 === e.charCodeAt(0) &&
              98 === e.charCodeAt(2) &&
              ((t.return = ''), (t.value = ''))
          }
        },
        nt = [
          function (t, e, r, n) {
            if (t.length > -1 && !t.return)
              switch (t.type) {
                case q:
                  t.return = H(t.value, t.length)
                  break
                case U:
                  return N([w(t, { value: u(t.value, '@', '@' + $) })], n)
                case V:
                  if (t.length)
                    return (function (t, e) {
                      return t.map(e).join('')
                    })(t.props, function (e) {
                      switch (
                        (function (t, e) {
                          return (t = e.exec(t)) ? t[0] : t
                        })(e, /(::plac\w+|:read-\w+)/)
                      ) {
                        case ':read-only':
                        case ':read-write':
                          return N(
                            [
                              w(t, {
                                props: [u(e, /:(read-\w+)/, ':-moz-$1')],
                              }),
                            ],
                            n
                          )
                        case '::placeholder':
                          return N(
                            [
                              w(t, {
                                props: [
                                  u(e, /:(plac\w+)/, ':-webkit-input-$1'),
                                ],
                              }),
                              w(t, { props: [u(e, /:(plac\w+)/, ':-moz-$1')] }),
                              w(t, {
                                props: [u(e, /:(plac\w+)/, z + 'input-$1')],
                              }),
                            ],
                            n
                          )
                      }
                      return ''
                    })
              }
          },
        ],
        ot = function (t) {
          var e = t.key
          if ('css' === e) {
            var r = document.querySelectorAll(
              'style[data-emotion]:not([data-s])'
            )
            Array.prototype.forEach.call(r, function (t) {
              ;-1 !== t.getAttribute('data-emotion').indexOf(' ') &&
                (document.head.appendChild(t), t.setAttribute('data-s', ''))
            })
          }
          var o = t.stylisPlugins || nt
          var i,
            a,
            s = {},
            u = []
          ;(i = t.container || document.head),
            Array.prototype.forEach.call(
              document.querySelectorAll('style[data-emotion^="' + e + ' "]'),
              function (t) {
                for (
                  var e = t.getAttribute('data-emotion').split(' '), r = 1;
                  r < e.length;
                  r++
                )
                  s[e[r]] = !0
                u.push(t)
              }
            )
          var l,
            c,
            d = [
              W,
              ((c = function (t) {
                l.insert(t)
              }),
              function (t) {
                t.root || ((t = t.return) && c(t))
              }),
            ],
            f = (function (t) {
              var e = p(t)
              return function (r, n, o, i) {
                for (var a = '', s = 0; s < e; s++) a += t[s](r, n, o, i) || ''
                return a
              }
            })([et, rt].concat(o, d))
          a = function (t, e, r, n) {
            ;(l = r),
              N(Q(t ? t + '{' + e.styles + '}' : e.styles), f),
              n && (h.inserted[e.name] = !0)
          }
          var h = {
            key: e,
            sheet: new n({
              key: e,
              container: i,
              nonce: t.nonce,
              speedy: t.speedy,
              prepend: t.prepend,
              insertionPoint: t.insertionPoint,
            }),
            nonce: t.nonce,
            inserted: s,
            registered: {},
            insert: a,
          }
          return h.sheet.hydrate(u), h
        }
    },
    192: function (t, e) {
      'use strict'
      e.Z = function (t) {
        var e = Object.create(null)
        return function (r) {
          return void 0 === e[r] && (e[r] = t(r)), e[r]
        }
      }
    },
    3739: function (t, e, r) {
      'use strict'
      r.d(e, {
        T: function () {
          return l
        },
        a: function () {
          return d
        },
        w: function () {
          return u
        },
      })
      var n = r(2983),
        o = r(8902),
        i = r(7998),
        a = function (t) {
          var e = new WeakMap()
          return function (r) {
            if (e.has(r)) return e.get(r)
            var n = t(r)
            return e.set(r, n), n
          }
        },
        s =
          (r(8543),
          r(5117),
          (0, n.createContext)(
            'undefined' !== typeof HTMLElement ? (0, o.Z)({ key: 'css' }) : null
          ))
      s.Provider
      var u = function (t) {
          return (0, n.forwardRef)(function (e, r) {
            var o = (0, n.useContext)(s)
            return t(e, o, r)
          })
        },
        l = (0, n.createContext)({})
      var c = a(function (t) {
          return a(function (e) {
            return (function (t, e) {
              return 'function' === typeof e ? e(t) : (0, i.Z)({}, t, e)
            })(t, e)
          })
        }),
        d = function (t) {
          var e = (0, n.useContext)(l)
          return (
            t.theme !== e && (e = c(e)(t.theme)),
            (0, n.createElement)(l.Provider, { value: e }, t.children)
          )
        }
    },
    8918: function (t, e, r) {
      'use strict'
      r.d(e, {
        F4: function () {
          return c
        },
        xB: function () {
          return u
        },
      })
      var n = r(2983),
        o = (r(8902), r(3739)),
        i = (r(63), r(3041)),
        a = r(8543),
        s = r(5117),
        u = (0, o.w)(function (t, e) {
          var r = t.styles,
            u = (0, a.O)([r], void 0, (0, n.useContext)(o.T)),
            l = (0, n.useRef)()
          return (
            (0, s.j)(
              function () {
                var t = e.key + '-global',
                  r = new e.sheet.constructor({
                    key: t,
                    nonce: e.sheet.nonce,
                    container: e.sheet.container,
                    speedy: e.sheet.isSpeedy,
                  }),
                  n = !1,
                  o = document.querySelector(
                    'style[data-emotion="' + t + ' ' + u.name + '"]'
                  )
                return (
                  e.sheet.tags.length && (r.before = e.sheet.tags[0]),
                  null !== o &&
                    ((n = !0),
                    o.setAttribute('data-emotion', t),
                    r.hydrate([o])),
                  (l.current = [r, n]),
                  function () {
                    r.flush()
                  }
                )
              },
              [e]
            ),
            (0, s.j)(
              function () {
                var t = l.current,
                  r = t[0]
                if (t[1]) t[1] = !1
                else {
                  if (
                    (void 0 !== u.next && (0, i.My)(e, u.next, !0),
                    r.tags.length)
                  ) {
                    var n = r.tags[r.tags.length - 1].nextElementSibling
                    ;(r.before = n), r.flush()
                  }
                  e.insert('', u, r, !1)
                }
              },
              [e, u.name]
            ),
            null
          )
        })
      function l() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r]
        return (0, a.O)(e)
      }
      var c = function () {
        var t = l.apply(void 0, arguments),
          e = 'animation-' + t.name
        return {
          name: e,
          styles: '@keyframes ' + e + '{' + t.styles + '}',
          anim: 1,
          toString: function () {
            return '_EMO_' + this.name + '_' + this.styles + '_EMO_'
          },
        }
      }
    },
    8543: function (t, e, r) {
      'use strict'
      r.d(e, {
        O: function () {
          return m
        },
      })
      var n = function (t) {
          for (var e, r = 0, n = 0, o = t.length; o >= 4; ++n, o -= 4)
            (e =
              1540483477 *
                (65535 &
                  (e =
                    (255 & t.charCodeAt(n)) |
                    ((255 & t.charCodeAt(++n)) << 8) |
                    ((255 & t.charCodeAt(++n)) << 16) |
                    ((255 & t.charCodeAt(++n)) << 24))) +
              ((59797 * (e >>> 16)) << 16)),
              (r =
                (1540483477 * (65535 & (e ^= e >>> 24)) +
                  ((59797 * (e >>> 16)) << 16)) ^
                (1540483477 * (65535 & r) + ((59797 * (r >>> 16)) << 16)))
          switch (o) {
            case 3:
              r ^= (255 & t.charCodeAt(n + 2)) << 16
            case 2:
              r ^= (255 & t.charCodeAt(n + 1)) << 8
            case 1:
              r =
                1540483477 * (65535 & (r ^= 255 & t.charCodeAt(n))) +
                ((59797 * (r >>> 16)) << 16)
          }
          return (
            ((r =
              1540483477 * (65535 & (r ^= r >>> 13)) +
              ((59797 * (r >>> 16)) << 16)) ^
              (r >>> 15)) >>>
            0
          ).toString(36)
        },
        o = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        i = r(192),
        a = /[A-Z]|^ms/g,
        s = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        u = function (t) {
          return 45 === t.charCodeAt(1)
        },
        l = function (t) {
          return null != t && 'boolean' !== typeof t
        },
        c = (0, i.Z)(function (t) {
          return u(t) ? t : t.replace(a, '-$&').toLowerCase()
        }),
        d = function (t, e) {
          switch (t) {
            case 'animation':
            case 'animationName':
              if ('string' === typeof e)
                return e.replace(s, function (t, e, r) {
                  return (p = { name: e, styles: r, next: p }), e
                })
          }
          return 1 === o[t] || u(t) || 'number' !== typeof e || 0 === e
            ? e
            : e + 'px'
        }
      function f(t, e, r) {
        if (null == r) return ''
        if (void 0 !== r.__emotion_styles) return r
        switch (typeof r) {
          case 'boolean':
            return ''
          case 'object':
            if (1 === r.anim)
              return (p = { name: r.name, styles: r.styles, next: p }), r.name
            if (void 0 !== r.styles) {
              var n = r.next
              if (void 0 !== n)
                for (; void 0 !== n; )
                  (p = { name: n.name, styles: n.styles, next: p }),
                    (n = n.next)
              return r.styles + ';'
            }
            return (function (t, e, r) {
              var n = ''
              if (Array.isArray(r))
                for (var o = 0; o < r.length; o++) n += f(t, e, r[o]) + ';'
              else
                for (var i in r) {
                  var a = r[i]
                  if ('object' !== typeof a)
                    null != e && void 0 !== e[a]
                      ? (n += i + '{' + e[a] + '}')
                      : l(a) && (n += c(i) + ':' + d(i, a) + ';')
                  else if (
                    !Array.isArray(a) ||
                    'string' !== typeof a[0] ||
                    (null != e && void 0 !== e[a[0]])
                  ) {
                    var s = f(t, e, a)
                    switch (i) {
                      case 'animation':
                      case 'animationName':
                        n += c(i) + ':' + s + ';'
                        break
                      default:
                        n += i + '{' + s + '}'
                    }
                  } else
                    for (var u = 0; u < a.length; u++)
                      l(a[u]) && (n += c(i) + ':' + d(i, a[u]) + ';')
                }
              return n
            })(t, e, r)
          case 'function':
            if (void 0 !== t) {
              var o = p,
                i = r(t)
              return (p = o), f(t, e, i)
            }
        }
        if (null == e) return r
        var a = e[r]
        return void 0 !== a ? a : r
      }
      var p,
        h = /label:\s*([^\s;\n{]+)\s*(;|$)/g
      var m = function (t, e, r) {
        if (
          1 === t.length &&
          'object' === typeof t[0] &&
          null !== t[0] &&
          void 0 !== t[0].styles
        )
          return t[0]
        var o = !0,
          i = ''
        p = void 0
        var a = t[0]
        null == a || void 0 === a.raw
          ? ((o = !1), (i += f(r, e, a)))
          : (i += a[0])
        for (var s = 1; s < t.length; s++)
          (i += f(r, e, t[s])), o && (i += a[s])
        h.lastIndex = 0
        for (var u, l = ''; null !== (u = h.exec(i)); ) l += '-' + u[1]
        return { name: n(i) + l, styles: i, next: p }
      }
    },
    5117: function (t, e, r) {
      'use strict'
      var n
      r.d(e, {
        L: function () {
          return a
        },
        j: function () {
          return s
        },
      })
      var o = r(2983),
        i =
          !!(n || (n = r.t(o, 2))).useInsertionEffect &&
          (n || (n = r.t(o, 2))).useInsertionEffect,
        a =
          i ||
          function (t) {
            return t()
          },
        s = i || o.useLayoutEffect
    },
    3041: function (t, e, r) {
      'use strict'
      r.d(e, {
        My: function () {
          return i
        },
        fp: function () {
          return n
        },
        hC: function () {
          return o
        },
      })
      function n(t, e, r) {
        var n = ''
        return (
          r.split(' ').forEach(function (r) {
            void 0 !== t[r] ? e.push(t[r] + ';') : (n += r + ' ')
          }),
          n
        )
      }
      var o = function (t, e, r) {
          var n = t.key + '-' + e.name
          !1 === r && void 0 === t.registered[n] && (t.registered[n] = e.styles)
        },
        i = function (t, e, r) {
          o(t, e, r)
          var n = t.key + '-' + e.name
          if (void 0 === t.inserted[e.name]) {
            var i = e
            do {
              t.insert(e === i ? '.' + n : '', i, t.sheet, !0)
              i = i.next
            } while (void 0 !== i)
          }
        }
    },
    63: function (t, e, r) {
      'use strict'
      var n = r(9415),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {}
      function u(t) {
        return n.isMemo(t) ? a : s[t.$$typeof] || o
      }
      ;(s[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[n.Memo] = a)
      var l = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        h = Object.prototype
      t.exports = function t(e, r, n) {
        if ('string' !== typeof r) {
          if (h) {
            var o = p(r)
            o && o !== h && t(e, o, n)
          }
          var a = c(r)
          d && (a = a.concat(d(r)))
          for (var s = u(e), m = u(r), v = 0; v < a.length; ++v) {
            var g = a[v]
            if (!i[g] && (!n || !n[g]) && (!m || !m[g]) && (!s || !s[g])) {
              var y = f(r, g)
              try {
                l(e, g, y)
              } catch (b) {}
            }
          }
        }
        return e
      }
    },
    9123: function (t, e, r) {
      t = r.nmd(t)
      var n = '__lodash_hash_undefined__',
        o = 9007199254740991,
        i = '[object Arguments]',
        a = '[object Function]',
        s = '[object Object]',
        u = /^\[object .+?Constructor\]$/,
        l = /^(?:0|[1-9]\d*)$/,
        c = {}
      ;(c['[object Float32Array]'] =
        c['[object Float64Array]'] =
        c['[object Int8Array]'] =
        c['[object Int16Array]'] =
        c['[object Int32Array]'] =
        c['[object Uint8Array]'] =
        c['[object Uint8ClampedArray]'] =
        c['[object Uint16Array]'] =
        c['[object Uint32Array]'] =
          !0),
        (c[i] =
          c['[object Array]'] =
          c['[object ArrayBuffer]'] =
          c['[object Boolean]'] =
          c['[object DataView]'] =
          c['[object Date]'] =
          c['[object Error]'] =
          c[a] =
          c['[object Map]'] =
          c['[object Number]'] =
          c[s] =
          c['[object RegExp]'] =
          c['[object Set]'] =
          c['[object String]'] =
          c['[object WeakMap]'] =
            !1)
      var d = 'object' == typeof r.g && r.g && r.g.Object === Object && r.g,
        f = 'object' == typeof self && self && self.Object === Object && self,
        p = d || f || Function('return this')(),
        h = e && !e.nodeType && e,
        m = h && t && !t.nodeType && t,
        v = m && m.exports === h,
        g = v && d.process,
        y = (function () {
          try {
            var t = m && m.require && m.require('util').types
            return t || (g && g.binding && g.binding('util'))
          } catch (e) {}
        })(),
        b = y && y.isTypedArray
      function x(t, e, r) {
        switch (r.length) {
          case 0:
            return t.call(e)
          case 1:
            return t.call(e, r[0])
          case 2:
            return t.call(e, r[0], r[1])
          case 3:
            return t.call(e, r[0], r[1], r[2])
        }
        return t.apply(e, r)
      }
      var S,
        w,
        k = Array.prototype,
        C = Function.prototype,
        _ = Object.prototype,
        E = p['__core-js_shared__'],
        A = C.toString,
        P = _.hasOwnProperty,
        R = (function () {
          var t = /[^.]+$/.exec((E && E.keys && E.keys.IE_PROTO) || '')
          return t ? 'Symbol(src)_1.' + t : ''
        })(),
        T = _.toString,
        M = A.call(Object),
        O = RegExp(
          '^' +
            A.call(P)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?'
              ) +
            '$'
        ),
        j = v ? p.Buffer : void 0,
        F = p.Symbol,
        D = p.Uint8Array,
        B = j ? j.allocUnsafe : void 0,
        z =
          ((S = Object.getPrototypeOf),
          (w = Object),
          function (t) {
            return S(w(t))
          }),
        I = Object.create,
        $ = _.propertyIsEnumerable,
        L = k.splice,
        V = F ? F.toStringTag : void 0,
        q = (function () {
          try {
            var t = ht(Object, 'defineProperty')
            return t({}, '', {}), t
          } catch (e) {}
        })(),
        U = j ? j.isBuffer : void 0,
        N = Math.max,
        W = Date.now,
        H = ht(p, 'Map'),
        Q = ht(Object, 'create'),
        G = (function () {
          function t() {}
          return function (e) {
            if (!Et(e)) return {}
            if (I) return I(e)
            t.prototype = e
            var r = new t()
            return (t.prototype = void 0), r
          }
        })()
      function K(t) {
        var e = -1,
          r = null == t ? 0 : t.length
        for (this.clear(); ++e < r; ) {
          var n = t[e]
          this.set(n[0], n[1])
        }
      }
      function Y(t) {
        var e = -1,
          r = null == t ? 0 : t.length
        for (this.clear(); ++e < r; ) {
          var n = t[e]
          this.set(n[0], n[1])
        }
      }
      function X(t) {
        var e = -1,
          r = null == t ? 0 : t.length
        for (this.clear(); ++e < r; ) {
          var n = t[e]
          this.set(n[0], n[1])
        }
      }
      function Z(t) {
        var e = (this.__data__ = new Y(t))
        this.size = e.size
      }
      function J(t, e) {
        var r = St(t),
          n = !r && xt(t),
          o = !r && !n && kt(t),
          i = !r && !n && !o && Pt(t),
          a = r || n || o || i,
          s = a
            ? (function (t, e) {
                for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r)
                return n
              })(t.length, String)
            : [],
          u = s.length
        for (var l in t)
          (!e && !P.call(t, l)) ||
            (a &&
              ('length' == l ||
                (o && ('offset' == l || 'parent' == l)) ||
                (i &&
                  ('buffer' == l || 'byteLength' == l || 'byteOffset' == l)) ||
                mt(l, u))) ||
            s.push(l)
        return s
      }
      function tt(t, e, r) {
        ;((void 0 !== r && !bt(t[e], r)) || (void 0 === r && !(e in t))) &&
          nt(t, e, r)
      }
      function et(t, e, r) {
        var n = t[e]
        ;(P.call(t, e) && bt(n, r) && (void 0 !== r || e in t)) || nt(t, e, r)
      }
      function rt(t, e) {
        for (var r = t.length; r--; ) if (bt(t[r][0], e)) return r
        return -1
      }
      function nt(t, e, r) {
        '__proto__' == e && q
          ? q(t, e, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0,
            })
          : (t[e] = r)
      }
      ;(K.prototype.clear = function () {
        ;(this.__data__ = Q ? Q(null) : {}), (this.size = 0)
      }),
        (K.prototype.delete = function (t) {
          var e = this.has(t) && delete this.__data__[t]
          return (this.size -= e ? 1 : 0), e
        }),
        (K.prototype.get = function (t) {
          var e = this.__data__
          if (Q) {
            var r = e[t]
            return r === n ? void 0 : r
          }
          return P.call(e, t) ? e[t] : void 0
        }),
        (K.prototype.has = function (t) {
          var e = this.__data__
          return Q ? void 0 !== e[t] : P.call(e, t)
        }),
        (K.prototype.set = function (t, e) {
          var r = this.__data__
          return (
            (this.size += this.has(t) ? 0 : 1),
            (r[t] = Q && void 0 === e ? n : e),
            this
          )
        }),
        (Y.prototype.clear = function () {
          ;(this.__data__ = []), (this.size = 0)
        }),
        (Y.prototype.delete = function (t) {
          var e = this.__data__,
            r = rt(e, t)
          return (
            !(r < 0) &&
            (r == e.length - 1 ? e.pop() : L.call(e, r, 1), --this.size, !0)
          )
        }),
        (Y.prototype.get = function (t) {
          var e = this.__data__,
            r = rt(e, t)
          return r < 0 ? void 0 : e[r][1]
        }),
        (Y.prototype.has = function (t) {
          return rt(this.__data__, t) > -1
        }),
        (Y.prototype.set = function (t, e) {
          var r = this.__data__,
            n = rt(r, t)
          return n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this
        }),
        (X.prototype.clear = function () {
          ;(this.size = 0),
            (this.__data__ = {
              hash: new K(),
              map: new (H || Y)(),
              string: new K(),
            })
        }),
        (X.prototype.delete = function (t) {
          var e = pt(this, t).delete(t)
          return (this.size -= e ? 1 : 0), e
        }),
        (X.prototype.get = function (t) {
          return pt(this, t).get(t)
        }),
        (X.prototype.has = function (t) {
          return pt(this, t).has(t)
        }),
        (X.prototype.set = function (t, e) {
          var r = pt(this, t),
            n = r.size
          return r.set(t, e), (this.size += r.size == n ? 0 : 1), this
        }),
        (Z.prototype.clear = function () {
          ;(this.__data__ = new Y()), (this.size = 0)
        }),
        (Z.prototype.delete = function (t) {
          var e = this.__data__,
            r = e.delete(t)
          return (this.size = e.size), r
        }),
        (Z.prototype.get = function (t) {
          return this.__data__.get(t)
        }),
        (Z.prototype.has = function (t) {
          return this.__data__.has(t)
        }),
        (Z.prototype.set = function (t, e) {
          var r = this.__data__
          if (r instanceof Y) {
            var n = r.__data__
            if (!H || n.length < 199)
              return n.push([t, e]), (this.size = ++r.size), this
            r = this.__data__ = new X(n)
          }
          return r.set(t, e), (this.size = r.size), this
        })
      var ot,
        it = function (t, e, r) {
          for (var n = -1, o = Object(t), i = r(t), a = i.length; a--; ) {
            var s = i[ot ? a : ++n]
            if (!1 === e(o[s], s, o)) break
          }
          return t
        }
      function at(t) {
        return null == t
          ? void 0 === t
            ? '[object Undefined]'
            : '[object Null]'
          : V && V in Object(t)
          ? (function (t) {
              var e = P.call(t, V),
                r = t[V]
              try {
                t[V] = void 0
                var n = !0
              } catch (i) {}
              var o = T.call(t)
              n && (e ? (t[V] = r) : delete t[V])
              return o
            })(t)
          : (function (t) {
              return T.call(t)
            })(t)
      }
      function st(t) {
        return At(t) && at(t) == i
      }
      function ut(t) {
        return (
          !(
            !Et(t) ||
            (function (t) {
              return !!R && R in t
            })(t)
          ) &&
          (Ct(t) ? O : u).test(
            (function (t) {
              if (null != t) {
                try {
                  return A.call(t)
                } catch (e) {}
                try {
                  return t + ''
                } catch (e) {}
              }
              return ''
            })(t)
          )
        )
      }
      function lt(t) {
        if (!Et(t))
          return (function (t) {
            var e = []
            if (null != t) for (var r in Object(t)) e.push(r)
            return e
          })(t)
        var e = vt(t),
          r = []
        for (var n in t)
          ('constructor' != n || (!e && P.call(t, n))) && r.push(n)
        return r
      }
      function ct(t, e, r, n, o) {
        t !== e &&
          it(
            e,
            function (i, a) {
              if ((o || (o = new Z()), Et(i)))
                !(function (t, e, r, n, o, i, a) {
                  var u = gt(t, r),
                    l = gt(e, r),
                    c = a.get(l)
                  if (c) return void tt(t, r, c)
                  var d = i ? i(u, l, r + '', t, e, a) : void 0,
                    f = void 0 === d
                  if (f) {
                    var p = St(l),
                      h = !p && kt(l),
                      m = !p && !h && Pt(l)
                    ;(d = l),
                      p || h || m
                        ? St(u)
                          ? (d = u)
                          : At((v = u)) && wt(v)
                          ? (d = (function (t, e) {
                              var r = -1,
                                n = t.length
                              e || (e = Array(n))
                              for (; ++r < n; ) e[r] = t[r]
                              return e
                            })(u))
                          : h
                          ? ((f = !1),
                            (d = (function (t, e) {
                              if (e) return t.slice()
                              var r = t.length,
                                n = B ? B(r) : new t.constructor(r)
                              return t.copy(n), n
                            })(l, !0)))
                          : m
                          ? ((f = !1),
                            (d = (function (t, e) {
                              var r = e
                                ? (function (t) {
                                    var e = new t.constructor(t.byteLength)
                                    return new D(e).set(new D(t)), e
                                  })(t.buffer)
                                : t.buffer
                              return new t.constructor(
                                r,
                                t.byteOffset,
                                t.length
                              )
                            })(l, !0)))
                          : (d = [])
                        : (function (t) {
                            if (!At(t) || at(t) != s) return !1
                            var e = z(t)
                            if (null === e) return !0
                            var r = P.call(e, 'constructor') && e.constructor
                            return (
                              'function' == typeof r &&
                              r instanceof r &&
                              A.call(r) == M
                            )
                          })(l) || xt(l)
                        ? ((d = u),
                          xt(u)
                            ? (d = (function (t) {
                                return (function (t, e, r, n) {
                                  var o = !r
                                  r || (r = {})
                                  var i = -1,
                                    a = e.length
                                  for (; ++i < a; ) {
                                    var s = e[i],
                                      u = n ? n(r[s], t[s], s, r, t) : void 0
                                    void 0 === u && (u = t[s]),
                                      o ? nt(r, s, u) : et(r, s, u)
                                  }
                                  return r
                                })(t, Rt(t))
                              })(u))
                            : (Et(u) && !Ct(u)) ||
                              (d = (function (t) {
                                return 'function' != typeof t.constructor ||
                                  vt(t)
                                  ? {}
                                  : G(z(t))
                              })(l)))
                        : (f = !1)
                  }
                  var v
                  f && (a.set(l, d), o(d, l, n, i, a), a.delete(l))
                  tt(t, r, d)
                })(t, e, a, r, ct, n, o)
              else {
                var u = n ? n(gt(t, a), i, a + '', t, e, o) : void 0
                void 0 === u && (u = i), tt(t, a, u)
              }
            },
            Rt
          )
      }
      function dt(t, e) {
        return yt(
          (function (t, e, r) {
            return (
              (e = N(void 0 === e ? t.length - 1 : e, 0)),
              function () {
                for (
                  var n = arguments,
                    o = -1,
                    i = N(n.length - e, 0),
                    a = Array(i);
                  ++o < i;

                )
                  a[o] = n[e + o]
                o = -1
                for (var s = Array(e + 1); ++o < e; ) s[o] = n[o]
                return (s[e] = r(a)), x(t, this, s)
              }
            )
          })(t, e, Ot),
          t + ''
        )
      }
      var ft = q
        ? function (t, e) {
            return q(t, 'toString', {
              configurable: !0,
              enumerable: !1,
              value:
                ((r = e),
                function () {
                  return r
                }),
              writable: !0,
            })
            var r
          }
        : Ot
      function pt(t, e) {
        var r = t.__data__
        return (function (t) {
          var e = typeof t
          return 'string' == e ||
            'number' == e ||
            'symbol' == e ||
            'boolean' == e
            ? '__proto__' !== t
            : null === t
        })(e)
          ? r['string' == typeof e ? 'string' : 'hash']
          : r.map
      }
      function ht(t, e) {
        var r = (function (t, e) {
          return null == t ? void 0 : t[e]
        })(t, e)
        return ut(r) ? r : void 0
      }
      function mt(t, e) {
        var r = typeof t
        return (
          !!(e = null == e ? o : e) &&
          ('number' == r || ('symbol' != r && l.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        )
      }
      function vt(t) {
        var e = t && t.constructor
        return t === (('function' == typeof e && e.prototype) || _)
      }
      function gt(t, e) {
        if (
          ('constructor' !== e || 'function' !== typeof t[e]) &&
          '__proto__' != e
        )
          return t[e]
      }
      var yt = (function (t) {
        var e = 0,
          r = 0
        return function () {
          var n = W(),
            o = 16 - (n - r)
          if (((r = n), o > 0)) {
            if (++e >= 800) return arguments[0]
          } else e = 0
          return t.apply(void 0, arguments)
        }
      })(ft)
      function bt(t, e) {
        return t === e || (t !== t && e !== e)
      }
      var xt = st(
          (function () {
            return arguments
          })()
        )
          ? st
          : function (t) {
              return At(t) && P.call(t, 'callee') && !$.call(t, 'callee')
            },
        St = Array.isArray
      function wt(t) {
        return null != t && _t(t.length) && !Ct(t)
      }
      var kt =
        U ||
        function () {
          return !1
        }
      function Ct(t) {
        if (!Et(t)) return !1
        var e = at(t)
        return (
          e == a ||
          '[object GeneratorFunction]' == e ||
          '[object AsyncFunction]' == e ||
          '[object Proxy]' == e
        )
      }
      function _t(t) {
        return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= o
      }
      function Et(t) {
        var e = typeof t
        return null != t && ('object' == e || 'function' == e)
      }
      function At(t) {
        return null != t && 'object' == typeof t
      }
      var Pt = b
        ? (function (t) {
            return function (e) {
              return t(e)
            }
          })(b)
        : function (t) {
            return At(t) && _t(t.length) && !!c[at(t)]
          }
      function Rt(t) {
        return wt(t) ? J(t, !0) : lt(t)
      }
      var Tt,
        Mt =
          ((Tt = function (t, e, r, n) {
            ct(t, e, r, n)
          }),
          dt(function (t, e) {
            var r = -1,
              n = e.length,
              o = n > 1 ? e[n - 1] : void 0,
              i = n > 2 ? e[2] : void 0
            for (
              o = Tt.length > 3 && 'function' == typeof o ? (n--, o) : void 0,
                i &&
                  (function (t, e, r) {
                    if (!Et(r)) return !1
                    var n = typeof e
                    return (
                      !!('number' == n
                        ? wt(r) && mt(e, r.length)
                        : 'string' == n && (e in r)) && bt(r[e], t)
                    )
                  })(e[0], e[1], i) &&
                  ((o = n < 3 ? void 0 : o), (n = 1)),
                t = Object(t);
              ++r < n;

            ) {
              var a = e[r]
              a && Tt(t, a, r, o)
            }
            return t
          }))
      function Ot(t) {
        return t
      }
      t.exports = Mt
    },
    9203: function (t, e, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return r(7903)
        },
      ])
    },
    7903: function (t, e, r) {
      'use strict'
      r.r(e),
        r.d(e, {
          default: function () {
            return nh
          },
        })
      var n = r(2641),
        o = r(7458),
        i = r(2983),
        a = r(8918),
        s =
          '\n  :root {\n    --chakra-vh: 100vh;\n  }\n\n  @supports (height: -webkit-fill-available) {\n    :root {\n      --chakra-vh: -webkit-fill-available;\n    }\n  }\n\n  @supports (height: -moz-fill-available) {\n    :root {\n      --chakra-vh: -moz-fill-available;\n    }\n  }\n\n  @supports (height: 100lvh) {\n    :root {\n      --chakra-vh: 100lvh;\n    }\n  }\n',
        u = () => i.createElement(a.xB, { styles: s }),
        l = () =>
          i.createElement(a.xB, {
            styles: `\n      html {\n        line-height: 1.5;\n        -webkit-text-size-adjust: 100%;\n        font-family: system-ui, sans-serif;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;\n        -moz-osx-font-smoothing: grayscale;\n        touch-action: manipulation;\n      }\n\n      body {\n        position: relative;\n        min-height: 100%;\n        font-feature-settings: 'kern';\n      }\n\n      *,\n      *::before,\n      *::after {\n        border-width: 0;\n        border-style: solid;\n        box-sizing: border-box;\n      }\n\n      main {\n        display: block;\n      }\n\n      hr {\n        border-top-width: 1px;\n        box-sizing: content-box;\n        height: 0;\n        overflow: visible;\n      }\n\n      pre,\n      code,\n      kbd,\n      samp {\n        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;\n        font-size: 1em;\n      }\n\n      a {\n        background-color: transparent;\n        color: inherit;\n        text-decoration: inherit;\n      }\n\n      abbr[title] {\n        border-bottom: none;\n        text-decoration: underline;\n        -webkit-text-decoration: underline dotted;\n        text-decoration: underline dotted;\n      }\n\n      b,\n      strong {\n        font-weight: bold;\n      }\n\n      small {\n        font-size: 80%;\n      }\n\n      sub,\n      sup {\n        font-size: 75%;\n        line-height: 0;\n        position: relative;\n        vertical-align: baseline;\n      }\n\n      sub {\n        bottom: -0.25em;\n      }\n\n      sup {\n        top: -0.5em;\n      }\n\n      img {\n        border-style: none;\n      }\n\n      button,\n      input,\n      optgroup,\n      select,\n      textarea {\n        font-family: inherit;\n        font-size: 100%;\n        line-height: 1.15;\n        margin: 0;\n      }\n\n      button,\n      input {\n        overflow: visible;\n      }\n\n      button,\n      select {\n        text-transform: none;\n      }\n\n      button::-moz-focus-inner,\n      [type="button"]::-moz-focus-inner,\n      [type="reset"]::-moz-focus-inner,\n      [type="submit"]::-moz-focus-inner {\n        border-style: none;\n        padding: 0;\n      }\n\n      fieldset {\n        padding: 0.35em 0.75em 0.625em;\n      }\n\n      legend {\n        box-sizing: border-box;\n        color: inherit;\n        display: table;\n        max-width: 100%;\n        padding: 0;\n        white-space: normal;\n      }\n\n      progress {\n        vertical-align: baseline;\n      }\n\n      textarea {\n        overflow: auto;\n      }\n\n      [type="checkbox"],\n      [type="radio"] {\n        box-sizing: border-box;\n        padding: 0;\n      }\n\n      [type="number"]::-webkit-inner-spin-button,\n      [type="number"]::-webkit-outer-spin-button {\n        -webkit-appearance: none !important;\n      }\n\n      input[type="number"] {\n        -moz-appearance: textfield;\n      }\n\n      [type="search"] {\n        -webkit-appearance: textfield;\n        outline-offset: -2px;\n      }\n\n      [type="search"]::-webkit-search-decoration {\n        -webkit-appearance: none !important;\n      }\n\n      ::-webkit-file-upload-button {\n        -webkit-appearance: button;\n        font: inherit;\n      }\n\n      details {\n        display: block;\n      }\n\n      summary {\n        display: list-item;\n      }\n\n      template {\n        display: none;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      body,\n      blockquote,\n      dl,\n      dd,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6,\n      hr,\n      figure,\n      p,\n      pre {\n        margin: 0;\n      }\n\n      button {\n        background: transparent;\n        padding: 0;\n      }\n\n      fieldset {\n        margin: 0;\n        padding: 0;\n      }\n\n      ol,\n      ul {\n        margin: 0;\n        padding: 0;\n      }\n\n      textarea {\n        resize: vertical;\n      }\n\n      button,\n      [role="button"] {\n        cursor: pointer;\n      }\n\n      button::-moz-focus-inner {\n        border: 0 !important;\n      }\n\n      table {\n        border-collapse: collapse;\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-size: inherit;\n        font-weight: inherit;\n      }\n\n      button,\n      input,\n      optgroup,\n      select,\n      textarea {\n        padding: 0;\n        line-height: inherit;\n        color: inherit;\n      }\n\n      img,\n      svg,\n      video,\n      canvas,\n      audio,\n      iframe,\n      embed,\n      object {\n        display: block;\n      }\n\n      img,\n      video {\n        max-width: 100%;\n        height: auto;\n      }\n\n      [data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {\n        outline: none;\n        box-shadow: none;\n      }\n\n      select::-ms-expand {\n        display: none;\n      }\n\n      ${s}\n    `,
          }),
        c = r(4837),
        d = r(7201),
        f = r(3730),
        [p, h] = (0, c.k)({ strict: !1, name: 'PortalManagerContext' })
      function m(t) {
        const { children: e, zIndex: r } = t
        return i.createElement(p, { value: { zIndex: r } }, e)
      }
      m.displayName = 'PortalManager'
      var [v, g] = (0, c.k)({ strict: !1, name: 'PortalContext' }),
        y = 'chakra-portal',
        b = (t) =>
          i.createElement(
            'div',
            {
              className: 'chakra-portal-zIndex',
              style: {
                position: 'absolute',
                zIndex: t.zIndex,
                top: 0,
                left: 0,
                right: 0,
              },
            },
            t.children
          ),
        x = (t) => {
          const { appendToParentPortal: e, children: r } = t,
            [n, o] = (0, i.useState)(null),
            a = (0, i.useRef)(null),
            [, s] = (0, i.useState)({})
          ;(0, i.useEffect)(() => s({}), [])
          const u = g(),
            l = h()
          ;(0, d.G)(() => {
            if (!n) return
            const t = n.ownerDocument,
              r = e ? u ?? t.body : t.body
            if (!r) return
            ;(a.current = t.createElement('div')),
              (a.current.className = y),
              r.appendChild(a.current),
              s({})
            const o = a.current
            return () => {
              r.contains(o) && r.removeChild(o)
            }
          }, [n])
          const c = (null == l ? void 0 : l.zIndex)
            ? i.createElement(b, { zIndex: null == l ? void 0 : l.zIndex }, r)
            : r
          return a.current
            ? (0, f.createPortal)(
                i.createElement(v, { value: a.current }, c),
                a.current
              )
            : i.createElement('span', {
                ref: (t) => {
                  t && o(t)
                },
              })
        },
        S = (t) => {
          const { children: e, containerRef: r, appendToParentPortal: n } = t,
            o = r.current,
            a = o ?? ('undefined' !== typeof window ? document.body : void 0),
            s = (0, i.useMemo)(() => {
              const t =
                null == o ? void 0 : o.ownerDocument.createElement('div')
              return t && (t.className = y), t
            }, [o]),
            [, u] = (0, i.useState)({})
          return (
            (0, d.G)(() => u({}), []),
            (0, d.G)(() => {
              if (s && a)
                return (
                  a.appendChild(s),
                  () => {
                    a.removeChild(s)
                  }
                )
            }, [s, a]),
            a && s
              ? (0, f.createPortal)(
                  i.createElement(v, { value: n ? s : null }, e),
                  s
                )
              : null
          )
        }
      function w(t) {
        const { containerRef: e, ...r } = t
        return e
          ? i.createElement(S, { containerRef: e, ...r })
          : i.createElement(x, { ...r })
      }
      ;(w.defaultProps = { appendToParentPortal: !0 }),
        (w.className = y),
        (w.selector = '.chakra-portal'),
        (w.displayName = 'Portal')
      var k = r(5197),
        C = r(7373),
        _ = {
          body: { classList: { add() {}, remove() {} } },
          addEventListener() {},
          removeEventListener() {},
          activeElement: { blur() {}, nodeName: '' },
          querySelector: () => null,
          querySelectorAll: () => [],
          getElementById: () => null,
          createEvent: () => ({ initEvent() {} }),
          createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => [],
          }),
        },
        E = () => {},
        A = {
          document: _,
          navigator: { userAgent: '' },
          CustomEvent: function () {
            return this
          },
          addEventListener: E,
          removeEventListener: E,
          getComputedStyle: () => ({ getPropertyValue: () => '' }),
          matchMedia: () => ({
            matches: !1,
            addListener: E,
            removeListener: E,
          }),
          requestAnimationFrame: (t) =>
            'undefined' === typeof setTimeout ? (t(), null) : setTimeout(t, 0),
          cancelAnimationFrame(t) {
            'undefined' !== typeof setTimeout && clearTimeout(t)
          },
          setTimeout: () => 0,
          clearTimeout: E,
          setInterval: () => 0,
          clearInterval: E,
        },
        P =
          'undefined' !== typeof window
            ? { window: window, document: document }
            : { window: A, document: _ },
        R = (0, i.createContext)(P)
      function T(t) {
        const { children: e, environment: r } = t,
          [n, o] = (0, i.useState)(null),
          [a, s] = (0, i.useState)(!1)
        ;(0, i.useEffect)(() => s(!0), [])
        const u = (0, i.useMemo)(() => {
          if (r) return r
          const t = null == n ? void 0 : n.ownerDocument,
            e = null == n ? void 0 : n.ownerDocument.defaultView
          return t ? { document: t, window: e } : P
        }, [n, r])
        return i.createElement(
          R.Provider,
          { value: u },
          e,
          !r &&
            a &&
            i.createElement('span', {
              id: '__chakra_env',
              hidden: !0,
              ref: (t) => {
                ;(0, i.startTransition)(() => {
                  t && o(t)
                })
              },
            })
        )
      }
      ;(R.displayName = 'EnvironmentContext'),
        (T.displayName = 'EnvironmentProvider')
      var M = (t) => {
        const {
            children: e,
            colorModeManager: r,
            portalZIndex: n,
            resetCSS: o = !0,
            theme: a = {},
            environment: s,
            cssVarsRoot: c,
          } = t,
          d = i.createElement(T, { environment: s }, e)
        return i.createElement(
          k.f6,
          { theme: a, cssVarsRoot: c },
          i.createElement(
            C.SG,
            { colorModeManager: r, options: a.config },
            o ? i.createElement(l, null) : i.createElement(u, null),
            i.createElement(k.ZL, null),
            n ? i.createElement(m, { zIndex: n }, d) : d
          )
        )
      }
      function O(t, e = {}) {
        let r = !1
        function n(e) {
          const r = `chakra-${(['container', 'root'].includes(e ?? '')
            ? [t]
            : [t, e]
          )
            .filter(Boolean)
            .join('__')}`
          return { className: r, selector: `.${r}`, toString: () => e }
        }
        return {
          parts: function (...o) {
            !(function () {
              if (r)
                throw new Error(
                  '[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?'
                )
              r = !0
            })()
            for (const t of o) e[t] = n(t)
            return O(t, e)
          },
          toPart: n,
          extend: function (...r) {
            for (const t of r) t in e || (e[t] = n(t))
            return O(t, e)
          },
          selectors: function () {
            return Object.fromEntries(
              Object.entries(e).map(([t, e]) => [t, e.selector])
            )
          },
          classnames: function () {
            return Object.fromEntries(
              Object.entries(e).map(([t, e]) => [t, e.className])
            )
          },
          get keys() {
            return Object.keys(e)
          },
          __type: {},
        }
      }
      var j = O('accordion')
          .parts('root', 'container', 'button', 'panel')
          .extend('icon'),
        F = O('alert')
          .parts('title', 'description', 'container')
          .extend('icon', 'spinner'),
        D = O('avatar')
          .parts('label', 'badge', 'container')
          .extend('excessLabel', 'group'),
        B = O('breadcrumb')
          .parts('link', 'item', 'container')
          .extend('separator'),
        z =
          (O('button').parts(),
          O('checkbox').parts('control', 'icon', 'container').extend('label')),
        I =
          (O('progress').parts('track', 'filledTrack').extend('label'),
          O('drawer')
            .parts('overlay', 'dialogContainer', 'dialog')
            .extend('header', 'closeButton', 'body', 'footer')),
        $ = O('editable').parts('preview', 'input', 'textarea'),
        L = O('form').parts('container', 'requiredIndicator', 'helperText'),
        V = O('formError').parts('text', 'icon'),
        q = O('input').parts('addon', 'field', 'element'),
        U = O('list').parts('container', 'item', 'icon'),
        N = O('menu')
          .parts('button', 'list', 'item')
          .extend('groupTitle', 'command', 'divider'),
        W = O('modal')
          .parts('overlay', 'dialogContainer', 'dialog')
          .extend('header', 'closeButton', 'body', 'footer'),
        H = O('numberinput').parts('root', 'field', 'stepperGroup', 'stepper'),
        Q =
          (O('pininput').parts('field'),
          O('popover')
            .parts('content', 'header', 'body', 'footer')
            .extend('popper', 'arrow', 'closeButton')),
        G = O('progress').parts('label', 'filledTrack', 'track'),
        K = O('radio').parts('container', 'control', 'label'),
        Y = O('select').parts('field', 'icon'),
        X = O('slider').parts(
          'container',
          'track',
          'thumb',
          'filledTrack',
          'mark'
        ),
        Z = O('stat').parts('container', 'label', 'helpText', 'number', 'icon'),
        J = O('switch').parts('container', 'track', 'thumb'),
        tt = O('table').parts(
          'table',
          'thead',
          'tbody',
          'tr',
          'th',
          'td',
          'tfoot',
          'caption'
        ),
        et = O('tabs').parts(
          'root',
          'tab',
          'tablist',
          'tabpanel',
          'tabpanels',
          'indicator'
        ),
        rt = O('tag').parts('container', 'label', 'closeButton'),
        nt = r(65)
      function ot(t, e) {
        ;(function (t) {
          return (
            'string' === typeof t &&
            -1 !== t.indexOf('.') &&
            1 === parseFloat(t)
          )
        })(t) && (t = '100%')
        var r = (function (t) {
          return 'string' === typeof t && -1 !== t.indexOf('%')
        })(t)
        return (
          (t = 360 === e ? t : Math.min(e, Math.max(0, parseFloat(t)))),
          r && (t = parseInt(String(t * e), 10) / 100),
          Math.abs(t - e) < 1e-6
            ? 1
            : (t =
                360 === e
                  ? (t < 0 ? (t % e) + e : t % e) / parseFloat(String(e))
                  : (t % e) / parseFloat(String(e)))
        )
      }
      function it(t) {
        return Math.min(1, Math.max(0, t))
      }
      function at(t) {
        return (t = parseFloat(t)), (isNaN(t) || t < 0 || t > 1) && (t = 1), t
      }
      function st(t) {
        return t <= 1 ? ''.concat(100 * Number(t), '%') : t
      }
      function ut(t) {
        return 1 === t.length ? '0' + t : String(t)
      }
      function lt(t, e, r) {
        ;(t = ot(t, 255)), (e = ot(e, 255)), (r = ot(r, 255))
        var n = Math.max(t, e, r),
          o = Math.min(t, e, r),
          i = 0,
          a = 0,
          s = (n + o) / 2
        if (n === o) (a = 0), (i = 0)
        else {
          var u = n - o
          switch (((a = s > 0.5 ? u / (2 - n - o) : u / (n + o)), n)) {
            case t:
              i = (e - r) / u + (e < r ? 6 : 0)
              break
            case e:
              i = (r - t) / u + 2
              break
            case r:
              i = (t - e) / u + 4
          }
          i /= 6
        }
        return { h: i, s: a, l: s }
      }
      function ct(t, e, r) {
        return (
          r < 0 && (r += 1),
          r > 1 && (r -= 1),
          r < 1 / 6
            ? t + 6 * r * (e - t)
            : r < 0.5
            ? e
            : r < 2 / 3
            ? t + (e - t) * (2 / 3 - r) * 6
            : t
        )
      }
      function dt(t, e, r) {
        ;(t = ot(t, 255)), (e = ot(e, 255)), (r = ot(r, 255))
        var n = Math.max(t, e, r),
          o = Math.min(t, e, r),
          i = 0,
          a = n,
          s = n - o,
          u = 0 === n ? 0 : s / n
        if (n === o) i = 0
        else {
          switch (n) {
            case t:
              i = (e - r) / s + (e < r ? 6 : 0)
              break
            case e:
              i = (r - t) / s + 2
              break
            case r:
              i = (t - e) / s + 4
          }
          i /= 6
        }
        return { h: i, s: u, v: a }
      }
      function ft(t, e, r, n) {
        var o = [
          ut(Math.round(t).toString(16)),
          ut(Math.round(e).toString(16)),
          ut(Math.round(r).toString(16)),
        ]
        return n &&
          o[0].startsWith(o[0].charAt(1)) &&
          o[1].startsWith(o[1].charAt(1)) &&
          o[2].startsWith(o[2].charAt(1))
          ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
          : o.join('')
      }
      function pt(t) {
        return Math.round(255 * parseFloat(t)).toString(16)
      }
      function ht(t) {
        return mt(t) / 255
      }
      function mt(t) {
        return parseInt(t, 16)
      }
      var vt = {
        aliceblue: '#f0f8ff',
        antiquewhite: '#faebd7',
        aqua: '#00ffff',
        aquamarine: '#7fffd4',
        azure: '#f0ffff',
        beige: '#f5f5dc',
        bisque: '#ffe4c4',
        black: '#000000',
        blanchedalmond: '#ffebcd',
        blue: '#0000ff',
        blueviolet: '#8a2be2',
        brown: '#a52a2a',
        burlywood: '#deb887',
        cadetblue: '#5f9ea0',
        chartreuse: '#7fff00',
        chocolate: '#d2691e',
        coral: '#ff7f50',
        cornflowerblue: '#6495ed',
        cornsilk: '#fff8dc',
        crimson: '#dc143c',
        cyan: '#00ffff',
        darkblue: '#00008b',
        darkcyan: '#008b8b',
        darkgoldenrod: '#b8860b',
        darkgray: '#a9a9a9',
        darkgreen: '#006400',
        darkgrey: '#a9a9a9',
        darkkhaki: '#bdb76b',
        darkmagenta: '#8b008b',
        darkolivegreen: '#556b2f',
        darkorange: '#ff8c00',
        darkorchid: '#9932cc',
        darkred: '#8b0000',
        darksalmon: '#e9967a',
        darkseagreen: '#8fbc8f',
        darkslateblue: '#483d8b',
        darkslategray: '#2f4f4f',
        darkslategrey: '#2f4f4f',
        darkturquoise: '#00ced1',
        darkviolet: '#9400d3',
        deeppink: '#ff1493',
        deepskyblue: '#00bfff',
        dimgray: '#696969',
        dimgrey: '#696969',
        dodgerblue: '#1e90ff',
        firebrick: '#b22222',
        floralwhite: '#fffaf0',
        forestgreen: '#228b22',
        fuchsia: '#ff00ff',
        gainsboro: '#dcdcdc',
        ghostwhite: '#f8f8ff',
        goldenrod: '#daa520',
        gold: '#ffd700',
        gray: '#808080',
        green: '#008000',
        greenyellow: '#adff2f',
        grey: '#808080',
        honeydew: '#f0fff0',
        hotpink: '#ff69b4',
        indianred: '#cd5c5c',
        indigo: '#4b0082',
        ivory: '#fffff0',
        khaki: '#f0e68c',
        lavenderblush: '#fff0f5',
        lavender: '#e6e6fa',
        lawngreen: '#7cfc00',
        lemonchiffon: '#fffacd',
        lightblue: '#add8e6',
        lightcoral: '#f08080',
        lightcyan: '#e0ffff',
        lightgoldenrodyellow: '#fafad2',
        lightgray: '#d3d3d3',
        lightgreen: '#90ee90',
        lightgrey: '#d3d3d3',
        lightpink: '#ffb6c1',
        lightsalmon: '#ffa07a',
        lightseagreen: '#20b2aa',
        lightskyblue: '#87cefa',
        lightslategray: '#778899',
        lightslategrey: '#778899',
        lightsteelblue: '#b0c4de',
        lightyellow: '#ffffe0',
        lime: '#00ff00',
        limegreen: '#32cd32',
        linen: '#faf0e6',
        magenta: '#ff00ff',
        maroon: '#800000',
        mediumaquamarine: '#66cdaa',
        mediumblue: '#0000cd',
        mediumorchid: '#ba55d3',
        mediumpurple: '#9370db',
        mediumseagreen: '#3cb371',
        mediumslateblue: '#7b68ee',
        mediumspringgreen: '#00fa9a',
        mediumturquoise: '#48d1cc',
        mediumvioletred: '#c71585',
        midnightblue: '#191970',
        mintcream: '#f5fffa',
        mistyrose: '#ffe4e1',
        moccasin: '#ffe4b5',
        navajowhite: '#ffdead',
        navy: '#000080',
        oldlace: '#fdf5e6',
        olive: '#808000',
        olivedrab: '#6b8e23',
        orange: '#ffa500',
        orangered: '#ff4500',
        orchid: '#da70d6',
        palegoldenrod: '#eee8aa',
        palegreen: '#98fb98',
        paleturquoise: '#afeeee',
        palevioletred: '#db7093',
        papayawhip: '#ffefd5',
        peachpuff: '#ffdab9',
        peru: '#cd853f',
        pink: '#ffc0cb',
        plum: '#dda0dd',
        powderblue: '#b0e0e6',
        purple: '#800080',
        rebeccapurple: '#663399',
        red: '#ff0000',
        rosybrown: '#bc8f8f',
        royalblue: '#4169e1',
        saddlebrown: '#8b4513',
        salmon: '#fa8072',
        sandybrown: '#f4a460',
        seagreen: '#2e8b57',
        seashell: '#fff5ee',
        sienna: '#a0522d',
        silver: '#c0c0c0',
        skyblue: '#87ceeb',
        slateblue: '#6a5acd',
        slategray: '#708090',
        slategrey: '#708090',
        snow: '#fffafa',
        springgreen: '#00ff7f',
        steelblue: '#4682b4',
        tan: '#d2b48c',
        teal: '#008080',
        thistle: '#d8bfd8',
        tomato: '#ff6347',
        turquoise: '#40e0d0',
        violet: '#ee82ee',
        wheat: '#f5deb3',
        white: '#ffffff',
        whitesmoke: '#f5f5f5',
        yellow: '#ffff00',
        yellowgreen: '#9acd32',
      }
      function gt(t) {
        var e = { r: 0, g: 0, b: 0 },
          r = 1,
          n = null,
          o = null,
          i = null,
          a = !1,
          s = !1
        return (
          'string' === typeof t &&
            (t = (function (t) {
              if (0 === (t = t.trim().toLowerCase()).length) return !1
              var e = !1
              if (vt[t]) (t = vt[t]), (e = !0)
              else if ('transparent' === t)
                return { r: 0, g: 0, b: 0, a: 0, format: 'name' }
              var r = St.rgb.exec(t)
              if (r) return { r: r[1], g: r[2], b: r[3] }
              if ((r = St.rgba.exec(t)))
                return { r: r[1], g: r[2], b: r[3], a: r[4] }
              if ((r = St.hsl.exec(t))) return { h: r[1], s: r[2], l: r[3] }
              if ((r = St.hsla.exec(t)))
                return { h: r[1], s: r[2], l: r[3], a: r[4] }
              if ((r = St.hsv.exec(t))) return { h: r[1], s: r[2], v: r[3] }
              if ((r = St.hsva.exec(t)))
                return { h: r[1], s: r[2], v: r[3], a: r[4] }
              if ((r = St.hex8.exec(t)))
                return {
                  r: mt(r[1]),
                  g: mt(r[2]),
                  b: mt(r[3]),
                  a: ht(r[4]),
                  format: e ? 'name' : 'hex8',
                }
              if ((r = St.hex6.exec(t)))
                return {
                  r: mt(r[1]),
                  g: mt(r[2]),
                  b: mt(r[3]),
                  format: e ? 'name' : 'hex',
                }
              if ((r = St.hex4.exec(t)))
                return {
                  r: mt(r[1] + r[1]),
                  g: mt(r[2] + r[2]),
                  b: mt(r[3] + r[3]),
                  a: ht(r[4] + r[4]),
                  format: e ? 'name' : 'hex8',
                }
              if ((r = St.hex3.exec(t)))
                return {
                  r: mt(r[1] + r[1]),
                  g: mt(r[2] + r[2]),
                  b: mt(r[3] + r[3]),
                  format: e ? 'name' : 'hex',
                }
              return !1
            })(t)),
          'object' === typeof t &&
            (wt(t.r) && wt(t.g) && wt(t.b)
              ? ((e = (function (t, e, r) {
                  return {
                    r: 255 * ot(t, 255),
                    g: 255 * ot(e, 255),
                    b: 255 * ot(r, 255),
                  }
                })(t.r, t.g, t.b)),
                (a = !0),
                (s = '%' === String(t.r).substr(-1) ? 'prgb' : 'rgb'))
              : wt(t.h) && wt(t.s) && wt(t.v)
              ? ((n = st(t.s)),
                (o = st(t.v)),
                (e = (function (t, e, r) {
                  ;(t = 6 * ot(t, 360)), (e = ot(e, 100)), (r = ot(r, 100))
                  var n = Math.floor(t),
                    o = t - n,
                    i = r * (1 - e),
                    a = r * (1 - o * e),
                    s = r * (1 - (1 - o) * e),
                    u = n % 6
                  return {
                    r: 255 * [r, a, i, i, s, r][u],
                    g: 255 * [s, r, r, a, i, i][u],
                    b: 255 * [i, i, s, r, r, a][u],
                  }
                })(t.h, n, o)),
                (a = !0),
                (s = 'hsv'))
              : wt(t.h) &&
                wt(t.s) &&
                wt(t.l) &&
                ((n = st(t.s)),
                (i = st(t.l)),
                (e = (function (t, e, r) {
                  var n, o, i
                  if (
                    ((t = ot(t, 360)),
                    (e = ot(e, 100)),
                    (r = ot(r, 100)),
                    0 === e)
                  )
                    (o = r), (i = r), (n = r)
                  else {
                    var a = r < 0.5 ? r * (1 + e) : r + e - r * e,
                      s = 2 * r - a
                    ;(n = ct(s, a, t + 1 / 3)),
                      (o = ct(s, a, t)),
                      (i = ct(s, a, t - 1 / 3))
                  }
                  return { r: 255 * n, g: 255 * o, b: 255 * i }
                })(t.h, n, i)),
                (a = !0),
                (s = 'hsl')),
            Object.prototype.hasOwnProperty.call(t, 'a') && (r = t.a)),
          (r = at(r)),
          {
            ok: a,
            format: t.format || s,
            r: Math.min(255, Math.max(e.r, 0)),
            g: Math.min(255, Math.max(e.g, 0)),
            b: Math.min(255, Math.max(e.b, 0)),
            a: r,
          }
        )
      }
      var yt = '(?:'
          .concat('[-\\+]?\\d*\\.\\d+%?', ')|(?:')
          .concat('[-\\+]?\\d+%?', ')'),
        bt = '[\\s|\\(]+('
          .concat(yt, ')[,|\\s]+(')
          .concat(yt, ')[,|\\s]+(')
          .concat(yt, ')\\s*\\)?'),
        xt = '[\\s|\\(]+('
          .concat(yt, ')[,|\\s]+(')
          .concat(yt, ')[,|\\s]+(')
          .concat(yt, ')[,|\\s]+(')
          .concat(yt, ')\\s*\\)?'),
        St = {
          CSS_UNIT: new RegExp(yt),
          rgb: new RegExp('rgb' + bt),
          rgba: new RegExp('rgba' + xt),
          hsl: new RegExp('hsl' + bt),
          hsla: new RegExp('hsla' + xt),
          hsv: new RegExp('hsv' + bt),
          hsva: new RegExp('hsva' + xt),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        }
      function wt(t) {
        return Boolean(St.CSS_UNIT.exec(String(t)))
      }
      var kt = (function () {
        function t(e, r) {
          var n
          if (
            (void 0 === e && (e = ''), void 0 === r && (r = {}), e instanceof t)
          )
            return e
          'number' === typeof e &&
            (e = (function (t) {
              return { r: t >> 16, g: (65280 & t) >> 8, b: 255 & t }
            })(e)),
            (this.originalInput = e)
          var o = gt(e)
          ;(this.originalInput = e),
            (this.r = o.r),
            (this.g = o.g),
            (this.b = o.b),
            (this.a = o.a),
            (this.roundA = Math.round(100 * this.a) / 100),
            (this.format =
              null !== (n = r.format) && void 0 !== n ? n : o.format),
            (this.gradientType = r.gradientType),
            this.r < 1 && (this.r = Math.round(this.r)),
            this.g < 1 && (this.g = Math.round(this.g)),
            this.b < 1 && (this.b = Math.round(this.b)),
            (this.isValid = o.ok)
        }
        return (
          (t.prototype.isDark = function () {
            return this.getBrightness() < 128
          }),
          (t.prototype.isLight = function () {
            return !this.isDark()
          }),
          (t.prototype.getBrightness = function () {
            var t = this.toRgb()
            return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3
          }),
          (t.prototype.getLuminance = function () {
            var t = this.toRgb(),
              e = t.r / 255,
              r = t.g / 255,
              n = t.b / 255
            return (
              0.2126 *
                (e <= 0.03928
                  ? e / 12.92
                  : Math.pow((e + 0.055) / 1.055, 2.4)) +
              0.7152 *
                (r <= 0.03928
                  ? r / 12.92
                  : Math.pow((r + 0.055) / 1.055, 2.4)) +
              0.0722 *
                (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4))
            )
          }),
          (t.prototype.getAlpha = function () {
            return this.a
          }),
          (t.prototype.setAlpha = function (t) {
            return (
              (this.a = at(t)),
              (this.roundA = Math.round(100 * this.a) / 100),
              this
            )
          }),
          (t.prototype.toHsv = function () {
            var t = dt(this.r, this.g, this.b)
            return { h: 360 * t.h, s: t.s, v: t.v, a: this.a }
          }),
          (t.prototype.toHsvString = function () {
            var t = dt(this.r, this.g, this.b),
              e = Math.round(360 * t.h),
              r = Math.round(100 * t.s),
              n = Math.round(100 * t.v)
            return 1 === this.a
              ? 'hsv('.concat(e, ', ').concat(r, '%, ').concat(n, '%)')
              : 'hsva('
                  .concat(e, ', ')
                  .concat(r, '%, ')
                  .concat(n, '%, ')
                  .concat(this.roundA, ')')
          }),
          (t.prototype.toHsl = function () {
            var t = lt(this.r, this.g, this.b)
            return { h: 360 * t.h, s: t.s, l: t.l, a: this.a }
          }),
          (t.prototype.toHslString = function () {
            var t = lt(this.r, this.g, this.b),
              e = Math.round(360 * t.h),
              r = Math.round(100 * t.s),
              n = Math.round(100 * t.l)
            return 1 === this.a
              ? 'hsl('.concat(e, ', ').concat(r, '%, ').concat(n, '%)')
              : 'hsla('
                  .concat(e, ', ')
                  .concat(r, '%, ')
                  .concat(n, '%, ')
                  .concat(this.roundA, ')')
          }),
          (t.prototype.toHex = function (t) {
            return void 0 === t && (t = !1), ft(this.r, this.g, this.b, t)
          }),
          (t.prototype.toHexString = function (t) {
            return void 0 === t && (t = !1), '#' + this.toHex(t)
          }),
          (t.prototype.toHex8 = function (t) {
            return (
              void 0 === t && (t = !1),
              (function (t, e, r, n, o) {
                var i = [
                  ut(Math.round(t).toString(16)),
                  ut(Math.round(e).toString(16)),
                  ut(Math.round(r).toString(16)),
                  ut(pt(n)),
                ]
                return o &&
                  i[0].startsWith(i[0].charAt(1)) &&
                  i[1].startsWith(i[1].charAt(1)) &&
                  i[2].startsWith(i[2].charAt(1)) &&
                  i[3].startsWith(i[3].charAt(1))
                  ? i[0].charAt(0) +
                      i[1].charAt(0) +
                      i[2].charAt(0) +
                      i[3].charAt(0)
                  : i.join('')
              })(this.r, this.g, this.b, this.a, t)
            )
          }),
          (t.prototype.toHex8String = function (t) {
            return void 0 === t && (t = !1), '#' + this.toHex8(t)
          }),
          (t.prototype.toRgb = function () {
            return {
              r: Math.round(this.r),
              g: Math.round(this.g),
              b: Math.round(this.b),
              a: this.a,
            }
          }),
          (t.prototype.toRgbString = function () {
            var t = Math.round(this.r),
              e = Math.round(this.g),
              r = Math.round(this.b)
            return 1 === this.a
              ? 'rgb('.concat(t, ', ').concat(e, ', ').concat(r, ')')
              : 'rgba('
                  .concat(t, ', ')
                  .concat(e, ', ')
                  .concat(r, ', ')
                  .concat(this.roundA, ')')
          }),
          (t.prototype.toPercentageRgb = function () {
            var t = function (t) {
              return ''.concat(Math.round(100 * ot(t, 255)), '%')
            }
            return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a }
          }),
          (t.prototype.toPercentageRgbString = function () {
            var t = function (t) {
              return Math.round(100 * ot(t, 255))
            }
            return 1 === this.a
              ? 'rgb('
                  .concat(t(this.r), '%, ')
                  .concat(t(this.g), '%, ')
                  .concat(t(this.b), '%)')
              : 'rgba('
                  .concat(t(this.r), '%, ')
                  .concat(t(this.g), '%, ')
                  .concat(t(this.b), '%, ')
                  .concat(this.roundA, ')')
          }),
          (t.prototype.toName = function () {
            if (0 === this.a) return 'transparent'
            if (this.a < 1) return !1
            for (
              var t = '#' + ft(this.r, this.g, this.b, !1),
                e = 0,
                r = Object.entries(vt);
              e < r.length;
              e++
            ) {
              var n = r[e],
                o = n[0]
              if (t === n[1]) return o
            }
            return !1
          }),
          (t.prototype.toString = function (t) {
            var e = Boolean(t)
            t = null !== t && void 0 !== t ? t : this.format
            var r = !1,
              n = this.a < 1 && this.a >= 0
            return e || !n || (!t.startsWith('hex') && 'name' !== t)
              ? ('rgb' === t && (r = this.toRgbString()),
                'prgb' === t && (r = this.toPercentageRgbString()),
                ('hex' !== t && 'hex6' !== t) || (r = this.toHexString()),
                'hex3' === t && (r = this.toHexString(!0)),
                'hex4' === t && (r = this.toHex8String(!0)),
                'hex8' === t && (r = this.toHex8String()),
                'name' === t && (r = this.toName()),
                'hsl' === t && (r = this.toHslString()),
                'hsv' === t && (r = this.toHsvString()),
                r || this.toHexString())
              : 'name' === t && 0 === this.a
              ? this.toName()
              : this.toRgbString()
          }),
          (t.prototype.toNumber = function () {
            return (
              (Math.round(this.r) << 16) +
              (Math.round(this.g) << 8) +
              Math.round(this.b)
            )
          }),
          (t.prototype.clone = function () {
            return new t(this.toString())
          }),
          (t.prototype.lighten = function (e) {
            void 0 === e && (e = 10)
            var r = this.toHsl()
            return (r.l += e / 100), (r.l = it(r.l)), new t(r)
          }),
          (t.prototype.brighten = function (e) {
            void 0 === e && (e = 10)
            var r = this.toRgb()
            return (
              (r.r = Math.max(
                0,
                Math.min(255, r.r - Math.round((-e / 100) * 255))
              )),
              (r.g = Math.max(
                0,
                Math.min(255, r.g - Math.round((-e / 100) * 255))
              )),
              (r.b = Math.max(
                0,
                Math.min(255, r.b - Math.round((-e / 100) * 255))
              )),
              new t(r)
            )
          }),
          (t.prototype.darken = function (e) {
            void 0 === e && (e = 10)
            var r = this.toHsl()
            return (r.l -= e / 100), (r.l = it(r.l)), new t(r)
          }),
          (t.prototype.tint = function (t) {
            return void 0 === t && (t = 10), this.mix('white', t)
          }),
          (t.prototype.shade = function (t) {
            return void 0 === t && (t = 10), this.mix('black', t)
          }),
          (t.prototype.desaturate = function (e) {
            void 0 === e && (e = 10)
            var r = this.toHsl()
            return (r.s -= e / 100), (r.s = it(r.s)), new t(r)
          }),
          (t.prototype.saturate = function (e) {
            void 0 === e && (e = 10)
            var r = this.toHsl()
            return (r.s += e / 100), (r.s = it(r.s)), new t(r)
          }),
          (t.prototype.greyscale = function () {
            return this.desaturate(100)
          }),
          (t.prototype.spin = function (e) {
            var r = this.toHsl(),
              n = (r.h + e) % 360
            return (r.h = n < 0 ? 360 + n : n), new t(r)
          }),
          (t.prototype.mix = function (e, r) {
            void 0 === r && (r = 50)
            var n = this.toRgb(),
              o = new t(e).toRgb(),
              i = r / 100
            return new t({
              r: (o.r - n.r) * i + n.r,
              g: (o.g - n.g) * i + n.g,
              b: (o.b - n.b) * i + n.b,
              a: (o.a - n.a) * i + n.a,
            })
          }),
          (t.prototype.analogous = function (e, r) {
            void 0 === e && (e = 6), void 0 === r && (r = 30)
            var n = this.toHsl(),
              o = 360 / r,
              i = [this]
            for (n.h = (n.h - ((o * e) >> 1) + 720) % 360; --e; )
              (n.h = (n.h + o) % 360), i.push(new t(n))
            return i
          }),
          (t.prototype.complement = function () {
            var e = this.toHsl()
            return (e.h = (e.h + 180) % 360), new t(e)
          }),
          (t.prototype.monochromatic = function (e) {
            void 0 === e && (e = 6)
            for (
              var r = this.toHsv(),
                n = r.h,
                o = r.s,
                i = r.v,
                a = [],
                s = 1 / e;
              e--;

            )
              a.push(new t({ h: n, s: o, v: i })), (i = (i + s) % 1)
            return a
          }),
          (t.prototype.splitcomplement = function () {
            var e = this.toHsl(),
              r = e.h
            return [
              this,
              new t({ h: (r + 72) % 360, s: e.s, l: e.l }),
              new t({ h: (r + 216) % 360, s: e.s, l: e.l }),
            ]
          }),
          (t.prototype.onBackground = function (e) {
            var r = this.toRgb(),
              n = new t(e).toRgb()
            return new t({
              r: n.r + (r.r - n.r) * r.a,
              g: n.g + (r.g - n.g) * r.a,
              b: n.b + (r.b - n.b) * r.a,
            })
          }),
          (t.prototype.triad = function () {
            return this.polyad(3)
          }),
          (t.prototype.tetrad = function () {
            return this.polyad(4)
          }),
          (t.prototype.polyad = function (e) {
            for (
              var r = this.toHsl(), n = r.h, o = [this], i = 360 / e, a = 1;
              a < e;
              a++
            )
              o.push(new t({ h: (n + a * i) % 360, s: r.s, l: r.l }))
            return o
          }),
          (t.prototype.equals = function (e) {
            return this.toRgbString() === new t(e).toRgbString()
          }),
          t
        )
      })()
      function Ct(t) {
        if (
          (void 0 === t && (t = {}), void 0 !== t.count && null !== t.count)
        ) {
          var e = t.count,
            r = []
          for (t.count = void 0; e > r.length; )
            (t.count = null), t.seed && (t.seed += 1), r.push(Ct(t))
          return (t.count = e), r
        }
        var n = (function (t, e) {
            var r = Et(
              (function (t) {
                var e = parseInt(t, 10)
                if (!Number.isNaN(e) && e < 360 && e > 0) return [e, e]
                if ('string' === typeof t) {
                  var r = Pt.find(function (e) {
                    return e.name === t
                  })
                  if (r) {
                    var n = At(r)
                    if (n.hueRange) return n.hueRange
                  }
                  var o = new kt(t)
                  if (o.isValid) {
                    var i = o.toHsv().h
                    return [i, i]
                  }
                }
                return [0, 360]
              })(t),
              e
            )
            r < 0 && (r = 360 + r)
            return r
          })(t.hue, t.seed),
          o = (function (t, e) {
            if ('monochrome' === e.hue) return 0
            if ('random' === e.luminosity) return Et([0, 100], e.seed)
            var r = _t(t).saturationRange,
              n = r[0],
              o = r[1]
            switch (e.luminosity) {
              case 'bright':
                n = 55
                break
              case 'dark':
                n = o - 10
                break
              case 'light':
                o = 55
            }
            return Et([n, o], e.seed)
          })(n, t),
          i = (function (t, e, r) {
            var n = (function (t, e) {
                for (var r = _t(t).lowerBounds, n = 0; n < r.length - 1; n++) {
                  var o = r[n][0],
                    i = r[n][1],
                    a = r[n + 1][0],
                    s = r[n + 1][1]
                  if (e >= o && e <= a) {
                    var u = (s - i) / (a - o)
                    return u * e + (i - u * o)
                  }
                }
                return 0
              })(t, e),
              o = 100
            switch (r.luminosity) {
              case 'dark':
                o = n + 20
                break
              case 'light':
                n = (o + n) / 2
                break
              case 'random':
                ;(n = 0), (o = 100)
            }
            return Et([n, o], r.seed)
          })(n, o, t),
          a = { h: n, s: o, v: i }
        return void 0 !== t.alpha && (a.a = t.alpha), new kt(a)
      }
      function _t(t) {
        t >= 334 && t <= 360 && (t -= 360)
        for (var e = 0, r = Pt; e < r.length; e++) {
          var n = At(r[e])
          if (n.hueRange && t >= n.hueRange[0] && t <= n.hueRange[1]) return n
        }
        throw Error('Color not found')
      }
      function Et(t, e) {
        if (void 0 === e)
          return Math.floor(t[0] + Math.random() * (t[1] + 1 - t[0]))
        var r = t[1] || 1,
          n = t[0] || 0,
          o = (e = (9301 * e + 49297) % 233280) / 233280
        return Math.floor(n + o * (r - n))
      }
      function At(t) {
        var e = t.lowerBounds[0][0],
          r = t.lowerBounds[t.lowerBounds.length - 1][0],
          n = t.lowerBounds[t.lowerBounds.length - 1][1],
          o = t.lowerBounds[0][1]
        return {
          name: t.name,
          hueRange: t.hueRange,
          lowerBounds: t.lowerBounds,
          saturationRange: [e, r],
          brightnessRange: [n, o],
        }
      }
      var Pt = [
        {
          name: 'monochrome',
          hueRange: null,
          lowerBounds: [
            [0, 0],
            [100, 0],
          ],
        },
        {
          name: 'red',
          hueRange: [-26, 18],
          lowerBounds: [
            [20, 100],
            [30, 92],
            [40, 89],
            [50, 85],
            [60, 78],
            [70, 70],
            [80, 60],
            [90, 55],
            [100, 50],
          ],
        },
        {
          name: 'orange',
          hueRange: [19, 46],
          lowerBounds: [
            [20, 100],
            [30, 93],
            [40, 88],
            [50, 86],
            [60, 85],
            [70, 70],
            [100, 70],
          ],
        },
        {
          name: 'yellow',
          hueRange: [47, 62],
          lowerBounds: [
            [25, 100],
            [40, 94],
            [50, 89],
            [60, 86],
            [70, 84],
            [80, 82],
            [90, 80],
            [100, 75],
          ],
        },
        {
          name: 'green',
          hueRange: [63, 178],
          lowerBounds: [
            [30, 100],
            [40, 90],
            [50, 85],
            [60, 81],
            [70, 74],
            [80, 64],
            [90, 50],
            [100, 40],
          ],
        },
        {
          name: 'blue',
          hueRange: [179, 257],
          lowerBounds: [
            [20, 100],
            [30, 86],
            [40, 80],
            [50, 74],
            [60, 60],
            [70, 52],
            [80, 44],
            [90, 39],
            [100, 35],
          ],
        },
        {
          name: 'purple',
          hueRange: [258, 282],
          lowerBounds: [
            [20, 100],
            [30, 87],
            [40, 79],
            [50, 70],
            [60, 65],
            [70, 59],
            [80, 52],
            [90, 45],
            [100, 42],
          ],
        },
        {
          name: 'pink',
          hueRange: [283, 334],
          lowerBounds: [
            [20, 100],
            [30, 90],
            [40, 86],
            [60, 84],
            [80, 80],
            [90, 75],
            [100, 73],
          ],
        },
      ]
      var Rt = (t, e, r) => {
          const n = (function (t, e, r, n, o) {
              for (e = e.split ? e.split('.') : e, n = 0; n < e.length; n++)
                t = t ? t[e[n]] : o
              return t === o ? r : t
            })(t, `colors.${e}`, e),
            { isValid: o } = new kt(n)
          return o ? n : r
        },
        Tt = (t) => (e) => {
          const r = Rt(e, t)
          return new kt(r).isDark() ? 'dark' : 'light'
        },
        Mt = (t, e) => (r) => {
          const n = Rt(r, t)
          return new kt(n).setAlpha(e).toRgbString()
        }
      function Ot(t = '1rem', e = 'rgba(255, 255, 255, 0.15)') {
        return {
          backgroundImage: `linear-gradient(\n    45deg,\n    ${e} 25%,\n    transparent 25%,\n    transparent 50%,\n    ${e} 50%,\n    ${e} 75%,\n    transparent 75%,\n    transparent\n  )`,
          backgroundSize: `${t} ${t}`,
        }
      }
      function jt(t) {
        const e = Ct().toHexString()
        return t && ((r = t), 0 !== Object.keys(r).length)
          ? t.string && t.colors
            ? (function (t, e) {
                let r = 0
                if (0 === t.length) return e[0]
                for (let n = 0; n < t.length; n += 1)
                  (r = t.charCodeAt(n) + ((r << 5) - r)), (r &= r)
                return (r = ((r % e.length) + e.length) % e.length), e[r]
              })(t.string, t.colors)
            : t.string && !t.colors
            ? (function (t) {
                let e = 0
                if (0 === t.length) return e.toString()
                for (let n = 0; n < t.length; n += 1)
                  (e = t.charCodeAt(n) + ((e << 5) - e)), (e &= e)
                let r = '#'
                for (let n = 0; n < 3; n += 1) {
                  r += `00${((e >> (8 * n)) & 255).toString(16)}`.substr(-2)
                }
                return r
              })(t.string)
            : t.colors && !t.string
            ? (n = t.colors)[Math.floor(Math.random() * n.length)]
            : e
          : e
        var r, n
      }
      function Ft(t, e) {
        return (r) => ('dark' === r.colorMode ? e : t)
      }
      function Dt(t) {
        const { orientation: e, vertical: r, horizontal: n } = t
        return e ? ('vertical' === e ? r : n) : {}
      }
      function Bt(t) {
        return (function (t) {
          const e = typeof t
          return (
            null != t &&
            ('object' === e || 'function' === e) &&
            !Array.isArray(t)
          )
        })(t) && t.reference
          ? t.reference
          : String(t)
      }
      var zt = (t, ...e) => e.map(Bt).join(` ${t} `).replace(/calc/g, ''),
        It = (...t) => `calc(${zt('+', ...t)})`,
        $t = (...t) => `calc(${zt('-', ...t)})`,
        Lt = (...t) => `calc(${zt('*', ...t)})`,
        Vt = (...t) => `calc(${zt('/', ...t)})`,
        qt = (t) => {
          const e = Bt(t)
          return null == e || Number.isNaN(parseFloat(e))
            ? Lt(e, -1)
            : String(e).startsWith('-')
            ? String(e).slice(1)
            : `-${e}`
        },
        Ut = Object.assign(
          (t) => ({
            add: (...e) => Ut(It(t, ...e)),
            subtract: (...e) => Ut($t(t, ...e)),
            multiply: (...e) => Ut(Lt(t, ...e)),
            divide: (...e) => Ut(Vt(t, ...e)),
            negate: () => Ut(qt(t)),
            toString: () => t.toString(),
          }),
          { add: It, subtract: $t, multiply: Lt, divide: Vt, negate: qt }
        )
      function Nt(t) {
        const e = (function (t, e = '-') {
          return t.replace(/\s+/g, e)
        })(t.toString())
        return e.includes('\\.')
          ? t
          : (function (t) {
              return !Number.isInteger(parseFloat(t.toString()))
            })(t)
          ? e.replace('.', '\\.')
          : t
      }
      function Wt(t, e) {
        return `var(${Nt(t)}${e ? `, ${e}` : ''})`
      }
      function Ht(t, e = '') {
        return `--${(function (t, e = '') {
          return [e, Nt(t)].filter(Boolean).join('-')
        })(t, e)}`
      }
      function Qt(t, e) {
        const r = Ht(t, null == e ? void 0 : e.prefix)
        return {
          variable: r,
          reference: Wt(r, Gt(null == e ? void 0 : e.fallback)),
        }
      }
      function Gt(t) {
        return 'string' === typeof t ? t : null == t ? void 0 : t.reference
      }
      var { definePartsStyle: Kt, defineMultiStyleConfig: Yt } = (0, nt.D)(
          j.keys
        ),
        Xt = Yt({
          baseStyle: Kt({
            container: (0, nt.k0)({
              borderTopWidth: '1px',
              borderColor: 'inherit',
              _last: { borderBottomWidth: '1px' },
            }),
            button: (0, nt.k0)({
              transitionProperty: 'common',
              transitionDuration: 'normal',
              fontSize: 'md',
              _focusVisible: { boxShadow: 'outline' },
              _hover: { bg: 'blackAlpha.50' },
              _disabled: { opacity: 0.4, cursor: 'not-allowed' },
              px: '4',
              py: '2',
            }),
            panel: (0, nt.k0)({ pt: '2', px: '4', pb: '5' }),
            icon: (0, nt.k0)({ fontSize: '1.25em' }),
          }),
        }),
        { definePartsStyle: Zt, defineMultiStyleConfig: Jt } = (0, nt.D)(
          F.keys
        ),
        te = (0, nt.gJ)('alert-fg'),
        ee = (0, nt.gJ)('alert-bg'),
        re = Zt({
          container: { bg: ee.reference, px: '4', py: '3' },
          title: { fontWeight: 'bold', lineHeight: '6', marginEnd: '2' },
          description: { lineHeight: '6' },
          icon: {
            color: te.reference,
            flexShrink: 0,
            marginEnd: '3',
            w: '5',
            h: '6',
          },
          spinner: {
            color: te.reference,
            flexShrink: 0,
            marginEnd: '3',
            w: '5',
            h: '5',
          },
        })
      function ne(t) {
        const { theme: e, colorScheme: r } = t
        return Ft(Rt(e, `${r}.100`, r), Mt(`${r}.200`, 0.16)(e))(t)
      }
      var oe = Zt((t) => {
          const { colorScheme: e } = t,
            r = Ft(`${e}.500`, `${e}.200`)(t)
          return {
            container: { [ee.variable]: ne(t), [te.variable]: `colors.${r}` },
          }
        }),
        ie = Zt((t) => {
          const { colorScheme: e } = t,
            r = Ft(`${e}.500`, `${e}.200`)(t)
          return {
            container: {
              [ee.variable]: ne(t),
              [te.variable]: `colors.${r}`,
              paddingStart: '3',
              borderStartWidth: '4px',
              borderStartColor: te.reference,
            },
          }
        }),
        ae = Zt((t) => {
          const { colorScheme: e } = t,
            r = Ft(`${e}.500`, `${e}.200`)(t)
          return {
            container: {
              [ee.variable]: ne(t),
              [te.variable]: `colors.${r}`,
              pt: '2',
              borderTopWidth: '4px',
              borderTopColor: te.reference,
            },
          }
        }),
        se = Zt((t) => {
          const { colorScheme: e } = t,
            r = Ft(`${e}.500`, `${e}.200`)(t),
            n = Ft('white', 'gray.900')(t)
          return {
            container: {
              [ee.variable]: `colors.${r}`,
              [te.variable]: `colors.${n}`,
              color: te.reference,
            },
          }
        }),
        ue = Jt({
          baseStyle: re,
          variants: {
            subtle: oe,
            'left-accent': ie,
            'top-accent': ae,
            solid: se,
          },
          defaultProps: { variant: 'subtle', colorScheme: 'blue' },
        }),
        le = {
          px: '1px',
          0.5: '0.125rem',
          1: '0.25rem',
          1.5: '0.375rem',
          2: '0.5rem',
          2.5: '0.625rem',
          3: '0.75rem',
          3.5: '0.875rem',
          4: '1rem',
          5: '1.25rem',
          6: '1.5rem',
          7: '1.75rem',
          8: '2rem',
          9: '2.25rem',
          10: '2.5rem',
          12: '3rem',
          14: '3.5rem',
          16: '4rem',
          20: '5rem',
          24: '6rem',
          28: '7rem',
          32: '8rem',
          36: '9rem',
          40: '10rem',
          44: '11rem',
          48: '12rem',
          52: '13rem',
          56: '14rem',
          60: '15rem',
          64: '16rem',
          72: '18rem',
          80: '20rem',
          96: '24rem',
        },
        ce = {
          ...le,
          max: 'max-content',
          min: 'min-content',
          full: '100%',
          '3xs': '14rem',
          '2xs': '16rem',
          xs: '20rem',
          sm: '24rem',
          md: '28rem',
          lg: '32rem',
          xl: '36rem',
          '2xl': '42rem',
          '3xl': '48rem',
          '4xl': '56rem',
          '5xl': '64rem',
          '6xl': '72rem',
          '7xl': '80rem',
          '8xl': '90rem',
          prose: '60ch',
          container: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
        }
      function de(t, ...e) {
        return 'function' === typeof t ? t(...e) : t
      }
      var { definePartsStyle: fe, defineMultiStyleConfig: pe } = (0, nt.D)(
          D.keys
        ),
        he = (0, nt.k0)((t) => ({
          borderRadius: 'full',
          border: '0.2em solid',
          borderColor: Ft('white', 'gray.800')(t),
        })),
        me = (0, nt.k0)((t) => ({ bg: Ft('gray.200', 'whiteAlpha.400')(t) })),
        ve = Qt('avatar-background'),
        ge = (0, nt.k0)((t) => {
          const { name: e, theme: r } = t,
            n = e ? jt({ string: e }) : 'colors.gray.400',
            o = (
              (t) => (e) =>
                'dark' === Tt(t)(e)
            )(n)(r)
          let i = 'white'
          o || (i = 'gray.800')
          const a = Ft('white', 'gray.800')(t)
          return {
            bg: ve.reference,
            '&:not([data-loaded])': { [ve.variable]: n },
            color: i,
            borderColor: a,
            verticalAlign: 'top',
          }
        })
      function ye(t) {
        const e = '100%' !== t ? ce[t] : void 0
        return fe({
          container: { width: t, height: t, fontSize: `calc(${e ?? t} / 2.5)` },
          excessLabel: { width: t, height: t },
          label: {
            fontSize: `calc(${e ?? t} / 2.5)`,
            lineHeight: '100%' !== t ? e ?? t : void 0,
          },
        })
      }
      var be = pe({
          baseStyle: fe((t) => ({
            badge: de(he, t),
            excessLabel: de(me, t),
            container: de(ge, t),
          })),
          sizes: {
            '2xs': ye(4),
            xs: ye(6),
            sm: ye(8),
            md: ye(12),
            lg: ye(16),
            xl: ye(24),
            '2xl': ye(32),
            full: ye('100%'),
          },
          defaultProps: { size: 'md' },
        }),
        xe = (0, nt.k0)({
          px: 1,
          textTransform: 'uppercase',
          fontSize: 'xs',
          borderRadius: 'sm',
          fontWeight: 'bold',
        }),
        Se = (0, nt.k0)((t) => {
          const { colorScheme: e, theme: r } = t
          return {
            bg: Ft(`${e}.500`, Mt(`${e}.500`, 0.6)(r))(t),
            color: Ft('white', 'whiteAlpha.800')(t),
          }
        }),
        we = (0, nt.k0)((t) => {
          const { colorScheme: e, theme: r } = t
          return {
            bg: Ft(`${e}.100`, Mt(`${e}.200`, 0.16)(r))(t),
            color: Ft(`${e}.800`, `${e}.200`)(t),
          }
        }),
        ke = (0, nt.k0)((t) => {
          const { colorScheme: e, theme: r } = t,
            n = Mt(`${e}.200`, 0.8)(r),
            o = Ft(Rt(r, `${e}.500`), n)(t)
          return { color: o, boxShadow: `inset 0 0 0px 1px ${o}` }
        }),
        Ce = { solid: Se, subtle: we, outline: ke },
        _e = (0, nt.fj)({
          baseStyle: xe,
          variants: Ce,
          defaultProps: { variant: 'subtle', colorScheme: 'gray' },
        }),
        { defineMultiStyleConfig: Ee, definePartsStyle: Ae } = (0, nt.D)(
          B.keys
        ),
        Pe = Ee({
          baseStyle: Ae({
            link: (0, nt.k0)({
              transitionProperty: 'common',
              transitionDuration: 'fast',
              transitionTimingFunction: 'ease-out',
              cursor: 'pointer',
              textDecoration: 'none',
              outline: 'none',
              color: 'inherit',
              _hover: { textDecoration: 'underline' },
              _focusVisible: { boxShadow: 'outline' },
            }),
          }),
        }),
        Re = (0, nt.k0)({
          lineHeight: '1.2',
          borderRadius: 'md',
          fontWeight: 'semibold',
          transitionProperty: 'common',
          transitionDuration: 'normal',
          _focusVisible: { boxShadow: 'outline' },
          _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
          _hover: { _disabled: { bg: 'initial' } },
        }),
        Te = (0, nt.k0)((t) => {
          const { colorScheme: e, theme: r } = t
          if ('gray' === e)
            return {
              color: Ft('inherit', 'whiteAlpha.900')(t),
              _hover: { bg: Ft('gray.100', 'whiteAlpha.200')(t) },
              _active: { bg: Ft('gray.200', 'whiteAlpha.300')(t) },
            }
          const n = Mt(`${e}.200`, 0.12)(r),
            o = Mt(`${e}.200`, 0.24)(r)
          return {
            color: Ft(`${e}.600`, `${e}.200`)(t),
            bg: 'transparent',
            _hover: { bg: Ft(`${e}.50`, n)(t) },
            _active: { bg: Ft(`${e}.100`, o)(t) },
          }
        }),
        Me = (0, nt.k0)((t) => {
          const { colorScheme: e } = t,
            r = Ft('gray.200', 'whiteAlpha.300')(t)
          return {
            border: '1px solid',
            borderColor: 'gray' === e ? r : 'currentColor',
            '.chakra-button__group[data-attached] > &:not(:last-of-type)': {
              marginEnd: '-1px',
            },
            ...de(Te, t),
          }
        }),
        Oe = {
          yellow: {
            bg: 'yellow.400',
            color: 'black',
            hoverBg: 'yellow.500',
            activeBg: 'yellow.600',
          },
          cyan: {
            bg: 'cyan.400',
            color: 'black',
            hoverBg: 'cyan.500',
            activeBg: 'cyan.600',
          },
        },
        je = (0, nt.k0)((t) => {
          const { colorScheme: e } = t
          if ('gray' === e) {
            const e = Ft('gray.100', 'whiteAlpha.200')(t)
            return {
              bg: e,
              _hover: {
                bg: Ft('gray.200', 'whiteAlpha.300')(t),
                _disabled: { bg: e },
              },
              _active: { bg: Ft('gray.300', 'whiteAlpha.400')(t) },
            }
          }
          const {
              bg: r = `${e}.500`,
              color: n = 'white',
              hoverBg: o = `${e}.600`,
              activeBg: i = `${e}.700`,
            } = Oe[e] ?? {},
            a = Ft(r, `${e}.200`)(t)
          return {
            bg: a,
            color: Ft(n, 'gray.800')(t),
            _hover: { bg: Ft(o, `${e}.300`)(t), _disabled: { bg: a } },
            _active: { bg: Ft(i, `${e}.400`)(t) },
          }
        }),
        Fe = (0, nt.k0)((t) => {
          const { colorScheme: e } = t
          return {
            padding: 0,
            height: 'auto',
            lineHeight: 'normal',
            verticalAlign: 'baseline',
            color: Ft(`${e}.500`, `${e}.200`)(t),
            _hover: {
              textDecoration: 'underline',
              _disabled: { textDecoration: 'none' },
            },
            _active: { color: Ft(`${e}.700`, `${e}.500`)(t) },
          }
        }),
        De = (0, nt.k0)({
          bg: 'none',
          color: 'inherit',
          display: 'inline',
          lineHeight: 'inherit',
          m: '0',
          p: '0',
        }),
        Be = { ghost: Te, outline: Me, solid: je, link: Fe, unstyled: De },
        ze = {
          lg: (0, nt.k0)({ h: '12', minW: '12', fontSize: 'lg', px: '6' }),
          md: (0, nt.k0)({ h: '10', minW: '10', fontSize: 'md', px: '4' }),
          sm: (0, nt.k0)({ h: '8', minW: '8', fontSize: 'sm', px: '3' }),
          xs: (0, nt.k0)({ h: '6', minW: '6', fontSize: 'xs', px: '2' }),
        },
        Ie = (0, nt.fj)({
          baseStyle: Re,
          variants: Be,
          sizes: ze,
          defaultProps: { variant: 'solid', size: 'md', colorScheme: 'gray' },
        }),
        { definePartsStyle: $e, defineMultiStyleConfig: Le } = (0, nt.D)(
          z.keys
        ),
        Ve = (0, nt.gJ)('checkbox-size'),
        qe = (0, nt.k0)((t) => {
          const { colorScheme: e } = t
          return {
            w: Ve.reference,
            h: Ve.reference,
            transitionProperty: 'box-shadow',
            transitionDuration: 'normal',
            border: '2px solid',
            borderRadius: 'sm',
            borderColor: 'inherit',
            color: 'white',
            _checked: {
              bg: Ft(`${e}.500`, `${e}.200`)(t),
              borderColor: Ft(`${e}.500`, `${e}.200`)(t),
              color: Ft('white', 'gray.900')(t),
              _hover: {
                bg: Ft(`${e}.600`, `${e}.300`)(t),
                borderColor: Ft(`${e}.600`, `${e}.300`)(t),
              },
              _disabled: {
                borderColor: Ft('gray.200', 'transparent')(t),
                bg: Ft('gray.200', 'whiteAlpha.300')(t),
                color: Ft('gray.500', 'whiteAlpha.500')(t),
              },
            },
            _indeterminate: {
              bg: Ft(`${e}.500`, `${e}.200`)(t),
              borderColor: Ft(`${e}.500`, `${e}.200`)(t),
              color: Ft('white', 'gray.900')(t),
            },
            _disabled: {
              bg: Ft('gray.100', 'whiteAlpha.100')(t),
              borderColor: Ft('gray.100', 'transparent')(t),
            },
            _focusVisible: { boxShadow: 'outline' },
            _invalid: { borderColor: Ft('red.500', 'red.300')(t) },
          }
        }),
        Ue = (0, nt.k0)({ _disabled: { cursor: 'not-allowed' } }),
        Ne = (0, nt.k0)({ userSelect: 'none', _disabled: { opacity: 0.4 } }),
        We = (0, nt.k0)({
          transitionProperty: 'transform',
          transitionDuration: 'normal',
        }),
        He = Le({
          baseStyle: $e((t) => ({
            icon: We,
            container: Ue,
            control: de(qe, t),
            label: Ne,
          })),
          sizes: {
            sm: $e({
              control: { [Ve.variable]: 'sizes.3' },
              label: { fontSize: 'sm' },
              icon: { fontSize: '3xs' },
            }),
            md: $e({
              control: { [Ve.variable]: 'sizes.4' },
              label: { fontSize: 'md' },
              icon: { fontSize: '2xs' },
            }),
            lg: $e({
              control: { [Ve.variable]: 'sizes.5' },
              label: { fontSize: 'lg' },
              icon: { fontSize: '2xs' },
            }),
          },
          defaultProps: { size: 'md', colorScheme: 'blue' },
        }),
        Qe = Qt('close-button-size'),
        Ge = (0, nt.k0)((t) => {
          const e = Ft('blackAlpha.100', 'whiteAlpha.100')(t),
            r = Ft('blackAlpha.200', 'whiteAlpha.200')(t)
          return {
            w: [Qe.reference],
            h: [Qe.reference],
            borderRadius: 'md',
            transitionProperty: 'common',
            transitionDuration: 'normal',
            _disabled: {
              opacity: 0.4,
              cursor: 'not-allowed',
              boxShadow: 'none',
            },
            _hover: { bg: e },
            _active: { bg: r },
            _focusVisible: { boxShadow: 'outline' },
          }
        }),
        Ke = {
          lg: (0, nt.k0)({ [Qe.variable]: 'sizes.10', fontSize: 'md' }),
          md: (0, nt.k0)({ [Qe.variable]: 'sizes.8', fontSize: 'xs' }),
          sm: (0, nt.k0)({ [Qe.variable]: 'sizes.6', fontSize: '2xs' }),
        },
        Ye = (0, nt.fj)({
          baseStyle: Ge,
          sizes: Ke,
          defaultProps: { size: 'md' },
        }),
        { variants: Xe, defaultProps: Ze } = _e,
        Je = (0, nt.k0)({
          fontFamily: 'mono',
          fontSize: 'sm',
          px: '0.2em',
          borderRadius: 'sm',
        }),
        tr = (0, nt.fj)({ baseStyle: Je, variants: Xe, defaultProps: Ze }),
        er = (0, nt.k0)({ w: '100%', mx: 'auto', maxW: 'prose', px: '4' }),
        rr = (0, nt.fj)({ baseStyle: er }),
        nr = (0, nt.k0)({ opacity: 0.6, borderColor: 'inherit' }),
        or = {
          solid: (0, nt.k0)({ borderStyle: 'solid' }),
          dashed: (0, nt.k0)({ borderStyle: 'dashed' }),
        },
        ir = (0, nt.fj)({
          baseStyle: nr,
          variants: or,
          defaultProps: { variant: 'solid' },
        }),
        { definePartsStyle: ar, defineMultiStyleConfig: sr } = (0, nt.D)(I.keys)
      function ur(t) {
        return ar(
          'full' === t
            ? { dialog: { maxW: '100vw', h: '100vh' } }
            : { dialog: { maxW: t } }
        )
      }
      var lr = (0, nt.k0)({ bg: 'blackAlpha.600', zIndex: 'overlay' }),
        cr = (0, nt.k0)({
          display: 'flex',
          zIndex: 'modal',
          justifyContent: 'center',
        }),
        dr = (0, nt.k0)((t) => {
          const { isFullHeight: e } = t
          return {
            ...(e && { height: '100vh' }),
            zIndex: 'modal',
            maxH: '100vh',
            bg: Ft('white', 'gray.700')(t),
            color: 'inherit',
            boxShadow: Ft('lg', 'dark-lg')(t),
          }
        }),
        fr = (0, nt.k0)({
          px: '6',
          py: '4',
          fontSize: 'xl',
          fontWeight: 'semibold',
        }),
        pr = (0, nt.k0)({ position: 'absolute', top: '2', insetEnd: '3' }),
        hr = (0, nt.k0)({ px: '6', py: '2', flex: '1', overflow: 'auto' }),
        mr = (0, nt.k0)({ px: '6', py: '4' }),
        vr = sr({
          baseStyle: ar((t) => ({
            overlay: lr,
            dialogContainer: cr,
            dialog: de(dr, t),
            header: fr,
            closeButton: pr,
            body: hr,
            footer: mr,
          })),
          sizes: {
            xs: ur('xs'),
            sm: ur('md'),
            md: ur('lg'),
            lg: ur('2xl'),
            xl: ur('4xl'),
            full: ur('full'),
          },
          defaultProps: { size: 'xs' },
        }),
        { definePartsStyle: gr, defineMultiStyleConfig: yr } = (0, nt.D)(
          $.keys
        ),
        br = yr({
          baseStyle: gr({
            preview: (0, nt.k0)({
              borderRadius: 'md',
              py: '1',
              transitionProperty: 'common',
              transitionDuration: 'normal',
            }),
            input: (0, nt.k0)({
              borderRadius: 'md',
              py: '1',
              transitionProperty: 'common',
              transitionDuration: 'normal',
              width: 'full',
              _focusVisible: { boxShadow: 'outline' },
              _placeholder: { opacity: 0.6 },
            }),
            textarea: (0, nt.k0)({
              borderRadius: 'md',
              py: '1',
              transitionProperty: 'common',
              transitionDuration: 'normal',
              width: 'full',
              _focusVisible: { boxShadow: 'outline' },
              _placeholder: { opacity: 0.6 },
            }),
          }),
        }),
        { definePartsStyle: xr, defineMultiStyleConfig: Sr } = (0, nt.D)(
          L.keys
        ),
        wr = (0, nt.k0)((t) => ({
          marginStart: '1',
          color: Ft('red.500', 'red.300')(t),
        })),
        kr = (0, nt.k0)((t) => ({
          mt: '2',
          color: Ft('gray.600', 'whiteAlpha.600')(t),
          lineHeight: 'normal',
          fontSize: 'sm',
        })),
        Cr = Sr({
          baseStyle: xr((t) => ({
            container: { width: '100%', position: 'relative' },
            requiredIndicator: de(wr, t),
            helperText: de(kr, t),
          })),
        }),
        { definePartsStyle: _r, defineMultiStyleConfig: Er } = (0, nt.D)(
          V.keys
        ),
        Ar = (0, nt.k0)((t) => ({
          color: Ft('red.500', 'red.300')(t),
          mt: '2',
          fontSize: 'sm',
          lineHeight: 'normal',
        })),
        Pr = (0, nt.k0)((t) => ({
          marginEnd: '0.5em',
          color: Ft('red.500', 'red.300')(t),
        })),
        Rr = Er({
          baseStyle: _r((t) => ({ text: de(Ar, t), icon: de(Pr, t) })),
        }),
        Tr = (0, nt.k0)({
          fontSize: 'md',
          marginEnd: '3',
          mb: '2',
          fontWeight: 'medium',
          transitionProperty: 'common',
          transitionDuration: 'normal',
          opacity: 1,
          _disabled: { opacity: 0.4 },
        }),
        Mr = (0, nt.fj)({ baseStyle: Tr }),
        Or = (0, nt.k0)({ fontFamily: 'heading', fontWeight: 'bold' }),
        jr = {
          '4xl': (0, nt.k0)({ fontSize: ['6xl', null, '7xl'], lineHeight: 1 }),
          '3xl': (0, nt.k0)({ fontSize: ['5xl', null, '6xl'], lineHeight: 1 }),
          '2xl': (0, nt.k0)({
            fontSize: ['4xl', null, '5xl'],
            lineHeight: [1.2, null, 1],
          }),
          xl: (0, nt.k0)({
            fontSize: ['3xl', null, '4xl'],
            lineHeight: [1.33, null, 1.2],
          }),
          lg: (0, nt.k0)({
            fontSize: ['2xl', null, '3xl'],
            lineHeight: [1.33, null, 1.2],
          }),
          md: (0, nt.k0)({ fontSize: 'xl', lineHeight: 1.2 }),
          sm: (0, nt.k0)({ fontSize: 'md', lineHeight: 1.2 }),
          xs: (0, nt.k0)({ fontSize: 'sm', lineHeight: 1.2 }),
        },
        Fr = (0, nt.fj)({
          baseStyle: Or,
          sizes: jr,
          defaultProps: { size: 'xl' },
        }),
        { definePartsStyle: Dr, defineMultiStyleConfig: Br } = (0, nt.D)(
          q.keys
        ),
        zr = Dr({
          field: {
            width: '100%',
            minWidth: 0,
            outline: 0,
            position: 'relative',
            appearance: 'none',
            transitionProperty: 'common',
            transitionDuration: 'normal',
            _disabled: { opacity: 0.4, cursor: 'not-allowed' },
          },
        }),
        Ir = {
          lg: (0, nt.k0)({
            fontSize: 'lg',
            px: '4',
            h: '12',
            borderRadius: 'md',
          }),
          md: (0, nt.k0)({
            fontSize: 'md',
            px: '4',
            h: '10',
            borderRadius: 'md',
          }),
          sm: (0, nt.k0)({
            fontSize: 'sm',
            px: '3',
            h: '8',
            borderRadius: 'sm',
          }),
          xs: (0, nt.k0)({
            fontSize: 'xs',
            px: '2',
            h: '6',
            borderRadius: 'sm',
          }),
        }
      function $r(t) {
        const { focusBorderColor: e, errorBorderColor: r } = t
        return {
          focusBorderColor: e || Ft('blue.500', 'blue.300')(t),
          errorBorderColor: r || Ft('red.500', 'red.300')(t),
        }
      }
      var Lr = Br({
          baseStyle: zr,
          sizes: {
            lg: Dr({ field: Ir.lg, addon: Ir.lg }),
            md: Dr({ field: Ir.md, addon: Ir.md }),
            sm: Dr({ field: Ir.sm, addon: Ir.sm }),
            xs: Dr({ field: Ir.xs, addon: Ir.xs }),
          },
          variants: {
            outline: Dr((t) => {
              const { theme: e } = t,
                { focusBorderColor: r, errorBorderColor: n } = $r(t)
              return {
                field: {
                  border: '1px solid',
                  borderColor: 'inherit',
                  bg: 'inherit',
                  _hover: { borderColor: Ft('gray.300', 'whiteAlpha.400')(t) },
                  _readOnly: {
                    boxShadow: 'none !important',
                    userSelect: 'all',
                  },
                  _invalid: {
                    borderColor: Rt(e, n),
                    boxShadow: `0 0 0 1px ${Rt(e, n)}`,
                  },
                  _focusVisible: {
                    zIndex: 1,
                    borderColor: Rt(e, r),
                    boxShadow: `0 0 0 1px ${Rt(e, r)}`,
                  },
                },
                addon: {
                  border: '1px solid',
                  borderColor: Ft('inherit', 'whiteAlpha.50')(t),
                  bg: Ft('gray.100', 'whiteAlpha.300')(t),
                },
              }
            }),
            filled: Dr((t) => {
              const { theme: e } = t,
                { focusBorderColor: r, errorBorderColor: n } = $r(t)
              return {
                field: {
                  border: '2px solid',
                  borderColor: 'transparent',
                  bg: Ft('gray.100', 'whiteAlpha.50')(t),
                  _hover: { bg: Ft('gray.200', 'whiteAlpha.100')(t) },
                  _readOnly: {
                    boxShadow: 'none !important',
                    userSelect: 'all',
                  },
                  _invalid: { borderColor: Rt(e, n) },
                  _focusVisible: { bg: 'transparent', borderColor: Rt(e, r) },
                },
                addon: {
                  border: '2px solid',
                  borderColor: 'transparent',
                  bg: Ft('gray.100', 'whiteAlpha.50')(t),
                },
              }
            }),
            flushed: Dr((t) => {
              const { theme: e } = t,
                { focusBorderColor: r, errorBorderColor: n } = $r(t)
              return {
                field: {
                  borderBottom: '1px solid',
                  borderColor: 'inherit',
                  borderRadius: '0',
                  px: '0',
                  bg: 'transparent',
                  _readOnly: {
                    boxShadow: 'none !important',
                    userSelect: 'all',
                  },
                  _invalid: {
                    borderColor: Rt(e, n),
                    boxShadow: `0px 1px 0px 0px ${Rt(e, n)}`,
                  },
                  _focusVisible: {
                    borderColor: Rt(e, r),
                    boxShadow: `0px 1px 0px 0px ${Rt(e, r)}`,
                  },
                },
                addon: {
                  borderBottom: '2px solid',
                  borderColor: 'inherit',
                  borderRadius: '0',
                  px: '0',
                  bg: 'transparent',
                },
              }
            }),
            unstyled: Dr({
              field: { bg: 'transparent', px: '0', height: 'auto' },
              addon: { bg: 'transparent', px: '0', height: 'auto' },
            }),
          },
          defaultProps: { size: 'md', variant: 'outline' },
        }),
        Vr = (0, nt.k0)((t) => ({
          bg: Ft('gray.100', 'whiteAlpha')(t),
          borderRadius: 'md',
          borderWidth: '1px',
          borderBottomWidth: '3px',
          fontSize: '0.8em',
          fontWeight: 'bold',
          lineHeight: 'normal',
          px: '0.4em',
          whiteSpace: 'nowrap',
        })),
        qr = (0, nt.fj)({ baseStyle: Vr }),
        Ur = (0, nt.k0)({
          transitionProperty: 'common',
          transitionDuration: 'fast',
          transitionTimingFunction: 'ease-out',
          cursor: 'pointer',
          textDecoration: 'none',
          outline: 'none',
          color: 'inherit',
          _hover: { textDecoration: 'underline' },
          _focusVisible: { boxShadow: 'outline' },
        }),
        Nr = (0, nt.fj)({ baseStyle: Ur }),
        { defineMultiStyleConfig: Wr, definePartsStyle: Hr } = (0, nt.D)(
          U.keys
        ),
        Qr = Wr({
          baseStyle: Hr({
            icon: (0, nt.k0)({
              marginEnd: '2',
              display: 'inline',
              verticalAlign: 'text-bottom',
            }),
          }),
        }),
        { defineMultiStyleConfig: Gr, definePartsStyle: Kr } = (0, nt.D)(
          N.keys
        ),
        Yr = (0, nt.k0)((t) => ({
          bg: Ft('#fff', 'gray.700')(t),
          boxShadow: Ft('sm', 'dark-lg')(t),
          color: 'inherit',
          minW: '3xs',
          py: '2',
          zIndex: 1,
          borderRadius: 'md',
          borderWidth: '1px',
        })),
        Xr = (0, nt.k0)((t) => ({
          py: '1.5',
          px: '3',
          transitionProperty: 'background',
          transitionDuration: 'ultra-fast',
          transitionTimingFunction: 'ease-in',
          _focus: { bg: Ft('gray.100', 'whiteAlpha.100')(t) },
          _active: { bg: Ft('gray.200', 'whiteAlpha.200')(t) },
          _expanded: { bg: Ft('gray.100', 'whiteAlpha.100')(t) },
          _disabled: { opacity: 0.4, cursor: 'not-allowed' },
        })),
        Zr = (0, nt.k0)({
          mx: 4,
          my: 2,
          fontWeight: 'semibold',
          fontSize: 'sm',
        }),
        Jr = (0, nt.k0)({ opacity: 0.6 }),
        tn = (0, nt.k0)({
          border: 0,
          borderBottom: '1px solid',
          borderColor: 'inherit',
          my: '2',
          opacity: 0.6,
        }),
        en = (0, nt.k0)({
          transitionProperty: 'common',
          transitionDuration: 'normal',
        }),
        rn = Gr({
          baseStyle: Kr((t) => ({
            button: en,
            list: de(Yr, t),
            item: de(Xr, t),
            groupTitle: Zr,
            command: Jr,
            divider: tn,
          })),
        }),
        { defineMultiStyleConfig: nn, definePartsStyle: on } = (0, nt.D)(
          W.keys
        ),
        an = (0, nt.k0)({ bg: 'blackAlpha.600', zIndex: 'modal' }),
        sn = (0, nt.k0)((t) => {
          const { isCentered: e, scrollBehavior: r } = t
          return {
            display: 'flex',
            zIndex: 'modal',
            justifyContent: 'center',
            alignItems: e ? 'center' : 'flex-start',
            overflow: 'inside' === r ? 'hidden' : 'auto',
          }
        }),
        un = (0, nt.k0)((t) => {
          const { scrollBehavior: e } = t
          return {
            borderRadius: 'md',
            bg: Ft('white', 'gray.700')(t),
            color: 'inherit',
            my: '16',
            zIndex: 'modal',
            maxH: 'inside' === e ? 'calc(100% - 7.5rem)' : void 0,
            boxShadow: Ft('lg', 'dark-lg')(t),
          }
        }),
        ln = (0, nt.k0)({
          px: '6',
          py: '4',
          fontSize: 'xl',
          fontWeight: 'semibold',
        }),
        cn = (0, nt.k0)({ position: 'absolute', top: '2', insetEnd: '3' }),
        dn = (0, nt.k0)((t) => {
          const { scrollBehavior: e } = t
          return {
            px: '6',
            py: '2',
            flex: '1',
            overflow: 'inside' === e ? 'auto' : void 0,
          }
        }),
        fn = (0, nt.k0)({ px: '6', py: '4' })
      function pn(t) {
        return on(
          'full' === t
            ? {
                dialog: {
                  maxW: '100vw',
                  minH: '$100vh',
                  my: '0',
                  borderRadius: '0',
                },
              }
            : { dialog: { maxW: t } }
        )
      }
      var hn = nn({
          baseStyle: on((t) => ({
            overlay: an,
            dialogContainer: de(sn, t),
            dialog: de(un, t),
            header: ln,
            closeButton: cn,
            body: de(dn, t),
            footer: fn,
          })),
          sizes: {
            xs: pn('xs'),
            sm: pn('sm'),
            md: pn('md'),
            lg: pn('lg'),
            xl: pn('xl'),
            '2xl': pn('2xl'),
            '3xl': pn('3xl'),
            '4xl': pn('4xl'),
            '5xl': pn('5xl'),
            '6xl': pn('6xl'),
            full: pn('full'),
          },
          defaultProps: { size: 'md' },
        }),
        mn = {
          letterSpacings: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
          },
          lineHeights: {
            normal: 'normal',
            none: 1,
            shorter: 1.25,
            short: 1.375,
            base: 1.5,
            tall: 1.625,
            taller: '2',
            3: '.75rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
          },
          fontWeights: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900,
          },
          fonts: {
            heading:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
          },
          fontSizes: {
            '3xs': '0.45rem',
            '2xs': '0.625rem',
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '3.75rem',
            '7xl': '4.5rem',
            '8xl': '6rem',
            '9xl': '8rem',
          },
        },
        { defineMultiStyleConfig: vn, definePartsStyle: gn } = (0, nt.D)(
          H.keys
        ),
        yn = Qt('number-input-stepper-width'),
        bn = Qt('number-input-input-padding'),
        xn = Ut(yn).add('0.5rem').toString(),
        Sn = (0, nt.k0)({ [yn.variable]: 'sizes.6', [bn.variable]: xn }),
        wn = (0, nt.k0)((t) => {
          var e
          return (null == (e = de(Lr.baseStyle, t)) ? void 0 : e.field) ?? {}
        }),
        kn = (0, nt.k0)({ width: [yn.reference] }),
        Cn = (0, nt.k0)((t) => ({
          borderStart: '1px solid',
          borderStartColor: Ft('inherit', 'whiteAlpha.300')(t),
          color: Ft('inherit', 'whiteAlpha.800')(t),
          _active: { bg: Ft('gray.200', 'whiteAlpha.300')(t) },
          _disabled: { opacity: 0.4, cursor: 'not-allowed' },
        }))
      function _n(t) {
        var e, r
        const n = null == (e = Lr.sizes) ? void 0 : e[t],
          o = { lg: 'md', md: 'md', sm: 'sm', xs: 'sm' },
          i = (null == (r = n.field) ? void 0 : r.fontSize) ?? 'md',
          a = mn.fontSizes[i]
        return gn({
          field: {
            ...n.field,
            paddingInlineEnd: bn.reference,
            verticalAlign: 'top',
          },
          stepper: {
            fontSize: Ut(a).multiply(0.75).toString(),
            _first: { borderTopEndRadius: o[t] },
            _last: {
              borderBottomEndRadius: o[t],
              mt: '-1px',
              borderTopWidth: 1,
            },
          },
        })
      }
      var En,
        An,
        Pn,
        Rn,
        Tn,
        Mn,
        On,
        jn,
        Fn,
        Dn,
        Bn,
        zn,
        In,
        $n,
        Ln,
        Vn,
        qn = vn({
          baseStyle: gn((t) => ({
            root: Sn,
            field: de(wn, t) ?? {},
            stepperGroup: kn,
            stepper: de(Cn, t) ?? {},
          })),
          sizes: { xs: _n('xs'), sm: _n('sm'), md: _n('md'), lg: _n('lg') },
          variants: Lr.variants,
          defaultProps: Lr.defaultProps,
        }),
        Un = (0, nt.k0)({
          ...(null == (En = Lr.baseStyle) ? void 0 : En.field),
          textAlign: 'center',
        }),
        Nn = {
          lg: (0, nt.k0)({ fontSize: 'lg', w: 12, h: 12, borderRadius: 'md' }),
          md: (0, nt.k0)({ fontSize: 'md', w: 10, h: 10, borderRadius: 'md' }),
          sm: (0, nt.k0)({ fontSize: 'sm', w: 8, h: 8, borderRadius: 'sm' }),
          xs: (0, nt.k0)({ fontSize: 'xs', w: 6, h: 6, borderRadius: 'sm' }),
        },
        Wn = {
          outline: (0, nt.k0)((t) => {
            var e, r
            return (
              (null ==
              (r = de(null == (e = Lr.variants) ? void 0 : e.outline, t))
                ? void 0
                : r.field) ?? {}
            )
          }),
          flushed: (0, nt.k0)((t) => {
            var e, r
            return (
              (null ==
              (r = de(null == (e = Lr.variants) ? void 0 : e.flushed, t))
                ? void 0
                : r.field) ?? {}
            )
          }),
          filled: (0, nt.k0)((t) => {
            var e, r
            return (
              (null ==
              (r = de(null == (e = Lr.variants) ? void 0 : e.filled, t))
                ? void 0
                : r.field) ?? {}
            )
          }),
          unstyled:
            (null == (An = Lr.variants) ? void 0 : An.unstyled.field) ?? {},
        },
        Hn = (0, nt.fj)({
          baseStyle: Un,
          sizes: Nn,
          variants: Wn,
          defaultProps: Lr.defaultProps,
        }),
        { defineMultiStyleConfig: Qn, definePartsStyle: Gn } = (0, nt.D)(
          Q.keys
        ),
        Kn = Qt('popper-bg'),
        Yn = Qt('popper-arrow-bg'),
        Xn = Qt('popper-arrow-shadow-color'),
        Zn = (0, nt.k0)({ zIndex: 10 }),
        Jn = (0, nt.k0)((t) => {
          const e = Ft('white', 'gray.700')(t),
            r = Ft('gray.200', 'whiteAlpha.300')(t)
          return {
            [Kn.variable]: `colors.${e}`,
            bg: Kn.reference,
            [Yn.variable]: Kn.reference,
            [Xn.variable]: `colors.${r}`,
            width: 'xs',
            border: '1px solid',
            borderColor: 'inherit',
            borderRadius: 'md',
            boxShadow: 'sm',
            zIndex: 'inherit',
            _focusVisible: { outline: 0, boxShadow: 'outline' },
          }
        }),
        to = (0, nt.k0)({ px: 3, py: 2, borderBottomWidth: '1px' }),
        eo = (0, nt.k0)({ px: 3, py: 2 }),
        ro = (0, nt.k0)({ px: 3, py: 2, borderTopWidth: '1px' }),
        no = (0, nt.k0)({
          position: 'absolute',
          borderRadius: 'md',
          top: 1,
          insetEnd: 2,
          padding: 2,
        }),
        oo = Qn({
          baseStyle: Gn((t) => ({
            popper: Zn,
            content: Jn(t),
            header: to,
            body: eo,
            footer: ro,
            closeButton: no,
          })),
        }),
        { defineMultiStyleConfig: io, definePartsStyle: ao } = (0, nt.D)(
          G.keys
        ),
        so = (0, nt.k0)((t) => {
          const {
              colorScheme: e,
              theme: r,
              isIndeterminate: n,
              hasStripe: o,
            } = t,
            i = Ft(Ot(), Ot('1rem', 'rgba(0,0,0,0.1)'))(t),
            a = Ft(`${e}.500`, `${e}.200`)(t),
            s = `linear-gradient(\n    to right,\n    transparent 0%,\n    ${Rt(
              r,
              a
            )} 50%,\n    transparent 100%\n  )`
          return { ...(!n && o && i), ...(n ? { bgImage: s } : { bgColor: a }) }
        }),
        uo = (0, nt.k0)({
          lineHeight: '1',
          fontSize: '0.25em',
          fontWeight: 'bold',
          color: 'white',
        }),
        lo = (0, nt.k0)((t) => ({ bg: Ft('gray.100', 'whiteAlpha.300')(t) })),
        co = (0, nt.k0)((t) => ({
          transitionProperty: 'common',
          transitionDuration: 'slow',
          ...so(t),
        })),
        fo = ao((t) => ({ label: uo, filledTrack: co(t), track: lo(t) })),
        po = io({
          sizes: {
            xs: ao({ track: { h: '1' } }),
            sm: ao({ track: { h: '2' } }),
            md: ao({ track: { h: '3' } }),
            lg: ao({ track: { h: '4' } }),
          },
          baseStyle: fo,
          defaultProps: { size: 'md', colorScheme: 'blue' },
        }),
        { defineMultiStyleConfig: ho, definePartsStyle: mo } = (0, nt.D)(
          K.keys
        ),
        vo = (0, nt.k0)((t) => {
          var e
          const r = null == (e = de(He.baseStyle, t)) ? void 0 : e.control
          return {
            ...r,
            borderRadius: 'full',
            _checked: {
              ...(null == r ? void 0 : r._checked),
              _before: {
                content: '""',
                display: 'inline-block',
                pos: 'relative',
                w: '50%',
                h: '50%',
                borderRadius: '50%',
                bg: 'currentColor',
              },
            },
          }
        }),
        go = ho({
          baseStyle: mo((t) => {
            var e, r, n, o
            return {
              label:
                null == (r = (e = He).baseStyle) ? void 0 : r.call(e, t).label,
              container:
                null == (o = (n = He).baseStyle)
                  ? void 0
                  : o.call(n, t).container,
              control: vo(t),
            }
          }),
          sizes: {
            md: mo({ control: { w: '4', h: '4' }, label: { fontSize: 'md' } }),
            lg: mo({ control: { w: '5', h: '5' }, label: { fontSize: 'lg' } }),
            sm: mo({
              control: { width: '3', height: '3' },
              label: { fontSize: 'sm' },
            }),
          },
          defaultProps: { size: 'md', colorScheme: 'blue' },
        }),
        { defineMultiStyleConfig: yo, definePartsStyle: bo } = (0, nt.D)(
          Y.keys
        ),
        xo = (0, nt.k0)((t) => {
          var e
          return {
            ...(null == (e = Lr.baseStyle) ? void 0 : e.field),
            bg: Ft('white', 'gray.700')(t),
            appearance: 'none',
            paddingBottom: '1px',
            lineHeight: 'normal',
            '> option, > optgroup': { bg: Ft('white', 'gray.700')(t) },
          }
        }),
        So = (0, nt.k0)({
          width: '6',
          height: '100%',
          insetEnd: '2',
          position: 'relative',
          color: 'currentColor',
          fontSize: 'xl',
          _disabled: { opacity: 0.5 },
        }),
        wo = bo((t) => ({ field: xo(t), icon: So })),
        ko = (0, nt.k0)({ paddingInlineEnd: '8' }),
        Co = yo({
          baseStyle: wo,
          sizes: {
            lg: {
              ...(null == (Pn = Lr.sizes) ? void 0 : Pn.lg),
              field: {
                ...(null == (Rn = Lr.sizes) ? void 0 : Rn.lg.field),
                ...ko,
              },
            },
            md: {
              ...(null == (Tn = Lr.sizes) ? void 0 : Tn.md),
              field: {
                ...(null == (Mn = Lr.sizes) ? void 0 : Mn.md.field),
                ...ko,
              },
            },
            sm: {
              ...(null == (On = Lr.sizes) ? void 0 : On.sm),
              field: {
                ...(null == (jn = Lr.sizes) ? void 0 : jn.sm.field),
                ...ko,
              },
            },
            xs: {
              ...(null == (Fn = Lr.sizes) ? void 0 : Fn.xs),
              field: {
                ...(null == (Dn = Lr.sizes) ? void 0 : Dn.xs.field),
                ...ko,
              },
              icon: { insetEnd: '1' },
            },
          },
          variants: Lr.variants,
          defaultProps: Lr.defaultProps,
        }),
        _o = (0, nt.gJ)('skeleton-start-color'),
        Eo = (0, nt.gJ)('skeleton-end-color'),
        Ao = (0, nt.k0)((t) => {
          const e = Ft('gray.100', 'gray.800')(t),
            r = Ft('gray.400', 'gray.600')(t),
            { startColor: n = e, endColor: o = r, theme: i } = t,
            a = Rt(i, n),
            s = Rt(i, o)
          return {
            [_o.variable]: a,
            [Eo.variable]: s,
            opacity: 0.7,
            borderRadius: '2px',
            borderColor: a,
            background: s,
          }
        }),
        Po = (0, nt.fj)({ baseStyle: Ao }),
        Ro = (0, nt.k0)((t) => ({
          borderRadius: 'md',
          fontWeight: 'semibold',
          _focusVisible: {
            boxShadow: 'outline',
            padding: '4',
            position: 'fixed',
            top: '6',
            insetStart: '6',
            bg: Ft('white', 'gray.700')(t),
          },
        })),
        To = (0, nt.fj)({ baseStyle: Ro }),
        { defineMultiStyleConfig: Mo, definePartsStyle: Oo } = (0, nt.D)(
          X.keys
        ),
        jo = (0, nt.gJ)('slider-thumb-size'),
        Fo = (0, nt.gJ)('slider-track-size'),
        Do = (0, nt.k0)((t) => {
          const { orientation: e } = t
          return {
            display: 'inline-block',
            position: 'relative',
            cursor: 'pointer',
            _disabled: {
              opacity: 0.6,
              cursor: 'default',
              pointerEvents: 'none',
            },
            ...Dt({
              orientation: e,
              vertical: { h: '100%' },
              horizontal: { w: '100%' },
            }),
          }
        }),
        Bo = (0, nt.k0)((t) => ({
          ...Dt({
            orientation: t.orientation,
            horizontal: { h: Fo.reference },
            vertical: { w: Fo.reference },
          }),
          overflow: 'hidden',
          borderRadius: 'sm',
          bg: Ft('gray.200', 'whiteAlpha.200')(t),
          _disabled: { bg: Ft('gray.300', 'whiteAlpha.300')(t) },
        })),
        zo = (0, nt.k0)((t) => {
          const { orientation: e } = t
          return {
            ...Dt({
              orientation: e,
              vertical: {
                left: '50%',
                transform: 'translateX(-50%)',
                _active: { transform: 'translateX(-50%) scale(1.15)' },
              },
              horizontal: {
                top: '50%',
                transform: 'translateY(-50%)',
                _active: { transform: 'translateY(-50%) scale(1.15)' },
              },
            }),
            w: jo.reference,
            h: jo.reference,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            outline: 0,
            zIndex: 1,
            borderRadius: 'full',
            bg: 'white',
            boxShadow: 'base',
            border: '1px solid',
            borderColor: 'transparent',
            transitionProperty: 'transform',
            transitionDuration: 'normal',
            _focusVisible: { boxShadow: 'outline' },
            _disabled: { bg: 'gray.300' },
          }
        }),
        Io = (0, nt.k0)((t) => {
          const { colorScheme: e } = t
          return {
            width: 'inherit',
            height: 'inherit',
            bg: Ft(`${e}.500`, `${e}.200`)(t),
          }
        }),
        $o = Mo({
          baseStyle: Oo((t) => ({
            container: Do(t),
            track: Bo(t),
            thumb: zo(t),
            filledTrack: Io(t),
          })),
          sizes: {
            lg: Oo({
              container: { [jo.variable]: 'sizes.4', [Fo.variable]: 'sizes.1' },
            }),
            md: Oo({
              container: {
                [jo.variable]: 'sizes.3.5',
                [Fo.variable]: 'sizes.1',
              },
            }),
            sm: Oo({
              container: {
                [jo.variable]: 'sizes.2.5',
                [Fo.variable]: 'sizes.0.5',
              },
            }),
          },
          defaultProps: { size: 'md', colorScheme: 'blue' },
        }),
        Lo = Qt('spinner-size'),
        Vo = (0, nt.k0)({ width: [Lo.reference], height: [Lo.reference] }),
        qo = {
          xs: (0, nt.k0)({ [Lo.variable]: 'sizes.3' }),
          sm: (0, nt.k0)({ [Lo.variable]: 'sizes.4' }),
          md: (0, nt.k0)({ [Lo.variable]: 'sizes.6' }),
          lg: (0, nt.k0)({ [Lo.variable]: 'sizes.8' }),
          xl: (0, nt.k0)({ [Lo.variable]: 'sizes.12' }),
        },
        Uo = (0, nt.fj)({
          baseStyle: Vo,
          sizes: qo,
          defaultProps: { size: 'md' },
        }),
        { defineMultiStyleConfig: No, definePartsStyle: Wo } = (0, nt.D)(
          Z.keys
        ),
        Ho = No({
          baseStyle: Wo({
            container: {},
            label: (0, nt.k0)({ fontWeight: 'medium' }),
            helpText: (0, nt.k0)({ opacity: 0.8, marginBottom: '2' }),
            number: (0, nt.k0)({
              verticalAlign: 'baseline',
              fontWeight: 'semibold',
            }),
            icon: (0, nt.k0)({
              marginEnd: 1,
              w: '3.5',
              h: '3.5',
              verticalAlign: 'middle',
            }),
          }),
          sizes: {
            md: Wo({
              label: { fontSize: 'sm' },
              helpText: { fontSize: 'sm' },
              number: { fontSize: '2xl' },
            }),
          },
          defaultProps: { size: 'md' },
        }),
        { defineMultiStyleConfig: Qo, definePartsStyle: Go } = (0, nt.D)(
          J.keys
        ),
        Ko = Qt('switch-track-width'),
        Yo = Qt('switch-track-height'),
        Xo = Qt('switch-track-diff'),
        Zo = Ut.subtract(Ko, Yo),
        Jo = Qt('switch-thumb-x'),
        ti = (0, nt.k0)((t) => {
          const { colorScheme: e } = t
          return {
            borderRadius: 'full',
            p: '0.5',
            width: [Ko.reference],
            height: [Yo.reference],
            transitionProperty: 'common',
            transitionDuration: 'fast',
            bg: Ft('gray.300', 'whiteAlpha.400')(t),
            _focusVisible: { boxShadow: 'outline' },
            _disabled: { opacity: 0.4, cursor: 'not-allowed' },
            _checked: { bg: Ft(`${e}.500`, `${e}.200`)(t) },
          }
        }),
        ei = (0, nt.k0)({
          bg: 'white',
          transitionProperty: 'transform',
          transitionDuration: 'normal',
          borderRadius: 'inherit',
          width: [Yo.reference],
          height: [Yo.reference],
          _checked: { transform: `translateX(${Jo.reference})` },
        }),
        ri = Qo({
          baseStyle: Go((t) => ({
            container: {
              [Xo.variable]: Zo,
              [Jo.variable]: Xo.reference,
              _rtl: { [Jo.variable]: Ut(Xo).negate().toString() },
            },
            track: ti(t),
            thumb: ei,
          })),
          sizes: {
            sm: Go({
              container: {
                [Ko.variable]: '1.375rem',
                [Yo.variable]: 'sizes.3',
              },
            }),
            md: Go({
              container: {
                [Ko.variable]: '1.875rem',
                [Yo.variable]: 'sizes.4',
              },
            }),
            lg: Go({
              container: {
                [Ko.variable]: '2.875rem',
                [Yo.variable]: 'sizes.6',
              },
            }),
          },
          defaultProps: { size: 'md', colorScheme: 'blue' },
        }),
        { defineMultiStyleConfig: ni, definePartsStyle: oi } = (0, nt.D)(
          tt.keys
        ),
        ii = oi({
          table: {
            fontVariantNumeric: 'lining-nums tabular-nums',
            borderCollapse: 'collapse',
            width: 'full',
          },
          th: {
            fontFamily: 'heading',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: 'wider',
            textAlign: 'start',
          },
          td: { textAlign: 'start' },
          caption: {
            mt: 4,
            fontFamily: 'heading',
            textAlign: 'center',
            fontWeight: 'medium',
          },
        }),
        ai = (0, nt.k0)({ '&[data-is-numeric=true]': { textAlign: 'end' } }),
        si = oi((t) => {
          const { colorScheme: e } = t
          return {
            th: {
              color: Ft('gray.600', 'gray.400')(t),
              borderBottom: '1px',
              borderColor: Ft(`${e}.100`, `${e}.700`)(t),
              ...ai,
            },
            td: {
              borderBottom: '1px',
              borderColor: Ft(`${e}.100`, `${e}.700`)(t),
              ...ai,
            },
            caption: { color: Ft('gray.600', 'gray.100')(t) },
            tfoot: {
              tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } },
            },
          }
        }),
        ui = oi((t) => {
          const { colorScheme: e } = t
          return {
            th: {
              color: Ft('gray.600', 'gray.400')(t),
              borderBottom: '1px',
              borderColor: Ft(`${e}.100`, `${e}.700`)(t),
              ...ai,
            },
            td: {
              borderBottom: '1px',
              borderColor: Ft(`${e}.100`, `${e}.700`)(t),
              ...ai,
            },
            caption: { color: Ft('gray.600', 'gray.100')(t) },
            tbody: {
              tr: {
                '&:nth-of-type(odd)': {
                  'th, td': {
                    borderBottomWidth: '1px',
                    borderColor: Ft(`${e}.100`, `${e}.700`)(t),
                  },
                  td: { background: Ft(`${e}.100`, `${e}.700`)(t) },
                },
              },
            },
            tfoot: {
              tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } },
            },
          }
        }),
        li = ni({
          baseStyle: ii,
          variants: { simple: si, striped: ui, unstyled: (0, nt.k0)({}) },
          sizes: {
            sm: oi({
              th: { px: '4', py: '1', lineHeight: '4', fontSize: 'xs' },
              td: { px: '4', py: '2', fontSize: 'sm', lineHeight: '4' },
              caption: { px: '4', py: '2', fontSize: 'xs' },
            }),
            md: oi({
              th: { px: '6', py: '3', lineHeight: '4', fontSize: 'xs' },
              td: { px: '6', py: '4', lineHeight: '5' },
              caption: { px: '6', py: '2', fontSize: 'sm' },
            }),
            lg: oi({
              th: { px: '8', py: '4', lineHeight: '5', fontSize: 'sm' },
              td: { px: '8', py: '5', lineHeight: '6' },
              caption: { px: '6', py: '2', fontSize: 'md' },
            }),
          },
          defaultProps: { variant: 'simple', size: 'md', colorScheme: 'gray' },
        }),
        { defineMultiStyleConfig: ci, definePartsStyle: di } = (0, nt.D)(
          et.keys
        ),
        fi = (0, nt.k0)((t) => {
          const { orientation: e } = t
          return { display: 'vertical' === e ? 'flex' : 'block' }
        }),
        pi = (0, nt.k0)((t) => {
          const { isFitted: e } = t
          return {
            flex: e ? 1 : void 0,
            transitionProperty: 'common',
            transitionDuration: 'normal',
            _focusVisible: { zIndex: 1, boxShadow: 'outline' },
            _disabled: { cursor: 'not-allowed', opacity: 0.4 },
          }
        }),
        hi = (0, nt.k0)((t) => {
          const { align: e = 'start', orientation: r } = t
          return {
            justifyContent: {
              end: 'flex-end',
              center: 'center',
              start: 'flex-start',
            }[e],
            flexDirection: 'vertical' === r ? 'column' : 'row',
          }
        }),
        mi = (0, nt.k0)({ p: 4 }),
        vi = di((t) => ({
          root: fi(t),
          tab: pi(t),
          tablist: hi(t),
          tabpanel: mi,
        })),
        gi = {
          sm: di({ tab: { py: 1, px: 4, fontSize: 'sm' } }),
          md: di({ tab: { fontSize: 'md', py: 2, px: 4 } }),
          lg: di({ tab: { fontSize: 'lg', py: 3, px: 4 } }),
        },
        yi = di((t) => {
          const { colorScheme: e, orientation: r } = t,
            n = 'vertical' === r ? 'borderStart' : 'borderBottom'
          return {
            tablist: { [n]: '2px solid', borderColor: 'inherit' },
            tab: {
              [n]: '2px solid',
              borderColor: 'transparent',
              ['vertical' === r ? 'marginStart' : 'marginBottom']: '-2px',
              _selected: {
                color: Ft(`${e}.600`, `${e}.300`)(t),
                borderColor: 'currentColor',
              },
              _active: { bg: Ft('gray.200', 'whiteAlpha.300')(t) },
              _disabled: { _active: { bg: 'none' } },
            },
          }
        }),
        bi = di((t) => {
          const { colorScheme: e } = t
          return {
            tab: {
              borderTopRadius: 'md',
              border: '1px solid',
              borderColor: 'transparent',
              mb: '-1px',
              _selected: {
                color: Ft(`${e}.600`, `${e}.300`)(t),
                borderColor: 'inherit',
                borderBottomColor: Ft('white', 'gray.800')(t),
              },
            },
            tablist: {
              mb: '-1px',
              borderBottom: '1px solid',
              borderColor: 'inherit',
            },
          }
        }),
        xi = di((t) => {
          const { colorScheme: e } = t
          return {
            tab: {
              border: '1px solid',
              borderColor: 'inherit',
              bg: Ft('gray.50', 'whiteAlpha.50')(t),
              mb: '-1px',
              _notLast: { marginEnd: '-1px' },
              _selected: {
                bg: Ft('#fff', 'gray.800')(t),
                color: Ft(`${e}.600`, `${e}.300`)(t),
                borderColor: 'inherit',
                borderTopColor: 'currentColor',
                borderBottomColor: 'transparent',
              },
            },
            tablist: {
              mb: '-1px',
              borderBottom: '1px solid',
              borderColor: 'inherit',
            },
          }
        }),
        Si = di((t) => {
          const { colorScheme: e, theme: r } = t
          return {
            tab: {
              borderRadius: 'full',
              fontWeight: 'semibold',
              color: 'gray.600',
              _selected: { color: Rt(r, `${e}.700`), bg: Rt(r, `${e}.100`) },
            },
          }
        }),
        wi = di((t) => {
          const { colorScheme: e } = t
          return {
            tab: {
              borderRadius: 'full',
              fontWeight: 'semibold',
              color: Ft('gray.600', 'inherit')(t),
              _selected: {
                color: Ft('#fff', 'gray.800')(t),
                bg: Ft(`${e}.600`, `${e}.300`)(t),
              },
            },
          }
        }),
        ki = ci({
          baseStyle: vi,
          sizes: gi,
          variants: {
            line: yi,
            enclosed: bi,
            'enclosed-colored': xi,
            'soft-rounded': Si,
            'solid-rounded': wi,
            unstyled: di({}),
          },
          defaultProps: { size: 'md', variant: 'line', colorScheme: 'blue' },
        }),
        { defineMultiStyleConfig: Ci, definePartsStyle: _i } = (0, nt.D)(
          rt.keys
        ),
        Ei = _i({
          container: (0, nt.k0)({
            fontWeight: 'medium',
            lineHeight: 1.2,
            outline: 0,
            borderRadius: 'md',
            _focusVisible: { boxShadow: 'outline' },
          }),
          label: (0, nt.k0)({ lineHeight: 1.2, overflow: 'visible' }),
          closeButton: (0, nt.k0)({
            fontSize: 'lg',
            w: '5',
            h: '5',
            transitionProperty: 'common',
            transitionDuration: 'normal',
            borderRadius: 'full',
            marginStart: '1.5',
            marginEnd: '-1',
            opacity: 0.5,
            _disabled: { opacity: 0.4 },
            _focusVisible: { boxShadow: 'outline', bg: 'rgba(0, 0, 0, 0.14)' },
            _hover: { opacity: 0.8 },
            _active: { opacity: 1 },
          }),
        }),
        Ai = {
          sm: _i({
            container: { minH: '5', minW: '5', fontSize: 'xs', px: '2' },
            closeButton: { marginEnd: '-2px', marginStart: '0.35rem' },
          }),
          md: _i({
            container: { minH: '6', minW: '6', fontSize: 'sm', px: '2' },
          }),
          lg: _i({
            container: { minH: '8', minW: '8', fontSize: 'md', px: '3' },
          }),
        },
        Pi = Ci({
          variants: {
            subtle: _i((t) => {
              var e
              return {
                container: null == (e = _e.variants) ? void 0 : e.subtle(t),
              }
            }),
            solid: _i((t) => {
              var e
              return {
                container: null == (e = _e.variants) ? void 0 : e.solid(t),
              }
            }),
            outline: _i((t) => {
              var e
              return {
                container: null == (e = _e.variants) ? void 0 : e.outline(t),
              }
            }),
          },
          baseStyle: Ei,
          sizes: Ai,
          defaultProps: { size: 'md', variant: 'subtle', colorScheme: 'gray' },
        }),
        Ri = (0, nt.k0)({
          ...(null == (Bn = Lr.baseStyle) ? void 0 : Bn.field),
          paddingY: '2',
          minHeight: '20',
          lineHeight: 'short',
          verticalAlign: 'top',
        }),
        Ti = {
          outline: (0, nt.k0)((t) => {
            var e
            return (
              (null == (e = Lr.variants) ? void 0 : e.outline(t).field) ?? {}
            )
          }),
          flushed: (0, nt.k0)((t) => {
            var e
            return (
              (null == (e = Lr.variants) ? void 0 : e.flushed(t).field) ?? {}
            )
          }),
          filled: (0, nt.k0)((t) => {
            var e
            return (
              (null == (e = Lr.variants) ? void 0 : e.filled(t).field) ?? {}
            )
          }),
          unstyled:
            (null == (zn = Lr.variants) ? void 0 : zn.unstyled.field) ?? {},
        },
        Mi = {
          xs: (null == (In = Lr.sizes) ? void 0 : In.xs.field) ?? {},
          sm: (null == ($n = Lr.sizes) ? void 0 : $n.sm.field) ?? {},
          md: (null == (Ln = Lr.sizes) ? void 0 : Ln.md.field) ?? {},
          lg: (null == (Vn = Lr.sizes) ? void 0 : Vn.lg.field) ?? {},
        },
        Oi = (0, nt.fj)({
          baseStyle: Ri,
          sizes: Mi,
          variants: Ti,
          defaultProps: { size: 'md', variant: 'outline' },
        }),
        ji = Qt('tooltip-bg'),
        Fi = Qt('tooltip-fg'),
        Di = Qt('popper-arrow-bg'),
        Bi = (0, nt.k0)((t) => {
          const e = Ft('gray.700', 'gray.300')(t),
            r = Ft('whiteAlpha.900', 'gray.900')(t)
          return {
            bg: ji.reference,
            color: Fi.reference,
            [ji.variable]: `colors.${e}`,
            [Fi.variable]: `colors.${r}`,
            [Di.variable]: ji.reference,
            px: '2',
            py: '0.5',
            borderRadius: 'sm',
            fontWeight: 'medium',
            fontSize: 'sm',
            boxShadow: 'md',
            maxW: 'xs',
            zIndex: 'tooltip',
          }
        }),
        zi = (0, nt.fj)({ baseStyle: Bi }),
        Ii = {
          Accordion: Xt,
          Alert: ue,
          Avatar: be,
          Badge: _e,
          Breadcrumb: Pe,
          Button: Ie,
          Checkbox: He,
          CloseButton: Ye,
          Code: tr,
          Container: rr,
          Divider: ir,
          Drawer: vr,
          Editable: br,
          Form: Cr,
          FormError: Rr,
          FormLabel: Mr,
          Heading: Fr,
          Input: Lr,
          Kbd: qr,
          Link: Nr,
          List: Qr,
          Menu: rn,
          Modal: hn,
          NumberInput: qn,
          PinInput: Hn,
          Popover: oo,
          Progress: po,
          Radio: go,
          Select: Co,
          Skeleton: Po,
          SkipLink: To,
          Slider: $o,
          Spinner: Uo,
          Stat: Ho,
          Switch: ri,
          Table: li,
          Tabs: ki,
          Tag: Pi,
          Textarea: Oi,
          Tooltip: zi,
        },
        $i = {
          none: 0,
          '1px': '1px solid',
          '2px': '2px solid',
          '4px': '4px solid',
          '8px': '8px solid',
        },
        Li = {
          xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
          sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
          inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
          none: 'none',
          'dark-lg':
            'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px',
        },
        Vi = {
          property: {
            common:
              'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
            colors: 'background-color, border-color, color, fill, stroke',
            dimensions: 'width, height',
            position: 'left, right, top, bottom',
            background:
              'background-color, background-image, background-position',
          },
          easing: {
            'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
            'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
            'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
          },
          duration: {
            'ultra-fast': '50ms',
            faster: '100ms',
            fast: '150ms',
            normal: '200ms',
            slow: '300ms',
            slower: '400ms',
            'ultra-slow': '500ms',
          },
        },
        qi = {
          breakpoints: {
            base: '0em',
            sm: '30em',
            md: '48em',
            lg: '62em',
            xl: '80em',
            '2xl': '96em',
          },
          zIndices: {
            hide: -1,
            auto: 'auto',
            base: 0,
            docked: 10,
            dropdown: 1e3,
            sticky: 1100,
            banner: 1200,
            overlay: 1300,
            modal: 1400,
            popover: 1500,
            skipLink: 1600,
            toast: 1700,
            tooltip: 1800,
          },
          radii: {
            none: '0',
            sm: '0.125rem',
            base: '0.25rem',
            md: '0.375rem',
            lg: '0.5rem',
            xl: '0.75rem',
            '2xl': '1rem',
            '3xl': '1.5rem',
            full: '9999px',
          },
          blur: {
            none: 0,
            sm: '4px',
            base: '8px',
            md: '12px',
            lg: '16px',
            xl: '24px',
            '2xl': '40px',
            '3xl': '64px',
          },
          colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#000000',
            white: '#FFFFFF',
            whiteAlpha: {
              50: 'rgba(255, 255, 255, 0.04)',
              100: 'rgba(255, 255, 255, 0.06)',
              200: 'rgba(255, 255, 255, 0.08)',
              300: 'rgba(255, 255, 255, 0.16)',
              400: 'rgba(255, 255, 255, 0.24)',
              500: 'rgba(255, 255, 255, 0.36)',
              600: 'rgba(255, 255, 255, 0.48)',
              700: 'rgba(255, 255, 255, 0.64)',
              800: 'rgba(255, 255, 255, 0.80)',
              900: 'rgba(255, 255, 255, 0.92)',
            },
            blackAlpha: {
              50: 'rgba(0, 0, 0, 0.04)',
              100: 'rgba(0, 0, 0, 0.06)',
              200: 'rgba(0, 0, 0, 0.08)',
              300: 'rgba(0, 0, 0, 0.16)',
              400: 'rgba(0, 0, 0, 0.24)',
              500: 'rgba(0, 0, 0, 0.36)',
              600: 'rgba(0, 0, 0, 0.48)',
              700: 'rgba(0, 0, 0, 0.64)',
              800: 'rgba(0, 0, 0, 0.80)',
              900: 'rgba(0, 0, 0, 0.92)',
            },
            gray: {
              50: '#F7FAFC',
              100: '#EDF2F7',
              200: '#E2E8F0',
              300: '#CBD5E0',
              400: '#A0AEC0',
              500: '#718096',
              600: '#4A5568',
              700: '#2D3748',
              800: '#1A202C',
              900: '#171923',
            },
            red: {
              50: '#FFF5F5',
              100: '#FED7D7',
              200: '#FEB2B2',
              300: '#FC8181',
              400: '#F56565',
              500: '#E53E3E',
              600: '#C53030',
              700: '#9B2C2C',
              800: '#822727',
              900: '#63171B',
            },
            orange: {
              50: '#FFFAF0',
              100: '#FEEBC8',
              200: '#FBD38D',
              300: '#F6AD55',
              400: '#ED8936',
              500: '#DD6B20',
              600: '#C05621',
              700: '#9C4221',
              800: '#7B341E',
              900: '#652B19',
            },
            yellow: {
              50: '#FFFFF0',
              100: '#FEFCBF',
              200: '#FAF089',
              300: '#F6E05E',
              400: '#ECC94B',
              500: '#D69E2E',
              600: '#B7791F',
              700: '#975A16',
              800: '#744210',
              900: '#5F370E',
            },
            green: {
              50: '#F0FFF4',
              100: '#C6F6D5',
              200: '#9AE6B4',
              300: '#68D391',
              400: '#48BB78',
              500: '#38A169',
              600: '#2F855A',
              700: '#276749',
              800: '#22543D',
              900: '#1C4532',
            },
            teal: {
              50: '#E6FFFA',
              100: '#B2F5EA',
              200: '#81E6D9',
              300: '#4FD1C5',
              400: '#38B2AC',
              500: '#319795',
              600: '#2C7A7B',
              700: '#285E61',
              800: '#234E52',
              900: '#1D4044',
            },
            blue: {
              50: '#ebf8ff',
              100: '#bee3f8',
              200: '#90cdf4',
              300: '#63b3ed',
              400: '#4299e1',
              500: '#3182ce',
              600: '#2b6cb0',
              700: '#2c5282',
              800: '#2a4365',
              900: '#1A365D',
            },
            cyan: {
              50: '#EDFDFD',
              100: '#C4F1F9',
              200: '#9DECF9',
              300: '#76E4F7',
              400: '#0BC5EA',
              500: '#00B5D8',
              600: '#00A3C4',
              700: '#0987A0',
              800: '#086F83',
              900: '#065666',
            },
            purple: {
              50: '#FAF5FF',
              100: '#E9D8FD',
              200: '#D6BCFA',
              300: '#B794F4',
              400: '#9F7AEA',
              500: '#805AD5',
              600: '#6B46C1',
              700: '#553C9A',
              800: '#44337A',
              900: '#322659',
            },
            pink: {
              50: '#FFF5F7',
              100: '#FED7E2',
              200: '#FBB6CE',
              300: '#F687B3',
              400: '#ED64A6',
              500: '#D53F8C',
              600: '#B83280',
              700: '#97266D',
              800: '#702459',
              900: '#521B41',
            },
            linkedin: {
              50: '#E8F4F9',
              100: '#CFEDFB',
              200: '#9BDAF3',
              300: '#68C7EC',
              400: '#34B3E4',
              500: '#00A0DC',
              600: '#008CC9',
              700: '#0077B5',
              800: '#005E93',
              900: '#004471',
            },
            facebook: {
              50: '#E8F4F9',
              100: '#D9DEE9',
              200: '#B7C2DA',
              300: '#6482C0',
              400: '#4267B2',
              500: '#385898',
              600: '#314E89',
              700: '#29487D',
              800: '#223B67',
              900: '#1E355B',
            },
            messenger: {
              50: '#D0E6FF',
              100: '#B9DAFF',
              200: '#A2CDFF',
              300: '#7AB8FF',
              400: '#2E90FF',
              500: '#0078FF',
              600: '#0063D1',
              700: '#0052AC',
              800: '#003C7E',
              900: '#002C5C',
            },
            whatsapp: {
              50: '#dffeec',
              100: '#b9f5d0',
              200: '#90edb3',
              300: '#65e495',
              400: '#3cdd78',
              500: '#22c35e',
              600: '#179848',
              700: '#0c6c33',
              800: '#01421c',
              900: '#001803',
            },
            twitter: {
              50: '#E5F4FD',
              100: '#C8E9FB',
              200: '#A8DCFA',
              300: '#83CDF7',
              400: '#57BBF5',
              500: '#1DA1F2',
              600: '#1A94DA',
              700: '#1681BF',
              800: '#136B9E',
              900: '#0D4D71',
            },
            telegram: {
              50: '#E3F2F9',
              100: '#C5E4F3',
              200: '#A2D4EC',
              300: '#7AC1E4',
              400: '#47A9DA',
              500: '#0088CC',
              600: '#007AB8',
              700: '#006BA1',
              800: '#005885',
              900: '#003F5E',
            },
          },
          ...mn,
          sizes: ce,
          shadows: Li,
          space: le,
          borders: $i,
          transition: Vi,
        }
      var Ui = [
        'borders',
        'breakpoints',
        'colors',
        'components',
        'config',
        'direction',
        'fonts',
        'fontSizes',
        'fontWeights',
        'letterSpacings',
        'lineHeights',
        'radii',
        'shadows',
        'sizes',
        'space',
        'styles',
        'transition',
        'zIndices',
      ]
      function Ni(t) {
        return (
          !!(function (t) {
            const e = typeof t
            return (
              null != t &&
              ('object' === e || 'function' === e) &&
              !Array.isArray(t)
            )
          })(t) && Ui.every((e) => Object.prototype.hasOwnProperty.call(t, e))
        )
      }
      var Wi = {
          semanticTokens: {
            colors: {
              'chakra-body-text': {
                _light: 'gray.800',
                _dark: 'whiteAlpha.900',
              },
              'chakra-body-bg': { _light: 'white', _dark: 'gray.800' },
              'chakra-border-color': {
                _light: 'gray.200',
                _dark: 'whiteAlpha.300',
              },
              'chakra-placeholder-color': {
                _light: 'gray.500',
                _dark: 'whiteAlpha.400',
              },
            },
          },
          direction: 'ltr',
          ...qi,
          components: Ii,
          styles: {
            global: {
              body: {
                fontFamily: 'body',
                color: 'chakra-body-text',
                bg: 'chakra-body-bg',
                transitionProperty: 'background-color',
                transitionDuration: 'normal',
                lineHeight: 'base',
              },
              '*::placeholder': { color: 'chakra-placeholder-color' },
              '*, *::before, &::after': {
                borderColor: 'chakra-border-color',
                wordWrap: 'break-word',
              },
            },
          },
          config: {
            useSystemColorMode: !1,
            initialColorMode: 'light',
            cssVarPrefix: 'chakra',
          },
        },
        Hi = r(7021),
        Qi = r(3721),
        Gi = (...t) => t.filter(Boolean).join(' ')
      function Ki(t) {
        return i.createElement(
          Hi.JO,
          { viewBox: '0 0 24 24', ...t },
          i.createElement('path', {
            fill: 'currentColor',
            d: 'M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z',
          })
        )
      }
      var [Yi, Xi] = (0, c.k)({
          name: 'AlertContext',
          hookName: 'useAlertContext',
          providerName: '<Alert />',
        }),
        [Zi, Ji] = (0, c.k)({
          name: 'AlertStylesContext',
          hookName: 'useAlertStyles',
          providerName: '<Alert />',
        }),
        ta = {
          info: {
            icon: function (t) {
              return i.createElement(
                Hi.JO,
                { viewBox: '0 0 24 24', ...t },
                i.createElement('path', {
                  fill: 'currentColor',
                  d: 'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z',
                })
              )
            },
            colorScheme: 'blue',
          },
          warning: { icon: Ki, colorScheme: 'orange' },
          success: {
            icon: function (t) {
              return i.createElement(
                Hi.JO,
                { viewBox: '0 0 24 24', ...t },
                i.createElement('path', {
                  fill: 'currentColor',
                  d: 'M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z',
                })
              )
            },
            colorScheme: 'green',
          },
          error: { icon: Ki, colorScheme: 'red' },
          loading: { icon: Qi.$, colorScheme: 'blue' },
        }
      var ea = (0, k.Gp)(function (t, e) {
        const { status: r = 'info', addRole: n = !0, ...o } = (0, nt.Lr)(t),
          a =
            t.colorScheme ??
            (function (t) {
              return ta[t].colorScheme
            })(r),
          s = (0, k.jC)('Alert', { ...t, colorScheme: a }),
          u = {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            ...s.container,
          }
        return i.createElement(
          Yi,
          { value: { status: r } },
          i.createElement(
            Zi,
            { value: s },
            i.createElement(k.m$.div, {
              role: n ? 'alert' : void 0,
              ref: e,
              ...o,
              className: Gi('chakra-alert', t.className),
              __css: u,
            })
          )
        )
      })
      ea.displayName = 'Alert'
      var ra = (0, k.Gp)(function (t, e) {
        const r = { display: 'inline', ...Ji().description }
        return i.createElement(k.m$.div, {
          ref: e,
          ...t,
          className: Gi('chakra-alert__desc', t.className),
          __css: r,
        })
      })
      function na(t) {
        const { status: e } = Xi(),
          r = (function (t) {
            return ta[t].icon
          })(e),
          n = Ji(),
          o = 'loading' === e ? n.spinner : n.icon
        return i.createElement(
          k.m$.span,
          {
            display: 'inherit',
            ...t,
            className: Gi('chakra-alert__icon', t.className),
            __css: o,
          },
          t.children || i.createElement(r, { h: '100%', w: '100%' })
        )
      }
      ;(ra.displayName = 'AlertDescription'), (na.displayName = 'AlertIcon')
      var oa = (0, k.Gp)(function (t, e) {
        const r = Ji()
        return i.createElement(k.m$.div, {
          ref: e,
          ...t,
          className: Gi('chakra-alert__title', t.className),
          __css: r.title,
        })
      })
      function ia(t) {
        return i.createElement(
          Hi.JO,
          { focusable: 'false', 'aria-hidden': !0, ...t },
          i.createElement('path', {
            fill: 'currentColor',
            d: 'M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z',
          })
        )
      }
      oa.displayName = 'AlertTitle'
      var aa = (0, k.Gp)(function (t, e) {
        const r = (0, k.mq)('CloseButton', t),
          { children: n, isDisabled: o, __css: a, ...s } = (0, nt.Lr)(t)
        return i.createElement(
          k.m$.button,
          {
            type: 'button',
            'aria-label': 'Close',
            ref: e,
            disabled: o,
            __css: {
              outline: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              ...r,
              ...a,
            },
            ...s,
          },
          n || i.createElement(ia, { width: '1em', height: '1em' })
        )
      })
      aa.displayName = 'CloseButton'
      var sa = r(4062),
        ua = r(3656),
        la = ('undefined' === typeof ua || ua.env, 'production')
      const ca = (1 / 60) * 1e3,
        da =
          'undefined' !== typeof performance
            ? () => performance.now()
            : () => Date.now(),
        fa =
          'undefined' !== typeof window
            ? (t) => window.requestAnimationFrame(t)
            : (t) => setTimeout(() => t(da()), ca)
      let pa = !0,
        ha = !1,
        ma = !1
      const va = { delta: 0, timestamp: 0 },
        ga = ['read', 'update', 'preRender', 'render', 'postRender'],
        ya = ga.reduce(
          (t, e) => (
            (t[e] = (function (t) {
              let e = [],
                r = [],
                n = 0,
                o = !1,
                i = !1
              const a = new WeakSet(),
                s = {
                  schedule: (t, i = !1, s = !1) => {
                    const u = s && o,
                      l = u ? e : r
                    return (
                      i && a.add(t),
                      -1 === l.indexOf(t) &&
                        (l.push(t), u && o && (n = e.length)),
                      t
                    )
                  },
                  cancel: (t) => {
                    const e = r.indexOf(t)
                    ;-1 !== e && r.splice(e, 1), a.delete(t)
                  },
                  process: (u) => {
                    if (o) i = !0
                    else {
                      if (
                        ((o = !0),
                        ([e, r] = [r, e]),
                        (r.length = 0),
                        (n = e.length),
                        n)
                      )
                        for (let r = 0; r < n; r++) {
                          const n = e[r]
                          n(u), a.has(n) && (s.schedule(n), t())
                        }
                      ;(o = !1), i && ((i = !1), s.process(u))
                    }
                  },
                }
              return s
            })(() => (ha = !0))),
            t
          ),
          {}
        ),
        ba = ga.reduce((t, e) => {
          const r = ya[e]
          return (
            (t[e] = (t, e = !1, n = !1) => (ha || Ca(), r.schedule(t, e, n))), t
          )
        }, {}),
        xa = ga.reduce((t, e) => ((t[e] = ya[e].cancel), t), {}),
        Sa = ga.reduce((t, e) => ((t[e] = () => ya[e].process(va)), t), {}),
        wa = (t) => ya[t].process(va),
        ka = (t) => {
          ;(ha = !1),
            (va.delta = pa ? ca : Math.max(Math.min(t - va.timestamp, 40), 1)),
            (va.timestamp = t),
            (ma = !0),
            ga.forEach(wa),
            (ma = !1),
            ha && ((pa = !1), fa(ka))
        },
        Ca = () => {
          ;(ha = !0), (pa = !0), ma || fa(ka)
        },
        _a = () => va
      var Ea = ba,
        Aa = 'undefined' !== typeof document,
        Pa = Aa ? i.useLayoutEffect : i.useEffect
      function Ra() {
        var t = (0, i.useRef)(!1)
        return (
          Pa(function () {
            return (
              (t.current = !0),
              function () {
                t.current = !1
              }
            )
          }, []),
          t
        )
      }
      var Ta = (0, i.createContext)(null)
      function Ma(t) {
        var e = (0, i.useRef)(null)
        return null === e.current && (e.current = t()), e.current
      }
      var Oa = 0,
        ja = function () {
          return Oa++
        },
        Fa = function () {
          return Ma(ja)
        },
        Da = function (t) {
          var e = t.children,
            r = t.initial,
            n = t.isPresent,
            o = t.onExitComplete,
            a = t.custom,
            s = t.presenceAffectsLayout,
            u = Ma(Ba),
            l = Fa(),
            c = (0, i.useMemo)(
              function () {
                return {
                  id: l,
                  initial: r,
                  isPresent: n,
                  custom: a,
                  onExitComplete: function (t) {
                    var e, r
                    u.set(t, !0)
                    try {
                      for (
                        var n = (0, sa.__values)(u.values()), i = n.next();
                        !i.done;
                        i = n.next()
                      ) {
                        if (!i.value) return
                      }
                    } catch (a) {
                      e = { error: a }
                    } finally {
                      try {
                        i && !i.done && (r = n.return) && r.call(n)
                      } finally {
                        if (e) throw e.error
                      }
                    }
                    null === o || void 0 === o || o()
                  },
                  register: function (t) {
                    return (
                      u.set(t, !1),
                      function () {
                        return u.delete(t)
                      }
                    )
                  },
                }
              },
              s ? void 0 : [n]
            )
          return (
            (0, i.useMemo)(
              function () {
                u.forEach(function (t, e) {
                  return u.set(e, !1)
                })
              },
              [n]
            ),
            i.useEffect(
              function () {
                !n && !u.size && (null === o || void 0 === o || o())
              },
              [n]
            ),
            i.createElement(Ta.Provider, { value: c }, e)
          )
        }
      function Ba() {
        return new Map()
      }
      var za = (0, i.createContext)({})
      function Ia(t) {
        return (0, i.useEffect)(function () {
          return function () {
            return t()
          }
        }, [])
      }
      var $a = function (t) {
        return t.key || ''
      }
      var La = function (t) {
        var e = t.children,
          r = t.custom,
          n = t.initial,
          o = void 0 === n || n,
          a = t.onExitComplete,
          s = t.exitBeforeEnter,
          u = t.presenceAffectsLayout,
          l = void 0 === u || u,
          c = (0, sa.__read)(
            (function () {
              var t = Ra(),
                e = (0, sa.__read)((0, i.useState)(0), 2),
                r = e[0],
                n = e[1],
                o = (0, i.useCallback)(
                  function () {
                    t.current && n(r + 1)
                  },
                  [r]
                )
              return [
                (0, i.useCallback)(
                  function () {
                    return Ea.postRender(o)
                  },
                  [o]
                ),
                r,
              ]
            })(),
            1
          ),
          d = c[0],
          f = (0, i.useContext)(za).forceRender
        f && (d = f)
        var p = Ra(),
          h = (function (t) {
            var e = []
            return (
              i.Children.forEach(t, function (t) {
                ;(0, i.isValidElement)(t) && e.push(t)
              }),
              e
            )
          })(e),
          m = h,
          v = new Set(),
          g = (0, i.useRef)(m),
          y = (0, i.useRef)(new Map()).current,
          b = (0, i.useRef)(!0)
        if (
          (Pa(function () {
            ;(b.current = !1),
              (function (t, e) {
                t.forEach(function (t) {
                  var r = $a(t)
                  e.set(r, t)
                })
              })(h, y),
              (g.current = m)
          }),
          Ia(function () {
            ;(b.current = !0), y.clear(), v.clear()
          }),
          b.current)
        )
          return i.createElement(
            i.Fragment,
            null,
            m.map(function (t) {
              return i.createElement(
                Da,
                {
                  key: $a(t),
                  isPresent: !0,
                  initial: !!o && void 0,
                  presenceAffectsLayout: l,
                },
                t
              )
            })
          )
        m = (0, sa.__spreadArray)([], (0, sa.__read)(m), !1)
        for (
          var x = g.current.map($a), S = h.map($a), w = x.length, k = 0;
          k < w;
          k++
        ) {
          var C = x[k]
          ;-1 === S.indexOf(C) && v.add(C)
        }
        return (
          s && v.size && (m = []),
          v.forEach(function (t) {
            if (-1 === S.indexOf(t)) {
              var e = y.get(t)
              if (e) {
                var n = x.indexOf(t)
                m.splice(
                  n,
                  0,
                  i.createElement(
                    Da,
                    {
                      key: $a(e),
                      isPresent: !1,
                      onExitComplete: function () {
                        y.delete(t), v.delete(t)
                        var e = g.current.findIndex(function (e) {
                          return e.key === t
                        })
                        if ((g.current.splice(e, 1), !v.size)) {
                          if (((g.current = h), !1 === p.current)) return
                          d(), a && a()
                        }
                      },
                      custom: r,
                      presenceAffectsLayout: l,
                    },
                    e
                  )
                )
              }
            }
          }),
          (m = m.map(function (t) {
            var e = t.key
            return v.has(e)
              ? t
              : i.createElement(
                  Da,
                  { key: $a(t), isPresent: !0, presenceAffectsLayout: l },
                  t
                )
          })),
          'production' !== la &&
            s &&
            m.length > 1 &&
            console.warn(
              "You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."
            ),
          i.createElement(
            i.Fragment,
            null,
            v.size
              ? m
              : m.map(function (t) {
                  return (0, i.cloneElement)(t)
                })
          )
        )
      }
      function Va(t, e) {
        const r = (function (t, e = []) {
          const r = (0, i.useRef)(t)
          return (
            (0, i.useEffect)(() => {
              r.current = t
            }),
            (0, i.useCallback)((...t) => {
              var e
              return null == (e = r.current) ? void 0 : e.call(r, ...t)
            }, e)
          )
        })(t)
        ;(0, i.useEffect)(() => {
          if (null == e) return
          let t = null
          return (
            (t = window.setTimeout(() => {
              r()
            }, e)),
            () => {
              t && window.clearTimeout(t)
            }
          )
        }, [e, r])
      }
      function qa(t, e) {
        const r = (0, i.useRef)(!1),
          n = (0, i.useRef)(!1)
        ;(0, i.useEffect)(() => {
          if (r.current && n.current) return t()
          n.current = !0
        }, e),
          (0, i.useEffect)(
            () => (
              (r.current = !0),
              () => {
                r.current = !1
              }
            ),
            []
          )
      }
      function Ua() {
        var t = (0, i.useContext)(Ta)
        if (null === t) return [!0, null]
        var e = t.isPresent,
          r = t.onExitComplete,
          n = t.register,
          o = Fa()
        ;(0, i.useEffect)(function () {
          return n(o)
        }, [])
        return !e && r
          ? [
              !1,
              function () {
                return null === r || void 0 === r ? void 0 : r(o)
              },
            ]
          : [!0]
      }
      function Na() {
        return null === (t = (0, i.useContext)(Ta)) || t.isPresent
        var t
      }
      var Wa = function (t) {
          return {
            isEnabled: function (e) {
              return t.some(function (t) {
                return !!e[t]
              })
            },
          }
        },
        Ha = {
          measureLayout: Wa(['layout', 'layoutId', 'drag']),
          animation: Wa([
            'animate',
            'exit',
            'variants',
            'whileHover',
            'whileTap',
            'whileFocus',
            'whileDrag',
            'whileInView',
          ]),
          exit: Wa(['exit']),
          drag: Wa(['drag', 'dragControls']),
          focus: Wa(['whileFocus']),
          hover: Wa(['whileHover', 'onHoverStart', 'onHoverEnd']),
          tap: Wa(['whileTap', 'onTap', 'onTapStart', 'onTapCancel']),
          pan: Wa(['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd']),
          inView: Wa(['whileInView', 'onViewportEnter', 'onViewportLeave']),
        }
      var Qa = (0, i.createContext)({ strict: !1 }),
        Ga = Object.keys(Ha),
        Ka = Ga.length
      var Ya = (0, i.createContext)({
          transformPagePoint: function (t) {
            return t
          },
          isStatic: !1,
          reducedMotion: 'never',
        }),
        Xa = (0, i.createContext)({})
      var Za = { current: null },
        Ja = !1
      function ts() {
        return (
          !Ja &&
            (function () {
              if (((Ja = !0), Aa))
                if (window.matchMedia) {
                  var t = window.matchMedia('(prefers-reduced-motion)'),
                    e = function () {
                      return (Za.current = t.matches)
                    }
                  t.addListener(e), e()
                } else Za.current = !1
            })(),
          (0, sa.__read)((0, i.useState)(Za.current), 1)[0]
        )
      }
      function es(t, e, r, n) {
        var o = (0, i.useContext)(Qa),
          a = (0, i.useContext)(Xa).visualElement,
          s = (0, i.useContext)(Ta),
          u = (function () {
            var t = ts(),
              e = (0, i.useContext)(Ya).reducedMotion
            return 'never' !== e && ('always' === e || t)
          })(),
          l = (0, i.useRef)(void 0)
        n || (n = o.renderer),
          !l.current &&
            n &&
            (l.current = n(t, {
              visualState: e,
              parent: a,
              props: r,
              presenceId: null === s || void 0 === s ? void 0 : s.id,
              blockInitialAnimation:
                !1 === (null === s || void 0 === s ? void 0 : s.initial),
              shouldReduceMotion: u,
            }))
        var c = l.current
        return (
          Pa(function () {
            null === c || void 0 === c || c.syncRender()
          }),
          (0, i.useEffect)(function () {
            var t
            null ===
              (t = null === c || void 0 === c ? void 0 : c.animationState) ||
              void 0 === t ||
              t.animateChanges()
          }),
          Pa(function () {
            return function () {
              return null === c || void 0 === c ? void 0 : c.notifyUnmount()
            }
          }, []),
          c
        )
      }
      function rs(t) {
        return (
          'object' === typeof t &&
          Object.prototype.hasOwnProperty.call(t, 'current')
        )
      }
      function ns(t) {
        return Array.isArray(t)
      }
      function os(t) {
        return 'string' === typeof t || ns(t)
      }
      function is(t, e, r, n, o) {
        var i
        return (
          void 0 === n && (n = {}),
          void 0 === o && (o = {}),
          'function' === typeof e &&
            (e = e(null !== r && void 0 !== r ? r : t.custom, n, o)),
          'string' === typeof e &&
            (e = null === (i = t.variants) || void 0 === i ? void 0 : i[e]),
          'function' === typeof e &&
            (e = e(null !== r && void 0 !== r ? r : t.custom, n, o)),
          e
        )
      }
      function as(t, e, r) {
        var n = t.getProps()
        return is(
          n,
          e,
          null !== r && void 0 !== r ? r : n.custom,
          (function (t) {
            var e = {}
            return (
              t.forEachValue(function (t, r) {
                return (e[r] = t.get())
              }),
              e
            )
          })(t),
          (function (t) {
            var e = {}
            return (
              t.forEachValue(function (t, r) {
                return (e[r] = t.getVelocity())
              }),
              e
            )
          })(t)
        )
      }
      function ss(t) {
        var e
        return (
          'function' ===
            typeof (null === (e = t.animate) || void 0 === e
              ? void 0
              : e.start) ||
          os(t.initial) ||
          os(t.animate) ||
          os(t.whileHover) ||
          os(t.whileDrag) ||
          os(t.whileTap) ||
          os(t.whileFocus) ||
          os(t.exit)
        )
      }
      function us(t) {
        return Boolean(ss(t) || t.variants)
      }
      function ls(t) {
        var e = (function (t, e) {
            if (ss(t)) {
              var r = t.initial,
                n = t.animate
              return {
                initial: !1 === r || os(r) ? r : void 0,
                animate: os(n) ? n : void 0,
              }
            }
            return !1 !== t.inherit ? e : {}
          })(t, (0, i.useContext)(Xa)),
          r = e.initial,
          n = e.animate
        return (0, i.useMemo)(
          function () {
            return { initial: r, animate: n }
          },
          [cs(r), cs(n)]
        )
      }
      function cs(t) {
        return Array.isArray(t) ? t.join(' ') : t
      }
      var ds = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
        fs = 1
      var ps = (0, i.createContext)({})
      var hs = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return (
          (0, sa.__extends)(e, t),
          (e.prototype.getSnapshotBeforeUpdate = function () {
            return this.updateProps(), null
          }),
          (e.prototype.componentDidUpdate = function () {}),
          (e.prototype.updateProps = function () {
            var t = this.props,
              e = t.visualElement,
              r = t.props
            e && e.setProps(r)
          }),
          (e.prototype.render = function () {
            return this.props.children
          }),
          e
        )
      })(i.Component)
      function ms(t) {
        var e = t.preloadedFeatures,
          r = t.createVisualElement,
          n = t.projectionNodeConstructor,
          o = t.useRender,
          a = t.useVisualState,
          s = t.Component
        return (
          e &&
            (function (t) {
              for (var e in t)
                null !== t[e] &&
                  ('projectionNodeConstructor' === e
                    ? (Ha.projectionNodeConstructor = t[e])
                    : (Ha[e].Component = t[e]))
            })(e),
          (0, i.forwardRef)(function (t, u) {
            var l = (function (t) {
              var e,
                r = t.layoutId,
                n =
                  null === (e = (0, i.useContext)(za)) || void 0 === e
                    ? void 0
                    : e.id
              return n && void 0 !== r ? n + '-' + r : r
            })(t)
            t = (0, sa.__assign)((0, sa.__assign)({}, t), { layoutId: l })
            var c = (0, i.useContext)(Ya),
              d = null,
              f = ls(t),
              p = c.isStatic
                ? void 0
                : Ma(function () {
                    if (ds.hasEverUpdated) return fs++
                  }),
              h = a(t, c.isStatic)
            return (
              !c.isStatic &&
                Aa &&
                ((f.visualElement = es(
                  s,
                  h,
                  (0, sa.__assign)((0, sa.__assign)({}, c), t),
                  r
                )),
                (function (t, e, r, n) {
                  var o,
                    a = e.layoutId,
                    s = e.layout,
                    u = e.drag,
                    l = e.dragConstraints,
                    c = e.layoutScroll,
                    d = (0, i.useContext)(ps)
                  n &&
                    r &&
                    !(null === r || void 0 === r ? void 0 : r.projection) &&
                    ((r.projection = new n(
                      t,
                      r.getLatestValues(),
                      null === (o = r.parent) || void 0 === o
                        ? void 0
                        : o.projection
                    )),
                    r.projection.setOptions({
                      layoutId: a,
                      layout: s,
                      alwaysMeasureLayout: Boolean(u) || (l && rs(l)),
                      visualElement: r,
                      scheduleRender: function () {
                        return r.scheduleRender()
                      },
                      animationType: 'string' === typeof s ? s : 'both',
                      initialPromotionConfig: d,
                      layoutScroll: c,
                    }))
                })(p, t, f.visualElement, n || Ha.projectionNodeConstructor),
                (d = (function (t, e, r) {
                  var n = [],
                    o = (0, i.useContext)(Qa)
                  if (!e) return null
                  'production' !== la && r && o.strict
                  for (var a = 0; a < Ka; a++) {
                    var s = Ga[a],
                      u = Ha[s],
                      l = u.isEnabled,
                      c = u.Component
                    l(t) &&
                      c &&
                      n.push(
                        i.createElement(
                          c,
                          (0, sa.__assign)({ key: s }, t, { visualElement: e })
                        )
                      )
                  }
                  return n
                })(t, f.visualElement, e))),
              i.createElement(
                hs,
                {
                  visualElement: f.visualElement,
                  props: (0, sa.__assign)((0, sa.__assign)({}, c), t),
                },
                d,
                i.createElement(
                  Xa.Provider,
                  { value: f },
                  o(
                    s,
                    t,
                    p,
                    (function (t, e, r) {
                      return (0, i.useCallback)(
                        function (n) {
                          var o
                          n &&
                            (null === (o = t.mount) ||
                              void 0 === o ||
                              o.call(t, n)),
                            e && (n ? e.mount(n) : e.unmount()),
                            r &&
                              ('function' === typeof r
                                ? r(n)
                                : rs(r) && (r.current = n))
                        },
                        [e]
                      )
                    })(h, f.visualElement, u),
                    h,
                    c.isStatic,
                    f.visualElement
                  )
                )
              )
            )
          })
        )
      }
      function vs(t) {
        function e(e, r) {
          return void 0 === r && (r = {}), ms(t(e, r))
        }
        if ('undefined' === typeof Proxy) return e
        var r = new Map()
        return new Proxy(e, {
          get: function (t, n) {
            return r.has(n) || r.set(n, e(n)), r.get(n)
          },
        })
      }
      var gs = [
        'animate',
        'circle',
        'defs',
        'desc',
        'ellipse',
        'g',
        'image',
        'line',
        'filter',
        'marker',
        'mask',
        'metadata',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'rect',
        'stop',
        'svg',
        'switch',
        'symbol',
        'text',
        'tspan',
        'use',
        'view',
      ]
      function ys(t) {
        return (
          'string' === typeof t &&
          !t.includes('-') &&
          !!(gs.indexOf(t) > -1 || /[A-Z]/.test(t))
        )
      }
      var bs = {}
      var xs = ['', 'X', 'Y', 'Z'],
        Ss = ['transformPerspective', 'x', 'y', 'z']
      function ws(t, e) {
        return Ss.indexOf(t) - Ss.indexOf(e)
      }
      ;['translate', 'scale', 'rotate', 'skew'].forEach(function (t) {
        return xs.forEach(function (e) {
          return Ss.push(t + e)
        })
      })
      var ks = new Set(Ss)
      function Cs(t) {
        return ks.has(t)
      }
      var _s = new Set(['originX', 'originY', 'originZ'])
      function Es(t) {
        return _s.has(t)
      }
      function As(t, e) {
        var r = e.layout,
          n = e.layoutId
        return (
          Cs(t) ||
          Es(t) ||
          ((r || void 0 !== n) && (!!bs[t] || 'opacity' === t))
        )
      }
      var Ps = function (t) {
          return Boolean(null !== t && 'object' === typeof t && t.getVelocity)
        },
        Rs = {
          x: 'translateX',
          y: 'translateY',
          z: 'translateZ',
          transformPerspective: 'perspective',
        }
      function Ts(t) {
        return t.startsWith('--')
      }
      var Ms = function (t, e) {
        return e && 'number' === typeof t ? e.transform(t) : t
      }
      const Os = (t, e) => (r) => Math.max(Math.min(r, e), t),
        js = (t) => (t % 1 ? Number(t.toFixed(5)) : t),
        Fs = /(-)?([\d]*\.?[\d])+/g,
        Ds =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        Bs =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i
      function zs(t) {
        return 'string' === typeof t
      }
      const Is = (t) => ({
          test: (e) => zs(e) && e.endsWith(t) && 1 === e.split(' ').length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        $s = Is('deg'),
        Ls = Is('%'),
        Vs = Is('px'),
        qs = Is('vh'),
        Us = Is('vw'),
        Ns = Object.assign(Object.assign({}, Ls), {
          parse: (t) => Ls.parse(t) / 100,
          transform: (t) => Ls.transform(100 * t),
        }),
        Ws = {
          test: (t) => 'number' === typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        Hs = Object.assign(Object.assign({}, Ws), { transform: Os(0, 1) }),
        Qs = Object.assign(Object.assign({}, Ws), { default: 1 })
      var Gs = (0, sa.__assign)((0, sa.__assign)({}, Ws), {
          transform: Math.round,
        }),
        Ks = {
          borderWidth: Vs,
          borderTopWidth: Vs,
          borderRightWidth: Vs,
          borderBottomWidth: Vs,
          borderLeftWidth: Vs,
          borderRadius: Vs,
          radius: Vs,
          borderTopLeftRadius: Vs,
          borderTopRightRadius: Vs,
          borderBottomRightRadius: Vs,
          borderBottomLeftRadius: Vs,
          width: Vs,
          maxWidth: Vs,
          height: Vs,
          maxHeight: Vs,
          size: Vs,
          top: Vs,
          right: Vs,
          bottom: Vs,
          left: Vs,
          padding: Vs,
          paddingTop: Vs,
          paddingRight: Vs,
          paddingBottom: Vs,
          paddingLeft: Vs,
          margin: Vs,
          marginTop: Vs,
          marginRight: Vs,
          marginBottom: Vs,
          marginLeft: Vs,
          rotate: $s,
          rotateX: $s,
          rotateY: $s,
          rotateZ: $s,
          scale: Qs,
          scaleX: Qs,
          scaleY: Qs,
          scaleZ: Qs,
          skew: $s,
          skewX: $s,
          skewY: $s,
          distance: Vs,
          translateX: Vs,
          translateY: Vs,
          translateZ: Vs,
          x: Vs,
          y: Vs,
          z: Vs,
          perspective: Vs,
          transformPerspective: Vs,
          opacity: Hs,
          originX: Ns,
          originY: Ns,
          originZ: Vs,
          zIndex: Gs,
          fillOpacity: Hs,
          strokeOpacity: Hs,
          numOctaves: Gs,
        }
      function Ys(t, e, r, n) {
        var o,
          i = t.style,
          a = t.vars,
          s = t.transform,
          u = t.transformKeys,
          l = t.transformOrigin
        u.length = 0
        var c = !1,
          d = !1,
          f = !0
        for (var p in e) {
          var h = e[p]
          if (Ts(p)) a[p] = h
          else {
            var m = Ks[p],
              v = Ms(h, m)
            if (Cs(p)) {
              if (((c = !0), (s[p] = v), u.push(p), !f)) continue
              h !== (null !== (o = m.default) && void 0 !== o ? o : 0) &&
                (f = !1)
            } else Es(p) ? ((l[p] = v), (d = !0)) : (i[p] = v)
          }
        }
        c
          ? (i.transform = (function (t, e, r, n) {
              var o = t.transform,
                i = t.transformKeys,
                a = e.enableHardwareAcceleration,
                s = void 0 === a || a,
                u = e.allowTransformNone,
                l = void 0 === u || u,
                c = ''
              i.sort(ws)
              for (var d = !1, f = i.length, p = 0; p < f; p++) {
                var h = i[p]
                ;(c += ''.concat(Rs[h] || h, '(').concat(o[h], ') ')),
                  'z' === h && (d = !0)
              }
              return (
                !d && s ? (c += 'translateZ(0)') : (c = c.trim()),
                n ? (c = n(o, r ? '' : c)) : l && r && (c = 'none'),
                c
              )
            })(t, r, f, n))
          : n
          ? (i.transform = n({}, ''))
          : !e.transform && i.transform && (i.transform = 'none'),
          d &&
            (i.transformOrigin = (function (t) {
              var e = t.originX,
                r = void 0 === e ? '50%' : e,
                n = t.originY,
                o = void 0 === n ? '50%' : n,
                i = t.originZ,
                a = void 0 === i ? 0 : i
              return ''.concat(r, ' ').concat(o, ' ').concat(a)
            })(l))
      }
      var Xs = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        }
      }
      function Zs(t, e, r) {
        for (var n in e) Ps(e[n]) || As(n, r) || (t[n] = e[n])
      }
      function Js(t, e, r) {
        var n = {}
        return (
          Zs(n, t.style || {}, t),
          Object.assign(
            n,
            (function (t, e, r) {
              var n = t.transformTemplate
              return (0, i.useMemo)(
                function () {
                  var t = {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {},
                  }
                  Ys(t, e, { enableHardwareAcceleration: !r }, n)
                  var o = t.vars,
                    i = t.style
                  return (0, sa.__assign)((0, sa.__assign)({}, o), i)
                },
                [e]
              )
            })(t, e, r)
          ),
          t.transformValues && (n = t.transformValues(n)),
          n
        )
      }
      function tu(t, e, r) {
        var n = {},
          o = Js(t, e, r)
        return (
          Boolean(t.drag) &&
            !1 !== t.dragListener &&
            ((n.draggable = !1),
            (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = 'none'),
            (o.touchAction =
              !0 === t.drag
                ? 'none'
                : 'pan-'.concat('x' === t.drag ? 'y' : 'x'))),
          (n.style = o),
          n
        )
      }
      var eu = new Set([
        'initial',
        'animate',
        'exit',
        'style',
        'variants',
        'transition',
        'transformTemplate',
        'transformValues',
        'custom',
        'inherit',
        'layout',
        'layoutId',
        'layoutDependency',
        'onLayoutAnimationStart',
        'onLayoutAnimationComplete',
        'onLayoutMeasure',
        'onBeforeLayoutMeasure',
        'onAnimationStart',
        'onAnimationComplete',
        'onUpdate',
        'onDragStart',
        'onDrag',
        'onDragEnd',
        'onMeasureDragConstraints',
        'onDirectionLock',
        'onDragTransitionEnd',
        'drag',
        'dragControls',
        'dragListener',
        'dragConstraints',
        'dragDirectionLock',
        'dragSnapToOrigin',
        '_dragX',
        '_dragY',
        'dragElastic',
        'dragMomentum',
        'dragPropagation',
        'dragTransition',
        'whileDrag',
        'onPan',
        'onPanStart',
        'onPanEnd',
        'onPanSessionStart',
        'onTap',
        'onTapStart',
        'onTapCancel',
        'onHoverStart',
        'onHoverEnd',
        'whileFocus',
        'whileTap',
        'whileHover',
        'whileInView',
        'onViewportEnter',
        'onViewportLeave',
        'viewport',
        'layoutScroll',
      ])
      function ru(t) {
        return eu.has(t)
      }
      var nu,
        ou = function (t) {
          return !ru(t)
        }
      try {
        ;(nu = require('@emotion/is-prop-valid').default) &&
          (ou = function (t) {
            return t.startsWith('on') ? !ru(t) : nu(t)
          })
      } catch (En) {}
      function iu(t, e, r) {
        return 'string' === typeof t ? t : Vs.transform(e + r * t)
      }
      var au = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
        su = { offset: 'strokeDashoffset', array: 'strokeDasharray' }
      function uu(t, e, r, n) {
        var o = e.attrX,
          i = e.attrY,
          a = e.originX,
          s = e.originY,
          u = e.pathLength,
          l = e.pathSpacing,
          c = void 0 === l ? 1 : l,
          d = e.pathOffset,
          f = void 0 === d ? 0 : d
        Ys(
          t,
          (0, sa.__rest)(e, [
            'attrX',
            'attrY',
            'originX',
            'originY',
            'pathLength',
            'pathSpacing',
            'pathOffset',
          ]),
          r,
          n
        ),
          (t.attrs = t.style),
          (t.style = {})
        var p = t.attrs,
          h = t.style,
          m = t.dimensions
        p.transform && (m && (h.transform = p.transform), delete p.transform),
          m &&
            (void 0 !== a || void 0 !== s || h.transform) &&
            (h.transformOrigin = (function (t, e, r) {
              var n = iu(e, t.x, t.width),
                o = iu(r, t.y, t.height)
              return ''.concat(n, ' ').concat(o)
            })(m, void 0 !== a ? a : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== o && (p.x = o),
          void 0 !== i && (p.y = i),
          void 0 !== u &&
            (function (t, e, r, n, o) {
              void 0 === r && (r = 1),
                void 0 === n && (n = 0),
                void 0 === o && (o = !0),
                (t.pathLength = 1)
              var i = o ? au : su
              t[i.offset] = Vs.transform(-n)
              var a = Vs.transform(e),
                s = Vs.transform(r)
              t[i.array] = ''.concat(a, ' ').concat(s)
            })(p, u, c, f, !1)
      }
      var lu = function () {
        return (0, sa.__assign)(
          (0, sa.__assign)(
            {},
            {
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {},
            }
          ),
          { attrs: {} }
        )
      }
      function cu(t, e) {
        var r = (0, i.useMemo)(
          function () {
            var r = lu()
            return (
              uu(r, e, { enableHardwareAcceleration: !1 }, t.transformTemplate),
              (0, sa.__assign)((0, sa.__assign)({}, r.attrs), {
                style: (0, sa.__assign)({}, r.style),
              })
            )
          },
          [e]
        )
        if (t.style) {
          var n = {}
          Zs(n, t.style, t),
            (r.style = (0, sa.__assign)((0, sa.__assign)({}, n), r.style))
        }
        return r
      }
      function du(t) {
        void 0 === t && (t = !1)
        return function (e, r, n, o, a, s) {
          var u = a.latestValues,
            l = (ys(e) ? cu : tu)(r, u, s),
            c = (function (t, e, r) {
              var n = {}
              for (var o in t)
                (ou(o) ||
                  (!0 === r && ru(o)) ||
                  (!e && !ru(o)) ||
                  (t.draggable && o.startsWith('onDrag'))) &&
                  (n[o] = t[o])
              return n
            })(r, 'string' === typeof e, t),
            d = (0, sa.__assign)((0, sa.__assign)((0, sa.__assign)({}, c), l), {
              ref: o,
            })
          return n && (d['data-projection-id'] = n), (0, i.createElement)(e, d)
        }
      }
      var fu = /([a-z])([A-Z])/g,
        pu = function (t) {
          return t.replace(fu, '$1-$2').toLowerCase()
        }
      function hu(t, e, r, n) {
        var o = e.style,
          i = e.vars
        for (var a in (Object.assign(t.style, o, n && n.getProjectionStyles(r)),
        i))
          t.style.setProperty(a, i[a])
      }
      var mu = new Set([
        'baseFrequency',
        'diffuseConstant',
        'kernelMatrix',
        'kernelUnitLength',
        'keySplines',
        'keyTimes',
        'limitingConeAngle',
        'markerHeight',
        'markerWidth',
        'numOctaves',
        'targetX',
        'targetY',
        'surfaceScale',
        'specularConstant',
        'specularExponent',
        'stdDeviation',
        'tableValues',
        'viewBox',
        'gradientTransform',
        'pathLength',
      ])
      function vu(t, e, r, n) {
        for (var o in (hu(t, e, void 0, n), e.attrs))
          t.setAttribute(mu.has(o) ? o : pu(o), e.attrs[o])
      }
      function gu(t) {
        var e = t.style,
          r = {}
        for (var n in e) (Ps(e[n]) || As(n, t)) && (r[n] = e[n])
        return r
      }
      function yu(t) {
        var e = gu(t)
        for (var r in t) {
          if (Ps(t[r]))
            e['x' === r || 'y' === r ? 'attr' + r.toUpperCase() : r] = t[r]
        }
        return e
      }
      function bu(t) {
        return 'object' === typeof t && 'function' === typeof t.start
      }
      var xu = function (t) {
          return Array.isArray(t)
        },
        Su = function (t) {
          return xu(t) ? t[t.length - 1] || 0 : t
        }
      function wu(t) {
        var e,
          r = Ps(t) ? t.get() : t
        return (
          (e = r),
          Boolean(e && 'object' === typeof e && e.mix && e.toValue)
            ? r.toValue()
            : r
        )
      }
      function ku(t, e, r, n) {
        var o = t.scrapeMotionValuesFromProps,
          i = t.createRenderState,
          a = t.onMount,
          s = { latestValues: _u(e, r, n, o), renderState: i() }
        return (
          a &&
            (s.mount = function (t) {
              return a(e, t, s)
            }),
          s
        )
      }
      var Cu = function (t) {
        return function (e, r) {
          var n = (0, i.useContext)(Xa),
            o = (0, i.useContext)(Ta)
          return r
            ? ku(t, e, n, o)
            : Ma(function () {
                return ku(t, e, n, o)
              })
        }
      }
      function _u(t, e, r, n) {
        var o = {},
          i = !1 === (null === r || void 0 === r ? void 0 : r.initial),
          a = n(t)
        for (var s in a) o[s] = wu(a[s])
        var u = t.initial,
          l = t.animate,
          c = ss(t),
          d = us(t)
        e &&
          d &&
          !c &&
          !1 !== t.inherit &&
          ((null !== u && void 0 !== u) || (u = e.initial),
          (null !== l && void 0 !== l) || (l = e.animate))
        var f = i || !1 === u,
          p = f ? l : u
        p &&
          'boolean' !== typeof p &&
          !bu(p) &&
          (Array.isArray(p) ? p : [p]).forEach(function (e) {
            var r = is(t, e)
            if (r) {
              var n = r.transitionEnd
              r.transition
              var i = (0, sa.__rest)(r, ['transitionEnd', 'transition'])
              for (var a in i) {
                var s = i[a]
                if (Array.isArray(s)) s = s[f ? s.length - 1 : 0]
                null !== s && (o[a] = s)
              }
              for (var a in n) o[a] = n[a]
            }
          })
        return o
      }
      var Eu,
        Au = {
          useVisualState: Cu({
            scrapeMotionValuesFromProps: yu,
            createRenderState: lu,
            onMount: function (t, e, r) {
              var n = r.renderState,
                o = r.latestValues
              try {
                n.dimensions =
                  'function' === typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect()
              } catch (i) {
                n.dimensions = { x: 0, y: 0, width: 0, height: 0 }
              }
              uu(n, o, { enableHardwareAcceleration: !1 }, t.transformTemplate),
                vu(e, n)
            },
          }),
        },
        Pu = {
          useVisualState: Cu({
            scrapeMotionValuesFromProps: gu,
            createRenderState: Xs,
          }),
        }
      function Ru(t, e, r, n) {
        return (
          void 0 === n && (n = { passive: !0 }),
          t.addEventListener(e, r, n),
          function () {
            return t.removeEventListener(e, r)
          }
        )
      }
      function Tu(t, e, r, n) {
        ;(0, i.useEffect)(
          function () {
            var o = t.current
            if (r && o) return Ru(o, e, r, n)
          },
          [t, e, r, n]
        )
      }
      function Mu(t) {
        return 'undefined' !== typeof PointerEvent && t instanceof PointerEvent
          ? !('mouse' !== t.pointerType)
          : t instanceof MouseEvent
      }
      function Ou(t) {
        return !!t.touches
      }
      !(function (t) {
        ;(t.Animate = 'animate'),
          (t.Hover = 'whileHover'),
          (t.Tap = 'whileTap'),
          (t.Drag = 'whileDrag'),
          (t.Focus = 'whileFocus'),
          (t.InView = 'whileInView'),
          (t.Exit = 'exit')
      })(Eu || (Eu = {}))
      var ju = { pageX: 0, pageY: 0 }
      function Fu(t, e) {
        void 0 === e && (e = 'page')
        var r = t.touches[0] || t.changedTouches[0] || ju
        return { x: r[e + 'X'], y: r[e + 'Y'] }
      }
      function Du(t, e) {
        return void 0 === e && (e = 'page'), { x: t[e + 'X'], y: t[e + 'Y'] }
      }
      function Bu(t, e) {
        return (
          void 0 === e && (e = 'page'), { point: Ou(t) ? Fu(t, e) : Du(t, e) }
        )
      }
      var zu = function (t, e) {
          void 0 === e && (e = !1)
          var r,
            n = function (e) {
              return t(e, Bu(e))
            }
          return e
            ? ((r = n),
              function (t) {
                var e = t instanceof MouseEvent
                ;(!e || (e && 0 === t.button)) && r(t)
              })
            : n
        },
        Iu = {
          pointerdown: 'mousedown',
          pointermove: 'mousemove',
          pointerup: 'mouseup',
          pointercancel: 'mousecancel',
          pointerover: 'mouseover',
          pointerout: 'mouseout',
          pointerenter: 'mouseenter',
          pointerleave: 'mouseleave',
        },
        $u = {
          pointerdown: 'touchstart',
          pointermove: 'touchmove',
          pointerup: 'touchend',
          pointercancel: 'touchcancel',
        }
      function Lu(t) {
        return Aa && null === window.onpointerdown
          ? t
          : Aa && null === window.ontouchstart
          ? $u[t]
          : Aa && null === window.onmousedown
          ? Iu[t]
          : t
      }
      function Vu(t, e, r, n) {
        return Ru(t, Lu(e), zu(r, 'pointerdown' === e), n)
      }
      function qu(t, e, r, n) {
        return Tu(t, Lu(e), r && zu(r, 'pointerdown' === e), n)
      }
      function Uu(t) {
        var e = null
        return function () {
          return (
            null === e &&
            ((e = t),
            function () {
              e = null
            })
          )
        }
      }
      var Nu = Uu('dragHorizontal'),
        Wu = Uu('dragVertical')
      function Hu(t) {
        var e = !1
        if ('y' === t) e = Wu()
        else if ('x' === t) e = Nu()
        else {
          var r = Nu(),
            n = Wu()
          r && n
            ? (e = function () {
                r(), n()
              })
            : (r && r(), n && n())
        }
        return e
      }
      function Qu() {
        var t = Hu(!0)
        return !t || (t(), !1)
      }
      function Gu(t, e, r) {
        return function (n, o) {
          var i
          Mu(n) &&
            !Qu() &&
            (null === (i = t.animationState) ||
              void 0 === i ||
              i.setActive(Eu.Hover, e),
            null === r || void 0 === r || r(n, o))
        }
      }
      var Ku = function (t, e) {
        return !!e && (t === e || Ku(t, e.parentElement))
      }
      const Yu = (t, e) => (r) => e(t(r)),
        Xu = (...t) => t.reduce(Yu)
      var Zu = new Set()
      var Ju = new WeakMap(),
        tl = new WeakMap(),
        el = function (t) {
          var e
          null === (e = Ju.get(t.target)) || void 0 === e || e(t)
        },
        rl = function (t) {
          t.forEach(el)
        }
      function nl(t, e, r) {
        var n = (function (t) {
          var e = t.root,
            r = (0, sa.__rest)(t, ['root']),
            n = e || document
          tl.has(n) || tl.set(n, {})
          var o = tl.get(n),
            i = JSON.stringify(r)
          return (
            o[i] ||
              (o[i] = new IntersectionObserver(
                rl,
                (0, sa.__assign)({ root: e }, r)
              )),
            o[i]
          )
        })(e)
        return (
          Ju.set(t, r),
          n.observe(t),
          function () {
            Ju.delete(t), n.unobserve(t)
          }
        )
      }
      var ol = { some: 0, all: 1 }
      function il(t, e, r, n) {
        var o = n.root,
          a = n.margin,
          s = n.amount,
          u = void 0 === s ? 'some' : s,
          l = n.once
        ;(0, i.useEffect)(
          function () {
            if (t) {
              var n = {
                root: null === o || void 0 === o ? void 0 : o.current,
                rootMargin: a,
                threshold: 'number' === typeof u ? u : ol[u],
              }
              return nl(r.getInstance(), n, function (t) {
                var n,
                  o = t.isIntersecting
                if (
                  e.isInView !== o &&
                  ((e.isInView = o), !l || o || !e.hasEnteredView)
                ) {
                  o && (e.hasEnteredView = !0),
                    null === (n = r.animationState) ||
                      void 0 === n ||
                      n.setActive(Eu.InView, o)
                  var i = r.getProps(),
                    a = o ? i.onViewportEnter : i.onViewportLeave
                  null === a || void 0 === a || a(t)
                }
              })
            }
          },
          [t, o, a, u]
        )
      }
      function al(t, e, r, n) {
        var o = n.fallback,
          a = void 0 === o || o
        ;(0, i.useEffect)(
          function () {
            var n, o
            t &&
              a &&
              ('production' !== la &&
                ((n =
                  'IntersectionObserver not available on this device. whileInView animations will trigger on mount.'),
                !1 ||
                  Zu.has(n) ||
                  (console.warn(n), o && console.warn(o), Zu.add(n))),
              requestAnimationFrame(function () {
                var t
                e.hasEnteredView = !0
                var n = r.getProps().onViewportEnter
                null === n || void 0 === n || n(null),
                  null === (t = r.animationState) ||
                    void 0 === t ||
                    t.setActive(Eu.InView, !0)
              }))
          },
          [t]
        )
      }
      var sl = function (t) {
          return function (e) {
            return t(e), null
          }
        },
        ul = {
          inView: sl(function (t) {
            var e = t.visualElement,
              r = t.whileInView,
              n = t.onViewportEnter,
              o = t.onViewportLeave,
              a = t.viewport,
              s = void 0 === a ? {} : a,
              u = (0, i.useRef)({ hasEnteredView: !1, isInView: !1 }),
              l = Boolean(r || n || o)
            s.once && u.current.hasEnteredView && (l = !1),
              ('undefined' === typeof IntersectionObserver ? al : il)(
                l,
                u.current,
                e,
                s
              )
          }),
          tap: sl(function (t) {
            var e = t.onTap,
              r = t.onTapStart,
              n = t.onTapCancel,
              o = t.whileTap,
              a = t.visualElement,
              s = e || r || n || o,
              u = (0, i.useRef)(!1),
              l = (0, i.useRef)(null),
              c = { passive: !(r || e || n || m) }
            function d() {
              var t
              null === (t = l.current) || void 0 === t || t.call(l),
                (l.current = null)
            }
            function f() {
              var t
              return (
                d(),
                (u.current = !1),
                null === (t = a.animationState) ||
                  void 0 === t ||
                  t.setActive(Eu.Tap, !1),
                !Qu()
              )
            }
            function p(t, r) {
              f() &&
                (Ku(a.getInstance(), t.target)
                  ? null === e || void 0 === e || e(t, r)
                  : null === n || void 0 === n || n(t, r))
            }
            function h(t, e) {
              f() && (null === n || void 0 === n || n(t, e))
            }
            function m(t, e) {
              var n
              d(),
                u.current ||
                  ((u.current = !0),
                  (l.current = Xu(
                    Vu(window, 'pointerup', p, c),
                    Vu(window, 'pointercancel', h, c)
                  )),
                  null === (n = a.animationState) ||
                    void 0 === n ||
                    n.setActive(Eu.Tap, !0),
                  null === r || void 0 === r || r(t, e))
            }
            qu(a, 'pointerdown', s ? m : void 0, c), Ia(d)
          }),
          focus: sl(function (t) {
            var e = t.whileFocus,
              r = t.visualElement
            Tu(
              r,
              'focus',
              e
                ? function () {
                    var t
                    null === (t = r.animationState) ||
                      void 0 === t ||
                      t.setActive(Eu.Focus, !0)
                  }
                : void 0
            ),
              Tu(
                r,
                'blur',
                e
                  ? function () {
                      var t
                      null === (t = r.animationState) ||
                        void 0 === t ||
                        t.setActive(Eu.Focus, !1)
                    }
                  : void 0
              )
          }),
          hover: sl(function (t) {
            var e = t.onHoverStart,
              r = t.onHoverEnd,
              n = t.whileHover,
              o = t.visualElement
            qu(o, 'pointerenter', e || n ? Gu(o, !0, e) : void 0, {
              passive: !e,
            }),
              qu(o, 'pointerleave', r || n ? Gu(o, !1, r) : void 0, {
                passive: !r,
              })
          }),
        }
      function ll(t, e) {
        if (!Array.isArray(e)) return !1
        var r = e.length
        if (r !== t.length) return !1
        for (var n = 0; n < r; n++) if (e[n] !== t[n]) return !1
        return !0
      }
      const cl = (t, e, r) => Math.min(Math.max(r, t), e),
        dl = 0.001
      function fl({
        duration: t = 800,
        bounce: e = 0.25,
        velocity: r = 0,
        mass: n = 1,
      }) {
        let o,
          i,
          a = 1 - e
        ;(a = cl(0.05, 1, a)),
          (t = cl(0.01, 10, t / 1e3)),
          a < 1
            ? ((o = (e) => {
                const n = e * a,
                  o = n * t,
                  i = n - r,
                  s = pl(e, a),
                  u = Math.exp(-o)
                return dl - (i / s) * u
              }),
              (i = (e) => {
                const n = e * a * t,
                  i = n * r + r,
                  s = Math.pow(a, 2) * Math.pow(e, 2) * t,
                  u = Math.exp(-n),
                  l = pl(Math.pow(e, 2), a)
                return ((-o(e) + dl > 0 ? -1 : 1) * ((i - s) * u)) / l
              }))
            : ((o = (e) => Math.exp(-e * t) * ((e - r) * t + 1) - 0.001),
              (i = (e) => Math.exp(-e * t) * (t * t * (r - e))))
        const s = (function (t, e, r) {
          let n = r
          for (let o = 1; o < 12; o++) n -= t(n) / e(n)
          return n
        })(o, i, 5 / t)
        if (((t *= 1e3), isNaN(s)))
          return { stiffness: 100, damping: 10, duration: t }
        {
          const e = Math.pow(s, 2) * n
          return {
            stiffness: e,
            damping: 2 * a * Math.sqrt(n * e),
            duration: t,
          }
        }
      }
      function pl(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      const hl = ['duration', 'bounce'],
        ml = ['stiffness', 'damping', 'mass']
      function vl(t, e) {
        return e.some((e) => void 0 !== t[e])
      }
      function gl(t) {
        var { from: e = 0, to: r = 1, restSpeed: n = 2, restDelta: o } = t,
          i = (0, sa.__rest)(t, ['from', 'to', 'restSpeed', 'restDelta'])
        const a = { done: !1, value: e }
        let {
            stiffness: s,
            damping: u,
            mass: l,
            velocity: c,
            duration: d,
            isResolvedFromDuration: f,
          } = (function (t) {
            let e = Object.assign(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              t
            )
            if (!vl(t, ml) && vl(t, hl)) {
              const r = fl(t)
              ;(e = Object.assign(Object.assign(Object.assign({}, e), r), {
                velocity: 0,
                mass: 1,
              })),
                (e.isResolvedFromDuration = !0)
            }
            return e
          })(i),
          p = yl,
          h = yl
        function m() {
          const t = c ? -c / 1e3 : 0,
            n = r - e,
            i = u / (2 * Math.sqrt(s * l)),
            a = Math.sqrt(s / l) / 1e3
          if (
            (void 0 === o && (o = Math.min(Math.abs(r - e) / 100, 0.4)), i < 1)
          ) {
            const e = pl(a, i)
            ;(p = (o) => {
              const s = Math.exp(-i * a * o)
              return (
                r -
                s *
                  (((t + i * a * n) / e) * Math.sin(e * o) +
                    n * Math.cos(e * o))
              )
            }),
              (h = (r) => {
                const o = Math.exp(-i * a * r)
                return (
                  i *
                    a *
                    o *
                    ((Math.sin(e * r) * (t + i * a * n)) / e +
                      n * Math.cos(e * r)) -
                  o *
                    (Math.cos(e * r) * (t + i * a * n) -
                      e * n * Math.sin(e * r))
                )
              })
          } else if (1 === i)
            p = (e) => r - Math.exp(-a * e) * (n + (t + a * n) * e)
          else {
            const e = a * Math.sqrt(i * i - 1)
            p = (o) => {
              const s = Math.exp(-i * a * o),
                u = Math.min(e * o, 300)
              return (
                r -
                (s * ((t + i * a * n) * Math.sinh(u) + e * n * Math.cosh(u))) /
                  e
              )
            }
          }
        }
        return (
          m(),
          {
            next: (t) => {
              const e = p(t)
              if (f) a.done = t >= d
              else {
                const i = 1e3 * h(t),
                  s = Math.abs(i) <= n,
                  u = Math.abs(r - e) <= o
                a.done = s && u
              }
              return (a.value = a.done ? r : e), a
            },
            flipTarget: () => {
              ;(c = -c), ([e, r] = [r, e]), m()
            },
          }
        )
      }
      gl.needsInterpolation = (t, e) =>
        'string' === typeof t || 'string' === typeof e
      const yl = (t) => 0,
        bl = (t, e, r) => {
          const n = e - t
          return 0 === n ? 1 : (r - t) / n
        },
        xl = (t, e, r) => -r * t + r * e + t,
        Sl = (t, e) => (r) =>
          Boolean(
            (zs(r) && Bs.test(r) && r.startsWith(t)) ||
              (e && Object.prototype.hasOwnProperty.call(r, e))
          ),
        wl = (t, e, r) => (n) => {
          if (!zs(n)) return n
          const [o, i, a, s] = n.match(Fs)
          return {
            [t]: parseFloat(o),
            [e]: parseFloat(i),
            [r]: parseFloat(a),
            alpha: void 0 !== s ? parseFloat(s) : 1,
          }
        },
        kl = Os(0, 255),
        Cl = Object.assign(Object.assign({}, Ws), {
          transform: (t) => Math.round(kl(t)),
        }),
        _l = {
          test: Sl('rgb', 'red'),
          parse: wl('red', 'green', 'blue'),
          transform: ({ red: t, green: e, blue: r, alpha: n = 1 }) =>
            'rgba(' +
            Cl.transform(t) +
            ', ' +
            Cl.transform(e) +
            ', ' +
            Cl.transform(r) +
            ', ' +
            js(Hs.transform(n)) +
            ')',
        }
      const El = {
          test: Sl('#'),
          parse: function (t) {
            let e = '',
              r = '',
              n = '',
              o = ''
            return (
              t.length > 5
                ? ((e = t.substr(1, 2)),
                  (r = t.substr(3, 2)),
                  (n = t.substr(5, 2)),
                  (o = t.substr(7, 2)))
                : ((e = t.substr(1, 1)),
                  (r = t.substr(2, 1)),
                  (n = t.substr(3, 1)),
                  (o = t.substr(4, 1)),
                  (e += e),
                  (r += r),
                  (n += n),
                  (o += o)),
              {
                red: parseInt(e, 16),
                green: parseInt(r, 16),
                blue: parseInt(n, 16),
                alpha: o ? parseInt(o, 16) / 255 : 1,
              }
            )
          },
          transform: _l.transform,
        },
        Al = {
          test: Sl('hsl', 'hue'),
          parse: wl('hue', 'saturation', 'lightness'),
          transform: ({ hue: t, saturation: e, lightness: r, alpha: n = 1 }) =>
            'hsla(' +
            Math.round(t) +
            ', ' +
            Ls.transform(js(e)) +
            ', ' +
            Ls.transform(js(r)) +
            ', ' +
            js(Hs.transform(n)) +
            ')',
        }
      function Pl(t, e, r) {
        return (
          r < 0 && (r += 1),
          r > 1 && (r -= 1),
          r < 1 / 6
            ? t + 6 * (e - t) * r
            : r < 0.5
            ? e
            : r < 2 / 3
            ? t + (e - t) * (2 / 3 - r) * 6
            : t
        )
      }
      function Rl({ hue: t, saturation: e, lightness: r, alpha: n }) {
        ;(t /= 360), (r /= 100)
        let o = 0,
          i = 0,
          a = 0
        if ((e /= 100)) {
          const n = r < 0.5 ? r * (1 + e) : r + e - r * e,
            s = 2 * r - n
          ;(o = Pl(s, n, t + 1 / 3)),
            (i = Pl(s, n, t)),
            (a = Pl(s, n, t - 1 / 3))
        } else o = i = a = r
        return {
          red: Math.round(255 * o),
          green: Math.round(255 * i),
          blue: Math.round(255 * a),
          alpha: n,
        }
      }
      const Tl = (t, e, r) => {
          const n = t * t,
            o = e * e
          return Math.sqrt(Math.max(0, r * (o - n) + n))
        },
        Ml = [El, _l, Al],
        Ol = (t) => Ml.find((e) => e.test(t)),
        jl = (t) =>
          `'${t}' is not an animatable color. Use the equivalent color code instead.`,
        Fl = (t, e) => {
          let r = Ol(t),
            n = Ol(e)
          jl(t), jl(e)
          let o = r.parse(t),
            i = n.parse(e)
          r === Al && ((o = Rl(o)), (r = _l)),
            n === Al && ((i = Rl(i)), (n = _l))
          const a = Object.assign({}, o)
          return (t) => {
            for (const e in a) 'alpha' !== e && (a[e] = Tl(o[e], i[e], t))
            return (a.alpha = xl(o.alpha, i.alpha, t)), r.transform(a)
          }
        },
        Dl = {
          test: (t) => _l.test(t) || El.test(t) || Al.test(t),
          parse: (t) =>
            _l.test(t) ? _l.parse(t) : Al.test(t) ? Al.parse(t) : El.parse(t),
          transform: (t) =>
            zs(t)
              ? t
              : t.hasOwnProperty('red')
              ? _l.transform(t)
              : Al.transform(t),
        },
        Bl = '${c}',
        zl = '${n}'
      function Il(t) {
        'number' === typeof t && (t = `${t}`)
        const e = []
        let r = 0
        const n = t.match(Ds)
        n &&
          ((r = n.length), (t = t.replace(Ds, Bl)), e.push(...n.map(Dl.parse)))
        const o = t.match(Fs)
        return (
          o && ((t = t.replace(Fs, zl)), e.push(...o.map(Ws.parse))),
          { values: e, numColors: r, tokenised: t }
        )
      }
      function $l(t) {
        return Il(t).values
      }
      function Ll(t) {
        const { values: e, numColors: r, tokenised: n } = Il(t),
          o = e.length
        return (t) => {
          let e = n
          for (let n = 0; n < o; n++)
            e = e.replace(
              n < r ? Bl : zl,
              n < r ? Dl.transform(t[n]) : js(t[n])
            )
          return e
        }
      }
      const Vl = (t) => ('number' === typeof t ? 0 : t)
      const ql = {
          test: function (t) {
            var e, r, n, o
            return (
              isNaN(t) &&
              zs(t) &&
              (null !==
                (r =
                  null === (e = t.match(Fs)) || void 0 === e
                    ? void 0
                    : e.length) && void 0 !== r
                ? r
                : 0) +
                (null !==
                  (o =
                    null === (n = t.match(Ds)) || void 0 === n
                      ? void 0
                      : n.length) && void 0 !== o
                  ? o
                  : 0) >
                0
            )
          },
          parse: $l,
          createTransformer: Ll,
          getAnimatableNone: function (t) {
            const e = $l(t)
            return Ll(t)(e.map(Vl))
          },
        },
        Ul = (t) => 'number' === typeof t
      function Nl(t, e) {
        return Ul(t) ? (r) => xl(t, e, r) : Dl.test(t) ? Fl(t, e) : Gl(t, e)
      }
      const Wl = (t, e) => {
          const r = [...t],
            n = r.length,
            o = t.map((t, r) => Nl(t, e[r]))
          return (t) => {
            for (let e = 0; e < n; e++) r[e] = o[e](t)
            return r
          }
        },
        Hl = (t, e) => {
          const r = Object.assign(Object.assign({}, t), e),
            n = {}
          for (const o in r)
            void 0 !== t[o] && void 0 !== e[o] && (n[o] = Nl(t[o], e[o]))
          return (t) => {
            for (const e in n) r[e] = n[e](t)
            return r
          }
        }
      function Ql(t) {
        const e = ql.parse(t),
          r = e.length
        let n = 0,
          o = 0,
          i = 0
        for (let a = 0; a < r; a++)
          n || 'number' === typeof e[a] ? n++ : void 0 !== e[a].hue ? i++ : o++
        return { parsed: e, numNumbers: n, numRGB: o, numHSL: i }
      }
      const Gl = (t, e) => {
          const r = ql.createTransformer(e),
            n = Ql(t),
            o = Ql(e)
          return n.numHSL === o.numHSL &&
            n.numRGB === o.numRGB &&
            n.numNumbers >= o.numNumbers
            ? Xu(Wl(n.parsed, o.parsed), r)
            : (r) => `${r > 0 ? e : t}`
        },
        Kl = (t, e) => (r) => xl(t, e, r)
      function Yl(t, e, r) {
        const n = [],
          o =
            r ||
            ('number' === typeof (i = t[0])
              ? Kl
              : 'string' === typeof i
              ? Dl.test(i)
                ? Fl
                : Gl
              : Array.isArray(i)
              ? Wl
              : 'object' === typeof i
              ? Hl
              : void 0)
        var i
        const a = t.length - 1
        for (let s = 0; s < a; s++) {
          let r = o(t[s], t[s + 1])
          if (e) {
            const t = Array.isArray(e) ? e[s] : e
            r = Xu(t, r)
          }
          n.push(r)
        }
        return n
      }
      function Xl(t, e, { clamp: r = !0, ease: n, mixer: o } = {}) {
        const i = t.length
        e.length,
          !n || !Array.isArray(n) || n.length,
          t[0] > t[i - 1] &&
            ((t = [].concat(t)), (e = [].concat(e)), t.reverse(), e.reverse())
        const a = Yl(e, n, o),
          s =
            2 === i
              ? (function ([t, e], [r]) {
                  return (n) => r(bl(t, e, n))
                })(t, a)
              : (function (t, e) {
                  const r = t.length,
                    n = r - 1
                  return (o) => {
                    let i = 0,
                      a = !1
                    if (
                      (o <= t[0]
                        ? (a = !0)
                        : o >= t[n] && ((i = n - 1), (a = !0)),
                      !a)
                    ) {
                      let e = 1
                      for (; e < r && !(t[e] > o || e === n); e++);
                      i = e - 1
                    }
                    const s = bl(t[i], t[i + 1], o)
                    return e[i](s)
                  }
                })(t, a)
        return r ? (e) => s(cl(t[0], t[i - 1], e)) : s
      }
      const Zl = (t) => (e) => 1 - t(1 - e),
        Jl = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        tc = (t) => (e) => e * e * ((t + 1) * e - t),
        ec = (t) => t,
        rc = ((nc = 2), (t) => Math.pow(t, nc))
      var nc
      const oc = Zl(rc),
        ic = Jl(rc),
        ac = (t) => 1 - Math.sin(Math.acos(t)),
        sc = Zl(ac),
        uc = Jl(sc),
        lc = tc(1.525),
        cc = Zl(lc),
        dc = Jl(lc),
        fc = ((t) => {
          const e = tc(t)
          return (t) =>
            (t *= 2) < 1 ? 0.5 * e(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))
        })(1.525),
        pc = (t) => {
          if (1 === t || 0 === t) return t
          const e = t * t
          return t < 0.36363636363636365
            ? 7.5625 * e
            : t < 0.7272727272727273
            ? 9.075 * e - 9.9 * t + 3.4
            : t < 0.9
            ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255
            : 10.8 * t * t - 20.52 * t + 10.72
        },
        hc = Zl(pc)
      function mc(t, e) {
        return t.map(() => e || ic).splice(0, t.length - 1)
      }
      function vc({
        from: t = 0,
        to: e = 1,
        ease: r,
        offset: n,
        duration: o = 300,
      }) {
        const i = { done: !1, value: t },
          a = Array.isArray(e) ? e : [t, e],
          s = (function (t, e) {
            return t.map((t) => t * e)
          })(
            n && n.length === a.length
              ? n
              : (function (t) {
                  const e = t.length
                  return t.map((t, r) => (0 !== r ? r / (e - 1) : 0))
                })(a),
            o
          )
        function u() {
          return Xl(s, a, { ease: Array.isArray(r) ? r : mc(a, r) })
        }
        let l = u()
        return {
          next: (t) => ((i.value = l(t)), (i.done = t >= o), i),
          flipTarget: () => {
            a.reverse(), (l = u())
          },
        }
      }
      const gc = {
        keyframes: vc,
        spring: gl,
        decay: function ({
          velocity: t = 0,
          from: e = 0,
          power: r = 0.8,
          timeConstant: n = 350,
          restDelta: o = 0.5,
          modifyTarget: i,
        }) {
          const a = { done: !1, value: e }
          let s = r * t
          const u = e + s,
            l = void 0 === i ? u : i(u)
          return (
            l !== u && (s = l - e),
            {
              next: (t) => {
                const e = -s * Math.exp(-t / n)
                return (
                  (a.done = !(e > o || e < -o)),
                  (a.value = a.done ? l : l + e),
                  a
                )
              },
              flipTarget: () => {},
            }
          )
        },
      }
      function yc(t, e, r = 0) {
        return t - e - r
      }
      const bc = (t) => {
        const e = ({ delta: e }) => t(e)
        return { start: () => Ea.update(e, !0), stop: () => xa.update(e) }
      }
      function xc(t) {
        var e,
          r,
          {
            from: n,
            autoplay: o = !0,
            driver: i = bc,
            elapsed: a = 0,
            repeat: s = 0,
            repeatType: u = 'loop',
            repeatDelay: l = 0,
            onPlay: c,
            onStop: d,
            onComplete: f,
            onRepeat: p,
            onUpdate: h,
          } = t,
          m = (0, sa.__rest)(t, [
            'from',
            'autoplay',
            'driver',
            'elapsed',
            'repeat',
            'repeatType',
            'repeatDelay',
            'onPlay',
            'onStop',
            'onComplete',
            'onRepeat',
            'onUpdate',
          ])
        let v,
          g,
          y,
          { to: b } = m,
          x = 0,
          S = m.duration,
          w = !1,
          k = !0
        const C = (function (t) {
          if (Array.isArray(t.to)) return vc
          if (gc[t.type]) return gc[t.type]
          const e = new Set(Object.keys(t))
          return e.has('ease') || (e.has('duration') && !e.has('dampingRatio'))
            ? vc
            : e.has('dampingRatio') ||
              e.has('stiffness') ||
              e.has('mass') ||
              e.has('damping') ||
              e.has('restSpeed') ||
              e.has('restDelta')
            ? gl
            : vc
        })(m)
        ;(null === (r = (e = C).needsInterpolation) || void 0 === r
          ? void 0
          : r.call(e, n, b)) &&
          ((y = Xl([0, 100], [n, b], { clamp: !1 })), (n = 0), (b = 100))
        const _ = C(Object.assign(Object.assign({}, m), { from: n, to: b }))
        function E() {
          x++,
            'reverse' === u
              ? ((k = x % 2 === 0),
                (a = (function (t, e, r = 0, n = !0) {
                  return n ? yc(e + -t, e, r) : e - (t - e) + r
                })(a, S, l, k)))
              : ((a = yc(a, S, l)), 'mirror' === u && _.flipTarget()),
            (w = !1),
            p && p()
        }
        function A(t) {
          if ((k || (t = -t), (a += t), !w)) {
            const t = _.next(Math.max(0, a))
            ;(g = t.value), y && (g = y(g)), (w = k ? t.done : a <= 0)
          }
          null === h || void 0 === h || h(g),
            w &&
              (0 === x && ((null !== S && void 0 !== S) || (S = a)),
              x < s
                ? (function (t, e, r, n) {
                    return n ? t >= e + r : t <= -r
                  })(a, S, l, k) && E()
                : (v.stop(), f && f()))
        }
        return (
          o && (null === c || void 0 === c || c(), (v = i(A)), v.start()),
          {
            stop: () => {
              null === d || void 0 === d || d(), v.stop()
            },
          }
        )
      }
      function Sc(t, e) {
        return e ? t * (1e3 / e) : 0
      }
      var wc = function (t) {
        return 1e3 * t
      }
      const kc = (t, e) => 1 - 3 * e + 3 * t,
        Cc = (t, e) => 3 * e - 6 * t,
        _c = (t) => 3 * t,
        Ec = (t, e, r) => ((kc(e, r) * t + Cc(e, r)) * t + _c(e)) * t,
        Ac = (t, e, r) => 3 * kc(e, r) * t * t + 2 * Cc(e, r) * t + _c(e)
      const Pc = 0.1
      function Rc(t, e, r, n) {
        if (t === e && r === n) return ec
        const o = new Float32Array(11)
        for (let a = 0; a < 11; ++a) o[a] = Ec(a * Pc, t, r)
        function i(e) {
          let n = 0,
            i = 1
          for (; 10 !== i && o[i] <= e; ++i) n += Pc
          --i
          const a = n + ((e - o[i]) / (o[i + 1] - o[i])) * Pc,
            s = Ac(a, t, r)
          return s >= 0.001
            ? (function (t, e, r, n) {
                for (let o = 0; o < 8; ++o) {
                  const o = Ac(e, r, n)
                  if (0 === o) return e
                  e -= (Ec(e, r, n) - t) / o
                }
                return e
              })(e, a, t, r)
            : 0 === s
            ? a
            : (function (t, e, r, n, o) {
                let i,
                  a,
                  s = 0
                do {
                  ;(a = e + (r - e) / 2),
                    (i = Ec(a, n, o) - t),
                    i > 0 ? (r = a) : (e = a)
                } while (Math.abs(i) > 1e-7 && ++s < 10)
                return a
              })(e, n, n + Pc, t, r)
        }
        return (t) => (0 === t || 1 === t ? t : Ec(i(t), e, n))
      }
      var Tc = {
          linear: ec,
          easeIn: rc,
          easeInOut: ic,
          easeOut: oc,
          circIn: ac,
          circInOut: uc,
          circOut: sc,
          backIn: lc,
          backInOut: dc,
          backOut: cc,
          anticipate: fc,
          bounceIn: hc,
          bounceInOut: (t) =>
            t < 0.5 ? 0.5 * (1 - pc(1 - 2 * t)) : 0.5 * pc(2 * t - 1) + 0.5,
          bounceOut: pc,
        },
        Mc = function (t) {
          if (Array.isArray(t)) {
            t.length
            var e = (0, sa.__read)(t, 4)
            return Rc(e[0], e[1], e[2], e[3])
          }
          return 'string' === typeof t
            ? ("Invalid easing type '".concat(t, "'"), Tc[t])
            : t
        },
        Oc = function (t, e) {
          return (
            'zIndex' !== t &&
            (!('number' !== typeof e && !Array.isArray(e)) ||
              !('string' !== typeof e || !ql.test(e) || e.startsWith('url(')))
          )
        },
        jc = function () {
          return { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 }
        },
        Fc = function (t) {
          return {
            type: 'spring',
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10,
          }
        },
        Dc = function () {
          return { type: 'keyframes', ease: 'linear', duration: 0.3 }
        },
        Bc = function (t) {
          return { type: 'keyframes', duration: 0.8, values: t }
        },
        zc = {
          x: jc,
          y: jc,
          z: jc,
          rotate: jc,
          rotateX: jc,
          rotateY: jc,
          rotateZ: jc,
          scaleX: Fc,
          scaleY: Fc,
          scale: Fc,
          opacity: Dc,
          backgroundColor: Dc,
          color: Dc,
          default: Fc,
        }
      const Ic = new Set(['brightness', 'contrast', 'saturate', 'opacity'])
      function $c(t) {
        let [e, r] = t.slice(0, -1).split('(')
        if ('drop-shadow' === e) return t
        const [n] = r.match(Fs) || []
        if (!n) return t
        const o = r.replace(n, '')
        let i = Ic.has(e) ? 1 : 0
        return n !== r && (i *= 100), e + '(' + i + o + ')'
      }
      const Lc = /([a-z-]*)\(.*?\)/g,
        Vc = Object.assign(Object.assign({}, ql), {
          getAnimatableNone: (t) => {
            const e = t.match(Lc)
            return e ? e.map($c).join(' ') : t
          },
        })
      var qc = (0, sa.__assign)((0, sa.__assign)({}, Ks), {
          color: Dl,
          backgroundColor: Dl,
          outlineColor: Dl,
          fill: Dl,
          stroke: Dl,
          borderColor: Dl,
          borderTopColor: Dl,
          borderRightColor: Dl,
          borderBottomColor: Dl,
          borderLeftColor: Dl,
          filter: Vc,
          WebkitFilter: Vc,
        }),
        Uc = function (t) {
          return qc[t]
        }
      function Nc(t, e) {
        var r,
          n = Uc(t)
        return (
          n !== Vc && (n = ql),
          null === (r = n.getAnimatableNone) || void 0 === r
            ? void 0
            : r.call(n, e)
        )
      }
      var Wc = !1
      function Hc(t) {
        var e = t.ease,
          r = t.times,
          n = t.yoyo,
          o = t.flip,
          i = t.loop,
          a = (0, sa.__rest)(t, ['ease', 'times', 'yoyo', 'flip', 'loop']),
          s = (0, sa.__assign)({}, a)
        return (
          r && (s.offset = r),
          a.duration && (s.duration = wc(a.duration)),
          a.repeatDelay && (s.repeatDelay = wc(a.repeatDelay)),
          e &&
            (s.ease = (function (t) {
              return Array.isArray(t) && 'number' !== typeof t[0]
            })(e)
              ? e.map(Mc)
              : Mc(e)),
          'tween' === a.type && (s.type = 'keyframes'),
          (n || i || o) &&
            (!0,
            n
              ? (s.repeatType = 'reverse')
              : i
              ? (s.repeatType = 'loop')
              : o && (s.repeatType = 'mirror'),
            (s.repeat = i || n || o || a.repeat)),
          'spring' !== a.type && (s.type = 'keyframes'),
          s
        )
      }
      function Qc(t, e, r) {
        var n
        return (
          Array.isArray(e.to) &&
            ((null !== (n = t.duration) && void 0 !== n) || (t.duration = 0.8)),
          (function (t) {
            Array.isArray(t.to) &&
              null === t.to[0] &&
              ((t.to = (0, sa.__spreadArray)([], (0, sa.__read)(t.to), !1)),
              (t.to[0] = t.from))
          })(e),
          (function (t) {
            t.when,
              t.delay,
              t.delayChildren,
              t.staggerChildren,
              t.staggerDirection,
              t.repeat,
              t.repeatType,
              t.repeatDelay,
              t.from
            var e = (0, sa.__rest)(t, [
              'when',
              'delay',
              'delayChildren',
              'staggerChildren',
              'staggerDirection',
              'repeat',
              'repeatType',
              'repeatDelay',
              'from',
            ])
            return !!Object.keys(e).length
          })(t) ||
            (t = (0, sa.__assign)(
              (0, sa.__assign)({}, t),
              (function (t, e) {
                var r
                return (
                  (r = xu(e) ? Bc : zc[t] || zc.default),
                  (0, sa.__assign)({ to: e }, r(e))
                )
              })(r, e.to)
            )),
          (0, sa.__assign)((0, sa.__assign)({}, e), Hc(t))
        )
      }
      function Gc(t, e, r, n, o) {
        var i,
          a = Xc(n, t),
          s = null !== (i = a.from) && void 0 !== i ? i : e.get(),
          u = Oc(t, r)
        'none' === s && u && 'string' === typeof r
          ? (s = Nc(t, r))
          : Kc(s) && 'string' === typeof r
          ? (s = Yc(r))
          : !Array.isArray(r) && Kc(r) && 'string' === typeof s && (r = Yc(s))
        var l = Oc(t, s)
        return (
          'You are trying to animate '
            .concat(t, ' from "')
            .concat(s, '" to "')
            .concat(r, '". ')
            .concat(
              s,
              ' is not an animatable value - to enable this animation set '
            )
            .concat(s, ' to a value animatable to ')
            .concat(r, ' via the `style` property.'),
          l && u && !1 !== a.type
            ? function () {
                var n = {
                  from: s,
                  to: r,
                  velocity: e.getVelocity(),
                  onComplete: o,
                  onUpdate: function (t) {
                    return e.set(t)
                  },
                }
                return 'inertia' === a.type || 'decay' === a.type
                  ? (function ({
                      from: t = 0,
                      velocity: e = 0,
                      min: r,
                      max: n,
                      power: o = 0.8,
                      timeConstant: i = 750,
                      bounceStiffness: a = 500,
                      bounceDamping: s = 10,
                      restDelta: u = 1,
                      modifyTarget: l,
                      driver: c,
                      onUpdate: d,
                      onComplete: f,
                      onStop: p,
                    }) {
                      let h
                      function m(t) {
                        return (
                          (void 0 !== r && t < r) || (void 0 !== n && t > n)
                        )
                      }
                      function v(t) {
                        return void 0 === r
                          ? n
                          : void 0 === n || Math.abs(r - t) < Math.abs(n - t)
                          ? r
                          : n
                      }
                      function g(t) {
                        null === h || void 0 === h || h.stop(),
                          (h = xc(
                            Object.assign(Object.assign({}, t), {
                              driver: c,
                              onUpdate: (e) => {
                                var r
                                null === d || void 0 === d || d(e),
                                  null === (r = t.onUpdate) ||
                                    void 0 === r ||
                                    r.call(t, e)
                              },
                              onComplete: f,
                              onStop: p,
                            })
                          ))
                      }
                      function y(t) {
                        g(
                          Object.assign(
                            {
                              type: 'spring',
                              stiffness: a,
                              damping: s,
                              restDelta: u,
                            },
                            t
                          )
                        )
                      }
                      if (m(t)) y({ from: t, velocity: e, to: v(t) })
                      else {
                        let n = o * e + t
                        'undefined' !== typeof l && (n = l(n))
                        const a = v(n),
                          s = a === r ? -1 : 1
                        let c, d
                        const f = (t) => {
                          ;(c = d),
                            (d = t),
                            (e = Sc(t - c, _a().delta)),
                            ((1 === s && t > a) || (-1 === s && t < a)) &&
                              y({ from: t, to: a, velocity: e })
                        }
                        g({
                          type: 'decay',
                          from: t,
                          velocity: e,
                          timeConstant: i,
                          power: o,
                          restDelta: u,
                          modifyTarget: l,
                          onUpdate: m(n) ? f : void 0,
                        })
                      }
                      return {
                        stop: () =>
                          null === h || void 0 === h ? void 0 : h.stop(),
                      }
                    })((0, sa.__assign)((0, sa.__assign)({}, n), a))
                  : xc(
                      (0, sa.__assign)((0, sa.__assign)({}, Qc(a, n, t)), {
                        onUpdate: function (t) {
                          var e
                          n.onUpdate(t),
                            null === (e = a.onUpdate) ||
                              void 0 === e ||
                              e.call(a, t)
                        },
                        onComplete: function () {
                          var t
                          n.onComplete(),
                            null === (t = a.onComplete) ||
                              void 0 === t ||
                              t.call(a)
                        },
                      })
                    )
              }
            : function () {
                var t,
                  n,
                  i = Su(r)
                return (
                  e.set(i),
                  o(),
                  null ===
                    (t = null === a || void 0 === a ? void 0 : a.onUpdate) ||
                    void 0 === t ||
                    t.call(a, i),
                  null ===
                    (n = null === a || void 0 === a ? void 0 : a.onComplete) ||
                    void 0 === n ||
                    n.call(a),
                  { stop: function () {} }
                )
              }
        )
      }
      function Kc(t) {
        return (
          0 === t ||
          ('string' === typeof t &&
            0 === parseFloat(t) &&
            -1 === t.indexOf(' '))
        )
      }
      function Yc(t) {
        return 'number' === typeof t ? 0 : Nc('', t)
      }
      function Xc(t, e) {
        return t[e] || t.default || t
      }
      function Zc(t, e, r, n) {
        return (
          void 0 === n && (n = {}),
          Wc && (n = { type: !1 }),
          e.start(function (o) {
            var i,
              a,
              s = Gc(t, e, r, n, o),
              u = (function (t, e) {
                var r, n
                return null !==
                  (n =
                    null !== (r = (Xc(t, e) || {}).delay) && void 0 !== r
                      ? r
                      : t.delay) && void 0 !== n
                  ? n
                  : 0
              })(n, t),
              l = function () {
                return (a = s())
              }
            return (
              u ? (i = window.setTimeout(l, wc(u))) : l(),
              function () {
                clearTimeout(i), null === a || void 0 === a || a.stop()
              }
            )
          })
        )
      }
      var Jc = function (t) {
        return /^0[^.\s]+$/.test(t)
      }
      function td(t, e) {
        ;-1 === t.indexOf(e) && t.push(e)
      }
      function ed(t, e) {
        var r = t.indexOf(e)
        r > -1 && t.splice(r, 1)
      }
      var rd = (function () {
          function t() {
            this.subscriptions = []
          }
          return (
            (t.prototype.add = function (t) {
              var e = this
              return (
                td(this.subscriptions, t),
                function () {
                  return ed(e.subscriptions, t)
                }
              )
            }),
            (t.prototype.notify = function (t, e, r) {
              var n = this.subscriptions.length
              if (n)
                if (1 === n) this.subscriptions[0](t, e, r)
                else
                  for (var o = 0; o < n; o++) {
                    var i = this.subscriptions[o]
                    i && i(t, e, r)
                  }
            }),
            (t.prototype.getSize = function () {
              return this.subscriptions.length
            }),
            (t.prototype.clear = function () {
              this.subscriptions.length = 0
            }),
            t
          )
        })(),
        nd = (function () {
          function t(t) {
            var e,
              r = this
            ;(this.version = '6.5.1'),
              (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new rd()),
              (this.velocityUpdateSubscribers = new rd()),
              (this.renderSubscribers = new rd()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, e) {
                void 0 === e && (e = !0), (r.prev = r.current), (r.current = t)
                var n = _a(),
                  o = n.delta,
                  i = n.timestamp
                r.lastUpdated !== i &&
                  ((r.timeDelta = o),
                  (r.lastUpdated = i),
                  Ea.postRender(r.scheduleVelocityCheck)),
                  r.prev !== r.current && r.updateSubscribers.notify(r.current),
                  r.velocityUpdateSubscribers.getSize() &&
                    r.velocityUpdateSubscribers.notify(r.getVelocity()),
                  e && r.renderSubscribers.notify(r.current)
              }),
              (this.scheduleVelocityCheck = function () {
                return Ea.postRender(r.velocityCheck)
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== r.lastUpdated &&
                  ((r.prev = r.current),
                  r.velocityUpdateSubscribers.notify(r.getVelocity()))
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity =
                ((e = this.current), !isNaN(parseFloat(e))))
          }
          return (
            (t.prototype.onChange = function (t) {
              return this.updateSubscribers.add(t)
            }),
            (t.prototype.clearListeners = function () {
              this.updateSubscribers.clear()
            }),
            (t.prototype.onRenderRequest = function (t) {
              return t(this.get()), this.renderSubscribers.add(t)
            }),
            (t.prototype.attach = function (t) {
              this.passiveEffect = t
            }),
            (t.prototype.set = function (t, e) {
              void 0 === e && (e = !0),
                e && this.passiveEffect
                  ? this.passiveEffect(t, this.updateAndNotify)
                  : this.updateAndNotify(t, e)
            }),
            (t.prototype.get = function () {
              return this.current
            }),
            (t.prototype.getPrevious = function () {
              return this.prev
            }),
            (t.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? Sc(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0
            }),
            (t.prototype.start = function (t) {
              var e = this
              return (
                this.stop(),
                new Promise(function (r) {
                  ;(e.hasAnimated = !0), (e.stopAnimation = t(r))
                }).then(function () {
                  return e.clearAnimation()
                })
              )
            }),
            (t.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation()
            }),
            (t.prototype.isAnimating = function () {
              return !!this.stopAnimation
            }),
            (t.prototype.clearAnimation = function () {
              this.stopAnimation = null
            }),
            (t.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop()
            }),
            t
          )
        })()
      function od(t) {
        return new nd(t)
      }
      var id = function (t) {
          return function (e) {
            return e.test(t)
          }
        },
        ad = [
          Ws,
          Vs,
          Ls,
          $s,
          Us,
          qs,
          {
            test: function (t) {
              return 'auto' === t
            },
            parse: function (t) {
              return t
            },
          },
        ],
        sd = function (t) {
          return ad.find(id(t))
        },
        ud = (0, sa.__spreadArray)(
          (0, sa.__spreadArray)([], (0, sa.__read)(ad), !1),
          [Dl, ql],
          !1
        ),
        ld = function (t) {
          return ud.find(id(t))
        }
      function cd(t, e, r) {
        t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, od(r))
      }
      function dd(t, e) {
        var r = as(t, e),
          n = r ? t.makeTargetAnimatable(r, !1) : {},
          o = n.transitionEnd,
          i = void 0 === o ? {} : o
        n.transition
        var a = (0, sa.__rest)(n, ['transitionEnd', 'transition'])
        for (var s in (a = (0, sa.__assign)((0, sa.__assign)({}, a), i))) {
          cd(t, s, Su(a[s]))
        }
      }
      function fd(t, e) {
        if (e) return (e[t] || e.default || e).from
      }
      function pd(t, e, r) {
        var n
        void 0 === r && (r = {})
        var o = as(t, e, r.custom),
          i = (o || {}).transition,
          a = void 0 === i ? t.getDefaultTransition() || {} : i
        r.transitionOverride && (a = r.transitionOverride)
        var s = o
            ? function () {
                return hd(t, o, r)
              }
            : function () {
                return Promise.resolve()
              },
          u = (
            null === (n = t.variantChildren) || void 0 === n ? void 0 : n.size
          )
            ? function (n) {
                void 0 === n && (n = 0)
                var o = a.delayChildren,
                  i = void 0 === o ? 0 : o,
                  s = a.staggerChildren,
                  u = a.staggerDirection
                return (function (t, e, r, n, o, i) {
                  void 0 === r && (r = 0)
                  void 0 === n && (n = 0)
                  void 0 === o && (o = 1)
                  var a = [],
                    s = (t.variantChildren.size - 1) * n,
                    u =
                      1 === o
                        ? function (t) {
                            return void 0 === t && (t = 0), t * n
                          }
                        : function (t) {
                            return void 0 === t && (t = 0), s - t * n
                          }
                  return (
                    Array.from(t.variantChildren)
                      .sort(md)
                      .forEach(function (t, n) {
                        a.push(
                          pd(
                            t,
                            e,
                            (0, sa.__assign)((0, sa.__assign)({}, i), {
                              delay: r + u(n),
                            })
                          ).then(function () {
                            return t.notifyAnimationComplete(e)
                          })
                        )
                      }),
                    Promise.all(a)
                  )
                })(t, e, i + n, s, u, r)
              }
            : function () {
                return Promise.resolve()
              },
          l = a.when
        if (l) {
          var c = (0, sa.__read)('beforeChildren' === l ? [s, u] : [u, s], 2),
            d = c[0],
            f = c[1]
          return d().then(f)
        }
        return Promise.all([s(), u(r.delay)])
      }
      function hd(t, e, r) {
        var n,
          o = void 0 === r ? {} : r,
          i = o.delay,
          a = void 0 === i ? 0 : i,
          s = o.transitionOverride,
          u = o.type,
          l = t.makeTargetAnimatable(e),
          c = l.transition,
          d = void 0 === c ? t.getDefaultTransition() : c,
          f = l.transitionEnd,
          p = (0, sa.__rest)(l, ['transition', 'transitionEnd'])
        s && (d = s)
        var h = [],
          m =
            u &&
            (null === (n = t.animationState) || void 0 === n
              ? void 0
              : n.getState()[u])
        for (var v in p) {
          var g = t.getValue(v),
            y = p[v]
          if (!(!g || void 0 === y || (m && vd(m, v)))) {
            var b = (0, sa.__assign)({ delay: a }, d)
            t.shouldReduceMotion &&
              Cs(v) &&
              (b = (0, sa.__assign)((0, sa.__assign)({}, b), {
                type: !1,
                delay: 0,
              }))
            var x = Zc(v, g, y, b)
            h.push(x)
          }
        }
        return Promise.all(h).then(function () {
          f && dd(t, f)
        })
      }
      function md(t, e) {
        return t.sortNodePosition(e)
      }
      function vd(t, e) {
        var r = t.protectedKeys,
          n = t.needsAnimating,
          o = r.hasOwnProperty(e) && !0 !== n[e]
        return (n[e] = !1), o
      }
      var gd = [
          Eu.Animate,
          Eu.InView,
          Eu.Focus,
          Eu.Hover,
          Eu.Tap,
          Eu.Drag,
          Eu.Exit,
        ],
        yd = (0, sa.__spreadArray)([], (0, sa.__read)(gd), !1).reverse(),
        bd = gd.length
      function xd(t) {
        return function (e) {
          return Promise.all(
            e.map(function (e) {
              var r = e.animation,
                n = e.options
              return (function (t, e, r) {
                var n
                if (
                  (void 0 === r && (r = {}),
                  t.notifyAnimationStart(e),
                  Array.isArray(e))
                ) {
                  var o = e.map(function (e) {
                    return pd(t, e, r)
                  })
                  n = Promise.all(o)
                } else if ('string' === typeof e) n = pd(t, e, r)
                else {
                  var i = 'function' === typeof e ? as(t, e, r.custom) : e
                  n = hd(t, i, r)
                }
                return n.then(function () {
                  return t.notifyAnimationComplete(e)
                })
              })(t, r, n)
            })
          )
        }
      }
      function Sd(t) {
        var e = xd(t),
          r = (function () {
            var t
            return (
              ((t = {})[Eu.Animate] = wd(!0)),
              (t[Eu.InView] = wd()),
              (t[Eu.Hover] = wd()),
              (t[Eu.Tap] = wd()),
              (t[Eu.Drag] = wd()),
              (t[Eu.Focus] = wd()),
              (t[Eu.Exit] = wd()),
              t
            )
          })(),
          n = {},
          o = !0,
          i = function (e, r) {
            var n = as(t, r)
            if (n) {
              n.transition
              var o = n.transitionEnd,
                i = (0, sa.__rest)(n, ['transition', 'transitionEnd'])
              e = (0, sa.__assign)(
                (0, sa.__assign)((0, sa.__assign)({}, e), i),
                o
              )
            }
            return e
          }
        function a(a, s) {
          for (
            var u,
              l = t.getProps(),
              c = t.getVariantContext(!0) || {},
              d = [],
              f = new Set(),
              p = {},
              h = 1 / 0,
              m = function (e) {
                var n = yd[e],
                  m = r[n],
                  v = null !== (u = l[n]) && void 0 !== u ? u : c[n],
                  g = os(v),
                  y = n === s ? m.isActive : null
                !1 === y && (h = e)
                var b = v === c[n] && v !== l[n] && g
                if (
                  (b && o && t.manuallyAnimateOnMount && (b = !1),
                  (m.protectedKeys = (0, sa.__assign)({}, p)),
                  (!m.isActive && null === y) ||
                    (!v && !m.prevProp) ||
                    bu(v) ||
                    'boolean' === typeof v)
                )
                  return 'continue'
                var x = (function (t, e) {
                    if ('string' === typeof e) return e !== t
                    if (ns(e)) return !ll(e, t)
                    return !1
                  })(m.prevProp, v),
                  S = x || (n === s && m.isActive && !b && g) || (e > h && g),
                  w = Array.isArray(v) ? v : [v],
                  k = w.reduce(i, {})
                !1 === y && (k = {})
                var C = m.prevResolvedValues,
                  _ = void 0 === C ? {} : C,
                  E = (0, sa.__assign)((0, sa.__assign)({}, _), k),
                  A = function (t) {
                    ;(S = !0), f.delete(t), (m.needsAnimating[t] = !0)
                  }
                for (var P in E) {
                  var R = k[P],
                    T = _[P]
                  p.hasOwnProperty(P) ||
                    (R !== T
                      ? xu(R) && xu(T)
                        ? !ll(R, T) || x
                          ? A(P)
                          : (m.protectedKeys[P] = !0)
                        : void 0 !== R
                        ? A(P)
                        : f.add(P)
                      : void 0 !== R && f.has(P)
                      ? A(P)
                      : (m.protectedKeys[P] = !0))
                }
                ;(m.prevProp = v),
                  (m.prevResolvedValues = k),
                  m.isActive &&
                    (p = (0, sa.__assign)((0, sa.__assign)({}, p), k)),
                  o && t.blockInitialAnimation && (S = !1),
                  S &&
                    !b &&
                    d.push.apply(
                      d,
                      (0, sa.__spreadArray)(
                        [],
                        (0, sa.__read)(
                          w.map(function (t) {
                            return {
                              animation: t,
                              options: (0, sa.__assign)({ type: n }, a),
                            }
                          })
                        ),
                        !1
                      )
                    )
              },
              v = 0;
            v < bd;
            v++
          )
            m(v)
          if (((n = (0, sa.__assign)({}, p)), f.size)) {
            var g = {}
            f.forEach(function (e) {
              var r = t.getBaseTarget(e)
              void 0 !== r && (g[e] = r)
            }),
              d.push({ animation: g })
          }
          var y = Boolean(d.length)
          return (
            o && !1 === l.initial && !t.manuallyAnimateOnMount && (y = !1),
            (o = !1),
            y ? e(d) : Promise.resolve()
          )
        }
        return {
          isAnimated: function (t) {
            return void 0 !== n[t]
          },
          animateChanges: a,
          setActive: function (e, n, o) {
            var i
            if (r[e].isActive === n) return Promise.resolve()
            null === (i = t.variantChildren) ||
              void 0 === i ||
              i.forEach(function (t) {
                var r
                return null === (r = t.animationState) || void 0 === r
                  ? void 0
                  : r.setActive(e, n)
              }),
              (r[e].isActive = n)
            var s = a(o, e)
            for (var u in r) r[u].protectedKeys = {}
            return s
          },
          setAnimateFunction: function (r) {
            e = r(t)
          },
          getState: function () {
            return r
          },
        }
      }
      function wd(t) {
        return (
          void 0 === t && (t = !1),
          {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {},
          }
        )
      }
      var kd = {
        animation: sl(function (t) {
          var e = t.visualElement,
            r = t.animate
          e.animationState || (e.animationState = Sd(e)),
            bu(r) &&
              (0, i.useEffect)(
                function () {
                  return r.subscribe(e)
                },
                [r]
              )
        }),
        exit: sl(function (t) {
          var e = t.custom,
            r = t.visualElement,
            n = (0, sa.__read)(Ua(), 2),
            o = n[0],
            a = n[1],
            s = (0, i.useContext)(Ta)
          ;(0, i.useEffect)(
            function () {
              var t, n
              r.isPresent = o
              var i =
                null === (t = r.animationState) || void 0 === t
                  ? void 0
                  : t.setActive(Eu.Exit, !o, {
                      custom:
                        null !==
                          (n =
                            null === s || void 0 === s ? void 0 : s.custom) &&
                        void 0 !== n
                          ? n
                          : e,
                    })
              !o && (null === i || void 0 === i || i.then(a))
            },
            [o]
          )
        }),
      }
      const Cd = (t) => t.hasOwnProperty('x') && t.hasOwnProperty('y'),
        _d = (t) => Cd(t) && t.hasOwnProperty('z'),
        Ed = (t, e) => Math.abs(t - e)
      function Ad(t, e) {
        if (Ul(t) && Ul(e)) return Ed(t, e)
        if (Cd(t) && Cd(e)) {
          const r = Ed(t.x, e.x),
            n = Ed(t.y, e.y),
            o = _d(t) && _d(e) ? Ed(t.z, e.z) : 0
          return Math.sqrt(Math.pow(r, 2) + Math.pow(n, 2) + Math.pow(o, 2))
        }
      }
      var Pd = (function () {
        function t(t, e, r) {
          var n = this,
            o = (void 0 === r ? {} : r).transformPagePoint
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = function () {
              if (n.lastMoveEvent && n.lastMoveEventInfo) {
                var t = Md(n.lastMoveEventInfo, n.history),
                  e = null !== n.startEvent,
                  r = Ad(t.offset, { x: 0, y: 0 }) >= 3
                if (e || r) {
                  var o = t.point,
                    i = _a().timestamp
                  n.history.push(
                    (0, sa.__assign)((0, sa.__assign)({}, o), { timestamp: i })
                  )
                  var a = n.handlers,
                    s = a.onStart,
                    u = a.onMove
                  e ||
                    (s && s(n.lastMoveEvent, t),
                    (n.startEvent = n.lastMoveEvent)),
                    u && u(n.lastMoveEvent, t)
                }
              }
            }),
            (this.handlePointerMove = function (t, e) {
              ;(n.lastMoveEvent = t),
                (n.lastMoveEventInfo = Rd(e, n.transformPagePoint)),
                Mu(t) && 0 === t.buttons
                  ? n.handlePointerUp(t, e)
                  : Ea.update(n.updatePoint, !0)
            }),
            (this.handlePointerUp = function (t, e) {
              n.end()
              var r = n.handlers,
                o = r.onEnd,
                i = r.onSessionEnd,
                a = Md(Rd(e, n.transformPagePoint), n.history)
              n.startEvent && o && o(t, a), i && i(t, a)
            }),
            !(Ou(t) && t.touches.length > 1))
          ) {
            ;(this.handlers = e), (this.transformPagePoint = o)
            var i = Rd(Bu(t), this.transformPagePoint),
              a = i.point,
              s = _a().timestamp
            this.history = [
              (0, sa.__assign)((0, sa.__assign)({}, a), { timestamp: s }),
            ]
            var u = e.onSessionStart
            u && u(t, Md(i, this.history)),
              (this.removeListeners = Xu(
                Vu(window, 'pointermove', this.handlePointerMove),
                Vu(window, 'pointerup', this.handlePointerUp),
                Vu(window, 'pointercancel', this.handlePointerUp)
              ))
          }
        }
        return (
          (t.prototype.updateHandlers = function (t) {
            this.handlers = t
          }),
          (t.prototype.end = function () {
            this.removeListeners && this.removeListeners(),
              xa.update(this.updatePoint)
          }),
          t
        )
      })()
      function Rd(t, e) {
        return e ? { point: e(t.point) } : t
      }
      function Td(t, e) {
        return { x: t.x - e.x, y: t.y - e.y }
      }
      function Md(t, e) {
        var r = t.point
        return {
          point: r,
          delta: Td(r, jd(e)),
          offset: Td(r, Od(e)),
          velocity: Fd(e, 0.1),
        }
      }
      function Od(t) {
        return t[0]
      }
      function jd(t) {
        return t[t.length - 1]
      }
      function Fd(t, e) {
        if (t.length < 2) return { x: 0, y: 0 }
        for (
          var r = t.length - 1, n = null, o = jd(t);
          r >= 0 && ((n = t[r]), !(o.timestamp - n.timestamp > wc(e)));

        )
          r--
        if (!n) return { x: 0, y: 0 }
        var i = (o.timestamp - n.timestamp) / 1e3
        if (0 === i) return { x: 0, y: 0 }
        var a = { x: (o.x - n.x) / i, y: (o.y - n.y) / i }
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
      }
      function Dd(t) {
        return t.max - t.min
      }
      function Bd(t, e, r) {
        return void 0 === e && (e = 0), void 0 === r && (r = 0.01), Ad(t, e) < r
      }
      function zd(t, e, r, n) {
        void 0 === n && (n = 0.5),
          (t.origin = n),
          (t.originPoint = xl(e.min, e.max, t.origin)),
          (t.scale = Dd(r) / Dd(e)),
          (Bd(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = xl(r.min, r.max, t.origin) - t.originPoint),
          (Bd(t.translate) || isNaN(t.translate)) && (t.translate = 0)
      }
      function Id(t, e, r, n) {
        zd(t.x, e.x, r.x, null === n || void 0 === n ? void 0 : n.originX),
          zd(t.y, e.y, r.y, null === n || void 0 === n ? void 0 : n.originY)
      }
      function $d(t, e, r) {
        ;(t.min = r.min + e.min), (t.max = t.min + Dd(e))
      }
      function Ld(t, e, r) {
        ;(t.min = e.min - r.min), (t.max = t.min + Dd(e))
      }
      function Vd(t, e, r) {
        Ld(t.x, e.x, r.x), Ld(t.y, e.y, r.y)
      }
      function qd(t, e, r) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== r ? t.max + r - (t.max - t.min) : void 0,
        }
      }
      function Ud(t, e) {
        var r,
          n = e.min - t.min,
          o = e.max - t.max
        return (
          e.max - e.min < t.max - t.min &&
            ((n = (r = (0, sa.__read)([o, n], 2))[0]), (o = r[1])),
          { min: n, max: o }
        )
      }
      var Nd = 0.35
      function Wd(t, e, r) {
        return { min: Hd(t, e), max: Hd(t, r) }
      }
      function Hd(t, e) {
        var r
        return 'number' === typeof t
          ? t
          : null !== (r = t[e]) && void 0 !== r
          ? r
          : 0
      }
      function Qd(t) {
        return [t('x'), t('y')]
      }
      function Gd(t) {
        var e = t.top
        return {
          x: { min: t.left, max: t.right },
          y: { min: e, max: t.bottom },
        }
      }
      function Kd(t) {
        return void 0 === t || 1 === t
      }
      function Yd(t) {
        var e = t.scale,
          r = t.scaleX,
          n = t.scaleY
        return !Kd(e) || !Kd(r) || !Kd(n)
      }
      function Xd(t) {
        return (
          Yd(t) ||
          Zd(t.x) ||
          Zd(t.y) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY
        )
      }
      function Zd(t) {
        return t && '0%' !== t
      }
      function Jd(t, e, r) {
        return r + e * (t - r)
      }
      function tf(t, e, r, n, o) {
        return void 0 !== o && (t = Jd(t, o, n)), Jd(t, r, n) + e
      }
      function ef(t, e, r, n, o) {
        void 0 === e && (e = 0),
          void 0 === r && (r = 1),
          (t.min = tf(t.min, e, r, n, o)),
          (t.max = tf(t.max, e, r, n, o))
      }
      function rf(t, e) {
        var r = e.x,
          n = e.y
        ef(t.x, r.translate, r.scale, r.originPoint),
          ef(t.y, n.translate, n.scale, n.originPoint)
      }
      function nf(t, e) {
        ;(t.min = t.min + e), (t.max = t.max + e)
      }
      function of(t, e, r) {
        var n = (0, sa.__read)(r, 3),
          o = n[0],
          i = n[1],
          a = n[2],
          s = void 0 !== e[a] ? e[a] : 0.5,
          u = xl(t.min, t.max, s)
        ef(t, e[o], e[i], u, e.scale)
      }
      var af = ['x', 'scaleX', 'originX'],
        sf = ['y', 'scaleY', 'originY']
      function uf(t, e) {
        of(t.x, e, af), of(t.y, e, sf)
      }
      function lf(t, e) {
        return Gd(
          (function (t, e) {
            if (!e) return t
            var r = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom })
            return { top: r.y, left: r.x, bottom: n.y, right: n.x }
          })(t.getBoundingClientRect(), e)
        )
      }
      var cf = new WeakMap(),
        df = (function () {
          function t(t) {
            ;(this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
              (this.visualElement = t)
          }
          return (
            (t.prototype.start = function (t, e) {
              var r = this,
                n = (void 0 === e ? {} : e).snapToCursor,
                o = void 0 !== n && n
              if (!1 !== this.visualElement.isPresent) {
                this.panSession = new Pd(
                  t,
                  {
                    onSessionStart: function (t) {
                      r.stopAnimation(),
                        o && r.snapToCursor(Bu(t, 'page').point)
                    },
                    onStart: function (t, e) {
                      var n,
                        o = r.getProps(),
                        i = o.drag,
                        a = o.dragPropagation,
                        s = o.onDragStart
                      ;(!i ||
                        a ||
                        (r.openGlobalLock && r.openGlobalLock(),
                        (r.openGlobalLock = Hu(i)),
                        r.openGlobalLock)) &&
                        ((r.isDragging = !0),
                        (r.currentDirection = null),
                        r.resolveConstraints(),
                        r.visualElement.projection &&
                          ((r.visualElement.projection.isAnimationBlocked = !0),
                          (r.visualElement.projection.target = void 0)),
                        Qd(function (t) {
                          var e,
                            n,
                            o = r.getAxisMotionValue(t).get() || 0
                          if (Ls.test(o)) {
                            var i =
                              null ===
                                (n =
                                  null === (e = r.visualElement.projection) ||
                                  void 0 === e
                                    ? void 0
                                    : e.layout) || void 0 === n
                                ? void 0
                                : n.actual[t]
                            if (i) o = Dd(i) * (parseFloat(o) / 100)
                          }
                          r.originPoint[t] = o
                        }),
                        null === s || void 0 === s || s(t, e),
                        null === (n = r.visualElement.animationState) ||
                          void 0 === n ||
                          n.setActive(Eu.Drag, !0))
                    },
                    onMove: function (t, e) {
                      var n = r.getProps(),
                        o = n.dragPropagation,
                        i = n.dragDirectionLock,
                        a = n.onDirectionLock,
                        s = n.onDrag
                      if (o || r.openGlobalLock) {
                        var u = e.offset
                        if (i && null === r.currentDirection)
                          return (
                            (r.currentDirection = (function (t, e) {
                              void 0 === e && (e = 10)
                              var r = null
                              Math.abs(t.y) > e
                                ? (r = 'y')
                                : Math.abs(t.x) > e && (r = 'x')
                              return r
                            })(u)),
                            void (
                              null !== r.currentDirection &&
                              (null === a ||
                                void 0 === a ||
                                a(r.currentDirection))
                            )
                          )
                        r.updateAxis('x', e.point, u),
                          r.updateAxis('y', e.point, u),
                          r.visualElement.syncRender(),
                          null === s || void 0 === s || s(t, e)
                      }
                    },
                    onSessionEnd: function (t, e) {
                      return r.stop(t, e)
                    },
                  },
                  {
                    transformPagePoint:
                      this.visualElement.getTransformPagePoint(),
                  }
                )
              }
            }),
            (t.prototype.stop = function (t, e) {
              var r = this.isDragging
              if ((this.cancel(), r)) {
                var n = e.velocity
                this.startAnimation(n)
                var o = this.getProps().onDragEnd
                null === o || void 0 === o || o(t, e)
              }
            }),
            (t.prototype.cancel = function () {
              var t, e
              ;(this.isDragging = !1),
                this.visualElement.projection &&
                  (this.visualElement.projection.isAnimationBlocked = !1),
                null === (t = this.panSession) || void 0 === t || t.end(),
                (this.panSession = void 0),
                !this.getProps().dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (e = this.visualElement.animationState) ||
                  void 0 === e ||
                  e.setActive(Eu.Drag, !1)
            }),
            (t.prototype.updateAxis = function (t, e, r) {
              var n = this.getProps().drag
              if (r && ff(t, n, this.currentDirection)) {
                var o = this.getAxisMotionValue(t),
                  i = this.originPoint[t] + r[t]
                this.constraints &&
                  this.constraints[t] &&
                  (i = (function (t, e, r) {
                    var n = e.min,
                      o = e.max
                    return (
                      void 0 !== n && t < n
                        ? (t = r ? xl(n, t, r.min) : Math.max(t, n))
                        : void 0 !== o &&
                          t > o &&
                          (t = r ? xl(o, t, r.max) : Math.min(t, o)),
                      t
                    )
                  })(i, this.constraints[t], this.elastic[t])),
                  o.set(i)
              }
            }),
            (t.prototype.resolveConstraints = function () {
              var t = this,
                e = this.getProps(),
                r = e.dragConstraints,
                n = e.dragElastic,
                o = (this.visualElement.projection || {}).layout,
                i = this.constraints
              r && rs(r)
                ? this.constraints ||
                  (this.constraints = this.resolveRefConstraints())
                : (this.constraints =
                    !(!r || !o) &&
                    (function (t, e) {
                      var r = e.top,
                        n = e.left,
                        o = e.bottom,
                        i = e.right
                      return { x: qd(t.x, n, i), y: qd(t.y, r, o) }
                    })(o.actual, r)),
                (this.elastic = (function (t) {
                  return (
                    void 0 === t && (t = Nd),
                    !1 === t ? (t = 0) : !0 === t && (t = Nd),
                    { x: Wd(t, 'left', 'right'), y: Wd(t, 'top', 'bottom') }
                  )
                })(n)),
                i !== this.constraints &&
                  o &&
                  this.constraints &&
                  !this.hasMutatedConstraints &&
                  Qd(function (e) {
                    t.getAxisMotionValue(e) &&
                      (t.constraints[e] = (function (t, e) {
                        var r = {}
                        return (
                          void 0 !== e.min && (r.min = e.min - t.min),
                          void 0 !== e.max && (r.max = e.max - t.min),
                          r
                        )
                      })(o.actual[e], t.constraints[e]))
                  })
            }),
            (t.prototype.resolveRefConstraints = function () {
              var t = this.getProps(),
                e = t.dragConstraints,
                r = t.onMeasureDragConstraints
              if (!e || !rs(e)) return !1
              var n = e.current,
                o = this.visualElement.projection
              if (!o || !o.layout) return !1
              var i = (function (t, e, r) {
                  var n = lf(t, r),
                    o = e.scroll
                  return o && (nf(n.x, o.x), nf(n.y, o.y)), n
                })(n, o.root, this.visualElement.getTransformPagePoint()),
                a = (function (t, e) {
                  return { x: Ud(t.x, e.x), y: Ud(t.y, e.y) }
                })(o.layout.actual, i)
              if (r) {
                var s = r(
                  (function (t) {
                    var e = t.x,
                      r = t.y
                    return {
                      top: r.min,
                      right: e.max,
                      bottom: r.max,
                      left: e.min,
                    }
                  })(a)
                )
                ;(this.hasMutatedConstraints = !!s), s && (a = Gd(s))
              }
              return a
            }),
            (t.prototype.startAnimation = function (t) {
              var e = this,
                r = this.getProps(),
                n = r.drag,
                o = r.dragMomentum,
                i = r.dragElastic,
                a = r.dragTransition,
                s = r.dragSnapToOrigin,
                u = r.onDragTransitionEnd,
                l = this.constraints || {},
                c = Qd(function (r) {
                  var u
                  if (ff(r, n, e.currentDirection)) {
                    var c =
                      null !==
                        (u = null === l || void 0 === l ? void 0 : l[r]) &&
                      void 0 !== u
                        ? u
                        : {}
                    s && (c = { min: 0, max: 0 })
                    var d = i ? 200 : 1e6,
                      f = i ? 40 : 1e7,
                      p = (0, sa.__assign)(
                        (0, sa.__assign)(
                          {
                            type: 'inertia',
                            velocity: o ? t[r] : 0,
                            bounceStiffness: d,
                            bounceDamping: f,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                          },
                          a
                        ),
                        c
                      )
                    return e.startAxisValueAnimation(r, p)
                  }
                })
              return Promise.all(c).then(u)
            }),
            (t.prototype.startAxisValueAnimation = function (t, e) {
              return Zc(t, this.getAxisMotionValue(t), 0, e)
            }),
            (t.prototype.stopAnimation = function () {
              var t = this
              Qd(function (e) {
                return t.getAxisMotionValue(e).stop()
              })
            }),
            (t.prototype.getAxisMotionValue = function (t) {
              var e,
                r,
                n = '_drag' + t.toUpperCase(),
                o = this.visualElement.getProps()[n]
              return (
                o ||
                this.visualElement.getValue(
                  t,
                  null !==
                    (r =
                      null === (e = this.visualElement.getProps().initial) ||
                      void 0 === e
                        ? void 0
                        : e[t]) && void 0 !== r
                    ? r
                    : 0
                )
              )
            }),
            (t.prototype.snapToCursor = function (t) {
              var e = this
              Qd(function (r) {
                if (ff(r, e.getProps().drag, e.currentDirection)) {
                  var n = e.visualElement.projection,
                    o = e.getAxisMotionValue(r)
                  if (n && n.layout) {
                    var i = n.layout.actual[r],
                      a = i.min,
                      s = i.max
                    o.set(t[r] - xl(a, s, 0.5))
                  }
                }
              })
            }),
            (t.prototype.scalePositionWithinConstraints = function () {
              var t,
                e = this,
                r = this.getProps(),
                n = r.drag,
                o = r.dragConstraints,
                i = this.visualElement.projection
              if (rs(o) && i && this.constraints) {
                this.stopAnimation()
                var a = { x: 0, y: 0 }
                Qd(function (t) {
                  var r = e.getAxisMotionValue(t)
                  if (r) {
                    var n = r.get()
                    a[t] = (function (t, e) {
                      var r = 0.5,
                        n = Dd(t),
                        o = Dd(e)
                      return (
                        o > n
                          ? (r = bl(e.min, e.max - n, t.min))
                          : n > o && (r = bl(t.min, t.max - o, e.min)),
                        cl(0, 1, r)
                      )
                    })({ min: n, max: n }, e.constraints[t])
                  }
                })
                var s = this.visualElement.getProps().transformTemplate
                ;(this.visualElement.getInstance().style.transform = s
                  ? s({}, '')
                  : 'none'),
                  null === (t = i.root) || void 0 === t || t.updateScroll(),
                  i.updateLayout(),
                  this.resolveConstraints(),
                  Qd(function (t) {
                    if (ff(t, n, null)) {
                      var r = e.getAxisMotionValue(t),
                        o = e.constraints[t],
                        i = o.min,
                        s = o.max
                      r.set(xl(i, s, a[t]))
                    }
                  })
              }
            }),
            (t.prototype.addListeners = function () {
              var t,
                e = this
              cf.set(this.visualElement, this)
              var r = Vu(
                  this.visualElement.getInstance(),
                  'pointerdown',
                  function (t) {
                    var r = e.getProps(),
                      n = r.drag,
                      o = r.dragListener
                    n && (void 0 === o || o) && e.start(t)
                  }
                ),
                n = function () {
                  rs(e.getProps().dragConstraints) &&
                    (e.constraints = e.resolveRefConstraints())
                },
                o = this.visualElement.projection,
                i = o.addEventListener('measure', n)
              o &&
                !o.layout &&
                (null === (t = o.root) || void 0 === t || t.updateScroll(),
                o.updateLayout()),
                n()
              var a = Ru(window, 'resize', function () {
                return e.scalePositionWithinConstraints()
              })
              return (
                o.addEventListener('didUpdate', function (t) {
                  var r = t.delta,
                    n = t.hasLayoutChanged
                  e.isDragging &&
                    n &&
                    (Qd(function (t) {
                      var n = e.getAxisMotionValue(t)
                      n &&
                        ((e.originPoint[t] += r[t].translate),
                        n.set(n.get() + r[t].translate))
                    }),
                    e.visualElement.syncRender())
                }),
                function () {
                  a(), r(), i()
                }
              )
            }),
            (t.prototype.getProps = function () {
              var t = this.visualElement.getProps(),
                e = t.drag,
                r = void 0 !== e && e,
                n = t.dragDirectionLock,
                o = void 0 !== n && n,
                i = t.dragPropagation,
                a = void 0 !== i && i,
                s = t.dragConstraints,
                u = void 0 !== s && s,
                l = t.dragElastic,
                c = void 0 === l ? Nd : l,
                d = t.dragMomentum,
                f = void 0 === d || d
              return (0, sa.__assign)((0, sa.__assign)({}, t), {
                drag: r,
                dragDirectionLock: o,
                dragPropagation: a,
                dragConstraints: u,
                dragElastic: c,
                dragMomentum: f,
              })
            }),
            t
          )
        })()
      function ff(t, e, r) {
        return (!0 === e || e === t) && (null === r || r === t)
      }
      var pf = {
          pan: sl(function (t) {
            var e = t.onPan,
              r = t.onPanStart,
              n = t.onPanEnd,
              o = t.onPanSessionStart,
              a = t.visualElement,
              s = e || r || n || o,
              u = (0, i.useRef)(null),
              l = (0, i.useContext)(Ya).transformPagePoint,
              c = {
                onSessionStart: o,
                onStart: r,
                onMove: e,
                onEnd: function (t, e) {
                  ;(u.current = null), n && n(t, e)
                },
              }
            ;(0, i.useEffect)(function () {
              null !== u.current && u.current.updateHandlers(c)
            }),
              qu(
                a,
                'pointerdown',
                s &&
                  function (t) {
                    u.current = new Pd(t, c, { transformPagePoint: l })
                  }
              ),
              Ia(function () {
                return u.current && u.current.end()
              })
          }),
          drag: sl(function (t) {
            var e = t.dragControls,
              r = t.visualElement,
              n = Ma(function () {
                return new df(r)
              })
            ;(0, i.useEffect)(
              function () {
                return e && e.subscribe(n)
              },
              [n, e]
            ),
              (0, i.useEffect)(
                function () {
                  return n.addListeners()
                },
                [n]
              )
          }),
        },
        hf = [
          'LayoutMeasure',
          'BeforeLayoutMeasure',
          'LayoutUpdate',
          'ViewportBoxUpdate',
          'Update',
          'Render',
          'AnimationComplete',
          'LayoutAnimationComplete',
          'AnimationStart',
          'LayoutAnimationStart',
          'SetAxisTarget',
          'Unmount',
        ]
      var mf = function (t) {
          var e = t.treeType,
            r = void 0 === e ? '' : e,
            n = t.build,
            o = t.getBaseTarget,
            i = t.makeTargetAnimatable,
            a = t.measureViewportBox,
            s = t.render,
            u = t.readValueFromInstance,
            l = t.removeValueFromRenderState,
            c = t.sortNodePosition,
            d = t.scrapeMotionValuesFromProps
          return function (t, e) {
            var f = t.parent,
              p = t.props,
              h = t.presenceId,
              m = t.blockInitialAnimation,
              v = t.visualState,
              g = t.shouldReduceMotion
            void 0 === e && (e = {})
            var y,
              b,
              x = !1,
              S = v.latestValues,
              w = v.renderState,
              k = (function () {
                var t = hf.map(function () {
                    return new rd()
                  }),
                  e = {},
                  r = {
                    clearAllListeners: function () {
                      return t.forEach(function (t) {
                        return t.clear()
                      })
                    },
                    updatePropListeners: function (t) {
                      hf.forEach(function (n) {
                        var o,
                          i = 'on' + n,
                          a = t[i]
                        null === (o = e[n]) || void 0 === o || o.call(e),
                          a && (e[n] = r[i](a))
                      })
                    },
                  }
                return (
                  t.forEach(function (t, e) {
                    ;(r['on' + hf[e]] = function (e) {
                      return t.add(e)
                    }),
                      (r['notify' + hf[e]] = function () {
                        for (var e = [], r = 0; r < arguments.length; r++)
                          e[r] = arguments[r]
                        return t.notify.apply(
                          t,
                          (0, sa.__spreadArray)([], (0, sa.__read)(e), !1)
                        )
                      })
                  }),
                  r
                )
              })(),
              C = new Map(),
              _ = new Map(),
              E = {},
              A = (0, sa.__assign)({}, S)
            function P() {
              y && x && (R(), s(y, w, p.style, z.projection))
            }
            function R() {
              n(z, w, S, e, p)
            }
            function T() {
              k.notifyUpdate(S)
            }
            function M(t, e) {
              var r = e.onChange(function (e) {
                  ;(S[t] = e), p.onUpdate && Ea.update(T, !1, !0)
                }),
                n = e.onRenderRequest(z.scheduleRender)
              _.set(t, function () {
                r(), n()
              })
            }
            var O = d(p)
            for (var j in O) {
              var F = O[j]
              void 0 !== S[j] && Ps(F) && F.set(S[j], !1)
            }
            var D = ss(p),
              B = us(p),
              z = (0, sa.__assign)(
                (0, sa.__assign)(
                  {
                    treeType: r,
                    current: null,
                    depth: f ? f.depth + 1 : 0,
                    parent: f,
                    children: new Set(),
                    presenceId: h,
                    shouldReduceMotion: g,
                    variantChildren: B ? new Set() : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: Boolean(
                      null === f || void 0 === f ? void 0 : f.isMounted()
                    ),
                    blockInitialAnimation: m,
                    isMounted: function () {
                      return Boolean(y)
                    },
                    mount: function (t) {
                      ;(x = !0),
                        (y = z.current = t),
                        z.projection && z.projection.mount(t),
                        B &&
                          f &&
                          !D &&
                          (b =
                            null === f || void 0 === f
                              ? void 0
                              : f.addVariantChild(z)),
                        C.forEach(function (t, e) {
                          return M(e, t)
                        }),
                        null === f || void 0 === f || f.children.add(z),
                        z.setProps(p)
                    },
                    unmount: function () {
                      var t
                      null === (t = z.projection) ||
                        void 0 === t ||
                        t.unmount(),
                        xa.update(T),
                        xa.render(P),
                        _.forEach(function (t) {
                          return t()
                        }),
                        null === b || void 0 === b || b(),
                        null === f || void 0 === f || f.children.delete(z),
                        k.clearAllListeners(),
                        (y = void 0),
                        (x = !1)
                    },
                    addVariantChild: function (t) {
                      var e,
                        r = z.getClosestVariantNode()
                      if (r)
                        return (
                          null === (e = r.variantChildren) ||
                            void 0 === e ||
                            e.add(t),
                          function () {
                            return r.variantChildren.delete(t)
                          }
                        )
                    },
                    sortNodePosition: function (t) {
                      return c && r === t.treeType
                        ? c(z.getInstance(), t.getInstance())
                        : 0
                    },
                    getClosestVariantNode: function () {
                      return B
                        ? z
                        : null === f || void 0 === f
                        ? void 0
                        : f.getClosestVariantNode()
                    },
                    getLayoutId: function () {
                      return p.layoutId
                    },
                    getInstance: function () {
                      return y
                    },
                    getStaticValue: function (t) {
                      return S[t]
                    },
                    setStaticValue: function (t, e) {
                      return (S[t] = e)
                    },
                    getLatestValues: function () {
                      return S
                    },
                    setVisibility: function (t) {
                      z.isVisible !== t &&
                        ((z.isVisible = t), z.scheduleRender())
                    },
                    makeTargetAnimatable: function (t, e) {
                      return void 0 === e && (e = !0), i(z, t, p, e)
                    },
                    measureViewportBox: function () {
                      return a(y, p)
                    },
                    addValue: function (t, e) {
                      z.hasValue(t) && z.removeValue(t),
                        C.set(t, e),
                        (S[t] = e.get()),
                        M(t, e)
                    },
                    removeValue: function (t) {
                      var e
                      C.delete(t),
                        null === (e = _.get(t)) || void 0 === e || e(),
                        _.delete(t),
                        delete S[t],
                        l(t, w)
                    },
                    hasValue: function (t) {
                      return C.has(t)
                    },
                    getValue: function (t, e) {
                      var r = C.get(t)
                      return (
                        void 0 === r &&
                          void 0 !== e &&
                          ((r = od(e)), z.addValue(t, r)),
                        r
                      )
                    },
                    forEachValue: function (t) {
                      return C.forEach(t)
                    },
                    readValue: function (t) {
                      var r
                      return null !== (r = S[t]) && void 0 !== r
                        ? r
                        : u(y, t, e)
                    },
                    setBaseTarget: function (t, e) {
                      A[t] = e
                    },
                    getBaseTarget: function (t) {
                      if (o) {
                        var e = o(p, t)
                        if (void 0 !== e && !Ps(e)) return e
                      }
                      return A[t]
                    },
                  },
                  k
                ),
                {
                  build: function () {
                    return R(), w
                  },
                  scheduleRender: function () {
                    Ea.render(P, !1, !0)
                  },
                  syncRender: P,
                  setProps: function (t) {
                    ;(t.transformTemplate || p.transformTemplate) &&
                      z.scheduleRender(),
                      (p = t),
                      k.updatePropListeners(t),
                      (E = (function (t, e, r) {
                        var n
                        for (var o in e) {
                          var i = e[o],
                            a = r[o]
                          if (Ps(i)) t.addValue(o, i)
                          else if (Ps(a)) t.addValue(o, od(i))
                          else if (a !== i)
                            if (t.hasValue(o)) {
                              var s = t.getValue(o)
                              !s.hasAnimated && s.set(i)
                            } else
                              t.addValue(
                                o,
                                od(
                                  null !== (n = t.getStaticValue(o)) &&
                                    void 0 !== n
                                    ? n
                                    : i
                                )
                              )
                        }
                        for (var o in r) void 0 === e[o] && t.removeValue(o)
                        return e
                      })(z, d(p), E))
                  },
                  getProps: function () {
                    return p
                  },
                  getVariant: function (t) {
                    var e
                    return null === (e = p.variants) || void 0 === e
                      ? void 0
                      : e[t]
                  },
                  getDefaultTransition: function () {
                    return p.transition
                  },
                  getTransformPagePoint: function () {
                    return p.transformPagePoint
                  },
                  getVariantContext: function (t) {
                    if ((void 0 === t && (t = !1), t))
                      return null === f || void 0 === f
                        ? void 0
                        : f.getVariantContext()
                    if (!D) {
                      var e =
                        (null === f || void 0 === f
                          ? void 0
                          : f.getVariantContext()) || {}
                      return void 0 !== p.initial && (e.initial = p.initial), e
                    }
                    for (var r = {}, n = 0; n < gf; n++) {
                      var o = vf[n],
                        i = p[o]
                      ;(os(i) || !1 === i) && (r[o] = i)
                    }
                    return r
                  },
                }
              )
            return z
          }
        },
        vf = (0, sa.__spreadArray)(['initial'], (0, sa.__read)(gd), !1),
        gf = vf.length
      function yf(t) {
        return 'string' === typeof t && t.startsWith('var(--')
      }
      var bf = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/
      function xf(t, e, r) {
        void 0 === r && (r = 1),
          'Max CSS variable fallback depth detected in property "'.concat(
            t,
            '". This may indicate a circular fallback dependency.'
          )
        var n = (0, sa.__read)(
            (function (t) {
              var e = bf.exec(t)
              if (!e) return [,]
              var r = (0, sa.__read)(e, 3)
              return [r[1], r[2]]
            })(t),
            2
          ),
          o = n[0],
          i = n[1]
        if (o) {
          var a = window.getComputedStyle(e).getPropertyValue(o)
          return a ? a.trim() : yf(i) ? xf(i, e, r + 1) : i
        }
      }
      var Sf,
        wf = new Set([
          'width',
          'height',
          'top',
          'left',
          'right',
          'bottom',
          'x',
          'y',
        ]),
        kf = function (t) {
          return wf.has(t)
        },
        Cf = function (t, e) {
          t.set(e, !1), t.set(e)
        },
        _f = function (t) {
          return t === Ws || t === Vs
        }
      !(function (t) {
        ;(t.width = 'width'),
          (t.height = 'height'),
          (t.left = 'left'),
          (t.right = 'right'),
          (t.top = 'top'),
          (t.bottom = 'bottom')
      })(Sf || (Sf = {}))
      var Ef = function (t, e) {
          return parseFloat(t.split(', ')[e])
        },
        Af = function (t, e) {
          return function (r, n) {
            var o = n.transform
            if ('none' === o || !o) return 0
            var i = o.match(/^matrix3d\((.+)\)$/)
            if (i) return Ef(i[1], e)
            var a = o.match(/^matrix\((.+)\)$/)
            return a ? Ef(a[1], t) : 0
          }
        },
        Pf = new Set(['x', 'y', 'z']),
        Rf = Ss.filter(function (t) {
          return !Pf.has(t)
        })
      var Tf = {
          width: function (t, e) {
            var r = t.x,
              n = e.paddingLeft,
              o = void 0 === n ? '0' : n,
              i = e.paddingRight,
              a = void 0 === i ? '0' : i
            return r.max - r.min - parseFloat(o) - parseFloat(a)
          },
          height: function (t, e) {
            var r = t.y,
              n = e.paddingTop,
              o = void 0 === n ? '0' : n,
              i = e.paddingBottom,
              a = void 0 === i ? '0' : i
            return r.max - r.min - parseFloat(o) - parseFloat(a)
          },
          top: function (t, e) {
            var r = e.top
            return parseFloat(r)
          },
          left: function (t, e) {
            var r = e.left
            return parseFloat(r)
          },
          bottom: function (t, e) {
            var r = t.y,
              n = e.top
            return parseFloat(n) + (r.max - r.min)
          },
          right: function (t, e) {
            var r = t.x,
              n = e.left
            return parseFloat(n) + (r.max - r.min)
          },
          x: Af(4, 13),
          y: Af(5, 14),
        },
        Mf = function (t, e, r, n) {
          void 0 === r && (r = {}),
            void 0 === n && (n = {}),
            (e = (0, sa.__assign)({}, e)),
            (n = (0, sa.__assign)({}, n))
          var o = Object.keys(e).filter(kf),
            i = [],
            a = !1,
            s = []
          if (
            (o.forEach(function (o) {
              var u = t.getValue(o)
              if (t.hasValue(o)) {
                var l,
                  c = r[o],
                  d = sd(c),
                  f = e[o]
                if (xu(f)) {
                  var p = f.length,
                    h = null === f[0] ? 1 : 0
                  ;(c = f[h]), (d = sd(c))
                  for (var m = h; m < p; m++)
                    l ? sd(f[m]) : (l = sd(f[m])) === d || (_f(d) && _f(l))
                } else l = sd(f)
                if (d !== l)
                  if (_f(d) && _f(l)) {
                    var v = u.get()
                    'string' === typeof v && u.set(parseFloat(v)),
                      'string' === typeof f
                        ? (e[o] = parseFloat(f))
                        : Array.isArray(f) &&
                          l === Vs &&
                          (e[o] = f.map(parseFloat))
                  } else
                    (null === d || void 0 === d ? void 0 : d.transform) &&
                    (null === l || void 0 === l ? void 0 : l.transform) &&
                    (0 === c || 0 === f)
                      ? 0 === c
                        ? u.set(l.transform(c))
                        : (e[o] = d.transform(f))
                      : (a ||
                          ((i = (function (t) {
                            var e = []
                            return (
                              Rf.forEach(function (r) {
                                var n = t.getValue(r)
                                void 0 !== n &&
                                  (e.push([r, n.get()]),
                                  n.set(r.startsWith('scale') ? 1 : 0))
                              }),
                              e.length && t.syncRender(),
                              e
                            )
                          })(t)),
                          (a = !0)),
                        s.push(o),
                        (n[o] = void 0 !== n[o] ? n[o] : e[o]),
                        Cf(u, f))
              }
            }),
            s.length)
          ) {
            var u = s.indexOf('height') >= 0 ? window.pageYOffset : null,
              l = (function (t, e, r) {
                var n = e.measureViewportBox(),
                  o = e.getInstance(),
                  i = getComputedStyle(o),
                  a = i.display,
                  s = {}
                'none' === a &&
                  e.setStaticValue('display', t.display || 'block'),
                  r.forEach(function (t) {
                    s[t] = Tf[t](n, i)
                  }),
                  e.syncRender()
                var u = e.measureViewportBox()
                return (
                  r.forEach(function (r) {
                    var n = e.getValue(r)
                    Cf(n, s[r]), (t[r] = Tf[r](u, i))
                  }),
                  t
                )
              })(e, t, s)
            return (
              i.length &&
                i.forEach(function (e) {
                  var r = (0, sa.__read)(e, 2),
                    n = r[0],
                    o = r[1]
                  t.getValue(n).set(o)
                }),
              t.syncRender(),
              null !== u && window.scrollTo({ top: u }),
              { target: l, transitionEnd: n }
            )
          }
          return { target: e, transitionEnd: n }
        }
      function Of(t, e, r, n) {
        return (function (t) {
          return Object.keys(t).some(kf)
        })(e)
          ? Mf(t, e, r, n)
          : { target: e, transitionEnd: n }
      }
      var jf = function (t, e, r, n) {
        var o = (function (t, e, r) {
          var n,
            o = (0, sa.__rest)(e, []),
            i = t.getInstance()
          if (!(i instanceof Element)) return { target: o, transitionEnd: r }
          for (var a in (r && (r = (0, sa.__assign)({}, r)),
          t.forEachValue(function (t) {
            var e = t.get()
            if (yf(e)) {
              var r = xf(e, i)
              r && t.set(r)
            }
          }),
          o)) {
            var s = o[a]
            if (yf(s)) {
              var u = xf(s, i)
              u &&
                ((o[a] = u),
                r && ((null !== (n = r[a]) && void 0 !== n) || (r[a] = s)))
            }
          }
          return { target: o, transitionEnd: r }
        })(t, e, n)
        return Of(t, (e = o.target), r, (n = o.transitionEnd))
      }
      var Ff = {
          treeType: 'dom',
          readValueFromInstance: function (t, e) {
            if (Cs(e)) {
              var r = Uc(e)
              return (r && r.default) || 0
            }
            var n,
              o = ((n = t), window.getComputedStyle(n))
            return (Ts(e) ? o.getPropertyValue(e) : o[e]) || 0
          },
          sortNodePosition: function (t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1
          },
          getBaseTarget: function (t, e) {
            var r
            return null === (r = t.style) || void 0 === r ? void 0 : r[e]
          },
          measureViewportBox: function (t, e) {
            return lf(t, e.transformPagePoint)
          },
          resetTransform: function (t, e, r) {
            var n = r.transformTemplate
            ;(e.style.transform = n ? n({}, '') : 'none'), t.scheduleRender()
          },
          restoreTransform: function (t, e) {
            t.style.transform = e.style.transform
          },
          removeValueFromRenderState: function (t, e) {
            var r = e.vars,
              n = e.style
            delete r[t], delete n[t]
          },
          makeTargetAnimatable: function (t, e, r, n) {
            var o = r.transformValues
            void 0 === n && (n = !0)
            var i = e.transition,
              a = e.transitionEnd,
              s = (0, sa.__rest)(e, ['transition', 'transitionEnd']),
              u = (function (t, e, r) {
                var n,
                  o,
                  i = {}
                for (var a in t)
                  i[a] =
                    null !== (n = fd(a, e)) && void 0 !== n
                      ? n
                      : null === (o = r.getValue(a)) || void 0 === o
                      ? void 0
                      : o.get()
                return i
              })(s, i || {}, t)
            if ((o && (a && (a = o(a)), s && (s = o(s)), u && (u = o(u))), n)) {
              !(function (t, e, r) {
                var n,
                  o,
                  i,
                  a,
                  s = Object.keys(e).filter(function (e) {
                    return !t.hasValue(e)
                  }),
                  u = s.length
                if (u)
                  for (var l = 0; l < u; l++) {
                    var c = s[l],
                      d = e[c],
                      f = null
                    Array.isArray(d) && (f = d[0]),
                      null === f &&
                        (f =
                          null !==
                            (o =
                              null !== (n = r[c]) && void 0 !== n
                                ? n
                                : t.readValue(c)) && void 0 !== o
                            ? o
                            : e[c]),
                      void 0 !== f &&
                        null !== f &&
                        ('string' === typeof f &&
                        (/^\-?\d*\.?\d+$/.test(f) || Jc(f))
                          ? (f = parseFloat(f))
                          : !ld(f) && ql.test(d) && (f = Nc(c, d)),
                        t.addValue(c, od(f)),
                        (null !== (i = (a = r)[c]) && void 0 !== i) ||
                          (a[c] = f),
                        t.setBaseTarget(c, f))
                  }
              })(t, s, u)
              var l = jf(t, s, u, a)
              ;(a = l.transitionEnd), (s = l.target)
            }
            return (0, sa.__assign)({ transition: i, transitionEnd: a }, s)
          },
          scrapeMotionValuesFromProps: gu,
          build: function (t, e, r, n, o) {
            void 0 !== t.isVisible &&
              (e.style.visibility = t.isVisible ? 'visible' : 'hidden'),
              Ys(e, r, n, o.transformTemplate)
          },
          render: hu,
        },
        Df = mf(Ff),
        Bf = mf(
          (0, sa.__assign)((0, sa.__assign)({}, Ff), {
            getBaseTarget: function (t, e) {
              return t[e]
            },
            readValueFromInstance: function (t, e) {
              var r
              return Cs(e)
                ? (null === (r = Uc(e)) || void 0 === r ? void 0 : r.default) ||
                    0
                : ((e = mu.has(e) ? e : pu(e)), t.getAttribute(e))
            },
            scrapeMotionValuesFromProps: yu,
            build: function (t, e, r, n, o) {
              uu(e, r, n, o.transformTemplate)
            },
            render: vu,
          })
        ),
        zf = function (t, e) {
          return ys(t)
            ? Bf(e, { enableHardwareAcceleration: !1 })
            : Df(e, { enableHardwareAcceleration: !0 })
        }
      function If(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100
      }
      var $f = {
          correct: function (t, e) {
            if (!e.target) return t
            if ('string' === typeof t) {
              if (!Vs.test(t)) return t
              t = parseFloat(t)
            }
            var r = If(t, e.target.x),
              n = If(t, e.target.y)
            return ''.concat(r, '% ').concat(n, '%')
          },
        },
        Lf = '_$css',
        Vf = {
          correct: function (t, e) {
            var r = e.treeScale,
              n = e.projectionDelta,
              o = t,
              i = t.includes('var('),
              a = []
            i &&
              (t = t.replace(bf, function (t) {
                return a.push(t), Lf
              }))
            var s = ql.parse(t)
            if (s.length > 5) return o
            var u = ql.createTransformer(t),
              l = 'number' !== typeof s[0] ? 1 : 0,
              c = n.x.scale * r.x,
              d = n.y.scale * r.y
            ;(s[0 + l] /= c), (s[1 + l] /= d)
            var f = xl(c, d, 0.5)
            'number' === typeof s[2 + l] && (s[2 + l] /= f),
              'number' === typeof s[3 + l] && (s[3 + l] /= f)
            var p = u(s)
            if (i) {
              var h = 0
              p = p.replace(Lf, function () {
                var t = a[h]
                return h++, t
              })
            }
            return p
          },
        },
        qf = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this
          }
          return (
            (0, sa.__extends)(e, t),
            (e.prototype.componentDidMount = function () {
              var t,
                e = this,
                r = this.props,
                n = r.visualElement,
                o = r.layoutGroup,
                i = r.switchLayoutGroup,
                a = r.layoutId,
                s = n.projection
              ;(t = Uf),
                Object.assign(bs, t),
                s &&
                  ((null === o || void 0 === o ? void 0 : o.group) &&
                    o.group.add(s),
                  (null === i || void 0 === i ? void 0 : i.register) &&
                    a &&
                    i.register(s),
                  s.root.didUpdate(),
                  s.addEventListener('animationComplete', function () {
                    e.safeToRemove()
                  }),
                  s.setOptions(
                    (0, sa.__assign)((0, sa.__assign)({}, s.options), {
                      onExitComplete: function () {
                        return e.safeToRemove()
                      },
                    })
                  )),
                (ds.hasEverUpdated = !0)
            }),
            (e.prototype.getSnapshotBeforeUpdate = function (t) {
              var e = this,
                r = this.props,
                n = r.layoutDependency,
                o = r.visualElement,
                i = r.drag,
                a = r.isPresent,
                s = o.projection
              return s
                ? ((s.isPresent = a),
                  i || t.layoutDependency !== n || void 0 === n
                    ? s.willUpdate()
                    : this.safeToRemove(),
                  t.isPresent !== a &&
                    (a
                      ? s.promote()
                      : s.relegate() ||
                        Ea.postRender(function () {
                          var t
                          ;(null === (t = s.getStack()) || void 0 === t
                            ? void 0
                            : t.members.length) || e.safeToRemove()
                        })),
                  null)
                : null
            }),
            (e.prototype.componentDidUpdate = function () {
              var t = this.props.visualElement.projection
              t &&
                (t.root.didUpdate(),
                !t.currentAnimation && t.isLead() && this.safeToRemove())
            }),
            (e.prototype.componentWillUnmount = function () {
              var t = this.props,
                e = t.visualElement,
                r = t.layoutGroup,
                n = t.switchLayoutGroup,
                o = e.projection
              o &&
                (o.scheduleCheckAfterUnmount(),
                (null === r || void 0 === r ? void 0 : r.group) &&
                  r.group.remove(o),
                (null === n || void 0 === n ? void 0 : n.deregister) &&
                  n.deregister(o))
            }),
            (e.prototype.safeToRemove = function () {
              var t = this.props.safeToRemove
              null === t || void 0 === t || t()
            }),
            (e.prototype.render = function () {
              return null
            }),
            e
          )
        })(i.Component)
      var Uf = {
          borderRadius: (0, sa.__assign)((0, sa.__assign)({}, $f), {
            applyTo: [
              'borderTopLeftRadius',
              'borderTopRightRadius',
              'borderBottomLeftRadius',
              'borderBottomRightRadius',
            ],
          }),
          borderTopLeftRadius: $f,
          borderTopRightRadius: $f,
          borderBottomLeftRadius: $f,
          borderBottomRightRadius: $f,
          boxShadow: Vf,
        },
        Nf = {
          measureLayout: function (t) {
            var e = (0, sa.__read)(Ua(), 2),
              r = e[0],
              n = e[1],
              o = (0, i.useContext)(za)
            return i.createElement(
              qf,
              (0, sa.__assign)({}, t, {
                layoutGroup: o,
                switchLayoutGroup: (0, i.useContext)(ps),
                isPresent: r,
                safeToRemove: n,
              })
            )
          },
        }
      var Wf = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
        Hf = Wf.length,
        Qf = function (t) {
          return 'string' === typeof t ? parseFloat(t) : t
        },
        Gf = function (t) {
          return 'number' === typeof t || Vs.test(t)
        }
      function Kf(t, e) {
        var r
        return null !== (r = t[e]) && void 0 !== r ? r : t.borderRadius
      }
      var Yf = Zf(0, 0.5, sc),
        Xf = Zf(0.5, 0.95, ec)
      function Zf(t, e, r) {
        return function (n) {
          return n < t ? 0 : n > e ? 1 : r(bl(t, e, n))
        }
      }
      function Jf(t, e) {
        ;(t.min = e.min), (t.max = e.max)
      }
      function tp(t, e) {
        Jf(t.x, e.x), Jf(t.y, e.y)
      }
      function ep(t, e, r, n, o) {
        return (
          (t = Jd((t -= e), 1 / r, n)), void 0 !== o && (t = Jd(t, 1 / o, n)), t
        )
      }
      function rp(t, e, r, n, o) {
        var i = (0, sa.__read)(r, 3),
          a = i[0],
          s = i[1],
          u = i[2]
        !(function (t, e, r, n, o, i, a) {
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = 1),
            void 0 === n && (n = 0.5),
            void 0 === i && (i = t),
            void 0 === a && (a = t),
            Ls.test(e) &&
              ((e = parseFloat(e)), (e = xl(a.min, a.max, e / 100) - a.min)),
            'number' === typeof e)
          ) {
            var s = xl(i.min, i.max, n)
            t === i && (s -= e),
              (t.min = ep(t.min, e, r, s, o)),
              (t.max = ep(t.max, e, r, s, o))
          }
        })(t, e[a], e[s], e[u], e.scale, n, o)
      }
      var np = ['x', 'scaleX', 'originX'],
        op = ['y', 'scaleY', 'originY']
      function ip(t, e, r, n) {
        rp(
          t.x,
          e,
          np,
          null === r || void 0 === r ? void 0 : r.x,
          null === n || void 0 === n ? void 0 : n.x
        ),
          rp(
            t.y,
            e,
            op,
            null === r || void 0 === r ? void 0 : r.y,
            null === n || void 0 === n ? void 0 : n.y
          )
      }
      function ap(t) {
        return 0 === t.translate && 1 === t.scale
      }
      function sp(t) {
        return ap(t.x) && ap(t.y)
      }
      function up(t, e) {
        return (
          t.x.min === e.x.min &&
          t.x.max === e.x.max &&
          t.y.min === e.y.min &&
          t.y.max === e.y.max
        )
      }
      var lp = (function () {
        function t() {
          this.members = []
        }
        return (
          (t.prototype.add = function (t) {
            td(this.members, t), t.scheduleRender()
          }),
          (t.prototype.remove = function (t) {
            if (
              (ed(this.members, t),
              t === this.prevLead && (this.prevLead = void 0),
              t === this.lead)
            ) {
              var e = this.members[this.members.length - 1]
              e && this.promote(e)
            }
          }),
          (t.prototype.relegate = function (t) {
            var e,
              r = this.members.findIndex(function (e) {
                return t === e
              })
            if (0 === r) return !1
            for (var n = r; n >= 0; n--) {
              var o = this.members[n]
              if (!1 !== o.isPresent) {
                e = o
                break
              }
            }
            return !!e && (this.promote(e), !0)
          }),
          (t.prototype.promote = function (t, e) {
            var r,
              n = this.lead
            t !== n &&
              ((this.prevLead = n),
              (this.lead = t),
              t.show(),
              n &&
                (n.instance && n.scheduleRender(),
                t.scheduleRender(),
                (t.resumeFrom = n),
                e && (t.resumeFrom.preserveOpacity = !0),
                n.snapshot &&
                  ((t.snapshot = n.snapshot),
                  (t.snapshot.latestValues =
                    n.animationValues || n.latestValues),
                  (t.snapshot.isShared = !0)),
                (null === (r = t.root) || void 0 === r
                  ? void 0
                  : r.isUpdating) && (t.isLayoutDirty = !0),
                !1 === t.options.crossfade && n.hide()))
          }),
          (t.prototype.exitAnimationComplete = function () {
            this.members.forEach(function (t) {
              var e, r, n, o, i
              null === (r = (e = t.options).onExitComplete) ||
                void 0 === r ||
                r.call(e),
                null ===
                  (i =
                    null === (n = t.resumingFrom) || void 0 === n
                      ? void 0
                      : (o = n.options).onExitComplete) ||
                  void 0 === i ||
                  i.call(o)
            })
          }),
          (t.prototype.scheduleRender = function () {
            this.members.forEach(function (t) {
              t.instance && t.scheduleRender(!1)
            })
          }),
          (t.prototype.removeLeadSnapshot = function () {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
          }),
          t
        )
      })()
      function cp(t, e, r) {
        var n = t.x.translate / e.x,
          o = t.y.translate / e.y,
          i = 'translate3d('.concat(n, 'px, ').concat(o, 'px, 0) ')
        if (((i += 'scale('.concat(1 / e.x, ', ').concat(1 / e.y, ') ')), r)) {
          var a = r.rotate,
            s = r.rotateX,
            u = r.rotateY
          a && (i += 'rotate('.concat(a, 'deg) ')),
            s && (i += 'rotateX('.concat(s, 'deg) ')),
            u && (i += 'rotateY('.concat(u, 'deg) '))
        }
        var l = t.x.scale * e.x,
          c = t.y.scale * e.y
        return 'translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)' ===
          (i += 'scale('.concat(l, ', ').concat(c, ')'))
          ? 'none'
          : i
      }
      var dp = function (t, e) {
          return t.depth - e.depth
        },
        fp = (function () {
          function t() {
            ;(this.children = []), (this.isDirty = !1)
          }
          return (
            (t.prototype.add = function (t) {
              td(this.children, t), (this.isDirty = !0)
            }),
            (t.prototype.remove = function (t) {
              ed(this.children, t), (this.isDirty = !0)
            }),
            (t.prototype.forEach = function (t) {
              this.isDirty && this.children.sort(dp),
                (this.isDirty = !1),
                this.children.forEach(t)
            }),
            t
          )
        })()
      function pp(t) {
        var e = t.attachResizeListener,
          r = t.defaultParent,
          n = t.measureScroll,
          o = t.checkIsScrollRoot,
          i = t.resetTransform
        return (function () {
          function t(t, e, n) {
            var o = this
            void 0 === e && (e = {}),
              void 0 === n && (n = null === r || void 0 === r ? void 0 : r()),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = function () {
                o.isUpdating && ((o.isUpdating = !1), o.clearAllSnapshots())
              }),
              (this.updateProjection = function () {
                o.nodes.forEach(xp), o.nodes.forEach(Sp)
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.id = t),
              (this.latestValues = e),
              (this.root = n ? n.root || n : this),
              (this.path = n
                ? (0, sa.__spreadArray)(
                    (0, sa.__spreadArray)([], (0, sa.__read)(n.path), !1),
                    [n],
                    !1
                  )
                : []),
              (this.parent = n),
              (this.depth = n ? n.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this)
            for (var i = 0; i < this.path.length; i++)
              this.path[i].shouldResetTransform = !0
            this.root === this && (this.nodes = new fp())
          }
          return (
            (t.prototype.addEventListener = function (t, e) {
              return (
                this.eventHandlers.has(t) ||
                  this.eventHandlers.set(t, new rd()),
                this.eventHandlers.get(t).add(e)
              )
            }),
            (t.prototype.notifyListeners = function (t) {
              for (var e = [], r = 1; r < arguments.length; r++)
                e[r - 1] = arguments[r]
              var n = this.eventHandlers.get(t)
              null === n ||
                void 0 === n ||
                n.notify.apply(
                  n,
                  (0, sa.__spreadArray)([], (0, sa.__read)(e), !1)
                )
            }),
            (t.prototype.hasListeners = function (t) {
              return this.eventHandlers.has(t)
            }),
            (t.prototype.registerPotentialNode = function (t, e) {
              this.potentialNodes.set(t, e)
            }),
            (t.prototype.mount = function (t, r) {
              var n,
                o = this
              if ((void 0 === r && (r = !1), !this.instance)) {
                ;(this.isSVG = t instanceof SVGElement && 'svg' !== t.tagName),
                  (this.instance = t)
                var i = this.options,
                  a = i.layoutId,
                  s = i.layout,
                  u = i.visualElement
                if (
                  (u && !u.getInstance() && u.mount(t),
                  this.root.nodes.add(this),
                  null === (n = this.parent) ||
                    void 0 === n ||
                    n.children.add(this),
                  this.id && this.root.potentialNodes.delete(this.id),
                  r && (s || a) && (this.isLayoutDirty = !0),
                  e)
                ) {
                  var l,
                    c = function () {
                      return (o.root.updateBlockedByResize = !1)
                    }
                  e(t, function () {
                    ;(o.root.updateBlockedByResize = !0),
                      clearTimeout(l),
                      (l = window.setTimeout(c, 250)),
                      ds.hasAnimatedSinceResize &&
                        ((ds.hasAnimatedSinceResize = !1), o.nodes.forEach(bp))
                  })
                }
                a && this.root.registerSharedNode(a, this),
                  !1 !== this.options.animate &&
                    u &&
                    (a || s) &&
                    this.addEventListener('didUpdate', function (t) {
                      var e,
                        r,
                        n,
                        i,
                        a,
                        s = t.delta,
                        l = t.hasLayoutChanged,
                        c = t.hasRelativeTargetChanged,
                        d = t.layout
                      if (o.isTreeAnimationBlocked())
                        return (
                          (o.target = void 0), void (o.relativeTarget = void 0)
                        )
                      var f =
                          null !==
                            (r =
                              null !== (e = o.options.transition) &&
                              void 0 !== e
                                ? e
                                : u.getDefaultTransition()) && void 0 !== r
                            ? r
                            : Ap,
                        p = u.getProps(),
                        h = p.onLayoutAnimationStart,
                        m = p.onLayoutAnimationComplete,
                        v = !o.targetLayout || !up(o.targetLayout, d) || c,
                        g = !l && c
                      if (
                        (null === (n = o.resumeFrom) || void 0 === n
                          ? void 0
                          : n.instance) ||
                        g ||
                        (l && (v || !o.currentAnimation))
                      ) {
                        o.resumeFrom &&
                          ((o.resumingFrom = o.resumeFrom),
                          (o.resumingFrom.resumingFrom = void 0)),
                          o.setAnimationOrigin(s, g)
                        var y = (0, sa.__assign)(
                          (0, sa.__assign)({}, Xc(f, 'layout')),
                          { onPlay: h, onComplete: m }
                        )
                        u.shouldReduceMotion && ((y.delay = 0), (y.type = !1)),
                          o.startAnimation(y)
                      } else l || 0 !== o.animationProgress || o.finishAnimation(), o.isLead() && (null === (a = (i = o.options).onExitComplete) || void 0 === a || a.call(i))
                      o.targetLayout = d
                    })
              }
            }),
            (t.prototype.unmount = function () {
              var t, e
              this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this),
                null === (t = this.getStack()) ||
                  void 0 === t ||
                  t.remove(this),
                null === (e = this.parent) ||
                  void 0 === e ||
                  e.children.delete(this),
                (this.instance = void 0),
                xa.preRender(this.updateProjection)
            }),
            (t.prototype.blockUpdate = function () {
              this.updateManuallyBlocked = !0
            }),
            (t.prototype.unblockUpdate = function () {
              this.updateManuallyBlocked = !1
            }),
            (t.prototype.isUpdateBlocked = function () {
              return this.updateManuallyBlocked || this.updateBlockedByResize
            }),
            (t.prototype.isTreeAnimationBlocked = function () {
              var t
              return (
                this.isAnimationBlocked ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isTreeAnimationBlocked()) ||
                !1
              )
            }),
            (t.prototype.startUpdate = function () {
              var t
              this.isUpdateBlocked() ||
                ((this.isUpdating = !0),
                null === (t = this.nodes) || void 0 === t || t.forEach(wp))
            }),
            (t.prototype.willUpdate = function (t) {
              var e, r, n
              if ((void 0 === t && (t = !0), this.root.isUpdateBlocked()))
                null === (r = (e = this.options).onExitComplete) ||
                  void 0 === r ||
                  r.call(e)
              else if (
                (!this.root.isUpdating && this.root.startUpdate(),
                !this.isLayoutDirty)
              ) {
                this.isLayoutDirty = !0
                for (var o = 0; o < this.path.length; o++) {
                  var i = this.path[o]
                  ;(i.shouldResetTransform = !0), i.updateScroll()
                }
                var a = this.options,
                  s = a.layoutId,
                  u = a.layout
                if (void 0 !== s || u) {
                  var l =
                    null === (n = this.options.visualElement) || void 0 === n
                      ? void 0
                      : n.getProps().transformTemplate
                  ;(this.prevTransformTemplateValue =
                    null === l || void 0 === l
                      ? void 0
                      : l(this.latestValues, '')),
                    this.updateSnapshot(),
                    t && this.notifyListeners('willUpdate')
                }
              }
            }),
            (t.prototype.didUpdate = function () {
              if (this.isUpdateBlocked())
                return (
                  this.unblockUpdate(),
                  this.clearAllSnapshots(),
                  void this.nodes.forEach(gp)
                )
              this.isUpdating &&
                ((this.isUpdating = !1),
                this.potentialNodes.size &&
                  (this.potentialNodes.forEach(Pp),
                  this.potentialNodes.clear()),
                this.nodes.forEach(yp),
                this.nodes.forEach(hp),
                this.nodes.forEach(mp),
                this.clearAllSnapshots(),
                Sa.update(),
                Sa.preRender(),
                Sa.render())
            }),
            (t.prototype.clearAllSnapshots = function () {
              this.nodes.forEach(vp), this.sharedNodes.forEach(kp)
            }),
            (t.prototype.scheduleUpdateProjection = function () {
              Ea.preRender(this.updateProjection, !1, !0)
            }),
            (t.prototype.scheduleCheckAfterUnmount = function () {
              var t = this
              Ea.postRender(function () {
                t.isLayoutDirty
                  ? t.root.didUpdate()
                  : t.root.checkUpdateFailed()
              })
            }),
            (t.prototype.updateSnapshot = function () {
              if (!this.snapshot && this.instance) {
                var t = this.measure(),
                  e = this.removeTransform(this.removeElementScroll(t))
                Tp(e),
                  (this.snapshot = { measured: t, layout: e, latestValues: {} })
              }
            }),
            (t.prototype.updateLayout = function () {
              var t
              if (
                this.instance &&
                (this.updateScroll(),
                (this.options.alwaysMeasureLayout && this.isLead()) ||
                  this.isLayoutDirty)
              ) {
                if (this.resumeFrom && !this.resumeFrom.instance)
                  for (var e = 0; e < this.path.length; e++) {
                    this.path[e].updateScroll()
                  }
                var r = this.measure()
                Tp(r)
                var n = this.layout
                ;(this.layout = {
                  measured: r,
                  actual: this.removeElementScroll(r),
                }),
                  (this.layoutCorrected = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  }),
                  (this.isLayoutDirty = !1),
                  (this.projectionDelta = void 0),
                  this.notifyListeners('measure', this.layout.actual),
                  null === (t = this.options.visualElement) ||
                    void 0 === t ||
                    t.notifyLayoutMeasure(
                      this.layout.actual,
                      null === n || void 0 === n ? void 0 : n.actual
                    )
              }
            }),
            (t.prototype.updateScroll = function () {
              this.options.layoutScroll &&
                this.instance &&
                ((this.isScrollRoot = o(this.instance)),
                (this.scroll = n(this.instance)))
            }),
            (t.prototype.resetTransform = function () {
              var t
              if (i) {
                var e = this.isLayoutDirty || this.shouldResetTransform,
                  r = this.projectionDelta && !sp(this.projectionDelta),
                  n =
                    null === (t = this.options.visualElement) || void 0 === t
                      ? void 0
                      : t.getProps().transformTemplate,
                  o =
                    null === n || void 0 === n
                      ? void 0
                      : n(this.latestValues, ''),
                  a = o !== this.prevTransformTemplateValue
                e &&
                  (r || Xd(this.latestValues) || a) &&
                  (i(this.instance, o),
                  (this.shouldResetTransform = !1),
                  this.scheduleRender())
              }
            }),
            (t.prototype.measure = function () {
              var t = this.options.visualElement
              if (!t) return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }
              var e = t.measureViewportBox(),
                r = this.root.scroll
              return r && (nf(e.x, r.x), nf(e.y, r.y)), e
            }),
            (t.prototype.removeElementScroll = function (t) {
              var e = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }
              tp(e, t)
              for (var r = 0; r < this.path.length; r++) {
                var n = this.path[r],
                  o = n.scroll,
                  i = n.options,
                  a = n.isScrollRoot
                if (n !== this.root && o && i.layoutScroll) {
                  if (a) {
                    tp(e, t)
                    var s = this.root.scroll
                    s && (nf(e.x, -s.x), nf(e.y, -s.y))
                  }
                  nf(e.x, o.x), nf(e.y, o.y)
                }
              }
              return e
            }),
            (t.prototype.applyTransform = function (t, e) {
              void 0 === e && (e = !1)
              var r = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }
              tp(r, t)
              for (var n = 0; n < this.path.length; n++) {
                var o = this.path[n]
                !e &&
                  o.options.layoutScroll &&
                  o.scroll &&
                  o !== o.root &&
                  uf(r, { x: -o.scroll.x, y: -o.scroll.y }),
                  Xd(o.latestValues) && uf(r, o.latestValues)
              }
              return Xd(this.latestValues) && uf(r, this.latestValues), r
            }),
            (t.prototype.removeTransform = function (t) {
              var e,
                r = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }
              tp(r, t)
              for (var n = 0; n < this.path.length; n++) {
                var o = this.path[n]
                if (o.instance && Xd(o.latestValues)) {
                  Yd(o.latestValues) && o.updateSnapshot()
                  var i = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }
                  tp(i, o.measure()),
                    ip(
                      r,
                      o.latestValues,
                      null === (e = o.snapshot) || void 0 === e
                        ? void 0
                        : e.layout,
                      i
                    )
                }
              }
              return Xd(this.latestValues) && ip(r, this.latestValues), r
            }),
            (t.prototype.setTargetDelta = function (t) {
              ;(this.targetDelta = t), this.root.scheduleUpdateProjection()
            }),
            (t.prototype.setOptions = function (t) {
              var e
              this.options = (0, sa.__assign)(
                (0, sa.__assign)((0, sa.__assign)({}, this.options), t),
                { crossfade: null === (e = t.crossfade) || void 0 === e || e }
              )
            }),
            (t.prototype.clearMeasurements = function () {
              ;(this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1)
            }),
            (t.prototype.resolveTargetDelta = function () {
              var t,
                e,
                r,
                n,
                o = this.options,
                i = o.layout,
                a = o.layoutId
              this.layout &&
                (i || a) &&
                (this.targetDelta ||
                  this.relativeTarget ||
                  ((this.relativeParent = this.getClosestProjectingParent()),
                  this.relativeParent &&
                    this.relativeParent.layout &&
                    ((this.relativeTarget = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    (this.relativeTargetOrigin = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    Vd(
                      this.relativeTargetOrigin,
                      this.layout.actual,
                      this.relativeParent.layout.actual
                    ),
                    tp(this.relativeTarget, this.relativeTargetOrigin))),
                (this.relativeTarget || this.targetDelta) &&
                  (this.target ||
                    ((this.target = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    (this.targetWithTransforms = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    })),
                  this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  (null === (t = this.relativeParent) || void 0 === t
                    ? void 0
                    : t.target)
                    ? ((e = this.target),
                      (r = this.relativeTarget),
                      (n = this.relativeParent.target),
                      $d(e.x, r.x, n.x),
                      $d(e.y, r.y, n.y))
                    : this.targetDelta
                    ? (Boolean(this.resumingFrom)
                        ? (this.target = this.applyTransform(
                            this.layout.actual
                          ))
                        : tp(this.target, this.layout.actual),
                      rf(this.target, this.targetDelta))
                    : tp(this.target, this.layout.actual),
                  this.attemptToResolveRelativeTarget &&
                    ((this.attemptToResolveRelativeTarget = !1),
                    (this.relativeParent = this.getClosestProjectingParent()),
                    this.relativeParent &&
                      Boolean(this.relativeParent.resumingFrom) ===
                        Boolean(this.resumingFrom) &&
                      !this.relativeParent.options.layoutScroll &&
                      this.relativeParent.target &&
                      ((this.relativeTarget = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      (this.relativeTargetOrigin = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      Vd(
                        this.relativeTargetOrigin,
                        this.target,
                        this.relativeParent.target
                      ),
                      tp(this.relativeTarget, this.relativeTargetOrigin)))))
            }),
            (t.prototype.getClosestProjectingParent = function () {
              if (this.parent && !Xd(this.parent.latestValues))
                return (this.parent.relativeTarget ||
                  this.parent.targetDelta) &&
                  this.parent.layout
                  ? this.parent
                  : this.parent.getClosestProjectingParent()
            }),
            (t.prototype.calcProjection = function () {
              var t,
                e = this.options,
                r = e.layout,
                n = e.layoutId
              if (
                ((this.isTreeAnimating = Boolean(
                  (null === (t = this.parent) || void 0 === t
                    ? void 0
                    : t.isTreeAnimating) ||
                    this.currentAnimation ||
                    this.pendingAnimation
                )),
                this.isTreeAnimating ||
                  (this.targetDelta = this.relativeTarget = void 0),
                this.layout && (r || n))
              ) {
                var o = this.getLead()
                tp(this.layoutCorrected, this.layout.actual),
                  (function (t, e, r, n) {
                    var o, i
                    void 0 === n && (n = !1)
                    var a = r.length
                    if (a) {
                      var s, u
                      e.x = e.y = 1
                      for (var l = 0; l < a; l++)
                        (u = (s = r[l]).projectionDelta),
                          'contents' !==
                            (null ===
                              (i =
                                null === (o = s.instance) || void 0 === o
                                  ? void 0
                                  : o.style) || void 0 === i
                              ? void 0
                              : i.display) &&
                            (n &&
                              s.options.layoutScroll &&
                              s.scroll &&
                              s !== s.root &&
                              uf(t, { x: -s.scroll.x, y: -s.scroll.y }),
                            u &&
                              ((e.x *= u.x.scale),
                              (e.y *= u.y.scale),
                              rf(t, u)),
                            n && Xd(s.latestValues) && uf(t, s.latestValues))
                    }
                  })(
                    this.layoutCorrected,
                    this.treeScale,
                    this.path,
                    Boolean(this.resumingFrom) || this !== o
                  )
                var i = o.target
                if (i) {
                  this.projectionDelta ||
                    ((this.projectionDelta = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    }),
                    (this.projectionDeltaWithTransform = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    }))
                  var a = this.treeScale.x,
                    s = this.treeScale.y,
                    u = this.projectionTransform
                  Id(
                    this.projectionDelta,
                    this.layoutCorrected,
                    i,
                    this.latestValues
                  ),
                    (this.projectionTransform = cp(
                      this.projectionDelta,
                      this.treeScale
                    )),
                    (this.projectionTransform === u &&
                      this.treeScale.x === a &&
                      this.treeScale.y === s) ||
                      ((this.hasProjected = !0),
                      this.scheduleRender(),
                      this.notifyListeners('projectionUpdate', i))
                }
              }
            }),
            (t.prototype.hide = function () {
              this.isVisible = !1
            }),
            (t.prototype.show = function () {
              this.isVisible = !0
            }),
            (t.prototype.scheduleRender = function (t) {
              var e, r, n
              void 0 === t && (t = !0),
                null === (r = (e = this.options).scheduleRender) ||
                  void 0 === r ||
                  r.call(e),
                t &&
                  (null === (n = this.getStack()) ||
                    void 0 === n ||
                    n.scheduleRender()),
                this.resumingFrom &&
                  !this.resumingFrom.instance &&
                  (this.resumingFrom = void 0)
            }),
            (t.prototype.setAnimationOrigin = function (t, e) {
              var r,
                n = this
              void 0 === e && (e = !1)
              var o = this.snapshot,
                i =
                  (null === o || void 0 === o ? void 0 : o.latestValues) || {},
                a = (0, sa.__assign)({}, this.latestValues),
                s = {
                  x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                  y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                }
              ;(this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !e)
              var u = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
                l = null === o || void 0 === o ? void 0 : o.isShared,
                c =
                  ((null === (r = this.getStack()) || void 0 === r
                    ? void 0
                    : r.members.length) || 0) <= 1,
                d = Boolean(
                  l &&
                    !c &&
                    !0 === this.options.crossfade &&
                    !this.path.some(Ep)
                )
              ;(this.animationProgress = 0),
                (this.mixTargetDelta = function (e) {
                  var r,
                    o = e / 1e3
                  Cp(s.x, t.x, o),
                    Cp(s.y, t.y, o),
                    n.setTargetDelta(s),
                    n.relativeTarget &&
                      n.relativeTargetOrigin &&
                      n.layout &&
                      (null === (r = n.relativeParent) || void 0 === r
                        ? void 0
                        : r.layout) &&
                      (Vd(u, n.layout.actual, n.relativeParent.layout.actual),
                      (function (t, e, r, n) {
                        _p(t.x, e.x, r.x, n), _p(t.y, e.y, r.y, n)
                      })(n.relativeTarget, n.relativeTargetOrigin, u, o)),
                    l &&
                      ((n.animationValues = a),
                      (function (t, e, r, n, o, i) {
                        var a, s, u, l
                        o
                          ? ((t.opacity = xl(
                              0,
                              null !== (a = r.opacity) && void 0 !== a ? a : 1,
                              Yf(n)
                            )),
                            (t.opacityExit = xl(
                              null !== (s = e.opacity) && void 0 !== s ? s : 1,
                              0,
                              Xf(n)
                            )))
                          : i &&
                            (t.opacity = xl(
                              null !== (u = e.opacity) && void 0 !== u ? u : 1,
                              null !== (l = r.opacity) && void 0 !== l ? l : 1,
                              n
                            ))
                        for (var c = 0; c < Hf; c++) {
                          var d = 'border'.concat(Wf[c], 'Radius'),
                            f = Kf(e, d),
                            p = Kf(r, d)
                          ;(void 0 === f && void 0 === p) ||
                            (f || (f = 0),
                            p || (p = 0),
                            0 === f || 0 === p || Gf(f) === Gf(p)
                              ? ((t[d] = Math.max(xl(Qf(f), Qf(p), n), 0)),
                                (Ls.test(p) || Ls.test(f)) && (t[d] += '%'))
                              : (t[d] = p))
                        }
                        ;(e.rotate || r.rotate) &&
                          (t.rotate = xl(e.rotate || 0, r.rotate || 0, n))
                      })(a, i, n.latestValues, o, d, c)),
                    n.root.scheduleUpdateProjection(),
                    n.scheduleRender(),
                    (n.animationProgress = o)
                }),
                this.mixTargetDelta(0)
            }),
            (t.prototype.startAnimation = function (t) {
              var e,
                r,
                n = this
              this.notifyListeners('animationStart'),
                null === (e = this.currentAnimation) ||
                  void 0 === e ||
                  e.stop(),
                this.resumingFrom &&
                  (null === (r = this.resumingFrom.currentAnimation) ||
                    void 0 === r ||
                    r.stop()),
                this.pendingAnimation &&
                  (xa.update(this.pendingAnimation),
                  (this.pendingAnimation = void 0)),
                (this.pendingAnimation = Ea.update(function () {
                  ;(ds.hasAnimatedSinceResize = !0),
                    (n.currentAnimation = (function (t, e, r) {
                      void 0 === r && (r = {})
                      var n = Ps(t) ? t : od(t)
                      return (
                        Zc('', n, e, r),
                        {
                          stop: function () {
                            return n.stop()
                          },
                          isAnimating: function () {
                            return n.isAnimating()
                          },
                        }
                      )
                    })(
                      0,
                      1e3,
                      (0, sa.__assign)((0, sa.__assign)({}, t), {
                        onUpdate: function (e) {
                          var r
                          n.mixTargetDelta(e),
                            null === (r = t.onUpdate) ||
                              void 0 === r ||
                              r.call(t, e)
                        },
                        onComplete: function () {
                          var e
                          null === (e = t.onComplete) ||
                            void 0 === e ||
                            e.call(t),
                            n.completeAnimation()
                        },
                      })
                    )),
                    n.resumingFrom &&
                      (n.resumingFrom.currentAnimation = n.currentAnimation),
                    (n.pendingAnimation = void 0)
                }))
            }),
            (t.prototype.completeAnimation = function () {
              var t
              this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0),
                (this.resumingFrom.preserveOpacity = void 0)),
                null === (t = this.getStack()) ||
                  void 0 === t ||
                  t.exitAnimationComplete(),
                (this.resumingFrom =
                  this.currentAnimation =
                  this.animationValues =
                    void 0),
                this.notifyListeners('animationComplete')
            }),
            (t.prototype.finishAnimation = function () {
              var t
              this.currentAnimation &&
                (null === (t = this.mixTargetDelta) ||
                  void 0 === t ||
                  t.call(this, 1e3),
                this.currentAnimation.stop()),
                this.completeAnimation()
            }),
            (t.prototype.applyTransformsToTarget = function () {
              var t = this.getLead(),
                e = t.targetWithTransforms,
                r = t.target,
                n = t.layout,
                o = t.latestValues
              e &&
                r &&
                n &&
                (tp(e, r),
                uf(e, o),
                Id(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  o
                ))
            }),
            (t.prototype.registerSharedNode = function (t, e) {
              var r, n, o
              this.sharedNodes.has(t) || this.sharedNodes.set(t, new lp()),
                this.sharedNodes.get(t).add(e),
                e.promote({
                  transition:
                    null === (r = e.options.initialPromotionConfig) ||
                    void 0 === r
                      ? void 0
                      : r.transition,
                  preserveFollowOpacity:
                    null ===
                      (o =
                        null === (n = e.options.initialPromotionConfig) ||
                        void 0 === n
                          ? void 0
                          : n.shouldPreserveFollowOpacity) || void 0 === o
                      ? void 0
                      : o.call(n, e),
                })
            }),
            (t.prototype.isLead = function () {
              var t = this.getStack()
              return !t || t.lead === this
            }),
            (t.prototype.getLead = function () {
              var t
              return (
                (this.options.layoutId &&
                  (null === (t = this.getStack()) || void 0 === t
                    ? void 0
                    : t.lead)) ||
                this
              )
            }),
            (t.prototype.getPrevLead = function () {
              var t
              return this.options.layoutId
                ? null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.prevLead
                : void 0
            }),
            (t.prototype.getStack = function () {
              var t = this.options.layoutId
              if (t) return this.root.sharedNodes.get(t)
            }),
            (t.prototype.promote = function (t) {
              var e = void 0 === t ? {} : t,
                r = e.needsReset,
                n = e.transition,
                o = e.preserveFollowOpacity,
                i = this.getStack()
              i && i.promote(this, o),
                r && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                n && this.setOptions({ transition: n })
            }),
            (t.prototype.relegate = function () {
              var t = this.getStack()
              return !!t && t.relegate(this)
            }),
            (t.prototype.resetRotation = function () {
              var t = this.options.visualElement
              if (t) {
                for (var e = !1, r = {}, n = 0; n < xs.length; n++) {
                  var o = 'rotate' + xs[n]
                  t.getStaticValue(o) &&
                    ((e = !0),
                    (r[o] = t.getStaticValue(o)),
                    t.setStaticValue(o, 0))
                }
                if (e) {
                  for (var o in (null === t || void 0 === t || t.syncRender(),
                  r))
                    t.setStaticValue(o, r[o])
                  t.scheduleRender()
                }
              }
            }),
            (t.prototype.getProjectionStyles = function (t) {
              var e, r, n, o, i, a
              void 0 === t && (t = {})
              var s = {}
              if (!this.instance || this.isSVG) return s
              if (!this.isVisible) return { visibility: 'hidden' }
              s.visibility = ''
              var u =
                null === (e = this.options.visualElement) || void 0 === e
                  ? void 0
                  : e.getProps().transformTemplate
              if (this.needsReset)
                return (
                  (this.needsReset = !1),
                  (s.opacity = ''),
                  (s.pointerEvents = wu(t.pointerEvents) || ''),
                  (s.transform = u ? u(this.latestValues, '') : 'none'),
                  s
                )
              var l = this.getLead()
              if (!this.projectionDelta || !this.layout || !l.target) {
                var c = {}
                return (
                  this.options.layoutId &&
                    ((c.opacity =
                      null !== (r = this.latestValues.opacity) && void 0 !== r
                        ? r
                        : 1),
                    (c.pointerEvents = wu(t.pointerEvents) || '')),
                  this.hasProjected &&
                    !Xd(this.latestValues) &&
                    ((c.transform = u ? u({}, '') : 'none'),
                    (this.hasProjected = !1)),
                  c
                )
              }
              var d = l.animationValues || l.latestValues
              this.applyTransformsToTarget(),
                (s.transform = cp(
                  this.projectionDeltaWithTransform,
                  this.treeScale,
                  d
                )),
                u && (s.transform = u(d, s.transform))
              var f = this.projectionDelta,
                p = f.x,
                h = f.y
              for (var m in ((s.transformOrigin = ''
                .concat(100 * p.origin, '% ')
                .concat(100 * h.origin, '% 0')),
              l.animationValues
                ? (s.opacity =
                    l === this
                      ? null !==
                          (o =
                            null !== (n = d.opacity) && void 0 !== n
                              ? n
                              : this.latestValues.opacity) && void 0 !== o
                        ? o
                        : 1
                      : this.preserveOpacity
                      ? this.latestValues.opacity
                      : d.opacityExit)
                : (s.opacity =
                    l === this
                      ? null !== (i = d.opacity) && void 0 !== i
                        ? i
                        : ''
                      : null !== (a = d.opacityExit) && void 0 !== a
                      ? a
                      : 0),
              bs))
                if (void 0 !== d[m]) {
                  var v = bs[m],
                    g = v.correct,
                    y = v.applyTo,
                    b = g(d[m], l)
                  if (y) for (var x = y.length, S = 0; S < x; S++) s[y[S]] = b
                  else s[m] = b
                }
              return (
                this.options.layoutId &&
                  (s.pointerEvents =
                    l === this ? wu(t.pointerEvents) || '' : 'none'),
                s
              )
            }),
            (t.prototype.clearSnapshot = function () {
              this.resumeFrom = this.snapshot = void 0
            }),
            (t.prototype.resetTree = function () {
              this.root.nodes.forEach(function (t) {
                var e
                return null === (e = t.currentAnimation) || void 0 === e
                  ? void 0
                  : e.stop()
              }),
                this.root.nodes.forEach(gp),
                this.root.sharedNodes.clear()
            }),
            t
          )
        })()
      }
      function hp(t) {
        t.updateLayout()
      }
      function mp(t) {
        var e,
          r,
          n,
          o,
          i =
            null !==
              (r =
                null === (e = t.resumeFrom) || void 0 === e
                  ? void 0
                  : e.snapshot) && void 0 !== r
              ? r
              : t.snapshot
        if (t.isLead() && t.layout && i && t.hasListeners('didUpdate')) {
          var a = t.layout,
            s = a.actual,
            u = a.measured
          'size' === t.options.animationType
            ? Qd(function (t) {
                var e = i.isShared ? i.measured[t] : i.layout[t],
                  r = Dd(e)
                ;(e.min = s[t].min), (e.max = e.min + r)
              })
            : 'position' === t.options.animationType &&
              Qd(function (t) {
                var e = i.isShared ? i.measured[t] : i.layout[t],
                  r = Dd(s[t])
                e.max = e.min + r
              })
          var l = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          }
          Id(l, s, i.layout)
          var c = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          }
          i.isShared
            ? Id(c, t.applyTransform(u, !0), i.measured)
            : Id(c, s, i.layout)
          var d = !sp(l),
            f = !1
          if (
            !t.resumeFrom &&
            ((t.relativeParent = t.getClosestProjectingParent()),
            t.relativeParent && !t.relativeParent.resumeFrom)
          ) {
            var p = t.relativeParent,
              h = p.snapshot,
              m = p.layout
            if (h && m) {
              var v = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }
              Vd(v, i.layout, h.layout)
              var g = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }
              Vd(g, s, m.actual), up(v, g) || (f = !0)
            }
          }
          t.notifyListeners('didUpdate', {
            layout: s,
            snapshot: i,
            delta: c,
            layoutDelta: l,
            hasLayoutChanged: d,
            hasRelativeTargetChanged: f,
          })
        } else
          t.isLead() &&
            (null === (o = (n = t.options).onExitComplete) ||
              void 0 === o ||
              o.call(n))
        t.options.transition = void 0
      }
      function vp(t) {
        t.clearSnapshot()
      }
      function gp(t) {
        t.clearMeasurements()
      }
      function yp(t) {
        var e = t.options.visualElement
        ;(null === e || void 0 === e
          ? void 0
          : e.getProps().onBeforeLayoutMeasure) &&
          e.notifyBeforeLayoutMeasure(),
          t.resetTransform()
      }
      function bp(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0)
      }
      function xp(t) {
        t.resolveTargetDelta()
      }
      function Sp(t) {
        t.calcProjection()
      }
      function wp(t) {
        t.resetRotation()
      }
      function kp(t) {
        t.removeLeadSnapshot()
      }
      function Cp(t, e, r) {
        ;(t.translate = xl(e.translate, 0, r)),
          (t.scale = xl(e.scale, 1, r)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint)
      }
      function _p(t, e, r, n) {
        ;(t.min = xl(e.min, r.min, n)), (t.max = xl(e.max, r.max, n))
      }
      function Ep(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
      }
      var Ap = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }
      function Pp(t, e) {
        for (var r = t.root, n = t.path.length - 1; n >= 0; n--)
          if (Boolean(t.path[n].instance)) {
            r = t.path[n]
            break
          }
        var o = (r && r !== t.root ? r.instance : document).querySelector(
          '[data-projection-id="'.concat(e, '"]')
        )
        o && t.mount(o, !0)
      }
      function Rp(t) {
        ;(t.min = Math.round(t.min)), (t.max = Math.round(t.max))
      }
      function Tp(t) {
        Rp(t.x), Rp(t.y)
      }
      var Mp = pp({
          attachResizeListener: function (t, e) {
            return Ru(t, 'resize', e)
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            }
          },
          checkIsScrollRoot: function () {
            return !0
          },
        }),
        Op = { current: void 0 },
        jp = pp({
          measureScroll: function (t) {
            return { x: t.scrollLeft, y: t.scrollTop }
          },
          defaultParent: function () {
            if (!Op.current) {
              var t = new Mp(0, {})
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (Op.current = t)
            }
            return Op.current
          },
          resetTransform: function (t, e) {
            t.style.transform = null !== e && void 0 !== e ? e : 'none'
          },
          checkIsScrollRoot: function (t) {
            return Boolean('fixed' === window.getComputedStyle(t).position)
          },
        }),
        Fp = (0, sa.__assign)(
          (0, sa.__assign)((0, sa.__assign)((0, sa.__assign)({}, kd), ul), pf),
          Nf
        ),
        Dp = vs(function (t, e) {
          return (function (t, e, r, n, o) {
            var i = e.forwardMotionProps,
              a = void 0 !== i && i,
              s = ys(t) ? Au : Pu
            return (0,
            sa.__assign)((0, sa.__assign)({}, s), { preloadedFeatures: r, useRender: du(a), createVisualElement: n, projectionNodeConstructor: o, Component: t })
          })(t, e, Fp, zf, jp)
        })
      function Bp(t, ...e) {
        return zp(t) ? t(...e) : t
      }
      var zp = (t) => 'function' === typeof t
      var Ip = (t, e) => t.find((t) => t.id === e)
      function $p(t, e) {
        const r = Lp(t, e)
        return {
          position: r,
          index: r ? t[r].findIndex((t) => t.id === e) : -1,
        }
      }
      function Lp(t, e) {
        for (const [r, n] of Object.entries(t)) if (Ip(n, e)) return r
      }
      function Vp(t) {
        return {
          position: 'fixed',
          zIndex: 5500,
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          margin: 'top' === t || 'bottom' === t ? '0 auto' : void 0,
          top: t.includes('top') ? 'env(safe-area-inset-top, 0px)' : void 0,
          bottom: t.includes('bottom')
            ? 'env(safe-area-inset-bottom, 0px)'
            : void 0,
          right: t.includes('left')
            ? void 0
            : 'env(safe-area-inset-right, 0px)',
          left: t.includes('right') ? void 0 : 'env(safe-area-inset-left, 0px)',
        }
      }
      var qp = (function (t) {
        let e = t
        const r = new Set(),
          n = (t) => {
            ;(e = t(e)), r.forEach((t) => t())
          }
        return {
          getState: () => e,
          subscribe: (e) => (
            r.add(e),
            () => {
              n(() => t), r.delete(e)
            }
          ),
          removeToast: (t, e) => {
            n((r) => ({ ...r, [e]: r[e].filter((e) => e.id != t) }))
          },
          notify: (t, e) => {
            const r = (function (t, e = {}) {
                Up += 1
                const r = e.id ?? Up,
                  n = e.position ?? 'bottom'
                return {
                  id: r,
                  message: t,
                  position: n,
                  duration: e.duration,
                  onCloseComplete: e.onCloseComplete,
                  onRequestRemove: () => qp.removeToast(String(r), n),
                  status: e.status,
                  requestClose: !1,
                  containerStyle: e.containerStyle,
                }
              })(t, e),
              { position: o, id: i } = r
            return (
              n((t) => {
                const e = o.includes('top')
                  ? [r, ...(t[o] ?? [])]
                  : [...(t[o] ?? []), r]
                return { ...t, [o]: e }
              }),
              i
            )
          },
          update: (t, e) => {
            t &&
              n((r) => {
                const n = { ...r },
                  { position: o, index: i } = $p(n, t)
                return (
                  o &&
                    -1 !== i &&
                    (n[o][i] = { ...n[o][i], ...e, message: Wp(e) }),
                  n
                )
              })
          },
          closeAll: ({ positions: t } = {}) => {
            n((e) =>
              (
                t ?? [
                  'bottom',
                  'bottom-right',
                  'bottom-left',
                  'top',
                  'top-left',
                  'top-right',
                ]
              ).reduce(
                (t, r) => (
                  (t[r] = e[r].map((t) => ({ ...t, requestClose: !0 }))), t
                ),
                { ...e }
              )
            )
          },
          close: (t) => {
            n((e) => {
              const r = Lp(e, t)
              return r
                ? {
                    ...e,
                    [r]: e[r].map((e) =>
                      e.id == t ? { ...e, requestClose: !0 } : e
                    ),
                  }
                : e
            })
          },
          isActive: (t) => Boolean($p(qp.getState(), t).position),
        }
      })({
        top: [],
        'top-left': [],
        'top-right': [],
        'bottom-left': [],
        bottom: [],
        'bottom-right': [],
      })
      var Up = 0
      var Np = (t) => {
        const {
            status: e,
            variant: r = 'solid',
            id: n,
            title: o,
            isClosable: a,
            onClose: s,
            description: u,
            icon: l,
          } = t,
          c = n
            ? {
                root: `toast-${n}`,
                title: `toast-${n}-title`,
                description: `toast-${n}-description`,
              }
            : void 0
        return i.createElement(
          ea,
          {
            addRole: !1,
            status: e,
            variant: r,
            id: null == c ? void 0 : c.root,
            alignItems: 'start',
            borderRadius: 'md',
            boxShadow: 'lg',
            paddingEnd: 8,
            textAlign: 'start',
            width: 'auto',
          },
          i.createElement(na, null, l),
          i.createElement(
            k.m$.div,
            { flex: '1', maxWidth: '100%' },
            o && i.createElement(oa, { id: null == c ? void 0 : c.title }, o),
            u &&
              i.createElement(
                ra,
                { id: null == c ? void 0 : c.description, display: 'block' },
                u
              )
          ),
          a &&
            i.createElement(aa, {
              size: 'sm',
              onClick: s,
              position: 'absolute',
              insetEnd: 1,
              top: 1,
            })
        )
      }
      function Wp(t = {}) {
        const { render: e, toastComponent: r = Np } = t
        return (n) =>
          'function' === typeof e ? e(n) : i.createElement(r, { ...n, ...t })
      }
      var Hp = {
          initial: (t) => {
            const { position: e } = t,
              r = ['top', 'bottom'].includes(e) ? 'y' : 'x'
            let n = ['top-right', 'bottom-right'].includes(e) ? 1 : -1
            return 'bottom' === e && (n = 1), { opacity: 0, [r]: 24 * n }
          },
          animate: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
          },
          exit: {
            opacity: 0,
            scale: 0.85,
            transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
          },
        },
        Qp = (0, i.memo)((t) => {
          const {
              id: e,
              message: r,
              onCloseComplete: n,
              onRequestRemove: o,
              requestClose: a = !1,
              position: s = 'bottom',
              duration: u = 5e3,
              containerStyle: l,
              motionVariants: c = Hp,
              toastSpacing: d = '0.5rem',
            } = t,
            [f, p] = (0, i.useState)(u),
            h = Na()
          qa(() => {
            h || null == n || n()
          }, [h]),
            qa(() => {
              p(u)
            }, [u])
          const m = () => {
            h && o()
          }
          ;(0, i.useEffect)(() => {
            h && a && o()
          }, [h, a, o]),
            Va(m, f)
          const v = (0, i.useMemo)(
              () => ({
                pointerEvents: 'auto',
                maxWidth: 560,
                minWidth: 300,
                margin: d,
                ...l,
              }),
              [l, d]
            ),
            g = (0, i.useMemo)(
              () =>
                (function (t) {
                  let e = 'center'
                  return (
                    t.includes('right') && (e = 'flex-end'),
                    t.includes('left') && (e = 'flex-start'),
                    { display: 'flex', flexDirection: 'column', alignItems: e }
                  )
                })(s),
              [s]
            )
          return i.createElement(
            Dp.li,
            {
              layout: !0,
              className: 'chakra-toast',
              variants: c,
              initial: 'initial',
              animate: 'animate',
              exit: 'exit',
              onHoverStart: () => p(null),
              onHoverEnd: () => p(u),
              custom: { position: s },
              style: g,
            },
            i.createElement(
              k.m$.div,
              {
                role: 'status',
                'aria-atomic': 'true',
                className: 'chakra-toast__inner',
                __css: v,
              },
              Bp(r, { id: e, onClose: m })
            )
          )
        })
      Qp.displayName = 'ToastComponent'
      var Gp = (t) => {
        const e = (0, i.useSyncExternalStore)(
            qp.subscribe,
            qp.getState,
            qp.getState
          ),
          {
            children: r,
            motionVariants: n,
            component: o = Qp,
            portalProps: a,
          } = t,
          s = Object.keys(e).map((t) => {
            const r = e[t]
            return i.createElement(
              'ul',
              {
                role: 'region',
                'aria-live': 'polite',
                key: t,
                id: `chakra-toast-manager-${t}`,
                style: Vp(t),
              },
              i.createElement(
                La,
                { initial: !1 },
                r.map((t) =>
                  i.createElement(o, { key: t.id, motionVariants: n, ...t })
                )
              )
            )
          })
        return i.createElement(
          i.Fragment,
          null,
          r,
          i.createElement(w, { ...a }, s)
        )
      }
      var Kp = r(8598),
        Yp = r(9123),
        Xp = r.n(Yp)
      function Zp({ children: t, theme: e = Wi, toastOptions: r, ...n }) {
        return i.createElement(
          M,
          { theme: e, ...n },
          t,
          i.createElement(Gp, { ...r })
        )
      }
      function Jp(...t) {
        return Xp()({}, ...t, th)
      }
      function th(t, e, r, n) {
        if (
          ((0, Kp.mf)(t) || (0, Kp.mf)(e)) &&
          Object.prototype.hasOwnProperty.call(n, r)
        )
          return (...r) => {
            const n = (0, Kp.mf)(t) ? t(...r) : t,
              o = (0, Kp.mf)(e) ? e(...r) : e
            return Xp()({}, n, o, th)
          }
      }
      var eh = r(9755),
        rh = (function (...t) {
          let e = [...t],
            r = t[t.length - 1]
          return (
            Ni(r) && e.length > 1 ? (e = e.slice(0, e.length - 1)) : (r = Wi),
            (0, Kp.zG)(...e.map((t) => (e) => (0, Kp.mf)(t) ? t(e) : Jp(e, t)))(
              r
            )
          )
        })({
          styles: {
            global: {
              'html, body': {
                backgroundColor: eh.r.color.background,
                color: eh.r.color.brand,
              },
              '*': { borderColor: eh.r.color.brand },
            },
          },
          config: { useSystemColorMode: !1 },
          shadows: { outline: '0 0 0 2px '.concat(eh.r.color.brand + '50') },
          colors: {
            brand: {
              100: ''.concat(eh.r.color.brand + '10'),
              200: ''.concat(eh.r.color.brand + '20'),
              300: ''.concat(eh.r.color.brand + '30'),
              400: ''.concat(eh.r.color.brand + '40'),
              500: ''.concat(eh.r.color.brand + '50'),
              600: ''.concat(eh.r.color.brand + '60'),
              700: ''.concat(eh.r.color.brand + '70'),
              800: ''.concat(eh.r.color.brand + '80'),
              900: ''.concat(eh.r.color.brand + '90'),
              1e3: ''.concat(eh.r.color.brand),
            },
            background: {
              100: ''.concat(eh.r.color.background + '10'),
              200: ''.concat(eh.r.color.background + '20'),
              300: ''.concat(eh.r.color.background + '30'),
              400: ''.concat(eh.r.color.background + '40'),
              500: ''.concat(eh.r.color.background + '50'),
              600: ''.concat(eh.r.color.background + '60'),
              700: ''.concat(eh.r.color.background + '70'),
              800: ''.concat(eh.r.color.background + '80'),
              900: ''.concat(eh.r.color.background + '90'),
              1e3: ''.concat(eh.r.color.background),
            },
            gray: {
              50: '#fafafa',
              100: '#f5f5f5',
              200: '#eeeeee',
              300: '#e0e0e0',
              400: '#bdbdbd',
              500: '#9e9e9e',
              600: '#757575',
              700: '#616161',
              800: '#424242',
              900: '#212121',
              1e3: '#0a0a0a',
            },
            components: {
              Button: {
                variants: {
                  outline: { bg: 'red.400', boxShadow: '0 0 2px 2px #efdfde' },
                },
              },
            },
          },
        })
      var nh = r(601).S.withTRPC(function (t) {
        var e = t.Component,
          r = t.pageProps
        return (0,
        o.jsx)(Zp, { theme: rh, children: (0, o.jsx)(e, (0, n.Z)({}, r)) })
      })
    },
    9755: function (t, e, r) {
      'use strict'
      r.d(e, {
        r: function () {
          return n
        },
      })
      var n = { color: { brand: '#fd6a5f', background: '#0c2210' } }
    },
    601: function (t, e, r) {
      'use strict'
      function n(t) {
        return t
      }
      function o(t) {
        const e = {
          subscribe(e) {
            let r = null,
              n = !1,
              o = !1,
              i = !1
            function a() {
              null !== r
                ? o ||
                  ((o = !0),
                  'function' === typeof r ? r() : r && r.unsubscribe())
                : (i = !0)
            }
            return (
              (r = t({
                next(t) {
                  n || e.next?.(t)
                },
                error(t) {
                  n || ((n = !0), e.error?.(t), a())
                },
                complete() {
                  n || ((n = !0), e.complete?.(), a())
                },
              })),
              i && a(),
              { unsubscribe: a }
            )
          },
          pipe(...t) {
            return (
              0 === (r = t).length
                ? n
                : 1 === r.length
                ? r[0]
                : function (t) {
                    return r.reduce((t, e) => e(t), t)
                  }
            )(e)
            var r
          },
        }
        return e
      }
      function i(t) {
        return (t) => {
          let e = 0,
            r = null
          const n = []
          return {
            subscribe: (o) => (
              e++,
              n.push(o),
              r ||
                (r = t.subscribe({
                  next(t) {
                    for (const e of n) e.next?.(t)
                  },
                  error(t) {
                    for (const e of n) e.error?.(t)
                  },
                  complete() {
                    for (const t of n) t.complete?.()
                  },
                })),
              {
                unsubscribe() {
                  e--,
                    (function () {
                      if (0 === e && r) {
                        const t = r
                        ;(r = null), t.unsubscribe()
                      }
                    })()
                  const t = n.findIndex((t) => t === o)
                  t > -1 && n.splice(t, 1)
                },
              }
            ),
          }
        }
      }
      r.d(e, {
        S: function () {
          return Kn
        },
      })
      class a extends Error {
        constructor(t) {
          super(t),
            (this.name = 'ObservableAbortError'),
            Object.setPrototypeOf(this, a.prototype)
        }
      }
      class s extends Error {
        static from(t, e = {}) {
          return t instanceof Error
            ? 'TRPCClientError' === t.name
              ? t
              : new s(t.message, { ...e, cause: t, result: null })
            : new s(t.error.message ?? '', { ...e, cause: void 0, result: t })
        }
        constructor(t, e) {
          const r = e?.cause
          super(t, { cause: r }),
            (this.meta = e?.meta),
            (this.cause = r),
            (this.shape = e?.result?.error),
            (this.data = e?.result?.error.data),
            (this.name = 'TRPCClientError'),
            Object.setPrototypeOf(this, s.prototype)
        }
      }
      function u(t, e) {
        if ('error' in t) {
          const r = e.transformer.deserialize(t.error)
          return { ok: !1, error: { ...t, error: r } }
        }
        return {
          ok: !0,
          result: {
            ...t.result,
            ...((!t.result.type || 'data' === t.result.type) && {
              type: 'data',
              data: e.transformer.deserialize(t.result.data),
            }),
          },
        }
      }
      function l(t) {
        return o((e) => {
          const r = (function e(r = 0, n = t.op) {
            const o = t.links[r]
            if (!o)
              throw new Error(
                'No more links to execute - did you forget to add an ending link?'
              )
            return o({ op: n, next: (t) => e(r + 1, t) })
          })()
          return r.subscribe(e)
        })
      }
      function c() {
        return 'undefined' !== typeof window ? window : globalThis
      }
      function d(t) {
        if (t) return t
        const e = c(),
          r = e.fetch
        if (r) return 'function' === typeof r.bind ? r.bind(e) : r
        throw new Error('No fetch implementation found')
      }
      function f(t) {
        const e = t.headers || (() => ({}))
        return {
          url: t.url,
          fetch: d(t.fetch),
          AbortController:
            ((r = t.AbortController), r ?? c().AbortController ?? null),
          headers: 'function' === typeof e ? e : () => e,
        }
        var r
      }
      const p = { query: 'GET', mutation: 'POST' }
      function h(t) {
        return 'input' in t
          ? t.runtime.transformer.serialize(t.input)
          : (function (t) {
              const e = {}
              for (let r = 0; r < t.length; r++) {
                const n = t[r]
                e[r] = n
              }
              return e
            })(t.inputs.map((e) => t.runtime.transformer.serialize(e)))
      }
      function m(t) {
        let e = t.url + '/' + t.path
        const r = []
        if (('inputs' in t && r.push('batch=1'), 'query' === t.type)) {
          const e = h(t)
          void 0 !== e &&
            r.push(`input=${encodeURIComponent(JSON.stringify(e))}`)
        }
        return r.length && (e += '?' + r.join('&')), e
      }
      function v(t) {
        const { type: e } = t,
          r = t.AbortController ? new t.AbortController() : null,
          n = new Promise((n, o) => {
            const i = m(t),
              a = (function (t) {
                if ('query' === t.type) return
                const e = h(t)
                return void 0 !== e ? JSON.stringify(e) : void 0
              })(t),
              s = {}
            Promise.resolve(t.headers())
              .then((n) => {
                if ('subscription' === e)
                  throw new Error('Subscriptions should use wsLink')
                return t.fetch(i, {
                  method: p[e],
                  signal: r?.signal,
                  body: a,
                  headers: { 'content-type': 'application/json', ...n },
                })
              })
              .then((t) => ((s.response = t), t.json()))
              .then((t) => {
                n({ json: t, meta: s })
              })
              .catch(o)
          })
        return {
          promise: n,
          cancel: () => {
            r?.abort()
          },
        }
      }
      const g = () => {
        throw new Error(
          'Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new'
        )
      }
      function y(t) {
        let e = null,
          r = null
        function n() {
          const n = (function (e) {
            const r = [[]]
            let n = 0
            for (;;) {
              const o = e[n]
              if (!o) break
              const i = r[r.length - 1]
              o.aborted
                ? (o.reject(new Error('Aborted')), n++)
                : t.validate(i.concat(o).map((t) => t.key))
                ? (i.push(o), n++)
                : 0 !== i.length
                ? r.push([])
                : (o.reject(
                    new Error('Input is too big for a single dispatch')
                  ),
                  n++)
            }
            return r
          })(e)
          clearTimeout(r), (r = null), (e = null)
          for (const e of n) {
            if (!e.length) continue
            const r = { items: e, cancel: g }
            for (const t of e) t.batch = r
            const { promise: n, cancel: o } = t.fetch(r.items.map((t) => t.key))
            ;(r.cancel = o),
              n
                .then((t) => {
                  for (let e = 0; e < t.length; e++) {
                    const n = t[e],
                      o = r.items[e]
                    o.resolve(n), (o.batch = null)
                  }
                })
                .catch((t) => {
                  for (const e of r.items) e.reject(t), (e.batch = null)
                })
          }
        }
        return {
          load: function (t) {
            const o = {
                aborted: !1,
                key: t,
                batch: null,
                resolve: g,
                reject: g,
              },
              i = new Promise((t, r) => {
                ;(o.reject = r), (o.resolve = t), e || (e = []), e.push(o)
              })
            return (
              r || (r = setTimeout(n)),
              {
                promise: i,
                cancel: () => {
                  ;(o.aborted = !0),
                    o.batch?.items.every((t) => t.aborted) &&
                      (o.batch.cancel(), (o.batch = null))
                },
              }
            )
          },
        }
      }
      function b(t) {
        const e = f(t)
        return (r) => {
          const n = t.maxURLLength || 1 / 0,
            i = (t) => ({
              validate: (o) => {
                if (n === 1 / 0) return !0
                const i = o.map((t) => t.path).join(','),
                  a = o.map((t) => t.input)
                return (
                  m({ ...e, runtime: r, type: t, path: i, inputs: a }).length <=
                  n
                )
              },
              fetch: (n) => {
                const o = n.map((t) => t.path).join(','),
                  i = n.map((t) => t.input),
                  { promise: a, cancel: s } = v({
                    ...e,
                    runtime: r,
                    type: t,
                    path: o,
                    inputs: i,
                  })
                return {
                  promise: a.then((t) =>
                    (Array.isArray(t.json) ? t.json : n.map(() => t.json)).map(
                      (e) => ({ meta: t.meta, json: e })
                    )
                  ),
                  cancel: s,
                }
              },
            }),
            a = y(i('query')),
            l = y(i('mutation')),
            c = { query: a, subscription: y(i('subscription')), mutation: l }
          return ({ op: t }) =>
            o((e) => {
              const n = c[t.type],
                { promise: o, cancel: i } = n.load(t)
              return (
                o
                  .then((t) => {
                    const n = u(t.json, r)
                    n.ok
                      ? (e.next({ context: t.meta, result: n.result }),
                        e.complete())
                      : e.error(s.from(n.error, { meta: t.meta }))
                  })
                  .catch((t) => e.error(s.from(t))),
                () => {
                  i()
                }
              )
            })
        }
      }
      function x(t) {
        const e = f(t)
        return (t) =>
          ({ op: r }) =>
            o((n) => {
              const { path: o, input: i, type: a } = r,
                { promise: l, cancel: c } = v({
                  ...e,
                  runtime: t,
                  type: a,
                  path: o,
                  input: i,
                })
              return (
                l
                  .then((e) => {
                    const r = u(e.json, t)
                    r.ok
                      ? (n.next({ context: e.meta, result: r.result }),
                        n.complete())
                      : n.error(s.from(r.error, { meta: e.meta }))
                  })
                  .catch((t) => n.error(s.from(t))),
                () => {
                  c()
                }
              )
            })
      }
      const S = {
          query: ['72e3ff', '3fb0d8'],
          mutation: ['c5a3fc', '904dfc'],
          subscription: ['ff49e1', 'd83fbe'],
        },
        w =
          (t = console) =>
          (e) => {
            const {
                direction: r,
                input: n,
                type: o,
                path: i,
                context: a,
                id: s,
              } = e,
              [u, l] = S[o],
              c = `\n    background-color: #${
                'up' === r ? u : l
              }; \n    color: ${
                'up' === r ? 'black' : 'white'
              };\n    padding: 2px;\n  `,
              d = [
                '%c',
                'up' === r ? '>>' : '<<',
                o,
                `#${s}`,
                `%c${i}%c`,
                '%O',
              ],
              f = [c, `${c}; font-weight: bold;`, `${c}; font-weight: normal;`]
            'up' === e.direction
              ? f.push({ input: n, context: a })
              : f.push({
                  input: n,
                  result: e.result,
                  elapsedMs: e.elapsedMs,
                  context: a,
                })
            const p =
              'down' === e.direction &&
              e.result &&
              (e.result instanceof Error || 'error' in e.result.result)
                ? 'error'
                : 'log'
            t[p].apply(null, [d.join(' ')].concat(f))
          }
      function k(t = {}) {
        const { enabled: e = () => !0 } = t,
          { logger: r = w(t.console) } = t
        return () =>
          ({ op: t, next: n }) =>
            o((o) => {
              e({ ...t, direction: 'up' }) && r({ ...t, direction: 'up' })
              const i = Date.now()
              function a(n) {
                const o = Date.now() - i
                e({ ...t, direction: 'down', result: n }) &&
                  r({ ...t, direction: 'down', elapsedMs: o, result: n })
              }
              return n(t)
                .pipe(
                  (function (t) {
                    return (e) => ({
                      subscribe: (r) =>
                        e.subscribe({
                          next(e) {
                            t.next?.(e), r.next?.(e)
                          },
                          error(e) {
                            t.error?.(e), r.error?.(e)
                          },
                          complete() {
                            t.complete?.(), r.complete?.()
                          },
                        }),
                    })
                  })({
                    next(t) {
                      a(t)
                    },
                    error(t) {
                      a(t)
                    },
                  })
                )
                .subscribe(o)
            })
      }
      Error
      Error
      class C {
        $request({ type: t, input: e, path: r, context: n = {} }) {
          return l({
            links: this.links,
            op: {
              id: ++this.requestId,
              type: t,
              path: r,
              input: e,
              context: n,
            },
          }).pipe(i())
        }
        requestAsPromise(t) {
          const e = this.$request(t),
            { promise: r, abort: n } = (function (t) {
              let e
              const r = new Promise((r, n) => {
                let o = !1
                function i() {
                  o ||
                    ((o = !0),
                    n(new a('This operation was aborted.')),
                    s.unsubscribe())
                }
                const s = t.subscribe({
                  next(t) {
                    ;(o = !0), r(t), i()
                  },
                  error(t) {
                    ;(o = !0), n(t), i()
                  },
                  complete() {
                    ;(o = !0), i()
                  },
                })
                e = i
              })
              return { promise: r, abort: e }
            })(e),
            o = new Promise((e, o) => {
              t.signal?.addEventListener('abort', n),
                r
                  .then((t) => {
                    e(t.result.data)
                  })
                  .catch((t) => {
                    o(s.from(t))
                  })
            })
          return o
        }
        query(t, e, r) {
          return this.requestAsPromise({
            type: 'query',
            path: t,
            input: e,
            context: r?.context,
            signal: r?.signal,
          })
        }
        mutation(t, e, r) {
          return this.requestAsPromise({
            type: 'mutation',
            path: t,
            input: e,
            context: r?.context,
            signal: r?.signal,
          })
        }
        subscription(t, e, r) {
          return this.$request({
            type: 'subscription',
            path: t,
            input: e,
            context: r?.context,
          }).subscribe({
            next(t) {
              'started' === t.result.type
                ? r.onStarted?.()
                : 'stopped' === t.result.type
                ? r.onStopped?.()
                : r.onData?.(t.result.data)
            },
            error(t) {
              r.onError?.(t)
            },
            complete() {
              r.onComplete?.()
            },
          })
        }
        constructor(t) {
          ;(this.requestId = 0),
            (this.runtime = {
              transformer: t.transformer
                ? 'input' in t.transformer
                  ? {
                      serialize: t.transformer.input.serialize,
                      deserialize: t.transformer.output.deserialize,
                    }
                  : t.transformer
                : { serialize: (t) => t, deserialize: (t) => t },
            }),
            (this.links = t.links.map((t) => t(this.runtime)))
        }
      }
      function _(t) {
        return new C({
          transformer: t.transformer,
          links: 'links' in t ? t.links : [b(t)],
        })
      }
      var E = r(2983)
      const A = E.createContext(void 0),
        P = E.createContext(!1)
      function R(t, e) {
        return (
          t ||
          (e && 'undefined' !== typeof window
            ? (window.ReactQueryClientContext ||
                (window.ReactQueryClientContext = A),
              window.ReactQueryClientContext)
            : A)
        )
      }
      const T = ({ context: t } = {}) => {
          const e = E.useContext(R(t, E.useContext(P)))
          if (!e)
            throw new Error(
              'No QueryClient set, use QueryClientProvider to set one'
            )
          return e
        },
        M = ({
          client: t,
          children: e,
          context: r,
          contextSharing: n = !1,
        }) => {
          E.useEffect(
            () => (
              t.mount(),
              () => {
                t.unmount()
              }
            ),
            [t]
          )
          const o = R(r, n)
          return E.createElement(
            P.Provider,
            { value: !r && n },
            E.createElement(o.Provider, { value: t }, e)
          )
        }
      function O(t) {
        return t.state.isPaused
      }
      function j(t) {
        return 'success' === t.state.status
      }
      const F = ({ children: t, options: e, state: r }) => (
          (function (t, e = {}) {
            const r = T({ context: e.context }),
              n = E.useRef(e)
            ;(n.current = e),
              E.useMemo(() => {
                t &&
                  (function (t, e, r) {
                    if ('object' !== typeof e || null === e) return
                    const n = t.getMutationCache(),
                      o = t.getQueryCache(),
                      i = e.mutations || [],
                      a = e.queries || []
                    i.forEach((e) => {
                      var o
                      n.build(
                        t,
                        {
                          ...(null == r || null == (o = r.defaultOptions)
                            ? void 0
                            : o.mutations),
                          mutationKey: e.mutationKey,
                        },
                        e.state
                      )
                    }),
                      a.forEach((e) => {
                        var n
                        const i = o.get(e.queryHash)
                        i
                          ? i.state.dataUpdatedAt < e.state.dataUpdatedAt &&
                            i.setState(e.state)
                          : o.build(
                              t,
                              {
                                ...(null == r || null == (n = r.defaultOptions)
                                  ? void 0
                                  : n.queries),
                                queryKey: e.queryKey,
                                queryHash: e.queryHash,
                              },
                              e.state
                            )
                      })
                  })(r, t, n.current)
              }, [r, t])
          })(r, e),
          t
        ),
        D = () => {}
      function B(t, e) {
        return new Proxy(D, {
          get(r, n) {
            if ('string' === typeof n && 'then' !== n) return B(t, [...e, n])
          },
          apply: (r, n, o) => t({ args: o, path: e }),
        })
      }
      const z = (t) => B(t, []),
        I = (t) =>
          new Proxy(D, {
            get(e, r) {
              if ('string' === typeof r && 'then' !== r) return t(r)
            },
          }),
        $ = 'undefined' === typeof window
      function L() {}
      function V(t) {
        return 'number' === typeof t && t >= 0 && t !== 1 / 0
      }
      function q(t, e) {
        return Math.max(t + (e || 0) - Date.now(), 0)
      }
      function U(t, e, r) {
        return rt(t)
          ? 'function' === typeof e
            ? { ...r, queryKey: t, queryFn: e }
            : { ...e, queryKey: t }
          : t
      }
      function N(t, e, r) {
        return rt(t) ? [{ ...e, queryKey: t }, r] : [t || {}, e]
      }
      function W(t, e) {
        const {
          type: r = 'all',
          exact: n,
          fetchStatus: o,
          predicate: i,
          queryKey: a,
          stale: s,
        } = t
        if (rt(a))
          if (n) {
            if (e.queryHash !== Q(a, e.options)) return !1
          } else if (!K(e.queryKey, a)) return !1
        if ('all' !== r) {
          const t = e.isActive()
          if ('active' === r && !t) return !1
          if ('inactive' === r && t) return !1
        }
        return (
          ('boolean' !== typeof s || e.isStale() === s) &&
          ('undefined' === typeof o || o === e.state.fetchStatus) &&
          !(i && !i(e))
        )
      }
      function H(t, e) {
        const { exact: r, fetching: n, predicate: o, mutationKey: i } = t
        if (rt(i)) {
          if (!e.options.mutationKey) return !1
          if (r) {
            if (G(e.options.mutationKey) !== G(i)) return !1
          } else if (!K(e.options.mutationKey, i)) return !1
        }
        return (
          ('boolean' !== typeof n || ('loading' === e.state.status) === n) &&
          !(o && !o(e))
        )
      }
      function Q(t, e) {
        return ((null == e ? void 0 : e.queryKeyHashFn) || G)(t)
      }
      function G(t) {
        return JSON.stringify(t, (t, e) =>
          tt(e)
            ? Object.keys(e)
                .sort()
                .reduce((t, r) => ((t[r] = e[r]), t), {})
            : e
        )
      }
      function K(t, e) {
        return Y(t, e)
      }
      function Y(t, e) {
        return (
          t === e ||
          (typeof t === typeof e &&
            !(!t || !e || 'object' !== typeof t || 'object' !== typeof e) &&
            !Object.keys(e).some((r) => !Y(t[r], e[r])))
        )
      }
      function X(t, e) {
        if (t === e) return t
        const r = J(t) && J(e)
        if (r || (tt(t) && tt(e))) {
          const n = r ? t.length : Object.keys(t).length,
            o = r ? e : Object.keys(e),
            i = o.length,
            a = r ? [] : {}
          let s = 0
          for (let u = 0; u < i; u++) {
            const n = r ? u : o[u]
            ;(a[n] = X(t[n], e[n])), a[n] === t[n] && s++
          }
          return n === i && s === n ? t : a
        }
        return e
      }
      function Z(t, e) {
        if ((t && !e) || (e && !t)) return !1
        for (const r in t) if (t[r] !== e[r]) return !1
        return !0
      }
      function J(t) {
        return Array.isArray(t) && t.length === Object.keys(t).length
      }
      function tt(t) {
        if (!et(t)) return !1
        const e = t.constructor
        if ('undefined' === typeof e) return !0
        const r = e.prototype
        return !!et(r) && !!r.hasOwnProperty('isPrototypeOf')
      }
      function et(t) {
        return '[object Object]' === Object.prototype.toString.call(t)
      }
      function rt(t) {
        return Array.isArray(t)
      }
      function nt(t) {
        return new Promise((e) => {
          setTimeout(e, t)
        })
      }
      function ot(t) {
        nt(0).then(t)
      }
      function it(t, e, r) {
        return null != r.isDataEqual && r.isDataEqual(t, e)
          ? t
          : 'function' === typeof r.structuralSharing
          ? r.structuralSharing(t, e)
          : !1 !== r.structuralSharing
          ? X(t, e)
          : e
      }
      const at = (function () {
        let t = [],
          e = 0,
          r = (t) => {
            t()
          },
          n = (t) => {
            t()
          }
        const o = (n) => {
            e
              ? t.push(n)
              : ot(() => {
                  r(n)
                })
          },
          i = () => {
            const e = t
            ;(t = []),
              e.length &&
                ot(() => {
                  n(() => {
                    e.forEach((t) => {
                      r(t)
                    })
                  })
                })
          }
        return {
          batch: (t) => {
            let r
            e++
            try {
              r = t()
            } finally {
              e--, e || i()
            }
            return r
          },
          batchCalls:
            (t) =>
            (...e) => {
              o(() => {
                t(...e)
              })
            },
          schedule: o,
          setNotifyFunction: (t) => {
            r = t
          },
          setBatchNotifyFunction: (t) => {
            n = t
          },
        }
      })()
      class st {
        constructor() {
          ;(this.listeners = []), (this.subscribe = this.subscribe.bind(this))
        }
        subscribe(t) {
          return (
            this.listeners.push(t),
            this.onSubscribe(),
            () => {
              ;(this.listeners = this.listeners.filter((e) => e !== t)),
                this.onUnsubscribe()
            }
          )
        }
        hasListeners() {
          return this.listeners.length > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
      }
      const ut = new (class extends st {
        constructor() {
          super(),
            (this.setup = (t) => {
              if (!$ && window.addEventListener) {
                const e = () => t()
                return (
                  window.addEventListener('visibilitychange', e, !1),
                  window.addEventListener('focus', e, !1),
                  () => {
                    window.removeEventListener('visibilitychange', e),
                      window.removeEventListener('focus', e)
                  }
                )
              }
            })
        }
        onSubscribe() {
          this.cleanup || this.setEventListener(this.setup)
        }
        onUnsubscribe() {
          var t
          this.hasListeners() ||
            (null == (t = this.cleanup) || t.call(this),
            (this.cleanup = void 0))
        }
        setEventListener(t) {
          var e
          ;(this.setup = t),
            null == (e = this.cleanup) || e.call(this),
            (this.cleanup = t((t) => {
              'boolean' === typeof t ? this.setFocused(t) : this.onFocus()
            }))
        }
        setFocused(t) {
          ;(this.focused = t), t && this.onFocus()
        }
        onFocus() {
          this.listeners.forEach((t) => {
            t()
          })
        }
        isFocused() {
          return 'boolean' === typeof this.focused
            ? this.focused
            : 'undefined' === typeof document ||
                [void 0, 'visible', 'prerender'].includes(
                  document.visibilityState
                )
        }
      })()
      const lt = new (class extends st {
        constructor() {
          super(),
            (this.setup = (t) => {
              if (!$ && window.addEventListener) {
                const e = () => t()
                return (
                  window.addEventListener('online', e, !1),
                  window.addEventListener('offline', e, !1),
                  () => {
                    window.removeEventListener('online', e),
                      window.removeEventListener('offline', e)
                  }
                )
              }
            })
        }
        onSubscribe() {
          this.cleanup || this.setEventListener(this.setup)
        }
        onUnsubscribe() {
          var t
          this.hasListeners() ||
            (null == (t = this.cleanup) || t.call(this),
            (this.cleanup = void 0))
        }
        setEventListener(t) {
          var e
          ;(this.setup = t),
            null == (e = this.cleanup) || e.call(this),
            (this.cleanup = t((t) => {
              'boolean' === typeof t ? this.setOnline(t) : this.onOnline()
            }))
        }
        setOnline(t) {
          ;(this.online = t), t && this.onOnline()
        }
        onOnline() {
          this.listeners.forEach((t) => {
            t()
          })
        }
        isOnline() {
          return 'boolean' === typeof this.online
            ? this.online
            : 'undefined' === typeof navigator ||
                'undefined' === typeof navigator.onLine ||
                navigator.onLine
        }
      })()
      function ct(t) {
        return Math.min(1e3 * 2 ** t, 3e4)
      }
      function dt(t) {
        return 'online' !== (null != t ? t : 'online') || lt.isOnline()
      }
      class ft {
        constructor(t) {
          ;(this.revert = null == t ? void 0 : t.revert),
            (this.silent = null == t ? void 0 : t.silent)
        }
      }
      function pt(t) {
        return t instanceof ft
      }
      function ht(t) {
        let e,
          r,
          n,
          o = !1,
          i = 0,
          a = !1
        const s = new Promise((t, e) => {
            ;(r = t), (n = e)
          }),
          u = () =>
            !ut.isFocused() || ('always' !== t.networkMode && !lt.isOnline()),
          l = (n) => {
            a ||
              ((a = !0),
              null == t.onSuccess || t.onSuccess(n),
              null == e || e(),
              r(n))
          },
          c = (r) => {
            a ||
              ((a = !0),
              null == t.onError || t.onError(r),
              null == e || e(),
              n(r))
          },
          d = () =>
            new Promise((r) => {
              ;(e = (t) => {
                if (a || !u()) return r(t)
              }),
                null == t.onPause || t.onPause()
            }).then(() => {
              ;(e = void 0), a || null == t.onContinue || t.onContinue()
            }),
          f = () => {
            if (a) return
            let e
            try {
              e = t.fn()
            } catch (r) {
              e = Promise.reject(r)
            }
            Promise.resolve(e)
              .then(l)
              .catch((e) => {
                var r, n
                if (a) return
                const s = null != (r = t.retry) ? r : 3,
                  l = null != (n = t.retryDelay) ? n : ct,
                  p = 'function' === typeof l ? l(i, e) : l,
                  h =
                    !0 === s ||
                    ('number' === typeof s && i < s) ||
                    ('function' === typeof s && s(i, e))
                !o && h
                  ? (i++,
                    null == t.onFail || t.onFail(i, e),
                    nt(p)
                      .then(() => {
                        if (u()) return d()
                      })
                      .then(() => {
                        o ? c(e) : f()
                      }))
                  : c(e)
              })
          }
        return (
          dt(t.networkMode) ? f() : d().then(f),
          {
            promise: s,
            cancel: (e) => {
              a || (c(new ft(e)), null == t.abort || t.abort())
            },
            continue: () => {
              null == e || e()
            },
            cancelRetry: () => {
              o = !0
            },
            continueRetry: () => {
              o = !1
            },
          }
        )
      }
      class mt extends st {
        constructor(t, e) {
          super(),
            (this.client = t),
            (this.options = e),
            (this.trackedProps = new Set()),
            (this.selectError = null),
            this.bindMethods(),
            this.setOptions(e)
        }
        bindMethods() {
          ;(this.remove = this.remove.bind(this)),
            (this.refetch = this.refetch.bind(this))
        }
        onSubscribe() {
          1 === this.listeners.length &&
            (this.currentQuery.addObserver(this),
            vt(this.currentQuery, this.options) && this.executeFetch(),
            this.updateTimers())
        }
        onUnsubscribe() {
          this.listeners.length || this.destroy()
        }
        shouldFetchOnReconnect() {
          return gt(
            this.currentQuery,
            this.options,
            this.options.refetchOnReconnect
          )
        }
        shouldFetchOnWindowFocus() {
          return gt(
            this.currentQuery,
            this.options,
            this.options.refetchOnWindowFocus
          )
        }
        destroy() {
          ;(this.listeners = []),
            this.clearStaleTimeout(),
            this.clearRefetchInterval(),
            this.currentQuery.removeObserver(this)
        }
        setOptions(t, e) {
          const r = this.options,
            n = this.currentQuery
          if (
            ((this.options = this.client.defaultQueryOptions(t)),
            Z(r, this.options) ||
              this.client
                .getQueryCache()
                .notify({
                  type: 'observerOptionsUpdated',
                  query: this.currentQuery,
                  observer: this,
                }),
            'undefined' !== typeof this.options.enabled &&
              'boolean' !== typeof this.options.enabled)
          )
            throw new Error('Expected enabled to be a boolean')
          this.options.queryKey || (this.options.queryKey = r.queryKey),
            this.updateQuery()
          const o = this.hasListeners()
          o && yt(this.currentQuery, n, this.options, r) && this.executeFetch(),
            this.updateResult(e),
            !o ||
              (this.currentQuery === n &&
                this.options.enabled === r.enabled &&
                this.options.staleTime === r.staleTime) ||
              this.updateStaleTimeout()
          const i = this.computeRefetchInterval()
          !o ||
            (this.currentQuery === n &&
              this.options.enabled === r.enabled &&
              i === this.currentRefetchInterval) ||
            this.updateRefetchInterval(i)
        }
        getOptimisticResult(t) {
          const e = this.client.getQueryCache().build(this.client, t)
          return this.createResult(e, t)
        }
        getCurrentResult() {
          return this.currentResult
        }
        trackResult(t) {
          const e = {}
          return (
            Object.keys(t).forEach((r) => {
              Object.defineProperty(e, r, {
                configurable: !1,
                enumerable: !0,
                get: () => (this.trackedProps.add(r), t[r]),
              })
            }),
            e
          )
        }
        getCurrentQuery() {
          return this.currentQuery
        }
        remove() {
          this.client.getQueryCache().remove(this.currentQuery)
        }
        refetch({ refetchPage: t, ...e } = {}) {
          return this.fetch({ ...e, meta: { refetchPage: t } })
        }
        fetchOptimistic(t) {
          const e = this.client.defaultQueryOptions(t),
            r = this.client.getQueryCache().build(this.client, e)
          return (
            (r.isFetchingOptimistic = !0),
            r.fetch().then(() => this.createResult(r, e))
          )
        }
        fetch(t) {
          var e
          return this.executeFetch({
            ...t,
            cancelRefetch: null == (e = t.cancelRefetch) || e,
          }).then(() => (this.updateResult(), this.currentResult))
        }
        executeFetch(t) {
          this.updateQuery()
          let e = this.currentQuery.fetch(this.options, t)
          return (null != t && t.throwOnError) || (e = e.catch(L)), e
        }
        updateStaleTimeout() {
          if (
            (this.clearStaleTimeout(),
            $ || this.currentResult.isStale || !V(this.options.staleTime))
          )
            return
          const t =
            q(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1
          this.staleTimeoutId = setTimeout(() => {
            this.currentResult.isStale || this.updateResult()
          }, t)
        }
        computeRefetchInterval() {
          var t
          return 'function' === typeof this.options.refetchInterval
            ? this.options.refetchInterval(
                this.currentResult.data,
                this.currentQuery
              )
            : null != (t = this.options.refetchInterval) && t
        }
        updateRefetchInterval(t) {
          this.clearRefetchInterval(),
            (this.currentRefetchInterval = t),
            !$ &&
              !1 !== this.options.enabled &&
              V(this.currentRefetchInterval) &&
              0 !== this.currentRefetchInterval &&
              (this.refetchIntervalId = setInterval(() => {
                ;(this.options.refetchIntervalInBackground || ut.isFocused()) &&
                  this.executeFetch()
              }, this.currentRefetchInterval))
        }
        updateTimers() {
          this.updateStaleTimeout(),
            this.updateRefetchInterval(this.computeRefetchInterval())
        }
        clearStaleTimeout() {
          this.staleTimeoutId &&
            (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0))
        }
        clearRefetchInterval() {
          this.refetchIntervalId &&
            (clearInterval(this.refetchIntervalId),
            (this.refetchIntervalId = void 0))
        }
        createResult(t, e) {
          const r = this.currentQuery,
            n = this.options,
            o = this.currentResult,
            i = this.currentResultState,
            a = this.currentResultOptions,
            s = t !== r,
            u = s ? t.state : this.currentQueryInitialState,
            l = s ? this.currentResult : this.previousQueryResult,
            { state: c } = t
          let d,
            {
              dataUpdatedAt: f,
              error: p,
              errorUpdatedAt: h,
              fetchStatus: m,
              status: v,
            } = c,
            g = !1,
            y = !1
          if (e._optimisticResults) {
            const o = this.hasListeners(),
              i = !o && vt(t, e),
              a = o && yt(t, r, e, n)
            ;(i || a) &&
              ((m = dt(t.options.networkMode) ? 'fetching' : 'paused'),
              f || (v = 'loading')),
              'isRestoring' === e._optimisticResults && (m = 'idle')
          }
          if (
            e.keepPreviousData &&
            !c.dataUpdateCount &&
            null != l &&
            l.isSuccess &&
            'error' !== v
          )
            (d = l.data), (f = l.dataUpdatedAt), (v = l.status), (g = !0)
          else if (e.select && 'undefined' !== typeof c.data)
            if (
              o &&
              c.data === (null == i ? void 0 : i.data) &&
              e.select === this.selectFn
            )
              d = this.selectResult
            else
              try {
                ;(this.selectFn = e.select),
                  (d = e.select(c.data)),
                  (d = it(null == o ? void 0 : o.data, d, e)),
                  (this.selectResult = d),
                  (this.selectError = null)
              } catch (w) {
                0, (this.selectError = w)
              }
          else d = c.data
          if (
            'undefined' !== typeof e.placeholderData &&
            'undefined' === typeof d &&
            'loading' === v
          ) {
            let t
            if (
              null != o &&
              o.isPlaceholderData &&
              e.placeholderData === (null == a ? void 0 : a.placeholderData)
            )
              t = o.data
            else if (
              ((t =
                'function' === typeof e.placeholderData
                  ? e.placeholderData()
                  : e.placeholderData),
              e.select && 'undefined' !== typeof t)
            )
              try {
                ;(t = e.select(t)),
                  (t = it(null == o ? void 0 : o.data, t, e)),
                  (this.selectError = null)
              } catch (w) {
                0, (this.selectError = w)
              }
            'undefined' !== typeof t && ((v = 'success'), (d = t), (y = !0))
          }
          this.selectError &&
            ((p = this.selectError),
            (d = this.selectResult),
            (h = Date.now()),
            (v = 'error'))
          const b = 'fetching' === m,
            x = 'loading' === v,
            S = 'error' === v
          return {
            status: v,
            fetchStatus: m,
            isLoading: x,
            isSuccess: 'success' === v,
            isError: S,
            isInitialLoading: x && b,
            data: d,
            dataUpdatedAt: f,
            error: p,
            errorUpdatedAt: h,
            failureCount: c.fetchFailureCount,
            errorUpdateCount: c.errorUpdateCount,
            isFetched: c.dataUpdateCount > 0 || c.errorUpdateCount > 0,
            isFetchedAfterMount:
              c.dataUpdateCount > u.dataUpdateCount ||
              c.errorUpdateCount > u.errorUpdateCount,
            isFetching: b,
            isRefetching: b && !x,
            isLoadingError: S && 0 === c.dataUpdatedAt,
            isPaused: 'paused' === m,
            isPlaceholderData: y,
            isPreviousData: g,
            isRefetchError: S && 0 !== c.dataUpdatedAt,
            isStale: bt(t, e),
            refetch: this.refetch,
            remove: this.remove,
          }
        }
        updateResult(t) {
          const e = this.currentResult,
            r = this.createResult(this.currentQuery, this.options)
          if (
            ((this.currentResultState = this.currentQuery.state),
            (this.currentResultOptions = this.options),
            Z(r, e))
          )
            return
          this.currentResult = r
          const n = { cache: !0 }
          !1 !== (null == t ? void 0 : t.listeners) &&
            (() => {
              if (!e) return !0
              const { notifyOnChangeProps: t } = this.options
              if ('all' === t || (!t && !this.trackedProps.size)) return !0
              const r = new Set(null != t ? t : this.trackedProps)
              return (
                this.options.useErrorBoundary && r.add('error'),
                Object.keys(this.currentResult).some((t) => {
                  const n = t
                  return this.currentResult[n] !== e[n] && r.has(n)
                })
              )
            })() &&
            (n.listeners = !0),
            this.notify({ ...n, ...t })
        }
        updateQuery() {
          const t = this.client.getQueryCache().build(this.client, this.options)
          if (t === this.currentQuery) return
          const e = this.currentQuery
          ;(this.currentQuery = t),
            (this.currentQueryInitialState = t.state),
            (this.previousQueryResult = this.currentResult),
            this.hasListeners() &&
              (null == e || e.removeObserver(this), t.addObserver(this))
        }
        onQueryUpdate(t) {
          const e = {}
          'success' === t.type
            ? (e.onSuccess = !t.manual)
            : 'error' !== t.type || pt(t.error) || (e.onError = !0),
            this.updateResult(e),
            this.hasListeners() && this.updateTimers()
        }
        notify(t) {
          at.batch(() => {
            var e, r, n, o
            if (t.onSuccess)
              null == (e = (r = this.options).onSuccess) ||
                e.call(r, this.currentResult.data),
                null == (n = (o = this.options).onSettled) ||
                  n.call(o, this.currentResult.data, null)
            else if (t.onError) {
              var i, a, s, u
              null == (i = (a = this.options).onError) ||
                i.call(a, this.currentResult.error),
                null == (s = (u = this.options).onSettled) ||
                  s.call(u, void 0, this.currentResult.error)
            }
            t.listeners &&
              this.listeners.forEach((t) => {
                t(this.currentResult)
              }),
              t.cache &&
                this.client
                  .getQueryCache()
                  .notify({
                    query: this.currentQuery,
                    type: 'observerResultsUpdated',
                  })
          })
        }
      }
      function vt(t, e) {
        return (
          (function (t, e) {
            return (
              !1 !== e.enabled &&
              !t.state.dataUpdatedAt &&
              !('error' === t.state.status && !1 === e.retryOnMount)
            )
          })(t, e) ||
          (t.state.dataUpdatedAt > 0 && gt(t, e, e.refetchOnMount))
        )
      }
      function gt(t, e, r) {
        if (!1 !== e.enabled) {
          const n = 'function' === typeof r ? r(t) : r
          return 'always' === n || (!1 !== n && bt(t, e))
        }
        return !1
      }
      function yt(t, e, r, n) {
        return (
          !1 !== r.enabled &&
          (t !== e || !1 === n.enabled) &&
          (!r.suspense || 'error' !== t.state.status) &&
          bt(t, r)
        )
      }
      function bt(t, e) {
        return t.isStaleByTime(e.staleTime)
      }
      const xt = r(5845).useSyncExternalStore
      function St() {
        let t = !1
        return {
          clearReset: () => {
            t = !1
          },
          reset: () => {
            t = !0
          },
          isReset: () => t,
        }
      }
      const wt = E.createContext(St()),
        kt = E.createContext(!1)
      kt.Provider
      function Ct(t, e) {
        return 'function' === typeof t ? t(...e) : !!t
      }
      function _t(t, e) {
        const r = T({ context: t.context }),
          n = E.useContext(kt),
          o = E.useContext(wt),
          i = r.defaultQueryOptions(t)
        ;(i._optimisticResults = n ? 'isRestoring' : 'optimistic'),
          i.onError && (i.onError = at.batchCalls(i.onError)),
          i.onSuccess && (i.onSuccess = at.batchCalls(i.onSuccess)),
          i.onSettled && (i.onSettled = at.batchCalls(i.onSettled)),
          i.suspense && 'number' !== typeof i.staleTime && (i.staleTime = 1e3),
          ((t, e) => {
            ;(t.suspense || t.useErrorBoundary) &&
              (e.isReset() || (t.retryOnMount = !1))
          })(i, o),
          ((t) => {
            E.useEffect(() => {
              t.clearReset()
            }, [t])
          })(o)
        const [a] = E.useState(() => new e(r, i)),
          s = a.getOptimisticResult(i)
        if (
          (xt(
            E.useCallback(
              (t) => (n ? () => {} : a.subscribe(at.batchCalls(t))),
              [a, n]
            ),
            () => a.getCurrentResult(),
            () => a.getCurrentResult()
          ),
          E.useEffect(() => {
            a.setOptions(i, { listeners: !1 })
          }, [i, a]),
          i.suspense && s.isLoading && s.isFetching && !n)
        )
          throw a
            .fetchOptimistic(i)
            .then(({ data: t }) => {
              null == i.onSuccess || i.onSuccess(t),
                null == i.onSettled || i.onSettled(t, null)
            })
            .catch((t) => {
              o.clearReset(),
                null == i.onError || i.onError(t),
                null == i.onSettled || i.onSettled(void 0, t)
            })
        if (
          (({
            result: t,
            errorResetBoundary: e,
            useErrorBoundary: r,
            query: n,
          }) =>
            t.isError && !e.isReset() && !t.isFetching && Ct(r, [t.error, n]))({
            result: s,
            errorResetBoundary: o,
            useErrorBoundary: i.useErrorBoundary,
            query: a.getCurrentQuery(),
          })
        )
          throw s.error
        return i.notifyOnChangeProps ? s : a.trackResult(s)
      }
      const Et = console
      class At {
        destroy() {
          this.clearGcTimeout()
        }
        scheduleGc() {
          this.clearGcTimeout(),
            V(this.cacheTime) &&
              (this.gcTimeout = setTimeout(() => {
                this.optionalRemove()
              }, this.cacheTime))
        }
        updateCacheTime(t) {
          this.cacheTime = Math.max(
            this.cacheTime || 0,
            null != t ? t : $ ? 1 / 0 : 3e5
          )
        }
        clearGcTimeout() {
          this.gcTimeout &&
            (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0))
        }
      }
      class Pt extends At {
        constructor(t) {
          super(),
            (this.options = { ...t.defaultOptions, ...t.options }),
            (this.mutationId = t.mutationId),
            (this.mutationCache = t.mutationCache),
            (this.logger = t.logger || Et),
            (this.observers = []),
            (this.state = t.state || Rt()),
            (this.meta = t.meta),
            this.updateCacheTime(this.options.cacheTime),
            this.scheduleGc()
        }
        setState(t) {
          this.dispatch({ type: 'setState', state: t })
        }
        addObserver(t) {
          ;-1 === this.observers.indexOf(t) &&
            (this.observers.push(t),
            this.clearGcTimeout(),
            this.mutationCache.notify({
              type: 'observerAdded',
              mutation: this,
              observer: t,
            }))
        }
        removeObserver(t) {
          ;(this.observers = this.observers.filter((e) => e !== t)),
            this.scheduleGc(),
            this.mutationCache.notify({
              type: 'observerRemoved',
              mutation: this,
              observer: t,
            })
        }
        optionalRemove() {
          this.observers.length ||
            ('loading' === this.state.status
              ? this.scheduleGc()
              : this.mutationCache.remove(this))
        }
        continue() {
          return this.retryer
            ? (this.retryer.continue(), this.retryer.promise)
            : this.execute()
        }
        async execute() {
          const t = () => {
              var t
              return (
                (this.retryer = ht({
                  fn: () =>
                    this.options.mutationFn
                      ? this.options.mutationFn(this.state.variables)
                      : Promise.reject('No mutationFn found'),
                  onFail: () => {
                    this.dispatch({ type: 'failed' })
                  },
                  onPause: () => {
                    this.dispatch({ type: 'pause' })
                  },
                  onContinue: () => {
                    this.dispatch({ type: 'continue' })
                  },
                  retry: null != (t = this.options.retry) ? t : 0,
                  retryDelay: this.options.retryDelay,
                  networkMode: this.options.networkMode,
                })),
                this.retryer.promise
              )
            },
            e = 'loading' === this.state.status
          try {
            var r, n, o, i, a, s
            if (!e) {
              var u, l, c, d
              this.dispatch({
                type: 'loading',
                variables: this.options.variables,
              }),
                null == (u = (l = this.mutationCache.config).onMutate) ||
                  u.call(l, this.state.variables, this)
              const t = await (null == (c = (d = this.options).onMutate)
                ? void 0
                : c.call(d, this.state.variables))
              t !== this.state.context &&
                this.dispatch({
                  type: 'loading',
                  context: t,
                  variables: this.state.variables,
                })
            }
            const f = await t()
            return (
              null == (r = (n = this.mutationCache.config).onSuccess) ||
                r.call(n, f, this.state.variables, this.state.context, this),
              await (null == (o = (i = this.options).onSuccess)
                ? void 0
                : o.call(i, f, this.state.variables, this.state.context)),
              await (null == (a = (s = this.options).onSettled)
                ? void 0
                : a.call(s, f, null, this.state.variables, this.state.context)),
              this.dispatch({ type: 'success', data: f }),
              f
            )
          } catch (y) {
            try {
              var f, p, h, m, v, g
              throw (
                (null == (f = (p = this.mutationCache.config).onError) ||
                  f.call(p, y, this.state.variables, this.state.context, this),
                await (null == (h = (m = this.options).onError)
                  ? void 0
                  : h.call(m, y, this.state.variables, this.state.context)),
                await (null == (v = (g = this.options).onSettled)
                  ? void 0
                  : v.call(
                      g,
                      void 0,
                      y,
                      this.state.variables,
                      this.state.context
                    )),
                y)
              )
            } finally {
              this.dispatch({ type: 'error', error: y })
            }
          }
        }
        dispatch(t) {
          ;(this.state = ((e) => {
            switch (t.type) {
              case 'failed':
                return { ...e, failureCount: e.failureCount + 1 }
              case 'pause':
                return { ...e, isPaused: !0 }
              case 'continue':
                return { ...e, isPaused: !1 }
              case 'loading':
                return {
                  ...e,
                  context: t.context,
                  data: void 0,
                  error: null,
                  isPaused: !dt(this.options.networkMode),
                  status: 'loading',
                  variables: t.variables,
                }
              case 'success':
                return {
                  ...e,
                  data: t.data,
                  error: null,
                  status: 'success',
                  isPaused: !1,
                }
              case 'error':
                return {
                  ...e,
                  data: void 0,
                  error: t.error,
                  failureCount: e.failureCount + 1,
                  isPaused: !1,
                  status: 'error',
                }
              case 'setState':
                return { ...e, ...t.state }
            }
          })(this.state)),
            at.batch(() => {
              this.observers.forEach((e) => {
                e.onMutationUpdate(t)
              }),
                this.mutationCache.notify({
                  mutation: this,
                  type: 'updated',
                  action: t,
                })
            })
        }
      }
      function Rt() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          isPaused: !1,
          status: 'idle',
          variables: void 0,
        }
      }
      class Tt extends st {
        constructor(t, e) {
          super(),
            (this.client = t),
            this.setOptions(e),
            this.bindMethods(),
            this.updateResult()
        }
        bindMethods() {
          ;(this.mutate = this.mutate.bind(this)),
            (this.reset = this.reset.bind(this))
        }
        setOptions(t) {
          const e = this.options
          ;(this.options = this.client.defaultMutationOptions(t)),
            Z(e, this.options) ||
              this.client
                .getMutationCache()
                .notify({
                  type: 'observerOptionsUpdated',
                  mutation: this.currentMutation,
                  observer: this,
                })
        }
        onUnsubscribe() {
          var t
          this.listeners.length ||
            null == (t = this.currentMutation) ||
            t.removeObserver(this)
        }
        onMutationUpdate(t) {
          this.updateResult()
          const e = { listeners: !0 }
          'success' === t.type
            ? (e.onSuccess = !0)
            : 'error' === t.type && (e.onError = !0),
            this.notify(e)
        }
        getCurrentResult() {
          return this.currentResult
        }
        reset() {
          ;(this.currentMutation = void 0),
            this.updateResult(),
            this.notify({ listeners: !0 })
        }
        mutate(t, e) {
          return (
            (this.mutateOptions = e),
            this.currentMutation && this.currentMutation.removeObserver(this),
            (this.currentMutation = this.client
              .getMutationCache()
              .build(this.client, {
                ...this.options,
                variables:
                  'undefined' !== typeof t ? t : this.options.variables,
              })),
            this.currentMutation.addObserver(this),
            this.currentMutation.execute()
          )
        }
        updateResult() {
          const t = this.currentMutation
              ? this.currentMutation.state
              : {
                  context: void 0,
                  data: void 0,
                  error: null,
                  failureCount: 0,
                  isPaused: !1,
                  status: 'idle',
                  variables: void 0,
                },
            e = {
              ...t,
              isLoading: 'loading' === t.status,
              isSuccess: 'success' === t.status,
              isError: 'error' === t.status,
              isIdle: 'idle' === t.status,
              mutate: this.mutate,
              reset: this.reset,
            }
          this.currentResult = e
        }
        notify(t) {
          at.batch(() => {
            var e, r, n, o
            if (this.mutateOptions)
              if (t.onSuccess)
                null == (e = (r = this.mutateOptions).onSuccess) ||
                  e.call(
                    r,
                    this.currentResult.data,
                    this.currentResult.variables,
                    this.currentResult.context
                  ),
                  null == (n = (o = this.mutateOptions).onSettled) ||
                    n.call(
                      o,
                      this.currentResult.data,
                      null,
                      this.currentResult.variables,
                      this.currentResult.context
                    )
              else if (t.onError) {
                var i, a, s, u
                null == (i = (a = this.mutateOptions).onError) ||
                  i.call(
                    a,
                    this.currentResult.error,
                    this.currentResult.variables,
                    this.currentResult.context
                  ),
                  null == (s = (u = this.mutateOptions).onSettled) ||
                    s.call(
                      u,
                      void 0,
                      this.currentResult.error,
                      this.currentResult.variables,
                      this.currentResult.context
                    )
              }
            t.listeners &&
              this.listeners.forEach((t) => {
                t(this.currentResult)
              })
          })
        }
      }
      function Mt(t, e, r) {
        const n = (function (t, e, r) {
            return rt(t)
              ? 'function' === typeof e
                ? { ...r, mutationKey: t, mutationFn: e }
                : { ...e, mutationKey: t }
              : 'function' === typeof t
              ? { ...e, mutationFn: t }
              : { ...t }
          })(t, e, r),
          o = T({ context: n.context }),
          [i] = E.useState(() => new Tt(o, n))
        E.useEffect(() => {
          i.setOptions(n)
        }, [i, n])
        const a = xt(
            E.useCallback((t) => i.subscribe(at.batchCalls(t)), [i]),
            () => i.getCurrentResult(),
            () => i.getCurrentResult()
          ),
          s = E.useCallback(
            (t, e) => {
              i.mutate(t, e).catch(Ot)
            },
            [i]
          )
        if (a.error && Ct(i.options.useErrorBoundary, [a.error])) throw a.error
        return { ...a, mutate: s, mutateAsync: a.mutate }
      }
      function Ot() {}
      function jt() {
        return {
          onFetch: (t) => {
            t.fetchFn = () => {
              var e, r, n, o, i, a
              const s =
                  null == (e = t.fetchOptions) || null == (r = e.meta)
                    ? void 0
                    : r.refetchPage,
                u =
                  null == (n = t.fetchOptions) || null == (o = n.meta)
                    ? void 0
                    : o.fetchMore,
                l = null == u ? void 0 : u.pageParam,
                c = 'forward' === (null == u ? void 0 : u.direction),
                d = 'backward' === (null == u ? void 0 : u.direction),
                f = (null == (i = t.state.data) ? void 0 : i.pages) || [],
                p = (null == (a = t.state.data) ? void 0 : a.pageParams) || []
              let h = p,
                m = !1
              const v =
                  t.options.queryFn ||
                  (() => Promise.reject('Missing queryFn')),
                g = (t, e, r, n) => (
                  (h = n ? [e, ...h] : [...h, e]), n ? [r, ...t] : [...t, r]
                ),
                y = (e, r, n, o) => {
                  if (m) return Promise.reject('Cancelled')
                  if ('undefined' === typeof n && !r && e.length)
                    return Promise.resolve(e)
                  const i = { queryKey: t.queryKey, pageParam: n, meta: t.meta }
                  var a
                  ;(a = i),
                    Object.defineProperty(a, 'signal', {
                      enumerable: !0,
                      get: () => {
                        var e, r
                        return (
                          null != (e = t.signal) && e.aborted
                            ? (m = !0)
                            : null == (r = t.signal) ||
                              r.addEventListener('abort', () => {
                                m = !0
                              }),
                          t.signal
                        )
                      },
                    })
                  const s = v(i)
                  return Promise.resolve(s).then((t) => g(e, n, t, o))
                }
              let b
              if (f.length)
                if (c) {
                  const e = 'undefined' !== typeof l,
                    r = e ? l : Ft(t.options, f)
                  b = y(f, e, r)
                } else if (d) {
                  const e = 'undefined' !== typeof l,
                    r = e ? l : Dt(t.options, f)
                  b = y(f, e, r, !0)
                } else {
                  h = []
                  const e = 'undefined' === typeof t.options.getNextPageParam
                  b =
                    !s || !f[0] || s(f[0], 0, f)
                      ? y([], e, p[0])
                      : Promise.resolve(g([], p[0], f[0]))
                  for (let r = 1; r < f.length; r++)
                    b = b.then((n) => {
                      if (!s || !f[r] || s(f[r], r, f)) {
                        const o = e ? p[r] : Ft(t.options, n)
                        return y(n, e, o)
                      }
                      return Promise.resolve(g(n, p[r], f[r]))
                    })
                }
              else b = y([])
              return b.then((t) => ({ pages: t, pageParams: h }))
            }
          },
        }
      }
      function Ft(t, e) {
        return null == t.getNextPageParam
          ? void 0
          : t.getNextPageParam(e[e.length - 1], e)
      }
      function Dt(t, e) {
        return null == t.getPreviousPageParam
          ? void 0
          : t.getPreviousPageParam(e[0], e)
      }
      function Bt(t, e) {
        if (t.getNextPageParam && Array.isArray(e)) {
          const r = Ft(t, e)
          return 'undefined' !== typeof r && null !== r && !1 !== r
        }
      }
      function zt(t, e) {
        if (t.getPreviousPageParam && Array.isArray(e)) {
          const r = Dt(t, e)
          return 'undefined' !== typeof r && null !== r && !1 !== r
        }
      }
      class It extends mt {
        constructor(t, e) {
          super(t, e)
        }
        bindMethods() {
          super.bindMethods(),
            (this.fetchNextPage = this.fetchNextPage.bind(this)),
            (this.fetchPreviousPage = this.fetchPreviousPage.bind(this))
        }
        setOptions(t, e) {
          super.setOptions({ ...t, behavior: jt() }, e)
        }
        getOptimisticResult(t) {
          return (t.behavior = jt()), super.getOptimisticResult(t)
        }
        fetchNextPage({ pageParam: t, ...e } = {}) {
          return this.fetch({
            ...e,
            meta: { fetchMore: { direction: 'forward', pageParam: t } },
          })
        }
        fetchPreviousPage({ pageParam: t, ...e } = {}) {
          return this.fetch({
            ...e,
            meta: { fetchMore: { direction: 'backward', pageParam: t } },
          })
        }
        createResult(t, e) {
          var r, n, o, i, a, s
          const { state: u } = t
          return {
            ...super.createResult(t, e),
            fetchNextPage: this.fetchNextPage,
            fetchPreviousPage: this.fetchPreviousPage,
            hasNextPage: Bt(e, null == (r = u.data) ? void 0 : r.pages),
            hasPreviousPage: zt(e, null == (n = u.data) ? void 0 : n.pages),
            isFetchingNextPage:
              'fetching' === u.fetchStatus &&
              'forward' ===
                (null == (o = u.fetchMeta) || null == (i = o.fetchMore)
                  ? void 0
                  : i.direction),
            isFetchingPreviousPage:
              'fetching' === u.fetchStatus &&
              'backward' ===
                (null == (a = u.fetchMeta) || null == (s = a.fetchMore)
                  ? void 0
                  : s.direction),
          }
        }
      }
      function $t(t) {
        const e = Array.isArray(t) ? t : [t],
          [r, ...n] = e
        return ['string' !== typeof r || '' === r ? [] : r.split('.'), ...n]
      }
      function Lt(t, e) {
        return void 0 === e ? [t] : [t, e]
      }
      function Vt(t, e) {
        return z((r) => {
          const n = r.args,
            o = [t, ...r.path],
            i = o.pop(),
            a = o.join('.')
          if ('useMutation' === i) return e[i](a, ...n)
          const [s, ...u] = n,
            l = Lt(a, s)
          return e[i](l, ...u)
        })
      }
      const qt = ['client', 'ssrContext', 'ssrState', 'abortOnUnmount'],
        Ut = (0, E.createContext)(null)
      function Nt(t) {
        return I((e) => {
          const r = e
          return qt.includes(r)
            ? t[r]
            : z(({ path: r, args: n }) => {
                const o = [e, ...r],
                  i = o.pop(),
                  a = o.join('.'),
                  {
                    queryKey: s,
                    rest: u,
                    updater: l,
                  } = ((t) => {
                    if (['setData', 'setInfiniteData'].includes(t)) {
                      const [t, e, ...r] = n
                      return { queryKey: Lt(a, e), updater: t, rest: r }
                    }
                    const [e, ...r] = n
                    return { queryKey: Lt(a, e), rest: r }
                  })(i)
                return {
                  fetch: () => t.fetchQuery(s, ...u),
                  fetchInfinite: () => t.fetchInfiniteQuery(s, ...u),
                  prefetch: () => t.prefetchQuery(s, ...u),
                  prefetchInfinite: () => t.prefetchInfiniteQuery(s, ...u),
                  invalidate: () => t.invalidateQueries(s, ...u),
                  refetch: () => t.refetchQueries(s, ...u),
                  cancel: () => t.cancelQuery(s, ...u),
                  setData: () => t.setQueryData(s, l, ...u),
                  setInfiniteData: () => t.setInfiniteQueryData(s, l, ...u),
                  getData: () => t.getQueryData(s),
                  getInfiniteData: () => t.getInfiniteQueryData(s),
                }[i]()
              })
        })
      }
      function Wt(t, e) {
        const [r, n] = t
        return [r, n, e?.trpc]
      }
      function Ht(t) {
        const e = (0, E.useRef)(t)
        return (e.current.path = t.path), e.current
      }
      function Qt(t) {
        const e =
            t?.unstable_overrides?.useMutation?.onSuccess ??
            ((t) => t.originalFn()),
          r = Ut
        function n() {
          return E.useContext(r)
        }
        function o(t, e) {
          const { queryClient: r, ssrState: o } = n()
          return o &&
            'mounted' !== o &&
            'error' === r.getQueryCache().find($t(t))?.state.status
            ? { retryOnMount: !1, ...e }
            : e
        }
        return {
          Provider: (t) => {
            const {
                abortOnUnmount: e = !1,
                client: n,
                queryClient: o,
                ssrContext: i,
              } = t,
              [a, s] = (0, E.useState)(t.ssrState ?? !1)
            return (
              (0, E.useEffect)(() => {
                s((t) => !!t && 'mounted')
              }, []),
              E.createElement(
                r.Provider,
                {
                  value: {
                    abortOnUnmount: e,
                    queryClient: o,
                    client: n,
                    ssrContext: i || null,
                    ssrState: a,
                    fetchQuery: (0, E.useCallback)(
                      (t, e) =>
                        o.fetchQuery($t(t), () => n.query(...Wt(t, e)), e),
                      [n, o]
                    ),
                    fetchInfiniteQuery: (0, E.useCallback)(
                      (t, e) =>
                        o.fetchInfiniteQuery(
                          $t(t),
                          ({ pageParam: r }) => {
                            const [o, i] = t,
                              a = { ...i, cursor: r }
                            return n.query(...Wt([o, a], e))
                          },
                          e
                        ),
                      [n, o]
                    ),
                    prefetchQuery: (0, E.useCallback)(
                      (t, e) =>
                        o.prefetchQuery($t(t), () => n.query(...Wt(t, e)), e),
                      [n, o]
                    ),
                    prefetchInfiniteQuery: (0, E.useCallback)(
                      (t, e) =>
                        o.prefetchInfiniteQuery(
                          $t(t),
                          ({ pageParam: r }) => {
                            const [o, i] = t,
                              a = { ...i, cursor: r }
                            return n.query(...Wt([o, a], e))
                          },
                          e
                        ),
                      [n, o]
                    ),
                    invalidateQueries: (0, E.useCallback)(
                      (...t) => {
                        const [e, ...r] = t
                        return o.invalidateQueries($t(e), ...r)
                      },
                      [o]
                    ),
                    refetchQueries: (0, E.useCallback)(
                      (...t) => {
                        const [e, ...r] = t
                        return o.refetchQueries($t(e), ...r)
                      },
                      [o]
                    ),
                    cancelQuery: (0, E.useCallback)(
                      (t) => o.cancelQueries($t(t)),
                      [o]
                    ),
                    setQueryData: (0, E.useCallback)(
                      (...t) => {
                        const [e, ...r] = t
                        return o.setQueryData($t(e), ...r)
                      },
                      [o]
                    ),
                    getQueryData: (0, E.useCallback)(
                      (...t) => {
                        const [e, ...r] = t
                        return o.getQueryData($t(e), ...r)
                      },
                      [o]
                    ),
                    setInfiniteQueryData: (0, E.useCallback)(
                      (...t) => {
                        const [e, ...r] = t
                        return o.setQueryData($t(e), ...r)
                      },
                      [o]
                    ),
                    getInfiniteQueryData: (0, E.useCallback)(
                      (...t) => {
                        const [e, ...r] = t
                        return o.getQueryData($t(e), ...r)
                      },
                      [o]
                    ),
                  },
                },
                t.children
              )
            )
          },
          createClient: (t) => _(t),
          useContext: n,
          useQuery: function (t, e) {
            const {
              abortOnUnmount: r,
              client: i,
              ssrState: a,
              queryClient: s,
              prefetchQuery: u,
            } = n()
            'undefined' !== typeof window ||
              'prepass' !== a ||
              !1 === e?.trpc?.ssr ||
              !1 === e?.enabled ||
              s.getQueryCache().find($t(t)) ||
              u(t, e)
            const l = o(t, e),
              c = e?.trpc?.abortOnUnmount ?? r,
              d = _t(
                U(
                  $t(t),
                  (e) => {
                    const r = {
                      ...l,
                      trpc: { ...l?.trpc, ...(c ? { signal: e.signal } : {}) },
                    }
                    return i.query(...Wt(t, r))
                  },
                  l
                ),
                mt
              )
            return (d.trpc = Ht({ path: t[0] })), d
          },
          useMutation: function (t, r) {
            const { client: o } = n(),
              i = T(),
              a = Mt(
                (e) => {
                  const n = Array.isArray(t) ? t[0] : t
                  return o.mutation(...Wt([n, e], r))
                },
                {
                  ...r,
                  onSuccess: (...t) =>
                    e({
                      originalFn: () => r?.onSuccess?.(...t),
                      queryClient: i,
                    }),
                }
              )
            return (a.trpc = Ht({ path: Array.isArray(t) ? t[0] : t })), a
          },
          useSubscription: function (t, e) {
            const r = e?.enabled ?? !0,
              o = G(t),
              { client: i } = n()
            return (0, E.useEffect)(() => {
              if (!r) return
              const [n, o] = t
              let a = !1
              const s = i.subscription(n, o ?? void 0, {
                onStarted: () => {
                  a || e.onStarted?.()
                },
                onData: (t) => {
                  a || e.onData(t)
                },
                onError: (t) => {
                  a || e.onError?.(t)
                },
              })
              return () => {
                ;(a = !0), s.unsubscribe()
              }
            }, [o, r])
          },
          useDehydratedState: (t, e) =>
            (0, E.useMemo)(
              () => (e ? t.runtime.transformer.deserialize(e) : e),
              [e, t]
            ),
          useInfiniteQuery: function (t, e) {
            const [r, i] = t,
              {
                client: a,
                ssrState: s,
                prefetchInfiniteQuery: u,
                queryClient: l,
                abortOnUnmount: c,
              } = n()
            'undefined' !== typeof window ||
              'prepass' !== s ||
              !1 === e?.trpc?.ssr ||
              !1 === e?.enabled ||
              l.getQueryCache().find($t(t)) ||
              u(t, e)
            const d = o(t, e),
              f = e?.trpc?.abortOnUnmount ?? c,
              p = _t(
                U(
                  $t(t),
                  (t) => {
                    const e = {
                        ...d,
                        trpc: {
                          ...d?.trpc,
                          ...(f ? { signal: t.signal } : {}),
                        },
                      },
                      n = { ...(i ?? {}), cursor: t.pageParam }
                    return a.query(...Wt([r, n], e))
                  },
                  d
                ),
                It
              )
            return (p.trpc = Ht({ path: r })), p
          },
        }
      }
      function Gt(t) {
        return I((e) =>
          'useContext' === e
            ? () => {
                const e = t.useContext()
                return (0, E.useMemo)(() => Nt(e), [e])
              }
            : e in t
            ? t[e]
            : Vt(e, t)
        )
      }
      class Kt extends At {
        constructor(t) {
          super(),
            (this.abortSignalConsumed = !1),
            (this.defaultOptions = t.defaultOptions),
            this.setOptions(t.options),
            (this.observers = []),
            (this.cache = t.cache),
            (this.logger = t.logger || Et),
            (this.queryKey = t.queryKey),
            (this.queryHash = t.queryHash),
            (this.initialState =
              t.state ||
              (function (t) {
                const e =
                    'function' === typeof t.initialData
                      ? t.initialData()
                      : t.initialData,
                  r =
                    'undefined' !== typeof t.initialData
                      ? 'function' === typeof t.initialDataUpdatedAt
                        ? t.initialDataUpdatedAt()
                        : t.initialDataUpdatedAt
                      : 0,
                  n = 'undefined' !== typeof e
                return {
                  data: e,
                  dataUpdateCount: 0,
                  dataUpdatedAt: n ? (null != r ? r : Date.now()) : 0,
                  error: null,
                  errorUpdateCount: 0,
                  errorUpdatedAt: 0,
                  fetchFailureCount: 0,
                  fetchMeta: null,
                  isInvalidated: !1,
                  status: n ? 'success' : 'loading',
                  fetchStatus: 'idle',
                }
              })(this.options)),
            (this.state = this.initialState),
            (this.meta = t.meta)
        }
        setOptions(t) {
          ;(this.options = { ...this.defaultOptions, ...t }),
            (this.meta = null == t ? void 0 : t.meta),
            this.updateCacheTime(this.options.cacheTime)
        }
        optionalRemove() {
          this.observers.length ||
            'idle' !== this.state.fetchStatus ||
            this.cache.remove(this)
        }
        setData(t, e) {
          const r = it(this.state.data, t, this.options)
          return (
            this.dispatch({
              data: r,
              type: 'success',
              dataUpdatedAt: null == e ? void 0 : e.updatedAt,
              manual: null == e ? void 0 : e.manual,
            }),
            r
          )
        }
        setState(t, e) {
          this.dispatch({ type: 'setState', state: t, setStateOptions: e })
        }
        cancel(t) {
          var e
          const r = this.promise
          return (
            null == (e = this.retryer) || e.cancel(t),
            r ? r.then(L).catch(L) : Promise.resolve()
          )
        }
        destroy() {
          super.destroy(), this.cancel({ silent: !0 })
        }
        reset() {
          this.destroy(), this.setState(this.initialState)
        }
        isActive() {
          return this.observers.some((t) => !1 !== t.options.enabled)
        }
        isDisabled() {
          return this.getObserversCount() > 0 && !this.isActive()
        }
        isStale() {
          return (
            this.state.isInvalidated ||
            !this.state.dataUpdatedAt ||
            this.observers.some((t) => t.getCurrentResult().isStale)
          )
        }
        isStaleByTime(t = 0) {
          return (
            this.state.isInvalidated ||
            !this.state.dataUpdatedAt ||
            !q(this.state.dataUpdatedAt, t)
          )
        }
        onFocus() {
          var t
          const e = this.observers.find((t) => t.shouldFetchOnWindowFocus())
          e && e.refetch({ cancelRefetch: !1 }),
            null == (t = this.retryer) || t.continue()
        }
        onOnline() {
          var t
          const e = this.observers.find((t) => t.shouldFetchOnReconnect())
          e && e.refetch({ cancelRefetch: !1 }),
            null == (t = this.retryer) || t.continue()
        }
        addObserver(t) {
          ;-1 === this.observers.indexOf(t) &&
            (this.observers.push(t),
            this.clearGcTimeout(),
            this.cache.notify({
              type: 'observerAdded',
              query: this,
              observer: t,
            }))
        }
        removeObserver(t) {
          ;-1 !== this.observers.indexOf(t) &&
            ((this.observers = this.observers.filter((e) => e !== t)),
            this.observers.length ||
              (this.retryer &&
                (this.abortSignalConsumed
                  ? this.retryer.cancel({ revert: !0 })
                  : this.retryer.cancelRetry()),
              this.scheduleGc()),
            this.cache.notify({
              type: 'observerRemoved',
              query: this,
              observer: t,
            }))
        }
        getObserversCount() {
          return this.observers.length
        }
        invalidate() {
          this.state.isInvalidated || this.dispatch({ type: 'invalidate' })
        }
        fetch(t, e) {
          var r, n
          if ('idle' !== this.state.fetchStatus)
            if (this.state.dataUpdatedAt && null != e && e.cancelRefetch)
              this.cancel({ silent: !0 })
            else if (this.promise) {
              var o
              return (
                null == (o = this.retryer) || o.continueRetry(), this.promise
              )
            }
          if ((t && this.setOptions(t), !this.options.queryFn)) {
            const t = this.observers.find((t) => t.options.queryFn)
            t && this.setOptions(t.options)
          }
          Array.isArray(this.options.queryKey)
          const i = (function () {
              if ('function' === typeof AbortController)
                return new AbortController()
            })(),
            a = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
            s = (t) => {
              Object.defineProperty(t, 'signal', {
                enumerable: !0,
                get: () => {
                  if (i) return (this.abortSignalConsumed = !0), i.signal
                },
              })
            }
          s(a)
          const u = {
            fetchOptions: e,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: () =>
              this.options.queryFn
                ? ((this.abortSignalConsumed = !1), this.options.queryFn(a))
                : Promise.reject('Missing queryFn'),
            meta: this.meta,
          }
          var l
          ;(s(u),
          null == (r = this.options.behavior) || r.onFetch(u),
          (this.revertState = this.state),
          'idle' === this.state.fetchStatus ||
            this.state.fetchMeta !==
              (null == (n = u.fetchOptions) ? void 0 : n.meta)) &&
            this.dispatch({
              type: 'fetch',
              meta: null == (l = u.fetchOptions) ? void 0 : l.meta,
            })
          const c = (t) => {
            var e, r
            ;((pt(t) && t.silent) || this.dispatch({ type: 'error', error: t }),
            pt(t)) ||
              null == (e = (r = this.cache.config).onError) ||
              e.call(r, t, this)
            this.isFetchingOptimistic || this.scheduleGc(),
              (this.isFetchingOptimistic = !1)
          }
          return (
            (this.retryer = ht({
              fn: u.fetchFn,
              abort: null == i ? void 0 : i.abort.bind(i),
              onSuccess: (t) => {
                var e, r
                'undefined' !== typeof t
                  ? (this.setData(t),
                    null == (e = (r = this.cache.config).onSuccess) ||
                      e.call(r, t, this),
                    this.isFetchingOptimistic || this.scheduleGc(),
                    (this.isFetchingOptimistic = !1))
                  : c(new Error('undefined'))
              },
              onError: c,
              onFail: () => {
                this.dispatch({ type: 'failed' })
              },
              onPause: () => {
                this.dispatch({ type: 'pause' })
              },
              onContinue: () => {
                this.dispatch({ type: 'continue' })
              },
              retry: u.options.retry,
              retryDelay: u.options.retryDelay,
              networkMode: u.options.networkMode,
            })),
            (this.promise = this.retryer.promise),
            this.promise
          )
        }
        dispatch(t) {
          ;(this.state = ((e) => {
            var r, n
            switch (t.type) {
              case 'failed':
                return { ...e, fetchFailureCount: e.fetchFailureCount + 1 }
              case 'pause':
                return { ...e, fetchStatus: 'paused' }
              case 'continue':
                return { ...e, fetchStatus: 'fetching' }
              case 'fetch':
                return {
                  ...e,
                  fetchFailureCount: 0,
                  fetchMeta: null != (r = t.meta) ? r : null,
                  fetchStatus: dt(this.options.networkMode)
                    ? 'fetching'
                    : 'paused',
                  ...(!e.dataUpdatedAt && { error: null, status: 'loading' }),
                }
              case 'success':
                return {
                  ...e,
                  data: t.data,
                  dataUpdateCount: e.dataUpdateCount + 1,
                  dataUpdatedAt: null != (n = t.dataUpdatedAt) ? n : Date.now(),
                  error: null,
                  isInvalidated: !1,
                  status: 'success',
                  ...(!t.manual && {
                    fetchStatus: 'idle',
                    fetchFailureCount: 0,
                  }),
                }
              case 'error':
                const o = t.error
                return pt(o) && o.revert && this.revertState
                  ? { ...this.revertState }
                  : {
                      ...e,
                      error: o,
                      errorUpdateCount: e.errorUpdateCount + 1,
                      errorUpdatedAt: Date.now(),
                      fetchFailureCount: e.fetchFailureCount + 1,
                      fetchStatus: 'idle',
                      status: 'error',
                    }
              case 'invalidate':
                return { ...e, isInvalidated: !0 }
              case 'setState':
                return { ...e, ...t.state }
            }
          })(this.state)),
            at.batch(() => {
              this.observers.forEach((e) => {
                e.onQueryUpdate(t)
              }),
                this.cache.notify({ query: this, type: 'updated', action: t })
            })
        }
      }
      class Yt extends st {
        constructor(t) {
          super(),
            (this.config = t || {}),
            (this.queries = []),
            (this.queriesMap = {})
        }
        build(t, e, r) {
          var n
          const o = e.queryKey,
            i = null != (n = e.queryHash) ? n : Q(o, e)
          let a = this.get(i)
          return (
            a ||
              ((a = new Kt({
                cache: this,
                logger: t.getLogger(),
                queryKey: o,
                queryHash: i,
                options: t.defaultQueryOptions(e),
                state: r,
                defaultOptions: t.getQueryDefaults(o),
                meta: e.meta,
              })),
              this.add(a)),
            a
          )
        }
        add(t) {
          this.queriesMap[t.queryHash] ||
            ((this.queriesMap[t.queryHash] = t),
            this.queries.push(t),
            this.notify({ type: 'added', query: t }))
        }
        remove(t) {
          const e = this.queriesMap[t.queryHash]
          e &&
            (t.destroy(),
            (this.queries = this.queries.filter((e) => e !== t)),
            e === t && delete this.queriesMap[t.queryHash],
            this.notify({ type: 'removed', query: t }))
        }
        clear() {
          at.batch(() => {
            this.queries.forEach((t) => {
              this.remove(t)
            })
          })
        }
        get(t) {
          return this.queriesMap[t]
        }
        getAll() {
          return this.queries
        }
        find(t, e) {
          const [r] = N(t, e)
          return (
            'undefined' === typeof r.exact && (r.exact = !0),
            this.queries.find((t) => W(r, t))
          )
        }
        findAll(t, e) {
          const [r] = N(t, e)
          return Object.keys(r).length > 0
            ? this.queries.filter((t) => W(r, t))
            : this.queries
        }
        notify(t) {
          at.batch(() => {
            this.listeners.forEach((e) => {
              e(t)
            })
          })
        }
        onFocus() {
          at.batch(() => {
            this.queries.forEach((t) => {
              t.onFocus()
            })
          })
        }
        onOnline() {
          at.batch(() => {
            this.queries.forEach((t) => {
              t.onOnline()
            })
          })
        }
      }
      class Xt extends st {
        constructor(t) {
          super(),
            (this.config = t || {}),
            (this.mutations = []),
            (this.mutationId = 0)
        }
        build(t, e, r) {
          const n = new Pt({
            mutationCache: this,
            logger: t.getLogger(),
            mutationId: ++this.mutationId,
            options: t.defaultMutationOptions(e),
            state: r,
            defaultOptions: e.mutationKey
              ? t.getMutationDefaults(e.mutationKey)
              : void 0,
            meta: e.meta,
          })
          return this.add(n), n
        }
        add(t) {
          this.mutations.push(t), this.notify({ type: 'added', mutation: t })
        }
        remove(t) {
          ;(this.mutations = this.mutations.filter((e) => e !== t)),
            this.notify({ type: 'removed', mutation: t })
        }
        clear() {
          at.batch(() => {
            this.mutations.forEach((t) => {
              this.remove(t)
            })
          })
        }
        getAll() {
          return this.mutations
        }
        find(t) {
          return (
            'undefined' === typeof t.exact && (t.exact = !0),
            this.mutations.find((e) => H(t, e))
          )
        }
        findAll(t) {
          return this.mutations.filter((e) => H(t, e))
        }
        notify(t) {
          at.batch(() => {
            this.listeners.forEach((e) => {
              e(t)
            })
          })
        }
        resumePausedMutations() {
          const t = this.mutations.filter((t) => t.state.isPaused)
          return at.batch(() =>
            t.reduce(
              (t, e) => t.then(() => e.continue().catch(L)),
              Promise.resolve()
            )
          )
        }
      }
      class Zt {
        constructor(t = {}) {
          ;(this.queryCache = t.queryCache || new Yt()),
            (this.mutationCache = t.mutationCache || new Xt()),
            (this.logger = t.logger || Et),
            (this.defaultOptions = t.defaultOptions || {}),
            (this.queryDefaults = []),
            (this.mutationDefaults = [])
        }
        mount() {
          ;(this.unsubscribeFocus = ut.subscribe(() => {
            ut.isFocused() &&
              (this.resumePausedMutations(), this.queryCache.onFocus())
          })),
            (this.unsubscribeOnline = lt.subscribe(() => {
              lt.isOnline() &&
                (this.resumePausedMutations(), this.queryCache.onOnline())
            }))
        }
        unmount() {
          var t, e
          null == (t = this.unsubscribeFocus) || t.call(this),
            null == (e = this.unsubscribeOnline) || e.call(this)
        }
        isFetching(t, e) {
          const [r] = N(t, e)
          return (r.fetchStatus = 'fetching'), this.queryCache.findAll(r).length
        }
        isMutating(t) {
          return this.mutationCache.findAll({ ...t, fetching: !0 }).length
        }
        getQueryData(t, e) {
          var r
          return null == (r = this.queryCache.find(t, e))
            ? void 0
            : r.state.data
        }
        getQueriesData(t) {
          return this.getQueryCache()
            .findAll(t)
            .map(({ queryKey: t, state: e }) => [t, e.data])
        }
        setQueryData(t, e, r) {
          const n = this.queryCache.find(t),
            o = (function (t, e) {
              return 'function' === typeof t ? t(e) : t
            })(e, null == n ? void 0 : n.state.data)
          if ('undefined' === typeof o) return
          const i = U(t),
            a = this.defaultQueryOptions(i)
          return this.queryCache.build(this, a).setData(o, { ...r, manual: !0 })
        }
        setQueriesData(t, e, r) {
          return at.batch(() =>
            this.getQueryCache()
              .findAll(t)
              .map(({ queryKey: t }) => [t, this.setQueryData(t, e, r)])
          )
        }
        getQueryState(t, e) {
          var r
          return null == (r = this.queryCache.find(t, e)) ? void 0 : r.state
        }
        removeQueries(t, e) {
          const [r] = N(t, e),
            n = this.queryCache
          at.batch(() => {
            n.findAll(r).forEach((t) => {
              n.remove(t)
            })
          })
        }
        resetQueries(t, e, r) {
          const [n, o] = N(t, e, r),
            i = this.queryCache,
            a = { type: 'active', ...n }
          return at.batch(
            () => (
              i.findAll(n).forEach((t) => {
                t.reset()
              }),
              this.refetchQueries(a, o)
            )
          )
        }
        cancelQueries(t, e, r) {
          const [n, o = {}] = N(t, e, r)
          'undefined' === typeof o.revert && (o.revert = !0)
          const i = at.batch(() =>
            this.queryCache.findAll(n).map((t) => t.cancel(o))
          )
          return Promise.all(i).then(L).catch(L)
        }
        invalidateQueries(t, e, r) {
          const [n, o] = N(t, e, r)
          return at.batch(() => {
            var t, e
            if (
              (this.queryCache.findAll(n).forEach((t) => {
                t.invalidate()
              }),
              'none' === n.refetchType)
            )
              return Promise.resolve()
            const r = {
              ...n,
              type:
                null != (t = null != (e = n.refetchType) ? e : n.type)
                  ? t
                  : 'active',
            }
            return this.refetchQueries(r, o)
          })
        }
        refetchQueries(t, e, r) {
          const [n, o] = N(t, e, r),
            i = at.batch(() =>
              this.queryCache
                .findAll(n)
                .filter((t) => !t.isDisabled())
                .map((t) => {
                  var e
                  return t.fetch(void 0, {
                    ...o,
                    cancelRefetch:
                      null == (e = null == o ? void 0 : o.cancelRefetch) || e,
                    meta: { refetchPage: n.refetchPage },
                  })
                })
            )
          let a = Promise.all(i).then(L)
          return (null != o && o.throwOnError) || (a = a.catch(L)), a
        }
        fetchQuery(t, e, r) {
          const n = U(t, e, r),
            o = this.defaultQueryOptions(n)
          'undefined' === typeof o.retry && (o.retry = !1)
          const i = this.queryCache.build(this, o)
          return i.isStaleByTime(o.staleTime)
            ? i.fetch(o)
            : Promise.resolve(i.state.data)
        }
        prefetchQuery(t, e, r) {
          return this.fetchQuery(t, e, r).then(L).catch(L)
        }
        fetchInfiniteQuery(t, e, r) {
          const n = U(t, e, r)
          return (n.behavior = jt()), this.fetchQuery(n)
        }
        prefetchInfiniteQuery(t, e, r) {
          return this.fetchInfiniteQuery(t, e, r).then(L).catch(L)
        }
        resumePausedMutations() {
          return this.mutationCache.resumePausedMutations()
        }
        getQueryCache() {
          return this.queryCache
        }
        getMutationCache() {
          return this.mutationCache
        }
        getLogger() {
          return this.logger
        }
        getDefaultOptions() {
          return this.defaultOptions
        }
        setDefaultOptions(t) {
          this.defaultOptions = t
        }
        setQueryDefaults(t, e) {
          const r = this.queryDefaults.find((e) => G(t) === G(e.queryKey))
          r
            ? (r.defaultOptions = e)
            : this.queryDefaults.push({ queryKey: t, defaultOptions: e })
        }
        getQueryDefaults(t) {
          if (!t) return
          const e = this.queryDefaults.find((e) => K(t, e.queryKey))
          return null == e ? void 0 : e.defaultOptions
        }
        setMutationDefaults(t, e) {
          const r = this.mutationDefaults.find((e) => G(t) === G(e.mutationKey))
          r
            ? (r.defaultOptions = e)
            : this.mutationDefaults.push({ mutationKey: t, defaultOptions: e })
        }
        getMutationDefaults(t) {
          if (!t) return
          const e = this.mutationDefaults.find((e) => K(t, e.mutationKey))
          return null == e ? void 0 : e.defaultOptions
        }
        defaultQueryOptions(t) {
          if (null != t && t._defaulted) return t
          const e = {
            ...this.defaultOptions.queries,
            ...this.getQueryDefaults(null == t ? void 0 : t.queryKey),
            ...t,
            _defaulted: !0,
          }
          return (
            !e.queryHash && e.queryKey && (e.queryHash = Q(e.queryKey, e)),
            'undefined' === typeof e.refetchOnReconnect &&
              (e.refetchOnReconnect = 'always' !== e.networkMode),
            'undefined' === typeof e.useErrorBoundary &&
              (e.useErrorBoundary = !!e.suspense),
            e
          )
        }
        defaultMutationOptions(t) {
          return null != t && t._defaulted
            ? t
            : {
                ...this.defaultOptions.mutations,
                ...this.getMutationDefaults(null == t ? void 0 : t.mutationKey),
                ...t,
                _defaulted: !0,
              }
        }
        clear() {
          this.queryCache.clear(), this.mutationCache.clear()
        }
      }
      const Jt = (t) => t.queryClient ?? new Zt(t.queryClientConfig)
      function te() {
        return (
          (te =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e]
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
              }
              return t
            }),
          te.apply(this, arguments)
        )
      }
      var ee = 60103,
        re = 60106,
        ne = 60107,
        oe = 60108,
        ie = 60114,
        ae = 60109,
        se = 60110,
        ue = 60111,
        le = 60112,
        ce = 60113,
        de = 60115,
        fe = 60116
      if ('function' == typeof Symbol && Symbol.for) {
        var pe = Symbol.for
        ;(ee = pe('react.element')),
          (re = pe('react.portal')),
          (ne = pe('react.fragment')),
          (oe = pe('react.strict_mode')),
          (ie = pe('react.profiler')),
          (ae = pe('react.provider')),
          (se = pe('react.context')),
          (ue = Symbol.for('react.concurrent_mode')),
          (le = pe('react.forward_ref')),
          (ce = pe('react.suspense')),
          (de = pe('react.memo')),
          (fe = pe('react.lazy'))
      }
      var he = ee,
        me = re,
        ve = ne,
        ge = oe,
        ye = ie,
        be = ae,
        xe = se,
        Se = ue,
        we = le,
        ke = ce,
        Ce = de,
        _e = fe,
        Ee = E.Children.toArray,
        Ae = function (t) {
          return null !== t && 'object' == typeof t
        },
        Pe = function (t) {
          return Ee(t).filter(Ae)
        },
        Re = function (t, e) {
          return 'object' == typeof e ? te({}, e, t) : t
        },
        Te = new Map(),
        Me = {},
        Oe = void 0,
        je = void 0,
        Fe = function () {
          return te({}, Me)
        },
        De = function () {
          return new Map(Te)
        },
        Be = function () {
          var t = Oe
          return (Oe = void 0), t
        },
        ze = function () {
          var t = je
          return (je = void 0), t
        },
        Ie = function (t) {
          void 0 !== t && te(Me, t)
        },
        $e = function (t) {
          void 0 !== t && Te.set(t[0], t[1])
        },
        Le = function (t) {
          ;(Oe = void 0), (Me = t)
        },
        Ve = function (t) {
          ;(je = void 0), (Te = t)
        },
        qe = function (t) {
          var e = Te.get(t)
          return void 0 !== e ? e : t._currentValue
        },
        Ue = {},
        Ne = function (t) {
          var e = t.contextType,
            r = t.contextTypes
          if (e) return qe(e)
          if (!r) return Ue
          var n = {}
          for (var o in r) n[o] = Me[o]
          return n
        },
        We = null,
        He = function () {
          return We
        },
        Qe = function (t) {
          We = t || null
        },
        Ge = { current: { uniqueID: 0 } },
        Ke =
          'function' == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                )
              },
        Ye = null,
        Xe = function (t) {
          Ye = t
        },
        Ze = function () {
          if (null === Ye)
            throw new Error(
              '[react-ssr-prepass] Hooks can only be called inside the body of a function component. (https://fb.me/react-invalid-hook-call)'
            )
          return Ye
        },
        Je = null,
        tr = null,
        er = !1,
        rr = null,
        nr = 0,
        or = function (t) {
          Je = t
        }
      function ir() {
        return null === tr
          ? null === Je
            ? (Je = tr = { memoizedState: null, queue: null, next: null })
            : (tr = Je)
          : (tr =
              null === tr.next
                ? (tr.next = { memoizedState: null, queue: null, next: null })
                : tr.next)
      }
      function ar(t, e) {
        return 'function' == typeof e ? e(t) : e
      }
      function sr(t, e, r) {
        var n,
          o = Ze()
        null === (tr = ir()).queue &&
          ((n =
            t === ar
              ? 'function' == typeof e
                ? e()
                : e
              : void 0 !== r
              ? r(e)
              : e),
          (tr.memoizedState = n))
        var i = tr.queue || (tr.queue = { last: null, dispatch: null }),
          a = i.dispatch || (i.dispatch = cr.bind(null, o, i))
        if (null !== rr) {
          var s = rr.get(i)
          if (void 0 !== s) {
            rr.delete(i)
            var u = tr.memoizedState,
              l = s
            do {
              ;(u = t(u, l.action)), (l = l.next)
            } while (null !== l)
            tr.memoizedState = u
          }
        }
        return [tr.memoizedState, a]
      }
      function ur(t, e) {
        Ze()
        var r = void 0 === e ? null : e,
          n = (tr = ir()).memoizedState
        if (
          null !== n &&
          null !== r &&
          (function (t, e) {
            if (null === e) return !1
            for (var r = 0; r < e.length && r < t.length; r++)
              if (!Ke(t[r], e[r])) return !1
            return !0
          })(r, n[1])
        )
          return n[0]
        var o = t()
        return (tr.memoizedState = [o, r]), o
      }
      function lr() {
        return (
          Ze(),
          (tr = ir()).memoizedState ||
            (tr.memoizedState = 'R:' + (Ge.current.uniqueID++).toString(36)),
          tr.memoizedState
        )
      }
      function cr(t, e, r) {
        if (t === Ye) {
          er = !0
          var n = { action: r, next: null }
          null === rr && (rr = new Map())
          var o = rr.get(e)
          if (void 0 === o) rr.set(e, n)
          else {
            for (var i = o; null !== i.next; ) i = i.next
            i.next = n
          }
        }
      }
      function dr() {}
      function fr(t) {
        t()
      }
      var pr = {
          readContext: function (t, e) {
            return qe(t)
          },
          useSyncExternalStore: function (t, e, r) {
            return e()
          },
          useContext: function (t, e) {
            return Ze(), qe(t)
          },
          useMemo: ur,
          useReducer: sr,
          useRef: function (t) {
            Ze()
            var e = (tr = ir()).memoizedState
            if (null === e) {
              var r = { current: t }
              return (tr.memoizedState = r), r
            }
            return e
          },
          useState: function (t) {
            return sr(ar, t)
          },
          useCallback: function (t, e) {
            return ur(function () {
              return t
            }, e)
          },
          useMutableSource: function (t, e, r) {
            return Ze(), e(t._source)
          },
          useTransition: function () {
            return [fr, !1]
          },
          useDeferredValue: function (t) {
            return t
          },
          useOpaqueIdentifier: lr,
          useId: lr,
          unstable_useId: lr,
          unstable_useOpaqueIdentifier: lr,
          useLayoutEffect: dr,
          useImperativeHandle: dr,
          useEffect: dr,
          useDebugValue: dr,
        },
        hr = function (t) {
          var e = t._payload || t
          return 0 === e._status
            ? e._result
            : 1 === e._status
            ? Promise.resolve(e._result)
            : 2 === e._status
            ? Promise.reject(e._result)
            : ((e._status = 0),
              (e._result = (e._ctor || e._result)()
                .then(function (t) {
                  ;(e._result = t),
                    'function' == typeof t
                      ? (e._status = 1)
                      : null !== t &&
                        'object' == typeof t &&
                        'function' == typeof t.default
                      ? ((e._result = t.default), (e._status = 1))
                      : (e._status = 2)
                })
                .catch(function (t) {
                  return (e._status = 2), (e._result = t), Promise.reject(t)
                })))
        },
        mr = function (t, e, r) {
          var n = t._payload || t
          return 1 === n._status ? (0, E.createElement)(n._result, e) : null
        },
        vr = function (t, e, r) {
          return {
            contextMap: Fe(),
            contextStore: De(),
            id: Ze(),
            hook: Je,
            kind: 'frame.hooks',
            errorFrame: He(),
            thenable: r,
            props: e,
            type: t,
          }
        },
        gr = function (t, e, r) {
          try {
            return (function (t, e, r) {
              tr = null
              for (var n = t(e, r); nr < 25 && er; )
                (er = !1), (nr += 1), (tr = null), (n = t(e, r))
              return (nr = 0), (rr = null), (tr = null), n
            })(t, Re(e, t.defaultProps), Ne(t))
          } catch (ee) {
            if ('function' != typeof ee.then) throw ee
            return r.push(vr(t, e, ee)), null
          }
        }
      function yr() {
        return !1
      }
      function br() {
        return null
      }
      var xr = function (t, e, r) {
          return {
            contextMap: Fe(),
            contextStore: De(),
            errorFrame: He(),
            thenable: r,
            kind: 'frame.class',
            error: null,
            instance: e,
            type: t,
          }
        },
        Sr = function (t, e, r) {
          !(function (t) {
            var e = t.updater.queue
            if (e.length > 0) {
              for (var r = te({}, t.state), n = 0, o = e.length; n < o; n++) {
                var i = e[n],
                  a =
                    'function' == typeof i
                      ? i.call(t, r, t.props, t.context)
                      : i
                null !== a && te(r, a)
              }
              ;(t.state = r), (e.length = 0)
            }
          })(e)
          var n = null
          try {
            n = e.render()
          } catch (n) {
            if ('function' != typeof n.then) throw n
            return r.push(xr(t, e, n)), null
          }
          if (
            void 0 !== t.childContextTypes &&
            'function' == typeof e.getChildContext
          ) {
            var o = e.getChildContext()
            null !== o &&
              'object' == typeof o &&
              (function (t) {
                for (var e in ((Oe = {}), t)) (Oe[e] = Me[e]), (Me[e] = t[e])
              })(o)
          }
          if (
            'function' != typeof e.getDerivedStateFromProps &&
            ('function' == typeof e.componentWillMount ||
              'function' == typeof e.UNSAFE_componentWillMount) &&
            'function' == typeof e.componentWillUnmount
          )
            try {
              e.componentWillUnmount()
            } catch (t) {}
          return (e._isMounted = !1), n
        },
        wr =
          E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentDispatcher,
        kr = 'function' == typeof setImmediate,
        Cr = function (t, e, r, n, o) {
          return (i = t).prototype && i.prototype.isReactComponent
            ? (function (t, e, r, n, o) {
                Xe(null)
                var i = (function (t, e) {
                    var r,
                      n = {
                        _thrown: 0,
                        queue: (r = []),
                        isMounted: yr,
                        enqueueForceUpdate: br,
                        enqueueReplaceState: function (t, e) {
                          t._isMounted && ((r.length = 0), r.push(e))
                        },
                        enqueueSetState: function (t, e) {
                          t._isMounted && r.push(e)
                        },
                      },
                      o = Re(e, t.defaultProps),
                      i = Ne(t),
                      a = new t(o, i, n)
                    if (
                      ((a.props = o),
                      (a.context = i),
                      (a.updater = n),
                      (a._isMounted = !0),
                      void 0 === a.state && (a.state = null),
                      'function' == typeof a.componentDidCatch ||
                        'function' == typeof t.getDerivedStateFromError)
                    ) {
                      var s = xr(t, a, null)
                      ;(s.errorFrame = s), Qe(s)
                    }
                    if ('function' == typeof t.getDerivedStateFromProps) {
                      var u = (0, t.getDerivedStateFromProps)(a.props, a.state)
                      null != u && (a.state = te({}, a.state, u))
                    } else
                      'function' == typeof a.componentWillMount
                        ? a.componentWillMount()
                        : 'function' == typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()
                    return a
                  })(t, e),
                  a = n(o, i)
                return a ? (r.push(xr(t, i, a)), null) : Sr(t, i, r)
              })(t, e, r, n, o)
            : (function (t, e, r, n, o) {
                or(null), Xe({})
                var i = n(o)
                return i ? (r.push(vr(t, e, i)), null) : gr(t, e, r)
              })(t, e, r, n, o)
          var i
        },
        _r = function (t, e, r) {
          switch (
            (function (t) {
              switch (t.$$typeof) {
                case me:
                  return me
                case he:
                  switch (t.type) {
                    case Se:
                      return Se
                    case ve:
                      return ve
                    case ye:
                      return ye
                    case ge:
                      return ge
                    case ke:
                      return ke
                    default:
                      switch (t.type && t.type.$$typeof) {
                        case _e:
                          return _e
                        case Ce:
                          return Ce
                        case xe:
                          return xe
                        case be:
                          return be
                        case we:
                          return we
                        default:
                          return he
                      }
                  }
                default:
                  return
              }
            })(t)
          ) {
            case ke:
            case ge:
            case Se:
            case ye:
            case ve:
              return Pe(t.props.children)
            case be:
              var n = t.props,
                o = n.children
              return (
                (function (t, e) {
                  ;(je = [t, Te.get(t)]), Te.set(t, e)
                })(t.type._context, n.value),
                Pe(o)
              )
            case xe:
              var i = t.props.children
              if ('function' == typeof i) {
                var a = t.type,
                  s = qe('object' == typeof a._context ? a._context : a)
                return Pe(i(s))
              }
              return []
            case _e:
              var u = (function (t, e, r) {
                return (t._payload || t)._status <= 0
                  ? (r.push({
                      kind: 'frame.lazy',
                      contextMap: Fe(),
                      contextStore: De(),
                      errorFrame: He(),
                      thenable: hr(t),
                      props: e,
                      type: t,
                    }),
                    null)
                  : mr(t, e)
              })(t.type, t.props, e)
              return Pe(u)
            case Ce:
              var l = (0, E.createElement)(t.type.type, t.props)
              return Pe(l)
            case we:
              var c = t.type,
                d = c.render,
                f = Re(t.props, c.defaultProps),
                p = (0, E.createElement)(d, f)
              return Pe(p)
            case he:
              if ('string' == typeof t.type) return Pe(t.props.children)
              var h = Cr(t.type, t.props, e, r, t)
              return Pe(h)
            default:
              return []
          }
        },
        Er = function (t, e, r, n, o, i) {
          var a = wr.current,
            s = Date.now()
          try {
            for (wr.current = pr; t.length > 0; ) {
              var u = t[t.length - 1].shift()
              if (void 0 !== u) {
                var l = _r(u, o, i)
                t.push(l), e.push(Be()), r.push(ze()), n.push(He())
              } else t.pop(), Ie(e.pop()), $e(r.pop()), Qe(n.pop())
              if (kr && Date.now() - s > 5) return !0
            }
            return !1
          } catch (t) {
            var c = He()
            if (!c) throw t
            return (c.error = t), o.unshift(c), !1
          } finally {
            wr.current = a
          }
        },
        Ar = function (t, e, r, n) {
          return {
            contextMap: Fe(),
            contextStore: De(),
            errorFrame: He(),
            thenable: null,
            kind: 'frame.yield',
            traversalChildren: t,
            traversalMap: e,
            traversalStore: r,
            traversalErrorFrame: n,
          }
        },
        Pr = function (t, e, r) {
          var n = [t],
            o = [Be()],
            i = [ze()],
            a = [He()]
          Er(n, o, i, a, e, r) && e.unshift(Ar(n, o, i, a))
        },
        Rr = function (t, e, r) {
          if ('frame.yield' === t.kind)
            Xe(null),
              Le(t.contextMap),
              Ve(t.contextStore),
              Qe(t.errorFrame),
              Er(
                t.traversalChildren,
                t.traversalMap,
                t.traversalStore,
                t.traversalErrorFrame,
                e,
                r
              ) &&
                e.unshift(
                  Ar(
                    t.traversalChildren,
                    t.traversalMap,
                    t.traversalStore,
                    t.traversalErrorFrame
                  )
                )
          else {
            var n = wr.current,
              o = null
            wr.current = pr
            try {
              'frame.class' === t.kind
                ? (o = (function (t, e) {
                    if (
                      (Xe(null),
                      Le(e.contextMap),
                      Ve(e.contextStore),
                      Qe(e.errorFrame),
                      e.error)
                    ) {
                      if (++e.instance.updater._thrown >= 25) return null
                      ;(e.instance._isMounted = !0),
                        'function' == typeof e.instance.componentDidCatch &&
                          e.instance.componentDidCatch(e.error),
                        'function' == typeof e.type.getDerivedStateFromError &&
                          e.instance.updater.enqueueSetState(
                            e.instance,
                            e.type.getDerivedStateFromError(e.error)
                          )
                    }
                    return Sr(e.type, e.instance, t)
                  })(e, t))
                : 'frame.hooks' === t.kind
                ? (o = (function (t, e) {
                    return (
                      or(e.hook),
                      Xe(e.id),
                      Le(e.contextMap),
                      Ve(e.contextStore),
                      Qe(e.errorFrame),
                      gr(e.type, e.props, t)
                    )
                  })(e, t))
                : 'frame.lazy' === t.kind &&
                  (o = (function (t, e) {
                    return (
                      Xe(null),
                      Le(e.contextMap),
                      Ve(e.contextStore),
                      Qe(e.errorFrame),
                      mr(e.type, e.props)
                    )
                  })(0, t))
            } catch (t) {
              var i = He()
              if (!i) throw t
              ;(i.error = t), e.unshift(i), (o = null)
            } finally {
              wr.current = n
            }
            Pr(Pe(o), e, r)
          }
        }
      function Tr(t, e) {
        setImmediate(t)
      }
      var Mr = function (t, e, r) {
          var n = t.shift()
          return n
            ? (kr && 'frame.yield' === n.kind && (n.thenable = new Promise(Tr)),
              Promise.resolve(n.thenable).then(
                function () {
                  return (
                    (function (t) {
                      Ge.current = t
                    })(r),
                    Rr(n, t, e),
                    Mr(t, e, r)
                  )
                },
                function (r) {
                  if (!n.errorFrame) throw r
                  ;(n.errorFrame.error = r), Rr(n.errorFrame, t, e)
                }
              ))
            : Promise.resolve()
        },
        Or = function () {},
        jr = function (t, e) {
          e || (e = Or)
          var r = [],
            n = (Ge.current = { uniqueID: 0 })
          Le({}), Ve(new Map()), Qe(null)
          try {
            Pr(Pe(t), r, e)
          } catch (t) {
            return Promise.reject(t)
          }
          return Mr(r, e, n)
        }
      function Fr(t) {
        const e = t.state.error
        if (e instanceof Error && 'TRPCClientError' === e.name) {
          const r = { message: e.message, data: e.data, shape: e.shape }
          return { ...t, state: { ...t.state, error: r } }
        }
        return t
      }
      function Dr(t) {
        const { config: e } = t
        return (r) => {
          const n = (function () {
              const t = Qt(),
                e = Gt(t)
              return { ...t, proxy: e }
            })(),
            o = (o) => {
              const [i] = (0, E.useState)(() => {
                  if (o.trpc) return o.trpc
                  const r = e({}),
                    i = Jt(r),
                    a = n.createClient(r)
                  return {
                    abortOnUnmount: r.abortOnUnmount,
                    queryClient: i,
                    trpcClient: a,
                    ssrState: !!t.ssr && 'mounting',
                    ssrContext: null,
                  }
                }),
                {
                  queryClient: a,
                  trpcClient: s,
                  ssrState: u,
                  ssrContext: l,
                } = i,
                c = n.useDehydratedState(s, o.pageProps.trpcState)
              return E.createElement(
                n.Provider,
                {
                  abortOnUnmount: i.abortOnUnmount ?? !1,
                  client: s,
                  queryClient: a,
                  ssrState: u,
                  ssrContext: l,
                },
                E.createElement(
                  M,
                  { client: a },
                  E.createElement(
                    F,
                    { state: c },
                    E.createElement(r, Object.assign({}, o))
                  )
                )
              )
            }
          ;(r.getInitialProps || t.ssr) &&
            (o.getInitialProps = async (n) => {
              const o = n.AppTree,
                i = !!n.Component,
                a = i ? n.ctx : n
              let s = {}
              if (r.getInitialProps) {
                const t = await r.getInitialProps(n)
                s = { ...(i ? t.pageProps ?? {} : t), ...s }
              }
              const u = (t) => (i ? { pageProps: t } : t)
              if ('undefined' !== typeof window || !t.ssr) return u(s)
              const l = e({ ctx: a }),
                c = _(l),
                d = Jt(l),
                f = {
                  pageProps: s,
                  trpc: {
                    config: l,
                    trpcClient: c,
                    queryClient: d,
                    ssrState: 'prepass',
                    ssrContext: a,
                  },
                }
              for (; await jr((0, E.createElement)(o, f)), d.isFetching(); )
                await new Promise((t) => {
                  const e = d.getQueryCache().subscribe((r) => {
                    0 === r?.query.getObserversCount() && (t(), e())
                  })
                })
              const p = (function (t, e = {}) {
                  const r = [],
                    n = []
                  if (!1 !== e.dehydrateMutations) {
                    const n = e.shouldDehydrateMutation || O
                    t.getMutationCache()
                      .getAll()
                      .forEach((t) => {
                        n(t) &&
                          r.push(
                            (function (t) {
                              return {
                                mutationKey: t.options.mutationKey,
                                state: t.state,
                              }
                            })(t)
                          )
                      })
                  }
                  if (!1 !== e.dehydrateQueries) {
                    const r = e.shouldDehydrateQuery || j
                    t.getQueryCache()
                      .getAll()
                      .forEach((t) => {
                        r(t) &&
                          n.push(
                            (function (t) {
                              return {
                                state: t.state,
                                queryKey: t.queryKey,
                                queryHash: t.queryHash,
                              }
                            })(t)
                          )
                      })
                  }
                  return { mutations: r, queries: n }
                })(d, { shouldDehydrateQuery: () => !0 }),
                h = {
                  ...p,
                  queries: p.queries.map(Fr),
                  mutations: p.mutations.map(Fr),
                }
              s.trpcState = c.runtime.transformer.serialize(h)
              const m = u(s),
                v =
                  t.responseMeta?.({
                    ctx: a,
                    clientErrors: [...p.queries, ...p.mutations]
                      .map((t) => t.state.error)
                      .flatMap((t) =>
                        t instanceof Error && 'TRPCClientError' === t.name
                          ? [t]
                          : []
                      ),
                  }) || {}
              for (const [t, e] of Object.entries(v.headers || {}))
                'string' === typeof e && a.res?.setHeader(t, e)
              return v.status && a.res && (a.res.statusCode = v.status), m
            })
          const i = r.displayName || r.name || 'Component'
          return (o.displayName = `withTRPC(${i})`), o
        }
      }
      var Br = (function () {
          function t() {
            ;(this.keyToValue = new Map()), (this.valueToKey = new Map())
          }
          return (
            (t.prototype.set = function (t, e) {
              this.keyToValue.set(t, e), this.valueToKey.set(e, t)
            }),
            (t.prototype.getByKey = function (t) {
              return this.keyToValue.get(t)
            }),
            (t.prototype.getByValue = function (t) {
              return this.valueToKey.get(t)
            }),
            (t.prototype.clear = function () {
              this.keyToValue.clear(), this.valueToKey.clear()
            }),
            t
          )
        })(),
        zr = (function () {
          function t(t) {
            ;(this.generateIdentifier = t), (this.kv = new Br())
          }
          return (
            (t.prototype.register = function (t, e) {
              this.kv.getByValue(t) ||
                (e || (e = this.generateIdentifier(t)), this.kv.set(e, t))
            }),
            (t.prototype.clear = function () {
              this.kv.clear()
            }),
            (t.prototype.getIdentifier = function (t) {
              return this.kv.getByValue(t)
            }),
            (t.prototype.getValue = function (t) {
              return this.kv.getByKey(t)
            }),
            t
          )
        })(),
        Ir = (function () {
          var t = function (e, r) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e
                  }) ||
                function (t, e) {
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                }),
              t(e, r)
            )
          }
          return function (e, r) {
            if ('function' !== typeof r && null !== r)
              throw new TypeError(
                'Class extends value ' +
                  String(r) +
                  ' is not a constructor or null'
              )
            function n() {
              this.constructor = e
            }
            t(e, r),
              (e.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()))
          }
        })(),
        $r = (function (t) {
          function e() {
            var e =
              t.call(this, function (t) {
                return t.name
              }) || this
            return (e.classToAllowedProps = new Map()), e
          }
          return (
            Ir(e, t),
            (e.prototype.register = function (e, r) {
              'object' === typeof r
                ? (r.allowProps &&
                    this.classToAllowedProps.set(e, r.allowProps),
                  t.prototype.register.call(this, e, r.identifier))
                : t.prototype.register.call(this, e, r)
            }),
            (e.prototype.getAllowedProps = function (t) {
              return this.classToAllowedProps.get(t)
            }),
            e
          )
        })(zr),
        Lr = new $r(),
        Vr = new zr(function (t) {
          var e
          return null !== (e = t.description) && void 0 !== e ? e : ''
        }),
        qr = function (t, e) {
          var r = 'function' === typeof Symbol && t[Symbol.iterator]
          if (!r) return t
          var n,
            o,
            i = r.call(t),
            a = []
          try {
            for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
              a.push(n.value)
          } catch (s) {
            o = { error: s }
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i)
            } finally {
              if (o) throw o.error
            }
          }
          return a
        }
      function Ur(t, e) {
        var r = (function (t) {
          if ('values' in Object) return Object.values(t)
          var e = []
          for (var r in t) t.hasOwnProperty(r) && e.push(t[r])
          return e
        })(t)
        if ('find' in r) return r.find(e)
        for (var n = r, o = 0; o < n.length; o++) {
          var i = n[o]
          if (e(i)) return i
        }
      }
      function Nr(t, e) {
        Object.entries(t).forEach(function (t) {
          var r = qr(t, 2),
            n = r[0],
            o = r[1]
          return e(o, n)
        })
      }
      function Wr(t, e) {
        return -1 !== t.indexOf(e)
      }
      function Hr(t, e) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r]
          if (e(n)) return n
        }
      }
      var Qr = {},
        Gr = function (t) {
          Qr[t.name] = t
        },
        Kr = function (t) {
          return Ur(Qr, function (e) {
            return e.isApplicable(t)
          })
        },
        Yr = function (t) {
          return Qr[t]
        },
        Xr = function (t, e) {
          var r = 'function' === typeof Symbol && t[Symbol.iterator]
          if (!r) return t
          var n,
            o,
            i = r.call(t),
            a = []
          try {
            for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
              a.push(n.value)
          } catch (s) {
            o = { error: s }
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i)
            } finally {
              if (o) throw o.error
            }
          }
          return a
        },
        Zr = function (t, e) {
          for (var r = 0, n = e.length, o = t.length; r < n; r++, o++)
            t[o] = e[r]
          return t
        },
        Jr = [],
        tn = function (t) {
          return Object.prototype.toString.call(t).slice(8, -1)
        },
        en = function (t) {
          return 'undefined' === typeof t
        },
        rn = function (t) {
          return (
            'Object' === tn(t) &&
            (null === Object.getPrototypeOf(t) ||
              (t !== Object.prototype &&
                t.constructor === Object &&
                Object.getPrototypeOf(t) === Object.prototype))
          )
        },
        nn = function (t) {
          return rn(t) && 0 === Object.keys(t).length
        },
        on = function (t) {
          return Array.isArray(t)
        },
        an = function (t) {
          return t instanceof Map
        },
        sn = function (t) {
          return t instanceof Set
        },
        un = function (t) {
          return 'Symbol' === tn(t)
        },
        ln = function (t) {
          return 'number' === typeof t && isNaN(t)
        },
        cn = function (t) {
          return (
            (function (t) {
              return 'boolean' === typeof t
            })(t) ||
            (function (t) {
              return null === t
            })(t) ||
            en(t) ||
            (function (t) {
              return 'number' === typeof t && !isNaN(t)
            })(t) ||
            (function (t) {
              return 'string' === typeof t
            })(t) ||
            un(t)
          )
        },
        dn = function (t) {
          return t.replace(/\./g, '\\.')
        },
        fn = function (t) {
          return t.map(String).map(dn).join('.')
        },
        pn = function (t) {
          for (var e = [], r = '', n = 0; n < t.length; n++) {
            var o = t.charAt(n)
            if ('\\' === o && '.' === t.charAt(n + 1)) (r += '.'), n++
            else '.' === o ? (e.push(r), (r = '')) : (r += o)
          }
          var i = r
          return e.push(i), e
        },
        hn = function () {
          return (
            (hn =
              Object.assign ||
              function (t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                  for (var o in (e = arguments[r]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                return t
              }),
            hn.apply(this, arguments)
          )
        },
        mn = function (t, e) {
          var r = 'function' === typeof Symbol && t[Symbol.iterator]
          if (!r) return t
          var n,
            o,
            i = r.call(t),
            a = []
          try {
            for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
              a.push(n.value)
          } catch (s) {
            o = { error: s }
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i)
            } finally {
              if (o) throw o.error
            }
          }
          return a
        },
        vn = function (t, e) {
          for (var r = 0, n = e.length, o = t.length; r < n; r++, o++)
            t[o] = e[r]
          return t
        }
      function gn(t, e, r, n) {
        return { isApplicable: t, annotation: e, transform: r, untransform: n }
      }
      var yn = [
        gn(
          en,
          'undefined',
          function () {
            return null
          },
          function () {}
        ),
        gn(
          function (t) {
            return 'bigint' === typeof t
          },
          'bigint',
          function (t) {
            return t.toString()
          },
          function (t) {
            return 'undefined' !== typeof BigInt
              ? BigInt(t)
              : (console.error('Please add a BigInt polyfill.'), t)
          }
        ),
        gn(
          function (t) {
            return t instanceof Date && !isNaN(t.valueOf())
          },
          'Date',
          function (t) {
            return t.toISOString()
          },
          function (t) {
            return new Date(t)
          }
        ),
        gn(
          function (t) {
            return t instanceof Error
          },
          'Error',
          function (t) {
            var e = { name: t.name, message: t.message }
            return (
              Jr.forEach(function (r) {
                e[r] = t[r]
              }),
              e
            )
          },
          function (t) {
            var e = new Error(t.message)
            return (
              (e.name = t.name),
              (e.stack = t.stack),
              Jr.forEach(function (r) {
                e[r] = t[r]
              }),
              e
            )
          }
        ),
        gn(
          function (t) {
            return t instanceof RegExp
          },
          'regexp',
          function (t) {
            return '' + t
          },
          function (t) {
            var e = t.slice(1, t.lastIndexOf('/')),
              r = t.slice(t.lastIndexOf('/') + 1)
            return new RegExp(e, r)
          }
        ),
        gn(
          sn,
          'set',
          function (t) {
            return vn([], mn(t.values()))
          },
          function (t) {
            return new Set(t)
          }
        ),
        gn(
          an,
          'map',
          function (t) {
            return vn([], mn(t.entries()))
          },
          function (t) {
            return new Map(t)
          }
        ),
        gn(
          function (t) {
            return ln(t) || (e = t) === 1 / 0 || e === -1 / 0
            var e
          },
          'number',
          function (t) {
            return ln(t) ? 'NaN' : t > 0 ? 'Infinity' : '-Infinity'
          },
          Number
        ),
        gn(
          function (t) {
            return 0 === t && 1 / t === -1 / 0
          },
          'number',
          function () {
            return '-0'
          },
          Number
        ),
        gn(
          function (t) {
            return t instanceof URL
          },
          'URL',
          function (t) {
            return t.toString()
          },
          function (t) {
            return new URL(t)
          }
        ),
      ]
      function bn(t, e, r, n) {
        return { isApplicable: t, annotation: e, transform: r, untransform: n }
      }
      var xn = bn(
          function (t) {
            return !!un(t) && !!Vr.getIdentifier(t)
          },
          function (t) {
            return ['symbol', Vr.getIdentifier(t)]
          },
          function (t) {
            return t.description
          },
          function (t, e) {
            var r = Vr.getValue(e[1])
            if (!r) throw new Error('Trying to deserialize unknown symbol')
            return r
          }
        ),
        Sn = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
          Uint8ClampedArray,
        ].reduce(function (t, e) {
          return (t[e.name] = e), t
        }, {}),
        wn = bn(
          function (t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView)
          },
          function (t) {
            return ['typed-array', t.constructor.name]
          },
          function (t) {
            return vn([], mn(t))
          },
          function (t, e) {
            var r = Sn[e[1]]
            if (!r) throw new Error('Trying to deserialize unknown typed array')
            return new r(t)
          }
        )
      function kn(t) {
        return (
          !!(null === t || void 0 === t ? void 0 : t.constructor) &&
          !!Lr.getIdentifier(t.constructor)
        )
      }
      var Cn = bn(
          kn,
          function (t) {
            return ['class', Lr.getIdentifier(t.constructor)]
          },
          function (t) {
            var e = Lr.getAllowedProps(t.constructor)
            if (!e) return hn({}, t)
            var r = {}
            return (
              e.forEach(function (e) {
                r[e] = t[e]
              }),
              r
            )
          },
          function (t, e) {
            var r = Lr.getValue(e[1])
            if (!r)
              throw new Error(
                'Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564'
              )
            return Object.assign(Object.create(r.prototype), t)
          }
        ),
        _n = bn(
          function (t) {
            return !!Kr(t)
          },
          function (t) {
            return ['custom', Kr(t).name]
          },
          function (t) {
            return Kr(t).serialize(t)
          },
          function (t, e) {
            var r = Yr(e[1])
            if (!r)
              throw new Error('Trying to deserialize unknown custom value')
            return r.deserialize(t)
          }
        ),
        En = [Cn, xn, _n, wn],
        An = function (t) {
          var e = Hr(En, function (e) {
            return e.isApplicable(t)
          })
          if (e) return { value: e.transform(t), type: e.annotation(t) }
          var r = Hr(yn, function (e) {
            return e.isApplicable(t)
          })
          return r ? { value: r.transform(t), type: r.annotation } : void 0
        },
        Pn = {}
      yn.forEach(function (t) {
        Pn[t.annotation] = t
      })
      var Rn = function (t, e) {
        for (var r = t.keys(); e > 0; ) r.next(), e--
        return r.next().value
      }
      function Tn(t) {
        if (Wr(t, '__proto__'))
          throw new Error('__proto__ is not allowed as a property')
        if (Wr(t, 'prototype'))
          throw new Error('prototype is not allowed as a property')
        if (Wr(t, 'constructor'))
          throw new Error('constructor is not allowed as a property')
      }
      var Mn = function (t, e, r) {
          if ((Tn(e), 0 === e.length)) return r(t)
          for (var n = t, o = 0; o < e.length - 1; o++) {
            var i = e[o]
            if (on(n)) n = n[+i]
            else if (rn(n)) n = n[i]
            else if (sn(n)) {
              n = Rn(n, (a = +i))
            } else if (an(n)) {
              if (o === e.length - 2) break
              var a = +i,
                s = 0 === +e[++o] ? 'key' : 'value',
                u = Rn(n, a)
              switch (s) {
                case 'key':
                  n = u
                  break
                case 'value':
                  n = n.get(u)
              }
            }
          }
          var l = e[e.length - 1]
          if (((on(n) || rn(n)) && (n[l] = r(n[l])), sn(n))) {
            var c = Rn(n, +l),
              d = r(c)
            c !== d && (n.delete(c), n.add(d))
          }
          if (an(n)) {
            a = +e[e.length - 2]
            var f = Rn(n, a)
            switch ((s = 0 === +l ? 'key' : 'value')) {
              case 'key':
                var p = r(f)
                n.set(p, n.get(f)), p !== f && n.delete(f)
                break
              case 'value':
                n.set(f, r(n.get(f)))
            }
          }
          return t
        },
        On = function (t, e) {
          var r = 'function' === typeof Symbol && t[Symbol.iterator]
          if (!r) return t
          var n,
            o,
            i = r.call(t),
            a = []
          try {
            for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
              a.push(n.value)
          } catch (s) {
            o = { error: s }
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i)
            } finally {
              if (o) throw o.error
            }
          }
          return a
        },
        jn = function (t, e) {
          for (var r = 0, n = e.length, o = t.length; r < n; r++, o++)
            t[o] = e[r]
          return t
        }
      function Fn(t, e, r) {
        if ((void 0 === r && (r = []), t))
          if (on(t)) {
            var n = On(t, 2),
              o = n[0],
              i = n[1]
            i &&
              Nr(i, function (t, n) {
                Fn(t, e, jn(jn([], On(r)), On(pn(n))))
              }),
              e(o, r)
          } else
            Nr(t, function (t, n) {
              return Fn(t, e, jn(jn([], On(r)), On(pn(n))))
            })
      }
      function Dn(t, e) {
        return (
          Fn(e, function (e, r) {
            t = Mn(t, r, function (t) {
              return (function (t, e) {
                if (!on(e)) {
                  var r = Pn[e]
                  if (!r) throw new Error('Unknown transformation: ' + e)
                  return r.untransform(t)
                }
                switch (e[0]) {
                  case 'symbol':
                    return xn.untransform(t, e)
                  case 'class':
                    return Cn.untransform(t, e)
                  case 'custom':
                    return _n.untransform(t, e)
                  case 'typed-array':
                    return wn.untransform(t, e)
                  default:
                    throw new Error('Unknown transformation: ' + e)
                }
              })(t, e)
            })
          }),
          t
        )
      }
      function Bn(t, e) {
        function r(e, r) {
          var n = (function (t, e) {
            return (
              Tn(e),
              e.forEach(function (e) {
                t = t[e]
              }),
              t
            )
          })(t, pn(r))
          e.map(pn).forEach(function (e) {
            t = Mn(t, e, function () {
              return n
            })
          })
        }
        if (on(e)) {
          var n = On(e, 2),
            o = n[0],
            i = n[1]
          o.forEach(function (e) {
            t = Mn(t, pn(e), function () {
              return t
            })
          }),
            i && Nr(i, r)
        } else Nr(e, r)
        return t
      }
      var zn = function (t, e, r, n) {
        var o
        if (
          (void 0 === r && (r = []),
          void 0 === n && (n = []),
          cn(t) ||
            (function (t, e, r) {
              var n = r.get(t)
              n ? n.push(e) : r.set(t, [e])
            })(t, r, e),
          !(function (t) {
            return rn(t) || on(t) || an(t) || sn(t) || kn(t)
          })(t))
        ) {
          var i = An(t)
          return i
            ? { transformedValue: i.value, annotations: [i.type] }
            : { transformedValue: t }
        }
        if (Wr(n, t)) return { transformedValue: null }
        var a = An(t),
          s =
            null !== (o = null === a || void 0 === a ? void 0 : a.value) &&
            void 0 !== o
              ? o
              : t
        cn(t) || (n = jn(jn([], On(n)), [t]))
        var u = on(s) ? [] : {},
          l = {}
        return (
          Nr(s, function (t, o) {
            var i = zn(t, e, jn(jn([], On(r)), [o]), n)
            ;(u[o] = i.transformedValue),
              on(i.annotations)
                ? (l[o] = i.annotations)
                : rn(i.annotations) &&
                  Nr(i.annotations, function (t, e) {
                    l[dn(o) + '.' + e] = t
                  })
          }),
          nn(l)
            ? { transformedValue: u, annotations: a ? [a.type] : void 0 }
            : { transformedValue: u, annotations: a ? [a.type, l] : l }
        )
      }
      function In(t) {
        return Object.prototype.toString.call(t).slice(8, -1)
      }
      function $n(t) {
        return 'Undefined' === In(t)
      }
      function Ln(t) {
        return 'Null' === In(t)
      }
      function Vn(t) {
        return (
          'Object' === In(t) &&
          t.constructor === Object &&
          Object.getPrototypeOf(t) === Object.prototype
        )
      }
      function qn(t) {
        return 'Array' === In(t)
      }
      function Un(t, e = {}) {
        if (qn(t)) return t.map((t) => Un(t, e))
        if (!Vn(t)) return t
        return [
          ...Object.getOwnPropertyNames(t),
          ...Object.getOwnPropertySymbols(t),
        ].reduce((r, n) => {
          if (qn(e.props) && !e.props.includes(n)) return r
          return (
            (function (t, e, r, n, o) {
              const i = {}.propertyIsEnumerable.call(n, e)
                ? 'enumerable'
                : 'nonenumerable'
              'enumerable' === i && (t[e] = r),
                o &&
                  'nonenumerable' === i &&
                  Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  })
            })(r, n, Un(t[n], e), t, e.nonenumerable),
            r
          )
        }, {})
      }
      var Nn = function () {
          return (
            (Nn =
              Object.assign ||
              function (t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                  for (var o in (e = arguments[r]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                return t
              }),
            Nn.apply(this, arguments)
          )
        },
        Wn = function (t) {
          var e = new Map(),
            r = zn(t, e),
            n = { json: r.transformedValue }
          r.annotations &&
            (n.meta = Nn(Nn({}, n.meta), { values: r.annotations }))
          var o = (function (t) {
            var e = {},
              r = void 0
            return (
              t.forEach(function (t) {
                if (!(t.length <= 1)) {
                  var n = On(
                      t
                        .map(function (t) {
                          return t.map(String)
                        })
                        .sort(function (t, e) {
                          return t.length - e.length
                        })
                    ),
                    o = n[0],
                    i = n.slice(1)
                  0 === o.length ? (r = i.map(fn)) : (e[fn(o)] = i.map(fn))
                }
              }),
              r ? (nn(e) ? [r] : [r, e]) : nn(e) ? void 0 : e
            )
          })(e)
          return (
            o && (n.meta = Nn(Nn({}, n.meta), { referentialEqualities: o })), n
          )
        },
        Hn = function (t) {
          var e = t.json,
            r = t.meta,
            n = Un(e)
          return (
            (null === r || void 0 === r ? void 0 : r.values) &&
              (n = Dn(n, r.values)),
            (null === r || void 0 === r ? void 0 : r.referentialEqualities) &&
              (n = Bn(n, r.referentialEqualities)),
            n
          )
        },
        Qn = {
          stringify: function (t) {
            return JSON.stringify(Wn(t))
          },
          parse: function (t) {
            return Hn(JSON.parse(t))
          },
          serialize: Wn,
          deserialize: Hn,
          registerClass: function (t, e) {
            return Lr.register(t, e)
          },
          registerSymbol: function (t, e) {
            return Vr.register(t, e)
          },
          registerCustom: function (t, e) {
            return Gr(Nn({ name: e }, t))
          },
          allowErrorProps: function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e]
            Jr.push.apply(Jr, Zr([], Xr(t)))
          },
        },
        Gn = r(44),
        Kn = (function (t) {
          const e = Qt(),
            r = Dr(t)
          return I((t) =>
            'useContext' === t
              ? () => {
                  const t = e.useContext()
                  return (0, E.useMemo)(() => Nt(t), [t])
                }
              : 'withTRPC' === t
              ? r
              : Vt(t, e)
          )
        })({
          config: function () {
            return {
              transformer: Qn,
              links: [
                k({
                  enabled: function (t) {
                    return (
                      'down' === t.direction &&
                      ((e = t.result),
                      null != (r = Error) &&
                      'undefined' !== typeof Symbol &&
                      r[Symbol.hasInstance]
                        ? !!r[Symbol.hasInstance](e)
                        : e instanceof r)
                    )
                    var e, r
                  },
                }),
                x({ url: ''.concat((0, Gn.S)(), '/api/trpc') }),
              ],
            }
          },
          ssr: !1,
        })
    },
    44: function (t, e, r) {
      'use strict'
      r.d(e, {
        S: function () {
          return o
        },
        v: function () {
          return i
        },
      })
      var n = r(3656)
      function o() {
        return 'https://'.concat(n.env.VERCEL_URL)
      }
      function i() {
        return 'https://www.npm-package-size.com'
      }
    },
    3656: function (t) {
      var e,
        r,
        n = (t.exports = {})
      function o() {
        throw new Error('setTimeout has not been defined')
      }
      function i() {
        throw new Error('clearTimeout has not been defined')
      }
      function a(t) {
        if (e === setTimeout) return setTimeout(t, 0)
        if ((e === o || !e) && setTimeout)
          return (e = setTimeout), setTimeout(t, 0)
        try {
          return e(t, 0)
        } catch (r) {
          try {
            return e.call(null, t, 0)
          } catch (r) {
            return e.call(this, t, 0)
          }
        }
      }
      !(function () {
        try {
          e = 'function' === typeof setTimeout ? setTimeout : o
        } catch (t) {
          e = o
        }
        try {
          r = 'function' === typeof clearTimeout ? clearTimeout : i
        } catch (t) {
          r = i
        }
      })()
      var s,
        u = [],
        l = !1,
        c = -1
      function d() {
        l &&
          s &&
          ((l = !1), s.length ? (u = s.concat(u)) : (c = -1), u.length && f())
      }
      function f() {
        if (!l) {
          var t = a(d)
          l = !0
          for (var e = u.length; e; ) {
            for (s = u, u = []; ++c < e; ) s && s[c].run()
            ;(c = -1), (e = u.length)
          }
          ;(s = null),
            (l = !1),
            (function (t) {
              if (r === clearTimeout) return clearTimeout(t)
              if ((r === i || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(t)
              try {
                r(t)
              } catch (e) {
                try {
                  return r.call(null, t)
                } catch (e) {
                  return r.call(this, t)
                }
              }
            })(t)
        }
      }
      function p(t, e) {
        ;(this.fun = t), (this.array = e)
      }
      function h() {}
      ;(n.nextTick = function (t) {
        var e = new Array(arguments.length - 1)
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r]
        u.push(new p(t, e)), 1 !== u.length || l || a(f)
      }),
        (p.prototype.run = function () {
          this.fun.apply(null, this.array)
        }),
        (n.title = 'browser'),
        (n.browser = !0),
        (n.env = {}),
        (n.argv = []),
        (n.version = ''),
        (n.versions = {}),
        (n.on = h),
        (n.addListener = h),
        (n.once = h),
        (n.off = h),
        (n.removeListener = h),
        (n.removeAllListeners = h),
        (n.emit = h),
        (n.prependListener = h),
        (n.prependOnceListener = h),
        (n.listeners = function (t) {
          return []
        }),
        (n.binding = function (t) {
          throw new Error('process.binding is not supported')
        }),
        (n.cwd = function () {
          return '/'
        }),
        (n.chdir = function (t) {
          throw new Error('process.chdir is not supported')
        }),
        (n.umask = function () {
          return 0
        })
    },
    8555: function (t) {
      var e = 'undefined' !== typeof Element,
        r = 'function' === typeof Map,
        n = 'function' === typeof Set,
        o = 'function' === typeof ArrayBuffer && !!ArrayBuffer.isView
      function i(t, a) {
        if (t === a) return !0
        if (t && a && 'object' == typeof t && 'object' == typeof a) {
          if (t.constructor !== a.constructor) return !1
          var s, u, l, c
          if (Array.isArray(t)) {
            if ((s = t.length) != a.length) return !1
            for (u = s; 0 !== u--; ) if (!i(t[u], a[u])) return !1
            return !0
          }
          if (r && t instanceof Map && a instanceof Map) {
            if (t.size !== a.size) return !1
            for (c = t.entries(); !(u = c.next()).done; )
              if (!a.has(u.value[0])) return !1
            for (c = t.entries(); !(u = c.next()).done; )
              if (!i(u.value[1], a.get(u.value[0]))) return !1
            return !0
          }
          if (n && t instanceof Set && a instanceof Set) {
            if (t.size !== a.size) return !1
            for (c = t.entries(); !(u = c.next()).done; )
              if (!a.has(u.value[0])) return !1
            return !0
          }
          if (o && ArrayBuffer.isView(t) && ArrayBuffer.isView(a)) {
            if ((s = t.length) != a.length) return !1
            for (u = s; 0 !== u--; ) if (t[u] !== a[u]) return !1
            return !0
          }
          if (t.constructor === RegExp)
            return t.source === a.source && t.flags === a.flags
          if (t.valueOf !== Object.prototype.valueOf)
            return t.valueOf() === a.valueOf()
          if (t.toString !== Object.prototype.toString)
            return t.toString() === a.toString()
          if ((s = (l = Object.keys(t)).length) !== Object.keys(a).length)
            return !1
          for (u = s; 0 !== u--; )
            if (!Object.prototype.hasOwnProperty.call(a, l[u])) return !1
          if (e && t instanceof Element) return !1
          for (u = s; 0 !== u--; )
            if (
              (('_owner' !== l[u] && '__v' !== l[u] && '__o' !== l[u]) ||
                !t.$$typeof) &&
              !i(t[l[u]], a[l[u]])
            )
              return !1
          return !0
        }
        return t !== t && a !== a
      }
      t.exports = function (t, e) {
        try {
          return i(t, e)
        } catch (r) {
          if ((r.message || '').match(/stack|recursion/i))
            return (
              console.warn('react-fast-compare cannot handle circular refs'), !1
            )
          throw r
        }
      }
    },
    4507: function (t, e) {
      'use strict'
      var r = 'function' === typeof Symbol && Symbol.for,
        n = r ? Symbol.for('react.element') : 60103,
        o = r ? Symbol.for('react.portal') : 60106,
        i = r ? Symbol.for('react.fragment') : 60107,
        a = r ? Symbol.for('react.strict_mode') : 60108,
        s = r ? Symbol.for('react.profiler') : 60114,
        u = r ? Symbol.for('react.provider') : 60109,
        l = r ? Symbol.for('react.context') : 60110,
        c = r ? Symbol.for('react.async_mode') : 60111,
        d = r ? Symbol.for('react.concurrent_mode') : 60111,
        f = r ? Symbol.for('react.forward_ref') : 60112,
        p = r ? Symbol.for('react.suspense') : 60113,
        h = r ? Symbol.for('react.suspense_list') : 60120,
        m = r ? Symbol.for('react.memo') : 60115,
        v = r ? Symbol.for('react.lazy') : 60116,
        g = r ? Symbol.for('react.block') : 60121,
        y = r ? Symbol.for('react.fundamental') : 60117,
        b = r ? Symbol.for('react.responder') : 60118,
        x = r ? Symbol.for('react.scope') : 60119
      function S(t) {
        if ('object' === typeof t && null !== t) {
          var e = t.$$typeof
          switch (e) {
            case n:
              switch ((t = t.type)) {
                case c:
                case d:
                case i:
                case s:
                case a:
                case p:
                  return t
                default:
                  switch ((t = t && t.$$typeof)) {
                    case l:
                    case f:
                    case v:
                    case m:
                    case u:
                      return t
                    default:
                      return e
                  }
              }
            case o:
              return e
          }
        }
      }
      function w(t) {
        return S(t) === d
      }
      ;(e.AsyncMode = c),
        (e.ConcurrentMode = d),
        (e.ContextConsumer = l),
        (e.ContextProvider = u),
        (e.Element = n),
        (e.ForwardRef = f),
        (e.Fragment = i),
        (e.Lazy = v),
        (e.Memo = m),
        (e.Portal = o),
        (e.Profiler = s),
        (e.StrictMode = a),
        (e.Suspense = p),
        (e.isAsyncMode = function (t) {
          return w(t) || S(t) === c
        }),
        (e.isConcurrentMode = w),
        (e.isContextConsumer = function (t) {
          return S(t) === l
        }),
        (e.isContextProvider = function (t) {
          return S(t) === u
        }),
        (e.isElement = function (t) {
          return 'object' === typeof t && null !== t && t.$$typeof === n
        }),
        (e.isForwardRef = function (t) {
          return S(t) === f
        }),
        (e.isFragment = function (t) {
          return S(t) === i
        }),
        (e.isLazy = function (t) {
          return S(t) === v
        }),
        (e.isMemo = function (t) {
          return S(t) === m
        }),
        (e.isPortal = function (t) {
          return S(t) === o
        }),
        (e.isProfiler = function (t) {
          return S(t) === s
        }),
        (e.isStrictMode = function (t) {
          return S(t) === a
        }),
        (e.isSuspense = function (t) {
          return S(t) === p
        }),
        (e.isValidElementType = function (t) {
          return (
            'string' === typeof t ||
            'function' === typeof t ||
            t === i ||
            t === d ||
            t === s ||
            t === a ||
            t === p ||
            t === h ||
            ('object' === typeof t &&
              null !== t &&
              (t.$$typeof === v ||
                t.$$typeof === m ||
                t.$$typeof === u ||
                t.$$typeof === l ||
                t.$$typeof === f ||
                t.$$typeof === y ||
                t.$$typeof === b ||
                t.$$typeof === x ||
                t.$$typeof === g))
          )
        }),
        (e.typeOf = S)
    },
    9415: function (t, e, r) {
      'use strict'
      t.exports = r(4507)
    },
    1449: function (t, e, r) {
      'use strict'
      var n = r(2983)
      var o =
          'function' === typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t === 1 / e)) ||
                  (t !== t && e !== e)
                )
              },
        i = n.useState,
        a = n.useEffect,
        s = n.useLayoutEffect,
        u = n.useDebugValue
      function l(t) {
        var e = t.getSnapshot
        t = t.value
        try {
          var r = e()
          return !o(t, r)
        } catch (n) {
          return !0
        }
      }
      var c =
        'undefined' === typeof window ||
        'undefined' === typeof window.document ||
        'undefined' === typeof window.document.createElement
          ? function (t, e) {
              return e()
            }
          : function (t, e) {
              var r = e(),
                n = i({ inst: { value: r, getSnapshot: e } }),
                o = n[0].inst,
                c = n[1]
              return (
                s(
                  function () {
                    ;(o.value = r), (o.getSnapshot = e), l(o) && c({ inst: o })
                  },
                  [t, r, e]
                ),
                a(
                  function () {
                    return (
                      l(o) && c({ inst: o }),
                      t(function () {
                        l(o) && c({ inst: o })
                      })
                    )
                  },
                  [t]
                ),
                u(r),
                r
              )
            }
      e.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c
    },
    5845: function (t, e, r) {
      'use strict'
      t.exports = r(1449)
    },
    7998: function (t, e, r) {
      'use strict'
      function n() {
        return (
          (n = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e]
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                }
                return t
              }),
          n.apply(this, arguments)
        )
      }
      r.d(e, {
        Z: function () {
          return n
        },
      })
    },
    2641: function (t, e, r) {
      'use strict'
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        )
      }
      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            o = Object.keys(r)
          'function' === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable
              })
            )),
            o.forEach(function (e) {
              n(t, e, r[e])
            })
        }
        return t
      }
      r.d(e, {
        Z: function () {
          return o
        },
      })
    },
  },
  function (t) {
    var e = function (e) {
      return t((t.s = e))
    }
    t.O(0, [774, 179], function () {
      return e(9203), e(405)
    })
    var r = t.O()
    _N_E = r
  },
])
