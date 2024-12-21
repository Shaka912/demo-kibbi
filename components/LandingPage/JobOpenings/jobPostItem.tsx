import React from "react";
import { Button } from "@/components/ui/button";
import { BsClockFill, BsFillBagCheckFill, BsPeopleFill } from "react-icons/bs";
import { MdLocationPin, MdPayments } from "react-icons/md";
import { IoMdBasketball } from "react-icons/io";
import { FaRegCalendar } from "react-icons/fa";
import Text from "@/components/typography/Typography";

interface JobNotification {
  newLabel: string;
  positionTitle: string;
  rate: string;
  title: string;
  description: string;
  location: string;
  time: string;
  fullTime: string;
  payment: string;
  basicEnglish: string;
  position: string;
  startDate: string;
  imageUrl: string;
}

interface JobPostItemProps {
  notifications: JobNotification[];
}

export const JobPostItem: React.FC<JobPostItemProps> = ({ notifications }) => {
  return (
    <div className="space-y-6">
      {notifications.map((notification, index) => (
        <div
          key={index}
          className="rounded-lg border border-[#EB9195] p-8 postBG text-center"
        >
          {/* You can also add 'gap-4' on this grid if you want horizontal spacing */}
          <div className="grid grid-cols-[99px_1fr] items-start pb-4 gap-4">
            <img
              src={notification.imageUrl}
              alt="JobOpenings"
              className="w-20 h-20"
            />
            <div>
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <div className="font-medium text-[25.92px] text-[#141414]">
                    {notification.title}
                  </div>
                  {/* New label "blimp" */}
                  <div className="flex px-[7px] py-[1px] rounded-[36px] bg-[#F9D627]">
                    <Text variant="small" fontWeight="semibold" tag="p">
                      {notification.newLabel}
                    </Text>
                  </div>
                </div>
                <div className="text-[#456072] text-[24px] font-bold">
                  {notification.rate}
                </div>
              </div>

              <div className="flex items-center my-2">
                <Text
                  variant="cardSubtitle"
                  tag="p"
                  className="ml-2 text-[#631F61]"
                >
                  {notification.positionTitle}
                </Text>
                <Text variant="normal" tag="p" className="ml-2">
                  {notification.description}
                </Text>
              </div>

              <div className="flex gap-2 items-center my-4">
                <MdLocationPin />
                <Text variant="normal" tag="p">
                  {notification.location}
                </Text>
              </div>

              <div className="flex gap-2 items-center my-4">
                <BsClockFill />
                <Text variant="normal" tag="p">
                  {notification.time}
                </Text>

                <BsFillBagCheckFill className="ml-3" />
                <Text variant="normal" tag="p">
                  {notification.fullTime}
                </Text>
              </div>

              <div className="flex gap-2 items-center mt-4">
                <MdPayments />
                <Text variant="normal" tag="p">
                  {notification.payment}Hourly
                </Text>

                <IoMdBasketball className="ml-3" />
                <Text variant="normal" tag="p">
                  {notification.basicEnglish}
                </Text>
              </div>

              <div className="flex justify-between items-center mt-2">
                <div className="flex gap-2 items-center">
                  <BsPeopleFill />
                  <Text variant="normal" tag="p">
                    {notification.position}
                  </Text>
                  <FaRegCalendar className="ml-3" />
                  <Text variant="normal" tag="p">
                    {notification.startDate}
                  </Text>
                </div>
                <Button
                  className="text-[#0483F8] text-[21.6px]"
                  variant="ghost"
                >
                  Apply now
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
