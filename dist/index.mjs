var te = Object.defineProperty, se = Object.defineProperties;
var oe = Object.getOwnPropertyDescriptors;
var N = Object.getOwnPropertySymbols;
var q = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var U = (e, t, o) => t in e ? te(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, b = (e, t) => {
  for (var o in t || (t = {}))
    q.call(t, o) && U(e, o, t[o]);
  if (N)
    for (var o of N(t))
      H.call(t, o) && U(e, o, t[o]);
  return e;
}, w = (e, t) => se(e, oe(t));
var j = (e, t) => {
  var o = {};
  for (var s in e)
    q.call(e, s) && t.indexOf(s) < 0 && (o[s] = e[s]);
  if (e != null && N)
    for (var s of N(e))
      t.indexOf(s) < 0 && H.call(e, s) && (o[s] = e[s]);
  return o;
};
var F = (e, t, o) => new Promise((s, r) => {
  var n = (p) => {
    try {
      i(o.next(p));
    } catch (M) {
      r(M);
    }
  }, a = (p) => {
    try {
      i(o.throw(p));
    } catch (M) {
      r(M);
    }
  }, i = (p) => p.done ? s(p.value) : Promise.resolve(p.value).then(n, a);
  i((o = o.apply(e, t)).next());
});
import * as J from "element-plus";
import { computed as h, createElementBlock as $, openBlock as c, mergeProps as g, renderSlot as u, createBlock as d, createSlots as _, renderList as f, withCtx as m, ref as L, useAttrs as B, unref as v, normalizeProps as z, guardReactiveProps as R, createElementVNode as k, mergeModels as W, useModel as ne, createVNode as E, Teleport as Q, TransitionGroup as X, Fragment as Y, normalizeClass as G, createCommentVNode as S, resolveDynamicComponent as K, toDisplayString as O, useSlots as re, watch as Z, normalizeStyle as ae, createTextVNode as ie } from "vue";
import { ElButton as ce, ElInput as le, ElForm as ue, ElFormItem as me, ElTooltip as pe, ElSelect as de, ElOption as fe, ElOptionGroup as _e, ElPagination as ge, ElRadio as $e, ElRadioGroup as Me, ElRadioButton as be, ElSwitch as he, ElTag as ye, ElAlert as ve, ElDialog as Ce, ElNotification as ke, ElDatePicker as Se, ElEmpty as we, ElTable as Te, ElTableColumn as Ie, ElTabs as Ee, ElTabPane as Oe } from "element-plus/es";
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
import "element-plus/es/components/tabs/style/index";
import "element-plus/es/components/tab-pane/style/index";
const T = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, r] of t)
    o[s] = r;
  return o;
}, Be = /* @__PURE__ */ Object.assign({
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
    const o = e, s = t, r = h(() => {
      const i = ["iconfont"];
      return o.name && i.push(`${o.prefix}-${o.name}`), o.spin && i.push("icon-spin"), o.pulse && i.push("icon-pulse"), o.flip && i.push(`icon-flip-${o.flip}`), i;
    }), n = h(() => {
      const i = {};
      return o.size && (typeof o.size == "number" ? i.fontSize = `${o.size}px` : i.fontSize = o.size), o.color && (i.color = o.color), o.rotate !== 0 && (i.transform = `rotate(${o.rotate}deg)`), i;
    }), a = (i) => {
      s("click", i);
    };
    return (i, p) => (c(), $("i", g({
      class: r.value,
      style: n.value
    }, i.$attrs, { onClick: a }), [
      u(i.$slots, "default", {}, void 0, !0)
    ], 16));
  }
}), V = /* @__PURE__ */ T(Be, [["__scopeId", "data-v-90f84c9e"]]), Pe = /* @__PURE__ */ Object.assign({
  name: "MButton"
}, {
  __name: "Button",
  setup(e) {
    return (t, o) => {
      const s = ce;
      return c(), d(s, g(t.$attrs, { class: "m-button" }), _({ _: 2 }, [
        f(t.$slots, (r, n) => ({
          name: n,
          fn: m(() => [
            u(t.$slots, n, {}, void 0, !0)
          ])
        }))
      ]), 1040);
    };
  }
}), Ne = /* @__PURE__ */ T(Pe, [["__scopeId", "data-v-9c99add1"]]), je = /* @__PURE__ */ Object.assign({
  name: "MInput"
}, {
  __name: "Input",
  setup(e) {
    return (t, o) => {
      const s = le;
      return c(), d(s, g(t.$attrs, {
        class: ["m-input", { solid: t.$attrs.styleType === "solid" }]
      }), _({ _: 2 }, [
        f(t.$slots, (r, n) => ({
          name: n,
          fn: m(() => [
            u(t.$slots, n)
          ])
        }))
      ]), 1040, ["class"]);
    };
  }
}), Ae = /* @__PURE__ */ Object.assign({
  name: "MForm"
}, {
  __name: "Form",
  setup(e, { expose: t }) {
    const o = L();
    return B(), t({
      validate: (s) => {
        var r;
        return (r = o.value) == null ? void 0 : r.validate(s);
      },
      validateField: (s, r) => {
        var n;
        return (n = o.value) == null ? void 0 : n.validateField(s, r);
      },
      resetFields: () => {
        var s;
        return (s = o.value) == null ? void 0 : s.resetFields();
      },
      scrollToField: (s) => {
        var r;
        return (r = o.value) == null ? void 0 : r.scrollToField(s);
      },
      clearValidate: (s) => {
        var r;
        return (r = o.value) == null ? void 0 : r.clearValidate(s);
      }
    }), (s, r) => {
      const n = ue;
      return c(), d(n, g({
        ref_key: "formRef",
        ref: o
      }, s.$attrs, { class: "m-form" }), _({ _: 2 }, [
        f(s.$slots, (a, i) => ({
          name: i,
          fn: m(() => [
            u(s.$slots, i)
          ])
        }))
      ]), 1040);
    };
  }
}), Le = /* @__PURE__ */ Object.assign({
  name: "MFormItem"
}, {
  __name: "FormItem",
  setup(e) {
    return (t, o) => {
      const s = me;
      return c(), d(s, g(t.$attrs, { class: "m-form-item" }), _({ _: 2 }, [
        f(t.$slots, (r, n) => ({
          name: n,
          fn: m(() => [
            u(t.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), ze = (...e) => e.filter(Boolean).join(" "), Re = (e, ...t) => {
  const o = b({}, e);
  return t.forEach((s) => {
    delete o[s];
  }), o;
};
function P(e, t = "popperClass") {
  const o = B(), s = h(() => Re(o, t)), r = h(() => ze(e, o[t]));
  return {
    mergedAttrs: s,
    className: r
  };
}
const Fe = /* @__PURE__ */ Object.assign({
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
    const { mergedAttrs: t, className: o } = P("mc-tooltip-popper");
    return (s, r) => {
      const n = pe;
      return c(), d(n, g(v(t), { "popper-class": v(o) }), _({ _: 2 }, [
        f(s.$slots, (a, i) => ({
          name: i,
          fn: m(() => [
            u(s.$slots, i)
          ])
        }))
      ]), 1040, ["popper-class"]);
    };
  }
}), Ve = /* @__PURE__ */ Object.assign({
  name: "MSelect"
}, {
  __name: "Select",
  setup(e) {
    return (t, o) => {
      const s = de;
      return c(), d(s, g({
        class: ["m-select", { solid: t.$attrs.styleType === "solid" }],
        "show-arrow": !1
      }, t.$attrs), _({ _: 2 }, [
        f(t.$slots, (r, n) => ({
          name: n,
          fn: m(() => [
            u(t.$slots, n)
          ])
        }))
      ]), 1040, ["class"]);
    };
  }
}), Ge = /* @__PURE__ */ Object.assign({
  name: "MOption"
}, {
  __name: "Option",
  setup(e) {
    return (t, o) => {
      const s = fe;
      return c(), d(s, z(R(t.$attrs)), _({ _: 2 }, [
        f(t.$slots, (r, n) => ({
          name: n,
          fn: m(() => [
            u(t.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), De = /* @__PURE__ */ Object.assign({
  name: "MOptionGroup"
}, {
  __name: "OptionGroup",
  setup(e) {
    return (t, o) => {
      const s = _e;
      return c(), d(s, z(R(t.$attrs)), _({ _: 2 }, [
        f(t.$slots, (r, n) => ({
          name: n,
          fn: m(() => [
            u(t.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), Ue = /* @__PURE__ */ Object.assign({
  name: "MPagination"
}, {
  __name: "Pagination",
  setup(e) {
    return (t, o) => {
      const s = ge;
      return c(), d(s, g(t.$attrs, { class: "m-pagination" }), _({ _: 2 }, [
        f(t.$slots, (r, n) => ({
          name: n,
          fn: m(() => [
            u(t.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), qe = /* @__PURE__ */ Object.assign({
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
    const { mergedAttrs: t } = P("mc-radio-popper");
    return (o, s) => {
      const r = $e;
      return c(), d(r, g(v(t), { class: "m-radio" }), _({ _: 2 }, [
        f(o.$slots, (n, a) => ({
          name: a,
          fn: m(() => [
            u(o.$slots, a)
          ])
        }))
      ]), 1040);
    };
  }
}), He = /* @__PURE__ */ Object.assign({
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
    const t = B(), o = h(() => {
      const r = "mc-radio-group-popper";
      return t.popperClass ? `${r} ${t.popperClass}`.trim() : r;
    }), s = h(() => {
      const a = t, { popperClass: r } = a;
      return j(a, ["popperClass"]);
    });
    return (r, n) => {
      const a = Me;
      return c(), d(a, g(s.value, {
        "popper-class": o.value,
        class: "m-radio-group"
      }), _({ _: 2 }, [
        f(r.$slots, (i, p) => ({
          name: p,
          fn: m(() => [
            u(r.$slots, p)
          ])
        }))
      ]), 1040, ["popper-class"]);
    };
  }
}), We = /* @__PURE__ */ Object.assign({
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
    const { mergedAttrs: t } = P("mc-radio-button-popper");
    return (o, s) => {
      const r = be;
      return c(), d(r, g(v(t), { class: "m-radio-button" }), _({ _: 2 }, [
        f(o.$slots, (n, a) => ({
          name: a,
          fn: m(() => [
            u(o.$slots, a)
          ])
        }))
      ]), 1040);
    };
  }
}), Ze = /* @__PURE__ */ Object.assign({
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
    const { mergedAttrs: t, className: o } = P("mc-switch-popper");
    return (s, r) => {
      const n = he;
      return c(), d(n, g(v(t), {
        "popper-class": v(o),
        class: "m-switch"
      }), _({ _: 2 }, [
        f(s.$slots, (a, i) => ({
          name: i,
          fn: m(() => [
            u(s.$slots, i)
          ])
        }))
      ]), 1040, ["popper-class"]);
    };
  }
}), Je = /* @__PURE__ */ Object.assign({
  name: "MTag"
}, {
  __name: "Tag",
  setup(e) {
    return (t, o) => {
      const s = ye;
      return c(), d(s, g(t.$attrs, { class: "m-tag" }), _({ _: 2 }, [
        f(t.$slots, (r, n) => ({
          name: n,
          fn: m(() => [
            u(t.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), Qe = ["src", "alt"], Xe = ["success", "warning", "error"], Ye = {
  name: "MAlert"
}, Ke = /* @__PURE__ */ Object.assign(Ye, {
  props: {
    type: {
      type: String,
      default: "success",
      validator: (e) => Xe.includes(e)
    },
    useCustomIcon: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const t = e, o = B(), s = h(() => {
      const i = o, { useCustomIcon: n } = i, a = j(i, ["useCustomIcon"]);
      return w(b({}, a), {
        type: t.type
        // 确保 type 属性正确传递给 el-alert
      });
    }), r = h(() => t.useCustomIcon ? `https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/mc-ui/alert/alert-${t.type}.png` : null);
    return (n, a) => {
      const i = ve;
      return c(), d(i, g(s.value, { class: "mc-alert" }), _({ _: 2 }, [
        r.value ? {
          name: "icon",
          fn: m(() => [
            k("img", {
              src: r.value,
              alt: `${e.type} icon`,
              class: "mc-alert-icon"
            }, null, 8, Qe)
          ]),
          key: "0"
        } : void 0,
        f(n.$slots, (p, M) => ({
          name: M,
          fn: m(() => [
            u(n.$slots, M)
          ])
        }))
      ]), 1040);
    };
  }
}), xe = /* @__PURE__ */ Object.assign({
  name: "MDialog"
}, {
  __name: "Dialog",
  props: /* @__PURE__ */ W({
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
  emits: /* @__PURE__ */ W(["close"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = ne(e, "modelValue");
    return (s, r) => {
      const n = Ce;
      return c(), $("div", null, [
        E(n, g({
          modelValue: o.value,
          "onUpdate:modelValue": r[0] || (r[0] = (a) => o.value = a),
          width: e.width,
          title: e.title,
          draggable: e.draggable,
          "close-on-click-modal": e.closeOnClickModal,
          center: e.center
        }, s.$attrs, {
          class: "m-dialog",
          "header-class": "m-header"
        }), _({
          default: m(() => [
            u(s.$slots, "default")
          ]),
          _: 2
        }, [
          s.$slots.header ? {
            name: "header",
            fn: m(({ close: a, titleId: i, titleClass: p }) => [
              u(s.$slots, "header", z(R({ close: a, titleId: i, titleClass: p })))
            ]),
            key: "0"
          } : void 0,
          s.$slots.footer ? {
            name: "footer",
            fn: m(() => [
              u(s.$slots, "footer")
            ]),
            key: "1"
          } : void 0
        ]), 1040, ["modelValue", "width", "title", "draggable", "close-on-click-modal", "center"])
      ]);
    };
  }
}), et = {
  name: "MNotification"
};
function tt(e, t, o, s, r, n) {
  const a = ke;
  return c(), d(a, g(e.$attrs, { class: "mc-notification" }), _({ _: 2 }, [
    f(e.$slots, (i, p) => ({
      name: p,
      fn: m(() => [
        u(e.$slots, p)
      ])
    }))
  ]), 1040);
}
const st = /* @__PURE__ */ T(et, [["render", tt]]), C = L([]);
let ot = 0;
const nt = {
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
    const t = w(b(b({}, this.defaultOptions), e), {
      id: ++ot
    });
    if (t.grouping) {
      const o = C.value.findIndex(
        (s) => s.message === t.message && s.type === t.type && s.grouping
      );
      if (o > -1)
        return C.value[o].repeatNum++, { close: () => this.close(C.value[o].id) };
    }
    return C.value.push(t), t.duration > 0 && setTimeout(() => {
      this.close(t.id);
    }, t.duration), {
      close: () => this.close(t.id)
    };
  },
  // 关闭指定消息
  close(e) {
    const t = C.value.findIndex((o) => o.id === e);
    if (t > -1) {
      const o = C.value[t];
      o.onClose && o.onClose(o), C.value.splice(t, 1);
    }
  },
  // 关闭所有消息
  closeAll() {
    C.value = [];
  },
  // 便捷方法
  success(e = {}) {
    return typeof e == "string" && (e = { message: e }), this.show(w(b({}, e), { type: "success" }));
  },
  warning(e = {}) {
    return typeof e == "string" && (e = { message: e }), this.show(w(b({}, e), { type: "warning" }));
  },
  error(e = {}) {
    return typeof e == "string" && (e = { message: e }), this.show(w(b({}, e), { type: "error" }));
  }
}, rt = (e) => {
  nt.close(e);
}, at = {
  name: "MMessage",
  setup() {
    return {
      messages: C,
      closeMessage: rt
    };
  }
}, it = {
  key: 0,
  class: "message-icon"
}, ct = ["src"], lt = {
  key: 1,
  src: "https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/mc-ui/alert/alert-success.png",
  alt: "success icon",
  class: "message-icon-img"
}, ut = {
  key: 2,
  src: "https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/mc-ui/alert/alert-warning.png",
  alt: "warning icon",
  class: "message-icon-img"
}, mt = {
  key: 3,
  src: "https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/mc-ui/alert/alert-error.png",
  alt: "error icon",
  class: "message-icon-img"
}, pt = { class: "message-content" }, dt = ["innerHTML"], ft = { key: 2 }, _t = {
  key: 3,
  class: "message-repeat"
}, gt = ["onClick"];
function $t(e, t, o, s, r, n) {
  return c(), d(Q, { to: "body" }, [
    E(X, {
      name: "message",
      tag: "div",
      class: "message-container"
    }, {
      default: m(() => [
        (c(!0), $(Y, null, f(s.messages, (a) => (c(), $("div", {
          key: a.id,
          class: G([
            "custom-message",
            `message-${a.type}`,
            `message-${a.placement}`,
            { "message-plain": a.plain }
          ])
        }, [
          a.showIcon ? (c(), $("div", it, [
            a.customIcon ? (c(), $("img", {
              key: 0,
              src: a.customIcon,
              alt: "custom icon",
              class: "message-icon-img"
            }, null, 8, ct)) : a.type === "success" ? (c(), $("img", lt)) : a.type === "warning" ? (c(), $("img", ut)) : a.type === "error" ? (c(), $("img", mt)) : S("", !0)
          ])) : S("", !0),
          k("div", pt, [
            typeof a.message == "function" ? (c(), d(K(a.message), { key: 0 })) : a.dangerouslyUseHTMLString ? (c(), $("div", {
              key: 1,
              innerHTML: a.message
            }, null, 8, dt)) : (c(), $("span", ft, O(a.message), 1)),
            a.repeatNum > 1 ? (c(), $("span", _t, O(a.repeatNum), 1)) : S("", !0)
          ]),
          a.showClose ? (c(), $("button", {
            key: 1,
            class: "message-close",
            onClick: (i) => s.closeMessage(a.id)
          }, " × ", 8, gt)) : S("", !0)
        ], 2))), 128))
      ]),
      _: 1
    })
  ]);
}
const x = /* @__PURE__ */ T(at, [["render", $t]]), I = L([]);
let Mt = 0;
const Is = {
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
    const t = w(b(b({}, this.defaultOptions), e), {
      id: ++Mt
    });
    return I.value.push(t), t.duration > 0 && setTimeout(() => {
      this.close(t.id);
    }, t.duration), {
      close: () => this.close(t.id)
    };
  },
  // 关闭指定通知
  close(e) {
    const t = I.value.findIndex((o) => o.id === e);
    t > -1 && I.value.splice(t, 1);
  },
  // 关闭所有通知
  closeAll() {
    I.value = [];
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
}, bt = (e) => {
  const t = I.value.findIndex((o) => o.id === e);
  t > -1 && I.value.splice(t, 1);
}, ht = {
  name: "MNotifiMessage",
  setup() {
    return {
      notifications: I,
      closeNotification: bt
    };
  }
}, yt = { class: "notification-content" }, vt = { class: "notification-title" }, Ct = { class: "notification-message" }, kt = {
  key: 0,
  class: "notification-action"
}, St = ["onClick"];
function wt(e, t, o, s, r, n) {
  return c(), d(Q, { to: "body" }, [
    E(X, {
      name: "notification",
      tag: "div",
      class: "notification-container"
    }, {
      default: m(() => [
        (c(!0), $(Y, null, f(s.notifications, (a) => (c(), $("div", {
          key: a.id,
          class: G([
            "custom-notification",
            `notification-${a.position}`
          ])
        }, [
          t[0] || (t[0] = k("div", { class: "notification-icon" }, [
            k("img", {
              src: "https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/MCImages/userCenter/icon-quota-tip.png",
              alt: "notification icon"
            })
          ], -1)),
          k("div", yt, [
            k("div", vt, O(a.title), 1),
            k("div", Ct, O(a.message), 1),
            a.slotContent ? (c(), $("div", kt, [
              (c(), d(K(a.slotContent)))
            ])) : S("", !0)
          ]),
          a.showClose ? (c(), $("button", {
            key: 0,
            class: "notification-close",
            onClick: (i) => s.closeNotification(a.id)
          }, " × ", 8, St)) : S("", !0)
        ], 2))), 128))
      ]),
      _: 1
    })
  ]);
}
const ee = /* @__PURE__ */ T(ht, [["render", wt]]), Tt = /* @__PURE__ */ Object.assign({
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
    const { mergedAttrs: t, className: o } = P(
      "mc-datepicker-popper",
      "popperClass"
    );
    return (s, r) => {
      const n = Se;
      return c(), d(n, g(v(t), { "popper-class": v(o) }), _({ _: 2 }, [
        f(s.$slots, (a, i) => ({
          name: i,
          fn: m(() => [
            u(s.$slots, i)
          ])
        }))
      ]), 1040, ["popper-class"]);
    };
  }
}), It = [
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
], Et = {
  name: "MEmpty"
}, Ot = /* @__PURE__ */ Object.assign(Et, {
  props: {
    image: {
      type: String,
      default: "orders",
      validator: (e) => e.includes("/") || e.includes("http") ? !0 : It.includes(e)
    }
  },
  setup(e) {
    const t = e, o = B(), s = h(() => {
      const i = o, { image: n } = i;
      return j(i, ["image"]);
    }), r = h(() => {
      const { image: n } = t;
      return n.includes("/") || n.includes("http") ? n : `/images/empty/${n}.png`;
    });
    return (n, a) => {
      const i = we;
      return c(), d(i, g(s.value, { image: r.value }), _({ _: 2 }, [
        f(n.$slots, (p, M) => ({
          name: M,
          fn: m(() => [
            u(n.$slots, M)
          ])
        }))
      ]), 1040, ["image"]);
    };
  }
}), Bt = /* @__PURE__ */ Object.assign({
  name: "MTable"
}, {
  __name: "Table",
  setup(e) {
    return (t, o) => {
      const s = Te;
      return c(), d(s, z(R(t.$attrs)), _({ _: 2 }, [
        f(t.$slots, (r, n) => ({
          name: n,
          fn: m(() => [
            u(t.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), Pt = /* @__PURE__ */ Object.assign({
  name: "MTableColumn"
}, {
  __name: "TableColumn",
  setup(e) {
    return (t, o) => {
      const s = Ie;
      return c(), d(s, g(t.$attrs, { class: "m-table-column" }), _({ _: 2 }, [
        f(t.$slots, (r, n) => ({
          name: n,
          fn: m(() => [
            u(t.$slots, n)
          ])
        }))
      ]), 1040);
    };
  }
}), Nt = { class: "m-banner__content" }, jt = {
  key: 0,
  class: "m-banner__icon"
}, At = { class: "m-banner__text" }, Lt = /* @__PURE__ */ Object.assign({
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
    const s = re(), r = e, n = o, a = L(r.visible);
    Z(() => r.visible, (y) => {
      a.value = y;
    });
    const i = h(() => {
      const y = {};
      return r.backgroundColor && (y.backgroundColor = r.backgroundColor), r.textColor && (y.color = r.textColor), r.borderColor && (y.borderColor = r.borderColor), y;
    }), p = {
      info: "info",
      success: "check-circle",
      warning: "warning",
      error: "close-circle"
    };
    h(() => r.icon || p[r.type]);
    const M = () => {
      a.value = !1, n("update:visible", !1), n("close");
    };
    return Z(a, (y) => {
      y && r.duration > 0 && setTimeout(() => {
        M();
      }, r.duration);
    }), t({
      close: M
    }), (y, es) => e.visible ? (c(), $("div", {
      key: 0,
      class: G(["m-banner", [
        `m-banner--${e.type}`,
        {
          "m-banner--closable": e.closable,
          "m-banner--with-icon": e.icon || v(s).icon
        }
      ]]),
      style: ae(i.value)
    }, [
      k("div", Nt, [
        e.icon || v(s).icon ? (c(), $("div", jt, [
          u(y.$slots, "icon", {}, () => [
            E(V, {
              name: e.icon,
              size: e.iconSize
            }, null, 8, ["name", "size"])
          ], !0)
        ])) : S("", !0),
        k("div", At, [
          u(y.$slots, "default", {}, () => [
            ie(O(e.content), 1)
          ], !0)
        ]),
        e.closable ? (c(), $("div", {
          key: 1,
          class: "m-banner__close",
          onClick: M
        }, [
          E(V, {
            name: "lucide-x",
            size: e.closeIconSize
          }, null, 8, ["size"])
        ])) : S("", !0)
      ])
    ], 6)) : S("", !0);
  }
}), zt = /* @__PURE__ */ T(Lt, [["__scopeId", "data-v-00c80323"]]), Rt = {
  name: "MTabs"
};
function Ft(e, t, o, s, r, n) {
  const a = Ee;
  return c(), d(a, g(e.$attrs, { class: "m-tabs" }), _({ _: 2 }, [
    f(e.$slots, (i, p) => ({
      name: p,
      fn: m(() => [
        u(e.$slots, p)
      ])
    }))
  ]), 1040);
}
const Vt = /* @__PURE__ */ T(Rt, [["render", Ft]]), Gt = {
  name: "MTabPane"
};
function Dt(e, t, o, s, r, n) {
  const a = Oe;
  return c(), d(a, g(e.$attrs, { class: "m-tab-pane" }), _({ _: 2 }, [
    f(e.$slots, (i, p) => ({
      name: p,
      fn: m(() => [
        u(e.$slots, p)
      ])
    }))
  ]), 1040);
}
const Ut = /* @__PURE__ */ T(Gt, [["render", Dt]]);
function A(e) {
  e && e.classList && e.classList.add("mc-ui-override");
}
function qt(e) {
  e && e.$el && A(e.$el);
}
function Ht() {
  typeof document != "undefined" && (document.body.classList.add("mc-ui-override"), new MutationObserver((t) => {
    t.forEach((o) => {
      o.addedNodes.forEach((s) => {
        if (s.nodeType === 1 && s.classList) {
          if (s.className && typeof s.className == "string" && s.className.includes("el-")) {
            const n = s.closest(".mc-ui-override") || s.parentElement;
            n && !n.classList.contains("mc-ui-override") && n.classList.add("mc-ui-override");
          }
          s.querySelectorAll('[class*="el-"]').forEach((n) => {
            const a = n.closest(".mc-ui-override") || n.parentElement;
            a && !a.classList.contains("mc-ui-override") && a.classList.add("mc-ui-override");
          });
        }
      });
    });
  }).observe(document.body, {
    childList: !0,
    subtree: !0
  }));
}
function Wt(e = '[class*="el-"]') {
  typeof document != "undefined" && document.querySelectorAll(e).forEach((o) => {
    const s = o.closest(".mc-ui-override") || o.parentElement;
    s && !s.classList.contains("mc-ui-override") && s.classList.add("mc-ui-override");
  });
}
function Zt(e) {
  return w(b({}, e), {
    mounted() {
      A(this.$el), e.mounted && e.mounted.call(this);
    },
    updated() {
      A(this.$el), e.updated && e.updated.call(this);
    }
  });
}
const Jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addComponentOverride: qt,
  addOverrideClass: A,
  applyGlobalOverride: Ht,
  createOverrideComponent: Zt,
  forceRefreshStyles: Wt
}, Symbol.toStringTag, { value: "Module" })), D = [V, Ne, je, Ae, Le, Fe, Ve, Ge, De, Ue, qe, He, We, Ze, Je, Ke, xe, st, x, ee, Tt, Ot, Bt, Pt, zt, Vt, Ut], Qt = [
  { id: "global-message-container", component: x },
  { id: "global-notification-container", component: ee }
];
function Xt(o) {
  return F(this, arguments, function* ({ id: e, component: t }) {
    try {
      if (document.getElementById(e)) return;
      const { createApp: s, h: r } = yield import("vue"), n = document.createElement("div");
      n.id = e, document.body.appendChild(n), s({
        render: () => r(t)
      }).mount(`#${e}`);
    } catch (s) {
      console.warn(`Failed to create global component ${e}:`, s);
    }
  });
}
function Yt() {
  return F(this, null, function* () {
    const e = Qt.map(Xt);
    yield Promise.all(e);
  });
}
const l = {};
function Kt(e) {
  const t = D.map((o) => {
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
  Object.entries(J).forEach(([o, s]) => {
    if (s && s.name && typeof s.name == "string" && s.name.startsWith("El")) {
      const r = "m-" + s.name.slice(2).replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
      t.includes(r) || e._context.components[r] || e.component(r, s);
      const n = "M" + s.name.slice(2);
      l[n] = s;
    }
  });
}
const xt = (e) => {
  typeof window != "undefined" && Promise.resolve().then(() => Jt).then(({ applyGlobalOverride: t }) => {
    t();
  }), console.log("🚀 开始安装 @mc-markets/ui 组件库..."), D.forEach((t) => {
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
  }), Kt(e), typeof window != "undefined" && Yt();
};
function Es(e) {
  const t = Object.keys(e._context.components || {}), o = D.map((s) => {
    if (s && s.name && typeof s.name == "string") {
      let r = s.name.toLowerCase();
      return {
        mradiogroup: "m-radio-group",
        mradiobutton: "m-radio-button",
        mformitem: "m-form-item",
        moptiongroup: "m-option-group",
        mtabs: "m-tabs",
        mtabpane: "m-tab-pane"
      }[r] || r.replace(/^m/, "m-");
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
const Os = { install: xt }, Bs = J.ElMessageBox, Ps = b({}, l), Ns = l.MButtonGroup, js = l.MBreadcrumb, As = l.MBreadcrumbItem, Ls = l.MCarousel, zs = l.MCarouselItem, Rs = l.MCascader, Fs = l.MCascaderPanel, Vs = l.MCheckTag, Gs = l.MCalendar, Ds = l.MTimePicker, Us = l.MDateTimePicker, qs = l.MColorPicker, Hs = l.MTransfer, Ws = l.MTree, Zs = l.MTreeSelect, Js = l.MUpload, Qs = l.MImage, Xs = l.MImageViewer, Ys = l.MBacktop, Ks = l.MInfiniteScroll, xs = l.MAffix, eo = l.MScrollbar, to = l.MResult, so = l.MSkeleton, oo = l.MLoading, no = l.MSpinner, ro = l.MProgress, ao = l.MBadge, io = l.MAvatar, co = l.MImagePreview, lo = l.MTeleport, uo = l.MConfigProvider;
export {
  xs as MAffix,
  Ke as MAlert,
  io as MAvatar,
  Ys as MBacktop,
  ao as MBadge,
  zt as MBanner,
  js as MBreadcrumb,
  As as MBreadcrumbItem,
  Ne as MButton,
  Ns as MButtonGroup,
  Gs as MCalendar,
  Ls as MCarousel,
  zs as MCarouselItem,
  Rs as MCascader,
  Fs as MCascaderPanel,
  Vs as MCheckTag,
  qs as MColorPicker,
  uo as MConfigProvider,
  Tt as MDatePicker,
  Us as MDateTimePicker,
  xe as MDialog,
  Ot as MEmpty,
  Ae as MForm,
  Le as MFormItem,
  V as MIcon,
  Qs as MImage,
  co as MImagePreview,
  Xs as MImageViewer,
  Ks as MInfiniteScroll,
  je as MInput,
  oo as MLoading,
  x as MMessage,
  Bs as MMessageBox,
  ee as MNotifiMessage,
  st as MNotification,
  Ue as MPagination,
  ro as MProgress,
  qe as MRadio,
  We as MRadioButton,
  He as MRadioGroup,
  to as MResult,
  eo as MScrollbar,
  Ve as MSelect,
  so as MSkeleton,
  no as MSpinner,
  Ze as MSwitch,
  Ut as MTabPane,
  Bt as MTable,
  Pt as MTableColumn,
  Vt as MTabs,
  Je as MTag,
  lo as MTeleport,
  Ds as MTimePicker,
  Fe as MTooltip,
  Hs as MTransfer,
  Ws as MTree,
  Zs as MTreeSelect,
  Js as MUpload,
  nt as Message,
  Is as NotifiMessage,
  qt as addComponentOverride,
  A as addOverrideClass,
  Ht as applyGlobalOverride,
  Es as checkComponentRegistration,
  Zt as createOverrideComponent,
  Os as default,
  Wt as forceRefreshStyles,
  Ps as mComponents
};
//# sourceMappingURL=index.mjs.map
