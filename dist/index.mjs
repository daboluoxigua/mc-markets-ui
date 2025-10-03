var pe = Object.defineProperty, fe = Object.defineProperties;
var _e = Object.getOwnPropertyDescriptors;
var F = Object.getOwnPropertySymbols;
var X = Object.prototype.hasOwnProperty, Y = Object.prototype.propertyIsEnumerable;
var Q = (e, s, n) => s in e ? pe(e, s, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[s] = n, k = (e, s) => {
  for (var n in s || (s = {}))
    X.call(s, n) && Q(e, n, s[n]);
  if (F)
    for (var n of F(s))
      Y.call(s, n) && Q(e, n, s[n]);
  return e;
}, E = (e, s) => fe(e, _e(s));
var D = (e, s) => {
  var n = {};
  for (var t in e)
    X.call(e, t) && s.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && F)
    for (var t of F(e))
      s.indexOf(t) < 0 && Y.call(e, t) && (n[t] = e[t]);
  return n;
};
var W = (e, s, n) => new Promise((t, o) => {
  var a = (d) => {
    try {
      l(n.next(d));
    } catch (f) {
      o(f);
    }
  }, r = (d) => {
    try {
      l(n.throw(d));
    } catch (f) {
      o(f);
    }
  }, l = (d) => d.done ? t(d.value) : Promise.resolve(d.value).then(a, r);
  l((n = n.apply(e, s)).next());
});
import * as ee from "element-plus";
import { computed as $, createElementBlock as u, openBlock as i, mergeProps as h, renderSlot as m, createBlock as g, createSlots as v, renderList as _, withCtx as p, ref as O, useAttrs as V, unref as I, normalizeProps as U, guardReactiveProps as q, createCommentVNode as T, createElementVNode as y, Fragment as L, normalizeClass as S, mergeModels as K, useModel as ge, createVNode as j, Teleport as te, TransitionGroup as se, resolveDynamicComponent as ne, toDisplayString as x, useSlots as be, watch as N, normalizeStyle as oe, createTextVNode as ae, provide as re, onMounted as le, nextTick as ve, withDirectives as he, vShow as ye, inject as ie, onUnmounted as $e } from "vue";
import { ElButton as Me, ElInput as Ce, ElForm as ke, ElFormItem as Te, ElTooltip as Se, ElSelect as Ie, ElOption as we, ElOptionGroup as Be, ElPagination as Oe, ElRadio as Ee, ElRadioGroup as xe, ElRadioButton as Pe, ElSwitch as Ae, ElTag as je, ElAlert as Ne, ElDialog as Ve, ElNotification as Le, ElDatePicker as Re, ElEmpty as ze, ElTable as Fe, ElTableColumn as De } from "element-plus/es";
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
const w = (e, s) => {
  const n = e.__vccOpts || e;
  for (const [t, o] of s)
    n[t] = o;
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
  setup(e, { emit: s }) {
    const n = e, t = s, o = $(() => {
      const l = ["iconfont"];
      return n.name && l.push(`${n.prefix}-${n.name}`), n.spin && l.push("icon-spin"), n.pulse && l.push("icon-pulse"), n.flip && l.push(`icon-flip-${n.flip}`), l;
    }), a = $(() => {
      const l = {};
      return n.size && (typeof n.size == "number" ? l.fontSize = `${n.size}px` : l.fontSize = n.size), n.color && (l.color = n.color), n.rotate !== 0 && (l.transform = `rotate(${n.rotate}deg)`), l;
    }), r = (l) => {
      t("click", l);
    };
    return (l, d) => (i(), u("i", h({
      class: o.value,
      style: a.value
    }, l.$attrs, { onClick: r }), [
      m(l.$slots, "default", {}, void 0, !0)
    ], 16));
  }
}), Z = /* @__PURE__ */ w(Ge, [["__scopeId", "data-v-90f84c9e"]]), Ue = /* @__PURE__ */ Object.assign({
  name: "MButton"
}, {
  __name: "Button",
  setup(e) {
    return (s, n) => {
      const t = Me;
      return i(), g(t, h(s.$attrs, { class: "m-button" }), v({ _: 2 }, [
        _(s.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            m(s.$slots, a, {}, void 0, !0)
          ])
        }))
      ]), 1040);
    };
  }
}), qe = /* @__PURE__ */ w(Ue, [["__scopeId", "data-v-9c99add1"]]), He = /* @__PURE__ */ Object.assign({
  name: "MInput"
}, {
  __name: "Input",
  setup(e) {
    return (s, n) => {
      const t = Ce;
      return i(), g(t, h(s.$attrs, {
        class: ["m-input", { solid: s.$attrs.styleType === "solid" }]
      }), v({ _: 2 }, [
        _(s.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            m(s.$slots, a)
          ])
        }))
      ]), 1040, ["class"]);
    };
  }
}), We = /* @__PURE__ */ Object.assign({
  name: "MForm"
}, {
  __name: "Form",
  setup(e, { expose: s }) {
    const n = O();
    return V(), s({
      validate: (t) => {
        var o;
        return (o = n.value) == null ? void 0 : o.validate(t);
      },
      validateField: (t, o) => {
        var a;
        return (a = n.value) == null ? void 0 : a.validateField(t, o);
      },
      resetFields: () => {
        var t;
        return (t = n.value) == null ? void 0 : t.resetFields();
      },
      scrollToField: (t) => {
        var o;
        return (o = n.value) == null ? void 0 : o.scrollToField(t);
      },
      clearValidate: (t) => {
        var o;
        return (o = n.value) == null ? void 0 : o.clearValidate(t);
      }
    }), (t, o) => {
      const a = ke;
      return i(), g(a, h({
        ref_key: "formRef",
        ref: n
      }, t.$attrs, { class: "m-form" }), v({ _: 2 }, [
        _(t.$slots, (r, l) => ({
          name: l,
          fn: p(() => [
            m(t.$slots, l)
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
    return (s, n) => {
      const t = Te;
      return i(), g(t, h(s.$attrs, { class: "m-form-item" }), v({ _: 2 }, [
        _(s.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            m(s.$slots, a)
          ])
        }))
      ]), 1040);
    };
  }
}), Je = (...e) => e.filter(Boolean).join(" "), Qe = (e, ...s) => {
  const n = k({}, e);
  return s.forEach((t) => {
    delete n[t];
  }), n;
};
function A(e, s = "popperClass") {
  const n = V(), t = $(() => Qe(n, s)), o = $(() => Je(e, n[s]));
  return {
    mergedAttrs: t,
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
    const { mergedAttrs: s, className: n } = A("mc-tooltip-popper");
    return (t, o) => {
      const a = Se;
      return i(), g(a, h(I(s), { "popper-class": I(n) }), v({ _: 2 }, [
        _(t.$slots, (r, l) => ({
          name: l,
          fn: p(() => [
            m(t.$slots, l)
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
    return (s, n) => {
      const t = Ie;
      return i(), g(t, h({
        class: ["m-select", { solid: s.$attrs.styleType === "solid" }],
        "show-arrow": !1
      }, s.$attrs), v({ _: 2 }, [
        _(s.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            m(s.$slots, a)
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
    return (s, n) => {
      const t = we;
      return i(), g(t, U(q(s.$attrs)), v({ _: 2 }, [
        _(s.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            m(s.$slots, a)
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
    return (s, n) => {
      const t = Be;
      return i(), g(t, U(q(s.$attrs)), v({ _: 2 }, [
        _(s.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            m(s.$slots, a)
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
    return (s, n) => {
      const t = Oe;
      return i(), g(t, h(s.$attrs, { class: "m-pagination" }), v({ _: 2 }, [
        _(s.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            m(s.$slots, a)
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
    const { mergedAttrs: s } = A("mc-radio-popper");
    return (n, t) => {
      const o = Ee;
      return i(), g(o, h(I(s), { class: "m-radio" }), v({ _: 2 }, [
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
    const s = V(), n = $(() => {
      const o = "mc-radio-group-popper";
      return s.popperClass ? `${o} ${s.popperClass}`.trim() : o;
    }), t = $(() => {
      const r = s, { popperClass: o } = r;
      return D(r, ["popperClass"]);
    });
    return (o, a) => {
      const r = xe;
      return i(), g(r, h(t.value, {
        "popper-class": n.value,
        class: "m-radio-group"
      }), v({ _: 2 }, [
        _(o.$slots, (l, d) => ({
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
    const { mergedAttrs: s } = A("mc-radio-button-popper");
    return (n, t) => {
      const o = Pe;
      return i(), g(o, h(I(s), { class: "m-radio-button" }), v({ _: 2 }, [
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
    const { mergedAttrs: s, className: n } = A("mc-switch-popper");
    return (t, o) => {
      const a = Ae;
      return i(), g(a, h(I(s), {
        "popper-class": I(n),
        class: "m-switch"
      }), v({ _: 2 }, [
        _(t.$slots, (r, l) => ({
          name: l,
          fn: p(() => [
            m(t.$slots, l)
          ])
        }))
      ]), 1040, ["popper-class"]);
    };
  }
}), rt = {
  key: 0,
  class: "custom-spinner"
}, lt = { class: "ldio-spinner" }, it = /* @__PURE__ */ Object.assign({
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
    const s = e, n = $(() => s.prefixIcon);
    return (t, o) => {
      const a = je;
      return i(), g(a, h(t.$attrs, {
        class: ["m-tag", { "is-loading": e.loading }]
      }), v({ _: 2 }, [
        _(t.$slots, (r, l) => ({
          name: l,
          fn: p(() => [
            e.loading && !e.prefixIcon ? (i(), u("div", rt, [
              y("div", lt, [
                (i(), u(L, null, _(8, (d) => y("div", { key: d })), 64))
              ])
            ])) : n.value ? (i(), u("i", {
              key: 1,
              class: S(["prefixIcon", ["iconfont", n.value]])
            }, null, 2)) : T("", !0),
            y("div", null, [
              m(t.$slots, l)
            ]),
            e.suffixIcon ? (i(), u("i", {
              key: 2,
              class: S(["suffixIcon", ["iconfont", e.suffixIcon]])
            }, null, 2)) : T("", !0)
          ])
        }))
      ]), 1040, ["class"]);
    };
  }
}), ct = ["src", "alt"], ut = ["success", "warning", "error"], dt = {
  name: "MAlert"
}, mt = /* @__PURE__ */ Object.assign(dt, {
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
    const s = e, n = V(), t = $(() => {
      const l = n, { useCustomIcon: a } = l, r = D(l, ["useCustomIcon"]);
      return E(k({}, r), {
        type: s.type
        // 确保 type 属性正确传递给 el-alert
      });
    }), o = $(() => s.useCustomIcon ? `https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/mc-ui/alert/alert-${s.type}.png` : null);
    return (a, r) => {
      const l = Ne;
      return i(), g(l, h(t.value, { class: "mc-alert" }), v({ _: 2 }, [
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
        _(a.$slots, (d, f) => ({
          name: f,
          fn: p(() => [
            m(a.$slots, f)
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
  setup(e, { emit: s }) {
    const n = ge(e, "modelValue");
    return (t, o) => {
      const a = Ve;
      return i(), u("div", null, [
        j(a, h({
          modelValue: n.value,
          "onUpdate:modelValue": o[0] || (o[0] = (r) => n.value = r),
          width: e.width,
          title: e.title,
          draggable: e.draggable,
          "close-on-click-modal": e.closeOnClickModal,
          center: e.center
        }, t.$attrs, {
          class: "m-dialog",
          "header-class": "m-header"
        }), v({
          default: p(() => [
            m(t.$slots, "default")
          ]),
          _: 2
        }, [
          t.$slots.header ? {
            name: "header",
            fn: p(({ close: r, titleId: l, titleClass: d }) => [
              m(t.$slots, "header", U(q({ close: r, titleId: l, titleClass: d })))
            ]),
            key: "0"
          } : void 0,
          t.$slots.footer ? {
            name: "footer",
            fn: p(() => [
              m(t.$slots, "footer")
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
function _t(e, s, n, t, o, a) {
  const r = Le;
  return i(), g(r, h(e.$attrs, { class: "mc-notification" }), v({ _: 2 }, [
    _(e.$slots, (l, d) => ({
      name: d,
      fn: p(() => [
        m(e.$slots, d)
      ])
    }))
  ]), 1040);
}
const gt = /* @__PURE__ */ w(ft, [["render", _t]]), B = O([]);
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
    const s = E(k(k({}, this.defaultOptions), e), {
      id: ++bt
    });
    if (s.grouping) {
      const n = B.value.findIndex(
        (t) => t.message === s.message && t.type === s.type && t.grouping
      );
      if (n > -1)
        return B.value[n].repeatNum++, { close: () => this.close(B.value[n].id) };
    }
    return B.value.push(s), s.duration > 0 && setTimeout(() => {
      this.close(s.id);
    }, s.duration), {
      close: () => this.close(s.id)
    };
  },
  // 关闭指定消息
  close(e) {
    const s = B.value.findIndex((n) => n.id === e);
    if (s > -1) {
      const n = B.value[s];
      n.onClose && n.onClose(n), B.value.splice(s, 1);
    }
  },
  // 关闭所有消息
  closeAll() {
    B.value = [];
  },
  // 便捷方法
  success(e = {}) {
    return typeof e == "string" && (e = { message: e }), this.show(E(k({}, e), { type: "success" }));
  },
  warning(e = {}) {
    return typeof e == "string" && (e = { message: e }), this.show(E(k({}, e), { type: "warning" }));
  },
  error(e = {}) {
    return typeof e == "string" && (e = { message: e }), this.show(E(k({}, e), { type: "error" }));
  }
}, ht = (e) => {
  vt.close(e);
}, yt = {
  name: "MMessage",
  setup() {
    return {
      messages: B,
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
}, Tt = {
  key: 3,
  src: "https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/mc-ui/alert/alert-error.png",
  alt: "error icon",
  class: "message-icon-img"
}, St = { class: "message-content" }, It = ["innerHTML"], wt = { key: 2 }, Bt = {
  key: 3,
  class: "message-repeat"
}, Ot = ["onClick"];
function Et(e, s, n, t, o, a) {
  return i(), g(te, { to: "body" }, [
    j(se, {
      name: "message",
      tag: "div",
      class: "message-container"
    }, {
      default: p(() => [
        (i(!0), u(L, null, _(t.messages, (r) => (i(), u("div", {
          key: r.id,
          class: S([
            "custom-message",
            `message-${r.type}`,
            `message-${r.placement}`,
            { "message-plain": r.plain }
          ])
        }, [
          r.showIcon ? (i(), u("div", $t, [
            r.customIcon ? (i(), u("img", {
              key: 0,
              src: r.customIcon,
              alt: "custom icon",
              class: "message-icon-img"
            }, null, 8, Mt)) : r.type === "success" ? (i(), u("img", Ct)) : r.type === "warning" ? (i(), u("img", kt)) : r.type === "error" ? (i(), u("img", Tt)) : T("", !0)
          ])) : T("", !0),
          y("div", St, [
            typeof r.message == "function" ? (i(), g(ne(r.message), { key: 0 })) : r.dangerouslyUseHTMLString ? (i(), u("div", {
              key: 1,
              innerHTML: r.message
            }, null, 8, It)) : (i(), u("span", wt, x(r.message), 1)),
            r.repeatNum > 1 ? (i(), u("span", Bt, x(r.repeatNum), 1)) : T("", !0)
          ]),
          r.showClose ? (i(), u("button", {
            key: 1,
            class: "message-close",
            onClick: (l) => t.closeMessage(r.id)
          }, " × ", 8, Ot)) : T("", !0)
        ], 2))), 128))
      ]),
      _: 1
    })
  ]);
}
const ce = /* @__PURE__ */ w(yt, [["render", Et]]), P = O([]);
let xt = 0;
const Xs = {
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
    const s = E(k(k({}, this.defaultOptions), e), {
      id: ++xt
    });
    return P.value.push(s), s.duration > 0 && setTimeout(() => {
      this.close(s.id);
    }, s.duration), {
      close: () => this.close(s.id)
    };
  },
  // 关闭指定通知
  close(e) {
    const s = P.value.findIndex((n) => n.id === e);
    s > -1 && P.value.splice(s, 1);
  },
  // 关闭所有通知
  closeAll() {
    P.value = [];
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
}, Pt = (e) => {
  const s = P.value.findIndex((n) => n.id === e);
  s > -1 && P.value.splice(s, 1);
}, At = {
  name: "MNotifiMessage",
  setup() {
    return {
      notifications: P,
      closeNotification: Pt
    };
  }
}, jt = { class: "notification-content" }, Nt = { class: "notification-title" }, Vt = { class: "notification-message" }, Lt = {
  key: 0,
  class: "notification-action"
}, Rt = ["onClick"];
function zt(e, s, n, t, o, a) {
  return i(), g(te, { to: "body" }, [
    j(se, {
      name: "notification",
      tag: "div",
      class: "notification-container"
    }, {
      default: p(() => [
        (i(!0), u(L, null, _(t.notifications, (r) => (i(), u("div", {
          key: r.id,
          class: S([
            "custom-notification",
            `notification-${r.position}`
          ])
        }, [
          s[0] || (s[0] = y("div", { class: "notification-icon" }, [
            y("img", {
              src: "https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/MCImages/userCenter/icon-quota-tip.png",
              alt: "notification icon"
            })
          ], -1)),
          y("div", jt, [
            y("div", Nt, x(r.title), 1),
            y("div", Vt, x(r.message), 1),
            r.slotContent ? (i(), u("div", Lt, [
              (i(), g(ne(r.slotContent)))
            ])) : T("", !0)
          ]),
          r.showClose ? (i(), u("button", {
            key: 0,
            class: "notification-close",
            onClick: (l) => t.closeNotification(r.id)
          }, " × ", 8, Rt)) : T("", !0)
        ], 2))), 128))
      ]),
      _: 1
    })
  ]);
}
const ue = /* @__PURE__ */ w(At, [["render", zt]]), Ft = /* @__PURE__ */ Object.assign({
  name: "MDatePicker"
}, {
  __name: "DatePicker",
  props: {
    popperClass: {
      type: String,
      default: ""
    },
    styleType: {
      type: String,
      default: "default"
    }
  },
  setup(e) {
    const { mergedAttrs: s, className: n } = A(
      "mc-datepicker-popper",
      "popperClass"
    );
    return (t, o) => {
      const a = Re;
      return i(), g(a, h(I(s), {
        class: ["m-datepicker", e.styleType],
        "popper-class": I(n)
      }), v({ _: 2 }, [
        _(t.$slots, (r, l) => ({
          name: l,
          fn: p(() => [
            m(t.$slots, l)
          ])
        }))
      ]), 1040, ["popper-class", "class"]);
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
    const s = e, n = V(), t = $(() => {
      const l = n, { image: a } = l;
      return D(l, ["image"]);
    }), o = $(() => {
      const { image: a } = s;
      return a.includes("/") || a.includes("http") ? a : `/images/empty/${a}.png`;
    });
    return (a, r) => {
      const l = ze;
      return i(), g(l, h(t.value, { image: o.value }), v({ _: 2 }, [
        _(a.$slots, (d, f) => ({
          name: f,
          fn: p(() => [
            m(a.$slots, f)
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
    return (s, n) => {
      const t = Fe;
      return i(), g(t, U(q(s.$attrs)), v({ _: 2 }, [
        _(s.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            m(s.$slots, a)
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
    return (s, n) => {
      const t = De;
      return i(), g(t, h(s.$attrs, { class: "m-table-column" }), v({ _: 2 }, [
        _(s.$slots, (o, a) => ({
          name: a,
          fn: p(() => [
            m(s.$slots, a)
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
  setup(e, { expose: s, emit: n }) {
    const t = be(), o = e, a = n, r = O(o.visible);
    N(() => o.visible, (M) => {
      r.value = M;
    });
    const l = $(() => {
      const M = {};
      return o.backgroundColor && (M.backgroundColor = o.backgroundColor), o.textColor && (M.color = o.textColor), o.borderColor && (M.borderColor = o.borderColor), M;
    }), d = {
      info: "info",
      success: "check-circle",
      warning: "warning",
      error: "close-circle"
    };
    $(() => o.icon || d[o.type]);
    const f = () => {
      r.value = !1, a("update:visible", !1), a("close");
    };
    return N(r, (M) => {
      M && o.duration > 0 && setTimeout(() => {
        f();
      }, o.duration);
    }), s({
      close: f
    }), (M, R) => e.visible ? (i(), u("div", {
      key: 0,
      class: S(["m-banner", [
        `m-banner--${e.type}`,
        {
          "m-banner--closable": e.closable,
          "m-banner--with-icon": e.icon || I(t).icon
        }
      ]]),
      style: oe(l.value)
    }, [
      y("div", Wt, [
        e.icon || I(t).icon ? (i(), u("div", Zt, [
          m(M.$slots, "icon", {}, () => [
            j(Z, {
              name: e.icon,
              size: e.iconSize
            }, null, 8, ["name", "size"])
          ], !0)
        ])) : T("", !0),
        y("div", Jt, [
          m(M.$slots, "default", {}, () => [
            ae(x(e.content), 1)
          ], !0)
        ]),
        e.closable ? (i(), u("div", {
          key: 1,
          class: "m-banner__close",
          onClick: f
        }, [
          j(Z, {
            name: "lucide-x",
            size: e.closeIconSize
          }, null, 8, ["size"])
        ])) : T("", !0)
      ])
    ], 6)) : T("", !0);
  }
}), Xt = /* @__PURE__ */ w(Qt, [["__scopeId", "data-v-00c80323"]]), Yt = {
  name: "MTabs",
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    closable: {
      type: Boolean,
      default: !1
    },
    styleType: {
      type: String,
      default: "default",
      validator: (e) => ["default", "solid"].includes(e)
    }
  },
  emits: ["update:modelValue", "tab-click", "tab-remove", "tab-change", "tab-add", "edit"],
  setup(e, { emit: s }) {
    const n = O(null), t = O([]), o = O(e.modelValue), a = O({ width: "0px", left: "0px" }), r = () => {
      ve(() => {
        if (!n.value || t.value.length === 0) {
          a.value = { width: "0px", left: "0px" };
          return;
        }
        const b = o.value;
        if (!b) {
          a.value = { width: "0px", left: "0px" };
          return;
        }
        const C = t.value.findIndex((me) => me.name === b);
        if (C === -1) {
          a.value = { width: "0px", left: "0px" };
          return;
        }
        const H = n.value.querySelectorAll(".m-tabs__item")[C];
        if (!H) {
          a.value = { width: "0px", left: "0px" };
          return;
        }
        const de = H.offsetLeft + H.offsetWidth / 2 - 8;
        a.value = {
          width: "16px",
          left: `${de}px`
        };
      });
    }, l = (b) => {
      if (b === o.value) return;
      const C = o.value;
      o.value = b, s("update:modelValue", b), s("tab-click", b), s("tab-change", b, C), r();
    }, d = (b) => {
      s("tab-remove", b), s("edit", b, "remove");
    }, f = () => {
      s("tab-add"), s("edit", null, "add");
    }, M = (b) => {
      const C = t.value.findIndex((z) => z.name === b.name);
      C === -1 ? t.value.push(b) : t.value[C] = b;
    }, R = (b) => {
      const C = t.value.findIndex((z) => z.name === b);
      C > -1 && t.value.splice(C, 1);
    };
    return re("tabsContext", {
      activeTab: o,
      registerTab: M,
      unregisterTab: R,
      handleTabRemove: d,
      handleTabAdd: f
    }), N(() => e.modelValue, (b, C) => {
      b !== o.value && (o.value = b, s("tab-change", b, C), r());
    }), N(t, () => {
      r();
    }, { deep: !0 }), le(() => {
      if (!o.value && t.value.length > 0) {
        const b = t.value[0];
        o.value = b.name, s("update:modelValue", o.value);
      }
      r();
    }), {
      navRef: n,
      tabs: t,
      activeTab: o,
      activeBarStyle: a,
      handleTabClick: l,
      handleTabRemove: d,
      handleTabAdd: f,
      registerTab: M,
      unregisterTab: R,
      updateActiveBarPosition: r
    };
  }
}, Kt = { class: "m-tabs__header" }, es = {
  class: "m-tabs__nav",
  ref: "navRef"
}, ts = ["onClick"], ss = { class: "m-tabs__content" };
function ns(e, s, n, t, o, a) {
  return i(), u("div", {
    class: S(["m-tabs", { "style-solid": n.styleType === "solid" }])
  }, [
    y("div", Kt, [
      y("div", es, [
        (i(!0), u(L, null, _(t.tabs, (r, l) => (i(), u("div", {
          key: r.name,
          class: S([
            "m-tabs__item",
            { "is-active": t.activeTab === r.name }
          ]),
          onClick: (d) => t.handleTabClick(r.name)
        }, x(r.label), 11, ts))), 128)),
        n.styleType !== "solid" ? (i(), u("div", {
          key: 0,
          class: "m-tabs__active-bar",
          style: oe(t.activeBarStyle)
        }, null, 4)) : T("", !0)
      ], 512)
    ]),
    y("div", ss, [
      m(e.$slots, "default", {}, void 0, !0)
    ])
  ], 2);
}
const os = /* @__PURE__ */ w(Yt, [["render", ns], ["__scopeId", "data-v-37dc138d"]]), as = {
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
    const s = ie("tabsContext"), n = $(() => e.name || e.label), t = $(() => s.activeTab.value === n.value);
    return le(() => {
      const o = {
        label: e.label,
        name: n.value,
        disabled: e.disabled,
        closable: e.closable
      };
      s.registerTab(o);
    }), $e(() => {
      s.unregisterTab(n.value);
    }), {
      isActive: t,
      tabName: n
    };
  }
};
function rs(e, s, n, t, o, a) {
  return he((i(), u("div", {
    class: S(["m-tab-pane", { "is-active": t.isActive }])
  }, [
    m(e.$slots, "default", {}, void 0, !0)
  ], 2)), [
    [ye, t.isActive]
  ]);
}
const ls = /* @__PURE__ */ w(as, [["render", rs], ["__scopeId", "data-v-31f89b3b"]]), is = { class: "m-tab-card__container" }, cs = ["onClick"], us = { class: "m-tab-card__text" }, ds = /* @__PURE__ */ Object.assign({
  name: "MTabCard"
}, {
  __name: "TabCard",
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue", "change", "tab-click"],
  setup(e, { emit: s }) {
    const n = e, t = s;
    A();
    const o = O(n.modelValue), a = $(() => n.options.map((l) => typeof l == "string" ? { label: l, name: l, disabled: !1 } : {
      label: l.label || l.name || "",
      name: l.name || l.label || "",
      disabled: l.disabled || !1
    })), r = (l, d) => {
      if (d || n.disabled || l === o.value)
        return;
      const f = o.value;
      o.value = l, t("update:modelValue", l), t("change", l, f), t("tab-click", l);
    };
    return N(() => n.modelValue, (l) => {
      l !== o.value && (o.value = l);
    }), re("tabCardContext", {
      activeTab: o,
      handleTabClick: r
    }), (l, d) => (i(), u("div", {
      class: S(["m-tab-card", { "is-disabled": e.disabled }])
    }, [
      y("div", is, [
        (i(!0), u(L, null, _(a.value, (f, M) => (i(), u("div", {
          key: f.name,
          class: S([
            "m-tab-card__item",
            {
              "is-active": o.value === f.name,
              "is-disabled": f.disabled
            }
          ]),
          onClick: (R) => r(f.name, f.disabled)
        }, [
          y("span", us, x(f.label), 1)
        ], 10, cs))), 128))
      ])
    ], 2));
  }
}), ms = /* @__PURE__ */ w(ds, [["__scopeId", "data-v-dd55f784"]]), ps = { class: "m-tab-card-item__text" }, fs = /* @__PURE__ */ Object.assign({
  name: "MTabCardItem"
}, {
  __name: "TabCardItem",
  props: {
    label: {
      type: String,
      default: ""
    },
    name: {
      type: [String, Number],
      required: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const n = e, t = s, o = ie("tabCardContext"), a = $(() => o.activeTab.value === n.name), r = () => {
      n.disabled || (o.handleTabClick(n.name, n.disabled), t("click", n.name));
    };
    return (l, d) => (i(), u("div", {
      class: S([
        "m-tab-card-item",
        {
          "is-active": a.value,
          "is-disabled": e.disabled
        }
      ]),
      onClick: r
    }, [
      y("span", ps, [
        m(l.$slots, "default", {}, () => [
          ae(x(e.label), 1)
        ], !0)
      ])
    ], 2));
  }
}), _s = /* @__PURE__ */ w(fs, [["__scopeId", "data-v-adce2436"]]);
function G(e) {
  e && e.classList && e.classList.add("mc-ui-override");
}
function gs(e) {
  e && e.$el && G(e.$el);
}
function bs() {
  typeof document != "undefined" && (document.body.classList.add("mc-ui-override"), new MutationObserver((s) => {
    s.forEach((n) => {
      n.addedNodes.forEach((t) => {
        if (t.nodeType === 1 && t.classList) {
          if (t.className && typeof t.className == "string" && t.className.includes("el-")) {
            const a = t.closest(".mc-ui-override") || t.parentElement;
            a && !a.classList.contains("mc-ui-override") && a.classList.add("mc-ui-override");
          }
          t.querySelectorAll('[class*="el-"]').forEach((a) => {
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
function vs(e = '[class*="el-"]') {
  typeof document != "undefined" && document.querySelectorAll(e).forEach((n) => {
    const t = n.closest(".mc-ui-override") || n.parentElement;
    t && !t.classList.contains("mc-ui-override") && t.classList.add("mc-ui-override");
  });
}
function hs(e) {
  return E(k({}, e), {
    mounted() {
      G(this.$el), e.mounted && e.mounted.call(this);
    },
    updated() {
      G(this.$el), e.updated && e.updated.call(this);
    }
  });
}
const ys = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addComponentOverride: gs,
  addOverrideClass: G,
  applyGlobalOverride: bs,
  createOverrideComponent: hs,
  forceRefreshStyles: vs
}, Symbol.toStringTag, { value: "Module" })), J = [Z, qe, He, We, Ze, Xe, Ye, Ke, et, tt, st, nt, ot, at, it, mt, pt, gt, ce, ue, Ft, Ut, qt, Ht, Xt, os, ls, ms, _s], $s = [
  { id: "global-message-container", component: ce },
  { id: "global-notification-container", component: ue }
];
function Ms(n) {
  return W(this, arguments, function* ({ id: e, component: s }) {
    try {
      if (document.getElementById(e)) return;
      const { createApp: t, h: o } = yield import("vue"), a = document.createElement("div");
      a.id = e, document.body.appendChild(a), t({
        render: () => o(s)
      }).mount(`#${e}`);
    } catch (t) {
      console.warn(`Failed to create global component ${e}:`, t);
    }
  });
}
function Cs() {
  return W(this, null, function* () {
    const e = $s.map(Ms);
    yield Promise.all(e);
  });
}
const c = {};
function ks(e) {
  const s = J.map((n) => {
    if (n && n.name && typeof n.name == "string") {
      let t = n.name.toLowerCase();
      return {
        mradiogroup: "m-radio-group",
        mradiobutton: "m-radio-button",
        mformitem: "m-form-item",
        moptiongroup: "m-option-group",
        mtabs: "m-tabs",
        mtabpane: "m-tab-pane",
        mtabcard: "m-tab-card",
        mtabcarditem: "m-tab-card-item"
      }[t] || t.replace(/^m/, "m-");
    }
    return null;
  }).filter(Boolean);
  Object.entries(ee).forEach(([n, t]) => {
    if (t && t.name && typeof t.name == "string" && t.name.startsWith("El")) {
      const o = "m-" + t.name.slice(2).replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
      s.includes(o) || e._context.components[o] || e.component(o, t);
      const a = "M" + t.name.slice(2);
      c[a] = t;
    }
  });
}
const Ts = (e) => {
  typeof window != "undefined" && Promise.resolve().then(() => ys).then(({ applyGlobalOverride: s }) => {
    s();
  }), console.log("🚀 开始安装 @mc-markets/ui 组件库..."), J.forEach((s) => {
    if (s && s.name && typeof s.name == "string") {
      let n = s.name.toLowerCase();
      n = {
        mradiogroup: "m-radio-group",
        mradiobutton: "m-radio-button",
        mformitem: "m-form-item",
        moptiongroup: "m-option-group",
        mtabs: "m-tabs",
        mtabpane: "m-tab-pane",
        mtabcard: "m-tab-card",
        mtabcarditem: "m-tab-card-item"
      }[n] || n.replace(/^m/, "m-"), e.component(n, s);
    }
  }), ks(e), typeof window != "undefined" && Cs();
};
function Ys(e) {
  const s = Object.keys(e._context.components || {}), n = J.map((t) => {
    if (t && t.name && typeof t.name == "string") {
      let o = t.name.toLowerCase();
      return {
        mradiogroup: "m-radio-group",
        mradiobutton: "m-radio-button",
        mformitem: "m-form-item",
        moptiongroup: "m-option-group",
        mtabs: "m-tabs",
        mtabpane: "m-tab-pane",
        mtabcard: "m-tab-card",
        mtabcarditem: "m-tab-card-item"
      }[o] || o.replace(/^m/, "m-");
    }
    return null;
  }).filter(Boolean);
  return console.log("📊 组件注册状态报告:"), console.log("已注册的组件:", s.filter((t) => t.startsWith("m-"))), console.log("自定义组件:", n), {
    registered: s,
    custom: n,
    conflicts: s.filter(
      (t) => t.startsWith("m-") && n.includes(t)
    )
  };
}
const Ks = { install: Ts }, en = ee.ElMessageBox, tn = k({}, c), sn = c.MButtonGroup, nn = c.MBreadcrumb, on = c.MBreadcrumbItem, an = c.MCarousel, rn = c.MCarouselItem, ln = c.MCascader, cn = c.MCascaderPanel, un = c.MCheckTag, dn = c.MCalendar, mn = c.MTimePicker, pn = c.MDateTimePicker, fn = c.MColorPicker, _n = c.MTransfer, gn = c.MTree, bn = c.MTreeSelect, vn = c.MUpload, hn = c.MImage, yn = c.MImageViewer, $n = c.MBacktop, Mn = c.MInfiniteScroll, Cn = c.MAffix, kn = c.MScrollbar, Tn = c.MResult, Sn = c.MSkeleton, In = c.MLoading, wn = c.MSpinner, Bn = c.MProgress, On = c.MBadge, En = c.MAvatar, xn = c.MImagePreview, Pn = c.MTeleport, An = c.MConfigProvider;
export {
  Cn as MAffix,
  mt as MAlert,
  En as MAvatar,
  $n as MBacktop,
  On as MBadge,
  Xt as MBanner,
  nn as MBreadcrumb,
  on as MBreadcrumbItem,
  qe as MButton,
  sn as MButtonGroup,
  dn as MCalendar,
  an as MCarousel,
  rn as MCarouselItem,
  ln as MCascader,
  cn as MCascaderPanel,
  un as MCheckTag,
  fn as MColorPicker,
  An as MConfigProvider,
  Ft as MDatePicker,
  pn as MDateTimePicker,
  pt as MDialog,
  Ut as MEmpty,
  We as MForm,
  Ze as MFormItem,
  Z as MIcon,
  hn as MImage,
  xn as MImagePreview,
  yn as MImageViewer,
  Mn as MInfiniteScroll,
  He as MInput,
  In as MLoading,
  ce as MMessage,
  en as MMessageBox,
  ue as MNotifiMessage,
  gt as MNotification,
  tt as MPagination,
  Bn as MProgress,
  st as MRadio,
  ot as MRadioButton,
  nt as MRadioGroup,
  Tn as MResult,
  kn as MScrollbar,
  Ye as MSelect,
  Sn as MSkeleton,
  wn as MSpinner,
  at as MSwitch,
  ms as MTabCard,
  _s as MTabCardItem,
  ls as MTabPane,
  qt as MTable,
  Ht as MTableColumn,
  os as MTabs,
  it as MTag,
  Pn as MTeleport,
  mn as MTimePicker,
  Xe as MTooltip,
  _n as MTransfer,
  gn as MTree,
  bn as MTreeSelect,
  vn as MUpload,
  vt as Message,
  Xs as NotifiMessage,
  gs as addComponentOverride,
  G as addOverrideClass,
  bs as applyGlobalOverride,
  Ys as checkComponentRegistration,
  hs as createOverrideComponent,
  Ks as default,
  vs as forceRefreshStyles,
  tn as mComponents
};
//# sourceMappingURL=index.mjs.map
