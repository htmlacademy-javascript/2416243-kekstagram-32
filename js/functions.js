const convertTimeIntoMinutes = (time) => {
  const minutesInHour = 60;
  const [hours, minutes] = time.split(':').map((item) => Number(item));

  return hours * minutesInHour + minutes;
};

const isMeetingInsideBusinessHours = (startWorkHour, endWorkHour, startMeetingHour, meetingDuration) => {
  const startWorkHourInMinutes = convertTimeIntoMinutes(startWorkHour);
  const endWorkHourInMinutes = convertTimeIntoMinutes(endWorkHour);
  const startMeetingHourInMinutes = convertTimeIntoMinutes(startMeetingHour);
  const endMeetingHourInMinutes = startMeetingHourInMinutes + meetingDuration;

  return startMeetingHourInMinutes >= startWorkHourInMinutes && endMeetingHourInMinutes <= endWorkHourInMinutes;
};

isMeetingInsideBusinessHours('08:00', '17:30', '14:00', 90); // true
isMeetingInsideBusinessHours('8:0', '10:0', '8:0', 120); // true
isMeetingInsideBusinessHours('08:00', '14:30', '14:00', 90); // false
isMeetingInsideBusinessHours('14:00', '17:30', '08:0', 90); // false
isMeetingInsideBusinessHours('8:00', '17:30', '08:00', 900); // false
