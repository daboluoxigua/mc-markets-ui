var ue = Object.defineProperty, me = Object.defineProperties;
var de = Object.getOwnPropertyDescriptors;
var R = Object.getOwnPropertySymbols;
var X = Object.prototype.hasOwnProperty, Y = Object.prototype.propertyIsEnumerable;
var Q = (e, t, n) => t in e ? ue(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, k = (e, t) => {
  for (var n in t || (t = {}))
    X.call(t, n) && Q(e, n, t[n]);
  if (R)
    for (var n of R(t))
      Y.call(t, n) && Q(e, n, t[n]);
  return e;
}, w = (e, t) => me(e, de(t));
var V = (e, t) => {
  var n = {};
  for (var s in e)
    X.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && R)
    for (var s of R(e))
      t.indexOf(s) < 0 && Y.call(e, s) && (n[s] = e[s]);
  return n;
};
var W = (e, t, n) => new Promise((s, o) => {
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
import { computed as $, createElementBlock as u, openBlock as l, mergeProps as v, renderSlot as m, createBlock as f, createSlots as b, renderList as _, withCtx as p, ref as B, useAttrs as j, unref as T, normalizeProps as D, guardReactiveProps as G, createCommentVNode as S, createElementVNode as y, Fragment as U, normalizeClass as P, mergeModels as K, useModel as pe, createVNode as A, Teleport as te, TransitionGroup as se, resolveDynamicComponent as ne, toDisplayString as N, useSlots as fe, watch as z, normalizeStyle as oe, createTextVNode as _e, provide as ge, onMounted as ae, nextTick as be, withDirectives as ve, vShow as he, inject as ye, onUnmounted as $e } from "vue";
import { ElButton as Me, ElInput as Ce, ElForm as ke, ElFormItem as Se, ElTooltip as Te, ElSelect as Ie, ElOption as we, ElOptionGroup as Be, ElPagination as Oe, ElRadio as Ee, ElRadioGroup as Pe, ElRadioButton as Ne, ElSwitch as Ae, ElTag as je, ElAlert as xe, ElDialog as Le, ElNotification as Re, ElDatePicker as Ve, ElEmpty as ze, ElTable as Fe, ElTableColumn as De } from "element-plus/es";
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
    const n = e, s = t, o = $(() => {
      const i = ["iconfont"];
      return n.name && i.push(`${n.prefix}-${n.name}`), n.spin && i.push("icon-spin"), n.pulse && i.push("icon-pulse"), n.flip && i.push(`icon-flip-${n.flip}`), i;
    }), a = $(() => {
      const i = {};
      return n.size && (typeof n.size == "number" ? i.fontSize = `${n.size}px` : i.fontSize = n.size), n.color && (i.color = n.color), n.rotate !== 0 && (i.transform = `rotate(${n.rotate}deg)`), i;
    }), r = (i) => {
      s("click", i);
    };
    return (i, d) => (l(), u("i", v({
      class: o.value,
      style: a.value
    }, i.$attrs, { onClick: r }), [
      m(i.$slots, "default", {}, void 0, !0)
    ], 16));
  }
}), Z = /* @__PURE__ */ O(Ge, [["__scopeId", "data-v-90f84c9e"]]), Ue = /* @__PURE__ */ Object.assign({
  name: "MButton"
}, {
  __name: "Button",
  setup(e) {
    return (t, n) => {
      const s = Me;
      return l(), f(s, v(t.$attrs, { class: "m-button" }), b({ _: 2 }, [
        _(t.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            m(t.$slots, a, {}, void 0, !0)
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
        _(t.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            m(t.$slots, a)
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
        _(s.$slots, (r, i) => ({
          name: i,
          fn: p(() => [
            m(s.$slots, i)
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
        _(t.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            m(t.$slots, a)
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
  const n = j(), s = $(() => Qe(n, t)), o = $(() => Je(e, n[t]));
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
        _(s.$slots, (r, i) => ({
          name: i,
          fn: p(() => [
            m(s.$slots, i)
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
      const s = Ie;
      return l(), f(s, v({
        class: ["m-select", { solid: t.$attrs.styleType === "solid" }],
        "show-arrow": !1
      }, t.$attrs), b({ _: 2 }, [
        _(t.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            m(t.$slots, a)
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
      const s = we;
      return l(), f(s, D(G(t.$attrs)), b({ _: 2 }, [
        _(t.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            m(t.$slots, a)
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
        _(t.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            m(t.$slots, a)
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
        _(t.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            m(t.$slots, a)
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
        _(n.$slots, (a, r) => ({
          name: r,
          fn: p(() => [
            m(n.$slots, r)
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
    const t = j(), n = $(() => {
      const o = "mc-radio-group-popper";
      return t.popperClass ? `${o} ${t.popperClass}`.trim() : o;
    }), s = $(() => {
      const r = t, { popperClass: o } = r;
      return V(r, ["popperClass"]);
    });
    return (o, a) => {
      const r = Pe;
      return l(), f(r, v(s.value, {
        "popper-class": n.value,
        class: "m-radio-group"
      }), b({ _: 2 }, [
        _(o.$slots, (i, d) => ({
          name: d,
          fn: p(() => [
            m(o.$slots, d)
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
        _(n.$slots, (a, r) => ({
          name: r,
          fn: p(() => [
            m(n.$slots, r)
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
        _(s.$slots, (r, i) => ({
          name: i,
          fn: p(() => [
            m(s.$slots, i)
          ])
        }))
      ]), 1040, ["popper-class"]);
    };
  }
}), rt = {
  key: 0,
  class: "custom-spinner"
}, it = { class: "ldio-spinner" }, lt = /* @__PURE__ */ Object.assign({
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
    }
  },
  setup(e) {
    const t = e, n = $(() => t.prefixIcon);
    return (s, o) => {
      const a = je;
      return l(), f(a, v(s.$attrs, {
        class: ["m-tag", { "is-loading": e.loading }]
      }), b({ _: 2 }, [
        _(s.$slots, (r, i) => ({
          name: i,
          fn: p(() => [
            e.loading && !e.prefixIcon ? (l(), u("div", rt, [
              y("div", it, [
                (l(), u(U, null, _(8, (d) => y("div", { key: d })), 64))
              ])
            ])) : n.value ? (l(), u("i", {
              key: 1,
              class: P(["prefixIcon", ["iconfont", n.value]])
            }, null, 2)) : S("", !0),
            y("div", null, [
              m(s.$slots, i)
            ]),
            e.suffixIcon ? (l(), u("i", {
              key: 2,
              class: P(["suffixIcon", ["iconfont", e.suffixIcon]])
            }, null, 2)) : S("", !0)
          ])
        }))
      ]), 1040, ["class"]);
    };
  }
}), ct = ["src", "alt"], ut = ["success", "warning", "error"], mt = {
  name: "MAlert"
}, dt = /* @__PURE__ */ Object.assign(mt, {
  props: {
    type: {
      type: String,
      default: "success",
      validator: (e) => ut.includes(e)
    },
    useCustomIcon: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const t = e, n = j(), s = $(() => {
      const i = n, { useCustomIcon: a } = i, r = V(i, ["useCustomIcon"]);
      return w(k({}, r), {
        type: t.type
        // 确保 type 属性正确传递给 el-alert
      });
    }), o = $(() => t.useCustomIcon ? `https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/mc-ui/alert/alert-${t.type}.png` : null);
    return (a, r) => {
      const i = xe;
      return l(), f(i, v(s.value, { class: "mc-alert" }), b({ _: 2 }, [
        o.value ? {
          name: "icon",
          fn: p(() => [
            y("img", {
              src: o.value,
              alt: `${e.type} icon`,
              class: "mc-alert-icon"
            }, null, 8, ct)
          ]),
          key: "0"
        } : void 0,
        _(a.$slots, (d, h) => ({
          name: h,
          fn: p(() => [
            m(a.$slots, h)
          ])
        }))
      ]), 1040);
    };
  }
}), pt = /* @__PURE__ */ Object.assign({
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
    const n = pe(e, "modelValue");
    return (s, o) => {
      const a = Le;
      return l(), u("div", null, [
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
            m(s.$slots, "default")
          ]),
          _: 2
        }, [
          s.$slots.header ? {
            name: "header",
            fn: p(({ close: r, titleId: i, titleClass: d }) => [
              m(s.$slots, "header", D(G({ close: r, titleId: i, titleClass: d })))
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
}), ft = {
  name: "MNotification"
};
function _t(e, t, n, s, o, a) {
  const r = Re;
  return l(), f(r, v(e.$attrs, { class: "mc-notification" }), b({ _: 2 }, [
    _(e.$slots, (i, d) => ({
      name: d,
      fn: p(() => [
        m(e.$slots, d)
      ])
    }))
  ]), 1040);
}
const gt = /* @__PURE__ */ O(ft, [["render", _t]]), I = B([]);
let bt = 0;
const vt = {
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
    const t = w(k(k({}, this.defaultOptions), e), {
      id: ++bt
    });
    if (t.grouping) {
      const n = I.value.findIndex(
        (s) => s.message === t.message && s.type === t.type && s.grouping
      );
      if (n > -1)
        return I.value[n].repeatNum++, { close: () => this.close(I.value[n].id) };
    }
    return I.value.push(t), t.duration > 0 && setTimeout(() => {
      this.close(t.id);
    }, t.duration), {
      close: () => this.close(t.id)
    };
  },
  // 关闭指定消息
  close(e) {
    const t = I.value.findIndex((n) => n.id === e);
    if (t > -1) {
      const n = I.value[t];
      n.onClose && n.onClose(n), I.value.splice(t, 1);
    }
  },
  // 关闭所有消息
  closeAll() {
    I.value = [];
  },
  // 便捷方法
  success(e = {}) {
    return typeof e == "string" && (e = { message: e }), this.show(w(k({}, e), { type: "success" }));
  },
  warning(e = {}) {
    return typeof e == "string" && (e = { message: e }), this.show(w(k({}, e), { type: "warning" }));
  },
  error(e = {}) {
    return typeof e == "string" && (e = { message: e }), this.show(w(k({}, e), { type: "error" }));
  }
}, ht = (e) => {
  vt.close(e);
}, yt = {
  name: "MMessage",
  setup() {
    return {
      messages: I,
      closeMessage: ht
    };
  }
}, $t = {
  key: 0,
  class: "message-icon"
}, Mt = ["src"], Ct = {
  key: 1,
  src: "https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/mc-ui/alert/alert-success.png",
  alt: "success icon",
  class: "message-icon-img"
}, kt = {
  key: 2,
  src: "https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/mc-ui/alert/alert-warning.png",
  alt: "warning icon",
  class: "message-icon-img"
}, St = {
  key: 3,
  src: "https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/mc-ui/alert/alert-error.png",
  alt: "error icon",
  class: "message-icon-img"
}, Tt = { class: "message-content" }, It = ["innerHTML"], wt = { key: 2 }, Bt = {
  key: 3,
  class: "message-repeat"
}, Ot = ["onClick"];
function Et(e, t, n, s, o, a) {
  return l(), f(te, { to: "body" }, [
    A(se, {
      name: "message",
      tag: "div",
      class: "message-container"
    }, {
      default: p(() => [
        (l(!0), u(U, null, _(s.messages, (r) => (l(), u("div", {
          key: r.id,
          class: P([
            "custom-message",
            `message-${r.type}`,
            `message-${r.placement}`,
            { "message-plain": r.plain }
          ])
        }, [
          r.showIcon ? (l(), u("div", $t, [
            r.customIcon ? (l(), u("img", {
              key: 0,
              src: r.customIcon,
              alt: "custom icon",
              class: "message-icon-img"
            }, null, 8, Mt)) : r.type === "success" ? (l(), u("img", Ct)) : r.type === "warning" ? (l(), u("img", kt)) : r.type === "error" ? (l(), u("img", St)) : S("", !0)
          ])) : S("", !0),
          y("div", Tt, [
            typeof r.message == "function" ? (l(), f(ne(r.message), { key: 0 })) : r.dangerouslyUseHTMLString ? (l(), u("div", {
              key: 1,
              innerHTML: r.message
            }, null, 8, It)) : (l(), u("span", wt, N(r.message), 1)),
            r.repeatNum > 1 ? (l(), u("span", Bt, N(r.repeatNum), 1)) : S("", !0)
          ]),
          r.showClose ? (l(), u("button", {
            key: 1,
            class: "message-close",
            onClick: (i) => s.closeMessage(r.id)
          }, " × ", 8, Ot)) : S("", !0)
        ], 2))), 128))
      ]),
      _: 1
    })
  ]);
}
const re = /* @__PURE__ */ O(yt, [["render", Et]]), E = B([]);
let Pt = 0;
const Us = {
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
    const t = w(k(k({}, this.defaultOptions), e), {
      id: ++Pt
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
}, Nt = (e) => {
  const t = E.value.findIndex((n) => n.id === e);
  t > -1 && E.value.splice(t, 1);
}, At = {
  name: "MNotifiMessage",
  setup() {
    return {
      notifications: E,
      closeNotification: Nt
    };
  }
}, jt = { class: "notification-content" }, xt = { class: "notification-title" }, Lt = { class: "notification-message" }, Rt = {
  key: 0,
  class: "notification-action"
}, Vt = ["onClick"];
function zt(e, t, n, s, o, a) {
  return l(), f(te, { to: "body" }, [
    A(se, {
      name: "notification",
      tag: "div",
      class: "notification-container"
    }, {
      default: p(() => [
        (l(!0), u(U, null, _(s.notifications, (r) => (l(), u("div", {
          key: r.id,
          class: P([
            "custom-notification",
            `notification-${r.position}`
          ])
        }, [
          t[0] || (t[0] = y("div", { class: "notification-icon" }, [
            y("img", {
              src: "https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/MCImages/userCenter/icon-quota-tip.png",
              alt: "notification icon"
            })
          ], -1)),
          y("div", jt, [
            y("div", xt, N(r.title), 1),
            y("div", Lt, N(r.message), 1),
            r.slotContent ? (l(), u("div", Rt, [
              (l(), f(ne(r.slotContent)))
            ])) : S("", !0)
          ]),
          r.showClose ? (l(), u("button", {
            key: 0,
            class: "notification-close",
            onClick: (i) => s.closeNotification(r.id)
          }, " × ", 8, Vt)) : S("", !0)
        ], 2))), 128))
      ]),
      _: 1
    })
  ]);
}
const ie = /* @__PURE__ */ O(At, [["render", zt]]), Ft = /* @__PURE__ */ Object.assign({
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
        _(s.$slots, (r, i) => ({
          name: i,
          fn: p(() => [
            m(s.$slots, i)
          ])
        }))
      ]), 1040, ["popper-class"]);
    };
  }
}), Dt = [
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
], Gt = {
  name: "MEmpty"
}, Ut = /* @__PURE__ */ Object.assign(Gt, {
  props: {
    image: {
      type: String,
      default: "orders",
      validator: (e) => e.includes("/") || e.includes("http") ? !0 : Dt.includes(e)
    }
  },
  setup(e) {
    const t = e, n = j(), s = $(() => {
      const i = n, { image: a } = i;
      return V(i, ["image"]);
    }), o = $(() => {
      const { image: a } = t;
      return a.includes("/") || a.includes("http") ? a : `/images/empty/${a}.png`;
    });
    return (a, r) => {
      const i = ze;
      return l(), f(i, v(s.value, { image: o.value }), b({ _: 2 }, [
        _(a.$slots, (d, h) => ({
          name: h,
          fn: p(() => [
            m(a.$slots, h)
          ])
        }))
      ]), 1040, ["image"]);
    };
  }
}), qt = /* @__PURE__ */ Object.assign({
  name: "MTable"
}, {
  __name: "Table",
  setup(e) {
    return (t, n) => {
      const s = Fe;
      return l(), f(s, D(G(t.$attrs)), b({ _: 2 }, [
        _(t.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            m(t.$slots, a)
          ])
        }))
      ]), 1040);
    };
  }
}), Ht = /* @__PURE__ */ Object.assign({
  name: "MTableColumn"
}, {
  __name: "TableColumn",
  setup(e) {
    return (t, n) => {
      const s = De;
      return l(), f(s, v(t.$attrs, { class: "m-table-column" }), b({ _: 2 }, [
        _(t.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            m(t.$slots, a)
          ])
        }))
      ]), 1040);
    };
  }
}), Wt = { class: "m-banner__content" }, Zt = {
  key: 0,
  class: "m-banner__icon"
}, Jt = { class: "m-banner__text" }, Qt = /* @__PURE__ */ Object.assign({
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
    z(() => o.visible, (M) => {
      r.value = M;
    });
    const i = $(() => {
      const M = {};
      return o.backgroundColor && (M.backgroundColor = o.backgroundColor), o.textColor && (M.color = o.textColor), o.borderColor && (M.borderColor = o.borderColor), M;
    }), d = {
      info: "info",
      success: "check-circle",
      warning: "warning",
      error: "close-circle"
    };
    $(() => o.icon || d[o.type]);
    const h = () => {
      r.value = !1, a("update:visible", !1), a("close");
    };
    return z(r, (M) => {
      M && o.duration > 0 && setTimeout(() => {
        h();
      }, o.duration);
    }), t({
      close: h
    }), (M, q) => e.visible ? (l(), u("div", {
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
      y("div", Wt, [
        e.icon || T(s).icon ? (l(), u("div", Zt, [
          m(M.$slots, "icon", {}, () => [
            A(Z, {
              name: e.icon,
              size: e.iconSize
            }, null, 8, ["name", "size"])
          ], !0)
        ])) : S("", !0),
        y("div", Jt, [
          m(M.$slots, "default", {}, () => [
            _e(N(e.content), 1)
          ], !0)
        ]),
        e.closable ? (l(), u("div", {
          key: 1,
          class: "m-banner__close",
          onClick: h
        }, [
          A(Z, {
            name: "lucide-x",
            size: e.closeIconSize
          }, null, 8, ["size"])
        ])) : S("", !0)
      ])
    ], 6)) : S("", !0);
  }
}), Xt = /* @__PURE__ */ O(Qt, [["__scopeId", "data-v-00c80323"]]), Yt = {
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
        const g = o.value;
        if (!g) {
          a.value = { width: "0px", left: "0px" };
          return;
        }
        const C = s.value.findIndex((ce) => ce.name === g);
        if (C === -1) {
          a.value = { width: "0px", left: "0px" };
          return;
        }
        const H = n.value.querySelectorAll(".m-tabs__item")[C];
        if (!H) {
          a.value = { width: "0px", left: "0px" };
          return;
        }
        const le = H.offsetLeft + H.offsetWidth / 2 - 8;
        a.value = {
          width: "16px",
          left: `${le}px`
        };
      });
    }, i = (g) => {
      if (g === o.value) return;
      const C = o.value;
      o.value = g, t("update:modelValue", g), t("tab-click", g), t("tab-change", g, C), r();
    }, d = (g) => {
      t("tab-remove", g), t("edit", g, "remove");
    }, h = () => {
      t("tab-add"), t("edit", null, "add");
    }, M = (g) => {
      const C = s.value.findIndex((L) => L.name === g.name);
      C === -1 ? s.value.push(g) : s.value[C] = g;
    }, q = (g) => {
      const C = s.value.findIndex((L) => L.name === g);
      C > -1 && s.value.splice(C, 1);
    };
    return ge("tabsContext", {
      activeTab: o,
      registerTab: M,
      unregisterTab: q,
      handleTabRemove: d,
      handleTabAdd: h
    }), z(() => e.modelValue, (g, C) => {
      g !== o.value && (o.value = g, t("tab-change", g, C), r());
    }), z(s, () => {
      r();
    }, { deep: !0 }), ae(() => {
      if (!o.value && s.value.length > 0) {
        const g = s.value[0];
        o.value = g.name, t("update:modelValue", o.value);
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
      registerTab: M,
      unregisterTab: q,
      updateActiveBarPosition: r
    };
  }
}, Kt = { class: "m-tabs" }, es = { class: "m-tabs__header" }, ts = {
  class: "m-tabs__nav",
  ref: "navRef"
}, ss = ["onClick"], ns = { class: "m-tabs__content" };
function os(e, t, n, s, o, a) {
  return l(), u("div", Kt, [
    y("div", es, [
      y("div", ts, [
        (l(!0), u(U, null, _(s.tabs, (r, i) => (l(), u("div", {
          key: r.name,
          class: P([
            "m-tabs__item",
            { "is-active": s.activeTab === r.name }
          ]),
          onClick: (d) => s.handleTabClick(r.name)
        }, N(r.label), 11, ss))), 128)),
        y("div", {
          class: "m-tabs__active-bar",
          style: oe(s.activeBarStyle)
        }, null, 4)
      ], 512)
    ]),
    y("div", ns, [
      m(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const as = /* @__PURE__ */ O(Yt, [["render", os], ["__scopeId", "data-v-402b42a8"]]), rs = {
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
    const t = ye("tabsContext"), n = $(() => e.name || e.label), s = $(() => t.activeTab.value === n.value);
    return ae(() => {
      const o = {
        label: e.label,
        name: n.value,
        disabled: e.disabled,
        closable: e.closable
      };
      t.registerTab(o);
    }), $e(() => {
      t.unregisterTab(n.value);
    }), {
      isActive: s,
      tabName: n
    };
  }
};
function is(e, t, n, s, o, a) {
  return ve((l(), u("div", {
    class: P(["m-tab-pane", { "is-active": s.isActive }])
  }, [
    m(e.$slots, "default", {}, void 0, !0)
  ], 2)), [
    [he, s.isActive]
  ]);
}
const ls = /* @__PURE__ */ O(rs, [["render", is], ["__scopeId", "data-v-31f89b3b"]]);
function F(e) {
  e && e.classList && e.classList.add("mc-ui-override");
}
function cs(e) {
  e && e.$el && F(e.$el);
}
function us() {
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
function ms(e = '[class*="el-"]') {
  typeof document != "undefined" && document.querySelectorAll(e).forEach((n) => {
    const s = n.closest(".mc-ui-override") || n.parentElement;
    s && !s.classList.contains("mc-ui-override") && s.classList.add("mc-ui-override");
  });
}
function ds(e) {
  return w(k({}, e), {
    mounted() {
      F(this.$el), e.mounted && e.mounted.call(this);
    },
    updated() {
      F(this.$el), e.updated && e.updated.call(this);
    }
  });
}
const ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addComponentOverride: cs,
  addOverrideClass: F,
  applyGlobalOverride: us,
  createOverrideComponent: ds,
  forceRefreshStyles: ms
}, Symbol.toStringTag, { value: "Module" })), J = [Z, qe, He, We, Ze, Xe, Ye, Ke, et, tt, st, nt, ot, at, lt, dt, pt, gt, re, ie, Ft, Ut, qt, Ht, Xt, as, ls], fs = [
  { id: "global-message-container", component: re },
  { id: "global-notification-container", component: ie }
];
function _s(n) {
  return W(this, arguments, function* ({ id: e, component: t }) {
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
function gs() {
  return W(this, null, function* () {
    const e = fs.map(_s);
    yield Promise.all(e);
  });
}
const c = {};
function bs(e) {
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
const vs = (e) => {
  typeof window != "undefined" && Promise.resolve().then(() => ps).then(({ applyGlobalOverride: t }) => {
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
  }), bs(e), typeof window != "undefined" && gs();
};
function qs(e) {
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
const Hs = { install: vs }, Ws = ee.ElMessageBox, Zs = k({}, c), Js = c.MButtonGroup, Qs = c.MBreadcrumb, Xs = c.MBreadcrumbItem, Ys = c.MCarousel, Ks = c.MCarouselItem, en = c.MCascader, tn = c.MCascaderPanel, sn = c.MCheckTag, nn = c.MCalendar, on = c.MTimePicker, an = c.MDateTimePicker, rn = c.MColorPicker, ln = c.MTransfer, cn = c.MTree, un = c.MTreeSelect, mn = c.MUpload, dn = c.MImage, pn = c.MImageViewer, fn = c.MBacktop, _n = c.MInfiniteScroll, gn = c.MAffix, bn = c.MScrollbar, vn = c.MResult, hn = c.MSkeleton, yn = c.MLoading, $n = c.MSpinner, Mn = c.MProgress, Cn = c.MBadge, kn = c.MAvatar, Sn = c.MImagePreview, Tn = c.MTeleport, In = c.MConfigProvider;
export {
  gn as MAffix,
  dt as MAlert,
  kn as MAvatar,
  fn as MBacktop,
  Cn as MBadge,
  Xt as MBanner,
  Qs as MBreadcrumb,
  Xs as MBreadcrumbItem,
  qe as MButton,
  Js as MButtonGroup,
  nn as MCalendar,
  Ys as MCarousel,
  Ks as MCarouselItem,
  en as MCascader,
  tn as MCascaderPanel,
  sn as MCheckTag,
  rn as MColorPicker,
  In as MConfigProvider,
  Ft as MDatePicker,
  an as MDateTimePicker,
  pt as MDialog,
  Ut as MEmpty,
  We as MForm,
  Ze as MFormItem,
  Z as MIcon,
  dn as MImage,
  Sn as MImagePreview,
  pn as MImageViewer,
  _n as MInfiniteScroll,
  He as MInput,
  yn as MLoading,
  re as MMessage,
  Ws as MMessageBox,
  ie as MNotifiMessage,
  gt as MNotification,
  tt as MPagination,
  Mn as MProgress,
  st as MRadio,
  ot as MRadioButton,
  nt as MRadioGroup,
  vn as MResult,
  bn as MScrollbar,
  Ye as MSelect,
  hn as MSkeleton,
  $n as MSpinner,
  at as MSwitch,
  ls as MTabPane,
  qt as MTable,
  Ht as MTableColumn,
  as as MTabs,
  lt as MTag,
  Tn as MTeleport,
  on as MTimePicker,
  Xe as MTooltip,
  ln as MTransfer,
  cn as MTree,
  un as MTreeSelect,
  mn as MUpload,
  vt as Message,
  Us as NotifiMessage,
  cs as addComponentOverride,
  F as addOverrideClass,
  us as applyGlobalOverride,
  qs as checkComponentRegistration,
  ds as createOverrideComponent,
  Hs as default,
  ms as forceRefreshStyles,
  Zs as mComponents
};
//# sourceMappingURL=index.mjs.map
