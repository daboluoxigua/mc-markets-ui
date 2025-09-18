declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    close: () => void;
    $emit: (event: "close" | "update:visible", ...args: any[]) => void;
    type: string;
    icon: string;
    content: string;
    closable: boolean;
    visible: boolean;
    iconSize: string | number;
    closeIconSize: string | number;
    backgroundColor: string;
    textColor: string;
    borderColor: string;
    duration: number;
    $props: {
        readonly type?: string;
        readonly icon?: string;
        readonly content?: string;
        readonly closable?: boolean;
        readonly visible?: boolean;
        readonly iconSize?: string | number;
        readonly closeIconSize?: string | number;
        readonly backgroundColor?: string;
        readonly textColor?: string;
        readonly borderColor?: string;
        readonly duration?: number;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare function __VLS_template(): {
    icon?(_: {}): any;
    default?(_: {}): any;
};
//# sourceMappingURL=Banner.vue.d.ts.map