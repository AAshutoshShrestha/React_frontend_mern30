import { toast } from "react-toastify";
import { UserChatCard } from "../../components/chat/userChatCard.component"
import { useEffect, useState } from "react";
import { SingleUser } from "./chat.const";


const ChatDisplay = () => {
	const [userList, setUserList] = useState<SingleUser[]>();

	// load all users 
	const loadAllUsers = async () => {
		try {
			const response: SingleUser[] = [
				{
					_id: "123",
					name: "Neil Sims",
					email: "email@windster.com",
					image: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg",
					message: [
						{
							_id: "123123",
							sender: {
								_id: "1234",
								name: "Shanay cruz",
								email: "one@user.com",
								image: "https://placehold.co/600x600",
							},
							reciver: {
								_id: "123",
								name: "Neil Sims",
								email: "email@windster.com",
								image: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg",
							},
							date: new Date(),
							message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit"
						}
					]
				},
				{
					_id: "1234",
					name: "User Two",
					email: "two@user.com",
					image: "https://placehold.co/600x600",
					message: [
						{
							_id: "123123",
							sender: {
								_id: "1234",
								name: "User name",
								email: "name@user.com",
								image: "https://placehold.co/600x600",
							},
							reciver: {
								_id: "123",
								name: "User Two",
								email: "two@user.com",
								image: "https://placehold.co/600x600",
							},
							date: new Date(),
							message: "Hello"
						}
					]
				},
			]

			setUserList(response);
		} catch (exception) {
			toast.error("Error loading user list.")
		}
	}
	useEffect(() => {
		loadAllUsers()
	}, [])

	return (
		<>
			<div className="flex mx-12 my-6">
				<div className="w-1/4">
					{/* chat user list card */}
					{
						userList && userList.map((row: SingleUser, index: number) => (
							<UserChatCard user={row} key={index} />
						))
					}


				</div>
				<div className="w-3/4 overflow-x-auto">
					<div className="flex min-h-screen flex-auto flex-col">
						<div className="flex h-full flex-auto flex-shrink-0 flex-col rounded-2xl bg-gray-50 p-4">
							<div className="grid pb-11">
								<div className="mb-4 flex gap-2.5">
									<img src="https://pagedone.io/asset/uploads/1710412177.png" alt="Shanay image" className="h-11 w-10" />
									<div className="grid">
										<h5 className="pb-1 text-sm font-semibold leading-snug text-gray-900">Shanay cruz</h5>
										<div className="grid w-max">
											<div className="inline-flex items-center justify-start gap-3 rounded-3xl rounded-tl-none bg-amber-100 px-3.5 py-2">
												<h5 className="text-sm font-normal leading-snug text-gray-900">I’m down! Any ideas??</h5>
											</div>
											<div className="mb-2.5 inline-flex items-center justify-end">
												<h6 className="py-1 text-xs font-normal leading-4 text-gray-500">05:14 PM</h6>
											</div>
										</div>
										<div className="grid w-max">
											<div className="inline-flex items-center justify-start gap-3 rounded-3xl rounded-tl-none bg-amber-100 px-3.5 py-2">
												<h5 className="text-sm font-normal leading-snug text-gray-900">Let me know</h5>
											</div>
											<div className="mb-2.5 inline-flex items-center justify-end">
												<h6 className="py-1 text-xs font-normal leading-4 text-gray-500">05:14 PM</h6>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="flex justify-end gap-2.5 pb-40">
								<div className="grid">
									<h5 className="pb-1 text-right text-sm font-semibold leading-snug text-gray-900">You</h5>
									<div className="grid w-max">
										<div className="inline-flex items-center justify-start gap-3 rounded-3xl rounded-tr-none bg-amber-100 px-3.5 py-2">
											<h5 className="text-sm font-normal leading-snug text-gray-900">I’m down! Any ideas??</h5>
										</div>
										<div className="mb-2.5 inline-flex items-center justify-end">
											<h6 className="py-1 text-xs font-normal leading-4 text-gray-500">05:14 PM</h6>
										</div>
									</div>
								</div>
								<img src="https://pagedone.io/asset/uploads/1704091591.png" alt="Hailey image" className="h-11 w-10" />
							</div>

							<div className="inline-flex w-full items-center justify-between gap-2 rounded-3xl border border-gray-200 py-1 pl-3 pr-1">
								<div className="flex items-center gap-2">
									<i className="ri-account-circle-line text-2xl text-amber-500"></i>
									<div className="relative w-full">

										<input type="text" className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 max-h-screen" />
									</div>
								</div>
								<div className="flex items-center gap-2">
									<i className="ri-attachment-2 cursor-pointer text-xl text-amber-500"></i>
									<button className="flex items-center rounded-full bg-amber-600 px-3 py-2 shadow">
										<i className="ri-send-plane-fill text-xl text-white"></i>
										<h3 className="px-2 text-xs font-semibold leading-4 text-white">Send</h3>
									</button>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

		</>
	)
}

export default ChatDisplay