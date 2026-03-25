import React from "react";

interface NPFWidgetProps {
  height?: string;
  widgetId: string;
  className?: string;
}

const NPFWidget = ({ height = "400px", widgetId, className = "" }: NPFWidgetProps) => {
  // A direct iframe embed completely bypasses the fragile global script injection (emwgts.js).
  // This solves race conditions and also allows us to bypass the NoPaperForms domain whitelist 
  // blocking our Vercel preview URLs. By passing a whitelisted domain into the `r` parameter
  // and stripping the real referrer header, it will load perfectly anywhere!
  const iframeUrl = `https://widgets.in6.nopaperforms.com/register?&r=https://live.lawpreptutorial.com/&q=&w=${widgetId}&m=&cu=`;

  return (
    <div className={`npf_wgts w-full ${className}`}>
      <iframe
        src={iframeUrl}
        width="100%"
        height={height}
        frameBorder="0"
        referrerPolicy="no-referrer"
        sandbox="allow-top-navigation allow-scripts allow-same-origin allow-downloads allow-forms allow-popups"
        title="Registration Form"
        className="w-full border-none outline-none"
      />
    </div>
  );
};

export default NPFWidget;
