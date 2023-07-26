export type Schedule = {
  thumbnail: string;
  scheduleList: ScheduleItem[];
};

export type ScheduleItem = {
  start: string;
  end: string;
  text: string;
};
