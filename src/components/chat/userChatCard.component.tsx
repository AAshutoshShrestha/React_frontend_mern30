import { SingleUser } from "../../pages/chat/chat.const";


export const UserChatCard = ({user}:{user:SingleUser}) => {
	return (
		<>
			<div className="px-4 py-3 bg-amber-100 hover:bg-gray-200 active:bg-amber-100">
				<div className="flex items-center space-x-4">
					<div className="shrink-0">
						<img src={user.image} alt="" className="h-12	 w-12 rounded-full" />

					</div>
					<div className="min-w-0 flex-1">
						<p className="truncate text-sm font-medium text-gray-900 dark:text-white">{user.name}</p>
						<p className="truncate text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
						<p className="truncate text-sm text-gray-500 dark:text-gray-400">{user?.message[0].message}</p>
					</div>
				</div>
			</div>
		</>
	)
}