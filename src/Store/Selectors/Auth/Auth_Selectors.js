import { useSelector } from "react-redux";
import { useMemo } from "react";

const selectPageName = (state) => state?.pageNameReducer?.pageName || "";

export const usePageName = () => {
    const pageName = useSelector(selectPageName);
    return useMemo(() => pageName,[pageName]);
}

