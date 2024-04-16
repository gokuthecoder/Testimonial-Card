import React, { useState } from 'react'
import { Cards } from './Cards'
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import { Card, CardFooter } from '@/components/ui/card';
import { Button } from "@/components/ui/button"


export const Testimonial = (props) => {

    const [Index, setIndex] = useState(0)
    const reviews = props.reviews

    function leftSideIndex() {
        if (Index - 1 <= 0) {
            setIndex(reviews.length - 1)
        } else {
            setIndex(Index - 1)
        }
    }

    function rightSideIndex() {
        if (Index + 1 >= reviews.length - 1) {
            setIndex(0)
        } else {
            setIndex(Index + 1)
        }
    }

    function randomSlide(){
        setIndex(Math.floor(Math.random()*reviews.length))
    }

    return (
        <>
            <div className="relative lg:w-[800px] lg:m-auto">
                <Card className="">
                    <div className="bg-slate-950 absolute top-[-32px] left-8 border rounded-full w-[100px] h-[100px]  ">
                        <img src={reviews[Index].image} className="border relative top-[2px] left-[-2px] rounded-full object-cover w-[100px] h-[100px]" />
                    </div>
                    <Cards reviews={reviews[Index]} />
                    <CardFooter className="flex justify-center mt-3 gap-4">

                        <button
                            onClick={leftSideIndex}
                        >
                            <FaLessThan className="text-purple-300" />
                        </button>

                        <button
                            onClick={rightSideIndex}
                        >
                            <FaGreaterThan className="text-purple-300" />
                        </button>
                    </CardFooter>
                        <div className='my-3'>
                            <Button variant="outline" className="bg-purple-700 text-white hover:bg-purple-500 hover:transition hover:ease-in-out hover:delay-100"
                            onClick={randomSlide}
                            >Surprise</Button>
                        </div>
                </Card>
            </div>
        </>
    )
}

