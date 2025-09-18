declare const _default: import('vue').DefineComponent<{}, {
    notifications: import('vue').Ref<any[], any[]>;
    closeNotification: (id: any) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
export namespace NotifiMessage {
    namespace defaultOptions {
        let title: string;
        let message: string;
        let duration: number;
        let position: string;
        let showClose: boolean;
        let offset: number;
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
//# sourceMappingURL=NotifiMessage.vue.d.ts.map