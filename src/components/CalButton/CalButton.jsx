import React, { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";
import './CalButton.css';

const CalButton = ({ calLink, text }) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        "styles": {
          "branding": { "brandColor": "#000000" }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, []);

  return (
    <button
      data-cal-link={calLink}
      className="cal-schedule-button"
      aria-label={text}
    >
      {text}
    </button>
  );
};

export default CalButton;
