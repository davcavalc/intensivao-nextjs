import Head from "next/head";
import Image from "next/image";
import Drawers from "../public/images/drawers.jpg";
export default function Home() {
	return (
		<>
			<div className="px-8 mt-10">
				<Head>
					<title>Article Preview Component</title>
					<link rel="icon" href="../public/favicon.ico" />
				</Head>
				<div className="mx-auto">
					<Image src={Drawers} alt="" />
				</div>
			</div>
		</>
	);
}
