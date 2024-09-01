import { ThemeChange } from '@/app/features/theme-change'
import { Button } from '@/components/ui/button'
import { Bell, Menu, Search } from 'lucide-react'

const Header = () => {
	return (
		<header className='flex gap-2 items-center justify-between my-6'>
			<div>
				<Button size='icon' variant='ghost' className='rounded-full'>
					<Menu />
				</Button>
			</div>
			<div className='flex gap-2 items-center'>
				<Button size='icon' variant='ghost' className='rounded-full'>
					<Search />
				</Button>
				<Button size='icon' variant='ghost' className='rounded-full'>
					<Bell />
				</Button>
				<ThemeChange />
			</div>
		</header>
	)
}

export default Header
