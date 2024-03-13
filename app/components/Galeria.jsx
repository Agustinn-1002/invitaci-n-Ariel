/* eslint-disable @next/next/no-img-element */
import style from '@/app/style/galeria.module.css'
import Image from 'next/image';
import { useState } from 'react';




const imagesArray = [
    {
        id: "1",
        src: '/1.jpg',
    },
    {
        id: "2",
        src: '/2.jpg',
    },
    {
        id: "3",
        src: '/3.jpg',
    },
    {
        id: "4",
        src: '/4.jpg',
    },
    {
        id: "5",
        src: '/5.jpg',
    },
    {
        id: "6",
        src: '/6.jpg',
    },
    {
        id: "7",
        src: '/7.jpg',
    },
    {
        id: "8",
        src: '/8.jpg',
    },
];

export default function Galeria() {
    const [fullImageView, setFullImageView] = useState()
    const [status, setStatus] = useState(false)
    const onClickImage = (ide) => {
        let fullImage = imagesArray.filter(e => e.id === ide)
        setStatus(true)
        setFullImageView(fullImage[0]);
    }
    return (
        <div className={`${style.gallery} w-2/3 xl:px-24 my-20 mx-auto grid lg:grid-rows-2 lg:grid-cols-4 items-center justify-items-center relative`} >
            {
                imagesArray.map((e, index) => {
                    return (
                        <div key={index} className={`${style.pics}`} onClick={() => onClickImage(e.id)}>
                            <img src={e.src} alt={e.id} />
                        </div>
                    )
                })
            }
            {status &&
                <div onClick={()=>setStatus(false)} className='fixed top-0 h-screen w-full duration-75' style={{ background: 'rgb(0,0,0,0.5)', backdropFilter: 'blur(10px)' }}>
                    <h1 className='absolute right-20 top-10 text-4xl text-white cursor-pointer' onClick={()=>setStatus(false)}>X</h1>
                    <div className='z-50 h-full flex items-center justify-center ' >
                        <img src={fullImageView.src} alt={fullImageView.id} className='p-10 lg:w-1/3' />
                    </div>
                </div>
            }
        </div>
    )
}