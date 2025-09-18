declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    $emit: (event: "click", ...args: any[]) => void;
    name: string;
    size: string | number;
    color: string;
    spin: boolean;
    pulse: boolean;
    rotate: number;
    prefix: string;
    flip?: string;
    $props: {
        readonly name?: string;
        readonly size?: string | number;
        readonly color?: string;
        readonly spin?: boolean;
        readonly pulse?: boolean;
        readonly rotate?: number;
        readonly prefix?: string;
        readonly flip?: string;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare function __VLS_template(): {
    default?(_: {}): any;
};
//# sourceMappingURL=Icon.vue.d.ts.map