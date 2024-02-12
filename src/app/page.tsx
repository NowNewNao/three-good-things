"use client";

import { AppGlobalHeader } from "@/app/ui/layout/AppGlobalLayout";
import { DatedHeader } from "@/app/ui/organisms/DatedHeader";
import axios from "axios";

export default function Home() {
	const sendContent = async () => {
		await axios.post("./api/contents");
	};
	
	return (
		<AppGlobalHeader>
			<DatedHeader />
			<button onClick={() => sendContent()}>button</button>
		</AppGlobalHeader>
	);
}
