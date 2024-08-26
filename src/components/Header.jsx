import { BsSun } from "react-icons/bs";
import { RiMoonClearLine } from "react-icons/ri";
import React from 'react'
import Container from './Container'
import bgLight from '../images/bg-light.jpg'
import bgDark from '../images/bg-dark.jpg'

const Header = ({ localMode, setAllColorMode }) => {


    return (
        <div className='relative flex  justify-center items-center '>
            <img className='absolute top-0  h-[300px] w-[100%] object-cover z-10'
                src={localMode === "light" ? bgLight : bgDark} />
            <Container className="z-50 flex justify-between absolute top-[50px] px-3 py-2 items-center">
                <h1 className="text-[30px] font-semibold text-colorLight">TODO</h1>
                <div className=''>
                    <button
                        onClick={() => setAllColorMode(localMode)}
                        className='text-[30px] w-[35px] h-[35px] flex justify-center items-center rounded-xl   text-white active:scale-95 duration-500'>

                        {localMode === "light" ? <RiMoonClearLine /> : <BsSun />}

                    </button>
                </div>
            </Container>
        </div>
    )
}

export default Header       