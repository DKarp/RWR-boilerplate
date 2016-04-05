import moment from 'moment';

const formattedDate = (date) => {
  if (date instanceof Date) {
    return moment(date).format('D MMMM, YYYY HH:mm:ss');
  } else {
    console.error(`${date} must be valid instance of Date`);
  }
};

export {
  formattedDate
};
