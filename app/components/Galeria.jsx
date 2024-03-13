import { ImageGallery } from "react-image-grid-gallery";
import style from '@/app/style/galeria.module.css'

const imagesArray = [
    {
        alt: "Image1's alt text",
        src: '/1.jpg',
    },
    {
        alt: "Image2's alt text",
        src: '/2.jpg',
    },
    {
        alt: "Image3's alt text",
        src: '/3.jpg',
    },
    {
        alt: "Image3's alt text",
        src: '/4.jpg',
    },
    {
        alt: "Image3's alt text",
        src: '/5.jpg',
    },
    {
        alt: "Image3's alt text",
        src: '/6.jpg',
    },
    {
        alt: "Image3's alt text",

        src: '/7.jpg',
    },
    {
        alt: "Image3's alt text",
        src: '/8.jpg',
    },
];

export default function Galeria() {
    return (
        <div className={`${style.imgGalery} p-4`} >

        </div >
    )
}