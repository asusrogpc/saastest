import { useEffect } from "react";
import { integrations, messages } from "../../../../integrations.config";
import toast from "react-hot-toast";
import Card from "../Dashboard/Card";

interface CalendarWidgetProps {
  calUsername: string;
}

const CalendarWidget = ({ calUsername }: CalendarWidgetProps) => {
  useEffect(() => {
    if (!integrations.isCalEnabled) {
      toast.error(messages.cal);
      return;
    }

    // Load Cal.com snippet
    (function (C, A, L) {
      const p = function (a: any, ...ar: any[]) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...ar: any[]) {
          const cal = C.Cal;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function (...args: any[]) {
              p(api, args);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            typeof namespace === "string"
              ? (cal.ns[namespace] = api) && p(api, ar)
              : p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // Initialize Cal
    window.Cal("init", { origin: "https://cal.com" });

    // Mount Cal on our element
    window.Cal("inline", {
      elementOrSelector: "#cal-booking-placeholder",
      calLink: calUsername,
    });

    // Cleanup
    return () => {
      window.Cal("destroy");
    };
  }, [calUsername]);

  return (
    <Card>
      <div className='mb-6'>
        <h3 className='mb-1.5 font-satoshi text-custom-2xl font-bold tracking-[-.5px] text-dark dark:text-white'>
          Schedule a Meeting
        </h3>
        <p className='text-body'>Book a time slot that works for you</p>
      </div>
      <div id='cal-booking-placeholder' className='min-h-[600px]' />
    </Card>
  );
};

export default CalendarWidget;
