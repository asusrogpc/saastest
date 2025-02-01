import React from "react";
import Calendar from "@/components/User/Calendar";
import Breadcrumb from "@/components/Common/Dashboard/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Calendar - ${process.env.SITE_NAME}`,
  description: `Schedule meetings and manage your calendar on ${process.env.SITE_NAME}`,
};

const CalendarPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="Calendar" />
      <Calendar />
    </>
  );
};

export default CalendarPage; 