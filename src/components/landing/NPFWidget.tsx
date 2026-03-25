import React from "react";

interface NPFWidgetProps {
  height?: string;
  widgetId: string;
  className?: string;
}

const NPFWidget = ({ height = "400px", widgetId, className = "" }: NPFWidgetProps) => {
  // A direct iframe embed completely bypasses the fragile global script injection (emwgts.js).
  // This solves race conditions on Vercel caused by multiple widgets unmounting/mounting 
  // concurrently and deleting each other's script tags.
  const iframeUrl = `https://widgets.in6.nopaperforms.com/register?&r=&q=&w=${widgetId}&m=&cu=`;

  return (
    <div className={`npf_wgts w-full ${className}`}>
      <iframe
        src={iframeUrl}
        width="100%"
        height={height}
        frameBorder="0"
        sandbox="allow-top-navigation allow-scripts allow-same-origin allow-downloads allow-forms allow-popups"
        title="Registration Form"
        className="w-full border-none outline-none"
      />
    </div>
  );
};

export default NPFWidget;
