"use client";
import { Header } from "@/app/ui/atoms/Header";
import { MonthlyCalendar } from "@/app/ui/atoms/MonthlyCalendar";
import { FC } from "react";

export const DatedHeader: FC = () => (
	<Header>
		<MonthlyCalendar />
	</Header>
);
