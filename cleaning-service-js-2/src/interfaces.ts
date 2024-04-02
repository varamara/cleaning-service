export enum CleaningGrade {
  Superior = "Diamantstädning",
  Advanced = "Toppstädning",
  Basic = "Basic städning",
  Minimum = "Fönstertvätt",
}

export interface IBooking {
  id: string;
  userId: string;
  date: Date;
  time: string;
  customer: string;
  grade: CleaningGrade;
  cleaner: string;
  status: boolean;
}

// export interface IBookingForm {
//   id: string;
//   cleaner: string;
//   cleaningType: string;
//   date: Date;
//   time: string;
// }

export interface ICleanersInfo {
  id: string;
  name: string;
}

export interface IUser {
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  bookings: IBooking[];
}
