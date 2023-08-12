// import Image from 'next/image'
import React from 'react'
import Work from '../../../utills/work.png'
import Share from '../../../utills/share.png'
import Avatar from '../../../utills/avatar.png'
import Schedule from '../../../utills/schedule.png'
import VerticalDots from '../../../utills/dots.png'

const Cards = ({data}) => {
    return (
        <div className='card'>
            <div className='flex items-start justify-between border-b-2 border-dashed pb-4'>
                <div className='flex justify-start items-center gap-2'>
                    <img src={Work} alt='icon' />
                    <div className='flex flex-col justify-center items-start space-y-1'>
                        <span className='myassessment'>{data?.title}</span>
                        <div className='flex justify-center items-center space-x-2'>
                            <span className='subheading4 font-medium border-r-2 pr-2'>{data.purpose}</span>
                            <img src={Schedule} alt='icon' />
                            <span className='subheading3'>{data?.date}</span>
                        </div>
                    </div>
                </div>
                <img src={VerticalDots} alt='icon' />
            </div>

            <div className='flex items-start justify-between mt-6'>
                <div className='flex items-start justify-center space-x-2'>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='numbercard'>{data?.duration}</span>
                        <span className='headingcard'>Duration</span>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='numbercard'>{data?.questions}</span>
                        <span className='headingcard'>Questions</span>
                    </div>
                </div>
                <div className='flex items-center justify-end space-x-1'>
                    <img src={Share} alt='icon' className='cursor-pointer' />
                    <img src={Avatar} alt='icon' />
                    <span className='numbercard'>+324</span>
                </div>
            </div>


        </div>
    )
}

export default Cards