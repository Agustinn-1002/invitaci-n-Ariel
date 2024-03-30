/* eslint-disable @next/next/no-img-element */
import style from '@/app/style/galeria.module.css'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';




const imagesArray = [
    {
        id: 1,
        src: '/1.jpg',
    },
    {
        id: 2,
        src: '/2.jpg',
    },
    {
        id: 3,
        src: '/3.jpg',
    },
    {
        id: 4,
        src: '/4.jpg',
    },
    {
        id: 5,
        src: '/5.jpg',
    },
    {
        id: 6,
        src: '/6.jpg',
    },
    // {
    //     id: 7,
    //     src: '/7.jpg',
    // },
    // {
    //     id: 8,
    //     src: '/8.jpg',
    // },
    // {
    //     id: 9,
    //     src: '/9.jpg',
    // },
];

export default function Galeria() {

    const [fullImageView, setFullImageView] = useState([])
    const [status, setStatus] = useState(false)
    const [idImage, setIdImage] = useState(false)

    const onClickImage = (ide) => {
        setIdImage(true)
        let fullImage = imagesArray.filter(e => e.id === ide)
        setStatus(true)
        setFullImageView(fullImage[0]);

    }
    const nextImage = (id) => {
        setIdImage(false)
        setTimeout(() => {
            if (imagesArray.length >= id) {
                setIdImage(true)
                let nextImage = imagesArray.filter(e => e.id === id)
                setFullImageView(nextImage[0])
                setIdImage(id)
            }
        }, 100)

    }
    const prevImage = (id) => {
        setIdImage(false)
        setTimeout(() => {
            if (0 < id) {
                let nextImage = imagesArray.filter(e => e.id === id)
                setIdImage(true)
                setFullImageView(nextImage[0])
                setIdImage(id)
            }
        }, 100)
    }
    return (
        <div className={`${style.gallery} w-2/1 1xl:w-2/3  xl:px-36 my-20 mx-auto grid grid-cols-2 1md:grid-cols-3 justify-items-center gap-4 sm:gap-x-0 px-2 sm:gap-y-5`} >
            {
                imagesArray.map((e, index) => {
                    return (
                        <Fade cascade direction='up' delay={200} triggerOnce={true} key={index} >
                            <div className={`${style.pics}`} onClick={() => onClickImage(e.id)}>
                                <img src={e.src} alt={e.id} />
                            </div>
                        </Fade>
                    )
                })
            }

            <div className={`${status ? 'opacity-100 z-40' : 'opacity-0 -z-50'} select-none fixed top-0 h-screen w-full duration-100`} >
                <h1 className='z-50  absolute right-5 top-8 md:right-20 md:top-10 text-4xl text-white cursor-pointer' onClick={() => { setStatus(false); setIdImage(false) }}>X</h1>
                <div className=' h-full flex items-center justify-center duration-200' >
                    <img src={fullImageView.src} alt={fullImageView.id} className={`${idImage ? 'opacity-100' : 'opacity-30'} p-10 z-40 md:w-2/3 lg:w-1/3 duration-200`} />
                </div>
                <div className={`${status ? 'opacity-100' : 'opacity-0 -z-50'} z-40 absolute left-0 md:left-10 top-0 bottom-0 flex items-center text-5xl mdtext-6xl duration-200`} >
                    <FontAwesomeIcon icon={faChevronDown} className={`rotate-90 select-none ${fullImageView.id === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-white cursor-pointer'}`} onClick={() => fullImageView.id != 1 ? prevImage(fullImageView.id - 1) : null} />
                </div>

                <div className={`${status ? 'opacity-100' : 'opacity-0 -z-50'} z-40 absolute right-0 md:right-10 top-0 bottom-0 flex items-center text-5xl mdtext-6xl`} >
                    <FontAwesomeIcon icon={faChevronDown} className={`-rotate-90 select-none ${fullImageView.id === imagesArray.length ? 'text-gray-400 cursor-not-allowed' : 'text-white cursor-pointer '}`} onClick={() => fullImageView.id != imagesArray.length ? nextImage(fullImageView.id + 1) : null} />
                </div>
                <div  onClick={() => { setStatus(false); setIdImage(false) }} className={`${status ? 'opacity-100 ' : 'opacity-0'} z-0 absolute top-0 h-screen w-full duration-300`} style={{ background: 'rgb(0,0,0,0.5)', backdropFilter: 'blur(10px)' }}></div>
            </div>

        </div>
    )
}