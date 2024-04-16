import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";



export const Cards = ({ reviews }) => {

    function leftSideIndex () {
        
    }

    function rightSideIndex () {

    }

    return (
    
            <>
                <CardHeader className=" justify-start block mt-12">
                    <CardTitle>{reviews.name}</CardTitle>
                    <p className="text-purple-300	 scroll-m-20  font-semibold tracking-tight">Job: {reviews.job}</p>
                </CardHeader>
                <CardContent className="mt-2 ">
                    <FaQuoteLeft className="text-purple-400 mx-auto mb-4" />
                    {reviews.text}
                    <FaQuoteRight className="text-purple-400 mx-auto mt-4" />
                </CardContent>


        </>
    )
}
