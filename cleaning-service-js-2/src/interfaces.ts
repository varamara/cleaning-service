export enum CleaningGrade {
  Superior = "Diamantstädning",
  Advanced = "Toppstädning",
  Basic = "Basic städning",
  Minimum = "Fönstertvätt",
}

export interface IBooking {
  id: string;
  date: Date;
  time: string;
  customer: string;
  grade: string;
  cleaner: string;
  status: boolean;
}

export interface IBookingForm {
  id: string;
  cleaner: string;
  cleaningType: string;
  date: Date;
  time: string;
}

export interface ICleanersInfo {
  id: string;
  name: string;
  bookings: string[];
}

export interface IFutureBookings {

}

export interface ICompletedBookings {

}