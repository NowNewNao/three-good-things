"use client";

import { FC } from "react";

type Props = {
	children: React.ReactNode;
};

export const Header: FC<Props> = ({ children }) => (
	<div className="flex justify-center items-center w-full h-8 md:h-16 border-2">
		{children}
	</div>
);
