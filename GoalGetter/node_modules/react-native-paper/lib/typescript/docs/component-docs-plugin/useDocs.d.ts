export interface ComponentDocsPluginData {
    docs: {
        [key in string]: PageDoc;
    };
}
export interface PageDoc {
    filepath: string;
    title: string;
    description: string;
    link: string;
    data: Data;
    type: string;
    dependencies: string[];
    group?: string;
}
export interface Data {
    description: string;
    displayName?: string;
    props: {
        [key in string]: Prop;
    };
}
export interface Prop {
    required: boolean;
    tsType: {
        name: string;
        raw?: string;
    };
    description: string;
    defaultValue: {
        value: string;
    };
}
declare function useDoc(withPath: string): PageDoc;
export default useDoc;
//# sourceMappingURL=useDocs.d.ts.map