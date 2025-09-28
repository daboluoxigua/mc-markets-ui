var ue = Object.defineProperty, me = Object.defineProperties;
var pe = Object.getOwnPropertyDescriptors;
var R = Object.getOwnPropertySymbols;
var X = Object.prototype.hasOwnProperty, Y = Object.prototype.propertyIsEnumerable;
var Q = (e, t, n) => t in e ? ue(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, k = (e, t) => {
  for (var n in t || (t = {}))
    X.call(t, n) && Q(e, n, t[n]);
  if (R)
    for (var n of R(t))
      Y.call(t, n) && Q(e, n, t[n]);
  return e;
}, I = (e, t) => me(e, pe(t));
var V = (e, t) => {
  var n = {};
  for (var s in e)
    X.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && R)
    for (var s of R(e))
      t.indexOf(s) < 0 && Y.call(e, s) && (n[s] = e[s]);
  return n;
};
var H = (e, t, n) => new Promise((s, o) => {
  var a = (d) => {
    try {
      i(n.next(d));
    } catch (h) {
      o(h);
    }
  }, r = (d) => {
    try {
      i(n.throw(d));
    } catch (h) {
      o(h);
    }
  }, i = (d) => d.done ? s(d.value) : Promise.resolve(d.value).then(a, r);
  i((n = n.apply(e, t)).next());
});
import * as ee from "element-plus";
import { computed as M, createElementBlock as m, openBlock as l, mergeProps as v, renderSlot as u, createBlock as f, createSlots as b, renderList as g, withCtx as p, ref as B, useAttrs as j, unref as T, normalizeProps as D, guardReactiveProps as G, createCommentVNode as S, normalizeClass as P, createElementVNode as $, mergeModels as K, useModel as de, createVNode as A, Teleport as te, TransitionGroup as se, Fragment as Z, resolveDynamicComponent as ne, toDisplayString as N, useSlots as fe, watch as z, normalizeStyle as oe, createTextVNode as _e, provide as ge, onMounted as ae, nextTick as be, withDirectives as ve, vShow as he, inject as ye, onUnmounted as Me } from "vue";
import { ElButton as $e, ElInput as Ce, ElForm as ke, ElFormItem as Se, ElTooltip as Te, ElSelect as we, ElOption as Ie, ElOptionGroup as Be, ElPagination as Oe, ElRadio as Ee, ElRadioGroup as Pe, ElRadioButton as Ne, ElSwitch as Ae, ElTag as je, ElAlert as xe, ElDialog as Le, ElNotification as Re, ElDatePicker as Ve, ElEmpty as ze, ElTable as Fe, ElTableColumn as De } from "element-plus/es";
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
const O = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Ge = /* @__PURE__ */ Object.assign({
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
    const n = e, s = t, o = M(() => {
      const i = ["iconfont"];
      return n.name && i.push(`${n.prefix}-${n.name}`), n.spin && i.push("icon-spin"), n.pulse && i.push("icon-pulse"), n.flip && i.push(`icon-flip-${n.flip}`), i;
    }), a = M(() => {
      const i = {};
      return n.size && (typeof n.size == "number" ? i.fontSize = `${n.size}px` : i.fontSize = n.size), n.color && (i.color = n.color), n.rotate !== 0 && (i.transform = `rotate(${n.rotate}deg)`), i;
    }), r = (i) => {
      s("click", i);
    };
    return (i, d) => (l(), m("i", v({
      class: o.value,
      style: a.value
    }, i.$attrs, { onClick: r }), [
      u(i.$slots, "default", {}, void 0, !0)
    ], 16));
  }
}), W = /* @__PURE__ */ O(Ge, [["__scopeId", "data-v-90f84c9e"]]), Ue = /* @__PURE__ */ Object.assign({
  name: "MButton"
}, {
  __name: "Button",
  setup(e) {
    return (t, n) => {
      const s = $e;
      return l(), f(s, v(t.$attrs, { class: "m-button" }), b({ _: 2 }, [
        g(t.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            u(t.$slots, a, {}, void 0, !0)
          ])
        }))
      ]), 1040);
    };
  }
}), qe = /* @__PURE__ */ O(Ue, [["__scopeId", "data-v-9c99add1"]]), He = /* @__PURE__ */ Object.assign({
  name: "MInput"
}, {
  __name: "Input",
  setup(e) {
    return (t, n) => {
      const s = Ce;
      return l(), f(s, v(t.$attrs, {
        class: ["m-input", { solid: t.$attrs.styleType === "solid" }]
      }), b({ _: 2 }, [
        g(t.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            u(t.$slots, a)
          ])
        }))
      ]), 1040, ["class"]);
    };
  }
}), We = /* @__PURE__ */ Object.assign({
  name: "MForm"
}, {
  __name: "Form",
  setup(e, { expose: t }) {
    const n = B();
    return j(), t({
      validate: (s) => {
        var o;
        return (o = n.value) == null ? void 0 : o.validate(s);
      },
      validateField: (s, o) => {
        var a;
        return (a = n.value) == null ? void 0 : a.validateField(s, o);
      },
      resetFields: () => {
        var s;
        return (s = n.value) == null ? void 0 : s.resetFields();
      },
      scrollToField: (s) => {
        var o;
        return (o = n.value) == null ? void 0 : o.scrollToField(s);
      },
      clearValidate: (s) => {
        var o;
        return (o = n.value) == null ? void 0 : o.clearValidate(s);
      }
    }), (s, o) => {
      const a = ke;
      return l(), f(a, v({
        ref_key: "formRef",
        ref: n
      }, s.$attrs, { class: "m-form" }), b({ _: 2 }, [
        g(s.$slots, (r, i) => ({
          name: i,
          fn: p(() => [
            u(s.$slots, i)
          ])
        }))
      ]), 1040);
    };
  }
}), Ze = /* @__PURE__ */ Object.assign({
  name: "MFormItem"
}, {
  __name: "FormItem",
  setup(e) {
    return (t, n) => {
      const s = Se;
      return l(), f(s, v(t.$attrs, { class: "m-form-item" }), b({ _: 2 }, [
        g(t.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            u(t.$slots, a)
          ])
        }))
      ]), 1040);
    };
  }
}), Je = (...e) => e.filter(Boolean).join(" "), Qe = (e, ...t) => {
  const n = k({}, e);
  return t.forEach((s) => {
    delete n[s];
  }), n;
};
function x(e, t = "popperClass") {
  const n = j(), s = M(() => Qe(n, t)), o = M(() => Je(e, n[t]));
  return {
    mergedAttrs: s,
    className: o
  };
}
const Xe = /* @__PURE__ */ Object.assign({
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
    const { mergedAttrs: t, className: n } = x("mc-tooltip-popper");
    return (s, o) => {
      const a = Te;
      return l(), f(a, v(T(t), { "popper-class": T(n) }), b({ _: 2 }, [
        g(s.$slots, (r, i) => ({
          name: i,
          fn: p(() => [
            u(s.$slots, i)
          ])
        }))
      ]), 1040, ["popper-class"]);
    };
  }
}), Ye = /* @__PURE__ */ Object.assign({
  name: "MSelect"
}, {
  __name: "Select",
  setup(e) {
    return (t, n) => {
      const s = we;
      return l(), f(s, v({
        class: ["m-select", { solid: t.$attrs.styleType === "solid" }],
        "show-arrow": !1
      }, t.$attrs), b({ _: 2 }, [
        g(t.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            u(t.$slots, a)
          ])
        }))
      ]), 1040, ["class"]);
    };
  }
}), Ke = /* @__PURE__ */ Object.assign({
  name: "MOption"
}, {
  __name: "Option",
  setup(e) {
    return (t, n) => {
      const s = Ie;
      return l(), f(s, D(G(t.$attrs)), b({ _: 2 }, [
        g(t.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            u(t.$slots, a)
          ])
        }))
      ]), 1040);
    };
  }
}), et = /* @__PURE__ */ Object.assign({
  name: "MOptionGroup"
}, {
  __name: "OptionGroup",
  setup(e) {
    return (t, n) => {
      const s = Be;
      return l(), f(s, D(G(t.$attrs)), b({ _: 2 }, [
        g(t.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            u(t.$slots, a)
          ])
        }))
      ]), 1040);
    };
  }
}), tt = /* @__PURE__ */ Object.assign({
  name: "MPagination"
}, {
  __name: "Pagination",
  setup(e) {
    return (t, n) => {
      const s = Oe;
      return l(), f(s, v(t.$attrs, { class: "m-pagination" }), b({ _: 2 }, [
        g(t.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            u(t.$slots, a)
          ])
        }))
      ]), 1040);
    };
  }
}), st = /* @__PURE__ */ Object.assign({
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
    const { mergedAttrs: t } = x("mc-radio-popper");
    return (n, s) => {
      const o = Ee;
      return l(), f(o, v(T(t), { class: "m-radio" }), b({ _: 2 }, [
        g(n.$slots, (a, r) => ({
          name: r,
          fn: p(() => [
            u(n.$slots, r)
          ])
        }))
      ]), 1040);
    };
  }
}), nt = /* @__PURE__ */ Object.assign({
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
    const t = j(), n = M(() => {
      const o = "mc-radio-group-popper";
      return t.popperClass ? `${o} ${t.popperClass}`.trim() : o;
    }), s = M(() => {
      const r = t, { popperClass: o } = r;
      return V(r, ["popperClass"]);
    });
    return (o, a) => {
      const r = Pe;
      return l(), f(r, v(s.value, {
        "popper-class": n.value,
        class: "m-radio-group"
      }), b({ _: 2 }, [
        g(o.$slots, (i, d) => ({
          name: d,
          fn: p(() => [
            u(o.$slots, d)
          ])
        }))
      ]), 1040, ["popper-class"]);
    };
  }
}), ot = /* @__PURE__ */ Object.assign({
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
    const { mergedAttrs: t } = x("mc-radio-button-popper");
    return (n, s) => {
      const o = Ne;
      return l(), f(o, v(T(t), { class: "m-radio-button" }), b({ _: 2 }, [
        g(n.$slots, (a, r) => ({
          name: r,
          fn: p(() => [
            u(n.$slots, r)
          ])
        }))
      ]), 1040);
    };
  }
}), at = /* @__PURE__ */ Object.assign({
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
    const { mergedAttrs: t, className: n } = x("mc-switch-popper");
    return (s, o) => {
      const a = Ae;
      return l(), f(a, v(T(t), {
        "popper-class": T(n),
        class: "m-switch"
      }), b({ _: 2 }, [
        g(s.$slots, (r, i) => ({
          name: i,
          fn: p(() => [
            u(s.$slots, i)
          ])
        }))
      ]), 1040, ["popper-class"]);
    };
  }
}), rt = /* @__PURE__ */ Object.assign({
  name: "MTag"
}, {
  __name: "Tag",
  props: {
    prefixIcon: {
      type: String,
      default: ""
    },
    suffixIcon: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: !1
    },
    iconType: {
      type: String,
      default: "normal",
      validator: (e) => ["normal", "color"].includes(e)
    }
  },
  setup(e) {
    return (t, n) => {
      const s = je;
      return l(), f(s, v(t.$attrs, {
        class: ["m-tag", { "is-loading": e.loading }]
      }), b({ _: 2 }, [
        g(t.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            e.prefixIcon ? (l(), m("i", {
              key: 0,
              class: P(["prefixIcon", ["iconfont", e.prefixIcon]])
            }, null, 2)) : S("", !0),
            u(t.$slots, a),
            e.suffixIcon ? (l(), m("i", {
              key: 1,
              class: P(["suffixIcon", ["iconfont", e.suffixIcon]])
            }, null, 2)) : S("", !0)
          ])
        }))
      ]), 1040, ["class"]);
    };
  }
}), it = ["src", "alt"], lt = ["success", "warning", "error"], ct = {
  name: "MAlert"
}, ut = /* @__PURE__ */ Object.assign(ct, {
  props: {
    type: {
      type: String,
      default: "success",
      validator: (e) => lt.includes(e)
    },
    useCustomIcon: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const t = e, n = j(), s = M(() => {
      const i = n, { useCustomIcon: a } = i, r = V(i, ["useCustomIcon"]);
      return I(k({}, r), {
        type: t.type
        // 确保 type 属性正确传递给 el-alert
      });
    }), o = M(() => t.useCustomIcon ? `https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/mc-ui/alert/alert-${t.type}.png` : null);
    return (a, r) => {
      const i = xe;
      return l(), f(i, v(s.value, { class: "mc-alert" }), b({ _: 2 }, [
        o.value ? {
          name: "icon",
          fn: p(() => [
            $("img", {
              src: o.value,
              alt: `${e.type} icon`,
              class: "mc-alert-icon"
            }, null, 8, it)
          ]),
          key: "0"
        } : void 0,
        g(a.$slots, (d, h) => ({
          name: h,
          fn: p(() => [
            u(a.$slots, h)
          ])
        }))
      ]), 1040);
    };
  }
}), mt = /* @__PURE__ */ Object.assign({
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
    const n = de(e, "modelValue");
    return (s, o) => {
      const a = Le;
      return l(), m("div", null, [
        A(a, v({
          modelValue: n.value,
          "onUpdate:modelValue": o[0] || (o[0] = (r) => n.value = r),
          width: e.width,
          title: e.title,
          draggable: e.draggable,
          "close-on-click-modal": e.closeOnClickModal,
          center: e.center
        }, s.$attrs, {
          class: "m-dialog",
          "header-class": "m-header"
        }), b({
          default: p(() => [
            u(s.$slots, "default")
          ]),
          _: 2
        }, [
          s.$slots.header ? {
            name: "header",
            fn: p(({ close: r, titleId: i, titleClass: d }) => [
              u(s.$slots, "header", D(G({ close: r, titleId: i, titleClass: d })))
            ]),
            key: "0"
          } : void 0,
          s.$slots.footer ? {
            name: "footer",
            fn: p(() => [
              u(s.$slots, "footer")
            ]),
            key: "1"
          } : void 0
        ]), 1040, ["modelValue", "width", "title", "draggable", "close-on-click-modal", "center"])
      ]);
    };
  }
}), pt = {
  name: "MNotification"
};
function dt(e, t, n, s, o, a) {
  const r = Re;
  return l(), f(r, v(e.$attrs, { class: "mc-notification" }), b({ _: 2 }, [
    g(e.$slots, (i, d) => ({
      name: d,
      fn: p(() => [
        u(e.$slots, d)
      ])
    }))
  ]), 1040);
}
const ft = /* @__PURE__ */ O(pt, [["render", dt]]), w = B([]);
let _t = 0;
const gt = {
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
      id: ++_t
    });
    if (t.grouping) {
      const n = w.value.findIndex(
        (s) => s.message === t.message && s.type === t.type && s.grouping
      );
      if (n > -1)
        return w.value[n].repeatNum++, { close: () => this.close(w.value[n].id) };
    }
    return w.value.push(t), t.duration > 0 && setTimeout(() => {
      this.close(t.id);
    }, t.duration), {
      close: () => this.close(t.id)
    };
  },
  // 关闭指定消息
  close(e) {
    const t = w.value.findIndex((n) => n.id === e);
    if (t > -1) {
      const n = w.value[t];
      n.onClose && n.onClose(n), w.value.splice(t, 1);
    }
  },
  // 关闭所有消息
  closeAll() {
    w.value = [];
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
}, bt = (e) => {
  gt.close(e);
}, vt = {
  name: "MMessage",
  setup() {
    return {
      messages: w,
      closeMessage: bt
    };
  }
}, ht = {
  key: 0,
  class: "message-icon"
}, yt = ["src"], Mt = {
  key: 1,
  src: "https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/mc-ui/alert/alert-success.png",
  alt: "success icon",
  class: "message-icon-img"
}, $t = {
  key: 2,
  src: "https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/mc-ui/alert/alert-warning.png",
  alt: "warning icon",
  class: "message-icon-img"
}, Ct = {
  key: 3,
  src: "https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/mc-ui/alert/alert-error.png",
  alt: "error icon",
  class: "message-icon-img"
}, kt = { class: "message-content" }, St = ["innerHTML"], Tt = { key: 2 }, wt = {
  key: 3,
  class: "message-repeat"
}, It = ["onClick"];
function Bt(e, t, n, s, o, a) {
  return l(), f(te, { to: "body" }, [
    A(se, {
      name: "message",
      tag: "div",
      class: "message-container"
    }, {
      default: p(() => [
        (l(!0), m(Z, null, g(s.messages, (r) => (l(), m("div", {
          key: r.id,
          class: P([
            "custom-message",
            `message-${r.type}`,
            `message-${r.placement}`,
            { "message-plain": r.plain }
          ])
        }, [
          r.showIcon ? (l(), m("div", ht, [
            r.customIcon ? (l(), m("img", {
              key: 0,
              src: r.customIcon,
              alt: "custom icon",
              class: "message-icon-img"
            }, null, 8, yt)) : r.type === "success" ? (l(), m("img", Mt)) : r.type === "warning" ? (l(), m("img", $t)) : r.type === "error" ? (l(), m("img", Ct)) : S("", !0)
          ])) : S("", !0),
          $("div", kt, [
            typeof r.message == "function" ? (l(), f(ne(r.message), { key: 0 })) : r.dangerouslyUseHTMLString ? (l(), m("div", {
              key: 1,
              innerHTML: r.message
            }, null, 8, St)) : (l(), m("span", Tt, N(r.message), 1)),
            r.repeatNum > 1 ? (l(), m("span", wt, N(r.repeatNum), 1)) : S("", !0)
          ]),
          r.showClose ? (l(), m("button", {
            key: 1,
            class: "message-close",
            onClick: (i) => s.closeMessage(r.id)
          }, " × ", 8, It)) : S("", !0)
        ], 2))), 128))
      ]),
      _: 1
    })
  ]);
}
const re = /* @__PURE__ */ O(vt, [["render", Bt]]), E = B([]);
let Ot = 0;
const Ds = {
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
      id: ++Ot
    });
    return E.value.push(t), t.duration > 0 && setTimeout(() => {
      this.close(t.id);
    }, t.duration), {
      close: () => this.close(t.id)
    };
  },
  // 关闭指定通知
  close(e) {
    const t = E.value.findIndex((n) => n.id === e);
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
}, Et = (e) => {
  const t = E.value.findIndex((n) => n.id === e);
  t > -1 && E.value.splice(t, 1);
}, Pt = {
  name: "MNotifiMessage",
  setup() {
    return {
      notifications: E,
      closeNotification: Et
    };
  }
}, Nt = { class: "notification-content" }, At = { class: "notification-title" }, jt = { class: "notification-message" }, xt = {
  key: 0,
  class: "notification-action"
}, Lt = ["onClick"];
function Rt(e, t, n, s, o, a) {
  return l(), f(te, { to: "body" }, [
    A(se, {
      name: "notification",
      tag: "div",
      class: "notification-container"
    }, {
      default: p(() => [
        (l(!0), m(Z, null, g(s.notifications, (r) => (l(), m("div", {
          key: r.id,
          class: P([
            "custom-notification",
            `notification-${r.position}`
          ])
        }, [
          t[0] || (t[0] = $("div", { class: "notification-icon" }, [
            $("img", {
              src: "https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/MCImages/userCenter/icon-quota-tip.png",
              alt: "notification icon"
            })
          ], -1)),
          $("div", Nt, [
            $("div", At, N(r.title), 1),
            $("div", jt, N(r.message), 1),
            r.slotContent ? (l(), m("div", xt, [
              (l(), f(ne(r.slotContent)))
            ])) : S("", !0)
          ]),
          r.showClose ? (l(), m("button", {
            key: 0,
            class: "notification-close",
            onClick: (i) => s.closeNotification(r.id)
          }, " × ", 8, Lt)) : S("", !0)
        ], 2))), 128))
      ]),
      _: 1
    })
  ]);
}
const ie = /* @__PURE__ */ O(Pt, [["render", Rt]]), Vt = /* @__PURE__ */ Object.assign({
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
    const { mergedAttrs: t, className: n } = x(
      "mc-datepicker-popper",
      "popperClass"
    );
    return (s, o) => {
      const a = Ve;
      return l(), f(a, v(T(t), { "popper-class": T(n) }), b({ _: 2 }, [
        g(s.$slots, (r, i) => ({
          name: i,
          fn: p(() => [
            u(s.$slots, i)
          ])
        }))
      ]), 1040, ["popper-class"]);
    };
  }
}), zt = [
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
], Ft = {
  name: "MEmpty"
}, Dt = /* @__PURE__ */ Object.assign(Ft, {
  props: {
    image: {
      type: String,
      default: "orders",
      validator: (e) => e.includes("/") || e.includes("http") ? !0 : zt.includes(e)
    }
  },
  setup(e) {
    const t = e, n = j(), s = M(() => {
      const i = n, { image: a } = i;
      return V(i, ["image"]);
    }), o = M(() => {
      const { image: a } = t;
      return a.includes("/") || a.includes("http") ? a : `/images/empty/${a}.png`;
    });
    return (a, r) => {
      const i = ze;
      return l(), f(i, v(s.value, { image: o.value }), b({ _: 2 }, [
        g(a.$slots, (d, h) => ({
          name: h,
          fn: p(() => [
            u(a.$slots, h)
          ])
        }))
      ]), 1040, ["image"]);
    };
  }
}), Gt = /* @__PURE__ */ Object.assign({
  name: "MTable"
}, {
  __name: "Table",
  setup(e) {
    return (t, n) => {
      const s = Fe;
      return l(), f(s, D(G(t.$attrs)), b({ _: 2 }, [
        g(t.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            u(t.$slots, a)
          ])
        }))
      ]), 1040);
    };
  }
}), Ut = /* @__PURE__ */ Object.assign({
  name: "MTableColumn"
}, {
  __name: "TableColumn",
  setup(e) {
    return (t, n) => {
      const s = De;
      return l(), f(s, v(t.$attrs, { class: "m-table-column" }), b({ _: 2 }, [
        g(t.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            u(t.$slots, a)
          ])
        }))
      ]), 1040);
    };
  }
}), qt = { class: "m-banner__content" }, Ht = {
  key: 0,
  class: "m-banner__icon"
}, Wt = { class: "m-banner__text" }, Zt = /* @__PURE__ */ Object.assign({
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
  setup(e, { expose: t, emit: n }) {
    const s = fe(), o = e, a = n, r = B(o.visible);
    z(() => o.visible, (y) => {
      r.value = y;
    });
    const i = M(() => {
      const y = {};
      return o.backgroundColor && (y.backgroundColor = o.backgroundColor), o.textColor && (y.color = o.textColor), o.borderColor && (y.borderColor = o.borderColor), y;
    }), d = {
      info: "info",
      success: "check-circle",
      warning: "warning",
      error: "close-circle"
    };
    M(() => o.icon || d[o.type]);
    const h = () => {
      r.value = !1, a("update:visible", !1), a("close");
    };
    return z(r, (y) => {
      y && o.duration > 0 && setTimeout(() => {
        h();
      }, o.duration);
    }), t({
      close: h
    }), (y, U) => e.visible ? (l(), m("div", {
      key: 0,
      class: P(["m-banner", [
        `m-banner--${e.type}`,
        {
          "m-banner--closable": e.closable,
          "m-banner--with-icon": e.icon || T(s).icon
        }
      ]]),
      style: oe(i.value)
    }, [
      $("div", qt, [
        e.icon || T(s).icon ? (l(), m("div", Ht, [
          u(y.$slots, "icon", {}, () => [
            A(W, {
              name: e.icon,
              size: e.iconSize
            }, null, 8, ["name", "size"])
          ], !0)
        ])) : S("", !0),
        $("div", Wt, [
          u(y.$slots, "default", {}, () => [
            _e(N(e.content), 1)
          ], !0)
        ]),
        e.closable ? (l(), m("div", {
          key: 1,
          class: "m-banner__close",
          onClick: h
        }, [
          A(W, {
            name: "lucide-x",
            size: e.closeIconSize
          }, null, 8, ["size"])
        ])) : S("", !0)
      ])
    ], 6)) : S("", !0);
  }
}), Jt = /* @__PURE__ */ O(Zt, [["__scopeId", "data-v-00c80323"]]), Qt = {
  name: "MTabs",
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    closable: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "tab-click", "tab-remove", "tab-change", "tab-add", "edit"],
  setup(e, { emit: t }) {
    const n = B(null), s = B([]), o = B(e.modelValue), a = B({ width: "0px", left: "0px" }), r = () => {
      be(() => {
        if (!n.value || s.value.length === 0) {
          a.value = { width: "0px", left: "0px" };
          return;
        }
        const _ = o.value;
        if (!_) {
          a.value = { width: "0px", left: "0px" };
          return;
        }
        const C = s.value.findIndex((ce) => ce.name === _);
        if (C === -1) {
          a.value = { width: "0px", left: "0px" };
          return;
        }
        const q = n.value.querySelectorAll(".m-tabs__item")[C];
        if (!q) {
          a.value = { width: "0px", left: "0px" };
          return;
        }
        const le = q.offsetLeft + q.offsetWidth / 2 - 8;
        a.value = {
          width: "16px",
          left: `${le}px`
        };
      });
    }, i = (_) => {
      if (_ === o.value) return;
      const C = o.value;
      o.value = _, t("update:modelValue", _), t("tab-click", _), t("tab-change", _, C), r();
    }, d = (_) => {
      t("tab-remove", _), t("edit", _, "remove");
    }, h = () => {
      t("tab-add"), t("edit", null, "add");
    }, y = (_) => {
      const C = s.value.findIndex((L) => L.name === _.name);
      C === -1 ? s.value.push(_) : s.value[C] = _;
    }, U = (_) => {
      const C = s.value.findIndex((L) => L.name === _);
      C > -1 && s.value.splice(C, 1);
    };
    return ge("tabsContext", {
      activeTab: o,
      registerTab: y,
      unregisterTab: U,
      handleTabRemove: d,
      handleTabAdd: h
    }), z(() => e.modelValue, (_, C) => {
      _ !== o.value && (o.value = _, t("tab-change", _, C), r());
    }), z(s, () => {
      r();
    }, { deep: !0 }), ae(() => {
      if (!o.value && s.value.length > 0) {
        const _ = s.value[0];
        o.value = _.name, t("update:modelValue", o.value);
      }
      r();
    }), {
      navRef: n,
      tabs: s,
      activeTab: o,
      activeBarStyle: a,
      handleTabClick: i,
      handleTabRemove: d,
      handleTabAdd: h,
      registerTab: y,
      unregisterTab: U,
      updateActiveBarPosition: r
    };
  }
}, Xt = { class: "m-tabs" }, Yt = { class: "m-tabs__header" }, Kt = {
  class: "m-tabs__nav",
  ref: "navRef"
}, es = ["onClick"], ts = { class: "m-tabs__content" };
function ss(e, t, n, s, o, a) {
  return l(), m("div", Xt, [
    $("div", Yt, [
      $("div", Kt, [
        (l(!0), m(Z, null, g(s.tabs, (r, i) => (l(), m("div", {
          key: r.name,
          class: P([
            "m-tabs__item",
            { "is-active": s.activeTab === r.name }
          ]),
          onClick: (d) => s.handleTabClick(r.name)
        }, N(r.label), 11, es))), 128)),
        $("div", {
          class: "m-tabs__active-bar",
          style: oe(s.activeBarStyle)
        }, null, 4)
      ], 512)
    ]),
    $("div", ts, [
      u(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const ns = /* @__PURE__ */ O(Qt, [["render", ss], ["__scopeId", "data-v-402b42a8"]]), os = {
  name: "MTabPane",
  props: {
    label: {
      type: String,
      required: !0
    },
    name: {
      type: [String, Number],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    closable: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = ye("tabsContext"), n = M(() => e.name || e.label), s = M(() => t.activeTab.value === n.value);
    return ae(() => {
      const o = {
        label: e.label,
        name: n.value,
        disabled: e.disabled,
        closable: e.closable
      };
      t.registerTab(o);
    }), Me(() => {
      t.unregisterTab(n.value);
    }), {
      isActive: s,
      tabName: n
    };
  }
};
function as(e, t, n, s, o, a) {
  return ve((l(), m("div", {
    class: P(["m-tab-pane", { "is-active": s.isActive }])
  }, [
    u(e.$slots, "default", {}, void 0, !0)
  ], 2)), [
    [he, s.isActive]
  ]);
}
const rs = /* @__PURE__ */ O(os, [["render", as], ["__scopeId", "data-v-31f89b3b"]]);
function F(e) {
  e && e.classList && e.classList.add("mc-ui-override");
}
function is(e) {
  e && e.$el && F(e.$el);
}
function ls() {
  typeof document != "undefined" && (document.body.classList.add("mc-ui-override"), new MutationObserver((t) => {
    t.forEach((n) => {
      n.addedNodes.forEach((s) => {
        if (s.nodeType === 1 && s.classList) {
          if (s.className && typeof s.className == "string" && s.className.includes("el-")) {
            const a = s.closest(".mc-ui-override") || s.parentElement;
            a && !a.classList.contains("mc-ui-override") && a.classList.add("mc-ui-override");
          }
          s.querySelectorAll('[class*="el-"]').forEach((a) => {
            const r = a.closest(".mc-ui-override") || a.parentElement;
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
function cs(e = '[class*="el-"]') {
  typeof document != "undefined" && document.querySelectorAll(e).forEach((n) => {
    const s = n.closest(".mc-ui-override") || n.parentElement;
    s && !s.classList.contains("mc-ui-override") && s.classList.add("mc-ui-override");
  });
}
function us(e) {
  return I(k({}, e), {
    mounted() {
      F(this.$el), e.mounted && e.mounted.call(this);
    },
    updated() {
      F(this.$el), e.updated && e.updated.call(this);
    }
  });
}
const ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addComponentOverride: is,
  addOverrideClass: F,
  applyGlobalOverride: ls,
  createOverrideComponent: us,
  forceRefreshStyles: cs
}, Symbol.toStringTag, { value: "Module" })), J = [W, qe, He, We, Ze, Xe, Ye, Ke, et, tt, st, nt, ot, at, rt, ut, mt, ft, re, ie, Vt, Dt, Gt, Ut, Jt, ns, rs], ps = [
  { id: "global-message-container", component: re },
  { id: "global-notification-container", component: ie }
];
function ds(n) {
  return H(this, arguments, function* ({ id: e, component: t }) {
    try {
      if (document.getElementById(e)) return;
      const { createApp: s, h: o } = yield import("vue"), a = document.createElement("div");
      a.id = e, document.body.appendChild(a), s({
        render: () => o(t)
      }).mount(`#${e}`);
    } catch (s) {
      console.warn(`Failed to create global component ${e}:`, s);
    }
  });
}
function fs() {
  return H(this, null, function* () {
    const e = ps.map(ds);
    yield Promise.all(e);
  });
}
const c = {};
function _s(e) {
  const t = J.map((n) => {
    if (n && n.name && typeof n.name == "string") {
      let s = n.name.toLowerCase();
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
  Object.entries(ee).forEach(([n, s]) => {
    if (s && s.name && typeof s.name == "string" && s.name.startsWith("El")) {
      const o = "m-" + s.name.slice(2).replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
      t.includes(o) || e._context.components[o] || e.component(o, s);
      const a = "M" + s.name.slice(2);
      c[a] = s;
    }
  });
}
const gs = (e) => {
  typeof window != "undefined" && Promise.resolve().then(() => ms).then(({ applyGlobalOverride: t }) => {
    t();
  }), console.log("🚀 开始安装 @mc-markets/ui 组件库..."), J.forEach((t) => {
    if (t && t.name && typeof t.name == "string") {
      let n = t.name.toLowerCase();
      n = {
        mradiogroup: "m-radio-group",
        mradiobutton: "m-radio-button",
        mformitem: "m-form-item",
        moptiongroup: "m-option-group",
        mtabs: "m-tabs",
        mtabpane: "m-tab-pane"
      }[n] || n.replace(/^m/, "m-"), e.component(n, t);
    }
  }), _s(e), typeof window != "undefined" && fs();
};
function Gs(e) {
  const t = Object.keys(e._context.components || {}), n = J.map((s) => {
    if (s && s.name && typeof s.name == "string") {
      let o = s.name.toLowerCase();
      return {
        mradiogroup: "m-radio-group",
        mradiobutton: "m-radio-button",
        mformitem: "m-form-item",
        moptiongroup: "m-option-group",
        mtabs: "m-tabs",
        mtabpane: "m-tab-pane"
      }[o] || o.replace(/^m/, "m-");
    }
    return null;
  }).filter(Boolean);
  return console.log("📊 组件注册状态报告:"), console.log("已注册的组件:", t.filter((s) => s.startsWith("m-"))), console.log("自定义组件:", n), {
    registered: t,
    custom: n,
    conflicts: t.filter(
      (s) => s.startsWith("m-") && n.includes(s)
    )
  };
}
const Us = { install: gs }, qs = ee.ElMessageBox, Hs = k({}, c), Ws = c.MButtonGroup, Zs = c.MBreadcrumb, Js = c.MBreadcrumbItem, Qs = c.MCarousel, Xs = c.MCarouselItem, Ys = c.MCascader, Ks = c.MCascaderPanel, en = c.MCheckTag, tn = c.MCalendar, sn = c.MTimePicker, nn = c.MDateTimePicker, on = c.MColorPicker, an = c.MTransfer, rn = c.MTree, ln = c.MTreeSelect, cn = c.MUpload, un = c.MImage, mn = c.MImageViewer, pn = c.MBacktop, dn = c.MInfiniteScroll, fn = c.MAffix, _n = c.MScrollbar, gn = c.MResult, bn = c.MSkeleton, vn = c.MLoading, hn = c.MSpinner, yn = c.MProgress, Mn = c.MBadge, $n = c.MAvatar, Cn = c.MImagePreview, kn = c.MTeleport, Sn = c.MConfigProvider;
export {
  fn as MAffix,
  ut as MAlert,
  $n as MAvatar,
  pn as MBacktop,
  Mn as MBadge,
  Jt as MBanner,
  Zs as MBreadcrumb,
  Js as MBreadcrumbItem,
  qe as MButton,
  Ws as MButtonGroup,
  tn as MCalendar,
  Qs as MCarousel,
  Xs as MCarouselItem,
  Ys as MCascader,
  Ks as MCascaderPanel,
  en as MCheckTag,
  on as MColorPicker,
  Sn as MConfigProvider,
  Vt as MDatePicker,
  nn as MDateTimePicker,
  mt as MDialog,
  Dt as MEmpty,
  We as MForm,
  Ze as MFormItem,
  W as MIcon,
  un as MImage,
  Cn as MImagePreview,
  mn as MImageViewer,
  dn as MInfiniteScroll,
  He as MInput,
  vn as MLoading,
  re as MMessage,
  qs as MMessageBox,
  ie as MNotifiMessage,
  ft as MNotification,
  tt as MPagination,
  yn as MProgress,
  st as MRadio,
  ot as MRadioButton,
  nt as MRadioGroup,
  gn as MResult,
  _n as MScrollbar,
  Ye as MSelect,
  bn as MSkeleton,
  hn as MSpinner,
  at as MSwitch,
  rs as MTabPane,
  Gt as MTable,
  Ut as MTableColumn,
  ns as MTabs,
  rt as MTag,
  kn as MTeleport,
  sn as MTimePicker,
  Xe as MTooltip,
  an as MTransfer,
  rn as MTree,
  ln as MTreeSelect,
  cn as MUpload,
  gt as Message,
  Ds as NotifiMessage,
  is as addComponentOverride,
  F as addOverrideClass,
  ls as applyGlobalOverride,
  Gs as checkComponentRegistration,
  us as createOverrideComponent,
  Us as default,
  cs as forceRefreshStyles,
  Hs as mComponents
};
//# sourceMappingURL=index.mjs.map
