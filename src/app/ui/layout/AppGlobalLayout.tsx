/* width and fixed footer */
"use client";

import { FC } from "react";

type Props = {
	children: React.ReactNode;
};

export const AppGlobalHeader: FC<Props> = ({ children }) => (
	<>
		<div className="w-full md:max-w-[640px] mx-auto">{children}</div>
		{/* <Footer /> */}
	</>
);
