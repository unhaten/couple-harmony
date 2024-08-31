import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable'
import { Skeleton } from '@/components/ui/skeleton'
import { toast } from 'sonner'

export default function Home() {
	toast('Event has been created.')

	return (
		<div className='flex min-h-screen flex-col items-center justify-between p-24'>
			<div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
				<Avatar>
					<AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<ResizablePanelGroup direction='horizontal'>
					<ResizablePanel>One</ResizablePanel>
					<ResizableHandle />
					<ResizablePanel>Two</ResizablePanel>
				</ResizablePanelGroup>
				<div className='flex flex-col space-y-3'>
					<Skeleton className='h-[125px] w-[250px] rounded-xl' />
					<div className='space-y-2'>
						<Skeleton className='h-4 w-[250px]' />
						<Skeleton className='h-4 w-[200px]' />
					</div>
				</div>
			</div>
		</div>
	)
}
