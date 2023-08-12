
import React from 'react'
import AddIcon from '../../../utills/add.png'
import Cards from './Cards'

const MyAssessment = ({ data, setOpenDialog }) => {
    const handleAddAssessment = () => setOpenDialog(prev=>!prev)
    return (
        <div className='p-1 sm:p-2 lg:p-6' style={{ width: '90vw' }}>
            <div className='subheading md:subheading1'>My Assessment</div>
            <div className='flex flex-wrap justify-start items-center gap-2  md:gap-6'>
                <div onClick={handleAddAssessment} className='addNew space-y-4 '>
                    <img src={AddIcon} alt='icon' />
                    <span className='subheading'>New Assessment</span>
                    <span className='miniHeading1'>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</span>
                </div>
                {
                    data?.length > 0 && data?.map((item, index) => <Cards key={index} data={item} />)
                }
            </div>
        </div>
    )
}

export default MyAssessment