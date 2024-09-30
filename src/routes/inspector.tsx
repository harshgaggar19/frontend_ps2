import { createFileRoute } from "@tanstack/react-router";
import { AnimatedModalDemo } from "../components/AnimatedModal";
import { CardSpotlight } from "../components/CardSpotlight";
import { CardSpotlightDemo } from "../components/CardSpotlightDemo";
import { AnimateSharedLayout } from "framer-motion";
import { ModalTrigger } from "../components/Modal";

// import Image from "next/image";
// import { motion } from "framer-motion";
const CheckIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="currentColor"
			className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path
				d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
				fill="currentColor"
				strokeWidth="0"
			/>
		</svg>
	);
};

const Step = ({ title }: { title: string }) => {
	return (
		<li className="flex gap-2 items-start">
			<CheckIcon />
			<p className="text-white">{title}</p>
		</li>
	);
};
export const Route = createFileRoute("/inspector")({
	component: () => (
		<>
			<div className="w-screen h-screen">
				<div className=" absolute w-screen h-screen">
					{/* Background Image */}
					<img
						src="https://images.pexels.com/photos/3255761/pexels-photo-3255761.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="College background"
						className="-z-10 absolute object-cover h-full w-full"
					/>
				</div>
				<div className="w-full h-full px-10">
					<h1 className="text-5xl h-[10vh]  pt-10 pl-12">{`{Inspector Name}`}</h1>

					<div className="flex w-full h-[90vh] justify-center items-center gap-3">
						<CardSpotlight className="h-96 w-96">
							<p className="text-xl font-bold relative z-20 mt-2 text-white">
								See College Reports
							</p>
							<div className="text-neutral-200 mt-4 relative z-20">
								Follow these steps :
								<ul className="list-none  mt-2">
									<Step title="Enter your email address" />
									<Step title="Create a strong password" />
									<Step title="Set up two-factor authentication" />
									<Step title="Verify your identity" />
								</ul>
							</div>
						</CardSpotlight>
						<CardSpotlight className="h-96 w-96">
							<p className="text-xl font-bold relative z-20 mt-2 text-white">
								Check Teacher Docs
							</p>
							<div className="text-neutral-200 mt-4 relative z-20">
								Follow these steps :
								<ul className="list-none  mt-2">
									<Step title="Enter your email address" />
									<Step title="Create a strong password" />
									<Step title="Set up two-factor authentication" />
									<Step title="Verify your identity" />
								</ul>
							</div>
						</CardSpotlight>
						<CardSpotlight className="h-96 w-96">
							<p className="text-xl font-bold relative z-20 mt-2 text-white">
								Check Photos
							</p>
							<div className="text-neutral-200 mt-4 relative z-20">
								Follow these steps :
								<ul className="list-none  mt-2">
									<Step title="Enter your email address" />
									<Step title="Create a strong password" />
									<Step title="Set up two-factor authentication" />
									<Step title="Verify your identity" />
								</ul>
							</div>
						</CardSpotlight>

						<CardSpotlight className="h-96 w-96">
							<p className="text-xl font-bold relative z-20 mt-2 text-white">
								Check College Footage
							</p>
							<div className="text-neutral-200 mt-4 relative z-20">
								Follow these steps :
								<ul className="list-none  mt-2">
									<Step title="Enter your email address" />
									<Step title="Create a strong password" />
									<Step title="Set up two-factor authentication" />
									<Step title="Verify your identity" />
								</ul>
							</div>
						</CardSpotlight>
						<CardSpotlight className="h-96 w-96">
							<p className="text-xl font-bold relative z-20 mt-2 text-white">
								Upload Photos
							</p>
							<div className="text-neutral-200 mt-4 relative z-20">
								Follow these steps :
								<ul className="list-none  mt-2">
									<Step title="Enter your email address" />
									<Step title="Create a strong password" />
									<Step title="Set up two-factor authentication" />
									<Step title="Verify your identity" />
								</ul>
							</div>
							<AnimatedModalDemo />
						</CardSpotlight>
					</div>
				</div>
			</div>
		</>
	),
});
