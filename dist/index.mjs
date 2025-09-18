var se = Object.defineProperty, oe = Object.defineProperties;
var ne = Object.getOwnPropertyDescriptors;
var j = Object.getOwnPropertySymbols;
var Q = Object.prototype.hasOwnProperty, X = Object.prototype.propertyIsEnumerable;
var J = (t, e, o) => e in t ? se(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, T = (t, e) => {
  for (var o in e || (e = {}))
    Q.call(e, o) && J(t, o, e[o]);
  if (j)
    for (var o of j(e))
      X.call(e, o) && J(t, o, e[o]);
  return t;
}, A = (t, e) => oe(t, ne(e));
var z = (t, e) => {
  var o = {};
  for (var s in t)
    Q.call(t, s) && e.indexOf(s) < 0 && (o[s] = t[s]);
  if (t != null && j)
    for (var s of j(t))
      e.indexOf(s) < 0 && X.call(t, s) && (o[s] = t[s]);
  return o;
};
var Y = (t, e, o) => new Promise((s, a) => {
  var n = (d) => {
    try {
      l(o.next(d));
    } catch (v) {
      a(v);
    }
  }, r = (d) => {
    try {
      l(o.throw(d));
    } catch (v) {
      a(v);
    }
  }, l = (d) => d.done ? s(d.value) : Promise.resolve(d.value).then(n, r);
  l((o = o.apply(t, e)).next());
});
import * as q from "element-plus";
import { computed as h, createElementBlock as M, openBlock as i, mergeProps as $, renderSlot as m, createBlock as _, createSlots as g, renderList as b, withCtx as p, useAttrs as G, unref as k, normalizeProps as F, guardReactiveProps as U, createElementVNode as C, mergeModels as K, useModel as ae, createVNode as O, createTextVNode as x, ref as L, Teleport as re, TransitionGroup as le, Fragment as ee, normalizeClass as I, createCommentVNode as w, toDisplayString as V, resolveDynamicComponent as ie, useSlots as W, watch as R, normalizeStyle as ce, provide as ue, withModifiers as me, inject as pe, onMounted as de, onUnmounted as fe, withDirectives as _e, vShow as be } from "vue";
import { ElButton as ge, ElInput as $e, ElForm as Me, ElFormItem as ve, ElTooltip as he, ElSelect as ye, ElOption as Ce, ElOptionGroup as ke, ElPagination as Se, ElRadio as Te, ElRadioGroup as Be, ElRadioButton as we, ElSwitch as Ee, ElTag as Oe, ElAlert as Ie, ElDialog as Pe, ElNotification as Ne, ElDatePicker as je, ElEmpty as Ae, ElTable as ze, ElTableColumn as Le } from "element-plus/es";
import "element-plus/es/components/base/style/index";
import "element-plus/es/components/button/style/index";
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
}, Ve = /* @__PURE__ */ Object.assign({
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
    const o = t, s = e, a = h(() => {
      const l = ["iconfont"];
      return o.name && l.push(`${o.prefix}-${o.name}`), o.spin && l.push("icon-spin"), o.pulse && l.push("icon-pulse"), o.flip && l.push(`icon-flip-${o.flip}`), l;
    }), n = h(() => {
      const l = {};
      return o.size && (typeof o.size == "number" ? l.fontSize = `${o.size}px` : l.fontSize = o.size), o.color && (l.color = o.color), o.rotate !== 0 && (l.transform = `rotate(${o.rotate}deg)`), l;
    }), r = (l) => {
      s("click", l);
    };
    return (l, d) => (i(), M("i", $({
      class: a.value,
      style: n.value
    }, l.$attrs, { onClick: r }), [
      m(l.$slots, "default", {}, void 0, !0)
    ], 16));
  }
}), P = /* @__PURE__ */ E(Ve, [["__scopeId", "data-v-90f84c9e"]]), Re = /* @__PURE__ */ Object.assign({
  name: "MButton"
}, {
  __name: "Button",
  setup(t) {
    return (e, o) => {
      const s = ge;
      return i(), _(s, $(e.$attrs, { class: "m-button" }), g({ _: 2 }, [
        b(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n, {}, void 0, !0)
          ])
        }))
      ]), 1040);
    };
  }
}), De = /* @__PURE__ */ E(Re, [["__scopeId", "data-v-9c99add1"]]), Ge = /* @__PURE__ */ Object.assign({
  name: "MInput"
}, {
  __name: "Input",
  setup(t) {
    return (e, o) => {
      const s = $e;
      return i(), _(s, $(e.$attrs, {
        class: ["m-input", { solid: e.$attrs.styleType === "solid" }]
      }), g({ _: 2 }, [
        b(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n)
          ])
        }))
      ]), 1040, ["class"]);
    };
  }
}), Fe = /* @__PURE__ */ Object.assign({
  name: "MForm"
}, {
  __name: "Form",
  setup(t) {
    return (e, o) => {
      const s = Me;
      return i(), _(s, $(e.$attrs, { class: "m-form" }), g({ _: 2 }, [
        b(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), Ue = /* @__PURE__ */ Object.assign({
  name: "MFormItem"
}, {
  __name: "FormItem",
  setup(t) {
    return (e, o) => {
      const s = ve;
      return i(), _(s, $(e.$attrs, { class: "m-form-item" }), g({ _: 2 }, [
        b(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), qe = (...t) => t.filter(Boolean).join(" "), We = (t, ...e) => {
  const o = T({}, t);
  return e.forEach((s) => {
    delete o[s];
  }), o;
};
function N(t, e = "popperClass") {
  const o = G(), s = h(() => We(o, e)), a = h(() => qe(t, o[e]));
  return {
    mergedAttrs: s,
    className: a
  };
}
const Ze = /* @__PURE__ */ Object.assign({
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
    const { mergedAttrs: e, className: o } = N("mc-tooltip-popper");
    return (s, a) => {
      const n = he;
      return i(), _(n, $(k(e), { "popper-class": k(o) }), g({ _: 2 }, [
        b(s.$slots, (r, l) => ({
          name: l,
          fn: p(() => [
            m(s.$slots, l)
          ])
        }))
      ]), 1040, ["popper-class"]);
    };
  }
}), He = /* @__PURE__ */ Object.assign({
  name: "MSelect"
}, {
  __name: "Select",
  setup(t) {
    return (e, o) => {
      const s = ye;
      return i(), _(s, $({
        class: ["m-select2", { solid: e.$attrs.styleType === "solid" }],
        "show-arrow": !1
      }, e.$attrs), g({ _: 2 }, [
        b(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n)
          ])
        }))
      ]), 1040, ["class"]);
    };
  }
}), Je = /* @__PURE__ */ Object.assign({
  name: "MOption"
}, {
  __name: "Option",
  setup(t) {
    return (e, o) => {
      const s = Ce;
      return i(), _(s, F(U(e.$attrs)), g({ _: 2 }, [
        b(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), Qe = /* @__PURE__ */ Object.assign({
  name: "MOptionGroup"
}, {
  __name: "OptionGroup",
  setup(t) {
    return (e, o) => {
      const s = ke;
      return i(), _(s, F(U(e.$attrs)), g({ _: 2 }, [
        b(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), Xe = /* @__PURE__ */ Object.assign({
  name: "MPagination"
}, {
  __name: "Pagination",
  setup(t) {
    return (e, o) => {
      const s = Se;
      return i(), _(s, $(e.$attrs, { class: "m-pagination" }), g({ _: 2 }, [
        b(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), Ye = /* @__PURE__ */ Object.assign({
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
    const { mergedAttrs: e } = N("mc-radio-popper");
    return (o, s) => {
      const a = Te;
      return i(), _(a, $(k(e), { class: "m-radio" }), g({ _: 2 }, [
        b(o.$slots, (n, r) => ({
          name: r,
          fn: p(() => [
            m(o.$slots, r)
          ])
        }))
      ]), 1040);
    };
  }
}), Ke = /* @__PURE__ */ Object.assign({
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
    const e = G(), o = h(() => {
      const a = "mc-radio-group-popper";
      return e.popperClass ? `${a} ${e.popperClass}`.trim() : a;
    }), s = h(() => {
      const r = e, { popperClass: a } = r;
      return z(r, ["popperClass"]);
    });
    return (a, n) => {
      const r = Be;
      return i(), _(r, $(s.value, {
        "popper-class": o.value,
        class: "m-radio-group"
      }), g({ _: 2 }, [
        b(a.$slots, (l, d) => ({
          name: d,
          fn: p(() => [
            m(a.$slots, d)
          ])
        }))
      ]), 1040, ["popper-class"]);
    };
  }
}), xe = /* @__PURE__ */ Object.assign({
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
    const { mergedAttrs: e } = N("mc-radio-button-popper");
    return (o, s) => {
      const a = we;
      return i(), _(a, $(k(e), { class: "m-radio-button" }), g({ _: 2 }, [
        b(o.$slots, (n, r) => ({
          name: r,
          fn: p(() => [
            m(o.$slots, r)
          ])
        }))
      ]), 1040);
    };
  }
}), et = /* @__PURE__ */ Object.assign({
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
    const { mergedAttrs: e, className: o } = N("mc-switch-popper");
    return (s, a) => {
      const n = Ee;
      return i(), _(n, $(k(e), {
        "popper-class": k(o),
        class: "m-switch"
      }), g({ _: 2 }, [
        b(s.$slots, (r, l) => ({
          name: l,
          fn: p(() => [
            m(s.$slots, l)
          ])
        }))
      ]), 1040, ["popper-class"]);
    };
  }
}), tt = /* @__PURE__ */ Object.assign({
  name: "MTag"
}, {
  __name: "Tag",
  setup(t) {
    return (e, o) => {
      const s = Oe;
      return i(), _(s, $(e.$attrs, { class: "m-tag" }), g({ _: 2 }, [
        b(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), st = ["src", "alt"], ot = ["success", "warning", "error"], nt = {
  name: "MAlert"
}, at = /* @__PURE__ */ Object.assign(nt, {
  props: {
    type: {
      type: String,
      default: "success",
      validator: (t) => ot.includes(t)
    },
    useCustomIcon: {
      type: Boolean,
      default: !0
    }
  },
  setup(t) {
    const e = t, o = G(), s = h(() => {
      const l = o, { useCustomIcon: n } = l, r = z(l, ["useCustomIcon"]);
      return A(T({}, r), {
        type: e.type
        // 确保 type 属性正确传递给 el-alert
      });
    }), a = h(() => e.useCustomIcon ? `/images/alert/alert-${e.type}.png` : null);
    return (n, r) => {
      const l = Ie;
      return i(), _(l, $(s.value, { class: "mc-alert" }), g({ _: 2 }, [
        a.value ? {
          name: "icon",
          fn: p(() => [
            C("img", {
              src: a.value,
              alt: `${t.type} icon`,
              class: "mc-alert-icon"
            }, null, 8, st)
          ]),
          key: "0"
        } : void 0,
        b(n.$slots, (d, v) => ({
          name: v,
          fn: p(() => [
            m(n.$slots, v)
          ])
        }))
      ]), 1040);
    };
  }
}), rt = {
  __name: "Dialog",
  props: /* @__PURE__ */ K({
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
  emits: /* @__PURE__ */ K(["close"], ["update:modelValue"]),
  setup(t, { emit: e }) {
    const o = ae(t, "modelValue");
    return (s, a) => {
      const n = Pe;
      return i(), M("div", null, [
        O(n, $({
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
        }), g({
          default: p(() => [
            a[1] || (a[1] = x("测试组 ", -1)),
            m(s.$slots, "default")
          ]),
          _: 2
        }, [
          s.$slots.header ? {
            name: "header",
            fn: p(({ close: r, titleId: l, titleClass: d }) => [
              m(s.$slots, "header", F(U({ close: r, titleId: l, titleClass: d })))
            ]),
            key: "0"
          } : void 0,
          s.$slots.footer ? {
            name: "footer",
            fn: p(() => [
              m(s.$slots, "footer")
            ]),
            key: "1"
          } : void 0
        ]), 1040, ["modelValue", "width", "title", "draggable", "close-on-click-modal", "center"])
      ]);
    };
  }
}, lt = {
  name: "MNotification"
};
function it(t, e, o, s, a, n) {
  const r = Ne;
  return i(), _(r, $(t.$attrs, { class: "mc-notification" }), g({ _: 2 }, [
    b(t.$slots, (l, d) => ({
      name: d,
      fn: p(() => [
        m(t.$slots, d)
      ])
    }))
  ]), 1040);
}
const ct = /* @__PURE__ */ E(lt, [["render", it]]), B = L([]);
let ut = 0;
const vs = {
  // 默认配置
  defaultOptions: {
    title: "",
    message: "",
    duration: 4500,
    position: "top-right",
    showClose: !0,
    offset: 20
  },
  // 显示通知
  show(t = {}) {
    const e = A(T(T({}, this.defaultOptions), t), {
      id: ++ut
    });
    return B.value.push(e), e.duration > 0 && setTimeout(() => {
      this.close(e.id);
    }, e.duration), {
      close: () => this.close(e.id)
    };
  },
  // 关闭指定通知
  close(t) {
    const e = B.value.findIndex((o) => o.id === t);
    e > -1 && B.value.splice(e, 1);
  },
  // 关闭所有通知
  closeAll() {
    B.value = [];
  },
  // 便捷方法
  success(t = {}) {
    return this.show(t);
  },
  warning(t = {}) {
    return this.show(t);
  },
  error(t = {}) {
    return this.show(t);
  }
}, mt = (t) => {
  const e = B.value.findIndex((o) => o.id === t);
  e > -1 && B.value.splice(e, 1);
}, pt = {
  name: "MNotifiMessage",
  setup() {
    return {
      notifications: B,
      closeNotification: mt
    };
  }
}, dt = { class: "notification-content" }, ft = { class: "notification-title" }, _t = { class: "notification-message" }, bt = {
  key: 0,
  class: "notification-action"
}, gt = ["onClick"];
function $t(t, e, o, s, a, n) {
  return i(), _(re, { to: "body" }, [
    O(le, {
      name: "notification",
      tag: "div",
      class: "notification-container"
    }, {
      default: p(() => [
        (i(!0), M(ee, null, b(s.notifications, (r) => (i(), M("div", {
          key: r.id,
          class: I([
            "custom-notification",
            `notification-${r.position}`
          ])
        }, [
          e[0] || (e[0] = C("div", { class: "notification-icon" }, [
            C("img", {
              src: "https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/MCImages/userCenter/icon-quota-tip.png",
              alt: "notification icon"
            })
          ], -1)),
          C("div", dt, [
            C("div", ft, V(r.title), 1),
            C("div", _t, V(r.message), 1),
            r.slotContent ? (i(), M("div", bt, [
              (i(), _(ie(r.slotContent)))
            ])) : w("", !0)
          ]),
          r.showClose ? (i(), M("button", {
            key: 0,
            class: "notification-close",
            onClick: (l) => s.closeNotification(r.id)
          }, " × ", 8, gt)) : w("", !0)
        ], 2))), 128))
      ]),
      _: 1
    })
  ]);
}
const Mt = /* @__PURE__ */ E(pt, [["render", $t]]), vt = /* @__PURE__ */ Object.assign({
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
    const { mergedAttrs: e, className: o } = N(
      "mc-datepicker-popper",
      "popperClass"
    );
    return (s, a) => {
      const n = je;
      return i(), _(n, $(k(e), { "popper-class": k(o) }), g({ _: 2 }, [
        b(s.$slots, (r, l) => ({
          name: l,
          fn: p(() => [
            m(s.$slots, l)
          ])
        }))
      ]), 1040, ["popper-class"]);
    };
  }
}), ht = [
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
], yt = {
  name: "MEmpty"
}, Ct = /* @__PURE__ */ Object.assign(yt, {
  props: {
    image: {
      type: String,
      default: "orders",
      validator: (t) => t.includes("/") || t.includes("http") ? !0 : ht.includes(t)
    }
  },
  setup(t) {
    const e = t, o = G(), s = h(() => {
      const l = o, { image: n } = l;
      return z(l, ["image"]);
    }), a = h(() => {
      const { image: n } = e;
      return n.includes("/") || n.includes("http") ? n : `/images/empty/${n}.png`;
    });
    return (n, r) => {
      const l = Ae;
      return i(), _(l, $(s.value, { image: a.value }), g({ _: 2 }, [
        b(n.$slots, (d, v) => ({
          name: v,
          fn: p(() => [
            m(n.$slots, v)
          ])
        }))
      ]), 1040, ["image"]);
    };
  }
}), kt = /* @__PURE__ */ Object.assign({
  name: "MTable"
}, {
  __name: "Table",
  setup(t) {
    return (e, o) => {
      const s = ze;
      return i(), _(s, F(U(e.$attrs)), g({ _: 2 }, [
        b(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), St = /* @__PURE__ */ Object.assign({
  name: "MTableColumn"
}, {
  __name: "TableColumn",
  setup(t) {
    return (e, o) => {
      const s = Le;
      return i(), _(s, $(e.$attrs, { class: "m-table-column" }), g({ _: 2 }, [
        b(e.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(e.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), Tt = { class: "m-banner__content" }, Bt = {
  key: 0,
  class: "m-banner__icon"
}, wt = { class: "m-banner__text" }, Et = /* @__PURE__ */ Object.assign({
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
    const s = W(), a = t, n = o, r = L(a.visible);
    R(() => a.visible, (u) => {
      r.value = u;
    });
    const l = h(() => {
      const u = {};
      return a.backgroundColor && (u.backgroundColor = a.backgroundColor), a.textColor && (u.color = a.textColor), a.borderColor && (u.borderColor = a.borderColor), u;
    }), d = {
      info: "info",
      success: "check-circle",
      warning: "warning",
      error: "close-circle"
    };
    h(() => a.icon || d[a.type]);
    const v = () => {
      r.value = !1, n("update:visible", !1), n("close");
    };
    return R(r, (u) => {
      u && a.duration > 0 && setTimeout(() => {
        v();
      }, a.duration);
    }), e({
      close: v
    }), (u, y) => t.visible ? (i(), M("div", {
      key: 0,
      class: I(["m-banner", [
        `m-banner--${t.type}`,
        {
          "m-banner--closable": t.closable,
          "m-banner--with-icon": t.icon || k(s).icon
        }
      ]]),
      style: ce(l.value)
    }, [
      C("div", Tt, [
        t.icon || k(s).icon ? (i(), M("div", Bt, [
          m(u.$slots, "icon", {}, () => [
            O(P, {
              name: t.icon,
              size: t.iconSize
            }, null, 8, ["name", "size"])
          ], !0)
        ])) : w("", !0),
        C("div", wt, [
          m(u.$slots, "default", {}, () => [
            x(V(t.content), 1)
          ], !0)
        ]),
        t.closable ? (i(), M("div", {
          key: 1,
          class: "m-banner__close",
          onClick: v
        }, [
          O(P, {
            name: "lucide-x",
            size: t.closeIconSize
          }, null, 8, ["size"])
        ])) : w("", !0)
      ])
    ], 6)) : w("", !0);
  }
}), Ot = /* @__PURE__ */ E(Et, [["__scopeId", "data-v-00c80323"]]), It = { class: "m-tabs__header" }, Pt = { class: "m-tabs__nav" }, Nt = ["onClick"], jt = { class: "m-tabs__item-text" }, At = { key: 1 }, zt = ["onClick"], Lt = { class: "m-tabs__content" }, Vt = {
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
    W();
    const n = L([]), r = L(s.modelValue);
    R(() => s.modelValue, (u) => {
      r.value = u;
    }), R(r, (u) => {
      a("update:modelValue", u), a("tab-change", u);
    }), ue("tabsContext", {
      registerTab: (u) => {
        const y = n.value.findIndex((f) => f.name === u.name);
        y >= 0 ? n.value[y] = u : n.value.push(u), !r.value && n.value.length > 0 && (r.value = n.value[0].name || 0);
      },
      unregisterTab: (u) => {
        const y = n.value.findIndex((f) => f.name === u);
        y >= 0 && n.value.splice(y, 1);
      }
    });
    const l = (u, y) => Y(this, null, function* () {
      if (u.disabled) return;
      const f = u.name || y;
      if (r.value !== f) {
        if (s.beforeLeave)
          try {
            if ((yield s.beforeLeave(r.value, f)) === !1) return;
          } catch (S) {
            return;
          }
        r.value = f, a("tab-click", { name: f, index: y, disabled: u.disabled });
      }
    }), d = (u, y) => {
      const f = u.name || y;
      a("tab-remove", f), a("edit", f, "remove");
    }, v = () => {
      a("tab-add"), a("edit", "", "add");
    };
    return e({
      activeName: h(() => r.value)
    }), (u, y) => (i(), M("div", {
      class: I(["m-tabs", [`m-tabs--${t.type}`, `m-tabs--${t.tabPosition}`]])
    }, [
      C("div", It, [
        C("div", Pt, [
          (i(!0), M(ee, null, b(n.value, (f, S) => {
            var H;
            return i(), M("div", {
              key: f.name || S,
              class: I([
                "m-tabs__item",
                {
                  "m-tabs__item--active": r.value === (f.name || S),
                  "m-tabs__item--disabled": f.disabled,
                  "m-tabs__item--closable": f.closable
                }
              ]),
              onClick: (te) => l(f, S)
            }, [
              C("span", jt, [
                (H = f.$slots) != null && H.label ? m(u.$slots, `tab-${f.name || S}`, { key: 0 }, void 0, !0) : (i(), M("span", At, V(f.label), 1))
              ]),
              f.closable ? (i(), M("span", {
                key: 0,
                class: "m-tabs__item-close",
                onClick: me((te) => d(f, S), ["stop"])
              }, [
                O(P, {
                  name: "lucide-x",
                  size: 12
                })
              ], 8, zt)) : w("", !0)
            ], 10, Nt);
          }), 128)),
          t.addable || t.editable ? (i(), M("div", {
            key: 0,
            class: "m-tabs__item m-tabs__item--add",
            onClick: v
          }, [
            O(P, {
              name: "plus",
              size: 12
            })
          ])) : w("", !0)
        ])
      ]),
      C("div", Lt, [
        m(u.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}, Rt = /* @__PURE__ */ E(Vt, [["__scopeId", "data-v-23508d30"]]), Dt = /* @__PURE__ */ Object.assign({
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
    const e = t, o = W(), s = pe("tabsContext"), a = h(() => s ? s.activeName === (e.name || s.tabIndex) : !1);
    return de(() => {
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
    }), fe(() => {
      s && s.unregisterTab(e.name);
    }), (n, r) => _e((i(), M("div", {
      class: I(["m-tab-pane", {
        "m-tab-pane--active": a.value,
        "m-tab-pane--disabled": t.disabled
      }])
    }, [
      m(n.$slots, "default", {}, void 0, !0)
    ], 2)), [
      [be, a.value]
    ]);
  }
}), Gt = /* @__PURE__ */ E(Dt, [["__scopeId", "data-v-722bb248"]]);
function D(t) {
  t && t.classList && t.classList.add("mc-ui-override");
}
function Ft(t) {
  t && t.$el && D(t.$el);
}
function Ut() {
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
function qt(t = '[class*="el-"]') {
  typeof document != "undefined" && document.querySelectorAll(t).forEach((o) => {
    const s = o.closest(".mc-ui-override") || o.parentElement;
    s && !s.classList.contains("mc-ui-override") && s.classList.add("mc-ui-override");
  });
}
function Wt(t) {
  return A(T({}, t), {
    mounted() {
      D(this.$el), t.mounted && t.mounted.call(this);
    },
    updated() {
      D(this.$el), t.updated && t.updated.call(this);
    }
  });
}
const Zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addComponentOverride: Ft,
  addOverrideClass: D,
  applyGlobalOverride: Ut,
  createOverrideComponent: Wt,
  forceRefreshStyles: qt
}, Symbol.toStringTag, { value: "Module" })), Z = [P, De, Ge, Fe, Ue, Ze, He, Je, Qe, Xe, Ye, Ke, xe, et, tt, at, rt, ct, Mt, vt, Ct, kt, St, Ot, Rt, Gt], c = {};
function Ht(t) {
  const e = Z.map((o) => {
    if (o && o.name && typeof o.name == "string") {
      let s = o.name.toLowerCase();
      return {
        mradiogroup: "m-radio-group",
        mradiobutton: "m-radio-button",
        mformitem: "m-form-item",
        moptiongroup: "m-option-group",
        mtabs: "m-tabs",
        mtabpane: "m-tab-pane"
      }[s] || s.replace(/^m/, "m-");
    }
    return null;
  }).filter(Boolean);
  console.log("🔧 自定义组件列表:", e), Object.entries(q).forEach(([o, s]) => {
    if (s && s.name && typeof s.name == "string" && s.name.startsWith("El")) {
      const a = "m-" + s.name.slice(2).replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
      e.includes(a) ? console.log(`🎯 自定义组件覆盖: ${a} (使用自定义组件)`) : t._context.components[a] ? console.log(`⚠️  组件 ${a} 已存在，跳过注册`) : (t.component(a, s), console.log(`✅ 注册 Element Plus 组件: ${a}`));
      const n = "M" + s.name.slice(2);
      c[n] = s;
    }
  });
}
const Jt = (t) => {
  typeof window != "undefined" && Promise.resolve().then(() => Zt).then(({ applyGlobalOverride: e }) => {
    e();
  }), console.log("🚀 开始安装 @mc-markets/ui 组件库..."), Z.forEach((e) => {
    if (e && e.name && typeof e.name == "string") {
      let o = e.name.toLowerCase();
      o = {
        mradiogroup: "m-radio-group",
        mradiobutton: "m-radio-button",
        mformitem: "m-form-item",
        moptiongroup: "m-option-group",
        mtabs: "m-tabs",
        mtabpane: "m-tab-pane"
      }[o] || o.replace(/^m/, "m-"), t.component(o, e), console.log(`🎯 注册自定义组件: ${o} (${e.name})`);
    }
  }), Ht(t), console.log("✅ @mc-markets/ui 组件库安装完成!");
};
function hs(t) {
  const e = Object.keys(t._context.components || {}), o = Z.map((s) => {
    if (s && s.name && typeof s.name == "string") {
      let a = s.name.toLowerCase();
      return {
        mradiogroup: "m-radio-group",
        mradiobutton: "m-radio-button",
        mformitem: "m-form-item",
        moptiongroup: "m-option-group",
        mtabs: "m-tabs",
        mtabpane: "m-tab-pane"
      }[a] || a.replace(/^m/, "m-");
    }
    return null;
  }).filter(Boolean);
  return console.log("📊 组件注册状态报告:"), console.log("已注册的组件:", e.filter((s) => s.startsWith("m-"))), console.log("自定义组件:", o), {
    registered: e,
    custom: o,
    conflicts: e.filter(
      (s) => s.startsWith("m-") && o.includes(s)
    )
  };
}
const ys = { install: Jt }, Cs = q.ElMessage, ks = q.ElMessageBox, Ss = T({}, c), Ts = c.MButtonGroup, Bs = c.MBreadcrumb, ws = c.MBreadcrumbItem, Es = c.MCarousel, Os = c.MCarouselItem, Is = c.MCascader, Ps = c.MCascaderPanel, Ns = c.MCheckTag, js = c.MCalendar, As = c.MTimePicker, zs = c.MDateTimePicker, Ls = c.MColorPicker, Vs = c.MTransfer, Rs = c.MTree, Ds = c.MTreeSelect, Gs = c.MUpload, Fs = c.MImage, Us = c.MImageViewer, qs = c.MBacktop, Ws = c.MInfiniteScroll, Zs = c.MAffix, Hs = c.MScrollbar, Js = c.MResult, Qs = c.MSkeleton, Xs = c.MLoading, Ys = c.MSpinner, Ks = c.MProgress, xs = c.MBadge, eo = c.MAvatar, to = c.MImagePreview, so = c.MTeleport, oo = c.MConfigProvider;
export {
  Zs as MAffix,
  at as MAlert,
  eo as MAvatar,
  qs as MBacktop,
  xs as MBadge,
  Ot as MBanner,
  Bs as MBreadcrumb,
  ws as MBreadcrumbItem,
  De as MButton,
  Ts as MButtonGroup,
  js as MCalendar,
  Es as MCarousel,
  Os as MCarouselItem,
  Is as MCascader,
  Ps as MCascaderPanel,
  Ns as MCheckTag,
  Ls as MColorPicker,
  oo as MConfigProvider,
  vt as MDatePicker,
  zs as MDateTimePicker,
  rt as MDialog,
  Ct as MEmpty,
  Fe as MForm,
  Ue as MFormItem,
  P as MIcon,
  Fs as MImage,
  to as MImagePreview,
  Us as MImageViewer,
  Ws as MInfiniteScroll,
  Ge as MInput,
  Xs as MLoading,
  Cs as MMessage,
  ks as MMessageBox,
  Mt as MNotifiMessage,
  ct as MNotification,
  Xe as MPagination,
  Ks as MProgress,
  Ye as MRadio,
  xe as MRadioButton,
  Ke as MRadioGroup,
  Js as MResult,
  Hs as MScrollbar,
  He as MSelect,
  Qs as MSkeleton,
  Ys as MSpinner,
  et as MSwitch,
  Gt as MTabPane,
  kt as MTable,
  St as MTableColumn,
  Rt as MTabs,
  tt as MTag,
  so as MTeleport,
  As as MTimePicker,
  Ze as MTooltip,
  Vs as MTransfer,
  Rs as MTree,
  Ds as MTreeSelect,
  Gs as MUpload,
  vs as NotifiMessage,
  Ft as addComponentOverride,
  D as addOverrideClass,
  Ut as applyGlobalOverride,
  hs as checkComponentRegistration,
  Wt as createOverrideComponent,
  ys as default,
  qt as forceRefreshStyles,
  Ss as mComponents
};
//# sourceMappingURL=index.mjs.map
