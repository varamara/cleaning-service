enum CleaningGrade {
    Superior = "Diamantstädning",
    Advanced = "Toppstädning",
    Basic = "Basic städning",
    Minimum = "Fönstertvätt",

}

export interface IBooking {
    id: string;
    date: string;
    time: string;
    customer: string;
    grade: CleaningGrade;
    cleaner: string;
    status: boolean;
}