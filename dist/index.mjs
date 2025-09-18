var ee = Object.defineProperty, te = Object.defineProperties;
var se = Object.getOwnPropertyDescriptors;
var N = Object.getOwnPropertySymbols;
var W = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var q = (t, e, o) => e in t ? ee(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, j = (t, e) => {
  for (var o in e || (e = {}))
    W.call(e, o) && q(t, o, e[o]);
  if (N)
    for (var o of N(e))
      Z.call(e, o) && q(t, o, e[o]);
  return t;
}, H = (t, e) => te(t, se(e));
var V = (t, e) => {
  var o = {};
  for (var s in t)
    W.call(t, s) && e.indexOf(s) < 0 && (o[s] = t[s]);
  if (t != null && N)
    for (var s of N(t))
      e.indexOf(s) < 0 && Z.call(t, s) && (o[s] = t[s]);
  return o;
};
var J = (t, e, o) => new Promise((s, a) => {
  var n = (g) => {
    try {
      l(o.next(g));
    } catch ($) {
      a($);
    }
  }, r = (g) => {
    try {
      l(o.throw(g));
    } catch ($) {
      a($);
    }
  }, l = (g) => g.done ? s(g.value) : Promise.resolve(g.value).then(n, r);
  l((o = o.apply(t, e)).next());
});
import * as D from "element-plus";
import { computed as y, createElementBlock as h, openBlock as c, mergeProps as M, renderSlot as m, createBlock as b, createSlots as _, renderList as f, withCtx as p, useAttrs as F, unref as C, normalizeProps as T, guardReactiveProps as B, mergeModels as Q, useModel as oe, createVNode as P, createTextVNode as X, useSlots as G, ref as R, watch as A, createCommentVNode as O, normalizeStyle as ne, normalizeClass as z, createElementVNode as k, toDisplayString as Y, provide as ae, Fragment as re, withModifiers as le, inject as ie, onMounted as ce, onUnmounted as ue, withDirectives as me, vShow as pe } from "vue";
import { ElButton as de, ElCard as _e, ElInput as fe, ElForm as be, ElFormItem as ge, ElTooltip as Me, ElSelect as $e, ElOption as ve, ElOptionGroup as he, ElPagination as ye, ElRadio as Ce, ElRadioGroup as Se, ElRadioButton as ke, ElSwitch as Te, ElTag as Be, ElAlert as Ee, ElDialog as Oe, ElNotification as Pe, ElDatePicker as we, ElEmpty as Ie, ElTable as Ne, ElTableColumn as je } from "element-plus/es";
import "element-plus/es/components/base/style/index";
import "element-plus/es/components/button/style/index";
import "element-plus/es/components/card/style/index";
import "element-plus/es/components/input/style/index";
import "element-plus/es/components/form/style/index";
import "element-plus/es/components/form-item/style/index";
import "element-plus/es/components/tooltip/style/index";
import "element-plus/es/components/select/style/index";
import "element-plus/es/components/option/style/index";
import "element-plus/es/components/option-group/style/index";
import "element-plus/es/components/pagination/style/index";
import "element-plus/es/components/radio/style/index";
import "element-plus/es/components/radio-group/style/index";
import "element-plus/es/components/radio-button/style/index";
import "element-plus/es/components/switch/style/index";
import "element-plus/es/components/tag/style/index";
import "element-plus/es/components/alert/style/index";
import "element-plus/es/components/dialog/style/index";
import "element-plus/es/components/notification/style/index";
import "element-plus/es/components/date-picker/style/index";
import "element-plus/es/components/empty/style/index";
import "element-plus/es/components/table/style/index";
import "element-plus/es/components/table-column/style/index";
const E = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [s, a] of e)
    o[s] = a;
  return o;
}, Ae = /* @__PURE__ */ Object.assign({
  name: "MIcon"
}, {
  __name: "Icon",
  props: {
    name: {
      type: String,
      required: !0
    },
    size: {
      type: [String, Number],
      default: "16px"
    },
    color: {
      type: String,
      default: "inherit"
    },
    spin: {
      type: Boolean,
      default: !1
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotate: {
      type: Number,
      default: 0
    },
    flip: {
      type: String,
      default: void 0
    },
    prefix: {
      type: String,
      default: "icon"
    }
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const o = t, s = e, a = y(() => {
      const l = ["iconfont"];
      return o.name && l.push(`${o.prefix}-${o.name}`), o.spin && l.push("icon-spin"), o.pulse && l.push("icon-pulse"), o.flip && l.push(`icon-flip-${o.flip}`), l;
    }), n = y(() => {
      const l = {};
      return o.size && (typeof o.size == "number" ? l.fontSize = `${o.size}px` : l.fontSize = o.size), o.color && (l.color = o.color), o.rotate !== 0 && (l.transform = `rotate(${o.rotate}deg)`), l;
    }), r = (l) => {
      s("click", l);
    };
    return (l, g) => (c(), h("i", M({
      class: a.value,
      style: n.value
    }, l.$attrs, { onClick: r }), [
      m(l.$slots, "default", {}, void 0, !0)
    ], 16));
  }
}), w = /* @__PURE__ */ E(Ae, [["__scopeId", "data-v-90f84c9e"]]), ze = /* @__PURE__ */ Object.assign({
  name: "MButton"
}, {
  __name: "Button",
  setup(t) {
    return (e, o) => {
      const s = de;
      return c(), b(s, M(e.$attrs, { class: "m-button" }), _({ _: 2 }, [
        f(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n, {}, void 0, !0)
          ])
        }))
      ]), 1040);
    };
  }
}), Le = /* @__PURE__ */ E(ze, [["__scopeId", "data-v-9c99add1"]]), Ve = /* @__PURE__ */ Object.assign({
  name: "MCard"
}, {
  __name: "Card",
  setup(t) {
    return (e, o) => {
      const s = _e;
      return c(), b(s, M(e.$attrs, { class: "m-card" }), _({ _: 2 }, [
        f(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), Re = /* @__PURE__ */ Object.assign({
  name: "MInput"
}, {
  __name: "Input",
  setup(t) {
    return (e, o) => {
      const s = fe;
      return c(), b(s, M(e.$attrs, {
        class: ["m-input", { solid: e.$attrs.styleType === "solid" }]
      }), _({ _: 2 }, [
        f(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n)
          ])
        }))
      ]), 1040, ["class"]);
    };
  }
}), De = /* @__PURE__ */ Object.assign({
  name: "MForm"
}, {
  __name: "Form",
  setup(t) {
    return (e, o) => {
      const s = be;
      return c(), b(s, M(e.$attrs, { class: "m-form" }), _({ _: 2 }, [
        f(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), Fe = /* @__PURE__ */ Object.assign({
  name: "MFormItem"
}, {
  __name: "FormItem",
  setup(t) {
    return (e, o) => {
      const s = ge;
      return c(), b(s, M(e.$attrs, { class: "m-form-item" }), _({ _: 2 }, [
        f(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), Ge = (...t) => t.filter(Boolean).join(" "), Ue = (t, ...e) => {
  const o = j({}, t);
  return e.forEach((s) => {
    delete o[s];
  }), o;
};
function I(t, e = "popperClass") {
  const o = F(), s = y(() => Ue(o, e)), a = y(() => Ge(t, o[e]));
  return {
    mergedAttrs: s,
    className: a
  };
}
const qe = /* @__PURE__ */ Object.assign({
  name: "MTooltip"
}, {
  __name: "Tooltip",
  props: {
    popperClass: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    const { mergedAttrs: e, className: o } = I("mc-tooltip-popper");
    return (s, a) => {
      const n = Me;
      return c(), b(n, M(C(e), { "popper-class": C(o) }), _({ _: 2 }, [
        f(s.$slots, (r, l) => ({
          name: l,
          fn: p(() => [
            m(s.$slots, l)
          ])
        }))
      ]), 1040, ["popper-class"]);
    };
  }
}), We = /* @__PURE__ */ Object.assign({
  name: "MSelect"
}, {
  __name: "Select",
  setup(t) {
    return (e, o) => {
      const s = $e;
      return c(), b(s, M({
        class: ["m-select2", { solid: e.$attrs.styleType === "solid" }],
        "show-arrow": !1
      }, e.$attrs), _({ _: 2 }, [
        f(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n)
          ])
        }))
      ]), 1040, ["class"]);
    };
  }
}), Ze = /* @__PURE__ */ Object.assign({
  name: "MOption"
}, {
  __name: "Option",
  setup(t) {
    return (e, o) => {
      const s = ve;
      return c(), b(s, T(B(e.$attrs)), _({ _: 2 }, [
        f(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), He = /* @__PURE__ */ Object.assign({
  name: "MOptionGroup"
}, {
  __name: "OptionGroup",
  setup(t) {
    return (e, o) => {
      const s = he;
      return c(), b(s, T(B(e.$attrs)), _({ _: 2 }, [
        f(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), Je = /* @__PURE__ */ Object.assign({
  name: "MPagination"
}, {
  __name: "Pagination",
  setup(t) {
    return (e, o) => {
      const s = ye;
      return c(), b(s, M(e.$attrs, { class: "m-pagination" }), _({ _: 2 }, [
        f(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), Qe = /* @__PURE__ */ Object.assign({
  name: "MRadio"
}, {
  __name: "Radio",
  props: {
    popperClass: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    const { mergedAttrs: e } = I("mc-radio-popper");
    return (o, s) => {
      const a = Ce;
      return c(), b(a, M(C(e), { class: "m-radio" }), _({ _: 2 }, [
        f(o.$slots, (n, r) => ({
          name: r,
          fn: p(() => [
            m(o.$slots, r)
          ])
        }))
      ]), 1040);
    };
  }
}), Xe = /* @__PURE__ */ Object.assign({
  name: "MRadioGroup"
}, {
  __name: "RadioGroup",
  props: {
    popperClass: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    const e = F(), o = y(() => {
      const a = "mc-radio-group-popper";
      return e.popperClass ? `${a} ${e.popperClass}`.trim() : a;
    }), s = y(() => {
      const r = e, { popperClass: a } = r;
      return V(r, ["popperClass"]);
    });
    return (a, n) => {
      const r = Se;
      return c(), b(r, M(s.value, {
        "popper-class": o.value,
        class: "m-radio-group"
      }), _({ _: 2 }, [
        f(a.$slots, (l, g) => ({
          name: g,
          fn: p(() => [
            m(a.$slots, g)
          ])
        }))
      ]), 1040, ["popper-class"]);
    };
  }
}), Ye = /* @__PURE__ */ Object.assign({
  name: "MRadioButton"
}, {
  __name: "RadioButton",
  props: {
    popperClass: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    const { mergedAttrs: e } = I("mc-radio-button-popper");
    return (o, s) => {
      const a = ke;
      return c(), b(a, M(C(e), { class: "m-radio-button" }), _({ _: 2 }, [
        f(o.$slots, (n, r) => ({
          name: r,
          fn: p(() => [
            m(o.$slots, r)
          ])
        }))
      ]), 1040);
    };
  }
}), Ke = /* @__PURE__ */ Object.assign({
  name: "MSwitch"
}, {
  __name: "Switch",
  props: {
    popperClass: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    const { mergedAttrs: e, className: o } = I("mc-switch-popper");
    return (s, a) => {
      const n = Te;
      return c(), b(n, M(C(e), {
        "popper-class": C(o),
        class: "m-switch"
      }), _({ _: 2 }, [
        f(s.$slots, (r, l) => ({
          name: l,
          fn: p(() => [
            m(s.$slots, l)
          ])
        }))
      ]), 1040, ["popper-class"]);
    };
  }
}), xe = /* @__PURE__ */ Object.assign({
  name: "MTag"
}, {
  __name: "Tag",
  setup(t) {
    return (e, o) => {
      const s = Be;
      return c(), b(s, M(e.$attrs, { class: "m-tag" }), _({ _: 2 }, [
        f(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), et = /* @__PURE__ */ Object.assign({
  name: "MAlert"
}, {
  __name: "Alert",
  setup(t) {
    return (e, o) => {
      const s = Ee;
      return c(), b(s, T(B(e.$attrs)), _({ _: 2 }, [
        f(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), tt = {
  __name: "Dialog",
  props: /* @__PURE__ */ Q({
    width: {
      type: String,
      default: "440px"
    },
    center: {
      type: Boolean,
      default: !0
    },
    draggable: {
      type: Boolean,
      default: !0
    },
    closeOnClickModal: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      default: ""
    }
  }, {
    modelValue: {
      type: Boolean,
      default: !1
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Q(["close"], ["update:modelValue"]),
  setup(t, { emit: e }) {
    const o = oe(t, "modelValue");
    return (s, a) => {
      const n = Oe;
      return c(), h("div", null, [
        P(n, M({
          modelValue: o.value,
          "onUpdate:modelValue": a[0] || (a[0] = (r) => o.value = r),
          width: t.width,
          title: t.title,
          draggable: t.draggable,
          "close-on-click-modal": t.closeOnClickModal,
          center: t.center
        }, s.$attrs, {
          class: "m-dialog",
          "header-class": "m-header"
        }), _({
          default: p(() => [
            a[1] || (a[1] = X("测试组 ", -1)),
            m(s.$slots, "default", {}, void 0, !0)
          ]),
          _: 2
        }, [
          s.$slots.header ? {
            name: "header",
            fn: p(({ close: r, titleId: l, titleClass: g }) => [
              m(s.$slots, "header", T(B({ close: r, titleId: l, titleClass: g })), void 0, !0)
            ]),
            key: "0"
          } : void 0,
          s.$slots.footer ? {
            name: "footer",
            fn: p(() => [
              m(s.$slots, "footer", {}, void 0, !0)
            ]),
            key: "1"
          } : void 0
        ]), 1040, ["modelValue", "width", "title", "draggable", "close-on-click-modal", "center"])
      ]);
    };
  }
}, st = /* @__PURE__ */ E(tt, [["__scopeId", "data-v-a9d393b9"]]), ot = /* @__PURE__ */ Object.assign({
  name: "MNotification"
}, {
  __name: "Notification",
  setup(t) {
    return (e, o) => {
      const s = Pe;
      return c(), b(s, T(B(e.$attrs)), _({ _: 2 }, [
        f(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), nt = /* @__PURE__ */ Object.assign({
  name: "MDatePicker"
}, {
  __name: "DatePicker",
  props: {
    popperClass: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    const { mergedAttrs: e, className: o } = I(
      "mc-datepicker-popper",
      "popperClass"
    );
    return (s, a) => {
      const n = we;
      return c(), b(n, M(C(e), { "popper-class": C(o) }), _({ _: 2 }, [
        f(s.$slots, (r, l) => ({
          name: l,
          fn: p(() => [
            m(s.$slots, l)
          ])
        }))
      ]), 1040, ["popper-class"]);
    };
  }
}), at = [
  "404",
  "billing",
  "cart",
  "comments",
  "dashboard",
  "files",
  "inbox",
  "location",
  "network",
  "notifications",
  "orders",
  "records",
  "session",
  "subscription",
  "todo",
  "wishlist"
], rt = {
  name: "MEmpty"
}, lt = /* @__PURE__ */ Object.assign(rt, {
  props: {
    image: {
      type: String,
      default: "orders",
      validator: (t) => t.includes("/") || t.includes("http") ? !0 : at.includes(t)
    }
  },
  setup(t) {
    const e = t, o = F(), s = y(() => {
      const l = o, { image: n } = l;
      return V(l, ["image"]);
    }), a = y(() => {
      const { image: n } = e;
      return n.includes("/") || n.includes("http") ? n : `/images/empty/${n}.png`;
    });
    return (n, r) => {
      const l = Ie;
      return c(), b(l, M(s.value, { image: a.value }), _({ _: 2 }, [
        f(n.$slots, (g, $) => ({
          name: $,
          fn: p(() => [
            m(n.$slots, $)
          ])
        }))
      ]), 1040, ["image"]);
    };
  }
}), it = /* @__PURE__ */ Object.assign({
  name: "MTable"
}, {
  __name: "Table",
  setup(t) {
    return (e, o) => {
      const s = Ne;
      return c(), b(s, T(B(e.$attrs)), _({ _: 2 }, [
        f(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), ct = /* @__PURE__ */ Object.assign({
  name: "MTableColumn"
}, {
  __name: "TableColumn",
  setup(t) {
    return (e, o) => {
      const s = je;
      return c(), b(s, M(e.$attrs, { class: "m-table-column" }), _({ _: 2 }, [
        f(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), ut = { class: "m-banner__content" }, mt = {
  key: 0,
  class: "m-banner__icon"
}, pt = { class: "m-banner__text" }, dt = /* @__PURE__ */ Object.assign({
  name: "MBanner"
}, {
  __name: "Banner",
  props: {
    // 横幅内容
    content: {
      type: String,
      default: ""
    },
    // 横幅类型
    type: {
      type: String,
      default: "info",
      validator: (t) => ["info", "success", "warning", "error"].includes(t)
    },
    // 是否可关闭
    closable: {
      type: Boolean,
      default: !0
    },
    // 是否显示
    visible: {
      type: Boolean,
      default: !0
    },
    // 图标名称
    icon: {
      type: String,
      default: ""
    },
    // 图标大小
    iconSize: {
      type: [String, Number],
      default: "16px"
    },
    // 关闭图标大小
    closeIconSize: {
      type: [String, Number],
      default: "16px"
    },
    // 自定义背景色
    backgroundColor: {
      type: String,
      default: ""
    },
    // 自定义文字颜色
    textColor: {
      type: String,
      default: ""
    },
    // 自定义边框颜色
    borderColor: {
      type: String,
      default: ""
    },
    // 持续时间（毫秒），0 表示不自动关闭
    duration: {
      type: Number,
      default: 0
    }
  },
  emits: ["close", "update:visible"],
  setup(t, { expose: e, emit: o }) {
    const s = G(), a = t, n = o, r = R(a.visible);
    A(() => a.visible, (u) => {
      r.value = u;
    });
    const l = y(() => {
      const u = {};
      return a.backgroundColor && (u.backgroundColor = a.backgroundColor), a.textColor && (u.color = a.textColor), a.borderColor && (u.borderColor = a.borderColor), u;
    }), g = {
      info: "info",
      success: "check-circle",
      warning: "warning",
      error: "close-circle"
    };
    y(() => a.icon || g[a.type]);
    const $ = () => {
      r.value = !1, n("update:visible", !1), n("close");
    };
    return A(r, (u) => {
      u && a.duration > 0 && setTimeout(() => {
        $();
      }, a.duration);
    }), e({
      close: $
    }), (u, v) => t.visible ? (c(), h("div", {
      key: 0,
      class: z(["m-banner", [
        `m-banner--${t.type}`,
        {
          "m-banner--closable": t.closable,
          "m-banner--with-icon": t.icon || C(s).icon
        }
      ]]),
      style: ne(l.value)
    }, [
      k("div", ut, [
        t.icon || C(s).icon ? (c(), h("div", mt, [
          m(u.$slots, "icon", {}, () => [
            P(w, {
              name: t.icon,
              size: t.iconSize
            }, null, 8, ["name", "size"])
          ], !0)
        ])) : O("", !0),
        k("div", pt, [
          m(u.$slots, "default", {}, () => [
            X(Y(t.content), 1)
          ], !0)
        ]),
        t.closable ? (c(), h("div", {
          key: 1,
          class: "m-banner__close",
          onClick: $
        }, [
          P(w, {
            name: "lucide-x",
            size: t.closeIconSize
          }, null, 8, ["size"])
        ])) : O("", !0)
      ])
    ], 6)) : O("", !0);
  }
}), _t = /* @__PURE__ */ E(dt, [["__scopeId", "data-v-00c80323"]]), ft = { class: "m-tabs__header" }, bt = { class: "m-tabs__nav" }, gt = ["onClick"], Mt = { class: "m-tabs__item-text" }, $t = { key: 1 }, vt = ["onClick"], ht = { class: "m-tabs__content" }, yt = {
  __name: "Tabs",
  props: {
    // 当前激活的标签页
    modelValue: {
      type: [String, Number],
      default: ""
    },
    // 标签页类型
    type: {
      type: String,
      default: "",
      validator: (t) => ["", "card", "border-card"].includes(t)
    },
    // 标签位置
    tabPosition: {
      type: String,
      default: "top",
      validator: (t) => ["top", "right", "bottom", "left"].includes(t)
    },
    // 是否可关闭
    closable: {
      type: Boolean,
      default: !1
    },
    // 是否可添加
    addable: {
      type: Boolean,
      default: !1
    },
    // 是否可编辑（同时可添加和关闭）
    editable: {
      type: Boolean,
      default: !1
    },
    // 标签宽度是否自撑开
    stretch: {
      type: Boolean,
      default: !1
    },
    // 切换前的钩子函数
    beforeLeave: {
      type: Function,
      default: null
    }
  },
  emits: ["update:modelValue", "tab-click", "tab-change", "tab-remove", "tab-add", "edit"],
  setup(t, { expose: e, emit: o }) {
    const s = t, a = o;
    G();
    const n = R([]), r = R(s.modelValue);
    A(() => s.modelValue, (u) => {
      r.value = u;
    }), A(r, (u) => {
      a("update:modelValue", u), a("tab-change", u);
    }), ae("tabsContext", {
      registerTab: (u) => {
        const v = n.value.findIndex((d) => d.name === u.name);
        v >= 0 ? n.value[v] = u : n.value.push(u), !r.value && n.value.length > 0 && (r.value = n.value[0].name || 0);
      },
      unregisterTab: (u) => {
        const v = n.value.findIndex((d) => d.name === u);
        v >= 0 && n.value.splice(v, 1);
      }
    });
    const l = (u, v) => J(this, null, function* () {
      if (u.disabled) return;
      const d = u.name || v;
      if (r.value !== d) {
        if (s.beforeLeave)
          try {
            if ((yield s.beforeLeave(r.value, d)) === !1) return;
          } catch (S) {
            return;
          }
        r.value = d, a("tab-click", { name: d, index: v, disabled: u.disabled });
      }
    }), g = (u, v) => {
      const d = u.name || v;
      a("tab-remove", d), a("edit", d, "remove");
    }, $ = () => {
      a("tab-add"), a("edit", "", "add");
    };
    return e({
      activeName: y(() => r.value)
    }), (u, v) => (c(), h("div", {
      class: z(["m-tabs", [`m-tabs--${t.type}`, `m-tabs--${t.tabPosition}`]])
    }, [
      k("div", ft, [
        k("div", bt, [
          (c(!0), h(re, null, f(n.value, (d, S) => {
            var U;
            return c(), h("div", {
              key: d.name || S,
              class: z([
                "m-tabs__item",
                {
                  "m-tabs__item--active": r.value === (d.name || S),
                  "m-tabs__item--disabled": d.disabled,
                  "m-tabs__item--closable": d.closable
                }
              ]),
              onClick: (x) => l(d, S)
            }, [
              k("span", Mt, [
                (U = d.$slots) != null && U.label ? m(u.$slots, `tab-${d.name || S}`, { key: 0 }, void 0, !0) : (c(), h("span", $t, Y(d.label), 1))
              ]),
              d.closable ? (c(), h("span", {
                key: 0,
                class: "m-tabs__item-close",
                onClick: le((x) => g(d, S), ["stop"])
              }, [
                P(w, {
                  name: "lucide-x",
                  size: 12
                })
              ], 8, vt)) : O("", !0)
            ], 10, gt);
          }), 128)),
          t.addable || t.editable ? (c(), h("div", {
            key: 0,
            class: "m-tabs__item m-tabs__item--add",
            onClick: $
          }, [
            P(w, {
              name: "plus",
              size: 12
            })
          ])) : O("", !0)
        ])
      ]),
      k("div", ht, [
        m(u.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}, Ct = /* @__PURE__ */ E(yt, [["__scopeId", "data-v-23508d30"]]), St = /* @__PURE__ */ Object.assign({
  name: "MTabPane"
}, {
  __name: "TabPane",
  props: {
    // 选项卡标题
    label: {
      type: String,
      default: ""
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: !1
    },
    // 选项卡名称，用于标识
    name: {
      type: [String, Number],
      default: ""
    },
    // 是否可关闭
    closable: {
      type: Boolean,
      default: !1
    },
    // 是否延迟渲染
    lazy: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const e = t, o = G(), s = ie("tabsContext"), a = y(() => s ? s.activeName === (e.name || s.tabIndex) : !1);
    return ce(() => {
      if (s) {
        const n = {
          name: e.name,
          label: e.label,
          disabled: e.disabled,
          closable: e.closable,
          $slots: o
        };
        s.registerTab(n);
      }
    }), ue(() => {
      s && s.unregisterTab(e.name);
    }), (n, r) => me((c(), h("div", {
      class: z(["m-tab-pane", {
        "m-tab-pane--active": a.value,
        "m-tab-pane--disabled": t.disabled
      }])
    }, [
      m(n.$slots, "default", {}, void 0, !0)
    ], 2)), [
      [pe, a.value]
    ]);
  }
}), kt = /* @__PURE__ */ E(St, [["__scopeId", "data-v-722bb248"]]);
function L(t) {
  t && t.classList && t.classList.add("mc-ui-override");
}
function Tt(t) {
  t && t.$el && L(t.$el);
}
function Bt() {
  typeof document != "undefined" && (document.body.classList.add("mc-ui-override"), new MutationObserver((e) => {
    e.forEach((o) => {
      o.addedNodes.forEach((s) => {
        if (s.nodeType === 1 && s.classList) {
          if (s.className && s.className.includes("el-")) {
            const n = s.closest(".mc-ui-override") || s.parentElement;
            n && !n.classList.contains("mc-ui-override") && n.classList.add("mc-ui-override");
          }
          s.querySelectorAll('[class*="el-"]').forEach((n) => {
            const r = n.closest(".mc-ui-override") || n.parentElement;
            r && !r.classList.contains("mc-ui-override") && r.classList.add("mc-ui-override");
          });
        }
      });
    });
  }).observe(document.body, {
    childList: !0,
    subtree: !0
  }));
}
function Et(t = '[class*="el-"]') {
  typeof document != "undefined" && document.querySelectorAll(t).forEach((o) => {
    const s = o.closest(".mc-ui-override") || o.parentElement;
    s && !s.classList.contains("mc-ui-override") && s.classList.add("mc-ui-override");
  });
}
function Ot(t) {
  return H(j({}, t), {
    mounted() {
      L(this.$el), t.mounted && t.mounted.call(this);
    },
    updated() {
      L(this.$el), t.updated && t.updated.call(this);
    }
  });
}
const Pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addComponentOverride: Tt,
  addOverrideClass: L,
  applyGlobalOverride: Bt,
  createOverrideComponent: Ot,
  forceRefreshStyles: Et
}, Symbol.toStringTag, { value: "Module" })), K = [w, Le, Ve, Re, De, Fe, qe, We, Ze, He, Je, Qe, Xe, Ye, Ke, xe, et, st, ot, nt, lt, it, ct, _t, Ct, kt], i = {};
function wt(t) {
  const e = K.map((o) => {
    if (o && o.name && typeof o.name == "string") {
      let s = o.name.toLowerCase();
      return {
        mradiogroup: "m-radio-group",
        mradiobutton: "m-radio-button",
        mformitem: "m-form-item",
        moptiongroup: "m-option-group"
      }[s] || s.replace(/^m/, "m-");
    }
    return null;
  }).filter(Boolean);
  Object.entries(D).forEach(([o, s]) => {
    if (s && s.name && typeof s.name == "string" && s.name.startsWith("El")) {
      const a = "m-" + s.name.slice(2).replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
      e.includes(a) || t._context.components[a] || t.component(a, s);
      const n = "M" + s.name.slice(2);
      i[n] = s;
    }
  });
}
const It = (t) => {
  typeof window != "undefined" && Promise.resolve().then(() => Pt).then(({ applyGlobalOverride: e }) => {
    e();
  }), K.forEach((e) => {
    if (e && e.name && typeof e.name == "string") {
      let o = e.name.toLowerCase();
      o = {
        mradiogroup: "m-radio-group",
        mradiobutton: "m-radio-button",
        mformitem: "m-form-item",
        moptiongroup: "m-option-group"
      }[o] || o.replace(/^m/, "m-"), t.component(o, e);
    }
  }), wt(t);
}, as = { install: It }, rs = D.ElMessage, ls = D.ElMessageBox, is = j({}, i), cs = i.MButtonGroup, us = i.MBreadcrumb, ms = i.MBreadcrumbItem, ps = i.MCarousel, ds = i.MCarouselItem, _s = i.MCascader, fs = i.MCascaderPanel, bs = i.MCheckTag, gs = i.MCalendar, Ms = i.MTimePicker, $s = i.MDateTimePicker, vs = i.MColorPicker, hs = i.MTransfer, ys = i.MTree, Cs = i.MTreeSelect, Ss = i.MUpload, ks = i.MImage, Ts = i.MImageViewer, Bs = i.MBacktop, Es = i.MInfiniteScroll, Os = i.MAffix, Ps = i.MScrollbar, ws = i.MResult, Is = i.MSkeleton, Ns = i.MLoading, js = i.MSpinner, As = i.MProgress, zs = i.MBadge, Ls = i.MAvatar, Vs = i.MImagePreview, Rs = i.MTeleport, Ds = i.MConfigProvider;
export {
  Os as MAffix,
  et as MAlert,
  Ls as MAvatar,
  Bs as MBacktop,
  zs as MBadge,
  _t as MBanner,
  us as MBreadcrumb,
  ms as MBreadcrumbItem,
  Le as MButton,
  cs as MButtonGroup,
  gs as MCalendar,
  Ve as MCard,
  ps as MCarousel,
  ds as MCarouselItem,
  _s as MCascader,
  fs as MCascaderPanel,
  bs as MCheckTag,
  vs as MColorPicker,
  Ds as MConfigProvider,
  nt as MDatePicker,
  $s as MDateTimePicker,
  st as MDialog,
  lt as MEmpty,
  De as MForm,
  Fe as MFormItem,
  w as MIcon,
  ks as MImage,
  Vs as MImagePreview,
  Ts as MImageViewer,
  Es as MInfiniteScroll,
  Re as MInput,
  Ns as MLoading,
  rs as MMessage,
  ls as MMessageBox,
  ot as MNotification,
  Je as MPagination,
  As as MProgress,
  Qe as MRadio,
  Ye as MRadioButton,
  Xe as MRadioGroup,
  ws as MResult,
  Ps as MScrollbar,
  We as MSelect,
  Is as MSkeleton,
  js as MSpinner,
  Ke as MSwitch,
  kt as MTabPane,
  it as MTable,
  ct as MTableColumn,
  Ct as MTabs,
  xe as MTag,
  Rs as MTeleport,
  Ms as MTimePicker,
  qe as MTooltip,
  hs as MTransfer,
  ys as MTree,
  Cs as MTreeSelect,
  Ss as MUpload,
  Tt as addComponentOverride,
  L as addOverrideClass,
  Bt as applyGlobalOverride,
  Ot as createOverrideComponent,
  as as default,
  Et as forceRefreshStyles,
  is as mComponents
};
//# sourceMappingURL=index.mjs.map
