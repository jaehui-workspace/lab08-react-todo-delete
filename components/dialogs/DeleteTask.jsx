import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'

import {cn} from '@/lib/utils/mergeCss'
import { DeleteTaskFrom } from '../forms/DeleteTaskForm'

function DeleteTask({children, className, uid, payload}) {
	return (
		<Dialog className="">
			<DialogTrigger className="bg-white text-neutral-800 border border-neutral-800 w-full py-2.5 rounded-lg mt-3 font-semibold">
				Delete
			</DialogTrigger>
			<DialogContent className="">
				<DialogHeader>
					<DialogTitle>Delete Task</DialogTitle>
					<DeleteTaskFrom uid={uid} payload={payload} />
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export {DeleteTask}
