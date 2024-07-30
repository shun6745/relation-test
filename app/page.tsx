import ViewUsers from "./components/ViewUser";

ViewUsers;

export default function Home() {
	return (
		<div className="h-screen justify-center items-center">
			<div className="flex flex-col items-center mt-2 mb-0 scroll-py-5"></div>
			<ViewUsers />
		</div>
	);
}
