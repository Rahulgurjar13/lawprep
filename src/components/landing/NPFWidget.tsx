import { useEffect, useRef } from "react";

interface NPFWidgetProps {
  height?: string;
  widgetId: string;
  className?: string;
}

const NPFWidget = ({ height = "400px", widgetId, className = "" }: NPFWidgetProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clear previous widget content to avoid duplication across React StrictMode or navigation
    if (ref.current) {
      ref.current.innerHTML = "";
    }
    
    // We restore the official NoPaperForms script approach but critically REMOVE
    // the code that deleted the script from the DOM prematurely. On Vercel,
    // deleting the script concurrently when multiple components mounted the forms
    // caused a race condition where the forms disappeared entirely.
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
    document.body.appendChild(s);
    
    // We intentionally DO NOT remove the script on unmount, because other forms on 
    // the page might still be using it or relying on its presence.
    return () => {
      // Cleanup is safely handled by the div unmounting itself.
    };
  }, [widgetId]);

  return (
    <div
      ref={ref}
      className={`npf_wgts w-full ${className}`}
      data-height={height}
      data-w={widgetId}
    />
  );
};

export default NPFWidget;
