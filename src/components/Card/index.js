import React from 'react'
import {FcLike} from "react-icons/fc"
import { FaRegComment } from 'react-icons/fa';

import { article } from '../../dataDummy';

function Card() {

console.log(article);
  return (
    <div className='mt-5 flex justify-between flex-wrap'>
        {article.map((item) => (
            <div className='mt-5 pb-8 rounded-b-md md:w-64 shadow'>
                <div>
                    <img className='w-full rounded-t-md' src="https://img.okezone.com/content/2022/01/30/406/2540115/catat-ini-6-tips-berhemat-uang-selama-traveling-N1vILS5wxd.jpg" alt="" />    
                </div>
                <div className='p-2'>
                    <div className='flex justify-between items-center'>
                            <p className='text-xs text-gray-400'>{item.author} - {item.createdAt}</p>
                            <div className='flex'>
                                <div className='flex mr-2 items-center cursor-pointer'>
                                    <p className='text-[10px] font-semibold text-gray-400'>{item.likes}</p>
                                    <FcLike fontSize={18} />
                                </div>
                                
                                <div className='flex items-center cursor-pointer'>
                                    <p className='text-[10px] font-semibold text-gray-400'>20</p>
                                    <FaRegComment fontSize={18} />
                                </div>
                            </div>
                    </div>
                    <div>
                        <h2 className='mb-2 font-semibold'>{item.title}</h2>
                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis praesentium</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Card