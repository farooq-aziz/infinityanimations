import { createContext, useContext } from "react";

export const PopupContext = createContext({
    popup: true,
    togglePopup: () => {}
})

export const PopupProvider = PopupContext.Provider

export default function usePopup() {
    return useContext(PopupContext)
}