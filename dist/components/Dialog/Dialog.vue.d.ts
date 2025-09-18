declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    $emit: (event: "close", ...args: any[]) => void;
    width: string;
    center: boolean;
    draggable: boolean;
    closeOnClickModal: boolean;
    title: string;
    $props: {
        readonly width?: string;
        readonly center?: boolean;
        readonly draggable?: boolean;
        readonly closeOnClickModal?: boolean;
        readonly title?: string;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare function __VLS_template(): {
    header?(_: {
        close: any;
        titleId: any;
        titleClass: any;
    }): any;
    default?(_: {}): any;
    footer?(_: {}): any;
};
//# sourceMappingURL=Dialog.vue.d.ts.map