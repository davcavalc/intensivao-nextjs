import Head from "next/head";
import Image from "next/image";
import Avatar from "../public/images/avatar-michelle.jpg";
import Drawers from "../public/images/drawers.jpg";
export default function Home() {
	return (
		<>
			<div className="px-8 mt-10">
				<Head>
					<title>Article Preview Component</title>
					<link rel="icon" href="../public/favicon.ico" />
				</Head>
				<div className="mx-auto lg:w-3/5 lg:flex lg:flex-row lg:h-auto">
					<Image
						className="rounded-tr-md rounded-tl-md h-48 w-full lg:h-auto lg:w-2/5 lg:rounded-bl-md lg:rounded-tr-none"
						src={Drawers}
						alt="drawer-picture"
					/>
					<div className="bg-white p-8 rounded-bl-md rounded-br-md lg:rounded-bl-none lg:rounded-tr-md">
						<h2 className="font-semibold text-justify text-gray-700">
							Shift overall look and feel by adding these wonderfull touches to furniture in your home
						</h2>
						<p className="text-sm text-gray-600 mt-4 text-justify">
							Even been in a room abd felt like something was missing ? Perhaps it felt slightly bare and
							uninviting. I have got some simple tips to help you make any room feel complete.
						</p>
						<div className="flex items-center mt-8">
							<div className="flex items-center">
								{/* <Image className="h-10 w-10 rounded-full" src={Avatar} alt="avatar-michelle" /> */}
								<Image className="h-10 w-10 rounded-full" src={Avatar} alt="" width={100} height={100} />
								<div className="ml-4 ">
									<p className="text-sm font-semibold text-gray-800">Michelle Appletown</p>
									<p className="text-gray-600 text-sm">28 June 2020</p>
								</div>
							</div>
						</div>
						<div className="w-8 h-8 ml-auto bg-gray-200 rounded-full flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
								<path
									fill="#6E8098"
									d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
