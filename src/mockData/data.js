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