import { Header } from "@/app/ui/atoms/Header";
import { MonthlyCalendar } from "@/app/ui/atoms/MonthlyCalendar";
import { AppGlobalHeader } from "@/app/ui/layout/AppGlobalLayout";
import { DatedHeader } from "@/app/ui/organisms/DatedHeader";

export default function Home() {
	return (
		<AppGlobalHeader>
			<DatedHeader />
		</AppGlobalHeader>
	);
}
