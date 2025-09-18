declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    activeName: import('vue').ComputedRef<string | number>;
    $emit: (event: "update:modelValue" | "tab-click" | "tab-change" | "tab-remove" | "tab-add" | "edit", ...args: any[]) => void;
    type: string;
    closable: boolean;
    modelValue: string | number;
    tabPosition: string;
    addable: boolean;
    editable: boolean;
    stretch: boolean;
    beforeLeave?: Function;
    $props: {
        readonly type?: string;
        readonly closable?: boolean;
        readonly modelValue?: string | number;
        readonly tabPosition?: string;
        readonly addable?: boolean;
        readonly editable?: boolean;
        readonly stretch?: boolean;
        readonly beforeLeave?: Function;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare function __VLS_template(): Partial<Record<`tab-${any}`, (_: {}) => any>> & {
    default?(_: {}): any;
};
//# sourceMappingURL=Tabs.vue.d.ts.map