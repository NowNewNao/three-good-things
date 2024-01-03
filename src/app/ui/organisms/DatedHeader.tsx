"use client";
import { Header } from "@/app/ui/atoms/Header";
import { FC } from "react";

type Props = {
	today: string;
};

export const DatedHeader: FC<Props> = ({ today }) => (
	<Header>
		<>{today}</>
	</Header>
);
