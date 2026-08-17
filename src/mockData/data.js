// -----------------  WhyChooseUs -------------------
import locationIcon from "../assets/Icons/location-two.png";
import userIcon from "../assets/Icons/user-two.png";
import bookIcon from "../assets/Icons/book.png";
import agreeIcon from "../assets/Icons/agree.png";

// ----------------- OurPopularResidences -------------------
import sanFrancisco from "../assets/Images/san-francisco.png"
import beverlyHills from "../assets/Images/beverly-hills.png"
import paloAlto from "../assets/Images/palo-alto.png"
import locationThree from "../assets/Icons/location-three.png"
import rooms from "../assets/Icons/rooms.png"
import size from "../assets/Icons/size.png"

// ----------------- What People Say About Dwello -------------------
import womanOneHome from "../assets/Images/woman-one-home.png"
import manOneHome from "../assets/Images/man-one-home.png"
import womanTwoHome from "../assets/Images/woman-two-home.png"
import womanOne from "../assets/Images/woman-one.png"
import manOne from "../assets/Images/man-one.png"
import womanTwo from "../assets/Images/woman-two.png"
import star from "../assets/Icons/Star.png"

// ==================================================================================================================

export const Navbarlinks = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },

    {
        id: 2,
        title: "Service",
        link: "#",
    },

    {
        id: 3,
        title: "Agents",
        link: "3",
    },

    {
        id: 4,
        title: "Contact",
        link: "#",
    },
]

// ----------------------------

export const WhyChooseUs = [
    {
        id: 1,
        img: locationIcon,
        title: "Expert Guidance",
        para: "Benefit from our team's seasoned expertise for a smooth buying experience"
    },

    {
        id: 2,
        img: userIcon,
        title: "Personalized Service",
        para: "Our services adapt to your unique needs, making your journey stress-free"
    },

    {
        id: 3,
        img: bookIcon,
        title: "Transparent Process",
        para: "Stay informed with our clear and honest approach to buying your home"
    },

    {
        id: 4,
        img: agreeIcon,
        title: "Exceptional Support",
        para: "Providing peace of mind with our responsive and attentive customer service"
    },
]

// -------------------------------------

export const OurPopularResidences = [
    {
        id: 1,
        placeImg: sanFrancisco,
        locationImage: locationThree,
        placeName: "San Francisco, California",
        roomsIcon: rooms,
        roomsCount: "4 Rooms",
        sizeIcon: size,
        sizeNumber: "3,500 sq ft",
        price: "$2,500,000"
    },

    {
        id: 2,
        placeImg: beverlyHills,
        locationImage: locationThree,
        placeName: "Beverly Hills, California",
        roomsIcon: rooms,
        roomsCount: "3 Rooms",
        sizeIcon: size,
        sizeNumber: "1,500 sq ft",
        price: "$850,000"
    },

    {
        id: 3,
        placeImg: paloAlto,
        locationImage: locationThree,
        placeName: "Palo Alto, California",
        roomsIcon: rooms,
        roomsCount: "6 Rooms",
        sizeIcon: size,
        sizeNumber: "4,000 sq ft",
        price: "$3,700,000"
    }
]

// -------------------------------------

export const whatPeopleSayAboutDwello = [
    {
        id: 1,
        homeImage: womanOneHome,
        peopleImage: womanOne,
        peopleName: "Sarah Nguyen",
        peopleCity: "San Francisco",
        ratingStar: star,
        ratingNumber: "5.0",
        peopleSays: "Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched."
    },

    {
        id: 2,
        homeImage: manOneHome,
        peopleImage: manOne,
        peopleName: "Michael Rodriguez",
        peopleCity: "San Diego",
        ratingStar: star,
        ratingNumber: "4.5",
        peopleSays: "I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!"
    },
    {
        id: 3,
        homeImage: womanTwoHome,
        peopleImage: womanTwo,
        peopleName: "Emily Johnson",
        peopleCity: "Los Angeles",
        ratingStar: star,
        ratingNumber: "5.0",
        peopleSays: "Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!"
    },
]