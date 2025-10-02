declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    styleType: {
        type: StringConstructor;
        default: string;
        validator: (value: unknown) => boolean;
    };
}>, {
    navRef: import('vue').Ref<any, any>;
    tabs: import('vue').Ref<any[], any[]>;
    activeTab: import('vue').Ref<string | number, string | number>;
    activeBarStyle: import('vue').Ref<{
        width: string;
        left: string;
    }, {
        width: string;
        left: string;
    } | {
        width: string;
        left: string;
    }>;
    handleTabClick: (tabName: any) => void;
    handleTabRemove: (tabName: any) => void;
    handleTabAdd: () => void;
    registerTab: (tab: any) => void;
    unregisterTab: (tabName: any) => void;
    updateActiveBarPosition: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("update:modelValue" | "tab-click" | "tab-remove" | "tab-change" | "tab-add" | "edit")[], "update:modelValue" | "tab-click" | "tab-remove" | "tab-change" | "tab-add" | "edit", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    styleType: {
        type: StringConstructor;
        default: string;
        validator: (value: unknown) => boolean;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onTab-click"?: (...args: any[]) => any;
    "onTab-remove"?: (...args: any[]) => any;
    "onTab-change"?: (...args: any[]) => any;
    "onTab-add"?: (...args: any[]) => any;
    onEdit?: (...args: any[]) => any;
}>, {
    closable: boolean;
    styleType: string;
    modelValue: string | number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=Tabs.vue.d.ts.map