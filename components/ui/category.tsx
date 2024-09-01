import clsx from 'clsx'
import { Button } from './button'

interface CategoryProps {
	name: string
	handleCategoryClick(name: string): void
	selectedCategory: string
}

const Category = ({
	name,
	selectedCategory,
	handleCategoryClick,
}: CategoryProps) => {
	return (
		<li>
			<Button
				asChild
				variant={selectedCategory === name ? 'default' : 'outline'}
				className={clsx(
					`text-center border p-2 min-w-24 rounded-xl`,
					selectedCategory === 'name' &&
						`bg-primary text-background dark:text-foreground`
				)}
				onClick={() => handleCategoryClick(name)}
			>
				<h4 className='text-base font-medium capitalize'>{name}</h4>
			</Button>
		</li>
	)
}

export default Category
