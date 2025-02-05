import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image"
import React from "react";

const CardReviewWorker = () => {

    const [reviewShow, setReviewShow] = React.useState<number | null>(null)

    const handleShow = (id: number) =>{
        setReviewShow(reviewShow === id ? null : id)

    }

    const Review = [
        {id: 1, name: "Sarah Jane", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor sodales ex et imperdiet. Donec fringilla risus sit amet tortor scelerisque maximus.", postition: "Lead Programmer", image: "https://source.unsplash.com/random/100x100?woman"},
        {id: 2, name: "Adam John", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor sodales ex et imperdiet. Donec fringilla risus sit amet tortor scelerisque maximus.", postition: "Mobile Development", image: "https://source.unsplash.com/random/100x100?man"},
        {id: 3, name: "John Doe", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor sodales ex et imperdiet. Donec fringilla risus sit amet tortor scelerisque maximus.", postition: "Product Manager", image: "https://source.unsplash.com/random/100x100?businessman"},
        {id: 4, name: "Boby Bryan", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor sodales ex et imperdiet. Donec fringilla risus sit amet tortor scelerisque maximus.", postition: "UI UX Designer", image: "https://source.unsplash.com/random/100x100?designer"},
        {id: 5, name: "Davies Cody", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor sodales ex et imperdiet. Donec fringilla risus sit amet tortor scelerisque maximus.", postition: "Ceo", image: "https://source.unsplash.com/random/100x100?executive"},
    ];

    return (
        <div className=" flex flex-col gap-4">
            {Review.map((item)=> (
                <article key={item.id} className="w-full p-4 rounded-md bg-gray-100 transition-all duration-300 ease-linear">
                    <div className="flex items-center space-x-4">
                        <Avatar className="rounded-md">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col items-start">
                            <h3 className="text-xs font-semibold">{item.name}</h3>
                            <span className="text-xs text-gray-400">{item.postition}</span>
                        </div>
                    </div>
                    <div className="mt-3">
                        <p className={` ${reviewShow === item.id ? 'line-clamp-none opacity-100' : 'line-clamp-3 opacity-100'} text-[10px] text-gray-500 transition-all duration-300 ease-in-out`}>{item.review}</p>
                        <div className="flex justify-end">
                        <button onClick={() => handleShow(item.id)} className="text-[10px] font-semibold text-blue-500  mt-4">{reviewShow === item.id ? 'Show less' : 'Show more'}</button>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default CardReviewWorker