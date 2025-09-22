declare const _default: import('vue').DefineComponent<{}, {
    messages: import('vue').Ref<any[], any[]>;
    closeMessage: (id: any) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
export namespace Message {
    namespace defaultOptions {
        let message: string;
        let type: string;
        let plain: boolean;
        let customIcon: string;
        let dangerouslyUseHTMLString: boolean;
        let customClass: string;
        let duration: number;
        let showClose: boolean;
        let showIcon: boolean;
        let onClose: any;
        let offset: number;
        let placement: string;
        let appendTo: string;
        let grouping: boolean;
        let repeatNum: number;
    }
    function show(options?: {}): {
        close: () => void;
    };
    function close(id: any): void;
    function closeAll(): void;
    function success(options?: {}): {
        close: () => void;
    };
    function warning(options?: {}): {
        close: () => void;
    };
    function error(options?: {}): {
        close: () => void;
    };
}
//# sourceMappingURL=Message.vue.d.ts.map