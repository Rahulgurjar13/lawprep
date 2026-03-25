import { useEffect, useRef } from "react";

interface NPFWidgetProps {
  height?: string;
  widgetId: string;
  className?: string;
}

const NPFWidget = ({ height = "400px", widgetId, className = "" }: NPFWidgetProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clear previous widget content
    if (ref.current) {
      ref.current.innerHTML = "";
    }
    // Remove any previous script to avoid duplicates
    const existingScript = document.querySelector('script[src="https://widgets.in6.nopaperforms.com/emwgts.js"]');
    if (existingScript) {
      existingScript.remove();
    }
    // Add the script
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
    document.body.appendChild(s);
    // Clean up script on unmount
    return () => {
      s.remove();
    };
  }, [widgetId]);

  return (
    <div
      ref={ref}
      className={`npf_wgts ${className}`}
      data-height={height}
      data-w={widgetId}
    />
  );
};

export default NPFWidget;
