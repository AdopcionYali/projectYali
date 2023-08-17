
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import styles from '@/styles/Slider.module.scss'


let posts = [
    {
        id: 1,
        name: 'Solovino',
        image: 'https://www.huellascallejeras.com/wp-content/uploads/2021/10/luca-gato-adulto-en-adopcion.jpg',
        characteristics: 'tímido'
    },
    {
        id: 2,
        name: 'Perrito',
        image: 'https://hips.hearstapps.com/hmg-prod/images/closeup-of-a-black-russian-tsvetnaya-bolonka-royalty-free-image-1681161235.jpg?crop=0.563xw:1.00xh;0.204xw,0&resize=1200:*',
        characteristics: 'sociable'
    },
    {
        id: 3,
        name: 'Solovino',
        image: 'https://www.huellascallejeras.com/wp-content/uploads/2021/10/luca-gato-adulto-en-adopcion.jpg',
        characteristics: 'tímido'
    },
    {
        id: 4,
        name: 'Perrito',
        image: 'https://hips.hearstapps.com/hmg-prod/images/closeup-of-a-black-russian-tsvetnaya-bolonka-royalty-free-image-1681161235.jpg?crop=0.563xw:1.00xh;0.204xw,0&resize=1200:*',
        characteristics: 'sociable'
    },
    {
        id: 5,
        name: 'Solovino',
        image: 'https://www.huellascallejeras.com/wp-content/uploads/2021/10/luca-gato-adulto-en-adopcion.jpg',
        characteristics: 'tímido'
    },
    {
        id: 6,
        name: 'Perrito',
        image: 'https://hips.hearstapps.com/hmg-prod/images/closeup-of-a-black-russian-tsvetnaya-bolonka-royalty-free-image-1681161235.jpg?crop=0.563xw:1.00xh;0.204xw,0&resize=1200:*',
        characteristics: 'sociable'
    },
    {
        id: 7,
        name: 'Solovino',
        image: 'https://www.huellascallejeras.com/wp-content/uploads/2021/10/luca-gato-adulto-en-adopcion.jpg',
        characteristics: 'tímido'
    },
    {
        id: 8,
        name: 'Perrito',
        image: 'https://hips.hearstapps.com/hmg-prod/images/closeup-of-a-black-russian-tsvetnaya-bolonka-royalty-free-image-1681161235.jpg?crop=0.563xw:1.00xh;0.204xw,0&resize=1200:*',
        characteristics: 'sociable'
    },
    {
        id: 9,
        name: 'Solovino',
        image: 'https://www.huellascallejeras.com/wp-content/uploads/2021/10/luca-gato-adulto-en-adopcion.jpg',
        characteristics: 'tímido'
    }
];




const Slider = () => {
    const [sliderRef] = useKeenSlider({
        breakpoints: {
            '(min-width: 300px)': {
                slides: { perView: 1, spacing: 12 },
            },
            '(min-width: 600px)': {
                slides: { perView: 2, spacing: 12 },
            },
            '(min-width: 1000px)': {
                slides: { perView: 4, spacing: 12 },
            },
        },



        loop: true,
    },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on('created', () => {
                    slider.container.addEventListener('mouseover', () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener('mouseout', () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on('dragStarted', clearNextTimeout)
                slider.on('animationEnded', nextTimeout)
                slider.on('updated', nextTimeout)
            },
        ]
    )





    return (
        <div className='  mx-4 mt-4'>


            <div ref={sliderRef} className='keen-slider mb-5 container '


            >
                {posts && posts.length > 0
                    ? posts.map((post) => {
                        return (
                            <div key={post.id} >
                                <div className={`card text-bg-dark col-lg-3 post keen-slider__slide ${styles.post}`}>
                                    <img src={post.image} 
                                        className={`card-img ${styles.card_img}`}   alt='...' />
                                    <div className={`card-img-overlay d-flex align-items-end ${styles.card_img_overlay}`}>
                                        <h5 className='align-self-end'>{post.name}<img src='heart-icon.png'height={20}></img><small className='ms-2'> {post.characteristics}</small></h5>
                                    </div>
                                </div>
                               
                            </div>
                        );
                    })
                    : ''}
            </div>

        </div>

    );
};
export default Slider;

