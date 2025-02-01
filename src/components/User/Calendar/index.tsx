"use client";
import { useState } from "react";
import CalendarWidget from "@/components/Common/CalendarWidget";
import Card from "@/components/Common/Dashboard/Card";
import InputGroup from "@/components/Common/Dashboard/InputGroup";
import FormButton from "@/components/Common/Dashboard/FormButton";
import { integrations } from "../../../../integrations.config";

const Calendar = () => {
  const [calUsername, setCalUsername] = useState("");
  const [isConfigured, setIsConfigured] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (calUsername) {
      setIsConfigured(true);
    }
  };

  if (!integrations.isCalEnabled) {
    return (
      <div className="grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
        <Card>
          <div className="flex h-full flex-col items-center justify-center text-center">
            <h4 className="mb-2 text-xl font-medium text-dark dark:text-white">
              Cal.com Integration Not Enabled
            </h4>
            <p className="text-body">
              Please enable Cal.com integration in your configuration to use this feature.
            </p>
          </div>
        </Card>
      </div>
    );
  }

  if (!isConfigured) {
    return (
      <div className="grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
        <Card>
          <div className="mb-6">
            <h3 className="mb-1.5 font-satoshi text-custom-2xl font-bold tracking-[-.5px] text-dark dark:text-white">
              Configure Calendar
            </h3>
            <p className="text-body">Enter your Cal.com username to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <InputGroup
              label="Cal.com Username"
              type="text"
              name="calUsername"
              value={calUsername}
              placeholder="your-username"
              required={true}
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCalUsername(e.target.value)
              }
            />
            <FormButton>Configure Calendar</FormButton>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-1">
      <CalendarWidget calUsername={calUsername} />
    </div>
  );
};

export default Calendar; 