export const cronJobs = [
  { time: '0 6,9,12,15,18 * * *', url: '/api/cron?type=rates' },
  { time: '30 10,14 * * *', url: '/api/cron?type=news' },
];

