import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { HomeCard } from '../components/HomeCard'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
		<>
			<img
				src="https://images.pexels.com/photos/3255761/pexels-photo-3255761.jpeg?auto=compress&cs=tinysrgb&w=600"
				alt="#" className="-z-10 absolute object-cover h-full w-full"
			/>
			<div className="w-full ">
				<div className="text-3xl font-bold text-center mt-5">Choose your role...</div>
				<div className="p-2 px-28 flex justify-around items-center relative top-20 ">
					<HomeCard
						Role={"College"}
						Content={
							"Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, blanditiis."
						}
						url={
							"https://img.freepik.com/free-vector/college-students-concept-illustration_114360-13745.jpg?uid=R156288701&ga=GA1.1.1836323769.1721458537&semt=ais_hybrid"
						}
					/>
					<HomeCard
						Role={"Inspector"}
						Content={
							"Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, blanditiis."
						}
						url={
							"https://img.freepik.com/free-vector/product-quality-control-abstract-concept_335657-3107.jpg?uid=R156288701&ga=GA1.1.1836323769.1721458537&semt=ais_hybrid"
						}
					/>
				</div>
			</div>
		</>
	);
}
