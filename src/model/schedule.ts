export type FullSchedule = {
  thumbnail: string;
  scheduleList: ScheduleItem[];
};

export type ScheduleItem = {
  start: string;
  end: string;
  text: string;
};
