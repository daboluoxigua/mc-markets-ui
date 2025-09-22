var ie = Object.defineProperty, le = Object.defineProperties;
var ce = Object.getOwnPropertyDescriptors;
var R = Object.getOwnPropertySymbols;
var X = Object.prototype.hasOwnProperty, Y = Object.prototype.propertyIsEnumerable;
var Q = (e, t, o) => t in e ? ie(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, k = (e, t) => {
  for (var o in t || (t = {}))
    X.call(t, o) && Q(e, o, t[o]);
  if (R)
    for (var o of R(t))
      Y.call(t, o) && Q(e, o, t[o]);
  return e;
}, I = (e, t) => le(e, ce(t));
var F = (e, t) => {
  var o = {};
  for (var s in e)
    X.call(e, s) && t.indexOf(s) < 0 && (o[s] = e[s]);
  if (e != null && R)
    for (var s of R(e))
      t.indexOf(s) < 0 && Y.call(e, s) && (o[s] = e[s]);
  return o;
};
var D = (e, t, o) => new Promise((s, a) => {
  var n = (g) => {
    try {
      i(o.next(g));
    } catch ($) {
      a($);
    }
  }, r = (g) => {
    try {
      i(o.throw(g));
    } catch ($) {
      a($);
    }
  }, i = (g) => g.done ? s(g.value) : Promise.resolve(g.value).then(n, r);
  i((o = o.apply(e, t)).next());
});
import * as ee from "element-plus";
import { computed as v, createElementBlock as d, openBlock as l, mergeProps as y, renderSlot as m, createBlock as f, createSlots as h, renderList as _, withCtx as p, ref as P, useAttrs as z, unref as w, normalizeProps as q, guardReactiveProps as H, createElementVNode as M, mergeModels as K, useModel as ue, createVNode as N, Teleport as te, TransitionGroup as se, Fragment as W, normalizeClass as j, createCommentVNode as S, resolveDynamicComponent as oe, toDisplayString as A, useSlots as x, watch as G, normalizeStyle as me, createTextVNode as de, provide as pe, withModifiers as fe, inject as _e, onMounted as ge, onUnmounted as be, withDirectives as he, vShow as ye } from "vue";
import { ElButton as $e, ElInput as ve, ElForm as Me, ElFormItem as Ce, ElTooltip as ke, ElSelect as Se, ElOption as we, ElOptionGroup as Te, ElPagination as Ie, ElRadio as Be, ElRadioGroup as Oe, ElRadioButton as Ee, ElSwitch as Ne, ElTag as Pe, ElAlert as je, ElDialog as Ae, ElNotification as Le, ElDatePicker as ze, ElEmpty as Ve, ElTable as Re, ElTableColumn as Fe } from "element-plus/es";
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
const B = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of t)
    o[s] = a;
  return o;
}, De = /* @__PURE__ */ Object.assign({
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
  setup(e, { emit: t }) {
    const o = e, s = t, a = v(() => {
      const i = ["iconfont"];
      return o.name && i.push(`${o.prefix}-${o.name}`), o.spin && i.push("icon-spin"), o.pulse && i.push("icon-pulse"), o.flip && i.push(`icon-flip-${o.flip}`), i;
    }), n = v(() => {
      const i = {};
      return o.size && (typeof o.size == "number" ? i.fontSize = `${o.size}px` : i.fontSize = o.size), o.color && (i.color = o.color), o.rotate !== 0 && (i.transform = `rotate(${o.rotate}deg)`), i;
    }), r = (i) => {
      s("click", i);
    };
    return (i, g) => (l(), d("i", y({
      class: a.value,
      style: n.value
    }, i.$attrs, { onClick: r }), [
      m(i.$slots, "default", {}, void 0, !0)
    ], 16));
  }
}), L = /* @__PURE__ */ B(De, [["__scopeId", "data-v-90f84c9e"]]), Ge = /* @__PURE__ */ Object.assign({
  name: "MButton"
}, {
  __name: "Button",
  setup(e) {
    return (t, o) => {
      const s = $e;
      return l(), f(s, y(t.$attrs, { class: "m-button" }), h({ _: 2 }, [
        _(t.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(t.$slots, n, {}, void 0, !0)
          ])
        }))
      ]), 1040);
    };
  }
}), Ue = /* @__PURE__ */ B(Ge, [["__scopeId", "data-v-9c99add1"]]), qe = /* @__PURE__ */ Object.assign({
  name: "MInput"
}, {
  __name: "Input",
  setup(e) {
    return (t, o) => {
      const s = ve;
      return l(), f(s, y(t.$attrs, {
        class: ["m-input", { solid: t.$attrs.styleType === "solid" }]
      }), h({ _: 2 }, [
        _(t.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(t.$slots, n)
          ])
        }))
      ]), 1040, ["class"]);
    };
  }
}), He = /* @__PURE__ */ Object.assign({
  name: "MForm"
}, {
  __name: "Form",
  setup(e, { expose: t }) {
    const o = P();
    return z(), t({
      validate: (s) => {
        var a;
        return (a = o.value) == null ? void 0 : a.validate(s);
      },
      validateField: (s, a) => {
        var n;
        return (n = o.value) == null ? void 0 : n.validateField(s, a);
      },
      resetFields: () => {
        var s;
        return (s = o.value) == null ? void 0 : s.resetFields();
      },
      scrollToField: (s) => {
        var a;
        return (a = o.value) == null ? void 0 : a.scrollToField(s);
      },
      clearValidate: (s) => {
        var a;
        return (a = o.value) == null ? void 0 : a.clearValidate(s);
      }
    }), (s, a) => {
      const n = Me;
      return l(), f(n, y({
        ref_key: "formRef",
        ref: o
      }, s.$attrs, { class: "m-form" }), h({ _: 2 }, [
        _(s.$slots, (r, i) => ({
          name: i,
          fn: p(() => [
            m(s.$slots, i)
          ])
        }))
      ]), 1040);
    };
  }
}), We = /* @__PURE__ */ Object.assign({
  name: "MFormItem"
}, {
  __name: "FormItem",
  setup(e) {
    return (t, o) => {
      const s = Ce;
      return l(), f(s, y(t.$attrs, { class: "m-form-item" }), h({ _: 2 }, [
        _(t.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(t.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), xe = (...e) => e.filter(Boolean).join(" "), Ze = (e, ...t) => {
  const o = k({}, e);
  return t.forEach((s) => {
    delete o[s];
  }), o;
};
function V(e, t = "popperClass") {
  const o = z(), s = v(() => Ze(o, t)), a = v(() => xe(e, o[t]));
  return {
    mergedAttrs: s,
    className: a
  };
}
const Je = /* @__PURE__ */ Object.assign({
  name: "MTooltip"
}, {
  __name: "Tooltip",
  props: {
    popperClass: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const { mergedAttrs: t, className: o } = V("mc-tooltip-popper");
    return (s, a) => {
      const n = ke;
      return l(), f(n, y(w(t), { "popper-class": w(o) }), h({ _: 2 }, [
        _(s.$slots, (r, i) => ({
          name: i,
          fn: p(() => [
            m(s.$slots, i)
          ])
        }))
      ]), 1040, ["popper-class"]);
    };
  }
}), Qe = /* @__PURE__ */ Object.assign({
  name: "MSelect"
}, {
  __name: "Select",
  setup(e) {
    return (t, o) => {
      const s = Se;
      return l(), f(s, y({
        class: ["m-select", { solid: t.$attrs.styleType === "solid" }],
        "show-arrow": !1
      }, t.$attrs), h({ _: 2 }, [
        _(t.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(t.$slots, n)
          ])
        }))
      ]), 1040, ["class"]);
    };
  }
}), Xe = /* @__PURE__ */ Object.assign({
  name: "MOption"
}, {
  __name: "Option",
  setup(e) {
    return (t, o) => {
      const s = we;
      return l(), f(s, q(H(t.$attrs)), h({ _: 2 }, [
        _(t.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(t.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), Ye = /* @__PURE__ */ Object.assign({
  name: "MOptionGroup"
}, {
  __name: "OptionGroup",
  setup(e) {
    return (t, o) => {
      const s = Te;
      return l(), f(s, q(H(t.$attrs)), h({ _: 2 }, [
        _(t.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(t.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), Ke = /* @__PURE__ */ Object.assign({
  name: "MPagination"
}, {
  __name: "Pagination",
  setup(e) {
    return (t, o) => {
      const s = Ie;
      return l(), f(s, y(t.$attrs, { class: "m-pagination" }), h({ _: 2 }, [
        _(t.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(t.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), et = /* @__PURE__ */ Object.assign({
  name: "MRadio"
}, {
  __name: "Radio",
  props: {
    popperClass: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const { mergedAttrs: t } = V("mc-radio-popper");
    return (o, s) => {
      const a = Be;
      return l(), f(a, y(w(t), { class: "m-radio" }), h({ _: 2 }, [
        _(o.$slots, (n, r) => ({
          name: r,
          fn: p(() => [
            m(o.$slots, r)
          ])
        }))
      ]), 1040);
    };
  }
}), tt = /* @__PURE__ */ Object.assign({
  name: "MRadioGroup"
}, {
  __name: "RadioGroup",
  props: {
    popperClass: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = z(), o = v(() => {
      const a = "mc-radio-group-popper";
      return t.popperClass ? `${a} ${t.popperClass}`.trim() : a;
    }), s = v(() => {
      const r = t, { popperClass: a } = r;
      return F(r, ["popperClass"]);
    });
    return (a, n) => {
      const r = Oe;
      return l(), f(r, y(s.value, {
        "popper-class": o.value,
        class: "m-radio-group"
      }), h({ _: 2 }, [
        _(a.$slots, (i, g) => ({
          name: g,
          fn: p(() => [
            m(a.$slots, g)
          ])
        }))
      ]), 1040, ["popper-class"]);
    };
  }
}), st = /* @__PURE__ */ Object.assign({
  name: "MRadioButton"
}, {
  __name: "RadioButton",
  props: {
    popperClass: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const { mergedAttrs: t } = V("mc-radio-button-popper");
    return (o, s) => {
      const a = Ee;
      return l(), f(a, y(w(t), { class: "m-radio-button" }), h({ _: 2 }, [
        _(o.$slots, (n, r) => ({
          name: r,
          fn: p(() => [
            m(o.$slots, r)
          ])
        }))
      ]), 1040);
    };
  }
}), ot = /* @__PURE__ */ Object.assign({
  name: "MSwitch"
}, {
  __name: "Switch",
  props: {
    popperClass: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const { mergedAttrs: t, className: o } = V("mc-switch-popper");
    return (s, a) => {
      const n = Ne;
      return l(), f(n, y(w(t), {
        "popper-class": w(o),
        class: "m-switch"
      }), h({ _: 2 }, [
        _(s.$slots, (r, i) => ({
          name: i,
          fn: p(() => [
            m(s.$slots, i)
          ])
        }))
      ]), 1040, ["popper-class"]);
    };
  }
}), nt = /* @__PURE__ */ Object.assign({
  name: "MTag"
}, {
  __name: "Tag",
  setup(e) {
    return (t, o) => {
      const s = Pe;
      return l(), f(s, y(t.$attrs, { class: "m-tag" }), h({ _: 2 }, [
        _(t.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(t.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), at = ["src", "alt"], rt = ["success", "warning", "error"], it = {
  name: "MAlert"
}, lt = /* @__PURE__ */ Object.assign(it, {
  props: {
    type: {
      type: String,
      default: "success",
      validator: (e) => rt.includes(e)
    },
    useCustomIcon: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const t = e, o = z(), s = v(() => {
      const i = o, { useCustomIcon: n } = i, r = F(i, ["useCustomIcon"]);
      return I(k({}, r), {
        type: t.type
        // 确保 type 属性正确传递给 el-alert
      });
    }), a = v(() => t.useCustomIcon ? `https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/mc-ui/alert/alert-${t.type}.png` : null);
    return (n, r) => {
      const i = je;
      return l(), f(i, y(s.value, { class: "mc-alert" }), h({ _: 2 }, [
        a.value ? {
          name: "icon",
          fn: p(() => [
            M("img", {
              src: a.value,
              alt: `${e.type} icon`,
              class: "mc-alert-icon"
            }, null, 8, at)
          ]),
          key: "0"
        } : void 0,
        _(n.$slots, (g, $) => ({
          name: $,
          fn: p(() => [
            m(n.$slots, $)
          ])
        }))
      ]), 1040);
    };
  }
}), ct = /* @__PURE__ */ Object.assign({
  name: "MDialog"
}, {
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
  setup(e, { emit: t }) {
    const o = ue(e, "modelValue");
    return (s, a) => {
      const n = Ae;
      return l(), d("div", null, [
        N(n, y({
          modelValue: o.value,
          "onUpdate:modelValue": a[0] || (a[0] = (r) => o.value = r),
          width: e.width,
          title: e.title,
          draggable: e.draggable,
          "close-on-click-modal": e.closeOnClickModal,
          center: e.center
        }, s.$attrs, {
          class: "m-dialog",
          "header-class": "m-header"
        }), h({
          default: p(() => [
            m(s.$slots, "default")
          ]),
          _: 2
        }, [
          s.$slots.header ? {
            name: "header",
            fn: p(({ close: r, titleId: i, titleClass: g }) => [
              m(s.$slots, "header", q(H({ close: r, titleId: i, titleClass: g })))
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
}), ut = {
  name: "MNotification"
};
function mt(e, t, o, s, a, n) {
  const r = Le;
  return l(), f(r, y(e.$attrs, { class: "mc-notification" }), h({ _: 2 }, [
    _(e.$slots, (i, g) => ({
      name: g,
      fn: p(() => [
        m(e.$slots, g)
      ])
    }))
  ]), 1040);
}
const dt = /* @__PURE__ */ B(ut, [["render", mt]]), T = P([]);
let pt = 0;
const ft = {
  // 默认配置
  defaultOptions: {
    message: "",
    type: "success",
    plain: !1,
    customIcon: "",
    dangerouslyUseHTMLString: !1,
    customClass: "",
    duration: 3e3,
    showClose: !1,
    showIcon: !0,
    onClose: null,
    offset: 16,
    placement: "top",
    appendTo: "body",
    grouping: !1,
    repeatNum: 1
  },
  // 显示消息
  show(e = {}) {
    typeof e == "string" && (e = { message: e });
    const t = I(k(k({}, this.defaultOptions), e), {
      id: ++pt
    });
    if (t.grouping) {
      const o = T.value.findIndex(
        (s) => s.message === t.message && s.type === t.type && s.grouping
      );
      if (o > -1)
        return T.value[o].repeatNum++, { close: () => this.close(T.value[o].id) };
    }
    return T.value.push(t), t.duration > 0 && setTimeout(() => {
      this.close(t.id);
    }, t.duration), {
      close: () => this.close(t.id)
    };
  },
  // 关闭指定消息
  close(e) {
    const t = T.value.findIndex((o) => o.id === e);
    if (t > -1) {
      const o = T.value[t];
      o.onClose && o.onClose(o), T.value.splice(t, 1);
    }
  },
  // 关闭所有消息
  closeAll() {
    T.value = [];
  },
  // 便捷方法
  success(e = {}) {
    return typeof e == "string" && (e = { message: e }), this.show(I(k({}, e), { type: "success" }));
  },
  warning(e = {}) {
    return typeof e == "string" && (e = { message: e }), this.show(I(k({}, e), { type: "warning" }));
  },
  error(e = {}) {
    return typeof e == "string" && (e = { message: e }), this.show(I(k({}, e), { type: "error" }));
  }
}, _t = (e) => {
  ft.close(e);
}, gt = {
  name: "MMessage",
  setup() {
    return {
      messages: T,
      closeMessage: _t
    };
  }
}, bt = {
  key: 0,
  class: "message-icon"
}, ht = ["src"], yt = {
  key: 1,
  src: "https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/mc-ui/alert/alert-success.png",
  alt: "success icon",
  class: "message-icon-img"
}, $t = {
  key: 2,
  src: "https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/mc-ui/alert/alert-warning.png",
  alt: "warning icon",
  class: "message-icon-img"
}, vt = {
  key: 3,
  src: "https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/mc-ui/alert/alert-error.png",
  alt: "error icon",
  class: "message-icon-img"
}, Mt = { class: "message-content" }, Ct = ["innerHTML"], kt = { key: 2 }, St = {
  key: 3,
  class: "message-repeat"
}, wt = ["onClick"];
function Tt(e, t, o, s, a, n) {
  return l(), f(te, { to: "body" }, [
    N(se, {
      name: "message",
      tag: "div",
      class: "message-container"
    }, {
      default: p(() => [
        (l(!0), d(W, null, _(s.messages, (r) => (l(), d("div", {
          key: r.id,
          class: j([
            "custom-message",
            `message-${r.type}`,
            `message-${r.placement}`,
            { "message-plain": r.plain }
          ])
        }, [
          r.showIcon ? (l(), d("div", bt, [
            r.customIcon ? (l(), d("img", {
              key: 0,
              src: r.customIcon,
              alt: "custom icon",
              class: "message-icon-img"
            }, null, 8, ht)) : r.type === "success" ? (l(), d("img", yt)) : r.type === "warning" ? (l(), d("img", $t)) : r.type === "error" ? (l(), d("img", vt)) : S("", !0)
          ])) : S("", !0),
          M("div", Mt, [
            typeof r.message == "function" ? (l(), f(oe(r.message), { key: 0 })) : r.dangerouslyUseHTMLString ? (l(), d("div", {
              key: 1,
              innerHTML: r.message
            }, null, 8, Ct)) : (l(), d("span", kt, A(r.message), 1)),
            r.repeatNum > 1 ? (l(), d("span", St, A(r.repeatNum), 1)) : S("", !0)
          ]),
          r.showClose ? (l(), d("button", {
            key: 1,
            class: "message-close",
            onClick: (i) => s.closeMessage(r.id)
          }, " × ", 8, wt)) : S("", !0)
        ], 2))), 128))
      ]),
      _: 1
    })
  ]);
}
const ne = /* @__PURE__ */ B(gt, [["render", Tt]]), E = P([]);
let It = 0;
const Fs = {
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
  show(e = {}) {
    const t = I(k(k({}, this.defaultOptions), e), {
      id: ++It
    });
    return E.value.push(t), t.duration > 0 && setTimeout(() => {
      this.close(t.id);
    }, t.duration), {
      close: () => this.close(t.id)
    };
  },
  // 关闭指定通知
  close(e) {
    const t = E.value.findIndex((o) => o.id === e);
    t > -1 && E.value.splice(t, 1);
  },
  // 关闭所有通知
  closeAll() {
    E.value = [];
  },
  // 便捷方法
  success(e = {}) {
    return this.show(e);
  },
  warning(e = {}) {
    return this.show(e);
  },
  error(e = {}) {
    return this.show(e);
  }
}, Bt = (e) => {
  const t = E.value.findIndex((o) => o.id === e);
  t > -1 && E.value.splice(t, 1);
}, Ot = {
  name: "MNotifiMessage",
  setup() {
    return {
      notifications: E,
      closeNotification: Bt
    };
  }
}, Et = { class: "notification-content" }, Nt = { class: "notification-title" }, Pt = { class: "notification-message" }, jt = {
  key: 0,
  class: "notification-action"
}, At = ["onClick"];
function Lt(e, t, o, s, a, n) {
  return l(), f(te, { to: "body" }, [
    N(se, {
      name: "notification",
      tag: "div",
      class: "notification-container"
    }, {
      default: p(() => [
        (l(!0), d(W, null, _(s.notifications, (r) => (l(), d("div", {
          key: r.id,
          class: j([
            "custom-notification",
            `notification-${r.position}`
          ])
        }, [
          t[0] || (t[0] = M("div", { class: "notification-icon" }, [
            M("img", {
              src: "https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/MCImages/userCenter/icon-quota-tip.png",
              alt: "notification icon"
            })
          ], -1)),
          M("div", Et, [
            M("div", Nt, A(r.title), 1),
            M("div", Pt, A(r.message), 1),
            r.slotContent ? (l(), d("div", jt, [
              (l(), f(oe(r.slotContent)))
            ])) : S("", !0)
          ]),
          r.showClose ? (l(), d("button", {
            key: 0,
            class: "notification-close",
            onClick: (i) => s.closeNotification(r.id)
          }, " × ", 8, At)) : S("", !0)
        ], 2))), 128))
      ]),
      _: 1
    })
  ]);
}
const ae = /* @__PURE__ */ B(Ot, [["render", Lt]]), zt = /* @__PURE__ */ Object.assign({
  name: "MDatePicker"
}, {
  __name: "DatePicker",
  props: {
    popperClass: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const { mergedAttrs: t, className: o } = V(
      "mc-datepicker-popper",
      "popperClass"
    );
    return (s, a) => {
      const n = ze;
      return l(), f(n, y(w(t), { "popper-class": w(o) }), h({ _: 2 }, [
        _(s.$slots, (r, i) => ({
          name: i,
          fn: p(() => [
            m(s.$slots, i)
          ])
        }))
      ]), 1040, ["popper-class"]);
    };
  }
}), Vt = [
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
], Rt = {
  name: "MEmpty"
}, Ft = /* @__PURE__ */ Object.assign(Rt, {
  props: {
    image: {
      type: String,
      default: "orders",
      validator: (e) => e.includes("/") || e.includes("http") ? !0 : Vt.includes(e)
    }
  },
  setup(e) {
    const t = e, o = z(), s = v(() => {
      const i = o, { image: n } = i;
      return F(i, ["image"]);
    }), a = v(() => {
      const { image: n } = t;
      return n.includes("/") || n.includes("http") ? n : `/images/empty/${n}.png`;
    });
    return (n, r) => {
      const i = Ve;
      return l(), f(i, y(s.value, { image: a.value }), h({ _: 2 }, [
        _(n.$slots, (g, $) => ({
          name: $,
          fn: p(() => [
            m(n.$slots, $)
          ])
        }))
      ]), 1040, ["image"]);
    };
  }
}), Dt = /* @__PURE__ */ Object.assign({
  name: "MTable"
}, {
  __name: "Table",
  setup(e) {
    return (t, o) => {
      const s = Re;
      return l(), f(s, q(H(t.$attrs)), h({ _: 2 }, [
        _(t.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(t.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), Gt = /* @__PURE__ */ Object.assign({
  name: "MTableColumn"
}, {
  __name: "TableColumn",
  setup(e) {
    return (t, o) => {
      const s = Fe;
      return l(), f(s, y(t.$attrs, { class: "m-table-column" }), h({ _: 2 }, [
        _(t.$slots, (a, n) => ({
          name: n,
          fn: p(() => [
            m(t.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), Ut = { class: "m-banner__content" }, qt = {
  key: 0,
  class: "m-banner__icon"
}, Ht = { class: "m-banner__text" }, Wt = /* @__PURE__ */ Object.assign({
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
      validator: (e) => ["info", "success", "warning", "error"].includes(e)
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
  setup(e, { expose: t, emit: o }) {
    const s = x(), a = e, n = o, r = P(a.visible);
    G(() => a.visible, (u) => {
      r.value = u;
    });
    const i = v(() => {
      const u = {};
      return a.backgroundColor && (u.backgroundColor = a.backgroundColor), a.textColor && (u.color = a.textColor), a.borderColor && (u.borderColor = a.borderColor), u;
    }), g = {
      info: "info",
      success: "check-circle",
      warning: "warning",
      error: "close-circle"
    };
    v(() => a.icon || g[a.type]);
    const $ = () => {
      r.value = !1, n("update:visible", !1), n("close");
    };
    return G(r, (u) => {
      u && a.duration > 0 && setTimeout(() => {
        $();
      }, a.duration);
    }), t({
      close: $
    }), (u, C) => e.visible ? (l(), d("div", {
      key: 0,
      class: j(["m-banner", [
        `m-banner--${e.type}`,
        {
          "m-banner--closable": e.closable,
          "m-banner--with-icon": e.icon || w(s).icon
        }
      ]]),
      style: me(i.value)
    }, [
      M("div", Ut, [
        e.icon || w(s).icon ? (l(), d("div", qt, [
          m(u.$slots, "icon", {}, () => [
            N(L, {
              name: e.icon,
              size: e.iconSize
            }, null, 8, ["name", "size"])
          ], !0)
        ])) : S("", !0),
        M("div", Ht, [
          m(u.$slots, "default", {}, () => [
            de(A(e.content), 1)
          ], !0)
        ]),
        e.closable ? (l(), d("div", {
          key: 1,
          class: "m-banner__close",
          onClick: $
        }, [
          N(L, {
            name: "lucide-x",
            size: e.closeIconSize
          }, null, 8, ["size"])
        ])) : S("", !0)
      ])
    ], 6)) : S("", !0);
  }
}), xt = /* @__PURE__ */ B(Wt, [["__scopeId", "data-v-00c80323"]]), Zt = { class: "m-tabs__header" }, Jt = { class: "m-tabs__nav" }, Qt = ["onClick"], Xt = { class: "m-tabs__item-text" }, Yt = { key: 1 }, Kt = ["onClick"], es = { class: "m-tabs__content" }, ts = {
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
      validator: (e) => ["", "card", "border-card"].includes(e)
    },
    // 标签位置
    tabPosition: {
      type: String,
      default: "top",
      validator: (e) => ["top", "right", "bottom", "left"].includes(e)
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
  setup(e, { expose: t, emit: o }) {
    const s = e, a = o;
    x();
    const n = P([]), r = P(s.modelValue);
    G(() => s.modelValue, (u) => {
      r.value = u;
    }), G(r, (u) => {
      a("update:modelValue", u), a("tab-change", u);
    }), pe("tabsContext", {
      registerTab: (u) => {
        const C = n.value.findIndex((b) => b.name === u.name);
        C >= 0 ? n.value[C] = u : n.value.push(u), !r.value && n.value.length > 0 && (r.value = n.value[0].name || 0);
      },
      unregisterTab: (u) => {
        const C = n.value.findIndex((b) => b.name === u);
        C >= 0 && n.value.splice(C, 1);
      }
    });
    const i = (u, C) => D(this, null, function* () {
      if (u.disabled) return;
      const b = u.name || C;
      if (r.value !== b) {
        if (s.beforeLeave)
          try {
            if ((yield s.beforeLeave(r.value, b)) === !1) return;
          } catch (O) {
            return;
          }
        r.value = b, a("tab-click", { name: b, index: C, disabled: u.disabled });
      }
    }), g = (u, C) => {
      const b = u.name || C;
      a("tab-remove", b), a("edit", b, "remove");
    }, $ = () => {
      a("tab-add"), a("edit", "", "add");
    };
    return t({
      activeName: v(() => r.value)
    }), (u, C) => (l(), d("div", {
      class: j(["m-tabs", [`m-tabs--${e.type}`, `m-tabs--${e.tabPosition}`]])
    }, [
      M("div", Zt, [
        M("div", Jt, [
          (l(!0), d(W, null, _(n.value, (b, O) => {
            var J;
            return l(), d("div", {
              key: b.name || O,
              class: j([
                "m-tabs__item",
                {
                  "m-tabs__item--active": r.value === (b.name || O),
                  "m-tabs__item--disabled": b.disabled,
                  "m-tabs__item--closable": b.closable
                }
              ]),
              onClick: (re) => i(b, O)
            }, [
              M("span", Xt, [
                (J = b.$slots) != null && J.label ? m(u.$slots, `tab-${b.name || O}`, { key: 0 }, void 0, !0) : (l(), d("span", Yt, A(b.label), 1))
              ]),
              b.closable ? (l(), d("span", {
                key: 0,
                class: "m-tabs__item-close",
                onClick: fe((re) => g(b, O), ["stop"])
              }, [
                N(L, {
                  name: "lucide-x",
                  size: 12
                })
              ], 8, Kt)) : S("", !0)
            ], 10, Qt);
          }), 128)),
          e.addable || e.editable ? (l(), d("div", {
            key: 0,
            class: "m-tabs__item m-tabs__item--add",
            onClick: $
          }, [
            N(L, {
              name: "plus",
              size: 12
            })
          ])) : S("", !0)
        ])
      ]),
      M("div", es, [
        m(u.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}, ss = /* @__PURE__ */ B(ts, [["__scopeId", "data-v-23508d30"]]), os = /* @__PURE__ */ Object.assign({
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
  setup(e) {
    const t = e, o = x(), s = _e("tabsContext"), a = v(() => s ? s.activeName === (t.name || s.tabIndex) : !1);
    return ge(() => {
      if (s) {
        const n = {
          name: t.name,
          label: t.label,
          disabled: t.disabled,
          closable: t.closable,
          $slots: o
        };
        s.registerTab(n);
      }
    }), be(() => {
      s && s.unregisterTab(t.name);
    }), (n, r) => he((l(), d("div", {
      class: j(["m-tab-pane", {
        "m-tab-pane--active": a.value,
        "m-tab-pane--disabled": e.disabled
      }])
    }, [
      m(n.$slots, "default", {}, void 0, !0)
    ], 2)), [
      [ye, a.value]
    ]);
  }
}), ns = /* @__PURE__ */ B(os, [["__scopeId", "data-v-722bb248"]]);
function U(e) {
  e && e.classList && e.classList.add("mc-ui-override");
}
function as(e) {
  e && e.$el && U(e.$el);
}
function rs() {
  typeof document != "undefined" && (document.body.classList.add("mc-ui-override"), new MutationObserver((t) => {
    t.forEach((o) => {
      o.addedNodes.forEach((s) => {
        if (s.nodeType === 1 && s.classList) {
          if (s.className && typeof s.className == "string" && s.className.includes("el-")) {
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
function is(e = '[class*="el-"]') {
  typeof document != "undefined" && document.querySelectorAll(e).forEach((o) => {
    const s = o.closest(".mc-ui-override") || o.parentElement;
    s && !s.classList.contains("mc-ui-override") && s.classList.add("mc-ui-override");
  });
}
function ls(e) {
  return I(k({}, e), {
    mounted() {
      U(this.$el), e.mounted && e.mounted.call(this);
    },
    updated() {
      U(this.$el), e.updated && e.updated.call(this);
    }
  });
}
const cs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addComponentOverride: as,
  addOverrideClass: U,
  applyGlobalOverride: rs,
  createOverrideComponent: ls,
  forceRefreshStyles: is
}, Symbol.toStringTag, { value: "Module" })), Z = [L, Ue, qe, He, We, Je, Qe, Xe, Ye, Ke, et, tt, st, ot, nt, lt, ct, dt, ne, ae, zt, Ft, Dt, Gt, xt, ss, ns], us = [
  { id: "global-message-container", component: ne },
  { id: "global-notification-container", component: ae }
];
function ms(o) {
  return D(this, arguments, function* ({ id: e, component: t }) {
    try {
      if (document.getElementById(e)) return;
      const { createApp: s, h: a } = yield import("vue"), n = document.createElement("div");
      n.id = e, document.body.appendChild(n), s({
        render: () => a(t)
      }).mount(`#${e}`);
    } catch (s) {
      console.warn(`Failed to create global component ${e}:`, s);
    }
  });
}
function ds() {
  return D(this, null, function* () {
    const e = us.map(ms);
    yield Promise.all(e);
  });
}
const c = {};
function ps(e) {
  const t = Z.map((o) => {
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
  Object.entries(ee).forEach(([o, s]) => {
    if (s && s.name && typeof s.name == "string" && s.name.startsWith("El")) {
      const a = "m-" + s.name.slice(2).replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
      t.includes(a) || e._context.components[a] || e.component(a, s);
      const n = "M" + s.name.slice(2);
      c[n] = s;
    }
  });
}
const fs = (e) => {
  typeof window != "undefined" && Promise.resolve().then(() => cs).then(({ applyGlobalOverride: t }) => {
    t();
  }), console.log("🚀 开始安装 @mc-markets/ui 组件库..."), Z.forEach((t) => {
    if (t && t.name && typeof t.name == "string") {
      let o = t.name.toLowerCase();
      o = {
        mradiogroup: "m-radio-group",
        mradiobutton: "m-radio-button",
        mformitem: "m-form-item",
        moptiongroup: "m-option-group",
        mtabs: "m-tabs",
        mtabpane: "m-tab-pane"
      }[o] || o.replace(/^m/, "m-"), e.component(o, t);
    }
  }), ps(e), typeof window != "undefined" && ds();
};
function Ds(e) {
  const t = Object.keys(e._context.components || {}), o = Z.map((s) => {
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
  return console.log("📊 组件注册状态报告:"), console.log("已注册的组件:", t.filter((s) => s.startsWith("m-"))), console.log("自定义组件:", o), {
    registered: t,
    custom: o,
    conflicts: t.filter(
      (s) => s.startsWith("m-") && o.includes(s)
    )
  };
}
const Gs = { install: fs }, Us = ee.ElMessageBox, qs = k({}, c), Hs = c.MButtonGroup, Ws = c.MBreadcrumb, xs = c.MBreadcrumbItem, Zs = c.MCarousel, Js = c.MCarouselItem, Qs = c.MCascader, Xs = c.MCascaderPanel, Ys = c.MCheckTag, Ks = c.MCalendar, eo = c.MTimePicker, to = c.MDateTimePicker, so = c.MColorPicker, oo = c.MTransfer, no = c.MTree, ao = c.MTreeSelect, ro = c.MUpload, io = c.MImage, lo = c.MImageViewer, co = c.MBacktop, uo = c.MInfiniteScroll, mo = c.MAffix, po = c.MScrollbar, fo = c.MResult, _o = c.MSkeleton, go = c.MLoading, bo = c.MSpinner, ho = c.MProgress, yo = c.MBadge, $o = c.MAvatar, vo = c.MImagePreview, Mo = c.MTeleport, Co = c.MConfigProvider;
export {
  mo as MAffix,
  lt as MAlert,
  $o as MAvatar,
  co as MBacktop,
  yo as MBadge,
  xt as MBanner,
  Ws as MBreadcrumb,
  xs as MBreadcrumbItem,
  Ue as MButton,
  Hs as MButtonGroup,
  Ks as MCalendar,
  Zs as MCarousel,
  Js as MCarouselItem,
  Qs as MCascader,
  Xs as MCascaderPanel,
  Ys as MCheckTag,
  so as MColorPicker,
  Co as MConfigProvider,
  zt as MDatePicker,
  to as MDateTimePicker,
  ct as MDialog,
  Ft as MEmpty,
  He as MForm,
  We as MFormItem,
  L as MIcon,
  io as MImage,
  vo as MImagePreview,
  lo as MImageViewer,
  uo as MInfiniteScroll,
  qe as MInput,
  go as MLoading,
  ne as MMessage,
  Us as MMessageBox,
  ae as MNotifiMessage,
  dt as MNotification,
  Ke as MPagination,
  ho as MProgress,
  et as MRadio,
  st as MRadioButton,
  tt as MRadioGroup,
  fo as MResult,
  po as MScrollbar,
  Qe as MSelect,
  _o as MSkeleton,
  bo as MSpinner,
  ot as MSwitch,
  ns as MTabPane,
  Dt as MTable,
  Gt as MTableColumn,
  ss as MTabs,
  nt as MTag,
  Mo as MTeleport,
  eo as MTimePicker,
  Je as MTooltip,
  oo as MTransfer,
  no as MTree,
  ao as MTreeSelect,
  ro as MUpload,
  ft as Message,
  Fs as NotifiMessage,
  as as addComponentOverride,
  U as addOverrideClass,
  rs as applyGlobalOverride,
  Ds as checkComponentRegistration,
  ls as createOverrideComponent,
  Gs as default,
  is as forceRefreshStyles,
  qs as mComponents
};
//# sourceMappingURL=index.mjs.map
