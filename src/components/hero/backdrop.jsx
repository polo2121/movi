
// - assets 
import RoundedLineTop from "../../assets/svgs/hero-line-1.svg"
import RoundedLineBottom from "../../assets/svgs/hero-line-2.svg"


// - third-party
import clsx from 'clsx'

const Backdrop = ({ children }) => {

    const backdropCss = clsx(
        'bg-white relative flex flex-col rounded-[1.9rem] items-center h-fit py-20 px-10',
        'md:w-full md:flex-row',
        'sm:h-fit sm:px-6 sm:py-20 sm:gap-20',
    )

    return (
        <div className={backdropCss}>
            <img className="absolute left-[-0.4rem] top-[-0.3rem] " src={RoundedLineTop} alt="rounded-line-top" />
            {children}
            <img className="absolute bottom-0 right-0" src={RoundedLineBottom} alt="rounded-line-bottom" />
        </div>
    )
}

export default Backdrop