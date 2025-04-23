"use client"

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const notebook = {
    text: `Schedule a free 15-minute consultation to walk through your ideas, challenges, and the best next steps—custom to your business.`
}

export default function Calendar() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "nodedropp" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return <Cal namespace="nodedropp"
        calLink="cmmutale/nodedropp"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ "layout": "month_view" }}
    />;
};
