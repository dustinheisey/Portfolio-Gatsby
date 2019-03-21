;(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    143: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        r = a.n(n),
        i = a(153),
        o = a.n(i),
        l = a(154),
        s = a(151),
        c = a(147),
        d = a(177),
        m = a.n(d),
        g = a(178),
        b = a.n(g),
        p = a(179),
        u = a.n(p)
      t.default = function(e) {
        return r.a.createElement(
          l.a,
          null,
          r.a.createElement(
            'main',
            { className: 'works padding-lg' },
            r.a.createElement(o.a, {
              title:
                ' Recent Web Designs | Web Designer Portfolio | Dallas Web Design',
              meta: [
                {
                  name: 'description',
                  content:
                    "Here you'll find the most recent web designs I've made. The list often changes so check back often!"
                }
              ]
            }),
            r.a.createElement(
              s.c,
              null,
              r.a.createElement(
                'h1',
                { className: 'margin-b-sm' },
                'Check Out My Work'
              ),
              r.a.createElement(
                'p',
                { className: 'text-md color-m' },
                'Here are some of my recent projects. Take a look.'
              )
            ),
            r.a.createElement(s.d, {
              img: m.a,
              title: 'Aerials Gymnastics',
              text:
                'Join a high performing gymnastics gym that treats its students like family.',
              textColor: 'gradient-text-aerials',
              btnColor: 'gradient-aerials',
              btnText: 'View Website',
              btnLink: 'http://www.aerialsgymnastics.net',
              external: !0,
              orientation: 0
            }),
            r.a.createElement(s.d, {
              img: b.a,
              title: 'Geomancy',
              text: 'Can you tap your way to the final shape?',
              textColor: 'gradient-text-geomancy',
              btnColor: 'gradient-geomancy',
              btnText: 'View Website',
              external: !0,
              btnLink: 'https://geomancy.getdallaswebdesign.com',
              orientation: 1
            }),
            r.a.createElement(s.d, {
              img: u.a,
              title: 'Snake',
              text: 'Play a nostalgic game with a minimal aesthetic.',
              textColor: 'gradient-text-snake',
              btnColor: 'gradient-snake',
              btnText: 'View Website',
              external: !0,
              btnLink: 'https://www.snake.getdallaswebdesign.com/',
              orientation: 0
            }),
            r.a.createElement(
              s.c,
              { name: 'display-f direction-c align-c' },
              r.a.createElement(
                'h2',
                { className: 'margin-b-sm' },
                'Let figure out how I can help you next'
              ),
              r.a.createElement(
                'p',
                { className: 'margin-b-sm text-md' },
                "Contact me today and I'll design a custom solution for your problems"
              ),
              r.a.createElement(c.a, {
                text: 'Hear my ideas',
                link: '/contact',
                classes: 'width-v-xmd bg-p-d display-f justify-c'
              })
            )
          )
        )
      }
    },
    147: function(e, t, a) {
      'use strict'
      a(148)
      var n = a(0),
        r = a.n(n),
        i = a(149)
      t.a = function(e) {
        var t = e.external,
          a = e.link,
          n = e.text,
          o = e.classes
        return t
          ? r.a.createElement(
              'a',
              {
                className:
                  'border-r-md padding-lr-md padding-tb-sm d-padding-lr-md d-padding-tb-sm display-i align-c justify-l cursor-p grow outline-n border-n color-l cursor-p text-md ' +
                  (void 0 !== o ? o : 'bg-p-d'),
                href: a,
                target: '_blank',
                rel: 'noopener noreferrer'
              },
              n
            )
          : r.a.createElement(
              i.Link,
              { to: a },
              r.a.createElement(
                'button',
                {
                  className:
                    'border-r-md padding-lr-md padding-tb-sm d-padding-lr-md d-padding-tb-sm display-f align-c justify-l cursor-p grow outline-n border-n color-l cursor-p text-md ' +
                    (void 0 !== o ? o : 'bg-p-d')
                },
                n
              )
            )
      }
    },
    150: function(e, t, a) {
      e.exports =
        a.p + 'static/dustin-heisey-8191a1bbdb8cc4bd0814b542630819a9.svg'
    },
    151: function(e, t, a) {
      'use strict'
      a.d(t, 'a', function() {
        return g
      }),
        a.d(t, 'c', function() {
          return p
        }),
        a.d(t, 'b', function() {
          return u
        }),
        a.d(t, 'd', function() {
          return b
        })
      var n = a(6),
        r = a.n(n),
        i = a(47),
        o = a.n(i),
        l = (a(148), a(152), a(0)),
        s = a.n(l),
        c = a(147),
        d = a(150),
        m = a.n(d),
        g = function(e) {
          var t = e.name,
            a = e.classes,
            n = e.children
          return s.a.createElement(
            'section',
            {
              className: (void 0 !== t ? t : '') + ' ' + (void 0 !== a ? a : '')
            },
            n
          )
        },
        b = function(e) {
          var t = e.img,
            a = e.title,
            n = e.text,
            r = e.textColor,
            i = e.btnText,
            o = e.btnLink,
            l = e.btnColor,
            d = e.external,
            m = e.orientation,
            g = e.classes
          return s.a.createElement(
            'section',
            {
              className:
                'border-r-lg bg-l shadow margin-tb-lg t-margin-n project ' +
                (0 === m ? 'project-left ' : 'project-right') +
                ' ' +
                (void 0 !== g ? g : '') +
                ' '
            },
            s.a.createElement('img', {
              src: t,
              alt: a,
              className:
                'project-image width-p-lg border-r-tl-lg border-r-tr-lg ' +
                (0 === m
                  ? 'd-border-r-tl-lg d-border-r-tr-n d-border-r-bl-lg'
                  : 'd-border-r-tr-lg d-border-r-tl-n d-border-r-br-lg')
            }),
            s.a.createElement(
              'div',
              { className: 'project-text width-p-lg padding-lg' },
              s.a.createElement(
                'h2',
                { className: 'margin-b-md ' + (void 0 !== r ? r : '') },
                a
              ),
              s.a.createElement(
                'p',
                { className: 'text-md margin-b-md color-m' },
                n
              ),
              s.a.createElement(c.a, {
                text: i,
                link: o,
                classes: l,
                external: d
              })
            )
          )
        },
        p = function(e) {
          var t = e.name,
            a = e.classes,
            n = e.children
          return s.a.createElement(
            'section',
            {
              className:
                'border-r-lg bg-l shadow margin-tb-lg t-margin-n display-f direction-c align-l justify-c padding-lg ' +
                (void 0 !== t ? t : '') +
                ' ' +
                (void 0 !== a ? a : '')
            },
            n
          )
        },
        u = function(e) {
          var t = e.name,
            a = e.classes,
            n = e.children
          return s.a.createElement(
            'section',
            {
              className:
                'border-r-lg bg-l shadow margin-tb-lg t-margin-n display-f direction-c align-l justify-c padding-lg d-padding-lg t-padding-sm ' +
                (void 0 !== t ? t : '') +
                ' ' +
                (void 0 !== a ? a : '')
            },
            n
          )
        }
      s.a.Component
    },
    152: function(e, t, a) {
      var n = a(22).f,
        r = Function.prototype,
        i = /^\s*function ([^ (]*)/
      'name' in r ||
        (a(14) &&
          n(r, 'name', {
            configurable: !0,
            get: function() {
              try {
                return ('' + this).match(i)[1]
              } catch (e) {
                return ''
              }
            }
          }))
    },
    177: function(e, t, a) {
      e.exports =
        a.p + 'static/works-aerials-823479055ca23e4abbe00f8108bd45af.jpg'
    },
    178: function(e, t, a) {
      e.exports =
        a.p + 'static/works-geomancy-5690be98ac2c2df7dfadba378f4180e3.jpg'
    },
    179: function(e, t, a) {
      e.exports =
        a.p + 'static/works-snake-db367e1d619f09d802cc74404ff852f3.jpg'
    }
  }
])
//# sourceMappingURL=component---src-pages-portfolio-js-7ce0e06f4a727b0f30ef.js.map
