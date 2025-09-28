declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    label: {
        type: StringConstructor;
        required: true;
    };
    name: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    isActive: import('vue').ComputedRef<boolean>;
    tabName: import('vue').ComputedRef<string | number>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    label: {
        type: StringConstructor;
        required: true;
    };
    name: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    name: string | number;
    closable: boolean;
    disabled: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=TabPane.vue.d.ts.map