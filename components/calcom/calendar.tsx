"use client"

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const notebook = {
    text: `Schedule a free 15-minute consultation to walk through your ideas, challenges, and the best next steps—custom to your business.`
}
export default function MyApp() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "15min" });
            cal("ui", { "theme": "light", "cssVarsPerTheme": { "light": { "cal-brand": "#fafafa" }, "dark": { "cal-brand": "#292929" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])

    return (
        <>
            <p className="font-semibold text-center mx-auto text-[length:var(--text-1)] max-w-[60ch] ">{notebook.text}</p>
            <Cal namespace="15min"
                calLink="cmmutale/15min"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ "layout": "month_view", "theme": "light" }}
            />
        </>
    );
};
