
import React, { useEffect } from 'react'
import TA from '../../../utills/ta.png'
import TP from '../../../utills/tp.png'
import C from '../../../utills/c.png'
import CS from '../../../utills/cs.png'
import Search from '../../../utills/search.png'
import BarChart from '../../../utills/filter.png'
import Filter from '../../../utills/bar_chart.png'

const Overview = ({ data }) => {
    const [show, setShow] = React.useState(true)
    const [isScreenWidthExceeded, setIsScreenWidthExceeded] = React.useState(true);

    // Handle button click
    const handleClick = () => {
        setShow(prev => !prev)
    }

    // Check screen width on mount and window resize
    useEffect(() => {
        const handleResize = () => {
            setIsScreenWidthExceeded(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Check initial screen width

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // updating show state based on screen size
    useEffect(() => {
        if (!isScreenWidthExceeded) {
            setShow(false);
        } else{
            setShow(true);
        }
    }, [isScreenWidthExceeded]);

    return (
        <div className='p-1 sm:p-2 lg:p-6' style={{ width: '89vw' }}>
            <div className='flex justify-between items-center'>
                <div className='subheading md:subheading1 my-4'>Assessment Overview</div>
                <div className='flex justify-center items-center md:hidden'>
                    <img src={Search} alt='ta' />
                    <img src={BarChart} alt='ta' />
                    <img src={Filter} alt='ta' onClick={handleClick} />
                </div>
            </div>

            {
                show && (
                    <div className='flex flex-wrap justify-start items-center border-2  rounded-2xl py-2 xl:py-0 px-2 md:px-6 space-y-2 md:space-y-0 space-x-1 md:space-x-0 w-fit h-fit'>
                <div className='border-2 xl:border-0 xl:border-r-2 border-r-2 rounded-lg xl:rounded-none pl-2 py-2 md:py-4 w-40'>
                    <span className='subheading1 pr-2 md:pr-6 ' >Total Assessment</span>
                    <div className='flex items-center gap-4 my-4'>
                        <img src={TA} alt='ta' />
                        <span className='number md:number'>{data?.length > 0 ? data.length : 0}</span>
                    </div>
                </div>
                <div className='border-2 xl:border-0 xl:border-r-2 md:border-r-2 rounded-lg xl:rounded-none py-2 md:py-4'>
                <span className='subheading1 px-2 md:px-6'>Candidates</span>
                    <div className='flex items-center gap-5 my-4 px-4 md:px-6 w-[320px]'>
                        <img src={C} alt='ta' />
                        <span className='border-r-2 pr-4'>
                            <div> <span className='numbersm md:number'>11,145</span> <span className='numberMini'>+89</span> </div>
                            <div className='miniHeading'>Total Candidate</div>
                        </span>
                        <span>
                            <div> <span className='numbersm md:number '>1,14</span> <span className='numberMini'>+89</span> </div>
                            <div className='miniHeading'>Who Attempted</div>
                        </span>
                    </div>
                   
                </div>
                <div className='border-2 xl:border-0 xl:border-r-2 md:border-r-2 rounded-lg xl:rounded-none py-2 md:py-4'>
                
                <span className='subheading1 px-0 sm:px-2 md:px-6'>Candidates Source</span>
                    <div className='flex items-center gap-5 my-4 px-0 md:px-6 w-[415px]'>
                        <img src={CS} alt='ta' />
                        <span className='border-r-2 pr-0 sm:pr-4'>
                            <div> <span className='numbersm md:number'>11,000</span> <span className='numberMini'>+89</span> </div>
                            <div className='miniHeading'>Email</div>
                        </span>
                        <span className='border-r-2 pr-0 sm:pr-4'>
                            <div> <span className='numbersm md:number'>145</span> <span className='numberMini'>+89</span> </div>
                            <div className='miniHeading'>Social Share</div>
                        </span>
                        <span>
                            <div> <span className='numbersm md:number'>175</span> <span className='numberMini'>+89</span> </div>
                            <div className='miniHeading'>Unique Links</div>
                        </span>
                    </div>
                    
                </div>
                <div className='border-2 xl:border-0 rounded-lg xl:rounded-none pl-2 py-2 md:py-4 w-52 '>
                <span className='subheading1 px-4 md:px-6'>Total Purpose</span>
                    <div className='flex items-center   gap-5 my-4 px-4 md:px-6'>
                        <img src={TP} alt='ta' />
                        <span className='numbersm md:number'>11</span>
                    </div>
                </div>

            </div>
                )
            }

            

        </div>
    )
}

export default Overview