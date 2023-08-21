
// - components
import Backdrop from './backdrop'
import Text from '../../components/hero/text'
import MovieCarosel from "../../components/hero/movie-carosel"


// - hooks
import useScreenSize from '../../hooks/useScreenSize'

// - third-party
import clsx from 'clsx'

const Hero = () => {

    const { screenSize } = useScreenSize();

    console.log(screenSize[0])

    const heroCss = clsx(
        'w-full h-fit bg-blue-light pt-6 pb-10 px-6 overflow-hidden',
        'sm:h-screen'
    )
    return (
        <>
            <section className={heroCss}>
                <Hero.Backdrop>
                    <Hero.Text />
                </Hero.Backdrop>
            </section>
            <Hero.MovieCarosel />
        </>


    )
}

Hero.Backdrop = Backdrop;
Hero.Text = Text;
Hero.MovieCarosel = MovieCarosel;

export default Hero