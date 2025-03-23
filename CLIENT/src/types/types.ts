export type FormRowProps = {
    type:string;
    name:string;
    labelText:string;
    defaultValue:string
}
export type ContextProps = {
    showSidebar :boolean;
    isDarkTheme:boolean;
    user:{name:string};
    logoutUser:()=>void;
    toggleSidebar:()=>void;
    toggleDarkTheme:()=>void
}