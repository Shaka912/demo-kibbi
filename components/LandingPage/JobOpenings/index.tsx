import Text from "@/components/typography/Typography";
import { Input } from "@/components/ui/input";
import { jobOpeningsInputs, notifications } from "@/constants";
import React from "react";
import { JobPostItem } from "./jobPostItem";

function JobOpenings() {
  return (
    <>
      <div className="bg-white px-16 py-6 rounded-3xl max-w-[1110px] mx-auto">
        {/* Title */}
        <div className="flex w-full justify-center items-center">
          {/* left heading svg */}
          <img
            src="/jobs/heading_left.svg"
            alt="JobOpenings"
            className="w-12 h-12"
          />

          <Text variant="super-title" className="text-reds" tag="h1">
            Job Openings
          </Text>
          {/* right heading svg */}
          <img
            src="/jobs/heading_right.svg"
            alt="JobOpenings_right"
            className="w-12 h-12"
          />
        </div>
        {/* inputs */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide my-4">
          {jobOpeningsInputs.map((input) => (
            <Input
              key={input.id}
              placeholder={input.placeholder}
              className="w-28"
            />
          ))}
        </div>
        {/* job post items  */}

        <JobPostItem notifications={notifications} />
      </div>
    </>
  );
}

export default JobOpenings;
